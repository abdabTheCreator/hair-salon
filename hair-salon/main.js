var imageContent = ["img/mainimageDark.jpg", "img/secondSlide.jpg", "img/thirdSlide.jpg"];

function load(){
    imageSlide(0);
}
function imageSlide(n){
    document.getElementById("container__image").getElementsByTagName("img")[0].src=imageContent [n % imageContent.length];
    setTimeout(function(){imageSlide(n+1);}, 5000);    
}