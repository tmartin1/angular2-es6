import {Component, View, Control, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app'
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'main.html'
})

class App {
  constructor() {
    this.greeting = 'Welcome!';
    this.tasks = this.defaultTasks();
    setTimeout(() =>
      this.greeting = 'To Do List (v1) - ' + moment().format('LL'), 2000);
  }
  
  addTask() {
    if (this.newTask.length > 0) {
      this.tasks.push({ text: this.newTask, complete: false });
      this.newTask = '';
    }
  }
  
  removeTask(index) {
    this.tasks.splice(index,1);
  }
  
  defaultTasks() {
    return [
      { text: 'First example task.', complete: true },
      { text: 'Second example task.' }
    ];
  }
  
}

bootstrap(App);
