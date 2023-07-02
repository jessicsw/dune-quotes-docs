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
    <div className="md:mx-auto max-w-4xl px-5">
      <div id="api-reference" className="my-8">
        <h2 className="font-bold text-lg mb-3">API Reference</h2>
        <ul className="list-decimal list-inside">
          {API_REFERENCE.map((endpoint) => (
            <li key={endpoint.route}>
              <HashLink
                className="underline"
                smooth
                to={endpoint.hashLink.fragment}
              >
                {endpoint.description}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
      <div id="usage" className="my-8">
        <h2 className="font-bold text-lg mb-3">Usage</h2>
        <p className="mb-3">
          Dune Quotes is a free RESTful API that returns JSON and uses standard
          HTTP features.
        </p>
        <p className="mb-3">
          API endpoints are relative to the following base URL:
        </p>
        <code className="text-xs md:text-base">
          https://dune-quotes-production.up.railway.app/api/v1/
        </code>
      </div>
      <div id="rate-limit" className="my-8">
        <h2 className="font-bold text-lg mb-3">Rate Limit</h2>
        <p className="mb-3">
          The default rate limit is <em>100 requests per hour</em>, per IP
          address. If the rate limit is exceeded, the API will respond with a{" "}
          <code>429</code> status code.
        </p>
      </div>
      <div id="rest-api" className="my-8">
        <h2 className="font-bold text-lg mb-3">Using the REST API</h2>
        {API_REFERENCE.map((endpoint) => (
          <div key={endpoint.route} id={endpoint.hashLink.id} className="mb-20">
            <h3 className="font-semibold mb-3">{endpoint.description}</h3>
            {endpoint.query && <QueryParamsTable {...endpoint.query} />}
            <div id="example-fetch" className="flex items-center space-x-4">
              <code className="overflow-x-auto">{endpoint.example}</code>
              <button
                className="p-3 rounded-full bg-[#edebe5]"
                onClick={() => handleFetch(endpoint.example, endpoint.route)}
              >
                Fetch
              </button>
            </div>
            <div id="example-json" className="mt-3">
              <p>JSON</p>
              <pre className="whitespace-pre-wrap bg-gray-200 p-3">
                {examples[endpoint.route]}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;