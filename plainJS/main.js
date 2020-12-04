//submit event handler for form (Add) 
document.querySelector('form').addEventListener('submit', handleName);

//handleName function 
function handleName(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addFriend(input.value);
    input.value = '';
}

//addFriend function 
function addFriend(friend){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${friend}</span>
        <button name="deleteFriend" >Delete Friend</button>
    `;
    li.classList.add('friend-item');
    ul.appendChild(li);
}


//submit event handle based on click (delete)
document.querySelector('ul').addEventListener('click',handleDeleteClick);
function handleDeleteClick(e){
    if(e.target.name == 'deleteFriend'){
        deleteFriend(e);
    }
}

//deleteFriend function
function deleteFriend(e){
    let item = e.target.parentNode;
    item.addEventListener('transitioned',function(){
        item.remove();
    });

    item.classList.add('delete-friend')
}