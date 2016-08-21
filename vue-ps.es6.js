//----- Perfect scrollbar -----//
var vuePs = {
    install: function (Vue,options) {
        Vue.ps = {};
        Vue.ps.scrollElems = [];
        
        //----- Initialize a scrollbar -----//
        Vue.ps.initialize = function(elem, options = {}) {
            Ps.initialize(elem.$el, options);
            Vue.ps.scrollElems.push(elem.$el);
        };
        
        //----- destroy a scrollbar -----//
        Vue.ps.destroy = function(elem) {
            Ps.destroy(elem.$el);
            let psIndex = Vue.ps.scrollElems.indexOf(elem.$el);
            if (psIndex >= 0) Vue.ps.scrollElems.splice(psIndex, 1);
        };
        
        //----- Update all scrollbars length -----//
        Vue.ps.update = function () {
            Vue.ps.scrollElems.forEach(function(item) {
                Ps.update(item);
            });
        };
        
        //----- Update all scrollbars on resize -----//
        window.addEventListener("resize", _.debounce(Vue.ps.update, 100));
    }
};

Vue.use(vuePs);