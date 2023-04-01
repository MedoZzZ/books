import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Admin from "../pages/admin/admin";
import Login from "../pages/login/login";
import Reader from "../pages/reader/reader";
const Account = () => {
  const [searchparams] = useSearchParams();
  const Email = searchparams.get("Email");

  if (Email == null) {
    return <Login />;
  } else if (Email.includes("@admin")) {
    return <Admin />;
  } else {
    return <Reader />;
  }
};
export default Account;
