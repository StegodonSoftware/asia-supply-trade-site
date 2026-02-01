"use client";

import type { MouseEvent, ReactNode } from "react";

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;

  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const connectApps = [
  {
    name: "Whatsapp",
    icon: "/logos/whatsapp-logo.png",
    link: "https://wa.me/66927644981",
  },
  {
    name: "Line",
    icon: "/logos/line-logo.png",
    link: "https://line.me/ti/p/9sJJC4x8Y2",
  },
  {
    name: "Zalo",
    icon: "/logos/zalo-logo.png",
    link: "https://zaloapp.com/qr/p/16qwec9fup8rc",
  },
  {
    name: "Viber",
    icon: "/logos/viber-logo.png",
    link: "66927644981", // https://viber.me/+66927644981
  },
  { name: "KakaoTalk", icon: "/logos/kakaotalk-logo.png", link: "" },
];

export default function ConnectApps() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {connectApps.map((app) => {
        if (app.name === "Viber") {
          return (
            <ViberLink key={app.name} number={app.link}>
              <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-[var(--cream)]">
                <img src={app.icon} alt={app.name} />
              </div>
              <span className="text-[var(--charcoal)] font-medium group-hover:text-[var(--aqua)] transition">
                {app.name}
              </span>
            </ViberLink>
          );
        }
        return (
          <a
            key={app.name}
            href={app.link || "#"}
            onClick={(e) => {
              if (!app.link) {
                e.preventDefault();
                alert(`${app.name} coming soon 🚧`);
              }
            }}
            target={app.link ? "_blank" : undefined}
            rel={app.link ? "noopener noreferrer" : undefined}
            className="group
            flex items-center gap-4
            p-4 rounded-lg
            bg-white/70
            hover:bg-white
            border border-[var(--charcoal)]/10
            hover:border-[var(--aqua)]/40
            transition
          "
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-[var(--cream)]">
              <img
                src={app.icon}
                alt={app.name}
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-[var(--charcoal)] font-medium group-hover:text-[var(--aqua)] transition">
              {app.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}

type ViberItemProps = {
  number: string;
  children: ReactNode;
};

export function ViberLink({ number, children }: ViberItemProps) {
  const handleClick = () => {
    if (isMobileDevice()) {
      // Native deep link (guaranteed if app installed)
      window.location.href = `viber://add?number=${number}`;
    } else {
      // Desktop-safe fallback
      alert("Please contact us on Viber using your mobile device.");
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="group
            flex items-center gap-4
            p-4 rounded-lg
            bg-white/70
            hover:bg-white
            border border-[var(--charcoal)]/10
            hover:border-[var(--aqua)]/40
            transition
          "
    >
      {children}
    </a>
  );
}
