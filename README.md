# Openclimate

This is the main repository for first demonstration version of the the Open Climate portal, incubated at the Yale Open Lab.

For more information, visit: [https://openlab.yale.edu/earthhackathon](https://openlab.yale.edu/earthhackathon).

## Running the project

You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.

You can install all dependencies by running:

`npm install`

After this is completed you can run the project by running:

`npm start`

This will run the app in development mode, and make it available on [http://localhost:3000](http://localhost:3000).

Additionally, your page will refresh as your make changes and lint errors will be shown in the browser.

## Development

### Structure

The project uses a scalable directory structure, which gives elements a logical place as well as promote the 
single-responsibility where each class fulfills a specific function. You can find the logic of the application in the
`src` directory. The primary elements are:

- *Assets*, static files such as images and icons which are used within the application
- *Components*, reusable UI components which are consumed in the application's pages
- *Helpers*, supporting generic functions and functionality
- *Pages*, subdivided in various categories, representing distinct pages in the application
- *Routes*, the application's routes and route-related logic
- *Services*, underlying platform logic that can be attributed to specific functionality
- *Stores*, redux epics and reducers for a scalable approach to state management
- *Styles*, generic styling for the application

Please observe the structure suggested in the existing code, and introduce new concepts by documenting it.

### SASS Strategy

For the purpose of styling the application, we are using the SASS framework, which is a superset of CSS.

Besides normal CSS, it allows the usage of variables (`_variables.scss`) and various other features.
