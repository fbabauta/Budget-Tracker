let db;

// create a new database request and connection
const request = indexedDB.open("budget", 1);

// on upgrade need create a new object store called pending
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

// if request is successful, save result to db variable and check if there is internet connection. If there is run checkDatabase function
request.onsuccess = function (event) {
    db = event.target.result;

    // check if app is online before reading from db
    if (navigator.onLine) {
        checkDatabase();
    }
};

// if there was an error with the request, log the error
request.onerror = function (event) {
    console.log("Woops! " + event.target.errorCode);
};

// used in index.js if the POST request to our API fails (if there is not internet connection) -- saves record to indexedDB database
function saveRecord(record) {

    // open a transaction and access pending object store
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");

    // add a record to indexedDB
    store.add(record);
}

// called when internet connection is detected
function checkDatabase() {
    
    // open a transaction and access pending object store
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");

    // get all records from store
    const records = store.getAll();

    // if at least one record exists in pending store, post it at our mongodb database
    getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => {
          // delete records if successful
          const transaction = db.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          store.clear();
        });
    }
  };
}
// listen for app coming back online
window.addEventListener("online", checkDatabase);