
const container =  document.querySelector('.ft-container');

// creo i  100 numeri
for(let i = 1; i <= 100; i++){
    // associo e  creo un box a un blocco
    const box = document.createElement('div');
    
    
    // box e colore per i multipli di 3 e 5
    if(i % 3 == 0 && i % 5 == 0){
        box.className = 'box red';
        box.innerHTML  = 'fizzBuzz';
    }
    // box e colore per i multipli di 3
    else if(i % 3 === 0){
        box.className = 'box green';
        box.innerHTML = 'fizz';
    }
    // box e colore per i multipli di 5
    else if(i % 5 === 0){
        box.className = 'box yellow';
        box.innerHTML = 'buzz';
    }
    // box  e colore per tutto il resto
    else{
        box.className = 'box  blue';
        box.innerHTML = i;
    }
        



    container.append(box);
}

// stampo in pagina 100 box quelli multipli di 3 colore verde fizz, multipli di 5 giallo buzz, multipli di 15 rosso fizzbuzz

