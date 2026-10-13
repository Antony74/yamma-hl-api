import {
    IExtensionSettings,
    ProofMode,
} from '../yamma/server/src/mm/ConfigurationManager';
import { MmParser } from '../yamma/server/src/mm/MmParser';
import { MmpParser } from '../yamma/server/src/mmp/MmpParser';
import { MmpUnifier, MmpUnifierArgs } from '../yamma/server/src/mmp/MmpUnifier';
import { ProgressCallback } from '../yamma/server/src/parseNodesCreatorThread/ParseNodesCreator';

/**
 * Final text produced by a proof unification run together with the underlying unifier instance.
 */
export type UnifierResult = {
    text: string;
    mmpUnifier: MmpUnifier;
};

/**
 * Unified interface returned by the public API for working with a Metamath parser and proof unifier.
 */
export type Unifier = {
    /**
     * Attempts to unify a proof string against the loaded Metamath database.
     */
    unify: (mmpData: string | MmpParser) => Promise<UnifierResult>;
    /**
     * Retrieves a proof by identifier from the current database.
     */
    get: (proofId: string) => UnifierResult;
    /**
     * The parsed Metamath database used by this unifier.
     */
    mmParser: MmParser;
};

/**
 * Defines how a variable kind is represented internally and mapped to editor semantics.
 */
export type VariableKindConfig = {
    kind: string;
    workingVarPrefix: string;
    lspSemantictokenType: 'variable' | 'string' | 'keyword';
};

/**
 * Function type used to construct a Metamath parser instance.
 */
export type CreateMmParser = (...params: ConstructorParameters<typeof MmParser>) => MmParser;

/**
 * Configuration used when creating a Metamath parser.
 */
export type MmConfig = Omit<
    IExtensionSettings & {
        progressCallback: ProgressCallback;
        singleThread: boolean;
        createMmParser: CreateMmParser;
    },
    'variableKindsConfiguration' | 'proofMode'
>;

/**
 * Configuration used by the proof unifier.
 */
export type MmpUnifierConfig = Omit<
    MmpUnifierArgs & { getProofStripHeader: boolean },
    'mmpParser' | 'proofMode'
>;

/**
 * Shared proof-unification settings that apply across the parser and unifier.
 */
export type UnifierConfigCommon = {
    proofMode: ProofMode;
    variableKindsConfig: VariableKindConfig[];
};

/**
 * Fully resolved API configuration with all required nested settings.
 */
export type UnifierConfigComplete = {
    common: UnifierConfigCommon;
    mm: MmConfig;
    unifier: MmpUnifierConfig;
};

/**
 * Optional configuration overrides for the public API.
 */
export type UnifierConfig = {
    common?: Partial<UnifierConfigCommon>;
    mm?: Partial<MmConfig>;
    unifier?: Partial<MmpUnifierConfig>;
};

/**
 * Factory used to create a configured unifier bound to a Metamath database.
 */
export type CreateUnifier = (
    mmData: string | MmParser,
    config?: UnifierConfig,
) => Unifier;

/**
 * Parses a Metamath database string and returns the configured parser.
 */
export type ParseMm = (mmData: string, config?: UnifierConfig) => MmParser;

/**
 * Parses a proof script against an existing Metamath parser instance.
 */
export type ParseMmp = (
    mmpData: string,
    mmParser: MmParser,
    config?: UnifierConfig,
) => MmpParser;
