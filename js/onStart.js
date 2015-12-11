var dbName = "poems_db";
var dbVersion = 1;
var dbStoreName = "poems";
var counter = 0;
var poemData = [
    {
        id: 1,
        title: "A walesi bárdok",
        author: "Arany János",
        content: "Edward király, angol király<br/>" +
                "Léptet fakó lován:<br/>" +
                "Hadd látom, úgymond, mennyit ér<br/>" +
                "A velszi tartomány.<br/>" +
                "<br/>" +
                "Van-e ott folyó és földje jó?<br/>" +
                "Legelőin fű kövér?<br/>" +
                "Használt-e a megöntözés:<br/>" +
                "A pártos honfivér?<br/><br/>" +
                "<br/>" +
                "S a nép, az istenadta nép,<br/>" +
                "Ha oly boldog-e rajt’<br/>" +
                "Mint akarom, s mint a barom,<br/>" +
                "Melyet igába hajt?<br/><br/>" +
                "<br/>" +
                "Felség! valóban koronád<br/>" +
                "Legszebb gyémántja Velsz:<br/>" +
                "Földet, folyót, legelni jót,<br/>" +
                "Hegy-völgyet benne lelsz.<br/>" +
                "<br/><br/>" +
                "S a nép, az istenadta nép<br/>" +
                "Oly boldog rajta, Sire!<br/>" +
                " Kunyhói mind hallgatva, mint<br/>" +
                "Megannyi puszta sir.<br/>" +
                "<br/>" +
                "Edward király, angol király<br/>" +
                "Léptet fakó lován:<br/>" +
                "Körötte csend amerre ment,<br/>" +
                "És néma tartomány.<br/>" +
                "<br/>" +
                "Montgomery a vár neve,<br/>" +
                "Hol aznap este szállt;<br/>" +
                "Montgomery, a vár ura,<br/>" +
                "Vendégli a királyt.<br/>" +
                "<br/>" +
                "Vadat és halat, s mi jó falat<br/>" +
                "Szem-szájnak ingere,<br/>" +
                "Sürgő csoport, száz szolga hord,<br/>" +
                "Hogy nézni is tereh;<br/>" +
                "<br/>" +
                "S mind, amiket e szép sziget<br/>" +
                "Ételt-italt terem;<br/>" +
                "S mind, ami bor pezsegve forr<br/>" +
                "Túl messzi tengeren.<br/>" +
                "<br/>" +
                "Ti urak, ti urak! hát senkisem<br/>" +
                "Koccint értem pohárt?<br/>" +
                "Ti urak, ti urak!... ti velsz ebek!<br/>" +
                "Ne éljen Eduárd?<br/>" +
                "<br/>" +
                "Vadat és halat, s mi az ég alatt<br/>" +
                "Szem-szájnak kellemes,<br/>" +
                "Azt látok én: de ördög itt<br/>" +
                "Belül minden nemes.<br/>" +
                "<br/>" +
                "Ti urak, ti urak, hitvány ebek!<br/>" +
                "Ne éljen Eduárd?<br/>" +
                "Hol van, ki zengje tetteim -<br/>" +
                "Elő egy velszi bárd!<br/>" +
                "<br/>" +
                "Egymásra néz a sok vitéz,<br/>" +
                "A vendég velsz urak;<br/>" +
                "Orcáikon, mint félelem,<br/>" +
                "Sápadt el a harag.<br/>" +
                "<br/>" +
                "Szó bennszakad, hang fennakad,<br/>" +
                "Lehellet megszegik. -<br/>" +
                "Ajtó megől fehér galamb,<br/>" +
                "Ősz bárd emelkedik.<br/>" +
                "<br/>" +
                "Itt van, király, ki tetteidet<br/>" +
                "Elzengi, mond az agg;<br/>" +
                "S fegyver csörög, haló hörög<br/>" +
                "Amint húrjába csap.<br/>" +
                "<br/>" +
                "Fegyver csörög, haló hörög,<br/>" +
                "A nap vértóba száll,<br/>" +
                "Vérszagra gyűl az éji vad:<br/>" +
                "Te tetted ezt, király!<br/>" +
                "<br/>" +
                "Levágva népünk ezrei,<br/>" +
                "Halomba, mint kereszt,<br/>" +
                "Hogy sírva tallóz aki él:<br/>" +
                "Király, te tetted ezt!”<br/>" +
                "<br/>" +
                "Máglyára! el! igen kemény -<br/>" +
                "Parancsol Eduárd -<br/>" +
                "Ha! lágyabb ének kell nekünk;<br/>" +
                "S belép egy ifju bárd.<br/>" +
                "<br/>" +
                "Ah! lágyan kél az esti szél<br/>" +
                "Milford-öböl felé;<br/>" +
                "Szüzek siralma, özvegyek<br/>" +
                "Panasza nyög belé.<br/>" +
                "<br/>" +
                "Ne szülj rabot, te szűz! anya<br/>" +
                "Ne szoptass csecsemőt!...”<br/>" +
                "S int a király. S elérte még<br/>" +
                "A máglyára menőt.<br/>" +
                "<br/>" +
                "De vakmerőn s hivatlanúl<br/>" +
                "Előáll harmadik;<br/>" +
                "Kobzán a dal magára vall,<br/>" +
                "Ez íge hallatik:<br/>" +
                "<br/>" +
                "Elhullt csatában a derék -<br/>" +
                "No halld meg, Eduárd:<br/>" +
                "Neved ki diccsel ejtené,<br/>" +
                "Nem él oly velszi bárd.<br/>" +
                "<br/>" +
                "Emléke sír a lanton még -<br/>" +
                "No halld meg, Eduárd:<br/>" +
                "Átok fejedre minden dal,<br/>" +
                "Melyet zeng velszi bárd.”<br/>" +
                "<br/>" +
                "Meglátom én! - S parancsot ád<br/>" +
                "Király rettenetest:<br/>" +
                "Máglyára, ki ellenszegűl,<br/>" +
                "Minden velsz énekest!<br/>" +
                "<br/>" +
                "Szolgái szét száguldanak,<br/>" +
                "Ország-szerin, tova.<br/>" +
                "Montgomeryben így esett<br/>" +
                "A híres lakoma. -<br/>" +
                "<br/>" +
                "S Edvárd király, angol király<br/>" +
                "Vágtat fakó lován;<br/>" +
                "Körötte ég földszint az ég:<br/>" +
                "A velszi tartomány.<br/>" +
                "<br/>" +
                "Ötszáz, bizony, dalolva ment<br/>" +
                "Lángsírba velszi bárd:<br/>" +
                "De egy se birta mondani<br/>" +
                "Hogy: éljen Eduárd. -<br/>" +
                "<br/>" +
                "Ha, ha! mi zúg?... mi éji dal<br/>" +
                "London utcáin ez?<br/>" +
                "Felköttetem a lord-majort,<br/>" +
                "Ha bosszant bármi nesz!<br/>" +
                "<br/>" +
                "Áll néma csend; légy szárnya bent,<br/>" +
                "Se künn, nem hallatik:<br/>" +
                "Fejére szól, ki szót emel!<br/>" +
                "Király nem alhatik.”<br/>" +
                "<br/>" +
                "Ha, ha! elő síp, dob, zene!<br/>" +
                "Harsogjon harsona:<br/>" +
                "Fülembe zúgja átkait<br/>" +
                "A velszi lakoma...<br/>" +
                "<br/>" +
                "De túl zenén, túl síp-dobon,<br/>" +
                "Riadó kürtön át:<br/>" +
                "Ötszáz énekli hangosan<br/>" +
                "A vértanúk dalát.<br/>",
        youtube_url: "https://www.youtube.com/watch?v=8Btn0MAqfW0"
    },
    {
        id: 2,
        title: "Anyám tyúkja",
        author: "Petőfi Sándor",
        content: "Ej mi a kő! tyúkanyó, kend<br/>" +
                "A szobában lakik itt bent?<br/>" +
                "Lám, csak jó az isten, jót ád,<br/>" +
                "Hogy fölvitte a kend dolgát!<br/>" +
                "<br/>" +
                "Itt szaladgál föl és alá,<br/>" +
                "Még a ládára is fölszáll,<br/>" +
                "Eszébe jut, kotkodákol,<br/>" +
                "S nem verik ki a szobábol.<br/>" +
                "<br/>" +
                "Dehogy verik, dehogy verik!<br/>" +
                "Mint a galambot etetik,<br/>" +
                "Válogat a kendermagban,<br/>" +
                "A kiskirály sem él jobban.<br/>" +
                "<br/>" +
                "Ezért aztán, tyúkanyó, hát<br/>" +
                "Jól megbecsűlje kend magát,<br/>" +
                "Iparkodjék, ne legyen ám<br/>" +
                "Tojás szűkében az anyám. –<br/>" +
                "<br/>" +
                "Morzsa kutyánk, hegyezd füled,<br/>" +
                "Hadd beszélek mostan veled,<br/>" +
                "Régi cseléd vagy a háznál,<br/>" +
                "Mindig emberűl szolgáltál,<br/>" +
                "<br/>" +
                "Ezután is jó légy, Morzsa,<br/>" +
                "Kedvet ne kapj a tyúkhusra,<br/>" +
                "Élj a tyúkkal barátságba’...<br/>" +
                "Anyám egyetlen jószága.<br/>",
        youtube_url: "https://www.youtube.com/watch?v=FxOZvSlIT3M"
    },
    {
        id: 3,
        title: "Tiszai Csönd",
        author: "Juhász Gyula",
        content: "Hálót fon az est, a nagy, barna pók,<br/>" +
                "Nem mozdulnak a tiszai hajók.<br/>" +
                "<br/>" +
                "Egyiken távol harmonika szól,<br/>" +
                "Tücsök felel rá csöndben valahol.<br/>" +
                "<br/>" +
                "Az égi rónán ballag már a hold:<br/>" +
                "Ezüstösek a tiszai hajók.<br/>" +
                "<br/>" +
                "Tüzeket raknak az égi tanyák,<br/>" +
                "Hallgatják halkan a harmonikát.<br/>" +
                "<br/>" +
                "Magam a parton egymagam vagyok,<br/>" +
                "Tiszai hajók, néma társatok!<br/>" +
                "<br/>" +
                "Ma nem üzennek hívó távolok,<br/>" +
                "Ma kikötöttünk itthon, álmodók!<br/>",
        youtube_url: "https://www.youtube.com/watch?v=FxOZvSlIT3M"
    },
    {
        id: 4,
        title: "Himnusz",
        author: "Kölcsey Ferenc",
        content: "Isten, áldd meg a magyart,<br/>" +
                "Jó kedvvel, bőséggel,<br/>" +
                "Nyújts feléje védő kart,<br/>" +
                "Ha küzd ellenséggel.<br/>" +
                "Bal sors akit régen tép,<br/>" +
                "Hozz rá víg esztendőt,<br/>" +
                "Megbűnhődte már e nép<br/>" +
                "A múltat s jövendőt!<br/>" +
                "<br/>" +
                "Őseinket felhozád<br/>" +
                "Kárpát szent bércére,<br/>" +
                "Általad nyert szép hazát<br/>" +
                "Bendegúznak vére.<br/>" +
                "S merre zúgnak habjai<br/>" +
                "Tiszának, Dunának,<br/>" +
                "Árpád hős magzatjai<br/>" +
                "Felvirágozának.<br/>" +
                "<br/>" +
                "Értünk Kunság mezein<br/>" +
                "Ért kalászt lengettél,<br/>" +
                "Tokaj szőlővesszein<br/>" +
                "Nektárt csepegtettél.<br/>" +
                "Zászlónk gyakran plántálád<br/>" +
                "Vad török sáncára,<br/>" +
                "S nyögte Mátyás bús hadát<br/>" +
                "Bécsnek büszke vára.<br/>" +
                "<br/>" +
                "Hajh, de bűneink miatt<br/>" +
                "Gyúlt harag kebledben,<br/>" +
                "S elsújtád villamidat<br/>" +
                "Dörgő fellegedben," +
                "Most rabló mongol nyilát<br/>" +
                "Zúgattad felettünk,<br/>" +
                "Majd töröktől rabigát<br/>" +
                "Vállainkra vettünk.<br/>" +
                "<br/>" +
                "Hányszor zengett ajkain<br/>" +
                "Ozmán vad népének<br/>" +
                "Vert hadunk csonthalmain<br/>" +
                "Győzedelmi ének!<br/>" +
                "Hányszor támadt tenfiad<br/>" +
                "Szép hazám, kebledre,<br/>" +
                "S lettél magzatod miatt<br/>" +
                "Magzatod hamvvedre!<br/>" +
                "<br/>" +
                "Bújt az üldözött s felé<br/>" +
                "Kard nyúl barlangjában,<br/>" +
                "Szerte nézett, s nem lelé<br/>" +
                "Honját a hazában,<br/>" +
                "Bércre hág, és völgybe száll<br/>" +
                "Bú s kétség mellette,<br/>" +
                "Vérözön lábainál,<br/>" +
                "S lángtenger felette.<br/>" +
                "<br/>" +
                "Vár állott, most kőhalom;<br/>" +
                "Kedv s öröm röpkedtek,<br/>" +
                "Halálhörgés, siralom<br/>" +
                "Zajlik már helyettek.<br/>" +
                "S ah, szabadság nem virúl<br/>" +
                "A holtnak véréből,<br/>" +
                "Kínzó rabság könnye hull<br/>" +
                "Árvánk hő szeméből!<br/>" +
                "<br/>" +
                "Szánd meg, isten, a magyart<br/>" +
                "Kit vészek hányának,<br/>" +
                "Nyújts feléje védő kart<br/>" +
                "Tengerén kínjának.<br/>" +
                "Bal sors akit régen tép,<br/>" +
                "Hozz rá víg esztendőt,<br/>" +
                "Megbűnhődte már e nép<br/>" +
                "A múltat s jövendőt!<br/>",
        youtube_url: "https://www.youtube.com/watch?v=n9XXalt0k28"
    },
    {
        id: 5,
        title: "Szózat",
        author: "Vörösmarty Mihály",
        content: "Hazádnak rendületlenűl<br/>" +
                "Légy híve, oh magyar<br/>" +
                "Bölcsőd az s majdan sírod is,<br/>" +
                "mely ápol s eltakar.<br/>" +
                "<br/>" +
                "A nagy világon e kivűl<br/>" +
                "Nincsen számodra hely<br/>" +
                "Áldjon vagy verjen sors keze:<br/>" +
                "Itt élned, halnod kell.<br/>" +
                "<br/>" +
                "Ez a föld, melyen annyiszor<br/>" +
                "Apáid vére folyt<br/>" +
                "Ez, melyhez minden szent nevet<br/>" +
                "Egy ezredév csatolt.<br/>" +
                "<br/>" +
                "Itt küzdtenek honért a hős<br/>" +
                "Árpádnak hadai<br/>" +
                "Itt törtek össze rabigát<br/>" +
                "Hunyadnak karjai.<br/>" +
                "<br/>" +
                "Szabadság! Itten hordozák<br/>" +
                "Véres zászlóidat<br/>" +
                "S elhulltanak legjobbjaink<br/>" +
                "A hosszu harc alatt.<br/>" +
                "<br/>" +
                "És annyi balszerencse közt,<br/>" +
                "Oly sok viszály után,<br/>" +
                "Megfogyva bár, de törve nem,<br/>" +
                "Él nemzet e hazán.<br/>" +
                "<br/>" +
                "S népek hazája, nagy világ!" +
                "Hozzád bátran kiált:<br/>" +
                "„Egy ezredévi szenvedés<br/>" +
                "Kér éltet vagy halált!”<br/>" +
                "<br/>" +
                "Az nem lehet, hogy annyi szív<br/>" +
                "Hiába onta vért,<br/>" +
                "S keservben annyi hű kebel<br/>" +
                "Szakadt meg a honért.<br/>" +
                "<br/>" +
                "Az nem lehet, hogy ész, erő<br/>" +
                "És oly szent akarat<br/>" +
                "Hiába sorvadozzanak<br/>" +
                "Egy átoksúly alatt.<br/>" +
                "<br/>" +
                "Még jőni kell, még jőni fog<br/>" +
                "Egy jobb kor, mely után<br/>" +
                "Buzgó imádság epedez<br/>" +
                "Százezrek ajakán.<br/>" +
                "<br/>" +
                "Vagy jőni fog, ha jőni kell,<br/>" +
                "A nagyszerű halál,<br/>" +
                "Hol a temetkezés fölött<br/>" +
                "Egy ország vérben áll.<br/>" +
                "<br/>" +
                "S a sírt, hol nemzet sűlyed el,<br/>" +
                "Népek veszik körűl,<br/>" +
                "S az ember millióinak<br/>" +
                "Szemében gyászköny űl.<br/>" +
                "<br/>" +
                "Légy híve rendületlenűl<br/>" +
                "Hazádnak, oh magyar.<br/>" +
                "Ez éltetőd, s ha elbukál,<br/>" +
                "Hantjával ez takar.<br/>" +
                "<br/>" +
                "A nagy világon e kivűl<br/>" +
                "Nincsen számodra hely.<br/>" +
                "Áldjon vagy verjen sors keze:<br/>" +
                "Itt élned, halnod kell.<br/>" ,
        youtube_url: "https://www.youtube.com/watch?v=-QkU-Xam_p4"
    },
    {
        id: 6,
        title: "A föl-földobott kő",
        author: "Ady Endre",
        content: "Föl-földobott kő, földedre hullva,<br/>" +
                "Kicsi országom, újra meg újra<br/>" +
                "Hazajön a fiad.<br/>" +
                "<br/>" +
                "Messze tornyokat látogat sorba,<br/>" +
                "Szédül, elbusong s lehull a porba,<br/>" +
                "Amelyből vétetett.<br/>" +
                "<br/>" +
                "Mindig elvágyik s nem menekülhet,<br/>" +
                "Magyar vágyakkal, melyek elülnek<br/>" +
                "S fölhorgadnak megint.<br/>" +
                "<br/>" +
                "Tied vagyok én nagy haragomban,<br/>" +
                "Nagy hűtlenségben, szerelmes gondban<br/>" +
                "Szomoruan magyar.<br/>" +
                "<br/>" +
                "Föl-fölhajtott kő, bús akaratlan,<br/>" +
                "Kicsi országom, példás alakban<br/>" +
                "Te orcádra ütök.<br/>" +
                "<br/>" +
                "És, jaj, hiába mindenha szándék,<br/>" +
                "Százszor földobnál, én visszaszállnék,<br/>" +
                "Százszor is, végül is.<br/>" ,
        youtube_url: "https://www.youtube.com/watch?v=kRE1XxwtyD0"
    },
    {
        id: 7,
        title: "A tündér",
        author: "Weöres Sándor",
        content: "Bóbita, Bóbita táncol,<br/>" +
                "Körben az angyalok ülnek,<br/>" +
                "Béka hadak fuvoláznak,<br/>" +
                "Sáska hadak hegedülnek.<br/>" +
                "<br/>" +
                "Bóbita, Bóbita játszik,<br/>" +
                "Szárnyat igéz a malacra,<br/>" +
                "Ráül, ígér neki csókot,<br/>" +
                "Röpteti és kikacagja.<br/>" +
                "<br/>" +
                "Bóbita, Bóbita épít,<br/>" +
                "Hajnali ködfal a vára,<br/>" +
                "Termeiben sok a vendég,<br/>" +
                "Törpe király fia, lánya.<br/>" +
                "<br/>" +
                "Bóbita, Bóbita álmos,<br/>" +
                "Elpihen őszi levélen,<br/>" +
                "Két csiga őrzi az álmát,<br/>" +
                "Szunnyad az ág sűrűjében." ,
        youtube_url: "https://www.youtube.com/watch?v=2uD97faPMNw"
    }
];

var IDBOpenDBRequest_connection = window.indexedDB.open (dbName, dbVersion);

IDBOpenDBRequest_connection.onupgradeneeded = function (evt) {
		var IDBDatabase_db = evt.currentTarget.result;

		var IDBObjectStore_poems = IDBDatabase_db.createObjectStore (dbStoreName, { keyPath: "id", autoIncrement: true });
		var IDBIndex_poemIndex1 = IDBObjectStore_poems.createIndex ("id", "id", { unique: true });
		var IDBIndex_poemIndex2 = IDBObjectStore_poems.createIndex ("author_title", ["author", "title"], { unique: true });
		
};

IDBOpenDBRequest_connection.onsuccess = function () {
	var IDBDatabase_db = this.result;

	var IDBTransaction_trans = IDBDatabase_db.transaction (dbStoreName, "readwrite");
	IDBTransaction_trans.oncomplete = function () {
		IDBDatabase_db.close ();
		window.location.href = "poems.html";
	};


	var IDBObjectStore_poemsTrans = IDBTransaction_trans.objectStore (dbStoreName);
	
	var IDBRequest_outReq = IDBObjectStore_poemsTrans.openCursor ();
	IDBRequest_outReq.onsuccess = function (evt) {
		var IDBCusorWithValue_cursor = evt.target.result;
		if (IDBCusorWithValue_cursor) {
			counter++;
			IDBCusorWithValue_cursor.continue ();
		}

		else {
			if (counter == 0) {
				console.log ("There is no records in the database");
                                for(var i=0;i<poemData.length;i++){
                                    console.log("in"+ i);
                                    var request=IDBObjectStore_poemsTrans.add(poemData[i]);
                                    request.onsuccess = function(){
                                        console.log("out"+ i);
                                    };
                                    request.onerror = function(){
                                        console.log("error"+ i);
                                    };
                                    
                                }

			}

		}
	};

	IDBRequest_outReq.onerror = function () {
		console.log ("Error occured with opening the cursor!");
	};

};

IDBOpenDBRequest_connection.onerror = function () {
	console.log ("Error occured with opening the database!");

};
