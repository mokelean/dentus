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
    { question: '¿Qué hace Dentusito cuando termina de cepillarse?', options: ['Guarda el cepillo limpio', 'Lo usa para peinar al gato', 'Lo esconde debajo de la cama'], answer: 0, note: '¡Sí! Un cepillo limpio queda listo para la próxima aventura.' }
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
