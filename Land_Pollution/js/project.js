
gsap.registerPlugin(ScrollTrigger);

// Part 1
gsap.to('header', { autoAlpha: 0,
    scrollTrigger: {
      id: 'header',
      trigger: '.scrollTriggerLogo',
      start: 'top top+=100',
      end: '+=200',
      scrub: true,
      // markers: true
    }
});

// Part 2
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  gsap.to(section, {autoAlpha: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse',
      // markers: true
    }
  });

  ScrollTrigger.create({
    trigger: section,
    id: index+1,
    start: 'top center',
    end: () => `+=${section.clientHeight + 60}`,
    toggleActions: 'play reverse none reverse',
    toggleClass: {targets: section, className: "is-active"},
    // markers: true
  })

})
const cardContainer = document.querySelector('.cards')


cardContainer.addEventListener('click', e => {
  const cardInfoBtn = e.target.closest('.card__more-info')
  const cardLessBtn = e.target.closest('.card__less-info')

  if (cardInfoBtn) {
    cardInfoBtn.parentNode.parentNode.classList.add('card--open')
  }

  if (cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('card--open')
  }
})


const cardContainer2 = document.querySelector('.cards2')


cardContainer2.addEventListener('click', e => {
  const cardInfoBtn2 = e.target.closest('.card__more-info2')
  const cardLessBtn2 = e.target.closest('.card__less-info2')

  if (cardInfoBtn2) {
    cardInfoBtn2.parentNode.parentNode.classList.add('card--open2')
  }

  if (cardLessBtn2) {
    cardLessBtn2.parentNode.parentNode.classList.remove('card--open2')
  }
})
const cardContainer3 = document.querySelector('.cards3')


cardContainer3.addEventListener('click', e => {
  const cardInfoBtn3 = e.target.closest('.card__more-info3')
  const cardLessBtn3 = e.target.closest('.card__less-info3')

  if (cardInfoBtn3) {
    cardInfoBtn3.parentNode.parentNode.classList.add('card--open3')
  }

  if (cardLessBtn3) {
    cardLessBtn3.parentNode.parentNode.classList.remove('card--open3')
  }
})
