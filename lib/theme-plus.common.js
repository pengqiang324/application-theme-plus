/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Spin": function() { return /* reexport */ components_Spin; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./theme/components/Spin/src/Spin.vue?vue&type=script&lang=js


/* harmony default export */ var Spinvue_type_script_lang_js = ({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Spin',
    setup() {
      return () => 
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(
          'span',
          { class: 'spin-dot spin-dot-spin' },
          [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', { class: 'spin-dot-item' }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', { class: 'spin-dot-item' }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', { class: 'spin-dot-item' }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', { class: 'spin-dot-item' })]
        )
    }
});

;// CONCATENATED MODULE: ./theme/components/Spin/src/Spin.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./theme/components/Spin/src/Spin.vue?vue&type=style&index=0&id=c1b2c032&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./theme/components/Spin/src/Spin.vue?vue&type=style&index=0&id=c1b2c032&lang=scss

;// CONCATENATED MODULE: ./theme/components/Spin/src/Spin.vue



;

const __exports__ = Spinvue_type_script_lang_js;

/* harmony default export */ var Spin = (__exports__);
;// CONCATENATED MODULE: ./theme/components/Spin/index.js

 
Spin.install = (Vue) => {
  Vue.component(Spin.name,Spin)
}
 
/* harmony default export */ var components_Spin = (Spin);
;// CONCATENATED MODULE: ./packages/index.js



const version = "1.2.4"
const modulesFiles = ({}).globEager('../theme/components/**/*.js')
// const modulesFiles = require.context('../theme/components', true, /\.js$/)

const install = (Vue, options) => {
  // 判断是否安装
  if (install.installed) return
  // 注册组件
  for (const key in modulesFiles) {
    if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
      const component = modulesFiles[key].default
      Vue.component(component.name, component)
    }
  }
  
  // modulesFiles.keys().map((componentPath) => {
  //   const component = modulesFiles(componentPath).default
  //   Vue.component(component.name, component)
  // })
  // // 判断注册参数是否为正确参数
  if (
      Object.prototype.toString.call(options) === '[object Object]' &&
      Object.keys(options).length
  ) {
      for(var key in options) {
          Vue.config.globalProperties[key] = options[key]
      }
  }
}
 
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


 
/* harmony default export */ var packages_0 = ({
  version,
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=theme-plus.common.js.map