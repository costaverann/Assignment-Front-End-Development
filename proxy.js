import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    console.log(
      `[Logger] ${new Date().toISOString()} ${request.method} ${pathname}`
    );
  }

  if (
    process.env.MAINTENANCE_MODE === "true" &&
    pathname !== "/maintenance"
  ) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  if (pathname === "/favorites" && !request.cookies.get("token")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};