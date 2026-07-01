const films = [
  {
    title: 'Nike Tênis Air Max 95 "Photon Dust" Cinza FARFETCH BR',
    review: 8.8,
    genre: 'Tênis',
    poster: 'https://cdn-images.farfetch-contents.com/21/53/61/47/21536147_52419902_1000.jpg',
   description:'O Nike Air Max 95 "Photon Dust" combina estética urbana e conforto com seu design inspirado na anatomia humana, apresentando camadas em tons de cinza e o clássico amortecimento Max Air visível. Com cabedal em mesh e material sintético, o modelo oferece durabilidade e ventilação, sendo ideal para uso diário. Encontre o Nike Air Max 95 "Photon Dust" na Farfetch Brasil.',
  },
  {
    title: 'Nike Air Max TN Plus Masculino',
    review: 9.2,
    genre: 'Tênis',
    poster: 'https://imgnike-a.akamaihd.net/360x360/00021251A2.jpg',
     description:'O Nike Air Max Plus Masculino (Nike TN) é um ícone do streetwear lançado em 1998. Famoso pelo visual "Tubarão" com linhas que imitam palmeiras tropicais, ele estreou a tecnologia Tuned Air para um amortecimento ultraestável. É o equilíbrio exato entre o conforto esportivo e a máxima atitude urbana.',
  },
  {
   title: 'Nike Air Force 1 Low White X NOCTA',
   review: 8.9,
   genre: 'Tênis',
   poster: 'https://droper-media.us-southeast-1.linodeobjects.com/18202218236985.webp',
   description:'O Nike TN (Air Max Plus) é um ícone do streetwear lançado em 1998. Famoso pelo visual "Tubarão" com linhas que imitam palmeiras, ele estreou a tecnologia Tuned Air para amortecimento ultraestável. É o equilíbrio exato entre o conforto esportivo e a máxima atitude urbana.',
  },
  {
   title: 'NOCTA x Nike Jaqueta Tech Fleece Full-zip Black University Gold',
   review: 9.0,
   genre: 'Jaqueta',
   poster: 'https://droper-media.us-southeast-1.linodeobjects.com/108202315537565.webp',
   description:'A jaqueta NOCTA x Nike Tech Fleece Full-Zip "Black University Gold" é fruto da colaboração premium entre a Nike e a marca do rapper Drake. A peça celebra os 10 anos do tecido Tech Fleece, oferecendo isolamento térmico leve e toque macio sem volume. Com design em preto e detalhes em amarelo ouro, ela apresenta capuz duplo, mangas articuladas e caimento atlético de luxo que une perfeitamente conforto esporte e alta atitude urbana.',
  },
  {
    title: 'Tênis Nike Air Max Fire Masculino',
    review: 8.9,
    genre: 'Tênis',
    poster: 'https://imgnike-a.akamaihd.net/360x360/097641IFA2.jpg',
    description: 'Elegante e seguro, o Fire é uma edição especial da família Air Max.',
  },
  {
    title: 'Tênis Nike Air Max Excee Masculino',
    review: 8.4,
    genre: 'Tênis',
    poster: 'https://imgnike-a.akamaihd.net/360x360/027322IDA10.jpg',
    description: 'Entre no ritmo com o Nike Air Max Excee e os toques sutis de cores novas para um estilo que desafia o tempo. Inspirados no Nike Air Max 90, estes tênis dão um toque moderno ao ícone lendário, com linhas de design alongadas e proporções distorcidas.',
  },
  {
    title: 'Tênis Nike Court Vision Low Masculino',
    review: 8.8,
    genre: 'Tênis',
    poster: 'https://imgnike-a.akamaihd.net/360x360/058760IDA2.jpg',
    description: 'Adora o look clássico do basquete dos anos 80, mas tem uma queda pela cultura de ritmo acelerado dos jogos atuais? Conheça o Court Vision Low. Ele mantém a alma do original, com couro sintético nítido e sobreposições costuradas, enquanto a gola de felpa mantém a elegância e o conforto para o seu mundo.',
  },
  {
    title: 'Camisa Brasil Nike I 2026/27 Fã Masculina',
    review: 8.7,
    genre: 'Camisa',
    poster: 'https://imgnike-a.akamaihd.net/360x360/09843700A13.jpg',
    description: 'A camisa Nike Brasil 2026 oferece design autêntico para conforto, produzida com material 100% poliéster importado, é durável e fácil de cuidar. Ideal para torcedores que buscam estilo em cada jogo.',
  },
  {
    title: 'Jaqueta Brasil Dri-FIT Nike Academy Pro Masculina',
    review: 8.5,
    genre: 'Jaqueta',
    poster: 'https://imgnike-a.akamaihd.net/360x360/09844215A6.jpg',
    description: 'Após dominar o básico, leve suas habilidades a outro nível. O caimento elegante também conta com absorção de umidade para manter o frescor quando o ritmo do treino aumenta.',
  },
  {
    title: 'Chuteira Vini Jr Campo Nike Mercurial Zoom Vapor 16 Pros',
    review: 8.6,
    genre: 'chuteira',
    poster: 'https://imgnike-a.akamaihd.net/360x360/096195MTA11.jpg',
    description: 'Quando você está em campo, quer que notem você, assim como Vini Jr. Inspirada no talento que ele leva para cada partida, esta chuteira marcante é feita com amortecimento Air Zoom responsivo e um padrão de tração ondulado para garantir que será a última coisa que os zagueiros verão quando você passar.',
  },
  {
    title: 'Chuteira Society Nike Mercurial Vapor 16 Club',
    review: 8.1,
    genre: 'chuteira',
    poster: 'https://imgnike-a.akamaihd.net/360x360/02950216A2.jpg',
    description: 'Seja para começar ou jogar por diversão, o tênis Club leva você para o campo sem abrir mão da qualidade. A Vapor 16 foi feita pensando na velocidade. O que acontece se misturarmos essa velocidade com o toque na bola e o conforto? É bola na rede.',
  },
  {
    title: 'Chuteira Campo Nike Tiempo Maestro Academy',
    review: 8.9,
    genre: 'chuteira',
    poster: 'https://imgnike-a.akamaihd.net/360x360/09657051A17.jpg',
    description: 'A Tiempo Maestro Academy coloca você no controle de cada toque. Feita com couro FlyTouch, sua textura macia ajuda a controlar a bola para você desarmar qualquer defesa.',
  },
];

const filmList = document.getElementById('filmList');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');
const yearInput = document.getElementById('yearInput');
const review = document.getElementById('review');

function getUniqueGenres() {
  return Array.from(new Set(films.map((film) => film.genre))).sort();
}

function renderGenres() {
  const genres = getUniqueGenres();
  genres.forEach((genre) => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function renderFilms(filteredFilms) {
  filmList.innerHTML = '';

  if (filteredFilms.length === 0) {
    filmList.innerHTML = '<div class="no-results">Nenhum filme corresponde ao filtro atual.</div>';
    return;
  }

  filteredFilms.forEach((film) => {
    const card = document.createElement('article');
    card.className = 'film-card';

    card.innerHTML = `
      <div class="poster-wrapper">
        <img class="film-poster" src="${film.poster}" alt="Capa de ${film.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x600/111111/ff0000?text=Sem+Capa'" />
      </div>
      <div class="film-details">
        <h2>${film.title}</h2>
        <div class="film-meta">
          <span>${film.genre}</span>
          <span>${film.year}</span>
          <span>⭐ ${film.review.toFixed(1)}</span>
        </div>
        <p class="film-description">${film.description}</p>
      </div>
       <div class="rating-stars" data-index="${films.indexOf(film)}">
       <span data-value="1">☆</span>
       <span data-value="2">☆</span>
       <span data-value="3">☆</span>
       <span data-value="4">☆</span>
       <span data-value="5">☆</span>
      </div>

      <div class="poster-wrapper">
      
      </div>

      <div class="film-details">

      </div>
      `;

    filmList.appendChild(card);
    const stars = card.querySelectorAll('.rating-stars span');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = Number(star.dataset.value);

    film.review = rating;

    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.add('active');
        s.textContent = '★';
      } else {
        s.classList.remove('active');
        s.textContent = '☆';
      }
    });
  });
});
  });
  star.addEventListener('click', () => {
  const rating = Number(star.dataset.value);

  film.review = rating;

  localStorage.setItem(`rating-${film.title}`, rating);

  renderFilms(films);
});
}

function filterFilms() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreSelect.value;

  const filtered = films.filter((film) => {
    const matchesTitle = film.title.toLowerCase().includes(query);
    const matchesGenre = selectedGenre === 'all' || film.genre === selectedGenre;
    const matchesYear = Number.isNaN(yearValue) || film.year === yearValue;

    return matchesTitle && matchesGenre && matchesYear;
  });

  renderFilms(filtered);
}

searchInput.addEventListener('input', filterFilms);
genreSelect.addEventListener('change', filterFilms);
yearInput.addEventListener('input', filterFilms);

renderGenres();
renderFilms(films);