import { APIReference } from "../types";

const API_REFERENCE: APIReference[] = [
  {
    description: "Get random quote",
    route: "/random",
    hashLink: {
      id: "random-quote",
      fragment: "#random-quote",
    },
    query: {
      title: true,
      author: true,
      authorId: true,
    },
    example: `https://dune-quotes-production.up.railway.app/api/v1/random`,
  },
  {
    description: "Get list of quotes",
    route: "/quotes",
    hashLink: {
      id: "quotes",
      fragment: "#quotes",
    },
    query: {
      title: true,
      author: true,
      authorId: true,
      limit: true,
      page: true,
    },
    example: `https://dune-quotes-production.up.railway.app/api/v1/quotes?title=dune-messiah`,
  },
  {
    description: "Get quote by ID",
    route: "/quotes/:id",
    hashLink: {
      id: "quote-by-id",
      fragment: "#quote-by-id",
    },
    example: `https://dune-quotes-production.up.railway.app/api/v1/quotes/1fa04888-c03e-4202-b77c-70f5ea0a480f`,
  },
  {
    description: "Get list of books",
    route: "/books",
    hashLink: {
      id: "books",
      fragment: "#books",
    },
    example: `https://dune-quotes-production.up.railway.app/api/v1/books`,
  },
  {
    description: "Get book by ID",
    route: "/book/:id",
    hashLink: {
      id: "book-by-id",
      fragment: "#book-by-id",
    },
    example: `https://dune-quotes-production.up.railway.app/api/v1/books/a7257113-5537-438e-9d47-2d32bd5d3c1b`,
  },
];

export default API_REFERENCE;
