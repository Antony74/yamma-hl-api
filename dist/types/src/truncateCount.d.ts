import { UnifierConfig } from './unifierDefinitions';
/**
 * Truncates the Metamath source after a fixed number of proof statements.
 *
 * @param mmData The source text to trim.
 * @param count Number of proof statements to keep.
 * @param config Optional configuration for parsing behavior.
 * @returns The truncated source text.
 */
export declare const truncateCount: (mmData: string, count: number, config?: UnifierConfig) => string;
