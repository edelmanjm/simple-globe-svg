[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe View Context

# Module: Globe View Context

provides state and dispatch features to view port handling

## Table of contents

### Classes

- [ViewContextValue](../classes/Globe_View_Context.ViewContextValue.md)

### Context Variables

- [ViewContext](Globe_View_Context.md#viewcontext)

### Provider Functions

- [ViewProvider](Globe_View_Context.md#viewprovider)

## Context Variables

### ViewContext

• `Const` **ViewContext**: `Context`<[`ViewContextValue`](../classes/Globe_View_Context.ViewContextValue.md)\>

#### Defined in

[src/components/view/Context.tsx:22](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/view/Context.tsx#L22)

## Provider Functions

### ViewProvider

▸ **ViewProvider**(`props`): `Element`

**`Prop`**

[ViewContextValue](../classes/Globe_View_Context.ViewContextValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<{ `value`: [`ViewContextValue`](../classes/Globe_View_Context.ViewContextValue.md)  }\> |

#### Returns

`Element`

`wrap`\
[ViewContext](Globe_View_Context.md#viewcontext)

#### Defined in

[src/components/view/Context.tsx:35](https://github.com/Gaushao/d3-react-globe/blob/d269768/src/components/view/Context.tsx#L35)
