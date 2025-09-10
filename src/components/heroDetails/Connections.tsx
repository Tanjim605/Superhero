import type { JSX } from "react";

export default function Connections({ connections }: Hero): JSX.Element {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900 dark:text-amber-100">
        CONNECTIONS
      </h2>
      <div className="space-y-2 text-sm mb-6">
        <p>
          <strong>Group Affiliation:</strong>{" "}
          {connections?.["group-affiliation"]}
        </p>
        <p>
          <strong>Relatives:</strong> {connections?.relatives}
        </p>
      </div>
    </>
  );
}
