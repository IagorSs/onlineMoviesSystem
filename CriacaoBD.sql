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
    id          NUMERIC(11) NOT NULL,
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
    id                  NUMERIC(11) NOT NULL,
    nome                VARCHAR(30) NOT NULL,
    nascimento          DATE,
    n_filmes_dirigidos  NUMERIC(3),
	created_at          DATE,
	updated_at          DATE
);

ALTER TABLE diretor ADD CONSTRAINT diretor_pk PRIMARY KEY ( id );

CREATE TABLE filme (
    id                 NUMERIC(5) NOT NULL,
    categoria          VARCHAR(30) NOT NULL,
    duracao            NUMERIC(3) NOT NULL,
    nome               VARCHAR(30) NOT NULL,
    produtora          VARCHAR(30) NOT NULL,
    arquivo            BYTEA,
    image_url          VARCHAR(256),
    video_url          VARCHAR(256),
    descricao          VARCHAR(256),
    id_ator_principal  NUMERIC(11),
    id_diretor         NUMERIC(11),
	created_at         DATE,
	updated_at         DATE
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
    email      VARCHAR(30) NOT NULL,
    nome       VARCHAR(30) NOT NULL,
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
-- criando os triggers
--------------------------------------------------------------------------------

create or replace function func_atualizar_filmes_dirigidos()
returns trigger as $atualizar_filmes_dirigidos$
begin
	IF(NEW.id_diretor is not null)
	then
		update diretor D set n_filmes_dirigidos = 
			(select count(*) from filme F
			 where D.id = F.id_diretor);
	end if;
	return NEW;
end;
$atualizar_filmes_dirigidos$ language plpgsql;

drop trigger if exists atualizar_filmes_dirigidos on filme;

create trigger atualizar_filmes_dirigidos
after insert or delete on filme
execute procedure func_atualizar_filmes_dirigidos();


create or replace function func_filme_assistido_no_plano()
returns trigger as $filme_assistido_no_plano$
begin
    IF(NEW.id_filme not in 
            (select id from filme F 
                join categoria_filme C on C.categoria = F.categoria
                join plano P on P.categoria = C.categoria
                join usuario U on P.inscricao = U.inscricao
               where U.inscricao = NEW.inscricao_usuario))
    then
        raise exception 'Você não possui o plano com este filme';
    end if;
	return NEW;
end;
$filme_assistido_no_plano$ language plpgsql;

drop trigger if exists filme_assistido_no_plano on filme_assistido;

create trigger filme_assistido_no_plano
before insert on filme_assistido for each row
execute procedure func_filme_assistido_no_plano();


create or replace function func_metodo_pagamento_valido()
returns trigger as $metodo_pagamento_valido$
begin
    IF(NEW.pagamento not in ('crédito','débito automatico','débito','boleto'))
    then
        raise exception 'Método de pagamento inválido';
    end if;
	return NEW;
end;
$metodo_pagamento_valido$ language plpgsql;

drop trigger if exists metodo_pagamento_valido on plano;

create trigger metodo_pagamento_valido
before update or insert on plano for each row
execute procedure func_metodo_pagamento_valido();
 
 
create or replace function func_email_valido() 
returns trigger as $email_valido$
begin
    IF(NEW.email not like '%@%.com%')
    then
        raise exception 'Email inválido';
    end if;
	return NEW;
end;
$email_valido$ language plpgsql;
 
drop trigger if exists email_valido on usuario;
 
create trigger email_valido
before update or insert on usuario for each row
execute procedure func_email_valido();


create or replace function func_limite_duracao_filme() 
returns trigger as $limite_duracao_filme$
begin
    IF(NEW.duracao>360)
    then
        raise exception 'O filme ultrapassou o limite de duração';
    end if;
	return NEW;
end;
$limite_duracao_filme$ language plpgsql;

drop trigger if exists limite_duracao_filme on filme;

create trigger limite_duracao_filme
before update or insert on filme for each row
execute procedure func_limite_duracao_filme();

--------------------------------------------------------------------------------
-- populando as tabelas
--------------------------------------------------------------------------------


insert into ator values (93304363076,'Cleiton','12-01-2001');
insert into ator values (20241904056,'Ana','24-11-1985');
insert into ator values (42579143009,'Jubileido','05-08-1966');
insert into ator values (97466300081,'Silva','20-02-1995');
insert into ator values (47249303066,'Jonas','15-12-2003');

insert into diretor values (70899807070,'Tarantino','29-03-1975',0);
insert into diretor values (13323341058,'Spielberg','29-03-1975',0);
insert into diretor values (15152761041,'Scorsese','29-03-1975',0);
insert into diretor values (30968490050,'Hitchcock','29-03-1975',0);
insert into diretor values (66514355072,'Tim Burton','25-08-1987',0);

insert into categoria_filme values ('ação');
insert into categoria_filme values ('aventura');
insert into categoria_filme values ('romance');
insert into categoria_filme values ('infantil');
insert into categoria_filme values ('terror');

insert into filme values (1,
                          'ação',
                          123,
                          'Missão Impossível 7',
                          'Paramount Pictures',
                          null,
                          'https://br.web.img3.acsta.net/c_310_420/pictures/18/05/14/17/09/5117345.jpg',
                          'https://www.youtube.com/watch?v=b828g1d1UHU',
                          'Em uma perigosa tarefa para recuperar plutônio roubado, Ethan Hunt opta por salvar sua equipe em vez de completar a missão.',
                          93304363076,
                          70899807070);
insert into filme values (2,
                          'ação',
                          165,
                          'Velozes e Furiosos 22',
                          'Paramount Pictures',
                          null,
                          'https://www.universalpics.com.br/tl_files/content/movies/fast9/posters/01.jpg',
                          'https://www.youtube.com/watch?v=X-V1jcj2Zt8',
                          'Pelo bem da família, Toretto tem a ideia de jogar seu carro na direção de um meteoro o qual irá chocar no carro de seu irmão.',
                          42579143009,
                          15152761041);
insert into filme values (3,
                          'aventura',
                          110,
                          'Indiana Jones 5',
                          'Paramount Pictures',
                          null,
                          'https://images-na.ssl-images-amazon.com/images/I/51ZTev9e9FL.jpg',
                          'https://www.youtube.com/watch?v=HqOSLZl9GUo',
                          'Durante a Guerra Fria, Indiana Jones e o jovem Mutt buscam a Caveira de Cristal, mas logo percebem que não estão sozinhos. Soviéticos liderados pela cruel Irina Spalko também querem o objeto para tentar dominar o mundo através dele.',
                          97466300081,
                          30968490050);
insert into filme values (4,
                          'aventura',
                          120,
                          'Star Wars Ep.3',
                          'Paramount Pictures',
                          null,
                          'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
                          'https://www.youtube.com/watch?v=5UnjrG_N8hU',
                          'As Guerras Clínicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação.',
                          20241904056,
                          13323341058);
insert into filme values (5,
                          'romance',
                          92,
                          'História de um Casamento',
                          'Fox',
                          null,
                          'https://br.web.img3.acsta.net/pictures/19/10/17/16/58/1689390.jpg',
                          'https://www.youtube.com/watch?v=ZzSomaJAIMc',
                          'O filme trata de um divórcio entre um diretor de teatro e uma atriz que possuem um filho. Durante o processo de divórcio mostra-se o processo de brigas e mudanças de cidades de Nova York para Los Angeles.',
                          20241904056,
                          70899807070);
insert into filme values (6,
                          'romance',
                          85,
                          '365 Dias',
                          'Netflix',
                          null,
                          'https://m.media-amazon.com/images/I/414wBLxz4uL.jpg',
                          'https://www.youtube.com/watch?v=h89OcmbNydA',
                          'Laura é uma diretora de vendas que embarca em uma viagem à Sicília para salvar seu relacionamento. Lá, ela conhece Massimo, um membro da máfia siciliana, que a sequestra e lhe dá 365 dias para se apaixonar por ele.',
                          93304363076,
                          15152761041);
insert into filme values (7,
                          'infantil',
                          65,
                          'Bob Esponja',
                          'Nickelodeon',
                          null,
                          'https://media.fstatic.com/3JHVdm3ulJXk4pC5g9dR6EHJhMc=/290x478/smart/media/movies/covers/2020/03/01_5sqKxt6.jpg',
                          'https://www.youtube.com/watch?v=aHvFnTg1ecs',
                          'Uma esponja-do-mar chamada Bob Esponja Calça Quadrada mora com seu caracol de estimação na Fenda do Biquíni, no fundo do oceano.',
                          42579143009,
                          30968490050);
insert into filme values (8,
                          'infantil',
                          80,
                          'Peppa Pig',
                          'Cartoon Network',
                          null,
                          'https://a-static.mlcdn.com.br/1500x1500/peppa-pig-livro-de-adesivos-portugues-capa-comum-dcl/tiogera2/602369527/020aec5ecc16794bcc653d85c965450a.jpg',
                          'https://www.youtube.com/watch?v=EmLaHD2bNfw',
                          'Peppa é uma porquinha rechonchuda que mora com seu irmãozinho George, sua mãe e seu pai. Ela adora brincar e pular em poças de lama, e suas aventuras sempre acabam bem e com roncos de risadas.',
                          97466300081,
                          13323341058);
insert into filme values (9,
                          'terror',
                          92,
                          'Invocação do Mal',
                          'Fox',
                          null,
                          'https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg',
                          'https://www.youtube.com/watch?v=GQrrXceHn2E',
                          'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',
                          47249303066,
                          66514355072);

insert into usuario values (1,'gustavo@outlook.com','Gustavo Silva','gugusilva','123456gugu');
insert into usuario values (2,'aline@outlook.com','Aline Souza','alinezinhas','as12345');
insert into usuario values (3,'renato@outlook.com.br','Renato Aragão','didimoco','ostrapalhoes123');
insert into usuario values (4,'maria@outlook.com','Maria da Graça','xuxameneguel','soparabaixinhos');
insert into usuario values (5,'terroreuamo@outlook.com','Cleiton Rasta','naotenhomedo','terrors2');

insert into plano values (1,'ação',3,'crédito','27-12-2022');
insert into plano values (1,'aventura',3,'crédito','27-12-2022');
insert into plano values (2,'romance',1,'débito automatico','27-12-2021');
insert into plano values (3,'ação',5,'crédito','27-12-2023');
insert into plano values (3,'aventura',5,'crédito','27-12-2023');
insert into plano values (3,'romance',5,'crédito','27-12-2023');
insert into plano values (3,'infantil',5,'crédito','27-12-2023');
insert into plano values (4,'infantil',1,'boleto','27-12-2021');
insert into plano values (5,'terror',1,'crédito','27-12-2021');

insert into filme_assistido values (1,1);
insert into filme_assistido values (2,1);
insert into filme_assistido values (3,1);
insert into filme_assistido values (9,1);
insert into filme_assistido values (5,2);
insert into filme_assistido values (1,3);
insert into filme_assistido values (4,3);
insert into filme_assistido values (5,3);
insert into filme_assistido values (7,3);
insert into filme_assistido values (7,4);
insert into filme_assistido values (8,4);
insert into filme_assistido values (9,5);

commit;