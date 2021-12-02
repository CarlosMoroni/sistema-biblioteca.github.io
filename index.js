const {app, BrowserWindow} = require('electron')

let janelaPrincipal

app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }     
    })

    janelaPrincipal.loadURL(`file://${__dirname}/app/index.html`)
})

app.on('window-all-closed', () => {
    app.quit();
})


