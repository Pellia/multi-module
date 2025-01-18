// Import
import { getData, createCard, storeData } from "./modules/index.js";

// Start
getData().then((res) => {
    createCard(res, storeData);
});
