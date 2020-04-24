import { memory } from "system"
import ObjectUsingTypescript from "./typescriptModule.js"

class ObjectUsingClass {
  bigFunction = function(x) {
    // This increases the size of index.js.snapshot by about 10kB.
    // No matter how much code is put in here, the size of object instances doesn't change.
    // Declaring it like this makes no difference to memory use: this.bigFunction  = (x) => {
    x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
    return x
  }
}

function ObjectNotUsingPrototype() {
  this.bigFunction = function(x) {
    // This increases the size of index.js.snapshot by about 10kB.
    // No matter how much code is put in here, the size of object instances doesn't change.
    // Declaring it like this makes no difference to memory use: this.bigFunction  = (x) => {
    x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
    return x
  }
}

function ObjectUsingPrototype() {
}

ObjectUsingPrototype.prototype.bigFunction = function(x) {
  if (x) return x
  x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
  return x
}

function ObjectUsingClosure() {
  // Involves 'object composition': returns an object that contains public members.
  // Can have private members; anything not included in return {} won't be public.
  const bigFunction = (x) => {
    if (x) return x
    x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
    return x
  }
  return {bigFunction}
}

const ObjectUsingClosureFactory = {
  construct() {
    const bigFunction = (x) => {
      if (x) return x
      x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
      return x
    }
    return {bigFunction}
  }
}

let memBefore = memory.js.used
let memAfter

//***********************************************************************************************
//******************************* ObjectNotUsingPrototype ***************************************
//***********************************************************************************************

console.log('', 'ObjectNotUsingPrototype')

// Create three instances of ObjectNotUsingPrototype and see how much memory disappears each time:

const objectNotUsingPrototype1 = new ObjectNotUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectNotUsingPrototype2 = new ObjectNotUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectNotUsingPrototype3 = new ObjectNotUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of ObjectNotUsingPrototype objects so they can't be optimised away:
let rubbish = objectNotUsingPrototype1.bigFunction(0) + objectNotUsingPrototype2.bigFunction(0) + objectNotUsingPrototype3.bigFunction(0)

// Check whether object functions refer to the same thing:
let objectNotUsingPrototype1BigFunction = objectNotUsingPrototype1.bigFunction;
let objectNotUsingPrototype2BigFunction = objectNotUsingPrototype2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectNotUsingPrototype1BigFunction === objectNotUsingPrototype2BigFunction}`)

//***********************************************************************************************
//******************************* ObjectUsingPrototype ******************************************
//***********************************************************************************************

console.log('','ObjectUsingPrototype')

// Create three instances of ObjectUsingPrototype and see how much memory disappears each time:

memBefore = memory.js.used
const objectUsingPrototype1 = new ObjectUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingPrototype2 = new ObjectUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingPrototype3 = new ObjectUsingPrototype()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of ObjectUsingPrototype objects so they can't be optimised away:
rubbish = objectUsingPrototype1.bigFunction(1) + objectUsingPrototype2.bigFunction(1) + objectUsingPrototype3.bigFunction(1)

// Check whether object functions refer to the same thing:
let objectUsingPrototype1BigFunction = objectUsingPrototype1.bigFunction;
let objectUsingPrototype2BigFunction = objectUsingPrototype2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectUsingPrototype1BigFunction === objectUsingPrototype2BigFunction}`)

//***********************************************************************************************
//*********************************** ObjectUsingClass ******************************************
//***********************************************************************************************

console.log('','ObjectUsingClass')

// Create three instances of ObjectUsingClass and see how much memory disappears each time:

memBefore = memory.js.used
const objectUsingClass1 = new ObjectUsingClass()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClass2 = new ObjectUsingClass()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClass3 = new ObjectUsingClass()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of ObjectUsingClass objects so they can't be optimised away:
rubbish = objectUsingClass1.bigFunction(1) + objectUsingClass2.bigFunction(1) + objectUsingClass3.bigFunction(1)

// Check whether object functions refer to the same thing:
let objectUsingClass1BigFunction = objectUsingClass1.bigFunction;
let objectUsingClass2BigFunction = objectUsingClass2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectUsingClass1BigFunction === objectUsingClass2BigFunction}`)

//***********************************************************************************************
//********************************* ObjectUsingClosure ******************************************
//***********************************************************************************************

console.log('','ObjectUsingClosure')

// Create three instances of ObjectUsingClosure and see how much memory disappears each time:

memBefore = memory.js.used
const objectUsingClosure1 = new ObjectUsingClosure()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClosure2 = new ObjectUsingClosure()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClosure3 = new ObjectUsingClosure()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of ObjectUsingPrototype objects so they can't be optimised away:
rubbish = objectUsingClosure1.bigFunction(1) + objectUsingClosure2.bigFunction(1) + objectUsingClosure3.bigFunction(1)

// Check whether object functions refer to the same thing:
let objectUsingClosure1BigFunction = objectUsingClosure1.bigFunction;
let objectUsingClosure2BigFunction = objectUsingClosure2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectUsingClosure1BigFunction === objectUsingClosure2BigFunction}`)

//***********************************************************************************************
//********************************* ObjectUsingClosureFactory ***********************************
//***********************************************************************************************

console.log('','ObjectUsingClosureFactory')

// Create three instances and see how much memory disappears each time:

memBefore = memory.js.used
const objectUsingClosureFactory1 = ObjectUsingClosureFactory.construct()    // don't use 'new'; instead, call construct()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClosureFactory2 = ObjectUsingClosureFactory.construct()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingClosureFactory3 = ObjectUsingClosureFactory.construct()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of objects so they can't be optimised away:
rubbish = objectUsingClosureFactory1.bigFunction(1) + objectUsingClosureFactory2.bigFunction(1) + objectUsingClosureFactory3.bigFunction(1)

// Check whether object functions refer to the same thing:
let objectUsingClosureFactory1BigFunction = objectUsingClosureFactory1.bigFunction;
let objectUsingClosureFactory2BigFunction = objectUsingClosureFactory2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectUsingClosureFactory1BigFunction === objectUsingClosureFactory2BigFunction}`)

//***********************************************************************************************
//************************************* ObjectUsingTypescript ***********************************
//***********************************************************************************************

// Probably identical to ObjectUsingClosure.

console.log('','ObjectUsingTypescript')

// Create three instances and see how much memory disappears each time:

memBefore = memory.js.used
const objectUsingTypescript1 = ObjectUsingTypescript()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingTypescript2 = ObjectUsingTypescript()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

const objectUsingTypescript3 = ObjectUsingTypescript()
memAfter = memory.js.used; console.log(`mem used instantiating object = ${memAfter-memBefore}`); memBefore = memAfter

// Force use of objects so they can't be optimised away:
rubbish = objectUsingTypescript1.bigFunction(1) + objectUsingTypescript2.bigFunction(1) + objectUsingTypescript3.bigFunction(1)

// Check whether object functions refer to the same thing:
let objectUsingTypescript1BigFunction = objectUsingTypescript1.bigFunction;
let objectUsingTypescript2BigFunction = objectUsingTypescript2.bigFunction;
console.log(`Do object functions refer to the same thing? ${objectUsingTypescript1BigFunction === objectUsingTypescript2BigFunction}`)