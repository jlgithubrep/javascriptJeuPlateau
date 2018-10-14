$(function () {


    function getRandom(min, max) { //max non compris
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var joueurCourant = "rouge"; // rouge ou vert
    var positionJoueurRouge = 0;
    var positionJoueurVert = 0;
    var valeurDe = 0;

    function positionJoueurCourant() {
        if (joueurCourant == "rouge") {
            return positionJoueurRouge
        } else {
            return positionJoueurVert
        }
    }

    function positionJoueurAdverse() {
        if (joueurCourant != "rouge") {
            return positionJoueurRouge
        } else {
            return positionJoueurVert
        }
    }


    $("#joueurCourant").html(joueurCourant);

    function mouvementChip() {
        if (joueurCourant == "rouge") {
            $("#c" + positionJoueurRouge).toggleClass("chip-rouge");
            positionJoueurRouge += valeurDe;
            $("#c" + positionJoueurRouge).toggleClass("chip-rouge");
        } else {
            $("#c" + positionJoueurVert).toggleClass("chip-vert");
            positionJoueurVert += valeurDe;
            $("#c" + positionJoueurVert).toggleClass("chip-vert");
        }

    }


    $("#lancerDe").click(function () {


        // while (valeurDe + positionJoueurCourant() == positionJoueurAdverse() || valeurDe == 0) {
        //     valeurDe = getRandom(1, 7);
        // }


        valeurDe = getRandom(1, 7);

        console.log(valeurDe);

        if (valeurDe + positionJoueurCourant() == positionJoueurAdverse()) {
            $("#log").html($("#log").html() + "Vous êtes tomber sur le jeton adverse, le dé est relancé</br>");
            while (valeurDe + positionJoueurCourant() == positionJoueurAdverse()) {
                valeurDe = getRandom(1, 7);
            }

        }
        mouvementChip();
        //$("#log").html($("#log").html() + "sfeswf</br>");

        //si un joueur tombe sur une case noire
        $(".casenoir").each(function () {
            console.log("noir " + $(this).attr("id"));
            if ("c" + positionJoueurCourant() == $(this).attr("id")) {
                $("#log").html($("#log").html() + "Joueur " + joueurCourant + " est tombé sur une case noire! Retour à la case départ</br>");
                if (joueurCourant == "rouge") {
                    positionJoueurRouge = 0;
                } else {
                    positionJoueurVert = 0;
                }
                mouvementChip();
            }
        });



        $(".caserouge").each(function () {
            if ("c" + positionJoueurCourant() == $(this).attr("id") && joueurCourant == "rouge") {
                $("#log").html($("#log").html() + "Joueur " + joueurCourant + " est tombé sur une case de sa couleur! Il avance de 2 cases supplémentaires</br>");
                positionJoueurRouge += 2;
                mouvementChip();
            }

        });





        if (joueurCourant == "rouge") {
            joueurCourant = "vert";
        } else {
            joueurCourant = "rouge";
        }
        $("#joueurCourant").html(joueurCourant);


    });;



});