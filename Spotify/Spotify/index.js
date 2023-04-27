console.log("welcome to spotify");
//intialize the event
let songplay = document.getElementsByClassName('songplay');
let songIndex = 0;
let audioElement = new Audio('Mood.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [{
        songName: "gullu mera bhai",
        filepath: "Mood.mp3",
        coverPath: "logo.jpg"
    },
    {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    },
    {
        songName: "Chasni- Salman khan",
        filepath: "Mood.mp3",
        coverPath: "cassie.jpg"
    },
    {
        songName: "Channa Mere Ya",
        filepath: "Mood.mp3",
        coverPath: "play.png"
    },
    {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    }, {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    }, {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    }, {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    }, {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    }, {
        songName: "Tere Naina",
        filepath: "Mood.mp3",
        coverPath: "pause.png"
    },
]

// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;


    } else {
        audioElement.pause();
        gif.style.opacity = 0;
    }
})

function changeImage() {
    let displayImage = document.getElementById('masterPlay');
    if (displayImage.src.match('./pause.png')) {
        displayImage.src = './play.png'
    } else {
        displayImage.src = './pause.png'
    }
}
//listen to events
audioElement.addEventListener('timeupdate', () => {



    // Progress
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {

        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    })
    // Array.from(document.getElementsByClassName(songplay)).forEach((element) => {
    //     element.addEventListener('click', (e) => {
    //         console.log(e.target);

//     });

// });

document.getElementById('previous').addEventListener('click', () => {

    if (songIndex > 9) {
        songIndex += 1
    } else {
        songIndex += 1
    }
    audioElement.src = '.songs/ ${Index+1}.mp3';
});