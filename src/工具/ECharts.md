---
category: 工具
tags:
  - 绘图/ECharts
---
# ECharts
[Apache ECharts](https://echarts.apache.org/zh/index.html)

>[!note]
> vuepress ECharts 图表不显示时没有错误提示，通过在线编辑器运行后再拷贝到文档中
## 在Vuepress中使用ECharts
1. 安装
``` nmp
npm install -D echarts
```
2. 配置
``` ts title=".vuepress/theme.ts"
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  markdown: {
	
    // 在启用之前安装 echarts npm install -D echarts
	DANGEROUS_ALLOW_SCRIPT_EXECUTION: true,
	DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST: [
		"工具/ECharts.md",
	],
    echarts: true,
  },
});
```
3. 测试
Diagram:
:::preview
:::: echarts  test
```js
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
```
::::
:::

## 扩展
1. 如何让ECharts 获取表格数据自动更新显示？
