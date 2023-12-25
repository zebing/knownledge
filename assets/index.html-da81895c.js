import{_ as e,p as i,q as n,a1 as d}from"./framework-5866ffd3.js";const l={},a=d(`<h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h1><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports.bubbleSort = function (data = []) {
  const length = data.length

  for (let i = 0; i &lt; length - 1; i++) {
    for (let j = 0; j &lt; length - 1 - i; j++) {
      if (data[j] &gt; data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function selectSort (data = []) {
  const length = data.length;

  for (let i = 0; i &lt; length - 1; i++) {
    let current = i;

    for (let j = i + 1; j &lt; length; j++) {
      if (data[current] &gt; data[j]) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports.insertSort = function (data = []) {
  const length = data.length;

  for (let i = 1; i &lt; length; i++) {
    let temp = data[i];
    let index = i;
    for (let j = i; j &gt; 0; j--) {
      if (temp &lt; data[j - 1]) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const quickSort = function (data = []) {
  if (data.length &lt; 2) return data;
  const moddile = data.splice(Math.floor(length / 2), 1)[0];
  const left = [];
  const right = [];
  const length = data.length;

  for (let i = 0; i &lt; length; i++) {
    if (data[i] &gt; moddile) {
      right.push(data[i]);
    } else {
      left.push(data[i]);
    }
  }

  return [...quickSort(left), moddile, ...quickSort(right)];
}

exports.quickSort = quickSort;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const merge = function (left = [], right = []) {
  const data = [];
  let lIem = left.shift();
  let rIem = right.shift();
  while (lIem &amp;&amp; rIem) {
    if (lIem &lt; rIem) {
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
  if (data.length &lt; 2) return data;
  
  const middle = Math.floor(data.length / 2);
  const left = mergeSort(data.slice(0, middle));
  const right = mergeSort(data.slice(middle));

  return merge(left, right);
}

exports.mergeSort = mergeSort;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[a];function r(t,v){return i(),n("div",null,s)}const u=e(l,[["render",r],["__file","index.html.vue"]]);export{u as default};
