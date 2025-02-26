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
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name&filter={"squads":{"squad_id":{"name":"1G"}}}')

  const personResponseJSON = await personResponse.json()
  response.render('index.liquid', {persons: personResponseJSON.data})
})



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



app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});




app.get('/chat', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name&filter={"squads":{"squad_id":{"name":"1G"}}}')

  const personResponseJSON = await personResponse.json()
  response.render('chat.liquid', {persons: personResponseJSON.data})
})


// let messages = []

app.get('/chat', async function(request, response) {
  const messages = await fetch('https://fdnd.directus.app/items/messages/');
    response.render('chat.liquid', {messages: messages})
})
const teamName = "Zen"
app.post('/chat', async function(request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName}`,
      text: request.body.post
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  response.redirect(303, '/chat')
})




// CODE bewerken

const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')
const squadResponseJSON = await squadResponse.json()

app.get('/logger', async function (request, response) {
  // Haal berichten op voor het team
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages?limit=-1&filter={"for" : "Team Zen / Vragen"}`);
  const messagesResponseJSON = await messagesResponse.json();
 
  response.render('logger.liquid', {
    // teamName: teamName,
    //squads: squadResponseJSON.data,
    messages: messagesResponseJSON.data
  });
})
 
app.post('/logger', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      // teamName: teamName,
      for: "Team Zen / Vragen",
      from: request.body.from,
      text: request.body.message
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  
  response.redirect('/logger')
})
 
