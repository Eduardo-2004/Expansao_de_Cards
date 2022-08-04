const PANELS = document.querySelectorAll( '.panel' );

PANELS.forEach (panel =>{

    // panel recebe evento click
    panel.addEventListener ('click', () => {
    
        //funcao criada para remover o 'Active' anterior
        removeActiveClasses();

        //evento do click criado. Quando clicado acionará o 'Active' 
        panel.classList.add ( 'active' );

    })
})

// funcao para remover 'Activate' acionado anteriomente
function removeActiveClasses() {

    PANELS.forEach(panel => {

        panel.classList.remove ( 'active' );

    })


}
