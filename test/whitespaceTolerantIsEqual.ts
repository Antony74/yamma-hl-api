export const reduceWhitespace = (s: string): string => {
    return s
        .trim()
        .split('')
        .reduce<string[]>((acc, char) => {
            const prevChar = acc[acc.length - 1];

            switch (char) {
                case ' ':
                    if (prevChar === ' ') {
                        return acc;
                    }
                    break;
                case '\r':
                    return acc;
            }
            return [...acc, char];
        }, [])
        .join('');
};

export const whitespaceTolerantIsEqual = (s1: string, s2: string): boolean => {
    return reduceWhitespace(s1) === reduceWhitespace(s2);
};
