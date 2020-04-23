# fitbit-module-memory
Investigation of memory consumption of various ways of structuring a module.

Three objects are created in three different ways. Each object can access a function of about 10kB in size.

(I attempted to verify the existence and size of the function by examining its impact on index.js.snapshot: without the function, that file becomes about 10kB smaller. The function is callable and results from it are as expected.)

The question: why doesn't memory availability reduce by about 10kB whenever instances of the object are created (and prototype is NOT used)?

## App output

App: mem used instantiating ObjectNotUsingPrototype = 88                        (app/index.js:177,28)

App: mem used instantiating ObjectNotUsingPrototype = 48                        (app/index.js:180,28)

App: mem used instantiating ObjectNotUsingPrototype = 48                        (app/index.js:183,28)

App: Do objectNotUsingPrototype functions refer to the same thing? false         (app/index.js:191,1)

App: mem used instantiating ObjectUsingPrototype = 16                           (app/index.js:201,28)

App: mem used instantiating ObjectUsingPrototype = 16                           (app/index.js:204,28)

App: mem used instantiating ObjectUsingPrototype = 16                           (app/index.js:207,28)

App: Do objectUsingPrototype functions refer to the same thing? true             (app/index.js:215,1)

App: mem used instantiating ObjectUsingClass = 88                               (app/index.js:223,28)

App: mem used instantiating ObjectUsingClass = 48                               (app/index.js:226,28)

App: mem used instantiating ObjectUsingClass = 48                               (app/index.js:229,28)