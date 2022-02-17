# 算法

## 排序
### 冒泡排序
```
exports.bubbleSort = function (data = []) {
  const length = data.length

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
}
```

### 选择排序
```
export default function selectSort (data = []) {
  const length = data.length;

  for (let i = 0; i < length - 1; i++) {
    let current = i;

    for (let j = i + 1; j < length; j++) {
      if (data[current] > data[j]) {
        current = j;
      }
    }

    if (current !== i) {
      const temp = data[i];
      data[i] = data[current];
      data[current] = temp;
    }
  }

  return data;
}
```
### 插入排序
```
exports.insertSort = function (data = []) {
  const length = data.length;

  for (let i = 1; i < length; i++) {
    let temp = data[i];
    let index = i;
    for (let j = i; j > 0; j--) {
      if (temp < data[j - 1]) {
        index = j - 1;
        data[j] = data[j - 1];
      } else {
        break;
      }
    }
    data[index] = temp;
  }

  return data;
}
```
### 快速排序
```
const quickSort = function (data = []) {
  if (data.length < 2) return data;
  const moddile = data.splice(Math.floor(length / 2), 1)[0];
  const left = [];
  const right = [];
  const length = data.length;

  for (let i = 0; i < length; i++) {
    if (data[i] > moddile) {
      right.push(data[i]);
    } else {
      left.push(data[i]);
    }
  }

  return [...quickSort(left), moddile, ...quickSort(right)];
}

exports.quickSort = quickSort;
```
### 归并排序
```
const merge = function (left = [], right = []) {
  const data = [];
  let lIem = left.shift();
  let rIem = right.shift();
  while (lIem && rIem) {
    if (lIem < rIem) {
      data.push(lIem);
      lIem = left.shift();
    } else {
      data.push(rIem);
      rIem = left.shift();
    }
  }

  if (lIem) {
    data.push(lIem);
  }

  if (rIem) {
    data.push(rIem);
  }

  return [...data, ...left, ...right]
}

const mergeSort = function (data = []) {
  if (data.length < 2) return data;
  
  const middle = Math.floor(data.length / 2);
  const left = mergeSort(data.slice(0, middle));
  const right = mergeSort(data.slice(middle));

  return merge(left, right);
}

exports.mergeSort = mergeSort;
```