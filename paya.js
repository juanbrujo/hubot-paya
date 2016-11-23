// Description:
//   Hubot script que canta una paya, rima original de Chile :flag-cl:
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot una paya
//
// Author:
//   @csslab

one = [ "La cueca pá los chilenos",
"Si no le gustan las cuecas",
"Hoy es 18 de Septiembre",
"Yo también voy a la ramá",
"Tu creis que no se ná",
"Yo las bailo donde sea",
"No bailo tanto pero tengo otra gracia",
"Payas o brindis no importa",
"Ten cuidado con lo que dices",
"Si querÉ tiráte altiro",
"Mejor afírmate viejo feo",
"Oye huaso no te alterí",
"Mira como tirito",
"Parece que te asustaste",
"No vengai con tencas tencas",
"Ten cuidado con tus dichos",
"Brindo por la chicha",
"Yo no brindo por la empaná",
"Mi tío tomando vino",
"Me gusta que ella me mire",
"Niña si quieres casarte",
"Y si Antonio con las velas",
"Nuestra bandera es la mejor",
"Y no te olvides del escudo",
"Entonces también brindo por O`higgins",
"Yo también quiero brindar",
"Brindo dijo un curao",
"Yo no estaba con mi vecino",
"Ahora que llegá el 18",
"Yo también quiero bailar",
"Brindo dijo nuestra enfermera",
"Escucha huaso liguano",
"Ay ay ay decía un chancho",
"Tanta naranja madura",
"Brindo por la mujer,",
"Ay ay ay dijo una fea",
"El diablo murió en San Marco",
"En un guitarrón de fuego",
"Allí va la Juana Rosa",
"Sus ojos son dos luceros",
"Una viudita lloraba",
"El hombre cuando está viejo",
"En la Isla tengo un caballo",
"No te cases con una viuda",
"Estas payas amigos míos,",
"Para todos los presentes",
"Brindo por los volantines",
"Mejor seamos amigos"
]

two = [
"Es el baile nacional",
"Nunca sabrá lo que es bueno",
"Y me voy a la ramá",
"A tomar chicha y comer empaná",
"Pero estai equivocao",
"Y con cualquiera mujer",
"Que la demuestro donde vaya",
"Porque yo soy muy re aniñao",
"Porque te puede pasar la cuenta",
"Porque te estoy esperando",
"que tené tremenda guata",
"Ni levantí mucho el asta",
"Viejo chico y aniñao",
"Pero igual cuida tus pasos",
"Ni con zorzales overos",
"Huaso volantín de cuero",
"Y también por la empaná",
"Porque la cebolla está muy cara",
"Mi hermano bebida tomando",
"Por que le voy a coquetear",
"Y encontrar buen matrimonio",
"No te da novio chiquilla",
"Para ponerla en un altar",
"Que llevamos en el corazón",
"Y por don José Miguel Carrera",
"Por toda nuestra región",
"Tomándose un buen vino",
"Y por eso doy gracias a Dios",
"Que alegría y emoción",
"Así que me aflojaré la cincha",
"Por su linda profesión",
"Porque parece que no sabí na",
"Cuando lo estaban matando",
"Y tanto limón en el suelo",
"de esta tierra tan hermosa,",
"Delante de una buena moza",
"Y en la Ligua lo enterraron",
"El diablo estaba tocando",
"Luciendo su lindo cuerpo",
"Sus mejillas dos manzanas",
"La muerte de su marido",
"No toma vino toma agua",
"Y por aquí ando buscando",
"Por muy bonita que sea",
"serán las últimas de este día,",
"Yo les quiero recordar",
"Por la cueca y la empaná",
"Y no peliemos más"]

three = [
"Y no hay que tener vergüenza",
"Y a la tierra donde vaya",
"A tomarme un vaso de chicha",
"bailarme unas buenas cuecas",
"Te la bailo de varias formas",
"Sea bonita o sea fea",
"Es por eso que ahora te desafío",
"Y no vaya a ser cosita",
"No vaya ser cosita pues",
"Sea un brindi o una paya",
"no valla a ser cosa",
"Mira que con este viejito",
"Una viudita con camioneta.",
"Los huasos de aquí de La Ligua",
"Mira que a veces los viejos chicos",
"Mira que llegando a la puerta del lazo",
"Porque si no te rajai ahora",
"También brindo por esa niña",
"Pero si por esta otra niña",
"Y mi hermana mirando a este viejo",
"Y apenas este huaso se descuide",
"Préndele los días Martes",
"Acuérdate por tu abuela",
"Tiene hermosos colores",
"Ellos son nuestros emblemas patrios",
"También por Manuel Rodríguez",
"En especial por mi comuna",
"Mientras yo me entretenía",
"Por que al vecino de este",
"Bailemos una cueca",
"Porque las cuecas que yo bailo",
"No se gana mucha plata",
"Si no te gusta tu vieja",
"Y la chancha le decía",
"Tantas niñas bonitas",
"y por el tatita dios,",
"Porque a mi no me quieren",
"El entierro que le hicieron",
"Y la diabla le decía",
"Con sus curvas tan preciosas",
"Que linda ensalada de frutas",
"Pero debajo de la cama",
"Y poniéndose más viejo",
"Animal que ha sido de otro",
"espero que todos ustedes,",
"Que cuando terminen las fiestas",
"Puchas que bien la he pasao",
"Porque las fiestas se acaban"
]

four = [
"Para salirla a bailar.",
"Siempre será un mal chileno.",
"Y a comerme una empaná.",
"De esas que tu no sabí ná.",
"Que te voy a dejar picao.",
"siempre las voy a querer.",
"A echarnos una paya.",
"Que quedé avergonzado.",
"Que yo te deje en vergüenza.",
"Igual te voy a dejar tiritando.",
"que te salga el tiro por la culata.",
"Te podí pisar la huasca.",
"También somos parao.",
"Le sacamos la mugre a los huasos.",
"No hay toro mañero.",
"Te revuelco por el suelo.",
"Que está allí pará.",
"Que hace rato me mira la cara.",
"Que se está cachiporreando.",
"Me la llevaría almorzar.",
"Dos velas a San Antonio.",
"De esta hermosa maravilla.",
"Que flamean al cantar.",
"Junto a nuestra hermosa canción.",
"Y por mi linda bandera.",
"Que la llevo en mi corazón.",
"Jugando con mi vecino.",
"Dicen que se le quema el arroz.",
"con guitarra y acordeón.",
"Son de pura pata en quincha.",
"Pero se ve cada cuestión.",
"Búscate una de acá.",
"Sin tu amor me estoy quedando.",
"Y tantos huasos solteros.",
"que la hizo buena moza.",
"Teniendo las mismas cosas.",
"De las barbas lo colgaron.",
"Sigue que me está gustando.",
"que casi me caigo muerto.",
"Haríamos en la mañana.",
"Tenía al otro escondío.",
"Dicen que se le da vuelta el paragua.",
"Alguna maña le queda.",
"las hayan tomado con alegría.",
"Nos pongamos todos a trabajar.",
"Y no me he curao ná.",
"Pero nunca nuestra amistad."
]

function createPaya(prefix) {

  prefix = prefix || '';

  var _paya = new Array();

  _paya.push(prefix + one[Math.floor(Math.random() * one.length)]);
  _paya.push(prefix + two[Math.floor(Math.random() * two.length)]);
  _paya.push(prefix + three[Math.floor(Math.random() * three.length)]);
  _paya.push(prefix + four[Math.floor(Math.random() * four.length)]);

  return _paya;
}

module.exports = function(robot) {

  robot.respond(/una paya/i, function(res) {

    msg = createPaya(':musical_note: ').join('\n');
    res.send(msg);

  });
};
