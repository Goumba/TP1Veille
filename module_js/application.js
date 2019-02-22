console.log('application');
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' //
import {AnimLettre} from './AnimLettre.js' //
import {AnimDeux} from './AnimDeux.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('.titre')
const lesLettres = 'Gros Robot'
let intro = new Introduction(contenuIntro, elmHeader, animationLettre)
let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim);

// debutQuestionnaire()

function animationLettre()
{
	
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Très Gros Robot'
	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim);
	let  monAnimDeux = new AnimDeux(lesLettres, elmHeader, finAnim);	
}


function finAnim()
{
	console.log('animation terminée')
}










	



