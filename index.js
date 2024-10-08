window.addEventListener('load', function () {
  const gamesGroupSwiper = new Swiper('.gamesGroup-mob .swiper', {
    speed: 300,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 18,
    navigation: {
      nextEl: '.gamesGroup-mob .swiper-button-next',
      prevEl: '.gamesGroup-mob .swiper-button-prev',
    },
  });

  const toggleBtns = document.querySelectorAll('.dropDownBtn');

  toggleBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
      // remove item sibling class
      toggleBtns.forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.remove('show');
        }
      });
      item.classList.toggle('show');
    });
  });

  const games = [
    {
      gamesId: 'HAWKPLAY',
      gamesLinks: [
        'https://www.hawkfun.com',
        'https://www.hawkplaybet888.com',
        'https://www.hawkplayclub777.com',
      ],
    },
    {
      gamesId: 'LODIBET',
      gamesLinks: [
        'https://www.lodibet111.com',
        'https://www.lodibet101.com',
        'https://www.lodibet118.com',
      ],
    },
    {
      gamesId: 'LAWINPLAY',
      gamesLinks: [
        'https://www.lawinplay.ph',
        'https://www.lawingame.ph',
        'https://www.lawinplay7.com',
      ],
    },
    {
      gamesId: 'DIWATAPLAY',
      gamesLinks: [
        'https://www.jiligame.tw',
        'https://www.diwata8.de',
        'https://www.diwata.tw',
      ],
    },
    {
      gamesId: 'CPUNKPLAY',
      gamesLinks: [
        'https://www.cpunkph.ph',
        'https://www.cpunkbet.ph',
        'https://www.cpunkgame.ph',
      ],
    },
    {
      gamesId: 'KUYAPLAY',
      gamesLinks: [
        'https://www.kuyaplay17.com',
        'https://www.kuyaplay18.com',
        'https://www.kuyalab.ws/',
      ],
    },
  ];
  const gameBoxBtnArr = document.querySelectorAll('.game-box-btn');
  gameBoxBtnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      games.forEach((game) => {
        if (game.gamesId === btn.dataset.id) {
          let randomLink =
            game.gamesLinks[Math.floor(Math.random() * game.gamesLinks.length)];
          window.open(randomLink, '_blank');
        }
      });
    });
  });
});
