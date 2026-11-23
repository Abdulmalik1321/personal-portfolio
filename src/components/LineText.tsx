import type { Line } from "@/content";

import { NoteMarker } from "./notes/NoteMarker";

export function LineText({ line }: { line: Line }) {
  return (
    <>
      {line.text}
      {line.note ? <NoteMarker id={line.note} /> : null}
    </>
  );
}
