var foo = 'hello world!';
const name = 'foo';

var foo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: foo,
    name: name
});

var version = "1.0.0";

// import foo from './foo.js';

function main() {
    console.log('version ' + version);
    console.log(name);

    Promise.resolve().then(function () {
        return foo$1;
    }).then(({default: foo}) => console.log(foo));

}

export {main as default};
