// header-modal//
const buttons = document.querySelectorAll('.modal_btn')

const modals = document.querySelectorAll('.popup')

const closeButtons = document.querySelectorAll('.popup-close__btn')


closeButtons.forEach(buttonClose => {
    buttonClose.addEventListener('click', closeModal, false)
})

buttons.forEach(button => {
    button.addEventListener('click', openModal, false)
})

    

function openModal(event) {
    modals.forEach(item => {
        if (event.target.dataset.button === item.dataset.modal) {
            item.classList.add('open')
        }
    })
}

function closeModal(e) {
    e.target.closest('.popup').classList.remove('open')
}

let mainModals = document.querySelectorAll('.main-modals');

mainModals.forEach((modals) => {
    modals.addEventListener('click', mainModalsClose);
})

function mainModalsClose(e) {
    let target = e.target;
    if (target) {
        target.classList.remove('open')
    }    
}
// header-modal//

// header select2 //

$(document).ready(function() {
    $('.first-header__currency').select2({
        placeholder: "eur",
        allowClear: false,
        dropdownCssClass: 'currency-list',
        minimumResultsForSearch: Infinity,
    })
});

$(document).ready(function() {
    $('.second-header__currency').select2({
        placeholder: "usd",
        allowClear: false,
        dropdownCssClass: 'currency-list',
        minimumResultsForSearch: Infinity,
    })
});

// header select2 //

// select2 section rent //
$(document).ready(function() {
    $('.first').select2({
        placeholder: "Ваш город",
        allowClear: false,
        dropdownCssClass: 'rent-select',
        minimumResultsForSearch: Infinity,
    })
});
$(document).ready(function() {
    $('.second').select2({
        placeholder: "Место подачи",
        allowClear: false,
        dropdownCssClass: 'rent-select',
        minimumResultsForSearch: Infinity,
    })
});
$(document).ready(function() {
    $('.three').select2({
        placeholder: "Пассажиров",
        allowClear: false,
        dropdownCssClass: 'rent-select',
        minimumResultsForSearch: Infinity,
    })
});
$(document).ready(function() {
    $('.four').select2({
        placeholder: "Водитель",
        allowClear: false,
        dropdownCssClass: 'rent-select',
        minimumResultsForSearch: Infinity,
    })
});
// select2 section rent //

// datetimepicker //
jQuery.datetimepicker.setLocale('ru');

jQuery('#datetimepicker-main-first').datetimepicker({
    i18n: {
        de: {
            months: [
                'Januar', 'Februar', 'März', 'April',
                'Mai', 'Juni', 'Juli', 'August',
                'September', 'Oktober', 'November', 'Dezember',
            ],
            dayOfWeek: [
                "So.", "Mo", "Di", "Mi",
                "Do", "Fr", "Sa.",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y',
    minDate: '-1970/01/02',
    maxDate: '+1970/01/02'
});
jQuery('#datetimepicker-main-second').datetimepicker({
    i18n: {
        de: {
            months: [
                'Januar', 'Februar', 'März', 'April',
                'Mai', 'Juni', 'Juli', 'August',
                'September', 'Oktober', 'November', 'Dezember',
            ],
            dayOfWeek: [
                "So.", "Mo", "Di", "Mi",
                "Do", "Fr", "Sa.",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y',
    minDate: '-1970/01/02',
    maxDate: '+1970/01/02'
});
jQuery('#datetimepicker-time-first').datetimepicker({
    datepicker: false,
    format: 'H:i'
});
jQuery('#datetimepicker-time-second').datetimepicker({
    datepicker: false,
    format: 'H:i'
});
// datetimepicker //


// rent-section modal //
const basicModal = document.querySelectorAll('.modal');

const openModalsButton = document.querySelectorAll('.modal-open__btn');

const closeModalsButton = document.querySelectorAll('.modal-close__btn');

openModalsButton.forEach((open) => {
    open.addEventListener('click', basicModalOpen);
})

closeModalsButton.forEach((close) => {
    close.addEventListener('click', basicModalClose);
})

function basicModalOpen() {
    basicModal.forEach((modal) => {
        modal.classList.add('modals-open')
    })
}

function basicModalClose() {
    basicModal.forEach((modal) => {
        modal.classList.remove('modals-open')
    })
}

const basicModals = document.querySelectorAll('.main-modals');

basicModals.forEach((basicModalClose) => {
    basicModalClose.addEventListener('click', basicModalClosest);
})

function basicModalClosest(e) {
    let target = e.target;
    if (target) {
        target.classList.remove('modals-open')
    }    
}
// rent-section modal //

// rent-form__tabs //
const buttonTabs = document.querySelectorAll('.main-form__tabs');
const tabsInfo = document.querySelectorAll('.form-tabs__wrapper');

buttonTabs.forEach((tabs) => {
    tabs.addEventListener('click', () => {
        let currentButton = tabs;

        let dataTabs = currentButton.getAttribute('data-tabs');

        let activeTabs = document.querySelector(dataTabs);

        if ( ! tabs.classList.contains('tabs-active')) {

            buttonTabs.forEach((tabs) => {
                tabs.classList.remove('tabs-active');
            });
    
            tabsInfo.forEach((infoTabs) => {
                infoTabs.classList.remove('tabs-wrapper__active');
            });
            
            currentButton.classList.add('tabs-active');
            activeTabs.classList.add('tabs-wrapper__active');
        } 
    });
})

document.querySelector('.main-form__tabs').click();
// rent-form__tabs //