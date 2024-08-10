import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basic from "./pages/Basic";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {isAuthenticated && <Sidebar />}
        {/* routes */}
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUserRole={setUserRole}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            }
          >
            <Route path="/" element={<Basic />} />
            <Route path="basic" element={<Basic />} />
            <Route
              path="dashboard"
              element={
                <Dashboard
                  title={"3 x 1 grid"}
                  componentData={{
                    rowsCount: 2,
                    row1: [
                      { component: "Stats", col: 1 },
                      { component: "BarComp", col: 1 },
                      { component: "DvPie", col: 1 },
                    ],
                    row2: [{ component: "DataTable", col: 3 }],
                  }}
                />
              }
            />
            <Route
              path="dashboard1"
              element={
                <Dashboard
                  title={"2 x 2 grid"}
                  componentData={{
                    rowsCount: 2,
                    row2: [
                      { component: "Stats", col: 1 },
                      { component: "DvPie", col: 1 },
                    ],
                    row1: [
                      { component: "DataTable", col: 2 },
                      { component: "BarComp", col: 1 },
                    ],
                  }}
                />
              }
            />

            {userRole === "premium" || userRole === "admin" ? (
              <>
                <Route path="premium" element={<Premium />} />
              </>
            ) : (
              <Route
                path="premium"
                element={<NotFound userRole={"Upgrade to Premium User"} />}
              />
            )}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
