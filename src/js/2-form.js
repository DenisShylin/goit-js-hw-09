const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const updateFormData = () => {
  formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const fillFormFromStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

form.addEventListener('input', e => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    updateFormData();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

fillFormFromStorage();
