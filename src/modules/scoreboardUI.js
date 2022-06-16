const scoreListElement = document.querySelector("#score-list");

export function addScoreToUI(data) {
  const listElement = document.createElement("li");
  listElement.innerText = `${data.user}: ${data.score}`;
  scoreListElement.appendChild(listElement);
}
export function showScoresToUI(list) {
  scoreListElement.innerHTML = "";
  list.forEach((element) => {
    const listElement = document.createElement("li");
    listElement.innerText = `${element.user}: ${element.score}`;
    scoreListElement.appendChild(listElement);
  });
}
