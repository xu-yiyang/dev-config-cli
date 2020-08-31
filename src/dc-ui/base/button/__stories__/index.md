## Usage

```jsx
<Button
  color='primary'
  block
  onClick={() => {
    // do something ...
  }}
/>
```

## Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型 | `string` | `line` | 无 |
| color | 颜色 | `string` | `primary` `success` `warning` `error` `gray` | 无 |
| size | 大小 | `string` | `large` `small` | 无 |
| block | 是否撑满父元素 | `boolean` | | `false` |
| disabled | 禁用状态 | `boolean` | | `false` |
| onClick | `click` 事件的 `handler` | `React.MouseEventHandler` | | 无 |
