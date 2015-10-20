import {Component, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app',
  providers: [TaskService]
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'main.html'
})

class App {
  constructor(taskService: TaskService) {
    this.greeting = 'Welcome!';
    setTimeout(() => this.greeting = 'To Do List (v2) - ' + moment().format('LL'), 2000);
    
    this.tasks = taskService.getTasks();
    this.saveTasks = taskService.saveTasks;
  }
  
  addTask() {
    if (this.newTask.length > 0) {
      this.tasks.push({ text: this.newTask, complete: false });
      delete this.newTask;
    }
  }
  
  toggleTask(task) {
    task.complete = !task.complete;
  }
  
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

class TaskService {
  constructor() {
    this._tasks = this.loadTasks();
  }
  
  saveTasks(tasks) {
    this._tasks = tasks;
    console.log('saved');
  }
  
  getTasks() {
    return this._tasks;
  }
  
  loadTasks() {
    // Let's use our $http imagination here.
    return [
      { text: 'First example task.', complete: true },
      { text: 'Second example task.' }
    ];
  }
}

bootstrap(App);
