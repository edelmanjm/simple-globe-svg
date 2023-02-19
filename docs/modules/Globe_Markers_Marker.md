[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Markers Marker

# Module: Globe Markers Marker

## Table of contents

### Component Functions

- [Marker](Globe_Markers_Marker.md#marker)

## Component Functions

### Marker

▸ **Marker**(`props`): ``null`` \| `Element`

renders svg map marker
forward `globeMarkerData` into marker `g` supported events

**`Hook`**

useProjectionContext ProjectionContextValue.projection|projection will process `coordinates`

**`Hook`**

useCameraContext CameraContextValue.center|center distance from `coordinates` > 90 returns `null`

**`Prop`**

custom marker is rendered in place of default Pin

**`Prop`**

projected by 'projection'

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`MarkerData`](../interfaces/Globe_Markers_Types.MarkerData.md)\> |

#### Returns

``null`` \| `Element`

render if there are coords and is `inCameraRange`

#### Defined in

[src/components/markers/Marker.tsx:37](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/markers/Marker.tsx#L37)
