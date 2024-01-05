let ratingContainer = document.querySelector('.card__container-rating');
let rateNumber = document.querySelector('.number-selected');
let submitBtn = document.querySelector('.card__button-submit');
let cardRatingState = document.querySelector('.card__rating-state');
let cardThankYou = document.querySelector('.card__thank-you');

ratingContainer.addEventListener('click', e => {
    let numberRating = e.target.innerText;
    rateNumber.innerText = numberRating;

    if (numberRating > 0 || numberRating <= 5) {
        submitBtn.addEventListener('click', () => {
            cardRatingState.style.display = 'none';
            cardThankYou.style.display = 'flex';
        })
    }
})