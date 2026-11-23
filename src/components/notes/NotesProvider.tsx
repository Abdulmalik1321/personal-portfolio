"use client";

import { ArrowRight, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { noteMeta, noteOrder, type NoteId } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type NotesContextValue = {
  activeId: NoteId | null;
  toggle: (id: NoteId, trigger: HTMLElement) => void;
};

const NotesContext = createContext<NotesContextValue | undefined>(undefined);

export function noteNumber(id: NoteId) {
  return noteOrder.indexOf(id) + 1;
}

const underlay = {
  finance: "bg-finance",
  engineering: "bg-eng",
  ai: "bg-ai",
  delivery: "bg-ink",
} as const;

const numberInk = {
  finance: "text-finance",
  engineering: "text-eng",
  ai: "text-ai-deep",
  delivery: "text-ink",
} as const;

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<NoteId | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const toggle = useCallback((id: NoteId, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActiveId((current) => (current === id ? null : id));
  }, []);

  const close = useCallback((restoreFocus: boolean) => {
    setActiveId(null);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  const goTo = useCallback((targetId: string) => {
    setActiveId(null);
    const target = document.getElementById(targetId);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
    target.removeAttribute("data-flash");
    void target.offsetWidth;
    target.setAttribute("data-flash", "");
    window.setTimeout(() => target.removeAttribute("data-flash"), 2000);
  }, []);

  const value = useMemo(() => ({ activeId, toggle }), [activeId, toggle]);

  return (
    <NotesContext.Provider value={value}>
      {children}
      {activeId ? <NoteSheet key={activeId} id={activeId} onClose={close} onGoTo={goTo} /> : null}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}

function NoteSheet({
  id,
  onClose,
  onGoTo,
}: {
  id: NoteId;
  onClose: (restoreFocus: boolean) => void;
  onGoTo: (targetId: string) => void;
}) {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const meta = noteMeta[id];
  const note = t.notes[id];

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose(true);
    }
    function onPointer(event: PointerEvent) {
      const target = event.target as Element | null;
      if (!target) return;
      if (sheetRef.current?.contains(target) || target.closest(".note-marker")) return;
      onClose(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-5 sm:end-5 sm:w-[25.5rem]">
      <div
        aria-hidden="true"
        className={cn("note-under absolute inset-0 border-[1.5px] border-ink", underlay[meta.segment])}
      />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="note-sheet-title"
        className="note-sheet relative border-[1.5px] border-ink bg-white px-5 pb-5 pt-4"
      >
        <div className="flex items-center justify-between gap-4">
          <p className={cn("tabular text-sm font-semibold", numberInk[meta.segment])}>
            {t.notesUi.note} {noteNumber(id)}
          </p>
          <button
            type="button"
            onClick={() => onClose(true)}
            aria-label={t.notesUi.close}
            className="-me-2.5 grid size-10 place-items-center transition-colors hover:bg-stock"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <h2
          id="note-sheet-title"
          ref={headingRef}
          tabIndex={-1}
          className="wide text-[1.35rem] font-bold leading-tight"
        >
          {note.title}
        </h2>
        <p className="mt-3 text-[1rem] leading-relaxed">{note.body}</p>
        <p className="mt-4 border-t border-rule pt-3 text-sm text-ink-2">
          <span className="font-semibold text-ink">{t.notesUi.source}: </span>
          {note.source}
        </p>
        <button
          type="button"
          onClick={() => onGoTo(meta.target)}
          className="mt-4 inline-flex min-h-10 items-center gap-2 text-[0.95rem] font-semibold underline decoration-[1.5px] underline-offset-4 hover:decoration-[3px]"
        >
          {t.notesUi.goTo}
          <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
