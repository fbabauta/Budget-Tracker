# PWA - Budget-Tracker   [![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=103)](https://opensource.org/licenses/mit-license.php)



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

![iconfinder_10-html5_104494](https://user-images.githubusercontent.com/70370805/108665270-693ed880-7489-11eb-9253-70bfe7d03ed5.png)

![iconfinder_badge-css-3_317756](https://user-images.githubusercontent.com/70370805/108665491-e5392080-7489-11eb-9a5d-334e1c362b8f.png)

![iconfinder_187_Js_logo_logos_4373213](https://user-images.githubusercontent.com/70370805/108665657-43fe9a00-748a-11eb-8609-cadce4ff428f.png)

![iconfinder_nodejs-new-pantone-black_1012818](https://user-images.githubusercontent.com/70370805/108665772-9475f780-748a-11eb-9e96-df4adec40ad4.png)

![expressjs-icon](https://user-images.githubusercontent.com/70370805/108666535-26cacb00-748c-11eb-9fed-667f8ee5d71e.png)

![mongodb](https://user-images.githubusercontent.com/70370805/108666690-95a82400-748c-11eb-93ee-051fd1c2afa0.png)

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

[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)

[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)




## Questions 
If you have any questions about the repo, please contact me:

GitHub: [fbabauta](https://github.com/fbabauta) || Email: [francine.babauta@outlook.com](francine.babauta@outlook.com)