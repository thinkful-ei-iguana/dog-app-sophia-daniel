function getDogImages (num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson =>
        displayDogs(responseJson));
}

function displayDogs (dogsArray) {
    console.log(dogsArray);
    let dogHtml = '';
    dogsArray.message.forEach(element => {
        dogHtml += `<img class="results-img" src=${element}></img>`
    });
    console.log(dogHtml);
    $('.image-container').html(dogHtml);
}

function submitHandler () {
    $('form').submit(event => {
        event.preventDefault();
        let num = $('.numInput').val();
        if(num < 1 || num > 50){
            throw "Number not valid"
        }
        getDogImages(num);
    })
}

submitHandler();
