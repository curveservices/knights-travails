/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChessBoard: () => (/* binding */ createChessBoard),\n/* harmony export */   displayKnightPath: () => (/* binding */ displayKnightPath)\n/* harmony export */ });\n    //Put together a script that creates a game board and a knight.\n    const chessboard = document.getElementById('chessboard');\n    //function to create the chessboard\n   function createChessBoard() {\n        \n        for (let row = 0; row < 8; row++) {\n            for (let col = 0; col < 8; col++) {\n                const square = document.createElement('div');\n                if ((row + col) % 2 === 0) {\n                    square.classList.add('white')\n                } else {\n                    square.classList.add('black')\n                }\n                square.classList.add('square');\n                square.textContent = `[${row},${col}]`;\n                chessboard.appendChild(square)\n            }\n        }\n    }\n    //helper function to display knights path. displayKnightPath()\n    function displayKnightPath(path) {\n        for (let [row,col] of path) {\n            const squareIndex = row * 8 + col;\n            const square = chessboard.childNodes([squareIndex]);\n            square.classList.add('knight')\n        }\n    }\n\n//# sourceURL=webpack://knights-travails/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _knight_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight-move */ \"./src/knight-move.js\");\n/* harmony import */ var _knight_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_knight_move__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createChessBoard)();\n\nconsole.log('hello world');\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knight-move.js":
/*!****************************!*\
  !*** ./src/knight-move.js ***!
  \****************************/
/***/ (() => {

eval("//function to find knights moves using BFS\nfunction knightsMoves(start, end) {\n    const moves = [\n        [2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]\n    ];\n\n    const visited = new Set();\n    const queue = [[start]];\n\n    while (queue.length > 0) {\n        const path = queue.shift();\n        const currPosition = path[path.lenght - 1];\n\n        if (currPosition[0] === end[0] && currPosition[1] === end[1]) {\n            return path;\n        }\n        if (!visited.has(currPosition.toSring())) {\n            visited.add(currPosition.toSring());\n\n            for (const move of moves) {\n                const newRow = currPosition[0] + move[0];\n                const newCol  = currPosition[1] + move[1];\n\n                if (newRow > 0 && newRow < 8 && newCol >= 0 && newCol < 8) {\n                    const newPath = [...path, [newRow, newCol]];\n                    queue.push(newPath)\n                }\n                \n            }\n        }    \n    }\n    return []\n};\n\n\n//# sourceURL=webpack://knights-travails/./src/knight-move.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;