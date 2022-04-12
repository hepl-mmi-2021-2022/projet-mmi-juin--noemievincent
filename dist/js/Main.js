/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Animation.ts":
/*!*****************************!*\
  !*** ./src/ts/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvasElement, ctx, canvas) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.sprite = this.canvas.sprite;\n    this.neckPieces = this.canvas.neckPieces;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.canvas.draw();\n    this.neckPieces.forEach(function (neckPiece) {\n      neckPiece.update();\n    });\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7QUFPSSxxQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQTJGO0FBQ3ZGLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtELE1BQUwsQ0FBWUMsTUFBMUI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtGLE1BQUwsQ0FBWUUsVUFBOUI7QUFDQSxTQUFLQyxPQUFMO0FBQ0g7O0FBRURDO0FBQUE7O0FBQ0ksU0FBS0wsR0FBTCxDQUFTTSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtQLGFBQUwsQ0FBbUJRLEtBQTVDLEVBQW1ELEtBQUtSLGFBQUwsQ0FBbUJTLE1BQXRFO0FBQ0EsU0FBS1AsTUFBTCxDQUFZUSxJQUFaO0FBQ0EsU0FBS04sVUFBTCxDQUFnQk8sT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFzQjtBQUMxQ0EsZUFBUyxDQUFDQyxNQUFWO0FBQ0gsS0FGRDtBQUdBQyxVQUFNLENBQUNDLHFCQUFQLENBQTZCO0FBQ3pCQyxXQUFJLENBQUNYLE9BQUw7QUFDSCxLQUZEO0FBR0gsR0FURDs7QUFVSjtBQUFDLENBMUJEOztBQUFhWSxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0FuaW1hdGlvbi50cz85MWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmVja1BpZWNlc30gZnJvbSBcIi4vTmVja1BpZWNlc1wiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGNhbnZhczogQ2FudmFzO1xuICAgIHByaXZhdGUgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgbmVja1BpZWNlczogTmVja1BpZWNlc1tdO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IENhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5jYW52YXMuc3ByaXRlO1xuICAgICAgICB0aGlzLm5lY2tQaWVjZXMgPSB0aGlzLmNhbnZhcy5uZWNrUGllY2VzO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhdygpO1xuICAgICAgICB0aGlzLm5lY2tQaWVjZXMuZm9yRWFjaCgobmVja1BpZWNlOiBOZWNrUGllY2VzKSA9PiB7XG4gICAgICAgICAgICBuZWNrUGllY2UudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4IiwiY2FudmFzIiwic3ByaXRlIiwibmVja1BpZWNlcyIsImFuaW1hdGUiLCJBbmltYXRpb24iLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJmb3JFYWNoIiwibmVja1BpZWNlIiwidXBkYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Body_1 = __webpack_require__(/*! ./Dino/Body */ \"./src/ts/Dino/Body.ts\");\n\nvar Head_1 = __webpack_require__(/*! ./Dino/Head */ \"./src/ts/Dino/Head.ts\");\n\nvar Neck_1 = __webpack_require__(/*! ./Dino/Neck */ \"./src/ts/Dino/Neck.ts\");\n\nvar NeckPieces_1 = __webpack_require__(/*! ./NeckPieces */ \"./src/ts/NeckPieces.ts\");\n\nvar Canvas = function () {\n  function Canvas(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = 'src/img/sprite.png';\n    this.limitLinePosition = {\n      x: settings_1.settings.limitLine.startPosition,\n      y: this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio\n    };\n    this.neckPieces = [];\n\n    for (var i = 0; i < settings_1.settings.neckPieces.maxCount; i++) {\n      this.neckPieces.push(new NeckPieces_1.NeckPieces(this.canvasElement, this.ctx, this.sprite));\n    }\n\n    this.draw();\n  }\n\n  Canvas.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.strokeStyle = settings_1.settings.limitLine.color;\n    this.ctx.setLineDash([settings_1.settings.limitLine.dashLength, settings_1.settings.limitLine.dashGap]);\n    this.ctx.moveTo(this.limitLinePosition.x, this.limitLinePosition.y);\n    this.ctx.lineTo(this.canvasElement.width - this.limitLinePosition.x, this.limitLinePosition.y);\n    this.ctx.stroke();\n    this.neck = new Neck_1.Neck(this.canvasElement, this.ctx, this.sprite);\n    this.body = new Body_1.Body(this.canvasElement, this.ctx, this.sprite);\n    this.head = new Head_1.Head(this.canvasElement, this.ctx, this.sprite);\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFVSSxrQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBMkU7QUFDdkUsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCLG9CQUFsQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCO0FBQ3JCQyxPQUFDLEVBQUVDLG9CQUFTQyxTQUFULENBQW1CQyxhQUREO0FBRXJCQyxPQUFDLEVBQUUsS0FBS1YsYUFBTCxDQUFtQlcsTUFBbkIsR0FBNkIsS0FBS1gsYUFBTCxDQUFtQlcsTUFBbkIsR0FBNEJKLG9CQUFTQyxTQUFULENBQW1CSTtBQUYxRCxLQUF6QjtBQUlBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxvQkFBU00sVUFBVCxDQUFvQkUsUUFBeEMsRUFBa0RELENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsV0FBS0QsVUFBTCxDQUFnQkcsSUFBaEIsQ0FBcUIsSUFBSUMsdUJBQUosQ0FBZSxLQUFLakIsYUFBcEIsRUFBbUMsS0FBS0MsR0FBeEMsRUFBNkMsS0FBS0MsTUFBbEQsQ0FBckI7QUFDSDs7QUFDRCxTQUFLZ0IsSUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtsQixHQUFMLENBQVNtQixTQUFUO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFdBQVQsR0FBdUJkLG9CQUFTQyxTQUFULENBQW1CYyxLQUExQztBQUNBLFNBQUtyQixHQUFMLENBQVNzQixXQUFULENBQXFCLENBQUNoQixvQkFBU0MsU0FBVCxDQUFtQmdCLFVBQXBCLEVBQWdDakIsb0JBQVNDLFNBQVQsQ0FBbUJpQixPQUFuRCxDQUFyQjtBQUNBLFNBQUt4QixHQUFMLENBQVN5QixNQUFULENBQWdCLEtBQUtyQixpQkFBTCxDQUF1QkMsQ0FBdkMsRUFBMEMsS0FBS0QsaUJBQUwsQ0FBdUJLLENBQWpFO0FBQ0EsU0FBS1QsR0FBTCxDQUFTMEIsTUFBVCxDQUFnQixLQUFLM0IsYUFBTCxDQUFtQjRCLEtBQW5CLEdBQTJCLEtBQUt2QixpQkFBTCxDQUF1QkMsQ0FBbEUsRUFBcUUsS0FBS0QsaUJBQUwsQ0FBdUJLLENBQTVGO0FBQ0EsU0FBS1QsR0FBTCxDQUFTNEIsTUFBVDtBQUVBLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxXQUFKLENBQVMsS0FBSy9CLGFBQWQsRUFBNkIsS0FBS0MsR0FBbEMsRUFBdUMsS0FBS0MsTUFBNUMsQ0FBWjtBQUNBLFNBQUs4QixJQUFMLEdBQVksSUFBSUMsV0FBSixDQUFTLEtBQUtqQyxhQUFkLEVBQTZCLEtBQUtDLEdBQWxDLEVBQXVDLEtBQUtDLE1BQTVDLENBQVo7QUFDQSxTQUFLZ0MsSUFBTCxHQUFZLElBQUlDLFdBQUosQ0FBUyxLQUFLbkMsYUFBZCxFQUE2QixLQUFLQyxHQUFsQyxFQUF1QyxLQUFLQyxNQUE1QyxDQUFaO0FBQ0gsR0FYRDs7QUFZSjtBQUFDLENBdENEOztBQUFha0MsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge0JvZHl9IGZyb20gXCIuL0Rpbm8vQm9keVwiO1xuaW1wb3J0IHtIZWFkfSBmcm9tIFwiLi9EaW5vL0hlYWRcIjtcbmltcG9ydCB7TmVja30gZnJvbSBcIi4vRGluby9OZWNrXCI7XG5pbXBvcnQge05lY2tQaWVjZXN9IGZyb20gXCIuL05lY2tQaWVjZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgbGltaXRMaW5lUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgICBwdWJsaWMgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHB1YmxpYyBib2R5OiBCb2R5O1xuICAgIHB1YmxpYyBoZWFkOiBIZWFkO1xuICAgIHB1YmxpYyBuZWNrOiBOZWNrO1xuICAgIHB1YmxpYyBuZWNrUGllY2VzOiBOZWNrUGllY2VzW107XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9ICdzcmMvaW1nL3Nwcml0ZS5wbmcnO1xuICAgICAgICB0aGlzLmxpbWl0TGluZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogc2V0dGluZ3MubGltaXRMaW5lLnN0YXJ0UG9zaXRpb24sXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gKHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgKiBzZXR0aW5ncy5saW1pdExpbmUueVJhdGlvKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5lY2tQaWVjZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5uZWNrUGllY2VzLm1heENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubmVja1BpZWNlcy5wdXNoKG5ldyBOZWNrUGllY2VzKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgsIHRoaXMuc3ByaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gc2V0dGluZ3MubGltaXRMaW5lLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5zZXRMaW5lRGFzaChbc2V0dGluZ3MubGltaXRMaW5lLmRhc2hMZW5ndGgsIHNldHRpbmdzLmxpbWl0TGluZS5kYXNoR2FwXSk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmxpbWl0TGluZVBvc2l0aW9uLngsIHRoaXMubGltaXRMaW5lUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggLSB0aGlzLmxpbWl0TGluZVBvc2l0aW9uLngsIHRoaXMubGltaXRMaW5lUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMubmVjayA9IG5ldyBOZWNrKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgsIHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEJvZHkodGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgSGVhZCh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4LCB0aGlzLnNwcml0ZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJsaW1pdExpbmVQb3NpdGlvbiIsIngiLCJzZXR0aW5nc18xIiwibGltaXRMaW5lIiwic3RhcnRQb3NpdGlvbiIsInkiLCJoZWlnaHQiLCJ5UmF0aW8iLCJuZWNrUGllY2VzIiwiaSIsIm1heENvdW50IiwicHVzaCIsIk5lY2tQaWVjZXNfMSIsImRyYXciLCJDYW52YXMiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImNvbG9yIiwic2V0TGluZURhc2giLCJkYXNoTGVuZ3RoIiwiZGFzaEdhcCIsIm1vdmVUbyIsImxpbmVUbyIsIndpZHRoIiwic3Ryb2tlIiwibmVjayIsIk5lY2tfMSIsImJvZHkiLCJCb2R5XzEiLCJoZWFkIiwiSGVhZF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Body.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Body.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Body = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Body = function () {\n  function Body(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.dino.body.width;\n    this.height = settings_1.settings.dino.body.height;\n    this.x = this.canvasElement.width / 2;\n    this.y = this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio - 6;\n    this.draw();\n  }\n\n  Body.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.ctx.drawImage(this.sprite, settings_1.settings.dino.body.sx, settings_1.settings.dino.body.sy, this.width, this.height, 0, 0, this.width, this.height);\n    this.ctx.restore();\n  };\n\n  return Body;\n}();\n\nexports.Body = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9Cb2R5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CSCxLQUFoQztBQUNBLFNBQUtJLE1BQUwsR0FBY0gsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsTUFBakM7QUFDQSxTQUFLQyxDQUFMLEdBQVMsS0FBS1IsYUFBTCxDQUFtQkcsS0FBbkIsR0FBMkIsQ0FBcEM7QUFDQSxTQUFLTSxDQUFMLEdBQVMsS0FBS1QsYUFBTCxDQUFtQk8sTUFBbkIsR0FBNkIsS0FBS1AsYUFBTCxDQUFtQk8sTUFBbkIsR0FBNEJILG9CQUFTTSxTQUFULENBQW1CQyxNQUE1RSxHQUFzRixDQUEvRjtBQUNBLFNBQUtDLElBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLWixHQUFMLENBQVNhLElBQVQ7QUFDQSxTQUFLYixHQUFMLENBQVNjLFNBQVQsQ0FBbUIsS0FBS1AsQ0FBeEIsRUFBMkIsS0FBS0MsQ0FBaEM7QUFDQSxTQUFLUixHQUFMLENBQVNlLFNBQVQsQ0FDSSxLQUFLZCxNQURULEVBRUlFLG9CQUFTQyxJQUFULENBQWNDLElBQWQsQ0FBbUJXLEVBRnZCLEVBR0liLG9CQUFTQyxJQUFULENBQWNDLElBQWQsQ0FBbUJZLEVBSHZCLEVBSUksS0FBS2YsS0FKVCxFQUtJLEtBQUtJLE1BTFQsRUFNSSxDQU5KLEVBT0ksQ0FQSixFQVFJLEtBQUtKLEtBUlQsRUFTSSxLQUFLSSxNQVRUO0FBV0EsU0FBS04sR0FBTCxDQUFTa0IsT0FBVDtBQUNILEdBZkQ7O0FBZ0JKO0FBQUMsQ0FwQ0Q7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL0JvZHkudHM/NTJiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEJvZHkge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MuZGluby5ib2R5LndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLmRpbm8uYm9keS5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLSAodGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAqIHNldHRpbmdzLmxpbWl0TGluZS55UmF0aW8pIC0gNjtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIHNldHRpbmdzLmRpbm8uYm9keS5zeCxcbiAgICAgICAgICAgIHNldHRpbmdzLmRpbm8uYm9keS5zeSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiZGlubyIsImJvZHkiLCJoZWlnaHQiLCJ4IiwieSIsImxpbWl0TGluZSIsInlSYXRpbyIsImRyYXciLCJCb2R5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsImRyYXdJbWFnZSIsInN4Iiwic3kiLCJyZXN0b3JlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Dino/Body.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Head.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Head.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Head = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Head = function () {\n  function Head(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.dino.head.width;\n    this.height = settings_1.settings.dino.head.height;\n    this.x = this.canvasElement.width / 2 - this.width / 3;\n    this.y = this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio - this.height / 2 - settings_1.settings.neckPieces.height;\n    this.draw();\n  }\n\n  Head.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.ctx.drawImage(this.sprite, settings_1.settings.dino.head.sx, settings_1.settings.dino.head.sy, this.width, this.height, 0, 0, this.width, this.height);\n    this.ctx.restore();\n  };\n\n  return Head;\n}();\n\nexports.Head = Head;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9IZWFkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CSCxLQUFoQztBQUNBLFNBQUtJLE1BQUwsR0FBY0gsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsTUFBakM7QUFDQSxTQUFLQyxDQUFMLEdBQVMsS0FBS1IsYUFBTCxDQUFtQkcsS0FBbkIsR0FBMkIsQ0FBM0IsR0FBK0IsS0FBS0EsS0FBTCxHQUFhLENBQXJEO0FBQ0EsU0FBS00sQ0FBTCxHQUFTLEtBQUtULGFBQUwsQ0FBbUJPLE1BQW5CLEdBQTZCLEtBQUtQLGFBQUwsQ0FBbUJPLE1BQW5CLEdBQTRCSCxvQkFBU00sU0FBVCxDQUFtQkMsTUFBNUUsR0FBc0YsS0FBS0osTUFBTCxHQUFZLENBQWxHLEdBQXNHSCxvQkFBU1EsVUFBVCxDQUFvQkwsTUFBbkk7QUFDQSxTQUFLTSxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS2IsR0FBTCxDQUFTYyxJQUFUO0FBQ0EsU0FBS2QsR0FBTCxDQUFTZSxTQUFULENBQW1CLEtBQUtSLENBQXhCLEVBQTJCLEtBQUtDLENBQWhDO0FBQ0EsU0FBS1IsR0FBTCxDQUFTZ0IsU0FBVCxDQUNJLEtBQUtmLE1BRFQsRUFFSUUsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQlksRUFGdkIsRUFHSWQsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQmEsRUFIdkIsRUFJSSxLQUFLaEIsS0FKVCxFQUtJLEtBQUtJLE1BTFQsRUFNSSxDQU5KLEVBT0ksQ0FQSixFQVFJLEtBQUtKLEtBUlQsRUFTSSxLQUFLSSxNQVRUO0FBV0EsU0FBS04sR0FBTCxDQUFTbUIsT0FBVDtBQUNILEdBZkQ7O0FBZ0JKO0FBQUMsQ0FwQ0Q7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL0hlYWQudHM/YjQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MuZGluby5oZWFkLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLmRpbm8uaGVhZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAtICh0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ICogc2V0dGluZ3MubGltaXRMaW5lLnlSYXRpbykgLSB0aGlzLmhlaWdodC8yIC0gc2V0dGluZ3MubmVja1BpZWNlcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmhlYWQuc3gsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmhlYWQuc3ksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIndpZHRoIiwic2V0dGluZ3NfMSIsImRpbm8iLCJoZWFkIiwiaGVpZ2h0IiwieCIsInkiLCJsaW1pdExpbmUiLCJ5UmF0aW8iLCJuZWNrUGllY2VzIiwiZHJhdyIsIkhlYWQiLCJzYXZlIiwidHJhbnNsYXRlIiwiZHJhd0ltYWdlIiwic3giLCJzeSIsInJlc3RvcmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Dino/Head.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Neck.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Neck.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Neck = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Neck = function () {\n  function Neck(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.neckPieces.width;\n    this.height = settings_1.settings.neckPieces.height;\n    this.x = this.canvasElement.width / 2 + settings_1.settings.neckPieces.sx;\n    this.y = this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio - this.height;\n    this.draw();\n  }\n\n  Neck.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.ctx.drawImage(this.sprite, settings_1.settings.neckPieces.sx, settings_1.settings.neckPieces.sy, this.width, this.height, 0, 0, this.width, this.height);\n    this.ctx.restore();\n  };\n\n  return Neck;\n}();\n\nexports.Neck = Neck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9OZWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsVUFBVCxDQUFvQkYsS0FBakM7QUFDQSxTQUFLRyxNQUFMLEdBQWNGLG9CQUFTQyxVQUFULENBQW9CQyxNQUFsQztBQUNBLFNBQUtDLENBQUwsR0FBUyxLQUFLUCxhQUFMLENBQW1CRyxLQUFuQixHQUEyQixDQUEzQixHQUErQkMsb0JBQVNDLFVBQVQsQ0FBb0JHLEVBQTVEO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEtBQUtULGFBQUwsQ0FBbUJNLE1BQW5CLEdBQTZCLEtBQUtOLGFBQUwsQ0FBbUJNLE1BQW5CLEdBQTRCRixvQkFBU00sU0FBVCxDQUFtQkMsTUFBNUUsR0FBc0YsS0FBS0wsTUFBcEc7QUFDQSxTQUFLTSxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS1osR0FBTCxDQUFTYSxJQUFUO0FBQ0EsU0FBS2IsR0FBTCxDQUFTYyxTQUFULENBQW1CLEtBQUtSLENBQXhCLEVBQTJCLEtBQUtFLENBQWhDO0FBQ0EsU0FBS1IsR0FBTCxDQUFTZSxTQUFULENBQ0ksS0FBS2QsTUFEVCxFQUVJRSxvQkFBU0MsVUFBVCxDQUFvQkcsRUFGeEIsRUFHSUosb0JBQVNDLFVBQVQsQ0FBb0JZLEVBSHhCLEVBSUksS0FBS2QsS0FKVCxFQUtJLEtBQUtHLE1BTFQsRUFNSSxDQU5KLEVBT0ksQ0FQSixFQVFJLEtBQUtILEtBUlQsRUFTSSxLQUFLRyxNQVRUO0FBV0EsU0FBS0wsR0FBTCxDQUFTaUIsT0FBVDtBQUNILEdBZkQ7O0FBZ0JKO0FBQUMsQ0FwQ0Q7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL05lY2sudHM/NDk3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIE5lY2sge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MubmVja1BpZWNlcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5uZWNrUGllY2VzLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXNFbGVtZW50LndpZHRoIC8gMiArIHNldHRpbmdzLm5lY2tQaWVjZXMuc3g7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLSAodGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAqIHNldHRpbmdzLmxpbWl0TGluZS55UmF0aW8pIC0gdGhpcy5oZWlnaHQgO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgc2V0dGluZ3MubmVja1BpZWNlcy5zeCxcbiAgICAgICAgICAgIHNldHRpbmdzLm5lY2tQaWVjZXMuc3ksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIndpZHRoIiwic2V0dGluZ3NfMSIsIm5lY2tQaWVjZXMiLCJoZWlnaHQiLCJ4Iiwic3giLCJ5IiwibGltaXRMaW5lIiwieVJhdGlvIiwiZHJhdyIsIk5lY2siLCJzYXZlIiwidHJhbnNsYXRlIiwiZHJhd0ltYWdlIiwic3kiLCJyZXN0b3JlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Dino/Neck.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/ts/Animation.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.canvas = new Canvas_1.Canvas(this.canvasElement, this.ctx);\n    this.animation = new Animation_1.Animation(this.canvasElement, this.ctx, this.canvas);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7O0FBRUE7QUFPSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGVBQUosQ0FBVyxLQUFLTixhQUFoQixFQUErQixLQUFLRyxHQUFwQyxDQUFkO0FBQ0EsU0FBS0ksU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjLEtBQUtSLGFBQW5CLEVBQWtDLEtBQUtHLEdBQXZDLEVBQTRDLEtBQUtFLE1BQWpELENBQWpCO0FBRUg7O0FBQ0w7QUFBQyxDQWREOztBQWdCQSxJQUFJSSxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuL0FuaW1hdGlvblwiO1xuaW1wb3J0IHtHYW1lQ29udHJvbGxlcn0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcblxuY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBDYW52YXM7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhbmltYXRpb246IEFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGdhbWU6IEdhbWVDb250cm9sbGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIodGhpcy5hbmltYXRpb24pO1xuICAgIH1cbn1cblxubmV3IE1haW4oKTtcbiJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXMiLCJDYW52YXNfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbl8xIiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/NeckPieces.ts":
/*!******************************!*\
  !*** ./src/ts/NeckPieces.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.NeckPieces = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar math_1 = __webpack_require__(/*! ./helpers/math */ \"./src/ts/helpers/math.ts\");\n\nvar NeckPieces = function () {\n  function NeckPieces(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.neckPieces.width;\n    this.height = settings_1.settings.neckPieces.height;\n    this.speed = settings_1.settings.neckPieces.speed;\n    this.x = (0, math_1.random)(settings_1.settings.neckPieces.x.min, settings_1.settings.neckPieces.x.max) - this.width;\n    this.y = (0, math_1.random)(-this.height / 2, -canvasElement.height);\n    this.draw();\n  }\n\n  NeckPieces.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.neckPieces.sx, settings_1.settings.neckPieces.sy, this.width, this.height, this.x, this.y, this.width, this.height);\n  };\n\n  NeckPieces.prototype.update = function () {\n    this.y += this.speed;\n    this.draw();\n  };\n\n  return NeckPieces;\n}();\n\nexports.NeckPieces = NeckPieces;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTmVja1BpZWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUVBO0FBVUksc0JBQVlBLGFBQVosRUFBOENDLEdBQTlDLEVBQTZFQyxNQUE3RSxFQUFxRztBQUNqRyxTQUFLRixhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUMsb0JBQVNDLFVBQVQsQ0FBb0JGLEtBQWpDO0FBQ0EsU0FBS0csTUFBTCxHQUFjRixvQkFBU0MsVUFBVCxDQUFvQkMsTUFBbEM7QUFDQSxTQUFLQyxLQUFMLEdBQWFILG9CQUFTQyxVQUFULENBQW9CRSxLQUFqQztBQUNBLFNBQUtDLENBQUwsR0FBUyxtQkFBT0osb0JBQVNDLFVBQVQsQ0FBb0JHLENBQXBCLENBQXNCQyxHQUE3QixFQUFrQ0wsb0JBQVNDLFVBQVQsQ0FBb0JHLENBQXBCLENBQXNCRSxHQUF4RCxJQUErRCxLQUFLUCxLQUE3RTtBQUNBLFNBQUtRLENBQUwsR0FBUyxtQkFBTyxDQUFDLEtBQUtMLE1BQU4sR0FBYSxDQUFwQixFQUF1QixDQUFDTixhQUFhLENBQUNNLE1BQXRDLENBQVQ7QUFDQSxTQUFLTSxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS1osR0FBTCxDQUFTYSxTQUFULENBQ0ksS0FBS1osTUFEVCxFQUVJRSxvQkFBU0MsVUFBVCxDQUFvQlUsRUFGeEIsRUFHSVgsb0JBQVNDLFVBQVQsQ0FBb0JXLEVBSHhCLEVBSUksS0FBS2IsS0FKVCxFQUtJLEtBQUtHLE1BTFQsRUFNSSxLQUFLRSxDQU5ULEVBT0ksS0FBS0csQ0FQVCxFQVFJLEtBQUtSLEtBUlQsRUFTSSxLQUFLRyxNQVRUO0FBV0gsR0FaRDs7QUFjQU87QUFDSSxTQUFLRixDQUFMLElBQVUsS0FBS0osS0FBZjtBQUNBLFNBQUtLLElBQUw7QUFDSCxHQUhEOztBQUlKO0FBQUMsQ0F4Q0Q7O0FBQWFLLGtCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTmVja1BpZWNlcy50cz8wY2FhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVycy9tYXRoXCI7XG5cbmV4cG9ydCBjbGFzcyBOZWNrUGllY2VzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MubmVja1BpZWNlcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5uZWNrUGllY2VzLmhlaWdodDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNldHRpbmdzLm5lY2tQaWVjZXMuc3BlZWQ7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShzZXR0aW5ncy5uZWNrUGllY2VzLngubWluLCBzZXR0aW5ncy5uZWNrUGllY2VzLngubWF4KSAtIHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbSgtdGhpcy5oZWlnaHQvMiwgLWNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXG4gICAgICAgICAgICBzZXR0aW5ncy5uZWNrUGllY2VzLnN4LFxuICAgICAgICAgICAgc2V0dGluZ3MubmVja1BpZWNlcy5zeSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICAgIHRoaXMueSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJzcHJpdGUiLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJuZWNrUGllY2VzIiwiaGVpZ2h0Iiwic3BlZWQiLCJ4IiwibWluIiwibWF4IiwieSIsImRyYXciLCJOZWNrUGllY2VzIiwiZHJhd0ltYWdlIiwic3giLCJzeSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/NeckPieces.ts\n");

/***/ }),

/***/ "./src/ts/helpers/math.ts":
/*!********************************!*\
  !*** ./src/ts/helpers/math.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaGVscGVycy9tYXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFtQ0MsR0FBbkMsRUFBK0NDLElBQS9DLEVBQW1FO0FBQXBCO0FBQUFBO0FBQW9COztBQUMvRCxNQUFJQSxJQUFKLEVBQVU7QUFDTixXQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVUYsR0FBRyxHQUFHRyxJQUFJLENBQUNKLE1BQUwsTUFBaUJFLEdBQUcsR0FBQ0QsR0FBckIsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFNBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLEdBQUdHLElBQUksQ0FBQ0osTUFBTCxNQUFpQkUsR0FBRyxHQUFDRCxHQUFyQixDQUFqQixDQUFQO0FBQ0g7O0FBTERLLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9oZWxwZXJzL21hdGgudHM/OGZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjpudW1iZXIsIG1heDpudW1iZXIsIGNlaWw6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgaWYgKGNlaWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XG59Il0sIm5hbWVzIjpbInJhbmRvbSIsIm1pbiIsIm1heCIsImNlaWwiLCJNYXRoIiwiZmxvb3IiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/helpers/math.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  limitLine: {\n    yRatio: 1 / 3,\n    dashLength: 4,\n    dashGap: 7,\n    color: '#6C756B',\n    startPosition: 70\n  },\n  neckPieces: {\n    sx: 3,\n    sy: 0,\n    height: 26,\n    width: 12,\n    maxCount: 1,\n    x: {\n      min: 70,\n      max: 210\n    },\n    speed: 3\n  },\n  dino: {\n    head: {\n      sx: 22,\n      sy: 0,\n      width: 29,\n      height: 23\n    },\n    body: {\n      sx: 0,\n      sy: 25,\n      width: 52,\n      height: 72\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsV0FBUyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSxJQUFJLENBREw7QUFFUEMsY0FBVSxFQUFFLENBRkw7QUFHUEMsV0FBTyxFQUFFLENBSEY7QUFJUEMsU0FBSyxFQUFFLFNBSkE7QUFLUEMsaUJBQWEsRUFBRTtBQUxSLEdBRFM7QUFRcEJDLFlBQVUsRUFBRTtBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxNQUFFLEVBQUUsQ0FGSTtBQUdSQyxVQUFNLEVBQUUsRUFIQTtBQUlSQyxTQUFLLEVBQUUsRUFKQztBQUtSQyxZQUFRLEVBQUUsQ0FMRjtBQU1SQyxLQUFDLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBRyxFQUFFO0FBQWYsS0FOSztBQU9SQyxTQUFLLEVBQUU7QUFQQyxHQVJRO0FBaUJwQkMsTUFBSSxFQUFFO0FBQ0ZDLFFBQUksRUFBRTtBQUNGVixRQUFFLEVBQUUsRUFERjtBQUVGQyxRQUFFLEVBQUUsQ0FGRjtBQUdGRSxXQUFLLEVBQUUsRUFITDtBQUlGRCxZQUFNLEVBQUU7QUFKTixLQURKO0FBT0ZTLFFBQUksRUFBRTtBQUNGWCxRQUFFLEVBQUUsQ0FERjtBQUVGQyxRQUFFLEVBQUUsRUFGRjtBQUdGRSxXQUFLLEVBQUUsRUFITDtBQUlGRCxZQUFNLEVBQUU7QUFKTjtBQVBKO0FBakJjLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGxpbWl0TGluZToge1xuICAgICAgICB5UmF0aW86IDEgLyAzLFxuICAgICAgICBkYXNoTGVuZ3RoOiA0LFxuICAgICAgICBkYXNoR2FwOiA3LFxuICAgICAgICBjb2xvcjogJyM2Qzc1NkInLFxuICAgICAgICBzdGFydFBvc2l0aW9uOiA3MCxcbiAgICB9LFxuICAgIG5lY2tQaWVjZXM6IHtcbiAgICAgICAgc3g6IDMsXG4gICAgICAgIHN5OiAwLFxuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgIG1heENvdW50OiAxLFxuICAgICAgICB4OiB7bWluOiA3MCwgbWF4OiAyMTB9LFxuICAgICAgICBzcGVlZDogMyxcbiAgICB9LFxuICAgIGRpbm86IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc3g6IDIyLFxuICAgICAgICAgICAgc3k6IDAsXG4gICAgICAgICAgICB3aWR0aDogMjksXG4gICAgICAgICAgICBoZWlnaHQ6IDIzLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBzeDogMCxcbiAgICAgICAgICAgIHN5OiAyNSxcbiAgICAgICAgICAgIHdpZHRoOiA1MixcbiAgICAgICAgICAgIGhlaWdodDogNzIsXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJsaW1pdExpbmUiLCJ5UmF0aW8iLCJkYXNoTGVuZ3RoIiwiZGFzaEdhcCIsImNvbG9yIiwic3RhcnRQb3NpdGlvbiIsIm5lY2tQaWVjZXMiLCJzeCIsInN5IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhDb3VudCIsIngiLCJtaW4iLCJtYXgiLCJzcGVlZCIsImRpbm8iLCJoZWFkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;