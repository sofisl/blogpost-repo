const fs = require('fs');
const ini = require('ini');

function main(pathToAuthToken, pathToNpmrc, preProcess) {
    const config = ini.parse(fs.readFileSync(pathToNpmrc, 'utf-8'));
    let token;

    if (preProcess === "pre") {
        config[pathToAuthToken] = '""'
    } else {
        token = config[pathToAuthToken]
        config[pathToAuthToken] = "${TOKEN}"
    }
    
    fs.writeFileSync(pathToNpmrc, ini.stringify(config));
    console.log(token);
    return token;
}

const args = process.argv.slice(2);
main(...args);

