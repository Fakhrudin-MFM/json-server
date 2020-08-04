var ourRequest = new XmlHttpRequest();
ourRequest.open('GET','https://fakhrudin-mfm.github.io/json-server/databases/test.json');
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
};