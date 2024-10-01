const form = document.querySelector('.form-conatiner')
const allToasts = document.querySelector('.all-toasts')
const horizontalPosition = document.querySelector('#rl')
const verticalPosition = document.querySelector('#tb')
const inputMsg = document.querySelector('#input-message')
const popupType = document.querySelector('#messages')
const duration = document.querySelector('#duration')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let popUp = document.createElement('div')
    popUp.classList.add('pop-up')
    popUp.classList.add('right-popup-animation')
    popUp.innerText = inputMsg.value
    allToasts.append(popUp)
    if (horizontalPosition.value === 'left') {
        popUp.classList.remove('right-popup-animation')
        popUp.classList.add('left-popup-animation')
    }

    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.innerText = '✕'
    popUp.append(removeBtn)

    typeOfToasts(popUp, popupType)
    toastDirection()

    removeBtn.addEventListener('click', () => {
        removeToast(popUp)
    })

    setTimeout(() => {
        removeToast(popUp)
    }, parseInt(duration.value) * 100);
})

function toastDirection() {
    if (horizontalPosition.value === 'right') {
        allToasts.classList.add('right')
    } else {
        allToasts.classList.remove('right')
    }
    if (verticalPosition.value === 'top') {
        allToasts.classList.add('top')
    } else {
        allToasts.classList.remove('top')
    }
}

function typeOfToasts(popup, popType) {
    if (popType.value === 'warning') {
        popup.classList.add('warning')
    } else if (popType.value === 'success') {
        popup.classList.add('success')
    } else if (popType.value === 'error') {
        popup.classList.add('error')
    } else {
        popup.classList.add('info')
    }
}

function removeToast(toast) {
    if (horizontalPosition.value === 'left') {
        toast.classList.add('remove-left-animation')
    } else {
        toast.classList.add('remove-right-animation')
    }
    setTimeout(() => {
        toast.remove()
    }, 250);
}