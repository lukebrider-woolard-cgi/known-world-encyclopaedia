export function typeToColor(type: string): string {
  const typeLower = type.toLowerCase();
  switch (typeLower) {
    case "base":
      return "#bd0b5e";
    case "ship":
      return "#5817a3";
    case "target":
    case "combat":
      return "#5c0b06";
    case "dungeon":
    case "exploration":
      return "#243322";
    case "intrigue":
    case "stealth":
      return "#322436";
    case "investigation":
      return "#1b2b5c";
    default:
      return "#000000";
  }
}
