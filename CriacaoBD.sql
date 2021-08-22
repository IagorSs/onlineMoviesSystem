drop table if exists PLANO;
drop table if exists FILME_ASSISTIDO;
drop table if exists FILME;
drop table if exists USUARIO;
drop table if exists ATOR;
drop table if exists DIRETOR;
drop table if exists CATEGORIA_FILME;


create table USUARIO (
	inscricao numeric(10),
	email varchar(30) not null,
	nome varchar(30) not null,
	login varchar(30) not null,
	senha varchar(30) not null,
	constraint USUARIO_PK primary key (inscricao)
);

create table ATOR (
	cpf varchar(11),
	nome varchar(30) not null,
	nascimento date,
	constraint ATOR_PK primary key (cpf)
);

create table DIRETOR ( 
	cpf varchar(11),
	nome varchar(30) not null,
	nascimento date,
	n_filmes_dirigidos numeric(2),
	constraint DIRETOR_PK primary key (cpf)
);

create table CATEGORIA_FILME (
	categoria varchar(30),
	constraint CATEGORIA_FILME_PK primary key (categoria)
);

create table FILME (
	id numeric(5) not null,
	categoria varchar(30),
	duracao numeric(3) not null,
	nome varchar(30) not null,
	produtora varchar(30) not null,
	nome_arquivo TEXT NOT NULL,       -- Nome/Path original do arquivo
    conteudo_arquivo BYTEA NOT NULL,  -- Conteudo do arquivo
    tamanho_arquivo BIGINT NOT NULL,  -- Tamanho total do arquivo 
    md5_arquivo TEXT NOT NULL ,       -- Assinatura MD5 do arquivo
	descricao varchar(256),
	cpf_ator_principal varchar(11),
	cpf_diretor varchar(11), 
	constraint FILME_PK primary key (id),
	constraint FILME_ATOR_FK foreign key (cpf_ator_principal) references ATOR (cpf),
	constraint FILME_DIRETOR_FK foreign key (cpf_diretor) references DIRETOR (cpf),
	constraint FILME_CATEGORIA_FILME foreign key (categoria) references CATEGORIA_FILME (categoria)
);

create table PLANO (
	inscricao numeric(10) not null,
	categoria varchar(30) not null,
	n_telas numeric(2) not null,
	pagamento varchar(30) not null,
	expiracao date not null,
	constraint PLANO_PK primary key (inscricao),
	constraint PLANO_USUARIO_FK foreign key (inscricao) references USUARIO (inscricao),
	constraint PLANO_CATEGORIA_FILME foreign key (categoria) references CATEGORIA_FILME (categoria)
);

create table FILME_ASSISTIDO (
	inscricao_usuario numeric(10),
	id_filme numeric(5),
	constraint FILME_ASSISTIDO_PF primary key (inscricao_usuario, id_filme),
	constraint FILME_ASSISTIDO_USUARIO_FK foreign key (inscricao_usuario) references USUARIO (inscricao),
	constraint FILME_ASSISTIDO_FILME_FK foreign key (id_filme) references FILME (id)
);

alter table FILME_ASSISTIDO drop constraint FILME_ASSISTIDO_FILME_FK;
alter table FILME_ASSISTIDO drop constraint FILME_ASSISTIDO_USUARIO_FK;