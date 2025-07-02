// Vågande grafkurva animation i loggan

const path = document.getElementById('wavePath');

const points = [
  { x: 40, baseY: 180, amplitude: 15, phase: 0 },
  { x: 80, baseY: 100, amplitude: 20, phase: Math.PI / 2 },
  { x: 120, baseY: 140, amplitude: 10, phase: Math.PI },
  { x: 160, baseY: 120, amplitude: 15, phase: 3 * Math.PI / 2 },
  { x: 200, baseY: 130, amplitude: 18, phase: 0 }
];

let startTime = null;

function animate(time) {
  if (!startTime) startTime = time;
  const elapsed = (time - startTime) / 1000; // sekunder

  const coords = points.map(p => ({
    x: p.x,
    y: p.baseY + p.amplitude * Math.sin(elapsed * 2 * Math.PI + p.phase)
  }));

  let d = `M ${coords[0].x} ${coords[0].y} `;

  for (let i = 1; i < coords.length; i++) {
    const cx = (coords[i - 1].x + coords[i].x) / 2;
    const cy = (coords[i - 1].y + coords[i].y) / 2;
    d += `Q ${coords[i - 1].x} ${coords[i - 1].y} ${cx} ${cy} `;
  }

  d += `T ${coords[coords.length - 1].x} ${coords[coords.length - 1].y}`;

  path.setAttribute('d', d);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
