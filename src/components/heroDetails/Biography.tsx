import type { JSX } from "react";

export default function Biography({ biography }: Hero): JSX.Element {
  return (
    <>
      {" "}
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900 dark:text-amber-100">
        BIOGRAPHY
      </h2>
      <div className="space-y-2 text-sm mb-6">
        <p>
          <strong>Full Name:</strong>{" "}
          {biography?.["full-name"] ? biography?.["full-name"] : "Unknown"}
        </p>
        <p>
          <strong>Alter Egos:</strong> {biography?.["alter-egos"]}
        </p>
        <p>
          <strong>Aliases:</strong> {biography?.aliases?.join(", ")}
        </p>
        <p>
          <strong>Place of Birth:</strong> {biography?.["place-of-birth"]}
        </p>
        <p>
          <strong>First Appearance:</strong> {biography?.["first-appearance"]}
        </p>
        <p>
          <strong>Publisher:</strong> {biography?.publisher}
        </p>
        <p>
          <strong>Alignment:</strong> {biography?.alignment}
        </p>
      </div>
    </>
  );
}
