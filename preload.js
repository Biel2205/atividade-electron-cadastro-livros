 // console.log("ola mundooo!!!")
 const{contextBridge, ipcRenderer} = require ('electron');

 function salvarLivros(titulo, autor){
    console.log("Funcao listar livros")
    console.log("titulo", titulo)
    console.log("autor", autor)

    ipcRenderer.invoke('salvar-livros', titulo, autor)
    

 }

 function listarLivros(){
    return ipcRenderer.invoke('listar-livros')
 }
 contextBridge.exposeInMainWorld('api', {
    salvarLivros,
    listarLivros,
 })