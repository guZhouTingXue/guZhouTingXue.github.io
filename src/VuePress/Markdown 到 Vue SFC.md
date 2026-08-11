---
category: VuePress
---
# Markdown 到 Vue SFC
>[!info]
>每个`Markdown` 文件首先会被编译为`HTML`，然后转换为Vue 单文件组件（`SFC`）。

- `<script>` 和 `<style>` 标签被视为 Vue SFC 中的标签
- 除了这两个标签，其他所有内容都被编译为 HTML，视为<mark style="background: #FFF3A3A6;"> SFC 中的 template 标签</mark>
- 输出的 SFC 存储路径为`.vuepress/.temp/pages/`
- 可以在 markdown 的 script 和 style 标签中编写  Vue SFC 代码

自定义组件的两种作用范围：
- 局部：需要手动导入组件
- 全局：通过注册为全局组件，任意文件中均可直接使用，无需导入
## 局部注册组件
``` markdown title="test.md"
<MyComponent />

<script setup>
import MyComponent from "@source/example/MyComponent.vue";
</script>
```

| 行号  | 功能       | 说明                            |
| --- | -------- | ----------------------------- |
| 1   | 使用自定义的组件 |                               |
| 4   | 导入自定义组件  | @source：表示项目根目录。组件的路径只能使用绝对路径 |
## 全局组件

1. 安装插件
``` bash
npm i -D @vuepress/plugin-register-components@next
```
2. 配置
``` ts title="theme.ts"
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default {
  plugins: [
    registerComponentsPlugin({
      // 配置项
      components: { 
	      FooBar: "/components/FooBar.vue", 
	      },
    }),
  ],
}
```

| 行号  | 功能       | 说明                  |
| --- | -------- | ------------------- |
| 8   | 注册FooBar | FooBar：组件名称；值为组件的路径 |

### 使用组件
除了通过`MyComponent />`使用组件外，还可以通过代码块添加组件。
代码块的类型为 component。
代码块支持两种数据格式：YAML, JSON
**YAML （推荐）**
:::preview
```component VPCard
title: mingStudent
desc: hello world!
background: rgba(253, 230, 138, 0.15)
```
:::

**JSON**
:::preview
```component VPCard
{
  "title": "mingStudent",
  "desc": "hello world!",
  "background": "rgba(253, 230, 138, 0.15)"
}
```
:::

问：<mark style="background: #FFF3A3A6;">代码块添加组件是否只适用于全局组件？</mark>

hope中内置了一些组件，这些组件均被默认注册为全局组件，启用后可以直接使用。
使用VPBanner
:::preview
```component VPBanner
{
  "title": "mingStudent",
  "desc": "hello world!",
  "background": "rgba(253, 230, 138, 0.15)"
}
```
:::


问：<mark style="background: #FFF3A3A6;">虽然 VidStack 的介绍在内置组件中，但是使用前需要安装，不需要导入就可以在任意md中通过`<VidStack />` 添加音视频（那它应该是全局组件了），但是为什么不能通过代码块添加组件？？？</mark>

=》通过代码块添加组件 和 使用 `<VidStack>` 添加组件的区别

参考chatgpt：
使用代码块添加组件是hope 提供的一种非标准的便捷方式，主题对于VPBanner、VPCard 等内置（无需下载）的组件做了处理，所以可以直接使用。不管是使用标签还是代码块，它们最终都会转化为vue 组件节点。 vidstack 不在支持范围内，所以只能使用标签。

**闲话**
因为ob存在不显示标签内容的bug，然后又看到了可以使用代码块添加组件，所以想通过代码块添加vidstack，这样ob中就可以看到标签代码了。一开始添加失败，chatgpt 回答可以通过将vidstack 转换为 vue，然后注册为全局组件使用。尝试了下，放弃了。在这个过程中想搞明白为什么，ai的回答看不明白，多问了几个问题，包括markdown 怎么转换的，有点复杂，看不懂。接着就陷入了不懂-》提问-》似乎懂了一点，但是不懂的更多-》提问。。。 的漩涡中。耗费了不少时间，其实这不是一个紧急、重要的问题，如果行不通，大可以暂时记下问题，使用现有、可行的方案，而不是一直纠结为什么不可以。


