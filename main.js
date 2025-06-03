const { app, BrowserWindow, ipcMain } = require("electron");
const mysql = require("mysql2/promise")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + "/preload.js",
    }
  });

  win.loadFile("pages/index.html");
};

ipcMain.handle("listar-livros", async function() {
  var conexao = await mysql.createConnection({
    host: "Localhost",
    user: "root",
    password: "root",
    database: "livros_db"
  })

  var query = await conexao.execute("SELECT * FROM livros ")

  console.log("Query", query)

  return query[0]
})

ipcMain.handle("salvar-livros", async function (evento, titulo, autor) {
  var conexao = await mysql.createConnection({
    host: "Localhost",
    user: "root",
    password: "root",
    database: "livros_db"
  })
  conexao.execute("INSERT INTO livros (titulo, autor) VALUES (?,?)", [titulo, autor])
})

app.whenReady().then(() => {
  createWindow();
});
