import { describe, expect, it } from 'vitest';
import { defaultConfig } from '../src/browser';

describe(`browser.ts`, () => {
    it(`doesn't try to multi-thread`, () => {
        expect(defaultConfig.mm.singleThread).toEqual(true);
    });
});
