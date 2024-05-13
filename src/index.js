const a = () => {
    console.log('1=>', 1);
};

const obj = {
    getlist: () => {},
};

const arr = [{ name: 1 }, { name: 2 }];

const [v1, v2] = arr;

window.cc = Object.assign(obj, {
    c: 3,
});
let fn1 = 'getlist';
const fun = obj.c === 'c' ? obj[fn1] : () => {};

const p = new Promise((r, j) => {}).then().finally((_) => {});

class state {
    static #x = 42;
    static y;
    
    constructor(name) {
        this.name = name;
    }
    static {
        try {
            this.y &&= (this.#x);
        } catch {
            this.y = 'unknown';
        }
    }

    get name() {
        return obj?.c;
    }

    set() {
        this.np = [1, 4, -3].sort((a, b) => a - b);
        this.name = obj.c ?? 0;
    }
}

const observer = new MutationObserver(() => {
    const arr = [1,2,4].map(v => v)
    const arr1 = [1,2,4].filter(v => v)
    console.log(arr, arr1)
});

const resize = exports.observer = new ResizeObserver(function () {
    console.log('resize');
  });

console.log('=>', a, obj, v1, v2, arr, fun, p, state, observer, resize);

export { a, obj, v1, v2, arr, fun, p, state, observer, resize};
