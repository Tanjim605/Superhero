export default function Work({ work }) {
  // This component renders the Work section of the superhero details page.
  // It displays the occupation and base of the superhero.
  return (
    <>
      {" "}
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900">
        WORK
      </h2>
      <div className="space-y-2 text-sm text-gray-700 mb-6">
        <p>
          <strong>Occupation:</strong> {work.occupation}
        </p>
        {work.base != "-" ? (
          <p>
            <strong>Base:</strong> {work.base}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
