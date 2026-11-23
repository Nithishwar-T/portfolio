import { ImageResponse } from "next/og";

export const alt = "Nithishwar T — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0E0F11", color: "#EDEAE3", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 28, color: "#8A8D91", letterSpacing: 4 }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 600, letterSpacing: -6, lineHeight: 1 }}>
            Nithishwar <span style={{ color: "#FF5A1F", marginLeft: 28 }}>T</span>
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#8A8D91", marginTop: 24 }}>
            Full Stack Developer · Angular · .NET · React
          </div>
        </div>
        <div style={{ display: "flex", width: 120, height: 6, background: "#FF5A1F" }} />
      </div>
    ),
    { ...size }
  );
}