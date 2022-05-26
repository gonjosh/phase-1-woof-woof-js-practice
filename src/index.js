const dataEndPoint = 'http://localhost:3000/pups'
function getAllPups() {
   return fetch(dataEndPoint)
    .then(response => response.json());
}

// create element
function createDogButton(dogName, mainContent){
  const dogBar = document.createElement('span');
  dogBar.classList.add('dog-name');
  dogBar.textContent = dogName;

  mainContent.append(dogBar);
}
function createDogImage(dogName, mainContent){
  const dogBar = document.createElement('img');
  dogBar.setAttribute('src', dogName);

  mainContent.append(dogBar);
}

document.addEventListener('DOMContentLoaded', async () => {
  // selecting elements that UI goes into
  const mainContent = document.querySelector('#dog-bar');
  const dogInfo = document.querySelector('#dog-info');

  // its giving access to the data
  const dogData = await getAllPups();

// looping through the data creating dog button and creating image button
  dogData.forEach(dog => {
    createDogButton(dog.name, mainContent)
    createDogImage(dog.image, dogInfo)
  });


  // add to page

})