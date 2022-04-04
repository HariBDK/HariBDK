var display=document.getElementsByClassName("display");
function saving(){
    display[0].style.display='none';
    display[1].style.display='block';
}
function next(){
    if(document.getElementById('txtbox').value!=""){
    display[1].style.display='none';
    display[2].style.display='block';
    }
}
function pincode(){
    if(document.getElementById('txtbox1').value=="1234"){
        document.getElementById('processing').style.visibility='visible';
        setInterval(() => {
        display[2].style.display='none';
        display[3].style.display='block';
        }, 5000);
        setInterval(() => {
           window.open('../ATM/index.html');
        }, 8000);
    }
    else{
       document.getElementById('wrongpin').style.visibility='visible';
    }
}
onload=function(){
    var keypad=this.document.querySelectorAll('td');
    for(let i=0; i<keypad.length;i++){
        keypad[i].addEventListener('click',function(){
            document.getElementById('txtbox').value+=keypad[i].innerText;
            if(display[2].style.display=='block'){
                document.getElementById('txtbox1').value+=keypad[i].innerText;
            }
        })
    }
}