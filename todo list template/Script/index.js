document.querySelector('form').addEventListener('submit',myfunction)
// var arr=[]
//by refreshing arr got empty and local storage date updated not taking old value..
var arr;
if(localStorage.getItem('tudoData')==null){
    arr=[]
}else{
    arr=JSON.parse(localStorage.getItem('tudoData'))
}

function myfunction(){
    event.preventDefault();
    // console.log('amit')
    var name=document.querySelector('#name').value
    var quantity=document.querySelector('#qty').value
    var priority=document.querySelector('#priority').value
    // console.log(name,quantity,priority)
    var obj={
        itemName:name,
        itemQty:quantity,
        itemPrio:priority
    }
    // console.log(obj)
    arr.push(obj)
    // console.log(arr)
    localStorage.setItem('tudoData',JSON.stringify(arr))
    alert("your form has been submitted")
    // console.log(localStorage.getItem('tudoData'))
    // name=''
    // quantity=''
    // priority=''
}