const musicContainer = document.getElementById('audio-container')
const prevbtn = document.getElementById('prev')
const playbtn = document.getElementById('play')
const nextbtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progressContainer  = document.getElementById('progress-container')
const title = document.getElementById('title')
const progress = document.getElementById('progress')
const cover = document.getElementById('cover')
const musics = ["Calm down", "Qarakesak", "Yomg'ir", "Yomg'irlarda", "Eh jo'ralar", "Ko'zmunchog'im"]
let musicindex = 0
function loadsong(music) {
    title.innerText  = music
    audio.src = `music/${music}.mp3`
    cover.src = `img/${music}.jpg`
}
loadsong(musics[musicindex])
function playsong() {
    musicContainer.classList.add('play')
    playbtn.querySelector('i.fas').classList.remove('fa-play')
    playbtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}
function pausemusic() {
    musicContainer.classList.remove('play')
    playbtn.querySelector('i.fas').classList.add('fa-play')
    playbtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevmusic(){
    musicindex--;
    if(musicindex < 0) {
        musicindex = musics.length - 1
    }
    loadsong(musics[musicindex])
    playsong()
}
function nextmusic(){
    musicindex++;
    if(musicindex > musics.length - 1){
        musicindex = 0;
    }
    loadsong(musics[musicindex])
    playsong()
}   


function updateprogress (e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`
    
    
}
function setProgress (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration;
}


playbtn.addEventListener('click', ()=> {
    const isplaying = musicContainer.classList.contains('play');
    if(isplaying) {
        pausemusic()
    }
    else {
        playsong()
    }
})


prevbtn.addEventListener('click', prevmusic)
nextbtn.addEventListener('click', nextmusic)
audio.addEventListener('timeupdate', updateprogress)
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextmusic)

