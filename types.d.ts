/// <reference types="react-scripts" />

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
};

export namespace Examples {
  interface ObjectKeys {
    [key: string]: string | undefined;
  }

  export interface URL extends ObjectKeys {
    ["/random"]?: string;
    ["/quotes"]?: string;
    ["/quotes/:id"]?: string;
    ["/books"]?: string;
    ["/books/:id"]?: string;
  }
}
