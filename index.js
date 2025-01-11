const os = require(`os`); //Calling the os module to work with the operating system
console.log(os.platform()); //Displaying the platform
//-----------------------------------

const count = require(`./simp_math`); //Calling the simp_math.js file that i created
console.log(count.add(1, 2), count.sub(3, 1), count.mul(2, 3), count.div(6, 2)); //Displaying the results of the functions that are in the simp_math.js file
//-----------------------------------

const fs = require(`fs`); //Calling the fs module to work with files
fs.readFile(`hello.txt`, `utf-8`,(err, data) =>{
    if(err){
        console.log(err);
    } else if(data.length <199){
        fs.writeFile(`hello.txt`, data + `\nHello from Node.js!`, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log(`data has been written to the file`);
            }
        });
    } else {
        console.log(`The file is too long`);
    }
}); //Reading the content of the hello.txt file and adding a new line with the text "Hello from Node.js!" and writing it back to the file
//-----------------------------------

fs.mkdir(`place`, (err) => {
    if(err){
        console.log(err);
    } else {
        fs.writeFile(`place/where.txt`, `I wanna be`, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log(`folder and file have been created`);
            }
        });
    }
}); //Creating a folder called place and a file called where.txt inside it with the text "I wanna be"
//-----------------------------------

fs.unlink(`place/where.txt`, (err) => {
    if(err){
        console.log(err);
        fs.rmdir(`place`, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log(`A place where u wanna be dose not exist anymore`);
            }
        });
    } else {
        fs.rmdir(`place`, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log(`A place where u wanna be dose not exist anymore`);
            }
        });
    }
}); //Deleting the file where.txt and the folder place
//-----------------------------------

const http = require(`http`); //Calling the http module to work with servers

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': `text/html; charset=utf-8`}); //Setting the content type to text/html
    
    if (req.url === `/`){
        fs.createReadStream(`./templates/hello.html`).pipe(res);
    }
    else if (req.url === `/about`){
        fs.createReadStream(`./templates/about.html`).pipe(res);
    }
    else {
        fs.createReadStream(`./templates/404.html`).pipe(res);
    }
}); //Creating a server that displays the content of the hello.html, about.html and 404.html files

const PORT = process.env.PORT || 3000; //Setting the port to 3000
const HOST = `localhost`; //Setting the host to localhost

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`); //Displaying the server is running
}); //Starting a server that displays something on http://localhost:3000

const array ={ a: 1, b: 2, c: 3}; //Creating an object
for (const value in array) {
    console.log(value + ": " + array[value])
} //Displaying the object








