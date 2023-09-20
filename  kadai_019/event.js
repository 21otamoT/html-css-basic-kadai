const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const h2 = document.getElementById('text');

  h2.textContent = 'ボタンをクリックしました';

  document.querySelector('h2').appendChild(h2);
});