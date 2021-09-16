const todos = [
    { title: "Todo 1", description: "Halay Çek" },
    { title: "Todo 2", description: "Zeybek Oyna" },
    { title: "Todo 3", description: "At Kafası" }
];
let todoListEl = document.getElementById("todoList");

todoList = () => {
    setTimeout(() => {
        let todoItem = "";
        todos.forEach(item => {
            todoItem += `
            <li>
                <b>${item.title}</b>
                <p>${item.description}</p>
            </li>
            `;
        });
        todoListEl.innerHTML = todoItem;
    }, 1500);   // 1 saniyede sonra gelicek veriler
};

// oluşturulan yeni todo elemanları push edilecek.
newTodo = (todo, callback) => {
    setTimeout(() => {
        todos.push(todo);
        callback();
    }, 3000);
};

// Yeni bir Todo elemanı oluşturulması ve callback yapılacak fonksiyonun gösterilmesi.
newTodo({ title: "Todo 4", description: "Leyla ile Mecnun" }, todoList);

todoList();     // Bunu kaldırırsa elemanların hepsi hep beraber gelir.