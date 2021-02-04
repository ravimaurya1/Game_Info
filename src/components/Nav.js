import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const clickHandler = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clickHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={submitSearch}>
        <input type="text" onChange={inputHandler} value={textInput} />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 1rem 1rem;
  text-align: center;
  input {
    width: 35%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    margin-top: 0.7rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.2rem;
    height: 2.3rem;
    border: none;
    padding: 0.2rem 1rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: 0px 0px 30px rgba(200, 15, 100, 0.2);
  }
  button:hover {
    color: #000000;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
