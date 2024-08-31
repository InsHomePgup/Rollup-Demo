import * as Demo from './nameSpace.ts'  // namespace imports (Import everything from the source module as an object which exposes all the source module's named exports as properties and methods.)
import {testName} from "./named.ts";  // named imports (Import a specific item from a source module, with its original name.)
import {version} from './version.ts'
import comm from './comm.ts'  // default imports  (Import the default export of the source module.)
/**
 * Empty Import
 * This is useful for polyfills, or when the primary purpose of the imported code is to muck about with prototypes.
 */
import './Empty.ts' //  Empty Import (Load the module code, but don't make any new objects available.)
comm.comm.abc();

/**
 * Dynamic Import: Import modules using the dynamic import API.
 * This is useful for code-splitting applications and using modules on-the-fly.
 */
import('./Dynamic.ts').then((module)=>{
    console.log("export module",module)
})

/**
 * Is import value can change?
 */

import {count,increment} from "./change.ts";
console.log(count)
increment();
console.log(count)
// count++;  // It was error  : TS2632: Cannot assign to count because it is an import.


// @ts-ignore
// console.log(Demo.myName,version,testName)
