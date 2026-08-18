import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Logo({ className = "" }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let current = window.scrollY > 40;
    setScrolled(current);
    const onScroll = () => {
      const y = window.scrollY;
      if (!current && y > 64) {
        current = true;
        setScrolled(true);
      } else if (current && y < 24) {
        current = false;
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={logo}
        alt="House of Gino — Dog Grooming"
        className={`w-auto transition-all duration-500 ease-out ${
          scrolled ? "h-14 md:h-16" : "h-24 md:h-32"
        }`}
      />
    </Link>
  );
}
