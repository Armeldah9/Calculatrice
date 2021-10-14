//DOM
const touche = [...document.querySelectorAll('.bouton')];
const listeKeycode = touche.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keycode.toString();  
    calculer(valeur) 
})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer=(valeur)=>{
    if (listeKeycode.includes(valeur)) {
        switch(valeur) {
            case '8' :
                ecran.textContent="";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent= calcul;
                break;
            default:
            const indexkeycode = listeKeycode.indexOf(valeur);
            const touches = touche [indexkeycode];
            ecran.textContent += touches.innerHTML;
        }
    }
}

window.addEventListener('error', (e)=>{
    alert('Vous ne pouvez pas effectuez ce calcul: ' + e.message)
})