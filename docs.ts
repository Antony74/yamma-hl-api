import path from 'path';
import fsp from 'fs/promises';

import concatMd from 'concat-md';

const order = [
    'createUnifier',
    'Unifier',
    'truncateAfter',
    'truncateBefore',
    'truncateCount',
    'UnifierConfig',
    'UnifierConfigCommon',
    'UnifierConfigComplete',
    'UnifierResult',
    'VariableKindConfig',
    'defaultConfig',
    'parseMm',
    'ParseMm',
    'parseMmp',
    'ParseMmp',
    'CreateMmParser',
    'CreateUnifier',
    'MmConfig',
    'MmpUnifierConfig',
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
    const names = new Set<string>();

    await removeHeader(path.join(__dirname, 'docs'));

    const processItem = (fullPath: string) => {
        const name = path.parse(fullPath).name;
        names.add(name);
        const index = order.findIndex((s) => s === name);
        if (index === -1) {
            throw new Error(
                `Documentation item ${name} does not appear in order array`,
            );
        }
        return index;
    };

    const documentation = await concatMd(path.join(__dirname, 'docs'), {
        decreaseTitleLevels: true,
        startTitleLevelAt: 2,
        ignore: ['**/README.md', 'helpers/**'],
        sorter: (a, b) => {
            const aIndex = processItem(a);
            const bIndex = processItem(b);
            return aIndex - bIndex;
        },
    });

    const arrNames = Array.from(names);
    console.log(JSON.stringify(arrNames, null, 4));

    if (arrNames.length !== order.length) {
        throw new Error(
            `order array contains ${order.length} items doesn't match documentation items ${arrNames.length}`,
        );
    }

    // Append header file manually so its title levels do not decrease
    const header = await fsp.readFile(path.join(__dirname, 'header.md'));

    await fsp.writeFile(
        path.join(__dirname, 'README.md'),
        header + documentation,
    );
};

main();
