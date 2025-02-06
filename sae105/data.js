console.log('Hello World')

// question 12 : j'ai déplacé le contenu de ma var data pour l'intégrer dans le fichier json

// // var data /*= [
//   { 
//       "musique": "Good days - SZA", 
//       "descriptionMusiques": "Cette chanson douce me rappelle mes vacances d’été grâce au rythme qui me est semblable au bruit de la mer. Je l’écoute souvent pendant cette période, car sa mélodie apaisante me détend profondément. Elle crée une atmosphère parfaite pour les moments de calme d'étés.", 
//       "audio": "audios/sza.mp3", 
//       "image": "images/szacover.jpg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/4PMqSO5qyjpvzhlLI5GnID"
//   },
//   { 
//       "musique": "Tango Hawaï - Kekra, Tif", 
//       "descriptionMusiques": " Ce morceau mélange parfaitement des sonorités modernes avec des rythmes intenses et hypnotiques. Les basses percutantes et l’ambiance festive, mêlée de mélancolie, rendent la musique captivante. C'est un mélange qui donne envie de danser tout en suscitant la réflexion.", 
//       "audio": "audios/tango.mp3", 
//       "image": "images/tango.jpeg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/4ewdVdWwzYBwEg3xnahhO8?si=8a84e16c3b6b499b"
//   },
//   { 
//       "musique": "Stuntmen - Laylow, Alpha Wann, Wit ", 
//       "descriptionMusiques": "L’ambiance cinématographique du clip visuellement forte ajoute une vraie dimension artistique. Le rythme de cette musique et les voix des trois rappeurs s’accordent parfaitement. Laylow mêle électronique et introspection avec un style unique. L'alternance entre les trois couplets permet d'avoir à la fois un côté plus énergétique et d'un autre, un côté plus calme mais toujours aussi entraînant.", 
//       "audio": "audios/stuntmen.mp3", 
//       "image": "images/stuntumen.jpg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/1YEs58i4G68twRzYaFEu7T?si=7e7692dce6cf4f88"
//   },
//   { 
//       "musique": "Die hard - Kendrick Lamar, Blxst", 
//       "descriptionMusiques": "Ce morceau propose un rythme entraînant sublimé par l’alternance des voix de Kendrick Lamar et Blxst. Le refrain chanté par Blxst est ma partie préférée car je trouve sa voix sublime et il y a un côté exotique, qui selon moi, évoque l’été, ma saison favorite, et donne une ambiance légère et chaleureuse.", 
//       "audio": "audios/diehard.mp3", 
//       "image": "images/kendrick.jpg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/2g6tReTlM2Akp41g0HaeXN?si=09ed083619cb4204"
//   },
//   { 
//       "musique": "Laisse - PNL", 
//       "descriptionMusiques": "J'apprécie énormément Laisse de PNL car premièrement, je trouve que PNL sont de très bon rappeurs. De plus, le ryhme étant assez particulier, les deux rappeurs arrivent à créer leur univers et à apporter leur rap. La musique est très entraînante. ", 
//       "audio": "audios/laisse_2.mp3", 
//       "image": "images/laisse.webp", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/42e7c5XYbcaxWt0SfZkf3j?si=1d12b72307624860"
//   },
//   { 
//       "musique": "Gogo - Laylow, Jok'air", 
//       "descriptionMusiques": " Ce morceau à la vibe estivale est, selon moi, marqué par la douceur de la voix de Laylow. Le contraste avec celle de Jok’air crée une dynamique captivante. Le rythme est léger et ensoleillé, il me ramène à l’ambiance détendue de l’été.", 
//       "audio": "audios/gogo.mp3", 
//       "image": "images/gogo.jpeg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/34uOUenWb6EuRGHZM0qmFC?si=e1f914d274a14178"
//   },
//   { 
//       "musique": "Hold on, we're going home - Drake", 
//       "descriptionMusiques": "J'aime Hold On, We're Going Home de Drake pour sa mélodie captivante et son ambiance à la fois douce et énergique. La voix de Drake se marie parfaitement avec la production et les beats rétro. Le morceau a une vibe R&B moderne que j'apprécie énormément. C'est un morceau qui reste en tête et qui crée une atmosphère chaleureuse.", 
//       "audio": "audios/drake.mp3", 
//       "image": "images/drake.jpg",  
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/6jdOi5U5LBzQrc4c1VT983?si=334d6439511f4c98"
//   },
//   { 
//       "musique": "Shenmue - PNL", 
//       "descriptionMusiques": "J'apprécie beaucoup la musique Shenmue de PNL car comme dit précèdemment, je trouve toute leur discopgraphie très intéressante. De plus, cette musique me plaît particulirement car les deux frères arrivent encore une fois à apporter leur rap et leur univers sur un rythme particulier inspiré de jeux vidéo. La musique est très surprenante et est très entraînante. C'est une musique que j'écoute aussi énormément en été grâce à son rythme", 
//       "audio": "audios/shenmue.mp3", 
//       "image": "images/df.jpg", 
//       "spotifyLink": "https://open.spotify.com/intl-fr/track/5gqh2FMBquUEwDsRUU4pCF?si=8c56ba1b9bdc4c1a"
//   }
// ]


// var musiques = ["Good days", "Tango Hawaî", "Stuntmen","Die hard","Laisse", "Gogo", "Hold on, we're going home", "Shenmue"]


// var descriptionMusiques = [
//     " j'aime bien good days",
//     " j'aime bien tango",
//     " j'aime bien stuntmen",
//     " j'aime bien Die hard",
//     " j'aime bien Laisse",
//     " j'aime bien Gogo",
//     " j'aime bien Hold on, we're going Home",
//     " j'aime bien Shenmue",
  
//   ];


// var audio = [
//     { src:"sza.mp3"},
//     { src:"tango.mp3"},
//     { src:"stuntmen.mp3"},
//     { src:"diehard.mp3"},
//     { src:"laisse_2.mp3"},
//     { src:"gogo.mp3"},
//     { src:"drake.mp3"},
//     { src:"shenmue.mp3"},
// ];


// var images = [
//     { src: "szacover.jpg" },
//     { src: "tango.jpeg" },
//     { src: "stuntumen.jpg" },
//     { src: "kendrick.jpg" },
//     { src: "laisse.webp" },
//     { src: "gogo.jpeg" },
//     { src: "drake.jpg" },
//     { src: "df.jpg" },
// ];

// var linksmusic = [
//   ["https://open.spotify.com/intl-fr/track/4PMqSO5qyjpvzhlLI5GnID"],
//   ["https://open.spotify.com/intl-fr/track/4ewdVdWwzYBwEg3xnahhO8?si=8a84e16c3b6b499b"],
//   ["https://open.spotify.com/intl-fr/track/1YEs58i4G68twRzYaFEu7T?si=7e7692dce6cf4f88"],
//   ["https://open.spotify.com/intl-fr/track/2g6tReTlM2Akp41g0HaeXN?si=09ed083619cb4204"],
//   ["https://open.spotify.com/intl-fr/track/42e7c5XYbcaxWt0SfZkf3j?si=1d12b72307624860"],
//   ["https://open.spotify.com/intl-fr/track/34uOUenWb6EuRGHZM0qmFC?si=e1f914d274a14178"],
//   ["https://open.spotify.com/intl-fr/track/6jdOi5U5LBzQrc4c1VT983?si=334d6439511f4c98"],
//   ["https://open.spotify.com/intl-fr/track/5gqh2FMBquUEwDsRUU4pCF?si=8c56ba1b9bdc4c1a"],
// ];*/