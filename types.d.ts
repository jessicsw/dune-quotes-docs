/// <reference types="react-scripts" />

export interface QueryParameters {
  title?: boolean;
  author?: boolean;
  authorId?: boolean;
  limit?: boolean;
  page?: boolean;
}

export interface Response {
  count?: string;
  totalCount?: string;
  page?: string;
  title?: string;
  published?: string;
  author?: {
    name: string;
  };
  id?: string;
  text?: string;
  quotes?: {
    id: string;
    text: string;
    book: {
      title: string;
      author: {
        name: string;
      };
    };
  }[];
  book?: {
    id?: string;
    published?: string;
    title: string;
    author: {
      name: string;
    };
  };
  books?: string;
}

export type APIReference = {
  description: string;
  route: string;
  hashLink: {
    id: string;
    fragment: string;
  };
  query?: {
    title?: boolean;
    author?: boolean;
    authorId?: boolean;
    limit?: boolean;
    page?: boolean;
  };
  example: string;
  responseShape: string;
};

export namespace Example {
  interface ObjectKeys {
    [key: string]: string;
  }

  export interface Documentation extends ObjectKeys {
    ["random"]: string;
    ["quotes"]: string;
    ["quotes/:id"]: string;
    ["books"]: string;
    ["books/:id"]: string;
  }

  export interface Home extends ObjectKeys {
    ["random"]: string;
  }
}
