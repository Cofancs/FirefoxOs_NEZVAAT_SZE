

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
var poemData = [
    {
        id: 1,
        title: "A walesi bárdok",
        author: "Arany János",
        content: "Edward király, angol király" +
                "Léptet fakó lován:\n" +
                "Hadd látom, úgymond, mennyit ér\n" +
                "A velszi tartomány.\n" +
                "\n" +
                "Van-e ott folyó és földje jó?\n" +
                "Legelőin fű kövér?\n" +
                "Használt-e a megöntözés:\n" +
                "A pártos honfivér?\n" +
                "\n" +
                "S a nép, az istenadta nép,\n" +
                "Ha oly boldog-e rajt’\n" +
                "Mint akarom, s mint a barom,\n" +
                "Melyet igába hajt?\n" +
                "\n" +
                "Felség! valóban koronád\n" +
                "Legszebb gyémántja Velsz:\n" +
                "Földet, folyót, legelni jót,\n" +
                "Hegy-völgyet benne lelsz.\n" +
                "\n" +
                "S a nép, az istenadta nép\n" +
                "Oly boldog rajta, Sire!\n" +
                " Kunyhói mind hallgatva, mint\n" +
                "Megannyi puszta sir.\n" +
                "\n" +
                "Edward király, angol király\n" +
                "Léptet fakó lován:\n" +
                "Körötte csend amerre ment,\n" +
                "És néma tartomány.\n" +
                "\n" +
                "Montgomery a vár neve,\n" +
                "Hol aznap este szállt;\n" +
                "Montgomery, a vár ura,\n" +
                "Vendégli a királyt.\n" +
                "\n" +
                "Vadat és halat, s mi jó falat\n" +
                "Szem-szájnak ingere,\n" +
                "Sürgő csoport, száz szolga hord,\n" +
                "Hogy nézni is tereh;\n" +
                "\n" +
                "S mind, amiket e szép sziget\n" +
                "Ételt-italt terem;\n" +
                "S mind, ami bor pezsegve forr\n" +
                "Túl messzi tengeren.\n" +
                "\n" +
                "Ti urak, ti urak! hát senkisem\n" +
                "Koccint értem pohárt?\n" +
                "Ti urak, ti urak!... ti velsz ebek!\n" +
                "Ne éljen Eduárd?\n" +
                "\n" +
                "Vadat és halat, s mi az ég alatt\n" +
                "Szem-szájnak kellemes,\n" +
                "Azt látok én: de ördög itt\n" +
                "Belül minden nemes.\n" +
                "\n" +
                "Ti urak, ti urak, hitvány ebek!\n" +
                "Ne éljen Eduárd?\n" +
                "Hol van, ki zengje tetteim -\n" +
                "Elő egy velszi bárd!\n" +
                "\n" +
                "Egymásra néz a sok vitéz,\n" +
                "A vendég velsz urak;\n" +
                "Orcáikon, mint félelem,\n" +
                "Sápadt el a harag.\n" +
                "\n" +
                "Szó bennszakad, hang fennakad,\n" +
                "Lehellet megszegik. -\n" +
                "Ajtó megől fehér galamb,\n" +
                "Ősz bárd emelkedik.\n" +
                "\n" +
                "Itt van, király, ki tetteidet\n" +
                "Elzengi, mond az agg;\n" +
                "S fegyver csörög, haló hörög\n" +
                "Amint húrjába csap.\n" +
                "\n" +
                "Fegyver csörög, haló hörög,\n" +
                "A nap vértóba száll,\n" +
                "Vérszagra gyűl az éji vad:\n" +
                "Te tetted ezt, király!\n" +
                "\n" +
                "Levágva népünk ezrei,\n" +
                "Halomba, mint kereszt,\n" +
                "Hogy sírva tallóz aki él:\n" +
                "Király, te tetted ezt!”\n" +
                "\n" +
                "Máglyára! el! igen kemény -\n" +
                "Parancsol Eduárd -\n" +
                "Ha! lágyabb ének kell nekünk;\n" +
                "S belép egy ifju bárd.\n" +
                "\n" +
                "Ah! lágyan kél az esti szél\n" +
                "Milford-öböl felé;\n" +
                "Szüzek siralma, özvegyek\n" +
                "Panasza nyög belé.\n" +
                "\n" +
                "Ne szülj rabot, te szűz! anya\n" +
                "Ne szoptass csecsemőt!...”\n" +
                "S int a király. S elérte még\n" +
                "A máglyára menőt.\n" +
                "\n" +
                "De vakmerőn s hivatlanúl\n" +
                "Előáll harmadik;\n" +
                "Kobzán a dal magára vall,\n" +
                "Ez íge hallatik:\n" +
                "\n" +
                "Elhullt csatában a derék -\n" +
                "No halld meg, Eduárd:\n" +
                "Neved ki diccsel ejtené,\n" +
                "Nem él oly velszi bárd.\n" +
                "\n" +
                "Emléke sír a lanton még -\n" +
                "No halld meg, Eduárd:\n" +
                "Átok fejedre minden dal,\n" +
                "Melyet zeng velszi bárd.”\n" +
                "\n" +
                "Meglátom én! - S parancsot ád\n" +
                "Király rettenetest:\n" +
                "Máglyára, ki ellenszegűl,\n" +
                "Minden velsz énekest!\n" +
                "\n" +
                "Szolgái szét száguldanak,\n" +
                "Ország-szerin, tova.\n" +
                "Montgomeryben így esett\n" +
                "A híres lakoma. -\n" +
                "\n" +
                "S Edvárd király, angol király\n" +
                "Vágtat fakó lován;\n" +
                "Körötte ég földszint az ég:\n" +
                "A velszi tartomány.\n" +
                "\n" +
                "Ötszáz, bizony, dalolva ment\n" +
                "Lángsírba velszi bárd:\n" +
                "De egy se birta mondani\n" +
                "Hogy: éljen Eduárd. -\n" +
                "\n" +
                "Ha, ha! mi zúg?... mi éji dal\n" +
                "London utcáin ez?\n" +
                "Felköttetem a lord-majort,\n" +
                "Ha bosszant bármi nesz!\n" +
                "\n" +
                "Áll néma csend; légy szárnya bent,\n" +
                "Se künn, nem hallatik:\n" +
                "Fejére szól, ki szót emel!\n" +
                "Király nem alhatik.”\n" +
                "\n" +
                "Ha, ha! elő síp, dob, zene!\n" +
                "Harsogjon harsona:\n" +
                "Fülembe zúgja átkait\n" +
                "A velszi lakoma...\n" +
                "\n" +
                "De túl zenén, túl síp-dobon,\n" +
                "Riadó kürtön át:\n" +
                "Ötszáz énekli hangosan\n" +
                "A vértanúk dalát.",
        youtube_url: "https://www.youtube.com/watch?v=8Btn0MAqfW0"
    },
    {
        id: 2,
        title: "Anyám tyúkja",
        author: "Petőfi Sándor",
        content: "Ej mi a kő! tyúkanyó, kend\n" +
                "A szobában lakik itt bent?\n" +
                "Lám, csak jó az isten, jót ád,\n" +
                "Hogy fölvitte a kend dolgát!\n" +
                "\n" +
                "Itt szaladgál föl és alá,\n" +
                "Még a ládára is fölszáll,\n" +
                "Eszébe jut, kotkodákol,\n" +
                "S nem verik ki a szobábol.\n" +
                "\n" +
                "Dehogy verik, dehogy verik!\n" +
                "Mint a galambot etetik,\n" +
                "Válogat a kendermagban,\n" +
                "A kiskirály sem él jobban.\n" +
                "\n" +
                "Ezért aztán, tyúkanyó, hát\n" +
                "Jól megbecsűlje kend magát,\n" +
                "Iparkodjék, ne legyen ám\n" +
                "Tojás szűkében az anyám. –\n" +
                "\n" +
                "Morzsa kutyánk, hegyezd füled,\n" +
                "Hadd beszélek mostan veled,\n" +
                "Régi cseléd vagy a háznál,\n" +
                "Mindig emberűl szolgáltál,\n" +
                "\n" +
                "Ezután is jó légy, Morzsa,\n" +
                "Kedvet ne kapj a tyúkhusra,\n" +
                "Élj a tyúkkal barátságba’...\n" +
                "Anyám egyetlen jószága.",
        youtube_url: "https://www.youtube.com/watch?v=FxOZvSlIT3M"
    },
    {
        id: 3,
        title: "Tiszai Csönd",
        author: "Juhász Gyula",
        content: "Hálót fon az est, a nagy, barna pók,\n" +
                "Nem mozdulnak a tiszai hajók.\n" +
                "\n" +
                "Egyiken távol harmonika szól,\n" +
                "Tücsök felel rá csöndben valahol.\n" +
                "\n" +
                "Az égi rónán ballag már a hold:\n" +
                "Ezüstösek a tiszai hajók.\n" +
                "\n" +
                "Tüzeket raknak az égi tanyák,\n" +
                "Hallgatják halkan a harmonikát.\n" +
                "\n" +
                "Magam a parton egymagam vagyok,\n" +
                "Tiszai hajók, néma társatok!\n" +
                "\n" +
                "Ma nem üzennek hívó távolok,\n" +
                "Ma kikötöttünk itthon, álmodók!",
        youtube_url: "https://www.youtube.com/watch?v=FxOZvSlIT3M"
    }
];
var dbName = "poems4_db";
var dbVersion = 1;
var dbStoreName = "poems4";
function addPoemLine(poem) {
    var $li = document.createElement("li");
    $li.innerHTML = "" + poem.title + "<br />" + poem.author;
    document.getElementById("poems").appendChild($li);
}

var pDb = window.indexedDB;
var request = pDb.open(dbName, dbVersion);
request.onupgradeneeded = function (event) {
    console.log("onupgraded start");
    var db = event.currentTarget.result;
    /*if(db.objectStoreNames.contains(dbStoreName)) { 
     db.objectStoreName.delete();
     }*/

    var objectStore = db.createObjectStore(dbStoreName, {keyPath: 'id'});
    objectStore.createIndex("id", "id", {unique: true});
    console.log("middle start");
    var transaction = db.transaction(dbStoreName, "readwrite");
    var poem;
    transaction.oncomplete = function () {
        for (var i in poemData) {
            poem = poemData[i];
            addPoemLine(poem);
        }

        db.close();
        console.log("transaction end");
    };
    var objectStoreTrans = transaction.objectStore(dbStoreName);
    for (var i in poemData) {
        poem = poemData[i];
        var req = objectStoreTrans.add(poem);
        req.onsuccess = function () {
            console.log("Success");
        };
        req.onerror = function () {
            console.log("Error objectTrans");
        };
    }
    console.log("onupgraded end");
};
request.onsuccess = function () {
    /* var db = this.result;
     console.log("onsuccess start");
     var transaction = db.transaction(dbStoreName,"readonly");
     
     transaction.oncomplete = function(){
     console.log("oncomplete start");
     db.close();
     };
     var objectStore= transaction.objectStore(dbStoreName);
     
     var req = objectStore.openCursor();
     req.onsuccess = function (event){
     var cursor = event.target.result;
     
     if(cursor){
     addPoemLine(""+cursor.value.title + "<br />" + cursor.value.author +"");
     cursor.continue();
     }else{
     console.log("end");
     }
     };
     req.onerror = function(){
     console.log("error opening the cursor");
     };*/
    console.log("onsuccess end");
};
request.onerror = function () {
    console.log("Error on request");
};
/*(function () {
 
 
 
 var db;
 
 // Used to keep track of which view is displayed to avoid uselessly reloading it
 var current_view_poem_key;
 
 function openDb() {
 console.log("openDb ...");
 var request = indexedDB.open(dbName, dbVersion);
 request.onsuccess = function (event) {
 db = this.result;
 console.log("openDb DONE");
 request.onerror = function (event) {
 console.log("Database error: " + event.target.errorCode);
 };
 request.onupgradeneeded = function (event) {
 console.log("openDb.onupgradeneeded");
 var store = event.currentTarget.result.createObjectStore(dbStoreName, {keyPath: "id", autoIncrement: true});
 store.createIndex('title', 'title', { unique: false });
 store.createIndex('author', 'author', { unique: false });
 /*objectStore.createIndex("id", "id", {unique: true});
 
 objectStore.transaction.oncomplete = function (event) {
 // Store values in the newly created objectStore.
 var poemObjectStore = db.transaction(dbStoreName, "readwrite").objectStore("poems");
 for (var i in poemData) {
 poemObjectStore.add(poemData[i]);
 poemObjectStore.onsucces = function (event) {
 
 }
 }
 };
 };
 };
 }*/
/**
 * @param {string} store_name
 * @param {string} mode either "readonly" or "readwrite"
 */
/*function getObjectStore(store_name, mode) {
 var tx = db.transaction(store_name, mode);
 return tx.objectStore(store_name);
 }
 function clearObjectStore(store_name) {
 var store = getObjectStore(dbName, 'readwrite');
 var req = store.clear();
 req.onsuccess = function(evt) {
 console.log("Store cleared");
 displayPoemList(store);
 };
 req.onerror = function (evt) {
 console.error("clearObjectStore:", evt.target.errorCode);
 console.log(this.error);
 };
 }
 function getBlob(key, store, success_callback) {
 var req = store.get(key);
 req.onsuccess = function(evt) {
 var value = evt.target.result;
 if (value)
 success_callback(value.blob);
 };
 }*/
/**
 * @param {IDBObjectStore=} store
 */
/*function displayPoemList(store) {
 console.log("displayPoemList");
 if (typeof store == 'undefined')
 store = getObjectStore(dbName, 'readonly');
 var poem_msg = $('#poem-msg');
 poem_msg.empty();
 var poem_list = $('#poem-list');
 poem_list.empty();
 // Resetting the iframe so that it doesn't display previous content
 newViewerFrame();
 var req;
 req = store.count();
 // Requests are executed in the order in which they were made against the
 // transaction, and their results are returned in the same order.
 // Thus the count text below will be displayed before the actual pub list
 // (not that it is algorithmically important in this case).
 req.onsuccess = function(evt) {
 poem_msg.append('<p>There are <strong>' + evt.target.result +
 '</strong> record(s) in the object store.</p>');
 };
 req.onerror = function(evt) {
 console.error("add error", this.error);
 console.log(this.error);
 };
 var i = 0;
 req = store.openCursor();
 req.onsuccess = function(evt) {
 var cursor = evt.target.result;
 // If the cursor is pointing at something, ask for the data
 if (cursor) {
 console.log("displayPoemList cursor:", cursor);
 req = store.get(cursor.key);
 req.onsuccess = function (evt) {
 var value = evt.target.result;
 var list_item = $('<li>' +
 value.title + "<br />"+
 value.author +
 '</li>');
 if (value.hasOwnProperty('blob') &&
 typeof value.blob != 'undefined') {
 var link = $('<a href="' + cursor.key + '">File</a>');
 link.on('click', function() { return false; });
 link.on('mouseenter', function(evt) {
 setInViewer(evt.target.getAttribute('href')); });
 list_item.append(' / ');
 list_item.append(link);
 } else {
 list_item.append(" / No attached file");
 }
 poem_list.append(list_item);
 };
 // Move on to the next object in store
 cursor.continue();
 // This counter serves only to create distinct ids
 i++;
 } else {
 console.log("No more entries");
 }
 };
 }
 function newViewerFrame() {
 var viewer = $('#poem-viewer');
 viewer.empty();
 var iframe = $('<iframe />');
 viewer.append(iframe);
 return iframe;
 }
 
 function setInViewer(key) {
 console.log("setInViewer:", arguments);
 key = Number(key);
 if (key == current_view_poem_key)
 return;
 
 current_view_poem_key = key;
 
 var store = getObjectStore(dbStoreName, 'readonly');
 getBlob(key, store, function(blob) {
 console.log("setInViewer blob:", blob);
 var iframe = newViewerFrame();
 
 // It is not possible to set a direct link to the
 // blob to provide a mean to directly download it.
 if (blob.type == 'text/html') {
 var reader = new FileReader();
 reader.onload = (function(evt) {
 var html = evt.target.result;
 iframe.load(function() {
 $(this).contents().find('html').html(html);
 });
 });
 reader.readAsText(blob);
 } else if (blob.type.indexOf('image/') == 0) {
 iframe.load(function() {
 var img_id = 'image-' + key;
 var img = $('<img id="' + img_id + '"/>');
 $(this).contents().find('body').html(img);
 var obj_url = window.URL.createObjectURL(blob);
 $(this).contents().find('#' + img_id).attr('src', obj_url);
 window.URL.revokeObjectURL(obj_url);
 });
 } else if (blob.type == 'application/pdf') {
 $('*').css('cursor', 'wait');
 var obj_url = window.URL.createObjectURL(blob);
 iframe.load(function() {
 $('*').css('cursor', 'auto');
 });
 iframe.attr('src', obj_url);
 window.URL.revokeObjectURL(obj_url);
 } else {
 iframe.load(function() {
 $(this).contents().find('body').html("No view available");
 });
 }
 
 });
 }
 
 */
/**
 * @param {string} biblioid
 * @param {string} title
 * @param {number} year
 * @param {Blob=} blob
 */
/*function addPoem(id, title, author, blob) {
 console.log("addPublication arguments:", arguments);
 var obj = { id: biblioid, title: title, author: author };
 if (typeof blob != 'undefined')
 obj.blob = blob;
 
 var store = getObjectStore(dbStoreName, 'readwrite');
 var req;
 try {
 req = store.add(obj);
 } catch (e) {
 if (e.name == 'DataCloneError')
 console.log("This engine doesn't know how to clone a Blob, " +
 "use Firefox");
 throw e;
 }
 req.onsuccess = function (evt) {
 console.log("Insertion in DB successful");
 console.log();
 displayPubList(store);
 };
 req.onerror = function() {
 console.error("addPublication error", this.error);
 console.log(this.error);
 };
 }
 
 
 
 
 
 
 
 openDb();
 addEventListeners();
 
 }})(); // Immediately-Invoked Function Expression (IIFE)
 */

