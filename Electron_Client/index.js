// electron.js
const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: "./icon.png",
    title: "Todo",
    width: 550,
    height: 780,

    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startURL = `file://${path.join(__dirname, "./build/index.html")}`;

  mainWindow.setMenu(null);
  mainWindow.setResizable(false);
  mainWindow.loadURL(startURL);

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  globalShortcut.register("CommandOrControl+w", () => {
    app.quit();
  });
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
