import { describe, expect, it } from 'vitest';

import { truncateAfter } from '../src/truncateAfter';
import { exampleFiles } from './examples';

describe(`truncateAfter`, () => {
    it(`can truncate a .mm file`, () => {
        const result = truncateAfter(exampleFiles['example.mm'], 'th1');
        expect(result).toEqual(exampleFiles['example-truncated.mm']);
    });

    it(`throw if the proof it is supposed to truncateAfter does not exist`, () => {
        expect(() => truncateAfter(exampleFiles['example.mm'], 'thz')).toThrow(
            'proofId thz was not found',
        );
    });
});
