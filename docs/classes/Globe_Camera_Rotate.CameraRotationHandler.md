[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Camera Rotate](../modules/Globe_Camera_Rotate.md) / CameraRotationHandler

# Class: CameraRotationHandler

[Globe Camera Rotate](../modules/Globe_Camera_Rotate.md).CameraRotationHandler

## Table of contents

### Constructors

- [constructor](Globe_Camera_Rotate.CameraRotationHandler.md#constructor)

### Properties

- [rotate](Globe_Camera_Rotate.CameraRotationHandler.md#rotate)
- [rotateX](Globe_Camera_Rotate.CameraRotationHandler.md#rotatex)
- [rotateY](Globe_Camera_Rotate.CameraRotationHandler.md#rotatey)
- [x](Globe_Camera_Rotate.CameraRotationHandler.md#x)
- [y](Globe_Camera_Rotate.CameraRotationHandler.md#y)

## Constructors

### constructor

• **new CameraRotationHandler**(`x?`, `y?`, `rotateX?`, `rotateY?`, `rotate?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`MutableState`](../modules/Globe_Types.md#mutablestate)<`number`\> | `EMPTY_MUTABLE_STATE` |
| `y` | [`MutableState`](../modules/Globe_Types.md#mutablestate)<`number`\> | `EMPTY_MUTABLE_STATE` |
| `rotateX` | (`delta`: `number`) => `void` | `noop` |
| `rotateY` | (`delta`: `number`) => `void` | `noop` |
| `rotate` | (`c`: [`Coord`](Globe_Classes.Coord.md)) => `void` | `noop` |

#### Defined in

[src/components/camera/hooks/rotate.ts:31](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L31)

## Properties

### rotate

• **rotate**: (`c`: [`Coord`](Globe_Classes.Coord.md)) => `void` = `noop`

#### Type declaration

▸ (`c`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Coord`](Globe_Classes.Coord.md) |

##### Returns

`void`

#### Defined in

[src/components/camera/hooks/rotate.ts:36](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L36)

___

### rotateX

• **rotateX**: (`delta`: `number`) => `void` = `noop`

#### Type declaration

▸ (`delta`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

##### Returns

`void`

#### Defined in

[src/components/camera/hooks/rotate.ts:34](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L34)

___

### rotateY

• **rotateY**: (`delta`: `number`) => `void` = `noop`

#### Type declaration

▸ (`delta`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

##### Returns

`void`

#### Defined in

[src/components/camera/hooks/rotate.ts:35](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L35)

___

### x

• **x**: [`MutableState`](../modules/Globe_Types.md#mutablestate)<`number`\> = `EMPTY_MUTABLE_STATE`

#### Defined in

[src/components/camera/hooks/rotate.ts:32](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L32)

___

### y

• **y**: [`MutableState`](../modules/Globe_Types.md#mutablestate)<`number`\> = `EMPTY_MUTABLE_STATE`

#### Defined in

[src/components/camera/hooks/rotate.ts:33](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/hooks/rotate.ts#L33)
