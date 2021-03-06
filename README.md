![test:unit](https://github.com/Tardigrada777/vue-layouts/workflows/test:unit/badge.svg)

#### vue-layouts (l5s)

Small, simple and fast lib for convinience building layouts with Vue 3.

#### Warning!

Currently is under hard development. If you have any ideas how to improve this lib,
PR's are welcome.

#### development and contributing

1. **install deps**

```bash
yarn
```

2. **run dev server**

```bash
yarn serve
```

3. **run unit tests**

```bash
yarn test:unit
```

### Examples

#### sticky

##### html

```html
<l-sticky>
  <div class="topbar"></div>
</l-sticky>
```

##### props

| name   |  type  | default |                     description                     |
| ------ | :----: | ------: | :-------------------------------------------------: |
| to     | string |     top | direction to stick `top`, `right`, `bottom`, `left` |
| offset | number |       0 | offset amount, that converts to Npx value for `to`  |

##### slots

| name    |           description           |
| ------- | :-----------------------------: |
| default | content passed via default slot |

#### TODO (proto)

- [ ] base component with common properties
  - [x] z (z-index)
  - [ ] tag
  - [ ] mx, my
  - [ ] mt, mr, mb, ml
  - [ ] px, py
  - [ ] pt, pr, pb, pl
- [x] fix
- [x] sticky
- [x] absolute
- [x] center
- [ ] container (using css vars)
- [ ] row (using css vars)
- [ ] column (using css vars)
