[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe View Hooks

# Module: Globe View Hooks

## Table of contents

### Context Functions

- [useViewContext](Globe_View_Hooks.md#useviewcontext)

### Operation Functions

- [useViewRatio](Globe_View_Hooks.md#useviewratio)

### Selector Functions

- [useViewDimensions](Globe_View_Hooks.md#useviewdimensions)
- [useViewScaling](Globe_View_Hooks.md#useviewscaling)
- [useViewZooming](Globe_View_Hooks.md#useviewzooming)

## Context Functions

### useViewContext

▸ **useViewContext**(): [`ViewContextValue`](../classes/Globe_View_Context.ViewContextValue.md)

#### Returns

[`ViewContextValue`](../classes/Globe_View_Context.ViewContextValue.md)

#### Defined in

[src/components/view/hooks.ts:12](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/view/hooks.ts#L12)

___

## Operation Functions

### useViewRatio

▸ **useViewRatio**(): `number`

#### Returns

`number`

#### Defined in

[src/components/view/hooks.ts:39](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/view/hooks.ts#L39)

___

## Selector Functions

### useViewDimensions

▸ **useViewDimensions**(): [`MutableStates`](Globe_Types.md#mutablestates)<`number`\>

#### Returns

[`MutableStates`](Globe_Types.md#mutablestates)<`number`\>

#### Defined in

[src/components/view/hooks.ts:16](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/view/hooks.ts#L16)

___

### useViewScaling

▸ **useViewScaling**(): [`MutableState`](Globe_Types.md#mutablestate)<`number`\>

#### Returns

[`MutableState`](Globe_Types.md#mutablestate)<`number`\>

#### Defined in

[src/components/view/hooks.ts:20](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/view/hooks.ts#L20)

___

### useViewZooming

▸ **useViewZooming**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `zoom` | (`factor`: `number`) => `void` |
| `zoomIn` | () => `void` |
| `zoomOut` | () => `void` |

#### Defined in

[src/components/view/hooks.ts:25](https://github.com/Gaushao/d3-react-globe/blob/0a8a5c1/src/components/view/hooks.ts#L25)
