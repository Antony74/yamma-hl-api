const browserUnsupported = (operation) => {
    throw new Error(`${operation} is not available in the browser build`);
};

class EventEmitter {
    listeners = new Map();

    on(event, listener) {
        const listeners = this.listeners.get(event) ?? [];
        listeners.push(listener);
        this.listeners.set(event, listeners);
        return this;
    }

    once(event, listener) {
        const wrapped = (...args) => {
            this.removeListener(event, wrapped);
            listener(...args);
        };
        return this.on(event, wrapped);
    }

    removeListener(event, listener) {
        const listeners = this.listeners.get(event);
        if (listeners) {
            this.listeners.set(
                event,
                listeners.filter((candidate) => candidate !== listener),
            );
        }
        return this;
    }

    off(event, listener) {
        return this.removeListener(event, listener);
    }

    emit(event, ...args) {
        const listeners = this.listeners.get(event);
        if (!listeners?.length) {
            return false;
        }
        for (const listener of [...listeners]) {
            listener(...args);
        }
        return true;
    }

    static once(emitter, event) {
        return new Promise((resolve) => {
            emitter.once(event, (...args) => resolve(args));
        });
    }
}

const pathParse = (value) => {
    const normalized = value.replace(/\\/g, '/');
    const separator = normalized.lastIndexOf('/');
    const dir = separator < 0 ? '' : normalized.slice(0, separator);
    const base = normalized.slice(separator + 1);
    const dot = base.lastIndexOf('.');
    const ext = dot > 0 ? base.slice(dot) : '';
    return {
        root: normalized.startsWith('/') ? '/' : '',
        dir,
        base,
        ext,
        name: ext ? base.slice(0, -ext.length) : base,
    };
};

const formatPath = ({ dir, root, base, name, ext }) =>
    `${dir || root}${dir || root ? '/' : ''}${base ?? `${name ?? ''}${ext ?? ''}`}`;
const joinPath = (...parts) =>
    parts.filter(Boolean).join('/').replace(/\\/g, '/').replace(/\/+/g, '/');
const dirname = (value) => pathParse(value).dir || '.';
const extname = (value) => pathParse(value).ext;
const normalize = (value) => value.replace(/\\/g, '/');

class Worker {
    constructor() {
        browserUnsupported('Worker threads');
    }
}

const pathToFileURL = (value) =>
    new URL(`file://${value.startsWith('/') ? '' : '/'}${value}`);

export {
    EventEmitter,
    Worker,
    pathToFileURL,
    browserUnsupported,
    pathParse as parse,
    formatPath as format,
    joinPath as join,
    dirname,
    extname,
    normalize,
};

export const isMainThread = true;
export const parentPort = null;
export const workerData = undefined;

export const readFileSync = () => browserUnsupported('Filesystem access');
export const createReadStream = () => browserUnsupported('Filesystem access');
export const realpath = () => browserUnsupported('Filesystem access');
export const existsSync = () => browserUnsupported('Filesystem access');
export const readdirSync = () => browserUnsupported('Filesystem access');
export const writeFileSync = () => browserUnsupported('Filesystem access');
export const createInterface = () => browserUnsupported('Filesystem access');
export const fileURLToPath = () => browserUnsupported('Filesystem access');
