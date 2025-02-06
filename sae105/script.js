var data
fetch('musiques.json').then(function(response) {
    response.json().then(function(data){
    console.log(data);
    data.forEach(function (musique, index) {
        // construire chaque section avec titre, description image et bouton en concaténation, j'ai aussi crée un popup à l'aide d'une vidéo youtube
        //qst 8 à11 j'ai crée mon tableau dans data, j'ai modifié mon console.log et aussi mon code pour le popup. J'ai donc modifié mon code permettant d'afficher tout sur ma page, mon ancien code était : 
// musiques.forEach(function (musique, index) {
//     if (numCase < descriptionMusiques.length) {
//         document.querySelector('.liste-musiques').innerHTML += 
//             "<section class='backmusic'>" +
//                 "<img src='" + images[numCase].src + "' alt='Image de "+ musique + "' class='music-cover' />" +
//                 "<h2 class=titlemusiques>" + musique + "</h2>" +
//                 "<p>" + descriptionMusiques[numCase] +  "</p>" +
//                  "<audio id='audio" + numCase + "' src='" + audio[numCase].src + "'></audio>" +
//                 "<button class='play' data-audio='" + numCase + "'>⏵</button>" +
//                 "<button class='appearance' onclick='togglePopup(" + numCase + ")'>🔗</button>"+ 
//             "</section>";


        document.querySelector('.liste-musiques').innerHTML += 
            "<section class='backmusic'>" +
                "<img src='" + musique.image + "' alt='Image des covers "+ musique.musique + "' class='music-cover' />" +
                "<h2 class=titlemusiques>" + musique.musique + "</h2>" +
                "<p class='descriptionmusiques'>" + musique.descriptionMusiques +  "</p>" +
                 "<audio id='audio" + numCase + "' src='" + musique.audio + "'></audio>" +
                "<button class='play' data-audio='" + numCase + "'>⏵</button>" +
                "<button class='appearance' data-popup='" + numCase + "'>🔗</button>"+ 
            "</section>";
            
            
        // Afficher dans la console
        console.log("Case n°" + numCase + " : " + musique + " : " + musique.descriptionMusiques);

        // Incrémenter le numéro de case
        numCase++;

        
//gestion du clic sur les audios
        document.querySelectorAll('.play').forEach(function(button) {
            button.addEventListener('click', function() {
                var audio = button.getAttribute('data-audio');
                var audioElement = document.querySelectorAll('audio')[audio]; 
        console.log(audioElement);
                if (audioElement.paused){ 
                    audioElement.play();
                    button.innerHTML = "⏸";  
                } else {
                    audioElement.pause();
                    button.innerHTML = "⏵";  
                }
            });
        });

//gestion du clic pour les popup 
document.querySelectorAll('.appearance').forEach(function(button) {
    button.addEventListener('click', function() {
        togglePopup(button.getAttribute('data-popup'))
        

    })
})


// Voici ce que j'ai pu créer à l'aide d'une vidéo youtube pour créer un popup https://youtu.be/9Qzm66JX-RA?si=3IYXAtx5711WIcly
function togglePopup(popupnumCase) {
    var popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
    console.log (data);
    var popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = 
        "<div id='popup" + popupnumCase + "' class='popup'>" +
            "<h3 class=titlepop>Retrouvez le lien vers Spotify !</h3>" +
            "<a href='#' class='popup-exit'>Fermer</a>" +
            "<a href='" + data[popupnumCase].spotifyLink + "'class=spotbutton'>Écouter sur Spotify</a>" +
        "</div>";
        document.querySelector('.popup-exit').addEventListener('click', function(event){ 
        event.preventDefault();togglePopup();
    });

} 
        
    });
    })
    })

var numCase = 0;
// console.log("Liste des musiques : ", musique);
// console.log("Descriptions : ", descriptionMusiques);
// console.log("link: ", linksmusic);

     

// Écrivez dans la console un sélecteur Javascript de l’élément ayant pour identifianttitre et testez-le (c’est-à-dire passez la souris sur le résultat dans la console pour voir si c’est le bon champ de formulaire qui est mis en surbrillance dans la page web) puis ajoutez après votre sélecteur le code .value qui permettra d’afficher la valeur entrée dans le champ du formulaire.La détection de modification d’un champ du formulaire
// document.querySelector('#titre').value;

// Ajoutez dans votre code Javascript un détecteur du fait qu’une touche du clavier a été relâchée sur ce champ ayant pour identifiant titre. À vous de trouver dans l’aide-mémoire de manipulation du DOM quel est le type d’événement correspondant à cela.//
document.querySelector('#titre').addEventListener('keyup', function(event) {
    console.log('Touche relâchée sur le clavier:', event.target.value);
});// Quand je relâche une touche, "event.target" c'est le champ où j'écris, et "event.target.value" c'est ce que j'ai tapé dedans jusqu'à maintenant.

// Q5. Complétez le code de la question précédente pour remplir un élément de votre page
// web avec le contenu de ce champ titre modifié par l’internaute et faites de même avec le
// champ ayant pour identifiant description.
document.querySelector('#Description_musique').addEventListener('keyup', function(event) {
    console.log('Touche relâchée sur le clavier:', event.target.value);
});

document.querySelector('#email').addEventListener('keyup', function(event) {
    console.log('Touche relâchée sur le clavier (Email) :', event.target.value);
});


// Q7. Écrivez et testez dans votre navigateur une URL permettant d’envoyer dans la base de données, associé à votre login, le message « Je n’ai aucune suggestion de musique mais je vous félicite pour votre site web de sélection musicale que je trouve très réussi ! » qui serait envoyé par l’adresse mail philippe.gambette@univ-eiffel.fr. Normalement vous ne devriez plus obtenir un message d’erreur mais un message de succès. Appelez-moi pour vérifier que votre message a bien été stocké dans la base de données.

// l'URL que j'ai testé dans le navigateur : https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=hettiarachchige&courriel=philippe.gambette@univ-eiffel.fr&message=Jenaiaucunesuggestiondemusiquemaisjevousf%C3%A9licitepourvotresitewebdeslectionmusicalequejetrouvetr%C3%A8sr%C3%A9ussi&mail=philippe.gambette@univ-eiffel.fr

// Le message reçu avec cette URL : {"status":"success","message":"Le message a bien \u00e9t\u00e9 enregistr\u00e9 !"}

// Q9. Ajoutez du code Javascript pour que, lors d’un clic sur le bouton d’envoi, l’URL que vous avez préparée à la question Q2 s’affiche dans la console.
    // document.getElementById('button').addEventListener('click', function() {
    //   // L'URL que j'ai fait à la question précédente et que je veux afficher dans la console
    //   var apiUrl = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=hettiarachchige&courriel=philippe.gambette@univ-eiffel.fr&message=Jenaiaucunesuggestiondemusiquemaisjevousf%C3%A9licitepourvotresitewebdeslectionmusicalequejetrouvetr%C3%A8sr%C3%A9ussi&mail=philippe.gambette@univ-eiffel.fr';
  
    //   // Afficher l'URL dans la console
    //   console.log('URL générée :', apiUrl);
    // });

    // Q10. Modifiez le code Javascript de la question précédente pour afficher dans la console l’URL modifiée pour que le message soit remplacé par des éléments provenant de votre formulaire, qui présentent la musique transmise par l’internaute qui a rempli votre formulaire.
    // document.getElementById('button').addEventListener('click', function() {
    //     // Récupérer les valeurs des champs du formulaire
    //     var Title = document.getElementById('titre').value;  
    //     var Description = document.getElementById('Description_musique').value;  
    //     var audioUrl = document.getElementById('audio-url').value; 
    //     // URL qui contient les valeurs du champs
    //     var apiUrl = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=hettiarachchige&courriel=philippe.gambette@univ-eiffel.fr&message=' + songDescription + '&mail=philippe.gambette@univ-eiffel.fr&title=' + songTitle + '&audio-url=' + audioUrl;
        
    //     // Afficher l'URL générée dans la console
    //     console.log('URL générée :', apiUrl);
    // });
    
//     Q11. Modifiez votre code Javascript pour appeler l’API en utilisant l’URL que vous affichez
// dans la console du navigateur à la place de la variable urlVisitee. Vérifiez dans la console
// du navigateur que la réponse reçue correspond bien à un message de succès et pas à un
// message d’erreur, et contactez-moi si vous souhaitez vérifier que le message est bien arrivé
// dans la base de données.
// Pour que le site soit contributif, je écupère la valeur saisie par l'utilisateur dans le champ "titre", "Description_musique" et "audio-url" et je l'affiche dans l'élément avec l'ID "titleuser", "descriptionuser" et "audiouser"
// Je peux donc mettre la prévisualisation en temps réel lorsque l'utilisateur tape dans le champ "titre".

document.getElementById('titre').addEventListener('keyup', function() {
    var valeurTitre = document.getElementById('titre').value;
    console.log("Une touche du clavier a été relâchée (Titre) : ", valeurTitre);
    document.querySelector('#titleuser').innerHTML = valeurTitre;
});

document.getElementById('Description_musique').addEventListener('keyup', function() {
    var valeurDescription = document.getElementById('Description_musique').value;
    console.log("Une touche du clavier a été relâchée (Description) : ", valeurDescription);
    document.querySelector('#descriptionuser').innerHTML = valeurDescription;
});

document.getElementById('audio-url').addEventListener('keyup', function() {
    var valeurAudio = document.getElementById('audio-url').value;
    console.log("Une touche du clavier a été relâchée (Audio) : ", valeurAudio);
    document.querySelector('#audiouser').innerHTML =  valeurAudio;
});


document.getElementById('button').addEventListener('click', function() {

    // Je récupère les valeurs des champs
    var Email = document.getElementById('email').value.trim();  
    var Title = document.getElementById('titre').value.trim();  
    var Description = document.getElementById('Description_musique').value.trim();  
    var audioUrl = document.getElementById('audio-url').value.trim(); 

    if (Email === "" || Title === "" || Description === "" || audioUrl === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;  // Arrêter l'envoi si un champ est vide
    }

    if (audioUrl.indexOf("http") !== 0) {
        alert("Veuillez saisir une URL correct.");
        return; // Arrêter l'envoi si l'URL n'est pas valide
    }

    //Je me suis servie de l'IA afin de faire apparaître les fenêtres après l'envoi des données de l'utilisateur.



    // console.log('Titre:', Title);
    // console.log('Description:', Description);
    // console.log('URL de l\'audio:', audioUrl);


    // je crée l'URL avec les valeurs
    var apiUrl = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=hettiarachchige&courriel=' + Email + '&message=Description de la musique : ' 
    + Description + ' \n Titre de la musique : ' + Title + ' \n URL de la musique : ' + audioUrl ;

    // j'affiche l'URL dans la console
    console.log('URL générée :', apiUrl);

    if(Email && Title && Description && audioUrl && apiUrl) {
    // je mets en place l'appel de l'API
    fetch(apiUrl)
        .then(function(response) {
            console.log('Réponse reçue :', response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            alert("Les données ont été envoyées avec succès !");
 

            //Je me suis servie de l'IA afin de d'afficher un message d'erreur si jamais les données saisies ne sont pas correctes.
        })
        .catch(function() {
            alert("Une erreur est survenue.");
        });
    } else {
        return
    }




});

//Étant donné que mon fichier HMTL ne fonctionne pas lorsque je veux l'ouvrir à partir de mes fichiers sur Google, je me suis servie du Golive sur vscode ce qui m'a permis de tout de même voir mon site affiché sur une page web.