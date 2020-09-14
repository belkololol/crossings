let buttonsSwitch = document.querySelectorAll('.buttons-options-car button');
let gazelConteiner = document.querySelector('.gazel');
let heelConteiner = document.querySelector('.heel');
let truckConteiner = document.querySelector('.truck');
let gazelButton = document.querySelector('.button-gazel');
let heelButton = document.querySelector('.button-heel');
let truckButton = document.querySelector('.button-truck');
let buttonLeft = document.querySelectorAll('.button-left');
let buttonRight = document.querySelectorAll('.button-right');

buttonsSwitch.forEach(button => {
    button.addEventListener('click', (e) => {
        buttonsSwitch.forEach(button => {
            button.classList.remove('active');
        })
        e.target.classList.add('active');
        checkActiveClass()
    });

});


buttonRight.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('df')
        for (let i = 0; i < buttonsSwitch.length; i++) {
            if (buttonsSwitch[i].classList.contains('active')) {
                buttonsSwitch[i + 1].classList.add('active');
                buttonsSwitch[i].classList.remove('active');
                break;
            }

        }
        checkActiveClass();
    })
})

buttonLeft.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('df')
        for (let i = 0; i < buttonsSwitch.length; i++) {
            if (buttonsSwitch[i].classList.contains('active')) {
                buttonsSwitch[i - 1].classList.add('active');
                buttonsSwitch[i].classList.remove('active');
                break;
            }
        }
        checkActiveClass();
    })
})

function checkActiveClass() {
    if (gazelButton.classList.contains('active')) {
        heelConteiner.classList.add('hidden');
        truckConteiner.classList.add('hidden');
        gazelConteiner.classList.remove('hidden');
    } else if (heelButton.classList.contains('active')) {
        heelConteiner.classList.remove('hidden');
        truckConteiner.classList.add('hidden');
        gazelConteiner.classList.add('hidden');
    } else {
        heelConteiner.classList.add('hidden');
        truckConteiner.classList.remove('hidden');
        gazelConteiner.classList.add('hidden');
    }
}


function trimString(size, maxSize) {

    const cropElement = document.querySelectorAll('.review-block');
    const endCharacter = '...';

    cropElement.forEach(el => {
        const textElement = el.querySelector('.review-text');
        let text = textElement.innerHTML;
        let textStart = text.substr(0, size);
        let textEnd = text.substr(size, maxSize);
        if (text.length > size) {
            textElement.innerHTML = textStart + endCharacter;
        }

        const readCompletely = el.querySelector('.read-completely');
        readCompletely.addEventListener('click', () => {
            textElement.innerHTML = textStart + textEnd;
            readCompletely.classList.add('hidden')
        });
    });
};

trimString(250, 700);


// плавный скролл

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = el.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})