export default function sort(obj, argArr) {
  const objClone = { ...obj };

  let arrResult = [];
  argArr.forEach((element) => {
    arrResult.push(element);
    delete objClone[element];
  });

  const arrProps = [];
  for (const prop in objClone) {
    if (hasOwnProperty.call(objClone, prop)) {
      arrProps.push(prop);
    }
  }

  arrProps.sort();
  arrResult = arrResult.concat(arrProps);

  const result = [];
  arrResult.forEach((element) => {
    result.push({ key: element, value: obj[element] });
  });

  return result;
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const result = sort(obj, ['name', 'level']);
console.log(result);
