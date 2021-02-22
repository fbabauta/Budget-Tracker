# PWA - Budget-Tracker   [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


## Description
Budget Tracker is a progressive web application that allows users to track their budget by 
adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons. 
Users are able to add a transaction with or without a connection. When a user enters a 
transaction while offline, these transactions are stored in the indexedDB, and transferred 
to the database when the user comes back online.


## Table of Contents

* [Technologies](#technologies)
  
* [Installation](#installation)
  
* [Usage](#usage)

* [Finished Product](#finished-product)
  
* [Questions](#questions)  


## Technologies

![npm](https://img.shields.io/npm/v/n?color=green&style=plastic)

![javascript](https://img.shields.io/npm/v/npm.svg?logo=javascript)



## Installation
To install the required dependencies, run `npm install`.
This package assumes there is a MongoDB server running on localhost:27017. If your server is active
running somewhere else, you can edit `server.js` to reflect that.

## Usage
* Navigate to the deployed Heroku app [here](https://fb-budgettracker.herokuapp.com/).
* Enter a transaction name and amount, choose whether the transaction is a deposit or an expense.
* While offline you may continue to view the application and add transactions.
* When internet is detected, your total budget will update based on those transactions.
* To test offline mode: Open your browser's Dev Tools --> Application --> Service Workers --> Check the 'Offline' box.
  

## Finished Product
View deployed Heroku app [here](https://fb-budgettracker.herokuapp.com/).

![budget-DB](https://user-images.githubusercontent.com/70370805/108643443-7ba41c80-745f-11eb-947b-ec5cec7ca59d.jpg)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)



## Questions 
If you have any questions about the repo, please contact me:

GitHub: [fbabauta](https://github.com/fbabauta) || Email: [francine.babauta@outlook.com](francine.babauta@outlook.com)