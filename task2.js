document.getElementById("d3").addEventListener("click",function() {
in1=parseFloat(document.getElementById("d11").value);
d22=document.getElementById("d22").value;
in2=parseFloat(document.getElementById("d33").value);
 if ( d22=="" && isNaN(in1) && isNaN(in2) || isNaN(in1) && d22==" " || isNaN(in2) && d22==""  ){
    const alertelement= document.getElementById("a1")
       alertelement.style.visibility="visible";
       alertelement.style.backgroundColor="lightblue";
    document.getElementById("entertext").innerHTML="Please enter operator and operand ";
      setTimeout(() => {
       
        alertelement.style.visibility= "hidden";
        
       
    
    
      }, 2000);
    return;}
if(isNaN(in1) || isNaN(in2)){
    const alertelement= document.getElementById("a1")
       alertelement.style.visibility="visible";
       alertelement.style.backgroundColor="lightblue";
    document.getElementById("entertext").innerHTML="Please enter another operand ";
      setTimeout(() => {
       
        alertelement.style.visibility= "hidden";
        
       
    
    
      }, 2000);}
if(d22== '+'){
    function cal(in1,in2){
        return  in1+in2;
    }
    document.getElementById("d1").innerHTML=cal(in1,in2);
  
}
else if (d22== '-'){
    
        function cal(in1,in2){
            return  in1-in2;
        }
        document.getElementById("d1").innerHTML=cal(in1,in2);
}
else if (d22== '*'){
    
    function cal(in1,in2){
        return  in1*in2;
    }
    document.getElementById("d1").innerHTML=cal(in1,in2);
}
else if (d22== '/'){
    
    function cal(in1,in2){
        return  in1/in2;
    }
    document.getElementById("d1").innerHTML=cal(in1,in2);
}
else if (d22== '%'){
    
    function cal(in1,in2){
        return  in1%in2;
    }
    document.getElementById("d1").innerHTML=cal(in1,in2);

}
else if (d22== '^'){
    
    function cal(in1,in2){
        return  in1**in2;
    }
    document.getElementById("d1").innerHTML=cal(in1,in2);
    
}


else if (d22== ''){
const alertelement= document.getElementById("a1")
   alertelement.style.visibility="visible";
   alertelement.style.backgroundColor="lightblue";
document.getElementById("entertext").innerHTML="Please enter operator";
  setTimeout(() => {
   
    alertelement.style.visibility= "hidden";
    
   


  }, 2000);

 
    
}

    
else{
    
   
   const element2=document.getElementById("a1");

    element2.style.visibility= "visible";
    document.getElementById("entertext").innerHTML="Please enter valid  operator"
    element2.style.backgroundColor="#ffcccb";
   setTimeout(() => {
  
    
        element2.style.visibility= "hidden";
    

 
 
   }, 1000);
 

  

}
});
