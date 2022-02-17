(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{437:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-3-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-0"}},[t._v("#")]),t._v(" vue 3.0")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vue3js.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"组合式api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组合式api"}},[t._v("#")]),t._v(" 组合式API")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vue3js.cn/vue-composition/",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合式 API 官方文档"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"动机与目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动机与目的"}},[t._v("#")]),t._v(" 动机与目的")]),t._v(" "),r("h4",{attrs:{id:"更好的逻辑复用与代码组织"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更好的逻辑复用与代码组织"}},[t._v("#")]),t._v(" 更好的逻辑复用与代码组织")]),t._v(" "),r("p",[t._v("我们都因 Vue 简单易学而爱不释手，它让构建中小型应用程序变得轻而易举。但是随着 Vue 的影响力日益扩大，许多用户也开始使用 Vue 构建更大型的项目。这些项目通常是由多个开发人员组成团队，在很长一段时间内不断迭代和维护的。多年来，我们目睹了其中一些项目遇到了 Vue 当前 API 所带来的编程模型的限制。这些问题可归纳为两类:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("随着功能的增长，复杂组件的代码变得越来越难以阅读和理解。这种情况在开发人员阅读他人编写的代码时尤为常见。根本原因是 Vue 现有的 API 迫使我们通过选项组织代码，但是有的时候通过逻辑关系组织代码更有意义。")])]),t._v(" "),r("li",[r("p",[t._v("目前缺少一种简洁且低成本的机制来提取和重用多个组件之间的逻辑。 (详见 逻辑抽象、提取与复用)")])])]),t._v(" "),r("p",[t._v("RFC 中提出的 API 为组件代码的组织提供了更大的灵活性。现在我们不需要总是通过选项来组织代码，而是可以将代码组织为处理特定功能的函数。这些 API 还使得在组件之间甚至组件之外逻辑的提取和重用变得更加简单。我们会在设计细节这一节展示达成的效果。")]),t._v(" "),r("h4",{attrs:{id:"更好的类型推导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更好的类型推导"}},[t._v("#")]),t._v(" 更好的类型推导")]),t._v(" "),r("p",[t._v("另一个来自大型项目开发者的常见需求是更好的 TypeScript 支持。Vue 当前的 API 在集成 TypeScript 时遇到了不小的麻烦，其主要原因是 Vue 依靠一个简单的 this 上下文来暴露 property，我们现在使用 this 的方式是比较微妙的。（比如 methods 选项下的函数的 this 是指向组件实例的，而不是这个 methods 对象）。")]),t._v(" "),r("p",[t._v("换句话说，Vue 现有的 API 在设计之初没有照顾到类型推导，这使适配 TypeScript 变得复杂。")]),t._v(" "),r("p",[t._v("当前，大部分使用 TypeScript 的 Vue 开发者都在通过 vue-class-component 这个库将组件撰写为 TypeScript class (借助 decorator)。我们在设计 3.0 时曾有一个已废弃的 RFC，希望提供一个内建的 Class API 来更好的解决类型问题。然而当讨论并迭代其具体设计时，我们注意到，想通过 Class API 来解决类型问题，就必须依赖 decorator——一个在实现细节上存在许多未知数的非常不稳定的 stage 2 提案。基于它是有极大风险的。(关于 Class API 的类型相关问题请移步这里)")]),t._v(" "),r("p",[t._v("相比较过后，本 RFC 中提出的方案更多地利用了天然对类型友好的普通变量与函数。用该提案中的 API 撰写的代码会完美享用类型推导，并且也不用做太多额外的类型标注。")]),t._v(" "),r("p",[t._v("这也同样意味着你写出的 JavaScript 代码几乎就是 TypeScript 的代码。即使是非 TypeScript 开发者也会因此得到更好的 IDE 类型支持而获益。")])])}),[],!1,null,null,null);e.default=s.exports}}]);