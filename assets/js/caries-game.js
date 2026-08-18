(() => {
  const canvas = document.querySelector('#caries-game');
  const scoreNode = document.querySelector('#game-score');
  const messageNode = document.querySelector('#game-message');
  const restartButton = document.querySelector('#game-restart');
  if (!canvas || !scoreNode || !messageNode || !restartButton) return;

  const context = canvas.getContext('2d');
  const keys = new Set();
  const player = { x: 62, y: 180, radius: 20, speed: 3.2, angle: 0 };
  let teeth = [];
  let score = 0;
  let completed = false;
  let touchTarget = null;

  const createTeeth = () => Array.from({ length: 12 }, (_, index) => ({
    x: 130 + ((index * 151) % 500),
    y: 48 + ((index * 97) % 260),
    size: 28
  }));

  const reset = () => {
    player.x = 62;
    player.y = 180;
    player.angle = 0;
    teeth = createTeeth();
    score = 0;
    completed = false;
    touchTarget = null;
    scoreNode.textContent = score;
    messageNode.textContent = 'Tocá el tablero para mover a Dentusito o usá las flechas.';
    canvas.focus();
  };

  const move = () => {
    if (completed) return;
    let horizontal = 0;
    let vertical = 0;
    if (touchTarget) {
      horizontal = touchTarget.x - player.x;
      vertical = touchTarget.y - player.y;
      if (Math.hypot(horizontal, vertical) < 5) touchTarget = null;
    } else {
      if (keys.has('ArrowLeft') || keys.has('a')) horizontal -= 1;
      if (keys.has('ArrowRight') || keys.has('d')) horizontal += 1;
      if (keys.has('ArrowUp') || keys.has('w')) vertical -= 1;
      if (keys.has('ArrowDown') || keys.has('s')) vertical += 1;
    }
    if (horizontal || vertical) {
      const length = Math.hypot(horizontal, vertical);
      const speed = touchTarget ? player.speed * 1.6 : player.speed;
      player.x += (horizontal / length) * speed;
      player.y += (vertical / length) * speed;
      player.angle = Math.atan2(vertical, horizontal);
    }
    player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(canvas.height - player.radius, player.y));
    teeth = teeth.filter(tooth => {
      const collected = Math.hypot(player.x - tooth.x, player.y - tooth.y) < player.radius + tooth.size * .45;
      if (collected) {
        score += 1;
        scoreNode.textContent = score;
      }
      return !collected;
    });
    if (!teeth.length) {
      completed = true;
      messageNode.textContent = '¡Ganaste! Dentusito juntó todas las muelas.';
    }
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#113f40';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'rgba(164, 224, 217, .12)';
    context.lineWidth = 1;
    for (let x = 20; x < canvas.width; x += 40) { context.beginPath(); context.moveTo(x, 0); context.lineTo(x, canvas.height); context.stroke(); }
    for (let y = 20; y < canvas.height; y += 40) { context.beginPath(); context.moveTo(0, y); context.lineTo(canvas.width, y); context.stroke(); }
    teeth.forEach(tooth => {
      context.font = `${tooth.size}px sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('🦷', tooth.x, tooth.y);
    });
    context.save();
    context.translate(player.x, player.y);
    context.rotate(player.angle);
    context.fillStyle = '#d44b54';
    context.beginPath();
    context.arc(0, 0, player.radius, .42, Math.PI * 2 - .42);
    context.lineTo(0, 0);
    context.closePath();
    context.fill();
    context.fillStyle = '#fff';
    context.beginPath();
    context.arc(4, -9, 3, 0, Math.PI * 2);
    context.fill();
    context.restore();
    if (completed) {
      context.fillStyle = 'rgba(6, 29, 29, .72)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#a5e0d9';
      context.font = '700 30px Questrial, sans-serif';
      context.textAlign = 'center';
      context.fillText('¡Nivel completado!', canvas.width / 2, canvas.height / 2);
    }
  };

  const loop = () => { move(); draw(); requestAnimationFrame(loop); };
  document.addEventListener('keydown', event => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'a', 'd', 'w', 's'].includes(event.key)) {
      keys.add(event.key);
      if (document.activeElement === canvas) event.preventDefault();
    }
  });
  document.addEventListener('keyup', event => keys.delete(event.key));
  const setTouchTarget = event => {
    const bounds = canvas.getBoundingClientRect();
    touchTarget = {
      x: (event.clientX - bounds.left) * (canvas.width / bounds.width),
      y: (event.clientY - bounds.top) * (canvas.height / bounds.height)
    };
    keys.clear();
    canvas.focus();
  };
  canvas.addEventListener('pointerdown', event => { event.preventDefault(); setTouchTarget(event); });
  canvas.addEventListener('pointermove', event => { if (event.buttons === 1) setTouchTarget(event); });
  restartButton.addEventListener('click', reset);
  document.querySelectorAll('[data-move]').forEach(button => {
    const direction = button.dataset.move;
    button.addEventListener('pointerdown', event => { event.preventDefault(); touchTarget = null; keys.add(direction); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(type => button.addEventListener(type, () => keys.delete(direction)));
  });
  reset();
  loop();
})();
