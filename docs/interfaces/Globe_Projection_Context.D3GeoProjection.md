[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Projection Context](../modules/Globe_Projection_Context.md) / D3GeoProjection

# Interface: D3GeoProjection

[Globe Projection Context](../modules/Globe_Projection_Context.md).D3GeoProjection

## Hierarchy

- `GeoProjection`

  ↳ **`D3GeoProjection`**

## Callable

### D3GeoProjection

▸ **D3GeoProjection**(`point`): ``null`` \| [`number`, `number`]

Returns a new array [x, y] (typically in pixels) representing the projected point of the given point.
The point must be specified as a two-element array [longitude, latitude] in degrees.
May return null if the specified point has no defined projected position, such as when the point is outside the clipping bounds of the projection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`number`, `number`] | A point specified as a two-dimensional array [longitude, latitude] in degrees. |

#### Returns

``null`` \| [`number`, `number`]

#### Defined in

node_modules/@types/d3-geo/index.d.ts:469

## Table of contents

### Methods

- [angle](Globe_Projection_Context.D3GeoProjection.md#angle)
- [center](Globe_Projection_Context.D3GeoProjection.md#center)
- [clipAngle](Globe_Projection_Context.D3GeoProjection.md#clipangle)
- [clipExtent](Globe_Projection_Context.D3GeoProjection.md#clipextent)
- [fitExtent](Globe_Projection_Context.D3GeoProjection.md#fitextent)
- [fitHeight](Globe_Projection_Context.D3GeoProjection.md#fitheight)
- [fitSize](Globe_Projection_Context.D3GeoProjection.md#fitsize)
- [fitWidth](Globe_Projection_Context.D3GeoProjection.md#fitwidth)
- [invert](Globe_Projection_Context.D3GeoProjection.md#invert)
- [postclip](Globe_Projection_Context.D3GeoProjection.md#postclip)
- [precision](Globe_Projection_Context.D3GeoProjection.md#precision)
- [preclip](Globe_Projection_Context.D3GeoProjection.md#preclip)
- [reflectX](Globe_Projection_Context.D3GeoProjection.md#reflectx)
- [reflectY](Globe_Projection_Context.D3GeoProjection.md#reflecty)
- [rotate](Globe_Projection_Context.D3GeoProjection.md#rotate)
- [scale](Globe_Projection_Context.D3GeoProjection.md#scale)
- [stream](Globe_Projection_Context.D3GeoProjection.md#stream)
- [translate](Globe_Projection_Context.D3GeoProjection.md#translate)

## Methods

### angle

▸ **angle**(): `number`

Returns the projection’s current angle, which defaults to 0°.

#### Returns

`number`

#### Inherited from

GeoProjection.angle

#### Defined in

node_modules/@types/d3-geo/index.d.ts:573

▸ **angle**(`angle`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s post-projection planar rotation angle to the specified angle in degrees and returns the projection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | The new rotation angle of the projection. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.angle

#### Defined in

node_modules/@types/d3-geo/index.d.ts:578

___

### center

▸ **center**(): [`number`, `number`]

Returns the current center of the projection, which defaults to ⟨0°,0°⟩.

#### Returns

[`number`, `number`]

#### Inherited from

GeoProjection.center

#### Defined in

node_modules/@types/d3-geo/index.d.ts:560

▸ **center**(`point`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s center to the specified center,
a two-element array of longitude and latitude in degrees and returns the projection.
The default is ⟨0°,0°⟩.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`number`, `number`] | A point specified as a two-dimensional array [longitude, latitude] in degrees. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.center

#### Defined in

node_modules/@types/d3-geo/index.d.ts:568

___

### clipAngle

▸ **clipAngle**(): ``null`` \| `number`

Returns the current clip angle which defaults to null.

null switches to antimeridian cutting rather than small-circle clipping.

#### Returns

``null`` \| `number`

#### Inherited from

GeoProjection.clipAngle

#### Defined in

node_modules/@types/d3-geo/index.d.ts:512

▸ **clipAngle**(`angle`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s clipping circle radius to the specified angle in degrees and returns the projection.
If angle is null, switches to antimeridian cutting rather than small-circle clipping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | ``null`` \| `number` |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.clipAngle

#### Defined in

node_modules/@types/d3-geo/index.d.ts:517

___

### clipExtent

▸ **clipExtent**(): ``null`` \| [[`number`, `number`], [`number`, `number`]]

Returns the current viewport clip extent which defaults to null.

#### Returns

``null`` \| [[`number`, `number`], [`number`, `number`]]

#### Inherited from

GeoProjection.clipExtent

#### Defined in

node_modules/@types/d3-geo/index.d.ts:522

▸ **clipExtent**(`extent`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s viewport clip extent to the specified bounds in pixels and returns the projection.
The extent bounds are specified as an array [[x₀, y₀], [x₁, y₁]], where x₀ is the left-side of the viewport, y₀ is the top, x₁ is the right and y₁ is the bottom.
If extent is null, no viewport clipping is performed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | ``null`` \| [[`number`, `number`], [`number`, `number`]] |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.clipExtent

#### Defined in

node_modules/@types/d3-geo/index.d.ts:528

___

### fitExtent

▸ **fitExtent**(`extent`, `object`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s scale and translate to fit the specified GeoJSON object in the center of the given extent.
The extent is specified as an array [[x₀, y₀], [x₁, y₁]], where x₀ is the left side of the bounding box, y₀ is the top, x₁ is the right and y₁ is the bottom.
Returns the projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extent` | [[`number`, `number`], [`number`, `number`]] |
| `object` | `GeoGeometryObjects` \| `ExtendedGeometryCollection`<`GeoGeometryObjects`\> \| `ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\> \| `ExtendedFeatureCollection`<`ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\>\> |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.fitExtent

#### Defined in

node_modules/@types/d3-geo/index.d.ts:632

___

### fitHeight

▸ **fitHeight**(`height`, `object`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

A convenience method for projection.fitSize where the width is automatically chosen from the aspect ratio of object and the given constraint on height.

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `object` | `GeoGeometryObjects` \| `ExtendedGeometryCollection`<`GeoGeometryObjects`\> \| `ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\> \| `ExtendedFeatureCollection`<`ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\>\> |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.fitHeight

#### Defined in

node_modules/@types/d3-geo/index.d.ts:647

___

### fitSize

▸ **fitSize**(`size`, `object`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

A convenience method for projection.fitExtent where the top-left corner of the extent is [0, 0].

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`number`, `number`] |
| `object` | `GeoGeometryObjects` \| `ExtendedGeometryCollection`<`GeoGeometryObjects`\> \| `ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\> \| `ExtendedFeatureCollection`<`ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\>\> |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.fitSize

#### Defined in

node_modules/@types/d3-geo/index.d.ts:637

___

### fitWidth

▸ **fitWidth**(`width`, `object`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

A convenience method for projection.fitSize where the height is automatically chosen from the aspect ratio of object and the given constraint on width.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `object` | `GeoGeometryObjects` \| `ExtendedGeometryCollection`<`GeoGeometryObjects`\> \| `ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\> \| `ExtendedFeatureCollection`<`ExtendedFeature`<``null`` \| `GeoGeometryObjects`, `GeoJsonProperties`\>\> |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.fitWidth

#### Defined in

node_modules/@types/d3-geo/index.d.ts:642

___

### invert

▸ `Optional` **invert**(`point`): ``null`` \| [`number`, `number`]

Returns a new array [longitude, latitude] in degrees representing the unprojected point of the given projected point.
May return null if the specified point has no defined projected position, such as when the point is outside the clipping bounds of the projection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`number`, `number`] | The projected point, specified as a two-element array [x, y] (typically in pixels). |

#### Returns

``null`` \| [`number`, `number`]

#### Inherited from

GeoProjection.invert

#### Defined in

node_modules/@types/d3-geo/index.d.ts:477

___

### postclip

▸ **postclip**(): (`stream`: `GeoStream`) => `GeoStream`

Returns the current cartesian clipping function.
Post-clipping occurs on the plane, when a projection is bounded to a certain extent such as a rectangle.

#### Returns

`fn`

▸ (`stream`): `GeoStream`

Returns the current cartesian clipping function.
Post-clipping occurs on the plane, when a projection is bounded to a certain extent such as a rectangle.

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `GeoStream` |

##### Returns

`GeoStream`

#### Inherited from

GeoProjection.postclip

#### Defined in

node_modules/@types/d3-geo/index.d.ts:498

▸ **postclip**(`postclip`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s cartesian clipping to the specified function and returns the projection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postclip` | (`stream`: `GeoStream`) => `GeoStream` | A cartesian clipping function. Clipping functions are implemented as transformations of a projection stream. Post-clipping operates on planar coordinates, in pixels. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.postclip

#### Defined in

node_modules/@types/d3-geo/index.d.ts:505

___

### precision

▸ **precision**(): `number`

Returns the projection’s current resampling precision which defaults to square root of 0.5.
This value corresponds to the Douglas–Peucker distance.

#### Returns

`number`

#### Inherited from

GeoProjection.precision

#### Defined in

node_modules/@types/d3-geo/index.d.ts:618

▸ **precision**(`precision`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the threshold for the projection’s adaptive resampling to the specified value in pixels and returns the projection.
This value corresponds to the Douglas–Peucker distance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `precision` | `number` | A numeric value in pixels to use as the threshold for the projection’s adaptive resampling. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.precision

#### Defined in

node_modules/@types/d3-geo/index.d.ts:625

___

### preclip

▸ **preclip**(): (`stream`: `GeoStream`) => `GeoStream`

Returns the current spherical clipping function.
Pre-clipping occurs in geographic coordinates. Cutting along the antimeridian line,
or clipping along a small circle are the most common strategies.

#### Returns

`fn`

▸ (`stream`): `GeoStream`

Returns the current spherical clipping function.
Pre-clipping occurs in geographic coordinates. Cutting along the antimeridian line,
or clipping along a small circle are the most common strategies.

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `GeoStream` |

##### Returns

`GeoStream`

#### Inherited from

GeoProjection.preclip

#### Defined in

node_modules/@types/d3-geo/index.d.ts:484

▸ **preclip**(`preclip`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s spherical clipping to the specified function and returns the projection.
Pre-clipping occurs in geographic coordinates. Cutting along the antimeridian line, or clipping along a small circle are the most common strategies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preclip` | (`stream`: `GeoStream`) => `GeoStream` | A spherical clipping function. Clipping functions are implemented as transformations of a projection stream. Pre-clipping operates on spherical coordinates, in radians. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.preclip

#### Defined in

node_modules/@types/d3-geo/index.d.ts:492

___

### reflectX

▸ **reflectX**(): `boolean`

Returns true if x-reflection is enabled, which defaults to false.

#### Returns

`boolean`

#### Inherited from

GeoProjection.reflectX

#### Defined in

node_modules/@types/d3-geo/index.d.ts:583

▸ **reflectX**(`reflect`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets whether or not the x-dimension is reflected (negated) in the output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reflect` | `boolean` | Whether or not the x-dimension is reflected (negated) in the output. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.reflectX

#### Defined in

node_modules/@types/d3-geo/index.d.ts:588

___

### reflectY

▸ **reflectY**(): `boolean`

Returns true if y-reflection is enabled, which defaults to false.

#### Returns

`boolean`

#### Inherited from

GeoProjection.reflectY

#### Defined in

node_modules/@types/d3-geo/index.d.ts:593

▸ **reflectY**(`reflect`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets whether or not the y-dimension is reflected (negated) in the output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reflect` | `boolean` | Whether or not the y-dimension is reflected (negated) in the output. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.reflectY

#### Defined in

node_modules/@types/d3-geo/index.d.ts:598

___

### rotate

▸ **rotate**(): [`number`, `number`, `number`]

Returns the current rotation [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis.
(These correspond to yaw, pitch and roll.) which defaults [0, 0, 0].

#### Returns

[`number`, `number`, `number`]

#### Inherited from

GeoProjection.rotate

#### Defined in

node_modules/@types/d3-geo/index.d.ts:604

▸ **rotate**(`angles`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s three-axis rotation to the specified angles, which must be a two- or three-element array of numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angles` | [`number`, `number`] \| [`number`, `number`, `number`] | A two- or three-element array of numbers [lambda, phi, gamma] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.) If the rotation angle gamma is omitted, it defaults to 0. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.rotate

#### Defined in

node_modules/@types/d3-geo/index.d.ts:612

___

### scale

▸ **scale**(): `number`

Returns the current scale factor; the default scale is projection-specific.

The scale factor corresponds linearly to the distance between projected points; however, absolute scale factors are not equivalent across projections.

#### Returns

`number`

#### Inherited from

GeoProjection.scale

#### Defined in

node_modules/@types/d3-geo/index.d.ts:535

▸ **scale**(`scale`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s scale factor to the specified value and returns the projection.
The scale factor corresponds linearly to the distance between projected points; however, absolute scale factors are not equivalent across projections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | Scale factor to be used for the projection; the default scale is projection-specific. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.scale

#### Defined in

node_modules/@types/d3-geo/index.d.ts:542

___

### stream

▸ **stream**(`stream`): `GeoStream`

Returns a projection stream for the specified output stream. Any input geometry is projected before being streamed to the output stream.
A typical projection involves several geometry transformations: the input geometry is first converted to radians, rotated on three axes,
clipped to the small circle or cut along the antimeridian, and lastly projected to the plane with adaptive resampling, scale and translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `GeoStream` | An input stream |

#### Returns

`GeoStream`

#### Inherited from

GeoProjection.stream

#### Defined in

node_modules/@types/d3-geo/index.d.ts:447

___

### translate

▸ **translate**(): [`number`, `number`]

Returns the current translation offset which defaults to [480, 250] and places ⟨0°,0°⟩ at the center of a 960×500 area.
The translation offset determines the pixel coordinates of the projection’s center.

#### Returns

[`number`, `number`]

#### Inherited from

GeoProjection.translate

#### Defined in

node_modules/@types/d3-geo/index.d.ts:548

▸ **translate**(`point`): [`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

Sets the projection’s translation offset to the specified two-element array [tx, ty] and returns the projection.
The translation offset determines the pixel coordinates of the projection’s center. The default translation offset places ⟨0°,0°⟩ at the center of a 960×500 area.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`number`, `number`] | A two-element array [tx, ty] specifying the translation offset. The default translation offset of defaults to [480, 250] places ⟨0°,0°⟩ at the center of a 960×500 area. |

#### Returns

[`D3GeoProjection`](Globe_Projection_Context.D3GeoProjection.md)

#### Inherited from

GeoProjection.translate

#### Defined in

node_modules/@types/d3-geo/index.d.ts:555
