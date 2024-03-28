
class TodoService {

    constructor (todoRepository){
        this.todoRepository = todoRepository
    }

    createTodo(todoText) {
        // any business logic we can add
        this.todoRepository.insert(todoText);
    }

    getOneTodo(id){
        return this.todoRepository.get(id);
    }

    getAllTodos(){
        return this.todoRepository.getAll();
    }
}

module.exports=TodoService;