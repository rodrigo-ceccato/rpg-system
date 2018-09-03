const { app, BrowserWindow } = require('electron')

let win;

// no develop parameter, assumes build
if (process.env.NODE_ENV == null){
    process.env.NODE_ENV = "BUILD"
}

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    })
    
    //hides the menu bar
    win.setMenu(null);

    if (process.env.NODE_ENV == "BUILD") {
        win.loadURL(`file://${__dirname}/dist/index.html`)

    } else {
        win.loadURL("http://localhost:4200")
        //// uncomment below to open the DevTools.
        win.webContents.openDevTools()
    }

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
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
