import type { SegmentId } from "@/content";
import { cn } from "@/lib/utils";

export const segmentFill: Record<SegmentId, string> = {
  finance: "bg-finance",
  engineering: "bg-eng",
  ai: "bg-ai",
  delivery: "bg-ink",
};

export const segmentBorder: Record<SegmentId, string> = {
  finance: "border-finance",
  engineering: "border-eng",
  ai: "border-ai",
  delivery: "border-ink",
};

export function Swatch({ segment, className }: { segment: SegmentId; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-2.5 shrink-0", segmentFill[segment], className)}
    />
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="1" y="3" width="13" height="5" fill="#0B7A53" />
      <rect x="5" y="9.5" width="18" height="5" fill="#2848D6" />
      <rect x="11" y="16" width="12" height="5" fill="#F2A71B" />
    </svg>
  );
}

export function SectionHeader({
  id,
  number,
  title,
  intro,
  tone = "default",
}: {
  id: string;
  number: string;
  title: string;
  intro?: string;
  tone?: "default" | "inverse" | "accent";
}) {
  return (
    <header
      className={cn(
        "mb-12 grid gap-4 border-t-2 pt-5 lg:mb-16 lg:grid-cols-12 lg:gap-6",
        tone === "inverse" ? "border-white" : "border-ink",
      )}
    >
      <p
        className={cn(
          "tabular text-sm font-semibold lg:col-span-2",
          tone === "default" ? "text-ink-2" : tone === "inverse" ? "text-white" : "text-ink",
        )}
      >
        {number}
      </p>
      <h2 id={id} className="section-title lg:col-span-6">
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-xl text-[1.05rem] lg:col-span-4",
            tone === "default" ? "text-ink-2" : tone === "inverse" ? "text-white" : "text-ink",
          )}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}
