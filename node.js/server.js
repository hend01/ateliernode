
var http =require('http');
var url =require('url');
var querystring=require('querystring');

var server=http.createServer(function(req,res){
     var page =url.parse(req.url).pathname;
     console.log(page);

var params =querystring.parse(url.parse(req.url).query);
res.writeHead(200,{"Content-Type":"text/plain"});
if ('id' in params && 'login' in params){
    res.write('votre id est'+ params['id'] 
    + 'et votre login est' +params['login']);}
    // else{
    //     res.write('veuillez saisir votre id et login !');
    // }
 if (page=='/'){
        res.write('page d\'acceuil')
    }
    else if (page=='/Contact'){
        res.write('page contact')
    
    }
    else if (page=='/Affichage/1/user'){
        res.write('afficher user qui a id 1!')
    
    }
    else {
        res.write(' 404 not found !')
    }
res.end();
});




// res.end();});


// var server=http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write('<!Doctype html>' +'<html>' + 
// '<head>'+
// '<meta charset-"utf8" />'+
// '<title> Ma page Node.js !</title>'+
// '</head>'+
// '<body>'+
//  '   <p>voici un paragraphe <strong> HTML </strong>!</p>'+
// '</body>'+
// '<html>');
    
//     res.end();
// });

server.listen(8080);