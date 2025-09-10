import type { JSX } from "react";

export default function CreatedAndUpdated({
  created,
  updated,
}: Hero): JSX.Element {
  return (
    <div className="text-xs text-gray-500 mt-6 pt-4 border-t border-gray-200">
      <p>Created: {new Date(created ?? "").toLocaleDateString()}</p>{" "}
      {/* Using hardcoded dates from previous JSON */}
      <p>Updated: {new Date(updated ?? "").toLocaleDateString()}</p>
    </div>
  );
}
