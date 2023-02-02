async function bubble() {
    console.log("in bubble()");
    let ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length-1; i++) {
        console.log(ele.length);
        for (let j = 0; j < ele.length - i - 1; j++) {
            // console.log('in jth loop!');
            ele[j].style.background = "yellow";
            ele[j + 1].style.background = "yellow";
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                // console.log('inside if statement!');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = "cyan";
            ele[j + 1].style.background = "cyan";
        }
        ele[ele.length - i - 1].style.background = "white";
    }
    ele[0].style.background = "white";
}
const bubbleSortBtn = document.querySelector(".bubblesort");
bubbleSortBtn.addEventListener("click", async function () {
    disableSortingBtn();
    disableSizeSlider();
    // diableNewArrBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    // enableNewArrBtn();
});
