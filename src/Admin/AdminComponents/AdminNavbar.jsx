import React from "react";
import { Link } from "react-router-dom";
import './AdminNavbar.css'
const AdminNavbar = () => {
  return (
    <nav className="bg-gray-200 px-12  text-slate-50 p-4 flex justify-between items-center">
      <Link to="/" className="header text-2xl font-bold">
        Nomadic{" "}
      </Link>
      <div className="flex space-x-4">
        <Link to="/admin" className="header hover:bg-gray-700 px-3 py-2 rounded">
          Tours
        </Link>
        <Link to="/users" className="header hover:bg-gray-700 px-3 py-2 rounded">
          Users
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
