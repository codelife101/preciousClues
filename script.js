function submit(){
    var x = document.forms["rapCode"]["rapAnswer"].value;
if (x.length < 1) {
  alert("gum on ya need to complete the rap");   
} 
else if (x.toLowerCase() =="jakecode"){
    $(".rapContainer").css("display","none");
    $(".treeContainer").css("display","flex");
} else{
    alert("gum on ya need to complete the rap");
}
}

function submitTree(){
    var x = document.forms["treeCode"]["treeAnswer"].value;
if (x.length < 1) {
  alert("gum on ya need to take the photo");   
} 
else if (x.toLowerCase() =="jakecodetree"){
    $(".treeContainer").css("display","none");
    $(".cupContainer").css("display","flex");
} else{
    alert("gum on ya need to take the photo");
}
}

function submitCup(){
    var x = document.forms["cupCode"]["cupAnswer"].value;
if (x.length < 1) {
  alert("gum on ya need to take the photo");   
} 
else if (x.toLowerCase() =="jakecodecup"){
    $(".cupContainer").css("display","none");
    $(".winContainer").css("display","flex");
} else{
    alert("gum on ya need to take the photo");
}
}

