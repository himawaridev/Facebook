function handleClick(number) {
    if (number === 1) {
        location.href = "1 home.html";
    }
    if (number === 2) {
        location.href = "2 watch.html";
    }
    if (number === 3) {
        location.href = "3 marketplace.html";
    }
    if (number === 4) {
        location.href = "4 group.html";
    }
    if (number === 5) {
        location.href = "5 game.html";
    }
    if (number === 6) {
        location.href = "profile.html";
    }
    if (number === 7) {
        location.href = "playing-game.html";
    }
    if (number === 8) {
        location.href = "login.html";
    }
}

function click1() {
    document.getElementById('page-1').style.display = 'block'
    document.getElementById('page-2').style.display = 'none'
    document.getElementById('page-3').style.display = 'none'
}
function click2() {
    document.getElementById('page-1').style.display = 'none'
    document.getElementById('page-2').style.display = 'block'
    document.getElementById('page-3').style.display = 'none'
}
function click3() {
    document.getElementById('page-1').style.display = 'none'
    document.getElementById('page-2').style.display = 'none'
    document.getElementById('page-3').style.display = 'block'
}
click1()

function menuClick1() {
    document.getElementById('story').style.display = 'block'
    document.getElementById('reels').style.display = 'none'
    document.getElementById('room-meet').style.display = 'none'
}
function menuClick2() {
    document.getElementById('story').style.display = 'none'
    document.getElementById('reels').style.display = 'block'
    document.getElementById('room-meet').style.display = 'none'
}
function menuClick3() {
    document.getElementById('story').style.display = 'none'
    document.getElementById('reels').style.display = 'none'
    document.getElementById('room-meet').style.display = 'block'
}
menuClick1()

// const NUMBER_ITEM_SHOW = 6
// const arrShow = [0, 1, 2, 3, 4, 5]

// showSlides(0);

// function filmSlides(n) {
//     showSlides(n);
// }
// function showSlides(numberSlidesNext) {
//     let film = document.getElementsByClassName('story')
//     for (let i = 0; i < arrShow.length; i++) {
//         if (arrShow[0] + numberSlidesNext >= 0 && arrShow[4] + numberSlidesNext < film.length) {
//             arrShow[i] += numberSlidesNext
//         }

//     }

//     console.log(arrShow)
//     for (i = 0; i < film.length; i++) {
//         film[i].style.display = 'none';
//     }
//     for (i = 0; i < arrShow.length; i++) {
//         film[arrShow[i]].style.display = 'block';
//     }
// }

