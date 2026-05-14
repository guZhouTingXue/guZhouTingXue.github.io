# Table accessibility

## Adding a caption to your table with \<caption>
:::preview
<table>
	<caption>How I chose to spend my money</caption>
	<tr>
		<th>Purchase</th>
		<th>Location</th>
		<th>Date</th>
		<th>...</th>
		<th>Cost</th>
	</tr>
</table>
:::


## Adding structure with \<thead>,\<tbody> and \<tfoot>
在创建一个复杂结构的表格时，对表格的内容进行结构化的划分
- thead: wrap the part of the table that is the header
- tbody: wrap the main part of the table
- tfoot: wrap the part of the table that is the footer

> They don't result in any visual enhancement on their own, however they are very useful for applying styling an layout enhancements via CSS, which can improve accessibility

结合CSS对表格不同内容进行样式设置
:::preview
<style> tbody { font-style: italic; } tfoot { font-weight: bold; } </style>
<table>
  <caption>
	How I chose to spend my money
  </caption>
  <thead>
	<tr>
	  <th>Purchase</th>
	  <th>Location</th>
	  <th>Date</th>
	  <th>Cost</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td>Haircut</td>
	  <td>...</td>
	  <td>01/02</td>
	  <td>10</td>
	</tr>
	<tr>
	  <td>Shoes</td>
	  <td>...</td>
	  <td>01/03</td>
	  <td>65</td>
	</tr>
  </tbody>
  <tfoot>
	<tr>
	  <td colspan="3">Sum</td>
	  <td>75</td>
	</tr>
  </tfoot>
</table>
:::
设置主体内容为斜体，footer - 合计项 为粗体

>\<tbody> is always implicitly included in every table if you don't specify it in your code.

如果不使用thead、tbody and tfoot 进行分类，要达到相同的效果，需要手动对表格结构进行区分。


## The `scope` attribute
>The scope attribute can be added to the \<th> element to tell screen readers exactyl what cells the header is a header for - is it a header for the row it is in, or the column.

看下面的表格：
:::preview
<table>
  <caption>
	2016 年 8 月出售的物品
  </caption>
  <thead>
	<tr>
	  <td colspan="2" rowspan="2"></td>
	  <th colspan="3" scope="colgroup">衣物</th>
	  <th colspan="2" scope="colgroup">饰品</th>
	</tr>
	<tr>
	  <th scope="col">长裤</th>
	  <th scope="col">衬衫</th>
	  <th scope="col">裙子</th>
	  <th scope="col">手镯</th>
	  <th scope="col">戒指</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <th rowspan="2" scope="rowgroup">比利时</th>
	  <th scope="row">Antwerp</th>
	  <td>56</td>
	  <td>22</td>
	  <td>43</td>
	  <td>72</td>
	  <td>23</td>
	</tr>
	<tr>
	  <th scope="row">Ghent</th>
	  <td>46</td>
	  <td>18</td>
	  <td>50</td>
	  <td>61</td>
	  <td>15</td>
	</tr>
  </tbody>
</table>
:::

- th works in exactly the same way as a \<td> ... 使用scope 后 th就和所在的行或列关联起来，阅读时能阅读它所关联的所有内容。
- Antwerp scope="row": 范围包含了所在行
- 比利时 scope="rowgroup" rowspan="2": 本身跨越了两行，范围包含了所跨越的行 - Antwerp 和 Ghent

衣物下面包含了3个分类：长裤、衬衫 和 裙子。如果要报告衣物相关的内容应该包含这三个分类。可能的表述：长裤，Antwerp 56件，Ghent 46件；衬衫，Antwerp 22件。。。


## The `id` and `head` attributes
> An alternative to using the `scope` attribute is to use `id` and `headers` attributes to create associations between data cells and header cells.

:::preview
<table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th id="clothes" colspan="2">Clothes</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th id="trousers" headers="clothes">Trousers</th>
          <th id="skirts" headers="clothes">Skirts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th id="belgium" rowspan="2">Belgium</th>
          <th id="antwerp" headers="belgium">Antwerp</th>
          <td headers="belgium antwerp clothes trousers">56</td>
          <td headers="belgium antwerp clothes skirts">2</td>
        </tr>
        <tr>
          <th id="ghent" headers="belgium">Ghent</th>
          <td headers="belgium ghent clothes trousers">41</td>
          <td headers="belgium ghent clothes skirts">17</td>
        </tr>
      </tbody>
    </table>
:::

- 左上角使用\<td colspan="2" rowspan="2">\</td> 的效果是单个cell，使用th会渲染边框
- id: add a unique id to each \<th> element in the table, 所有的th均需定义id 
	- Belgium、Clothes：如果该th在外围 - 起始，那么只需要定义id
	- Antwerp、Trousers：从外向内，th需要在header中指定它所属的th的id值。如Antwerp 属于 Belgium，所以它的 header为 belgium
- td - data cells: add the ids of the associated \<th> element(s) as a space-separated list. 在header中指定所属的th
顺序没有关系
如第一个 data cell
所属的行的th的id值：belgium antwerp 
所属的列的th的id值：clothes trousers

id值可以看作是编号，通过th的id值定位（associate）td

<span style="background:#fff88f">问：</span>既然在定义th的时候也会指定其所在的th，那么td有必要指定所有的th吗？感觉只指定邻近的th就可以了吧？
比如对于第一个data cell - 56，只指定antwerp 和 trousers 不行吗？
