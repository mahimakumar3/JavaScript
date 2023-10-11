let input = prompt("what would you like to do");
const todos = ['Collect Cheicken eggs','Clean Litter box'];
while(input !=='quit' && input!== 'q'){
    if(input === 'list'){
        console.log('************');
        for(let i=0; i< todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
    }
    else if(input === 'new'){
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }

    else if(input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`deleted ${deleted}`);
        }
        else{
            console.log('Unknown index');
        }
       
    }
    else if(input === 'quit'){
        break;
    }
    input = prompt('what would you like to do');
}
console.log('its over!');