setInterval(() => {
  const heart = document.createElement('div');
  heart.innerText = '💓';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.fontSize = '24px';
  heart.style.animation = 'rise 4s linear';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);

const style = document.createElement('style');
style.innerHTML = `
@keyframes rise {
  from { transform: translateY(0); opacity:1; }
  to { transform: translateY(-120vh); opacity:0; }
}`;
document.head.appendChild(style);
