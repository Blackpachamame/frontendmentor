const summary = document.getElementById('summary-data');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i += 1) {
            summary.innerHTML += `
        <div class="card__summary-${data[i].name}">
            <div class="info__${data[i].name}">
              <img src="${data[i].icon}" alt="icon-${data[i].name}">
              <h3>${data[i].category}</h3>
            </div>
            <p class="info__score"><span class="score-${data[i].name}">${data[i].score}</span><span> / 100</span></p>
          </div>
    `
        }
    })