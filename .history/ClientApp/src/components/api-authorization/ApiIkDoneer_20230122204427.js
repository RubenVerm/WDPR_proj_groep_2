const axios = require('axios');
const jwt = require('jsonwebtoken');
// je kan de axios. plaatsen in de react en vanaf daar kiezen wat er wordt gedaan met de ontvange data/ hoe de data wordt ingevoerd dat verzenden moet worden.

// Credentials for authentication
const credentials = {
  username: 'your-username',
  password: 'your-password'
};

// Donatie doen data
const PostDonatie = {
    Doel: idGoedeDoel, // het id van het goede doel
    Hoeveelheid: '', // donatie hoeveelheid
    Tekst: '' // tekst dat mee gegeven wordt aan de donatie
}

// hier sla je het id van het goededoel op die je wilt gebruiken dit is altijd het zelfde als we het goede doel hebben aangemaakt
const idGoedeDoel = {
    id: '65'
}

const idDonatie ={
    id: ''
}


// JWT voor dev
const jwtDev = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMzM0MGVlOC00YjM5LTRjY2QtYTM2Mi1mODhjYzcwYzk2N2IiLCJqdGkiOiIyOTJmYzI1ZC1jMDQ5LTQyNTYtODA3OC03ZWZlODIyYzJhMzgiLCJpYXQiOiIwMS8yMi8yMDIzIDE5OjQ0OjE4IiwiVXNlcklkIjoiZTMzNDBlZTgtNGIzOS00Y2NkLWEzNjItZjg4Y2M3MGM5NjdiIiwiRW1haWwiOiIyMTAzMjI0NkBzdHVkZW50Lmhocy5ubCIsImV4cCI6MTk5MDAzNTg1OCwiaXNzIjoiSWtEb25lZXIiLCJhdWQiOiIqIn0.ueMyi_y_1F36n-gw9ONy8MFe5296sp6AdR_nMlwVPOE';

// Authenticate and retrieve JWT           Weet niet of diet goed is
axios.post('https://ikdoneer.azurewebsites.net/api/22', credentials)
  .then(response => {
    const jwt = response.data.jwt;
    // Save the JWT in memory, or in a secure location such as a server-side session.
    
    // Decode and validate the JWT
    const decoded = jwt.decode(jwt);
    if (!decoded || !decoded.exp) {
      console.error('Invalid JWT');
    } else {
      const expiration = new Date(decoded.exp * 1000);
      if (expiration < new Date()) {
        console.error('Expired JWT');
      } else {
        // JWT is valid


        // Send request to the API
        // Sending a GET request

        // geeft een lijst van alle donaties gedaan door de gebruiker, met de volgende velden: het Doel (de naam van het goede doel), de Hoeveelheid, de Id, en de Tekst.
        axios.get('https://ikdoneer.azurewebsites.net/api/donatie', { 
          headers: {
            'Authorization': 'Bearer ' + jwt 
          }
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
          
          // /api/goededoelen geeft van alle goed doelen de Id, Naam, URL, Categorie, Beschrijving en mogelijk de DonatieListener, als jij de eigenaar bent. De afbeelding dus niet.
          axios.get('https://ikdoneer.azurewebsites.net/api/donatie', { 
            headers: {
              'Authorization': 'Bearer ' + jwtDev
            }
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });

            // GET /api/goededoelen/..id.. geeft hetzelfde, maar dan voor een goed doel met een specifieke id.
            axios.get('https://ikdoneer.azurewebsites.net/api/donatie/' + idGoedeDoel, { 
            headers: {
              'Authorization': 'Bearer ' + jwtDev
            }
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });

        // Sending a POST request
        // POST /api/donatie doet een donatie gegeven een JSON body van de vorm {"Doel": ..., "Hoeveelheid": ..., "Tekst": "..."}, waar Doel de Id is van het goede doel.
        axios.post('https://ikdoneer.azurewebsites.net/api/donatie', {PostDonatie}, {
          headers: {
            'Authorization': 'Bearer ' + jwt
          }
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
        
        
        // Sending a DELETE request
        //DELETE /api/donatie/..id.. verwijdert een donatie, gegeven de Id.
        axios.delete('https://ikdoneer.azurewebsites.net/api/donatie/' + idDonatie, {
          headers: {
            'Authorization': 'Bearer ' + jwt
          }
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });

         //DELETE /api/goededoelen/..id.. verwijdert een goed doel, als jij de eigenaar bent.
        axios.delete('https://ikdoneer.azurewebsites.net/api/donatie/' + idGoedeDoel, {
            headers: {
              'Authorization': 'Bearer ' + jwt
            }
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
      }
    }
  })
  
  .catch(error => {
    console.error(error);
  });
