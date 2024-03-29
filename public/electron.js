const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const {
  default: installExtension,
  REDUX_DEVTOOLS,
} = require("electron-devtools-installer");

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    titleBarStyle: "hidden",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.setMenu(null);

  installExtension(REDUX_DEVTOOLS).then((name) => {
    console.log(`Added Extension: ${name}`);
  });

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// exports.getFileFromUser = () => {
//   const files = dialog.showOpenDialog({
//     properties: ["openFile"],
//     buttonLabel: "Unveil",
//     title: "Open Fire Sale Document",
//     filters: [
//       {
//         name: "Markdown Files",
//         extensions: ["md", "mdown", "markdown"],
//       },
//     ],
//   });
//
//   if (!files) return;
//
//   const file = files[0];
//   const content = fs.readFileSync(file).toString();
//
//   console.log(content);
// };
