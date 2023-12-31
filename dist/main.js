/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/dom.js":
      /*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChessBoard: () => (/* binding */ createChessBoard),\n/* harmony export */   displayKnightPath: () => (/* binding */ displayKnightPath)\n/* harmony export */ });\n//Put together a script that creates a game board and a knight.\n//function to create the chessboard\nfunction createChessBoard() {\n  const chessboard = document.getElementById("chessboard");\n  for (let row = 0; row < 8; row++) {\n    for (let col = 0; col < 8; col++) {\n      const square = document.createElement("div");\n      if ((row + col) % 2 === 0) {\n        square.classList.add("white");\n      } else {\n        square.classList.add("black");\n      }\n      square.classList.add("square");\n      square.textContent = `[${row},${col}]`;\n      chessboard.appendChild(square);\n    }\n  }\n}\n//helper function to display knights path. displayKnightPath()\nfunction displayKnightPath(path) {\n  const chessboard = document.getElementById("chessboard");\n  // Add the knight class to squares in the path\n  for (const [row, col] of path) {\n    const squareIndex = row * 8 + col;\n    const square = chessboard.childNodes[squareIndex];\n    square.classList.add("knight");\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/dom.js?',
        );

        /***/
      },

    /***/ "./src/handle.js":
      /*!***********************!*\
  !*** ./src/handle.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleText: () => (/* binding */ handleText)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");\n/* harmony import */ var _knight_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight-move */ "./src/knight-move.js");\n\n\n\nconst start = [0, 0];\nconst end = [7, 7];\nconst path = (0,_knight_move__WEBPACK_IMPORTED_MODULE_1__.knightMoves)(start, end);\n\nfunction handleText() {\n  const displayMoves = document.getElementById("moves");\n  if (path.length > 0) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayKnightPath)(path);\n    displayMoves.textContent = `Knight made it in ${\n      path.length - 1\n    } moves! Here\'s the path:\\n${path.map((pos) => `[${pos}]`).join("\\n")}`;\n  } else {\n    alert("No valid path found.");\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/handle.js?',
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");\n/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle */ "./src/handle.js");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createChessBoard)();\n(0,_handle__WEBPACK_IMPORTED_MODULE_1__.handleText)();\n\n//# sourceURL=webpack://knights-travails/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/knight-move.js":
      /*!****************************!*\
  !*** ./src/knight-move.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knightMoves: () => (/* binding */ knightMoves)\n/* harmony export */ });\n//function to find knights moves using BFS\nfunction knightMoves(start, end) {\nconst moves = [\n  [2, 1],\n  [2, -1],\n  [-2, 1],\n  [-2, -1],\n  [1, 2],\n  [1, -2],\n  [-1, 2],\n  [-1, -2],\n];\n\nconst visited = new Set();\nconst queue = [[start]];\n\nwhile (queue.length > 0) {\n  const path = queue.shift();\n  const currentPosition = path[path.length - 1];\n\n  if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {\n    return path;\n  }\n  if (!visited.has(currentPosition.toString())) {\n    visited.add(currentPosition.toString());\n    for (const move of moves) {\n      const newRow = currentPosition[0] + move[0];\n      const newCol = currentPosition[1] + move[1];\n\n      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {\n        const newPath = [...path, [newRow, newCol]];\n        queue.push(newPath);\n      }\n    }\n  }\n}\n\nreturn [];\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/knight-move.js?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
