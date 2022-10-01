var addTaskBtn=document.getElementById("addTaskBtn");

var tasks = [{
    "title": "Do the code review",
    "desc": "Do all the steps according to how it was described.",
    "image": "/images/study.jpg",
    "importance": 0
},
{
    "title": "Go groceries shopping",
    "desc": "Buy all the ingredients for this weeek menu.",
    "image": "/images/shopping.jpg",
    "importance": 0
},
{
    "title": "Buy present for Kristina's bday",
    "desc": "Choose something from the apple store.",
    "image": "/images/present.jpg",
    "importance": 0
},
{
    "title": "Clean the apartment",
    "desc": "Autumn cleaning.",
    "image": "/images/room.jpg",
    "importance": 0
},
{
    "title": "Organize my desk",
    "desc": "Put all the stuff into correct folders.",
    "image": "/images/desk.jpg",
    "importance": 0
},
{
    "title": "Visit parents",
    "desc": "Visit mum and dad.",
    "image": "/images/parents.jpeg",
    "importance": 0
}
];

let cardContainer;

let cardColumns = document.createElement('div');
cardColumns.className = 'card-columns';
cardColumns.style = 'height: 50%; width:50%; margin: auto;';


let createTask = (task) => {

    let card = document.createElement('div');
    card.className = 'card bg-light';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h4');
    title.innerText = task.title;
    title.className = 'card-title';

    let desc = document.createElement('p');
    desc.innerText = task.desc;
    desc.className = 'card-text';

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = task.image;

    let btn = document.createElement('a');
    btn.className = 'btn btn-success';
    btn.text = task.importance.toString();
    btn.addEventListener('click', function onClick() {
        if(task.importance<5){
            task.importance++;

            btn.text = task.importance.toString();

            if(task.importance<2){
                btn.className = 'btn btn-success';
            }else if(task.importance>=2 && task.importance<=3){
                btn.className = 'btn btn-warning';
            }else{
                btn.className = 'btn btn-danger';
            }
        } 
        
    });

    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    cardBody.appendChild(btn);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardColumns.appendChild(card);

}

let initListOfTasks = () => {

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
        createTask(task);
    });
    cardContainer.appendChild(cardColumns);
    
};

var addNewTask = function(){
    createTask({
        "title": document.getElementById("newTaskTitle").value,
        "desc": document.getElementById("newTaskDesc").value
    });
}

var sortItemsOnImportance = function(){

    tasks = tasks.sort((a, b) => {
        if (a.importance < b.importance) {
          return -1;
        }
    });

    cardColumns = document.createElement('div');
    cardColumns.className = 'card-columns';
    cardColumns.style = 'height: 50%; width:50%; margin: auto;';

    initListOfTasks();

}

addTaskBtn.addEventListener("click",addNewTask);