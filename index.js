function greet() {
    alert(`Hello ${prompt('What is your name?')}`);
    let a= parseInt(prompt ('How old are you?'));
      if (confirm('Have you had your birthday yet this year')) {
        alert([new Date(2023)-a]);
     } else {
        alert([new Date(2023)-a-1]);
     }
}
