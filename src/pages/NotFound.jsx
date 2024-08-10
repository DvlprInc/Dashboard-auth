import Header from "../components/common/Header";

const NotFound = ({ userRole = "undefined" }) => {
  return (
    <>
      <div className="relative z-10 flex-1 overflow-auto p-4">
        <Header title={userRole || "404"} />
        <div className="flex flex-row flex-wrap gap-4">
          <div>{userRole || "404"}</div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
