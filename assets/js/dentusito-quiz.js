(() => {
  const questions = [
    { question: '¿Quién ayuda a ordenar los dientes y la mordida?', options: ['El ortodoncista', 'El astronauta', 'El panadero'], answer: 0, note: '¡Muy bien! El ortodoncista cuida cómo crecen y se acomodan los dientes.' },
    { question: '¿Qué son los alineadores invisibles?', options: ['Placas transparentes para los dientes', 'Anteojos para mirar mejor', 'Guantes para jugar'], answer: 0, note: '¡Correcto! Son placas transparentes que ayudan a mover los dientes de a poquito.' },
    { question: '¿Qué podemos hacer al sacarnos un alineador?', options: ['Comer y cepillarnos los dientes', 'Volar como un pájaro', 'No lavarnos los dientes'], answer: 0, note: '¡Sí! Se sacan para comer y para mantener una sonrisa limpia.' },
    { question: '¿Para qué sirven algunos aparatos de ortopedia?', options: ['Para guiar el crecimiento de la mordida', 'Para convertir dientes en caramelos', 'Para pintar los dientes de azul'], answer: 0, note: '¡Excelente! Ayudan a guiar el crecimiento de los maxilares en el momento indicado.' },
    { question: '¿Qué hacemos primero antes de empezar un tratamiento?', options: ['Una consulta para revisar la sonrisa', 'Elegimos un superpoder', 'Comemos muchos dulces'], answer: 0, note: '¡Exacto! Primero el equipo revisa cómo están creciendo los dientes y la mordida.' },
    { question: '¿Qué ayuda a cuidar nuestra sonrisa todos los días?', options: ['Cepillarnos y usar hilo dental', 'Esconder el cepillo', 'Comer azúcar todo el día'], answer: 0, note: '¡Genial! Una buena higiene ayuda a mantener los dientes fuertes y sanos.' }
  ];
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
    nextButton.onclick = () => { index = 0; score = 0; nextButton.onclick = null; render(); };
  });
  render();
})();
