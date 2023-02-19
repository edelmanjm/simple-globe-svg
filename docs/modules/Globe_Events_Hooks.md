[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Events Hooks

# Module: Globe Events Hooks

## Table of contents

### Hook Functions

- [useForwardOnEvent](Globe_Events_Hooks.md#useforwardonevent)
- [usePropsOnMouseHover](Globe_Events_Hooks.md#usepropsonmousehover)
- [useSupportedEventKeys](Globe_Events_Hooks.md#usesupportedeventkeys)

## Hook Functions

### useForwardOnEvent

▸ **useForwardOnEvent**<`ComponentProps`, `ForwardedData`\>(`data`, `props?`): (`event`: `string`) => `undefined` \| (`ev`: `MouseEvent`) => `NonNullable`<`Exclude`<`string` extends keyof `NonNullable`<`ComponentProps`\> ? `NonNullable`<`ComponentProps`\>[keyof `NonNullable`<`ComponentProps`\> & `string`] : `IndexedFieldWithPossiblyUndefined`<`NonNullable`<`ComponentProps`\>, `string`\>, `undefined` \| ``null``\>\>

forwards `data` into event callback

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ComponentProps` | `Record`<`string`, `any`\> |
| `ForwardedData` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ForwardedData` |
| `props?` | `ComponentProps` |

#### Returns

`fn`

callback to merge props

▸ (`event`): `undefined` \| (`ev`: `MouseEvent`) => `NonNullable`<`Exclude`<`string` extends keyof `NonNullable`<`ComponentProps`\> ? `NonNullable`<`ComponentProps`\>[keyof `NonNullable`<`ComponentProps`\> & `string`] : `IndexedFieldWithPossiblyUndefined`<`NonNullable`<`ComponentProps`\>, `string`\>, `undefined` \| ``null``\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

##### Returns

`undefined` \| (`ev`: `MouseEvent`) => `NonNullable`<`Exclude`<`string` extends keyof `NonNullable`<`ComponentProps`\> ? `NonNullable`<`ComponentProps`\>[keyof `NonNullable`<`ComponentProps`\> & `string`] : `IndexedFieldWithPossiblyUndefined`<`NonNullable`<`ComponentProps`\>, `string`\>, `undefined` \| ``null``\>\>

#### Defined in

[src/components/events/hooks.ts:85](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/events/hooks.ts#L85)

___

### usePropsOnMouseHover

▸ **usePropsOnMouseHover**<`ComponentProps`\>(`props`): `Record`<`string`, `any`\>

forwards `data` into `onMouseEnter` and `onMouseLeave`
handle `hovered` state
`onMouseEnter` = onhover
`onMouseLeave` = unhover
merge and overwrite props with props.hover.(enter|leave) on `hovered`
triggers hover.(enter|leave).callback at respective events

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ComponentProps` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ComponentProps` & { `hover`: [`HandleHoverEventProps`](../interfaces/Globe_Events_Types.HandleHoverEventProps.md)<`Function`, `Record`<`string`, `any`\>\>  } & `Partial`<[`OnHoverEventProps`](../interfaces/Globe_Events_Types.OnHoverEventProps.md)<`void`\>\> |

#### Returns

`Record`<`string`, `any`\>

merged props

#### Defined in

[src/components/events/hooks.ts:22](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/events/hooks.ts#L22)

___

### useSupportedEventKeys

▸ **useSupportedEventKeys**<`ComponentProps`\>(`props`, `supported?`): `string`[]

checks for supported event keys in use at props

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ComponentProps` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `props` | `ComponentProps` | `undefined` | iterate its keys in search for `supported` |
| `supported` | `string`[] | `SUPPORTED_EVENTS` | SUPPORTED_EVENTS |

#### Returns

`string`[]

supported event keys found at props

#### Defined in

[src/components/events/hooks.ts:111](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/events/hooks.ts#L111)
