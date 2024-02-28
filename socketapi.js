const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on("sony",msg =>{
        console.log(msg)
        io.emit("max","hello from server on max")
    })
});
// end of socket.io logic

module.exports = socketapi;