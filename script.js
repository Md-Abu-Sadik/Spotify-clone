console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3'); // Adjusted path
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "Janji - Heroes Tonight", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg"},
];
