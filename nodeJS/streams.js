var http = require('http')
var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname+'/data.txt', {highWaterMark:250})
// // console.log(__dirname+'/data.txt')

// myReadStream.on('data', function(chunk){
//     console.log('New Chunk Recieved');
//     console.log(chunk)
//     console.log(chunk.length)
// })
///////////////////////////////////////////////////////
// var myReadStream = fs.createReadStream(__dirname+'/data.txt')
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')


// // myReadStream.on('data', function(chunk){
// //     console.log('New Chunk Recieved');
// //     myWriteStream.write(chunk);
// // })

// myReadStream.pipe(myWriteStream);

// // is it possible to master both front end and backend?
/////////////////////////////////////////////////////////////////

var server = http.createServer(function(req, res){
    console.log('equest was made form:'+req.url);
    res.writeHead(200, {'Content-Type':"text/plain"});
    var myReadStream = fs.createReadStream(__dirname+'/data.txt')
    myReadStream.pipe(res);
})
server.listen(3000)
console.log("Running @3000")