let health = 100
let hits = 0

let moves ={
  slap: 1,
  kick: 10,
  punch: 5
}

function drawStats(){
document.getElementById("health").innerText = health.toString()
document.getElementById("hits").innerText = hits.toString()
}


function attack(move){
hits++

  if(health > 0){
    health-= moves[move]
  }else{
    health = 100
    hits = 0
    console.log("dead")
  }
  drawStats()
}


drawStats()