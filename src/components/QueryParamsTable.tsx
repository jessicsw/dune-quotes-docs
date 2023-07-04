import React from "react";

const QueryParams = {
  title: (
    <tr>
      <td>
        <code>title</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <p className="mb-3">(Optional). Filters quotes by book title.</p>
        <p>For example, filtering quotes by book title should look like:</p>
        <p className="mb-2">
          <code>/quotes?title=children-of-dune</code>
        </p>
        <p>
          <code>/random?title=dune-messiah</code>
        </p>
      </td>
    </tr>
  ),
  author: (
    <tr>
      <td>
        <code>author</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <p>
          (Optional) Filters books by <code>author</code>. Currently, Frank
          Herbert is the only author in the database. Brian Herbert and Kevin
          Anderson will be added at some point.
        </p>
      </td>
    </tr>
  ),
  authorId: (
    <tr>
      <td>
        <code>authorId</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <p>
          (Optional) Same as <code>author</code> parameter, except by{" "}
          <code>authorId</code>.
        </p>
      </td>
    </tr>
  ),
  limit: (
    <tr>
      <td>
        <code>limit</code>
      </td>
      <td>
        <code>number</code>
      </td>
      <td>
        <div className="flex space-x-5 mb-3">
          <code>Min: 1</code>
          <code>Max: 100</code>
          <code>Default: 10</code>
        </div>
        <p>(Optional) Sets the number of quotes to return per page.</p>
      </td>
    </tr>
  ),
  page: (
    <tr>
      <td>
        <code>page</code>
      </td>
      <td>
        <code>number</code>
      </td>
      <td>
        <div className="flex space-x-5 mb-3">
          <code>Min: 1</code>
          <code>Default: 1</code>
        </div>
        <p>
          (Optional) The page of results to return. If the value is greater than
          the total number of pages, the request will not return any results.
        </p>
      </td>
    </tr>
  ),
};

const QueryParamsTable = (props: {
  title?: boolean;
  author?: boolean;
  authorId?: boolean;
  limit?: boolean;
  page?: boolean;
}): JSX.Element => {
  return (
    <table className="table-auto my-3">
      <thead>
        <tr>
          <th>Query Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.title && QueryParams.title}
        {props.author && QueryParams.author}
        {props.authorId && QueryParams.authorId}
        {props.limit && QueryParams.limit}
        {props.page && QueryParams.page}
      </tbody>
    </table>
  );
};

export default QueryParamsTable;
