import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_REPOS_SEARCH = gql`
  query search($name: String!) {
    search(query: $name, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            name
            forkCount
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const useReposQuery = (name: string) => {
  const { loading, data } = useQuery(GET_REPOS_SEARCH, {
    variables: { name: name },
    skip: !name || name === "",
  });

  return { loading, data };
};

export default useReposQuery;
