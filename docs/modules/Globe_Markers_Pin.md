[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Markers Pin

# Module: Globe Markers Pin

svg elements to be rendered as pin marker on the map

## Table of contents

### References

- [default](Globe_Markers_Pin.md#default)

### Component Functions

- [Pin](Globe_Markers_Pin.md#pin)

### PinShape Component Functions

- [Circle](Globe_Markers_Pin.md#circle)
- [Location](Globe_Markers_Pin.md#location)

## References

### default

Renames and re-exports [Pin](Globe_Markers_Pin.md#pin)

## Component Functions

### Pin

▸ **Pin**(`props`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MarkerData`](../interfaces/Globe_Markers_Types.MarkerData.md) |

#### Returns

``null`` \| `Element`

PinShape Component switched from PinData.shape

#### Defined in

[src/components/markers/Pin.tsx:49](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/markers/Pin.tsx#L49)

___

## PinShape Component Functions

### Circle

▸ **Circle**(`props`): `Element`

refers to PinShape.CIRCLE

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MarkerData`](../interfaces/Globe_Markers_Types.MarkerData.md) |

#### Returns

`Element`

SVGCircleElement

#### Defined in

[src/components/markers/Pin.tsx:40](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/markers/Pin.tsx#L40)

___

### Location

▸ **Location**(`props`): `Element`

TODO
- not good on rendering, change svg for beauty
- should support import of .svg files in here, seems not

renders svg custom location icon
refers to PinShape.LOCATION

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MarkerData`](../interfaces/Globe_Markers_Types.MarkerData.md) |

#### Returns

`Element`

SVGElement

#### Defined in

[src/components/markers/Pin.tsx:20](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/markers/Pin.tsx#L20)
