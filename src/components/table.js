import * as React from "react";
import data from "../data/home_data.json";

const Table = () => {
  const tableData = data.table;
  return (
    <table>
      <tr>
        {tableData.table_head.map((head,index) => (
          <th key={index}>{head}</th>
        ))}
      </tr>
      {tableData.table_data.map((row, index) => (
        <tr key={index}>
          <td>{index + 1}.</td>
          <td>
            <b style={{ color: "cadetblue" }}>{row.head}</b>
            {row.desc}
          </td>
          <td>
            <ul>
              {row.content.map((point,index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </td>
          <td>{row.duration}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
