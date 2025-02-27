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
