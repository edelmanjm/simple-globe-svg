[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Cartography Hooks

# Module: Globe Cartography Hooks

## Table of contents

### Interfaces

- [TopologyLoader](../interfaces/Globe_Cartography_Hooks.TopologyLoader.md)

### Type Aliases

- [Topologies](Globe_Cartography_Hooks.md#topologies)

### Callback Functions

- [useTopologyFeatures](Globe_Cartography_Hooks.md#usetopologyfeatures)

### Memo Functions

- [useProjectionPath](Globe_Cartography_Hooks.md#useprojectionpath)
- [useTopologyLoader](Globe_Cartography_Hooks.md#usetopologyloader)

## Type Aliases

### Topologies

Ƭ **Topologies**: `Record`<`string`, `GeoJSON.Feature`[]\>

#### Defined in

[src/components/cartography/hooks.tsx:30](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/cartography/hooks.tsx#L30)

## Callback Functions

### useTopologyFeatures

▸ **useTopologyFeatures**(`topology?`): [`UseTopologyFeatures`](../interfaces/Globe_Cartography_Types.UseTopologyFeatures.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topology?` | [`Topology`](../interfaces/Globe_Cartography_Types.Topology.md) |

#### Returns

[`UseTopologyFeatures`](../interfaces/Globe_Cartography_Types.UseTopologyFeatures.md)

callback to get topojson object features

#### Defined in

[src/components/cartography/hooks.tsx:16](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/cartography/hooks.tsx#L16)

___

## Memo Functions

### useProjectionPath

▸ **useProjectionPath**(`geo`, `style?`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geo` | `Feature`<`Geometry`, `GeoJsonProperties`\> |
| `style?` | `CSSProperties` |

#### Returns

``null`` \| `Element`

projected SVGPathElement

#### Defined in

[src/components/cartography/hooks.tsx:70](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/cartography/hooks.tsx#L70)

___

### useTopologyLoader

▸ **useTopologyLoader**(`topology?`): [`TopologyLoader`](../interfaces/Globe_Cartography_Hooks.TopologyLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topology?` | `Topology`<`Objects`<`GeoJsonProperties`\>\> |

#### Returns

[`TopologyLoader`](../interfaces/Globe_Cartography_Hooks.TopologyLoader.md)

topojson object features

#### Defined in

[src/components/cartography/hooks.tsx:42](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/cartography/hooks.tsx#L42)
