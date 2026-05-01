console.log("Finally working on Javascript");
let currfolder;
async function getsongs(folder) {
    currfolder = folder;
    let currentsong;
    let a = await fetch(`/${currfolder}/`)
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let linktosongs = div.getElementsByTagName("a");
    console.log(linktosongs);
    let songs = [];
    for (let i = 0; i < linktosongs.length; i++) {
        if (linktosongs[i].href.endsWith(".mp3") || linktosongs[i].href.endsWith(".m4a") || linktosongs[i].href.endsWith(".MP3")) {
            songs.push(linktosongs[i].href.split(`/${currfolder}/`)[1]);
        }
    }
    console.log(songs);
    return songs;

    let songul = document.querySelector(".songsinlibrary").getElementsByTagName("ul")[0]
    for (i of songs) {
        songul.innerHTML += `<li>
        
         <img src="./elements/music-note-svgrepo-com.svg" alt="musicnotelogo" class="musicnote">
                        <div class="info"><span class="songname">${i.replaceAll("%20", " ")}</span>
                        </div>
                        <div><img src="./elements/playforlibrary.svg" alt="Play"></div>
                        
        
        
        
        
        
        </li>`;
    }

    Array.from(document.querySelector(".songsinlibrary").getElementsByTagName("li")).forEach((element) => {
        element.addEventListener("click", () => {
            console.log(element.querySelector(".info").firstElementChild.innerHTML);
            playmusic(element.querySelector(".info").firstElementChild.innerHTML);
        })
    });
    
}
async function main() {
    let songs = await getsongs("songs/Melodies");
    console.log(songs);

    // let songul = document.querySelector(".songsinlibrary").getElementsByTagName("ul")[0]
    // for (i of songs) {
    //     songul.innerHTML += `<li>
        
    //      <img src="./elements/music-note-svgrepo-com.svg" alt="musicnotelogo" class="musicnote">
    //                     <div class="info"><span class="songname">${i.replaceAll("%20", " ")}</span>
    //                     </div>
    //                     <div><img src="./elements/playforlibrary.svg" alt="Play"></div>
                        
        
        
        
        
        
    //     </li>`;
    // }
    function formatTime(seconds) {
        seconds = Math.floor(seconds); // remove decimals

        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;

        // add leading zero if needed
        if (secs < 10) secs = "0" + secs;
        if (minutes < 10) minutes = "0" + minutes;

        return `${minutes}:${secs}`;
    }
    let currentsong = new Audio();
    let currentIndex = 0;
    const playmusic = (track) => {
    currentIndex = songs.indexOf(track); // track current song index
    currentsong.src = `/${currfolder}/${track}`;
    currentsong.play();
    play.src = "./elements/pauseforplaybar.svg";

    document.querySelector(".songinfo").innerHTML = track.replaceAll("%20", " ");
    document.querySelector(".timeline").innerHTML = "00:00/ 00:00";
}
    // Array.from(document.querySelector(".songsinlibrary").getElementsByTagName("li")).forEach((element) => {
    //     element.addEventListener("click", () => {
    //         console.log(element.querySelector(".info").firstElementChild.innerHTML);
    //         playmusic(element.querySelector(".info").firstElementChild.innerHTML);
    //     })
    // });

    play.addEventListener("click", () => {
        if (!currentsong.src) {
            let firstSong = document.querySelector(".songsinlibrary").getElementsByTagName("li")[1].querySelector(".info").firstElementChild.innerHTML;
            playmusic(firstSong);
            return;
        }

        if (currentsong.paused) {
            currentsong.play();
            play.src = "./elements/pauseforplaybar.svg";
        } else {
            currentsong.pause();
            play.src = "./elements/playforplaybar.svg";
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        console.log(currentsong.currentTime, currentsong.duration);
        document.querySelector(".timeline").innerHTML = `${formatTime(currentsong.currentTime)} / ${formatTime(currentsong.duration)}`;
        if (currentsong.currentTime == currentsong.duration) {
            play.src = "./elements/playforplaybar.svg";
        }
    
    document.querySelector(".circle").style.left= currentsong.currentTime / currentsong.duration * 100 + "%";   
    } )
    
    document.querySelector(".seekbar").addEventListener("click", e=>{
        document.querySelector(".circle").style.left= (e.offsetX/e.target.getBoundingClientRect().width)*100 + "%" ;
        currentsong.currentTime = ((e.offsetX/e.target.getBoundingClientRect().width)*currentsong.duration); 
    })

    document.querySelector(".hamburger").addEventListener("click", () => 
    {
        document.querySelector(".leftcontent").style.left = "0";
        document.querySelector(".hamrightnav").style.display = "block";
        // document.querySelector(".hamrightnav").style.left = "86%";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".cross").style.display = "block";
    })
     document.querySelector(".cross").addEventListener("click", () => 
    {
        document.querySelector(".leftcontent").style.left = "-100%";
        document.querySelector(".hamrightnav").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
        document.querySelector(".cross").style.display = "none";
    })

    previous.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = songs.length - 1; // loop to last
    }

    playmusic(songs[currentIndex]);
});
   next.addEventListener("click", () => {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop
    }

    playmusic(songs[currentIndex]);
});
currentsong.addEventListener("ended", () => {
    next.click(); // reuse your logic
});
volume.addEventListener("click", () => {
    volSeekbar.classList.toggle("show-volume");
});
const volSeekbar = document.querySelector(".volseekbar");
const volCircle = document.querySelector(".volcircle");
const volumeIcon = document.getElementById("volume");
function setVolumeFromPosition(clientX) {
    let rect = volSeekbar.getBoundingClientRect();
    let offsetX = clientX - rect.left;

    // Clamp within bounds
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    let percent = offsetX / rect.width;

    // Move circle
    volCircle.style.left = (percent * 100) + "%";

    // Set audio volume (0 to 1)
    currentsong.volume = percent;
}
volSeekbar.addEventListener("click", (e) => {
    setVolumeFromPosition(e.clientX);
});
let isDragging = false;

volCircle.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        setVolumeFromPosition(e.clientX);
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

Array.from(document.getElementsByClassName("playlist")).forEach(e=>{
    console.log(e)
    e.addEventListener("click",item=>{
        songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
        // item.dataset.folder
    })
})
}
main();
