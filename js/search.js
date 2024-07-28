const input = document.querySelector('#search');

input.addEventListener('input', filterList);

function filterList() {
  const filter = input.value.trim().toLowerCase();
  const listItem = document.querySelectorAll('.list-card');
  
  listItem.forEach(item => {
    let text = item.textContent;
    if (text.trim().toLowerCase().includes(filter.trim().toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
