[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Camera Touch

# Module: Globe Camera Touch

deal with touch events

## Table of contents

### Events

- [OnTouchMoveEvent](../interfaces/Globe_Camera_Touch.OnTouchMoveEvent.md)
- [OnTouchStopEvent](../interfaces/Globe_Camera_Touch.OnTouchStopEvent.md)

### Controller Interfaces

- [TouchPinchDelta](../interfaces/Globe_Camera_Touch.TouchPinchDelta.md)

### Other Interfaces

- [TouchMoveController](../interfaces/Globe_Camera_Touch.TouchMoveController.md)

### Controller Functions

- [useTouchController](Globe_Camera_Touch.md#usetouchcontroller)
- [useTouchMoveController](Globe_Camera_Touch.md#usetouchmovecontroller)
- [useTouchPinchDelta](Globe_Camera_Touch.md#usetouchpinchdelta)

## Controller Functions

### useTouchController

▸ **useTouchController**(): [`TouchMoveController`](../interfaces/Globe_Camera_Touch.TouchMoveController.md)

todo docs

#### Returns

[`TouchMoveController`](../interfaces/Globe_Camera_Touch.TouchMoveController.md)

#### Defined in

[src/components/camera/hooks/touch.ts:142](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/touch.ts#L142)

___

### useTouchMoveController

▸ **useTouchMoveController**(`index?`): [`TouchMoveController`](../interfaces/Globe_Camera_Touch.TouchMoveController.md)

todo docs
listen `index` screen touch movement

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

[`TouchMoveController`](../interfaces/Globe_Camera_Touch.TouchMoveController.md)

#### Defined in

[src/components/camera/hooks/touch.ts:41](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/touch.ts#L41)

___

### useTouchPinchDelta

▸ **useTouchPinchDelta**(): [`TouchPinchDelta`](../interfaces/Globe_Camera_Touch.TouchPinchDelta.md)

todo docs

#### Returns

[`TouchPinchDelta`](../interfaces/Globe_Camera_Touch.TouchPinchDelta.md)

#### Defined in

[src/components/camera/hooks/touch.ts:111](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/camera/hooks/touch.ts#L111)
