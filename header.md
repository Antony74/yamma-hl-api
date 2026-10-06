# yamma-hl-api

The aim of this package is to provide access to a Metamath unifier - Yamma - from the JavaScript platform in the simplest possible way.

``` TypeScript
import { createUnifier } from 'yamma-hl-api';
const unifier = createUnifier(mmData);
await unifier.deepParse();
const result = unifier.unify(mmpData);
```

***Y***amma's ***a*** ***M***eta***m***ath proof ***A***ssistant

[Metamath](https://us.metamath.org/index.html) is a simple and flexible computer-processable language that supports rigorously verifying, archiving, and presenting mathematical proofs

## Alternatives

[List of Metamath proof assistants](https://us.metamath.org/other.html#assistants).  Yamma and metamath-lamp are the ones that target the JavaScript platform.  Neither are currently available as packages, except as exposed here.

Simple does not necessarily mean best: you could also consider using the Language Server Protocol as described [here](https://groups.google.com/g/metamath/c/KyZpCm8Dhhc/m/APyqoXeQAwAJ)

## Documentation
