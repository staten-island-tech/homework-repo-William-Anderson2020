let header = document.querySelector('.jump').textContent;
// console.log(header)
const headerLetters = [...header];
// console.log(headerLetters);
function headerSpanDesignation(char){
    const spanOpen = '<span class="jump">';
    const spanClose = '</span>';
    return spanOpen + char + spanClose;
}

const headerLettersSpan = headerLetters.map(headerSpanDesignation).join('');
// console.log(headerLettersSpan);

document.querySelector('.jump').innerHTML = headerLettersSpan;

/////the better way

    /* function spanWrap(){
        return headerLetters.map(letter => `<span class=jump> ${letter} </span>`).join('');
    }

    document.querySelector('.jump').innerHTML = spanWrap(header); */