// Create Card
export function createCard(data, storeData) {
    const div = document.getElementById("shopping-container");
    for (let i = 0; i < data.length; i++) {
        // Data
        const title = data[i].title;
        const price = data[i].price;
        const image = data[i].image;

        // li item
        const li = document.createElement("li");
        li.classList.add("bg-white", "list-none", "my-2", "p-2", "flex", "flex-col", "rounded-md", "border", "shadow-md");

        // title
        const titleElement = document.createElement("p");
        titleElement.classList = "capitalize";
        titleElement.textContent = title;

        // Image
        const imageElement = document.createElement("img");
        imageElement.src = image;

        // Price
        const priceElement = document.createElement("p");
        priceElement.classList = "capitalize";
        priceElement.textContent = price;

        // Save Button
        const saveBtn = document.createElement("button");
        const randomUUID = self.crypto.randomUUID();
        saveBtn.textContent = "Save";
        saveBtn.classList.add("bg-gray-600", "rounded-lg", "p-2", "outline-1", "text-white", "text-lg");
        saveBtn.addEventListener("click", () => {
            storeData(data[i], randomUUID);
        });

        // Append
        div.append(li);
        li.append(titleElement, imageElement, priceElement, saveBtn);
    }
}
