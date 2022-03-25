let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;

  db.createObjectStore('new_transaction', { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  if (navigator.onLine) {
    // upload function
  }
};

function saveRecord(record) {
  const transaction = db.transaction(['new_transaction'], 'readWrite');

  const transactionObjectStore = transaction.objectStore('new_transaction');

  transactionObjectStore.add(record);
};
