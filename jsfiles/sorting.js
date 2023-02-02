function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    // const style1 = window.getComputedStyle(el1);
    // const style2 = window.getComputedStyle(el2);
    // const transform1 = style1.getPropertyValue("height");
    // const transform2 = style2.getPropertyValue("height");
    // el1.style.height = transform2;
    // el2.style.height = transform1;
}

function disableSortingBtn() {
    document.querySelector(".bubblesort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;
    document.querySelector(".insertionsort").disabled = true;
}

function enableSortingBtn() {
    document.querySelector(".bubblesort").disabled = false;
    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".quicksort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

function diableNewArrBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrBtn() {
    document.querySelector(".newArray").disabled = false;
}

function waitforme(delay) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, delay);
    })
}

let arraySize = document.querySelector("#arr_sz");

arraySize.addEventListener('input', function () {
    console.log(arraySize.value, typeof (arraySize.value));
    createNewArray(parseInt(arraySize.value));
})

let delay = 80;

let delayElement = document.querySelector('#input_speed')

delayElement.addEventListener('input', function () {
    delay = 180 - parseInt(delayElement.value);
})

let arr = [];

createNewArray();

// console.log(arr.length)
function createNewArray(ARRAY_LENGTH = 60) {

    deleteChild();
    let arr = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) { arr.push(Math.floor(Math.random() * 60)) }
    console.log(arr);

    const bars = document.querySelector('#bars');

    for (let i = 0; i < ARRAY_LENGTH; i++) {
        const bar = document.createElement('div');
        bar.style.height = `${arr[i] * 5}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {

    const bar = document.querySelector('#bars');
    bar.innerHTML = '';

}
const newArray = document.querySelector('.newArray')
newArray.addEventListener('click', function () {
    console.log("From newArray ");
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
