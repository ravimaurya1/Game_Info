import axios from "axios";
import {
  popularGamesURL,
  newGameURL,
  upcomingGameURL,
  searchGameURL,
} from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  // Fetch axios
  try {
    var popularData = await axios.get(popularGamesURL());
    var newGamesData = await axios.get(newGameURL());
    var upcomingData = await axios.get(upcomingGameURL());
  } catch (error) {
    console.log("Error is here");
  }
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (text) => async (dispatch) => {
  var search = await axios.get(searchGameURL(text));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: search.data.results,
    },
  });
};
