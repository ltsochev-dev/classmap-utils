"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classMap = void 0;
const filterClassMapObj = (obj) => {
    if (Object.keys(obj).length === 0)
        return [];
    return Object.keys(obj).filter((className) => {
        const evalDec = obj[className];
        if (typeof evalDec === 'boolean') {
            return evalDec;
        }
        else if (typeof evalDec === 'function') {
            return evalDec();
        }
        return !!evalDec;
    });
};
const arrToClassMap = (arr) => {
    let classMap = {};
    arr.forEach((val) => {
        if (typeof val === 'function') {
            const valRes = val();
            if (typeof valRes === 'string') {
                classMap[valRes] = true;
            }
        }
        else if (typeof val === 'string') {
            classMap[val] = true;
        }
    });
    return classMap;
};
function classMap(obj) {
    if (Array.isArray(obj)) {
        obj = arrToClassMap(obj);
    }
    return filterClassMapObj(obj).join(' ');
}
exports.classMap = classMap;
// Ex. classMap({'justify-items-center': isMobile, 'justify-items-between': !isMobile});
// Ex. classMap(['justify-items-center', {'align-items-center': isMobile}, {active: isActive}, 'visible']);
// Ex. classMap([() => isActive ? 'active' : null])
