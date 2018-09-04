###Treelist

#### API

| parameter      | description    | type      | option       | default   |  required  |
|---------- |-------- |---------- |-------------  |-------- | -------- |
| rootId     | Top id of the tree  | Number  | — |   —    | true  |
| rootFold  | The key of the tree trunk | Number   |  —  |  foldId   | false  |
| rootItem  | The key of the leaf | Number   |  —  |  itemId  | false  |
| tree  | The array | Array   |  —  | []  | true  |

#### Event

| event      | description    | type      | option       |
|---------- |-------- |---------- |-------------  |
| change     | Check method  | Function  | — |

#### Notice 

The tree array must be set as next:

```

[{
  checked:false,
  name: 'name',
  icon: 'a.png'
}]

```
