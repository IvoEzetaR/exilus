"use client";

import { trackEvent } from "@/lib/analytics";

// Wrapper client-side de <a> para disparar un evento GA4 en el click.
// Permite instrumentar enlaces (WhatsApp / tel: / email) que viven dentro de
// Server Components (TopBar, Footer), donde no se puede pasar onClick directo.
type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
  children: React.ReactNode;
};

export default function TrackedLink({
  event,
  eventParams,
  children,
  ...anchorProps
}: TrackedLinkProps) {
  return (
    <a {...anchorProps} onClick={() => trackEvent(event, eventParams)}>
      {children}
    </a>
  );
}
