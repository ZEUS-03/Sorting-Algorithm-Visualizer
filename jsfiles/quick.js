
async function partition(ele, start, end){
    
    let pivotValue = parseInt(ele[end].style.height);
    let pivotIndex = start;
    ele[end].style.background = 'red';
    for(let i=start; i<end ; i++){
        ele[i].style.background = 'yellow';
        await waitforme(delay);
        if(parseInt(ele[i].style.height) < pivotValue){
            swap(ele[i], ele[pivotIndex]);
            ele[pivotIndex].style.background = 'orange';
            if(pivotIndex!=i) ele[i].style.background = 'orange';
            pivotIndex++;
            await waitforme(delay);
        }
        else{
            ele[i].style.background = 'pink';
        }
    }
    await waitforme(delay);
    swap(ele[pivotIndex], ele[end]);
    ele[end].style.background = 'pink';
    ele[pivotIndex].style.background = 'white';

    await waitforme(delay);

    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'white')
            ele[k].style.background = 'cyan';
    }
    return pivotIndex;
}

async function quickSort(ele, start, end){
    if(start<end){
        let pivot_index = await partition(ele, start, end);
        await quickSort(ele, start, pivot_index-1);
        await quickSort(ele, pivot_index+1, end);
    }
    else{
        if(start >= 0 && end >= 0 && start <ele.length && end <ele.length){
            ele[start].style.background = 'white';
            ele[end].style.background = 'white';
        }
    }
}

const quickSortBtn = document.querySelector('.quicksort');
quickSortBtn.addEventListener('click', async function(){
    const ele = document.querySelectorAll('.bar');
    start = 0;
    end = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    // diableNewArrBtn();
    await quickSort(ele, start, end);
    enableSortingBtn();
    enableSizeSlider();
})