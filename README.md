# vue-ps
### Features
- simple, custom and beautiful scrollbars


### Installation
```
bower install vue-ps
```
### Usage
Include vue-ps after Vue.js, perfect-scrollbar and underscore.js:
```html
<script src="path/to/vue.js"></script>
<script src="path/to/perfect-scrollbar.js"></script>
<script src="bower_components/vue-ps/vue-ps.min.js"></script>
```
Make your Vue.js components scrollable, e.g.:
```javascript
Vue.component('dnd-board', {
    template: '#dnd-board',
    ready: function() {
        Vue.ps.initialize(this, {wheelSpeed: 0.3});
    },
    beforeDestroy: function () {
        Vue.ps.destroy(this);
    }
});
```