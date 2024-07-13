import React from 'react';
import AdminNavbar from './AdminNavbar';

const Layout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
