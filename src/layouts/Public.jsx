import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const token = localStorage.getItem("accessToken");

  return token==null ? <Outlet /> : <Navigate to="/users" />;
};

export default Public;