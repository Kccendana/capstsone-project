const navButton = document.querySelector('.nav-button');// \r\n
const navList = document.querySelector('.menu-list');// \r\n
const navMenu = document.querySelectorAll('.navMenu');// \r\n
const nav = document.querySelector('.nav');

navButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  navButton.classList.toggle('close');
  nav.classList.toggle('open');
}, false);

navMenu.forEach((links) => links.addEventListener('click', () => {
  navList.classList.remove('show');
  navButton.classList.remove('close');
  nav.classList.remove('open');
}));

window.onresize = () => {
  if (window.innerWidth > 760) navList.classList.remove('show');
  nav.classList.remove('open');
  navButton.classList.remove('close');
};

// program-categories
const programList = [
  {
    icon: './assets/program_icon_01.png',
    title: 'Conferences',
    description: 'Learn techniques to cultivate inner peace, reduce stress, and enhance mental clarity.',
  },
  {
    icon: './assets/program_icon_02.png',
    title: 'Exhibition',
    description: 'Experience the holistic approach of health and welness with Doterra.',
  },
  {
    icon: './assets/program_icon_03.png',
    title: 'Forum',
    description: 'Mingle with fellow advocates to share your thoughts and opinions with experts for each topic covered.',
  },
  {
    icon: './assets/program_icon_04.png',
    title: 'Workshop',
    description: 'Instead of just looking at creations using open source, you can create them yourself.',
  },
  {
    icon: './assets/program_icon_05.png',
    title: 'Connect',
    description: 'Create opportunities to freely network with Wellness Advocate from around the world.',
  },
];

const programCategoriesContainer = document.querySelector('.program');

function createProgramCategories() {
  programList.forEach((category) => {
    programCategoriesContainer.innerHTML += `
        <div class="program-categories-details">
          <img src="${category.icon}" alt="program-ico">
          <span>${category.title}</span>
          <p>${category.description}</p>
        </div>
      `;
  });
}
createProgramCategories();

// speaker
const speakersList = [
  {
    img: './assets/dr-hill.jpg',
    name: 'Dr. David Hill',
    profession: 'Founding Executive Chief Medical Officer',
    description: 'A well-known figure in the field of essential oils and natural health. He is an expert in the therapeutic use of essential oils and serves as the Chief Medical Officer of doTERRA, a leading essential oil company.',
  },
  {
    img: './assets/emily_wright.jpeg',
    name: 'Emily Wright',
    profession: 'Founding Executive, Global Leadership Development',
    description: 'With nearly two decades of understanding and leadership in the global essential oils market, she continues to guide Wellness Advocates and the internal corporate team in collaborative efforts to make the world a better place.',
  },
  {
    img: './assets/elizabeth_gilbert.jpg',
    name: 'Elizabeth Gilbert',
    profession: 'American journalist and author',
    description: 'Best known for her 2006 memoir, Eat, Pray, Love, which has sold over 12 million copies and has been translated into over 30 languages. The book was also made into a film of the same name in 2010.',
  },
  {
    img: './assets/hanson.jpg',
    name: 'Dr. Rick Hanson',
    profession: 'Senior Fellow of UC Berkeley\'s Greater Good Science Center',
    description: 'A psychologist and have written and taught about the essential inner skills of personal well-being, psychological growth, and contemplative practice – as well as about relationships, family life, and raising children.',
  },
  {
    img: './assets/Rodney_yee.jpg',
    name: 'Rodney Yee',
    profession: 'American Yoga Instructor',
    description: 'An American yoga instructor who rose to national prominence in the mid-1990s when he was featured on the cover of Yoga Journal magazine and later starred in a series of Gaiam/Living Arts yoga instructional videos and DVDs.',
  },
  {
    img: './assets/kimberly-snyder.jpg',
    name: 'Kimberly Snyder',
    profession: 'Founder of Solluna',
    description: 'He led the open source project at the Mozilla Foundation and joined the CC CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const container = document.querySelector('.speakers');

function speakersCard() {
  speakersList.forEach((speaker) => {
    container.innerHTML += `<div class="speaker-list">
    <img src="${speaker.img}" alt="" class="speaker-img">
    <div class="speaker-content">
      <h3 class="speaker-header">${speaker.name}</h3>
      <h4 class="speaker-profession">${speaker.profession}</h4>
      <hr class="speaker-line">
      <p class="speaker-description">${speaker.description}</p>
    </div>
  </div>`;
  });
}

speakersCard();
// More button functionality

const speakerBtn = document.querySelector('.speaker-btn');
const btnName = document.querySelector('.btn-name');
const speakers = Array.from(document.querySelectorAll('.speaker-list'));
const arrow = document.querySelector('.arrow');

function hideSpeakers() {
  if (window.innerWidth < 768) {
    speakers.slice(-4).forEach((speaker) => {
      speaker.classList.toggle('hide');
      btnName.textContent = 'More';
      arrow.style.transform = '';
    });
  } else {
    speakers.forEach((speaker) => {
      speaker.classList.remove('hide');
      btnName.textContent = 'Less';
      arrow.style.transform = 'rotate(180deg)';
    });
  }
}

speakerBtn.addEventListener('click', () => {
  speakers.slice(-4).forEach((speaker) => {
    speaker.classList.toggle('hide');
  });

  if (btnName.textContent === 'More') {
    btnName.textContent = 'Less';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    btnName.textContent = 'More';
    arrow.style.transform = '';
  }
});

window.addEventListener('resize', () => { // check window on resizing
  hideSpeakers();
});
