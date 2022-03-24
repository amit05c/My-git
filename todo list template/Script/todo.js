// console.log('amit')
var local_data=JSON.parse(localStorage.getItem('tudoData'))
// console.log(local_data)
// var completed=[]
var completed=JSON.parse(localStorage.getItem('markAsCompleted')) || []
local_data.map(function(elem,index){
   var row=document.createElement('tr')
   var col1=document.createElement('td')

   
   col1.innerText=elem.itemName

   var col2=document.createElement('td')
   col2.innerText=elem.itemQty

   var col3=document.createElement('td')
   col3.innerText=elem.itemPrio

   var col4=document.createElement('td')
   var btn=document.createElement('button')
   col4.append(btn)
   btn.innerText="completed"
   btn.style.color='red'
   btn.style.cursor='pointer'
   btn.addEventListener('click',function(){
    markASCompleted(elem,index)
   })

   row.append(col1,col2,col3,col4)
   //    console.log(col1,col2,col3)
//    console.log(row)
   document.querySelector("#body").append(row)
})

function markASCompleted(elem,index){
    // console.log('rupu')
    // console.log(elem)
    completed.push(elem)
    // console.log(completed)
    localStorage.setItem('markAsCompleted',JSON.stringify(completed))

}