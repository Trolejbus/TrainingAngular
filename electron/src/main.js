const electron = require('electron');
const countdown = require('./countdown');
const path = require('path');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipc = electron.ipcMain;
const Menu = electron.Menu;
const Tray = electron.Tray;

let windows = [];

app.on('ready', _ => {
    menuTest();
    trayTest();
    countdownTest();

    function trayTest() {
        const tray = new Tray(path.join('src', 'tray.ico'));
        let menu = Menu.buildFromTemplate([
            {
                label: 'Menu1',
                click: _ = console.log('1'),
            },
            {
                label: 'Menu2',
                click: _ => console.log('2'),
            }
        ]);
        tray.setContextMenu(menu);
        tray.setToolTip('Test tooltip');
    }

    function countdownTest() {
        [1, 2, 3].forEach(_ => {
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
        });
    }

    function menuTest() {
        const name = electron.app.getName();
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
    }
});

ipc.on('countdown-start', _ => {
    countdown(count => {
        windows.forEach(w => {
            w.webContents.send('countdown', count);
        });
    });
});
