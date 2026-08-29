const configuredSiteUrl = process.env.SITE_URL?.trim();

export const siteConfig = {
  name: "Abdullah Elsman Portfolio",
  title: "Abdullah Elsman — Backend-Focused Software Engineer",
  description:
    "Backend-focused software engineer specializing in Laravel and PHP, with Node.js experience across APIs, databases, production troubleshooting, deployment, and server work.",
  repository: "https://github.com/Abdullah2elsman/abdullah-elsman-portfolio",
  cvPath: "/documents/abdullah-elsman-cv.pdf",
  routes: [
    "/",
    "/projects/share-k",
    "/projects/gateway",
    "/projects/smart-book",
    "/projects/zoal-online",
  ],
} as const;

export function getSiteUrl(): URL | null {
  if (!configuredSiteUrl) {
    return null;
  }

  try {
    const url = new URL(configuredSiteUrl);
    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}
