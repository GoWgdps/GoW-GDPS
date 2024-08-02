const idBox = document.querySelector('.lvl-info__id-box');
const idText = document.querySelector('.lvl-info__id-box p').innerText;
const clipboardText = document.querySelector('.clipboard-text');

idBox.addEventListener('click', function() {
  navigator.clipboard.writeText(idText);
  
  clipboardText.classList.add('active-clipboard');
  
  setTimeout(function(){
      clipboardText.classList.remove('active-clipboard');
  }, 1000);
});
