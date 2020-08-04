var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://fakhrudin-mfm.github.io/json-server/databases/test.json');
ourRequest.onload = function(){
    // var ourData = ourRequest.responseText; // data masih dalam bentuk text, di console ditampilkan "[""
    var ourData = JSON.parse(ourRequest.responseText); // data telah dirubah dalam bentuk json, di console ditampilkan struktur json{...}"
    console.log(ourData[0]); 

};
ourRequest.send();