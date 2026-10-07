import { describe, expect, it } from 'vitest';
import { createUnifier, parseMm, parseMmp } from '../src/unifier';
import { exampleFiles } from './examples';
import { whitespaceTolerantIsEqual } from './whitespaceTolerantIsEqual';
import { ProgressCallback } from '../yamma/server/src/parseNodesCreatorThread/ParseNodesCreator';

describe(`yamma-unifier`, () => {
    it(`can unify`, async () => {
        const unifier = createUnifier(exampleFiles['example.mm']);
        const result = await unifier.unify(exampleFiles['ununified.mmp']);
        expect(result.text).toEqual(exampleFiles['unified.mmp']);
    });

    it(`can unify twice (with only one deepParse)`, async () => {
        const messages: Parameters<ProgressCallback>[] = [];
        const unifier = createUnifier(exampleFiles['example.mm'], {
            mm: {
                progressCallback: (message) => {
                    messages.push([message]);
                },
            },
        });
        const [result1, result2] = await Promise.all([
            unifier.unify(exampleFiles['ununified.mmp']),
            unifier.unify(exampleFiles['ununified.mmp']),
        ]);

        expect(result1.text).toEqual(exampleFiles['unified.mmp']);
        expect(result2.text).toEqual(exampleFiles['unified.mmp']);

        const logs = messages
            .map((arr) => arr[0])
            .filter((message) => message.kind === 'log')
            .map((message) => message.text);

        const setLogs = new Set(logs);

        expect(logs.length).toEqual(setLogs.size); // Unique logs means deepParse was only called once
    });

    it(`can unify from parsers and a single thread`, async () => {
        const mmParser = parseMm(exampleFiles['example.mm']);
        const unifier = createUnifier(mmParser, { mm: { singleThread: true } });
        const mmpParser = parseMmp(exampleFiles['ununified.mmp'], mmParser);
        const result = await unifier.unify(mmpParser);
        expect(result.text).toEqual(exampleFiles['unified.mmp']);
    });

    it(`throws an error given bad mmData`, () => {
        expect(() => createUnifier(exampleFiles['bad1.mm'])).toThrowError(
            new Error('A comment was never closed'),
        );
    });

    it(`can get a proof`, () => {
        const unifier = createUnifier(exampleFiles['example.mm']);
        const result = unifier.get('th1');

        expect(
            whitespaceTolerantIsEqual(result.text, exampleFiles['unified.mmp']),
        ).toEqual(true);
    });

    it(`can get a proof without stripping the header`, () => {
        const unifier = createUnifier(exampleFiles['example.mm'], {
            unifier: { getProofStripHeader: false },
        });
        const result = unifier.get('th1');
        expect(result.text).toContain('* MissingComment');
    });

    it(`returns suitable diagnostics if it can't get a proof`, () => {
        const unifier = createUnifier(exampleFiles['example.mm']);
        const result = unifier.get('notTh');
        const { diagnostics } = result.mmpUnifier.mmpParser;
        expect(diagnostics.length).toEqual(1);
        expect(diagnostics[0].message).toEqual(`notTh not found`);
    });
});
