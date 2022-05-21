/*
Portfolio Section JavaScript
*/

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click',(e)=>{
    const btn_clicked = e.target;
    console.log(btn_clicked);
    
    p_btn.forEach((curElem) => curElem.classList.remove("active-p-btn"));
    btn_clicked.classList.add("active-p-btn");
        console.log(p_btns);

        // To number in data
        const btn_num = btn_clicked.dataset.btnNum;
        console.log(btn_num);

        const active_img = document.querySelectorAll(`.p-btn--${btn_num}`);

        p_img_elem.forEach((curElem)=>curElem.classList.add("p-img-not-active"));
        active_img.forEach((curElem)=>curElem.classList.remove("p-img-not-active"));
        
        
});