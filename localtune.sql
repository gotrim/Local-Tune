	drop database if exists db_localtune;
	create database if not exists db_localtune;
	use db_localtune;

	create table if not exists tb_usuario (
		id_usuario int not null auto_increment,
		nm_usuario varchar(50) not null,
		cd_emailUsuario varchar(100) unique not null,
		cd_cpfUsuario char(11) not null unique,
		nmr_telefoneUsuario char(11) unique,
		img_Usuario longblob,
		
		constraint pk_usuario primary key (id_usuario)
	);

	create table if not exists tb_musico (
		id_musico int not null auto_increment,
		nm_musico varchar(50) not null,
		cd_emailMusico varchar(100) unique not null,
		cd_cpfMusico char(11) not null unique,
		nmr_telefoneMusico char(11) unique,
		img_Musico longblob,
		
		constraint pk_musico primary key (id_musico)
	);


	create table if not exists tb_estabelecimento(
		id_estabelecimento int not null auto_increment,
		cd_cnpj varchar(14)not null,
		nm_estabelecimento text,
		nmr_nota int not null, /*nota em estrelas do estabelecimento*/

		constraint pk_estabelecimento primary key(id_estabelecimento)
	);


	create table if not exists tb_cidade (
		id_cidade int not null auto_increment,
		nm_cidade varchar(100) not null,
		sg_estado char(2) not null,
		
		constraint pk_cidade primary key (id_cidade)
	);


	create table if not exists tb_infoEstabelecimento(
		id_infoestabelecimento int not null auto_increment,
		id_estabelecimento int not null unique,
		nm_logradouro varchar(100) not null,
		cd_cep char(8) not null,
		nm_bairro varchar(50) not null,
		nmr_casa int not null,
		txt_complemento varchar(100),
		id_cidade int not null,
		
		
		constraint pk_infoestabelecimento primary  key(id_infoestabelecimento),
		constraint fk_cidadeEstabelecimento foreign key (id_cidade) references tb_cidade(id_cidade),
		constraint fk_estabelecimentoInfo foreign key (id_estabelecimento) references tb_estabelecimento(id_estabelecimento)
	);

	create table if not exists tb_generoMusical(
		id_genero int not null auto_increment,
		ds_genero text,

		constraint pk_genero primary key (id_genero)
	);


	create table if not exists tb_gerenoEscolhido(
		id_escolha int not null auto_increment,
		id_genero int not null,
		id_usuario int not null,
		 
		 
		 constraint pk_escolha primary key(id_escolha),
		constraint fk_genero foreign key (id_genero) references tb_generoMusical(id_genero),
		constraint fk_usuario foreign key (id_usuario) references tb_usuario(id_usuario)
	);

		create table if not exists tb_gerenoEscolhidoMusico(
			id_escolhaMusico int not null auto_increment,
			id_genero int not null,
			id_musico int not null,

			constraint pk_GeneroMusico primary key(id_escolhaMusico),
			constraint fk_generoMusico foreign key (id_genero) references tb_generoMusical(id_genero),
			constraint fk_musico foreign key (id_musico) references tb_musico(id_musico)
		);


create table if not exists tb_postagemMusico(
    id_postagem int not null auto_increment,
    ds_titulo text,
    ds_descricao text,
    id_musico int not null,
    
    constraint pk_postagem primary key (id_postagem),
	constraint fk_postagemMusico foreign key (id_musico) references tb_musico(id_musico)
);

create table if not exists tb_arquivosPostagem(
id_arquivos int not null auto_increment,
id_postagem int not null,
img_postagem longblob,
ds_video varchar(100),

constraint pk_arquivo primary key (id_arquivos),
constraint fk_postagemArquivos foreign key (id_postagem) references tb_postagemMusico(id_postagem)
);



create table if not exists tb_avaliacao(
    id_avaliacao  int not null auto_increment,
    ds_comentario text,
    id_postagem int not null,
    id_usuario int not null,
    cd_like tinyint(1),
    
    constraint pk_avaliacao primary key (id_avaliacao),
    constraint fk_ foreign key (id_postagem) references tb_postagemMusico(id_postagem),
    constraint fk_avaliacao_usuario foreign key (id_usuario) references tb_usuario(id_usuario)
);

INSERT INTO tb_usuario (nm_usuario, cd_emailUsuario, cd_cpfUsuario, nmr_telefoneUsuario) VALUES
('João Silva', 'joaosilva@email.com', '12345678901', '11999998888'),
('Maria Oliveira', 'mariaoliveira@email.com', '23456789012', '12999997777'),
('Pedro Souza', 'pedrosouza@email.com', '34567890123', '13999996666'),
('Ana Costa', 'anacosta@email.com', '45678901234', '14999995555'),
('Bruno Santos', 'brunosantos@email.com', '56789012345', '15999994444');

INSERT INTO tb_musico (nm_musico, cd_emailMusico, cd_cpfMusico, nmr_telefoneMusico) VALUES
('Eduardo Guitarrista', 'eduardoguitarrista@email.com', '67890123456', '16999993333'),
('Fernanda Cantora', 'fernandacantora@email.com', '78901234567', '17999992222'),
('Marcos Baterista', 'marcosbaterista@email.com', '89012345678', '18999991111'),
('Camila Tecladista', 'camilate desenlista@email.com', '90123456789', '19999990000'),
('Daniel Saxofonista', 'danielsaxofonista@email.com', '01234567890', '20999988888');

INSERT INTO tb_estabelecimento (cd_cnpj, nm_estabelecimento, nmr_nota) VALUES
('12345678901234', 'Bar do Zé', 4),
('23456789012345', 'Restaurante da Maria', 5),
('34567890123456', 'Padaria do João', 3),
('45678901234567', 'Supermercado do Pedro', 2),
('56789012345678', 'Loja de Roupas da Ana', 4);

INSERT INTO tb_cidade (nm_cidade, sg_estado) VALUES
('São Paulo', 'SP'),
('Rio de Janeiro', 'RJ'),
('Salvador', 'BA'),
('Brasília', 'DF'),
('Fortaleza', 'CE');

INSERT INTO tb_infoEstabelecimento (id_estabelecimento, nm_logradouro, cd_cep, nm_bairro, nmr_casa, txt_complemento, id_cidade) VALUES
(1, 'Rua da Alegria, 1000', '01234567', 'Centro', 100, 'Perto da praça', 1),
(2, 'Avenida Brasil, 500', '23456789', 'Copacabana', 200, 'Esquina com a rua Xavier de Toledo', 2),
(3, 'Rua do Comércio, 300', '45678901', 'Barra', 300, 'Próximo ao shopping', 3),
(4, 'Rua das Flores, 200', '56789012', 'Jardim Camburi', 400, 'Em frente ao parque', 4),
(5, 'Avenida Afonso Pena, 150', '67890123', 'Centro', 500, 'Galeria comercial', 5);


INSERT INTO tb_generoMusical (ds_genero) VALUES
('Rock'),
('Samba'),
('MPB'),
('Pop'),
('Eletrônica'),
('Pagode'),
('Funk'),
('Forró'),
('Sertanejo'),
('Jazz');

INSERT INTO tb_gerenoEscolhido (id_genero, id_usuario) VALUES
(1, 1), (2, 1), (3, 2), (4, 2), (5, 3),
(6, 3), (7, 4), (8, 4), (9, 5), (10, 5);

INSERT INTO tb_gerenoEscolhidoMusico (id_genero, id_musico) VALUES
(1, 1), (2, 1), (3, 2), (4, 2), (5, 3),
(6, 3), (7, 4), (8, 4), (9, 5), (10, 5);




INSERT INTO tb_postagemMusico (ds_titulo, ds_descricao, id_musico) VALUES
('Show ao Vivo no Bar do Zé', 'Venha curtir um show ao vivo comigo no Bar do Zé neste sábado!', 1),
('Nova Música Lançada!', 'Ouça minha nova música "Sonho de Liberdade" em todas as plataformas digitais!', 2),
('Aula de Violão Online', 'Aprenda violão comigo em aulas online personalizadas!', 3),
('Dicas de Técnica Vocal', 'Compartilhando algumas dicas de técnica vocal para cantores', 4),
('Preparando o Próximo Álbum', 'Estou no estúdio trabalhando no meu próximo álbum, aguardem novidades!', 5);

INSERT INTO tb_avaliacao (ds_comentario, id_postagem, id_usuario, cd_like) VALUES
('Gostei da música, mas achei a produção um pouco fraca.', 2, 5, true),
('Melhor musica da minha vida.', 1, 5, true),
('Show ao Vivo no Bar do Zé é o melhor do brasil.', 1, 2, true),
('melhor experiencia da minha vida.', 1, 3, true),
('melhor experiencia da minha vida.', 4, 4, true),
('melhor experiencia da minha vida.', 4, 2, true)
