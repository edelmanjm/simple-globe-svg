[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Camera Screen

# Module: Globe Camera Screen

applies camera events into `HTMLDivElement`

## Table of contents

### Events

- [CAMERA\_EVENTS](Globe_Camera_Screen.md#camera_events)

### Component Functions

- [Screen](Globe_Camera_Screen.md#screen)

## Events

### CAMERA\_EVENTS

• `Const` **CAMERA\_EVENTS**: [``"onWheel"``, ``"onMouseUp"``, ``"onMouseLeave"``, ``"onMouseDown"``, ``"onMouseMove"``]

those will be used by camera for rotation handling
 Internal

#### Defined in

[src/components/camera/Screen.tsx:26](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Screen.tsx#L26)

## Component Functions

### Screen

▸ **Screen**(`props`): `Element`

todo review docs

**`Hook`**

useCameraContext rotation and zoom controllers

**`Hook`**

useBooleanState for draggin handle

**`Hook`**

useMouseMoveController catch mouse movement

**`Hook`**

useTouchMoveController catch touch movement

**`Hook`**

useParamBroadcast injects CameraForwardedData into `camera events`
>`onMouseUp onMouseDown onMouseMove onTouchMove onTouchEnd onTouchStart`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScreenProps`](../interfaces/Globe_Camera_Types.ScreenProps.md) |

#### Returns

`Element`

>OnEvents injects CameraForwardedData into SUPPORTED_CAMERA_EVENTS
>>`HTMLDivElement`
>>>`children`

#### Defined in

[src/components/camera/Screen.tsx:52](https://github.com/Gaushao/d3-react-globe/blob/636f719/src/components/camera/Screen.tsx#L52)
