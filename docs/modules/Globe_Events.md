[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Events

# Module: Globe Events

## Table of contents

### Component Functions

- [default](Globe_Events.md#default)

## Component Functions

### default

▸ **default**<`Props`, `Data`\>(`«destructured»`): `ReactElement`<`Props`, `string` \| `JSXElementConstructor`<`any`\>\>

will only inject data if event is found in props
useSupportedEventKeys on `props`
if `hasSupportedEvents` nest OnEvents
if `hasSupportedHover` nest OnHover

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | `any` |
| `Data` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<[`EventsProps`](../interfaces/Globe_Events_Types.EventsProps.md)<`Props` & `Partial`<[`HandleEventProps`](../interfaces/Globe_Events_Types.HandleEventProps.md)<`Function`, `Record`<`string`, `any`\>\>\>, `Data`\>\> |

#### Returns

`ReactElement`<`Props`, `string` \| `JSXElementConstructor`<`any`\>\>

>children
>>OnEvents
>>OnHover

#### Defined in

[src/components/events/index.tsx:26](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/events/index.tsx#L26)
