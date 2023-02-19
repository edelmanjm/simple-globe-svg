[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Markers Types

# Module: Globe Markers Types

## Table of contents

### Enum Enumerations

- [PinShape](../enums/Globe_Markers_Types.PinShape.md)

### Data Interfaces

- [LabelData](../interfaces/Globe_Markers_Types.LabelData.md)
- [MarkerData](../interfaces/Globe_Markers_Types.MarkerData.md)
- [MarkerForwardedData](../interfaces/Globe_Markers_Types.MarkerForwardedData.md)
- [PinData](../interfaces/Globe_Markers_Types.PinData.md)

### Props Interfaces

- [MarkerProps](../interfaces/Globe_Markers_Types.MarkerProps.md)

### Alias Type Aliases

- [PinShapes](Globe_Markers_Types.md#pinshapes)

### Props Type Aliases

- [LabelProps](Globe_Markers_Types.md#labelprops)
- [PinProps](Globe_Markers_Types.md#pinprops)

## Alias Type Aliases

### PinShapes

Ƭ **PinShapes**: keyof [`PinShape`](../enums/Globe_Markers_Types.PinShape.md) \| `string`

list of pin shape names

#### Defined in

[src/components/markers/types.ts:21](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/markers/types.ts#L21)

___

## Props Type Aliases

### LabelProps

Ƭ **LabelProps**<`T`\>: `React.SVGProps`<`T`\>

svg attributes forward

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `SVGTextElement` |

#### Defined in

[src/components/markers/types.ts:39](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/markers/types.ts#L39)

___

### PinProps

Ƭ **PinProps**<`T`\>: `React.SVGProps`<`T`\>

svg attributes forward

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `SVGPathElement` |

#### Defined in

[src/components/markers/types.ts:26](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/markers/types.ts#L26)
