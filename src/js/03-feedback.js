import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');
const LOCALST_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(LOCALST_KEY, JSON.stringify(state));
  }, 500)
);

const savedState = JSON.parse(localStorage.getItem(LOCALST_KEY));
if (savedState) {
  emailInput.value = savedState.email;
  messageInput.value = savedState.message;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  localStorage.removeItem(LOCALST_KEY);
  emailInput.value = '';
  messageInput.value = '';
});
