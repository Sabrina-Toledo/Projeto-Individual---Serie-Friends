CREATE DATABASE sitefriends;
USE sitefriends;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(55) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE historicoQuiz (
idhistorico INT PRIMARY KEY AUTO_INCREMENT,
fk_idusuario INT,
personagemFinal VARCHAR(45),
dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT const_fkidusuario FOREIGN KEY (fk_idusuario) REFERENCES usuario(id)
);

CREATE TABLE respostaQuiz (
idresposta INT PRIMARY KEY AUTO_INCREMENT,
fk_historico INT,
alternativa CHAR(1),
CONSTRAINT const_fkhistorico FOREIGN KEY (fk_historico) REFERENCES historicoQuiz(idhistorico)
);