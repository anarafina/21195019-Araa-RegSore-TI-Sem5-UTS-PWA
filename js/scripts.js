window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
// Membuka atau membuat database IndexedDB
var request = window.indexedDB.open("ContactFormDB", 1);

var db;

request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Successfully opened IndexedDB");

};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    console.log("Upgrading IndexedDB");

    // Membuat objek penyimpanan (store) untuk menyimpan data
    var objectStore = db.createObjectStore("contacts", { keyPath: "nim" });

    // Menambahkan indeks untuk pencarian nama
    objectStore.createIndex("nama", "nama", { unique: false });

    // Menambahkan indeks untuk pencarian nomor telepon
    objectStore.createIndex("notlp", "notlp", { unique: false });

    console.log("IndexedDB and object store created");
};

// Fungsi untuk menambahkan data ke IndexedDB dan mengosongkan formulir
function tambahData() {
  var nimInput = document.getElementById("nim");
  var namaInput = document.getElementById("nama");
  var notlpInput = document.getElementById("notlp");
  var messageInput = document.getElementById("message");

  var nim = nimInput.value;
  var nama = namaInput.value;
  var notlp = notlpInput.value;
  var message = messageInput.value;

  var transaction = db.transaction(["contacts"], "readwrite");
  var objectStore = transaction.objectStore("contacts");

  // Membuat objek untuk disimpan
  var contact = {
      nim: nim,
      nama: nama,
      notlp: notlp,
      message: message,
  };

  // Menambahkan data ke objek penyimpanan
  var request = objectStore.add(contact);

  request.onsuccess = function (event) {
      console.log("Data added to IndexedDB");
      
      // Mengosongkan nilai-nilai input formulir
      nimInput.value = "";
      namaInput.value = "";
      notlpInput.value = "";
      messageInput.value = "";

      // Lakukan tindakan setelah berhasil menambahkan data
  };

  request.onerror = function (event) {
      console.error("Error adding data to IndexedDB:", event.target.error);
  };
}
window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
// Membuka atau membuat database IndexedDB
var request = window.indexedDB.open("ContactFormDB", 1);

var db;

request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Successfully opened IndexedDB");

};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    console.log("Upgrading IndexedDB");

    // Membuat objek penyimpanan (store) untuk menyimpan data
    var objectStore = db.createObjectStore("contacts", { keyPath: "nim" });

    // Menambahkan indeks untuk pencarian nama
    objectStore.createIndex("nama", "nama", { unique: false });

    // Menambahkan indeks untuk pencarian nomor telepon
    objectStore.createIndex("notlp", "notlp", { unique: false });

    console.log("IndexedDB and object store created");
};

// Fungsi untuk menambahkan data ke IndexedDB dan mengosongkan formulir
function tambahData() {
  var nimInput = document.getElementById("nim");
  var namaInput = document.getElementById("nama");
  var notlpInput = document.getElementById("notlp");
  var messageInput = document.getElementById("message");

  var nim = nimInput.value;
  var nama = namaInput.value;
  var notlp = notlpInput.value;
  var message = messageInput.value;

  var transaction = db.transaction(["contacts"], "readwrite");
  var objectStore = transaction.objectStore("contacts");

  // Membuat objek untuk disimpan
  var contact = {
      nim: nim,
      nama: nama,
      notlp: notlp,
      message: message,
  };

  // Menambahkan data ke objek penyimpanan
  var request = objectStore.add(contact);

  request.onsuccess = function (event) {
      console.log("Data added to IndexedDB");
      
      // Mengosongkan nilai-nilai input formulir
      nimInput.value = "";
      namaInput.value = "";
      notlpInput.value = "";
      messageInput.value = "";

      // Lakukan tindakan setelah berhasil menambahkan data
  };

  request.onerror = function (event) {
      console.error("Error adding data to IndexedDB:", event.target.error);
  };
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function() {
        console.log("Service Worker terdaftar!");
    }).catch(function(error) {
        console.error("Gagal mendaftarkan Service Worker: ", error);
    });
}

//penerapan push notif
document.addEventListener('DOMContentLoaded', function () {

if ('Notification' in window) {
    
    Notification.requestPermission()
        .then(function (permission) {
            if (permission === 'granted') {
                // ketika di Allow
                displayNotification(); alert('notifikasi di izinkan. Anda bisa mengakses dan menerima notifikasi');
            } else if (permission === 'denied') {
                // Ketika Blokir
                alert('notifikasi diblokir. Anda tidak bisa mengakses dan menerima notifikasi.');
            }
        });
}


function displayNotification() {
    const options = {
        body: 'Hallo ada notifikasi',
        icon: 'assets/favicon.png',
       
    };
  
    const notification = new Notification('Join Me Now', options);

    notification.onclick = function () {
        alert('Kamu telah Bergabung');
    };
}
});