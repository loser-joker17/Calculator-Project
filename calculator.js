  

console.log("vijay");  
  var dot=true; 
  var oper=true;
var answer1=document.getElementById('answer'); 
answer1.addEventListener('click', function(){
	answer.innerText="";  
}) 
 var button_point=document.getElementById('button-point'); 
button_point.addEventListener('click',function(){ 
	if(dot==true){ 
	answer.innerText=answer.innerText+"."; 
    }
    dot=false; 
})
 var button9=document.getElementById('button-9'); 
button9.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=9;
	else 
	answer.innerText=answer.innerText+9; 
   oper=true;

})  
 
 var button8=document.getElementById('button-8');
button8.addEventListener('click', function(){ 
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=8;
	else 
	answer.innerText=answer.innerText+8; 
oper=true;

}) 

 var button7=document.getElementById('button-7'); 
button7.addEventListener('click', function(){ 
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=7;
	else 
	answer.innerText=answer.innerText+7; 
oper=true;

}) 

var button6=document.getElementById('button-6'); 
button6.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=6;
	else 
	answer.innerText=answer.innerText+6; 
oper=true;

})  
var button5=document.getElementById('button-5'); 
button5.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=5;
	else 
	answer.innerText=answer.innerText+5; 
oper=true;

})  
var button4=document.getElementById('button-4'); 
button4.addEventListener('click', function(){ 
	if(answer.innerText=="0") 
		answer.innerText=4;
	else 
	answer.innerText=answer.innerText+4; 

})  
var button3=document.getElementById('button-3'); 
button3.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=3;
	else 
	answer.innerText=answer.innerText+3; 
oper=true;

})  
var button2=document.getElementById('button-2'); 
button2.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=2;
	else 
	answer.innerText=answer.innerText+2; 
oper=true;

})  
var button11=document.getElementById('button-11'); 
button11.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=1;
	else 
	answer.innerText=answer.innerText+1;  
oper=true;

}) 
var button0=document.getElementById('button-0'); 
button0.addEventListener('click', function(){  
	if(answer.innerText.length>=18) 
		answer.innerText="Error"; 
	else if(answer.innerText=='Error') 
		answer.innerText=answer.innerText; 
	else if(answer.innerText=="0") 
		answer.innerText=0;
	else 
	answer.innerText=answer.innerText+0; 
oper=true;

})  

var buttonequal=document.getElementById('button-eql');  
buttonequal.addEventListener('click', function(){ 
	 var k=answer.innerText; 
     console.log(k); 
     oper=true; 
     var ans="",res=""; 
     var z=-1,c=-1,jj=-1,res2; 
     for(var i=0;i<k.length;i++) 
     {   
     	if(k[i]=='+' || k[i]=='-' || k[i]=='*' || k[i]=='/' || k[i]=='%'){ 
        z=i;  
        break; 
       }  
       if(k[i]=='.') 
       {
       	c++; 
       } 
      res=res+k[i]; 
     } 
     for(var i=z+1;i<k.length;i++) 
     {
        ans=ans+k[i]; 
     }  
     if(k[z]=='+')
     var ans1=parseFloat(res)+parseFloat(ans); 
     if(k[z]=='-')
     var ans1=parseFloat(res)-parseFloat(ans);  
     if(k[z]=='*')
     var ans1=parseFloat(res)*parseFloat(ans); 
     if(k[z]=='/'){ 
     var ans1=parseFloat(res)/parseFloat(ans);  
     }
     if(k[z]=='%') { 
     	if(ans=="") 
     	{   
     		jj=1; 
     		res2=res+"%"; 
     	}
     	else 
     	var ans1=parseFloat(res)%parseFloat(ans); 
    }
     //console.log(parseFloat(res)+parseFloat(ans));   
     // console.log(res); 
     // console.log(c); 
     // console.log(z); 
     if(c!=-1){  
     	console.log(ans1);
     	var zz=ans1.toFixed(3); 
        answer.innerText=zz; 
     }
     else { 
     	if(ans1%1!=0 && k[z]=='/') 
     	{
     		ans1=ans1.toFixed(3); 
     		answer.innerText=ans1;
     	}
     	else 	
        answer.innerText=ans1;  
    } 
    if(jj==1) 
     	answer.innerText=res2;
    else if(ans=="" || z==-1) { 
     	//console.log(res); 
     	answer.innerText=res; 
     }

})   
// var button_point=document.getElementById('button-point'); 
// button_point.addEventListener('click',function(){ 
// 	if(dot==true){ 
// 	answer.innerText=answer.innerText+"."; 
//     }
//     dot=false; 
// })
var button_plus=document.getElementById('button+'); 
button_plus.addEventListener('click',function(){ 
	dot=true;
 
 	var k=answer.innerText;  
 	if(oper==true)
 	answer.innerText=answer.innerText+ "+" ;  
   oper=false;
}) 
 
var button_sub=document.getElementById('button-sub'); 
button_sub.addEventListener('click',function(){ 
	dot=true; 

 	var k=answer.innerText; 
 	if(oper==true)
 	answer.innerText=answer.innerText+ "-" ;  
  oper=false;
})  
var button_mult=document.getElementById('button-mult'); 
button_mult.addEventListener('click',function(){ 
	dot=true;
 
 	var k=answer.innerText; 
 	if(oper==true)
 	answer.innerText=answer.innerText+ "*" ;  
 oper=false; 
})  
var button_div=document.getElementById('button-div'); 
button_div.addEventListener('click',function(){ 
	dot=true;
 
 	var k=answer.innerText; 
 	if(oper==true)
 	answer.innerText=answer.innerText+ "/" ;  
   oper=false; 
})  

var button_per=document.getElementById('button-percent'); 
button_per.addEventListener('click',function(){
	if(oper==true)
	answer.innerText=answer.innerText +"%";  
oper=false;
})
 var button_ac=document.getElementById('button-ac'); 
button_ac.addEventListener('click', function(){ 
	//dot=true;
	answer.innerText=0;  
})
  
  var button_del=document.getElementById('button-del'); 
button_del.addEventListener('click', function(){ 
	 
	var hh=answer.innerText; 
	hh=hh.slice(0,-1); 
	answer.innerText=hh; 
	if(answer.innerText=="") 
		answer.innerText=0;
})
