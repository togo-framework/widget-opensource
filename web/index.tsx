import { registerWidget, type WidgetContext } from "@togo-framework/widget";

interface Repo { name: string; stars: number; desc?: string }
export function OpenSource({ settings }: WidgetContext) {
  const repos = (settings.repos as Repo[]) ?? [
    { name: "togo-framework/widget", stars: 0, desc: "Widget registry + contract" },
    { name: "togo-framework/board", stars: 0, desc: "Drag-and-drop tile board" },
  ];
  return (
    <ul className="wx-oss" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
      {repos.map((r) => (
        <li key={r.name} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <span><b>{r.name}</b>{r.desc ? <span style={{ opacity: 0.7 }}> - {r.desc}</span> : null}</span>
          <span>* {r.stars}</span>
        </li>
      ))}
    </ul>
  );
}
registerWidget({ key: "opensource", title: "Open source", defaultZone: "body", Comp: OpenSource });
