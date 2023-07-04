const Home = () => {
  const REACT_LINK = <a href="https://react.dev/">React</a>;
  const EXPRESS_LINK = <a href="https://expressjs.com/">Express</a>;
  const POSTGRESQL_LINK = <a href="https://www.postgresql.org/">PostgreSQL</a>;

  return (
    <div
      id="container"
      className="md:mx-auto max-w-4xl flex flex-col items-center mt-32"
    >
      <img
        className="min-w-[250px] m-0"
        src={require("../assets/dune.png")}
        alt="Dune API Logo"
        width="250"
      />
      <h1 className="font-DuneRise py-5 text-xl">Dune Quotes API</h1>
      <h2>A free RESTful API serving Dune Quotes</h2>
      <h3 className="text-xs">
        Powered by{" "}
        <span className="underline underline-offset-1">{REACT_LINK}</span>,{" "}
        <span className="underline underline-offset-1">{EXPRESS_LINK}</span>,
        and{" "}
        <span className="underline underline-offset-1">{POSTGRESQL_LINK}</span>.
      </h3>

      <div id="test-api" className="pt-20">
        <p>Try it out!</p>
        <code className="bg-black text-white">console.log('run')</code>
      </div>
    </div>
  );
};

export default Home;
