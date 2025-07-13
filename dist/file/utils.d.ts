export interface LineReader extends AsyncIterable<string> {
    close: () => void;
}
export declare function createRL(file: string): LineReader;
