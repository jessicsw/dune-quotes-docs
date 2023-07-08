import React, { useState } from "react";
import { Example } from "../../types";
import CodeBlock from "./CodeBlock";

const REACT_LINK = <a href="https://react.dev/">React</a>;
const EXPRESS_LINK = <a href="https://expressjs.com/">Express</a>;
const POSTGRESQL_LINK = <a href="https://www.postgresql.org/">PostgreSQL</a>;
const EXAMPLE_API = `https://api.duniverse.space/v1/random`;

const Home = () => {
  const [example, setExample] = useState<Example.Home>({
    random: `null`,
  });

  const handleFetch = async (): Promise<void> => {
    try {
      const response = await fetch(EXAMPLE_API);
      const json = await response.json();
      setExample({ random: JSON.stringify(json, null, 5) });
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

      <div id="test-api" className="mt-20 w-full">
        <p className="mb-2">Try it out!</p>
        <div id="fetch" className="flex flex-wrap items-start">
          <div className="mb-5 mr-5">
            <CodeBlock code={EXAMPLE_API} padding margin />
          </div>
          <button
            className="py-2 px-5 rounded-full w-20 text-[#eeeeee] bg-[#b05e20]"
            onClick={handleFetch}
            title="Fetch example endpoint"
          >
            Fetch
          </button>
        </div>
        <div id="json" className="mt-5">
          <p>JSON</p>
          <CodeBlock code={example.random} padding />
        </div>
      </div>
    </div>
  );
};

export default Home;
