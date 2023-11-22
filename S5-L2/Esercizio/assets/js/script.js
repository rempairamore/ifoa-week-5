// Variabili globali
let divArticle = document.querySelector('.clearfix')

// Richiamo Funzioni 
createUnderline()
creaIcone()
tornaSu()
// asideDiv()


// Scrivo funzioni 
function createUnderline() {
    let imgUnderline = document.createElement('img')
    imgUnderline.src = 'assets/img/underline.svg'
    imgUnderline.id = 'underlineImage'
    let titoloH1 = divArticle.childNodes[1];
    titoloH1.appendChild(imgUnderline)

}


function creaIcone() {
    let iconaUpI = document.createElement('i');
    iconaUpI.className = 'far fa-caret-square-up';
    iconaUpI.style.color = '#ef642a';
    let inconaTutta = document.createElement('div')
    inconaTutta.id = 'iconaUp'
    inconaTutta.classList = 'dajeZio'
    inconaTutta.appendChild(iconaUpI)
    document.querySelector('footer').appendChild(inconaTutta)

    let iconaCalendarI = document.createElement('i');
    iconaCalendarI.className = 'far fa-calendar-alt';
    iconaCalendarI.style.color = '#235fb7';
    let iconaCalendarTutta = document.createElement('div');
    iconaCalendarTutta.id = 'iconaCalendar'
    iconaCalendarTutta.classList = 'dajeZio'
    iconaCalendarTutta.appendChild(iconaCalendarI)
    document.querySelector('footer').appendChild(iconaCalendarTutta)

    let iconaPiuI = document.createElement('i');
    iconaPiuI.className = 'far fa-plus-square';
    iconaPiuI.style.color = '#235fb7';
    let iconaPiuTutta = document.createElement('div');
    iconaPiuTutta.id = 'iconaPiu'
    iconaPiuTutta.classList = 'dajeZio'
    iconaPiuTutta.appendChild(iconaPiuI)
    document.querySelector('footer').appendChild(iconaPiuTutta)
}


function tornaSu() {
    document.getElementById('iconaUp').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
}


// function asideDiv() {
//     let tuttiDiv = document.querySelectorAll('aside div')
//     console.dir(tuttiDiv)
//     tuttiDiv.forEach(ele => {
//         let iconaTagi = document.createElement('i');
//         iconaTagi.className = 'far fa-plus-square';
//         // iconaTagI.style.color = '#235fb7';
//         let iconaTagTutta = document.createElement('div');
//         iconaTagTutta.id = 'iconaTag'
//         iconaTagTutta.appendChild(iconaTagi)
//         ele.appendChild(iconaTagTutta) 
//     })
// }