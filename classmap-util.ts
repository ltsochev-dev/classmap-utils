interface classMapObj {
  [key: string]: string|number|Function|boolean
}

const filterClassMapObj = (obj: classMapObj): string[] => {
  if (Object.keys(obj).length === 0) return [];

  return Object.keys(obj).filter((className) => {
    const evalDec = obj[className];

    if (typeof evalDec === 'boolean') {
      return evalDec;
    } else if (typeof evalDec === 'function') {
      return evalDec();
    }

    return !!evalDec;
  });
}

const arrToClassMap = (arr: any[]): classMapObj => {
    let classMap = {} as classMapObj;

    arr.forEach((val) => {
      if (typeof val === 'function') {
        const valRes = val();
        if (typeof valRes === 'string') {
          classMap[valRes] = true;
        }
      } else if (typeof val === 'string') {
        classMap[val] = true;
      }
    });

    return classMap;
}

export function classMap(obj: classMapObj|Array<string|classMapObj|Function>): string {
    if (Array.isArray(obj)) {
      obj = arrToClassMap(obj as Array<string|classMapObj|Function>);
    }

    return filterClassMapObj(obj).join(' ');
}

// Ex. classMap({'justify-items-center': isMobile, 'justify-items-between': !isMobile});
// Ex. classMap(['justify-items-center', {'align-items-center': isMobile}, {active: isActive}, 'visible']);
// Ex. classMap([() => isActive ? 'active' : null])
