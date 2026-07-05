import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141414",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7"
            stroke="#f2f0eb"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
