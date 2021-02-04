import React from "react";
import { useHistory } from "react-router-dom";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useSelector } from "react-redux";
import { smallImage } from "../utils";

//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

//Get Platform Images
const getPlatform = (platform) => {
  switch (platform) {
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
};

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating:{game.rating}</p>
                <div
                  style={{ display: "flex", width: "6rem", height: "1.5rem" }}
                >
                  {getStars()}
                </div>
              </div>
              <Info>
                <h3>Platform</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        src={getPlatform(data.platform.name)}
                        key={data.platform.id}
                        alt="image"
                      />
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={smallImage(game.background_image, 640)} alt="image" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    src={smallImage(screen.image, 640)}
                    key={screen.id}
                    alt="game"
                  />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
