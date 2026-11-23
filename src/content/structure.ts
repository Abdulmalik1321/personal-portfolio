import type {
  EntryId,
  LaneId,
  NoteId,
  ProductId,
  SectionId,
  SegmentId,
  StatusKind,
  TimelineId,
} from "./types";

/** Content is stated as at mid-November 2026. */
export const AS_OF = 2026 + 10.5 / 12;
export const AXIS = { start: 2018, end: 2027 } as const;

export const sectionOrder: { id: SectionId; number: string }[] = [
  { id: "figures", number: "02" },
  { id: "expertise", number: "03" },
  { id: "products", number: "04" },
  { id: "experience", number: "05" },
  { id: "credentials", number: "06" },
  { id: "contact", number: "07" },
];

export const laneOrder: LaneId[] = ["finance", "engineering", "ai"];
export const segmentOrder: SegmentId[] = ["finance", "engineering", "ai", "delivery"];

export type TimelineShape = {
  id: TimelineId;
  lane: LaneId;
  kind: "work" | "study" | "milestone";
  start: number;
  end?: number | "now";
  /** Row inside the lane; rows are assigned so labels never collide at >= 1024px. */
  row: number;
  align?: "start" | "end";
};

/** Positions are approximate to the month; visible labels carry the exact periods. */
export const timeline: TimelineShape[] = [
  { id: "degree", lane: "finance", kind: "study", start: 2018.7, end: 2022.5, row: 0 },
  { id: "ypp", lane: "finance", kind: "study", start: 2024.5, end: 2024.75, row: 0 },
  { id: "vat", lane: "finance", kind: "milestone", start: 2025.95, row: 0 },
  { id: "mayyar", lane: "finance", kind: "work", start: 2021.92, end: 2022.95, row: 1 },
  { id: "momah", lane: "finance", kind: "work", start: 2025.0, end: "now", row: 1 },
  { id: "almanara", lane: "finance", kind: "work", start: 2024.5, end: 2024.9, row: 2 },
  { id: "automation", lane: "engineering", kind: "milestone", start: 2022.4, row: 0 },
  { id: "sda", lane: "engineering", kind: "study", start: 2024.58, end: 2024.9, row: 0 },
  { id: "shihab", lane: "engineering", kind: "work", start: 2026.7, end: "now", row: 0, align: "end" },
  { id: "pioneers", lane: "engineering", kind: "work", start: 2024.0, end: "now", row: 1 },
  { id: "postwave", lane: "ai", kind: "work", start: 2025.94, end: "now", row: 0 },
  { id: "moeen", lane: "ai", kind: "work", start: 2026.35, end: "now", row: 1 },
  { id: "aiInitiatives", lane: "ai", kind: "milestone", start: AS_OF, row: 2, align: "end" },
];

/** Numbering follows first appearance on the page. */
export const noteOrder: NoteId[] = [
  "sar50k",
  "suppliers",
  "changeRequests",
  "products",
  "bootcamp",
  "ts410",
  "uat",
  "aiInitiatives",
  "automation",
];

export const noteMeta: Record<NoteId, { segment: SegmentId; target: string }> = {
  sar50k: { segment: "finance", target: "exp-mayyar" },
  suppliers: { segment: "finance", target: "exp-mayyar" },
  changeRequests: { segment: "delivery", target: "exp-momah" },
  products: { segment: "engineering", target: "products" },
  bootcamp: { segment: "engineering", target: "credentials" },
  ts410: { segment: "finance", target: "credentials" },
  uat: { segment: "finance", target: "exp-momah" },
  aiInitiatives: { segment: "ai", target: "exp-momah" },
  automation: { segment: "engineering", target: "exp-mayyar" },
};

export const productOrder: ProductId[] = ["shihab", "postwave", "moeen"];

export const productMeta: Record<
  ProductId,
  { name: string; altName?: string; number: string; status: StatusKind; segments: SegmentId[] }
> = {
  shihab: { name: "Shihab", altName: "شهاب", number: "4.1", status: "pilot", segments: ["engineering", "finance"] },
  postwave: { name: "PostWave.ai", number: "4.2", status: "live", segments: ["ai", "engineering"] },
  moeen: { name: "Moeen.ai", altName: "معين", number: "4.3", status: "prelaunch", segments: ["ai", "engineering"] },
};

export const earlierBuild = {
  name: "ElectroNex",
  number: "4.4",
  year: "2024",
  url: "https://electronex.vercel.app/",
};

export const entryOrder: EntryId[] = ["momah", "pioneers", "almanara", "mayyar"];

export const entryMeta: Record<EntryId, { segments: SegmentId[] }> = {
  momah: { segments: ["finance", "delivery", "ai"] },
  pioneers: { segments: ["engineering", "ai", "delivery"] },
  almanara: { segments: ["finance", "delivery"] },
  mayyar: { segments: ["finance", "engineering"] },
};

export const contactLinks = {
  site: "https://abdulmalik.al-masud.com",
  email: "abdulmalik@al-masud.com",
  phoneHref: "tel:+966538495575",
  phoneDisplay: "+966 53 849 5575",
  whatsapp: "https://wa.me/966538495575",
  linkedin: "https://www.linkedin.com/in/abdulmalik-almasud/",
  linkedinDisplay: "in/abdulmalik-almasud",
  github: "https://github.com/Abdulmalik1321",
  githubDisplay: "Abdulmalik1321",
  cv: "/Abdulmalik_Almasud_CV.pdf",
};
