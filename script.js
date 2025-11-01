
const numStars = 200;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = star.style.height = Math.random() * 2 + 'px';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (1 + Math.random() * 2) + 's';
  document.body.appendChild(star);
}

// 🌠 Shooting stars
function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  star.style.top = Math.random() * window.innerHeight / 2 + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}
setInterval(() => {
  for (let i = 0; i < 5; i++)
    setTimeout(createShootingStar, i * 100);
}, 1000);

// 🎵 Music Controls
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

const playlist = [
  'MUSICS/7.mp4',
  'MUSICS/8.mp4',
  'MUSICS/10.mp4',
  'MUSICS/11.mp4',
  'MUSICS/12.mp4',
  'MUSICS/13.mp4',
];

const bgImages = {
  1: 'MUSICS/8.jpg',
  3: 'MUSICS/11.jpg',
  4: 'MUSICS/12.jpg',
  5: 'MUSICS/13.jpg',
};

const audioIndices = [1, 3, 4, 5];
let currentSong = 0;
let currentAudio = null; // 🔥 to store current playing audio (if any)

function stopAll() {
  music.pause();
  music.currentTime = 0;
  music.style.display = 'none';

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

function playSong(index) {
  stopAll(); // always stop previous media

  if (index >= playlist.length) {
    nextBtn.style.display = 'none';
    alert("🎵 All songs finished!");
    return;
  }

  const src = playlist[index];
  if (audioIndices.includes(index)) {
    // play as audio with background
    document.body.style.backgroundImage = `url('${bgImages[index]}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    currentAudio = new Audio(src);
    currentAudio.play();
    music.style.display = 'none';
  } else {
    // play as video
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    music.src = src;
    music.style.display = 'block';
    music.currentTime = 0;
    music.play();
  }

  nextBtn.style.display = 'block';
}

playBtn.addEventListener('click', () => {
  playSong(currentSong);
  playBtn.classList.add('hide');
});

nextBtn.addEventListener('click', () => {
  currentSong++;
  playSong(currentSong);
});
