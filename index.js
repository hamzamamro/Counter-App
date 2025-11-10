var count = Number(document.querySelector(".count").textContent);
var countHtml = document.querySelector(".count");


document.querySelector(".increase-btn").addEventListener("click",function(){
    var increaseNumber =  count+=1;
    document.querySelector(".count").textContent = increaseNumber;
    updateColor()
});


document.querySelector(".decrease-btn").addEventListener("click",function(){
    var decreaseNumber =  count-=1;
    document.querySelector(".count").textContent = decreaseNumber;
    updateColor()
});

document.querySelector(".reset-btn").addEventListener("click",function(){
    var resetNumber =  count=0;
    document.querySelector(".count").textContent = resetNumber;
});

function updateColor(){
    if(count > 0){
        countHtml.style.color = "green";
    } else if(count < 0){
        countHtml.style.color = "red";
    } else{
        countHtml.style.color = "black";
    }
}