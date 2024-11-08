# tpe-calculatrice

TP 1 Calculatrice
Créez une page calculatrice.html
    Cette page contient un formulaire avec :
        un input type texte pour recevoir une première valeur
        un input type texte pour recevoir une deuxième valeur
        un select pour proposer les opérateurs (+, -, , /, %, \*\*)
        un bouton de validation

    Lors du survol des input ou du select, affichez un texte expliquant ce que l'on attend, le texte doit disparaitre lorsque l'on sort du survol
        exemple :
            Veuillez saisir un chiffre (pour les input)
            Veuillez sélectionner un opérateur (pour la liste déroulante)

    Lors de la validation du form, on récupère les données du form et on affiche l'opération et le résultat
        exemple :
            "10 + 5 = 15"
            "2 7 = 14"

    Gestion des erreurs :
        il faut controler que les valeurs soient bien numérique => sinon message d'erreur
        il faut controler que l'opérateur existe (en cas de modification de l'utilisateur du code html)
        division par 0 impossible
        l'utilisateur peut mettre des décimales, en fr on utilise la virgule, en revanche avec une virgule la valeur ne sera pas numérique il faut donc remplacer la virgule par un point (.replace()) pour le calcul mais à l'affichage on remet la virgule

    Mettre deux bouton en haut de page
        un pour afficher la calculatrice
        un pour cacher la calculatrice
