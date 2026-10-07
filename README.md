# yamma-hl-api

The aim of this package is to provide access to a Metamath unifier - Yamma - from the JavaScript platform in the simplest possible way.

``` TypeScript
import { createUnifier } from 'yamma-hl-api';
const unifier = createUnifier(mmData);
const result = unifier.unify(mmpData);
```

***Y***amma's ***a*** ***M***eta***m***ath proof ***A***ssistant

[Metamath](https://us.metamath.org/index.html) is a simple and flexible computer-processable language that supports rigorously verifying, archiving, and presenting mathematical proofs

## Alternatives

[List of Metamath proof assistants](https://us.metamath.org/other.html#assistants).  Yamma and metamath-lamp are the ones that target the JavaScript platform.  Neither are currently available as packages, except as exposed here.

Simple does not necessarily mean best: you could also consider using the Language Server Protocol as described [here](https://groups.google.com/g/metamath/c/KyZpCm8Dhhc/m/APyqoXeQAwAJ)

## Documentation

<a name="unifiervariablescreateunifiermd"></a>

### Variable: createUnifier

> `const` **createUnifier**: [`CreateUnifier`](#unifierdefinitionstype-aliasescreateunifiermd)

Defined in: [unifier.ts:20](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifier.ts#L20)


<a name="truncateafterfunctionstruncateaftermd"></a>

### Function: truncateAfter()

> **truncateAfter**(`mmData`, `proofId`, `config?`): `string`

Defined in: [truncateAfter.ts:9](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/truncateAfter.ts#L9)

#### Parameters

##### mmData

`string`

##### proofId

`string`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`string`


<a name="defaultconfigvariablesdefaultconfigmd"></a>

### Variable: defaultConfig

> `const` **defaultConfig**: [`UnifierConfigComplete`](#unifierdefinitionstype-aliasesunifierconfigcompletemd)

Defined in: [defaultConfig.ts:10](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/defaultConfig.ts#L10)


<a name="truncatebeforefunctionstruncatebeforemd"></a>

### Function: truncateBefore()

> **truncateBefore**(`mmData`, `proofId`, `config?`): `string`

Defined in: [truncateBefore.ts:9](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/truncateBefore.ts#L9)

#### Parameters

##### mmData

`string`

##### proofId

`string`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`string`


<a name="truncatecountfunctionstruncatecountmd"></a>

### Function: truncateCount()

> **truncateCount**(`mmData`, `count`, `config?`): `string`

Defined in: [truncateCount.ts:5](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/truncateCount.ts#L5)

#### Parameters

##### mmData

`string`

##### count

`number`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`string`


<a name="unifiervariablesparsemmmd"></a>

### Variable: parseMm

> `const` **parseMm**: [`ParseMm`](#unifierdefinitionstype-aliasesparsemmmd)

Defined in: [unifier.ts:118](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifier.ts#L118)


<a name="unifiervariablesparsemmpmd"></a>

### Variable: parseMmp

> `const` **parseMmp**: [`ParseMmp`](#unifierdefinitionstype-aliasesparsemmpmd)

Defined in: [unifier.ts:132](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifier.ts#L132)


<a name="unifierdefinitionstype-aliasescreatemmparsermd"></a>

### Type Alias: CreateMmParser

> **CreateMmParser** = (...`params`) => `MmParser`

Defined in: [unifierDefinitions.ts:27](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L27)

#### Parameters

##### params

...`ConstructorParameters`\<*typeof* `MmParser`\>

#### Returns

`MmParser`


<a name="unifierdefinitionstype-aliasescreateunifiermd"></a>

### Type Alias: CreateUnifier

> **CreateUnifier** = (`mmData`, `config?`) => [`Unifier`](#unifierdefinitionstype-aliasesunifiermd)

Defined in: [unifierDefinitions.ts:60](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L60)

#### Parameters

##### mmData

`string` \| `MmParser`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

[`Unifier`](#unifierdefinitionstype-aliasesunifiermd)


<a name="unifierdefinitionstype-aliasesmmconfigmd"></a>

### Type Alias: MmConfig

> **MmConfig** = `Omit`\<`IExtensionSettings` & `object`, `"variableKindsConfiguration"` \| `"proofMode"`\>

Defined in: [unifierDefinitions.ts:29](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L29)


<a name="unifierdefinitionstype-aliasesmmpunifierconfigmd"></a>

### Type Alias: MmpUnifierConfig

> **MmpUnifierConfig** = `Omit`\<`MmpUnifierArgs` & `object`, `"mmpParser"` \| `"proofMode"`\>

Defined in: [unifierDefinitions.ts:38](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L38)


<a name="unifierdefinitionstype-aliasesparsemmmd"></a>

### Type Alias: ParseMm

> **ParseMm** = (`mmData`, `config?`) => `MmParser`

Defined in: [unifierDefinitions.ts:65](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L65)

#### Parameters

##### mmData

`string`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`MmParser`


<a name="unifierdefinitionstype-aliasesparsemmpmd"></a>

### Type Alias: ParseMmp

> **ParseMmp** = (`mmpData`, `mmParser`, `config?`) => `MmpParser`

Defined in: [unifierDefinitions.ts:67](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L67)

#### Parameters

##### mmpData

`string`

##### mmParser

`MmParser`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`MmpParser`


<a name="unifierdefinitionstype-aliasesunifiermd"></a>

### Type Alias: Unifier

> **Unifier** = `object`

Defined in: [unifierDefinitions.ts:15](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L15)

#### Properties

##### get

> **get**: (`proofId`) => [`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)

Defined in: [unifierDefinitions.ts:17](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L17)

###### Parameters

####### proofId

`string`

###### Returns

[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)

***

##### mmParser

> **mmParser**: `MmParser`

Defined in: [unifierDefinitions.ts:18](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L18)

***

##### unify

> **unify**: (`mmpData`) => `Promise`\<[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)\>

Defined in: [unifierDefinitions.ts:16](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L16)

###### Parameters

####### mmpData

`string` \| `MmpParser`

###### Returns

`Promise`\<[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)\>


<a name="unifierdefinitionstype-aliasesunifierconfigmd"></a>

### Type Alias: UnifierConfig

> **UnifierConfig** = `object`

Defined in: [unifierDefinitions.ts:54](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L54)

#### Properties

##### common?

> `optional` **common?**: `Partial`\<[`UnifierConfigCommon`](#unifierdefinitionstype-aliasesunifierconfigcommonmd)\>

Defined in: [unifierDefinitions.ts:55](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L55)

***

##### mm?

> `optional` **mm?**: `Partial`\<[`MmConfig`](#unifierdefinitionstype-aliasesmmconfigmd)\>

Defined in: [unifierDefinitions.ts:56](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L56)

***

##### unifier?

> `optional` **unifier?**: `Partial`\<[`MmpUnifierConfig`](#unifierdefinitionstype-aliasesmmpunifierconfigmd)\>

Defined in: [unifierDefinitions.ts:57](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L57)


<a name="unifierdefinitionstype-aliasesunifierconfigcommonmd"></a>

### Type Alias: UnifierConfigCommon

> **UnifierConfigCommon** = `object`

Defined in: [unifierDefinitions.ts:43](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L43)

#### Properties

##### proofMode

> **proofMode**: `ProofMode`

Defined in: [unifierDefinitions.ts:44](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L44)

***

##### variableKindsConfig

> **variableKindsConfig**: [`VariableKindConfig`](#unifierdefinitionstype-aliasesvariablekindconfigmd)[]

Defined in: [unifierDefinitions.ts:45](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L45)


<a name="unifierdefinitionstype-aliasesunifierconfigcompletemd"></a>

### Type Alias: UnifierConfigComplete

> **UnifierConfigComplete** = `object`

Defined in: [unifierDefinitions.ts:48](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L48)

#### Properties

##### common

> **common**: [`UnifierConfigCommon`](#unifierdefinitionstype-aliasesunifierconfigcommonmd)

Defined in: [unifierDefinitions.ts:49](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L49)

***

##### mm

> **mm**: [`MmConfig`](#unifierdefinitionstype-aliasesmmconfigmd)

Defined in: [unifierDefinitions.ts:50](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L50)

***

##### unifier

> **unifier**: [`MmpUnifierConfig`](#unifierdefinitionstype-aliasesmmpunifierconfigmd)

Defined in: [unifierDefinitions.ts:51](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L51)


<a name="unifierdefinitionstype-aliasesunifierresultmd"></a>

### Type Alias: UnifierResult

> **UnifierResult** = `object`

Defined in: [unifierDefinitions.ts:10](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L10)

#### Properties

##### mmpUnifier

> **mmpUnifier**: `MmpUnifier`

Defined in: [unifierDefinitions.ts:12](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L12)

***

##### text

> **text**: `string`

Defined in: [unifierDefinitions.ts:11](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L11)


<a name="unifierdefinitionstype-aliasesvariablekindconfigmd"></a>

### Type Alias: VariableKindConfig

> **VariableKindConfig** = `object`

Defined in: [unifierDefinitions.ts:21](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L21)

#### Properties

##### kind

> **kind**: `string`

Defined in: [unifierDefinitions.ts:22](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L22)

***

##### lspSemantictokenType

> **lspSemantictokenType**: `"variable"` \| `"string"` \| `"keyword"`

Defined in: [unifierDefinitions.ts:24](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L24)

***

##### workingVarPrefix

> **workingVarPrefix**: `string`

Defined in: [unifierDefinitions.ts:23](https://github.com/Antony74/yamma-hl-api/blob/01b40d3bc0da593f2fb2b85027f40bd1d52fe63d/src/unifierDefinitions.ts#L23)
