[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Camera Context

# Module: Globe Camera Context

## Table of contents

### Classes

- [CameraContextValue](../classes/Globe_Camera_Context.CameraContextValue.md)

### Context Variables

- [CameraContext](Globe_Camera_Context.md#cameracontext)

### Context Functions

- [CameraProvider](Globe_Camera_Context.md#cameraprovider)

## Context Variables

### CameraContext

• `Const` **CameraContext**: `Context`<[`CameraContextValue`](../classes/Globe_Camera_Context.CameraContextValue.md)\>

#### Defined in

[src/components/camera/Context.tsx:29](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/camera/Context.tsx#L29)

## Context Functions

### CameraProvider

▸ **CameraProvider**(`props`): `Element`

provides [CameraContextValue](../classes/Globe_Camera_Context.CameraContextValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<`Pick`<[`CameraProps`](../classes/Globe_Camera_Classes.CameraProps.md), ``"settings"``\>\> |

#### Returns

`Element`

[CameraContext](Globe_Camera_Context.md#cameracontext)

#### Defined in

[src/components/camera/Context.tsx:38](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/camera/Context.tsx#L38)
