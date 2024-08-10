import DvPie from "./DvPie";
import Stats from "./Stats";
import BarComp from "./BarComp";
import DataTable from "./DataTable";

// Map component names to their actual components
const componentMap = {
  Stats,
  DvPie,
  BarComp,
  DataTable,
};

// ComponentRenderer to dynamically render based on component name
const ComponentRenderer = ({ item }) => {
  const ComponentToRender = componentMap[item.component];
  return ComponentToRender ? <ComponentToRender /> : null;
};

const Bento = ({ item }) => {
  return (
    <div className={`col-span-${item.col}`}>
      <ComponentRenderer item={item} />
    </div>
  );
};

export default Bento;
