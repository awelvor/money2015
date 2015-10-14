console.log("operations.js");

function operations(){
	indexedDB.open("dblx").onsuccess = function(e){
		var tx = e.target.result.transaction("stlx", "readonly");
		var st = tx.objectStore("stlx");
		console.log("IDBRequest.count: ", st.count());
		html = "<table>";
		st.openCursor().onsuccess = function(e1){
			var cr = e1.target.result;
  			if (cr){
				//console.log("IDBCursor.source: ",cr.source);
				html += cr2html(cr);
				cr.continue();
			}
			else html += "</table>";
		};
		tx.oncomplete = function(){
			document.write(html);
			//document.getElementById("content2").innerHTML = html;
			//document.getElementById("content3").innerHTML = "";
			//document.getElementById("content4").innerHTML = "";
		};
	};
}

function cr2html(cr){
	var ht = "<tr>";
	ht += "<td class='l' width= 2% >"+cr.primaryKey+"</td>";
	ht += "<td class='l' width= 8% >"+cr.value.b+"</td>";
	ht += "<td class='l' width=10% >"+cr.value.c+"</td>";
	ht += "<td class='l' width=20% >"+cr.value.d+"</td>";
	ht += "<td class='r' width=10% >"+cr.value.e+"</td>";
	ht += "<td class='r' width=10% >"+cr.value.f+"</td>";
	ht += "<td class='r' width=10% >"+cr.value.g+"</td>";
	ht += "<td class='r' width=10% >"+cr.value.h+"</td>";
	ht += "<td class='r' width=10% >"+cr.value.i+"</td>";
	ht += "</tr>";
	return ht;
}


document.write("mon script ed 2");
document.write("<div class='ui-grid-c'>");
document.write("<div class='ui-block-a'><a href='http://www.google.fr' target=_blank>google</a></div>");
document.write("<div class='ui-block-b'>philippe.regent</div>");
document.write("<div class='ui-block-c'>mowgli1234</div>");
document.write(" <div class='ui-block-d'>2015-10-03</div>");
document.write("</div>");
operations();

console.log("end of file operations.js");
