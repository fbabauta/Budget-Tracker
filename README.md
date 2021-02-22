# PWA - Budget-Tracker

## Description
Budget Tracker is a progressive web application that allows users to track their budget by 
adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons. 
Users are able to add a transaction with or without a connection. When a user enters a 
transaction while offline, these transactions are stored in the indexedDB, and transferred 
to the database when the user comes back online.


## Table of Contents
* [Technologies](#technologies)
* [Usage](#usage)
* [Finished Product](#finished-product)
* [Questions](#questions)


## Installation
To install the required dependencies, run `npm install`.
This package assumes there is a MongoDB server running on localhost:27017. If your server is active
running somewhere else, you can edit `server.js` to reflect that.

## Example Usage
* Navigate to the deployed Heroku app [here](https://fb-budgettracker.herokuapp.com/).
* Enter a transaction name and amount, choose whether the transaction is a deposit or an expense.
* While offline you may continue to view the application and add transactions.
* When internet is detected, your total budget will update based on those transactions.
* To test offline mode: Open your browser's Dev Tools --> Application --> Service Workers --> Check the 'Offline' box.
  

## Finished Product
View deployed Heroku app [here](https://fb-budgettracker.herokuapp.com/).

![budgetDB](https://user-images.githubusercontent.com/70370805/108643023-92497400-745d-11eb-98b1-dda09bf76f9c.jpg)


## Questions 
If you have any questions about the repo, please contact me:

GitHub: [fbabauta](https://github.com/fbabauta) || Email: [francine.babauta@outlook.com](francine.babauta@outlook.com)