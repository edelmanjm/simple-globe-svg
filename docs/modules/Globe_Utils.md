[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Utils

# Module: Globe Utils

utility functions to handle axis and coords

## Table of contents

### Condition Functions

- [inAbsRange](Globe_Utils.md#inabsrange)
- [isObject](Globe_Utils.md#isobject)

### Operation Functions

- [axisDiff](Globe_Utils.md#axisdiff)
- [diff](Globe_Utils.md#diff)
- [getDOMRectDiagonal](Globe_Utils.md#getdomrectdiagonal)
- [getDistance](Globe_Utils.md#getdistance)
- [limit](Globe_Utils.md#limit)
- [reflect](Globe_Utils.md#reflect)

### Tool Functions

- [default](Globe_Utils.md#default)

## Condition Functions

### inAbsRange

▸ **inAbsRange**(`origin`, `limit`): `boolean`

if absolute value of origin is smaller than limit value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `number` | will take its absolute value |
| `limit` | `number` | should be positive in order to work properly |

#### Returns

`boolean`

absolute(`origin`) < `limit`

#### Defined in

[src/components/utils.ts:17](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L17)

___

### isObject

▸ **isObject**(`item?`): `boolean`

Simple object check.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `Record`<`string`, `any`\> | `EMPTY_OBJECT` |

#### Returns

`boolean`

#### Defined in

[src/components/utils.ts:108](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L108)

___

## Operation Functions

### axisDiff

▸ **axisDiff**(`initial`, `last`): `number`

first param may be initial position

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `number` |
| `last` | `number` |

#### Returns

`number`

diff between `initial` to `last` regarded direction

#### Defined in

[src/components/utils.ts:70](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L70)

___

### diff

▸ **diff**(`a`, `b`): `number`

accepts positive and negative at any order

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

difference between `a` to `b`

#### Defined in

[src/components/utils.ts:62](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L62)

___

### getDOMRectDiagonal

▸ **getDOMRectDiagonal**(`el`): [`Line`](../classes/Globe_Classes.Line.md)

takes distance between two Coord\
accepts positive and negative at any order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `Element` | any html element |

#### Returns

[`Line`](../classes/Globe_Classes.Line.md)

Line diagonal of element bounding box

#### Defined in

[src/components/utils.ts:97](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L97)

___

### getDistance

▸ **getDistance**(`a`, `b`): `number`

takes distance between two Point\
accepts positive and negative at any order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Point`](../classes/Globe_Classes.Point.md) | any point |
| `b` | [`Point`](../classes/Globe_Classes.Point.md) | other point |

#### Returns

`number`

distance between `a` and `b`

#### Defined in

[src/components/utils.ts:83](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L83)

___

### limit

▸ **limit**(`from`, `to`, `range`): `number`

limit projected `to` value into the `range`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | starting value |
| `to` | `number` | projected value |
| `range` | `number` | max value `to` should reach |

#### Returns

`number`

`to` if is [inAbsRange](Globe_Utils.md#inabsrange) else `from`

#### Defined in

[src/components/utils.ts:29](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L29)

___

### reflect

▸ **reflect**(`to`, `into`): `number`

reflects a projected value back into its axis\
`to` will be reflected between `into ~ -into`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | projected value |
| `into` | `number` | limit `to` can reaches |

#### Returns

`number`

the reflected axis value

#### Defined in

[src/components/utils.ts:42](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L42)

___

## Tool Functions

### default

▸ **default**(`target?`, `source?`): `Record`<`string`, `any`\>

merge and overwrite objects recursively

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `Record`<`string`, `any`\> | `EMPTY_OBJECT` | overwritten object |
| `source` | `Record`<`string`, `any`\> | `EMPTY_OBJECT` | properties to merge on |

#### Returns

`Record`<`string`, `any`\>

merged objects

#### Defined in

[src/components/utils.ts:119](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/utils.ts#L119)
