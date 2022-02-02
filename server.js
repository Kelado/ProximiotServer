const express     = require("express");
const cors        = require('cors');

/////////////////////
//  INIT SERVER  ////
/////////////////////
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = 3000;
//////////////////
server.use(cors());
////////////////////////
//  START LISTENING  ///
////////////////////////
server.listen(PORT, () => { console.log(`Listening at port:${PORT}`); })

server.get('/ping', async function(req, res) {
    res.send('pong');
});