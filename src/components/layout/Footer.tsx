import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted">
           © 2026 · Designed &amp; built by {profile.name}
          </p>
        </div>
        <div className="flex gap-4 text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent"><FaGithub size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent"><FaLinkedinIn size={20} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent"><Mail size={20} /></a>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}