window.addEventListener("DOMContentLoaded", (event) => {


  //.form__input

  const titleInput = document.getElementById('title')
  const fNameInput = document.getElementById('first-name')
  const lNameInput = document.getElementById('last-name')
  const eyeColorInput = document.getElementById('eye-color')
  const heightInput = document.getElementById('height')
  const licenseNumInput = document.getElementById('license-num')
  const licenseNumConfirmInput = document.getElementById('license-num-confirm')
  const donorStatusInput = document.getElementById('donor-status')

  donorStatusInput.addEventListener('click', () => {
    if (donorStatusInput.value === 'checked') {
      donorStatusInput.value = 'uncheck';
      console.log('uncheck');
    } else {
      donorStatusInput.value = 'checked';
      console.log('check');
    }
  })

  const inputArr = [titleInput, fNameInput, lNameInput, eyeColorInput, heightInput, licenseNumInput, licenseNumConfirmInput]

  //possible refractor: use queryselectorall for class form__input to get these elements



  // ** Phase 1B: Update license with event delegation and event.target **


  const submitBtn = document.querySelector('.form__submit')

  let submitBtnCount = 0;

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitBtnCount++;
    submitBtn.innerHTML = `Submit x${submitBtnCount}`;

    if (licenseNumConfirmInput.value !== licenseNumInput.value) {
      alert('your license does not match')
    }


    const donorStatusConfirm = document.querySelector('.card-donor-status')
    const licenseInfo = document.querySelectorAll('.license__info')

    licenseInfo.forEach((ele, i) => {
      ele.innerHTML = inputArr[i].value;
      if (i === 6) {
        if (donorStatusInput.value === 'checked') {
          ele.innerHTML = 'yaaaas'
        } else {
          ele.innerHTML = 'nahhhh'
        }
      }
    });
  })

  const allFormInput = document.querySelectorAll('.form__input')

  allFormInput.forEach(el => {

    el.addEventListener('focus', (event) => {
      event.target.style.backgroundColor = 'lightgreen'
    })

    el.addEventListener('blur', (event) => {
      event.target.style.backgroundColor = ''
    })
  })

});
