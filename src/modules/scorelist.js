import ScoreBoard from './scoreboard.js';

const scoreList = {};

(async () => {
  scoreList.list = await ScoreBoard.createScoreBoard('New Game by NayanKaran1');
})();

export default scoreList;