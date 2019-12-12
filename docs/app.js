document.querySelector('.get-jokes').addEventListener('click', getJokes);

function hideList() {
  document.querySelector('.jokes').style.display = 'none';
}

hideList();

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const re = /\d{1,3}/;

  const xhr = new XMLHttpRequest();

  if(!re.test(number)) {
    alert('Insert a number between 1-3 digits, please');
  } else {
    let loader = document.querySelector('.loader');

    loader.style.display = 'block';

    hideList();
    
    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        
        let output = '';

        if(response.type === 'success') {

          loader.style.display = 'none';

          document.querySelector('.jokes').style.display = 'block';

          response.value.forEach(function(joke){
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += '<li>Something went wrong</li>';
        }

        output += `<a href="https://articulo.mercadolibre.com.ar/MLA-774850767-muneco-chuck-norris-ninja-warrior-negro-kenner-_JM" target="_blank"><svg id="signature" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 164.9 58.3" style="enable-background:new 0 0 164.9 58.3;" xml:space="preserve">
     <g>
       <g>
         <path d="M32.8,43.2c1-0.5,1.8-1.2,2.6-1.9c2.3-2,4.5-4.2,7.1-5.9c0.5-0.3,0.9-0.7,1.5-0.3c0.5,0.4,0.4,1,0.3,1.6
           c0,0.1,0,0.2,0,0.2c-0.4,2.3,0.5,3,2.7,2.2c1.3-0.4,2.4-1.2,3.4-2c2-1.6,3.9-3.2,5.7-5c0.2-0.2,0.5-0.4,0.7-0.7
           c0.4-0.3,0.7-0.3,1,0.1c0.3,0.4,0.1,0.7-0.2,0.9c-0.9,0.7-1.4,1.7-1.9,2.7c2.2-1.1,4.2-2.4,5.7-4.4c0.2-0.3,0.4-1,0.9-0.7
           c0.6,0.3,0.3,0.8,0.1,1.2c-0.3,0.6-1.1,1.5-0.6,1.9c0.5,0.4,1.4-0.2,2.1-0.5c1.8-0.8,3.3-2.1,4.7-3.5c0.8-0.8,1.5-1.5,2.3-2.3
           c0.3-0.2,0.6-0.4,0.9-0.1c0.3,0.3,0.3,0.6,0,1c-0.6,0.7-1.2,1.4-1.6,2.2c0.4,0.2,0.7-0.1,1-0.2c0.7-0.3,1.3-0.8,2-1.1
           c3.1-1.4,5.1-3.7,6.7-6.8c2.1-4.2,4.7-8.2,8-11.6C89.2,8.7,90.6,7,92.5,6c0.2-0.1,0.4-0.3,0.6-0.3c0.8-0.3,1.6-0.8,2.3-0.1
           c0.7,0.7,0,1.4-0.4,2c-3,4.8-6.6,9-10.5,13c-1.9,2-3.9,3.9-6.1,5.6c-1,0.8-1.2,2.2-1.7,3.5c0.4-0.4,0.9-0.9,1.3-1.3
           c1.7-1.8,3.5-3.4,5.6-4.6c0.4-0.2,0.8-0.6,1.3-0.3c0.5,0.4,0.4,1,0.3,1.5c-0.3,1.1-0.9,2-1.5,3c-0.3,0.5-0.7,1.1-0.4,1.7
           c0.4,0.7,1.2,0.4,1.8,0.4c1.5-0.2,2.9-0.9,4.2-1.6c0.6-0.3,1.3-0.6,2-0.9c0,0.8-0.6,1-1,1.3c-1.6,1.2-3.5,2-5.4,2.3
           c-0.9,0.2-1.9,0.2-2.5-0.6c-0.6-0.9-0.3-1.8,0.2-2.7c0.5-0.9,1-1.8,1.6-3c-2,1-3.3,2.2-4.6,3.5c-1.5,1.5-2.6,3.3-4.3,4.6
           c-0.2,0.1-0.3,0.3-0.5,0.4c-0.3,0.2-0.6,0.5-1,0.2c-0.3-0.3-0.2-0.7,0-1c0.6-1.1,1.2-2.2,1.8-3.3c0.2-0.3,0.4-0.7,0.6-1.2
           c-0.9,0.1-1.4,0.5-1.9,0.8c-1.3,0.7-2.6,1.5-3.9,2.1c-0.8,0.4-1.5,1.1-2.5,0.2c-0.3-0.3-0.7,0.3-1,0.5c-1.5,1.3-3.3,2.1-5.2,2.6
           c-0.6,0.2-1.3,0.3-1.7-0.4c-0.3-0.6-0.6-0.1-0.9,0.1c-1,0.6-1.9,1.4-2.9,1.9c-0.8,0.4-1.8,1.6-2.5-0.2c-0.1-0.3-0.5,0-0.7,0.2
           c-1,0.8-2,1.6-3,2.4c-1,0.8-2.2,1.4-3.4,1.8c-2.3,0.9-3.8-0.3-3.6-2.8c0-0.4,0.2-0.8,0-1.3c-1.5,0.7-2.7,1.8-3.9,2.9
           c-2.2,1.9-4.4,3.9-6.5,5.8c-0.2,0.2-0.4,0.3-0.7,0.5c-0.3,0.2-0.6,0.4-0.9,0.2c-0.4-0.3-0.3-0.6-0.1-1c0.5-1.2,1.1-2.3,1.6-3.5
           c0.1-0.2,0.2-0.4,0.2-0.7c-1.6,1.4-3.2,2.8-4.7,4.3c-2.2,2-4.7,3.6-7.2,5.2c-3.8,2.3-7.8,4.3-12.1,5.5c-3.8,1.1-6.9-1.6-6.1-5.5
           C3.9,44.2,6.2,39,8.8,33.9c3.2-6.3,7.3-12,11.9-17.2c3.5-3.9,7-7.8,11.5-10.6c1.8-1.1,3.7-1.8,5.8-1.6c2.8,0.2,4,2.4,2.6,4.8
           c-1.2,2.2-2.1,4.6-4.1,6.3c-0.7,0.6-1.4,1.3-2.4,1.6c-0.3,0.1-0.6,0.3-0.9,0c-0.3-0.3-0.2-0.6-0.1-0.9c0.9-2.1,2.2-4,3.5-5.8
           c0.2-0.3,0.6-0.6,1-0.1c0.4,0.4,0.2,0.7-0.1,1c-1,1.1-1.7,2.4-2.6,3.7c0.6,0,0.9-0.4,1.1-0.6c1.7-1.9,3-4.1,4-6.4
           c0.4-1.1-0.1-1.9-1.3-2.3c-1.8-0.5-3.6-0.1-5.2,0.7c-2.3,1.1-4.2,2.7-6.1,4.4C22,16.1,17.2,21.9,13.1,28.3c-4,6.2-7,12.8-9.1,19.9
           c-0.4,1.4-0.9,2.8-0.2,4.3c0.7,1.6,1.8,2.3,3.5,2c4.1-0.8,7.9-2.6,11.5-4.6c5-2.8,9.5-6.3,13.6-10.4c2.9-2.8,4.9-6.3,7-9.7
           c2.3-3.6,4.8-7,6.7-10.8c0.3-0.7,0.7-1.3,1.7-0.8c0.8,0.5,0.9,1.1,0.5,1.9c-1.2,2.4-2.7,4.5-4.3,6.7c-2.3,3.1-4.7,6.1-7.1,9
           C35.1,38,33.9,40.6,32.8,43.2z M79.7,24c0.2-0.1,0.4-0.3,0.5-0.4c5-4.6,9.6-9.6,13.3-15.3c0.3-0.5,1.1-1.1,0.7-1.5
           c-0.5-0.5-1.2,0.1-1.7,0.5C86.6,11.4,83,17.6,79.7,24z M47.2,19.6c-2.2,3.4-4.5,6.8-6.7,10.3C43.1,26.7,45.6,23.5,47.2,19.6z"/>
         <path d="M106.4,19.2c1.1-1.8,2.2-3.6,3.4-5.3c1.4-2.2,2.8-4.5,4.2-6.7c0.3-0.4,0.5-1.1,1.1-0.9c0.7,0.2,0.5,0.9,0.5,1.5
           c0,1.1-0.4,2-0.7,3c-1.4,4.3-2.9,8.6-4,13c-0.3,1.2-0.6,2.4-0.6,3.7c0,1.7,1.1,2.3,2.6,1.5c1-0.5,1.8-1.3,2.5-2.1
           c1.4-1.6,3.1-3,3.6-5.3c0.1-0.3,0.2-0.4,0.5-0.4c0.3,0.1,0.6,0.3,0.7,0.6c0.1,0.4-0.1,0.6-0.3,0.9c-1.7,2.5-3.6,5-6.1,6.9
           c-0.9,0.7-2,1.1-3.1,0.5c-1-0.5-1.2-1.6-1.2-2.6c0.1-3,1.1-5.9,1.9-8.8c0.9-3,1.9-6,2.8-9c0.1-0.3,0.2-0.7,0.1-1.1
           c-1.3,2-2.5,4-3.8,6c-2.7,4.3-5.6,8.6-7.6,13.3c-0.3,0.7-0.8,1.7-1.5,1.4c-0.9-0.4-0.2-1.4,0.1-2c1.8-3.8,3.7-7.4,5-11.4
           c1-3.2,2.1-6.4,2.3-9.8c0-0.8,0.4-1.9-0.4-2.3c-0.7-0.3-1.2,0.8-1.7,1.3c-1.6,1.8-3,3.7-3.1,6.3c0,0.4-0.2,0.8-0.6,0.7
           c-0.5,0-0.6-0.5-0.5-0.9c0.1-2.3,1.3-4.1,2.7-5.8c0.7-0.9,1.5-1.8,2.3-2.6c1-0.9,1.8-0.6,2.1,0.7c0.3,1.3,0.1,2.5-0.1,3.8
           C108.8,11.3,107.6,15.2,106.4,19.2z"/>
         <path d="M142.8,20.3c-1.8,1.3-3.6,2.1-5.6,2.7c-2.4,0.7-3,0.3-2.7-2.4c-1.1,1.1-1.9,2.3-3.1,3.1c-0.9,0.6-1.8,1.1-2.8,1.3
           c-1,0.2-1.5-0.2-1.3-1.2c0.1-0.7,0.4-1.5,0.6-2.2c0.1-0.6-0.1-0.8-0.6-0.5c-0.7,0.4-1.4,0.8-2.1,1.1c-0.4,0.2-0.3,0.6-0.3,0.9
           c0.1,1.8-0.9,3.1-2.2,4.2c-0.5,0.4-1.1,0.6-1.7,0.2c-0.6-0.4-0.4-0.9-0.3-1.4c0.4-1.9,1.2-3.6,2.3-5.2c0.3-0.5,0.8-0.9,1.3-0.2
           c0.3,0.5,0.6,0.3,0.9,0.1c0.7-0.3,1.4-0.7,2.2-1c0.5-0.2,1-0.4,1.4,0.1c0.4,0.4,0.5,1,0.3,1.6c-0.1,0.4-0.3,0.7-0.4,1.1
           c-0.1,0.3-0.3,0.7,0,1c0.3,0.3,0.7,0,1-0.1c1.2-0.6,2.2-1.4,3.1-2.4c0.6-0.7,1.1-1.3,1.7-2c0.3-0.3,0.5-0.7,1-0.5
           c0.5,0.3,0.8,0.7,0.7,1.3c-0.1,0.4-0.2,0.8-0.3,1.1c-0.3,1-0.1,1.2,1,1c2.8-0.7,5.3-2.1,7.3-4.1c0.2-0.2,0.4-0.5,0.7-0.7
           c0.2-0.3,0.5-0.6,0.9-0.2c0.3,0.3,0.3,0.7,0,1.1c-0.4,0.5-0.8,1-1.2,1.5c-0.2,0.3-0.5,0.7-0.2,1.1c0.3,0.3,0.7,0.3,1.1,0.2
           c2-0.5,3.8-1.4,5.6-2.5c1.4-0.9,2.8-1.8,4.2-2.6c0.4-0.2,0.8-0.4,1.2-0.6c0.7-0.3,1.5-0.6,2,0.3c0.5,0.9,0.3,1.8-0.5,2.4
           c-0.8,0.6-1.7,0.8-2.7,0.6c-0.2-0.1-0.5-0.1-0.5-0.4c0-0.3,0.3-0.4,0.5-0.4c0.6-0.1,1.3-0.1,1.8-0.5c0.3-0.2,0.6-0.5,0.4-0.9
           c-0.2-0.4-0.6-0.2-0.8,0c-2,0.9-3.8,2.3-5.6,3.4c-1.7,1-3.5,1.8-5.4,2.3C143.8,22.2,143.2,21.8,142.8,20.3z M121.6,26.4
           c1.3-0.7,1.9-1.7,2.2-2.9c0.1-0.3-0.1-0.6-0.3-0.8c-0.2-0.1-0.4-0.1-0.5,0.1C122.4,23.9,121.7,25,121.6,26.4z"/>
         <path d="M153.1,6.9c0,0.4-0.2,0.6-0.6,0.6c-0.5,0-0.7-0.4-0.6-0.8c0-0.3-0.1-0.8,0.5-0.8C152.8,6,153,6.5,153.1,6.9z"/>
       </g>
     </g>
     </svg></a>`;

        document.querySelector('.jokes').innerHTML = output;
      }

      document.getElementById('number').value = '';
    }
    
    xhr.send();
    
    e.preventDefault();
  }
}
