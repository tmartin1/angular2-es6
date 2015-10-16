import {Component, View, Control, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app',
  providers: [Service]
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'main.html'
})

class App {
  constructor(service: Service) {
    this.greeting = service.greeting();
    setTimeout(() => this.greeting = 'To Do List - ' + moment().format('LL'), 2000);
    
    this.tasks = this.defaultTasks();
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

class Service {
  constructor() {
    this.title = 'Welcome';
  }
  
  greeting() {
    return this.title;
  }
}

bootstrap(App);
