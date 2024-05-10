const readlineSync = require('readline-sync');

let nomeHeroi = readlineSync.question('Digite o nome do heroi: ');
let vitoriasHeroi = readlineSync.question('quantidade de vitorias do heroi?: ');
let derrotasHeroi = readlineSync.question('quantidade de derrotasHeroi do heroi?: ');

let nivelHeroi = rankingHeroi(vitoriasHeroi, derrotasHeroi);

parseInt(vitoriasHeroi, derrotasHeroi)

function rankingHeroi(vitoriasHeroi, derrotasHeroi){
		let xpHeroi =  vitoriasHeroi - derrotasHeroi

		let levelHeroi = '';

switch (true) {
        case xpHeroi <= 10:
            levelHeroi = 'Ferro';
            break;

        case xpHeroi <= 20:
            levelHeroi = 'Bronze';
            break;

        case xpHeroi <= 50:
            levelHeroi = 'Prata';
            break;

        case xpHeroi <= 80:
            levelHeroi = 'Ouro';
            break;

        case xpHeroi <= 90:
            levelHeroi = 'Diamante';
            break;

        case xpHeroi <= 100:
            levelHeroi = 'Lendario';
            break;

        default:
            levelHeroi = 'Imortal';
            break;
    }


		return levelHeroi
}

console.log('o heroi ' + nomeHeroi + ' esta no nivel ' + nivelHeroi);
