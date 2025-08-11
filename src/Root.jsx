import SuperheroDetails from "./pages/Details";

export default function Root(params) {
  // This is the root component of our application.
  return (
    <div>
      <h1>Welcome to the Superhero Database</h1>
      <SuperheroDetails heroId={"1sfcizq4olpldzz"}/>
      {params.children}
    </div>
  );
}
