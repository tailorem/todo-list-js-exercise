//jshint esversion: 6
// Arrays to keep track of each task's state

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}


const task1 = newTask("Clean cat litter", "Take all the 💩 out");
const task2 = newTask("laundry!", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
