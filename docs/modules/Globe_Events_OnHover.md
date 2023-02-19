[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Events OnHover

# Module: Globe Events OnHover

handle props switch on mouse hover
see HandleEventProps hover

## Table of contents

### References

- [default](Globe_Events_OnHover.md#default)

### Component Functions

- [Handler](Globe_Events_OnHover.md#handler)
- [OnHover](Globe_Events_OnHover.md#onhover)

## References

### default

Renames and re-exports [OnHover](Globe_Events_OnHover.md#onhover)

## Component Functions

### Handler

▸ **Handler**<`ElementType`, `ComponentProps`\>(`«destructured»`): ``null`` \| `ReactElement`<`ElementType`, `string` \| `JSXElementConstructor`<`any`\>\>

clone children and merge props from usePropsOnMouseHover

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | `any` |
| `ComponentProps` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<`ComponentProps` & [`HandleEventProps`](../interfaces/Globe_Events_Types.HandleEventProps.md)<`Function`, `Record`<`string`, `any`\>\>\> |

#### Returns

``null`` \| `ReactElement`<`ElementType`, `string` \| `JSXElementConstructor`<`any`\>\>

cloned children with onHoveredProps

#### Defined in

[src/components/events/OnHover.tsx:18](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/events/OnHover.tsx#L18)

___

### OnHover

▸ **OnHover**<`ComponentProps`\>(`«destructured»`): `Element`

checks out for props.hover

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ComponentProps` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<`ComponentProps` & `Partial`<[`HandleEventProps`](../interfaces/Globe_Events_Types.HandleEventProps.md)<`Function`, `Record`<`string`, `any`\>\>\>\> |

#### Returns

`Element`

cloned children with onHoveredProps

#### Defined in

[src/components/events/OnHover.tsx:41](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/events/OnHover.tsx#L41)
