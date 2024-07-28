import * as Demo from './demo'  // namespace imports (Import everything from the source module as an object which exposes all the source module's named exports as properties and methods.)
import {testName} from "./test";  // named imports (Import a specific item from a source module, with its original name.)
import {version} from './version'
import comm from './comm'  // default imports  (Import the default export of the source module.)
comm.comm.abc();
console.log(Demo.myName,version,testName)
