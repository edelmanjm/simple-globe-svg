[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Camera Context](../modules/Globe_Camera_Context.md) / CameraContextValue

# Class: CameraContextValue

[Globe Camera Context](../modules/Globe_Camera_Context.md).CameraContextValue

## Table of contents

### Constructors

- [constructor](Globe_Camera_Context.CameraContextValue.md#constructor)

### Properties

- [center](Globe_Camera_Context.CameraContextValue.md#center)
- [ref](Globe_Camera_Context.CameraContextValue.md#ref)
- [rotation](Globe_Camera_Context.CameraContextValue.md#rotation)

## Constructors

### constructor

• **new CameraContextValue**(`center?`, `rotation?`, `ref?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `center` | [`Coord`](Globe_Classes.Coord.md) | `EMPTY_COORD` |
| `rotation` | [`CameraRotationHandler`](Globe_Camera_Rotate.CameraRotationHandler.md) | `CAMERA_ROTATION_HANDLER` |
| `ref` | `MutableRefObject`<``null`` \| `HTMLDivElement`\> | `EMPTY_REF` |

#### Defined in

[src/components/camera/Context.tsx:17](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Context.tsx#L17)

## Properties

### center

• **center**: [`Coord`](Globe_Classes.Coord.md) = `EMPTY_COORD`

#### Defined in

[src/components/camera/Context.tsx:18](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Context.tsx#L18)

___

### ref

• **ref**: `MutableRefObject`<``null`` \| `HTMLDivElement`\> = `EMPTY_REF`

#### Defined in

[src/components/camera/Context.tsx:20](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Context.tsx#L20)

___

### rotation

• **rotation**: [`CameraRotationHandler`](Globe_Camera_Rotate.CameraRotationHandler.md) = `CAMERA_ROTATION_HANDLER`

#### Defined in

[src/components/camera/Context.tsx:19](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Context.tsx#L19)
