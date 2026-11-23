import { ImageResponse } from "next/og";

import { AS_OF, AXIS, content, laneOrder, timeline, type LaneId } from "@/content";

export const alt = "Abdulmalik Almasud: Finance & AI Transformation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors: Record<LaneId, string> = { finance: "#0B7A53", engineering: "#2848D6", ai: "#F2A71B" };
const span = AXIS.end - AXIS.start;

const segments = laneOrder.map((lane) => {
  const first = Math.min(...timeline.filter((item) => item.lane === lane).map((item) => item.start));
  return {
    label: content.en.chart.lanes[lane],
    color: colors[lane],
    start: ((first - AXIS.start) / span) * 100,
    width: ((AS_OF - first) / span) * 100,
  };
});

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          color: "#12151C",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "3px solid #12151C",
            paddingBottom: 14,
            fontSize: 24,
          }}
        >
          <span>Career report, 2018 – 2026</span>
          <span style={{ color: "#454C5A" }}>abdulmalik.al-masud.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 44 }}>
          <span style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Abdulmalik Almasud</span>
          <span style={{ fontSize: 46, fontWeight: 600, marginTop: 22 }}>Finance & AI Transformation</span>
          <span style={{ fontSize: 26, color: "#454C5A", marginTop: 14 }}>
            SAP S/4HANA FI/CO · Oracle ERP · Full-stack development · Applied AI
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", gap: 12 }}>
          {segments.map((segment) => (
            <div key={segment.label} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ width: 210, fontSize: 20, fontWeight: 600, color: "#454C5A" }}>{segment.label}</span>
              <div style={{ display: "flex", flex: 1, height: 18, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: `${segment.start}%`,
                    width: `${segment.width}%`,
                    height: 18,
                    background: segment.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
