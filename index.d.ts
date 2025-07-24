export function random(bytes: any): any;
export function customRandom(alphabet: any, defaultSize: any, getRandom: any): (size?: any) => string;
export function customAlphabet(alphabet: any, size?: number): (size?: any) => string;
export function nanoid(size?: number): string;
export { urlAlphabet } from "./url-alphabet/index.js";
