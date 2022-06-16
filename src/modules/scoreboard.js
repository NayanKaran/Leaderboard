import { getGameId, getUsers, postUser } from './gameapi.js';
import { showScoresToUI, addScoreToUI } from './scoreboardUI.js';

export default class ScoreBoard {
  constructor(gameId, scoreList) {
    this.gameId = gameId;
    this.scoreList = scoreList;
  }

  static createScoreBoard = async (gameName) => {
    const gameId = await getGameId(gameName);
    const { data } = await getUsers(gameId);
    const scoreList = data.result;
    showScoresToUI(scoreList);
    return new ScoreBoard(gameId, scoreList);
  };

  addScore = async (user, score) => {
    await postUser(this.gameId, {
      user,
      score,
    });
    this.scoreList.push({ user, score });
    addScoreToUI({
      user,
      score,
    });
  };

  syncScoreBoard = async () => {
    const { data } = await getUsers(this.gameId);
    this.scoreList = data.result;
    showScoresToUI(this.scoreList);
  };
}
