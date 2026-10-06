import path from 'path';
import fsp from 'fs/promises';

import concatMd from 'concat-md';

const order = [
    'createUnifier',
    'truncateAfter',
    'defaultConfig',
    'truncateBefore',
    'truncateCount',
    'parseMm',
    'parseMmp',
    'CreateMmParser',
    'CreateUnifier',
    'MmConfig',
    'MmpUnifierConfig',
    'ParseMm',
    'ParseMmp',
    'Unifier',
    'UnifierConfig',
    'UnifierConfigCommon',
    'UnifierConfigComplete',
    'UnifierResult',
    'VariableKindConfig',
    'applyDefaultsToConfig',
    'mapConfigToGlobalState',
    'TokenReaderWithIndex',
    'getParserAndTokenReader',
    'logToken',
];

const removeHeader = async (itemPath: string) => {
    const stat = await fsp.lstat(itemPath);

    if (stat.isDirectory()) {
        const items = await fsp.readdir(itemPath);
        const paths = items.map((filename: string) =>
            path.join(itemPath, filename),
        );
        for (const newPath of paths) {
            await removeHeader(newPath);
        }
    } else {
        const fullContent = await fsp.readFile(itemPath, { encoding: 'utf-8' });

        const content = fullContent
            .split('#')
            .map((s: string, index: number) => (s = index ? s : ''))
            .join('#');

        await fsp.writeFile(itemPath, content);
    }
};

const main = async () => {
    await removeHeader(path.join(__dirname, 'docs'));

    const names = new Set<string>();

    const documentation = await concatMd(path.join(__dirname, 'docs'), {
        decreaseTitleLevels: true,
        startTitleLevelAt: 3,
        ignore: ['**/README.md', 'helpers/**'],
        sorter: (a, b) => {
            const aName = path.parse(a).name;
            const bName = path.parse(b).name;
            names.add(aName);
            names.add(bName);
            const aIndex = order.findIndex((s) => s === aName);
            const bIndex = order.findIndex((s) => s === bName);
            return aIndex - bIndex;
        },
    });

    console.log(JSON.stringify(Array.from(names), null, 4));

    // Append header file manually so its title levels do not decrease
    const header = await fsp.readFile(path.join(__dirname, 'header.md'));

    await fsp.writeFile(
        path.join(__dirname, 'README.md'),
        header + documentation,
    );
};

main();
