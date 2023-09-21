const btn = document.getElementById('btn');
setTimeout(() => {
  btn.addEventListener('click',() => {
    const text = document.getElementById('text');

    text.textContent = 'ボタンをクリックしました';
  })
}, 2000);