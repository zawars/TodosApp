export class InitTodos {
  load() {
    if (localStorage.getItem("todos") == null || localStorage.getItem("todos") == undefined) {
      console.log("No todos found... Creating");

      var todos = [
        {
          text: "Good morning Sensys."
        },
        {
          text: "Lunch at 2pm."
        },
        {
          text: "Meeting at 5pm."
        },
        {
         text: "Hello World"
        }
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
    else {
      console.log("Todos Found....");
    }
  }
}
