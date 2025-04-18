"use client";

import { useState, useEffect } from "react";

interface ClientBodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClientBody({ children, className }: ClientBodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <body className={className}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </body>
    );
  }

  return (
    <body className={`dark ${className || ""}`}>
      {children}
    </body>
  );
}
