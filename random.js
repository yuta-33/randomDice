const Dodice = () =>{
  const dice = Math.floor(Math.random()*6)+1;
  document.getElementById('number').textContent = dice;
}
document.getElementById('roll').addEventListener('click', Dodice );

