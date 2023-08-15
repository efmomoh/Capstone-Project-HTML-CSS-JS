const featuredSpeakers = [
  {
    id: 1,
    image: 'images/ENSSAH FAYIA MOMOH.jpg',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
  {
    id: 2,
    image: 'images/ENSSAH FAYIA MOMOH.jpg',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
  {
    id: 3,
    image: 'images/EFM.JPG',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
  {
    id: 4,
    image: 'images/EFM.JPG',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
  {
    id: 5,
    image: 'images/EFM.JPG',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
  {
    id: 6,
    image: 'images/EFM.JPG',
    name: 'Enssah F. Momoh',
    title: 'Enssah is a Microverse Student learning web development.',
    description: 'He holds a bachelor of science degree in Chemistry from the University of Liberia.',
  },
];

function createSpeakers() {
  const person = document.querySelector('.speaker-section-one');
  featuredSpeakers.forEach((speaker) => {
    const orator = `
    <ul class="card-container">
      <li class="count">
          <div class="img-container">
              <img class="image" src="${speaker.image}" alt="mr-momoh-image">
          </div>
          <div class="textContent">
              <a class="name text-decoration-none">${speaker.name}</a>
              <p class="info1 py-1">${speaker.title}</p><hr>
              <p class="info2">${speaker.description}</p>
          </div>
      </li>
    </ul>`;
    person.innerHTML += orator;
  });

  // After generating the speaker cards, hide extra cards beyond the first two

  const speakerCards = document.querySelectorAll('.card-container');
  for (let i = 2; i < speakerCards.length; i += 1) {
    speakerCards[i].classList.add('speaker-section-two');
  }
}

createSpeakers();

const moreBtn = document.querySelector('.moreBtn');
moreBtn.addEventListener('click', () => {
  const speakerCards = document.querySelectorAll('.card-container');
  for (let i = 2; i < speakerCards.length; i += 1) {
    speakerCards[i].classList.toggle('speaker-section-two');
  }

  // Updating the button text based on the state of the event listener

  if (document.querySelectorAll('.speaker-section-two').length > 0) {
    moreBtn.textContent = 'MORE';
  } else {
    moreBtn.textContent = 'LESS';
  }
});

window.addEventListener('DOMContentLoaded', () => createSpeakers());