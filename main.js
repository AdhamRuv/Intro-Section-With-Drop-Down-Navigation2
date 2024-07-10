const features = document.querySelector('.features');
const company = document.querySelector('.company');

const featuresTxt = document.querySelector(".word1");
const companyTxt = document.querySelector(".word2")

const slideBtn = document.querySelector(".slide");
const shadow = document.querySelector(".shadow");
const navBox = document.querySelector(".navBox");
const close = document.querySelector(".close");

featuresTxt.addEventListener('click', () => {
    company.classList.remove('clicked');
    features.classList.toggle('clicked');
});

companyTxt.addEventListener('click', () => {
    features.classList.remove('clicked');
    company.classList.toggle('clicked');
});

slideBtn.addEventListener('click', () => {
    shadow.style.display = "block";
    navBox.style.left = "50%"
})

close.addEventListener('click', ()=>{
    shadow.style.display = "none";
    navBox.style.left = "100%";
})


// const features = document.querySelector(".features");
// const company = document.querySelector(".company");
// const drop1 = document.querySelector(".drop1");
// const drop2 = document.querySelector(".drop2");


// features.onclick = ()=>{
//     if (drop1.style.height === "0px") {
//         drop1.style.height = "initial";
//         drop1.style.padding = "5% 0%";
//         if(drop2.style.height !== "0px"){
//             drop2.style.height = "0px";
//             drop2.style.padding = "0px";
//         };
//     } else {
//         drop1.style.height = "0px";
//         drop1.style.padding = "0px";
//     }
// };
// company.onclick = ()=>{
//     if(drop2.style.height === "0px"){
//         drop2.style.height = "initial";
//         drop2.style.padding = "15% 15%"
//         if(drop1.style.height !== "0px"){
//             drop1.style.height = "0px";
//             drop1.style.padding = "0px";
//         }
//     } else{
//         drop2.style.height = "0px";
//         drop2.style.padding = "0px";
//     }
// }