"use strict";

export default function getColor(name) {
  const COLORS = [
    "#ffc2d1",
    "#a4ac86",
    "#06d6a0",
    "#ffd166",
    "#e56b6f",
    "#e7c6ff",
    "#c3eb78",
  ];

  let hash = 0;
  for (let char of name.toLowerCase()) {
    hash += char.charCodeAt();
  }

  return COLORS[hash % COLORS.length];
}
