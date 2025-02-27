import express from "express"; 
import { Liquid } from "liquidjs"; 


const app = express();
const engine = new Liquid();

app.use(express.static("public"));

app.engine("liquid", engine.express()); 
app.set("views", "./views"); 
app.set("view engine", "liquid"); 

app.use(express.urlencoded({ extended: true }));


app.get('/', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"squads":{"squad_id":{"name":"1G"}}}]}&sort=name');

  const personResponseJSON = await personResponse.json();

  response.render('index.liquid', { persons: personResponseJSON.data });
});




app.post('/', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName}`,
      from: request.body.from,
      text: request.body.text
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  response.redirect(303, '/')
})

// genre filter
// filter voor action
app.get('/action', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,fav_book_genre,bio&filter={"squads":{"squad_id":{"name":{"_eq":"1G"}}},"fav_book_genre":{"_eq":"Action"}}')

  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', { persons: personResponseJSON.data, squads: squadResponseJSON.data })
})

// filter voor thriller
app.get('/thriller', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,fav_book_genre,bio&filter={"squads":{"squad_id":{"name":{"_eq":"1G"}}},"fav_book_genre":{"_eq":"Thriller"}}')

  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', { persons: personResponseJSON.data, squads: squadResponseJSON.data })
})

// filter voor comedy
app.get('/comedy', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,fav_book_genre,bio&filter={"squads":{"squad_id":{"name":{"_eq":"1G"}}},"fav_book_genre":{"_eq":"Comedy"}}')

  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', { persons: personResponseJSON.data, squads: squadResponseJSON.data })
})

// filter voor drama
app.get('/drama', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,fav_book_genre,bio&filter={"squads":{"squad_id":{"name":{"_eq":"1G"}}},"fav_book_genre":{"_eq":"Drama"}}')

  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', { persons: personResponseJSON.data, squads: squadResponseJSON.data })
  console.log(personResponse.json)
})



app.get('/index', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name&filter={"squads":{"squad_id":{"name":"1G"}}}')
  const personResponseJSON = await personResponse.json()

  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages?sort=-created&limit=-1&filter={"for" : {"_starts_with": "Team Zen / Vragen"}}`);
  const messagesResponseJSON = await messagesResponse.json();

  const messages = messagesResponseJSON.data.filter((msg) => msg.for === 'Team Zen / Vragen');
  messages.forEach((msg) => {
    const likes = messagesResponseJSON.data.filter((m) => m.for === `Team Zen / Vragen - ${msg.id}`).length
    msg.likes = likes;
  })
  
  response.render('index.liquid', {persons: personResponseJSON.data, messages: messages})
})



// CHATBOX

const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')
const squadResponseJSON = await squadResponse.json()

app.get('/index', async function (request, response) {
  // Haal berichten op voor het team
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages?limit=-1&filter={"for" : "Team Zen / Vragen"}`);
  const messagesResponseJSON = await messagesResponse.json();
 
  response.render('index.liquid', {
    // teamName: teamName,
    //squads: squadResponseJSON.data,
    messages: messagesResponseJSON.data
  });
})
 
app.post('/index', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      // teamName: teamName,
      for: "Team Zen / Vragen",
      text: request.body.message // post
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  
  response.redirect('/index')
})

// stap 1: nieuwe /like POST request. Met een unique message id (request.body.id)
app.post('/like', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      // teamName: teamName,
      for: `Team Zen / Vragen - ${request.body.id}`,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  
  response.redirect('/index')
})
 


app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
