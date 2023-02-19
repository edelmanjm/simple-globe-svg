[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Hooks

# Module: Globe Hooks

## Table of contents

### Callback Functions

- [useFetch](Globe_Hooks.md#usefetch)

### Effect Functions

- [useEffectOnChange](Globe_Hooks.md#useeffectonchange)

### Hook Functions

- [useGetDistance](Globe_Hooks.md#usegetdistance)
- [useParamBroadcast](Globe_Hooks.md#useparambroadcast)

### Listener Functions

- [useEventListener](Globe_Hooks.md#useeventlistener)
- [useFetchJSON](Globe_Hooks.md#usefetchjson)
- [useFetchOnEffect](Globe_Hooks.md#usefetchoneffect)
- [useOnWindowResize](Globe_Hooks.md#useonwindowresize)

### Memo Functions

- [useMerge](Globe_Hooks.md#usemerge)

### State Functions

- [useBooleanState](Globe_Hooks.md#usebooleanstate)
- [useStates](Globe_Hooks.md#usestates)

## Callback Functions

### useFetch

▸ **useFetch**(`callback`, `throwback?`): (`url`: `string`) => `void`

fetch api state handler

**`Prop`**

url to be fetched

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | (`res`: `Response`) => `any` | `undefined` |
| `throwback` | (`e`: `any`) => `any` | `noop` |

#### Returns

`fn`

url fetch response

▸ (`url`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`void`

#### Defined in

[src/components/hooks.ts:90](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L90)

___

## Effect Functions

### useEffectOnChange

▸ **useEffectOnChange**<`T`\>(`value?`, `dispatch?`, `condition?`): `void`

tool for updating state by props
dispatches value on change
condition can be used for avoiding rerenders

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value?` | `T` | `undefined` |
| `dispatch?` | (`c`: `T`) => `void` | `undefined` |
| `condition` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/components/hooks.ts:143](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L143)

___

## Hook Functions

### useGetDistance

▸ **useGetDistance**(): (`a`: [`Point`](../classes/Globe_Classes.Point.md), `b`: [`Point`](../classes/Globe_Classes.Point.md)) => `number`

#### Returns

`fn`

▸ (`a`, `b`): `number`

takes distance between two Point\
accepts positive and negative at any order

**`Category`**

Operation

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Point`](../classes/Globe_Classes.Point.md) | any point |
| `b` | [`Point`](../classes/Globe_Classes.Point.md) | other point |

##### Returns

`number`

distance between `a` and `b`

#### Defined in

[src/components/hooks.ts:190](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L190)

___

### useParamBroadcast

▸ **useParamBroadcast**<`ForwardedData`\>(`forward`): `UseParamBroadcast`

forwards `data` into event callback

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ForwardedData` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `forward` | `ForwardedData` |

#### Returns

`UseParamBroadcast`

callback to merge props

#### Defined in

[src/components/hooks.ts:175](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L175)

___

## Listener Functions

### useEventListener

▸ **useEventListener**(`ref`, `event?`, `listener?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | ``null`` \| `Element` \| `Window` | element target to call addEventListener |
| `event?` | `string` | event name |
| `listener?` | `EventListener` | event handler callback |

#### Returns

`void`

event handler

#### Defined in

[src/components/hooks.ts:20](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L20)

___

### useFetchJSON

▸ **useFetchJSON**(`callback`, `throwback?`): (`url`: `string`) => `void`

fetch api listener

**`Prop`**

url to be fetched

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | (`json`: `JSON`) => `any` | `undefined` |
| `throwback` | (`e`: `any`) => `any` | `noop` |

#### Returns

`fn`

url fetch response JSON

▸ (`url`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`void`

#### Defined in

[src/components/hooks.ts:123](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L123)

___

### useFetchOnEffect

▸ **useFetchOnEffect**(`url?`): `undefined` \| `Response`

fetch api listener

**`Prop`**

url to be fetched

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

`undefined` \| `Response`

url fetch response

#### Defined in

[src/components/hooks.ts:108](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L108)

___

### useOnWindowResize

▸ **useOnWindowResize**(`listener?`): `void`

sets window resize listener

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener?` | `EventListener` | event handler callback |

#### Returns

`void`

#### Defined in

[src/components/hooks.ts:39](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L39)

___

## Memo Functions

### useMerge

▸ **useMerge**(): (`object`: `Record`<`string`, `any`\>, `source`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

merge objects

#### Returns

`fn`

▸ (`object?`, `source?`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | `EMPTY_OBJECT` |
| `source` | `Record`<`string`, `any`\> | `EMPTY_OBJECT` |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/components/hooks.ts:156](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L156)

___

## State Functions

### useBooleanState

▸ **useBooleanState**(`initial?`): [`BooleanState`](../interfaces/Globe_Types.BooleanState.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initial` | `boolean` | `false` |

#### Returns

[`BooleanState`](../interfaces/Globe_Types.BooleanState.md)

boolean state handler

#### Defined in

[src/components/hooks.ts:49](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L49)

___

### useStates

▸ **useStates**<`T`\>(`initials`): [`MutableStates`](Globe_Types.md#mutablestates)<`T`\>

TODO: support dispatch callbacks

map `initials` into `useState`

**`Prop`**

array argument fires one value by dispatch else fire its value to every dispatch

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initials` | `T`[] | initial values to `useState` |

#### Returns

[`MutableStates`](Globe_Types.md#mutablestates)<`T`\>

multi-state handler: [states, dispatchToAll]

#### Defined in

[src/components/hooks.ts:73](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/hooks.ts#L73)
