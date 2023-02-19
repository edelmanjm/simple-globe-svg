[React Simple Globe](../README.md) / [Exports](../modules.md) / [Globe Events Types](../modules/Globe_Events_Types.md) / ForwardedMouseEvent

# Interface: ForwardedMouseEvent

[Globe Events Types](../modules/Globe_Events_Types.md).ForwardedMouseEvent

## Hierarchy

- `MouseEvent`

  ↳ **`ForwardedMouseEvent`**

## Table of contents

### Properties

- [AT\_TARGET](Globe_Events_Types.ForwardedMouseEvent.md#at_target)
- [BUBBLING\_PHASE](Globe_Events_Types.ForwardedMouseEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](Globe_Events_Types.ForwardedMouseEvent.md#capturing_phase)
- [NONE](Globe_Events_Types.ForwardedMouseEvent.md#none)
- [altKey](Globe_Events_Types.ForwardedMouseEvent.md#altkey)
- [bubbles](Globe_Events_Types.ForwardedMouseEvent.md#bubbles)
- [button](Globe_Events_Types.ForwardedMouseEvent.md#button)
- [buttons](Globe_Events_Types.ForwardedMouseEvent.md#buttons)
- [cancelBubble](Globe_Events_Types.ForwardedMouseEvent.md#cancelbubble)
- [cancelable](Globe_Events_Types.ForwardedMouseEvent.md#cancelable)
- [clientX](Globe_Events_Types.ForwardedMouseEvent.md#clientx)
- [clientY](Globe_Events_Types.ForwardedMouseEvent.md#clienty)
- [composed](Globe_Events_Types.ForwardedMouseEvent.md#composed)
- [ctrlKey](Globe_Events_Types.ForwardedMouseEvent.md#ctrlkey)
- [currentTarget](Globe_Events_Types.ForwardedMouseEvent.md#currenttarget)
- [defaultPrevented](Globe_Events_Types.ForwardedMouseEvent.md#defaultprevented)
- [detail](Globe_Events_Types.ForwardedMouseEvent.md#detail)
- [eventPhase](Globe_Events_Types.ForwardedMouseEvent.md#eventphase)
- [isTrusted](Globe_Events_Types.ForwardedMouseEvent.md#istrusted)
- [metaKey](Globe_Events_Types.ForwardedMouseEvent.md#metakey)
- [movementX](Globe_Events_Types.ForwardedMouseEvent.md#movementx)
- [movementY](Globe_Events_Types.ForwardedMouseEvent.md#movementy)
- [offsetX](Globe_Events_Types.ForwardedMouseEvent.md#offsetx)
- [offsetY](Globe_Events_Types.ForwardedMouseEvent.md#offsety)
- [pageX](Globe_Events_Types.ForwardedMouseEvent.md#pagex)
- [pageY](Globe_Events_Types.ForwardedMouseEvent.md#pagey)
- [relatedTarget](Globe_Events_Types.ForwardedMouseEvent.md#relatedtarget)
- [returnValue](Globe_Events_Types.ForwardedMouseEvent.md#returnvalue)
- [screenX](Globe_Events_Types.ForwardedMouseEvent.md#screenx)
- [screenY](Globe_Events_Types.ForwardedMouseEvent.md#screeny)
- [shiftKey](Globe_Events_Types.ForwardedMouseEvent.md#shiftkey)
- [srcElement](Globe_Events_Types.ForwardedMouseEvent.md#srcelement)
- [target](Globe_Events_Types.ForwardedMouseEvent.md#target)
- [timeStamp](Globe_Events_Types.ForwardedMouseEvent.md#timestamp)
- [type](Globe_Events_Types.ForwardedMouseEvent.md#type)
- [view](Globe_Events_Types.ForwardedMouseEvent.md#view)
- [which](Globe_Events_Types.ForwardedMouseEvent.md#which)
- [x](Globe_Events_Types.ForwardedMouseEvent.md#x)
- [y](Globe_Events_Types.ForwardedMouseEvent.md#y)

### Methods

- [composedPath](Globe_Events_Types.ForwardedMouseEvent.md#composedpath)
- [getModifierState](Globe_Events_Types.ForwardedMouseEvent.md#getmodifierstate)
- [initEvent](Globe_Events_Types.ForwardedMouseEvent.md#initevent)
- [initMouseEvent](Globe_Events_Types.ForwardedMouseEvent.md#initmouseevent)
- [initUIEvent](Globe_Events_Types.ForwardedMouseEvent.md#inituievent)
- [preventDefault](Globe_Events_Types.ForwardedMouseEvent.md#preventdefault)
- [stopImmediatePropagation](Globe_Events_Types.ForwardedMouseEvent.md#stopimmediatepropagation)
- [stopPropagation](Globe_Events_Types.ForwardedMouseEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

MouseEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5221

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

MouseEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5222

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

MouseEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5223

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

MouseEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5224

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Inherited from

MouseEvent.altKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9847

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

MouseEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5186

___

### button

• `Readonly` **button**: `number`

#### Inherited from

MouseEvent.button

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9848

___

### buttons

• `Readonly` **buttons**: `number`

#### Inherited from

MouseEvent.buttons

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9849

___

### cancelBubble

• **cancelBubble**: `boolean`

**`Deprecated`**

#### Inherited from

MouseEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5188

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

MouseEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5190

___

### clientX

• `Readonly` **clientX**: `number`

#### Inherited from

MouseEvent.clientX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9850

___

### clientY

• `Readonly` **clientY**: `number`

#### Inherited from

MouseEvent.clientY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9851

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

MouseEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5192

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Inherited from

MouseEvent.ctrlKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9852

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

MouseEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5194

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

MouseEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5196

___

### detail

• `Readonly` **detail**: `number`

#### Inherited from

MouseEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14485

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

MouseEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5198

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

MouseEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5200

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Inherited from

MouseEvent.metaKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9853

___

### movementX

• `Readonly` **movementX**: `number`

#### Inherited from

MouseEvent.movementX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9854

___

### movementY

• `Readonly` **movementY**: `number`

#### Inherited from

MouseEvent.movementY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9855

___

### offsetX

• `Readonly` **offsetX**: `number`

#### Inherited from

MouseEvent.offsetX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9856

___

### offsetY

• `Readonly` **offsetY**: `number`

#### Inherited from

MouseEvent.offsetY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9857

___

### pageX

• `Readonly` **pageX**: `number`

#### Inherited from

MouseEvent.pageX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9858

___

### pageY

• `Readonly` **pageY**: `number`

#### Inherited from

MouseEvent.pageY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9859

___

### relatedTarget

• `Readonly` **relatedTarget**: ``null`` \| `EventTarget`

#### Inherited from

MouseEvent.relatedTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9860

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

MouseEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5202

___

### screenX

• `Readonly` **screenX**: `number`

#### Inherited from

MouseEvent.screenX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9861

___

### screenY

• `Readonly` **screenY**: `number`

#### Inherited from

MouseEvent.screenY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9862

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Inherited from

MouseEvent.shiftKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9863

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`Deprecated`**

#### Inherited from

MouseEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5204

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

MouseEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5206

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

MouseEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5208

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

MouseEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5210

___

### view

• `Readonly` **view**: ``null`` \| `Window`

#### Inherited from

MouseEvent.view

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14486

___

### which

• `Readonly` **which**: `number`

**`Deprecated`**

#### Inherited from

MouseEvent.which

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14488

___

### x

• `Readonly` **x**: `number`

#### Inherited from

MouseEvent.x

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9864

___

### y

• `Readonly` **y**: `number`

#### Inherited from

MouseEvent.y

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9865

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

MouseEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5212

___

### getModifierState

▸ **getModifierState**(`keyArg`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArg` | `string` |

#### Returns

`boolean`

#### Inherited from

MouseEvent.getModifierState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9866

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

MouseEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5214

___

### initMouseEvent

▸ **initMouseEvent**(`typeArg`, `canBubbleArg`, `cancelableArg`, `viewArg`, `detailArg`, `screenXArg`, `screenYArg`, `clientXArg`, `clientYArg`, `ctrlKeyArg`, `altKeyArg`, `shiftKeyArg`, `metaKeyArg`, `buttonArg`, `relatedTargetArg`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `canBubbleArg` | `boolean` |
| `cancelableArg` | `boolean` |
| `viewArg` | `Window` |
| `detailArg` | `number` |
| `screenXArg` | `number` |
| `screenYArg` | `number` |
| `clientXArg` | `number` |
| `clientYArg` | `number` |
| `ctrlKeyArg` | `boolean` |
| `altKeyArg` | `boolean` |
| `shiftKeyArg` | `boolean` |
| `metaKeyArg` | `boolean` |
| `buttonArg` | `number` |
| `relatedTargetArg` | ``null`` \| `EventTarget` |

#### Returns

`void`

#### Inherited from

MouseEvent.initMouseEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9868

___

### initUIEvent

▸ **initUIEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `detailArg?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `viewArg?` | ``null`` \| `Window` |
| `detailArg?` | `number` |

#### Returns

`void`

#### Inherited from

MouseEvent.initUIEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14490

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

MouseEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5216

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

MouseEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5218

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

MouseEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5220
