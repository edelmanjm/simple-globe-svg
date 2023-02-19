[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Cartography Types](../modules/Globe_Cartography_Types.md) / TopologyFeatures

# Interface: TopologyFeatures

[Globe Cartography Types](../modules/Globe_Cartography_Types.md).TopologyFeatures

## Hierarchy

- `FeatureCollection`

  ↳ **`TopologyFeatures`**

## Table of contents

### Properties

- [bbox](Globe_Cartography_Types.TopologyFeatures.md#bbox)
- [features](Globe_Cartography_Types.TopologyFeatures.md#features)
- [type](Globe_Cartography_Types.TopologyFeatures.md#type)

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

GeoJSON.FeatureCollection.bbox

#### Defined in

node_modules/@types/geojson/index.d.ts:67

___

### features

• **features**: `Feature`<`Geometry`, `GeoJsonProperties`\>[]

#### Inherited from

GeoJSON.FeatureCollection.features

#### Defined in

node_modules/@types/geojson/index.d.ts:174

___

### type

• **type**: ``"FeatureCollection"``

#### Inherited from

GeoJSON.FeatureCollection.type

#### Defined in

node_modules/@types/geojson/index.d.ts:173
