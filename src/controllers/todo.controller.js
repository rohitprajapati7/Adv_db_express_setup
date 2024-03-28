const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');

const todoService = new TodoService(new TodoRepository);

function getTodos (req, res){
    const response = todoService.getAllTodos();
    return res.json({data:response})
}

function createTodo (req, res){
    const todoText = req.body;
    todoService.createTodo(todoText);
    return res.json({data:'new todo created'})
}

module.exports = {getTodos, createTodo};