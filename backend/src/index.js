require('dotenv').config();//para variables de entorno

const app = require('./app');
require('./database');//al llamarlo ejecuta el codigo
//Iniciamos el servidor

async function main(){
    await app.listen(app.get('port'));
    console.log('SERVER ON PORT: ', app.get('port'));
}

main();