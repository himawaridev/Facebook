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