const winList = document.getElementById('wins');
let wins = JSON.parse(localStorage.getItem('wins')) || [];

function render() {
  winList.innerHTML = '';
  wins.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = item;
    winList.appendChild(li);
  });
}

function addWin() {
  const now = new Date().toLocaleString();
  wins.push(`✅ Win at ${now}`);
  localStorage.setItem('wins', JSON.stringify(wins));
  render();
}

render();
