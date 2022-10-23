AddTask=()=>{

    let task=document.getElementById('task').value;
    let desc=document.getElementById('desc').value;
    if(task==""||desc==""){
       alert("You Have Not Fill Any Thing");
    }
    else{
   //  console.log(task);
   let table=document.getElementById('table');
   const row=document.createElement('tr');
   const col1=document.createElement('td');
   const col2=document.createElement('td');
   const col3=document.createElement('td');
   document.getElementById('task').value="";
   document.getElementById('desc').value="";
   col1.innerHTML=task;
   col2.innerHTML=desc;
   col3.innerHTML="<Button class='btn' onclick='DeleteTask(this)'>Delete</Button>";
   row.appendChild(col1);
   row.appendChild(col2);
   row.appendChild(col3);
   table.appendChild(row);}
  DeleteTask=(button)=>{
   var tab=document.getElementById('table');
   tab.deleteRow(button.parentNode.parentNode.rowindex);
  }


   
       }