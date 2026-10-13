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

<a name="unifiervariablescreateunifiermd"></a>

### Variable: createUnifier

> `const` **createUnifier**: [`CreateUnifier`](#unifierdefinitionstype-aliasescreateunifiermd)

Defined in: [unifier.ts:27](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifier.ts#L27)

Creates a proof unifier for the supplied Metamath database.

#### Param

**mmData**

Metamath source text or an existing parser instance.

#### Param

**config**

Optional configuration overrides.

#### Returns

A unifier instance.


<a name="unifierdefinitionstype-aliasesunifiermd"></a>

### Type Alias: Unifier

> **Unifier** = `object`

Defined in: [unifierDefinitions.ts:21](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L21)

Unified interface returned by the public API for working with a Metamath parser and proof unifier.

#### Properties

##### get

> **get**: (`proofId`) => [`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)

Defined in: [unifierDefinitions.ts:29](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L29)

Retrieves a proof by identifier from the current database.

###### Parameters

####### proofId

`string`

###### Returns

[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)

***

##### mmParser

> **mmParser**: `MmParser`

Defined in: [unifierDefinitions.ts:33](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L33)

The parsed Metamath database used by this unifier.

***

##### unify

> **unify**: (`mmpData`) => `Promise`\<[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)\>

Defined in: [unifierDefinitions.ts:25](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L25)

Attempts to unify a proof string against the loaded Metamath database.

###### Parameters

####### mmpData

`string` \| `MmpParser`

###### Returns

`Promise`\<[`UnifierResult`](#unifierdefinitionstype-aliasesunifierresultmd)\>


<a name="truncateafterfunctionstruncateaftermd"></a>

### Function: truncateAfter()

> **truncateAfter**(`mmData`, `proofId`, `config?`): `string`

Defined in: [truncateAfter.ts:17](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/truncateAfter.ts#L17)

Returns the source text from the start of the file through the matched proof identifier.

#### Parameters

##### mmData

`string`

The source text to inspect.

##### proofId

`string`

The proof label to use as the truncation boundary.

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

Optional configuration for parsing behavior.

#### Returns

`string`

The source text including the matched proof.


<a name="truncatebeforefunctionstruncatebeforemd"></a>

### Function: truncateBefore()

> **truncateBefore**(`mmData`, `proofId`, `config?`): `string`

Defined in: [truncateBefore.ts:17](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/truncateBefore.ts#L17)

Returns the source text before the statement with the provided proof identifier.

#### Parameters

##### mmData

`string`

The source text to inspect.

##### proofId

`string`

The proof label to use as the truncation boundary.

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

Optional configuration for parsing behavior.

#### Returns

`string`

The source text up to but not including the matched proof.


<a name="truncatecountfunctionstruncatecountmd"></a>

### Function: truncateCount()

> **truncateCount**(`mmData`, `count`, `config?`): `string`

Defined in: [truncateCount.ts:13](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/truncateCount.ts#L13)

Truncates the Metamath source after a fixed number of proof statements.

#### Parameters

##### mmData

`string`

The source text to trim.

##### count

`number`

Number of proof statements to keep.

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

Optional configuration for parsing behavior.

#### Returns

`string`

The truncated source text.


<a name="unifierdefinitionstype-aliasesunifierconfigmd"></a>

### Type Alias: UnifierConfig

> **UnifierConfig** = `object`

Defined in: [unifierDefinitions.ts:90](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L90)

Optional configuration overrides for the public API.

#### Properties

##### common?

> `optional` **common?**: `Partial`\<[`UnifierConfigCommon`](#unifierdefinitionstype-aliasesunifierconfigcommonmd)\>

Defined in: [unifierDefinitions.ts:91](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L91)

***

##### mm?

> `optional` **mm?**: `Partial`\<[`MmConfig`](#unifierdefinitionstype-aliasesmmconfigmd)\>

Defined in: [unifierDefinitions.ts:92](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L92)

***

##### unifier?

> `optional` **unifier?**: `Partial`\<[`MmpUnifierConfig`](#unifierdefinitionstype-aliasesmmpunifierconfigmd)\>

Defined in: [unifierDefinitions.ts:93](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L93)


<a name="unifierdefinitionstype-aliasesunifierconfigcommonmd"></a>

### Type Alias: UnifierConfigCommon

> **UnifierConfigCommon** = `object`

Defined in: [unifierDefinitions.ts:73](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L73)

Shared proof-unification settings that apply across the parser and unifier.

#### Properties

##### proofMode

> **proofMode**: `ProofMode`

Defined in: [unifierDefinitions.ts:74](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L74)

***

##### variableKindsConfig

> **variableKindsConfig**: [`VariableKindConfig`](#unifierdefinitionstype-aliasesvariablekindconfigmd)[]

Defined in: [unifierDefinitions.ts:75](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L75)


<a name="unifierdefinitionstype-aliasesunifierconfigcompletemd"></a>

### Type Alias: UnifierConfigComplete

> **UnifierConfigComplete** = `object`

Defined in: [unifierDefinitions.ts:81](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L81)

Fully resolved API configuration with all required nested settings.

#### Properties

##### common

> **common**: [`UnifierConfigCommon`](#unifierdefinitionstype-aliasesunifierconfigcommonmd)

Defined in: [unifierDefinitions.ts:82](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L82)

***

##### mm

> **mm**: [`MmConfig`](#unifierdefinitionstype-aliasesmmconfigmd)

Defined in: [unifierDefinitions.ts:83](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L83)

***

##### unifier

> **unifier**: [`MmpUnifierConfig`](#unifierdefinitionstype-aliasesmmpunifierconfigmd)

Defined in: [unifierDefinitions.ts:84](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L84)


<a name="unifierdefinitionstype-aliasesunifierresultmd"></a>

### Type Alias: UnifierResult

> **UnifierResult** = `object`

Defined in: [unifierDefinitions.ts:13](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L13)

Final text produced by a proof unification run together with the underlying unifier instance.

#### Properties

##### mmpUnifier

> **mmpUnifier**: `MmpUnifier`

Defined in: [unifierDefinitions.ts:15](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L15)

***

##### text

> **text**: `string`

Defined in: [unifierDefinitions.ts:14](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L14)


<a name="unifierdefinitionstype-aliasesvariablekindconfigmd"></a>

### Type Alias: VariableKindConfig

> **VariableKindConfig** = `object`

Defined in: [unifierDefinitions.ts:39](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L39)

Defines how a variable kind is represented internally and mapped to editor semantics.

#### Properties

##### kind

> **kind**: `string`

Defined in: [unifierDefinitions.ts:40](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L40)

***

##### lspSemantictokenType

> **lspSemantictokenType**: `"variable"` \| `"string"` \| `"keyword"`

Defined in: [unifierDefinitions.ts:42](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L42)

***

##### workingVarPrefix

> **workingVarPrefix**: `string`

Defined in: [unifierDefinitions.ts:41](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L41)


<a name="defaultconfigvariablesdefaultconfigmd"></a>

### Variable: defaultConfig

> `const` **defaultConfig**: [`UnifierConfigComplete`](#unifierdefinitionstype-aliasesunifierconfigcompletemd)

Defined in: [defaultConfig.ts:13](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/defaultConfig.ts#L13)

Default configuration used by the public API when no custom settings are provided.


<a name="unifiervariablesparsemmmd"></a>

### Variable: parseMm

> `const` **parseMm**: [`ParseMm`](#unifierdefinitionstype-aliasesparsemmmd)

Defined in: [unifier.ts:132](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifier.ts#L132)

Parses a Metamath database string into a parser instance.

#### Param

**mmData**

Metamath database source text.

#### Param

**config**

Optional configuration overrides.

#### Returns

A parsed Metamath parser ready for proof processing.


<a name="unifierdefinitionstype-aliasesparsemmmd"></a>

### Type Alias: ParseMm

> **ParseMm** = (`mmData`, `config?`) => `MmParser`

Defined in: [unifierDefinitions.ts:107](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L107)

Parses a Metamath database string and returns the configured parser.

#### Parameters

##### mmData

`string`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`MmParser`


<a name="unifiervariablesparsemmpmd"></a>

### Variable: parseMmp

> `const` **parseMmp**: [`ParseMmp`](#unifierdefinitionstype-aliasesparsemmpmd)

Defined in: [unifier.ts:154](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifier.ts#L154)

Parses a proof script against a loaded Metamath database.

#### Param

**mmpData**

Proof source text to parse.

#### Param

**mmParser**

The Metamath parser used as the database context.

#### Param

**config**

Optional configuration overrides.

#### Returns

A parsed proof script parser.


<a name="unifierdefinitionstype-aliasesparsemmpmd"></a>

### Type Alias: ParseMmp

> **ParseMmp** = (`mmpData`, `mmParser`, `config?`) => `MmpParser`

Defined in: [unifierDefinitions.ts:112](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L112)

Parses a proof script against an existing Metamath parser instance.

#### Parameters

##### mmpData

`string`

##### mmParser

`MmParser`

##### config?

[`UnifierConfig`](#unifierdefinitionstype-aliasesunifierconfigmd)

#### Returns

`MmpParser`


<a name="unifierdefinitionstype-aliasescreatemmparsermd"></a>

### Type Alias: CreateMmParser

> **CreateMmParser** = (...`params`) => `MmParser`

Defined in: [unifierDefinitions.ts:48](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L48)

Function type used to construct a Metamath parser instance.

#### Parameters

##### params

...`ConstructorParameters`\<*typeof* `MmParser`\>

#### Returns

`MmParser`


<a name="unifierdefinitionstype-aliasescreateunifiermd"></a>

### Type Alias: CreateUnifier

> **CreateUnifier** = (`mmData`, `config?`) => [`Unifier`](#unifierdefinitionstype-aliasesunifiermd)

Defined in: [unifierDefinitions.ts:99](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L99)

Factory used to create a configured unifier bound to a Metamath database.

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

Defined in: [unifierDefinitions.ts:53](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L53)

Configuration used when creating a Metamath parser.


<a name="unifierdefinitionstype-aliasesmmpunifierconfigmd"></a>

### Type Alias: MmpUnifierConfig

> **MmpUnifierConfig** = `Omit`\<`MmpUnifierArgs` & `object`, `"mmpParser"` \| `"proofMode"`\>

Defined in: [unifierDefinitions.ts:65](https://github.com/Antony74/yamma-hl-api/blob/09026a027583ed232615869b3f93cd1ef6fd4946/src/unifierDefinitions.ts#L65)

Configuration used by the proof unifier.
