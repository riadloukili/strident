var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var NativeImage = require('native-image');
var mainWindow = null;
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function() {
var icon = NativeImage.createFromPath('./img/icon.png');
  mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    title: 'Strident',
    icon: icon,
    'min-width': 450,
    'min-height': 560,
    'auto-hide-menu-bar': true,
    //resizable: false,
    //frame: false,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  /**
   *  MY APP CODE GOES HERE
  **/

  mainWindow.on('page-title-updated', function (e) {
    e.preventDefault();
  })

});
