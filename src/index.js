const dataEndPoint = 'http://localhost:3000/pups'
function getAllPups() {
    fetch(dataEndPoint)
    .then(response => response.json());
}



document.addEventListener("DOMContentLoaded", () => {
  const dogData =  getAllPups();
  const dogBar = document.getElementById("dog-bar")
  console.log(dogBar)
});

//<span>Mr. Bonkers</span>
document.addEventListener('DOMContentLoaded', () => {
  // selecting main content
  const mainContent = document.querySelector('#dog-bar');
  const dogData =  getAllPups();
  // create element
  const dogBar = document.createElement('span');
  dogBar.classList.add('dog-name');
  dogBar.textContent = 'Mr.Bonkers';

  // add to page
  mainContent.append(dogBar);
})