"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { team, type TeamMember } from "@/data/team";

const coreBranchOrder: TeamMember["branch"][] = ["tech", "events", "community"];

interface Positioned extends TeamMember {
  x: number; // percent
  y: number; // percent
  size: number; // px
}

function buildLayout(): { nodes: Positioned[]; edges: [Positioned, Positioned][] } {
  const lead = team.find((m) => m.tier === "lead");
  const core = coreBranchOrder
    .map((b) => team.find((m) => m.tier === "core" && m.branch === b))
    .filter(Boolean) as TeamMember[];
  const volunteers = team.filter((m) => m.tier === "volunteer");

  const nodes: Positioned[] = [];
  const edges: [Positioned, Positioned][] = [];

  let leadNode: Positioned | undefined;
  if (lead) {
    leadNode = { ...lead, x: 50, y: 10, size: 96 };
    nodes.push(leadNode);
  }

  const coreSpacing = 100 / (core.length + 1);
  const coreNodes: Positioned[] = core.map((m, i) => ({
    ...m,
    x: coreSpacing * (i + 1),
    y: 45,
    size: 76,
  }));
  coreNodes.forEach((n) => {
    nodes.push(n);
    if (leadNode) edges.push([leadNode, n]);
  });

  volunteers.forEach((v) => {
    const parent = coreNodes.find((c) => c.branch === v.branch) || coreNodes[0];
    const siblings = volunteers.filter(
      (s) => (coreNodes.find((c) => c.branch === s.branch) || coreNodes[0]) === parent
    );
    const idx = siblings.indexOf(v);
    const spread = 16;
    const x = parent.x + (idx - (siblings.length - 1) / 2) * spread;
    const node: Positioned = { ...v, x: Math.max(6, Math.min(94, x)), y: 82, size: 58 };
    nodes.push(node);
    edges.push([parent, node]);
  });

  return { nodes, edges };
}

export default function TeamNetwork() {
  const { nodes, edges } = useMemo(buildLayout, []);
  const [active, setActive] = useState<Positioned | null>(null);

  return (
    <div className="relative">
      <div className="relative w-full h-[560px] sm:h-[620px] rounded-2xl border border-line bg-surface/40 bg-tech-grid overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="#EC7FB0"
              strokeOpacity={0.35}
              strokeWidth={1.5}
            />
          ))}
        </svg>

        {nodes.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n)}
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: n.size,
              height: n.size,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute rounded-full border-2 overflow-hidden transition-transform hover:scale-110 ${
              active?.id === n.id ? "border-cyan" : "border-electric/60"
            }`}
          >
            <Image src={n.photo} alt={n.name} fill sizes="100px" className="object-cover" />
          </button>
        ))}

        {nodes.map((n) => (
          <p
            key={`${n.id}-label`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: `translate(-50%, ${n.size / 2 + 6}px)` }}
            className="absolute text-[11px] font-mono text-muted whitespace-nowrap text-center pointer-events-none"
          >
            {n.name.split(" ")[0]}
          </p>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-sm bg-surface border border-line rounded-2xl p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-electric mb-4">
              <Image src={active.photo} alt={active.name} fill sizes="80px" className="object-cover" />
            </div>
            <h4 className="font-display font-semibold text-xl">{active.name}</h4>
            <p className="text-cyan text-sm font-mono mb-3">{active.position}</p>
            <p className="text-muted text-sm leading-relaxed mb-4">{active.bio}</p>
            <div className="flex flex-wrap justify-center gap-1.5 mb-5">
              {active.skills.map((s) => (
                <span key={s} className="text-xs font-mono px-2 py-1 rounded-md bg-surface2 border border-line text-paper/80">
                  {s}
                </span>
              ))}
            </div>
            <button onClick={() => setActive(null)} className="text-sm text-electric hover:text-cyan">
              Close
            </button>
          </div>
        </div>
      )}

      <p className="text-muted text-xs font-mono mt-4 text-center">
        // tap a node to view their profile · edit data/team.ts to add or remove people
      </p>
    </div>
  );
}
