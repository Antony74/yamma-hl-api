import { UnifierConfig } from './unifierDefinitions';
/**
 * Returns the source text before the statement with the provided proof identifier.
 *
 * @param mmData The source text to inspect.
 * @param proofId The proof label to use as the truncation boundary.
 * @param config Optional configuration for parsing behavior.
 * @returns The source text up to but not including the matched proof.
 */
export declare const truncateBefore: (mmData: string, proofId: string, config?: UnifierConfig) => string;
