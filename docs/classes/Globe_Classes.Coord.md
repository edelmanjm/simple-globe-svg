[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Classes](../modules/Globe_Classes.md) / Coord

# Class: Coord

[Globe Classes](../modules/Globe_Classes.md).Coord

**`Property`**

latitude

**`Property`**

longitude

## Hierarchy

- [`Point`](Globe_Classes.Point.md)

  ↳ **`Coord`**

## Table of contents

### Constructors

- [constructor](Globe_Classes.Coord.md#constructor)

### Properties

- [0](Globe_Classes.Coord.md#0)
- [1](Globe_Classes.Coord.md#1)
- [latitude](Globe_Classes.Coord.md#latitude)
- [length](Globe_Classes.Coord.md#length)
- [longitude](Globe_Classes.Coord.md#longitude)
- [x](Globe_Classes.Coord.md#x)
- [y](Globe_Classes.Coord.md#y)
- [[species]](Globe_Classes.Coord.md#[species])

### Methods

- [[iterator]](Globe_Classes.Coord.md#[iterator])
- [[unscopables]](Globe_Classes.Coord.md#[unscopables])
- [at](Globe_Classes.Coord.md#at)
- [concat](Globe_Classes.Coord.md#concat)
- [copyWithin](Globe_Classes.Coord.md#copywithin)
- [entries](Globe_Classes.Coord.md#entries)
- [every](Globe_Classes.Coord.md#every)
- [fill](Globe_Classes.Coord.md#fill)
- [filter](Globe_Classes.Coord.md#filter)
- [find](Globe_Classes.Coord.md#find)
- [findIndex](Globe_Classes.Coord.md#findindex)
- [flat](Globe_Classes.Coord.md#flat)
- [flatMap](Globe_Classes.Coord.md#flatmap)
- [forEach](Globe_Classes.Coord.md#foreach)
- [includes](Globe_Classes.Coord.md#includes)
- [indexOf](Globe_Classes.Coord.md#indexof)
- [join](Globe_Classes.Coord.md#join)
- [keys](Globe_Classes.Coord.md#keys)
- [lastIndexOf](Globe_Classes.Coord.md#lastindexof)
- [map](Globe_Classes.Coord.md#map)
- [pop](Globe_Classes.Coord.md#pop)
- [push](Globe_Classes.Coord.md#push)
- [reduce](Globe_Classes.Coord.md#reduce)
- [reduceRight](Globe_Classes.Coord.md#reduceright)
- [reverse](Globe_Classes.Coord.md#reverse)
- [shift](Globe_Classes.Coord.md#shift)
- [slice](Globe_Classes.Coord.md#slice)
- [some](Globe_Classes.Coord.md#some)
- [sort](Globe_Classes.Coord.md#sort)
- [splice](Globe_Classes.Coord.md#splice)
- [toArray](Globe_Classes.Coord.md#toarray)
- [toLocaleString](Globe_Classes.Coord.md#tolocalestring)
- [toString](Globe_Classes.Coord.md#tostring)
- [unshift](Globe_Classes.Coord.md#unshift)
- [values](Globe_Classes.Coord.md#values)
- [from](Globe_Classes.Coord.md#from)
- [isArray](Globe_Classes.Coord.md#isarray)
- [of](Globe_Classes.Coord.md#of)

## Constructors

### constructor

• **new Coord**(`latitude?`, `longitude?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `latitude` | `number` | `0` |
| `longitude` | `number` | `0` |

#### Overrides

[Point](Globe_Classes.Point.md).[constructor](Globe_Classes.Point.md#constructor)

#### Defined in

[src/components/classes.ts:85](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L85)

## Properties

### 0

• **0**: `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[0](Globe_Classes.Point.md#0)

#### Defined in

[src/components/classes.ts:17](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L17)

___

### 1

• **1**: `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[1](Globe_Classes.Point.md#1)

#### Defined in

[src/components/classes.ts:19](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L19)

___

### latitude

• **latitude**: `number` = `0`

#### Defined in

[src/components/classes.ts:85](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L85)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

[Point](Globe_Classes.Point.md).[length](Globe_Classes.Point.md#length)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1304

___

### longitude

• **longitude**: `number` = `0`

#### Defined in

[src/components/classes.ts:85](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L85)

___

### x

• **x**: `number` = `0`

#### Inherited from

[Point](Globe_Classes.Point.md).[x](Globe_Classes.Point.md#x)

#### Defined in

[src/components/classes.ts:20](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L20)

___

### y

• **y**: `number` = `0`

#### Inherited from

[Point](Globe_Classes.Point.md).[y](Globe_Classes.Point.md#y)

#### Defined in

[src/components/classes.ts:20](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L20)

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

[Point](Globe_Classes.Point.md).[[species]](Globe_Classes.Point.md#[species])

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`number`\>

Iterator

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

[Point](Globe_Classes.Point.md).[[iterator]](Globe_Classes.Point.md#[iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

[Point](Globe_Classes.Point.md).[[unscopables]](Globe_Classes.Point.md#[unscopables])

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| `number`

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[at](Globe_Classes.Point.md#at)

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:26

___

### concat

▸ **concat**(`...items`): `number`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`number`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`number`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[concat](Globe_Classes.Point.md#concat)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

▸ **concat**(`...items`): `number`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`number` \| `ConcatArray`<`number`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`number`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[concat](Globe_Classes.Point.md#concat)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`Coord`](Globe_Classes.Coord.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`Coord`](Globe_Classes.Coord.md)

#### Inherited from

[Point](Globe_Classes.Point.md).[copyWithin](Globe_Classes.Point.md#copywithin)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `number`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `number`]\>

#### Inherited from

[Point](Globe_Classes.Point.md).[entries](Globe_Classes.Point.md#entries)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

[Point](Globe_Classes.Point.md).[every](Globe_Classes.Point.md#every)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

[Point](Globe_Classes.Point.md).[every](Globe_Classes.Point.md#every)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1420

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`Coord`](Globe_Classes.Coord.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`Coord`](Globe_Classes.Coord.md)

#### Inherited from

[Point](Globe_Classes.Point.md).[fill](Globe_Classes.Point.md#fill)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[filter](Globe_Classes.Point.md#filter)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1447

▸ **filter**(`predicate`, `thisArg?`): `number`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`number`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[filter](Globe_Classes.Point.md#filter)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: `number`, `index`: `number`, `obj`: `number`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

[Point](Globe_Classes.Point.md).[find](Globe_Classes.Point.md#find)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `number`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[find](Globe_Classes.Point.md#find)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `number`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[findIndex](Globe_Classes.Point.md#findindex)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

[Point](Globe_Classes.Point.md).[flat](Globe_Classes.Point.md#flat)

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: `number`, `index`: `number`, `array`: `number`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[flatMap](Globe_Classes.Point.md#flatmap)

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

[Point](Globe_Classes.Point.md).[forEach](Globe_Classes.Point.md#foreach)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

[Point](Globe_Classes.Point.md).[includes](Globe_Classes.Point.md#includes)

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[indexOf](Globe_Classes.Point.md#indexof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1396

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

[Point](Globe_Classes.Point.md).[join](Globe_Classes.Point.md#join)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

[Point](Globe_Classes.Point.md).[keys](Globe_Classes.Point.md#keys)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[lastIndexOf](Globe_Classes.Point.md#lastindexof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1402

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[map](Globe_Classes.Point.md#map)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

___

### pop

▸ **pop**(): `undefined` \| `number`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[pop](Globe_Classes.Point.md#pop)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1317

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `number`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[push](Globe_Classes.Point.md#push)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### reduce

▸ **reduce**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `number` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduce](Globe_Classes.Point.md#reduce)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1459

▸ **reduce**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduce](Globe_Classes.Point.md#reduce)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduce](Globe_Classes.Point.md#reduce)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1466

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `number` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduceRight](Globe_Classes.Point.md#reduceright)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1472

▸ **reduceRight**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduceRight](Globe_Classes.Point.md#reduceright)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `number`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

[Point](Globe_Classes.Point.md).[reduceRight](Globe_Classes.Point.md#reduceright)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1479

___

### reverse

▸ **reverse**(): `number`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`number`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[reverse](Globe_Classes.Point.md#reverse)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1344

___

### shift

▸ **shift**(): `undefined` \| `number`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `number`

#### Inherited from

[Point](Globe_Classes.Point.md).[shift](Globe_Classes.Point.md#shift)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

### slice

▸ **slice**(`start?`, `end?`): `number`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`number`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[slice](Globe_Classes.Point.md#slice)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `number`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

[Point](Globe_Classes.Point.md).[some](Globe_Classes.Point.md#some)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

___

### sort

▸ **sort**(`compareFn?`): [`Coord`](Globe_Classes.Coord.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`Coord`](Globe_Classes.Coord.md)

#### Inherited from

[Point](Globe_Classes.Point.md).[sort](Globe_Classes.Point.md#sort)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1370

___

### splice

▸ **splice**(`start`, `deleteCount?`): `number`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`number`[]

An array containing the elements that were deleted.

#### Inherited from

[Point](Globe_Classes.Point.md).[splice](Globe_Classes.Point.md#splice)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

▸ **splice**(`start`, `deleteCount`, `...items`): `number`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `number`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`number`[]

An array containing the elements that were deleted.

#### Inherited from

[Point](Globe_Classes.Point.md).[splice](Globe_Classes.Point.md#splice)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1385

___

### toArray

▸ **toArray**(): `PointType`

#### Returns

`PointType`

#### Inherited from

[Point](Globe_Classes.Point.md).[toArray](Globe_Classes.Point.md#toarray)

#### Defined in

[src/components/classes.ts:25](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/classes.ts#L25)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

[Point](Globe_Classes.Point.md).[toLocaleString](Globe_Classes.Point.md#tolocalestring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1312

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

[Point](Globe_Classes.Point.md).[toString](Globe_Classes.Point.md#tostring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `number`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

[Point](Globe_Classes.Point.md).[unshift](Globe_Classes.Point.md#unshift)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1390

___

### values

▸ **values**(): `IterableIterator`<`number`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

[Point](Globe_Classes.Point.md).[values](Globe_Classes.Point.md#values)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[from](Globe_Classes.Point.md#from)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[from](Globe_Classes.Point.md#from)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[from](Globe_Classes.Point.md#from)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[from](Globe_Classes.Point.md#from)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

[Point](Globe_Classes.Point.md).[isArray](Globe_Classes.Point.md#isarray)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1491

___

### of

▸ `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

[Point](Globe_Classes.Point.md).[of](Globe_Classes.Point.md#of)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86
