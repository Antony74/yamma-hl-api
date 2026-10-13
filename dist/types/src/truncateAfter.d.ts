import { UnifierConfig } from './unifierDefinitions';
/**
 * Returns the source text from the start of the file through the matched proof identifier.
 *
 * @param mmData The source text to inspect.
 * @param proofId The proof label to use as the truncation boundary.
 * @param config Optional configuration for parsing behavior.
 * @returns The source text including the matched proof.
 */
export declare const truncateAfter: (mmData: string, proofId: string, config?: UnifierConfig) => string;
