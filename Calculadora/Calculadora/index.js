function view(num){
    document.getElementById('resultado').value+=num;
}
function compute(num){
  let  a=document.getElementById('resultado').value;
    b=eval(a)
    document.getElementById('resultado').value=b;
}
function clears(){
    document.getElementById('resultado').value=""
}