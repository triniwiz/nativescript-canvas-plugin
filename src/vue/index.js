module.exports = function install(Vue) {
	Vue.registerElement('TNSCanvas', () => require('../').TNSCanvas);
}
