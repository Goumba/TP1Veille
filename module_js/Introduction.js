import {
    Util
} from './Util.js'


export class Introduction {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} o - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(o, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.titrePrincipal = o.titrePrincipal;
        this.titreSecondaire = o.titreSecondaire
        this.titreTernaire = o.titreTernaire
        this.description = o.description
        this.elmParent = elementParent
        this.integrerIntro()
        this.fonction = fonction
    }


    integrerIntro() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        let globalCont = document.querySelector('body');
        console.log('introduction')
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'introduction')
        
        let elmPrincipale = this.creerElement(globalCont,
            'div',
            this.titrePrincipal,
            'texteApparaissant')

        let elmSecondaire = this.creerElement(globalCont,
            'div',
            this.titreSecondaire,
            'texteApparaissant')    
        
        let elmBouton = document.querySelector(".deuxiemeAnim");
        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}