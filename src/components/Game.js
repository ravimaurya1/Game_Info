import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { smallImage } from "../utils";

const Game = ({ name, released, image, id }) => {
  const gameId = id.toString();
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={gameId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  h3 {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  }
  text-align: center;
  border-radius: 1rem;
  min-height: 30vh;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
