console.log("homepage.js");
	
	rq = indexedDB.open("dblx");
	console.log("IDBFactory indexedDB: ", rq.indexedDB);
	rq.onsuccess = function(){console.log("open:success");};
	rq.onupgradeneeded = function(e){
		console.log("open:upgradeneeded");
		console.log("IDBFactory indexedDB: ", rq.indexedDB);
		var db = e.target.result;
		var st = db.createObjectStore("stlx", {keyPath: 'a',autoIncrement: true});
  		st.createIndex("b", "b", { unique: false });
  		st.createIndex("c", "c", { unique: false });
		st.createIndex("d", "d", { unique: false });
  		st.createIndex("e", "e", { unique: false });
  		st.createIndex("f", "f", { unique: false });
  		st.createIndex("g", "g", { unique: false });
		st.createIndex("h", "h", { unique: false });
		st.createIndex("i", "i", { unique: false });
		mytab.forEach(function(el){
			st.put({b:el[0],c:el[1],d:el[2],e:el[3],f:el[4],g:el[5],h:el[6], i:el[7]});
			//nn1++;
		});
		stx = db.createObjectStore("idlx", {keyPath: 'a',autoIncrement: true});
		stx.createIndex("b", "b", { unique: true });
		mycbid.forEach(function(el){
			stx.put({b:el[0],c:el[1]});
			//nn2++;
		});
		stb = db.createObjectStore("bglx", {keyPath: 'a',autoIncrement: true});
		stb.createIndex("b", "b", { unique: true });
		mybdg.forEach(function(el){stb.put({b:el[0]})});
		//tst2();
		console.log("iDBDatabase.objectStoreNames: ", db.objectStoreNames);
		console.log("end:upgradeneeded");
	};

console.log("end of file homepage.js");
