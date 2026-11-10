import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const locale = acceptLanguage.toLowerCase().startsWith("en") ? "en" : "pt";
    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
