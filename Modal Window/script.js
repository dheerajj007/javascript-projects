'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 

};

for(let i=0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openmodal);
    
}

btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        closemodal();
    }
        
    

});
