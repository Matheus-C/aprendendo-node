const path = require("path");

//apenas o nome deste arquivo 
console.log(path.basename(__filename));

//diretório deste arquivo
console.log(path.dirname(__filename));

//extensao do arquivo
console.log(path.extname(__filename));

//cria um objeto path com todas as informações
console.log(path.parse(__filename));

//junta caminho com string
console.log(path.join(__dirname, "abc"));