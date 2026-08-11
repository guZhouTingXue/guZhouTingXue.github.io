# Attribute selectors
>In CSS you can use attribute selectors to target elements with certain attributes.

## Presence and value selectors
>These selectors enable the selection of an element based on the presence of an attribute alone, or on various different matches against the value of the attribute.

```html
    <ul>
      <li class="0">Item 0</li>
      <li class="1">Item 1</li>
      <li class="0 1 2">Item 2</li>
      <li class="3 1-">Item 3</li>
      <li>Item 4</li>
    </ul>
```

:::tabs
@tab attr
```css
      li[class] {
        color: red;
      }
```
匹配存在class attribute的li 
效果：
![|300x303](./attachments/Attribute%20selectors.webp)

@tab attr=value
```css
      li[class="0"] {
        color: red;
      }
```
匹配具有class attribute 且 class 为 0 的li
效果：
![|300x299](./attachments/Attribute%20selectors-1.webp)
Item 1、2、3 虽然有class attribute，但是值为1，不匹配

@tab attr~=value
```css
      li[class~="1"] {
        color: red;
      }
```
匹配具有class attribute，且值里面包含了1的li
效果：
![|300x271](./attachments/Attribute%20selectors-2.webp)
Item 3的class的值为 1-，不匹配1

@tab attr|=value
```css
      li[class|="1"] {
        color: red;
      }
```
匹配具有class attribute，attribute的值为1，或者（值是1开头，且后面跟着-，且是第一value）的 li
效果：
![|300x281](./attachments/Attribute%20selectors-3.webp)
Item 1 完全匹配
Item 3 的 1- 不是第一个值
修改下：
```html
      <li class="1- 3">Item 3</li>
```
效果：
![|300x326](./attachments/Attribute%20selectors-4.webp)

:::

- presence：是否存在attribute
- the value of the attribute: 值是多少/包含值/值的类型



## Substring matching selectors
>These selectors allow for more advanced matching of substrings inside the value of your attribute.

```html
    <ul>
      <li class="box-warning">Item 0</li>
      <li class="box-error">Item 1</li>
      <li class="error-box">Item 2</li>
      <li class="warning-box">Item 3</li>
      <li>Item 4</li>
    </ul>
```

:::tabs
@tab attr^=value
```css
      li[class^="box"] {
        color: red;
      }
```
以box起始
效果：
![|300x343](./attachments/Attribute%20selectors-5.webp)
@tab attr$=value
```css
      li[class^="box"] {
        color: red;
      }
```
以box结尾
效果：
![|300x337](./attachments/Attribute%20selectors-6.webp)
@tab attr*=value
```css
      li[class*="box"] {
        color: red;
      }
```
包含了box
效果：
![|300x304](./attachments/Attribute%20selectors-7.webp)
:::

## Case-insensitivity
html 是 case-sensitivity的
```html
    <ul>
      <li class="a">Item 0</li>
      <li class="A">Item 1</li>
    </ul>
```

```css
      li[class^="a"] {
        color: red;
      }
```
匹配小写字母a

效果：
![|300x164](./attachments/Attribute%20selectors-8.webp)

如果想要case-insensitivity，需要添加标识 i
```css
      li[class^="a" i] {
        color: red;
      }
```
效果：
![|300x166](./attachments/Attribute%20selectors-9.webp)
