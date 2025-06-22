function updateMainTitle(h1Text) {
    const mainTitle = document.querySelector('.main-title');
    const h1 = mainTitle ? mainTitle.querySelector('h1') : null;
    if (h1) h1.textContent = h1Text;
}

function updateMainSectionParagraph(sectionIndex, paragraphText) {
    const mainSections = document.querySelectorAll('.main-section');
    if (mainSections[sectionIndex]) {

        const paragraphs = mainSections[sectionIndex].querySelectorAll('p');
        if (paragraphs.length > 0) {
            paragraphs[0].textContent = paragraphText;
        }
    }
}

function updateCoordDetails(infoTitle, infoSpan1, infoSpan2, horarioSpan) {
    const infoElem = document.querySelector('.coord-details .info');
    const horarioElem = document.querySelector('.coord-details .horario');

    if (infoElem) {
        const h3 = infoElem.querySelector('h3');
        const spans = infoElem.querySelectorAll('span');
        if (h3) h3.textContent = infoTitle || '';
        if (spans[0]) spans[0].textContent = infoSpan1 || '';
        if (spans[1]) spans[1].textContent = infoSpan2 || '';
    }

    if (horarioElem) {
        const span = horarioElem.querySelector('span');
        if (span) span.textContent = horarioSpan || '';
    }
}


const Menu = document.querySelector('.sidebar-menu');

const menuOption = Menu.querySelectorAll('a');

console.log(Menu);
console.log(menuOption);


menuOption.forEach((option, index) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        switch (index) {
            case 0:
                updateMainTitle('TÉCNICO EM ADMINISTRAÇÃO');
                updateMainSectionParagraph(0, 'guibolinha guibolinha guibolinha guibolinha guibolinha guibolinha guibolinha guibolinha guibolinha guibolinha ');
                updateMainSectionParagraph(1, 'guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao guibolao ');
                updateCoordDetails(
                    'Bisnaguinha',
                    'Email: fulano@ifsp.edu.br',
                    'Telefone: (99)99999-9999',
                    '24/7'
                );
                break;
            case 1:
                updateContent('TÉCNICO EM INFORMÁTICA', 'a', 'b');
                break;
            case 2:
                updateContent('TÉCNICO EM AUTOMAÇÃO', 'a', 'b');
                break;
            default:
                updateContent('Título');
        }
    });
});

