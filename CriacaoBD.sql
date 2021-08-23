--------------------------------------------------------------------------------
-- deletando possiveis tabelas ja criadas
--------------------------------------------------------------------------------

drop table if exists ator cascade;
drop table if exists categoria_filme cascade;
drop table if exists diretor cascade;
drop table if exists filme cascade;
drop table if exists filme_assistido cascade;
drop table if exists plano cascade;
drop table if exists usuario cascade;

--------------------------------------------------------------------------------
-- criando as tabelas e inserindo as constraints
--------------------------------------------------------------------------------


CREATE TABLE ator (
    id          VARCHAR(11) NOT NULL,
    nome        VARCHAR(30) NOT NULL,
    nascimento  DATE,
	created_at  DATE,
	updated_at  DATE
);

ALTER TABLE ator ADD CONSTRAINT ator_pk PRIMARY KEY ( id );

CREATE TABLE categoria_filme (
    categoria  VARCHAR(30) NOT NULL,
	created_at DATE,
	updated_at DATE
);

ALTER TABLE categoria_filme ADD CONSTRAINT categoria_filme_pk PRIMARY KEY ( categoria );

CREATE TABLE diretor (
    id                  VARCHAR(11) NOT NULL,
    nome                VARCHAR(30) NOT NULL,
    nascimento          DATE,
    n_filmes_dirigidos  NUMERIC(3),
	created_at          DATE,
	updated_at          DATE
);

ALTER TABLE diretor ADD CONSTRAINT diretor_pk PRIMARY KEY ( id );

CREATE TABLE filme (
    id                  NUMERIC(5) NOT NULL,
    categoria           VARCHAR(30) NOT NULL,
    duracao             NUMERIC(3) NOT NULL,
    nome                VARCHAR(30) NOT NULL,
    produtora           VARCHAR(30) NOT NULL,
    arquivo             BYTEA,
	video_youtube_id	VARCHAR(15),
    descricao           VARCHAR(256),
    id_ator_principal  VARCHAR(11),
    id_diretor         VARCHAR(11),
	created_at          DATE,
	updated_at          DATE
);

ALTER TABLE filme ADD CONSTRAINT filme_pk PRIMARY KEY ( id );

CREATE TABLE filme_assistido (
    id_filme           NUMERIC(5) NOT NULL,
    inscricao_usuario  NUMERIC(10) NOT NULL,
	created_at         DATE,
	updated_at         DATE
);

ALTER TABLE filme_assistido ADD CONSTRAINT filme_assistido_pk PRIMARY KEY ( id_filme,
                                                                            inscricao_usuario );

CREATE TABLE plano (
    inscricao  NUMERIC(10) NOT NULL,
    categoria  VARCHAR(30) NOT NULL,
    n_telas    NUMERIC(2) NOT NULL,
    pagamento  VARCHAR(30) NOT NULL,
    expiracao  DATE NOT NULL,
	created_at DATE,
	updated_at DATE
);

ALTER TABLE plano ADD CONSTRAINT plano_pk PRIMARY KEY ( inscricao,
                                                        categoria );

CREATE TABLE usuario (
    inscricao  NUMERIC(10) NOT NULL,
    email      VARCHAR(30),
    nome       VARCHAR(30),
    login      VARCHAR(30) NOT NULL,
    senha      VARCHAR(30) NOT NULL,
	created_at DATE,
	updated_at DATE 
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( inscricao );

ALTER TABLE filme_assistido
    ADD CONSTRAINT filme_assistido_filme_fk FOREIGN KEY ( id_filme )
        REFERENCES filme ( id );

ALTER TABLE filme_assistido
    ADD CONSTRAINT filme_assistido_usuario_fk FOREIGN KEY ( inscricao_usuario )
        REFERENCES usuario ( inscricao );

ALTER TABLE filme
    ADD CONSTRAINT filme_ator_fk FOREIGN KEY ( id_ator_principal )
        REFERENCES ator ( id );

ALTER TABLE filme
    ADD CONSTRAINT filme_categoria_filme_fk FOREIGN KEY ( categoria )
        REFERENCES categoria_filme ( categoria );

ALTER TABLE filme
    ADD CONSTRAINT filme_diretor_fk FOREIGN KEY ( id_diretor )
        REFERENCES diretor ( id );

ALTER TABLE plano
    ADD CONSTRAINT plano_categoria_filme_fk FOREIGN KEY ( categoria )
        REFERENCES categoria_filme ( categoria );

ALTER TABLE plano
    ADD CONSTRAINT plano_usuario_fk FOREIGN KEY ( inscricao )
        REFERENCES usuario ( inscricao )
            ON DELETE CASCADE;

--------------------------------------------------------------------------------
-- populando as tabelas
--------------------------------------------------------------------------------

insert into ator values (93304363076,'Cleiton','12-01-2001',null,null);
insert into ator values (20241904056,'Ana','24-11-1985',null,null);
insert into ator values (42579143009,'Jubileido','05-08-1966',null,null);
insert into ator values (97466300081,'Silva','20-02-1995',null,null);
insert into ator values (47249303066,'Jonas','15-12-2003',null,null);

insert into diretor values (70899807070,'Tarantino','29-03-1975',2,null,null);
insert into diretor values (13323341058,'Spielberg','29-03-1975',2,null,null);
insert into diretor values (15152761041,'Scorsese','29-03-1975',2,null,null);
insert into diretor values (30968490050,'Hitchcock','29-03-1975',2,null,null);
insert into diretor values (66514355072,'Tim Burton','25-08-1987',1,null,null);

insert into categoria_filme values ('ação',null,null);
insert into categoria_filme values ('aventura',null,null);
insert into categoria_filme values ('romance',null,null);
insert into categoria_filme values ('infantil',null,null);
insert into categoria_filme values ('terror',null,null);

insert into filme values (1,'ação',123,'Missão Impossível 7','Paramount Pictures',null,null,'Em uma perigosa tarefa para recuperar plutônio roubado, Ethan Hunt opta por salvar sua equipe em vez de completar a missão.',93304363076,70899807070,null,null);
insert into filme values (2,'ação',165,'Velozes e Furiosos 22','Paramount Pictures',null,null,'Pelo bem da família, Toretto tem a ideia de jogar seu carro na direção de um meteoro o qual irá chocar no carro de seu irmão.',42579143009,15152761041,null,null);
insert into filme values (3,'aventura',110,'Indiana Jones 5','Paramount Pictures',null,null,'Durante a Guerra Fria, Indiana Jones e o jovem Mutt buscam a Caveira de Cristal, mas logo percebem que não estão sozinhos. Soviéticos liderados pela cruel Irina Spalko também querem o objeto para tentar dominar o mundo através dele.',97466300081,30968490050,null,null);
insert into filme values (4,'aventura',120,'Star Wars Ep.3','Paramount Pictures',null,null,'As Guerras Clônicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação.',20241904056,13323341058,null,null);
insert into filme values (5,'romance',92,'História de um Casamento','Fox',null,null,'O filme trata de um divórcio entre um diretor de teatro e uma atriz que possuem um filho. Durante o processo de divórcio mostra-se o processo de brigas e mudanças de cidades de Nova York para Los Angeles.',20241904056,70899807070,null,null);
insert into filme values (6,'romance',85,'365 Dias','Netflix',null,null,'Laura é uma diretora de vendas que embarca em uma viagem à Sicília para salvar seu relacionamento. Lá, ela conhece Massimo, um membro da máfia siciliana, que a sequestra e lhe dá 365 dias para se apaixonar por ele.',93304363076,15152761041,null,null);
insert into filme values (7,'infantil',65,'Bob Esponja','Nickelodeon',null,null,'Uma esponja-do-mar chamada Bob Esponja Calça Quadrada mora com seu caracol de estimação na Fenda do Biquíni, no fundo do oceano.',42579143009,30968490050,null,null);
insert into filme values (8,'infantil',80,'Peppa Pig','Cartoon Network',null,null,'Peppa é uma porquinha rechonchuda que mora com seu irmãozinho George, sua mãe e seu pai. Ela adora brincar e pular em poças de lama, e suas aventuras sempre acabam bem e com roncos de risadas.',97466300081,13323341058,null,null);
insert into filme values (9,'terror',92,'Invocação do Mal','Fox',null,null,'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',47249303066,66514355072,null,null);

insert into usuario values (1,'gustavo@outlook.com','Gustavo Silva','gugusilva','123456gugu',null,null);
insert into usuario values (2,'aline@outlook.com','Aline Souza','alinezinhas','as12345',null,null);
insert into usuario values (3,'renato@outlook.com','Renato Aragão','didimoco','ostrapalhoes123',null,null);
insert into usuario values (4,'maria@outlook.com','Maria da Graça','xuxameneguel','soparabaixinhos',null,null);
insert into usuario values (5,'terroreuamo@outlook.com','Cleiton Rasta','naotenhomedo','terrors2',null,null);

insert into plano values (1,'ação',3,'crédito','27-12-2022',null,null);
insert into plano values (1,'aventura',3,'crédito','27-12-2022',null,null);
insert into plano values (2,'romance',1,'debito automatico','27-12-2021',null,null);
insert into plano values (3,'ação',5,'crédito','27-12-2023',null,null);
insert into plano values (3,'aventura',5,'crédito','27-12-2023',null,null);
insert into plano values (3,'romance',5,'crédito','27-12-2023',null,null);
insert into plano values (3,'infantil',5,'crédito','27-12-2023',null,null);
insert into plano values (4,'infantil',1,'boleto','27-12-2021',null,null);
insert into plano values (5,'terror',1,'credito','27-12-2021',null,null);

insert into filme_assistido values (1,1,null,null);
insert into filme_assistido values (2,1,null,null);
insert into filme_assistido values (3,1,null,null);
insert into filme_assistido values (5,2,null,null);
insert into filme_assistido values (1,3,null,null);
insert into filme_assistido values (4,3,null,null);
insert into filme_assistido values (5,3,null,null);
insert into filme_assistido values (7,3,null,null);
insert into filme_assistido values (7,4,null,null);
insert into filme_assistido values (8,4,null,null);
insert into filme_assistido values (9,5,null,null);

commit;