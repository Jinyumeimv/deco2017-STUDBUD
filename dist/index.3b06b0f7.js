// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2xDT7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d0423473b06b0f7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2OD7o":[function(require,module,exports) {
var _tasklist = require("./components/tasklist");
var _stopwatch = require("./components/stopwatch");
var _pomodoro = require("./components/pomodoro");
var _whitenoise = require("./components/whitenoise");
var _addcard = require("./components/addcard");

},{"./components/tasklist":"5i9SJ","./components/stopwatch":"3fKV6","./components/pomodoro":"gk81k","./components/whitenoise":"h7WhB","./components/addcard":"j5iNA"}],"5i9SJ":[function(require,module,exports) {

},{}],"3fKV6":[function(require,module,exports) {
// Get the items from DOM
let stopWatch = document.getElementById("spopup");
let popup = document.getElementById("stopWatch");
// Add the click funtion to the stop watch button which on the navigation bar, it can be used to active the stopwatch.
popup.addEventListener("click", function() {
    console.log("lala");
    stopWatch.classList.toggle("active");
});
window.onload = function() {
    var secs = 00;
    var tens = 00;
    var actualSecs = document.getElementById("seconds");
    var actualTens = document.getElementById("tens");
    var buttonStart = document.getElementById('stopwatch_start');
    var buttonStop = document.getElementById('stopwatch_stop');
    var buttonReset = document.getElementById('stopwatch_reset');
    var Interval;
    // Start the stopwatch through click the start button
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        console.log(a);
    };
    // End the stopwatch through click the stop button
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };
    // reset the function can make the stopwatch back to the initial and the stopwatch can be restarted.
    buttonReset.onclick = function() {
        clearInterval(Interval);
        secs = "00";
        tens = "00";
        actualSecs.innerHTML = secs;
        actualTens.innerHTML = tens;
    };
    function startTimer() {
        tens++;
        // Use if function to make the stopwatch can running. 
        if (tens <= 9) actualTens.innerHTML = "0" + tens;
        if (tens > 9) actualTens.innerHTML = tens;
        if (tens > 99) {
            console.log("secs");
            secs++;
            actualSecs.innerHTML = "0" + secs;
            tens = 0;
            actualTens.innerHTML = "00";
        }
        if (secs > 9) actualSecs.innerHTML = secs;
    }
};

},{}],"gk81k":[function(require,module,exports) {
let box = document.getElementById("pomodorotimer");
let size = document.getElementById("full_screen");
let countDown = document.getElementsByTagName("p");
size.addEventListener("click", function() {
    console.log("lala");
    box.classList.toggle("active");
});
// var the element and get the DOM elements.
var start = document.getElementById("start");
var giveUp = document.getElementById("giveup");
var focusMins = document.getElementById("f_minutes");
var breakMins = document.getElementById("b_minutes");
var focusSec = document.getElementById("f_seconds");
var breakSec = document.getElementById("b_seconds");
var cycles = document.getElementById("cycle");
var startTimer;
// After clicking the start button, the countdown will run and if the user clicks it again, the system will alert the user that: Timer is already running. Which can avoid repeat operations. 
start.addEventListener('click', function() {
    if (startTimer === undefined) startTimer = setInterval(timer, 1000);
    else {
        alert("Timer is running");
        console.log(lala);
    }
});
// give up the Pomodoro timer which is running, the time will back to the initial time. And the user can start a new timer or stop focusing.
giveUp.addEventListener('click', function() {
    focusMins.innerText = 25;
    focusSec.innerText = "00";
    breakMins.innerText = 5;
    breakSec.innerText = "00";
    stopInterval();
    startTimer = undefined;
    console.log(hehe);
});
function timer() {
    // Use the if function to discuss the focus time and the rest time separately. When the if function ends, the if else function starts to run, so the pomodoro timer can start the countdown.
    if (focusSec.innerText != 0) focusSec.innerText--;
    else if (focusMins.innerText != 0 && focusSec.innerText == 0) {
        focusSec.innerText = 59;
        focusMins.innerText--;
    }
    if (focusMins.innerText == 0 && focusSec.innerText == 0) breakSec.innerText--;
    else if (breakMins.innertext != 0 && breakSec.innerText == 0) {
        breakSec.innerText = 59;
        breakMins.innerText--;
    }
    // When all the numbers are equal to 0, the cycle starts to increase by one and then counts down a second time.
    if (focusMins.innerText == 0 && focusSec.innerText == 0 && breakMins.innerText == 0 && breakSec.innerText == 0) {
        focusMins.innerText = 25;
        focusSec.innerText = "00";
        breakMins.innerText = 5;
        breakSec.innerText = "00";
        cycles.innerText++;
    }
}
function stopInterval() {
    clearInterval(startTimer);
}

},{}],"h7WhB":[function(require,module,exports) {
// Build an array to get the music name, image, and sound. It can make the code easier.
// Based on the property of the parcel, I cannot get images and music based on the sample way, therefore, I use a new URL('src', import.meta.url) to find my images and sounds.
let AllWhiteNoise = [
    {
        name: "Falme",
        img: new URL(require("53c3044fceb5b98")),
        music: new URL(require("5330cbb0a21ed333"))
    },
    {
        name: "Rain",
        img: new URL(require("6d3fd96187389d0a")),
        music: new URL(require("5b277773161217b8"))
    },
    {
        name: "Sea Waves",
        img: new URL(require("33d3b5ded924a318")),
        music: new URL(require("6cf5ce96cee0737b"))
    }
];
let box = document.getElementById("whitenoise");
let size = document.getElementById("big");
// Add the click function to the open in full button.
size.addEventListener("click", function() {
    console.log("lala");
    box.classList.toggle("active");
});
// get the elements in the HTML
const whiteNoise = document.querySelector("#whitenoise");
whiteNoiseImg = whiteNoise.querySelector("#img_area > img");
whiteNoiseName = whiteNoise.querySelector("#whitename");
whiteNoiseSound = whiteNoise.querySelector("#audio");
playBtn = whiteNoise.querySelector("#play");
previousBtn = whiteNoise.querySelector("#previous");
nextBtn = whiteNoise.querySelector("#next");
progressArea = whiteNoise.querySelector("#progress");
progressBar = whiteNoise.querySelector("#progressbar");
// Set the number of the music, it can be identify and play the relavent white noise
let musicIndex = 1;
//   let AllWhiteNoise;
// Load the whitenoise
window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
});
// Select the music from the array, the array is [0, 1, 2], so if I want to choose I need to set the white noise index to minus 1。
// And get the value from array property
function loadMusic(indexNum) {
    whiteNoiseName.innerText = AllWhiteNoise[indexNum - 1].name;
    whiteNoiseImg.src = AllWhiteNoise[indexNum - 1].img;
    whiteNoiseSound.src = AllWhiteNoise[indexNum - 1].music;
}
function previousWhiteNoise() {
    musicIndex--;
    loadMusic(musicIndex);
    playMusic();
}
function nextWhiteNoise() {
    musicIndex++;
    loadMusic(musicIndex);
    playMusic();
}
// Changing the play and pause buttons after clicking, and clicking the play button can play the white noise and the pause button can stop the white noise.
function playMusic() {
    whiteNoise.classList.add("paused");
    playBtn.querySelector("i").innerText = "pause_circle";
    whiteNoiseSound.play();
}
playBtn.addEventListener("click", ()=>{
    const isWhiteNoisePaused = whiteNoise.classList.contains("paused");
    isWhiteNoisePaused ? pauseMusic() : playMusic();
});
function pauseMusic() {
    whiteNoise.classList.remove("paused");
    playBtn.querySelector("i").innerText = "play_circle";
    whiteNoiseSound.pause();
}
// Add the next and previous button, after click can change the white noise
previousBtn.addEventListener("click", ()=>{
    previousWhiteNoise();
});
nextBtn.addEventListener("click", ()=>{
    nextWhiteNoise();
});
// make the progress bar and duration time can be dragged, but I'm not achieving it.
// Using meth to count the duration and the time.
whiteNoiseSound.addEventListener("timeupdate", (e)=>{
    console.log(e);
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = currentTime / duration * 100;
    progressBar.style.width = `${progressWidth}%`;
});
// I want to adding some js to adjust the progress bar, but I didn't make it.
progressArea.addEventListener("click", (e)=>{
    let clickedOffSetX = e.offsetX;
    whiteNoiseSound.currentTime = clickedOffSetX;
});

},{"53c3044fceb5b98":"fPFna","5330cbb0a21ed333":"eKX0m","6d3fd96187389d0a":"2wIoq","5b277773161217b8":"lpVxE","33d3b5ded924a318":"1We3u","6cf5ce96cee0737b":"hvooo"}],"fPFna":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "sunset.de2db152.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eKX0m":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "Flame.cf89404c.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2wIoq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "rainimg.9fa865b9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lpVxE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "rain.7f3a6f82.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1We3u":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "sea.0760c6f3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hvooo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('6BXdU') + "sea.040f7c6d.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j5iNA":[function(require,module,exports) {
// I use getElementById to select the DOM element, because it can accurately locate the element in the html through the id.
let subButton = document.getElementById("create");
let list = document.getElementById("taskform");
let addNew = document.getElementById("newTask");
let taskCards = document.getElementById("card");
let column = document.getElementById("box");
console.log("call");
renderItems();
// addEventListener for creating task card, when the button is clicked, the following equation will be triggered.
// So adding events listener can create more functionality, here I use it to create task cards on kanban board and save into the local storage.
subButton.addEventListener("click", function() {
    console.log("call");
    // Using getElementById to get the value of the DOM elements
    let itemName = document.getElementById("taskInput").value;
    let Detail = document.getElementById("detail").value;
    let estimatedTimeInput = document.getElementById("e_hour").value;
    let estimatedTimeInput_m = document.getElementById("e_min").value;
    let dueDateInput = document.getElementById("dueDateInput").value;
    let timezone = document.getElementById("timezone").value;
    let duetime = document.getElementById("due_time").value;
    // I want to create a tag for each type of task, but I didn't make it.
    // let tag_lecture = document.getElementById("lecture").value;
    // let tag_meeting = document.getElementById("meeting").value;
    // let tag_reading = document.getElementById("reading").value;
    let taskType = document.getElementById("taskSelector").value;
    var priorityInput = document.getElementById("priorityInput").value;
    // if itemName is empty, the card will not appear. After clicking create button, the form will be hidden and no task card be added. 
    if (itemName == "") return;
    // Build the js object and add key and values. It can be used to create the key items into the task card, and the value will be saved in the local storage. 
    let itemObj = {
        'itemName': itemName,
        'Detail': Detail,
        'estimatedTimeInput': estimatedTimeInput,
        'estimatedTimeInput_m': estimatedTimeInput_m,
        'dueDateInput': dueDateInput,
        'timezone': timezone,
        'duetime': duetime,
        'priorityInput': priorityInput,
        'taskType': taskType
    };
    let existingItems = getItems();
    // push can make the item into the end of the Array, so I need to change the JS object to an Array.
    existingItems.push(itemObj);
    // Use JSON.stringify to convers the JS object to an arrey which can be identified by local Storage.
    existingItems = JSON.stringify(existingItems);
    // Save the key and value into the local Storage.
    localStorage.setItem('items', existingItems);
    renderItems();
});
function getItems() {
    let items = localStorage.getItem('items');
    if (items == null) return [];
    items = JSON.parse(items);
    return items;
}
function renderItems() {
    let items = getItems();
    // Use document.querySelector to find the ul element into HTML. 
    let itemUl = document.querySelector('#taskCard ul');
    itemUl.innerHTML = "";
    items.forEach(function(item) {
        // Create HTML elements and set the id attribute to set the CSS style for each element. 
        let itemLi = document.createElement('li');
        itemLi.setAttribute('draggable', 'true');
        itemLi.setAttribute('id', 'card');
        // taskName
        let itemName = document.createElement('h1');
        itemName.setAttribute('id', 'itemname');
        itemName.innerText = item.itemName;
        // details
        let Detail = document.createElement('p');
        Detail.setAttribute('id', 'details');
        Detail.innerText = item.Detail;
        // estimate time hours
        let estimatedTimeInput = document.createElement('p');
        estimatedTimeInput.setAttribute('id', 'hours');
        estimatedTimeInput.innerText = item.estimatedTimeInput + "Hour(s)" + " ";
        // estimate time min
        let estimatedTimeInput_m = document.createElement('p');
        estimatedTimeInput_m.setAttribute('id', 'mins');
        estimatedTimeInput_m.innerText = item.estimatedTimeInput_m + "Min(s)" + " ";
        // duedate
        let dueDateInput = document.createElement('p');
        dueDateInput.setAttribute('id', 'deadline');
        dueDateInput.innerText = item.dueDateInput;
        // timezone
        let timezone = document.createElement('p');
        timezone.setAttribute('id', 'timeZone');
        timezone.innerText = item.timezone;
        // time
        let duetime = document.createElement('p');
        duetime.setAttribute('id', 'time');
        duetime.innerText = item.duetime;
        // task type
        let taskType = document.createElement('p');
        taskType.setAttribute('id', 'types');
        taskType.innerText = item.taskType;
        // // tag_lecture
        //     let tag_lecture = document.createElement('p');
        //     tag_lecture.setAttribute('id', 'lec'); 
        //     tag_lecture.innerText = item.tag_lecture;
        // // tag_meeting
        //     let tag_meeting = document.createElement('p');
        //     tag_meeting.setAttribute('id', 'meet'); 
        //     tag_meeting.innerText = item.tag_meeting; 
        // // tag_reading
        //     let tag_reading = document.createElement('p');
        //     tag_reading.setAttribute('id', 'lec'); 
        //     tag_reading.innerText = item.tag_reading;
        // priority
        let priorityInput = document.createElement('p');
        priorityInput.setAttribute('id', 'priority');
        priorityInput.innerText = "Priority: " + item.priorityInput;
        let itemRemove = document.createElement('button');
        itemRemove.setAttribute('class', 'remove');
        itemRemove.innerText = "Delate this card";
        itemRemove.addEventListener("click", function() {
            itemLi.remove();
            removeItem(item.itemName);
        });
        // Add the elements to the li, it can arrange the information more neatly.
        itemLi.appendChild(itemName);
        itemLi.appendChild(Detail);
        itemLi.appendChild(estimatedTimeInput);
        itemLi.appendChild(estimatedTimeInput_m);
        itemLi.appendChild(dueDateInput);
        itemLi.appendChild(timezone);
        itemLi.appendChild(duetime);
        itemLi.appendChild(taskType);
        itemLi.appendChild(priorityInput);
        // itemLi.appendChild(tag_lecture);
        // itemLi.appendChild(tag_meeting);
        // itemLi.appendChild(tag_reading);
        // Add delate button to the li by using appendChild.
        itemLi.appendChild(itemRemove);
        itemUl.appendChild(itemLi);
    });
}
function removeItem(itemName) {
    let items = getItems();
    let itemIndex = items.findIndex(function(item) {
        return item.itemName == itemName;
    });
    items.splice(itemIndex, 1);
    items = JSON.stringify(items);
    localStorage.setItem('items', items);
}
// Add popup effect using addEventListener, the user clicks the "+" button and the create new task box will appear so that the user can add a new task.
// .toggle means it can shift the CSS style, so I use it to make the create a new task box visible and hidden.
addNew.addEventListener("click", function() {
    console.log("kala");
    list.classList.toggle("appear");
});
// User can add and save the card by click the create button, addEventListener function can add a new class for the list (#taskform).
subButton.addEventListener("click", function() {
    console.log("lala");
    list.classList.toggle("active");
});
// drop and drag function.
// I wanted to achieve it, but I'm not made it.
taskCards.forEach((element)=>{
    dragCard(element);
});
// column.forEach((columns)=>{
//   columns.addEventListener('dragover', (e)=>{
//     let dragging_card = document.querySelector('.dragging');
//     columns.appendChild(dragging_card);
//   });
// })
function dragCard(element) {
    element.addEventListener('dragstart', ()=>{
        card.classList.add('dragging');
        console.log("call");
    });
    element.addEventListener('dragend', ()=>{
        card.classList.remove('dragging');
    });
}

},{}]},["2xDT7","2OD7o"], "2OD7o", "parcelRequire0064")

//# sourceMappingURL=index.3b06b0f7.js.map
