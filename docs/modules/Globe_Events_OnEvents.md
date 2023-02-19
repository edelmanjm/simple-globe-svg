[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Events OnEvents

# Module: Globe Events OnEvents

## Table of contents

### References

- [default](Globe_Events_OnEvents.md#default)

### Component Functions

- [OnEvents](Globe_Events_OnEvents.md#onevents)

## References

### default

Renames and re-exports [OnEvents](Globe_Events_OnEvents.md#onevents)

## Component Functions

### OnEvents

▸ **OnEvents**<`ElementType`, `ComponentProps`, `ForwardedData`\>(`«destructured»`): `Element`

forwards `data` into `supported` events

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | `any` |
| `ComponentProps` | `Record`<`string`, `any`\> |
| `ForwardedData` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<{ `forward`: `ForwardedData` ; `supported`: `string`[] ; `unsupported?`: `string`[]  } & `ComponentProps`\> |

#### Returns

`Element`

cloned children with data injected into `supported` events

#### Defined in

[src/components/events/OnEvents.tsx:15](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/events/OnEvents.tsx#L15)
