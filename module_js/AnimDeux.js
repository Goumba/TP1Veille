import {
    Util
} from './Util.js'


export class AnimDeux {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

	
    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
		this.lesLettres = lesLettres;
		this.elmParent = elementParent;
		this.animlettres(this.lesLettres);
		this.fonction = fonction;
			
	}


    animlettres(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
		//On récupère le mot Noël
		let elmConteneur = this.creerElement(this.elmParent, 'section', '', 'mot');
		
		

		//Avec une boucle for of, on attribue à chaque lettre la classe animNoel
		// motNoel.length
		for (let i=0; i<lesLettres.length;i++) {
            let elmMot = this.creerElement(elmConteneur,'div', lesLettres[i], 'mot');
			elmMot.style.animationDelay = (i * 0.5) + "s";
		}
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu;
		}
		if(classCSS != ''){
			noeud.classList.add(classCSS);
		}
        elmParent.appendChild(noeud)
        return noeud
    }



}