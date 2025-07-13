import { Search } from "@wxn0brp/db-core/types/arg";
import { VContext } from "@wxn0brp/db-core/types/types";
/**
 * Removes entries from a file based on search criteria.
 */
declare function removeWorker(file: string, one: boolean, search: Search, context?: VContext): Promise<boolean>;
export default removeWorker;
