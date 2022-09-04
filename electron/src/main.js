const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

const app = electron.app;

let mainWindow;

app.on('ready', _ => {
    console.log('ready');
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400,
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
        console.log('closed');
    });
});
