[React Simple Globe](../README.md) / [Exports](../modules.md) / Globe Types

# Module: Globe Types

## Table of contents

### Dispatch Interfaces

- [DispatchState](../interfaces/Globe_Types.DispatchState.md)

### Props Interfaces

- [GlobeProps](../interfaces/Globe_Types.GlobeProps.md)

### Settings Interfaces

- [GlobeSettings](../interfaces/Globe_Types.GlobeSettings.md)

### State
returned by [[useBooleanState]] Interfaces

- [BooleanState](../interfaces/Globe_Types.BooleanState.md)

### Alias Type Aliases

- [DeepPartial](Globe_Types.md#deeppartial)

### State Type Aliases

- [MutableState](Globe_Types.md#mutablestate)
- [MutableStates](Globe_Types.md#mutablestates)

## Alias Type Aliases

### DeepPartial

Ƭ **DeepPartial**<`T`\>: `T` extends `object` ? { [P in keyof T]?: DeepPartial<T[P]\> } : `T`

define deep partial types

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/components/types.ts:43](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/types.ts#L43)

___

## State Type Aliases

### MutableState

Ƭ **MutableState**<`T`\>: [`T`, `Dispatch`<`SetStateAction`<`T`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/components/types.ts:18](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/types.ts#L18)

___

### MutableStates

Ƭ **MutableStates**<`T`\>: [[`MutableState`](Globe_Types.md#mutablestate)<`T`\>[], [`DispatchState`](../interfaces/Globe_Types.DispatchState.md)<`T` \| `T`[]\>]

returned by useStates

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/components/types.ts:24](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/components/types.ts#L24)
