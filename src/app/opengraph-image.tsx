import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f0eb",
          color: "#141414",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#6f6c66",
          }}
        >
          <span>Portfolio</span>
          <span>{profile.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7"
                stroke="#141414"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ fontSize: 110, fontWeight: 700 }}>VENDRA</span>
          </div>
          <span style={{ fontSize: 110, fontWeight: 700, lineHeight: 1 }}>
            HASTAGIYAN
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6f6c66" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    size,
  );
}
