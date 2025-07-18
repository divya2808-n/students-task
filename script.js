// Sidebar toggle for both buttons
const toggleButtons = document.querySelectorAll('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar-container');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
toggleButtons[0].addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});
// Toggle answer visibility on question click
document.querySelectorAll('.question-text.clickable').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer && answer.classList.contains('answer-text')) {
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    }
  });
});
