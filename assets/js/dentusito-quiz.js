(() => {
  const questions = [
    { question: '¿Qué trata la Ortodoncia?', options: ['Las malposiciones dentarias y la mordida', 'Solo las caries', 'Únicamente el color de los dientes'], answer: 0, note: '¡Exacto! Busca una oclusión estética, estable y funcional.' },
    { question: '¿Cuánto tiempo se usan los alineadores invisibles?', options: ['Solo para dormir', '22 horas por día', 'Una vez por semana'], answer: 1, note: '¡Muy bien! Se usan 22 horas por día y se retiran para comer e higienizarse.' },
    { question: '¿Qué permite hacer un alineador removible?', options: ['Comer y cepillarse con comodidad', 'No ir nunca a controles', 'Cambiar el color de los dientes'], answer: 0, note: '¡Correcto! Poder retirarlo ayuda a mantener una buena higiene oral.' },
    { question: '¿Qué hace la Ortopedia?', options: ['Guía el crecimiento de maxilares y mordida', 'Reemplaza todas las piezas dentarias', 'Evita cepillarse los dientes'], answer: 0, note: '¡Sí! Aprovecha el crecimiento durante la infancia en el momento indicado.' },
    { question: '¿Cuál es el primer paso de un tratamiento?', options: ['Comprar un cepillo nuevo', 'Una consulta diagnóstica', 'Elegir el color de los brackets'], answer: 1, note: '¡Exacto! Primero se evalúan crecimiento, mordida y estudios necesarios.' },
    { question: '¿Cuál es una alternativa de Ortodoncia?', options: ['Brackets metálicos', 'Alineadores invisibles', 'Las dos anteriores'], answer: 2, note: '¡Excelente! Hay varias alternativas y cada caso se planifica de forma individual.' }
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
