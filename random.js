const Dodice = () =>{
  const dice = Math.floor(Math.random()*6)+1;
  　document.getElementById('number').textContent = dice;
}
document.getElementById('roll').addEventListener('click', Dodice );

function fadeIn(element, duration = 1000) {
            element.style.display = "block";
            setTimeout(() => {
                element.style.opacity = 1;
            }, 10);
        }

        document.getElementById("roll").addEventListener("click", () => {
            const image = document.getElementById("image");
            fadeIn(image, 1000);
        });
