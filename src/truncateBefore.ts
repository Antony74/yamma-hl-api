import {
    MmParserEvents,
    AssertionParsedArgs,
} from '../yamma/server/src/mm/MmParser';

import { getParserAndTokenReader } from './helpers/getParserAndTokenReader';
import { UnifierConfig } from './unifierDefinitions';

/**
 * Returns the source text before the statement with the provided proof identifier.
 *
 * @param mmData The source text to inspect.
 * @param proofId The proof label to use as the truncation boundary.
 * @param config Optional configuration for parsing behavior.
 * @returns The source text up to but not including the matched proof.
 */
export const truncateBefore = (
    mmData: string,
    proofId: string,
    config?: UnifierConfig,
): string => {
    const { mmParser, tokenReader } = getParserAndTokenReader(config, mmData);

    let start = 0;
    let end = 0;
    let closingString = '';
    let found = false;

    mmParser.on(
        MmParserEvents.newProvableStatement,
        (parsedArgs: AssertionParsedArgs) => {
            if (found === true) {
            } else if (parsedArgs.labeledStatement.Label === proofId) {
                found = true;
            } else {
                end = tokenReader.lastIndex + tokenReader.lastTokenLength;
                closingString = tokenReader.getClosingString();
            }
        },
    );

    mmParser.parseFromTokenReader(tokenReader);

    if (!found) {
        throw new Error(`proofId ${proofId} was not found`);
    }

    if (end === 0) {
        throw new Error(`can't truncate before the very first proof`);
    }

    return [mmData.substring(start, end), closingString].join('');
};
