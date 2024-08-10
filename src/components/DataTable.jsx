import { useState } from "react";
import Table from "./common/Table";
import { fakeData as FK } from "../api/fakeData";

const DataTable = () => {
  const [fakeData, setFakeData] = useState(FK);
  return <div>Random Table here</div>;
};

export default DataTable;
