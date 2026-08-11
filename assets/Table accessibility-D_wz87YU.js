import{A as e,D as t,I as n,L as r,O as i,T as a,k as o,z as s}from"./app-DtUmuW-F.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/Learn%20web%20development/Structuring%20content%20with%20HTML/Table%20accessibility.html","title":"Table accessibility","lang":"zh-CN","frontmatter":{"description":"Table accessibility Adding a caption to your table with &lt;caption&gt; Adding structure with &lt;thead&gt;,&lt;tbody&gt; and &lt;tfoot&gt; 在创建一个复杂结构的表格时，对表格的内容进行结构化的划分 thead: w...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Table accessibility\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-11T13:40:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mingStudent\\"}]}"],["meta",{"property":"og:url","content":"https://guzhoutingxue.github.io/Learn%20web%20development/Structuring%20content%20with%20HTML/Table%20accessibility.html"}],["meta",{"property":"og:title","content":"Table accessibility"}],["meta",{"property":"og:description","content":"Table accessibility Adding a caption to your table with &lt;caption&gt; Adding structure with &lt;thead&gt;,&lt;tbody&gt; and &lt;tfoot&gt; 在创建一个复杂结构的表格时，对表格的内容进行结构化的划分 thead: w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-08-11T13:40:23.000Z"}],["meta",{"property":"article:modified_time","content":"2026-08-11T13:40:23.000Z"}]]},"git":{"createdTime":1786455623000,"updatedTime":1786455623000,"contributors":[{"name":"guZhouTingXue","username":"guZhouTingXue","email":"2422173022@qq.com","commits":1,"url":"https://github.com/guZhouTingXue"}]},"readingTime":{"minutes":3.26,"words":978},"filePathRelative":"Learn web development/Structuring content with HTML/Table accessibility.md","excerpt":"","autoDesc":true}`),u={name:`Table accessibility.md`};function d(c,l,u,d,f,p){let m=r(`VPPreview`);return n(),t(`div`,null,[l[8]||=a(`h1`,{id:`table-accessibility`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#table-accessibility`},[a(`span`,null,`Table accessibility`)])],-1),l[9]||=a(`h2`,{id:`adding-a-caption-to-your-table-with-caption`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#adding-a-caption-to-your-table-with-caption`},[a(`span`,null,`Adding a caption to your table with <caption>`)])],-1),e(m,{title:`Demo`},{content:s(()=>[...l[0]||=[a(`table`,null,[a(`caption`,null,`How I chose to spend my money`),a(`tr`,null,[a(`th`,null,`Purchase`),a(`th`,null,`Location`),a(`th`,null,`Date`),a(`th`,null,`...`),a(`th`,null,`Cost`)])],-1)]]),code:s(()=>[...l[1]||=[a(`div`,{class:`language- line-numbers-mode`,"data-highlighter":`shiki`,"data-ext":``,style:{"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`<table>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<caption>How I chose to spend my money</caption>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`		<th>Purchase</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`		<th>Location</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`		<th>Date</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`		<th>...</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`		<th>Cost</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</table>`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})])],-1)]]),_:1}),l[10]||=a(`h2`,{id:`adding-structure-with-thead-tbody-and-tfoot`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#adding-structure-with-thead-tbody-and-tfoot`},[a(`span`,null,`Adding structure with <thead>,<tbody> and <tfoot>`)])],-1),l[11]||=a(`p`,null,`在创建一个复杂结构的表格时，对表格的内容进行结构化的划分`,-1),l[12]||=a(`ul`,null,[a(`li`,null,`thead: wrap the part of the table that is the header`),a(`li`,null,`tbody: wrap the main part of the table`),a(`li`,null,`tfoot: wrap the part of the table that is the footer`)],-1),l[13]||=a(`blockquote`,null,[a(`p`,null,`They don't result in any visual enhancement on their own, however they are very useful for applying styling an layout enhancements via CSS, which can improve accessibility`)],-1),l[14]||=a(`p`,null,`结合CSS对表格不同内容进行样式设置`,-1),e(m,{title:`Demo`},{content:s(()=>[...l[2]||=[a(`table`,null,[a(`caption`,null,` How I chose to spend my money `),a(`thead`,null,[a(`tr`,null,[a(`th`,null,`Purchase`),a(`th`,null,`Location`),a(`th`,null,`Date`),a(`th`,null,`Cost`)])]),a(`tbody`,null,[a(`tr`,null,[a(`td`,null,`Haircut`),a(`td`,null,`...`),a(`td`,null,`01/02`),a(`td`,null,`10`)]),a(`tr`,null,[a(`td`,null,`Shoes`),a(`td`,null,`...`),a(`td`,null,`01/03`),a(`td`,null,`65`)])]),a(`tfoot`,null,[a(`tr`,null,[a(`td`,{colspan:`3`},`Sum`),a(`td`,null,`75`)])])],-1)]]),code:s(()=>[...l[3]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`15`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`<style> tbody { font-style: italic; } tfoot { font-weight: bold; } </style>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`<table>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <caption>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	How I chose to spend my money`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </caption>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th>Purchase</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th>Location</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th>Date</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th>Cost</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>Haircut</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>...</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>01/02</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>10</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>Shoes</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>...</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>01/03</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>65</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <tfoot>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td colspan="3">Sum</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>75</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </tfoot>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</table>`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),l[15]||=a(`p`,null,`设置主体内容为斜体，footer - 合计项 为粗体`,-1),l[16]||=a(`blockquote`,null,[a(`p`,null,`<tbody> is always implicitly included in every table if you don't specify it in your code.`)],-1),l[17]||=a(`p`,null,`如果不使用thead、tbody and tfoot 进行分类，要达到相同的效果，需要手动对表格结构进行区分。`,-1),l[18]||=a(`h2`,{id:`the-scope-attribute`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#the-scope-attribute`},[a(`span`,null,[o(`The `),a(`code`,null,`scope`),o(` attribute`)])])],-1),l[19]||=a(`blockquote`,null,[a(`p`,null,`The scope attribute can be added to the <th> element to tell screen readers exactyl what cells the header is a header for - is it a header for the row it is in, or the column.`)],-1),l[20]||=a(`p`,null,`看下面的表格：`,-1),e(m,{title:`Demo`},{content:s(()=>[...l[4]||=[a(`table`,null,[a(`caption`,null,` 2016 年 8 月出售的物品 `),a(`thead`,null,[a(`tr`,null,[a(`td`,{colspan:`2`,rowspan:`2`}),a(`th`,{colspan:`3`,scope:`colgroup`},`衣物`),a(`th`,{colspan:`2`,scope:`colgroup`},`饰品`)]),a(`tr`,null,[a(`th`,{scope:`col`},`长裤`),a(`th`,{scope:`col`},`衬衫`),a(`th`,{scope:`col`},`裙子`),a(`th`,{scope:`col`},`手镯`),a(`th`,{scope:`col`},`戒指`)])]),a(`tbody`,null,[a(`tr`,null,[a(`th`,{rowspan:`2`,scope:`rowgroup`},`比利时`),a(`th`,{scope:`row`},`Antwerp`),a(`td`,null,`56`),a(`td`,null,`22`),a(`td`,null,`43`),a(`td`,null,`72`),a(`td`,null,`23`)]),a(`tr`,null,[a(`th`,{scope:`row`},`Ghent`),a(`td`,null,`46`),a(`td`,null,`18`),a(`td`,null,`50`),a(`td`,null,`61`),a(`td`,null,`15`)])])],-1)]]),code:s(()=>[...l[5]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`15`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`<table>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <caption>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	2016 年 8 月出售的物品`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </caption>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td colspan="2" rowspan="2"></td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th colspan="3" scope="colgroup">衣物</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th colspan="2" scope="colgroup">饰品</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="col">长裤</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="col">衬衫</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="col">裙子</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="col">手镯</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="col">戒指</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  <tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th rowspan="2" scope="rowgroup">比利时</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="row">Antwerp</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>56</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>22</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>43</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>72</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>23</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	<tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <th scope="row">Ghent</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>46</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>18</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>50</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>61</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	  <td>15</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`	</tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`  </tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`</table>`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),l[21]||=i(`<ul><li>th works in exactly the same way as a &lt;td&gt; ... 使用scope 后 th就和所在的行或列关联起来，阅读时能阅读它所关联的所有内容。</li><li>Antwerp scope=&quot;row&quot;: 范围包含了所在行</li><li>比利时 scope=&quot;rowgroup&quot; rowspan=&quot;2&quot;: 本身跨越了两行，范围包含了所跨越的行 - Antwerp 和 Ghent</li></ul><p>衣物下面包含了3个分类：长裤、衬衫 和 裙子。如果要报告衣物相关的内容应该包含这三个分类。可能的表述：长裤，Antwerp 56件，Ghent 46件；衬衫，Antwerp 22件。。。</p><h2 id="the-id-and-head-attributes" tabindex="-1"><a class="header-anchor" href="#the-id-and-head-attributes"><span>The <code>id</code> and <code>head</code> attributes</span></a></h2><blockquote><p>An alternative to using the <code>scope</code> attribute is to use <code>id</code> and <code>headers</code> attributes to create associations between data cells and header cells.</p></blockquote>`,4),e(m,{title:`Demo`},{content:s(()=>[...l[6]||=[a(`table`,null,[a(`thead`,null,[a(`tr`,null,[a(`th`),a(`th`),a(`th`,{id:`clothes`,colspan:`2`},`Clothes`)]),a(`tr`,null,[a(`th`),a(`th`),a(`th`,{id:`trousers`,headers:`clothes`},`Trousers`),a(`th`,{id:`skirts`,headers:`clothes`},`Skirts`)])]),a(`tbody`,null,[a(`tr`,null,[a(`th`,{id:`belgium`,rowspan:`2`},`Belgium`),a(`th`,{id:`antwerp`,headers:`belgium`},`Antwerp`),a(`td`,{headers:`belgium antwerp clothes trousers`},`56`),a(`td`,{headers:`belgium antwerp clothes skirts`},`2`)]),a(`tr`,null,[a(`th`,{id:`ghent`,headers:`belgium`},`Ghent`),a(`td`,{headers:`belgium ghent clothes trousers`},`41`),a(`td`,{headers:`belgium ghent clothes skirts`},`17`)])])],-1)]]),code:s(()=>[...l[7]||=[a(`div`,{class:`language- line-numbers-mode has-collapsed-lines collapsed`,"data-highlighter":`shiki`,"data-ext":``,style:{"--vp-collapsed-lines":`15`,"--shiki-light":`#383A42`,"--shiki-dark":`#abb2bf`,"--shiki-light-bg":`#FAFAFA`,"--shiki-dark-bg":`#282c34`}},[a(`pre`,{class:`shiki shiki-themes one-light one-dark-pro vp-code`},[a(`code`,{class:`language-`},[a(`span`,{class:`line`},[a(`span`,null,`<table>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`      <thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        <tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th></th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th></th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="clothes" colspan="2">Clothes</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        </tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        <tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th></th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th></th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="trousers" headers="clothes">Trousers</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="skirts" headers="clothes">Skirts</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        </tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`      </thead>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`      <tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        <tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="belgium" rowspan="2">Belgium</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="antwerp" headers="belgium">Antwerp</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <td headers="belgium antwerp clothes trousers">56</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <td headers="belgium antwerp clothes skirts">2</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        </tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        <tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <th id="ghent" headers="belgium">Ghent</th>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <td headers="belgium ghent clothes trousers">41</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`          <td headers="belgium ghent clothes skirts">17</td>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`        </tr>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`      </tbody>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,null,`    </table>`)])])]),a(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`}),a(`div`,{class:`line-number`})]),a(`div`,{class:`collapsed-lines`})],-1)]]),_:1}),l[22]||=i(`<ul><li>左上角使用&lt;td colspan=&quot;2&quot; rowspan=&quot;2&quot;&gt;&lt;/td&gt; 的效果是单个cell，使用th会渲染边框</li><li>id: add a unique id to each &lt;th&gt; element in the table, 所有的th均需定义id <ul><li>Belgium、Clothes：如果该th在外围 - 起始，那么只需要定义id</li><li>Antwerp、Trousers：从外向内，th需要在header中指定它所属的th的id值。如Antwerp 属于 Belgium，所以它的 header为 belgium</li></ul></li><li>td - data cells: add the ids of the associated &lt;th&gt; element(s) as a space-separated list. 在header中指定所属的th<br> 顺序没有关系<br> 如第一个 data cell<br> 所属的行的th的id值：belgium antwerp<br> 所属的列的th的id值：clothes trousers</li></ul><p>id值可以看作是编号，通过th的id值定位（associate）td</p><p><span style="background:#fff88f;">问：</span>既然在定义th的时候也会指定其所在的th，那么td有必要指定所有的th吗？感觉只指定邻近的th就可以了吧？<br> 比如对于第一个data cell - 56，只指定antwerp 和 trousers 不行吗？</p>`,3)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};