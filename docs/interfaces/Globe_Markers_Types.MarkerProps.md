[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Markers Types](../modules/Globe_Markers_Types.md) / MarkerProps

# Interface: MarkerProps

[Globe Markers Types](../modules/Globe_Markers_Types.md).MarkerProps

forwarded on events with [MarkerData](Globe_Markers_Types.MarkerData.md)

**`Property`**

forwarded into Pin or custom svg

**`Property`**

forwarded into `text`

**`Property`**

forwarded into `g` svg element

## Hierarchy

- **`MarkerProps`**

  ↳ [`MarkerData`](Globe_Markers_Types.MarkerData.md)

## Table of contents

### Properties

- [label](Globe_Markers_Types.MarkerProps.md#label)
- [pin](Globe_Markers_Types.MarkerProps.md#pin)
- [props](Globe_Markers_Types.MarkerProps.md#props)

## Properties

### label

• `Optional` **label**: [`LabelProps`](../modules/Globe_Markers_Types.md#labelprops)<`SVGTextElement`\> & [`LabelData`](Globe_Markers_Types.LabelData.md)

#### Defined in

[src/components/markers/types.ts:56](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L56)

___

### pin

• `Optional` **pin**: [`PinProps`](../modules/Globe_Markers_Types.md#pinprops)<`SVGPathElement`\> & [`PinData`](Globe_Markers_Types.PinData.md)

#### Defined in

[src/components/markers/types.ts:55](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L55)

___

### props

• `Optional` **props**: `SVGProps`<`SVGGElement`\> & [`HandleEventProps`](Globe_Events_Types.HandleEventProps.md)<`Function`, `Record`<`string`, `any`\>\>

#### Defined in

[src/components/markers/types.ts:57](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/markers/types.ts#L57)
