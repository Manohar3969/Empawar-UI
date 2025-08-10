import React from "react";

export default function FilterTag({ type, value, onRemove }) {
    return (
        <span className="flex items-center bg-[#FAD4C0] text-[#6CA0A3] rounded-full px-3 py-1 text-xs font-semibold mr-2">
      {type === "color"
          ? (
              <span className="inline-block w-4 h-4 rounded-full mr-1" style={{ backgroundColor: value }}></span>
          )
          : null}
            {type.charAt(0).toUpperCase() + type.slice(1)}:
            {" "}
            {typeof value === "string" ? value : JSON.stringify(value)}
            <button
                className="ml-2 text-[#6CA0A3] hover:text-[#d97706] focus:outline-none"
                onClick={() => onRemove(type, value)}
                title={`Remove ${type}: ${value}`}
            >
        ×
      </button>
    </span>
    );
}
