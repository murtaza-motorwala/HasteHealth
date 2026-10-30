import React from "react";

export const Logo = ({
  className = "h-8",
  onClick,
}: Readonly<{ className?: string; onClick?: () => void }>) => (
  <div
    className={`inline-flex items-center gap-2 cursor-pointer select-none ${className}`}
    onClick={onClick}
    role="banner"
  >
    <img
      src="/f1.png"
      alt="FHIR Fly"
      className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(229,69,26,0.4)]"
    />
    <div className="flex flex-col">
      <span className="font-display font-bold text-lg leading-tight tracking-tight text-[var(--ci-ink)]">
        FHIR Fly
      </span>
      <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--ci-signal-ink)] -mt-0.5">
        FHIR Server
      </span>
    </div>
  </div>
);
