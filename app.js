// Import
import { getData } from "./modules/index.js";

// Start
const data = getData().then((res) => {
    console.log(res[0].title);
});
