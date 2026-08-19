(() => {
  const questionBank = [
    { question: '¿Quién ayuda a ordenar los dientes y la mordida?', options: ['El ortodoncista', 'El astronauta', 'El panadero'], answer: 0, note: '¡Muy bien! El ortodoncista cuida cómo crecen y se acomodan los dientes.' },
    { question: '¿Qué son los alineadores invisibles?', options: ['Placas transparentes para los dientes', 'Anteojos para mirar mejor', 'Guantes para jugar'], answer: 0, note: '¡Correcto! Son placas transparentes que ayudan a mover los dientes de a poquito.' },
    { question: '¿Qué podemos hacer al sacarnos un alineador?', options: ['Comer y cepillarnos los dientes', 'Volar como un pájaro', 'No lavarnos los dientes'], answer: 0, note: '¡Sí! Se sacan para comer y para mantener una sonrisa limpia.' },
    { question: '¿Para qué sirven algunos aparatos de ortopedia?', options: ['Para guiar el crecimiento de la mordida', 'Para convertir dientes en caramelos', 'Para pintar los dientes de azul'], answer: 0, note: '¡Excelente! Ayudan a guiar el crecimiento de los maxilares en el momento indicado.' },
    { question: '¿Qué hacemos primero antes de empezar un tratamiento?', options: ['Una consulta para revisar la sonrisa', 'Elegimos un superpoder', 'Comemos muchos dulces'], answer: 0, note: '¡Exacto! Primero el equipo revisa cómo están creciendo los dientes y la mordida.' },
    { question: '¿Qué ayuda a cuidar nuestra sonrisa todos los días?', options: ['Cepillarnos y usar hilo dental', 'Esconder el cepillo', 'Comer azúcar todo el día'], answer: 0, note: '¡Genial! Una buena higiene ayuda a mantener los dientes fuertes y sanos.' },
    { question: '¿Cuántas veces por día conviene cepillarse los dientes?', options: ['Cuando me acuerdo una vez por semana', 'Al menos dos veces', 'Nunca'], answer: 1, note: '¡Eso es! Cepillarse por la mañana y antes de dormir ayuda muchísimo.' },
    { question: '¿Qué usamos junto al cepillo para limpiar entre los dientes?', options: ['Hilo dental', 'Un lápiz', 'Una cuchara'], answer: 0, note: '¡Excelente! El hilo dental llega a lugares donde el cepillo no puede entrar.' },
    { question: '¿Para qué sirve una visita al odontólogo?', options: ['Para revisar y cuidar la sonrisa', 'Para aprender a pilotear un avión', 'Para elegir una película'], answer: 0, note: '¡Sí! Las visitas ayudan a que la sonrisa crezca fuerte y sana.' },
    { question: '¿Qué bebida es amiga de tus dientes cuando tenés sed?', options: ['Gaseosa todo el día', 'Agua', 'Pintura azul'], answer: 1, note: '¡Bien! El agua es una gran compañera para cuidar los dientes.' },
    { question: '¿Qué debemos hacer después de comer muchos dulces?', options: ['Irnos a dormir sin lavarnos', 'Cepillarnos los dientes', 'Esconder el cepillo'], answer: 1, note: '¡Correcto! Así no dejamos restos de azúcar en los dientes.' },
    { question: '¿Cómo son los alineadores invisibles?', options: ['Transparentes y removibles', 'De lana y con botones', 'Como una pelota gigante'], answer: 0, note: '¡Muy bien! Son placas transparentes que se pueden sacar para comer y lavarse los dientes.' },
    { question: '¿Qué se revisa en una consulta de ortodoncia?', options: ['La mordida y cómo crecen los dientes', 'El color de las zapatillas', 'Los deberes de la escuela'], answer: 0, note: '¡Exacto! Cada sonrisa crece de una manera y se revisa con cuidado.' },
    { question: '¿Cuál de estas cosas NO debemos usar para abrir una golosina?', options: ['Las manos', 'Los dientes', 'Una tijera con ayuda de un adulto'], answer: 1, note: '¡Eso! Los dientes son para sonreír y masticar, no para abrir cosas duras.' },
    { question: '¿Qué hacemos si se nos mueve un diente de leche?', options: ['Le contamos a un adulto', 'Lo pintamos con marcador', 'Nos asustamos y no decimos nada'], answer: 0, note: '¡Bien! Un adulto puede acompañarte y decirte qué hacer.' },
    { question: '¿Qué alimento puede ayudar a una sonrisa fuerte?', options: ['Frutas y comidas variadas', 'Solo caramelos', 'Papelitos de colores'], answer: 0, note: '¡Genial! Comer variado también ayuda a cuidar el cuerpo y los dientes.' },
    { question: '¿Cuál es una buena idea mientras usamos brackets?', options: ['Mantener una buena higiene', 'No cepillarnos nunca', 'Morder hielo'], answer: 0, note: '¡Muy bien! Con brackets, cepillarse con cuidado es todavía más importante.' },
    { question: '¿Qué hace Dentusito cuando termina de cepillarse?', options: ['Guarda el cepillo limpio', 'Lo usa para peinar al gato', 'Lo esconde debajo de la cama'], answer: 0, note: '¡Sí! Un cepillo limpio queda listo para la próxima aventura.' },
    { question: '¿Cuánto tiempo puede durar un buen cepillado?', options: ['Un ratito, unos dos minutos', 'Un segundo', 'Toda la tarde'], answer: 0, note: '¡Muy bien! Dos minutos ayudan a llegar a todos los dientes.' },
    { question: '¿Qué tiene que ser suave para cuidar las encías?', options: ['El cepillo de dientes', 'Una piedra', 'Un martillo'], answer: 0, note: '¡Correcto! Un cepillo suave cuida dientes y encías.' },
    { question: '¿Qué parte de la boca también podemos cepillar con suavidad?', options: ['La lengua', 'La oreja', 'La rodilla'], answer: 0, note: '¡Sí! Cepillar la lengua con suavidad ayuda a mantener la boca fresca.' },
    { question: '¿Cuándo es muy importante cepillarse los dientes?', options: ['Antes de dormir', 'Mientras nadamos', 'En medio de una película'], answer: 0, note: '¡Genial! Antes de dormir no dejamos restos de comida en la boca.' },
    { question: '¿Qué hacemos con el cepillo cuando ya está muy gastado?', options: ['Lo cambiamos con ayuda de un adulto', 'Lo usamos de escoba', 'Lo guardamos para siempre'], answer: 0, note: '¡Exacto! Un cepillo en buen estado limpia mejor.' },
    { question: '¿Qué hace una sonrisa cuando estamos contentos?', options: ['Se comparte', 'Se esconde debajo de una mesa', 'Se convierte en una bicicleta'], answer: 0, note: '¡Eso! Una sonrisa puede alegrarle el día a alguien.' },
    { question: '¿Qué conviene hacer si nos duele un diente?', options: ['Contarle a un adulto y consultar', 'Ignorarlo por muchos días', 'Ponerle una calcomanía'], answer: 0, note: '¡Muy bien! Un adulto y el odontólogo pueden ayudarnos.' },
    { question: '¿Para qué usamos los dientes de adelante?', options: ['Para cortar alimentos', 'Para escuchar música', 'Para atarnos los cordones'], answer: 0, note: '¡Correcto! Los dientes de adelante ayudan a dar pequeños mordiscos.' },
    { question: '¿Para qué sirven las muelas?', options: ['Para triturar la comida', 'Para mirar la tele', 'Para aplaudir'], answer: 0, note: '¡Excelente! Las muelas trabajan como pequeñas trituradoras.' },
    { question: '¿Qué es una mordida?', options: ['Cómo se juntan los dientes de arriba y abajo', 'Un sombrero', 'Una canción'], answer: 0, note: '¡Sí! El equipo revisa cómo se juntan los dientes al cerrar la boca.' },
    { question: '¿Qué hace el ortodoncista antes de indicar un tratamiento?', options: ['Revisa cada sonrisa con atención', 'Adivina con una bola mágica', 'Elige al azar'], answer: 0, note: '¡Muy bien! Cada sonrisa es distinta y necesita un plan propio.' },
    { question: '¿Qué usamos para mirar los dientes sin las impresiones de antes?', options: ['Un escáner digital', 'Un telescopio', 'Un control remoto'], answer: 0, note: '¡Correcto! El escaneado digital es cómodo y preciso.' },
    { question: '¿Cómo se mueven los dientes con alineadores?', options: ['De a poquito y según el plan', 'Todos de golpe', 'Saltando como ranas'], answer: 0, note: '¡Sí! Los movimientos son graduales y planificados.' },
    { question: '¿Qué hacemos con los alineadores al comer?', options: ['Los sacamos y guardamos bien', 'Los usamos como juguete', 'Los dejamos sobre la mesa sin cuidado'], answer: 0, note: '¡Exacto! Se sacan para comer y se guardan en su estuche.' },
    { question: '¿Qué ayuda a que un tratamiento de ortodoncia funcione bien?', options: ['Seguir las indicaciones y asistir a controles', 'Olvidarse de todo', 'Esconder los aparatos'], answer: 0, note: '¡Muy bien! Los controles acompañan cada paso del tratamiento.' },
    { question: '¿Qué puede usar un niño o niña en ortopedia, según su caso?', options: ['Un aparato o alineadores', 'Una capa de superhéroe', 'Un casco de astronauta'], answer: 0, note: '¡Sí! El equipo decide qué alternativa acompaña mejor cada crecimiento.' },
    { question: '¿Por qué se revisa el crecimiento de los maxilares?', options: ['Para guiar la mordida en el momento adecuado', 'Para elegir un color de mochila', 'Para saber si lloverá'], answer: 0, note: '¡Excelente! La ortopedia aprovecha el crecimiento para acompañar la mordida.' },
    { question: '¿A quién le podemos pedir ayuda para usar hilo dental?', options: ['A un adulto', 'A un pez', 'A un almohadón'], answer: 0, note: '¡Bien! Un adulto puede ayudar hasta que aprendamos a usarlo solos.' },
    { question: '¿Qué hacemos después de tomar una bebida azucarada?', options: ['Tomamos agua y seguimos con nuestra higiene', 'No hacemos nada nunca', 'Nos cepillamos el pelo'], answer: 0, note: '¡Eso! El agua y una buena rutina ayudan a cuidar la sonrisa.' },
    { question: '¿Qué elección es mejor para una merienda amiga de los dientes?', options: ['Fruta y agua', 'Caramelos todo el día', 'Papel de regalo'], answer: 0, note: '¡Muy bien! Una merienda variada ayuda a cuidar el cuerpo y los dientes.' },
    { question: '¿Qué podemos hacer si tenemos brackets después de comer?', options: ['Revisar y cepillar con cuidado', 'Morder un cubito de hielo', 'No mirar los dientes'], answer: 0, note: '¡Correcto! Con brackets es importante limpiar bien alrededor de cada pieza.' },
    { question: '¿Qué podemos decirle a Dentusito antes de una consulta?', options: ['Voy tranquilo, me van a explicar todo', 'No quiero saber nada', 'Voy a llevar una escalera'], answer: 0, note: '¡Genial! En una consulta podés preguntar todo lo que necesites.' },
    { question: '¿Qué hacemos si se nos sale un bracket o se rompe un aparato?', options: ['Avisamos al consultorio', 'Lo pegamos con cualquier cosa', 'Lo tiramos a la basura sin avisar'], answer: 0, note: '¡Muy bien! El equipo indica qué hacer en cada caso.' },
    { question: '¿Qué debemos evitar morder si usamos brackets?', options: ['Cosas muy duras', 'Una banana madura', 'Un sándwich cortado'], answer: 0, note: '¡Sí! Evitar cosas muy duras ayuda a cuidar los brackets.' },
    { question: '¿Qué color suelen tener los alineadores invisibles?', options: ['Transparentes', 'Violeta con lunares', 'Negros como una pizarra'], answer: 0, note: '¡Correcto! Por eso se llaman invisibles: son transparentes.' },
    { question: '¿Qué hace un retenedor cuando termina la ortodoncia?', options: ['Ayuda a mantener los dientes en su lugar', 'Cocina la cena', 'Lava la ropa'], answer: 0, note: '¡Excelente! El retenedor ayuda a cuidar el resultado logrado.' },
    { question: '¿Qué tenemos que llevar a una consulta si tenemos dudas?', options: ['Todas nuestras preguntas', 'Una pelota gigante', 'Un paracaídas'], answer: 0, note: '¡Eso! Preguntar es una muy buena forma de aprender.' },
    { question: '¿Qué pasa si una sonrisa necesita ayuda?', options: ['Se puede planificar un tratamiento', 'No se puede hacer nada', 'Se transforma en robot'], answer: 0, note: '¡Muy bien! El equipo estudia cada caso y propone alternativas.' },
    { question: '¿Qué hace Dentusito con su turno?', options: ['Llega con ganas de aprender', 'Lo cambia por un helado', 'Lo esconde en una cueva'], answer: 0, note: '¡Genial! Las consultas son una oportunidad para cuidar la sonrisa.' },
    { question: '¿Qué debemos hacer antes de volver a ponernos un alineador después de comer?', options: ['Cepillarnos los dientes', 'Pintarnos la cara', 'Ponernos una gorra'], answer: 0, note: '¡Correcto! Los dientes limpios ayudan a cuidar el tratamiento.' },
    { question: '¿Cuál es una buena manera de aprender sobre los dientes?', options: ['Hacer preguntas y jugar la trivia', 'No escuchar nunca', 'Esconder los libros'], answer: 0, note: '¡Sí! Aprender jugando hace que cuidar la sonrisa sea más divertido.' },
    { question: '¿Qué visita ayuda a revisar cómo va creciendo la sonrisa?', options: ['Una consulta odontológica', 'Una visita al supermercado', 'Una carrera de bicicletas'], answer: 0, note: '¡Muy bien! Los controles permiten acompañar el crecimiento.' },
    { question: '¿Qué podemos hacer si el cepillado nos cuesta?', options: ['Pedir ayuda y practicar', 'Rendirnos para siempre', 'Usar un tenedor'], answer: 0, note: '¡Eso! Con práctica y ayuda, cada vez sale mejor.' },
    { question: '¿Qué es bueno hacer con el estuche de los alineadores?', options: ['Tenerlo siempre a mano', 'Usarlo de maceta', 'Esconderlo en la heladera'], answer: 0, note: '¡Correcto! El estuche ayuda a no perder los alineadores.' },
    { question: '¿Qué nos ayuda a recordar el cepillado de la noche?', options: ['Tener una rutina', 'Esperar a que lo recuerde un dragón', 'Apagar todas las luces temprano'], answer: 0, note: '¡Genial! Una rutina hace más fácil cuidar la sonrisa todos los días.' },
    { question: '¿Qué podemos hacer antes de un turno si estamos nerviosos?', options: ['Hablarlo con un adulto', 'Quedarnos callados sin contar nada', 'Escapar en monopatín'], answer: 0, note: '¡Muy bien! Contar cómo nos sentimos ayuda a ir más tranquilos.' },
    { question: '¿Qué cuida también una sonrisa saludable?', options: ['Las encías', 'Solo las uñas', 'Los cordones de las zapatillas'], answer: 0, note: '¡Sí! Dientes y encías trabajan juntos para una gran sonrisa.' },
    { question: '¿Qué hace una buena higiene oral?', options: ['Ayuda a mantener la boca limpia y sana', 'Cambia el color del cielo', 'Hace crecer alas'], answer: 0, note: '¡Exacto! Cepillo, pasta e hilo dental son grandes aliados.' },
    { question: '¿Qué le diría Dentusito a tu sonrisa?', options: ['¡Cuidarte todos los días es una gran aventura!', 'No hace falta cuidarte', 'Solo sonreí una vez al año'], answer: 0, note: '¡Bravo! Los pequeños hábitos hacen una gran diferencia.' }
  ];
  const chooseQuestions = () => [...questionBank].sort(() => Math.random() - 0.5).slice(0, 7);
  let questions = chooseQuestions();
  const stepNode = document.querySelector('#quiz-step');
  const scoreNode = document.querySelector('#quiz-score');
  const barNode = document.querySelector('#quiz-bar-fill');
  const questionNode = document.querySelector('#quiz-question');
  const optionsNode = document.querySelector('#quiz-options');
  const feedbackNode = document.querySelector('#quiz-feedback');
  const nextButton = document.querySelector('#quiz-next');
  if (!stepNode || !scoreNode || !barNode || !questionNode || !optionsNode || !feedbackNode || !nextButton) return;
  let index = 0;
  let score = 0;
  let answered = false;

  const render = () => {
    const item = questions[index];
    answered = false;
    stepNode.textContent = `Pregunta ${index + 1} de ${questions.length}`;
    scoreNode.textContent = `${score} puntos`;
    barNode.style.width = `${(index / questions.length) * 100}%`;
    questionNode.textContent = item.question;
    feedbackNode.textContent = '';
    feedbackNode.className = 'quiz-feedback';
    nextButton.disabled = true;
    nextButton.innerHTML = index === questions.length - 1 ? 'Ver resultado <i class="bi bi-arrow-right"></i>' : 'Siguiente <i class="bi bi-arrow-right"></i>';
    optionsNode.innerHTML = '';
    item.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = option;
      button.addEventListener('click', () => answer(optionIndex, button));
      optionsNode.append(button);
    });
  };

  const answer = (choice, selected) => {
    if (answered) return;
    answered = true;
    const item = questions[index];
    const correct = choice === item.answer;
    [...optionsNode.children].forEach((button, optionIndex) => {
      button.disabled = true;
      if (optionIndex === item.answer) button.classList.add('is-correct');
    });
    if (!correct) selected.classList.add('is-wrong');
    if (correct) score += 1;
    scoreNode.textContent = `${score} puntos`;
    feedbackNode.textContent = correct ? item.note : `Casi. ${item.note}`;
    feedbackNode.classList.add(correct ? 'is-correct' : 'is-wrong');
    nextButton.disabled = false;
  };

  nextButton.addEventListener('click', () => {
    if (!answered) return;
    if (index < questions.length - 1) { index += 1; render(); return; }
    questionNode.textContent = score >= 5 ? '¡Sos un experto en sonrisas!' : '¡Muy bien jugado!';
    optionsNode.innerHTML = '';
    feedbackNode.textContent = `Terminaste con ${score} de ${questions.length} respuestas correctas. ¡Dentusito te felicita!`;
    feedbackNode.className = 'quiz-feedback is-correct';
    barNode.style.width = '100%';
    nextButton.innerHTML = 'Jugar otra vez <i class="bi bi-arrow-clockwise"></i>';
    nextButton.disabled = false;
    nextButton.onclick = () => { index = 0; score = 0; questions = chooseQuestions(); nextButton.onclick = null; render(); };
  });
  render();
})();
