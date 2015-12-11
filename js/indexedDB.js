if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

var dbName = "poems_db";
var dbVersion = 1;
var dbStoreName = "poems";

function addPoemLine(poem) {
    var $li = document.createElement("li");
    $li.innerHTML = "<a href='#'><p class='" + poem.id + "'>" + poem.title + "</p><p class='" + poem.id + "'>" + poem.author + "</p></a>";
    document.getElementById("poems").appendChild($li);
}
window.onload = function () {
	var request = window.indexedDB.open(dbName, dbVersion);

	request.onsuccess = function () {
		 var db = this.result;
		 var transaction = db.transaction (dbStoreName,"readonly");
		 
		 transaction.oncomplete = function(){
			 db.close();
		 };

		 var objectStoreTr= transaction.objectStore (dbStoreName);
		 var IDBIndex_Index2 = objectStoreTr.index ("author_title");

		 var Kreq1 = IDBIndex_Index2.openCursor ();
		 Kreq1.onsuccess = function (event) {
		 	var cursor = event.target.result;
		 	
		 	if (cursor) {
		 		addPoemLine(cursor.value);
		 		cursor.continue();
		 	}
		};
		 
		Kreq1.onerror = function() {
			console.log("error opening the cursor");
		};

	};

	request.onerror = function () {
		  console.log("Error on request");
	};
};
var list = document.getElementById("poems");
list.addEventListener ("click", function (evt) {
	if (evt.target.className != "" || evt.target.className != "icon icon-menu" ) {
		window.sessionStorage.setItem ("id", evt.target.className);
		window.location.href = "poemContent.html"
		console.log ("ID.:" + evt.target.className);
	}

	else {
		//window.alert ("Nem jó helyre kattintottál!");
		console.log ("You can't click on that spot, there is nothing!");
	}

});