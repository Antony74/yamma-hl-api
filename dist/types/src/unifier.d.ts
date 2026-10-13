import { CreateUnifier, ParseMm, ParseMmp } from './unifierDefinitions';
/**
 * Creates a proof unifier for the supplied Metamath database.
 *
 * @param mmData Metamath source text or an existing parser instance.
 * @param config Optional configuration overrides.
 * @returns A unifier instance.
 */
export declare const createUnifier: CreateUnifier;
/**
 * Parses a Metamath database string into a parser instance.
 *
 * @param mmData Metamath database source text.
 * @param config Optional configuration overrides.
 * @returns A parsed Metamath parser ready for proof processing.
 */
export declare const parseMm: ParseMm;
/**
 * Parses a proof script against a loaded Metamath database.
 *
 * @param mmpData Proof source text to parse.
 * @param mmParser The Metamath parser used as the database context.
 * @param config Optional configuration overrides.
 * @returns A parsed proof script parser.
 */
export declare const parseMmp: ParseMmp;
