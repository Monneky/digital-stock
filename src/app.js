const { BrowserWindow, app } = require('electron');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    mainWindow.loadFile('src/views/index.html');
}

app.whenReady().then( () => {
    createWindow();
} );

app.on('window-all-closed', () => {
    if( process.platform !== 'darwin' ) {
        app.quit();
    }
});

require('electron-reload')(__dirname);