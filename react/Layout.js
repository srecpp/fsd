import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <style>{`
        .layout-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .navbar {
          width: 100%;
          background-color: #333;
          padding: 10px 0;
        }

        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .navbar ul li {
          display: inline;
        }

        .navbar ul li a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          padding: 10px 15px;
        }

        .navbar ul li a:hover {
          text-decoration: underline;
        }
      `}</style>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Page1</Link></li>
          <li><Link to="/page2">Page2</Link></li>
          <li><Link to="/page3">Page3</Link></li>
          <li><Link to="/page4">Page4</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
