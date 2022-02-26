"use strict";
const names = ["sadeeq", "umar"];
const data = new Promise((resolve, reject) => {
    try {
        resolve("sadeeq");
    }
    catch (error) {
        reject("error");
    }
});
data.then((data) => data.trim());
const target = { a: "saddeq", b: ["fd"] };
const source = { b: 4, c: 5 };
function merge(a, b) {
    return Object.assign(a, b);
}
const res = merge(target, source);
function countAndDescribe(element) {
    if (element.length > 1) {
        return `we got  ${element.length} element`;
    }
    return `we got no element`;
}
function extractProperty(obj, key) {
    return obj[key];
}
console.log(extractProperty(["saddeq", 23], 5));
extractProperty(["saddeq", 23], 5);
extractProperty({ name: "saddeq" }, "name");
//# sourceMappingURL=generics.js.map