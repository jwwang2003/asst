import { app, BrowserWindow } from 'electron';
const isDev = require('electron-is-dev');

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  if(isDev) win.loadURL('http://localhost:9000');
  else win.loadFile('public/index.html');

  
}

app.on('ready', createWindow);