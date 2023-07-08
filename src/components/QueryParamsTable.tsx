import React, { useState } from "react";
import { QueryParameters } from "../../types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const paramDescription = {
  title: (
    <tr>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          title
        </code>
      </td>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          string
        </code>
      </td>
      <td>
        <p className="mb-3">(Optional). Filters quotes by book title.</p>
        <p>For example, filtering quotes by book title should look like:</p>
        <p className="mb-2">
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            /quotes?title=children-of-dune
          </code>
        </p>
        <p>
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            /random?title=dune-messiah
          </code>
        </p>
      </td>
    </tr>
  ),
  author: (
    <tr>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          author
        </code>
      </td>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          string
        </code>
      </td>
      <td>
        <p>
          (Optional) Filters books by{" "}
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            author
          </code>
          . Currently, Frank Herbert is the only author in the database. Brian
          Herbert and Kevin Anderson will be added at some point.
        </p>
      </td>
    </tr>
  ),
  authorId: (
    <tr>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          authorId
        </code>
      </td>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          string
        </code>
      </td>
      <td>
        <p>
          (Optional) Same as{" "}
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            author
          </code>{" "}
          parameter, except by{" "}
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            authorId
          </code>
          .
        </p>
      </td>
    </tr>
  ),
  limit: (
    <tr>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          limit
        </code>
      </td>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          number
        </code>
      </td>
      <td>
        <div className="flex flex-wrap md:space-x-4 mb-3">
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            Min: 1
          </code>
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            Max: 100
          </code>
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            Default: 10
          </code>
        </div>
        <p>(Optional) Sets the number of quotes to return per page.</p>
      </td>
    </tr>
  ),
  page: (
    <tr>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          page
        </code>
      </td>
      <td>
        <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
          number
        </code>
      </td>
      <td>
        <div className="flex space-x-5 mb-3">
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            Min: 1
          </code>
          <code className="dark:bg-opacity-20 text-black bg-[#f8f8f8] dark:text-[#eeeeee]">
            Default: 1
          </code>
        </div>
        <p>
          (Optional) The page of results to return. If the value is greater than
          the total number of pages, the request will not return any results.
        </p>
      </td>
    </tr>
  ),
};

const QueryParamsTable = ({
  title,
  author,
  authorId,
  limit,
  page,
}: QueryParameters): JSX.Element => {
  const [toggleView, setToggleView] = useState<boolean>(false);

  const handleToggleView = () => {
    setToggleView(!toggleView);
  };

  return (
    <div className="my-3">
      <button onClick={handleToggleView}>
        {toggleView ? (
          <ExpandMoreIcon titleAccess="Collapse query parameters table" />
        ) : (
          <ChevronRightIcon titleAccess="Expand query parameters table" />
        )}
      </button>
      <span className="ml-2">Query Parameters</span>
      {toggleView && (
        <table className="table-auto my-3 dark:bg-[#121212]">
          <thead>
            <tr>
              <th>Query Parameter</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {title && paramDescription.title}
            {author && paramDescription.author}
            {authorId && paramDescription.authorId}
            {limit && paramDescription.limit}
            {page && paramDescription.page}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QueryParamsTable;
