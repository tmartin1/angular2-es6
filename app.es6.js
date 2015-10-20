import {Component, Pipe, PipeTransform, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app',
  providers: [TaskService]
})

@Pipe({
  name: 'taskFilter'
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  // pipes: [taskFilter],
  templateUrl: 'main.html'
})

class App {
  constructor(taskService: TaskService) {
    this.greeting = 'Welcome!';
    setTimeout(() => this.greeting = 'To Do List (v3) - ' + moment().format('LL'), 2000);
    
    this.navtabs = [ 'All Tasks', 'To Do', 'Completed' ];
    this.currentFilter = this.navtabs[0];
    
    this.tasks = taskService.getTasks();
    this.saveTasks = taskService.saveTasks;
  }
  
  addTask() {
    if (this.newTask.length > 0) {
      this.tasks.push({ text: this.newTask, complete: false });
      this.newTask = '';
    }
  }
  
  toggleTask(task) {
    task.complete = !task.complete;
  }
  
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
  
  filterTasks(setting) {
    this.currentFilter = setting;
    console.log(this.currentFilter);
  }
  
  ghettoFilter(isComplete) {
    if (this.currentFilter === 'To Do') return !!isComplete;
    else if (this.currentFilter === 'Completed') return !isComplete;
    else return false;
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
      { text: 'Second example task.', complete: false }
    ];
  }
}

class taskFilter {
  transform(task, args) {
    console.log('transforming', task, args[0]);
    return !!task.completed ? task.text : null;
  }
}

bootstrap(App);
