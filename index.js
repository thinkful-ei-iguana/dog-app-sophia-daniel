function getDogImages (breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => {
      console.log(error);
    });
  
}

function displayDogs (response) {
  let dogHtml = '';
  if (response.status !== 'error') {
    dogHtml = `
      <img class="results-img" src=${response.message}></img>
    `; 
  } else {
    dogHtml = `
      <p>Breed does not exist</p>
    `;
  }
  $('.image-container').html(dogHtml);
  
}

function submitHandler () {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('.breedInput').val();
    getDogImages(breed);
  })
}

submitHandler();
