drop database if exists db_teste;
create database if not exists db_teste;

USE db_teste;

CREATE TABLE tb_tipoMusical (
    cd_tipoMusical INT NOT NULL AUTO_INCREMENT,
    ds_descricaoTpMusical VARCHAR(30),
    CONSTRAINT pk_tipoMusical PRIMARY KEY (cd_tipoMusical)
);

CREATE TABLE tb_musico (
    cd_musico INT NOT NULL AUTO_INCREMENT,
    cd_tipoMusical INT NOT NULL,
    cd_cpf CHAR(14),
    CONSTRAINT pk_musico PRIMARY KEY (cd_musico),
    CONSTRAINT fk_tipoMusical FOREIGN KEY (cd_tipoMusical) REFERENCES tb_tipoMusical(cd_tipoMusical)
);

CREATE TABLE tb_estabelecimento (
    cd_estabelecimento INT NOT NULL AUTO_INCREMENT,
    cd_tipoMusical INT NOT NULL,
    cd_cnpj CHAR(14),
    CONSTRAINT pk_estabelecimento PRIMARY KEY (cd_estabelecimento),
    CONSTRAINT fk_tipoMusical_estabelecimento FOREIGN KEY (cd_tipoMusical) REFERENCES tb_tipoMusical(cd_tipoMusical)
);

CREATE TABLE tb_endereco (
    cd_endereco INT NOT NULL AUTO_INCREMENT,
    nm_estado VARCHAR(20),
    nm_cidade VARCHAR(30),
    nm_rua VARCHAR(30),
    nr_rua INT,
    CONSTRAINT pk_endereco PRIMARY KEY (cd_endereco)
);

CREATE TABLE tb_contato (
    cd_contato INT NOT NULL AUTO_INCREMENT,
    nr_Celular VARCHAR(11),
    nm_email VARCHAR(60),
    CONSTRAINT pk_contato PRIMARY KEY (cd_contato)
);

CREATE TABLE tb_usuario (
    cd_usuario INT NOT NULL AUTO_INCREMENT,
    cd_endereco INT NOT NULL,
    cd_contato INT NOT NULL,
    cd_musico INT NULL,
    cd_estabelecimento INT NULL,
    cd_senha VARCHAR(16),
    CONSTRAINT pk_usuario PRIMARY KEY (cd_usuario),
    CONSTRAINT fk_endereco FOREIGN KEY (cd_endereco) REFERENCES tb_endereco(cd_endereco),
    CONSTRAINT fk_contato FOREIGN KEY (cd_contato) REFERENCES tb_contato(cd_contato),
    CONSTRAINT fk_musico FOREIGN KEY (cd_musico) REFERENCES tb_musico(cd_musico),
    CONSTRAINT fk_estabelecimento FOREIGN KEY (cd_estabelecimento) REFERENCES tb_estabelecimento(cd_estabelecimento)
);