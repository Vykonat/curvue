
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Commentable",
        "possibleTypes": [
          {
            "name": "BlogPost"
          },
          {
            "name": "Comment"
          }
        ]
      }
    ]
  }
};
      export default result;
    