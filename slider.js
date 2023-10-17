const left = document.querySelector(".fa-arrow-circle-left");
const right = document.querySelector(".fa-arrow-circle-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image"); //more than 1 image
const bottom = document.querySelector(".bottom");

let slideNumber = 1; //show 1st image
const length=images.length;


for(let i=0; i<length-1; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
};

//we have created our buttons here so above so dont create them in start ,it will not work
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor= "white";

const resetBg = () =>{
    buttons.forEach(button =>{
        button.style.backgroundColor ="transparent";
    })
}
buttons.forEach((button,i) =>{
    button.addEventListener("click", ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i *800}px)`;
        slideNumber = i +1;

        button.style.backgroundColor= "white";

    });
});


const nextSlide = () =>{
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++ ;
};

const prevSlide = () =>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber-- ;
};

//after last slider come to previous slide that is 1st
const getFisrtSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length-1) * 800}px)`;
    slideNumber = length;
};

const changeColor = ()=>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
   
        slideNumber < length ? nextSlide() : getFisrtSlide(); //ternary operator
        changeColor();
});


left.addEventListener("click",()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide(); //ternary operator
    changeColor();
    
});


