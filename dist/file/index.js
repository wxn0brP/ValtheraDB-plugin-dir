import update from "./update.js";
import remove from "./remove.js";
import { find, findOne } from "./find.js";
import { appendFileSync } from "fs";
import { stringifyData } from "../format.js";
const vFileCpu = {
    add: async (file, data) => {
        const dataString = stringifyData(data);
        appendFileSync(file, dataString + "\n");
    },
    find,
    findOne,
    update,
    remove,
};
export default vFileCpu;
