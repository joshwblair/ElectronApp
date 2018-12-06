//this script should create windows and handle all the system events the application might encounter.
var { app, BrowserWindow } = require('electron');

//global reference so the window isn't garbage collected
//this could be an array of windows if multiple are needed
let win;

//create new Browser Window on app ready
function createWindow(){
    //create window and open index web page
    win = new BrowserWindow({width: 800, height: 600});
    win.loadFile('index.html');

    win.webContents.openDevTools();//open dev tools

    win.on('closed', () => {
        //if win is array then delete all elements to clear all windows
        win = null;
    });
}

//initialization is finished so create browser windows
app.on('ready', createWindow);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if(win === null)
        createWindow;
});