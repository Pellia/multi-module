// Get Data
export async function getData() {
    const path = "https://fakestoreapi.com/products?limit=21";
    try {
        const res = await fetch(`${path}`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
