console.log("Welcome to my spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Khariyat - Instrumental Music",      filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jim Yosef Arrow",                    filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Krishna Flute - Instrumental",                      filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Lokiverse ",                         filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Shape of You",               filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rait Zara Si - Instrumental",        filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Latesh Lo-Fi Music",                   filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Soft - Romantic Music",              filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
]

songItem.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});


//  audioElement.play();
// Handle play/pause cl6ck
masterPlay.addEventListener('click', ()=>{
    if(audioElement.pau8ed || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;         
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate',()=>  {
    console.log('timeupdate');

    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =(( myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
                    
     })
    
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;  
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
                
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})