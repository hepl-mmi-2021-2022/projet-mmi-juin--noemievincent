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

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvas) {\n    this.canvas = canvas;\n    this.canvasElement = this.canvas.canvasElement;\n    this.ctx = this.canvas.ctx;\n    this.sprite = this.canvas.sprite;\n    this.neckPieces = this.canvas.neckPieces;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.neckPieces.forEach(function (neckPiece) {\n      neckPiece.update();\n    });\n    this.canvas.draw();\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFPSSxxQkFBWUEsTUFBWixFQUEwQjtBQUN0QixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtELE1BQUwsQ0FBWUMsYUFBakM7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0YsTUFBTCxDQUFZRSxHQUF2QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLSCxNQUFMLENBQVlHLE1BQTFCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLSixNQUFMLENBQVlJLFVBQTlCO0FBQ0EsU0FBS0MsT0FBTDtBQUNIOztBQUVEQztBQUFBOztBQUNJQyxVQUFNLENBQUNDLHFCQUFQLENBQTZCO0FBQU9DLFdBQUksQ0FBQ0osT0FBTDtBQUFnQixLQUFwRDtBQUNBLFNBQUtILEdBQUwsQ0FBU1EsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLVCxhQUFMLENBQW1CVSxLQUE1QyxFQUFtRCxLQUFLVixhQUFMLENBQW1CVyxNQUF0RTtBQUNBLFNBQUtSLFVBQUwsQ0FBZ0JTLE9BQWhCLENBQXdCLFVBQUNDLFNBQUQsRUFBc0I7QUFDMUNBLGVBQVMsQ0FBQ0MsTUFBVjtBQUNILEtBRkQ7QUFHQSxTQUFLZixNQUFMLENBQVlnQixJQUFaO0FBQ0gsR0FQRDs7QUFRSjtBQUFDLENBeEJEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0FuaW1hdGlvbi50cz85MWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmVja1BpZWNlc30gZnJvbSBcIi4vTmVja1BpZWNlc1wiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHVibGljIGNhbnZhczogQ2FudmFzO1xuICAgIHByaXZhdGUgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgbmVja1BpZWNlczogTmVja1BpZWNlc1tdO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IHRoaXMuY2FudmFzLmNhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuY2FudmFzLnNwcml0ZTtcbiAgICAgICAgdGhpcy5uZWNrUGllY2VzID0gdGhpcy5jYW52YXMubmVja1BpZWNlcztcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7dGhpcy5hbmltYXRlKCk7fSlcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCwgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgICAgIHRoaXMubmVja1BpZWNlcy5mb3JFYWNoKChuZWNrUGllY2U6IE5lY2tQaWVjZXMpID0+IHtcbiAgICAgICAgICAgIG5lY2tQaWVjZS51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhdygpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIm5lY2tQaWVjZXMiLCJhbmltYXRlIiwiQW5pbWF0aW9uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJuZWNrUGllY2UiLCJ1cGRhdGUiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar NeckPieces_1 = __webpack_require__(/*! ./NeckPieces */ \"./src/ts/NeckPieces.ts\");\n\nvar Dino_1 = __webpack_require__(/*! ./Dino/Dino */ \"./src/ts/Dino/Dino.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.sprite = new Image();\n    this.sprite.src = 'src/img/sprite.png';\n    this.limitLinePosition = {\n      x: settings_1.settings.limitLine.startPosition,\n      y: this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio\n    };\n    this.neckPieces = [];\n\n    for (var i = 0; i < settings_1.settings.neckPieces.maxCount; i++) {\n      this.neckPieces.push(new NeckPieces_1.NeckPieces(this.canvasElement, this.ctx, this.sprite));\n    }\n\n    this.draw();\n  }\n\n  Canvas.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.strokeStyle = settings_1.settings.limitLine.color;\n    this.ctx.setLineDash([settings_1.settings.limitLine.dashLength, settings_1.settings.limitLine.dashGap]);\n    this.ctx.moveTo(this.limitLinePosition.x, this.limitLinePosition.y);\n    this.ctx.lineTo(this.canvasElement.width - this.limitLinePosition.x, this.limitLinePosition.y);\n    this.ctx.stroke();\n    this.dino = new Dino_1.Dino(this.canvasElement, this.ctx, this.sprite);\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFRSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsR0FBWixHQUFrQixvQkFBbEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QjtBQUNyQkMsT0FBQyxFQUFFQyxvQkFBU0MsU0FBVCxDQUFtQkMsYUFERDtBQUVyQkMsT0FBQyxFQUFFLEtBQUtiLGFBQUwsQ0FBbUJjLE1BQW5CLEdBQTZCLEtBQUtkLGFBQUwsQ0FBbUJjLE1BQW5CLEdBQTRCSixvQkFBU0MsU0FBVCxDQUFtQkk7QUFGMUQsS0FBekI7QUFJQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1Asb0JBQVNNLFVBQVQsQ0FBb0JFLFFBQXhDLEVBQWtERCxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELFdBQUtELFVBQUwsQ0FBZ0JHLElBQWhCLENBQXFCLElBQUlDLHVCQUFKLENBQWUsS0FBS3BCLGFBQXBCLEVBQW1DLEtBQUtHLEdBQXhDLEVBQTZDLEtBQUtFLE1BQWxELENBQXJCO0FBQ0g7O0FBQ0QsU0FBS2dCLElBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLbkIsR0FBTCxDQUFTb0IsU0FBVDtBQUNBLFNBQUtwQixHQUFMLENBQVNxQixXQUFULEdBQXVCZCxvQkFBU0MsU0FBVCxDQUFtQmMsS0FBMUM7QUFDQSxTQUFLdEIsR0FBTCxDQUFTdUIsV0FBVCxDQUFxQixDQUFDaEIsb0JBQVNDLFNBQVQsQ0FBbUJnQixVQUFwQixFQUFnQ2pCLG9CQUFTQyxTQUFULENBQW1CaUIsT0FBbkQsQ0FBckI7QUFDQSxTQUFLekIsR0FBTCxDQUFTMEIsTUFBVCxDQUFnQixLQUFLckIsaUJBQUwsQ0FBdUJDLENBQXZDLEVBQTBDLEtBQUtELGlCQUFMLENBQXVCSyxDQUFqRTtBQUNBLFNBQUtWLEdBQUwsQ0FBUzJCLE1BQVQsQ0FBZ0IsS0FBSzlCLGFBQUwsQ0FBbUIrQixLQUFuQixHQUEyQixLQUFLdkIsaUJBQUwsQ0FBdUJDLENBQWxFLEVBQXFFLEtBQUtELGlCQUFMLENBQXVCSyxDQUE1RjtBQUNBLFNBQUtWLEdBQUwsQ0FBUzZCLE1BQVQ7QUFFQSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsV0FBSixDQUFTLEtBQUtsQyxhQUFkLEVBQTZCLEtBQUtHLEdBQWxDLEVBQXVDLEtBQUtFLE1BQTVDLENBQVo7QUFDSCxHQVREOztBQVVKO0FBQUMsQ0FsQ0Q7O0FBQWE4QixjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQ2FudmFzLnRzPzg1YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7TmVja1BpZWNlc30gZnJvbSBcIi4vTmVja1BpZWNlc1wiO1xuaW1wb3J0IHtEaW5vfSBmcm9tIFwiLi9EaW5vL0Rpbm9cIjtcblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgcHVibGljIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHB1YmxpYyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGxpbWl0TGluZVBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwdWJsaWMgbmVja1BpZWNlczogTmVja1BpZWNlc1tdO1xuICAgIHB1YmxpYyBkaW5vOiBEaW5vO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gJ3NyYy9pbWcvc3ByaXRlLnBuZyc7XG4gICAgICAgIHRoaXMubGltaXRMaW5lUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBzZXR0aW5ncy5saW1pdExpbmUuc3RhcnRQb3NpdGlvbixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLSAodGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAqIHNldHRpbmdzLmxpbWl0TGluZS55UmF0aW8pLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmVja1BpZWNlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLm5lY2tQaWVjZXMubWF4Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5uZWNrUGllY2VzLnB1c2gobmV3IE5lY2tQaWVjZXModGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5zcHJpdGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBzZXR0aW5ncy5saW1pdExpbmUuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnNldExpbmVEYXNoKFtzZXR0aW5ncy5saW1pdExpbmUuZGFzaExlbmd0aCwgc2V0dGluZ3MubGltaXRMaW5lLmRhc2hHYXBdKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubGltaXRMaW5lUG9zaXRpb24ueCwgdGhpcy5saW1pdExpbmVQb3NpdGlvbi55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCAtIHRoaXMubGltaXRMaW5lUG9zaXRpb24ueCwgdGhpcy5saW1pdExpbmVQb3NpdGlvbi55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgdGhpcy5kaW5vID0gbmV3IERpbm8odGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5zcHJpdGUpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJsaW1pdExpbmVQb3NpdGlvbiIsIngiLCJzZXR0aW5nc18xIiwibGltaXRMaW5lIiwic3RhcnRQb3NpdGlvbiIsInkiLCJoZWlnaHQiLCJ5UmF0aW8iLCJuZWNrUGllY2VzIiwiaSIsIm1heENvdW50IiwicHVzaCIsIk5lY2tQaWVjZXNfMSIsImRyYXciLCJDYW52YXMiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImNvbG9yIiwic2V0TGluZURhc2giLCJkYXNoTGVuZ3RoIiwiZGFzaEdhcCIsIm1vdmVUbyIsImxpbmVUbyIsIndpZHRoIiwic3Ryb2tlIiwiZGlubyIsIkRpbm9fMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Body.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Body.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Body = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Body = function () {\n  function Body(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.dino.body.width;\n    this.height = settings_1.settings.dino.body.height;\n    this.x = 0;\n    this.y = -3;\n    this.draw();\n  }\n\n  Body.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.dino.body.sx, settings_1.settings.dino.body.sy, this.width, this.height, this.x, this.y, this.width, this.height);\n  };\n\n  return Body;\n}();\n\nexports.Body = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9Cb2R5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CSCxLQUFoQztBQUNBLFNBQUtJLE1BQUwsR0FBY0gsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsTUFBakM7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFDLENBQVY7QUFDQSxTQUFLQyxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS1YsR0FBTCxDQUFTVyxTQUFULENBQ0ksS0FBS1YsTUFEVCxFQUVJRSxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CTyxFQUZ2QixFQUdJVCxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CUSxFQUh2QixFQUlJLEtBQUtYLEtBSlQsRUFLSSxLQUFLSSxNQUxULEVBTUksS0FBS0MsQ0FOVCxFQU9JLEtBQUtDLENBUFQsRUFRSSxLQUFLTixLQVJULEVBU0ksS0FBS0ksTUFUVDtBQVdILEdBWkQ7O0FBYUo7QUFBQyxDQWpDRDs7QUFBYVEsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0Rpbm8vQm9keS50cz81MmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLmRpbm8uYm9keS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5kaW5vLmJvZHkuaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAtMztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmJvZHkuc3gsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmJvZHkuc3ksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0aGlzLngsXG4gICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiZGlubyIsImJvZHkiLCJoZWlnaHQiLCJ4IiwieSIsImRyYXciLCJCb2R5IiwiZHJhd0ltYWdlIiwic3giLCJzeSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Dino/Body.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Dino.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Dino.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Dino = void 0;\n\nvar Body_1 = __webpack_require__(/*! ./Body */ \"./src/ts/Dino/Body.ts\");\n\nvar Head_1 = __webpack_require__(/*! ./Head */ \"./src/ts/Dino/Head.ts\");\n\nvar Neck_1 = __webpack_require__(/*! ./Neck */ \"./src/ts/Dino/Neck.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Dino = function () {\n  function Dino(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.x = this.canvasElement.width / 2;\n    this.y = this.canvasElement.height - this.canvasElement.height * settings_1.settings.limitLine.yRatio;\n    this.speed = settings_1.settings.dino.speed;\n    this.direction = '';\n    this.update();\n  }\n\n  Dino.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.neck = new Neck_1.Neck(this.canvasElement, this.ctx, this.sprite);\n    this.body = new Body_1.Body(this.canvasElement, this.ctx, this.sprite);\n    this.head = new Head_1.Head(this.canvasElement, this.ctx, this.sprite);\n    this.ctx.restore();\n  };\n\n  Dino.prototype.update = function () {\n    if (this.direction === 'left') {\n      this.x -= this.speed;\n      console.log(this.x);\n    }\n\n    if (this.direction === 'right') {\n      this.x += this.speed;\n      console.log(this.x);\n    }\n\n    this.draw();\n  };\n\n  return Dino;\n}();\n\nexports.Dino = Dino;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9EaW5vLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFZSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEtBQUtILGFBQUwsQ0FBbUJJLEtBQW5CLEdBQTJCLENBQXBDO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEtBQUtMLGFBQUwsQ0FBbUJNLE1BQW5CLEdBQTZCLEtBQUtOLGFBQUwsQ0FBbUJNLE1BQW5CLEdBQTRCQyxvQkFBU0MsU0FBVCxDQUFtQkMsTUFBckY7QUFDQSxTQUFLQyxLQUFMLEdBQWFILG9CQUFTSSxJQUFULENBQWNELEtBQTNCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE1BQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLYixHQUFMLENBQVNjLElBQVQ7QUFDQSxTQUFLZCxHQUFMLENBQVNlLFNBQVQsQ0FBbUIsS0FBS2IsQ0FBeEIsRUFBMkIsS0FBS0UsQ0FBaEM7QUFDQSxTQUFLWSxJQUFMLEdBQVksSUFBSUMsV0FBSixDQUFTLEtBQUtsQixhQUFkLEVBQTZCLEtBQUtDLEdBQWxDLEVBQXVDLEtBQUtDLE1BQTVDLENBQVo7QUFDQSxTQUFLaUIsSUFBTCxHQUFZLElBQUlDLFdBQUosQ0FBUyxLQUFLcEIsYUFBZCxFQUE2QixLQUFLQyxHQUFsQyxFQUF1QyxLQUFLQyxNQUE1QyxDQUFaO0FBQ0EsU0FBS21CLElBQUwsR0FBWSxJQUFJQyxXQUFKLENBQVMsS0FBS3RCLGFBQWQsRUFBNkIsS0FBS0MsR0FBbEMsRUFBdUMsS0FBS0MsTUFBNUMsQ0FBWjtBQUNBLFNBQUtELEdBQUwsQ0FBU3NCLE9BQVQ7QUFDSCxHQVBEOztBQVNBVDtBQUNJLFFBQUksS0FBS0YsU0FBTCxLQUFtQixNQUF2QixFQUErQjtBQUMzQixXQUFLVCxDQUFMLElBQVUsS0FBS08sS0FBZjtBQUNBYyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLdEIsQ0FBakI7QUFDSDs7QUFBQyxRQUFJLEtBQUtTLFNBQUwsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDOUIsV0FBS1QsQ0FBTCxJQUFVLEtBQUtPLEtBQWY7QUFDQWMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3RCLENBQWpCO0FBQ0g7O0FBQ0QsU0FBS3VCLElBQUw7QUFDSCxHQVREOztBQVVKO0FBQUMsQ0ExQ0Q7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL0Rpbm8udHM/MDQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvZHl9IGZyb20gXCIuL0JvZHlcIjtcbmltcG9ydCB7SGVhZH0gZnJvbSBcIi4vSGVhZFwiO1xuaW1wb3J0IHtOZWNrfSBmcm9tIFwiLi9OZWNrXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIERpbm8ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwdWJsaWMgYm9keTogQm9keTtcbiAgICBwdWJsaWMgaGVhZDogSGVhZDtcbiAgICBwdWJsaWMgbmVjazogTmVjaztcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gKHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgKiBzZXR0aW5ncy5saW1pdExpbmUueVJhdGlvKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNldHRpbmdzLmRpbm8uc3BlZWQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLm5lY2sgPSBuZXcgTmVjayh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4LCB0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBCb2R5KHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgsIHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3IEhlYWQodGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgICAgICB9IGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJzZXR0aW5nc18xIiwibGltaXRMaW5lIiwieVJhdGlvIiwic3BlZWQiLCJkaW5vIiwiZGlyZWN0aW9uIiwidXBkYXRlIiwiRGlubyIsInNhdmUiLCJ0cmFuc2xhdGUiLCJuZWNrIiwiTmVja18xIiwiYm9keSIsIkJvZHlfMSIsImhlYWQiLCJIZWFkXzEiLCJyZXN0b3JlIiwiY29uc29sZSIsImxvZyIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Dino/Dino.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Head.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Head.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Head = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Head = function () {\n  function Head(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.dino.head.width;\n    this.height = settings_1.settings.dino.head.height;\n    this.x = -this.width / 3;\n    this.y = -this.height / 2 - settings_1.settings.neckPieces.height;\n    this.draw();\n  }\n\n  Head.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.dino.head.sx, settings_1.settings.dino.head.sy, this.width, this.height, this.x, this.y, this.width, this.height);\n  };\n\n  return Head;\n}();\n\nexports.Head = Head;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9IZWFkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CSCxLQUFoQztBQUNBLFNBQUtJLE1BQUwsR0FBY0gsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsTUFBakM7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBQyxLQUFLTCxLQUFOLEdBQWMsQ0FBdkI7QUFDQSxTQUFLTSxDQUFMLEdBQVMsQ0FBRSxLQUFLRixNQUFQLEdBQWMsQ0FBZCxHQUFrQkgsb0JBQVNNLFVBQVQsQ0FBb0JILE1BQS9DO0FBQ0EsU0FBS0ksSUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtYLEdBQUwsQ0FBU1ksU0FBVCxDQUNJLEtBQUtYLE1BRFQsRUFFSUUsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQlEsRUFGdkIsRUFHSVYsb0JBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQlMsRUFIdkIsRUFJSSxLQUFLWixLQUpULEVBS0ksS0FBS0ksTUFMVCxFQU1JLEtBQUtDLENBTlQsRUFPSSxLQUFLQyxDQVBULEVBUUksS0FBS04sS0FSVCxFQVNJLEtBQUtJLE1BVFQ7QUFXSCxHQVpEOztBQWFKO0FBQUMsQ0FqQ0Q7O0FBQWFTLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL0hlYWQudHM/YjQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzcHJpdGU7XG4gICAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5kaW5vLmhlYWQud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2V0dGluZ3MuZGluby5oZWFkLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMud2lkdGggLyAzO1xuICAgICAgICB0aGlzLnkgPSAtIHRoaXMuaGVpZ2h0LzIgLSBzZXR0aW5ncy5uZWNrUGllY2VzLmhlaWdodDtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmhlYWQuc3gsXG4gICAgICAgICAgICBzZXR0aW5ncy5kaW5vLmhlYWQuc3ksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0aGlzLngsXG4gICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiZGlubyIsImhlYWQiLCJoZWlnaHQiLCJ4IiwieSIsIm5lY2tQaWVjZXMiLCJkcmF3IiwiSGVhZCIsImRyYXdJbWFnZSIsInN4Iiwic3kiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Dino/Head.ts\n");

/***/ }),

/***/ "./src/ts/Dino/Neck.ts":
/*!*****************************!*\
  !*** ./src/ts/Dino/Neck.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Neck = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Neck = function () {\n  function Neck(canvasElement, ctx, sprite) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = sprite;\n    this.width = settings_1.settings.neckPieces.width;\n    this.height = settings_1.settings.neckPieces.height;\n    this.x = settings_1.settings.neckPieces.sx;\n    this.y = -this.height;\n    this.draw();\n  }\n\n  Neck.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.neckPieces.sx, settings_1.settings.neckPieces.sy, this.width, this.height, this.x, this.y, this.width, this.height);\n  };\n\n  return Neck;\n}();\n\nexports.Neck = Neck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRGluby9OZWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFTSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLE1BQTdFLEVBQXFHO0FBQ2pHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsVUFBVCxDQUFvQkYsS0FBakM7QUFDQSxTQUFLRyxNQUFMLEdBQWNGLG9CQUFTQyxVQUFULENBQW9CQyxNQUFsQztBQUNBLFNBQUtDLENBQUwsR0FBU0gsb0JBQVNDLFVBQVQsQ0FBb0JHLEVBQTdCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQUMsS0FBS0gsTUFBZjtBQUNBLFNBQUtJLElBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLVixHQUFMLENBQVNXLFNBQVQsQ0FDSSxLQUFLVixNQURULEVBRUlFLG9CQUFTQyxVQUFULENBQW9CRyxFQUZ4QixFQUdJSixvQkFBU0MsVUFBVCxDQUFvQlEsRUFIeEIsRUFJSSxLQUFLVixLQUpULEVBS0ksS0FBS0csTUFMVCxFQU1JLEtBQUtDLENBTlQsRUFPSSxLQUFLRSxDQVBULEVBUUksS0FBS04sS0FSVCxFQVNJLEtBQUtHLE1BVFQ7QUFXSCxHQVpEOztBQWFKO0FBQUMsQ0FqQ0Q7O0FBQWFRLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EaW5vL05lY2sudHM/NDk3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIE5lY2sge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzcHJpdGU7XG4gICAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5uZWNrUGllY2VzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLm5lY2tQaWVjZXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSBzZXR0aW5ncy5uZWNrUGllY2VzLnN4O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgc2V0dGluZ3MubmVja1BpZWNlcy5zeCxcbiAgICAgICAgICAgIHNldHRpbmdzLm5lY2tQaWVjZXMuc3ksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0aGlzLngsXG4gICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwid2lkdGgiLCJzZXR0aW5nc18xIiwibmVja1BpZWNlcyIsImhlaWdodCIsIngiLCJzeCIsInkiLCJkcmF3IiwiTmVjayIsImRyYXdJbWFnZSIsInN5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Dino/Neck.ts\n");

/***/ }),

/***/ "./src/ts/GameController.ts":
/*!**********************************!*\
  !*** ./src/ts/GameController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.GameController = void 0;\n\nvar GameController = function () {\n  function GameController(animation, dino) {\n    this.isStart = false;\n    this.animation = animation;\n    this.dino = dino;\n    this.addEventListeners();\n  }\n\n  GameController.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('keydown', function (e) {\n      if (e.key === 'ArrowLeft') {\n        _this.dino.direction = 'left';\n        console.log(e.key);\n      }\n\n      if (e.key === 'ArrowRight') {\n        _this.dino.direction = 'right';\n        console.log(e.key);\n      }\n\n      _this.dino.update();\n    });\n  };\n\n  return GameController;\n}();\n\nexports.GameController = GameController;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvR2FtZUNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQUtJLDBCQUFZQSxTQUFaLEVBQWtDQyxJQUFsQyxFQUE0QztBQUN4QyxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0UsaUJBQUw7QUFDSDs7QUFFREM7QUFBQTs7QUFDSUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxDQUFELEVBQWlCO0FBQ2hELFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDdkJDLGFBQUksQ0FBQ1IsSUFBTCxDQUFVUyxTQUFWLEdBQXNCLE1BQXRCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNDLEdBQWQ7QUFDSDs7QUFBQyxVQUFJRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxZQUFkLEVBQTRCO0FBQzFCQyxhQUFJLENBQUNSLElBQUwsQ0FBVVMsU0FBVixHQUFzQixPQUF0QjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBQyxDQUFDQyxHQUFkO0FBQ0g7O0FBQ0RDLFdBQUksQ0FBQ1IsSUFBTCxDQUFVWSxNQUFWO0FBQ0gsS0FURDtBQVVILEdBWEQ7O0FBWUo7QUFBQyxDQXhCRDs7QUFBYUMsc0JBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9HYW1lQ29udHJvbGxlci50cz9hOWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9BbmltYXRpb25cIjtcbmltcG9ydCB7RGlub30gZnJvbSBcIi4vRGluby9EaW5vXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBpc1N0YXJ0OiBib29sZWFuO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSBkaW5vOiBEaW5vO1xuXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uOiBBbmltYXRpb24sIGRpbm86IERpbm8pIHtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICB0aGlzLmRpbm8gPSBkaW5vO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpbm8uZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUua2V5KTtcbiAgICAgICAgICAgIH0gaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpbm8uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpbm8udXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJhbmltYXRpb24iLCJkaW5vIiwiaXNTdGFydCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiR2FtZUNvbnRyb2xsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIl90aGlzIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/GameController.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/ts/Animation.ts\");\n\nvar GameController_1 = __webpack_require__(/*! ./GameController */ \"./src/ts/GameController.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.animation = new Animation_1.Animation(this.canvas);\n    this.game = new GameController_1.GameController(this.animation, this.canvas.dino);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFLSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsTUFBbkIsQ0FBakI7QUFDQSxTQUFLSSxJQUFMLEdBQVksSUFBSUMsK0JBQUosQ0FBbUIsS0FBS0gsU0FBeEIsRUFBbUMsS0FBS0YsTUFBTCxDQUFZTSxJQUEvQyxDQUFaO0FBQ0g7O0FBQ0w7QUFBQyxDQVZEOztBQVlBLElBQUlDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FuaW1hdGlvbn0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XG5pbXBvcnQge0dhbWVDb250cm9sbGVyfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSBnYW1lOiBHYW1lQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKHRoaXMuYW5pbWF0aW9uLCB0aGlzLmNhbnZhcy5kaW5vKTtcbiAgICB9XG59XG5cbm5ldyBNYWluKCk7XG4iXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzXzEiLCJhbmltYXRpb24iLCJBbmltYXRpb25fMSIsImdhbWUiLCJHYW1lQ29udHJvbGxlcl8xIiwiZGlubyIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  limitLine: {\n    yRatio: 1 / 3,\n    dashLength: 4,\n    dashGap: 7,\n    color: '#6C756B',\n    startPosition: 70\n  },\n  neckPieces: {\n    sx: 3,\n    sy: 0,\n    height: 26,\n    width: 12,\n    maxCount: 1,\n    x: {\n      min: 70,\n      max: 210\n    },\n    speed: 3\n  },\n  dino: {\n    speed: 3,\n    head: {\n      sx: 22,\n      sy: 0,\n      width: 29,\n      height: 23\n    },\n    body: {\n      sx: 0,\n      sy: 25,\n      width: 52,\n      height: 72\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsV0FBUyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSxJQUFJLENBREw7QUFFUEMsY0FBVSxFQUFFLENBRkw7QUFHUEMsV0FBTyxFQUFFLENBSEY7QUFJUEMsU0FBSyxFQUFFLFNBSkE7QUFLUEMsaUJBQWEsRUFBRTtBQUxSLEdBRFM7QUFRcEJDLFlBQVUsRUFBRTtBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxNQUFFLEVBQUUsQ0FGSTtBQUdSQyxVQUFNLEVBQUUsRUFIQTtBQUlSQyxTQUFLLEVBQUUsRUFKQztBQUtSQyxZQUFRLEVBQUUsQ0FMRjtBQU1SQyxLQUFDLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBRyxFQUFFO0FBQWYsS0FOSztBQU9SQyxTQUFLLEVBQUU7QUFQQyxHQVJRO0FBaUJwQkMsTUFBSSxFQUFFO0FBQ0ZELFNBQUssRUFBRSxDQURMO0FBRUZFLFFBQUksRUFBRTtBQUNGVixRQUFFLEVBQUUsRUFERjtBQUVGQyxRQUFFLEVBQUUsQ0FGRjtBQUdGRSxXQUFLLEVBQUUsRUFITDtBQUlGRCxZQUFNLEVBQUU7QUFKTixLQUZKO0FBUUZTLFFBQUksRUFBRTtBQUNGWCxRQUFFLEVBQUUsQ0FERjtBQUVGQyxRQUFFLEVBQUUsRUFGRjtBQUdGRSxXQUFLLEVBQUUsRUFITDtBQUlGRCxZQUFNLEVBQUU7QUFKTjtBQVJKO0FBakJjLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGxpbWl0TGluZToge1xuICAgICAgICB5UmF0aW86IDEgLyAzLFxuICAgICAgICBkYXNoTGVuZ3RoOiA0LFxuICAgICAgICBkYXNoR2FwOiA3LFxuICAgICAgICBjb2xvcjogJyM2Qzc1NkInLFxuICAgICAgICBzdGFydFBvc2l0aW9uOiA3MCxcbiAgICB9LFxuICAgIG5lY2tQaWVjZXM6IHtcbiAgICAgICAgc3g6IDMsXG4gICAgICAgIHN5OiAwLFxuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgIG1heENvdW50OiAxLFxuICAgICAgICB4OiB7bWluOiA3MCwgbWF4OiAyMTB9LFxuICAgICAgICBzcGVlZDogMyxcbiAgICB9LFxuICAgIGRpbm86IHtcbiAgICAgICAgc3BlZWQ6IDMsXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHN4OiAyMixcbiAgICAgICAgICAgIHN5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDI5LFxuICAgICAgICAgICAgaGVpZ2h0OiAyMyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgc3g6IDAsXG4gICAgICAgICAgICBzeTogMjUsXG4gICAgICAgICAgICB3aWR0aDogNTIsXG4gICAgICAgICAgICBoZWlnaHQ6IDcyLFxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwibGltaXRMaW5lIiwieVJhdGlvIiwiZGFzaExlbmd0aCIsImRhc2hHYXAiLCJjb2xvciIsInN0YXJ0UG9zaXRpb24iLCJuZWNrUGllY2VzIiwic3giLCJzeSIsImhlaWdodCIsIndpZHRoIiwibWF4Q291bnQiLCJ4IiwibWluIiwibWF4Iiwic3BlZWQiLCJkaW5vIiwiaGVhZCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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