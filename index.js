const express = require('express')
const app = express()

const port =3000
const options={
    root:__dirname
}

const getHTML=(req,res)=>{
    res.sendFile('./index.html',options,(err)=>{
        if(err) throw err;
        console.log('Sirviendo index.html');
    })
}

app.get('/',getHTML)

app.listen(port,()=>{
    console.log(`Aplicacion escuchando en el puerto ${port}`);
})