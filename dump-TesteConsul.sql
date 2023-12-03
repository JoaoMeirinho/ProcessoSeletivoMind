PGDMP     +    ,                {            TesteConsul    14.5    15.4     �	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �	           1262    42152    TesteConsul    DATABASE     o   CREATE DATABASE "TesteConsul" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "TesteConsul";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �	           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    4            �	           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            �            1259    42279    curso    TABLE     �  CREATE TABLE public.curso (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    professor_responsavel character varying(255) NOT NULL,
    categoria character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    imagem character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.curso;
       public         heap    postgres    false    4            �            1259    42278    curso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.curso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.curso_id_seq;
       public          postgres    false    212    4            �	           0    0    curso_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.curso_id_seq OWNED BY public.curso.id;
          public          postgres    false    211            �            1259    42268    usuario    TABLE     '  CREATE TABLE public.usuario (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    4            �            1259    42267    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    210    4            �	           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    209            S	           2604    42282    curso id    DEFAULT     d   ALTER TABLE ONLY public.curso ALTER COLUMN id SET DEFAULT nextval('public.curso_id_seq'::regclass);
 7   ALTER TABLE public.curso ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            R	           2604    42271 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �	          0    42279    curso 
   TABLE DATA                 public          postgres    false    212   #       �	          0    42268    usuario 
   TABLE DATA                 public          postgres    false    210   �       �	           0    0    curso_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.curso_id_seq', 3, true);
          public          postgres    false    211            �	           0    0    usuario_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.usuario_id_seq', 1, true);
          public          postgres    false    209            Y	           2606    42286    curso curso_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.curso DROP CONSTRAINT curso_pkey;
       public            postgres    false    212            U	           2606    42277    usuario usuario_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_email_key;
       public            postgres    false    210            W	           2606    42275    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    210            �	   j   x���v
Q���W((M��L�K.-*�Ws�	uV�0�QP/I-.IU2RKA�obQvjIf^:��_��@����X��H��X��������H���B������5 7�!$      �	   �   x�����0  w��	�)-1-.bd@�Z�*�D�|��.w9?��(~��@�y#
8#�w��z1XY[`�e���u�E�.J�\GTglJ$�T����c�a9Sb+ձ�z��I=:�r�ߥ��4�Y��abZ�D �!̱1D�n�S�{MӾ�4�     