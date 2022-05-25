const dataEndPoint = 'http://localhost:3000/pups'
function getAllPups() {
    fetch(dataEndPoint)
    .then(response => response.json())
    .then(data => dogMaker(data));
}
getAllPups()

function dogMaker(allPups){
    console.table(allPups)
}