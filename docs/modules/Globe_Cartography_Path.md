[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Cartography Path

# Module: Globe Cartography Path

## Table of contents

### Component Functions

- [default](Globe_Cartography_Path.md#default)

## Component Functions

### default

▸ **default**(`props`): ``null`` \| `Element`

pass `{ globePathData: props.geo }` as data to Events
these will be forwarded when props includes SUPPORTED_EVENTS

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PathProps`](../interfaces/Globe_Cartography_Types.PathProps.md) |

#### Returns

``null`` \| `Element`

SVGPathElement drawing ProjectionContextValue.path of `GeoJSON.Feature`

#### Defined in

[src/components/cartography/Path.tsx:23](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/cartography/Path.tsx#L23)
