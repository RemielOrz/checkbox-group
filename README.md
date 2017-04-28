```ts
import CheckGroup from './index';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange'},
];
```

## CheckGroup

带有全选的表单元素多选框Checkbox组件,

- 在一组可选项中进行多项选择, 且需要全选框时；


```render jsx
<CheckGroup options={options} />
```

### CheckGroup API

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| defaultValue | 默认选中的选项 | Array | [] |
| value | 指定选中的选项| Array | [] |
| options  | 指定可选项 | Array | [] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |
| disableCheckAll | 显示|隐藏 全选 | Boolean | false |
