var express=require('express');
var app= express();


app.get('/',function (req,res) {
    res.send('Hola World!');

});
app.get('/dos',function (req,res) {
    res.send('Hola World 2!');

});
app.listen(3000,function () {
    console.log('Ejemplo de aplicacion escuchando el puerto 3000');
});

