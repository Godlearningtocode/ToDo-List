/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
    margin: 0px;
    font-family: sans-serif;
    font-size: 15px;
    color: rgb(22, 23, 48);
}

header {
    padding: 20px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(240, 236, 229);
    background-color: rgb(22, 23, 48);
    font-size: 3rem;
}

.logo {
    width: 60px;
    height: 60px;
}

.headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-weight: bolder;
}

.content {
    width: 100%;
}

.contentContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 120px;
    bottom: 0;
    width: 100%;
}

.sideBar {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: bold;
    gap: 20px;
    width: 310px;
    padding: 20px;
    background-color: #b6bbc4;
}

.defaultProjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    font-size: 0.5rem;
}

.subCateogary, .addProject, .projectTitle{
    display: flex;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
}

.subCateogary:hover, .addProject:hover {
    background-color: rgba(22, 23, 48, 0.2);
    border-radius: 10px;
}

.activeBox, .taskCard:hover {
    font-weight: bold;
    background-color: rgba(22, 23, 48, 0.2);
    border-radius: 10px;
}

button {
    font-size: 1rem;
    padding: 10px;
    border: none;
    background: none;
    color: #161730;
}

.projectsList {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.projectsList > .heading {
    font-weight: bolder;
    font-size: 2rem;
}

.taskContent {
    padding: 30px;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
}

.taskContent > .header {
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
}

.taskCardSection {
    width: 100%;
}

.editBox {
    display: flex;;
    flex-direction: column;
    gap: 10px;
}

.taskCard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: calc(100% - 20px);
    padding: 10px;
}

.taskCard > .leftContent {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;

}

.taskCard > .rightContent {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    min-height: 100%;
    font-size: 1.1rem;
}

.star, .edit, .delete, .filledStar, #star, .projectDelete {
    width: 20px;
    height: 20px;
}

.addTask {
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    padding: 10px;
}

.addTaskContainer {
    display: flex;
    flex-direction: column;
}

.projectSection {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.projectSection > .subCateogary {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.projectTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 ;
}

#projectDelete {
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form, .editForm{
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.titleContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 500px;
    max-width: 900px;
}

.leftContent > .titleContainer > .title {
    display: inline-block;
    word-break: break-word;  
}

.descriptionContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 500px;
}

.remainingContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    min-width: 500px;
    justify-content: space-between;
}

.remainingContainer > div {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.form > .formButtons, .editForm > .formButtons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    min-width: 500px;
    justify-content: center;
}

#addButton, #editAddButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #aaffaa;
    border-radius: 5px;
}

#cancelButton, #editCancelButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    background-color: #ffbebe;
}

#projectValue {
    width: calc(100% - 8px);
}

.projectForm > .formButtons {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
}

.addButtonProject {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #aaffaa;
    border-radius: 5px;
}

.cancelButtonProject {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    background-color: #ffbebe;
}

.projectForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 225px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body,\nhtml {\n    margin: 0px;\n    font-family: sans-serif;\n    font-size: 15px;\n    color: rgb(22, 23, 48);\n}\n\nheader {\n    padding: 20px;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: rgb(240, 236, 229);\n    background-color: rgb(22, 23, 48);\n    font-size: 3rem;\n}\n\n.logo {\n    width: 60px;\n    height: 60px;\n}\n\n.headerContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n    font-weight: bolder;\n}\n\n.content {\n    width: 100%;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 120px;\n    bottom: 0;\n    width: 100%;\n}\n\n.sideBar {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    font-weight: bold;\n    gap: 20px;\n    width: 310px;\n    padding: 20px;\n    background-color: #b6bbc4;\n}\n\n.defaultProjects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 15px;\n    font-size: 0.5rem;\n}\n\n.subCateogary, .addProject, .projectTitle{\n    display: flex;\n    width: 100%;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.subCateogary:hover, .addProject:hover {\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\n.activeBox, .taskCard:hover {\n    font-weight: bold;\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\nbutton {\n    font-size: 1rem;\n    padding: 10px;\n    border: none;\n    background: none;\n    color: #161730;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectsList > .heading {\n    font-weight: bolder;\n    font-size: 2rem;\n}\n\n.taskContent {\n    padding: 30px;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 15px;\n}\n\n.taskContent > .header {\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.taskCardSection {\n    width: 100%;\n}\n\n.editBox {\n    display: flex;;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.taskCard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: calc(100% - 20px);\n    padding: 10px;\n}\n\n.taskCard > .leftContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n\n}\n\n.taskCard > .rightContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n    min-height: 100%;\n    font-size: 1.1rem;\n}\n\n.star, .edit, .delete, .filledStar, #star, .projectDelete {\n    width: 20px;\n    height: 20px;\n}\n\n.addTask {\n    font-size: 1.2rem;\n    font-weight: bold;\n    width: 100%;\n    padding: 10px;\n}\n\n.addTaskContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectSection {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectSection > .subCateogary {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.projectTitle {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 1 ;\n}\n\n#projectDelete {\n    min-width: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.form, .editForm{\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.titleContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n    max-width: 900px;\n}\n\n.leftContent > .titleContainer > .title {\n    display: inline-block;\n    word-break: break-word;  \n}\n\n.descriptionContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n}\n\n.remainingContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    min-width: 500px;\n    justify-content: space-between;\n}\n\n.remainingContainer > div {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.form > .formButtons, .editForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    min-width: 500px;\n    justify-content: center;\n}\n\n#addButton, #editAddButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n#cancelButton, #editCancelButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n#projectValue {\n    width: calc(100% - 8px);\n}\n\n.projectForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 5px;\n}\n\n.addButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n.cancelButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n.projectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    width: 225px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
function addTask(projectsArray) {
    const taskContent = document.querySelector('.taskContent');
    const form = document.createElement('form');
    form.classList.add('form');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.classList.add('title');
    titleLabel.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.type = 'text';
    titleInput.required = true;
    
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.classList.add('description');
    descriptionLabel.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';

    const remainingContainer = document.createElement('div');
    remainingContainer.classList.add('remainingContainer');

    const deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('deadlineContainer')
    const deadlineLabel = document.createElement('label');
    deadlineLabel.htmlFor = 'deadline';
    deadlineLabel.classList.add('deadline');
    deadlineLabel.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'deadline';
    deadlineInput.id = 'deadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;

    const importanceContainer = document.createElement('div');
    importanceContainer.classList.add('importanceContainer');
    const importanceLabel = document.createElement('label');
    importanceLabel.htmlFor = 'importance';
    importanceLabel.classList.add('importance');
    importanceLabel.innerText = 'Important:';
    const importanceInput = document.createElement('SELECT');
    importanceInput.id = 'importance';
    const importanceYes = document.createElement('option');
    importanceYes.value = 'yes';
    importanceYes.innerText = 'Yes';
    const importanceNo = document.createElement('option');
    importanceNo.value = 'no';
    importanceNo.innerText = 'No';

    const taskProjectContainer = document.createElement('div');
    taskProjectContainer.classList.add('taskProjectContainer');
    const projectLabel = document.createElement('label');
    projectLabel.classList.add('projectLabel');
    projectLabel.htmlFor = 'projectInput';
    projectLabel.innerText = 'Project:';
    const projectInput = document.createElement('SELECT');
    projectInput.id = 'projectInput';
    for(let i = 0; i < projectsArray.length; i++) {
        let optionValue = document.createElement('option');
        optionValue.value = projectsArray[i].projectTitle;
        optionValue.innerText = projectsArray[i].projectTitle;
        projectInput.appendChild(optionValue);
    }
    const noProject = document.createElement('option');
    noProject.value = 'none';;
    noProject.innerText = 'None'
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'addButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancelButton';
    cancelButton.innerText = 'Cancel';

    importanceInput.appendChild(importanceYes);
    importanceInput.appendChild(importanceNo);

    projectInput.appendChild(noProject);

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);

    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);

    remainingContainer.appendChild(deadlineContainer);
    remainingContainer.appendChild(importanceContainer);
    remainingContainer.appendChild(taskProjectContainer);
    deadlineContainer.appendChild(deadlineLabel);
    deadlineContainer.appendChild(deadlineInput);
    importanceContainer.appendChild(importanceLabel);
    importanceContainer.appendChild(importanceInput);
    taskProjectContainer.appendChild(projectLabel);
    taskProjectContainer.appendChild(projectInput);

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(remainingContainer);
    form.appendChild(formButtons);

    taskContent.appendChild(form);
}

/***/ }),

/***/ "./src/appendProject.js":
/*!******************************!*\
  !*** ./src/appendProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectWindow: () => (/* binding */ addProjectWindow),
/* harmony export */   appendProject: () => (/* binding */ appendProject),
/* harmony export */   appendProjectTasks: () => (/* binding */ appendProjectTasks),
/* harmony export */   cancelButtonProject: () => (/* binding */ cancelButtonProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   projectOnLoad: () => (/* binding */ projectOnLoad),
/* harmony export */   projectTab: () => (/* binding */ projectTab),
/* harmony export */   removeAddProject: () => (/* binding */ removeAddProject)
/* harmony export */ });
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");


//7. function for adding form at sidebar for project input
function addProjectWindow() {
    const projectsList = document.querySelector('.projectsList');
    const form = document.createElement('form');
    form.classList.add('projectForm');
    const projectValue = document.createElement('input');
    projectValue.id = 'projectValue';
    projectValue.type = 'text';
    projectValue.placeholder = 'Enter Project Name';
    projectValue.required = true;
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButtonProject = document.createElement('button');
    addButtonProject.classList.add('addButtonProject');
    addButtonProject.type = 'button';
    addButtonProject.innerText = 'Add';
    const cancelButtonProject = document.createElement('button');
    cancelButtonProject.classList.add('cancelButtonProject');
    cancelButtonProject.type = 'button'
    cancelButtonProject.innerText = 'Cancel';

    formButtons.appendChild(addButtonProject);
    formButtons.appendChild(cancelButtonProject);

    form.appendChild(projectValue);
    form.appendChild(formButtons);

    projectsList.appendChild(form);
}

//8. function for storing formProject data and appending project to the sidebar
function appendProject() {
    const projectSection = document.querySelector('.projectSection');
    const projectValue = document.querySelector('#projectValue').value;
    const projectCard = document.createElement('button');
    projectCard.classList.add('subCateogary');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitle');
    projectTitle.innerText = projectValue;
    const projectDelete = document.createElement('div');
    projectDelete.id = 'projectDelete';
    const delete_icon = new Image();
    delete_icon.src = _delete_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    delete_icon.classList.add('projectDelete');

    projectDelete.appendChild(delete_icon);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDelete);

    projectSection.appendChild(projectCard);
}

//function for appending projeccts on first load.
function projectOnLoad(project) {
    const projectSection = document.querySelector('.projectSection');
    const projectCard = document.createElement('button');
    projectCard.classList.add('subCateogary');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitle');
    projectTitle.innerText = project.projectTitle;
    const projectDelete = document.createElement('div');
    projectDelete.id = 'projectDelete';
    const delete_icon = new Image();
    delete_icon.src = _delete_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    delete_icon.classList.add('projectDelete');

    projectDelete.appendChild(delete_icon);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDelete);

    projectSection.appendChild(projectCard);
}

//9. function to remove addProject window after appending the project
function removeAddProject() {
    const projectForm = document.querySelector('.projectForm');
    projectForm.parentElement.removeChild(projectForm);
}

//2. function to remove addProjectWindow when cancel button is clicked
function cancelButtonProject() {
    const formProject = document.querySelector('.formProject');
    (formProject.parentElement).removeChild(formProject);
}

//3. function for project click event display of individual tabs of projects.
function projectTab(event, projectsArray) {
    for(let i = 0; i < projectsArray.length; i++) {
        if(event.target.value = projectsArray[i].projectTitle) {
            const taskContent = document.querySelector('.taskContent');
            while(taskContent.firstChild) {
                taskContent.removeChild(taskContent.firstChild)
            }
            const header = document.createElement('div');
            header.classList.add('header');
            header.innerText = projectsArray[i].projectTitle;
            taskContent.appendChild(header)
            const taskCardSection = document.createElement('div');
            taskCardSection.classList.add('taskCardSection');
            taskContent.appendChild(taskCardSection);
        }
    }
}

//4. function for appending tasks with same projectValue as the projectTab
function appendProjectTasks(tasksArray, event, appendTask) {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].projectValue == event.target.innerText) {
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
                projectValue: tasksArray[i].projectValue
            }
            appendTask(task);
        }
    }
}

//5. function to delete project from the project list
function deleteProject(projectsArray, event) {
    event.target.classList.add('deletedProject');
    const deletedProject = document.querySelector('.deletedProject');
    let deletedProjectValue = (deletedProject.parentElement.parentElement.firstChild.innerText).toString();
    
    for(let i = 0; i < projectsArray.length; i++) {
        if(projectsArray[i].projectTitle === deletedProjectValue) {
            projectsArray.splice(i, 1);
            break;
        }
    }

    const removeProject = deletedProject.parentElement.parentElement
    removeProject.parentElement.removeChild(removeProject);
}

/***/ }),

/***/ "./src/appendTask.js":
/*!***************************!*\
  !*** ./src/appendTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendTask)
/* harmony export */ });
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");





function appendTask(task) {
    const taskCardSection = document.querySelector('.taskCardSection');
    const taskCard = document.createElement('div');
    const importanceValue = task.importantValue;
    taskCard.classList.add('taskCard');
    const leftContent = document.createElement('div');
    leftContent.classList.add('leftContent');
    const rightContent = document.createElement('div');
    rightContent.classList.add('rightContent');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.name = 'checkbox';
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = task.titleValue;
    title.contentEditable = true;
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerText = task.descriptionValue;
    const date = document.createElement('div');
    date.classList.add('date');
    date.innerText = task.deadlineValue;
    const star = new Image();
    if(importanceValue == 'yes'){
        star.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_1__;
    } else {
        star.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    }
    star.classList.add('star');
    const edit = new Image();
    edit.src = _edit_icon_png__WEBPACK_IMPORTED_MODULE_2__;
    edit.classList.add('edit');
    const deleteLogo = new Image();
    deleteLogo.src = _delete_icon_png__WEBPACK_IMPORTED_MODULE_3__;
    deleteLogo.classList.add('delete');

    titleContainer.appendChild(title);
    titleContainer.appendChild(description);

    leftContent.appendChild(checkbox);
    leftContent.appendChild(titleContainer);
    rightContent.appendChild(date);
    rightContent.appendChild(star);
    rightContent.appendChild(edit);
    rightContent.appendChild(deleteLogo);

    taskCard.appendChild(leftContent);
    taskCard.appendChild(rightContent);

    taskCardSection.appendChild(taskCard);
}

/***/ }),

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkedTask: () => (/* binding */ checkedTask),
/* harmony export */   removeTaskArray: () => (/* binding */ removeTaskArray)
/* harmony export */ });
// Remove tasks with checked class
function checkedTask() {
    const checked = document.querySelector('.checked');
    (checked.parentElement.parentElement.parentElement).removeChild(checked.parentElement.parentElement);
}

// Remove the checked task from array of tasks.
function removeTaskArray(tasksArray) {
    const checkedBox = document.querySelector('.checked');
    if(checkedBox) {
        const checkbox = document.querySelector('.checked');
        const removeTitle = (checkbox.nextSibling.firstChild.innerText).toString();
        for (let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].titleValue === removeTitle) {
                tasksArray.splice(i, 1);
                break;
            }
        }
    } else {
        const deletedTask = document.querySelector('.deleted');
        if(deletedTask) {
            const removeTitle = (deletedTask.firstChild.firstChild.nextSibling.firstChild).innerText.toString();
            for (let i = 0; i < tasksArray.length; i++) {
                if(tasksArray[i].titleValue === removeTitle) {
                    tasksArray.splice(i, 1);
                    break;
                }
            }
        }
    }
}

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
// delete task from the dom tree.
function deleteTask() {
    const deletedTask = document.querySelector('.deleted');
    (deletedTask.parentElement).removeChild(deletedTask);
}

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEditValues: () => (/* binding */ addEditValues),
/* harmony export */   editBox: () => (/* binding */ editBox),
/* harmony export */   editValue: () => (/* binding */ editValue),
/* harmony export */   removeFormBox: () => (/* binding */ removeFormBox),
/* harmony export */   removeValue: () => (/* binding */ removeValue)
/* harmony export */ });
//5. function to add edit box under the task for edit click event
function editBox(event) {
    const editBoxContainer = ((event.target.parentNode).parentNode).parentNode;
    editBoxContainer.classList.add('editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const editTitle = document.createElement('label');
    editTitle.htmlFor = 'editTitle';
    editTitle.classList.add('editTitle');
    editTitle.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'editTitle';
    titleInput.id = 'editTitle';
    titleInput.type = 'text';
    titleInput.required = true;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');
    const editDescription = document.createElement('label');
    editDescription.htmlFor = 'editDescription';
    editDescription.classList.add('editDescription');
    editDescription.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'editDescription';
    descriptionInput.id = 'editDescription';
    descriptionInput.type = 'text';

    const deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('deadlineContainer');
    const editDeadline = document.createElement('label');
    editDeadline.htmlFor = 'editDeadline';
    editDeadline.classList.add('editDeadline');
    editDeadline.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'editDeadline';
    deadlineInput.id = 'editDeadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;

    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'editAddButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'editCancelButton';
    cancelButton.innerText = 'Cancel';

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    titleContainer.appendChild(editTitle);
    titleContainer.appendChild(titleInput);

    descriptionContainer.appendChild(editDescription);
    descriptionContainer.appendChild(descriptionInput);

    deadlineContainer.appendChild(editDeadline);
    deadlineContainer.appendChild(deadlineInput);

    editForm.appendChild(titleContainer);
    editForm.appendChild(descriptionContainer);
    editForm.appendChild(deadlineInput);
    editForm.appendChild(formButtons);

    editBoxContainer.appendChild(editForm);
}

//6. add editBox input values to task.
function editValue() {
    const editContainer = document.querySelector('.editContainer');
    const title = editContainer.firstChild.firstChild.nextSibling.firstChild;
    const description = title.nextSibling;
    const date = editContainer.firstChild.nextSibling.firstChild;
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const dateValue = document.querySelector('#editDeadline').value;
    title.innerText = titleValue;
    description.innerText = descriptionValue;
    date.innerText = dateValue;
}

//7. functio to remove editBox when editCancelButton is clicked
function removeFormBox(event) {
    const taskCardSection = document.querySelector('.taskCardSection');
    taskCardSection.removeChild(taskCardSection.lastChild)
}

//8. function to remove pre edit values from tasksarray
function removeValue(tasksArray) {
    const editContainer = document.querySelector('.editContainer');
    const removeTitle = editContainer.firstChild.firstChild.nextSibling.firstChild;
    console.log(removeTitle.innerText)
;    for(let i = 0; i < tasksArray.length; i++) {
        if(removeTitle.innerText === tasksArray[i].titleValue) {
            tasksArray.splice(i, 1);
        }
    }
}

//9. fucntion to add new values to tasksarray after editAddButton is clicked 
function addEditValues(tasksArray) {
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const deadlineValue = document.querySelector('#editDeadline').value;

    const task = {titleValue,descriptionValue,deadlineValue};
    tasksArray.push(task);
}

/***/ }),

/***/ "./src/importantPage.js":
/*!******************************!*\
  !*** ./src/importantPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importantPage: () => (/* binding */ importantPage)
/* harmony export */ });
//5. function for display for important tab
function importantPage(tasksArray, appendTask) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.innerText = 'Important';
    header.classList.add('header');
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.id = 'importantTab';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);

    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue,
            projectValue: tasksArray[i].projectValue
        }
        if(task.importantValue == 'yes') {
            appendTask(task);
        }
    }
}

/***/ }),

/***/ "./src/importantTasks.js":
/*!*******************************!*\
  !*** ./src/importantTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportantTasks: () => (/* binding */ addImportantTasks),
/* harmony export */   changeFilledStar: () => (/* binding */ changeFilledStar),
/* harmony export */   changeStar: () => (/* binding */ changeStar),
/* harmony export */   removeImportantTasks: () => (/* binding */ removeImportantTasks)
/* harmony export */ });
/* harmony import */ var _double_tick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./double-tick.png */ "./src/double-tick.png");
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");






// function to change importnt icon to filled 
function changeStar() {
    const star = document.querySelector('.star');
    if(star.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_1__) {
        star.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_2__;
        star.classList.add('filledStar');
        star.classList.remove('star');
    }
}

// function to add values to importantTasks array
function addImportantTasks(tasksArray) {
    const star = document.querySelector('.star');
    star.parentElement.parentElement.classList.add('important');
    const important = document.querySelector('.important');
    const titleValue = important.firstChild.firstChild.nextSibling.firstChild.innerText;

    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].titleValue == titleValue) {
            tasksArray[i].importantValue = 'yes'
        }
    }
}

// function to change importnt filled icon to non filled icon and remove important class from parents parent node
function changeFilledStar() {
    const filledStar = document.querySelector('.filledStar');
    filledStar.parentElement.parentElement.classList.remove('important');
    if(filledStar.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_2__){
        filledStar.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        filledStar.classList.add('star');
        filledStar.classList.remove('filledStar');
    }
}

// remove task from importantTaskArray
function removeImportantTasks(tasksArray) {
    const importantTaskCard = document.querySelector('.important');
    const removeImportantTitle = importantTaskCard.firstChild.firstChild.nextSibling.firstChild.innerText;
    for(let i = 0; i < tasksArray.length; i++) {
        if(removeImportantTitle == tasksArray[i].titleValue) {
            tasksArray[i].importantValue = 'no';
        }
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _todo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.png */ "./src/todo.png");
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");
/* harmony import */ var _appendTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appendTask.js */ "./src/appendTask.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox.js */ "./src/checkbox.js");
/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deleteTask.js */ "./src/deleteTask.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");
/* harmony import */ var _importantTasks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importantTasks.js */ "./src/importantTasks.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _thisWeek_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thisWeek.js */ "./src/thisWeek.js");
/* harmony import */ var _importantPage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./importantPage.js */ "./src/importantPage.js");
/* harmony import */ var _appendProject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appendProject.js */ "./src/appendProject.js");
//importing assets


































//assigning var to dom elements
const taskContent = document.querySelector('.taskContent');
const allTasksButton = document.querySelector('#allTasks');
const taskCardSection = document.querySelector('.taskCardSection');
const addTaskButton = document.querySelector('.addTask');
const todayButton = document.querySelector('#today');
const addProject = document.querySelector('.addProject');
let isFormPresent = false;
let isProjectFormPresent = false;


//header logo in header section
const headerLogo = document.querySelector('.logo');
headerLogo.src = _todo_png__WEBPACK_IMPORTED_MODULE_1__;


//array for storing form data
let tasksArray = [];
let retrievedTasksArray = [];
let arrProjectlists = ['All Tasks', 'Today', 'This Week', 'Important']
let projectsArray = [];


//EVENTLISTENERS:-
//1. click listener for addtask for form input
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addTask') === true) {
        if(!isFormPresent) {
            (0,_addTask_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectsArray);
            isFormPresent = true;
        }
    }
})

//2. click event listener for addbutton on form for addtask
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'addButton') {
        console.log(tasksArray);
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;
        const importantValue = document.querySelector('#importance').value;
        const projectValue = document.querySelector('#projectInput').value;

        const task = {titleValue, descriptionValue, deadlineValue, importantValue, projectValue};
        const form = document.querySelector('.form');
        if(form.checkValidity()) {
            tasksArray.push(task);
            console.log(tasksArray);
            taskContent.removeChild(taskContent.lastChild);
            (0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
            tasksLocalStorage();
        } else {
            alert ('Please fill all required fields!')
        }
        isFormPresent = false;
        event.preventDefault();
    }
});

//3. Click event for remove addtaskwindow
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'cancelButton') {
        taskContent.removeChild(taskContent.lastChild);
    }
})

//4. click event listener for today section
todayButton.addEventListener('click', () => {
    ;(0,_today_js__WEBPACK_IMPORTED_MODULE_12__.todayPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
    activeBox(event);
})

//5. click event for removing task with checked div from dom and tasksArray
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox') == true) {
        event.target.classList.add('checked');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.checkedTask)();
        tasksLocalStorage()
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        (event.target.parentNode).parentNode.classList.add('deleted');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
        tasksLocalStorage();
    }
})

//7. click event for edit icon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit') === true) {
        if(!isFormPresent) {
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editBox)(event);
            const editContainer = event.target.parentNode.parentNode
            editContainer.classList.add('editContainer');
            isFormPresent = true;
        }
    }
})

//8. click event for editBox addButton
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'editAddButton') {
        const editForm = document.querySelector('.editForm');
        if(editForm.checkValidity()) {
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeValue)(tasksArray);
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.addEditValues)(tasksArray);
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editValue)();
            tasksLocalStorage();
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeFormBox)();
            isFormPresent = false;
        } else {
            alert ("Please fill all the required details!");
        }
    }
})

//9. click event for important icon to change empty star to filled star and add task values to importantTasks array.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('star') == true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.addImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeStar)();
        tasksLocalStorage()
    } else if(event.target.classList.contains('filledStar') == true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.removeImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeFilledStar)();
        tasksLocalStorage();
        if(taskContent.id == 'importantTab'){
            (0,_importantPage_js__WEBPACK_IMPORTED_MODULE_14__.importantPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        }
    }
})

//10. click event for this week tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'thisWeek') {
        (0,_thisWeek_js__WEBPACK_IMPORTED_MODULE_13__.thisWeekPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"], _today_js__WEBPACK_IMPORTED_MODULE_12__.todayDate);
        activeBox(event);
    }
})

//11. click event for impotant tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'important') {
        (0,_importantPage_js__WEBPACK_IMPORTED_MODULE_14__.importantPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        activeBox(event);
    }
})

//12. click event for all tasks page
allTasksButton.addEventListener('click', () => {
    allTasks(tasksArray);
    activeBox(event);
})

//13. function for add project window for value input for new project
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addProject') === true) {
        if(!isProjectFormPresent) {
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.addProjectWindow)();
            isProjectFormPresent = true;
        }
    }
})

//14. function to append project to the projectList.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addButtonProject') === true) {
        let projectTitle = document.querySelector('#projectValue');
        if(projectTitle.value.length >= 1) {
            let project = {projectTitle: projectTitle.value};
            projectsArray.push(project);
    
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.appendProject)();
            projectLocalStorage();
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.removeAddProject)();
            isProjectFormPresent = false;
        } else {
            alert ('Please fill all required details.');
        }
    }
})

//15. click event for when cancelProjectButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('cancelButtonProject') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.removeAddProject)();
        isProjectFormPresent = false;
    }
})

//16. click event to delte a project from the list.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectDelete') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.deleteProject)(projectsArray, event);
        projectLocalStorage();
    }
})

//17. click event for project lists tab for switching display to respective tab
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectTitle') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.projectTab)(event, projectsArray);
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.appendProjectTasks)(tasksArray, event, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        activeBoxProject(event);
    }
})

//18. Final click event for when the page loads. display any existing tasks and projects in local storage on the screen
window.addEventListener('load', (tasksArray) => {
    const allTasksButton = document.querySelector('#allTasks');
    allTasksButton.classList.add('activeBox');
    allTasks(tasksArray);
    onLoadTasks(tasksArray);

})

//19. click event to remove editForm when editCancelButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.id === 'editCancelButton') {
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeFormBox)(event)
    }
})


//FUNCTIONS:-
//1. function for display of all tasks tab
function allTasks(tasksArray) {
    while(taskContent.firstChild){
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'All Tasks';
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.innerText = '+ Add Task';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);
    taskContent.appendChild(addTask);

    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue
        }
        ;(0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
    }
}

//2. function for adding css to active tab on sidebar 
function activeBox(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.classList.add('activeBox');
}

//3. function for adding css to active tab on sidebar 
function activeBoxProject(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.parentNode.classList.add('activeBox');
}

//4. function for accesing localStorage to store arrays for appending tasks when page loads and for saving tasks when new tasks are added to the array. as well as for storing projects.
function tasksLocalStorage() {
    localStorage.setItem('tasksArr', JSON.stringify(tasksArray));
}

//5. function for project storage
function projectLocalStorage() {
    localStorage.setItem('projectArr', JSON.stringify(projectsArray))
}

//6. function to retrieve tasks from storage
function onLoadTasks() {
    tasksArray = JSON.parse(localStorage.getItem('tasksArr'));
    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue
        }
        ;(0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
    }

    projectsArray = JSON.parse(localStorage.getItem('projectArr'));
    for(let i = 0; i < projectsArray.length; i++) {
        let project = {
            projectTitle: projectsArray[i].projectTitle
        }
        ;(0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.projectOnLoad)(project);
    }
}

/***/ }),

/***/ "./src/thisWeek.js":
/*!*************************!*\
  !*** ./src/thisWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oneWeekDate: () => (/* binding */ oneWeekDate),
/* harmony export */   thisWeekPage: () => (/* binding */ thisWeekPage)
/* harmony export */ });
//3. function for thisWeekPage dom tree display
function thisWeekPage(tasksArray, appendTask, todayDate) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.innerText = 'This Week';
    header.classList.add('header');
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.id = 'thisWeekTab';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);

    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].deadlineValue <= oneWeekDate().oneWeekFromToday && tasksArray[i].deadlineValue >= todayDate().currentDate) {
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
            }
            appendTask(task);
        }
    }
}

//4. function to get a date one week from now
function oneWeekDate() {
    const date = new Date();
    date.setDate(new Date().getDate() + 7);

    let day = (date.getDate()) >= 10 ? (date.getDate()) : "0" + (date.getDate());
    let month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    let year = date.getFullYear();

    let oneWeekFromToday = `${year}-${month}-${day}`;
    return {oneWeekFromToday};
}

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todayDate: () => (/* binding */ todayDate),
/* harmony export */   todayPage: () => (/* binding */ todayPage)
/* harmony export */ });
//1. function for display of dom tree of today page
function todayPage(tasksArray, appendTask) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Today';
    taskContent.appendChild(header);
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.appendChild(taskCardSection);
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].deadlineValue == todayDate().currentDate){
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
            }
            appendTask(task);
        }
    }
}

//2. function to get todays date
function todayDate() {
    const taskContent = document.querySelector('.taskContent');
    taskContent.id = 'todayTab';
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    return { currentDate };
}

/***/ }),

/***/ "./src/delete_icon.png":
/*!*****************************!*\
  !*** ./src/delete_icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e800887c1b4b66c0f2da.png";

/***/ }),

/***/ "./src/double-tick.png":
/*!*****************************!*\
  !*** ./src/double-tick.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d78ebb97772281801cde.png";

/***/ }),

/***/ "./src/edit_icon.png":
/*!***************************!*\
  !*** ./src/edit_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae76596c032054257278.png";

/***/ }),

/***/ "./src/filled_star.png":
/*!*****************************!*\
  !*** ./src/filled_star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c80c84f87ce3a595a1d.png";

/***/ }),

/***/ "./src/star_icon.png":
/*!***************************!*\
  !*** ./src/star_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eed2d2aeb0d4a83f2f4e.png";

/***/ }),

/***/ "./src/todo.png":
/*!**********************!*\
  !*** ./src/todo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce7daa3101e8f7e539a8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/addTask.js");
/******/ 	__webpack_require__("./src/appendTask.js");
/******/ 	__webpack_require__("./src/today.js");
/******/ 	__webpack_require__("./src/checkbox.js");
/******/ 	__webpack_require__("./src/deleteTask.js");
/******/ 	__webpack_require__("./src/editTask.js");
/******/ 	__webpack_require__("./src/importantTasks.js");
/******/ 	__webpack_require__("./src/thisWeek.js");
/******/ 	__webpack_require__("./src/importantPage.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appendProject.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxX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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwZW5kUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwZW5kVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbXBvcnRhbnRQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbXBvcnRhbnRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RoaXNXZWVrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LFxuaHRtbCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiByZ2IoMjIsIDIzLCA0OCk7XG59XG5cbmhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDI0MCwgMjM2LCAyMjkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5oZWFkZXJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmJiYzQ7XG59XG5cbi5kZWZhdWx0UHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG59XG5cbi5zdWJDYXRlb2dhcnksIC5hZGRQcm9qZWN0LCAucHJvamVjdFRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5zdWJDYXRlb2dhcnk6aG92ZXIsIC5hZGRQcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGl2ZUJveCwgLnRhc2tDYXJkOmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzE2MTczMDtcbn1cblxuLnByb2plY3RzTGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnByb2plY3RzTGlzdCA+IC5oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2tDb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udGFza0NvbnRlbnQgPiAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhc2tDYXJkU2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lZGl0Qm94IHtcbiAgICBkaXNwbGF5OiBmbGV4OztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRhc2tDYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGFza0NhcmQgPiAubGVmdENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbn1cblxuLnRhc2tDYXJkID4gLnJpZ2h0Q29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uc3RhciwgLmVkaXQsIC5kZWxldGUsIC5maWxsZWRTdGFyLCAjc3RhciwgLnByb2plY3REZWxldGUge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmFkZFRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hZGRUYXNrQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnByb2plY3RTZWN0aW9uID4gLnN1YkNhdGVvZ2FyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMSA7XG59XG5cbiNwcm9qZWN0RGVsZXRlIHtcbiAgICBtaW4td2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLCAuZWRpdEZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50aXRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbn1cblxuLmxlZnRDb250ZW50ID4gLnRpdGxlQ29udGFpbmVyID4gLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgIFxufVxuXG4uZGVzY3JpcHRpb25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4ucmVtYWluaW5nQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmVtYWluaW5nQ29udGFpbmVyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtID4gLmZvcm1CdXR0b25zLCAuZWRpdEZvcm0gPiAuZm9ybUJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYWRkQnV0dG9uLCAjZWRpdEFkZEJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jY2FuY2VsQnV0dG9uLCAjZWRpdENhbmNlbEJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xufVxuXG4jcHJvamVjdFZhbHVlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbn1cblxuLnByb2plY3RGb3JtID4gLmZvcm1CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5hZGRCdXR0b25Qcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYW5jZWxCdXR0b25Qcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XG59XG5cbi5wcm9qZWN0Rm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDIyNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JB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QUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjQwLCAyMzYsIDIyOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiYmM0O1xcbn1cXG5cXG4uZGVmYXVsdFByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4uc3ViQ2F0ZW9nYXJ5LCAuYWRkUHJvamVjdCwgLnByb2plY3RUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnN1YkNhdGVvZ2FyeTpob3ZlciwgLmFkZFByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hY3RpdmVCb3gsIC50YXNrQ2FyZDpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogIzE2MTczMDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCA+IC5oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFza0NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrQ29udGVudCA+IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza0NhcmRTZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0Qm94IHtcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza0NhcmQgPiAubGVmdENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4udGFza0NhcmQgPiAucmlnaHRDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zdGFyLCAuZWRpdCwgLmRlbGV0ZSwgLmZpbGxlZFN0YXIsICNzdGFyLCAucHJvamVjdERlbGV0ZSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZFRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiA+IC5zdWJDYXRlb2dhcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxIDtcXG59XFxuXFxuI3Byb2plY3REZWxldGUge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLCAuZWRpdEZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxufVxcblxcbi5sZWZ0Q29udGVudCA+IC50aXRsZUNvbnRhaW5lciA+IC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgIFxcbn1cXG5cXG4uZGVzY3JpcHRpb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnJlbWFpbmluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmVtYWluaW5nQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtID4gLmZvcm1CdXR0b25zLCAuZWRpdEZvcm0gPiAuZm9ybUJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhZGRCdXR0b24sICNlZGl0QWRkQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsQnV0dG9uLCAjZWRpdENhbmNlbEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcXG59XFxuXFxuI3Byb2plY3RWYWx1ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xcbn1cXG5cXG4ucHJvamVjdEZvcm0gPiAuZm9ybUJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGRCdXR0b25Qcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcXG59XFxuXFxuLnByb2plY3RGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMjI1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdHNBcnJheSkge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAndGl0bGUnO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgcmVtYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVtYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWFpbmluZ0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWFkbGluZUNvbnRhaW5lcicpXG4gICAgY29uc3QgZGVhZGxpbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVhZGxpbmVMYWJlbC5odG1sRm9yID0gJ2RlYWRsaW5lJztcbiAgICBkZWFkbGluZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RlYWRsaW5lJyk7XG4gICAgZGVhZGxpbmVMYWJlbC5pbm5lclRleHQgPSAnRGVhZGxpbmU6JztcbiAgICBjb25zdCBkZWFkbGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWFkbGluZUlucHV0Lm5hbWUgPSAnZGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQuaWQgPSAnZGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkZWFkbGluZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGltcG9ydGFuY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFuY2VDb250YWluZXInKTtcbiAgICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFuY2VMYWJlbC5odG1sRm9yID0gJ2ltcG9ydGFuY2UnO1xuICAgIGltcG9ydGFuY2VMYWJlbC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlJyk7XG4gICAgaW1wb3J0YW5jZUxhYmVsLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQ6JztcbiAgICBjb25zdCBpbXBvcnRhbmNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTRUxFQ1QnKTtcbiAgICBpbXBvcnRhbmNlSW5wdXQuaWQgPSAnaW1wb3J0YW5jZSc7XG4gICAgY29uc3QgaW1wb3J0YW5jZVllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltcG9ydGFuY2VZZXMudmFsdWUgPSAneWVzJztcbiAgICBpbXBvcnRhbmNlWWVzLmlubmVyVGV4dCA9ICdZZXMnO1xuICAgIGNvbnN0IGltcG9ydGFuY2VObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltcG9ydGFuY2VOby52YWx1ZSA9ICdubyc7XG4gICAgaW1wb3J0YW5jZU5vLmlubmVyVGV4dCA9ICdObyc7XG5cbiAgICBjb25zdCB0YXNrUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSAncHJvamVjdElucHV0JztcbiAgICBwcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3Q6JztcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTRUxFQ1QnKTtcbiAgICBwcm9qZWN0SW5wdXQuaWQgPSAncHJvamVjdElucHV0JztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVmFsdWUudmFsdWUgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZTtcbiAgICAgICAgb3B0aW9uVmFsdWUuaW5uZXJUZXh0ID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25WYWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IG5vUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vUHJvamVjdC52YWx1ZSA9ICdub25lJzs7XG4gICAgbm9Qcm9qZWN0LmlubmVyVGV4dCA9ICdOb25lJ1xuICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZm9ybUJ1dHRvbnMnKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRCdXR0b24nO1xuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJ1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLmlkID0gJ2NhbmNlbEJ1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgaW1wb3J0YW5jZUlucHV0LmFwcGVuZENoaWxkKGltcG9ydGFuY2VZZXMpO1xuICAgIGltcG9ydGFuY2VJbnB1dC5hcHBlbmRDaGlsZChpbXBvcnRhbmNlTm8pO1xuXG4gICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKG5vUHJvamVjdCk7XG5cbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgcmVtYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGFpbmVyKTtcbiAgICByZW1haW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZUNvbnRhaW5lcik7XG4gICAgcmVtYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0Q29udGFpbmVyKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFkbGluZUxhYmVsKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFuY2VMYWJlbCk7XG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbmNlSW5wdXQpO1xuICAgIHRhc2tQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgdGFza1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVtYWluaW5nQ29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b25zKTtcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufSIsImltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuL2RlbGV0ZV9pY29uLnBuZyc7XG5cbi8vNy4gZnVuY3Rpb24gZm9yIGFkZGluZyBmb3JtIGF0IHNpZGViYXIgZm9yIHByb2plY3QgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0V2luZG93KCkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0xpc3QnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RWYWx1ZS5pZCA9ICdwcm9qZWN0VmFsdWUnO1xuICAgIHByb2plY3RWYWx1ZS50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3RWYWx1ZS5wbGFjZWhvbGRlciA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuICAgIHByb2plY3RWYWx1ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtQnV0dG9ucycpO1xuICAgIGNvbnN0IGFkZEJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvblByb2plY3QnKTtcbiAgICBhZGRCdXR0b25Qcm9qZWN0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRCdXR0b25Qcm9qZWN0LmlubmVyVGV4dCA9ICdBZGQnO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ1dHRvblByb2plY3QnKTtcbiAgICBjYW5jZWxCdXR0b25Qcm9qZWN0LnR5cGUgPSAnYnV0dG9uJ1xuICAgIGNhbmNlbEJ1dHRvblByb2plY3QuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b25Qcm9qZWN0KTtcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b25Qcm9qZWN0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFZhbHVlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b25zKTtcblxuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuLy84LiBmdW5jdGlvbiBmb3Igc3RvcmluZyBmb3JtUHJvamVjdCBkYXRhIGFuZCBhcHBlbmRpbmcgcHJvamVjdCB0byB0aGUgc2lkZWJhclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFNlY3Rpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFZhbHVlJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdzdWJDYXRlb2dhcnknKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3RWYWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERlbGV0ZS5pZCA9ICdwcm9qZWN0RGVsZXRlJztcbiAgICBjb25zdCBkZWxldGVfaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZV9pY29uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZV9pY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZWxldGUnKTtcblxuICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlX2ljb24pO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XG5cbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbi8vZnVuY3Rpb24gZm9yIGFwcGVuZGluZyBwcm9qZWNjdHMgb24gZmlyc3QgbG9hZC5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0T25Mb2FkKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnc3ViQ2F0ZW9nYXJ5Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERlbGV0ZS5pZCA9ICdwcm9qZWN0RGVsZXRlJztcbiAgICBjb25zdCBkZWxldGVfaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZV9pY29uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZV9pY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZWxldGUnKTtcblxuICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlX2ljb24pO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XG5cbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbi8vOS4gZnVuY3Rpb24gdG8gcmVtb3ZlIGFkZFByb2plY3Qgd2luZG93IGFmdGVyIGFwcGVuZGluZyB0aGUgcHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbn1cblxuLy8yLiBmdW5jdGlvbiB0byByZW1vdmUgYWRkUHJvamVjdFdpbmRvdyB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZFxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbEJ1dHRvblByb2plY3QoKSB7XG4gICAgY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVByb2plY3QnKTtcbiAgICAoZm9ybVByb2plY3QucGFyZW50RWxlbWVudCkucmVtb3ZlQ2hpbGQoZm9ybVByb2plY3QpO1xufVxuXG4vLzMuIGZ1bmN0aW9uIGZvciBwcm9qZWN0IGNsaWNrIGV2ZW50IGRpc3BsYXkgb2YgaW5kaXZpZHVhbCB0YWJzIG9mIHByb2plY3RzLlxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUYWIoZXZlbnQsIHByb2plY3RzQXJyYXkpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICAgICAgICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGU7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgICAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vNC4gZnVuY3Rpb24gZm9yIGFwcGVuZGluZyB0YXNrcyB3aXRoIHNhbWUgcHJvamVjdFZhbHVlIGFzIHRoZSBwcm9qZWN0VGFiXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRhc2tzKHRhc2tzQXJyYXksIGV2ZW50LCBhcHBlbmRUYXNrKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza3NBcnJheVtpXS5wcm9qZWN0VmFsdWUgPT0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dCkge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvamVjdFZhbHVlOiB0YXNrc0FycmF5W2ldLnByb2plY3RWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy81LiBmdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0IGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RzQXJyYXksIGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWRQcm9qZWN0Jyk7XG4gICAgY29uc3QgZGVsZXRlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlZFByb2plY3QnKTtcbiAgICBsZXQgZGVsZXRlZFByb2plY3RWYWx1ZSA9IChkZWxldGVkUHJvamVjdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHQpLnRvU3RyaW5nKCk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGUgPT09IGRlbGV0ZWRQcm9qZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZGVsZXRlZFByb2plY3QucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgcmVtb3ZlUHJvamVjdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZVByb2plY3QpO1xufSIsImltcG9ydCBzdGFySW1hZ2UgZnJvbSAnLi9zdGFyX2ljb24ucG5nJztcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy4vZmlsbGVkX3N0YXIucG5nJ1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2VkaXRfaWNvbi5wbmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYXJkU2VjdGlvbicpO1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZVZhbHVlID0gdGFzay5pbXBvcnRhbnRWYWx1ZTtcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgIGNvbnN0IGxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdENvbnRlbnQnKTtcbiAgICBjb25zdCByaWdodENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHRDb250ZW50Jyk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5uYW1lID0gJ2NoZWNrYm94JztcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGVWYWx1ZTtcbiAgICB0aXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uVmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kZWFkbGluZVZhbHVlO1xuICAgIGNvbnN0IHN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpZihpbXBvcnRhbmNlVmFsdWUgPT0gJ3llcycpe1xuICAgICAgICBzdGFyLnNyYyA9IGZpbGxlZFN0YXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3Rhci5zcmMgPSBzdGFySW1hZ2U7XG4gICAgfVxuICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0LnNyYyA9IGVkaXRJbWFnZTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBjb25zdCBkZWxldGVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlTG9nby5zcmMgPSBkZWxldGVJbWFnZTtcbiAgICBkZWxldGVMb2dvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZUxvZ28pO1xuXG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHJpZ2h0Q29udGVudCk7XG5cbiAgICB0YXNrQ2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xufSIsIi8vIFJlbW92ZSB0YXNrcyB3aXRoIGNoZWNrZWQgY2xhc3NcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2VkVGFzaygpIHtcbiAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrZWQnKTtcbiAgICAoY2hlY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkucmVtb3ZlQ2hpbGQoY2hlY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xufVxuXG4vLyBSZW1vdmUgdGhlIGNoZWNrZWQgdGFzayBmcm9tIGFycmF5IG9mIHRhc2tzLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tBcnJheSh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgY2hlY2tlZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2VkJyk7XG4gICAgaWYoY2hlY2tlZEJveCkge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZVRpdGxlID0gKGNoZWNrYm94Lm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0KS50b1N0cmluZygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSA9PT0gcmVtb3ZlVGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZWQnKTtcbiAgICAgICAgaWYoZGVsZXRlZFRhc2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRpdGxlID0gKGRlbGV0ZWRUYXNrLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkKS5pbm5lclRleHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSA9PT0gcmVtb3ZlVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBkZWxldGUgdGFzayBmcm9tIHRoZSBkb20gdHJlZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG4gICAgY29uc3QgZGVsZXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlZCcpO1xuICAgIChkZWxldGVkVGFzay5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChkZWxldGVkVGFzayk7XG59IiwiLy81LiBmdW5jdGlvbiB0byBhZGQgZWRpdCBib3ggdW5kZXIgdGhlIHRhc2sgZm9yIGVkaXQgY2xpY2sgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Qm94KGV2ZW50KSB7XG4gICAgY29uc3QgZWRpdEJveENvbnRhaW5lciA9ICgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpLnBhcmVudE5vZGUpLnBhcmVudE5vZGU7XG4gICAgZWRpdEJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0Qm94Jyk7XG5cbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0Rm9ybScpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXRsZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZWRpdFRpdGxlLmh0bWxGb3IgPSAnZWRpdFRpdGxlJztcbiAgICBlZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZWRpdFRpdGxlJyk7XG4gICAgZWRpdFRpdGxlLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICdlZGl0VGl0bGUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAnZWRpdFRpdGxlJztcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlZGl0RGVzY3JpcHRpb24uaHRtbEZvciA9ICdlZGl0RGVzY3JpcHRpb24nO1xuICAgIGVkaXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0RGVzY3JpcHRpb24nKTtcbiAgICBlZGl0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2VkaXREZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdlZGl0RGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgIGNvbnN0IGRlYWRsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVhZGxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVhZGxpbmVDb250YWluZXInKTtcbiAgICBjb25zdCBlZGl0RGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVkaXREZWFkbGluZS5odG1sRm9yID0gJ2VkaXREZWFkbGluZSc7XG4gICAgZWRpdERlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2VkaXREZWFkbGluZScpO1xuICAgIGVkaXREZWFkbGluZS5pbm5lclRleHQgPSAnRGVhZGxpbmU6JztcbiAgICBjb25zdCBkZWFkbGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWFkbGluZUlucHV0Lm5hbWUgPSAnZWRpdERlYWRsaW5lJztcbiAgICBkZWFkbGluZUlucHV0LmlkID0gJ2VkaXREZWFkbGluZSc7XG4gICAgZGVhZGxpbmVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRlYWRsaW5lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtQnV0dG9ucycpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlkID0gJ2VkaXRBZGRCdXR0b24nO1xuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJ1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLmlkID0gJ2VkaXRDYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdERlYWRsaW5lKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcblxuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGVhZGxpbmVJbnB1dCk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgZWRpdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG59XG5cbi8vNi4gYWRkIGVkaXRCb3ggaW5wdXQgdmFsdWVzIHRvIHRhc2suXG5leHBvcnQgZnVuY3Rpb24gZWRpdFZhbHVlKCkge1xuICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZWRpdENvbnRhaW5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRpdGxlLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IGRhdGUgPSBlZGl0Q29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZDtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUaXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZWFkbGluZScpLnZhbHVlO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVmFsdWU7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25WYWx1ZTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IGRhdGVWYWx1ZTtcbn1cblxuLy83LiBmdW5jdGlvIHRvIHJlbW92ZSBlZGl0Qm94IHdoZW4gZWRpdENhbmNlbEJ1dHRvbiBpcyBjbGlja2VkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybUJveChldmVudCkge1xuICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24ucmVtb3ZlQ2hpbGQodGFza0NhcmRTZWN0aW9uLmxhc3RDaGlsZClcbn1cblxuLy84LiBmdW5jdGlvbiB0byByZW1vdmUgcHJlIGVkaXQgdmFsdWVzIGZyb20gdGFza3NhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRDb250YWluZXInKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IGVkaXRDb250YWluZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgY29uc29sZS5sb2cocmVtb3ZlVGl0bGUuaW5uZXJUZXh0KVxuOyAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihyZW1vdmVUaXRsZS5pbm5lclRleHQgPT09IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vOS4gZnVjbnRpb24gdG8gYWRkIG5ldyB2YWx1ZXMgdG8gdGFza3NhcnJheSBhZnRlciBlZGl0QWRkQnV0dG9uIGlzIGNsaWNrZWQgXG5leHBvcnQgZnVuY3Rpb24gYWRkRWRpdFZhbHVlcyh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRlYWRsaW5lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlYWRsaW5lJykudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrID0ge3RpdGxlVmFsdWUsZGVzY3JpcHRpb25WYWx1ZSxkZWFkbGluZVZhbHVlfTtcbiAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG59IiwiLy81LiBmdW5jdGlvbiBmb3IgZGlzcGxheSBmb3IgaW1wb3J0YW50IHRhYlxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuaWQgPSAnaW1wb3J0YW50VGFiJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICBwcm9qZWN0VmFsdWU6IHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5pbXBvcnRhbnRWYWx1ZSA9PSAneWVzJykge1xuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vZG91YmxlLXRpY2sucG5nJ1xuaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXJJbWFnZSBmcm9tICcuL2ZpbGxlZF9zdGFyLnBuZyc7XG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgaW1wb3J0bnQgaWNvbiB0byBmaWxsZWQgXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3RhcigpIHtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXInKTtcbiAgICBpZihzdGFyLnNyYyA9IHN0YXJJbWFnZSkge1xuICAgICAgICBzdGFyLnNyYyA9IGZpbGxlZFN0YXJJbWFnZTtcbiAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmaWxsZWRTdGFyJyk7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcicpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gYWRkIHZhbHVlcyB0byBpbXBvcnRhbnRUYXNrcyBhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXInKTtcbiAgICBzdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGltcG9ydGFudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUgPT0gdGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSA9ICd5ZXMnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBpbXBvcnRudCBmaWxsZWQgaWNvbiB0byBub24gZmlsbGVkIGljb24gYW5kIHJlbW92ZSBpbXBvcnRhbnQgY2xhc3MgZnJvbSBwYXJlbnRzIHBhcmVudCBub2RlXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsbGVkU3RhcigpIHtcbiAgICBjb25zdCBmaWxsZWRTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGxlZFN0YXInKTtcbiAgICBmaWxsZWRTdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQnKTtcbiAgICBpZihmaWxsZWRTdGFyLnNyYyA9IGZpbGxlZFN0YXJJbWFnZSl7XG4gICAgICAgIGZpbGxlZFN0YXIuc3JjID0gc3RhckltYWdlO1xuICAgICAgICBmaWxsZWRTdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcbiAgICAgICAgZmlsbGVkU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsZWRTdGFyJyk7XG4gICAgfVxufVxuXG4vLyByZW1vdmUgdGFzayBmcm9tIGltcG9ydGFudFRhc2tBcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBpbXBvcnRhbnRUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQnKTtcbiAgICBjb25zdCByZW1vdmVJbXBvcnRhbnRUaXRsZSA9IGltcG9ydGFudFRhc2tDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihyZW1vdmVJbXBvcnRhbnRUaXRsZSA9PSB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUpIHtcbiAgICAgICAgICAgIHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUgPSAnbm8nO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0aW5nIGFzc2V0c1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL3RvZG8ucG5nJ1xuaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXJJbWFnZSBmcm9tICcuL2ZpbGxlZF9zdGFyLnBuZyc7XG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9hZGRUYXNrLmpzJztcbmltcG9ydCBhcHBlbmRUYXNrIGZyb20gJy4vYXBwZW5kVGFzay5qcyc7XG5pbXBvcnQge2NoZWNrZWRUYXNrfSBmcm9tICcuL2NoZWNrYm94LmpzJztcbmltcG9ydCB7cmVtb3ZlVGFza0FycmF5fSBmcm9tICcuL2NoZWNrYm94LmpzJztcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlVGFzay5qcyc7XG5pbXBvcnQgeyBlZGl0Qm94IH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBlZGl0VmFsdWUgfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IHJlbW92ZUZvcm1Cb3ggfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IHJlbW92ZVZhbHVlIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBhZGRFZGl0VmFsdWVzIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VTdGFyIH0gZnJvbSAnLi9pbXBvcnRhbnRUYXNrcy5qcyc7XG5pbXBvcnQgeyBhZGRJbXBvcnRhbnRUYXNrcyB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgY2hhbmdlRmlsbGVkU3RhciB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgcmVtb3ZlSW1wb3J0YW50VGFza3MgfSBmcm9tICcuL2ltcG9ydGFudFRhc2tzLmpzJztcbmltcG9ydCB7IHRvZGF5UGFnZSB9IGZyb20gJy4vdG9kYXkuanMnO1xuaW1wb3J0IHsgdG9kYXlEYXRlIH0gZnJvbSAnLi90b2RheS5qcyc7XG5pbXBvcnQgeyB0aGlzV2Vla1BhZ2UgfSBmcm9tICcuL3RoaXNXZWVrLmpzJztcbmltcG9ydCB7IG9uZVdlZWtEYXRlIH0gZnJvbSAnLi90aGlzV2Vlay5qcyc7XG5pbXBvcnQgeyBpbXBvcnRhbnRQYWdlIH0gZnJvbSAnLi9pbXBvcnRhbnRQYWdlLmpzJ1xuaW1wb3J0IHsgYWRkUHJvamVjdFdpbmRvdyB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IHJlbW92ZUFkZFByb2plY3QgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgY2FuY2VsQnV0dG9uUHJvamVjdCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0VGFiIH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGFwcGVuZFByb2plY3RUYXNrcyB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IHByb2plY3RPbkxvYWQgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuXG4vL2Fzc2lnbmluZyB2YXIgdG8gZG9tIGVsZW1lbnRzXG5jb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsVGFza3MnKTtcbmNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ2FyZFNlY3Rpb24nKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpO1xuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xubGV0IGlzRm9ybVByZXNlbnQgPSBmYWxzZTtcbmxldCBpc1Byb2plY3RGb3JtUHJlc2VudCA9IGZhbHNlO1xuXG5cbi8vaGVhZGVyIGxvZ28gaW4gaGVhZGVyIHNlY3Rpb25cbmNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuaGVhZGVyTG9nby5zcmMgPSBsb2dvSW1hZ2U7XG5cblxuLy9hcnJheSBmb3Igc3RvcmluZyBmb3JtIGRhdGFcbmxldCB0YXNrc0FycmF5ID0gW107XG5sZXQgcmV0cmlldmVkVGFza3NBcnJheSA9IFtdO1xubGV0IGFyclByb2plY3RsaXN0cyA9IFsnQWxsIFRhc2tzJywgJ1RvZGF5JywgJ1RoaXMgV2VlaycsICdJbXBvcnRhbnQnXVxubGV0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuXG4vL0VWRU5UTElTVEVORVJTOi1cbi8vMS4gY2xpY2sgbGlzdGVuZXIgZm9yIGFkZHRhc2sgZm9yIGZvcm0gaW5wdXRcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRUYXNrJykgPT09IHRydWUpIHtcbiAgICAgICAgaWYoIWlzRm9ybVByZXNlbnQpIHtcbiAgICAgICAgICAgIGFkZFRhc2socHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICBpc0Zvcm1QcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vMi4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGFkZGJ1dHRvbiBvbiBmb3JtIGZvciBhZGR0YXNrXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdhZGRCdXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xuICAgICAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBpbXBvcnRhbnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbmNlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB0YXNrID0ge3RpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGRlYWRsaW5lVmFsdWUsIGltcG9ydGFudFZhbHVlLCBwcm9qZWN0VmFsdWV9O1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgaWYoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRhc2tzQXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQgKCdQbGVhc2UgZmlsbCBhbGwgcmVxdWlyZWQgZmllbGRzIScpXG4gICAgICAgIH1cbiAgICAgICAgaXNGb3JtUHJlc2VudCA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG4vLzMuIENsaWNrIGV2ZW50IGZvciByZW1vdmUgYWRkdGFza3dpbmRvd1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSAnY2FuY2VsQnV0dG9uJykge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn0pXG5cbi8vNC4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRvZGF5IHNlY3Rpb25cbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZGF5UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKTtcbiAgICBhY3RpdmVCb3goZXZlbnQpO1xufSlcblxuLy81LiBjbGljayBldmVudCBmb3IgcmVtb3ZpbmcgdGFzayB3aXRoIGNoZWNrZWQgZGl2IGZyb20gZG9tIGFuZCB0YXNrc0FycmF5XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94JykgPT0gdHJ1ZSkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICByZW1vdmVUYXNrQXJyYXkodGFza3NBcnJheSk7XG4gICAgICAgIGNoZWNrZWRUYXNrKCk7XG4gICAgICAgIHRhc2tzTG9jYWxTdG9yYWdlKClcbiAgICB9XG59KVxuXG4vLzYuIGNsaWNrIGV2ZW50IGZvciBkZWxldGUgaWNvbiBvbiB0YXNrLlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpID09IHRydWUpIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWQnKTtcbiAgICAgICAgcmVtb3ZlVGFza0FycmF5KHRhc2tzQXJyYXkpO1xuICAgICAgICBkZWxldGVUYXNrKCk7XG4gICAgICAgIHRhc2tzTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufSlcblxuLy83LiBjbGljayBldmVudCBmb3IgZWRpdCBpY29uXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpID09PSB0cnVlKSB7XG4gICAgICAgIGlmKCFpc0Zvcm1QcmVzZW50KSB7XG4gICAgICAgICAgICBlZGl0Qm94KGV2ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgICAgICBlZGl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRDb250YWluZXInKTtcbiAgICAgICAgICAgIGlzRm9ybVByZXNlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuLy84LiBjbGljayBldmVudCBmb3IgZWRpdEJveCBhZGRCdXR0b25cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2VkaXRBZGRCdXR0b24nKSB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRGb3JtJyk7XG4gICAgICAgIGlmKGVkaXRGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgcmVtb3ZlVmFsdWUodGFza3NBcnJheSk7XG4gICAgICAgICAgICBhZGRFZGl0VmFsdWVzKHRhc2tzQXJyYXkpO1xuICAgICAgICAgICAgZWRpdFZhbHVlKCk7XG4gICAgICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgcmVtb3ZlRm9ybUJveCgpO1xuICAgICAgICAgICAgaXNGb3JtUHJlc2VudCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQgKFwiUGxlYXNlIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBkZXRhaWxzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vOS4gY2xpY2sgZXZlbnQgZm9yIGltcG9ydGFudCBpY29uIHRvIGNoYW5nZSBlbXB0eSBzdGFyIHRvIGZpbGxlZCBzdGFyIGFuZCBhZGQgdGFzayB2YWx1ZXMgdG8gaW1wb3J0YW50VGFza3MgYXJyYXkuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhcicpID09IHRydWUpIHtcbiAgICAgICAgYWRkSW1wb3J0YW50VGFza3ModGFza3NBcnJheSk7XG4gICAgICAgIGNoYW5nZVN0YXIoKTtcbiAgICAgICAgdGFza3NMb2NhbFN0b3JhZ2UoKVxuICAgIH0gZWxzZSBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWxsZWRTdGFyJykgPT0gdHJ1ZSkge1xuICAgICAgICByZW1vdmVJbXBvcnRhbnRUYXNrcyh0YXNrc0FycmF5KTtcbiAgICAgICAgY2hhbmdlRmlsbGVkU3RhcigpO1xuICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBpZih0YXNrQ29udGVudC5pZCA9PSAnaW1wb3J0YW50VGFiJyl7XG4gICAgICAgICAgICBpbXBvcnRhbnRQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2spO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8xMC4gY2xpY2sgZXZlbnQgZm9yIHRoaXMgd2VlayB0YWJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ3RoaXNXZWVrJykge1xuICAgICAgICB0aGlzV2Vla1BhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaywgdG9kYXlEYXRlKTtcbiAgICAgICAgYWN0aXZlQm94KGV2ZW50KTtcbiAgICB9XG59KVxuXG4vLzExLiBjbGljayBldmVudCBmb3IgaW1wb3RhbnQgdGFiXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzayk7XG4gICAgICAgIGFjdGl2ZUJveChldmVudCk7XG4gICAgfVxufSlcblxuLy8xMi4gY2xpY2sgZXZlbnQgZm9yIGFsbCB0YXNrcyBwYWdlXG5hbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGxUYXNrcyh0YXNrc0FycmF5KTtcbiAgICBhY3RpdmVCb3goZXZlbnQpO1xufSlcblxuLy8xMy4gZnVuY3Rpb24gZm9yIGFkZCBwcm9qZWN0IHdpbmRvdyBmb3IgdmFsdWUgaW5wdXQgZm9yIG5ldyBwcm9qZWN0XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkUHJvamVjdCcpID09PSB0cnVlKSB7XG4gICAgICAgIGlmKCFpc1Byb2plY3RGb3JtUHJlc2VudCkge1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvdygpO1xuICAgICAgICAgICAgaXNQcm9qZWN0Rm9ybVByZXNlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8xNC4gZnVuY3Rpb24gdG8gYXBwZW5kIHByb2plY3QgdG8gdGhlIHByb2plY3RMaXN0LlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZEJ1dHRvblByb2plY3QnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RWYWx1ZScpO1xuICAgICAgICBpZihwcm9qZWN0VGl0bGUudmFsdWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0ge3Byb2plY3RUaXRsZTogcHJvamVjdFRpdGxlLnZhbHVlfTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICBcbiAgICAgICAgICAgIGFwcGVuZFByb2plY3QoKTtcbiAgICAgICAgICAgIHByb2plY3RMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJlbW92ZUFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIGlzUHJvamVjdEZvcm1QcmVzZW50ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCAoJ1BsZWFzZSBmaWxsIGFsbCByZXF1aXJlZCBkZXRhaWxzLicpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8xNS4gY2xpY2sgZXZlbnQgZm9yIHdoZW4gY2FuY2VsUHJvamVjdEJ1dHRvbiBpcyBjbGlja2VkXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsQnV0dG9uUHJvamVjdCcpID09PSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZUFkZFByb2plY3QoKTtcbiAgICAgICAgaXNQcm9qZWN0Rm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICB9XG59KVxuXG4vLzE2LiBjbGljayBldmVudCB0byBkZWx0ZSBhIHByb2plY3QgZnJvbSB0aGUgbGlzdC5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0RGVsZXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0c0FycmF5LCBldmVudCk7XG4gICAgICAgIHByb2plY3RMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59KVxuXG4vLzE3LiBjbGljayBldmVudCBmb3IgcHJvamVjdCBsaXN0cyB0YWIgZm9yIHN3aXRjaGluZyBkaXNwbGF5IHRvIHJlc3BlY3RpdmUgdGFiXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdFRpdGxlJykgPT09IHRydWUpIHtcbiAgICAgICAgcHJvamVjdFRhYihldmVudCwgcHJvamVjdHNBcnJheSk7XG4gICAgICAgIGFwcGVuZFByb2plY3RUYXNrcyh0YXNrc0FycmF5LCBldmVudCwgYXBwZW5kVGFzayk7XG4gICAgICAgIGFjdGl2ZUJveFByb2plY3QoZXZlbnQpO1xuICAgIH1cbn0pXG5cbi8vMTguIEZpbmFsIGNsaWNrIGV2ZW50IGZvciB3aGVuIHRoZSBwYWdlIGxvYWRzLiBkaXNwbGF5IGFueSBleGlzdGluZyB0YXNrcyBhbmQgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZSBvbiB0aGUgc2NyZWVuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICh0YXNrc0FycmF5KSA9PiB7XG4gICAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsVGFza3MnKTtcbiAgICBhbGxUYXNrc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCb3gnKTtcbiAgICBhbGxUYXNrcyh0YXNrc0FycmF5KTtcbiAgICBvbkxvYWRUYXNrcyh0YXNrc0FycmF5KTtcblxufSlcblxuLy8xOS4gY2xpY2sgZXZlbnQgdG8gcmVtb3ZlIGVkaXRGb3JtIHdoZW4gZWRpdENhbmNlbEJ1dHRvbiBpcyBjbGlja2VkXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSAnZWRpdENhbmNlbEJ1dHRvbicpIHtcbiAgICAgICAgcmVtb3ZlRm9ybUJveChldmVudClcbiAgICB9XG59KVxuXG5cbi8vRlVOQ1RJT05TOi1cbi8vMS4gZnVuY3Rpb24gZm9yIGRpc3BsYXkgb2YgYWxsIHRhc2tzIHRhYlxuZnVuY3Rpb24gYWxsVGFza3ModGFza3NBcnJheSkge1xuICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnQWxsIFRhc2tzJztcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgIGFkZFRhc2suaW5uZXJUZXh0ID0gJysgQWRkIFRhc2snO1xuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFNlY3Rpb24pO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgfVxufVxuXG4vLzIuIGZ1bmN0aW9uIGZvciBhZGRpbmcgY3NzIHRvIGFjdGl2ZSB0YWIgb24gc2lkZWJhciBcbmZ1bmN0aW9uIGFjdGl2ZUJveChldmVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVCb3gnKVxuICAgIGlmKGFjdGl2ZUJveCAhPT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQm94Jyk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCb3gnKTtcbn1cblxuLy8zLiBmdW5jdGlvbiBmb3IgYWRkaW5nIGNzcyB0byBhY3RpdmUgdGFiIG9uIHNpZGViYXIgXG5mdW5jdGlvbiBhY3RpdmVCb3hQcm9qZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgYWN0aXZlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUJveCcpXG4gICAgaWYoYWN0aXZlQm94ICE9PSBudWxsKSB7XG4gICAgICAgIGFjdGl2ZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCb3gnKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQm94Jyk7XG59XG5cbi8vNC4gZnVuY3Rpb24gZm9yIGFjY2VzaW5nIGxvY2FsU3RvcmFnZSB0byBzdG9yZSBhcnJheXMgZm9yIGFwcGVuZGluZyB0YXNrcyB3aGVuIHBhZ2UgbG9hZHMgYW5kIGZvciBzYXZpbmcgdGFza3Mgd2hlbiBuZXcgdGFza3MgYXJlIGFkZGVkIHRvIHRoZSBhcnJheS4gYXMgd2VsbCBhcyBmb3Igc3RvcmluZyBwcm9qZWN0cy5cbmZ1bmN0aW9uIHRhc2tzTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc0FycicsIEpTT04uc3RyaW5naWZ5KHRhc2tzQXJyYXkpKTtcbn1cblxuLy81LiBmdW5jdGlvbiBmb3IgcHJvamVjdCBzdG9yYWdlXG5mdW5jdGlvbiBwcm9qZWN0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpXG59XG5cbi8vNi4gZnVuY3Rpb24gdG8gcmV0cmlldmUgdGFza3MgZnJvbSBzdG9yYWdlXG5mdW5jdGlvbiBvbkxvYWRUYXNrcygpIHtcbiAgICB0YXNrc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NBcnInKSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgfVxuXG4gICAgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnInKSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGU6IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE9uTG9hZChwcm9qZWN0KTtcbiAgICB9XG59IiwiLy8zLiBmdW5jdGlvbiBmb3IgdGhpc1dlZWtQYWdlIGRvbSB0cmVlIGRpc3BsYXlcbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla1BhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaywgdG9kYXlEYXRlKSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RoaXMgV2Vlayc7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICB0YXNrQ29udGVudC5pZCA9ICd0aGlzV2Vla1RhYic7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUgPD0gb25lV2Vla0RhdGUoKS5vbmVXZWVrRnJvbVRvZGF5ICYmIHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSA+PSB0b2RheURhdGUoKS5jdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzQuIGZ1bmN0aW9uIHRvIGdldCBhIGRhdGUgb25lIHdlZWsgZnJvbSBub3dcbmV4cG9ydCBmdW5jdGlvbiBvbmVXZWVrRGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgKyA3KTtcblxuICAgIGxldCBkYXkgPSAoZGF0ZS5nZXREYXRlKCkpID49IDEwID8gKGRhdGUuZ2V0RGF0ZSgpKSA6IFwiMFwiICsgKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkgPj0gMTAgPyAoZGF0ZS5nZXRNb250aCgpICsgMSkgOiBcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBvbmVXZWVrRnJvbVRvZGF5ID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICByZXR1cm4ge29uZVdlZWtGcm9tVG9kYXl9O1xufSIsIi8vMS4gZnVuY3Rpb24gZm9yIGRpc3BsYXkgb2YgZG9tIHRyZWUgb2YgdG9kYXkgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdUb2RheSc7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUgPT0gdG9kYXlEYXRlKCkuY3VycmVudERhdGUpe1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzIuIGZ1bmN0aW9uIHRvIGdldCB0b2RheXMgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5RGF0ZSgpIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIHRhc2tDb250ZW50LmlkID0gJ3RvZGF5VGFiJztcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIHsgY3VycmVudERhdGUgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hZGRUYXNrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcGVuZFRhc2suanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kYXkuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY2hlY2tib3guanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGVsZXRlVGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9lZGl0VGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbXBvcnRhbnRUYXNrcy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90aGlzV2Vlay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbXBvcnRhbnRQYWdlLmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwZW5kUHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==