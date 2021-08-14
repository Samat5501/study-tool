import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      display: block;
    }
  }
`;

const RightNav = ({ open }) => {
    const state = useSelector(state => state.success)
  return (
    <Ul open={open}>
      {state ? (
        <><li>
          <Link to={routes.home}>Home</Link>
          </li>
            <li>
              <Link to="/content"> Getting Started</Link>
            </li>
            <li>
              <Link to={routes.help}> Need help?</Link>
            </li>
           <li><Link to={routes.user_profile}> profile</Link>
          </li>
        </>
      ) : (
        <>
          <li><Link to={routes.home}>Home</Link></li>
          <li><Link to={routes.help}>Need help?</Link></li>
          <li><Link to={routes.login}>Login</Link></li>
         <li> <Link to={routes.sign_up}>Sign Up</Link></li>
        </>
      )}
    </Ul>
  );
};

export default RightNav;
