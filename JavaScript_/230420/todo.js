class Todo {
  constructor(item, finish){
    this.item = item;
    this.finish = finish;
  }
  
  changeState(){
    this.finish = !this.finish;
  }
}

class TodoManager {
  constructor (){
    this.list = [];
  }
  
  addItem(item){
    const todo = new Todo(item);
    this.list.push(todo);
  }

  getItem(){
    return this.list;
  }

  getLeftTodoCount(){
    return this.list.filter((item) => !item.finish).length;
  }
}

const todo = new TodoManager();