const enterButton=document.getElementById("enter");
const input=document.getElementById("userInput");
const ul=document.querySelector("ul");
const item=document.getElementsByTagName("li");
function inputLength(){
  return input.value.length;
}
function itemLength(){
  return item.length;
}
function creatListElement() {
  // creates an element "li"
  //ul داخل ال li هون عشان نحط ال
  const li = document.createElement("li");
  //makes text from input field the li text
  //li( input ) داخل input هون عشان نحط قيمةال
  li.appendChild(document.createTextNode(input.value));
  //add li to ul
  ul.appendChild(li);
  //resit the input text field
  //value of the input هون يرجع يحذف ال
  input.value = "";
  // because it's in the function, it only adds it for new items
  //after you add the input you toggle it with a certain color to tell your self i have finished this particular job or subject
function toggleOut(){
li.classList.toggle("done");
}
  //to activate the the toggle function we added a EventListener to activate the function by clicking on the target
 li.addEventListener("click",toggleOut);
  // START ADD DELETE BUTTON
const dbtn=document.createElement("button");
dbtn.appendChild(document.createTextNode("x"));
li.appendChild(dbtn);
dbtn.addEventListener("click",deleteItemListClick);
  //END OF DELETE BUTTON
  //ADD CLASS DELETE (DISPLAY: NONE)
function deleteItemListClick(){
  li.classList.add("delete");
}

  //END OF CLASS DELETE
  }

//ADD LIST AFTER KEYPRESS
function addListAfterCilk() {
  //makes sure that an empty input field doesn't create a li
  if (inputLength()>0){
    creatListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength()>0 && event.keyCode===13){
    creatListElement();
  }
}
  //this now looks to see if you hit "enter"/"return"

enterButton.addEventListener("click", addListAfterCilk);
input.addEventListener("keypress", addListAfterKeypress);

