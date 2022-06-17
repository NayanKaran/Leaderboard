import scoreList from './scorelist.js';

const addScoreForm = document.querySelector('#score-form');
addScoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  addScoreForm.lastElementChild.disabled = true;
  await scoreList.list.addScore(
    addScoreForm.elements.name.value,
    addScoreForm.elements.score.value,
  );
  addScoreForm.lastElementChild.disabled = false;
});