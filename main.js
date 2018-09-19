const { app, BrowserWindow } = require('electron')

var mapServer = require('express')();
var http = require('http').Server(mapServer);
var io = require('socket.io')(http);

let win;

// no develop parameter, assumes build
if (process.env.NODE_ENV == null) {
    process.env.NODE_ENV = "BUILD"
}

//start our map server
//gets our local ip
var ip = require("ip");
localIp = ip.address();

//create connection sockets
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('hostConnection', function(){
        io.emit('connectionInfo', localIp);
    }.bind(this));

    // broadcast every map update to everyone
    socket.on('hostMapUpdate', function (msg) {
        console.log("Received map update!");

        // send game master map to everyone
        io.emit('mapUpdate', msg);
    });

    // process player movement
    socket.on('playerMove', function (msg) {
        console.log("Processing player move");

        // send game master map to everyone
        io.emit('playerMove', msg);
    });

    socket.on('playerSelection', function (msg) {
        console.log("Processing player tile selection");

        // send game master map to everyone
        io.emit('playerSelection', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

function createWindow() {
    // creates the splash scrren window
    splash = new BrowserWindow({ 
        titleBarStyle: "hidden",
        width: 500,
        height: 300,
        frame: false
    });
    
    splash.setMenu(null);

    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff',
        show: false,
        icon: `file://${__dirname}/dist/assets/logo.png`
    })

    //hides the menu bar
    win.setMenu(null);

    if (process.env.NODE_ENV == "BUILD") {
        win.loadURL(`file://${__dirname}/dist/index.html`);
        splash.loadURL(`file://${__dirname}/dist/assets/splash/splash.html`);

    } else {
        win.loadURL("http://localhost:4200");
        splash.loadURL(`file://${__dirname}/src/assets/splash/splash.html`);
        //// uncomment below to open the DevTools.
        win.webContents.openDevTools()
    }

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    })

    splash.on('closed', function () {
        splash = null;
    })

    win.once('ready-to-show', () => {
        //checks if the user closed the splash scrren
        if(splash != null) {
            splash.close();
            win.show()

        } else {
            console.log('user closed splash scrren befor load was complete');
            win.close();
        }
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})
