# SyberAnime

> Projeto de um website focado em animes e mangás, no qual poderá consultar informações sobre e criar suas listas

## Banco de dados
Crie um banco de dados e execute as instruções SQL's abaixo para criar a tabela `Users`:
```sql
  CREATE TABLE `Users` (
    `USER_ID` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `USERNAME` VARCHAR(45) NOT NULL,
    `SURNAME` VARCHAR(45) NOT NULL,
    `NICKNAME` VARCHAR(15),
    `USER_EMAIL` VARCHAR(30) NOT NULL,
    `USER_PASS` VARCHAR(60) NOT NULL,
    `USER_ICON` BLOB,
    `NAS_DATE` DATE NOT NULL,
    `REGIS_DATE` TIMESTAMP NOT NULL,
    `USER_GENDER` ENUM('M', 'F') NOT NULL
)
```

## Configuração
As credenciais do banco de dados estão no arquivo `./Backend/app/Database/config.php` e você deve alterar para as configurações do seu ambiente (HOST, NAME, USER e PASS).

## Composer
Para a aplicação funcionar, é necessário rodar o Composer para que sejam criados os arquivos responsáveis pelo autoload das classes.

Caso não tenha o Composer instalado, baixe pelo site oficial: [https://getcomposer.org/download](https://getcomposer.org/download/)

Para rodar o composer, basta acessar a pasta do projeto e executar o comando abaixo em seu terminal:
```shell
composer install
```

Após essa execução uma pasta com o nome `vendor` será criada na raiz do projeto e você já poderá acessar pelo seu navegador.

<cite>- by <em>Cainã_Kin</em></cite>