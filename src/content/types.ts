export type Lang = "en" | "ar";

export type SegmentId = "finance" | "engineering" | "ai" | "delivery";
export type LaneId = Exclude<SegmentId, "delivery">;

export type SectionId =
  | "figures"
  | "expertise"
  | "products"
  | "experience"
  | "credentials"
  | "contact";

export type NoteId =
  | "sar50k"
  | "suppliers"
  | "changeRequests"
  | "products"
  | "bootcamp"
  | "ts410"
  | "uat"
  | "aiInitiatives"
  | "automation";

export type TimelineId =
  | "degree"
  | "mayyar"
  | "ypp"
  | "almanara"
  | "momah"
  | "vat"
  | "automation"
  | "sda"
  | "pioneers"
  | "shihab"
  | "postwave"
  | "moeen"
  | "aiInitiatives";

export type ProductId = "shihab" | "postwave" | "moeen";
export type EntryId = "momah" | "pioneers" | "almanara" | "mayyar";
export type StatusKind = "live" | "pilot" | "prelaunch";
export type SystemLayer = "users" | "app" | "services" | "external";

export type Line = { text: string; note?: NoteId };
export type SystemNode = { name: string; detail: string; ai?: boolean };
export type Credential = {
  name: string;
  org?: string;
  detail?: string;
  description?: string;
  note?: NoteId;
};

export type Content = {
  nav: {
    contents: string;
    skip: string;
    switchLanguage: string;
    switchLanguageLabel: string;
    cv: string;
    sections: Record<SectionId, string>;
  };
  cover: {
    kicker: string;
    location: string;
    name: string;
    otherName: string;
    headline: string;
    disciplines: { label: string; segment: SegmentId }[];
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  chart: {
    title: string;
    asAt: string;
    now: string;
    legend: { work: string; study: string; milestone: string; now: string };
    lanes: Record<LaneId, string>;
    items: Record<TimelineId, { label: string; period: string }>;
  };
  segmentNames: Record<SegmentId, string>;
  notesUi: { note: string; close: string; goTo: string; source: string; open: string };
  notes: Record<NoteId, { title: string; body: string; source: string }>;
  figures: {
    title: string;
    intro: string;
    lead: { prefix?: string; value: string; suffix?: string; label: string; context: string };
    items: { note: NoteId; value: string; label: string }[];
  };
  expertise: {
    title: string;
    intro: string;
    toolsLabel: string;
    segments: Record<SegmentId, { statement: string; items: Line[]; tools: string }>;
    methodTitle: string;
    method: string;
  };
  products: {
    title: string;
    intro: string;
    labels: {
      status: string;
      role: string;
      system: string;
      aiLegend: string;
      built: string;
      notBuilt: string;
      layers: Record<SystemLayer, string>;
    };
    items: Record<
      ProductId,
      {
        tagline: string;
        status: string;
        summary: string;
        role: string[];
        system: Record<SystemLayer, SystemNode[]>;
        built: string[];
        notBuilt: string[];
      }
    >;
    earlier: { kicker: string; description: string; linkLabel: string };
  };
  experience: {
    title: string;
    intro: string;
    columns: { period: string; organisation: string; contributions: string };
    segmentsLabel: string;
    entries: Record<
      EntryId,
      { org: string; role: string; period: string; context: string; items: Line[] }
    >;
  };
  credentials: {
    title: string;
    intro: string;
    groups: {
      education: { title: string; items: Credential[] };
      languages: { title: string; items: Credential[] };
      development: { title: string; items: Credential[] };
      certifications: { title: string; items: Credential[] };
    };
  };
  contact: {
    title: string;
    intro: string;
    lead: string;
    emailLabel: string;
    rows: {
      phone: string;
      whatsapp: { label: string; value: string };
      linkedin: string;
      github: string;
      cv: { label: string; value: string };
      location: { label: string; value: string };
    };
  };
  footer: { rights: string; backToTop: string };
};
