import React from "react";

const Table = (props) => {
  let currentCommit = props.commits[0];
  return (
    <table className="table">
      <thead>
        <tr>
          <th>User</th>
          <th>Message</th>
          <th>Date</th>
          <th>Hash</th>
          <th>Parent</th>
        </tr>
      </thead>
      <tbody>
        {props.commits.map((commitItem) => (
          <tr key={commitItem.node_id}>
            <td>
              <img
                src={
                  commitItem.author === null
                    ? "#"
                    : commitItem.author.avatar_url
                }
                height="50px"
              />
            </td>
            <td>{commitItem.commit.message}</td>
            <td>{commitItem.commit.author.date}</td>
            <td>{commitItem.sha}</td>
            <td>{commitItem.parents[0].sha.slice(0, 7)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
