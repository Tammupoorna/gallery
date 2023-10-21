// Gallary Image Code
var allImg=document.images;
function allImgTags(){
    for(i=0;i<=allImg.length;i++){
        allImg[i].src=`../Asset/${i}.jpg`
        allImg[i].style.width="200px"
        allImg[i].style.height="180px"
        allImg[i].addEventListener("click",function(){
            document.getElementById("bigImage").style.display="flex"
        })
    }
}
allImgTags()

var globalSrc;

function passSrc(urlOfimg){

    document.getElementById("bigimg").style.backgroundImage=`url(${urlOfimg})`
    globalSrc=urlOfimg;
}

// closewindow

function closewindow(){
    document.getElementById("bigImage").style.display="none"

    document.getElementById("gallaryImageEdit").style.display="none"
}
function openEditWindow(){
    document.getElementById("gallaryImageEdit").style.display="flex"

    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
}

function imageEdit(){
    var blurValue=document.getElementById("blur").value
    var brightnessValue=document.getElementById("brightness").value
    var contrastValue=document.getElementById("contrast").value
    var grayscaleValue=document.getElementById("grayscale").value
    var hueValue=document.getElementById("hue").value
    var invertValue=document.getElementById("invert").value
    var opacityValue=document.getElementById("opacity").value
    var saturateValue=document.getElementById("saturate").value
    var sepiaValue=document.getElementById("sepia").value

    // console.log(blurValue,brightnessValue,contrastValue,grayscaleValue,hueValue,invertValue,opacityValue,saturateValue,sepiaValue)
 
    document.getElementById("image").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%)`

    // for  transform code

    var rotateX=document.getElementById("rotatex").value
    var rotateY=document.getElementById("rotatey").value
    var rotateZ=document.getElementById("rotatez").value
    var scaleX=document.getElementById("scalex").value
    var scaleY=document.getElementById("scaley").value
    var skewX=document.getElementById("skewx").value
    var skewY=document.getElementById("skewy").value
    var translateX=document.getElementById("translatex").value
    var translateY=document.getElementById("translatey").value

    document.getElementById("image").style.transform=`rotateX(${rotateX}deg) rotateY(${rotatey}deg) rotateZ(${rotatez}deg) scaleX(${scalex}deg) scaleY(${scaley}deg) skewX(${skewx}deg) skewY(${skewy}deg) translateX(${translatex}deg) translateY(${translatey}deg)`


     


}