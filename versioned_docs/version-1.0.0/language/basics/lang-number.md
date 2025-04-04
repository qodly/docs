---
id: lang-number
title: Numeric
---

Numeric is a generic term that stands for:

- Number attribute, variable or expression. The range for the number data type is ±1.7e±308 (13 significant digits).
- Integer attribute, variable or expression. The range for the integer data type (4-byte Long integer) is -2^31..(2^31)-1.

You can assign any numeric data type to another; Qodly does the conversion, truncating or rounding if necessary. However, when values are out of range, the conversion will not return a valid value. You can mix numeric data types in expressions.


## Numeric literals

A numeric literal constant is written as a real number with a period (.) as decimal separator. Here are some examples of numeric constants:

```qs
27
123.76
0.0076
```

Negative numbers are specified with the minus sign (-). For example:

```qs
-27
-123.76
-0.0076
```

## Numeric operators

|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Addition |Number + Number |Number |2 + 3 |5|
|Subtraction |Number - Number |Number |3 – 2 |1|
|Multiplication |Number * Number |Number |5 * 2 |10|
|Division |Number / Number |Number |5 / 2 |2.5|
|Longint division |Number \ Number |Number |5 \ 2 |2|
|Modulo |Number % Number |Number |5 % 2 |1|
|Exponentiation |Number ^ Number |Number |2 ^ 3| 8|
|Equality |Number  ==  Number |Boolean |10  ==  10 |true|
   ||||10  ==  11| false|
|Inequality |Number  !=  Number |Boolean |10  !=  11 |true|
   ||||10  !=  10 |false|
|Greater than |Number >; Number |Boolean |11 >; 10 |true|
   ||||10 >; 11 |false|
|Less than |Number &lt; Number |Boolean |10 &lt; 11 |true|
  |||| 11 &lt; 10 |false|
|Greater than or equal to |Number >;=  Number |Boolean |11 >;=  10 |true|
   ||||10 >;=  11 |false|
|Less than or equal to |Number &lt;= Number |Boolean |10 &lt;= 11 |true|
  |||| 11 &lt;= 10 |false|

The modulo operator % divides the first number by the second number and returns a whole number remainder. Here are some examples:

- 10 % 2 returns 0 because 10 is evenly divided by 2.
- 10 % 3 returns 1 because the remainder is 1.
- 10.5 % 2 returns 0 because the remainder is not a whole number.

:::caution

- The modulo operator `%` returns significant values with numbers that are in the integer range (from minus 2^31 to 2^31 minus one). To calculate the modulo with numbers outside of this range, use the [`mod`](../commands/mod.md) command.
- The longint division operator `\` returns significant values with integer numbers only.

:::

### Precedence

The order in which an expression is evaluated is called precedence. Qodly has a strict left-to-right precedence, in which algebraic order is not observed. For example:

```qs
 3+4*5
```

returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35.

To override the left-to-right precedence, you MUST use parentheses. For example:

```qs
 3+(4*5)
```

returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23.

Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses—the compiler detects a missing parenthesis as a syntax error.

## Bitwise operators

The bitwise operators operates on **integer** expressions or values. If you pass a real value to a bitwise operator, Qodly evaluates the value as a integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about an integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about an integer value as a value where you can store 32 boolean values. A bit equal to 1 means **true** and a bit equal to 0 means **false**.

An expression that uses a bitwise operator returns an integer value, except for the Bit Test operator, where the expression returns a boolean value. The following table lists the bitwise operators and their syntax:

|Operation|Operator|Syntax|Returns|
|---|---|---|---|
|Bitwise AND|&|integer & integer|integer|
|Bitwise OR (inclusive)|&#124;|integer &#124; integer|integer|
|Bitwise OR (exclusive)|^&#124;|integer ^&#124; integer|integer|
|Left Bit Shift|&lt;&lt;|integer &lt;&lt; integer|integer (see note 1)|
|Right Bit Shift|>>|integer >;>; integer|integer (see note 1)|
|Bit Set|?+|integer ?+ integer|integer (see note 2)|
|Bit Clear|?-|integer ?- integer|integer (see note 2)|
|Bit Test|??|integer ?? integer|boolean (see note 2)|

#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.

The following table lists the bitwise operators and their effects:

|Operation|Description|
|---|---|
|Bitwise AND|Each resulting bit is the logical AND of the bits in the two operands. Here is the logical AND table:<li>1 & 1 &rarr; 1</li><li>0 & 1 &rarr; 0</li><li>1 & 0 &rarr; 0</li><li>0 & 0 &rarr; 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.|
|Bitwise OR (inclusive)|Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 &#124; 1 &rarr; 1</li><li>0 &#124; 1 &rarr; 1</li><li>1 &#124; 0 &rarr; 1</li><li>0 &#124; 0 &rarr; 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.|
|Bitwise OR (exclusive)|Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 \^&#124; 1 &rarr; 0</li><li>0 \^&#124; 1 &rarr; 1</li><li>1 \^&#124; 0 &rarr; 1</li><li>0 \^&#124; 0 &rarr; 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.|
|Left Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. **Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.|
|Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.|
|Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.|
|Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.|
|Bit Test|Returns true if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns false if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.|

### Examples

|Operation|Example|Result|
|---|---|---|
|Bitwise AND|0x0000FFFF & 0xFF00FF00|0x0000FF00|
|Bitwise OR (inclusive)|0x0000FFFF &#124; 0xFF00FF00| 0xFF00FFFF
|Bitwise OR (exclusive)|0x0000FFFF \^&#124; 0xFF00FF00| 0xFF0000FF|
|Left Bit Shift|0x0000FFFF &lt;&lt; 8|0x00FFFF00|
|Right Bit Shift|0x0000FFFF >;>; 8|0x000000FF|
|Bit Set|0x00000000 ?+ 16|0x00010000|
|Bit Clear|0x00010000 ?- 16|0x00000000|
|Bit Test|0x00010000 ?? 16|True|
