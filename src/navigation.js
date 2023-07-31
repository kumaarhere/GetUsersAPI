import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="brand">KANDHAQ</div>
      <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
