const { app, BrowserWindow } = require( 'electron' );

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1620, 
        height: 980
    });

    win.loadFile( 'main.html' );
}

app.whenReady().then( ()=> {
    createWindow();
} )