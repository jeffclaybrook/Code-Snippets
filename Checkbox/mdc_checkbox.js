const checkbox = document.querySelectorAll('.mdc-checkbox');
const formField = document.querySelectorAll('.mdc-form-field');
formField.input = checkbox;

mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));