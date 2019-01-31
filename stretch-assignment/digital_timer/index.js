// Target all four digits \

getID = (str) => {
    return document.getElementById(str);
}



const tenSec = document.querySelector('#secondTens');
const sec = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens')



let secondTenCount = 1;

const secondTenCounter = setInterval(function() {
        tenSec.textContent = `${secondTenCount}`;

        tenSec.style.color = 'red';
        if (secondTenCount > 1) {
            
            tenSec.textContent = `1`;
            clearInterval(secondTenCounter);
            
        }
        secondTenCount +=1 ;
} , 11000)


let secondOneCount = 0
const secondOneCounter = setInterval(function() {
    sec.textContent = `${secondOneCount}`;

    if (secondOneCount >= 10) {
        sec.style.color = 'red';
        sec.textContent = `0`;
        clearInterval(secondOneCounter);
    } else {
        secondOneCount +=1 ;
    }
} , 1000)

let msHunCount = 0
const msHunCounter = setInterval(function() {
    msHundreds.textContent = `${msHunCount}`;
        modulo = msHunCount%10;
        msHundreds.textContent = `${modulo}`;
        msHunCount +=1 ;

        msHundreds.style.color = 'black';
        if (msHunCount % 10 == 0) {
            msHundreds.style.color = 'red';
        }
        if(msHunCount >= 99) {
            msHundreds.style.color = 'red';
            msHundreds.textContent = `0`;
            clearInterval(msHunCounter);
        }
}, 100)

let msTenCount = 0
const msTenCounter = setInterval(function() {
    msTens.textContent = `${msTenCount}`;
        modulo = msTenCount%10;
        msTens.textContent = `${modulo}`;
        msTenCount +=1 ;
        if (msTenCount % 100 == 0) {
            msTens.style.color = 'red';
        }
        msTens.style.color = 'black';
        if(msTenCount >= 999) {
            msTens.style.color = 'red';
            msTens.textContent = `0`;
            clearInterval(msTenCounter);
        }
}, 10)
