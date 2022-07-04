const express = require('express');
const app = express();

app.listen(3000, ()=> console.log('Server is runnig'))

let author = 'Luiz Fernando'
// Middleware
app.use(express.json())

app.route('/').get( (req, res) => res.send(author))
app.route('/sobre').get((req, res)=> res.send('Sobre'))

app.route('/').post((req, res) => res.send(req.body))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})

app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})

// Body Params
app.route('/infos').post((req, res) => {
    const {name, techs} = req.body;
    res.send(`O nome do usuário é ${name} e as tecnologias são ${techs}`)
})

// Route Params
app.route('/infos/:info').get((req, res) => {
    res.send(`Olá!, ${req.params.info}`)
})

app.route('/infos/educaca   o/:escola/:serie/:disciplina').get((req, res) => {
    const educacao = req.params;
    res.send(educacao)
})

app.route('/queries').get((req, res) => {
    const queries = req.query;
    res.send(queries);
})

process.on('uncaughtException', (err) => console.log(err))