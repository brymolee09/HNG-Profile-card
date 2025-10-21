const form = document.getElementById('contactForm');
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();
  success.textContent = ''; // reset message

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // clear previous errors
  document.querySelectorAll('.error').forEach(e => e.textContent = '');

  let valid = true;

  if (!name) {
    document.getElementById('error-name').textContent = 'Name is required';
    valid = false;
  }

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    document.getElementById('error-email').textContent = 'Valid email is required';
    valid = false;
  }

  if (!subject) {
    document.getElementById('error-subject').textContent = 'Subject is required';
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters';
    valid = false;
  }

  if (valid) {
    success.textContent = '✅ Thank you! Your message has been submitted successfully.';
    form.reset();
  }
});
