const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    mainWindow.loadFile("index.html").then(function(){
        mainWindow.webContents.openDevTools();
        mainWindow.maximize();
        mainWindow.removeMenu();
    })
}

app.whenReady().then(function (){
    createWindow();
})