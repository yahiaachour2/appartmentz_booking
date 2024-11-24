const scrollable = document.querySelector('.lisiting-content');

function scrollToLeft() {
  scrollable.scrollBy({
    left: -300, 
    behavior: 'smooth'
  });
}

function scrollToRight() {
  scrollable.scrollBy({
    left: 300, 
    behavior: 'smooth'
  });
}

document.getElementById('prevBtn').addEventListener('click', scrollToLeft);
document.getElementById('nextBtn').addEventListener('click', scrollToRight);