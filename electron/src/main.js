const electron = require('electron');
const countdown = require('./countdown');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipc = electron.ipcMain;
const Menu = electron.Menu;

let windows = [];

app.on('ready', _ => {
    new BrowserWindow();
    const name =  electron.app.getName();
    const template = [
        {
            label: name,
            submenu: [
                {
                    label: `About ${name}`,
                    click: _ => {
                        console.log('active');
                    },
                    role: 'about',
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Quit',
                    click: _ => app.quit(),
                    accelerator: 'Cmd+Q',
                }
            ],
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    /*[1,2,3].forEach(_ => {
        let win = new BrowserWindow({
            height: 400,
            width: 400,
        });
    
        win.loadURL(`file://${__dirname}/countdown.html`);
    
        win.on('closed', _ => {
            windows = windows.filter(w => w !== win);
            win = null;
            console.log('closed');
        });
    
        windows.push(win);
    });*/
});

ipc.on('countdown-start', _ => {
    countdown(count => {
        windows.forEach(w => {
            w.webContents.send('countdown', count);
        });
    });
});
