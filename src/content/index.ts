import { ar } from "./ar";
import { en } from "./en";
import type { Content, Lang } from "./types";

export const content: Record<Lang, Content> = { en, ar };

export * from "./structure";
export * from "./types";
