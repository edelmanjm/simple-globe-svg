[React Simple Globe](../README.md) / [Exports](../modules.md) / Dev Constants

# Module: Dev Constants

initial props

## Table of contents

### Variables

- [default](Dev_Constants-1.md#default)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GEO_PROPS` | { `hover`: { `enter`: { `props`: { `style`: { `fill`: `string` = "red"; `outline`: `string` = "none" }  }  }  }  } |
| `GEO_PROPS.hover` | { `enter`: { `props`: { `style`: { `fill`: `string` = "red"; `outline`: `string` = "none" }  }  }  } |
| `GEO_PROPS.hover.enter` | { `props`: { `style`: { `fill`: `string` = "red"; `outline`: `string` = "none" }  }  } |
| `GEO_PROPS.hover.enter.props` | { `style`: { `fill`: `string` = "red"; `outline`: `string` = "none" }  } |
| `GEO_PROPS.hover.enter.props.style` | { `fill`: `string` = "red"; `outline`: `string` = "none" } |
| `GEO_PROPS.hover.enter.props.style.fill` | `string` |
| `GEO_PROPS.hover.enter.props.style.outline` | `string` |
| `MARKERS` | { `coordinates`: [`Coord`](../classes/Globe_Classes.Coord.md) ; `id`: `string` = "br"; `label`: { `style`: { `stroke`: `string` = "green" } ; `text`: `string` = "Brazil" } ; `props`: { `hover`: { `enter`: { `props`: { `style`: { `opacity`: `number` = 0 }  }  }  }  }  }[] |
| `VIEW_PROPS` | { `dimensions`: [`Point`](../classes/Globe_Classes.Point.md) = EMPTY\_POINT; `fetchToTarget`: `boolean` = true; `scale`: `number` = INITIAL\_SCALE; `target`: ``null`` \| `HTMLElement`  } |
| `VIEW_PROPS.dimensions` | [`Point`](../classes/Globe_Classes.Point.md) |
| `VIEW_PROPS.fetchToTarget` | `boolean` |
| `VIEW_PROPS.scale` | `number` |
| `VIEW_PROPS.target` | ``null`` \| `HTMLElement` |

#### Defined in

[src/constants.ts:55](https://github.com/Gaushao/d3-react-globe/blob/4f7a1a2/src/constants.ts#L55)
