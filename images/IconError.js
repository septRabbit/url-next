import * as React from "react";

function SvgIconError(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={12} fill="currentColor" />
      <rect x={11} y={6} width={2} height={9} rx={1} fill="#fff" />
      <rect x={11} y={17} width={2} height={2} rx={1} fill="#fff" />
    </svg>
  );
}

export default SvgIconError;
