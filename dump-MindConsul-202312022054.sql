PGDMP         6                {         
   MindConsul    14.5    15.4     �	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �	           1262    42110 
   MindConsul    DATABASE     n   CREATE DATABASE "MindConsul" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "MindConsul";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �	           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    4            �	           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            �            1259    42144    curso    TABLE     �  CREATE TABLE public.curso (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    professor_responsavel character varying(255) NOT NULL,
    categoria character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    imagem character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.curso;
       public         heap    postgres    false    4            �            1259    42143    curso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.curso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.curso_id_seq;
       public          postgres    false    217    4            �	           0    0    curso_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.curso_id_seq OWNED BY public.curso.id;
          public          postgres    false    216            �            1259    42133    usuario    TABLE     '  CREATE TABLE public.usuario (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    4            �            1259    42132    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    215    4            �	           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    214            \	           2604    42147    curso id    DEFAULT     d   ALTER TABLE ONLY public.curso ALTER COLUMN id SET DEFAULT nextval('public.curso_id_seq'::regclass);
 7   ALTER TABLE public.curso ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            [	           2604    42136 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �	          0    42144    curso 
   TABLE DATA           x   COPY public.curso (id, nome, professor_responsavel, categoria, descricao, imagem, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �       �	          0    42133    usuario 
   TABLE DATA           [   COPY public.usuario (id, nome, email, password_hash, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   g       �	           0    0    curso_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.curso_id_seq', 23, true);
          public          postgres    false    216            �	           0    0    usuario_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.usuario_id_seq', 4, true);
          public          postgres    false    214            b	           2606    42151    curso curso_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.curso DROP CONSTRAINT curso_pkey;
       public            postgres    false    217            ^	           2606    42142    usuario usuario_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_email_key;
       public            postgres    false    215            `	           2606    42140    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    215            �	   [   x�32�t.-*�WHIU�����*M�SH,N�O����&^X����P��TU�id`d�kh�k`�`dlehnel�gli�m`�G�+F��� ���      �	   O  x�}�Ko�@F��+\�k�X��@ZPQ�t3�Z�#*"��jӤFL�ۜ�9�E\�(���MF�,�ژ��ܶ�a�j�;�8�Ʊ����F�}��t�hVq/�n2o.8H_�"CL:u���D�X	����?�������!��h|(��4���
��J�-@qb�^��1c����[ܥw.�X�����'�;�E�ˮ�L��Z����zm��[���\w�L�'˝���s�u�XrtT����p��*"*A a�/��E�d9�_~s�fJ{������Uf��@��R����A��/��̲Jk/���K��u�T(D��� ��<�A?�b     