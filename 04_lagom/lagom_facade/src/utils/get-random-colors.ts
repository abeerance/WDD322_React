export const colorsRange: string[] = [
  "#4B3338",
  "#B95F89",
  "#415B78",
  "#BF4261",
  "#3E7857",
];

export function getRandomColor(colors: string[]): string {
  return colors[Math.floor(Math.random() * colors.length)];
}
