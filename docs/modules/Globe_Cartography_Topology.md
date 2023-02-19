[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Cartography Topology

# Module: Globe Cartography Topology

D3 topojson projection

## Table of contents

### Props Interfaces

- [TopologyProps](../interfaces/Globe_Cartography_Topology.TopologyProps.md)

### Functions

- [Topology](Globe_Cartography_Topology.md#topology)

## Functions

### Topology

▸ **Topology**(`«destructured»`): ``null`` \| `Element`

**`Hook`**

useInCameraRange `inCameraRange` [WIP](https://gitlab.com/gaushao/react-simple-map-globe/-/issues/2)

**`Hook`**

useTopologyLoader from [TopologyProps.data](../interfaces/Globe_Cartography_Topology.TopologyProps.md#data)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TopologyProps`](../interfaces/Globe_Cartography_Topology.TopologyProps.md) |

#### Returns

``null`` \| `Element`

map of `inCameraRange` Feature<Geometry, GeoJsonProperties> rendered by GeoPath

#### Defined in

[src/components/cartography/Topology.tsx:28](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/cartography/Topology.tsx#L28)
