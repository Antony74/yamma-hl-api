import { describe, expect, it } from 'vitest';

import { truncateBefore } from '../src/truncateBefore';
import { exampleFiles } from './examples';

describe(`truncateAfter`, () => {
    it(`can truncate a .mm file`, () => {
        const result = truncateBefore(exampleFiles['example.mm'], 'th2');
        expect(result).toEqual(exampleFiles['example-truncated.mm']);
    });

    it(`throw if the proof it is supposed to truncateAfter does not exist`, () => {
        expect(() => truncateBefore(exampleFiles['example.mm'], 'thz')).toThrow(
            'proofId thz was not found',
        );
    });

    it(`throw if asked to truncate before the first proof`, () => {
        expect(() => truncateBefore(exampleFiles['example.mm'], 'th1')).toThrow(
            `can't truncate before the very first proof`,
        );
    });
});
