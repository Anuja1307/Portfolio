import { SystemNode } from "@/lib/data";

const kindColor: Record<SystemNode["kind"], string> = {
  client: "border-wire text-wire",
  api: "border-signal text-signal",
  data: "border-ink-light/40 dark:border-ink/40 text-ink-light dark:text-ink",
  ai: "border-signal text-signal",
  infra: "border-wire text-wire",
};

export default function SystemFlow({ nodes }: { nodes: SystemNode[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex items-center gap-2">
          <span className={`rounded-md border px-2.5 py-1 ${kindColor[node.kind]}`}>{node.label}</span>
          {i < nodes.length - 1 && (
            <span aria-hidden className="text-muted-light dark:text-muted">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
