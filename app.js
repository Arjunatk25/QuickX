let button= document.getElementById('add')//onclick
let TodoList=document.getElementById('TodoList')//div
let input_value=document.getElementById('io_array')//input text box
/*
ENTERS DATA
1-copy the value
2-push to todo div

*/

let todos=[]


// click 
button.addEventListener('click',()=>{
    todos.push(input_value.value)
    addtodo(input_value.value)// value for valid 
    input_value.value=''
})
// display fn
let addtodo=(cpyvar)=>{

    let para=document.createElement('p')
    para.innerText=cpyvar
    //now add this to todolist div
    TodoList.appendChild(para)


    //strike out
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(cpyvar)
    })  
    para.addEventListener('dblclick',()=>{
        TodoList.removeChild(para)
        remove(cpyvar)
    })  
}
// delete  
function remove(cpyvar){
   let  index=todos.indexOf(cpyvar)
    if(index>-1){
        todos.splice(index,1)
    }

}


//save 
function saveTasks(){
    localStorage.setItem("tasks",taskDiv.innerHTML);
}

