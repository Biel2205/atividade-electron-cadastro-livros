ATIVIDADE 1 - Cadastro de Livros

Objetivo:
- Implementar o preload.js expondo as funções salvarLivro e listarLivros
- Implementar o main.js com a conexão ao banco de dados e os ipcMain.handle correspondentes

Banco sugerido: livros_db

Tabela SQL:
CREATE DATABASE livros_db;
USE livros_db;

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  autor VARCHAR(100)
);
