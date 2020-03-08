let arrayImgs = document.querySelectorAll('.slides img'),
    blockOfImgs = document.querySelector('.slides'),
    arrayDots = document.querySelectorAll('.dots-screen');
let left = 20,
    item = 3,
    count = 1,
    timer;

let widthImg = arrayImgs[0].clientWidth + 40;
let widthImgAll = 5 * (arrayImgs[0].clientWidth + 40);

autoScrolling();

function autoScrolling(){
    timer = setTimeout(sliderLeft, 1000);
}

function sliderLeft(){
    left = left - widthImg;
    forForRemove(arrayImgs, 'picture-front');
    forForRemove(arrayImgs, 'picture-back');
    forForRemove(arrayDots, 'active-dot');
    
    arrayImgs[item].classList.add('picture-front');
    arrayImgs[item].classList.add('picture-back');
    arrayDots[count].classList.add('active-dot');
    
    if(left < -widthImgAll){
        left = 20;
        item = 2;
        arrayImgs[item].classList.add('picture-front');
        arrayImgs[item].classList.add('picture-back');
    }
    if(count == 5){
        count = -1;
    }

    item++;
    count++;
    blockOfImgs.style.left = left + 'px';

    autoScrolling();
}

function forForRemove(array, a){
    array.forEach(function(e,p){
        array[p].classList.remove(a);
    });
};