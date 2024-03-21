create database db_ReUni;

use db_ReUni;

create table tb_nacionalidade(
	id_nacionalidade int auto_increment not null primary key,
    nm_nacionalidade varchar(100)
);

create table tb_DadosRepublicas(
	id_dadoRepublica int auto_increment not null primary key,
    ds_nomeAnfitriao varchar(100) not null,
    ds_emailAnfitriao varchar(200) not null,
    nmr_telefoneAnfitriao varchar(20) not null,
    an_anoCricao char(4)
);

create table tb_localizacaoRepublica(
	id_localizacao int auto_increment not null primary key,
    ds_cep varchar(9),
    ds_cidade varchar(100),
    ds_rua varchar(200),
    ds_bairro varchar(100)
);

create table tb_tipoRepublica(
	id_tipoRepublica int auto_increment not null primary key,
    ds_tipoRepublica varchar(200) not null,
    ds_tipoImovel varchar(200) not null,
    ds_tipoQuarto varchar(200) not null,
    qtd_quartoRepublica int(3),
    qtd_banheiroRepublica int(3),
    qtd_moradoresRepublicas int(3)
);

create table tb_novasRegras(
	id_novaRegra int auto_increment not null primary key,
    ds_novaRegra varchar(250)
);

create table tb_regrasRepublica(
	id_regraRepublica int auto_increment not null primary key,
	ds_permissaoFumar boolean,
    ds_permissaoPets  boolean,
    ds_permissaoBebidasAlc  boolean,
	ds_permissaoVisitas  boolean,
    id_novaRegra int,
    
    constraint foreign key (id_novaRegra)
    references tb_novasRegras(id_novaRegra)
);

create table tb_comodidades(
	id_comodidade int auto_increment not null primary key,
    ds_wifi boolean,
    ds_tv boolean,
    ds_cozinha boolean,
    ds_garagem boolean,
    ds_arcondicionado boolean
);

create table tb_aluguel(
	id_valorAlguel int auto_increment not null primary key,
    ds_estadiaMin boolean,
    vl_valorMensal decimal(10,2) not null,
    ds_contasInclusas boolean
);

create table tb_republica(
	id_republica int auto_increment not null primary key,
    id_dadoRepublica int,
    id_localizacao int,
    id_tipoRepublica int,
    id_regraRepublica int,
    id_valorAlguel int,
    id_comodidadeRepublica int,
    ds_nomeRepublica varchar(50) not null,
    ds_descricaoRepublica varchar(500) not null,
    
    constraint foreign key (id_dadoRepublica)
    references tb_DadosRepublicas(id_dadoRepublica),
    
    constraint foreign key (id_localizacao)
    references tb_localizacaoRepublica(id_localizacao),
    
    constraint foreign key (id_tipoRepublica)
    references tb_tipoRepublica(id_tipoRepublica),
    
    constraint foreign key (id_regraRepublica)
    references tb_regrasRepublica(id_regraRepublica),
    
    constraint foreign key (id_valorAlguel)
    references tb_aluguel(id_valorAlguel),
    
    constraint foreign key (id_comodidadeRepublica)
    references tb_comodidades(id_comodidade)
);

create table tb_usuario(
	id_usu int auto_increment not null primary key,
    nm_usu varchar(100) not null,
    sx_sexoUsu char(1) not null,
    ds_cpfUsu varchar(14) not null,
    ds_rgUso varchar(12) not null,
    ds_emailUsu varchar(150) not null,
    ds_senhaUsu varchar(50) not null,
    ds_descricaoPerfil varchar(500) not null,
    id_Nacionalidade int,
    
    constraint foreign key (id_Nacionalidade)
    references tb_nacionalidade(id_Nacionalidade)
);

create table tb_anfitriao(
	id_anfitriao int auto_increment not null primary key,
    id_usu int,
    id_republica int,
    
    constraint foreign key (id_usu)
    references tb_usuario (id_usu),
    
    constraint foreign key (id_republica)
    references tb_republica (id_republica)
);

# INSERTS

INSERT INTO tb_nacionalidade (nm_nacionalidade) VALUES
 ('Brasileira'), 
 ('Americana'),
 ('Britânica'),
('Estoica'),
('Argentina'),
('Chilena'),
('Paraguaia'),
('Uruguaia'),
('Peruana'),
('Boliviana'),
('Colombiana'),
('Equatoriana'),
('Venezuelana');


-- Inserir na tb_DadosRepublicas
INSERT INTO tb_DadosRepublicas (ds_nomeAnfitriao, ds_emailAnfitriao, nmr_telefoneAnfitriao, an_anoCricao)
VALUES ('João Silva', 'joao@example.com', '123-456-7890', '2019'),
		('Maria Oliveira', 'maria@example.com', '987-654-3210', '2021'),
		('Ana Silva', 'ana@example.com', '(11) 1234-5678', '2020'),
		('Pedro Souza', 'pedro@example.com', '(11) 9876-5432', '2018'),
		('Carla Oliveira', 'carla@example.com', '(11) 1111-2222', '2019'),
		('João Santos', 'joao@example.com', '(11) 3333-4444', '2021'),
		('Mariana Costa', 'mariana@example.com', '(11) 5555-6666', '2017'),
		('Lucas Pereira', 'lucas@example.com', '(11) 7777-8888', '2022'),
		('Fernanda Lima', 'fernanda@example.com', '(11) 9999-0000', '2016'),
		('Gustavo Alves', 'gustavo@example.com', '(11) 1234-5678', '2015'),
		('Juliana Santos', 'juliana@example.com', '(11) 9876-5432', '2014'),
		('Rafael Oliveira', 'rafael@example.com', '(11) 1111-2222', '2013');

-- Inserir na tb_localizacaoRepublica

INSERT INTO tb_localizacaoRepublica (ds_cep, ds_cidade, ds_rua, ds_bairro)
VALUES ('54321-876', 'Cidade A', 'Rua X', 'Centro'),
		('12345-678', 'Cidade B', 'Rua Y', 'Subúrbio'),
		('01234-567', 'São Paulo', 'Rua A', 'Centro'),
		('12345-678', 'Rio de Janeiro', 'Rua B', 'Copacabana'),
		('23456-789', 'Belo Horizonte', 'Rua C', 'Savassi'),
		('34567-890', 'Curitiba', 'Rua D', 'Batel'),
		('45678-901', 'Porto Alegre', 'Rua E', 'Moinhos de Vento'),
		('56789-012', 'Salvador', 'Rua F', 'Barra'),
		('67890-123', 'Brasília', 'Rua G', 'Asa Sul'),
		('78901-234', 'Fortaleza', 'Rua H', 'Meireles'),
		('89012-345', 'Recife', 'Rua I', 'Boa Viagem'),
		('90123-456', 'Manaus', 'Rua J', 'Adrianópolis');


-- Inserir na tb_tipoRepublica
INSERT INTO tb_tipoRepublica (ds_tipoRepublica, ds_tipoImovel, ds_tipoQuarto, qtd_quartoRepublica, qtd_banheiroRepublica, qtd_moradoresRepublicas)
VALUES ('Compartilhada', 'Apartamento', 'Solteiro', 4, 2, 5),
		('Privativa', 'Casa', 'Duplo', 3, 1, 4),
		('República Mista', 'Casa', 'Individual', 5, 3, 8),
		('República Masculina', 'Apartamento', 'Compartilhado', 4, 2, 6),
		('República Feminina', 'Casa', 'Individual', 6, 4, 10),
		('República LGBT+', 'Apartamento', 'Compartilhado', 3, 2, 5),
		('República Estudantil', 'Casa', 'Compartilhado', 8, 5, 12),
		('República Jovem', 'Apartamento', 'Individual', 2, 1, 4),
		('República Universitária', 'Casa', 'Compartilhado', 7, 3, 10),
		('República Sênior', 'Apartamento', 'Individual', 3, 2, 5),
		('República Trabalhador', 'Casa', 'Compartilhado', 6, 4, 8),
		('República Criativa', 'Apartamento', 'Individual', 4, 2, 6);


-- Inserir na tb_novasRegras
INSERT INTO tb_novasRegras (ds_novaRegra) VALUES
('Silêncio após as 22h'),
('Proibido fumar dentro'), 
('Aceita animais de estimação'),
('Proibido fumar nas áreas comuns'),
('Permitido trazer animais de estimação'),
('Proibido o consumo de bebidas alcoólicas'),
('Restrito a visitas somente nos finais de semana'),
('Proibido festas após às 22h'),
('Permitido o uso da piscina somente com autorização prévia'),
('Proibido a utilização de drogas ilícitas'),
('Permitido o uso do estacionamento para bicicletas'),
('Restrito o número de hóspedes nas festas'),
('Proibido o acesso de estranhos sem autorização');


-- Inserir na tb_regrasRepublica
INSERT INTO tb_regrasRepublica (ds_permissaoFumar, ds_permissaoPets, ds_permissaoBebidasAlc, ds_permissaoVisitas, id_novaRegra)
VALUES (false, true, true, true, 1),
		(true, false, true, false, 2),
		(0, 0, 0, 1, 1),
		(1, 1, 0, 1, 2),
		(0, 0, 1, 1, 3),
		(1, 0, 1, 1, 4),
		(0, 0, 0, 0, 5),
		(1, 1, 1, 0, 6),
		(0, 0, 1, 1, 7),
		(1, 0, 0, 1, 8),
		(0, 1, 1, 1, 9),
		(0, 0, 0, 1, 10);


-- Inserir na tb_comodidades
INSERT INTO tb_comodidades (ds_wifi, ds_tv, ds_cozinha, ds_garagem, ds_arcondicionado)
VALUES (true, true, true, false, true),
		(true, false, true, true, false),
		(1, 1, 1, 0, 0),
		(1, 0, 1, 1, 1),
		(1, 1, 1, 0, 0),
		(0, 1, 1, 0, 1),
		(1, 1, 0, 1, 0),
		(0, 1, 1, 0, 1),
		(1, 0, 1, 1, 1),
		(1, 1, 0, 0, 0),
		(1, 0, 1, 0, 1),
		(1, 1, 1, 1, 0);

-- Inserir na tb_aluguel
INSERT INTO tb_aluguel (ds_estadiaMin, vl_valorMensal, ds_contasInclusas)
VALUES (false, 800.00, true),
		(true, 1200.00, false),
		(1, 1000.00, 1),
		(0, 800.00, 0),
		(1, 1200.00, 1),
		(0, 900.00, 1),
		(1, 1500.00, 0),
		(0, 850.00, 1),
		(1, 1100.00, 1),
		(0, 950.00, 0),
		(1, 1300.00, 1),
		(0, 1000.00, 1);


-- Inserir na tb_republica
INSERT INTO tb_republica (id_dadoRepublica, id_localizacao, id_tipoRepublica, id_regraRepublica, id_valorAlguel, id_comodidadeRepublica, ds_nomeRepublica, ds_descricaoRepublica)
VALUES (1, 1, 1, 1, 1, 1, 'Canto Aconchegante', 'Um apartamento compartilhado no centro'),
		(2, 2, 2, 2, 2, 2, 'Oásis Verde', 'Casa privativa com um jardim'),
		(1, 1, 1, 1, 1, 1, 'República Central', 'Excelente localização, próximo a universidades.'),
		(2, 2, 2, 2, 2, 2, 'República Carioca', 'Vista para o mar, ambiente aconchegante.'),
		(3, 3, 3, 3, 3, 3, 'República Mineira', 'Casa ampla, com jardim e churrasqueira.'),
		(4, 4, 4, 4, 4, 4, 'República Sulista', 'Apartamento moderno, próximo ao centro.'),
		(5, 5, 5, 5, 5, 5, 'República Baiana', 'Ambiente tranquilo, com fácil acesso ao transporte público.'),
		(6, 6, 6, 6, 6, 6, 'República Paulista', 'Localização privilegiada, próximo a shoppings e restaurantes.'),
		(7, 7, 7, 7, 7, 7, 'República Candanga', 'Casa espaçosa, com área de lazer.'),
		(8, 8, 8, 8, 8, 8, 'República Cearense', 'Apartamento confortável, com vista para o mar.'),
		(9, 9, 9, 9, 9, 9, 'República Pernambucana', 'Casa charmosa, com decoração vintage.'),
		(10, 10, 10, 10, 10, 10, 'República Amazônica', 'Ambiente acolhedor, cercado pela natureza.');


-- Inserir na tb_usuario
INSERT INTO tb_usuario (nm_usu, sx_sexoUsu, ds_cpfUsu, ds_rgUso, ds_emailUsu, ds_senhaUsu, ds_descricaoPerfil, id_Nacionalidade)
VALUES ('Santos', 'F', '111.222.333-44', 'A987654', 'ana@example.com', 'senha123', 'Estudante', 1),
	('pitu', 'M', '555.666.777-88', 'B123456', 'carlos@example.com', 'senhasegura', 'Profissional', 2),
	('Maria Silva', 'F', '123.456.789-00', '12345678', 'maria@example.com', 'senha123', 'Estudante universitária em busca de uma república tranquila.', 1),
	('José Santos', 'M', '987.654.321-00', '87654321', 'jose@example.com', 'senha456', 'Jovem profissional em mudança para uma nova cidade.', 1),
	('Ana Oliveira', 'F', '111.222.333-44', '11223344', 'ana@example.com', 'senha789', 'Estagiária procurando um ambiente colaborativo.', 2),
	('Pedro Souza', 'M', '555.666.777-88', '55667788', 'pedro@example.com', 'senhaabc', 'Estudante de intercâmbio em busca de novas amizades.', 3),
	('Carla Lima', 'F', '999.888.777-66', '99887766', 'carla@example.com', 'senhaxyz', 'Jovem profissional em busca de uma república animada.', 2),
	('Lucas Pereira', 'M', '333.222.111-00', '33221100', 'lucas@example.com', 'senhawww', 'Estudante de música procurando um ambiente criativo.', 3),
	('Fernanda Alves', 'F', '444.555.666-77', '44556677', 'fernanda@example.com', 'senhazzz', 'Estudante de arte buscando uma república acolhedora.', 4),
	('Gustavo Oliveira', 'M', '777.888.999-00', '77889900', 'gustavo@example.com', 'senha999', 'Jovem profissional em mudança para uma nova cidade.', 5),
	('Juliana Santos', 'F', '222.111.333-44', '22113344', 'juliana@example.com', 'senha000', 'Estudante universitária em busca de uma república tranquila.', 6),
	('Rafael Lima', 'M', '666.555.444-00', '66554400', 'rafael@example.com', 'senha111', 'Jovem profissional procurando um ambiente colaborativo.', 7);


-- Inserir em anfitriao
INSERT INTO tb_anfitriao (id_usu, id_republica)
VALUES (1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12);
       
select * from tb_usuario;
select * from tb_anfitriao;
/*INSERT INTO tb_usuario (nm_usu, sx_sexoUsu, ds_cpfUsu, ds_rgUso, ds_emailUsu, ds_senhaUsu, ds_descricaoPerfil, id_Nacionalidade)
VALUES ('João Silva', 'M', '123.456.789-00', '123456789', 'joao@email.com', 'senha123', 'Descrição do perfil de João Silva', 1),
		('Maria Oliveira', 'F', '987.654.321-00', '987654321', 'maria@email.com', 'senha456', 'Descrição do perfil de Maria Oliveira', 2),
        ('Carlos Santos', 'M', '555.444.333-22', '555444333', 'carlos@email.com', 'senha789', 'Descrição do perfil de Carlos Santos', 1);
        
insert into tb_DadosRepublicas(ds_nomeAnfitriao,ds_emailAnfitriao,nmr_telefoneAnfitriao,an_anoCricao)
values ("Gabriel", "gabriel@teste.com", "13991266579", 2020),
		("david", "david@teste.com", "13991266589", 2020),
		("livia", "livia@teste.com", "13991266599", 2020),
		("yasmim", "yasmim@teste.com", "13991266559", 2020);
        
INSERT INTO tb_nacionalidade (nm_nacionalidade)
VALUES ('Acre'),
		('Alagoas'),
		('Amapá'),
		('Amazonas'),
		('Bahia'),
		('Ceará'),
		('Distrito Federal'),
		('Espírito Santo'),
		('Goiás'),
		('Maranhão'),
		('Mato Grosso'),
		('Mato Grosso do Sul'),
		('Minas Gerais'),
		('Pará'),
		('Paraíba'),
		('Paraná'),
		('Pernambuco'),
		('Piauí'),
		('Rio de Janeiro'),
		('Rio Grande do Norte'),
		('Rio Grande do Sul'),
		('Rondônia'),
		('Roraima'),
		('Santa Catarina'),
		('São Paulo'),
		('Sergipe'),
		('Tocantins');
        
        select * from tb_DadosRepublicas;
*/


