import React, { useState, useEffect } from 'react';
import AdminNavbar from '../AdminComponents/AdminNavbar';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://20.244.89.90:8000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data.data); // Assuming data is structured with a 'data' key containing an array of user objects
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
