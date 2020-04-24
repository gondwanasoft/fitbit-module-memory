# fitbit-module-memory
Investigation of memory consumption of various ways of structuring a module.

Three objects are created in three different ways. Each object can access a large function.

## App Output

```
ObjectNotUsingPrototype

mem used instantiating object = 88

mem used instantiating object = 48

mem used instantiating object = 48

Do object functions refer to the same thing? false

ObjectUsingPrototype

mem used instantiating object = 16

mem used instantiating object = 16

mem used instantiating object = 16

Do object functions refer to the same thing? true

ObjectUsingClass

mem used instantiating object = 88

mem used instantiating object = 48

mem used instantiating object = 48

Do object functions refer to the same thing? false

ObjectUsingClosure

mem used instantiating object = 96

mem used instantiating object = 56

mem used instantiating object = 56

Do object functions refer to the same thing? false

ObjectUsingClosureFactory

mem used instantiating object = 48

mem used instantiating object = 48

mem used instantiating object = 48

Do object functions refer to the same thing? false

ObjectUsingTypescript

mem used instantiating object = 48

mem used instantiating object = 48

mem used instantiating object = 48

Do object functions refer to the same thing? false
```

## Tentative Conclusions

* Using prototype is only significantly beneficial if there are lots of functions (and memory is tight).
* ObjectUsingClosure is a good vanilla JS approach because:
  * it leads nicely into Sergio's recommended TS structure
  * it provides reasonable support for private members