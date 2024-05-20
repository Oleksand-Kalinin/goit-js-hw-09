const btnGoBackEl = document.querySelector('.btn-go-back');
btnGoBackEl.addEventListener('click', () => window.location.href = './index.html');

const formFeedBackEl = document.querySelector('.feedback-form');
const emailEl = formFeedBackEl.elements.email;
const messageEl = formFeedBackEl.elements.message;

const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
emailEl.value = feedbackFormState.email ?? '';
messageEl.value = feedbackFormState.message ?? '';

const formData = {
    email: emailEl.value ?? '',
    message: messageEl.value ?? '',
}


formFeedBackEl.addEventListener('input', (ev) => {
    if (ev.target.name === 'email')
        formData.email = ev.target.value;
    if (ev.target.name === 'message')
        formData.message = ev.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formFeedBackEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    localStorage.removeItem('feedback-form-state');
    formFeedBackEl.reset();
});