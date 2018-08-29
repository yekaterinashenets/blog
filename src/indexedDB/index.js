const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;
const dbName = 'postsDB',
  storeName = 'posts';

const logErr = err => console.log(err);

const connectDB = callback => {
  const request = idb.open(dbName, 1);
  request.onerror = logErr;
  request.onsuccess = () => {
    callback(request.result);
  };
  request.onupgradeneeded = e => {
    e.currentTarget.result.createObjectStore(storeName, {
      keyPath: 'id'
    });
    connectDB(callback);
  };
};

export const add = post =>
  new Promise(resolve =>
    connectDB(db => {
      const request = db
        .transaction([storeName], 'readwrite')
        .objectStore(storeName)
        .add(post);
      request.onerror = logErr;
      request.onsuccess = () => {
        resolve(request.result);
      };
    })
  );

export const update = post =>
  new Promise(resolve =>
    connectDB(db => {
      const request = db
        .transaction([storeName], 'readwrite')
        .objectStore(storeName)
        .put(post);
      request.onerror = logErr;
      request.onsuccess = () => {
        resolve(request.result);
      };
    })
  );

export const get = id =>
  new Promise(resolve =>
    connectDB(db => {
      const request = db
        .transaction([storeName], 'readonly')
        .objectStore(storeName)
        .get(id);
      request.onerror = logerr;
      request.onsuccess = () => {
        resolve(request.result);
      };
    })
  );

export const getAll = () =>
  new Promise(resolve =>
    connectDB(db => {
      const request = db
        .transaction([storeName], 'readonly')
        .objectStore(storeName)
        .getAll();
      request.onerror = logErr;
      request.onsuccess = () => {
        resolve(request.result);
      };
    })
  );

export const remove = id =>
  new Promise(resolve =>
    connectDB(db => {
      const request = db
        .transaction([storeName], 'readwrite')
        .objectStore(storeName)
        .delete(id);
      request.onerror = logerr;
      request.onsuccess = () => {
        resolve(request.result);
      };
    })
  );
