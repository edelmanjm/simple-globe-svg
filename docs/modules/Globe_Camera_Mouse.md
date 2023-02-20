[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Camera Mouse

# Module: Globe Camera Mouse

deal with camera mouse events

## Table of contents

### Alias Interfaces

- [OnMouseMoveEvent](../interfaces/Globe_Camera_Mouse.OnMouseMoveEvent.md)
- [OnWheelEvent](../interfaces/Globe_Camera_Mouse.OnWheelEvent.md)

### Controller Interfaces

- [MouseMoveController](../interfaces/Globe_Camera_Mouse.MouseMoveController.md)

### Alias Events

- [OnMouseStopEvent](../interfaces/Globe_Camera_Mouse.OnMouseStopEvent.md)

### Controller Functions

- [useMouseController](Globe_Camera_Mouse.md#usemousecontroller)
- [useMouseMoveController](Globe_Camera_Mouse.md#usemousemovecontroller)
- [useMouseWheelController](Globe_Camera_Mouse.md#usemousewheelcontroller)

## Controller Functions

### useMouseController

▸ **useMouseController**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `move` | [`OnMouseMoveEvent`](../interfaces/Globe_Camera_Mouse.OnMouseMoveEvent.md) |
| `stop` | [`OnMouseStopEvent`](../interfaces/Globe_Camera_Mouse.OnMouseStopEvent.md) |
| `x` | `number` |
| `y` | `number` |
| `zoom` | [`OnWheelEvent`](../interfaces/Globe_Camera_Mouse.OnWheelEvent.md) |

#### Defined in

[src/components/camera/hooks/mouse.ts:82](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/mouse.ts#L82)

___

### useMouseMoveController

▸ **useMouseMoveController**(): [`MouseMoveController`](../interfaces/Globe_Camera_Mouse.MouseMoveController.md)

#### Returns

[`MouseMoveController`](../interfaces/Globe_Camera_Mouse.MouseMoveController.md)

#### Defined in

[src/components/camera/hooks/mouse.ts:41](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/mouse.ts#L41)

___

### useMouseWheelController

▸ **useMouseWheelController**(): [`OnWheelEvent`](../interfaces/Globe_Camera_Mouse.OnWheelEvent.md)

**`Property`**

`zoomIn` setScale ViewContextValue.scaling

**`Property`**

`zoomOut` setScale ViewContextValue.scaling

**`Property`**

`onWheelZoom` fires zoom (in/out)

#### Returns

[`OnWheelEvent`](../interfaces/Globe_Camera_Mouse.OnWheelEvent.md)

#### Defined in

[src/components/camera/hooks/mouse.ts:68](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/mouse.ts#L68)
