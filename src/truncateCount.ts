import { MmParserEvents } from '../yamma/server/src/mm/MmParser';
import { getParserAndTokenReader } from './helpers/getParserAndTokenReader';
import { UnifierConfig } from './unifierDefinitions';

/**
 * Truncates the Metamath source after a fixed number of proof statements.
 *
 * @param mmData The source text to trim.
 * @param count Number of proof statements to keep.
 * @param config Optional configuration for parsing behavior.
 * @returns The truncated source text.
 */
export const truncateCount = (
    mmData: string,
    count: number,
    config?: UnifierConfig,
): string => {
    const { mmParser, tokenReader } = getParserAndTokenReader(config, mmData);

    let start = 0;
    let end = mmData.length;
    let closingString = '';

    mmParser.on(MmParserEvents.newProvableStatement, () => {
        --count;
        if (count === 0) {
            end = tokenReader.lastIndex + tokenReader.lastTokenLength;
            closingString = tokenReader.getClosingString();
        }
    });

    mmParser.parseFromTokenReader(tokenReader);

    return [mmData.substring(start, end), closingString].join('');
};
