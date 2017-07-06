const {app, BrowserWindow} = require('electron'),
 url = require('url')
let win = null,
    express = require('express'),
    sv = express()

sv.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})
sv.use(express.static('dist'))
app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point to default entry point of vue.js
  win.loadURL('http://localhost:2030');

  // Remove window once app is closed
  win.on('closed', function () {
  win = null;
  });

});
//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
  createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});

sv.listen(2030)