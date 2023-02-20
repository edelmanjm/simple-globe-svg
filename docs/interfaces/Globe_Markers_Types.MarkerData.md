[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Markers Types](../modules/Globe_Markers_Types.md) / MarkerData

# Interface: MarkerData

[Globe Markers Types](../modules/Globe_Markers_Types.md).MarkerData

**`Property`**

unique identifier

**`Property`**

where to affix the marker

## Hierarchy

- [`MarkerProps`](Globe_Markers_Types.MarkerProps.md)

  ↳ **`MarkerData`**

## Table of contents

### Properties

- [coordinates](Globe_Markers_Types.MarkerData.md#coordinates)
- [id](Globe_Markers_Types.MarkerData.md#id)
- [label](Globe_Markers_Types.MarkerData.md#label)
- [pin](Globe_Markers_Types.MarkerData.md#pin)
- [props](Globe_Markers_Types.MarkerData.md#props)
- [svg](Globe_Markers_Types.MarkerData.md#svg)

## Properties

### coordinates

• **coordinates**: [`Coord`](../classes/Globe_Classes.Coord.md)

#### Defined in

[src/components/markers/types.ts:67](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L67)

___

### id

• **id**: `string`

#### Defined in

[src/components/markers/types.ts:66](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L66)

___

### label

• `Optional` **label**: [`LabelProps`](../modules/Globe_Markers_Types.md#labelprops)<`SVGTextElement`\> & [`LabelData`](Globe_Markers_Types.LabelData.md)

#### Inherited from

[MarkerProps](Globe_Markers_Types.MarkerProps.md).[label](Globe_Markers_Types.MarkerProps.md#label)

#### Defined in

[src/components/markers/types.ts:56](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L56)

___

### pin

• `Optional` **pin**: [`PinProps`](../modules/Globe_Markers_Types.md#pinprops)<`SVGPathElement`\> & [`PinData`](Globe_Markers_Types.PinData.md)

#### Inherited from

[MarkerProps](Globe_Markers_Types.MarkerProps.md).[pin](Globe_Markers_Types.MarkerProps.md#pin)

#### Defined in

[src/components/markers/types.ts:55](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L55)

___

### props

• `Optional` **props**: `SVGProps`<`SVGGElement`\> & [`HandleEventProps`](Globe_Events_Types.HandleEventProps.md)<`Function`, `Record`<`string`, `any`\>\>

#### Inherited from

[MarkerProps](Globe_Markers_Types.MarkerProps.md).[props](Globe_Markers_Types.MarkerProps.md#props)

#### Defined in

[src/components/markers/types.ts:57](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L57)

___

### svg

• `Optional` **svg**: `FunctionComponent`<`SVGProps`<`SVGSVGElement`\>\>

#### Defined in

[src/components/markers/types.ts:68](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L68)
