// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// **Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

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

