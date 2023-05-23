var play_button=document.getElementById("play2");
var fast_forward=document.getElementById("fast-forward");
var click_count = 0;

 var slideshow = document.getElementById("slide_0");
 var listItems = slideshow.getElementsByTagName("li");
 var currentIndex = 0;

 for(var i = 1; i<listItems.length; i++)
 {
  listItems[i].style.display = "none";
 }

 setInterval(function(){
  
  currentIndex++;
  if(currentIndex>=listItems.length)
  {
    currentIndex = 0;
  }
  listItems[currentIndex].style.display = "block";
 },2000);



play_button.addEventListener("click",function(){
    click_count++;
    if(click_count == 1){
     var slide_one = document.getElementById("slide_1");
     slide_one.style.display = "block";
     var slide_zero = document.getElementById("slide_0");
     slide_zero.style.display = "none";
     var slide_two = document.getElementById("slide_2");
     slide_two.style.display = "none";
    }
    else if(click_count == 2){
        var slide_two = document.getElementById("slide_2");
        slide_two.style.display = "block";
        var slide_zero = document.getElementById("slide_0");
        slide_zero.style.display = "none";
        var slide_one = document.getElementById("slide_1");
         slide_one.style.display = "none";  
    }
});



fast_forward.addEventListener("click",function() {

});

var button_zero = document.getElementById("button_0");
button_zero.addEventListener("click", function() {
    window.location.href = "class_diagram.html";
});

var button_one = document.getElementById("button_1");
button_one.addEventListener("click",function() {
    window.location.href = "page1.html";
});

var button_two = document.getElementById("button_2");
button_two.addEventListener("click",function() {
  window.location.href = "page2.html";
});

var button_three = document.getElementById("button_3");
button_three.addEventListener("click",function() {
  window.location.href = "page3.html";
});

var button_four = document.getElementById("button_4");
button_four.addEventListener("click",function() {
  window.location.href = "page4.html";
});

var button_five = document.getElementById("button_5");
button_five.addEventListener("click",function() {
  window.location.href = "page5.html";
});

var button_six = document.getElementById("button_6");
button_six.addEventListener("click",function() {
  window.location.href = "page6.html";
});

var button_seven = document.getElementById("button_7");
button_seven.addEventListener("click",function() {
  window.location.href = "page7.html";
});