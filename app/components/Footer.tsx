import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line-light dark:border-line px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 font-mono text-xs text-muted-light dark:text-muted sm:flex-row sm:items-center">
        <p>{profile.name}</p>
        <p>Coimbatore, India</p>
      </div>
    </footer>
  );
}
