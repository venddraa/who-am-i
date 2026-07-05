import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const signature = await readFile(
    join(process.cwd(), "public", "signature.png"),
  );
  const signatureSrc = `data:image/png;base64,${signature.toString("base64")}`;
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
          <img
            src={signatureSrc}
            alt=""
            width={200}
            height={95}
            style={{ marginBottom: 24 }}
          />
          <span style={{ fontSize: 110, fontWeight: 700 }}>VENDRA</span>
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
