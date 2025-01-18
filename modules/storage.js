// Store Data
export function storeData(data, id) {
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    const newArray = [{ id: id, title: data.title, image: data.image, price: data.price }, ...storedArray];
    localStorage.setItem("myArray", JSON.stringify(newArray));
}
