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
    return new Promise((resolve, reject) => {
        // Veritabanı Simülasyonu:
        setTimeout(() => {
            todos.push(todo);
            const err = false;   // Hata olup olmadığı belirt
            if (!err) {
                resolve();
            } else {
                reject("Hata!!!");
            }
            callback();
        }, 3000);
    });
};

// Yeni bir Todo elemanı oluşturulması ve callback yapılacak fonksiyonun gösterilmesi.
newTodo({ title: "Todo 4", description: "Leyla ile Mecnun" }, todoList)
    .then(response => {
        todoList();
    })
    .catch(err => {
        console.log(err)
    });

// Promies ALL
const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("2. Promise");
    // }, 2000);
    setTimeout(resolve, 2000, "2. Promise");    // SetTimeout'ın tek satırda yazımı. yukardaki ile aynı işleve sahip.
});
const p3 = "1071-Malazgirt";
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

// promise.all parametre olarak array alır.
Promise.all([p1, p2, p3, p4]).then(promises => {
    console.log("promises", promises);
})