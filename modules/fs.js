const { error } = require('console');
const fs = require('fs');
const path = require('path');

//nota: o node na maioria das vezes tem comportamento assincrono, 
//logo se deve prestar atenção com a ordem dos eventos.


// criar pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error){
//         return console.log('erro', error);
//     }
//     console.log("pasta criada com sucesso")
// })


// está aninhado para ter uma sequencia sincrona, ou seja, uma etapa de cada vez
// criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello World!!\n', (error) => {
    if (error){
        return console.log("erro:", error);
    }
    console.log('arquivo criado com sucesso!');
    //adicionar ao arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Node!!\n', (error) => {
        if (error){
            return console.log("erro:", error);
        }
        console.log('adicionado ao arquivo com sucesso!');

        //ler arquivo
        fs.readFile(path.join(__dirname, '/test', '/test.txt'), 'utf-8', (error, data) => {
            if (error){
                return console.log("erro: ", error);
            }
            console.log(data);
        });
    });
});

