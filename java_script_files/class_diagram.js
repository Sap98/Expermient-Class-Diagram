var play = document.getElementById("play");
var output = document.getElementById("output");

play.addEventListener("click", function () {
  document.getElementById("play").style.display = "none";
  document.getElementById("mytext").style.display = "block";

  var list = document.getElementById("myList");
  var play_button = document.getElementById("play2");
  var fast_forward = document.getElementById("fast-forward");
  var intervalID;
  var currentItem = 1;
  function updateList() {
    if (currentItem > list.children.length) {
      currentItem = 1;
    }
    if (list.children[currentItem - 1]) {
      list.children[currentItem - 1].classList.add("active");
    }
    if (list.children[currentItem - 2]) {
      list.children[currentItem - 2].classList.remove("active");
    }
    currentItem++;
  }

  play_button.addEventListener("click", function () {
    intervalID = setInterval(updateList, 1000);
  });
  fast_forward.addEventListener("click", function () {
    intervalID = setInterval(updateList, 200);
  });
});

var button_one = document.getElementById("button_1");
button_one.addEventListener("click", function () {
  window.location.href = "page1.html";
});

var button_two = document.getElementById("button_2");
button_two.addEventListener("click", function () {
  window.location.href = "page2.html";
});

var button_three = document.getElementById("button_3");
button_three.addEventListener("click", function () {
  window.location.href = "page3.html";
});

var button_four = document.getElementById("button_4");
button_four.addEventListener("click", function () {
  window.location.href = "page4.html";
});

var button_five = document.getElementById("button_5");
button_five.addEventListener("click", function () {
  window.location.href = "page5.html";
});

var button_six = document.getElementById("button_6");
button_six.addEventListener("click", function () {
  window.location.href = "page6.html";
});

var button_seven = document.getElementById("button_7");
button_seven.addEventListener("click", function () {
  window.location.href = "page7.html";
});


/*function hide_button(){
    document.getElementById("play").style.display="none";
    document.getElementById("mytext").style.display="block";

}
const myList = document.getElementById("myList");
const listItems = myList.getElementsByTagName("li");

setTimeout(function() {
  listItems[0].innerHTML = "1. Represent classes with their state and behaviour";
}, 2000);

setTimeout(function() {
  listItems[1].innerHTML = "2. Association between identified classes";
}, 4000);

setTimeout(function() {
  listItems[2].innerHTML = "3. Aggregation of classes";
}, 6000);
setTimeout(function() {
    listItems[3].innerHTML = "4. Composition of classes";
  }, 8000);
  setTimeout(function() {
    listItems[4].innerHTML = "5. Inheritance of classes";
  }, 10000);
  setTimeout(function() {
    listItems[5].innerHTML = "6. Identifying sequence of activities";
  }, 12000);
  setTimeout(function() {
    listItems[6].innerHTML = "7. Drawing sequence diagrams";
  }, 14000); 

 var list=document.getElementById("myList");
 var play_button=document.getElementById("play2");
 var fast_forward=document.getElementById("fast-forward");
 var intervalID;
 var currentItem=1;
 function updateList() {
  if (currentItem > list.children.length) {
    currentItem = 1;
  }
  if (list.children[currentItem - 1]) {
    list.children[currentItem - 1].classList.add("active");
  }
  if (list.children[currentItem - 2]) {
    list.children[currentItem - 2].classList.remove("active");
  }
  currentItem++;
}

 play_button.addEventListener("click",function(){
  intervalID = setInterval(updateList, 1000);
 });
 fast_forward.addEventListener("click",function(){
  intervalID = setInterval(updateList, 200);
 });*/

var slideshow = document.getElementById("myList");
var listItems = slideshow.getElementsByTagName("li");
var currentIndex = 0;

for (var i = 1; i < listItems.length; i++) {
  listItems[i].style.display = "none";
}

setInterval(function () {

  currentIndex++;
  if (currentIndex >= listItems.length) {
    currentIndex = 0;
  }
  listItems[currentIndex].style.display = "block";
}, 3000);

