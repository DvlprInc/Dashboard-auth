import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const [username, setUsername] = useState("");
  const [showCreds, setShowCreds] = useState(true);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "krishna" && password === "krishna") {
      setIsAuthenticated(true);
      setUserRole("basic");
      navigate("/basic");
    } else if (username === "dvlpr" && password === "dvlpr") {
      setIsAuthenticated(true);
      setUserRole("premium");
      navigate("/premium");
    } else if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      setUserRole("admin");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="3xl:w-1/3 3xl:p-14 mx-auto flex h-fit max-h-fit w-full flex-col rounded-2xl bg-[#ffffff] p-8 shadow-xl md:w-1/2 md:p-10 xl:w-2/5 2xl:w-2/5 2xl:p-12">
        <div className="flex flex-col gap-y-1 pb-4">
          <h1 className="my-auto text-2xl text-[#4B5563]">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex max-h-fit flex-col">
          <div className="pb-2">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Username
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
                placeholder="username"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 mb-6 w-full rounded-lg bg-[#4F46E5] px-5 py-2.5 text-center text-sm font-medium text-[#FFFFFF] focus:outline-none focus:ring-4"
          >
            Login
          </button>
          <div className="text-left text-sm font-light text-[#6B7280]">
            <div className="mb-4">
              <div className="mt-6 flex gap-x-4">
                <button
                  onClick={() => {
                    setUsername("krishna");
                    setPassword("krishna");
                  }}
                  className="focus:ring-primary-300 w-fit rounded-lg border-2 border-gray-300 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-gray-600 hover:bg-gray-200"
                >
                  Sign in as Basic
                </button>

                <button
                  onClick={() => {
                    setUsername("admin");
                    setPassword("admin");
                  }}
                  className="focus:ring-primary-300 w-fit rounded-lg border-2 border-gray-500 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-gray-800 hover:bg-gray-300"
                >
                  Sign in as Admin
                </button>
              </div>
            </div>
            <p
              className="mb-4 flex cursor-pointer justify-between border-2 p-2"
              onClick={() => setShowCreds((pv) => !pv)}
            >
              Credentials <span>{showCreds ? "🔻" : "🔺"}</span>
            </p>
            <table
              className={`${
                showCreds ? "hidden" : "table"
              } w-full border border-gray-300 text-left`}
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">Type</th>
                  <th className="border border-gray-300 p-2">Username</th>
                  <th className="border border-gray-300 p-2">Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Basic User</td>
                  <td className="border border-gray-300 p-2">krishna</td>
                  <td className="border border-gray-300 p-2">krishna</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin User</td>
                  <td className="border border-gray-300 p-2">admin</td>
                  <td className="border border-gray-300 p-2">admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
