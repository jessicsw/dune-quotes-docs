import React, { useState } from "react";
import { Examples } from "../../types";

const Home = () => {
  const [example, setExample] = useState<Examples.URL>({});
  const REACT_LINK = <a href="https://react.dev/">React</a>;
  const EXPRESS_LINK = <a href="https://expressjs.com/">Express</a>;
  const POSTGRESQL_LINK = <a href="https://www.postgresql.org/">PostgreSQL</a>;
  const EXAMPLE_API = `https://api.duniverse.space/v1/random`;

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
      className="md:mx-auto max-w-4xl flex flex-col items-center py-20 px-5 text-black dark:text-[#eeeeee]"
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

      <div id="test-api" className="mt-20 mx-auto">
        <p className="mb-2">Try it out!</p>
        <div id="test-api-example">
          <code className="dark:bg-opacity-20 dark:text-[#eeeeee] bg-[#f8f8f8] text-black">
            {EXAMPLE_API}
          </code>
          <button
            className="my-5 py-1 px-5 md:ml-5 rounded-full w-28 bg-[#edebe5] dark:text-[#eeeeee] dark:bg-[#5a533e]"
            onClick={handleFetch}
          >
            Fetch
          </button>
          <p>JSON</p>
          <pre className="whitespace-pre-wrap md:w-[610px] max-h-64 overflow-y-auto dark:bg-opacity-20 dark:text-[#eeeeee] bg-[#f8f8f8] text-black">
            {example.api}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
