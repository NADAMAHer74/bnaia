import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Create middleware using your i18n routing setup
export const middleware = createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|ar)/:path*"],
};
