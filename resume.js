var $=function(id){
   return document.getElementById(id);
}
window.onload=function(){
    var resume=$("resume");
    var h2Elements=resume.getElementsByTagName("h2");

    var h2Node;
    for(var i=0;i<h2Elements.length;i++){
        h2Node=h2Elements[i];

        h2Node.onclick=function(){
            var h2=this;
            if(h2.hasAttribute("class")){
                h2.removeAttribute("class");
            }
            else{
                h2.setAttribute("class","minus");
            }
            if(h2.nextElementSibling.hasAttribute("class")){
                h2.nextElementSibling.removeAttribute("class");
            }
            else{
                h2.nextElementSibling.setAttribute("class","open");
            }
        }//end click
    }
}