import { HashLink } from "react-router-hash-link";
import QueryParamsTable from "./QueryParamsTable";
import React, { useState } from "react";
import { Examples } from "../../types";
import API_REFERENCE from "../API_REFERENCE";

const Documentation = () => {
  const [examples, setExamples] = useState<Examples.URL>({});

  const handleFetch = async (url: string, route: string): Promise<void> => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setExamples({ ...examples, [route]: JSON.stringify(json, null, 5) });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:mx-auto max-w-4xl p-5 dark:bg-[#121212] text-black dark:text-[#eeeeee]">
      <div id="api-reference" className="my-8">
        <h2 className="text-2xl mb-3">API Reference</h2>
        <ul className="list-decimal list-inside">
          {API_REFERENCE.map((endpoint) => (
            <li key={endpoint.route}>
              <HashLink
                className="underline text-blue-700 dark:text-blue-500"
                smooth
                to={endpoint.hashLink.fragment}
              >
                {endpoint.description}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
      <div id="usage" className="my-12">
        <h2 className="text-2xl mb-2">Usage</h2>
        <p>
          Dune Quotes is a free, easy to use RESTful API that returns JSON and
          uses standard HTTP features.
        </p>
        <p>API endpoints are relative to the following base URL:</p>
        <code className="dark:bg-opacity-20 dark:text-[#eeeeee] text-black bg-[#f8f8f8]">
          https://api.duniverse.space/v1/
        </code>
      </div>
      <div id="rate-limit" className="mb-12">
        <h2 className="text-2xl mb-2">Rate Limit</h2>
        <p>
          The default rate limit is <em>100 requests per hour</em>, per IP
          address. If the rate limit is exceeded, the API will respond with a{" "}
          <code className="dark:bg-opacity-20 dark:text-[#eeeeee] text-black bg-[#f8f8f8]">
            429
          </code>{" "}
          status code.
        </p>
      </div>
      <div id="rest-api" className="mb-12">
        <h2 className="text-2xl mb-2">Using the REST API</h2>
        <p className="mb-12">
          Dive into the specifics of each API endpoint by checking out the
          complete documentation below.
        </p>
        <ul className="list-inside list-decimal mb-20">
          {API_REFERENCE.map((endpoint) => (
            <li
              className="mb-12"
              key={endpoint.route}
              id={endpoint.hashLink.id}
            >
              <span>{endpoint.description}</span>
              {endpoint.query && <QueryParamsTable {...endpoint.query} />}
              <div id="example-fetch" className="flex items-center space-x-4">
                <code className="overflow-x-auto dark:bg-opacity-20 dark:text-[#eeeeee] text-black bg-[#f8f8f8]">
                  {endpoint.example}
                </code>
                <button
                  className="py-1 px-5 rounded-full bg-[#edebe5] dark:text-[#eeeeee] dark:bg-[#5a533e]"
                  onClick={() => handleFetch(endpoint.example, endpoint.route)}
                >
                  Fetch
                </button>
              </div>
              <div id="example-json" className="mt-3">
                <p>JSON</p>
                <pre className="whitespace-pre-wrap dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
                  {examples[endpoint.route]}
                </pre>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
