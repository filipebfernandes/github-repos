const parseReposQueryData = (data: any) => {
  if (!data) {
    return [];
  }

  return data?.search?.edges.map(({ node }: any) => {
    return {
      name: node.name,
      forkCount: node.forkCount,
      starCount: node.stargazers.totalCount,
    };
  });
};

export default parseReposQueryData;
