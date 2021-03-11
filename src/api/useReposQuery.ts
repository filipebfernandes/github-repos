import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_REPOS_SEARCH = gql`
  query search($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 20) {
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
  const { data } = useQuery(GET_REPOS_SEARCH, {
    variables: { queryString: name },
    skip: !name || name === "",
  });

  return { data };
};

export default useReposQuery;
