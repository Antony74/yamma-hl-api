import { beforeAll, describe, expect, it, vi } from 'vitest';
import { MmToken } from '../../yamma/server/src/grammar/MmLexer';

import {
    logToken,
    TokenReaderWithIndex,
} from '../../src/helpers/tokenReaderWithIndex';

const tokenize = (tokens: string) => {
    const mmTokens: MmToken[] = [];
    let length = 0;
    for (const token of tokens.split(' ')) {
        mmTokens.push(new MmToken(token, 0, length));
        length += token.length;
    }
    return mmTokens;
};

describe('TokenReaderWithIndex', () => {
    describe('read', () => {
        it(`throws on comment open within comment`, () => {
            const mmData = '$( $(';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex(mmData, tokens);
            tr.Read();
            expect(() => tr.Read()).toThrow('Characters $( found in a comment');
        });

        it(`throws on bad comment close characters within comment`, () => {
            const mmData = '$( z$)';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex(mmData, tokens);
            tr.Read();
            expect(() => tr.Read()).toThrow('Characters $) found in a comment');
        });

        it(`throws closing scope which never opened`, () => {
            const mmData = '$}';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex(mmData, tokens);
            expect(() => tr.Read()).toThrow('$} without corresponding ${');
        });
    });

    describe('lastTokenLength', () => {
        it('is zero if there never was a token', () => {
            const mmData = '';
            const tr = new TokenReaderWithIndex(mmData, []);
            expect(tr.lastTokenLength).toEqual(0);
        });
    });

    describe('getLastIndex', () => {
        it('initially returns zero', () => {
            const mmData = '';
            const tr = new TokenReaderWithIndex(mmData, []);
            expect(tr.lastIndex).toEqual(0);
        });

        it('ignores carriage returns', () => {
            const mmData = '$( $)';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex('\r' + mmData, tokens);
            tr.Read();
            tr.Read();
            expect(tr.lastIndex).toEqual(3);
        })
    });

    describe('getClosingString', () => {
        it('throws when called inside a comment', () => {
            const mmData = '$(';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex(mmData, tokens);
            tr.Read();
            expect(() => tr.getClosingString()).toThrow(
                'getClosingString called while in comment',
            );
        });

        it('closes a scope', () => {
            const mmData = '${';
            const tokens = tokenize(mmData);
            const tr = new TokenReaderWithIndex(mmData, tokens);
            tr.Read();
            expect(tr.getClosingString()).toEqual('\n  $}\n');
        });
    });
});

describe('logToken', () => {
    it(`should log`, () => {
        const consoleMock = vi
            .spyOn(console, 'log')
            .mockImplementation(() => {});
        logToken(tokenize('$(')[0]);
        expect(consoleMock).toHaveBeenCalledTimes(1);
        consoleMock.mockClear();
    });

    it(`should ignore undefined`, () => {
        const consoleMock = vi
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        logToken(undefined);
        expect(consoleMock).toHaveBeenCalledTimes(0);
        consoleMock.mockClear();
    });
});
