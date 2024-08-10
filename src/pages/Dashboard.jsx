import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Bento from "../components/Bento";

const Dashboard = ({ title, componentData }) => {
  const [layoutData, setLayoutData] = useState([]);

  useEffect(() => {
    if (componentData) {
      const rows = [];
      for (let i = 1; i <= componentData.rowsCount; i++) {
        const rowKey = `row${i}`;
        if (componentData[rowKey]) {
          rows.push(componentData[rowKey]);
        }
      }
      setLayoutData(rows);
    }
  }, [componentData]);

  return (
    <div className="relative z-10 flex-1 overflow-auto p-4">
      <Header title={title || "Dashboard"} />
      <div className="mb-4 flex flex-col gap-4">
        {layoutData &&
          layoutData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 sm:gap-5"
              style={{
                gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
              }}
            >
              {row.map((item, itemIndex) => (
                <div key={itemIndex} className={`col-span-${item.col}`}>
                  <Bento item={item} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
