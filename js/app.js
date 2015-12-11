var dbName = "poems_db";
var dbVersion = 1;
var dbStoreName = "poems";
var title = document.getElementById("title");
var author = document.getElementById("author");
var content = document.getElementById("content");
var youtube = document.getElementById("youtube");
function addPoemContent(content) {
    var $p = document.createElement("p");
    $p.innerHTML = content;
    document.getElementById("content").appendChild($p);
}
window.onload = function () {
	var IDBOpenDBRequest_connection = window.indexedDB.open (dbName, dbVersion);
	IDBOpenDBRequest_connection.onsuccess = function () {
		var IDBDatabase_db = this.result;

		var IDBTransaction_trans = IDBDatabase_db.transaction (dbStoreName, "readonly");
		IDBTransaction_trans.oncomplete = function () {
			IDBDatabase_db.close ();
		};


		var IDBObjectStore_poemsTrans = IDBTransaction_trans.objectStore (dbStoreName);

		var IDBRequest_outReq = IDBObjectStore_poemsTrans.get (parseInt (window.sessionStorage.getItem ("id")));
		IDBRequest_outReq.onsuccess = function (evt) {
			author.textContent=this.result.author;
                        title.textContent=this.result.title;
                        
                        var poem_content= this.result.content;
                        
                        addPoemContent(poem_content);
                        youtube.href=this.result.youtube_url;
		};
	};

	IDBOpenDBRequest_connection.error = function () {
		console.log ("Error occured with opening the database!");

	};
	

};


