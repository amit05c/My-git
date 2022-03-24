var markCompleted=JSON.parse(localStorage.getItem('markAsCompleted')) || []
// console.log(markCompleted,'i')

markCompleted.map(function(elem){
    console.log(elem)
    var row=document.createElement('tr')

    var col1=document.createElement('td')
      col1.textContent=elem.itemName

    var col2=document.createElement('td')
    col2.textContent=elem.itemQty

    var col3=document.createElement('td')
    col3.textContent=elem.itemPrio

    // console.log(col1.textContent,col2,col3)
    row.append(col1,col2,col3)
    document.querySelector('#body').append(row)

})