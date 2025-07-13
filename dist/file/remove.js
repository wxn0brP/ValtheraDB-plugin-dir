import { existsSync, promises, appendFileSync } from "fs";
import { createRL } from "./utils.js";
import hasFieldsAdvanced from "@wxn0brp/db-core/utils/hasFieldsAdvanced";
import { parseData } from "../format.js";
import { pathRepair } from "@wxn0brp/db-core/customFileCpu";
/**
 * Removes entries from a file based on search criteria.
 */
async function removeWorker(file, one, search, context = {}) {
    file = pathRepair(file);
    if (!existsSync(file)) {
        await promises.writeFile(file, "");
        return false;
    }
    await promises.copyFile(file, file + ".tmp");
    await promises.writeFile(file, "");
    const rl = createRL(file + ".tmp");
    let removed = false;
    for await (let line of rl) {
        if (one && removed) {
            appendFileSync(file, line + "\n");
            continue;
        }
        const data = parseData(line);
        if (typeof search === "function") {
            if (search(data, context)) {
                removed = true;
                continue;
            }
        }
        else if (typeof search === "object" && !Array.isArray(search)) {
            if (hasFieldsAdvanced(data, search)) {
                removed = true;
                continue;
            }
        }
        appendFileSync(file, line + "\n");
    }
    await promises.writeFile(file + ".tmp", "");
    return removed;
}
export default removeWorker;
