import React from "react";
import MaterialTable from "material-table";

import parseReposQueryData from "root/lib/parseReposQueryData";

const columns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Forks",
    field: "forkCount",
  },
  {
    title: "Stars",
    field: "starCount",
  },
];

interface IReposTable {
  repos: any;
}

const ReposTable = ({ repos }: IReposTable) => {
  const parsedRepos = parseReposQueryData(repos);

  return (
    <div>
      <MaterialTable
        title="Repos"
        data={parsedRepos}
        columns={columns}
        options={{
          search: false,
          paging: false,
          filtering: false,
          exportButton: false,
        }}
      />
    </div>
  );
};

export default ReposTable;
