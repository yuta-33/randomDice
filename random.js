const roll = () =>{
  const dice = Math.floor(Math.random()*6)+1;
  document.getElementById('number').textContent = dice;
}
document.getElementById('roll').addEventListener('click', roll );

export default random.js from "./random.js"
