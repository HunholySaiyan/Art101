const cardContainer4 = document.querySelector('.cards4')


cardContainer4.addEventListener('click', e => {
  const cardInfoBtn4 = e.target.closest('.card__more-info4')
  const cardLessBtn4 = e.target.closest('.card__less-info4')

  if (cardInfoBtn4) {
    cardInfoBtn4.parentNode.parentNode.classList.add('card--open4')
  }

  if (cardLessBtn4) {
    cardLessBtn4.parentNode.parentNode.classList.remove('card--open4')
  }
})
