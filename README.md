# Squadpage - FDND

📚 **Inhoudsopgave**

- 👨🏼‍💼 Opdracht
- 👩🏽‍💻 Gebruik
- 📖 beschrijving
- 🛠 Installatie
- 📱 Kenmerken
- 🔍 Technologieën
- 📂 Bronnen

## 👨🏼‍💼 Opdracht

De Squadpage-website maakt het makkelijk om contact te houden met de studenten van FDND. De site gebruikt Node.js, Express.js en de Liquid-template.

## 👩🏽‍💻 Gebruik

Met deze website kun je:  
✅ Studenten filteren op naam, squad en bio.  
✅ Het genre van elke student filteren.  
✅ Een chatbox gebruiken waarin studenten hun favoriete boeken kunnen delen en bespreken.  

## 📖  Beschrijving

### Custom properties 
Als team hebben we gebruik gemaakt van variabelen. Hier worden onder anderen de kleuren, typografie en andere veel voorkomende vormgeef elementen vast gesteld. Dit is een effectieve manier voor snelle aanpassingen en voor het werken in groepen. Zo werkt iedereen met dezelfde huisstijl. 

Voor de naamgeving maken wij onder anderen gebruik van optelling. Namelijk primary, secundary en tertiary, de volgorde is afhankelijk van de aanwezigheid. Ook maken we gebruik van de omschrijving. Zie hieronder een voorbeeld met uitleg:

#### Voorbeeld:
--button-bg-color

#### Uitleg:
Zo zie je in de naam dat het om een button gaat. De afkorting bg staat voor background (dit scheelt weer code). Color laat uiteraard weten dat het om een kleur gaat.

#### Onderwerpen custos properties:
- Color
- Fonts
- Border-radius
- Z-index
- Button

#### Uitwerking custos properties:
https://github.com/Ravirkt/connect-your-tribe-team-squad-page/blob/dce829a41e26f41f83fd4f83ce53a9384e043089/public/styles/basic-styles.css#L19-L67


### Fatima:
Ik heb de headline (H1-titel) ontworpen en gestyled met CSS. Daarnaast heb ik de afbeeldingen van de studenten bewerkt en verwerkt in interactieve kaarten.
Elke kaart bevat een More-knop. Wanneer erop wordt geklikt, wordt de kaart omgedraaid (flip effect), waarna de gefilterde naam, squad en bio van de student worden weergegeven. Deze gegevens worden dynamisch opgehaald vanuit de API.
Voor de flip-animatie heb ik GSAP gebruikt om een aantrekkelijk visueel effect te creëren.

📷 **Screenshot van mijn gedeelte :**  
 ![Website Screenshot](/public/assets/fatima.png)  


### Nadia:
Als je op de chat klikt krijg je een popover van de chat waar je je beste boek kan laten weten. Je kan de chat openen en sluiten. 

**Design**  
Voor het design heb ik gebruik gemaakt van de custom properties met de kleuren van FDND. 
Als je het bericht wilt posten heeft de knop een hover zodat je kan zien dat je erop staat. er is gelet op dat alles goed te zien en leesbaar is. 

**Responsive**  
Ik heb volgens mobiel first gewerkt, waarna ik steeds naar grotere schermen ging kijken. 
Op mobiel is de chat over de hele pagina en schermen vanaf 500px gaat die naar de linkerkant en wordt die lager/kleiner daarna wordt er bij 1000px de breedte iets kleiner. 
https://github.com/Ravirkt/connect-your-tribe-team-squad-page/blob/3136c3225cb846575bd8c2b920e1ce3eebb297bb/public/styles/chat.css#L35-L51

<video src="https://github.com/user-attachments/assets/9cf1215f-9c66-43eb-85fb-e807475c9e48" controls muted autoplay playsinline></video>

**Werking**  
Door de popover hoefde ik geen Javascript te gebruiken om de chat te openen of te sluiten. 
https://github.com/Ravirkt/connect-your-tribe-team-squad-page/blob/9a2c9f93d393d03f30a3bd3c9fd0b424d3f1d673/views/chat.liquid#L9-L10
De button van de chat als die gesloten is fixed en blijft zo staan als er op de pagina gescrollt wordt waar de kaarten staan. Ik heb dit ook voor het kruisje in de chat gedaan zodat je altijd de chat weg kan klikken. 

<video src="https://github.com/user-attachments/assets/fcd14098-6bd3-4f25-88b1-420e85729463" controls muted autoplay playsinline></video>


### Ravi

De filter wordt gebruikt om de verschillende personen te groeperen op favoriete boek genre. Ik ben hiervoor als eerst begonnen met de layout in html en css.

De layout bestaat uit een sidebar met daarin de filterbuttons en een headerbar met daarin de titel van de website. De overige ruimte is de plek waar de cards komen van de verschullende personen.

**Design**  
De layout van de pagina heb ik gestructureerd met Grid. Om de Grid duidelijk te krijgen heb ik een simpele schets gemaakt waarin ik de verschillende kolommen en rijen duidelijk maak. De layout in css heb ik gemaakt volgens het mobile first principe en heb ik gebruikt gemaakt van media queries zodat de website te gebruiken is op verschillende formaten.

*Techniek*
Het filteren is gedaan doormiddel van een GET request: ``` app.get('/drama', async function (request, response { ```. ALs de gebruiker de route /drama bezoek zal de functie worden uitgevoerd. De functie heeft 2 variabelen, de request en response. De request is aanvraag van gegevens die worden opgevraagt en de response is het antwoord dat terug wordt gestuurd.

```const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,fav_book_genre,bio&filter={"squads":{"squad_id":{"name":{"_eq":"1G"}}},"fav_book_genre":{"_eq":"Drama"}}') ```

In deze regel code wordt er vervolgens een fetch functie gedaan waarbij er gegevens worden opgehaald van de directus API. 

De url filtert de id, name, bio van elke persoon in squad 1G met als favoriete genre: Drama. Deze gegevens worden vervolgens opgeslagen in de variabele ```const personResponse```. 

```const personResponseJSON = await personResponse.json()``` De code zorgt ervoor dat de data dat gefetched is omgezet wordt naar JSON data zodat deze data gemanipuleert kan worden in javascript. Dit wordt opgeslagen in de variabele ```const personResponseJSON```. 

```response.render('index.liquid', { persons: personResponseJSON.data, squads: squadResponseJSON.data })```. Deze regel code zorgt ervoor dat de data in de response wordt doorgegeven naar de index.liquid view. Hierbij worden de gegevens van de personen meegegeven. ```persons: personResponseJSON.data```

Dit is de filter voor de genre Drama. Voor de genres: Action, Comedy en Thriller heb ik een andere GET request met url dat vervolgens filtert op de genre.

Als je nu /drama of /action, zal de filter op betreffende genre filteren en dus die betreffende GET request uitvoeren.










## 🛠 Installatie

### Vereisten

✅ Node.js en npm moeten geïnstalleerd zijn.

### Stappen

1. Clone de repository:

git clone https://github.com/jouw-repo-url.git

Installeer de benodigde pakketten:
npm install  

Start de applicatie lokaal:
npm start  

Open de website in je browser:  
🔗 [http://localhost:8000](http://localhost:8000)

## 📱 Kenmerken  

🚀 **Node.js** –  backend-framework  
🏗️ **Express.js** –  webframework voor API’s  
📝 **Liquid** – Templating engine voor dynamische HTML  
🎨 **GSAP** –  animatie  

## 🔍 Technologieën  

🖥️ **Visual Studio Code** – Code-editor  
📟 **HTML** – Structuur van de website  
🎨 **CSS** – Vormgeving en styling  
🕹️ **JavaScript** – Interactiviteit  
🌀 **GSAP** – Animatie
🥜 **Node.js** – Backend-functionaliteit  

## 📂 Bronnen  

- Web Dev Simplified  
- Eigen project: Squad-page  

📷 **Screenshot van de website:**  
![Website Screenshot](/public/assets/web.png)  

🔗 **Live website:** [Connect Your Tribe - Squad Page](https://connect-your-tribe-team-squad-page-tl10.onrender.com/)  
