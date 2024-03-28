const Todo = require('../models/todo.schema');
const todos = [];

class TodoRepository {
    
    async insert(todoText){
        try {
            console.log('todoText =>', todoText);
            const todo = new Todo(todoText);
            await todo.save();
            // todos.push({id:todos.length,text:todoText})
        } catch (error) {
            console.log('Error while inserting the todo in db::', error);
        }
       
    }

    getAll(){
        return todos;
    }

    get(id){
        return todos.filter(todo => todo.id === id)[0];
    }
}
module.exports = TodoRepository;