"use client";

import { noteMeta, type NoteId } from "@/content";
import { useLanguage } from "@/i18n/LanguageProvider";

import { noteNumber, useNotes } from "./NotesProvider";

export function NoteMarker({ id, tone }: { id: NoteId; tone?: "inverse" }) {
  const { t } = useLanguage();
  const { activeId, toggle } = useNotes();
  const number = noteNumber(id);

  return (
    <button
      type="button"
      className="note-marker"
      data-segment={noteMeta[id].segment}
      data-tone={tone}
      aria-haspopup="dialog"
      aria-expanded={activeId === id}
      aria-label={`${t.notesUi.open} ${number}: ${t.notes[id].title}`}
      onClick={(event) => toggle(id, event.currentTarget)}
    >
      {number}
    </button>
  );
}
