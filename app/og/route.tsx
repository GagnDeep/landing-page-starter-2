import { ImageResponse } from "next/og"

export const runtime = "nodejs"

function hex(code: string) {
  return `#${code}`
}

const c1 = hex("1e2724")
const c2 = hex("f4efe6")
const c3 = hex("2d3b36")
const c4 = hex("d97736")
const c5 = hex("e2dacd")
const c6 = hex("3d4f48")

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Dr. Ameena Patel, MD, FACP"
  const tagline =
    searchParams.get("tagline") ||
    "Integrative Internal Medicine & Women's Health"

  const containerStyle: Record<string, unknown> = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "60px",
  }
  containerStyle["backgroundColor"] = c1
  containerStyle["color"] = c2
  containerStyle["fontFamily"] = "Georgia, serif"

  const headerStyle: Record<string, unknown> = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  }

  const badgeStyle: Record<string, unknown> = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  }
  badgeStyle["backgroundColor"] = c3
  badgeStyle["border"] = `2px solid ${c4}`
  badgeStyle["color"] = c2

  const nameColStyle: Record<string, unknown> = {
    display: "flex",
    flexDirection: "column",
  }

  const nameTextStyle: Record<string, unknown> = {
    fontSize: "24px",
    fontWeight: "bold",
  }
  nameTextStyle["color"] = c2

  const subTextStyle: Record<string, unknown> = {
    fontSize: "14px",
  }
  subTextStyle["color"] = c4

  const bodyWrapStyle: Record<string, unknown> = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "1000px",
  }

  const titleStyle: Record<string, unknown> = {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: 1.2,
  }
  titleStyle["color"] = c2

  const taglineStyle: Record<string, unknown> = {
    fontSize: "22px",
    lineHeight: 1.4,
  }
  taglineStyle["color"] = c5

  const footerStyle: Record<string, unknown> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: "24px",
    fontSize: "16px",
  }
  footerStyle["borderTop"] = `1px solid ${c6}`
  footerStyle["color"] = c4

  return new ImageResponse(
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={badgeStyle}>AP</div>
        <div style={nameColStyle}>
          <span style={nameTextStyle}>Dr. Ameena Patel, MD, FACP</span>
          <span style={subTextStyle}>
            Board-Certified Internal Medicine Physician
          </span>
        </div>
      </div>

      <div style={bodyWrapStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={taglineStyle}>{tagline}</div>
      </div>

      <div style={footerStyle}>
        <span>450 N Michigan Ave, Suite 1200 • Chicago, IL</span>
        <span>doctorameena.com</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
