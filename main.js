var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var mainWindow = null;
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    'auto-hide-menu-bar': true,
    //resizable: false,
    //frame: false,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  /**
   *  MY APP CODE GOES HERE
  **/

  

});
