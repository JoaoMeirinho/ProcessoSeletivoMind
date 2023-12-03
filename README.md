# Processo seletivo Mind Consulting

Aqui você poderá encontrar toda a documentação necessária para configurar e inicializar o projeto.

# Sobre

O projeto é um sistema de gerenciamento de cursos, podendo criar, visualizar, editar e excluír cursos. O sistema também conta com um sistema de login e cadastro para professores.

# Tecnologias utilizadas

- NodeJS: v18.14.2
- PostgreSQL: v14.5 build 1929
- Next: v14.0.3
- Sequelize: v6.35.1
- JWT: v8.5.1
- TypeScript: v5.3.2
- BCryptJS: v2.4.3

# Configurando o Projeto

Faça o Download ou o pull do projeto para a sua máquina. Abra a pasta do projeto no seu editor de preferência (VSCode recomendado). Em seguida, execute o seguinte comando no terminal:

    npm install

## .env.local File

Para maior segurança, este projeto utiliza variáveis de ambiente para executar algumas funções. Para que o projeto funcione corretamente, adicione o arquivo **.env.local** na raíz do projeto. Em seguida, copie o seguinte código para o arquivo criado e substitua os valores entre parênteses pelas configurações do seu banco de dados PostgreSQL:

    JWT_SECRET=(digite um hash aqui)

    BCRYPT_HASH=8

    DATABASE=(nome do banco de dados)

    DB_USER=(seu usuário do banco de dados)

    DB_PASSWORD=(a senha de seu banco de dados)

    DB_HOST=(o host do seu banco de dados)

    DB_PORT=(a porta de seu banco de dados)

## Banco de Dados

Por padrão, se o arquivo **.env.local** estiver devidamente configurado, o sistema irá sincronizar as tabelas do banco de dados automaticamente. Será necessário apenas que o banco de dados já exista.

Caso ocorra algum erro ao gerar as tabelas, faça o dump do banco de dados com o arquivo **dump-MindConsul-202312022054.sql**, que se encontra na raiz do projeto.

# Hora de rodar o projeto

Com o projeto devidamente configurado, é hora de ver o sistema ganhar vida!
Há duas maneiras de rodar o projeto:

## Dev mode

O **dev mode** fará o projeto rodar em modo de desenvolvimento, sem gerar um build da aplicação, e ignorando a checagem de tipos. Para inicializar o projeto em **dev mode**, acesse a pasta raiz do projeto no terminal e execute o seguinte comando:

    npm run dev

Se tudo ocorrer como esperado, o terminal irá lhe mostrar algo assim:

    > processo-mind-consulting@0.1.0 dev
    > next dev

       ▲ Next.js 14.0.3
       - Local:        http://localhost:3000
       - Environments: .env.local

     ✓ Ready in 6.4s

acesse a URL fornecida em **-Local**

# Utilizando o sistema

## Login e Cadastro de Usuários

Ao acessarmos o sistema pela primeira vez, seremos redirecionados para a página de login. Como ainda não temos uma conta, clicaremos no botão **Ainda não tem uma conta?**

Você será redirecionado para a página de cadastro de usuário, onde precisará fornecer seu nome, um E-mail, uma senha.

> Seu E-mail só poderá ser fornecido para apenas uma conta. Ou seja, nenhuma outra conta poderá ser criada utilizando seu E-mail.

Você precisará confirmar também sua senha. Depois, clique no botão **Cadastrar**.

> Sua senha será salva utilizando o BCrypt, que irá criptografar sua senha e armazenar a senha criptografada no banco de dados.

Após realizar o cadastro, você será automaticamente redirecionado para a página de login novamente, onde deverá fornecer o E-mail cadastrado e a senha da conta pertencente ao E-mail. Após isso, clique no botão **Entrar**.

> Ao realizar login, o sistema utiliza a tecnologia JWT para realizar a autenticação no sistema.

## Dashboard de cursos

Após realizar o login, você será redirecionado para a página principal contendo todos os cursos cadastrados. Como acabamos de criar nossa conta, o dashboard estará vazio. Então, vamos criar um curso! Clique no botão no canto superior esquerdo da tela escrito **Adicionar curso**.

## Criando um curso

Criar um curso é muito simples! Basta fornecer os seguintes itens:

- O nome do curso
- O professor que será responsável pelo curso
- Uma breve descrição do curso
- A categoria do curso

> Todos os campos são **obrigatórios**

E pronto! Basta clicar em **Criar curso**. Seu curso será criado e você será enviado novamente para o dashboard de cursos, onde poderá ver seu mais novo curso criado!

## Editando um curso

Editar um curso é extremamente simples! No dashboard de cursos, selecione o curso que você quer editar clicando no botão **Editar curso**.

Você será redirecionado para uma página idêntica a que você acessou para criar um curso, mas agora os campos são automaticamente preenchidos com os dados do curso selecionado. Para editar o curso, modifique os campos desejados e clique em **Editar curso**. Você será redirecionado para o dashboard novamente, onde poderá visualizar o curso editado.

## Deletando um curso

Para deletar um curso, basta clicar em **Deletar curso** no curso que você desejar.

## Pesquisando um curso

Dificuldades em encontrar um curso. Sem problemas! Basta digitar o nome do curso desejado na barra de pesquisa, localizada no canto superior direito. O dashboard será automaticamente atualizado enquanto você digita o nome do curso.

# Considerações Finais

Este projeto é parte do processo seletivo realizado pela Mind Consulting. Sinta-se a vontade para deixar uma estrela no Github.

Desenvolvido por: **João Meirinho**
