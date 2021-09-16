// Örn senaryo: Veritabanından veri çekiceksin ve işleyeceksin fakat veriler geç geldi ama senin forEach döngün o verileri beklemeden işleme başlıyor. Burada hata alırsın. Async&await yapıda ise bu verileri bekler ve öyle işleme başlar.

fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    data.slice(-5).forEach(i => {
        console.log("i: ", i)
    });
};

fetchPosts();