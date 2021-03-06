const express= require('express');
const path= require('path');
const app= express();
//Definido a pasta de views para configuração no Express.
app.set('views',path.join(__dirname,'views'));
//Configuração para o JSON no EXpress.
app.use(express.json());
//Configuração de arquivos estáticos (public)
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,()=>console.log("Aplicação rodando em http://localhost:3000"));
app.get('/',(req,res)=> res.json({mensagem:'Uma hora eu consigo!!'}));