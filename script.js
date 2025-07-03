const display = document.querySelector('#display');
const displayResult = document.querySelector('#displayResult');
const boutons = document.querySelectorAll('.zoneBouton');

function getChiffre(valeur) {
    let resultat;
    const val = valeur.target.textContent;
    
    if (val === '=') {
        resultat = eval(display.textContent);
        displayResult.textContent = resultat;
    }
    else if (val === 'C') {
        display.textContent = '';
        displayResult.textContent='';
    }
    else if (val === 'x') {
        display.textContent = display.textContent.slice(0,-1);
        displayResult.textContent = '';
    }
    else {
        display.textContent += val; 
        displayResult.textContent += val; 
    }

}

boutons.forEach(bouton => {
    bouton.addEventListener('click', getChiffre);
  });
