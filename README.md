# BreweryDB
## Table Of contents
* [Introduction](##Introduction)
* [Requirements](##Requirements)
* [Instalations](##Installing)
* [Installed Versions](##Installed versions)
* [Project Structure](##Project Structure)
* [Development and Debugging](##Development and Debugging)
* [Author](##Author)

## Introduction 

This is a Web application for listing the beers and checking its details. The backend uses the ExpressJs framework. The frontend uses Reactjs, Bootstrap, CSS and JavaScript
framework.
* [ReactJs](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)

## Requirements

This Web application requires the following software:

* [Create-react-app](https://github.com/facebook/create-react-app) 
* [NodeJs](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com/)
* [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
* [ExpressJs](https://expressjs.com/)

### Installing

Install this software as usual. Here is an example of installing it on Ubuntu.

For Create-react-app
```
sudo apt-get install Create-react-app -g
```
For Nodejs
```
sudo apt install nodejs
```
For Bootstrap
```
npm install bootstrap
```
For fontawesome
```
npm i --save @fortawesome/fontawesome-svg-core \
npm i --save @fortawesome/free-solid-svg-icons \
npm i --save @fortawesome/react-fontawesome
```
For ExpressJs
```
npm install -g express-generator
```
## Installed versions
* Node - 10.15.3
* Bootstrap - 4.3.1
* Create-react-app - 1.4.3
* @fortawesome/fontawesome-svg-core : 1.2.17
* @fortawesome/free-solid-svg-icons : 5.8.1
* @fortawesome/react-fontawesome -  0.1.4
* Express-generator - 1.5.1
* react-router-dom - 5.0.0

## Project Structure

The project follows and extends the folder structure as expected by React.

```
Brewery-app
  |-- public                     # Python dependencies.
  |-- react-backend              # backend of the application
      |-- routes                 # custom routes to handle backend calls.
            |-- index.js         # custom routes to handle requests and responses of API
            |-- users.js         # custom routes to handle request and responses of API.
  |-- src/                   
      |-- components             # Custom components.
      		|-- Details.js       # Custom component which displays details of a specific beer.
            |-- Details.css      # Custom css for Details component.
      		|-- Listing.js       # Custom component which lists all beers.
            |-- Listing.css      # Custom css for Listing Component.
      		|-- main             # Custom routes of the application.
      |-- img                    # Image files of the application.   
      |-- app.js                 # Main application file.
      |-- app.css                # Pre-defined CSS of the application.
      |-- index.js               # Boilerplate code.
      |-- index.css              # Css defined for those boilerplate code.
      |-- package.json           # Lists all packages installed or dependent to run the application.         

```

## Development and Debugging

The application can be developed using just a text editor, Sublime text editor or any other IDE supporting ReactJs.
Setup the project by executing npm start from the project directory.

For the back-end.

```
cd brewery-app/react-backend
npm start
```

For the front-end.

```
cd brewery-app
npm start
```
ATTENTION: All the modules have to be properly installed before running the above commands.


## Author

* **Nikhil Raikar** - [NikhilRaikar](https://gitlab.com/nikhilraikar88)
