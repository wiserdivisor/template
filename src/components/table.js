import * as React from "react";

const Table = () => {
  return (
    <table>
      <tr>
        <th>Sr.No.</th>
        <th>Training Level & Prerequisites</th>
        <th>Course Contents</th>
        <th>Duration</th>
      </tr>
      <tr>
        <td>1.</td>
        <td>
          <b style={{ color: "cadetblue" }}>Level 1:</b> Basic Education,
          Individuals with basic technical knowledge & experience.
        </td>
        <td>
          <ul>
            <li>Fundamentals of ICE & EVs</li>
            <li>
              Fundamentals of Mehcanical,
              <br /> Electrical / Electronics Technology
            </li>
          </ul>
        </td>
        <td>30 Days</td>
      </tr>
      <tr>
        <td>2.</td>
        <td>
          <b style={{ color: "cadetblue" }}>Level 2:</b> ITI or experience in
          automobiles maintenance and repairs.
        </td>
        <td>
          <ul>
            <li>All of the Above</li>
            <li>Maintenance of EVs</li>
            <li>Assembly of EVs</li>
          </ul>
        </td>
        <td>45 Days</td>
      </tr>
      <tr>
        <td>3.</td>
        <td>
          <b style={{ color: "cadetblue" }}>Level 3:</b> Diploma in Engineering
          with experience in automobiles or Degree in Engineering.
        </td>
        <td>
          <ul>
            <li>All of the Above</li>
            <li>Design</li>
            <li>Calculation</li>
            <li>Repair of EVs</li>
            <li>Conversion of EVs</li>
          </ul>
        </td>
        <td>60 Days</td>
      </tr>
      <tr>
        <td>4.</td>
        <td>
          <b style={{ color: "cadetblue" }}>EV-Com:</b> Commercial Training in
          Electric Vehicles Industry. Individuals with acumen and/or experience
          of marketing sales of spares, tools & other allied equipment.{" "}
        </td>
        <td>
          <ul>
            <li>Essential spares for EVs</li>
            <li>Optional accessories required in EVs</li>
            <li>Tools, Spares & batteries</li>
            <li>Controllers, throttle & braking equipment</li>
          </ul>
        </td>
        <td>30 Days</td>
      </tr>
    </table>
  );
};

export default Table;
