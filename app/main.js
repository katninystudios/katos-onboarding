const { app, BrowserWindow } = require("electron");
const path = require("node:path");

// create a new window
function createWindow() {
    const win = new BrowserWindow({
        // this doesnt matter. its a fullscreen app anyways!
        width: 800,
        height: 600,
        fullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    // if the user tries to leave the fullscreen mode,
    // dont let them
    win.on("leave-full-screen", () => {
        win.setFullScreen(true);
    });

    // prevent the app from being quit
    win.on("close", (e) => {
        e.preventDefault();
    });

    win.loadFile("ui/index.html");
}

// when the app is ready, create a window
app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});

// prevent the app from being quit
app.on("before-quit", (e) => {
    e.preventDefault();
});