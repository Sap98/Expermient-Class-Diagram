/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: main.js
Author:  Prakriti Dhang
         Saptarshi Mondal
        */

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";    
        document.getElementById("ex2").style.display="none";  
        document.getElementById("exercise3").style.display="none";    
        document.getElementById("ex3").style.display="none";  
        document.getElementById("para1").style.display="block";    
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispuml3").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex2").style.display="block";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex1").style.display="none"; 
      document.getElementById("exercise3").style.display="none";    
      document.getElementById("ex3").style.display="none";  
      document.getElementById("dispres").style.display="none";
      document.getElementById("para1").style.display="block";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      document.getElementById("show_result3").style.display="none";
      document.getElementById("dispuml1").style.display="none";
      document.getElementById("dispuml3").style.display="none";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
    
     
  }
  if(ex.options[ex.selectedIndex].value==3){
    document.getElementById("exercise3").style.display="block";
    document.getElementById("ex3").style.display="block";
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none"; 
    document.getElementById("exercise2").style.display="none";
    document.getElementById("ex2").style.display="none"; 
    document.getElementById("dispres").style.display="none";
    document.getElementById("para1").style.display="block";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("show_result3").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispviewbtn").disabled=false;
    document.getElementById("viewsol").disabled=true;
    
   
}
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("ex2").style.display="none";
        document.getElementById("exercise3").style.display="none";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("para1").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("dispuml1").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispuml3").style.display="none";
        document.getElementById("dispviewbtn").disabled=true;
        document.getElementById("viewsol").disabled=true;
       
        
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){
  document.getElementById("dispres").style.display="block";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;

    if(ex.options[ex.selectedIndex].value==1){
      window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==2){
      window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==3){
      window.scrollBy(0, 3000);
    }
  
}

function solview(){
  if(ex.options[ex.selectedIndex].value==1){
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("show_result3").style.display="none";
  document.getElementById("viewsol").disabled=true;
  
}
if(ex.options[ex.selectedIndex].value==2){
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result2").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result3").style.display="none";
 
  document.getElementById("viewsol").disabled=true;
  
}
if(ex.options[ex.selectedIndex].value==3){
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result3").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("viewsol").disabled=true;
  
  
}

}

var attribute = [];
function create_select_options()
{
  var input_from_table_1 = document.getElementById("inp1").value;
  
  var flag = 0;
  for (let i = 0; i<attribute.length; i++)
  {
    if (input_from_table_1 === attribute[i])
    {
      flag = 1;
      break;
    }
    
  }
  if(flag === 1)
  {
    alert("You have already entered that Class.");
  }
  else{
    attribute.push(input_from_table_1);
  }

  var select_element_2 = document.getElementById("table_2_select_class");
  var select_element_3 = document.getElementById("table_3_select_class");
  var select_element_5_0 = document.getElementById("table_5.0_select_class");
  var select_element_5_1 = document.getElementById("table_5.1_select_class");

  var option = document.createElement("option");
  var option_text = document.createTextNode(input_from_table_1);
  //option.text = input_from_table_1.trim();
  option.appendChild(option_text);

  var option_3 = document.createElement("option");
  var option_text_3 = document.createTextNode(input_from_table_1);
  //option_3.text = input_from_table_1.trim();
  option_3.appendChild(option_text_3);

  var option_5_1 = document.createElement("option");
  var option_text_5_1 = document.createTextNode(input_from_table_1);
  option_5_1.appendChild(option_text_5_1);

  var option_5_0 = document.createElement("option");
  var option_text_5_0 = document.createTextNode(input_from_table_1);
  option_5_0.appendChild(option_text_5_0);


  select_element_2.appendChild(option);
  select_element_3.appendChild(option_3);
  select_element_5_1.appendChild(option_5_1);
  select_element_5_0.appendChild(option_5_0);

  // to create a new row in table 6

  var table6 = document.getElementById("tbl6_body");

  var newRow = document.createElement("tr");

  var cid1 = "Class" + input_from_table_1;
  var cell1 = document.createElement("td");
  cell1.setAttribute("id",cid1);
  cell1.textContent = input_from_table_1;
  cell1.style.fontWeight = "bold";
  cell1.style.fontSize = "larger";
  cell1.style.textAlign = "center";
  newRow.appendChild(cell1);

  var cid2 = "Attributes" + input_from_table_1;
  var cell2 = document.createElement("td");
  cell2.setAttribute("id",cid2);
  cell2.textContent = "";
  newRow.appendChild(cell2);
  
  var cid3 = "Operation" + input_from_table_1;
  var cell3 = document.createElement("td");
  cell3.setAttribute("id",cid3);
  cell3.textContent = "";
  newRow.appendChild(cell3);
  
  

  table6.appendChild(newRow);

  
}




  
 



