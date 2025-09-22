---
category: C++Primer
---
# Exercises Section 10.3.1
**Exercise 10.12:**
>[!quote]
> Write a function named compareIsbn that compares the isbn() members of two Sales_data objects. Use that function to sort a vector that holds Sales_data objects.


## 10.3.1
``` cpp
inline
bool compareIsbn(const Sales_item &lhs, const Sales_item &rhs) 
{
	return lhs.isbn() == rhs.isbn(); //[!code --] 
	return lhs.isbn() < rhs.isbn(); //[!code ++]
}
```
ISBN：978-7-121-25529-7、978-7-5713-1166-7
特点：
- 数字 和 - 组成
- 由- 分隔为5组数字
这个具体ISBN到底要如何比较值不清楚，按照上面的ISBN看我觉得应该按照每组数字的大小进行比较。
源代码中使用 == ， 习题参考中使用 <
但是这里重点不在于ISBN的比较，而是对容器内元素类型是类时，如何提供function 给 algorithm
