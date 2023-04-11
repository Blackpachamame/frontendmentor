fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const reactionScore = document.querySelector('.score-reaction');
        reactionScore.textContent = data[0].score;

        const memoryScore = document.querySelector('.score-memory');
        memoryScore.textContent = data[1].score;

        const verbalScore = document.querySelector('.score-verbal');
        verbalScore.textContent = data[2].score;

        const visualScore = document.querySelector('.score-visual');
        visualScore.textContent = data[3].score;
    })
    .catch(error => console.error(error));