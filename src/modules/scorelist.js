import ScoreBoard from './scoreboard.js';
import displayUI from './initializeUI.js';

const scoreList = {};

(async () => {
  scoreList.list = await ScoreBoard.createScoreBoard('New Game by NayanKaran1');
  displayUI();
})();

export default scoreList;