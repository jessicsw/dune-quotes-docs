import React, { useState } from "react";
import { Examples } from "../../types";

const Home = () => {
  const [example, setExample] = useState<Examples.URL>({});
  const REACT_LINK = <a href="https://react.dev/">React</a>;
  const EXPRESS_LINK = <a href="https://expressjs.com/">Express</a>;
  const POSTGRESQL_LINK = <a href="https://www.postgresql.org/">PostgreSQL</a>;
  const EXAMPLE_API = `https://dune-quotes-production.up.railway.app/api/v1/random`;

  const handleFetch = async (): Promise<void> => {
    try {
      const response = await fetch(EXAMPLE_API);
      const json = await response.json();
      setExample({ api: JSON.stringify(json, null, 5) });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div
      id="container"
      className="md:mx-auto max-w-4xl flex flex-col items-center my-20"
    >
      <img
        className="min-w-[250px] m-0"
        src={require("../assets/dune.png")}
        alt="Dune Quotes API Logo"
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

      <div id="test-api" className="mt-20 max-w-[610px]">
        <p>Try it out!</p>
        <div id="fetch" className="flex space-x-4">
          <code>{EXAMPLE_API}</code>
          <button
            className="py-1 px-5 rounded-full bg-[#edebe5]"
            onClick={handleFetch}
          >
            Fetch
          </button>
        </div>
        <div id="json" className="mt-3">
          <p>JSON</p>
          <pre className="whitespace-pre-wrap w-full max-h-64 overflow-y-auto">
            {example.api}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
