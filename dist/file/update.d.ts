import { Search, Updater } from "@wxn0brp/db-core/types/arg";
import { VContext } from "@wxn0brp/db-core/types/types";
/**
 * Updates a file based on search criteria and an updater function or object.
 */
declare function updateWorker(file: string, one: boolean, search: Search, updater: Updater, context?: VContext): Promise<boolean>;
export default updateWorker;
