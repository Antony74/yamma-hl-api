# yamma-hl-api

A high level interface to Yamma, a Metamath proof assistant.

This package makes it easy to use Yamma’s unification engine from JavaScript or TypeScript without dealing with lower-level implementation details.

```ts
import { createUnifier } from 'yamma-hl-api';

const unifier = createUnifier(mmData);
const result = unifier.unify(mmpData);
```

***Y***amma's ***a*** ***M***eta***m***ath proof ***A***ssistant designed to help verify and work with mathematical proofs using a machine-processable language. [Metamath](https://us.metamath.org/index.html) is a simple and flexible computer-processable language that supports rigorously verifying, archiving, and presenting mathematical proofs.


## Alternatives

[List of Metamath proof assistants](https://us.metamath.org/other.html#assistants).  There are a number of proof assistants for Metamath. Yamma and metamath-lamp are the JavaScript-focused options.  Neither is currently otherwise distributed as a standalone package.

Simple does not necessarily mean best: for some workflows, you may also want to consider the Language Server Protocol approach as recommended [here](https://groups.google.com/g/metamath/c/KyZpCm8Dhhc/m/APyqoXeQAwAJ).

## Documentation
