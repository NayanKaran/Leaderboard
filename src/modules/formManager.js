import scoreList from './scorelist.js';

const addScoreForm = document.querySelector('#score-form');
addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  scoreList.list.addScore(
    addScoreForm.elements.name.value,
    addScoreForm.elements.score.value,
  );
});