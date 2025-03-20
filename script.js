document.addEventListener('keydown',function(event){
    if(event.key==="enter"){
        document.getElementById("ekle").click();

    }
});


document.querySelector('#ekle').onclick=function(){
    if(document.querySelector('#tasknew input' ).value.length==0){
        alert("Lütfen bir görev giriniz.");
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
        <div class="task">
        <span id="taskname">
             ${document.querySelector('#tasknew input').value}
        </span>
        <button class="delete">
         <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>`;
        document.querySelector('#tasks').style.display="block";
        

        var current_task=document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick=function(){
                this.parentNode.remove();

            }
        }
        document.querySelector('#tasknew input ').value="";
        }
}