export const TextStyle = {
  Small: "textSizeSmall",
  Normal: "textSizeNormal",
  Medium: "textSizeMedium",
  Large: "textSizeLarge",
};

export function formatText(
  size = TextStyle.Normal,
  isPrimary = true,
  applyFocusedTextColor = false,
  isAnimated = false,
) {
  return `${size} ${isPrimary ? "primaryText" : "secondaryText"} ${applyFocusedTextColor ? "focusedTextColor" : ""} ${slideRight(isAnimated)}`;
}

export function slideRight(isAnimated = true) {
  return `${isAnimated ? "slideRight smoothTransition" : ""}`;
}
