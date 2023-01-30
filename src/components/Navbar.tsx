import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: gray;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
        Home
      </Link>
      <div>
        <Link
          to="/upload"
          style={{ color: "white", fontWeight: "bold", marginRight: "10px" }}
        >
          Upload
        </Link>
        <Link to="/listen" style={{ color: "white", fontWeight: "bold" }}>
          Listen
        </Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
