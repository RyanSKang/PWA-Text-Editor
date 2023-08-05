# PWA-Text-Editor
  
## Description:
This application is a text editor that runs in the browser. This is a single-page application that meets the Progressive Web Applications criteria. An additional feature of this project will be persistence techniques that serve as redundancy in case one of the options is not supported by the browser (also able to function offline).

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)  
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation
Git clone Repository: [PWA-Text-Editor](https://github.com/RyanSKang/PWA-Text-Editor)  
Following Installation Needed:   
    -Express [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)  
    -If-env  [v1.0.4](https://www.npmjs.com/package/if-env)  
    -Concurrently [v5.2.1](https://www.npmjs.com/package/concurrently/v/5.2.0)  
    -Nodemon [v2.0.4](https://https://www.npmjs.com/package/nodemon/v/2.0.4.npmjs.com/package/nodemon)  
    -Webpack [v5.51.1](https://www.npmjs.com/package/webpack/v/5.51.1)  
    -Webpack-dev-server [v4.15.1](https://www.npmjs.com/package/webpack-dev-server)  
    -Babel-Loader [v8.2.2](https://www.npmjs.com/package/babel-loader/v/8.2.2)  

   

## Usage Instructions
1. In terminal execute an "npm i"  
2. In terminal execute an "npm run build"  
3. In terminal execute an "npm run start" 
4. Either open html on live server OR go to deployed application here:  
    -<a href="https://ryans-pwa-texteditor-f2ff23e03321.herokuapp.com/"> Heroku Deployed Application</a>

  

## Screenshots
### Figure 1. Live Browser Application
<img width="1507" alt="Screenshot 2023-08-05 at 2 21 25 PM" src="https://github.com/RyanSKang/PWA-Text-Editor/assets/124969918/fcfed753-b0a3-4fc7-810b-20fca958c578">  

### Figure 2. Offline application
<img width="1195" alt="Screenshot 2023-08-05 at 2 21 45 PM" src="https://github.com/RyanSKang/PWA-Text-Editor/assets/124969918/043be23e-bfb5-48e8-acc6-9687d268dcf8">  

### Figure 3. Manifest.Json
<img width="780" alt="Screenshot 2023-08-05 at 2 22 07 PM" src="https://github.com/RyanSKang/PWA-Text-Editor/assets/124969918/fde31888-782c-4732-b81a-4f5aec0f60ff">  

### Figure 4. Service Workers
<img width="1011" alt="Screenshot 2023-08-05 at 2 22 18 PM" src="https://github.com/RyanSKang/PWA-Text-Editor/assets/124969918/b2b82aad-4f30-4b4d-8c4c-157595ad7192">  

### Figure 5. IndexedDB
<img width="508" alt="Screenshot 2023-08-05 at 2 22 54 PM" src="https://github.com/RyanSKang/PWA-Text-Editor/assets/124969918/80128b3e-a6a3-49db-83c7-4db7ae4599ac">

## Credits
-DU-Virt-FSF-PT-02-2023-U-LOLC | NoSQL 28-Stu_Mini-Project  
-AskBCS learning assistant  
