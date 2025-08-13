import React from "react";

function HighlightText({ text, textColor }) {
  return (
    <span
      style={{ color: textColor }}
      className={`text-2xl font-serif font-bold`}
    >
      {text}
    </span>
  );
}

export default HighlightText;
