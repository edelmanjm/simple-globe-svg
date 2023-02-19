[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Cartography Types](../modules/Globe_Cartography_Types.md) / Feature

# Interface: Feature

[Globe Cartography Types](../modules/Globe_Cartography_Types.md).Feature

## Hierarchy

- `Feature`<`Geometry`, `GeoJSON.GeoJsonProperties`\>

  ↳ **`Feature`**

## Table of contents

### Properties

- [bbox](Globe_Cartography_Types.Feature.md#bbox)
- [geometry](Globe_Cartography_Types.Feature.md#geometry)
- [id](Globe_Cartography_Types.Feature.md#id)
- [properties](Globe_Cartography_Types.Feature.md#properties)
- [type](Globe_Cartography_Types.Feature.md#type)

## Properties

### bbox

• `Optional` **bbox**: `BBox`

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
The value of the bbox member is an array of length 2*n where n is the number of dimensions
represented in the contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point.
The axes order of a bbox follows the axes order of geometries.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

GeoJSON.Feature.bbox

#### Defined in

node_modules/@types/geojson/index.d.ts:67

___

### geometry

• **geometry**: `Geometry`

The feature's geometry

#### Inherited from

GeoJSON.Feature.geometry

#### Defined in

node_modules/@types/geojson/index.d.ts:156

___

### id

• `Optional` **id**: `string` \| `number`

A value that uniquely identifies this feature in a
https://tools.ietf.org/html/rfc7946#section-3.2.

#### Inherited from

GeoJSON.Feature.id

#### Defined in

node_modules/@types/geojson/index.d.ts:161

___

### properties

• **properties**: `GeoJsonProperties`

Properties associated with this feature.

#### Inherited from

GeoJSON.Feature.properties

#### Defined in

node_modules/@types/geojson/index.d.ts:165

___

### type

• **type**: ``"Feature"``

#### Inherited from

GeoJSON.Feature.type

#### Defined in

node_modules/@types/geojson/index.d.ts:152
