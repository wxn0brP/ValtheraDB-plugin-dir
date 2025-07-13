import { Search } from "@wxn0brp/db-core/types/arg";
import { FindOpts } from "@wxn0brp/db-core/types/options";
import { VContext } from "@wxn0brp/db-core/types/types";
/**
 * Asynchronously finds entries in a file based on search criteria.
 */
export declare function find(file: string, arg: Search, context?: VContext, findOpts?: FindOpts): Promise<any[] | false>;
/**
 * Asynchronously finds one entry in a file based on search criteria.
 */
export declare function findOne(file: string, arg: Search, context?: VContext, findOpts?: FindOpts): Promise<any | false>;
