const formData = { email: '', message: '' };

const form = document.getElementById('feedback-form');

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Trim whitespace
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormFromStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

window.addEventListener('DOMContentLoaded', populateFormFromStorage);
