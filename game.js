let health = 0
let hits = 0

let moves ={
  slap: 1,
  kick: 10,
  punch: 5,
  special: 50
}

let enemies = [
{
  name: "Sub-Zero",
  health: 80,
  img: "sub-zero.jpg"
},
{
  name: "Raiden",
  health: 130,
  img: "raiden.jpg"
},
{
  name: "Scorpion",
  health: 110,
  img: "scorpion.jpg"
},
{
  name: "Goro",
  health: 500,
  img: "goro.jpeg"
},
{
  name: "Mark",
  health: 250,
  img: "mark.jpeg"
},
{
  name: "Jake",
  health: 275,
  img: "jake.jpeg"
},
{
  name: "$D-Money$",
  health: 1000,
  img: "darryl.jpeg"
},
{
  name: "Tim",
  health: 200,
  img: "tim.jpeg"
}
]

function drawEnemy(){
  let enemy = enemies[randomNum()]
  let template = `<h1>${enemy.name}</h1><h3>Health:<span id="health">${enemy.health}</span></h3>
  <img class="image" src=${enemy.img} alt="">`
  document.getElementById("enemy").innerHTML = template

  health = enemy.health

}
  
  

function drawStats(){
  document.getElementById("hits").innerText = hits.toString()
  document.getElementById("health").innerText = health.toString() 
 

}


function attack(move){
hits++

  if(health > 0){
    health-= moves[move]
    console.log(health)
  }else{
    dead()  
    hits = 0  
  }
  drawStats()
}

function randomNum(){
  let index = Math.floor(Math.random() * (enemies.length - 0.01))
return index
}

function dead(){
let image = document.querySelector('.image')
console.log(image)
// @ts-ignore
image.classList.add("fa-spin")
setTimeout(() => {
  // @ts-ignore
  image.classList.remove("fa-spin")
  drawEnemy()
}, 2000);
}

function timeOut(){
  let special = document.querySelector('#special')
  // @ts-ignore
  special.disabled = true
  setTimeout(() => {
    // @ts-ignore
    special.disabled = false 
  }, 3000);
}

let color = "dark"
function toggleBgs() {
  let elems = document.querySelectorAll(`.bg-${color}`)
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove(`bg-${color}`)
    if (color == "dark") {
      color = "secondary"
    } else {
      color = "dark"
    }
    elems[i].classList.add(`bg-${color}`)
  }
}

setInterval(toggleBgs, 1000);



drawEnemy()
drawStats()