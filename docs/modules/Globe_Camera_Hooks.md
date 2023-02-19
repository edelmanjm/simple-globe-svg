[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Camera Hooks

# Module: Globe Camera Hooks

## Table of contents

### Context Functions

- [useCameraContext](Globe_Camera_Hooks.md#usecameracontext)
- [useCameraScreen](Globe_Camera_Hooks.md#usecamerascreen)

### Operation Functions

- [useCameraCenterDistance](Globe_Camera_Hooks.md#usecameracenterdistance)
- [useScreenContains](Globe_Camera_Hooks.md#usescreencontains)

## Context Functions

### useCameraContext

▸ **useCameraContext**(): [`CameraContextValue`](../classes/Globe_Camera_Context.CameraContextValue.md)

#### Returns

[`CameraContextValue`](../classes/Globe_Camera_Context.CameraContextValue.md)

#### Defined in

[src/components/camera/hooks/index.ts:16](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/camera/hooks/index.ts#L16)

___

### useCameraScreen

▸ **useCameraScreen**(): `Object`

needed?

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ref` | `MutableRefObject`<``null`` \| `HTMLDivElement`\> |

#### Defined in

[src/components/camera/hooks/index.ts:22](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/camera/hooks/index.ts#L22)

___

## Operation Functions

### useCameraCenterDistance

▸ **useCameraCenterDistance**(): (`coord`: [`Coord`](../classes/Globe_Classes.Coord.md)) => `number`

#### Returns

`fn`

distance between camera center and coord

▸ (`coord`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `coord` | [`Coord`](../classes/Globe_Classes.Coord.md) |

##### Returns

`number`

#### Defined in

[src/components/camera/hooks/index.ts:51](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/camera/hooks/index.ts#L51)

___

### useScreenContains

▸ **useScreenContains**(): (`point`: [`Point`](../classes/Globe_Classes.Point.md)) => `boolean`

not using
test it

#### Returns

`fn`

distance between camera center and coord

▸ (`point`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/Globe_Classes.Point.md) |

##### Returns

`boolean`

#### Defined in

[src/components/camera/hooks/index.ts:33](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/camera/hooks/index.ts#L33)
