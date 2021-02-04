// Base URL
const base_url = "https://api.rawg.io/api";

// Getting the data
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const newgames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}/${popular_games}`;
};

export const upcomingGameURL = () => {
  return `${base_url}/${upcoming_games}`;
};

export const newGameURL = () => {
  return `${base_url}/${newgames}`;
};

// Game Details
export const gameDetailURL = (id) => {
  return `${base_url}/games/${id}`;
};

//Games ScreenShots
export const gameScreenshotURL = (id) => {
  return `${base_url}/games/${id}/screenshots`;
};

// Searched game
export const searchGameURL = (game_name) => {
  return `${base_url}/games?search=${game_name}&page_size=9`;
};
