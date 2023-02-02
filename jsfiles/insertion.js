async function insertion() {
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = "white";

    for (let i = 1; i < ele.length; i++) {
        console.log("in i loop");

        let key = ele[i].style.height;
        let j = i - 1;

        ele[i].style.background = "yellow";
        await waitforme(delay);

        while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
            ele[j].style.background = "yellow";
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = "white";
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = "white";
    }
}
const insertionSortBtn = document.querySelector(".insertionsort");
insertionSortBtn.addEventListener("click", async function (){
    disableSortingBtn();
    disableSizeSlider();
    // diableNewArrBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
});
