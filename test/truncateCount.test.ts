import { describe, expect, it } from 'vitest';

import { truncateCount } from '../src/truncateCount';
import { exampleFiles } from './examples';

describe(`truncateCount`, () => {
    it(`can truncate a .mm file`, () => {
        const result = truncateCount(exampleFiles['example.mm'], 1);
        expect(result).toEqual(exampleFiles['example-truncated.mm']);
    });
});
