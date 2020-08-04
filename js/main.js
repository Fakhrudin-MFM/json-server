var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://fakhrudin-mfm.github.io/json-server/databases/test.json');
ourRequest.onload = function(){
    var ourData = ourRequest.responseText;
    console.log(ourData[0]);
};
ourRequest.send();