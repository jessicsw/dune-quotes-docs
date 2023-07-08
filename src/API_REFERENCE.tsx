import { APIReference } from "../types";

const API_REFERENCE: APIReference[] = [
  {
    description: "Get random quote",
    route: "random",
    hashLink: {
      id: "random-quote",
      fragment: "#random-quote",
    },
    query: {
      title: true,
      author: true,
      authorId: true,
    },
    example: `https://api.duniverse.space/v1/random`,
    responseShape: `
      {
        id: string,
        text: string,
        book: {
          title: string,
          author: {
            name: string,
          },
        },
      }
    `,
  },
  {
    description: "Get list of quotes",
    route: "quotes",
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
    example: `https://api.duniverse.space/v1/quotes?title=dune-messiah`,
    responseShape: `
      {
        count: number, // The number of quotes returned in the response
        totalCount: number, // The total number of quotes matching the query
        page: number, // The current page number
        quotes: Array<{
          id: string,
          text: string,
          book: {
            title: string,
            author: {
              name: string,
            }
          }
        }>,
      }
    `,
  },
  {
    description: "Get quote by ID",
    route: "quotes/:id",
    hashLink: {
      id: "quote-by-id",
      fragment: "#quote-by-id",
    },
    example: `https://api.duniverse.space/v1/quotes/1fa04888-c03e-4202-b77c-70f5ea0a480f`,
    responseShape: `
      {
        id: string,
        text: string,
        book: {
          title: string,
          author: {
            name: string,
          },
      }
    `,
  },
  {
    description: "Get list of books",
    route: "books",
    hashLink: {
      id: "books",
      fragment: "#books",
    },
    example: `https://api.duniverse.space/v1/books`,
    responseShape: `
      {
        count: number, // The number of books returned in the response
        totalCount: number, // The total number of books matching the query
        page: number, // The current page number
        books: Array<{
            id: string,
            title: string,
            published: number,
            author: {
              name: string
            }
          }>,
      }
    `,
  },
  {
    description: "Get book by ID",
    route: "books/:id",
    hashLink: {
      id: "book-by-id",
      fragment: "#book-by-id",
    },
    example: `https://api.duniverse.space/v1/books/a7257113-5537-438e-9d47-2d32bd5d3c1b`,
    responseShape: `
      {
        id: string,
        title: string,
        published: number,
        author: {
          name: string,
        },
      }
    `,
  },
];

export default API_REFERENCE;
