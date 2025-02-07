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
})({"lEe9t":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "3a6cf3c0e7f05703";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
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
            it = o[Symbol.iterator]();
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
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
        checkedAssets = {
        };
        acceptedAssets = {
        };
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
            } else window.location.reload();
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
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
    bundle.hotData = {
    };
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

},{}],"jZgE0":[function(require,module,exports) {
var _tone = require("tone");
const dom = {
    sequencers: document.querySelectorAll('.sequencer__notes'),
    leds: document.querySelectorAll('.sequencer__leds'),
    polyrythms: document.querySelectorAll('.rythms > input'),
    selectors: document.querySelectorAll('.selector'),
    play: document.querySelector('#play'),
    reset: document.querySelector('#reset'),
    bpm: document.querySelector('#bpm'),
    xor: document.querySelector('#xor'),
    randomize: document.querySelector('#random'),
    vcos: document.querySelectorAll('.vcos > button'),
    shareButton: document.querySelector('#share'),
    shareUrl: document.querySelector('#shareUrl')
};
const lim = new _tone.Limiter(-1).toDestination();
const vol = new _tone.Volume(-10).connect(lim);
const rev = new _tone.Reverb({
    decay: 5,
    wet: 0.3,
    preDelay: 0.1
}).connect(vol);
const vco1 = new _tone.Synth().connect(rev);
const vco2 = new _tone.Synth().connect(rev);
const kick = new _tone.MembraneSynth({
    pitchDecay: 0.02
}).connect(vol);
let config = {
    muted: [
        false,
        false,
        false
    ],
    tempo: 120,
    notes1: [
        'C4',
        'D4',
        'D#4',
        'G4'
    ],
    notes2: [
        'G#3',
        'F3',
        'C3',
        'C3'
    ],
    polys: [
        16,
        2,
        5,
        9
    ],
    seq1: [
        false,
        true,
        true,
        true
    ],
    seq2: [
        true,
        false,
        false,
        false
    ]
};
function randomize() {
    config.notes1 = config.notes1.map((value)=>({
            value,
            sort: Math.random()
        })
    ).sort((a, b)=>a.sort - b.sort
    ).map(({ value  })=>value
    );
    config.notes2 = config.notes2.map((value)=>({
            value,
            sort: Math.random()
        })
    ).sort((a, b)=>a.sort - b.sort
    ).map(({ value  })=>value
    );
    config.polys = [
        Math.ceil(Math.random() * 16),
        Math.ceil(Math.random() * 16),
        Math.ceil(Math.random() * 16),
        Math.ceil(Math.random() * 16)
    ];
    config.seq1 = [
        Math.random() > 0.5,
        Math.random() > 0.5,
        Math.random() > 0.5,
        Math.random() > 0.5
    ];
    config.seq2 = [
        Math.random() > 0.8,
        Math.random() > 0.8,
        Math.random() > 0.8,
        Math.random() > 0.8
    ];
    updateUI();
}
function updateUI() {
    // set sequencer notes
    config.notes1.forEach((note, i)=>{
        dom.sequencers[0].querySelectorAll('input')[i].value = note.toString();
    });
    config.notes2.forEach((note, i)=>{
        dom.sequencers[1].querySelectorAll('input')[i].value = note.toString();
    });
    // set polyrytms values
    config.polys.forEach((rythm, i)=>{
        dom.polyrythms[i].value = rythm.toString();
    });
    config.seq1.forEach((val, i)=>{
        dom.selectors[0].querySelectorAll('button')[i].classList.toggle('active', val);
    });
    config.seq2.forEach((val, i)=>{
        dom.selectors[1].querySelectorAll('button')[i].classList.toggle('active', val);
    });
}
// set sequencer notes
config.notes1.forEach((note, i)=>{
    dom.sequencers[0].querySelectorAll('input')[i].value = note.toString();
});
config.notes2.forEach((note, i)=>{
    dom.sequencers[1].querySelectorAll('input')[i].value = note.toString();
});
// set polyrytms values
config.polys.forEach((rythm, i)=>{
    dom.polyrythms[i].value = rythm.toString();
});
config.seq1.forEach((val, i)=>{
    dom.selectors[0].querySelectorAll('button')[i].classList.toggle('active', val);
});
config.seq2.forEach((val, i)=>{
    dom.selectors[1].querySelectorAll('button')[i].classList.toggle('active', val);
});
let xor = false;
let time = 0;
let time1 = 0;
let time2 = 0;
let isPlaying = false;
// set bpm
dom.bpm.value = config.tempo.toString();
dom.bpm.addEventListener('change', ()=>{
    config.tempo = parseInt(dom.bpm.value);
});
dom.sequencers[0].querySelectorAll('input').forEach((input, i)=>{
    input.addEventListener('change', ()=>{
        config.notes1[i] = input.value;
    });
});
dom.sequencers[1].querySelectorAll('input').forEach((input, i)=>{
    input.addEventListener('change', ()=>{
        config.notes2[i] = input.value;
    });
});
// set lights
Array.from(dom.leds[0].children).forEach((child, i)=>child.classList.toggle('active', time1 === i)
);
Array.from(dom.leds[1].children).forEach((child, i)=>child.classList.toggle('active', time2 === i)
);
dom.polyrythms.forEach((input, i)=>{
    input.addEventListener('change', ()=>{
        config.polys[i] = parseInt(input.value);
    });
});
dom.selectors[0].querySelectorAll('button').forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        config.seq1[i] = !config.seq1[i];
        btn.classList.toggle('active', config.seq1[i]);
    });
});
dom.selectors[1].querySelectorAll('button').forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        config.seq2[i] = !config.seq2[i];
        btn.classList.toggle('active', config.seq2[i]);
    });
});
dom.shareButton.addEventListener('click', ()=>{
    dom.shareUrl.hidden = false;
    window.location.hash = sequenceToString();
    dom.shareUrl.value = window.location;
});
function doPlay(r, i) {
    if (xor) return r.filter((n)=>i % n === 0
    ).length === 1;
    return r.some((n)=>i % n === 0
    );
}
function forward() {
    if (time % 4 === 0 && !config.muted[2]) kick.triggerAttackRelease('C2', '8n');
    if (doPlay(config.polys.filter((_p, i)=>config.seq1[i]
    ), time)) {
        time1 = (time1 + 1) % 4;
        Array.from(dom.leds[0].children).forEach((child, i)=>child.classList.toggle('active', time1 === i)
        );
    }
    if (doPlay(config.polys.filter((_p, i)=>config.seq2[i]
    ), time)) {
        time2 = (time2 + 1) % 4;
        Array.from(dom.leds[1].children).forEach((child, i)=>child.classList.toggle('active', time2 === i)
        );
    }
    if (doPlay(config.polys.filter((_p, i)=>config.seq2[i] || config.seq1[i]
    ), time)) {
        if (!config.muted[0]) vco1.triggerAttackRelease(config.notes1[time1], '8n');
        if (!config.muted[1]) vco2.triggerAttackRelease(config.notes2[time2], '8n');
    }
    time++;
    if (isPlaying) setTimeout(forward, 60000 / config.tempo / 4);
}
dom.play.addEventListener('click', ()=>{
    isPlaying = !isPlaying;
    dom.play.classList.toggle('active', isPlaying);
    if (isPlaying) forward();
});
dom.reset.addEventListener('click', ()=>{
    time = 0;
    time1 = 0;
    time2 = 0;
    Array.from(dom.leds[0].children).forEach((child, i)=>child.classList.toggle('active', time1 === i)
    );
    Array.from(dom.leds[1].children).forEach((child, i)=>child.classList.toggle('active', time2 === i)
    );
});
dom.vcos.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        config.muted[i] = !config.muted[i];
        btn.classList.toggle('active', !config.muted[i]);
    });
});
dom.xor.addEventListener('click', ()=>{
    xor = !xor;
    dom.xor.classList.toggle('active', xor);
});
function sequenceToString() {
    return btoa(JSON.stringify(config));
}
function sequenceFromString(input) {
    return JSON.parse(atob(input));
}
window.addEventListener('load', ()=>{
    if (window.location.hash.length > 0) try {
        config = sequenceFromString(window.location.hash.substr(1));
        updateUI();
    } catch (e) {
        console.log(`failed to parse sequence in url: ${e}`);
    }
});
dom.randomize.addEventListener('click', randomize);

},{"tone":"dA1gK"}],"dA1gK":[function(require,module,exports) {
/*! For license information please see Tone.js.LICENSE.txt */ !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Tone = e() : t.Tone = e();
}("undefined" != typeof self ? self : this, function() {
    return (()=>{
        var t1 = {
            228: (t2)=>{
                t2.exports = function(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var s = 0, n = new Array(e); s < e; s++)n[s] = t[s];
                    return n;
                }, t2.exports.default = t2.exports, t2.exports.__esModule = !0;
            },
            858: (t3)=>{
                t3.exports = function(t) {
                    if (Array.isArray(t)) return t;
                }, t3.exports.default = t3.exports, t3.exports.__esModule = !0;
            },
            575: (t4)=>{
                t4.exports = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }, t4.exports.default = t4.exports, t4.exports.__esModule = !0;
            },
            913: (t5)=>{
                function e2(t, e) {
                    for(var s = 0; s < e.length; s++){
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                t5.exports = function(t, s, n) {
                    return s && e2(t.prototype, s), n && e2(t, n), t;
                }, t5.exports.default = t5.exports, t5.exports.__esModule = !0;
            },
            884: (t6)=>{
                t6.exports = function(t, e) {
                    var s = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != s) {
                        var n, i, o = [], r = !0, a = !1;
                        try {
                            for(s = s.call(t); !(r = (n = s.next()).done) && (o.push(n.value), !e || o.length !== e); r = !0);
                        } catch (t) {
                            a = !0, i = t;
                        } finally{
                            try {
                                r || null == s.return || s.return();
                            } finally{
                                if (a) throw i;
                            }
                        }
                        return o;
                    }
                }, t6.exports.default = t6.exports, t6.exports.__esModule = !0;
            },
            521: (t)=>{
                t.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }, t.exports.default = t.exports, t.exports.__esModule = !0;
            },
            38: (t7, e3, s)=>{
                var n = s(858), i = s(884), o = s(379), r = s(521);
                t7.exports = function(t, e) {
                    return n(t) || i(t, e) || o(t, e) || r();
                }, t7.exports.default = t7.exports, t7.exports.__esModule = !0;
            },
            379: (t8, e4, s2)=>{
                var n = s2(228);
                t8.exports = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return n(t, e);
                        var s = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === s && t.constructor && (s = t.constructor.name), "Map" === s || "Set" === s ? Array.from(t) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? n(t, e) : void 0;
                    }
                }, t8.exports.default = t8.exports, t8.exports.__esModule = !0;
            },
            382: function(t9, e5, s3) {
                !function(t10, e6, s4, n2) {
                    function i1(t) {
                        return t && "object" == typeof t && "default" in t ? t : {
                            default: t
                        };
                    }
                    var o1 = i1(e6), r1 = i1(s4), a1 = i1(n2), c1 = function(t, e, s) {
                        return {
                            endTime: e,
                            insertTime: s,
                            type: "exponentialRampToValue",
                            value: t
                        };
                    }, h1 = function(t, e, s) {
                        return {
                            endTime: e,
                            insertTime: s,
                            type: "linearRampToValue",
                            value: t
                        };
                    }, l1 = function(t, e) {
                        return {
                            startTime: e,
                            type: "setValue",
                            value: t
                        };
                    }, u1 = function(t, e, s) {
                        return {
                            duration: s,
                            startTime: e,
                            type: "setValueCurve",
                            values: t
                        };
                    }, p1 = function(t, e, s) {
                        var n = s.startTime, i = s.target, o = s.timeConstant;
                        return i + (e - i) * Math.exp((n - t) / o);
                    }, d = function(t) {
                        return "exponentialRampToValue" === t.type;
                    }, f = function(t) {
                        return "linearRampToValue" === t.type;
                    }, _ = function(t) {
                        return d(t) || f(t);
                    }, m1 = function(t) {
                        return "setValue" === t.type;
                    }, g = function(t) {
                        return "setValueCurve" === t.type;
                    }, v1 = function t(e, s, n, i) {
                        var o = e[s];
                        return void 0 === o ? i : _(o) || m1(o) ? o.value : g(o) ? o.values[o.values.length - 1] : p1(n, t(e, s - 1, o.startTime, i), o);
                    }, y1 = function(t, e, s, n, i) {
                        return void 0 === s ? [
                            n.insertTime,
                            i
                        ] : _(s) ? [
                            s.endTime,
                            s.value
                        ] : m1(s) ? [
                            s.startTime,
                            s.value
                        ] : g(s) ? [
                            s.startTime + s.duration,
                            s.values[s.values.length - 1]
                        ] : [
                            s.startTime,
                            v1(t, e - 1, s.startTime, i)
                        ];
                    }, x1 = function(t) {
                        return "cancelAndHold" === t.type;
                    }, w1 = function(t) {
                        return "cancelScheduledValues" === t.type;
                    }, b = function(t) {
                        return x1(t) || w1(t) ? t.cancelTime : d(t) || f(t) ? t.endTime : t.startTime;
                    }, T = function(t, e, s, n) {
                        var i = n.endTime, o = n.value;
                        return s === o ? o : 0 < s && 0 < o || s < 0 && o < 0 ? s * Math.pow(o / s, (t - e) / (i - e)) : 0;
                    }, S = function(t, e, s, n) {
                        return s + (t - e) / (n.endTime - e) * (n.value - s);
                    }, k = function(t11, e7) {
                        var s5 = e7.duration, n3 = e7.startTime, i = e7.values;
                        return (function(t, e) {
                            var s = Math.floor(e), n = Math.ceil(e);
                            return s === n ? t[s] : (1 - (e - s)) * t[s] + (1 - (n - e)) * t[n];
                        })(i, (t11 - n3) / s5 * (i.length - 1));
                    }, A = function(t) {
                        return "setTarget" === t.type;
                    }, C = function(t12) {
                        function e8(t) {
                            r1.default(this, e8), this._automationEvents = [], this._currenTime = 0, this._defaultValue = t;
                        }
                        return a1.default(e8, [
                            {
                                key: t12,
                                value: function() {
                                    return this._automationEvents[Symbol.iterator]();
                                }
                            },
                            {
                                key: "add",
                                value: function(t13) {
                                    var e = b(t13);
                                    if (x1(t13) || w1(t13)) {
                                        var s6 = this._automationEvents.findIndex(function(s) {
                                            return w1(t13) && g(s) ? s.startTime + s.duration >= e : b(s) >= e;
                                        }), n = this._automationEvents[s6];
                                        if (-1 !== s6 && (this._automationEvents = this._automationEvents.slice(0, s6)), x1(t13)) {
                                            var i = this._automationEvents[this._automationEvents.length - 1];
                                            if (void 0 !== n && _(n)) {
                                                if (A(i)) throw new Error("The internal list is malformed.");
                                                var o = g(i) ? i.startTime + i.duration : b(i), r = g(i) ? i.values[i.values.length - 1] : i.value, a = d(n) ? T(e, o, r, n) : S(e, o, r, n), p = d(n) ? c1(a, e, this._currenTime) : h1(a, e, this._currenTime);
                                                this._automationEvents.push(p);
                                            }
                                            void 0 !== i && A(i) && this._automationEvents.push(l1(this.getValue(e), e)), void 0 !== i && g(i) && i.startTime + i.duration > e && (this._automationEvents[this._automationEvents.length - 1] = u1(new Float32Array([
                                                6,
                                                7
                                            ]), i.startTime, e - i.startTime));
                                        }
                                    } else {
                                        var m = this._automationEvents.findIndex(function(t) {
                                            return b(t) > e;
                                        }), v = -1 === m ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[m - 1];
                                        if (void 0 !== v && g(v) && b(v) + v.duration > e) return !1;
                                        var y = d(t13) ? c1(t13.value, t13.endTime, this._currenTime) : f(t13) ? h1(t13.value, e, this._currenTime) : t13;
                                        if (-1 === m) this._automationEvents.push(y);
                                        else {
                                            if (g(t13) && e + t13.duration > b(this._automationEvents[m])) return !1;
                                            this._automationEvents.splice(m, 0, y);
                                        }
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "flush",
                                value: function(t) {
                                    var e9 = this._automationEvents.findIndex(function(e) {
                                        return b(e) > t;
                                    });
                                    if (e9 > 1) {
                                        var s = this._automationEvents.slice(e9 - 1), n = s[0];
                                        A(n) && s.unshift(l1(v1(this._automationEvents, e9 - 2, n.startTime, this._defaultValue), n.startTime)), this._automationEvents = s;
                                    }
                                }
                            },
                            {
                                key: "getValue",
                                value: function(t) {
                                    if (0 === this._automationEvents.length) return this._defaultValue;
                                    var e10 = this._automationEvents.findIndex(function(e) {
                                        return b(e) > t;
                                    }), s = this._automationEvents[e10], n = (-1 === e10 ? this._automationEvents.length : e10) - 1, i = this._automationEvents[n];
                                    if (void 0 !== i && A(i) && (void 0 === s || !_(s) || s.insertTime > t)) return p1(t, v1(this._automationEvents, n - 1, i.startTime, this._defaultValue), i);
                                    if (void 0 !== i && m1(i) && (void 0 === s || !_(s))) return i.value;
                                    if (void 0 !== i && g(i) && (void 0 === s || !_(s) || i.startTime + i.duration > t)) return t < i.startTime + i.duration ? k(t, i) : i.values[i.values.length - 1];
                                    if (void 0 !== i && _(i) && (void 0 === s || !_(s))) return i.value;
                                    if (void 0 !== s && d(s)) {
                                        var r = y1(this._automationEvents, n, i, s, this._defaultValue), a = o1.default(r, 2), c = a[0], h = a[1];
                                        return T(t, c, h, s);
                                    }
                                    if (void 0 !== s && f(s)) {
                                        var l = y1(this._automationEvents, n, i, s, this._defaultValue), u = o1.default(l, 2), x = u[0], w = u[1];
                                        return S(t, x, w, s);
                                    }
                                    return this._defaultValue;
                                }
                            }
                        ]), e8;
                    }(Symbol.iterator);
                    t10.AutomationEventList = C, t10.createCancelAndHoldAutomationEvent = function(t) {
                        return {
                            cancelTime: t,
                            type: "cancelAndHold"
                        };
                    }, t10.createCancelScheduledValuesAutomationEvent = function(t) {
                        return {
                            cancelTime: t,
                            type: "cancelScheduledValues"
                        };
                    }, t10.createExponentialRampToValueAutomationEvent = function(t, e) {
                        return {
                            endTime: e,
                            type: "exponentialRampToValue",
                            value: t
                        };
                    }, t10.createLinearRampToValueAutomationEvent = function(t, e) {
                        return {
                            endTime: e,
                            type: "linearRampToValue",
                            value: t
                        };
                    }, t10.createSetTargetAutomationEvent = function(t, e, s) {
                        return {
                            startTime: e,
                            target: t,
                            timeConstant: s,
                            type: "setTarget"
                        };
                    }, t10.createSetValueAutomationEvent = l1, t10.createSetValueCurveAutomationEvent = u1, Object.defineProperty(t10, "__esModule", {
                        value: !0
                    });
                }(e5, s3(38), s3(575), s3(913));
            }
        }, e1 = {
        };
        function s1(n) {
            var i = e1[n];
            if (void 0 !== i) return i.exports;
            var o = e1[n] = {
                exports: {
                }
            };
            return t1[n].call(o.exports, o, o.exports, s1), o.exports;
        }
        s1.d = (t, e)=>{
            for(var n in e)s1.o(e, n) && !s1.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            });
        }, s1.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e)
        , s1.r = (t)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        };
        var n1 = {
        };
        return (()=>{
            s1.r(n1), s1.d(n1, {
                AMOscillator: ()=>$o
                ,
                AMSynth: ()=>Dr
                ,
                Abs: ()=>pr
                ,
                Add: ()=>nr
                ,
                AmplitudeEnvelope: ()=>kr
                ,
                Analyser: ()=>$a
                ,
                AudioToGain: ()=>Xo
                ,
                AutoFilter: ()=>da
                ,
                AutoPanner: ()=>_a
                ,
                AutoWah: ()=>ga
                ,
                BaseContext: ()=>Di
                ,
                BiquadFilter: ()=>Or
                ,
                BitCrusher: ()=>ya
                ,
                Buffer: ()=>Mc
                ,
                BufferSource: ()=>Rc
                ,
                Buffers: ()=>Ec
                ,
                Channel: ()=>ic
                ,
                Chebyshev: ()=>wa
                ,
                Chorus: ()=>Aa
                ,
                Clock: ()=>yo
                ,
                Compressor: ()=>lc
                ,
                Context: ()=>Oi
                ,
                Convolver: ()=>mc
                ,
                CrossFade: ()=>la
                ,
                DCMeter: ()=>tc
                ,
                Delay: ()=>xo
                ,
                Destination: ()=>wc
                ,
                Distortion: ()=>Ca
                ,
                Draw: ()=>Ac
                ,
                DuoSynth: ()=>qr
                ,
                EQ3: ()=>_c
                ,
                Emitter: ()=>Ci
                ,
                Envelope: ()=>wr
                ,
                FFT: ()=>Ka
                ,
                FMOscillator: ()=>Ho
                ,
                FMSynth: ()=>Fr
                ,
                FatOscillator: ()=>Ko
                ,
                FeedbackCombFilter: ()=>Ur
                ,
                FeedbackDelay: ()=>Oa
                ,
                Filter: ()=>Mr
                ,
                Follower: ()=>ma
                ,
                Freeverb: ()=>Fa
                ,
                Frequency: ()=>Ki
                ,
                FrequencyClass: ()=>$i
                ,
                FrequencyEnvelope: ()=>Er
                ,
                FrequencyShifter: ()=>Ea
                ,
                Gain: ()=>lo
                ,
                GainToAudio: ()=>dr
                ,
                Gate: ()=>uc
                ,
                GrainPlayer: ()=>ur
                ,
                GreaterThan: ()=>gr
                ,
                GreaterThanZero: ()=>mr
                ,
                IntervalTimeline: ()=>Do
                ,
                JCReverb: ()=>Pa
                ,
                LFO: ()=>rr
                ,
                Limiter: ()=>pc
                ,
                Listener: ()=>Sc
                ,
                Loop: ()=>Hr
                ,
                LowpassCombFilter: ()=>Qr
                ,
                Master: ()=>bc
                ,
                MembraneSynth: ()=>Nr
                ,
                Merge: ()=>Ta
                ,
                MetalSynth: ()=>Vr
                ,
                Meter: ()=>Ja
                ,
                MidSideCompressor: ()=>dc
                ,
                MidSideMerge: ()=>Ga
                ,
                MidSideSplit: ()=>Ua
                ,
                Midi: ()=>So
                ,
                MidiClass: ()=>To
                ,
                Mono: ()=>oc
                ,
                MonoSynth: ()=>Rr
                ,
                MultibandCompressor: ()=>fc
                ,
                MultibandSplit: ()=>rc
                ,
                Multiply: ()=>Yo
                ,
                Negate: ()=>fr
                ,
                Noise: ()=>Po
                ,
                NoiseSynth: ()=>Pr
                ,
                Offline: ()=>wo
                ,
                OfflineContext: ()=>Fi
                ,
                OmniOscillator: ()=>sr
                ,
                OnePoleFilter: ()=>Gr
                ,
                Oscillator: ()=>Go
                ,
                PWMOscillator: ()=>tr
                ,
                PanVol: ()=>nc
                ,
                Panner: ()=>fa
                ,
                Panner3D: ()=>cc
                ,
                Param: ()=>io
                ,
                Part: ()=>Jr
                ,
                Pattern: ()=>ca
                ,
                Phaser: ()=>Wa
                ,
                PingPongDelay: ()=>La
                ,
                PitchShift: ()=>za
                ,
                Player: ()=>hr
                ,
                Players: ()=>lr
                ,
                PluckSynth: ()=>Zr
                ,
                PolySynth: ()=>Xr
                ,
                Pow: ()=>vr
                ,
                PulseOscillator: ()=>Jo
                ,
                Recorder: ()=>hc
                ,
                Reverb: ()=>Ba
                ,
                Sampler: ()=>Yr
                ,
                Scale: ()=>ir
                ,
                ScaleExp: ()=>yr
                ,
                Sequence: ()=>ha
                ,
                Signal: ()=>fo
                ,
                Solo: ()=>sc
                ,
                Split: ()=>ba
                ,
                StateTimeline: ()=>no
                ,
                StereoWidener: ()=>Za
                ,
                Subtract: ()=>_r
                ,
                SyncedSignal: ()=>xr
                ,
                Synth: ()=>Ar
                ,
                Ticks: ()=>Ao
                ,
                TicksClass: ()=>ko
                ,
                Time: ()=>Yi
                ,
                TimeClass: ()=>Xi
                ,
                Timeline: ()=>bi
                ,
                ToneAudioBuffer: ()=>qi
                ,
                ToneAudioBuffers: ()=>bo
                ,
                ToneAudioNode: ()=>oo
                ,
                ToneBufferSource: ()=>No
                ,
                ToneEvent: ()=>$r
                ,
                ToneOscillatorNode: ()=>Uo
                ,
                Transport: ()=>yc
                ,
                TransportTime: ()=>eo
                ,
                TransportTimeClass: ()=>to
                ,
                Tremolo: ()=>Xa
                ,
                Unit: ()=>e11
                ,
                UserMedia: ()=>Wo
                ,
                Vibrato: ()=>Ya
                ,
                Volume: ()=>Mo
                ,
                WaveShaper: ()=>Zo
                ,
                Waveform: ()=>ec
                ,
                Zero: ()=>or
                ,
                connect: ()=>ao
                ,
                connectSeries: ()=>ro
                ,
                connectSignal: ()=>_o
                ,
                context: ()=>Dc
                ,
                dbToGain: ()=>Li
                ,
                debug: ()=>t14
                ,
                defaultArg: ()=>di
                ,
                disconnect: ()=>co
                ,
                fanIn: ()=>ho
                ,
                ftom: ()=>Ui
                ,
                gainToDb: ()=>zi
                ,
                getContext: ()=>Ni
                ,
                getDestination: ()=>Tc
                ,
                getDraw: ()=>Cc
                ,
                getListener: ()=>kc
                ,
                getTransport: ()=>xc
                ,
                immediate: ()=>vc
                ,
                intervalToFrequencyRatio: ()=>Wi
                ,
                isArray: ()=>Ln
                ,
                isBoolean: ()=>jn
                ,
                isDefined: ()=>In
                ,
                isFunction: ()=>Vn
                ,
                isNote: ()=>Wn
                ,
                isNumber: ()=>Nn
                ,
                isObject: ()=>Pn
                ,
                isString: ()=>zn
                ,
                isUndef: ()=>Fn
                ,
                loaded: ()=>Oc
                ,
                mtof: ()=>Qi
                ,
                now: ()=>gc
                ,
                optionsFromArguments: ()=>pi
                ,
                setContext: ()=>Pi
                ,
                start: ()=>ji
                ,
                supported: ()=>qn
                ,
                version: ()=>i2
            });
            var t14 = {
            };
            s1.r(t14), s1.d(t14, {
                assert: ()=>Bn
                ,
                assertContextRunning: ()=>Gn
                ,
                assertRange: ()=>Un
                ,
                assertUsedScheduleTime: ()=>Yn
                ,
                enterScheduledCallback: ()=>Xn
                ,
                log: ()=>Jn
                ,
                setLogger: ()=>Hn
                ,
                warn: ()=>Kn
            });
            var e11 = {
            };
            s1.r(e11);
            const i2 = "14.8.36";
            var o2 = s1(382);
            const r2 = new WeakSet, a2 = new WeakMap, c2 = new WeakMap, h3 = new WeakMap, l2 = new WeakMap, u2 = new WeakMap, p2 = new WeakMap, d1 = new WeakMap, f1 = new WeakMap, _1 = new WeakMap, m2 = {
                construct: ()=>m2
            }, g1 = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/, v2 = (t, e)=>{
                const s = [];
                let n = t.replace(/^[\s]+/, ""), i = n.match(g1);
                for(; null !== i;){
                    const t = i[1].slice(1, -1), o = i[0].replace(/([\s]+)?;?$/, "").replace(t, new URL(t, e).toString());
                    s.push(o), n = n.slice(i[0].length).replace(/^[\s]+/, ""), i = n.match(g1);
                }
                return [
                    s.join(";"),
                    n
                ];
            }, y2 = (t)=>{
                if (void 0 !== t && !Array.isArray(t)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
            }, x2 = (t15)=>{
                if (!((t)=>{
                    try {
                        new new Proxy(t, m2);
                    } catch  {
                        return !1;
                    }
                    return !0;
                })(t15)) throw new TypeError("The given value for processorCtor should be a constructor.");
                if (null === t15.prototype || "object" != typeof t15.prototype) throw new TypeError("The given value for processorCtor should have a prototype.");
            }, w2 = (t, e)=>{
                const s = t.get(e);
                if (void 0 === s) throw new Error("A value with the given key could not be found.");
                return s;
            }, b1 = (t, e)=>{
                const s = Array.from(t).filter(e);
                if (s.length > 1) throw Error("More than one element was found.");
                if (0 === s.length) throw Error("No element was found.");
                const [n] = s;
                return t.delete(n), n;
            }, T1 = (t16, e, s, n)=>{
                const i = w2(t16, e), o = b1(i, (t)=>t[0] === s && t[1] === n
                );
                return 0 === i.size && t16.delete(e), o;
            }, S1 = (t)=>w2(p2, t)
            , k1 = (t17)=>{
                if (r2.has(t17)) throw new Error("The AudioNode is already stored.");
                r2.add(t17), S1(t17).forEach((t)=>t(!0)
                );
            }, A1 = (t)=>"port" in t
            , C1 = (t18)=>{
                if (!r2.has(t18)) throw new Error("The AudioNode is not stored.");
                r2.delete(t18), S1(t18).forEach((t)=>t(!1)
                );
            }, D1 = (t19, e)=>{
                !A1(t19) && e.every((t)=>0 === t.size
                ) && C1(t19);
            }, O1 = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                fftSize: 2048,
                maxDecibels: -30,
                minDecibels: -100,
                smoothingTimeConstant: 0.8
            }, M1 = (t, e)=>t.context === e
            , E1 = (t)=>{
                try {
                    t.copyToChannel(new Float32Array(1), 0, -1);
                } catch  {
                    return !1;
                }
                return !0;
            }, R1 = ()=>new DOMException("", "IndexSizeError")
            , q1 = (t20)=>{
                var e;
                t20.getChannelData = (e = t20.getChannelData, (s)=>{
                    try {
                        return e.call(t20, s);
                    } catch (t) {
                        if (12 === t.code) throw R1();
                        throw t;
                    }
                });
            }, F1 = {
                numberOfChannels: 1
            }, I1 = -340282346638528860000000000000000000000, V1 = -I1, N1 = (t)=>r2.has(t)
            , P1 = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }, j1 = (t)=>w2(a2, t)
            , L1 = (t)=>w2(h3, t)
            , z1 = (t22, e)=>{
                const { activeInputs: s8  } = j1(t22);
                s8.forEach((s9)=>s9.forEach(([s])=>{
                        e.includes(t22) || z1(s, [
                            ...e,
                            t22
                        ]);
                    })
                );
                const n = ((t)=>"playbackRate" in t
                )(t22) ? [
                    t22.playbackRate
                ] : A1(t22) ? Array.from(t22.parameters.values()) : ((t)=>"frequency" in t && "gain" in t
                )(t22) ? [
                    t22.Q,
                    t22.detune,
                    t22.frequency,
                    t22.gain
                ] : ((t)=>"offset" in t
                )(t22) ? [
                    t22.offset
                ] : ((t)=>!("frequency" in t) && "gain" in t
                )(t22) ? [
                    t22.gain
                ] : ((t)=>"detune" in t && "frequency" in t
                )(t22) ? [
                    t22.detune,
                    t22.frequency
                ] : ((t)=>"pan" in t
                )(t22) ? [
                    t22.pan
                ] : [];
                for (const t21 of n){
                    const s = L1(t21);
                    void 0 !== s && s.activeInputs.forEach(([t])=>z1(t, e)
                    );
                }
                N1(t22) && C1(t22);
            }, W1 = (t)=>{
                z1(t.destination, []);
            }, B1 = (t)=>"context" in t
            , U1 = (t)=>B1(t[0])
            , G1 = (t, e, s, n)=>{
                for (const e12 of t)if (s(e12)) {
                    if (n) return !1;
                    throw Error("The set contains at least one similar element.");
                }
                return t.add(e), !0;
            }, Q1 = (t23, e, [s, n], i)=>{
                G1(t23, [
                    e,
                    s,
                    n
                ], (t)=>t[0] === e && t[1] === s
                , i);
            }, Z1 = (t24, [e, s, n], i)=>{
                const o = t24.get(e);
                void 0 === o ? t24.set(e, new Set([
                    [
                        s,
                        n
                    ]
                ])) : G1(o, [
                    s,
                    n
                ], (t)=>t[0] === s
                , i);
            }, X1 = (t)=>"inputs" in t
            , Y1 = (t, e, s, n)=>{
                if (X1(e)) {
                    const i = e.inputs[n];
                    return t.connect(i, s, 0), [
                        i,
                        s,
                        0
                    ];
                }
                return t.connect(e, s, n), [
                    e,
                    s,
                    n
                ];
            }, $1 = (t, e, s)=>{
                for (const n of t)if (n[0] === e && n[1] === s) return t.delete(n), n;
                return null;
            }, H1 = (t, e)=>{
                if (!S1(t).delete(e)) throw new Error("Missing the expected event listener.");
            }, J1 = (t25, e, s)=>{
                const n = w2(t25, e), i = b1(n, (t)=>t[0] === s
                );
                return 0 === n.size && t25.delete(e), i;
            }, K1 = (t, e, s, n)=>{
                X1(e) ? t.disconnect(e.inputs[n], s, 0) : t.disconnect(e, s, n);
            }, tt = (t)=>w2(c2, t)
            , et = (t)=>w2(l2, t)
            , st = (t)=>d1.has(t)
            , nt = (t)=>!r2.has(t)
            , it = (t26, e13)=>new Promise((s)=>{
                    if (null !== e13) s(!0);
                    else {
                        const e = t26.createScriptProcessor(256, 1, 1), n4 = t26.createGain(), i3 = t26.createBuffer(1, 2, 44100), o = i3.getChannelData(0);
                        o[0] = 1, o[1] = 1;
                        const r = t26.createBufferSource();
                        r.buffer = i3, r.loop = !0, r.connect(e).connect(t26.destination), r.connect(n4), r.disconnect(n4), e.onaudioprocess = (n)=>{
                            const i = n.inputBuffer.getChannelData(0);
                            Array.prototype.some.call(i, (t)=>1 === t
                            ) ? s(!0) : s(!1), r.stop(), e.onaudioprocess = null, r.disconnect(e), e.disconnect(t26.destination);
                        }, r.start();
                    }
                })
            , ot = (t28, e)=>{
                const s10 = new Map;
                for (const e14 of t28)for (const t27 of e14){
                    const e = s10.get(t27);
                    s10.set(t27, void 0 === e ? 1 : e + 1);
                }
                s10.forEach((t, s)=>e(s, t)
                );
            }, rt = (t)=>"context" in t
            , at = (t29)=>{
                const e15 = new Map;
                t29.connect = ((t30)=>(s, n = 0, i = 0)=>{
                        const o = rt(s) ? t30(s, n, i) : t30(s, n), r = e15.get(s);
                        return void 0 === r ? e15.set(s, [
                            {
                                input: i,
                                output: n
                            }
                        ]) : r.every((t)=>t.input !== i || t.output !== n
                        ) && r.push({
                            input: i,
                            output: n
                        }), o;
                    }
                )(t29.connect.bind(t29)), t29.disconnect = ((s13)=>(n, i, o)=>{
                        if (s13.apply(t29), void 0 === n) e15.clear();
                        else if ("number" == typeof n) for (const [t31, s12] of e15){
                            const i = s12.filter((t)=>t.output !== n
                            );
                            0 === i.length ? e15.delete(t31) : e15.set(t31, i);
                        }
                        else if (e15.has(n)) {
                            if (void 0 === i) e15.delete(n);
                            else {
                                const t32 = e15.get(n);
                                if (void 0 !== t32) {
                                    const s = t32.filter((t)=>t.output !== i && (t.input !== o || void 0 === o)
                                    );
                                    0 === s.length ? e15.delete(n) : e15.set(n, s);
                                }
                            }
                        }
                        for (const [s11, n6] of e15)n6.forEach((e)=>{
                            rt(s11) ? t29.connect(s11, e.output, e.input) : t29.connect(s11, e.output);
                        });
                    }
                )(t29.disconnect);
            }, ct = (t35, e16, s14, n7, i5)=>{
                const [o3, r3] = ((t, e, s, n)=>{
                    const { activeInputs: i , passiveInputs: o  } = j1(e), r = $1(i[n], t, s);
                    return null === r ? [
                        T1(o, t, s, n)[2],
                        !1
                    ] : [
                        r[2],
                        !0
                    ];
                })(t35, s14, n7, i5);
                if (null !== o3 && (H1(t35, o3), !r3 || e16 || st(t35) || K1(tt(t35), tt(s14), n7, i5)), N1(s14)) {
                    const { activeInputs: t  } = j1(s14);
                    D1(s14, t);
                }
            }, ht = (t36, e17, s15, n8)=>{
                const [i6, o4] = ((t, e, s)=>{
                    const { activeInputs: n , passiveInputs: i  } = L1(e), o = $1(n, t, s);
                    return null === o ? [
                        J1(i, t, s)[1],
                        !1
                    ] : [
                        o[2],
                        !0
                    ];
                })(t36, s15, n8);
                null !== i6 && (H1(t36, i6), !o4 || e17 || st(t36) || tt(t36).disconnect(et(s15), n8));
            };
            class lt {
                constructor(t){
                    this._map = new Map(t);
                }
                get size() {
                    return this._map.size;
                }
                entries() {
                    return this._map.entries();
                }
                forEach(t, e = null) {
                    return this._map.forEach((s, n)=>t.call(e, s, n, this)
                    );
                }
                get(t) {
                    return this._map.get(t);
                }
                has(t) {
                    return this._map.has(t);
                }
                keys() {
                    return this._map.keys();
                }
                values() {
                    return this._map.values();
                }
            }
            const ut = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 1,
                numberOfOutputs: 1,
                parameterData: {
                },
                processorOptions: {
                }
            };
            function pt(t, e, s, n, i) {
                if ("function" == typeof t.copyFromChannel) 0 === e[s].byteLength && (e[s] = new Float32Array(128)), t.copyFromChannel(e[s], n, i);
                else {
                    const o = t.getChannelData(n);
                    if (0 === e[s].byteLength) e[s] = o.slice(i, i + 128);
                    else {
                        const t = new Float32Array(o.buffer, i * Float32Array.BYTES_PER_ELEMENT, 128);
                        e[s].set(t);
                    }
                }
            }
            const dt = (t, e, s, n, i)=>{
                "function" == typeof t.copyToChannel ? 0 !== e[s].byteLength && t.copyToChannel(e[s], n, i) : 0 !== e[s].byteLength && t.getChannelData(n).set(e[s], i);
            }, ft = (t, e)=>{
                const s = [];
                for(let n = 0; n < t; n += 1){
                    const t = [], i = "number" == typeof e ? e : e[n];
                    for(let e18 = 0; e18 < i; e18 += 1)t.push(new Float32Array(128));
                    s.push(t);
                }
                return s;
            }, _t = async (t37, e19, s16, n9, i, o, r)=>{
                const a = null === e19 ? 128 * Math.ceil(t37.context.length / 128) : e19.length, c = n9.channelCount * n9.numberOfInputs, h = i.reduce((t, e)=>t + e
                , 0), l = 0 === h ? null : s16.createBuffer(h, a, s16.sampleRate);
                if (void 0 === o) throw new Error("Missing the processor constructor.");
                const u = j1(t37), p = await ((t, e)=>{
                    const s = w2(_1, t), n = tt(e);
                    return w2(s, n);
                })(s16, t37), d = ft(n9.numberOfInputs, n9.channelCount), f = ft(n9.numberOfOutputs, i), m = Array.from(t37.parameters.keys()).reduce((t, e)=>({
                        ...t,
                        [e]: new Float32Array(128)
                    })
                , {
                });
                for(let h2 = 0; h2 < a; h2 += 128){
                    if (n9.numberOfInputs > 0 && null !== e19) for(let t39 = 0; t39 < n9.numberOfInputs; t39 += 1)for(let s17 = 0; s17 < n9.channelCount; s17 += 1)pt(e19, d[t39], s17, s17, h2);
                    void 0 !== o.parameterDescriptors && null !== e19 && o.parameterDescriptors.forEach(({ name: t  }, s)=>{
                        pt(e19, m, t, c + s, h2);
                    });
                    for(let t38 = 0; t38 < n9.numberOfInputs; t38 += 1)for(let e = 0; e < i[t38]; e += 1)0 === f[t38][e].byteLength && (f[t38][e] = new Float32Array(128));
                    try {
                        const t42 = d.map((t, e)=>0 === u.activeInputs[e].size ? [] : t
                        ), e = r(h2 / s16.sampleRate, s16.sampleRate, ()=>p.process(t42, f, m)
                        );
                        if (null !== l) for(let t41 = 0, e20 = 0; t41 < n9.numberOfOutputs; t41 += 1){
                            for(let s = 0; s < i[t41]; s += 1)dt(l, f[t41], s, e20 + s, h2);
                            e20 += i[t41];
                        }
                        if (!e) break;
                    } catch (e21) {
                        t37.dispatchEvent(new ErrorEvent("processorerror", {
                            colno: e21.colno,
                            filename: e21.filename,
                            lineno: e21.lineno,
                            message: e21.message
                        }));
                        break;
                    }
                }
                return l;
            }, mt = {
                Q: 1,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 350,
                gain: 0,
                type: "lowpass"
            }, gt = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }, vt = {
                channelCount: 6,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: 6
            }, yt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                offset: 1
            }, xt = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                disableNormalization: !1
            }, wt = (t)=>{
                const { port1: e , port2: s  } = new MessageChannel;
                return new Promise((n)=>{
                    const i = ()=>{
                        s.onmessage = null, e.close(), s.close(), n();
                    };
                    s.onmessage = ()=>i()
                    ;
                    try {
                        e.postMessage(t, [
                            t
                        ]);
                    } finally{
                        i();
                    }
                });
            }, bt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                delayTime: 0,
                maxDelayTime: 1
            }, Tt = (t, e, s)=>{
                const n = e[s];
                if (void 0 === n) throw t();
                return n;
            }, St = {
                attack: 0.003,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                knee: 30,
                ratio: 12,
                release: 0.25,
                threshold: -24
            }, kt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                gain: 1
            }, At = ()=>new DOMException("", "InvalidStateError")
            , Ct = ()=>new DOMException("", "InvalidAccessError")
            , Dt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            }, Ot = (t, e, s, n, i, o, r, a, c, h, l)=>{
                const u = h.length;
                let p = a;
                for(let a3 = 0; a3 < u; a3 += 1){
                    let u = s[0] * h[a3];
                    for(let e22 = 1; e22 < i; e22 += 1){
                        const n = p - e22 & c - 1;
                        u += s[e22] * o[n], u -= t[e22] * r[n];
                    }
                    for(let t45 = i; t45 < n; t45 += 1)u += s[t45] * o[p - t45 & c - 1];
                    for(let s19 = i; s19 < e; s19 += 1)u -= t[s19] * r[p - s19 & c - 1];
                    o[p] = h[a3], r[p] = u, p = p + 1 & c - 1, l[a3] = u;
                }
                return p;
            }, Mt = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers"
            }, Et = (t)=>{
                const e = new Uint32Array([
                    1179011410,
                    40,
                    1163280727,
                    544501094,
                    16,
                    131073,
                    44100,
                    176400,
                    1048580,
                    1635017060,
                    4,
                    0
                ]);
                try {
                    const s = t.decodeAudioData(e.buffer, ()=>{
                    });
                    return void 0 !== s && (s.catch(()=>{
                    }), !0);
                } catch  {
                }
                return !1;
            }, Rt = (t, e, s)=>{
                const n = e[s];
                void 0 !== n && n !== t[s] && (t[s] = n);
            }, qt = (t, e)=>{
                Rt(t, e, "channelCount"), Rt(t, e, "channelCountMode"), Rt(t, e, "channelInterpretation");
            }, Ft = (t)=>"function" == typeof t.getFloatTimeDomainData
            , It = (t, e, s)=>{
                const n = e[s];
                void 0 !== n && n !== t[s].value && (t[s].value = n);
            }, Vt = (t)=>{
                t.start = ((e)=>(s = 0, n = 0, i)=>{
                        if ("number" == typeof i && i < 0 || n < 0 || s < 0) throw new RangeError("The parameters can't be negative.");
                        e.call(t, s, n, i);
                    }
                )(t.start);
            }, Nt = (t)=>{
                var e;
                t.stop = (e = t.stop, (s = 0)=>{
                    if (s < 0) throw new RangeError("The parameter can't be negative.");
                    e.call(t, s);
                });
            }, Pt = (t, e)=>null === t ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e)))))
            , jt = (t, e)=>{
                const s = t.createBiquadFilter();
                return qt(s, e), It(s, e, "Q"), It(s, e, "detune"), It(s, e, "frequency"), It(s, e, "gain"), Rt(s, e, "type"), s;
            }, Lt = (t46, e23)=>{
                const s = t46.createChannelSplitter(e23.numberOfOutputs);
                return qt(s, e23), ((t47)=>{
                    const e = t47.numberOfOutputs;
                    Object.defineProperty(t47, "channelCount", {
                        get: ()=>e
                        ,
                        set: (t)=>{
                            if (t !== e) throw At();
                        }
                    }), Object.defineProperty(t47, "channelCountMode", {
                        get: ()=>"explicit"
                        ,
                        set: (t)=>{
                            if ("explicit" !== t) throw At();
                        }
                    }), Object.defineProperty(t47, "channelInterpretation", {
                        get: ()=>"discrete"
                        ,
                        set: (t)=>{
                            if ("discrete" !== t) throw At();
                        }
                    });
                })(s), s;
            }, zt = (t, e)=>(t.connect = e.connect.bind(e), t.disconnect = e.disconnect.bind(e), t)
            , Wt = (t, e)=>{
                const s = t.createDelay(e.maxDelayTime);
                return qt(s, e), It(s, e, "delayTime"), s;
            }, Bt = (t, e)=>{
                const s = t.createGain();
                return qt(s, e), It(s, e, "gain"), s;
            };
            function Ut(t, e) {
                const s = e[0] * e[0] + e[1] * e[1];
                return [
                    (t[0] * e[0] + t[1] * e[1]) / s,
                    (t[1] * e[0] - t[0] * e[1]) / s
                ];
            }
            function Gt(t, e) {
                let s = [
                    0,
                    0
                ];
                for(let o = t.length - 1; o >= 0; o -= 1)i = e, s = [
                    (n = s)[0] * i[0] - n[1] * i[1],
                    n[0] * i[1] + n[1] * i[0]
                ], s[0] += t[o];
                var n, i;
                return s;
            }
            const Qt = (t, e, s, n)=>t.createScriptProcessor(e, s, n)
            , Zt = ()=>new DOMException("", "NotSupportedError")
            , Xt = {
                numberOfChannels: 1
            }, Yt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 440,
                periodicWave: void 0,
                type: "sine"
            }, $t = {
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                coneInnerAngle: 360,
                coneOuterAngle: 360,
                coneOuterGain: 0,
                distanceModel: "inverse",
                maxDistance: 10000,
                orientationX: 1,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                refDistance: 1,
                rolloffFactor: 1
            }, Ht = {
                disableNormalization: !1
            }, Jt = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                pan: 0
            }, Kt = ()=>new DOMException("", "UnknownError")
            , te = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                curve: null,
                oversample: "none"
            }, ee = (t, e, s)=>void 0 === t.copyFromChannel ? t.getChannelData(s)[0] : (t.copyFromChannel(e, s), e[0])
            , se = (t)=>{
                if (null === t) return !1;
                const e = t.length;
                return e % 2 != 0 ? 0 !== t[Math.floor(e / 2)] : t[e / 2 - 1] + t[e / 2] !== 0;
            }, ne = (t, e, s, n)=>{
                let i = t;
                for(; !i.hasOwnProperty(e);)i = Object.getPrototypeOf(i);
                const { get: o , set: r  } = Object.getOwnPropertyDescriptor(i, e);
                Object.defineProperty(t, e, {
                    get: s(o),
                    set: n(r)
                });
            }, ie = (t, e, s)=>{
                try {
                    t.setValueAtTime(e, s);
                } catch (n) {
                    if (9 !== n.code) throw n;
                    ie(t, e, s + 0.0000001);
                }
            }, oe = (t)=>{
                const e = t.createOscillator();
                try {
                    e.start(-1);
                } catch (t48) {
                    return t48 instanceof RangeError;
                }
                return !1;
            }, re = (t)=>{
                const e = t.createBuffer(1, 1, 44100), s = t.createBufferSource();
                s.buffer = e, s.start(), s.stop();
                try {
                    return s.stop(), !0;
                } catch  {
                    return !1;
                }
            }, ae = (t)=>{
                const e = t.createOscillator();
                try {
                    e.stop(-1);
                } catch (t49) {
                    return t49 instanceof RangeError;
                }
                return !1;
            }, ce = ()=>{
                try {
                    new DOMException;
                } catch  {
                    return !1;
                }
                return !0;
            }, he = ()=>new Promise((t)=>{
                    const e24 = new ArrayBuffer(0), { port1: s , port2: n  } = new MessageChannel;
                    s.onmessage = ({ data: e  })=>t(null !== e)
                    , n.postMessage(e24, [
                        e24
                    ]);
                })
            , le = (t, e25)=>{
                const s = e25.createGain();
                t.connect(s);
                const n10 = ((e)=>()=>{
                        e.call(t, s), t.removeEventListener("ended", n10);
                    }
                )(t.disconnect);
                t.addEventListener("ended", n10), zt(t, s), t.stop = ((e)=>{
                    let n = !1;
                    return (i = 0)=>{
                        if (n) try {
                            e.call(t, i);
                        } catch  {
                            s.gain.setValueAtTime(0, i);
                        }
                        else e.call(t, i), n = !0;
                    };
                })(t.stop);
            }, ue = (t, e)=>(s)=>{
                    const n = {
                        value: t
                    };
                    return Object.defineProperties(s, {
                        currentTarget: n,
                        target: n
                    }), "function" == typeof e ? e.call(t, s) : e.handleEvent.call(t, s);
                }
            , pe = ((t50)=>(e, s, [n, i, o], r)=>{
                    t50(e[i], [
                        s,
                        n,
                        o
                    ], (t)=>t[0] === s && t[1] === n
                    , r);
                }
            )(G1), de = ((t51)=>(e, s, [n, i, o], r)=>{
                    const a = e.get(n);
                    void 0 === a ? e.set(n, new Set([
                        [
                            i,
                            s,
                            o
                        ]
                    ])) : t51(a, [
                        i,
                        s,
                        o
                    ], (t)=>t[0] === i && t[1] === s
                    , r);
                }
            )(G1), fe = ((t52)=>(e, s, n, i)=>t52(e[i], (t)=>t[0] === s && t[1] === n
                    )
            )(b1), _e = new WeakMap, me = ((t)=>(e)=>{
                    var s;
                    return null !== (s = t.get(e)) && void 0 !== s ? s : 0;
                }
            )(_e), ge = (ve = new Map, ye = new WeakMap, (t, e26)=>{
                const s = ye.get(t);
                if (void 0 !== s) return s;
                const n = ve.get(t);
                if (void 0 !== n) return n;
                try {
                    const s = e26();
                    return s instanceof Promise ? (ve.set(t, s), s.catch(()=>!1
                    ).then((e)=>(ve.delete(t), ye.set(t, e), e)
                    )) : (ye.set(t, s), s);
                } catch  {
                    return ye.set(t, !1), !1;
                }
            });
            var ve, ye;
            const xe = "undefined" == typeof window ? null : window, we = ((t53, e27)=>(s20, n11)=>{
                    const i = s20.createAnalyser();
                    if (qt(i, n11), !(n11.maxDecibels > n11.minDecibels)) throw e27();
                    return Rt(i, n11, "fftSize"), Rt(i, n11, "maxDecibels"), Rt(i, n11, "minDecibels"), Rt(i, n11, "smoothingTimeConstant"), t53(Ft, ()=>Ft(i)
                    ) || ((t)=>{
                        t.getFloatTimeDomainData = (e)=>{
                            const s = new Uint8Array(e.length);
                            t.getByteTimeDomainData(s);
                            const n = Math.max(s.length, t.fftSize);
                            for(let t54 = 0; t54 < n; t54 += 1)e[t54] = 0.0078125 * (s[t54] - 128);
                            return e;
                        };
                    })(i), i;
                }
            )(ge, R1), be = ((t)=>(e)=>{
                    const s = t(e);
                    if (null === s.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
                    return s.renderer;
                }
            )(j1), Te = ((t55, e28, s)=>async (n, i, o)=>{
                    const r4 = t55(n);
                    await Promise.all(r4.activeInputs.map((t56, r)=>Array.from(t56).map(async ([t, a])=>{
                            const c = e28(t), h = await c.render(t, i), l = n.context.destination;
                            s(t) || n === l && s(n) || h.connect(o, a, r);
                        })
                    ).reduce((t, e)=>[
                            ...t,
                            ...e
                        ]
                    , []));
                }
            )(j1, be, st), Se = ((t, e29, s)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i7, o5) {
                            const r5 = n.get(o5);
                            return void 0 !== r5 ? Promise.resolve(r5) : (async (i, o)=>{
                                let r = e29(i);
                                if (!M1(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        fftSize: r.fftSize,
                                        maxDecibels: r.maxDecibels,
                                        minDecibels: r.minDecibels,
                                        smoothingTimeConstant: r.smoothingTimeConstant
                                    };
                                    r = t(o, e);
                                }
                                return n.set(o, r), await s(i, o, r), r;
                            })(i7, o5);
                        }
                    };
                }
            )(we, tt, Te), ke = (Ae = u2, (t)=>{
                const e = Ae.get(t);
                if (void 0 === e) throw At();
                return e;
            });
            var Ae;
            const Ce = ((t)=>null === t ? null : t.hasOwnProperty("OfflineAudioContext") ? t.OfflineAudioContext : t.hasOwnProperty("webkitOfflineAudioContext") ? t.webkitOfflineAudioContext : null
            )(xe), De = ((t)=>(e)=>null !== t && e instanceof t
            )(Ce), Oe = new WeakMap, Me = ((t57)=>class {
                    constructor(t){
                        this._nativeEventTarget = t, this._listeners = new WeakMap;
                    }
                    addEventListener(e, s, n) {
                        if (null !== s) {
                            let i = this._listeners.get(s);
                            void 0 === i && (i = t57(this, s), "function" == typeof s && this._listeners.set(s, i)), this._nativeEventTarget.addEventListener(e, i, n);
                        }
                    }
                    dispatchEvent(t) {
                        return this._nativeEventTarget.dispatchEvent(t);
                    }
                    removeEventListener(t, e, s) {
                        const n = null === e ? void 0 : this._listeners.get(e);
                        this._nativeEventTarget.removeEventListener(t, void 0 === n ? null : n, s);
                    }
                }
            )(ue), Ee = ((t)=>null === t ? null : t.hasOwnProperty("AudioContext") ? t.AudioContext : t.hasOwnProperty("webkitAudioContext") ? t.webkitAudioContext : null
            )(xe), Re = ((t)=>(e)=>null !== t && e instanceof t
            )(Ee), qe = ((t)=>(e)=>null !== t && "function" == typeof t.AudioNode && e instanceof t.AudioNode
            )(xe), Fe = ((t)=>(e)=>null !== t && "function" == typeof t.AudioParam && e instanceof t.AudioParam
            )(xe), Ie = ((t)=>null === t ? null : t.hasOwnProperty("AudioWorkletNode") ? t.AudioWorkletNode : null
            )(xe), Ve = ((t58, e30, s21, n12, i8, o6, r6, a4, h, l3, u, d, f, _, m, g)=>class extends l3 {
                    constructor(e, n, i, o){
                        super(i), this._context = e, this._nativeAudioNode = i;
                        const r = u(e);
                        d(r) && !0 !== s21(it, ()=>it(r, g)
                        ) && at(i), c2.set(this, i), p2.set(this, new Set), "closed" !== e.state && n && k1(this), t58(this, o, i);
                    }
                    get channelCount() {
                        return this._nativeAudioNode.channelCount;
                    }
                    set channelCount(t) {
                        this._nativeAudioNode.channelCount = t;
                    }
                    get channelCountMode() {
                        return this._nativeAudioNode.channelCountMode;
                    }
                    set channelCountMode(t) {
                        this._nativeAudioNode.channelCountMode = t;
                    }
                    get channelInterpretation() {
                        return this._nativeAudioNode.channelInterpretation;
                    }
                    set channelInterpretation(t) {
                        this._nativeAudioNode.channelInterpretation = t;
                    }
                    get context() {
                        return this._context;
                    }
                    get numberOfInputs() {
                        return this._nativeAudioNode.numberOfInputs;
                    }
                    get numberOfOutputs() {
                        return this._nativeAudioNode.numberOfOutputs;
                    }
                    connect(t61, s22 = 0, a5 = 0) {
                        if (s22 < 0 || s22 >= this._nativeAudioNode.numberOfOutputs) throw i8();
                        const c3 = u(this._context), l = m(c3);
                        if (f(t61) || _(t61)) throw o6();
                        if (B1(t61)) {
                            const i = tt(t61);
                            try {
                                const e = Y1(this._nativeAudioNode, i, s22, a5), n = nt(this);
                                (l || n) && this._nativeAudioNode.disconnect(...e), "closed" !== this.context.state && !n && nt(t61) && k1(t61);
                            } catch (t59) {
                                if (12 === t59.code) throw o6();
                                throw t59;
                            }
                            if (e30(this, t61, s22, a5, l)) {
                                const e = h([
                                    this
                                ], t61);
                                ot(e, n12(l));
                            }
                            return t61;
                        }
                        const p = et(t61);
                        if ("playbackRate" === p.name && 1024 === p.maxValue) throw r6();
                        try {
                            this._nativeAudioNode.connect(p, s22), (l || nt(this)) && this._nativeAudioNode.disconnect(p, s22);
                        } catch (t60) {
                            if (12 === t60.code) throw o6();
                            throw t60;
                        }
                        if (((t62, e31, s23, n)=>{
                            const { activeInputs: i , passiveInputs: o  } = L1(e31), { outputs: r7  } = j1(t62), a6 = S1(t62), c4 = (r)=>{
                                const a = tt(t62), c = et(e31);
                                if (r) {
                                    const e = J1(o, t62, s23);
                                    Q1(i, t62, e, !1), n || st(t62) || a.connect(c, s23);
                                } else {
                                    const e32 = ((t63, e, s)=>b1(t63, (t)=>t[0] === e && t[1] === s
                                        )
                                    )(i, t62, s23);
                                    Z1(o, e32, !1), n || st(t62) || a.disconnect(c, s23);
                                }
                            };
                            return !!G1(r7, [
                                e31,
                                s23
                            ], (t)=>t[0] === e31 && t[1] === s23
                            , !0) && (a6.add(c4), N1(t62) ? Q1(i, t62, [
                                s23,
                                c4
                            ], !0) : Z1(o, [
                                t62,
                                s23,
                                c4
                            ], !0), !0);
                        })(this, t61, s22, l)) {
                            const e = h([
                                this
                            ], t61);
                            ot(e, n12(l));
                        }
                    }
                    disconnect(t65, e34, s24) {
                        let n13;
                        const r = u(this._context), c = m(r);
                        if (void 0 === t65) n13 = ((t, e)=>{
                            const s = j1(t), n = [];
                            for (const i of s.outputs)U1(i) ? ct(t, e, ...i) : ht(t, e, ...i), n.push(i[0]);
                            return s.outputs.clear(), n;
                        })(this, c);
                        else if ("number" == typeof t65) {
                            if (t65 < 0 || t65 >= this.numberOfOutputs) throw i8();
                            n13 = ((t, e, s)=>{
                                const n = j1(t), i = [];
                                for (const o of n.outputs)o[1] === s && (U1(o) ? ct(t, e, ...o) : ht(t, e, ...o), i.push(o[0]), n.outputs.delete(o));
                                return i;
                            })(this, c, t65);
                        } else {
                            if (void 0 !== e34 && (e34 < 0 || e34 >= this.numberOfOutputs)) throw i8();
                            if (B1(t65) && void 0 !== s24 && (s24 < 0 || s24 >= t65.numberOfInputs)) throw i8();
                            if (n13 = ((t66, e, s25, n, i)=>{
                                const o = j1(t66);
                                return Array.from(o.outputs).filter((t)=>!(t[0] !== s25 || void 0 !== n && t[1] !== n || void 0 !== i && t[2] !== i)
                                ).map((s)=>(U1(s) ? ct(t66, e, ...s) : ht(t66, e, ...s), o.outputs.delete(s), s[0])
                                );
                            })(this, c, t65, e34, s24), 0 === n13.length) throw o6();
                        }
                        for (const t64 of n13){
                            const e = h([
                                this
                            ], t64);
                            ot(e, a4);
                        }
                    }
                }
            )((Ne = a2, (t, e, s)=>{
                const n = [];
                for(let t67 = 0; t67 < s.numberOfInputs; t67 += 1)n.push(new Set);
                Ne.set(t, {
                    activeInputs: n,
                    outputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                });
            }), ((t68, e35, s26, n, i, o7, r, a7, c, h4, l, u, p)=>{
                const d = new WeakMap;
                return (f, _, m, g, v)=>{
                    const { activeInputs: y , passiveInputs: x  } = o7(_), { outputs: w  } = o7(f), b = a7(f), S = (o)=>{
                        const a = c(_), h = c(f);
                        if (o) {
                            const e = T1(x, f, m, g);
                            t68(y, f, e, !1), v || u(f) || s26(h, a, m, g), p(_) && k1(_);
                        } else {
                            const t = n(y, f, m, g);
                            e35(x, g, t, !1), v || u(f) || i(h, a, m, g);
                            const s = r(_);
                            if (0 === s) l(_) && D1(_, y);
                            else {
                                const t = d.get(_);
                                void 0 !== t && clearTimeout(t), d.set(_, setTimeout(()=>{
                                    l(_) && D1(_, y);
                                }, 1000 * s));
                            }
                        }
                    };
                    return !!h4(w, [
                        _,
                        m,
                        g
                    ], (t)=>t[0] === _ && t[1] === m && t[2] === g
                    , !0) && (b.add(S), l(f) ? t68(y, f, [
                        m,
                        g,
                        S
                    ], !0) : e35(x, g, [
                        f,
                        m,
                        S
                    ], !0), !0);
                };
            })(pe, de, Y1, fe, K1, j1, me, S1, tt, G1, N1, st, nt), ge, ((t69, e36, s, n, i9, o8)=>(r)=>(a, c)=>{
                        const h = t69.get(a);
                        if (void 0 === h) {
                            if (!r && o8(a)) {
                                const t = n(a), { outputs: o  } = s(a);
                                for (const s27 of o)if (U1(s27)) {
                                    const i = n(s27[0]);
                                    e36(t, i, s27[1], s27[2]);
                                } else {
                                    const e = i9(s27[0]);
                                    t.disconnect(e, s27[1]);
                                }
                            }
                            t69.set(a, c);
                        } else t69.set(a, h + c);
                    }
            )(d1, K1, j1, tt, et, N1), R1, Ct, Zt, ((t70, e37, s, n, i10, o9, r, a)=>(c, h)=>{
                    const l = e37.get(c);
                    if (void 0 === l) throw new Error("Missing the expected cycle count.");
                    const u = o9(c.context), p = a(u);
                    if (l === h) {
                        if (e37.delete(c), !p && r(c)) {
                            const e = n(c), { outputs: o  } = s(c);
                            for (const s30 of o)if (U1(s30)) {
                                const i = n(s30[0]);
                                t70(e, i, s30[1], s30[2]);
                            } else {
                                const t = i10(s30[0]);
                                e.connect(t, s30[1]);
                            }
                        }
                    } else e37.set(c, l - h);
                }
            )(Y1, d1, j1, tt, et, ke, N1, De), ((t71, e38, s)=>function n(i, o) {
                    const r = B1(o) ? o : s(t71, o);
                    if (((t)=>"delayTime" in t
                    )(r)) return [];
                    if (i[0] === r) return [
                        i
                    ];
                    if (i.includes(r)) return [];
                    const { outputs: a  } = e38(r);
                    return Array.from(a).map((t)=>n([
                            ...i,
                            r
                        ], t[0])
                    ).reduce((t, e)=>t.concat(e)
                    , []);
                }
            )(Oe, j1, w2), Me, ke, Re, qe, Fe, De, Ie);
            var Ne;
            const Pe = ((t72, e39, s32, n, i, o)=>class extends t72 {
                    constructor(t, s){
                        const r = i(t), a = {
                            ...O1,
                            ...s
                        }, c = n(r, a);
                        super(t, !1, c, o(r) ? e39() : null), this._nativeAnalyserNode = c;
                    }
                    get fftSize() {
                        return this._nativeAnalyserNode.fftSize;
                    }
                    set fftSize(t) {
                        this._nativeAnalyserNode.fftSize = t;
                    }
                    get frequencyBinCount() {
                        return this._nativeAnalyserNode.frequencyBinCount;
                    }
                    get maxDecibels() {
                        return this._nativeAnalyserNode.maxDecibels;
                    }
                    set maxDecibels(t) {
                        const e = this._nativeAnalyserNode.maxDecibels;
                        if (this._nativeAnalyserNode.maxDecibels = t, !(t > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = e, s32();
                    }
                    get minDecibels() {
                        return this._nativeAnalyserNode.minDecibels;
                    }
                    set minDecibels(t) {
                        const e = this._nativeAnalyserNode.minDecibels;
                        if (this._nativeAnalyserNode.minDecibels = t, !(this._nativeAnalyserNode.maxDecibels > t)) throw this._nativeAnalyserNode.minDecibels = e, s32();
                    }
                    get smoothingTimeConstant() {
                        return this._nativeAnalyserNode.smoothingTimeConstant;
                    }
                    set smoothingTimeConstant(t) {
                        this._nativeAnalyserNode.smoothingTimeConstant = t;
                    }
                    getByteFrequencyData(t) {
                        this._nativeAnalyserNode.getByteFrequencyData(t);
                    }
                    getByteTimeDomainData(t) {
                        this._nativeAnalyserNode.getByteTimeDomainData(t);
                    }
                    getFloatFrequencyData(t) {
                        this._nativeAnalyserNode.getFloatFrequencyData(t);
                    }
                    getFloatTimeDomainData(t) {
                        this._nativeAnalyserNode.getFloatTimeDomainData(t);
                    }
                }
            )(Ve, Se, R1, we, ke, De), je = new WeakSet, Le = ((t)=>null === t ? null : t.hasOwnProperty("AudioBuffer") ? t.AudioBuffer : null
            )(xe), ze = (We = new Uint32Array(1), (t)=>(We[0] = t, We[0])
            );
            var We;
            const Be = ((t, e)=>(s)=>{
                    s.copyFromChannel = (n, i, o = 0)=>{
                        const r = t(o), a = t(i);
                        if (a >= s.numberOfChannels) throw e();
                        const c = s.length, h = s.getChannelData(a), l = n.length;
                        for(let t73 = r < 0 ? -r : 0; t73 + r < c && t73 < l; t73 += 1)n[t73] = h[t73 + r];
                    }, s.copyToChannel = (n, i, o = 0)=>{
                        const r = t(o), a = t(i);
                        if (a >= s.numberOfChannels) throw e();
                        const c = s.length, h = s.getChannelData(a), l = n.length;
                        for(let t74 = r < 0 ? -r : 0; t74 + r < c && t74 < l; t74 += 1)h[t74 + r] = n[t74];
                    };
                }
            )(ze, R1), Ue = ((t)=>(e)=>{
                    e.copyFromChannel = ((s)=>(n, i, o = 0)=>{
                            const r = t(o), a = t(i);
                            if (r < e.length) return s.call(e, n, a, r);
                        }
                    )(e.copyFromChannel), e.copyToChannel = ((s)=>(n, i, o = 0)=>{
                            const r = t(o), a = t(i);
                            if (r < e.length) return s.call(e, n, a, r);
                        }
                    )(e.copyToChannel);
                }
            )(ze), Ge = ((t, e40, s, n, i, o, r, a)=>{
                let c = null;
                return class h5 {
                    constructor(h){
                        if (null === i) throw new Error("Missing the native OfflineAudioContext constructor.");
                        const { length: l , numberOfChannels: u , sampleRate: p  } = {
                            ...F1,
                            ...h
                        };
                        null === c && (c = new i(1, 1, 44100));
                        const d = null !== n && e40(o, o) ? new n({
                            length: l,
                            numberOfChannels: u,
                            sampleRate: p
                        }) : c.createBuffer(u, l, p);
                        if (0 === d.numberOfChannels) throw s();
                        return "function" != typeof d.copyFromChannel ? (r(d), q1(d)) : e40(E1, ()=>E1(d)
                        ) || a(d), t.add(d), d;
                    }
                    static [Symbol.hasInstance](e) {
                        return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === h5.prototype || t.has(e);
                    }
                };
            })(je, ge, Zt, Le, Ce, ((t)=>()=>{
                    if (null === t) return !1;
                    try {
                        new t({
                            length: 1,
                            sampleRate: 44100
                        });
                    } catch  {
                        return !1;
                    }
                    return !0;
                }
            )(Le), Be, Ue), Qe = ((t)=>(e, s)=>{
                    const n = t(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    });
                    s.connect(n).connect(e.destination);
                    const i = ()=>{
                        s.removeEventListener("ended", i), s.disconnect(n), n.disconnect();
                    };
                    s.addEventListener("ended", i);
                }
            )(Bt), Ze = ((t, e41, s)=>async (n14, i, o)=>{
                    const r8 = e41(n14);
                    await Promise.all(Array.from(r8.activeInputs).map(async ([e, n])=>{
                        const r = t(e), a = await r.render(e, i);
                        s(e) || a.connect(o, n);
                    }));
                }
            )(be, L1, st), Xe = ((t)=>(e, s, n)=>t(s, e, n)
            )(Ze), Ye = ((t75, e42, s33, n15, i11, o10, r9, a, c5, h, l)=>(c, u)=>{
                    const p = c.createBufferSource();
                    return qt(p, u), It(p, u, "playbackRate"), Rt(p, u, "buffer"), Rt(p, u, "loop"), Rt(p, u, "loopEnd"), Rt(p, u, "loopStart"), e42(s33, ()=>s33(c)
                    ) || ((t)=>{
                        t.start = ((e)=>{
                            let s = !1;
                            return (n = 0, i = 0, o)=>{
                                if (s) throw At();
                                e.call(t, n, i, o), s = !0;
                            };
                        })(t.start);
                    })(p), e42(n15, ()=>n15(c)
                    ) || ((t)=>{
                        t.start = ((e)=>(s = 0, n = 0, i)=>{
                                const o = t.buffer, r = null === o ? n : Math.min(o.duration, n);
                                null !== o && r > o.duration - 0.5 / t.context.sampleRate ? e.call(t, s, 0, 0) : e.call(t, s, r, i);
                            }
                        )(t.start);
                    })(p), e42(i11, ()=>i11(c)
                    ) || h(p, c), e42(o10, ()=>o10(c)
                    ) || Vt(p), e42(r9, ()=>r9(c)
                    ) || l(p, c), e42(a, ()=>a(c)
                    ) || Nt(p), t75(c, p), p;
                }
            )(Qe, ge, (t)=>{
                const e = t.createBufferSource();
                e.start();
                try {
                    e.start();
                } catch  {
                    return !0;
                }
                return !1;
            }, (t)=>{
                const e = t.createBufferSource(), s = t.createBuffer(1, 1, 44100);
                e.buffer = s;
                try {
                    e.start(0, 1);
                } catch  {
                    return !1;
                }
                return !0;
            }, (t)=>{
                const e = t.createBufferSource();
                e.start();
                try {
                    e.stop();
                } catch  {
                    return !1;
                }
                return !0;
            }, oe, re, ae, 0, ((t76)=>(e, s34)=>{
                    const n = s34.createBuffer(1, 1, 44100);
                    null === e.buffer && (e.buffer = n), t76(e, "buffer", (t)=>()=>{
                            const s = t.call(e);
                            return s === n ? null : s;
                        }
                    , (t)=>(s)=>t.call(e, null === s ? n : s)
                    );
                }
            )(ne), le), $e = ((t, e)=>(s, n, i)=>(t(n).replay(i), e(n, s, i))
            )(((t)=>(e)=>{
                    const s = t(e);
                    if (null === s.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
                    return s.renderer;
                }
            )(L1), Ze), He = ((t77, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null;
                    return {
                        set start (t){
                            r = t;
                        },
                        set stop (t){
                            a = t;
                        },
                        render (c6, h6) {
                            const l4 = o.get(h6);
                            return void 0 !== l4 ? Promise.resolve(l4) : (async (c, h)=>{
                                let l = s(c);
                                const u = M1(l, h);
                                if (!u) {
                                    const t = {
                                        buffer: l.buffer,
                                        channelCount: l.channelCount,
                                        channelCountMode: l.channelCountMode,
                                        channelInterpretation: l.channelInterpretation,
                                        loop: l.loop,
                                        loopEnd: l.loopEnd,
                                        loopStart: l.loopStart,
                                        playbackRate: l.playbackRate.value
                                    };
                                    l = e(h, t), null !== r && l.start(...r), null !== a && l.stop(a);
                                }
                                return o.set(h, l), u ? await t77(h, c.playbackRate, l.playbackRate) : await n(h, c.playbackRate, l.playbackRate), await i(c, h, l), l;
                            })(c6, h6);
                        }
                    };
                }
            )(Xe, Ye, tt, $e, Te), Je = ((t78, e43, s35, n16, i12, r10, a8, c7, h7, l5, u, p, d)=>(n17, f, _, m = null, g = null)=>{
                    const v = new o2.AutomationEventList(_.defaultValue), y = f ? ((t79)=>({
                            replay (e) {
                                for (const s of t79)if ("exponentialRampToValue" === s.type) {
                                    const { endTime: t , value: n  } = s;
                                    e.exponentialRampToValueAtTime(n, t);
                                } else if ("linearRampToValue" === s.type) {
                                    const { endTime: t , value: n  } = s;
                                    e.linearRampToValueAtTime(n, t);
                                } else if ("setTarget" === s.type) {
                                    const { startTime: t , target: n , timeConstant: i  } = s;
                                    e.setTargetAtTime(n, t, i);
                                } else if ("setValue" === s.type) {
                                    const { startTime: t , value: n  } = s;
                                    e.setValueAtTime(n, t);
                                } else {
                                    if ("setValueCurve" !== s.type) throw new Error("Can't apply an unknown automation.");
                                    {
                                        const { duration: t , startTime: n , values: i  } = s;
                                        e.setValueCurveAtTime(i, n, t);
                                    }
                                }
                            }
                        })
                    )(v) : null, x = {
                        get defaultValue () {
                            return _.defaultValue;
                        },
                        get maxValue () {
                            return null === m ? _.maxValue : m;
                        },
                        get minValue () {
                            return null === g ? _.minValue : g;
                        },
                        get value () {
                            return _.value;
                        },
                        set value (t){
                            _.value = t, x.setValueAtTime(t, n17.context.currentTime);
                        },
                        cancelAndHoldAtTime (t) {
                            if ("function" == typeof _.cancelAndHoldAtTime) null === y && v.flush(n17.context.currentTime), v.add(i12(t)), _.cancelAndHoldAtTime(t);
                            else {
                                const e = Array.from(v).pop();
                                null === y && v.flush(n17.context.currentTime), v.add(i12(t));
                                const s = Array.from(v).pop();
                                _.cancelScheduledValues(t), e !== s && void 0 !== s && ("exponentialRampToValue" === s.type ? _.exponentialRampToValueAtTime(s.value, s.endTime) : "linearRampToValue" === s.type ? _.linearRampToValueAtTime(s.value, s.endTime) : "setValue" === s.type ? _.setValueAtTime(s.value, s.startTime) : "setValueCurve" === s.type && _.setValueCurveAtTime(s.values, s.startTime, s.duration));
                            }
                            return x;
                        },
                        cancelScheduledValues: (t)=>(null === y && v.flush(n17.context.currentTime), v.add(r10(t)), _.cancelScheduledValues(t), x)
                        ,
                        exponentialRampToValueAtTime (t, e) {
                            if (0 === t) throw new RangeError;
                            if (!Number.isFinite(e) || e < 0) throw new RangeError;
                            return null === y && v.flush(n17.context.currentTime), v.add(a8(t, e)), _.exponentialRampToValueAtTime(t, e), x;
                        },
                        linearRampToValueAtTime: (t, e)=>(null === y && v.flush(n17.context.currentTime), v.add(c7(t, e)), _.linearRampToValueAtTime(t, e), x)
                        ,
                        setTargetAtTime: (t, e, s)=>(null === y && v.flush(n17.context.currentTime), v.add(h7(t, e, s)), _.setTargetAtTime(t, e, s), x)
                        ,
                        setValueAtTime: (t, e)=>(null === y && v.flush(n17.context.currentTime), v.add(l5(t, e)), _.setValueAtTime(t, e), x)
                        ,
                        setValueCurveAtTime (t, e, s) {
                            const i = t instanceof Float32Array ? t : new Float32Array(t);
                            if (null !== p && "webkitAudioContext" === p.name) {
                                const t = e + s, o = n17.context.sampleRate, r = Math.ceil(e * o), a = Math.floor(t * o), c = a - r, h = new Float32Array(c);
                                for(let t80 = 0; t80 < c; t80 += 1){
                                    const n = (i.length - 1) / s * ((r + t80) / o - e), a = Math.floor(n), c = Math.ceil(n);
                                    h[t80] = a === c ? i[a] : (1 - (n - a)) * i[a] + (1 - (c - n)) * i[c];
                                }
                                null === y && v.flush(n17.context.currentTime), v.add(u(h, e, s)), _.setValueCurveAtTime(h, e, s);
                                const l = a / o;
                                l < t && d(x, h[h.length - 1], l), d(x, i[i.length - 1], t);
                            } else null === y && v.flush(n17.context.currentTime), v.add(u(i, e, s)), _.setValueCurveAtTime(i, e, s);
                            return x;
                        }
                    };
                    return s35.set(x, _), e43.set(x, n17), t78(x, y), x;
                }
            )((Ke = h3, (t, e)=>{
                Ke.set(t, {
                    activeInputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                });
            }), Oe, l2, 0, o2.createCancelAndHoldAutomationEvent, o2.createCancelScheduledValuesAutomationEvent, o2.createExponentialRampToValueAutomationEvent, o2.createLinearRampToValueAutomationEvent, o2.createSetTargetAutomationEvent, o2.createSetValueAutomationEvent, o2.createSetValueCurveAutomationEvent, Ee, ie);
            var Ke;
            const ts = ((t81, e44, s36, n18, i, o, r, a9)=>class extends t81 {
                    constructor(t, n){
                        const a = o(t), c = {
                            ...P1,
                            ...n
                        }, h = i(a, c), l = r(a), u = l ? e44() : null;
                        super(t, !1, h, u), this._audioBufferSourceNodeRenderer = u, this._isBufferNullified = !1, this._isBufferSet = null !== c.buffer, this._nativeAudioBufferSourceNode = h, this._onended = null, this._playbackRate = s36(this, l, h.playbackRate, V1, I1);
                    }
                    get buffer() {
                        return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
                    }
                    set buffer(t) {
                        if (this._nativeAudioBufferSourceNode.buffer = t, null !== t) {
                            if (this._isBufferSet) throw n18();
                            this._isBufferSet = !0;
                        }
                    }
                    get loop() {
                        return this._nativeAudioBufferSourceNode.loop;
                    }
                    set loop(t) {
                        this._nativeAudioBufferSourceNode.loop = t;
                    }
                    get loopEnd() {
                        return this._nativeAudioBufferSourceNode.loopEnd;
                    }
                    set loopEnd(t) {
                        this._nativeAudioBufferSourceNode.loopEnd = t;
                    }
                    get loopStart() {
                        return this._nativeAudioBufferSourceNode.loopStart;
                    }
                    set loopStart(t) {
                        this._nativeAudioBufferSourceNode.loopStart = t;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t) {
                        const e = "function" == typeof t ? a9(this, t) : null;
                        this._nativeAudioBufferSourceNode.onended = e;
                        const s = this._nativeAudioBufferSourceNode.onended;
                        this._onended = null !== s && s === e ? t : s;
                    }
                    get playbackRate() {
                        return this._playbackRate;
                    }
                    start(t = 0, e = 0, s) {
                        if (this._nativeAudioBufferSourceNode.start(t, e, s), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === s ? [
                            t,
                            e
                        ] : [
                            t,
                            e,
                            s
                        ]), "closed" !== this.context.state) {
                            k1(this);
                            const t = ()=>{
                                this._nativeAudioBufferSourceNode.removeEventListener("ended", t), N1(this) && C1(this);
                            };
                            this._nativeAudioBufferSourceNode.addEventListener("ended", t);
                        }
                    }
                    stop(t = 0) {
                        this._nativeAudioBufferSourceNode.stop(t), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t);
                    }
                }
            )(Ve, He, Je, At, Ye, ke, De, ue), es = ((t82, e45, s37, n19, i13, o, r, a)=>class extends t82 {
                    constructor(t83, e46){
                        const s38 = o(t83), n20 = r(s38), c = i13(s38, e46, n20);
                        super(t83, !1, c, n20 ? ((t)=>{
                            const e = new WeakMap;
                            return {
                                render (s39, n21) {
                                    const i14 = e.get(n21);
                                    return void 0 !== i14 ? Promise.resolve(i14) : (async (s, n)=>{
                                        const i = n.destination;
                                        return e.set(n, i), await t(s, n, i), i;
                                    })(s39, n21);
                                }
                            };
                        })(a) : null), this._isNodeOfNativeOfflineAudioContext = n20, this._nativeAudioDestinationNode = c;
                    }
                    get channelCount() {
                        return this._nativeAudioDestinationNode.channelCount;
                    }
                    set channelCount(t) {
                        if (this._isNodeOfNativeOfflineAudioContext) throw n19();
                        if (t > this._nativeAudioDestinationNode.maxChannelCount) throw s37();
                        this._nativeAudioDestinationNode.channelCount = t;
                    }
                    get channelCountMode() {
                        return this._nativeAudioDestinationNode.channelCountMode;
                    }
                    set channelCountMode(t) {
                        if (this._isNodeOfNativeOfflineAudioContext) throw n19();
                        this._nativeAudioDestinationNode.channelCountMode = t;
                    }
                    get maxChannelCount() {
                        return this._nativeAudioDestinationNode.maxChannelCount;
                    }
                }
            )(Ve, 0, R1, At, ((t84, e47)=>(s, n, i)=>{
                    const o = s.destination;
                    if (o.channelCount !== n) try {
                        o.channelCount = n;
                    } catch  {
                    }
                    i && "explicit" !== o.channelCountMode && (o.channelCountMode = "explicit"), 0 === o.maxChannelCount && Object.defineProperty(o, "maxChannelCount", {
                        value: n
                    });
                    const r = t84(s, {
                        channelCount: n,
                        channelCountMode: o.channelCountMode,
                        channelInterpretation: o.channelInterpretation,
                        gain: 1
                    });
                    return e47(r, "channelCount", (t)=>()=>t.call(r)
                    , (t85)=>(e)=>{
                            t85.call(r, e);
                            try {
                                o.channelCount = e;
                            } catch (t) {
                                if (e > o.maxChannelCount) throw t;
                            }
                        }
                    ), e47(r, "channelCountMode", (t)=>()=>t.call(r)
                    , (t)=>(e)=>{
                            t.call(r, e), o.channelCountMode = e;
                        }
                    ), e47(r, "channelInterpretation", (t)=>()=>t.call(r)
                    , (t)=>(e)=>{
                            t.call(r, e), o.channelInterpretation = e;
                        }
                    ), Object.defineProperty(r, "maxChannelCount", {
                        get: ()=>o.maxChannelCount
                    }), r.connect(o), r;
                }
            )(Bt, ne), ke, De, Te), ss = ((t86, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r11, a10) {
                            const c8 = o.get(a10);
                            return void 0 !== c8 ? Promise.resolve(c8) : (async (r, a)=>{
                                let c = s(r);
                                const h = M1(c, a);
                                if (!h) {
                                    const t = {
                                        Q: c.Q.value,
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        detune: c.detune.value,
                                        frequency: c.frequency.value,
                                        gain: c.gain.value,
                                        type: c.type
                                    };
                                    c = e(a, t);
                                }
                                return o.set(a, c), h ? (await t86(a, r.Q, c.Q), await t86(a, r.detune, c.detune), await t86(a, r.frequency, c.frequency), await t86(a, r.gain, c.gain)) : (await n(a, r.Q, c.Q), await n(a, r.detune, c.detune), await n(a, r.frequency, c.frequency), await n(a, r.gain, c.gain)), await i(r, a, c), c;
                            })(r11, a10);
                        }
                    };
                }
            )(Xe, jt, tt, $e, Te), ns = ((t)=>(e, s)=>t.set(e, s)
            )(_e), is = ((t87, e48, s40, n22, i, o, r, a)=>class extends t87 {
                    constructor(t, n){
                        const c = o(t), h = {
                            ...mt,
                            ...n
                        }, l = i(c, h), u = r(c);
                        super(t, !1, l, u ? s40() : null), this._Q = e48(this, u, l.Q, V1, I1), this._detune = e48(this, u, l.detune, 1200 * Math.log2(V1), -1200 * Math.log2(V1)), this._frequency = e48(this, u, l.frequency, t.sampleRate / 2, 0), this._gain = e48(this, u, l.gain, 40 * Math.log10(V1), I1), this._nativeBiquadFilterNode = l, a(this, 1);
                    }
                    get detune() {
                        return this._detune;
                    }
                    get frequency() {
                        return this._frequency;
                    }
                    get gain() {
                        return this._gain;
                    }
                    get Q() {
                        return this._Q;
                    }
                    get type() {
                        return this._nativeBiquadFilterNode.type;
                    }
                    set type(t) {
                        this._nativeBiquadFilterNode.type = t;
                    }
                    getFrequencyResponse(t, e, s) {
                        try {
                            this._nativeBiquadFilterNode.getFrequencyResponse(t, e, s);
                        } catch (t88) {
                            if (11 === t88.code) throw n22();
                            throw t88;
                        }
                        if (t.length !== e.length || e.length !== s.length) throw n22();
                    }
                }
            )(Ve, Je, ss, Ct, jt, ke, De, ns), os = ((t89, e)=>(s, n23, i15)=>{
                    const o = new Set;
                    return s.connect = ((i)=>(r, a = 0, c = 0)=>{
                            const h = 0 === o.size;
                            if (e(r)) return i.call(s, r, a, c), t89(o, [
                                r,
                                a,
                                c
                            ], (t)=>t[0] === r && t[1] === a && t[2] === c
                            , !0), h && n23(), r;
                            i.call(s, r, a), t89(o, [
                                r,
                                a
                            ], (t)=>t[0] === r && t[1] === a
                            , !0), h && n23();
                        }
                    )(s.connect), s.disconnect = ((t)=>(n, r, a)=>{
                            const c = o.size > 0;
                            if (void 0 === n) t.apply(s), o.clear();
                            else if ("number" == typeof n) {
                                t.call(s, n);
                                for (const t90 of o)t90[1] === n && o.delete(t90);
                            } else {
                                e(n) ? t.call(s, n, r, a) : t.call(s, n, r);
                                for (const t92 of o)t92[0] !== n || void 0 !== r && t92[1] !== r || void 0 !== a && t92[2] !== a || o.delete(t92);
                            }
                            const h = 0 === o.size;
                            c && h && i15();
                        }
                    )(s.disconnect), s;
                }
            )(G1, qe), rs = ((t94, e49)=>(s, n)=>{
                    n.channelCount = 1, n.channelCountMode = "explicit", Object.defineProperty(n, "channelCount", {
                        get: ()=>1
                        ,
                        set: ()=>{
                            throw t94();
                        }
                    }), Object.defineProperty(n, "channelCountMode", {
                        get: ()=>"explicit"
                        ,
                        set: ()=>{
                            throw t94();
                        }
                    });
                    const i = s.createBufferSource();
                    e49(n, ()=>{
                        const t = n.numberOfInputs;
                        for(let e = 0; e < t; e += 1)i.connect(n, 0, e);
                    }, ()=>i.disconnect(n)
                    );
                }
            )(At, os), as = ((t, e)=>(s, n)=>{
                    const i = s.createChannelMerger(n.numberOfInputs);
                    return null !== t && "webkitAudioContext" === t.name && e(s, i), qt(i, n), i;
                }
            )(Ee, rs), cs = ((t, e50, s)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i16, o11) {
                            const r12 = n.get(o11);
                            return void 0 !== r12 ? Promise.resolve(r12) : (async (i, o)=>{
                                let r = e50(i);
                                if (!M1(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        numberOfInputs: r.numberOfInputs
                                    };
                                    r = t(o, e);
                                }
                                return n.set(o, r), await s(i, o, r), r;
                            })(i16, o11);
                        }
                    };
                }
            )(as, tt, Te), hs = ((t95, e, s, n, i)=>class extends t95 {
                    constructor(t, o){
                        const r = n(t), a = {
                            ...gt,
                            ...o
                        };
                        super(t, !1, s(r, a), i(r) ? e() : null);
                    }
                }
            )(Ve, cs, as, ke, De), ls = ((t, e51, s)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i17, o12) {
                            const r13 = n.get(o12);
                            return void 0 !== r13 ? Promise.resolve(r13) : (async (i, o)=>{
                                let r = e51(i);
                                if (!M1(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        numberOfOutputs: r.numberOfOutputs
                                    };
                                    r = t(o, e);
                                }
                                return n.set(o, r), await s(i, o, r), r;
                            })(i17, o12);
                        }
                    };
                }
            )(Lt, tt, Te), us = ((t96, e, s, n, i, o13)=>class extends t96 {
                    constructor(t97, o){
                        const r = n(t97), a = ((t)=>({
                                ...t,
                                channelCount: t.numberOfOutputs
                            })
                        )({
                            ...vt,
                            ...o
                        });
                        super(t97, !1, s(r, a), i(r) ? e() : null);
                    }
                }
            )(Ve, ls, Lt, ke, De), ps = ((t98, e, s, n)=>(i, { offset: o , ...r })=>{
                    const a = i.createBuffer(1, 2, 44100), c = e(i, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }), h = s(i, {
                        ...r,
                        gain: o
                    }), l = a.getChannelData(0);
                    l[0] = 1, l[1] = 1, c.buffer = a, c.loop = !0;
                    const u = {
                        get bufferSize () {
                        },
                        get channelCount () {
                            return h.channelCount;
                        },
                        set channelCount (t){
                            h.channelCount = t;
                        },
                        get channelCountMode () {
                            return h.channelCountMode;
                        },
                        set channelCountMode (t){
                            h.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return h.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            h.channelInterpretation = t;
                        },
                        get context () {
                            return h.context;
                        },
                        get inputs () {
                            return [];
                        },
                        get numberOfInputs () {
                            return c.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return h.numberOfOutputs;
                        },
                        get offset () {
                            return h.gain;
                        },
                        get onended () {
                            return c.onended;
                        },
                        set onended (t){
                            c.onended = t;
                        },
                        addEventListener: (...t)=>c.addEventListener(t[0], t[1], t[2])
                        ,
                        dispatchEvent: (...t)=>c.dispatchEvent(t[0])
                        ,
                        removeEventListener: (...t)=>c.removeEventListener(t[0], t[1], t[2])
                        ,
                        start (t = 0) {
                            c.start.call(c, t);
                        },
                        stop (t = 0) {
                            c.stop.call(c, t);
                        }
                    };
                    return t98(i, c), n(zt(u, h), ()=>c.connect(h)
                    , ()=>c.disconnect(h)
                    );
                }
            )(Qe, Ye, Bt, os), ds = ((t, e, s, n, i)=>(o, r)=>{
                    if (void 0 === o.createConstantSource) return s(o, r);
                    const a = o.createConstantSource();
                    return qt(a, r), It(a, r, "offset"), e(n, ()=>n(o)
                    ) || Vt(a), e(i, ()=>i(o)
                    ) || Nt(a), t(o, a), a;
                }
            )(Qe, ge, ps, oe, ae), fs = ((t99, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null;
                    return {
                        set start (t){
                            r = t;
                        },
                        set stop (t){
                            a = t;
                        },
                        render (c9, h8) {
                            const l6 = o.get(h8);
                            return void 0 !== l6 ? Promise.resolve(l6) : (async (c, h)=>{
                                let l = s(c);
                                const u = M1(l, h);
                                if (!u) {
                                    const t = {
                                        channelCount: l.channelCount,
                                        channelCountMode: l.channelCountMode,
                                        channelInterpretation: l.channelInterpretation,
                                        offset: l.offset.value
                                    };
                                    l = e(h, t), null !== r && l.start(r), null !== a && l.stop(a);
                                }
                                return o.set(h, l), u ? await t99(h, c.offset, l.offset) : await n(h, c.offset, l.offset), await i(c, h, l), l;
                            })(c9, h8);
                        }
                    };
                }
            )(Xe, ds, tt, $e, Te), _s = ((t100, e52, s41, n, i, o, r14)=>class extends t100 {
                    constructor(t, r){
                        const a = i(t), c = {
                            ...yt,
                            ...r
                        }, h = n(a, c), l = o(a), u = l ? s41() : null;
                        super(t, !1, h, u), this._constantSourceNodeRenderer = u, this._nativeConstantSourceNode = h, this._offset = e52(this, l, h.offset, V1, I1), this._onended = null;
                    }
                    get offset() {
                        return this._offset;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t) {
                        const e = "function" == typeof t ? r14(this, t) : null;
                        this._nativeConstantSourceNode.onended = e;
                        const s = this._nativeConstantSourceNode.onended;
                        this._onended = null !== s && s === e ? t : s;
                    }
                    start(t = 0) {
                        if (this._nativeConstantSourceNode.start(t), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = t), "closed" !== this.context.state) {
                            k1(this);
                            const t = ()=>{
                                this._nativeConstantSourceNode.removeEventListener("ended", t), N1(this) && C1(this);
                            };
                            this._nativeConstantSourceNode.addEventListener("ended", t);
                        }
                    }
                    stop(t = 0) {
                        this._nativeConstantSourceNode.stop(t), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t);
                    }
                }
            )(Ve, Je, fs, ds, ke, De, ue), ms = ((t101, e53)=>(s42, n)=>{
                    const i = s42.createConvolver();
                    if (qt(i, n), n.disableNormalization === i.normalize && (i.normalize = !n.disableNormalization), Rt(i, n, "buffer"), n.channelCount > 2) throw t101();
                    if (e53(i, "channelCount", (t)=>()=>t.call(i)
                    , (e)=>(s)=>{
                            if (s > 2) throw t101();
                            return e.call(i, s);
                        }
                    ), "max" === n.channelCountMode) throw t101();
                    return e53(i, "channelCountMode", (t)=>()=>t.call(i)
                    , (e)=>(s)=>{
                            if ("max" === s) throw t101();
                            return e.call(i, s);
                        }
                    ), i;
                }
            )(Zt, ne), gs = ((t, e54, s)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i18, o14) {
                            const r15 = n.get(o14);
                            return void 0 !== r15 ? Promise.resolve(r15) : (async (i, o)=>{
                                let r = e54(i);
                                if (!M1(r, o)) {
                                    const e = {
                                        buffer: r.buffer,
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        disableNormalization: !r.normalize
                                    };
                                    r = t(o, e);
                                }
                                return n.set(o, r), X1(r) ? await s(i, o, r.inputs[0]) : await s(i, o, r), r;
                            })(i18, o14);
                        }
                    };
                }
            )(ms, tt, Te), vs = ((t102, e, s, n, i, o)=>class extends t102 {
                    constructor(t, r){
                        const a = n(t), c = {
                            ...xt,
                            ...r
                        }, h = s(a, c);
                        super(t, !1, h, i(a) ? e() : null), this._isBufferNullified = !1, this._nativeConvolverNode = h, null !== c.buffer && o(this, c.buffer.duration);
                    }
                    get buffer() {
                        return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
                    }
                    set buffer(t) {
                        if (this._nativeConvolverNode.buffer = t, null === t && null !== this._nativeConvolverNode.buffer) {
                            const t = this._nativeConvolverNode.context;
                            this._nativeConvolverNode.buffer = t.createBuffer(1, 1, 44100), this._isBufferNullified = !0, o(this, 0);
                        } else this._isBufferNullified = !1, o(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
                    }
                    get normalize() {
                        return this._nativeConvolverNode.normalize;
                    }
                    set normalize(t) {
                        this._nativeConvolverNode.normalize = t;
                    }
                }
            )(Ve, gs, ms, ke, De, ns), ys = ((t103, e, s, n, i)=>(o)=>{
                    const r = new WeakMap;
                    return {
                        render (a11, c10) {
                            const h9 = r.get(c10);
                            return void 0 !== h9 ? Promise.resolve(h9) : (async (a, c)=>{
                                let h = s(a);
                                const l = M1(h, c);
                                if (!l) {
                                    const t = {
                                        channelCount: h.channelCount,
                                        channelCountMode: h.channelCountMode,
                                        channelInterpretation: h.channelInterpretation,
                                        delayTime: h.delayTime.value,
                                        maxDelayTime: o
                                    };
                                    h = e(c, t);
                                }
                                return r.set(c, h), l ? await t103(c, a.delayTime, h.delayTime) : await n(c, a.delayTime, h.delayTime), await i(a, c, h), h;
                            })(a11, c10);
                        }
                    };
                }
            )(Xe, Wt, tt, $e, Te), xs = ((t104, e, s, n, i, o, r)=>class extends t104 {
                    constructor(t, a){
                        const c = i(t), h = {
                            ...bt,
                            ...a
                        }, l = n(c, h), u = o(c);
                        super(t, !1, l, u ? s(h.maxDelayTime) : null), this._delayTime = e(this, u, l.delayTime), r(this, h.maxDelayTime);
                    }
                    get delayTime() {
                        return this._delayTime;
                    }
                }
            )(Ve, Je, ys, Wt, ke, De, ns), ws = ((t)=>(e, s)=>{
                    const n = e.createDynamicsCompressor();
                    if (qt(n, s), s.channelCount > 2) throw t();
                    if ("max" === s.channelCountMode) throw t();
                    return It(n, s, "attack"), It(n, s, "knee"), It(n, s, "ratio"), It(n, s, "release"), It(n, s, "threshold"), n;
                }
            )(Zt), bs = ((t105, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r16, a12) {
                            const c11 = o.get(a12);
                            return void 0 !== c11 ? Promise.resolve(c11) : (async (r, a)=>{
                                let c = s(r);
                                const h = M1(c, a);
                                if (!h) {
                                    const t = {
                                        attack: c.attack.value,
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        knee: c.knee.value,
                                        ratio: c.ratio.value,
                                        release: c.release.value,
                                        threshold: c.threshold.value
                                    };
                                    c = e(a, t);
                                }
                                return o.set(a, c), h ? (await t105(a, r.attack, c.attack), await t105(a, r.knee, c.knee), await t105(a, r.ratio, c.ratio), await t105(a, r.release, c.release), await t105(a, r.threshold, c.threshold)) : (await n(a, r.attack, c.attack), await n(a, r.knee, c.knee), await n(a, r.ratio, c.ratio), await n(a, r.release, c.release), await n(a, r.threshold, c.threshold)), await i(r, a, c), c;
                            })(r16, a12);
                        }
                    };
                }
            )(Xe, ws, tt, $e, Te), Ts = ((t106, e55, s, n, i19, o, r, a)=>class extends t106 {
                    constructor(t, i){
                        const c = o(t), h = {
                            ...St,
                            ...i
                        }, l = n(c, h), u = r(c);
                        super(t, !1, l, u ? s() : null), this._attack = e55(this, u, l.attack), this._knee = e55(this, u, l.knee), this._nativeDynamicsCompressorNode = l, this._ratio = e55(this, u, l.ratio), this._release = e55(this, u, l.release), this._threshold = e55(this, u, l.threshold), a(this, 0.006);
                    }
                    get attack() {
                        return this._attack;
                    }
                    get channelCount() {
                        return this._nativeDynamicsCompressorNode.channelCount;
                    }
                    set channelCount(t) {
                        const e = this._nativeDynamicsCompressorNode.channelCount;
                        if (this._nativeDynamicsCompressorNode.channelCount = t, t > 2) throw this._nativeDynamicsCompressorNode.channelCount = e, i19();
                    }
                    get channelCountMode() {
                        return this._nativeDynamicsCompressorNode.channelCountMode;
                    }
                    set channelCountMode(t) {
                        const e = this._nativeDynamicsCompressorNode.channelCountMode;
                        if (this._nativeDynamicsCompressorNode.channelCountMode = t, "max" === t) throw this._nativeDynamicsCompressorNode.channelCountMode = e, i19();
                    }
                    get knee() {
                        return this._knee;
                    }
                    get ratio() {
                        return this._ratio;
                    }
                    get reduction() {
                        return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction;
                    }
                    get release() {
                        return this._release;
                    }
                    get threshold() {
                        return this._threshold;
                    }
                }
            )(Ve, Je, bs, ws, Zt, ke, De, ns), Ss = ((t107, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r17, a13) {
                            const c12 = o.get(a13);
                            return void 0 !== c12 ? Promise.resolve(c12) : (async (r, a)=>{
                                let c = s(r);
                                const h = M1(c, a);
                                if (!h) {
                                    const t = {
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        gain: c.gain.value
                                    };
                                    c = e(a, t);
                                }
                                return o.set(a, c), h ? await t107(a, r.gain, c.gain) : await n(a, r.gain, c.gain), await i(r, a, c), c;
                            })(r17, a13);
                        }
                    };
                }
            )(Xe, Bt, tt, $e, Te), ks = ((t108, e, s, n, i, o)=>class extends t108 {
                    constructor(t, r){
                        const a = i(t), c = {
                            ...kt,
                            ...r
                        }, h = n(a, c), l = o(a);
                        super(t, !1, h, l ? s() : null), this._gain = e(this, l, h.gain, V1, I1);
                    }
                    get gain() {
                        return this._gain;
                    }
                }
            )(Ve, Je, Ss, Bt, ke, De), As = ((t110, e56, s43, n24)=>(i20, o15, { channelCount: r18 , channelCountMode: a , channelInterpretation: c , feedback: h , feedforward: l  })=>{
                    const u = Pt(o15, i20.sampleRate), p = h instanceof Float64Array ? h : new Float64Array(h), d = l instanceof Float64Array ? l : new Float64Array(l), f = p.length, _ = d.length, m = Math.min(f, _);
                    if (0 === f || f > 20) throw n24();
                    if (0 === p[0]) throw e56();
                    if (0 === _ || _ > 20) throw n24();
                    if (0 === d[0]) throw e56();
                    if (1 !== p[0]) {
                        for(let t = 0; t < _; t += 1)d[t] /= p[0];
                        for(let t109 = 1; t109 < f; t109 += 1)p[t109] /= p[0];
                    }
                    const g = s43(i20, u, r18, r18);
                    g.channelCount = r18, g.channelCountMode = a, g.channelInterpretation = c;
                    const v = [], y = [], x = [];
                    for(let t = 0; t < r18; t += 1){
                        v.push(0);
                        const t = new Float32Array(32), e = new Float32Array(32);
                        t.fill(0), e.fill(0), y.push(t), x.push(e);
                    }
                    g.onaudioprocess = (t)=>{
                        const e = t.inputBuffer, s = t.outputBuffer, n = e.numberOfChannels;
                        for(let t111 = 0; t111 < n; t111 += 1){
                            const n = e.getChannelData(t111), i = s.getChannelData(t111);
                            v[t111] = Ot(p, f, d, _, m, y[t111], x[t111], v[t111], 32, n, i);
                        }
                    };
                    const w = i20.sampleRate / 2;
                    return zt({
                        get bufferSize () {
                            return u;
                        },
                        get channelCount () {
                            return g.channelCount;
                        },
                        set channelCount (t){
                            g.channelCount = t;
                        },
                        get channelCountMode () {
                            return g.channelCountMode;
                        },
                        set channelCountMode (t){
                            g.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return g.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            g.channelInterpretation = t;
                        },
                        get context () {
                            return g.context;
                        },
                        get inputs () {
                            return [
                                g
                            ];
                        },
                        get numberOfInputs () {
                            return g.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return g.numberOfOutputs;
                        },
                        addEventListener: (...t)=>g.addEventListener(t[0], t[1], t[2])
                        ,
                        dispatchEvent: (...t)=>g.dispatchEvent(t[0])
                        ,
                        getFrequencyResponse (e, s, n) {
                            if (e.length !== s.length || s.length !== n.length) throw t110();
                            const i = e.length;
                            for(let t = 0; t < i; t += 1){
                                const i = -Math.PI * (e[t] / w), o = [
                                    Math.cos(i),
                                    Math.sin(i)
                                ], r = Ut(Gt(d, o), Gt(p, o));
                                s[t] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), n[t] = Math.atan2(r[1], r[0]);
                            }
                        },
                        removeEventListener: (...t)=>g.removeEventListener(t[0], t[1], t[2])
                    }, g);
                }
            )(Ct, At, Qt, Zt), Cs = ((t112, e57, s44, n)=>(i)=>t112(Et, ()=>Et(i)
                    ) ? Promise.resolve(t112(n, n)).then((t)=>{
                        if (!t) {
                            const t = s44(i, 512, 0, 1);
                            i.oncomplete = ()=>{
                                t.onaudioprocess = null, t.disconnect();
                            }, t.onaudioprocess = ()=>i.currentTime
                            , t.connect(i.destination);
                        }
                        return i.startRendering();
                    }) : new Promise((t)=>{
                        const s = e57(i, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            gain: 0
                        });
                        i.oncomplete = (e)=>{
                            s.disconnect(), t(e.renderedBuffer);
                        }, s.connect(i.destination), i.startRendering();
                    })
            )(ge, Bt, Qt, ((t113, e)=>()=>{
                    if (null === e) return Promise.resolve(!1);
                    const s = new e(1, 1, 44100), n = t113(s, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    });
                    return new Promise((t)=>{
                        s.oncomplete = ()=>{
                            n.disconnect(), t(0 !== s.currentTime);
                        }, s.startRendering();
                    });
                }
            )(Bt, Ce)), Ds = ((t114, e59, s45, n25, i21)=>(o16, r19)=>{
                    const a14 = new WeakMap;
                    let c13 = null;
                    return {
                        render (h10, l7) {
                            const u3 = a14.get(l7);
                            return void 0 !== u3 ? Promise.resolve(u3) : (async (h11, l8)=>{
                                let u4 = null, p3 = e59(h11);
                                const d = M1(p3, l8);
                                if (void 0 === l8.createIIRFilter ? u4 = t114(l8, {
                                    buffer: null,
                                    channelCount: 2,
                                    channelCountMode: "max",
                                    channelInterpretation: "speakers",
                                    loop: !1,
                                    loopEnd: 0,
                                    loopStart: 0,
                                    playbackRate: 1
                                }) : d || (p3 = l8.createIIRFilter(r19, o16)), a14.set(l8, null === u4 ? p3 : u4), null !== u4) {
                                    if (null === c13) {
                                        if (null === s45) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t116 = new s45(h11.context.destination.channelCount, h11.context.length, l8.sampleRate);
                                        c13 = (async ()=>(await n25(h11, t116, t116.destination), ((t, e, s, n)=>{
                                                const i = s instanceof Float64Array ? s : new Float64Array(s), o = n instanceof Float64Array ? n : new Float64Array(n), r = i.length, a = o.length, c = Math.min(r, a);
                                                if (1 !== i[0]) {
                                                    for(let t = 0; t < r; t += 1)o[t] /= i[0];
                                                    for(let t115 = 1; t115 < a; t115 += 1)i[t115] /= i[0];
                                                }
                                                const h = new Float32Array(32), l = new Float32Array(32), u = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate), p = t.numberOfChannels;
                                                for(let e58 = 0; e58 < p; e58 += 1){
                                                    const s = t.getChannelData(e58), n = u.getChannelData(e58);
                                                    h.fill(0), l.fill(0), Ot(i, r, o, a, c, h, l, 0, 32, s, n);
                                                }
                                                return u;
                                            })(await i21(t116), l8, o16, r19))
                                        )();
                                    }
                                    const t117 = await c13;
                                    return u4.buffer = t117, u4.start(0), u4;
                                }
                                return await n25(h11, l8, p3), p3;
                            })(h10, l7);
                        }
                    };
                }
            )(Ye, tt, Ce, Te, Cs), Os = ((t)=>(e, s, n)=>{
                    if (void 0 === e.createIIRFilter) return t(e, s, n);
                    const i = e.createIIRFilter(n.feedforward, n.feedback);
                    return qt(i, n), i;
                }
            )(As), Ms = ((t119, e60, s46, n26, i22, o)=>class extends t119 {
                    constructor(t120, r){
                        const a = n26(t120), c = i22(a), h = {
                            ...Dt,
                            ...r
                        }, l = e60(a, c ? null : t120.baseLatency, h);
                        super(t120, !1, l, c ? s46(h.feedback, h.feedforward) : null), ((t)=>{
                            var e;
                            t.getFrequencyResponse = (e = t.getFrequencyResponse, (s, n, i)=>{
                                if (s.length !== n.length || n.length !== i.length) throw Ct();
                                return e.call(t, s, n, i);
                            });
                        })(l), this._nativeIIRFilterNode = l, o(this, 1);
                    }
                    getFrequencyResponse(t, e, s) {
                        return this._nativeIIRFilterNode.getFrequencyResponse(t, e, s);
                    }
                }
            )(Ve, Os, Ds, ke, De, ns), Es = ((t121, e61, s47, n27, i, o17, r20, a)=>(c, h)=>{
                    const l9 = h.listener, { forwardX: u5 , forwardY: p4 , forwardZ: d2 , positionX: f2 , positionY: _2 , positionZ: m3 , upX: g2 , upY: v3 , upZ: y3  } = void 0 === l9.forwardX ? (()=>{
                        const u6 = new Float32Array(1), p = e61(h, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "speakers",
                            numberOfInputs: 9
                        }), d = r20(h);
                        let f3 = !1, _3 = [
                            0,
                            0,
                            -1,
                            0,
                            1,
                            0
                        ], m4 = [
                            0,
                            0,
                            0
                        ];
                        const g = ()=>{
                            if (f3) return;
                            f3 = !0;
                            const t122 = n27(h, 256, 9, 0);
                            t122.onaudioprocess = ({ inputBuffer: t123  })=>{
                                const e = [
                                    o17(t123, u6, 0),
                                    o17(t123, u6, 1),
                                    o17(t123, u6, 2),
                                    o17(t123, u6, 3),
                                    o17(t123, u6, 4),
                                    o17(t123, u6, 5)
                                ];
                                e.some((t, e)=>t !== _3[e]
                                ) && (l9.setOrientation(...e), _3 = e);
                                const s = [
                                    o17(t123, u6, 6),
                                    o17(t123, u6, 7),
                                    o17(t123, u6, 8)
                                ];
                                s.some((t, e)=>t !== m4[e]
                                ) && (l9.setPosition(...s), m4 = s);
                            }, p.connect(t122);
                        }, v4 = (t)=>(e)=>{
                                e !== _3[t] && (_3[t] = e, l9.setOrientation(..._3));
                            }
                        , y4 = (t)=>(e)=>{
                                e !== m4[t] && (m4[t] = e, l9.setPosition(...m4));
                            }
                        , x3 = (e62, n, o)=>{
                            const r = s47(h, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                offset: n
                            });
                            r.connect(p, 0, e62), r.start(), Object.defineProperty(r.offset, "defaultValue", {
                                get: ()=>n
                            });
                            const l = t121({
                                context: c
                            }, d, r.offset, V1, I1);
                            var u, f, _, m, v, y, x;
                            return a(l, "value", (t)=>()=>t.call(l)
                            , (t124)=>(e)=>{
                                    try {
                                        t124.call(l, e);
                                    } catch (t) {
                                        if (9 !== t.code) throw t;
                                    }
                                    g(), d && o(e);
                                }
                            ), l.cancelAndHoldAtTime = (u = l.cancelAndHoldAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = u.apply(l, t);
                                return g(), e;
                            }), l.cancelScheduledValues = (f = l.cancelScheduledValues, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = f.apply(l, t);
                                return g(), e;
                            }), l.exponentialRampToValueAtTime = (_ = l.exponentialRampToValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = _.apply(l, t);
                                return g(), e;
                            }), l.linearRampToValueAtTime = (m = l.linearRampToValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = m.apply(l, t);
                                return g(), e;
                            }), l.setTargetAtTime = (v = l.setTargetAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = v.apply(l, t);
                                return g(), e;
                            }), l.setValueAtTime = (y = l.setValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = y.apply(l, t);
                                return g(), e;
                            }), l.setValueCurveAtTime = (x = l.setValueCurveAtTime, d ? ()=>{
                                throw i();
                            } : (...t)=>{
                                const e = x.apply(l, t);
                                return g(), e;
                            }), l;
                        };
                        return {
                            forwardX: x3(0, 0, v4(0)),
                            forwardY: x3(1, 0, v4(1)),
                            forwardZ: x3(2, -1, v4(2)),
                            positionX: x3(6, 0, y4(0)),
                            positionY: x3(7, 0, y4(1)),
                            positionZ: x3(8, 0, y4(2)),
                            upX: x3(3, 0, v4(3)),
                            upY: x3(4, 1, v4(4)),
                            upZ: x3(5, 0, v4(5))
                        };
                    })() : l9;
                    return {
                        get forwardX () {
                            return u5;
                        },
                        get forwardY () {
                            return p4;
                        },
                        get forwardZ () {
                            return d2;
                        },
                        get positionX () {
                            return f2;
                        },
                        get positionY () {
                            return _2;
                        },
                        get positionZ () {
                            return m3;
                        },
                        get upX () {
                            return g2;
                        },
                        get upY () {
                            return v3;
                        },
                        get upZ () {
                            return y3;
                        }
                    };
                }
            )(Je, as, ds, Qt, Zt, ee, De, ne), Rs = new WeakMap, qs = ((t125, e63, s48, n, i, o18)=>class extends s48 {
                    constructor(s, o){
                        super(s), this._nativeContext = s, u2.set(this, s), n(s) && i.set(s, new Set), this._destination = new t125(this, o), this._listener = e63(this, s), this._onstatechange = null;
                    }
                    get currentTime() {
                        return this._nativeContext.currentTime;
                    }
                    get destination() {
                        return this._destination;
                    }
                    get listener() {
                        return this._listener;
                    }
                    get onstatechange() {
                        return this._onstatechange;
                    }
                    set onstatechange(t) {
                        const e = "function" == typeof t ? o18(this, t) : null;
                        this._nativeContext.onstatechange = e;
                        const s = this._nativeContext.onstatechange;
                        this._onstatechange = null !== s && s === e ? t : s;
                    }
                    get sampleRate() {
                        return this._nativeContext.sampleRate;
                    }
                    get state() {
                        return this._nativeContext.state;
                    }
                }
            )(es, Es, Me, De, Rs, ue), Fs = ((t, e, s, n, i, o)=>(r, a)=>{
                    const c = r.createOscillator();
                    return qt(c, a), It(c, a, "detune"), It(c, a, "frequency"), void 0 !== a.periodicWave ? c.setPeriodicWave(a.periodicWave) : Rt(c, a, "type"), e(s, ()=>s(r)
                    ) || Vt(c), e(n, ()=>n(r)
                    ) || o(c, r), e(i, ()=>i(r)
                    ) || Nt(c), t(r, c), c;
                }
            )(Qe, ge, oe, re, ae, le), Is = ((t126, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null, c = null;
                    return {
                        set periodicWave (t){
                            r = t;
                        },
                        set start (t){
                            a = t;
                        },
                        set stop (t){
                            c = t;
                        },
                        render (h12, l10) {
                            const u7 = o.get(l10);
                            return void 0 !== u7 ? Promise.resolve(u7) : (async (h, l)=>{
                                let u = s(h);
                                const p = M1(u, l);
                                if (!p) {
                                    const t = {
                                        channelCount: u.channelCount,
                                        channelCountMode: u.channelCountMode,
                                        channelInterpretation: u.channelInterpretation,
                                        detune: u.detune.value,
                                        frequency: u.frequency.value,
                                        periodicWave: null === r ? void 0 : r,
                                        type: u.type
                                    };
                                    u = e(l, t), null !== a && u.start(a), null !== c && u.stop(c);
                                }
                                return o.set(l, u), p ? (await t126(l, h.detune, u.detune), await t126(l, h.frequency, u.frequency)) : (await n(l, h.detune, u.detune), await n(l, h.frequency, u.frequency)), await i(h, l, u), u;
                            })(h12, l10);
                        }
                    };
                }
            )(Xe, Fs, tt, $e, Te), Vs = ((t127, e64, s49, n, i, o, r21)=>class extends t127 {
                    constructor(t, r){
                        const a = i(t), c = {
                            ...Yt,
                            ...r
                        }, h = s49(a, c), l = o(a), u = l ? n() : null, p = t.sampleRate / 2;
                        super(t, !1, h, u), this._detune = e64(this, l, h.detune, 153600, -153600), this._frequency = e64(this, l, h.frequency, p, -p), this._nativeOscillatorNode = h, this._onended = null, this._oscillatorNodeRenderer = u, null !== this._oscillatorNodeRenderer && void 0 !== c.periodicWave && (this._oscillatorNodeRenderer.periodicWave = c.periodicWave);
                    }
                    get detune() {
                        return this._detune;
                    }
                    get frequency() {
                        return this._frequency;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t) {
                        const e = "function" == typeof t ? r21(this, t) : null;
                        this._nativeOscillatorNode.onended = e;
                        const s = this._nativeOscillatorNode.onended;
                        this._onended = null !== s && s === e ? t : s;
                    }
                    get type() {
                        return this._nativeOscillatorNode.type;
                    }
                    set type(t) {
                        this._nativeOscillatorNode.type = t, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
                    }
                    setPeriodicWave(t) {
                        this._nativeOscillatorNode.setPeriodicWave(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t);
                    }
                    start(t = 0) {
                        if (this._nativeOscillatorNode.start(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = t), "closed" !== this.context.state) {
                            k1(this);
                            const t = ()=>{
                                this._nativeOscillatorNode.removeEventListener("ended", t), N1(this) && C1(this);
                            };
                            this._nativeOscillatorNode.addEventListener("ended", t);
                        }
                    }
                    stop(t = 0) {
                        this._nativeOscillatorNode.stop(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t);
                    }
                }
            )(Ve, Je, Fs, Is, ke, De, ue), Ns = ((t)=>(e, s)=>{
                    const n = t(e, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }), i = e.createBuffer(1, 2, 44100);
                    return n.buffer = i, n.loop = !0, n.connect(s), n.start(), ()=>{
                        n.stop(), n.disconnect(s);
                    };
                }
            )(Ye), Ps = ((t128, e65, s50, n28, i23)=>(o, { curve: r , oversample: a , ...c })=>{
                    const h = o.createWaveShaper(), l = o.createWaveShaper();
                    qt(h, c), qt(l, c);
                    const u = s50(o, {
                        ...c,
                        gain: 1
                    }), p = s50(o, {
                        ...c,
                        gain: -1
                    }), d = s50(o, {
                        ...c,
                        gain: 1
                    }), f = s50(o, {
                        ...c,
                        gain: -1
                    });
                    let _ = null, m = !1, g = null;
                    const v = {
                        get bufferSize () {
                        },
                        get channelCount () {
                            return h.channelCount;
                        },
                        set channelCount (t){
                            u.channelCount = t, p.channelCount = t, h.channelCount = t, d.channelCount = t, l.channelCount = t, f.channelCount = t;
                        },
                        get channelCountMode () {
                            return h.channelCountMode;
                        },
                        set channelCountMode (t){
                            u.channelCountMode = t, p.channelCountMode = t, h.channelCountMode = t, d.channelCountMode = t, l.channelCountMode = t, f.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return h.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            u.channelInterpretation = t, p.channelInterpretation = t, h.channelInterpretation = t, d.channelInterpretation = t, l.channelInterpretation = t, f.channelInterpretation = t;
                        },
                        get context () {
                            return h.context;
                        },
                        get curve () {
                            return g;
                        },
                        set curve (s){
                            if (null !== s && s.length < 2) throw e65();
                            if (null === s) h.curve = s, l.curve = s;
                            else {
                                const t = s.length, e = new Float32Array(t + 2 - t % 2), n = new Float32Array(t + 2 - t % 2);
                                e[0] = s[0], n[0] = -s[t - 1];
                                const i = Math.ceil((t + 1) / 2), o = (t + 1) / 2 - 1;
                                for(let r = 1; r < i; r += 1){
                                    const a = r / i * o, c = Math.floor(a), h = Math.ceil(a);
                                    e[r] = c === h ? s[c] : (1 - (a - c)) * s[c] + (1 - (h - a)) * s[h], n[r] = c === h ? -s[t - 1 - c] : -(1 - (a - c)) * s[t - 1 - c] - (1 - (h - a)) * s[t - 1 - h];
                                }
                                e[i] = t % 2 == 1 ? s[i - 1] : (s[i - 2] + s[i - 1]) / 2, h.curve = e, l.curve = n;
                            }
                            g = s, m && (n28(g) && null === _ ? _ = t128(o, u) : null !== _ && (_(), _ = null));
                        },
                        get inputs () {
                            return [
                                u
                            ];
                        },
                        get numberOfInputs () {
                            return h.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return h.numberOfOutputs;
                        },
                        get oversample () {
                            return h.oversample;
                        },
                        set oversample (t){
                            h.oversample = t, l.oversample = t;
                        },
                        addEventListener: (...t)=>u.addEventListener(t[0], t[1], t[2])
                        ,
                        dispatchEvent: (...t)=>u.dispatchEvent(t[0])
                        ,
                        removeEventListener: (...t)=>u.removeEventListener(t[0], t[1], t[2])
                    };
                    return null !== r && (v.curve = r instanceof Float32Array ? r : new Float32Array(r)), a !== v.oversample && (v.oversample = a), i23(zt(v, d), ()=>{
                        u.connect(h).connect(d), u.connect(p).connect(l).connect(f).connect(d), m = !0, n28(g) && (_ = t128(o, u));
                    }, ()=>{
                        u.disconnect(h), h.disconnect(d), u.disconnect(p), p.disconnect(l), l.disconnect(f), f.disconnect(d), m = !1, null !== _ && (_(), _ = null);
                    });
                }
            )(Ns, At, Bt, se, os), js = ((t129, e66, s51, n, i, o, r)=>(a, c)=>{
                    const h = a.createWaveShaper();
                    if (null !== o && "webkitAudioContext" === o.name && void 0 === a.createGain().gain.automationRate) return s51(a, c);
                    qt(h, c);
                    const l = null === c.curve || c.curve instanceof Float32Array ? c.curve : new Float32Array(c.curve);
                    if (null !== l && l.length < 2) throw e66();
                    Rt(h, {
                        curve: l
                    }, "curve"), Rt(h, c, "oversample");
                    let u = null, p = !1;
                    return r(h, "curve", (t)=>()=>t.call(h)
                    , (e)=>(s)=>(e.call(h, s), p && (n(s) && null === u ? u = t129(a, h) : n(s) || null === u || (u(), u = null)), s)
                    ), i(h, ()=>{
                        p = !0, n(h.curve) && (u = t129(a, h));
                    }, ()=>{
                        p = !1, null !== u && (u(), u = null);
                    });
                }
            )(Ns, At, Ps, se, os, Ee, ne), Ls = ((t130, e67, s52, n, i, o, r, a, c, h)=>(l, { coneInnerAngle: u , coneOuterAngle: p , coneOuterGain: d , distanceModel: f , maxDistance: _ , orientationX: m , orientationY: g , orientationZ: v , panningModel: y , positionX: x , positionY: w , positionZ: b , refDistance: T , rolloffFactor: S , ...k })=>{
                    const A = l.createPanner();
                    if (k.channelCount > 2) throw r();
                    if ("max" === k.channelCountMode) throw r();
                    qt(A, k);
                    const C = {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete"
                    }, D = s52(l, {
                        ...C,
                        channelInterpretation: "speakers",
                        numberOfInputs: 6
                    }), O = n(l, {
                        ...k,
                        gain: 1
                    }), M = n(l, {
                        ...C,
                        gain: 1
                    }), E = n(l, {
                        ...C,
                        gain: 0
                    }), R = n(l, {
                        ...C,
                        gain: 0
                    }), q = n(l, {
                        ...C,
                        gain: 0
                    }), F = n(l, {
                        ...C,
                        gain: 0
                    }), I = n(l, {
                        ...C,
                        gain: 0
                    }), V = i(l, 256, 6, 1), N = o(l, {
                        ...C,
                        curve: new Float32Array([
                            1,
                            1
                        ]),
                        oversample: "none"
                    });
                    let P = [
                        m,
                        g,
                        v
                    ], j = [
                        x,
                        w,
                        b
                    ];
                    const L = new Float32Array(1);
                    V.onaudioprocess = ({ inputBuffer: t131  })=>{
                        const e = [
                            c(t131, L, 0),
                            c(t131, L, 1),
                            c(t131, L, 2)
                        ];
                        e.some((t, e)=>t !== P[e]
                        ) && (A.setOrientation(...e), P = e);
                        const s = [
                            c(t131, L, 3),
                            c(t131, L, 4),
                            c(t131, L, 5)
                        ];
                        s.some((t, e)=>t !== j[e]
                        ) && (A.setPosition(...s), j = s);
                    }, Object.defineProperty(E.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(R.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(q.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(F.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(I.gain, "defaultValue", {
                        get: ()=>0
                    });
                    const z = {
                        get bufferSize () {
                        },
                        get channelCount () {
                            return A.channelCount;
                        },
                        set channelCount (t){
                            if (t > 2) throw r();
                            O.channelCount = t, A.channelCount = t;
                        },
                        get channelCountMode () {
                            return A.channelCountMode;
                        },
                        set channelCountMode (t){
                            if ("max" === t) throw r();
                            O.channelCountMode = t, A.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return A.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            O.channelInterpretation = t, A.channelInterpretation = t;
                        },
                        get coneInnerAngle () {
                            return A.coneInnerAngle;
                        },
                        set coneInnerAngle (t){
                            A.coneInnerAngle = t;
                        },
                        get coneOuterAngle () {
                            return A.coneOuterAngle;
                        },
                        set coneOuterAngle (t){
                            A.coneOuterAngle = t;
                        },
                        get coneOuterGain () {
                            return A.coneOuterGain;
                        },
                        set coneOuterGain (t){
                            if (t < 0 || t > 1) throw e67();
                            A.coneOuterGain = t;
                        },
                        get context () {
                            return A.context;
                        },
                        get distanceModel () {
                            return A.distanceModel;
                        },
                        set distanceModel (t){
                            A.distanceModel = t;
                        },
                        get inputs () {
                            return [
                                O
                            ];
                        },
                        get maxDistance () {
                            return A.maxDistance;
                        },
                        set maxDistance (t){
                            if (t < 0) throw new RangeError;
                            A.maxDistance = t;
                        },
                        get numberOfInputs () {
                            return A.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return A.numberOfOutputs;
                        },
                        get orientationX () {
                            return M.gain;
                        },
                        get orientationY () {
                            return E.gain;
                        },
                        get orientationZ () {
                            return R.gain;
                        },
                        get panningModel () {
                            return A.panningModel;
                        },
                        set panningModel (t){
                            A.panningModel = t;
                        },
                        get positionX () {
                            return q.gain;
                        },
                        get positionY () {
                            return F.gain;
                        },
                        get positionZ () {
                            return I.gain;
                        },
                        get refDistance () {
                            return A.refDistance;
                        },
                        set refDistance (t){
                            if (t < 0) throw new RangeError;
                            A.refDistance = t;
                        },
                        get rolloffFactor () {
                            return A.rolloffFactor;
                        },
                        set rolloffFactor (t){
                            if (t < 0) throw new RangeError;
                            A.rolloffFactor = t;
                        },
                        addEventListener: (...t)=>O.addEventListener(t[0], t[1], t[2])
                        ,
                        dispatchEvent: (...t)=>O.dispatchEvent(t[0])
                        ,
                        removeEventListener: (...t)=>O.removeEventListener(t[0], t[1], t[2])
                    };
                    return u !== z.coneInnerAngle && (z.coneInnerAngle = u), p !== z.coneOuterAngle && (z.coneOuterAngle = p), d !== z.coneOuterGain && (z.coneOuterGain = d), f !== z.distanceModel && (z.distanceModel = f), _ !== z.maxDistance && (z.maxDistance = _), m !== z.orientationX.value && (z.orientationX.value = m), g !== z.orientationY.value && (z.orientationY.value = g), v !== z.orientationZ.value && (z.orientationZ.value = v), y !== z.panningModel && (z.panningModel = y), x !== z.positionX.value && (z.positionX.value = x), w !== z.positionY.value && (z.positionY.value = w), b !== z.positionZ.value && (z.positionZ.value = b), T !== z.refDistance && (z.refDistance = T), S !== z.rolloffFactor && (z.rolloffFactor = S), 1 === P[0] && 0 === P[1] && 0 === P[2] || A.setOrientation(...P), 0 === j[0] && 0 === j[1] && 0 === j[2] || A.setPosition(...j), h(zt(z, A), ()=>{
                        O.connect(A), t130(O, N, 0, 0), N.connect(M).connect(D, 0, 0), N.connect(E).connect(D, 0, 1), N.connect(R).connect(D, 0, 2), N.connect(q).connect(D, 0, 3), N.connect(F).connect(D, 0, 4), N.connect(I).connect(D, 0, 5), D.connect(V).connect(l.destination);
                    }, ()=>{
                        O.disconnect(A), a(O, N, 0, 0), N.disconnect(M), M.disconnect(D), N.disconnect(E), E.disconnect(D), N.disconnect(R), R.disconnect(D), N.disconnect(q), q.disconnect(D), N.disconnect(F), F.disconnect(D), N.disconnect(I), I.disconnect(D), D.disconnect(V), V.disconnect(l.destination);
                    });
                }
            )(Y1, At, as, Bt, Qt, js, Zt, K1, ee, os), zs = ((t)=>(e, s)=>{
                    const n = e.createPanner();
                    return void 0 === n.orientationX ? t(e, s) : (qt(n, s), It(n, s, "orientationX"), It(n, s, "orientationY"), It(n, s, "orientationZ"), It(n, s, "positionX"), It(n, s, "positionY"), It(n, s, "positionZ"), Rt(n, s, "coneInnerAngle"), Rt(n, s, "coneOuterAngle"), Rt(n, s, "coneOuterGain"), Rt(n, s, "distanceModel"), Rt(n, s, "maxDistance"), Rt(n, s, "panningModel"), Rt(n, s, "refDistance"), Rt(n, s, "rolloffFactor"), n);
                }
            )(Ls), Ws = ((t132, e71, s53, n29, i24, o19, r22, a, c, h)=>()=>{
                    const l11 = new WeakMap;
                    let u = null;
                    return {
                        render (p5, d3) {
                            const f4 = l11.get(d3);
                            return void 0 !== f4 ? Promise.resolve(f4) : (async (p, d)=>{
                                let f = null, _ = o19(p);
                                const m = {
                                    channelCount: _.channelCount,
                                    channelCountMode: _.channelCountMode,
                                    channelInterpretation: _.channelInterpretation
                                }, g = {
                                    ...m,
                                    coneInnerAngle: _.coneInnerAngle,
                                    coneOuterAngle: _.coneOuterAngle,
                                    coneOuterGain: _.coneOuterGain,
                                    distanceModel: _.distanceModel,
                                    maxDistance: _.maxDistance,
                                    panningModel: _.panningModel,
                                    refDistance: _.refDistance,
                                    rolloffFactor: _.rolloffFactor
                                }, v = M1(_, d);
                                if ("bufferSize" in _) f = n29(d, {
                                    ...m,
                                    gain: 1
                                });
                                else if (!v) {
                                    const t = {
                                        ...g,
                                        orientationX: _.orientationX.value,
                                        orientationY: _.orientationY.value,
                                        orientationZ: _.orientationZ.value,
                                        positionX: _.positionX.value,
                                        positionY: _.positionY.value,
                                        positionZ: _.positionZ.value
                                    };
                                    _ = i24(d, t);
                                }
                                if (l11.set(d, null === f ? _ : f), null !== f) {
                                    if (null === u) {
                                        if (null === r22) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t = new r22(6, p.context.length, d.sampleRate), n30 = e71(t, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "speakers",
                                            numberOfInputs: 6
                                        });
                                        n30.connect(t.destination), u = (async ()=>{
                                            const e72 = await Promise.all([
                                                p.orientationX,
                                                p.orientationY,
                                                p.orientationZ,
                                                p.positionX,
                                                p.positionY,
                                                p.positionZ
                                            ].map(async (e, n)=>{
                                                const i = s53(t, {
                                                    channelCount: 1,
                                                    channelCountMode: "explicit",
                                                    channelInterpretation: "discrete",
                                                    offset: 0 === n ? 1 : 0
                                                });
                                                return await a(t, e, i.offset), i;
                                            }));
                                            for(let t133 = 0; t133 < 6; t133 += 1)e72[t133].connect(n30, 0, t133), e72[t133].start(0);
                                            return h(t);
                                        })();
                                    }
                                    const t135 = await u, o = n29(d, {
                                        ...m,
                                        gain: 1
                                    });
                                    await c(p, d, o);
                                    const l = [];
                                    for(let e69 = 0; e69 < t135.numberOfChannels; e69 += 1)l.push(t135.getChannelData(e69));
                                    let _ = [
                                        l[0][0],
                                        l[1][0],
                                        l[2][0]
                                    ], v = [
                                        l[3][0],
                                        l[4][0],
                                        l[5][0]
                                    ], y = n29(d, {
                                        ...m,
                                        gain: 1
                                    }), x = i24(d, {
                                        ...g,
                                        orientationX: _[0],
                                        orientationY: _[1],
                                        orientationZ: _[2],
                                        positionX: v[0],
                                        positionY: v[1],
                                        positionZ: v[2]
                                    });
                                    o.connect(y).connect(x.inputs[0]), x.connect(f);
                                    for(let e68 = 128; e68 < t135.length; e68 += 128){
                                        const t134 = [
                                            l[0][e68],
                                            l[1][e68],
                                            l[2][e68]
                                        ], s = [
                                            l[3][e68],
                                            l[4][e68],
                                            l[5][e68]
                                        ];
                                        if (t134.some((t, e)=>t !== _[e]
                                        ) || s.some((t, e)=>t !== v[e]
                                        )) {
                                            _ = t134, v = s;
                                            const r = e68 / d.sampleRate;
                                            y.gain.setValueAtTime(0, r), y = n29(d, {
                                                ...m,
                                                gain: 0
                                            }), x = i24(d, {
                                                ...g,
                                                orientationX: _[0],
                                                orientationY: _[1],
                                                orientationZ: _[2],
                                                positionX: v[0],
                                                positionY: v[1],
                                                positionZ: v[2]
                                            }), y.gain.setValueAtTime(1, r), o.connect(y).connect(x.inputs[0]), x.connect(f);
                                        }
                                    }
                                    return f;
                                }
                                return v ? (await t132(d, p.orientationX, _.orientationX), await t132(d, p.orientationY, _.orientationY), await t132(d, p.orientationZ, _.orientationZ), await t132(d, p.positionX, _.positionX), await t132(d, p.positionY, _.positionY), await t132(d, p.positionZ, _.positionZ)) : (await a(d, p.orientationX, _.orientationX), await a(d, p.orientationY, _.orientationY), await a(d, p.orientationZ, _.orientationZ), await a(d, p.positionX, _.positionX), await a(d, p.positionY, _.positionY), await a(d, p.positionZ, _.positionZ)), X1(_) ? await c(p, d, _.inputs[0]) : await c(p, d, _), _;
                            })(p5, d3);
                        }
                    };
                }
            )(Xe, as, ds, Bt, zs, tt, Ce, $e, Te, Cs), Bs = ((t137, e, s, n, i, o, r)=>class extends t137 {
                    constructor(t, a){
                        const c = i(t), h = {
                            ...$t,
                            ...a
                        }, l = s(c, h), u = o(c);
                        super(t, !1, l, u ? n() : null), this._nativePannerNode = l, this._orientationX = e(this, u, l.orientationX, V1, I1), this._orientationY = e(this, u, l.orientationY, V1, I1), this._orientationZ = e(this, u, l.orientationZ, V1, I1), this._positionX = e(this, u, l.positionX, V1, I1), this._positionY = e(this, u, l.positionY, V1, I1), this._positionZ = e(this, u, l.positionZ, V1, I1), r(this, 1);
                    }
                    get coneInnerAngle() {
                        return this._nativePannerNode.coneInnerAngle;
                    }
                    set coneInnerAngle(t) {
                        this._nativePannerNode.coneInnerAngle = t;
                    }
                    get coneOuterAngle() {
                        return this._nativePannerNode.coneOuterAngle;
                    }
                    set coneOuterAngle(t) {
                        this._nativePannerNode.coneOuterAngle = t;
                    }
                    get coneOuterGain() {
                        return this._nativePannerNode.coneOuterGain;
                    }
                    set coneOuterGain(t) {
                        this._nativePannerNode.coneOuterGain = t;
                    }
                    get distanceModel() {
                        return this._nativePannerNode.distanceModel;
                    }
                    set distanceModel(t) {
                        this._nativePannerNode.distanceModel = t;
                    }
                    get maxDistance() {
                        return this._nativePannerNode.maxDistance;
                    }
                    set maxDistance(t) {
                        this._nativePannerNode.maxDistance = t;
                    }
                    get orientationX() {
                        return this._orientationX;
                    }
                    get orientationY() {
                        return this._orientationY;
                    }
                    get orientationZ() {
                        return this._orientationZ;
                    }
                    get panningModel() {
                        return this._nativePannerNode.panningModel;
                    }
                    set panningModel(t) {
                        this._nativePannerNode.panningModel = t;
                    }
                    get positionX() {
                        return this._positionX;
                    }
                    get positionY() {
                        return this._positionY;
                    }
                    get positionZ() {
                        return this._positionZ;
                    }
                    get refDistance() {
                        return this._nativePannerNode.refDistance;
                    }
                    set refDistance(t) {
                        this._nativePannerNode.refDistance = t;
                    }
                    get rolloffFactor() {
                        return this._nativePannerNode.rolloffFactor;
                    }
                    set rolloffFactor(t) {
                        this._nativePannerNode.rolloffFactor = t;
                    }
                }
            )(Ve, Je, zs, Ws, ke, De, ns), Us = ((t)=>(e, { disableNormalization: s , imag: n , real: i  })=>{
                    const o = n instanceof Float32Array ? n : new Float32Array(n), r = i instanceof Float32Array ? i : new Float32Array(i), a = e.createPeriodicWave(r, o, {
                        disableNormalization: s
                    });
                    if (Array.from(n).length < 2) throw t();
                    return a;
                }
            )(R1), Gs = ((t138, e73, s54, n33)=>class n34 {
                    constructor(n, i){
                        const o = e73(n), r = ((t)=>{
                            const { imag: e , real: s  } = t;
                            return void 0 === e ? void 0 === s ? {
                                ...t,
                                imag: [
                                    0,
                                    0
                                ],
                                real: [
                                    0,
                                    0
                                ]
                            } : {
                                ...t,
                                imag: Array.from(s, ()=>0
                                ),
                                real: s
                            } : void 0 === s ? {
                                ...t,
                                imag: e,
                                real: Array.from(e, ()=>0
                                )
                            } : {
                                ...t,
                                imag: e,
                                real: s
                            };
                        })({
                            ...Ht,
                            ...i
                        }), a = t138(o, r);
                        return s54.add(a), a;
                    }
                    static [Symbol.hasInstance](t) {
                        return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === n34.prototype || s54.has(t);
                    }
                }
            )(Us, ke, new WeakSet), Qs = ((t140, e74, s, n35, i25, o20)=>{
                const r23 = 16385, a15 = new Float32Array([
                    1,
                    1
                ]), c14 = Math.PI / 2, h13 = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }, l12 = {
                    ...h13,
                    oversample: "none"
                }, u8 = (t141, o21, u9, p6, d4)=>{
                    if (1 === o21) return ((t, e, i, o)=>{
                        const u = new Float32Array(r23), p = new Float32Array(r23);
                        for(let t139 = 0; t139 < r23; t139 += 1){
                            const e = t139 / 16384 * c14;
                            u[t139] = Math.cos(e), p[t139] = Math.sin(e);
                        }
                        const d = s(t, {
                            ...h13,
                            gain: 0
                        }), f = n35(t, {
                            ...l12,
                            curve: u
                        }), _ = n35(t, {
                            ...l12,
                            curve: a15
                        }), m = s(t, {
                            ...h13,
                            gain: 0
                        }), g = n35(t, {
                            ...l12,
                            curve: p
                        });
                        return {
                            connectGraph () {
                                e.connect(d), e.connect(void 0 === _.inputs ? _ : _.inputs[0]), e.connect(m), _.connect(i), i.connect(void 0 === f.inputs ? f : f.inputs[0]), i.connect(void 0 === g.inputs ? g : g.inputs[0]), f.connect(d.gain), g.connect(m.gain), d.connect(o, 0, 0), m.connect(o, 0, 1);
                            },
                            disconnectGraph () {
                                e.disconnect(d), e.disconnect(void 0 === _.inputs ? _ : _.inputs[0]), e.disconnect(m), _.disconnect(i), i.disconnect(void 0 === f.inputs ? f : f.inputs[0]), i.disconnect(void 0 === g.inputs ? g : g.inputs[0]), f.disconnect(d.gain), g.disconnect(m.gain), d.disconnect(o, 0, 0), m.disconnect(o, 0, 1);
                            }
                        };
                    })(t141, u9, p6, d4);
                    if (2 === o21) return ((t, i, o, u)=>{
                        const p = new Float32Array(r23), d = new Float32Array(r23), f = new Float32Array(r23), _ = new Float32Array(r23), m = Math.floor(8192.5);
                        for(let t142 = 0; t142 < r23; t142 += 1)if (t142 > m) {
                            const e = (t142 - m) / (16384 - m) * c14;
                            p[t142] = Math.cos(e), d[t142] = Math.sin(e), f[t142] = 0, _[t142] = 1;
                        } else {
                            const e = t142 / (16384 - m) * c14;
                            p[t142] = 1, d[t142] = 0, f[t142] = Math.cos(e), _[t142] = Math.sin(e);
                        }
                        const g = e74(t, {
                            channelCount: 2,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: 2
                        }), v = s(t, {
                            ...h13,
                            gain: 0
                        }), y = n35(t, {
                            ...l12,
                            curve: p
                        }), x = s(t, {
                            ...h13,
                            gain: 0
                        }), w = n35(t, {
                            ...l12,
                            curve: d
                        }), b = n35(t, {
                            ...l12,
                            curve: a15
                        }), T = s(t, {
                            ...h13,
                            gain: 0
                        }), S = n35(t, {
                            ...l12,
                            curve: f
                        }), k = s(t, {
                            ...h13,
                            gain: 0
                        }), A = n35(t, {
                            ...l12,
                            curve: _
                        });
                        return {
                            connectGraph () {
                                i.connect(g), i.connect(void 0 === b.inputs ? b : b.inputs[0]), g.connect(v, 0), g.connect(x, 0), g.connect(T, 1), g.connect(k, 1), b.connect(o), o.connect(void 0 === y.inputs ? y : y.inputs[0]), o.connect(void 0 === w.inputs ? w : w.inputs[0]), o.connect(void 0 === S.inputs ? S : S.inputs[0]), o.connect(void 0 === A.inputs ? A : A.inputs[0]), y.connect(v.gain), w.connect(x.gain), S.connect(T.gain), A.connect(k.gain), v.connect(u, 0, 0), T.connect(u, 0, 0), x.connect(u, 0, 1), k.connect(u, 0, 1);
                            },
                            disconnectGraph () {
                                i.disconnect(g), i.disconnect(void 0 === b.inputs ? b : b.inputs[0]), g.disconnect(v, 0), g.disconnect(x, 0), g.disconnect(T, 1), g.disconnect(k, 1), b.disconnect(o), o.disconnect(void 0 === y.inputs ? y : y.inputs[0]), o.disconnect(void 0 === w.inputs ? w : w.inputs[0]), o.disconnect(void 0 === S.inputs ? S : S.inputs[0]), o.disconnect(void 0 === A.inputs ? A : A.inputs[0]), y.disconnect(v.gain), w.disconnect(x.gain), S.disconnect(T.gain), A.disconnect(k.gain), v.disconnect(u, 0, 0), T.disconnect(u, 0, 0), x.disconnect(u, 0, 1), k.disconnect(u, 0, 1);
                            }
                        };
                    })(t141, u9, p6, d4);
                    throw i25();
                };
                return (e, { channelCount: n , channelCountMode: r , pan: a , ...c })=>{
                    if ("max" === r) throw i25();
                    const h = t140(e, {
                        ...c,
                        channelCount: 1,
                        channelCountMode: r,
                        numberOfInputs: 2
                    }), l = s(e, {
                        ...c,
                        channelCount: n,
                        channelCountMode: r,
                        gain: 1
                    }), p = s(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: a
                    });
                    let { connectGraph: d , disconnectGraph: f  } = u8(e, n, l, p, h);
                    Object.defineProperty(p.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(p.gain, "maxValue", {
                        get: ()=>1
                    }), Object.defineProperty(p.gain, "minValue", {
                        get: ()=>-1
                    });
                    const _ = {
                        get bufferSize () {
                        },
                        get channelCount () {
                            return l.channelCount;
                        },
                        set channelCount (t){
                            l.channelCount !== t && (m && f(), { connectGraph: d , disconnectGraph: f  } = u8(e, t, l, p, h), m && d()), l.channelCount = t;
                        },
                        get channelCountMode () {
                            return l.channelCountMode;
                        },
                        set channelCountMode (t){
                            if ("clamped-max" === t || "max" === t) throw i25();
                            l.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return l.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            l.channelInterpretation = t;
                        },
                        get context () {
                            return l.context;
                        },
                        get inputs () {
                            return [
                                l
                            ];
                        },
                        get numberOfInputs () {
                            return l.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return l.numberOfOutputs;
                        },
                        get pan () {
                            return p.gain;
                        },
                        addEventListener: (...t)=>l.addEventListener(t[0], t[1], t[2])
                        ,
                        dispatchEvent: (...t)=>l.dispatchEvent(t[0])
                        ,
                        removeEventListener: (...t)=>l.removeEventListener(t[0], t[1], t[2])
                    };
                    let m = !1;
                    return o20(zt(_, h), ()=>{
                        d(), m = !0;
                    }, ()=>{
                        f(), m = !1;
                    });
                };
            })(as, Lt, Bt, js, Zt, os), Zs = ((t143, e)=>(s, n)=>{
                    const i = n.channelCountMode;
                    if ("clamped-max" === i) throw e();
                    if (void 0 === s.createStereoPanner) return t143(s, n);
                    const o = s.createStereoPanner();
                    return qt(o, n), It(o, n, "pan"), Object.defineProperty(o, "channelCountMode", {
                        get: ()=>i
                        ,
                        set: (t)=>{
                            if (t !== i) throw e();
                        }
                    }), o;
                }
            )(Qs, Zt), Xs = ((t144, e, s, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r24, a16) {
                            const c15 = o.get(a16);
                            return void 0 !== c15 ? Promise.resolve(c15) : (async (r, a)=>{
                                let c = s(r);
                                const h = M1(c, a);
                                if (!h) {
                                    const t = {
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        pan: c.pan.value
                                    };
                                    c = e(a, t);
                                }
                                return o.set(a, c), h ? await t144(a, r.pan, c.pan) : await n(a, r.pan, c.pan), X1(c) ? await i(r, a, c.inputs[0]) : await i(r, a, c), c;
                            })(r24, a16);
                        }
                    };
                }
            )(Xe, Zs, tt, $e, Te), Ys = ((t145, e, s, n, i, o)=>class extends t145 {
                    constructor(t, r){
                        const a = i(t), c = {
                            ...Jt,
                            ...r
                        }, h = s(a, c), l = o(a);
                        super(t, !1, h, l ? n() : null), this._pan = e(this, l, h.pan);
                    }
                    get pan() {
                        return this._pan;
                    }
                }
            )(Ve, Je, Zs, Xs, ke, De), $s = ((t, e75, s)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i26, o22) {
                            const r25 = n.get(o22);
                            return void 0 !== r25 ? Promise.resolve(r25) : (async (i, o)=>{
                                let r = e75(i);
                                if (!M1(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        curve: r.curve,
                                        oversample: r.oversample
                                    };
                                    r = t(o, e);
                                }
                                return n.set(o, r), X1(r) ? await s(i, o, r.inputs[0]) : await s(i, o, r), r;
                            })(i26, o22);
                        }
                    };
                }
            )(js, tt, Te), Hs = ((t146, e76, s, n, i, o, r)=>class extends t146 {
                    constructor(t, e){
                        const a = i(t), c = {
                            ...te,
                            ...e
                        }, h = s(a, c);
                        super(t, !0, h, o(a) ? n() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = h, r(this, 1);
                    }
                    get curve() {
                        return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
                    }
                    set curve(t) {
                        if (null === t) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                            0,
                            0
                        ]);
                        else {
                            if (t.length < 2) throw e76();
                            this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t;
                        }
                    }
                    get oversample() {
                        return this._nativeWaveShaperNode.oversample;
                    }
                    set oversample(t) {
                        this._nativeWaveShaperNode.oversample = t;
                    }
                }
            )(Ve, At, js, $s, ke, De, ns), Js = ((t)=>null !== t && t.isSecureContext
            )(xe), Ks = ((t)=>(e, s, n)=>{
                    Object.defineProperties(t, {
                        currentFrame: {
                            configurable: !0,
                            get: ()=>Math.round(e * s)
                        },
                        currentTime: {
                            configurable: !0,
                            get: ()=>e
                        }
                    });
                    try {
                        return n();
                    } finally{
                        null !== t && (delete t.currentFrame, delete t.currentTime);
                    }
                }
            )(xe), tn = new WeakMap, en = ((t, e)=>(s)=>{
                    let n = t.get(s);
                    if (void 0 !== n) return n;
                    if (null === e) throw new Error("Missing the native OfflineAudioContext constructor.");
                    return n = new e(1, 1, 44100), t.set(s, n), n;
                }
            )(tn, Ce), sn = Js ? ((t147, e77, s55, n36, i27, o23, r, a, c, h14, l13, u, p)=>{
                let d = 0;
                return (_, m, g = {
                    credentials: "omit"
                })=>{
                    const w = l13.get(_);
                    if (void 0 !== w && w.has(m)) return Promise.resolve();
                    const b = h14.get(_);
                    if (void 0 !== b) {
                        const t = b.get(m);
                        if (void 0 !== t) return t;
                    }
                    const T = o23(_), S = void 0 === T.audioWorklet ? i27(m).then(([t, e])=>{
                        const [n, i] = v2(t, e);
                        return s55(`${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}\n})})(window,'_AWGS')`);
                    }).then(()=>{
                        const t148 = p._AWGS.pop();
                        if (void 0 === t148) throw new SyntaxError;
                        n36(T.currentTime, T.sampleRate, ()=>t148(class {
                            }, void 0, (t, s)=>{
                                if ("" === t.trim()) throw e77();
                                const n = f1.get(T);
                                if (void 0 !== n) {
                                    if (n.has(t)) throw e77();
                                    x2(s), y2(s.parameterDescriptors), n.set(t, s);
                                } else x2(s), y2(s.parameterDescriptors), f1.set(T, new Map([
                                    [
                                        t,
                                        s
                                    ]
                                ]));
                            }, T.sampleRate, void 0, void 0)
                        );
                    }) : Promise.all([
                        i27(m),
                        Promise.resolve(t147(u, u))
                    ]).then(([[t149, e], s])=>{
                        const n = d + 1;
                        d = n;
                        const [i, o] = v2(t149, e), h = new Blob([
                            `${i};((AudioWorkletProcessor,registerProcessor)=>{${o}\n})(${s ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${s ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${s ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${n}',class extends AudioWorkletProcessor{process(){return !1}})`
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), l = URL.createObjectURL(h);
                        return T.audioWorklet.addModule(l, g).then(()=>{
                            if (a(T)) return T;
                            const t = r(T);
                            return t.audioWorklet.addModule(l, g).then(()=>t
                            );
                        }).then((t)=>{
                            if (null === c) throw new SyntaxError;
                            try {
                                new c(t, `__sac${n}`);
                            } catch  {
                                throw new SyntaxError;
                            }
                        }).finally(()=>URL.revokeObjectURL(l)
                        );
                    });
                    return void 0 === b ? h14.set(_, new Map([
                        [
                            m,
                            S
                        ]
                    ])) : b.set(m, S), S.then(()=>{
                        const t = l13.get(_);
                        void 0 === t ? l13.set(_, new Set([
                            m
                        ])) : t.add(m);
                    }).finally(()=>{
                        const t = h14.get(_);
                        void 0 !== t && t.delete(m);
                    }), S;
                };
            })(ge, Zt, ((t)=>(e78)=>new Promise((s56, n)=>{
                        if (null === t) return void n(new SyntaxError);
                        const i28 = t.document.head;
                        if (null === i28) n(new SyntaxError);
                        else {
                            const o24 = t.document.createElement("script"), r26 = new Blob([
                                e78
                            ], {
                                type: "application/javascript"
                            }), a = URL.createObjectURL(r26), c = t.onerror, h = ()=>{
                                t.onerror = c, URL.revokeObjectURL(a);
                            };
                            t.onerror = (e, s, i, o, r)=>s === a || s === t.location.href && 1 === i && 1 === o ? (h(), n(r), !1) : null !== c ? c(e, s, i, o, r) : void 0
                            , o24.onerror = ()=>{
                                h(), n(new SyntaxError);
                            }, o24.onload = ()=>{
                                h(), s56();
                            }, o24.src = a, o24.type = "module", i28.appendChild(o24);
                        }
                    })
            )(xe), Ks, async (t)=>{
                try {
                    const e = await fetch(t);
                    if (e.ok) return [
                        await e.text(),
                        e.url
                    ];
                } catch  {
                }
                throw new DOMException("", "AbortError");
            }, ke, en, De, Ie, new WeakMap, new WeakMap, ((t, e79)=>async ()=>{
                    if (null === t) return !0;
                    if (null === e79) return !1;
                    const s = new Blob([
                        'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
                    ], {
                        type: "application/javascript; charset=utf-8"
                    }), n = new e79(1, 128, 44100), i = URL.createObjectURL(s);
                    let o = !1, r = !1;
                    try {
                        await n.audioWorklet.addModule(i);
                        const e = new t(n, "a", {
                            numberOfOutputs: 0
                        }), s = n.createOscillator();
                        e.port.onmessage = ()=>o = !0
                        , e.onprocessorerror = ()=>r = !0
                        , s.connect(e), s.start(0), await n.startRendering();
                    } catch  {
                    } finally{
                        URL.revokeObjectURL(i);
                    }
                    return o && !r;
                }
            )(Ie, Ce), xe) : void 0, nn = ((t, e)=>(s)=>t(s) || e(s)
            )(Re, De), on = ((t150, e80, s57, n37, i29, o26, r, a, c, h, l)=>(s58, n)=>{
                    const u = r(s58) ? s58 : o26(s58);
                    if (i29.has(n)) {
                        const t = new DOMException("", "DataCloneError");
                        return Promise.reject(t);
                    }
                    try {
                        i29.add(n);
                    } catch  {
                    }
                    return e80(c, ()=>c(u)
                    ) ? u.decodeAudioData(n).then((s)=>(wt(n).catch(()=>{
                        }), e80(a, ()=>a(s)
                        ) || l(s), t150.add(s), s)
                    ) : new Promise((e, s59)=>{
                        const i = async ()=>{
                            try {
                                await wt(n);
                            } catch  {
                            }
                        }, o = (t)=>{
                            s59(t), i();
                        };
                        try {
                            u.decodeAudioData(n, (s)=>{
                                "function" != typeof s.copyFromChannel && (h(s), q1(s)), t150.add(s), i().then(()=>e(s)
                                );
                            }, (t)=>{
                                o(null === t ? new DOMException("", "EncodingError") : t);
                            });
                        } catch (t) {
                            o(t);
                        }
                    });
                }
            )(je, ge, 0, 0, new WeakSet, ke, nn, E1, Et, Be, Ue), rn = ((t151, e81, s60, n38, i, o, r, a, c, h, l, u, p, d, f, _, m, g, v, y)=>class extends f {
                    constructor(e82, s61){
                        super(e82, s61), this._nativeContext = e82, this._audioWorklet = void 0 === t151 ? void 0 : {
                            addModule: (e, s)=>t151(this, e, s)
                        };
                    }
                    get audioWorklet() {
                        return this._audioWorklet;
                    }
                    createAnalyser() {
                        return new e81(this);
                    }
                    createBiquadFilter() {
                        return new i(this);
                    }
                    createBuffer(t, e, n) {
                        return new s60({
                            length: e,
                            numberOfChannels: t,
                            sampleRate: n
                        });
                    }
                    createBufferSource() {
                        return new n38(this);
                    }
                    createChannelMerger(t = 6) {
                        return new o(this, {
                            numberOfInputs: t
                        });
                    }
                    createChannelSplitter(t = 6) {
                        return new r(this, {
                            numberOfOutputs: t
                        });
                    }
                    createConstantSource() {
                        return new a(this);
                    }
                    createConvolver() {
                        return new c(this);
                    }
                    createDelay(t = 1) {
                        return new l(this, {
                            maxDelayTime: t
                        });
                    }
                    createDynamicsCompressor() {
                        return new u(this);
                    }
                    createGain() {
                        return new p(this);
                    }
                    createIIRFilter(t, e) {
                        return new d(this, {
                            feedback: e,
                            feedforward: t
                        });
                    }
                    createOscillator() {
                        return new _(this);
                    }
                    createPanner() {
                        return new m(this);
                    }
                    createPeriodicWave(t, e, s = {
                        disableNormalization: !1
                    }) {
                        return new g(this, {
                            ...s,
                            imag: e,
                            real: t
                        });
                    }
                    createStereoPanner() {
                        return new v(this);
                    }
                    createWaveShaper() {
                        return new y(this);
                    }
                    decodeAudioData(t152, e, s) {
                        return h(this._nativeContext, t152).then((t)=>("function" == typeof e && e(t), t)
                        , (t)=>{
                            throw "function" == typeof s && s(t), t;
                        });
                    }
                }
            )(sn, Pe, Ge, ts, is, hs, us, _s, vs, on, xs, Ts, ks, Ms, qs, Vs, Bs, Gs, Ys, Hs), an = ((t153, e83, s, n)=>class extends t153 {
                    constructor(t154, e84){
                        const i = s(t154), o = ((t, e)=>t.createMediaElementSource(e.mediaElement)
                        )(i, e84);
                        if (n(i)) throw TypeError();
                        super(t154, !0, o, null), this._nativeMediaElementAudioSourceNode = o;
                    }
                    get mediaElement() {
                        return this._nativeMediaElementAudioSourceNode.mediaElement;
                    }
                }
            )(Ve, 0, ke, De), cn = ((t155, e85, s62, n)=>class extends t155 {
                    constructor(t156, e86){
                        const i = s62(t156);
                        if (n(i)) throw new TypeError;
                        const o = ((t, e)=>{
                            const s = t.createMediaStreamDestination();
                            return qt(s, e), 1 === s.numberOfOutputs && Object.defineProperty(s, "numberOfOutputs", {
                                get: ()=>0
                            }), s;
                        })(i, {
                            ...Mt,
                            ...e86
                        });
                        super(t156, !1, o, null), this._nativeMediaStreamAudioDestinationNode = o;
                    }
                    get stream() {
                        return this._nativeMediaStreamAudioDestinationNode.stream;
                    }
                }
            )(Ve, 0, ke, De), hn = ((t157, e87, s63, n39)=>class extends t157 {
                    constructor(t158, e88){
                        const i30 = s63(t158), o = ((t159, { mediaStream: e89  })=>{
                            const s = e89.getAudioTracks();
                            s.sort((t, e)=>t.id < e.id ? -1 : t.id > e.id ? 1 : 0
                            );
                            const n = s.slice(0, 1), i = t159.createMediaStreamSource(new MediaStream(n));
                            return Object.defineProperty(i, "mediaStream", {
                                value: e89
                            }), i;
                        })(i30, e88);
                        if (n39(i30)) throw new TypeError;
                        super(t158, !0, o, null), this._nativeMediaStreamAudioSourceNode = o;
                    }
                    get mediaStream() {
                        return this._nativeMediaStreamAudioSourceNode.mediaStream;
                    }
                }
            )(Ve, 0, ke, De), ln = ((t, e)=>(s, { mediaStreamTrack: n  })=>{
                    if ("function" == typeof s.createMediaStreamTrackSource) return s.createMediaStreamTrackSource(n);
                    const i = new MediaStream([
                        n
                    ]), o = s.createMediaStreamSource(i);
                    if ("audio" !== n.kind) throw t();
                    if (e(s)) throw new TypeError;
                    return o;
                }
            )(At, De), un = ((t160, e, s)=>class extends t160 {
                    constructor(t, n){
                        const i = s(t);
                        super(t, !0, e(i, n), null);
                    }
                }
            )(Ve, ln, ke), pn = ((t161, e90, s64, n, i31, o27, r, a, c)=>class extends t161 {
                    constructor(t163 = {
                    }){
                        if (null === c) throw new Error("Missing the native AudioContext constructor.");
                        let e;
                        try {
                            e = new c(t163);
                        } catch (t162) {
                            if (12 === t162.code && "sampleRate is not in range" === t162.message) throw s64();
                            throw t162;
                        }
                        if (null === e) throw n();
                        if (!((t)=>void 0 === t || "number" == typeof t || "string" == typeof t && ("balanced" === t || "interactive" === t || "playback" === t)
                        )(t163.latencyHint)) throw new TypeError(`The provided value '${t163.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                        if (void 0 !== t163.sampleRate && e.sampleRate !== t163.sampleRate) throw s64();
                        super(e, 2);
                        const { latencyHint: i  } = t163, { sampleRate: o  } = e;
                        if (this._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === i ? 512 / o : "interactive" === i || void 0 === i ? 256 / o : "playback" === i ? 1024 / o : 128 * Math.max(2, Math.min(128, Math.round(i * o / 128))) / o, this._nativeAudioContext = e, "webkitAudioContext" === c.name ? (this._nativeGainNode = e.createGain(), this._nativeOscillatorNode = e.createOscillator(), this._nativeGainNode.gain.value = 0.0000000000000000000000000000000000001, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, "running" === e.state) {
                            this._state = "suspended";
                            const t = ()=>{
                                "suspended" === this._state && (this._state = null), e.removeEventListener("statechange", t);
                            };
                            e.addEventListener("statechange", t);
                        }
                    }
                    get baseLatency() {
                        return this._baseLatency;
                    }
                    get state() {
                        return null !== this._state ? this._state : this._nativeAudioContext.state;
                    }
                    close() {
                        return "closed" === this.state ? this._nativeAudioContext.close().then(()=>{
                            throw e90();
                        }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then(()=>{
                            null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), W1(this);
                        }));
                    }
                    createMediaElementSource(t) {
                        return new i31(this, {
                            mediaElement: t
                        });
                    }
                    createMediaStreamDestination() {
                        return new o27(this);
                    }
                    createMediaStreamSource(t) {
                        return new r(this, {
                            mediaStream: t
                        });
                    }
                    createMediaStreamTrackSource(t) {
                        return new a(this, {
                            mediaStreamTrack: t
                        });
                    }
                    resume() {
                        return "suspended" === this._state ? new Promise((t, e)=>{
                            const s = ()=>{
                                this._nativeAudioContext.removeEventListener("statechange", s), "running" === this._nativeAudioContext.state ? t() : this.resume().then(t, e);
                            };
                            this._nativeAudioContext.addEventListener("statechange", s);
                        }) : this._nativeAudioContext.resume().catch((t)=>{
                            if (void 0 === t || 15 === t.code) throw e90();
                            throw t;
                        });
                    }
                    suspend() {
                        return this._nativeAudioContext.suspend().catch((t)=>{
                            if (void 0 === t) throw e90();
                            throw t;
                        });
                    }
                }
            )(rn, At, Zt, Kt, an, cn, hn, un, Ee), dn = ((t)=>(e)=>{
                    const s = t.get(e);
                    if (void 0 === s) throw new Error("The context has no set of AudioWorkletNodes.");
                    return s;
                }
            )(Rs), fn = ((t)=>(e, s)=>{
                    t(e).add(s);
                }
            )(dn), _n = ((t)=>(e, s, n = 0, i = 0)=>{
                    const o = e[n];
                    if (void 0 === o) throw t();
                    return rt(s) ? o.connect(s, 0, i) : o.connect(s, 0);
                }
            )(R1), mn = ((t)=>(e, s)=>{
                    t(e).delete(s);
                }
            )(dn), gn = ((t164)=>(e, s, n, i = 0)=>void 0 === s ? e.forEach((t)=>t.disconnect()
                    ) : "number" == typeof s ? Tt(t164, e, s).disconnect() : rt(s) ? void 0 === n ? e.forEach((t)=>t.disconnect(s)
                    ) : void 0 === i ? Tt(t164, e, n).disconnect(s, 0) : Tt(t164, e, n).disconnect(s, 0, i) : void 0 === n ? e.forEach((t)=>t.disconnect(s)
                    ) : Tt(t164, e, n).disconnect(s, 0)
            )(R1), vn = new WeakMap, yn = ((t, e)=>(s)=>e(t, s)
            )(vn, w2), xn = ((t168, e92, s65, n41, i32, o28, r, a, c, h, l, u, p)=>(d, f, m, g)=>{
                    if (0 === g.numberOfInputs && 0 === g.numberOfOutputs) throw c();
                    const v = Array.isArray(g.outputChannelCount) ? g.outputChannelCount : Array.from(g.outputChannelCount);
                    if (v.some((t)=>t < 1
                    )) throw c();
                    if (v.length !== g.numberOfOutputs) throw e92();
                    if ("explicit" !== g.channelCountMode) throw c();
                    const y = g.channelCount * g.numberOfInputs, x = v.reduce((t, e)=>t + e
                    , 0), w = void 0 === m.parameterDescriptors ? 0 : m.parameterDescriptors.length;
                    if (y + w > 6 || x > 6) throw c();
                    const b = new MessageChannel, T = [], S = [];
                    for(let t169 = 0; t169 < g.numberOfInputs; t169 += 1)T.push(r(d, {
                        channelCount: g.channelCount,
                        channelCountMode: g.channelCountMode,
                        channelInterpretation: g.channelInterpretation,
                        gain: 1
                    })), S.push(i32(d, {
                        channelCount: g.channelCount,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: g.channelCount
                    }));
                    const k = [];
                    if (void 0 !== m.parameterDescriptors) for (const { defaultValue: t165 , maxValue: e91 , minValue: s66 , name: n40  } of m.parameterDescriptors){
                        const i = o28(d, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: void 0 !== g.parameterData[n40] ? g.parameterData[n40] : void 0 === t165 ? 0 : t165
                        });
                        Object.defineProperties(i.offset, {
                            defaultValue: {
                                get: ()=>void 0 === t165 ? 0 : t165
                            },
                            maxValue: {
                                get: ()=>void 0 === e91 ? V1 : e91
                            },
                            minValue: {
                                get: ()=>void 0 === s66 ? I1 : s66
                            }
                        }), k.push(i);
                    }
                    const A = n41(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: Math.max(1, y + w)
                    }), C = Pt(f, d.sampleRate), D = a(d, C, y + w, Math.max(1, x)), O = i32(d, {
                        channelCount: Math.max(1, x),
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: Math.max(1, x)
                    }), M = [];
                    for(let t166 = 0; t166 < g.numberOfOutputs; t166 += 1)M.push(n41(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: v[t166]
                    }));
                    for(let t167 = 0; t167 < g.numberOfInputs; t167 += 1){
                        T[t167].connect(S[t167]);
                        for(let e = 0; e < g.channelCount; e += 1)S[t167].connect(A, e, t167 * g.channelCount + e);
                    }
                    const E = new lt(void 0 === m.parameterDescriptors ? [] : m.parameterDescriptors.map(({ name: t  }, e)=>{
                        const s = k[e];
                        return s.connect(A, 0, y + e), s.start(0), [
                            t,
                            s.offset
                        ];
                    }));
                    A.connect(D);
                    let R = g.channelInterpretation, q = null;
                    const F = 0 === g.numberOfOutputs ? [
                        D
                    ] : M, N = {
                        get bufferSize () {
                            return C;
                        },
                        get channelCount () {
                            return g.channelCount;
                        },
                        set channelCount (t){
                            throw s65();
                        },
                        get channelCountMode () {
                            return g.channelCountMode;
                        },
                        set channelCountMode (t){
                            throw s65();
                        },
                        get channelInterpretation () {
                            return R;
                        },
                        set channelInterpretation (t){
                            for (const e of T)e.channelInterpretation = t;
                            R = t;
                        },
                        get context () {
                            return D.context;
                        },
                        get inputs () {
                            return T;
                        },
                        get numberOfInputs () {
                            return g.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return g.numberOfOutputs;
                        },
                        get onprocessorerror () {
                            return q;
                        },
                        set onprocessorerror (t){
                            "function" == typeof q && N.removeEventListener("processorerror", q), q = "function" == typeof t ? t : null, "function" == typeof q && N.addEventListener("processorerror", q);
                        },
                        get parameters () {
                            return E;
                        },
                        get port () {
                            return b.port2;
                        },
                        addEventListener: (...t)=>D.addEventListener(t[0], t[1], t[2])
                        ,
                        connect: t168.bind(null, F),
                        disconnect: h.bind(null, F),
                        dispatchEvent: (...t)=>D.dispatchEvent(t[0])
                        ,
                        removeEventListener: (...t)=>D.removeEventListener(t[0], t[1], t[2])
                    }, P = new Map;
                    var j, L;
                    b.port1.addEventListener = (j = b.port1.addEventListener, (...t170)=>{
                        if ("message" === t170[0]) {
                            const e = "function" == typeof t170[1] ? t170[1] : "object" == typeof t170[1] && null !== t170[1] && "function" == typeof t170[1].handleEvent ? t170[1].handleEvent : null;
                            if (null !== e) {
                                const s = P.get(t170[1]);
                                void 0 !== s ? t170[1] = s : (t170[1] = (t)=>{
                                    l(d.currentTime, d.sampleRate, ()=>e(t)
                                    );
                                }, P.set(e, t170[1]));
                            }
                        }
                        return j.call(b.port1, t170[0], t170[1], t170[2]);
                    }), b.port1.removeEventListener = (L = b.port1.removeEventListener, (...t)=>{
                        if ("message" === t[0]) {
                            const e = P.get(t[1]);
                            void 0 !== e && (P.delete(t[1]), t[1] = e);
                        }
                        return L.call(b.port1, t[0], t[1], t[2]);
                    });
                    let z = null;
                    Object.defineProperty(b.port1, "onmessage", {
                        get: ()=>z
                        ,
                        set: (t)=>{
                            "function" == typeof z && b.port1.removeEventListener("message", z), z = "function" == typeof t ? t : null, "function" == typeof z && (b.port1.addEventListener("message", z), b.port1.start());
                        }
                    }), m.prototype.port = b.port1;
                    let W = null;
                    const B = ((t171, e93, s67, n42)=>{
                        let i33 = _1.get(t171);
                        void 0 === i33 && (i33 = new WeakMap, _1.set(t171, i33));
                        const o = (async (t172, e94)=>{
                            const s68 = await ((t173)=>new Promise((e, s)=>{
                                    const { port1: n , port2: i  } = new MessageChannel;
                                    n.onmessage = ({ data: t  })=>{
                                        n.close(), i.close(), e(t);
                                    }, n.onmessageerror = ({ data: t  })=>{
                                        n.close(), i.close(), s(t);
                                    }, i.postMessage(t173);
                                })
                            )(e94);
                            return new t172(s68);
                        })(s67, n42);
                        return i33.set(e93, o), o;
                    })(d, N, m, g);
                    B.then((t)=>W = t
                    );
                    const U = ft(g.numberOfInputs, g.channelCount), G = ft(g.numberOfOutputs, v), Q = void 0 === m.parameterDescriptors ? [] : m.parameterDescriptors.reduce((t, { name: e  })=>({
                            ...t,
                            [e]: new Float32Array(128)
                        })
                    , {
                    });
                    let Z = !0;
                    const X = ()=>{
                        g.numberOfOutputs > 0 && D.disconnect(O);
                        for(let t = 0, e = 0; t < g.numberOfOutputs; t += 1){
                            const s = M[t];
                            for(let n = 0; n < v[t]; n += 1)O.disconnect(s, e + n, n);
                            e += v[t];
                        }
                    }, Y = new Map;
                    D.onaudioprocess = ({ inputBuffer: t180 , outputBuffer: e98  })=>{
                        if (null !== W) {
                            const s = u(N);
                            for(let n43 = 0; n43 < C; n43 += 128){
                                for(let e96 = 0; e96 < g.numberOfInputs; e96 += 1)for(let s69 = 0; s69 < g.channelCount; s69 += 1)pt(t180, U[e96], s69, s69, n43);
                                void 0 !== m.parameterDescriptors && m.parameterDescriptors.forEach(({ name: e  }, s)=>{
                                    pt(t180, Q, e, y + s, n43);
                                });
                                for(let t174 = 0; t174 < g.numberOfInputs; t174 += 1)for(let e95 = 0; e95 < v[t174]; e95 += 1)0 === G[t174][e95].byteLength && (G[t174][e95] = new Float32Array(128));
                                try {
                                    const t177 = U.map((t181, e)=>{
                                        if (s[e].size > 0) return Y.set(e, C / 128), t181;
                                        const n = Y.get(e);
                                        return void 0 === n ? [] : (t181.every((t182)=>t182.every((t)=>0 === t
                                            )
                                        ) && (1 === n ? Y.delete(e) : Y.set(e, n - 1)), t181);
                                    }), i = l(d.currentTime + n43 / d.sampleRate, d.sampleRate, ()=>W.process(t177, G, Q)
                                    );
                                    Z = i;
                                    for(let t176 = 0, s70 = 0; t176 < g.numberOfOutputs; t176 += 1){
                                        for(let i = 0; i < v[t176]; i += 1)dt(e98, G[t176], i, s70 + i, n43);
                                        s70 += v[t176];
                                    }
                                } catch (t) {
                                    Z = !1, N.dispatchEvent(new ErrorEvent("processorerror", {
                                        colno: t.colno,
                                        filename: t.filename,
                                        lineno: t.lineno,
                                        message: t.message
                                    }));
                                }
                                if (!Z) {
                                    for(let t = 0; t < g.numberOfInputs; t += 1){
                                        T[t].disconnect(S[t]);
                                        for(let e = 0; e < g.channelCount; e += 1)S[n43].disconnect(A, e, t * g.channelCount + e);
                                    }
                                    if (void 0 !== m.parameterDescriptors) {
                                        const t = m.parameterDescriptors.length;
                                        for(let e = 0; e < t; e += 1){
                                            const t = k[e];
                                            t.disconnect(A, 0, y + e), t.stop();
                                        }
                                    }
                                    A.disconnect(D), D.onaudioprocess = null, $ ? X() : K();
                                    break;
                                }
                            }
                        }
                    };
                    let $ = !1;
                    const H = r(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    }), J = ()=>D.connect(H).connect(d.destination)
                    , K = ()=>{
                        D.disconnect(H), H.disconnect();
                    };
                    return J(), p(N, ()=>{
                        if (Z) {
                            K(), g.numberOfOutputs > 0 && D.connect(O);
                            for(let t = 0, e = 0; t < g.numberOfOutputs; t += 1){
                                const s = M[t];
                                for(let n = 0; n < v[t]; n += 1)O.connect(s, e + n, n);
                                e += v[t];
                            }
                        }
                        $ = !0;
                    }, ()=>{
                        Z && (J(), X()), $ = !1;
                    });
                }
            )(_n, R1, At, as, Lt, ds, Bt, Qt, Zt, gn, Ks, yn, os), wn = ((t183, e99, s72, n45, i)=>(o, r, a, c, h, l)=>{
                    if (null !== a) try {
                        const e100 = new a(o, c, l), n = new Map;
                        let r = null;
                        if (Object.defineProperties(e100, {
                            channelCount: {
                                get: ()=>l.channelCount
                                ,
                                set: ()=>{
                                    throw t183();
                                }
                            },
                            channelCountMode: {
                                get: ()=>"explicit"
                                ,
                                set: ()=>{
                                    throw t183();
                                }
                            },
                            onprocessorerror: {
                                get: ()=>r
                                ,
                                set: (t)=>{
                                    "function" == typeof r && e100.removeEventListener("processorerror", r), r = "function" == typeof t ? t : null, "function" == typeof r && e100.addEventListener("processorerror", r);
                                }
                            }
                        }), e100.addEventListener = (p = e100.addEventListener, (...t)=>{
                            if ("processorerror" === t[0]) {
                                const e = "function" == typeof t[1] ? t[1] : "object" == typeof t[1] && null !== t[1] && "function" == typeof t[1].handleEvent ? t[1].handleEvent : null;
                                if (null !== e) {
                                    const s73 = n.get(t[1]);
                                    void 0 !== s73 ? t[1] = s73 : (t[1] = (s)=>{
                                        "error" === s.type ? (Object.defineProperties(s, {
                                            type: {
                                                value: "processorerror"
                                            }
                                        }), e(s)) : e(new ErrorEvent(t[0], {
                                            ...s
                                        }));
                                    }, n.set(e, t[1]));
                                }
                            }
                            return p.call(e100, "error", t[1], t[2]), p.call(e100, ...t);
                        }), e100.removeEventListener = (u = e100.removeEventListener, (...t)=>{
                            if ("processorerror" === t[0]) {
                                const e = n.get(t[1]);
                                void 0 !== e && (n.delete(t[1]), t[1] = e);
                            }
                            return u.call(e100, "error", t[1], t[2]), u.call(e100, t[0], t[1], t[2]);
                        }), 0 !== l.numberOfOutputs) {
                            const t = s72(o, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                gain: 0
                            });
                            return e100.connect(t).connect(o.destination), i(e100, ()=>t.disconnect()
                            , ()=>t.connect(o.destination)
                            );
                        }
                        return e100;
                    } catch (t184) {
                        if (11 === t184.code) throw n45();
                        throw t184;
                    }
                    var u, p;
                    if (void 0 === h) throw n45();
                    return ((t)=>{
                        const { port1: e  } = new MessageChannel;
                        try {
                            e.postMessage(t);
                        } finally{
                            e.close();
                        }
                    })(l), e99(o, r, h, l);
                }
            )(At, xn, Bt, Zt, os), bn = ((t186, e103, s76, n46, i, o29, r, a17, c16, h15, l14, u10, p, d, f, _)=>(m5, g, v)=>{
                    const y = new WeakMap;
                    let x = null;
                    return {
                        render (w3, b2) {
                            a17(b2, w3);
                            const T2 = y.get(b2);
                            return void 0 !== T2 ? Promise.resolve(T2) : (async (a, w)=>{
                                let b = l14(a), T = null;
                                const S = M1(b, w), k = Array.isArray(g.outputChannelCount) ? g.outputChannelCount : Array.from(g.outputChannelCount);
                                if (null === u10) {
                                    const t187 = k.reduce((t, e)=>t + e
                                    , 0), s = i(w, {
                                        channelCount: Math.max(1, t187),
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        numberOfOutputs: Math.max(1, t187)
                                    }), o = [];
                                    for(let t185 = 0; t185 < a.numberOfOutputs; t185 += 1)o.push(n46(w, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        numberOfInputs: k[t185]
                                    }));
                                    const h = r(w, {
                                        channelCount: g.channelCount,
                                        channelCountMode: g.channelCountMode,
                                        channelInterpretation: g.channelInterpretation,
                                        gain: 1
                                    });
                                    h.connect = e103.bind(null, o), h.disconnect = c16.bind(null, o), T = [
                                        s,
                                        o,
                                        h
                                    ];
                                } else S || (b = new u10(w, m5));
                                if (y.set(w, null === T ? b : T[2]), null !== T) {
                                    if (null === x) {
                                        if (void 0 === v) throw new Error("Missing the processor constructor.");
                                        if (null === p) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t190 = a.channelCount * a.numberOfInputs, e106 = void 0 === v.parameterDescriptors ? 0 : v.parameterDescriptors.length, s = t190 + e106, c17 = async ()=>{
                                            const c = new p(s, 128 * Math.ceil(a.context.length / 128), w.sampleRate), h = [], l = [];
                                            for(let t193 = 0; t193 < g.numberOfInputs; t193 += 1)h.push(r(c, {
                                                channelCount: g.channelCount,
                                                channelCountMode: g.channelCountMode,
                                                channelInterpretation: g.channelInterpretation,
                                                gain: 1
                                            })), l.push(i(c, {
                                                channelCount: g.channelCount,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                numberOfOutputs: g.channelCount
                                            }));
                                            const u = await Promise.all(Array.from(a.parameters.values()).map(async (t)=>{
                                                const e = o29(c, {
                                                    channelCount: 1,
                                                    channelCountMode: "explicit",
                                                    channelInterpretation: "discrete",
                                                    offset: t.value
                                                });
                                                return await d(c, t, e.offset), e;
                                            })), m = n46(c, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "speakers",
                                                numberOfInputs: Math.max(1, t190 + e106)
                                            });
                                            for(let t189 = 0; t189 < g.numberOfInputs; t189 += 1){
                                                h[t189].connect(l[t189]);
                                                for(let e = 0; e < g.channelCount; e += 1)l[t189].connect(m, e, t189 * g.channelCount + e);
                                            }
                                            for (const [e107, s77] of u.entries())s77.connect(m, 0, t190 + e107), s77.start(0);
                                            return m.connect(c.destination), await Promise.all(h.map((t)=>f(a, c, t)
                                            )), _(c);
                                        };
                                        x = _t(a, 0 === s ? null : await c17(), w, g, k, v, h15);
                                    }
                                    const t191 = await x, e108 = s76(w, {
                                        buffer: null,
                                        channelCount: 2,
                                        channelCountMode: "max",
                                        channelInterpretation: "speakers",
                                        loop: !1,
                                        loopEnd: 0,
                                        loopStart: 0,
                                        playbackRate: 1
                                    }), [c18, l15, u11] = T;
                                    null !== t191 && (e108.buffer = t191, e108.start(0)), e108.connect(c18);
                                    for(let t188 = 0, e105 = 0; t188 < a.numberOfOutputs; t188 += 1){
                                        const s = l15[t188];
                                        for(let n = 0; n < k[t188]; n += 1)c18.connect(s, e105 + n, n);
                                        e105 += k[t188];
                                    }
                                    return u11;
                                }
                                if (S) for (const [e104, s] of a.parameters.entries())await t186(w, s, b.parameters.get(e104));
                                else for (const [t192, e102] of a.parameters.entries())await d(w, e102, b.parameters.get(t192));
                                return await f(a, w, b), b;
                            })(w3, b2);
                        }
                    };
                }
            )(Xe, _n, Ye, as, Lt, ds, Bt, mn, gn, Ks, tt, Ie, Ce, $e, Te, Cs), Tn = ((t)=>(e)=>t.get(e)
            )(tn), Sn = ((t)=>(e, s)=>{
                    t.set(e, s);
                }
            )(vn), kn = Js ? ((t194, e110, s78, n47, i, o, r, a, c, h, l17, u, p7, d5)=>class extends e110 {
                    constructor(e111, l, p){
                        var d;
                        const _ = a(e111), m = c(_), g = ((t)=>({
                                ...t,
                                outputChannelCount: void 0 !== t.outputChannelCount ? t.outputChannelCount : 1 === t.numberOfInputs && 1 === t.numberOfOutputs ? [
                                    t.channelCount
                                ] : Array.from({
                                    length: t.numberOfOutputs
                                }, ()=>1
                                )
                            })
                        )({
                            ...ut,
                            ...p
                        });
                        ((t)=>{
                            const { port1: e , port2: s  } = new MessageChannel;
                            try {
                                e.postMessage(t);
                            } finally{
                                e.close(), s.close();
                            }
                        })(g);
                        const v = f1.get(_), y = null == v ? void 0 : v.get(l), x = m || "closed" !== _.state ? _ : null !== (d = r(_)) && void 0 !== d ? d : _, w = i(x, m ? null : e111.baseLatency, h, l, y, g);
                        super(e111, !0, w, m ? n47(l, g, y) : null);
                        const b = [];
                        w.parameters.forEach((t, e)=>{
                            const n = s78(this, m, t);
                            b.push([
                                e,
                                n
                            ]);
                        }), this._nativeAudioWorkletNode = w, this._onprocessorerror = null, this._parameters = new lt(b), m && t194(_, this);
                        const { activeInputs: T  } = o(this);
                        u(w, T);
                    }
                    get onprocessorerror() {
                        return this._onprocessorerror;
                    }
                    set onprocessorerror(t) {
                        const e = "function" == typeof t ? d5(this, t) : null;
                        this._nativeAudioWorkletNode.onprocessorerror = e;
                        const s = this._nativeAudioWorkletNode.onprocessorerror;
                        this._onprocessorerror = null !== s && s === e ? t : s;
                    }
                    get parameters() {
                        return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
                    }
                    get port() {
                        return this._nativeAudioWorkletNode.port;
                    }
                }
            )(fn, Ve, Je, bn, wn, j1, Tn, ke, De, Ie, 0, Sn, 0, ue) : void 0, An = ((t, e112)=>(s, n, i)=>{
                    if (null === e112) throw new Error("Missing the native OfflineAudioContext constructor.");
                    try {
                        return new e112(s, n, i);
                    } catch (e) {
                        if ("SyntaxError" === e.name) throw t();
                        throw e;
                    }
                }
            )(Zt, Ce), Cn = ((t195, e, s79, n, i, o, r, a)=>(c, h)=>s79(c).render(c, h).then(()=>Promise.all(Array.from(n(h)).map((t)=>s79(t).render(t, h)
                        ))
                    ).then(()=>i(h)
                    ).then((s)=>("function" != typeof s.copyFromChannel ? (r(s), q1(s)) : e(o, ()=>o(s)
                        ) || a(s), t195.add(s), s)
                    )
            )(je, ge, be, dn, Cs, E1, Be, Ue), Dn = ((t196, e113, s80, n, i34)=>class extends t196 {
                    constructor(t197, s81, i){
                        let o;
                        if ("number" == typeof t197 && void 0 !== s81 && void 0 !== i) o = {
                            length: s81,
                            numberOfChannels: t197,
                            sampleRate: i
                        };
                        else {
                            if ("object" != typeof t197) throw new Error("The given parameters are not valid.");
                            o = t197;
                        }
                        const { length: r , numberOfChannels: a , sampleRate: c  } = {
                            ...Xt,
                            ...o
                        }, h = n(a, r, c);
                        e113(Et, ()=>Et(h)
                        ) || h.addEventListener("statechange", (()=>{
                            let t = 0;
                            const e = (s)=>{
                                "running" === this._state && (t > 0 ? (h.removeEventListener("statechange", e), s.stopImmediatePropagation(), this._waitForThePromiseToSettle(s)) : t += 1);
                            };
                            return e;
                        })()), super(h, a), this._length = r, this._nativeOfflineAudioContext = h, this._state = null;
                    }
                    get length() {
                        return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
                    }
                    get state() {
                        return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
                    }
                    startRendering() {
                        return "running" === this._state ? Promise.reject(s80()) : (this._state = "running", i34(this.destination, this._nativeOfflineAudioContext).finally(()=>{
                            this._state = null, W1(this);
                        }));
                    }
                    _waitForThePromiseToSettle(t) {
                        null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout(()=>this._waitForThePromiseToSettle(t)
                        );
                    }
                }
            )(rn, ge, At, An, Cn), On = ((t, e)=>(s)=>{
                    const n = t.get(s);
                    return e(n) || e(s);
                }
            )(u2, Re), Mn = ((t, e)=>(s)=>t.has(s) || e(s)
            )(c2, qe), En = ((t, e)=>(s)=>t.has(s) || e(s)
            )(l2, Fe), Rn = ((t, e)=>(s)=>{
                    const n = t.get(s);
                    return e(n) || e(s);
                }
            )(u2, De), qn = ()=>(async (t198, e, s, n, i, o, r, a, c, h, l, u, p, d, f, _)=>!!(t198(e, e) && t198(s, s) && t198(i, i) && t198(o, o) && t198(a, a) && t198(c, c) && t198(h, h) && t198(l, l) && t198(u, u) && t198(p, p) && t198(d, d)) && (await Promise.all([
                        t198(n, n),
                        t198(r, r),
                        t198(f, f),
                        t198(_, _)
                    ])).every((t)=>t
                    )
                )(ge, ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100).createBuffer(1, 1, 44100);
                        if (void 0 === e.copyToChannel) return !0;
                        const s = new Float32Array(2);
                        try {
                            e.copyFromChannel(s, 0, 0);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    }
                )(Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        if (void 0 !== t.prototype && void 0 !== t.prototype.close) return !0;
                        const e = new t, s = void 0 !== e.close;
                        try {
                            e.close();
                        } catch  {
                        }
                        return s;
                    }
                )(Ee), ((t199)=>()=>{
                        if (null === t199) return Promise.resolve(!1);
                        const e = new t199(1, 1, 44100);
                        return new Promise((t)=>{
                            let s = !0;
                            const n48 = (n)=>{
                                s && (s = !1, e.startRendering(), t(n instanceof TypeError));
                            };
                            let i;
                            try {
                                i = e.decodeAudioData(null, ()=>{
                                }, n48);
                            } catch (t200) {
                                n48(t200);
                            }
                            void 0 !== i && i.catch(n48);
                        });
                    }
                )(Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        let e;
                        try {
                            e = new t({
                                latencyHint: "balanced"
                            });
                        } catch  {
                            return !1;
                        }
                        return e.close(), !0;
                    }
                )(Ee), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100).createGain(), s = e.connect(e) === e;
                        return e.disconnect(e), s;
                    }
                )(Ce), ((t201, e114)=>async ()=>{
                        if (null === t201) return !0;
                        if (null === e114) return !1;
                        const s = new Blob([
                            'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), n = new MessageChannel, i = new e114(1, 128, 44100), o = URL.createObjectURL(s);
                        let r = !1;
                        try {
                            await i.audioWorklet.addModule(o);
                            const e115 = new t201(i, "a", {
                                numberOfOutputs: 0
                            }), s = i.createOscillator();
                            await new Promise((t)=>{
                                e115.port.onmessage = ()=>t()
                                , e115.port.postMessage(n.port2, [
                                    n.port2
                                ]);
                            }), e115.port.onmessage = ()=>r = !0
                            , s.connect(e115), s.start(0), await i.startRendering(), r = await new Promise((t)=>{
                                n.port1.onmessage = ({ data: e  })=>t(1 === e)
                                , n.port1.postMessage(0);
                            });
                        } catch  {
                        } finally{
                            n.port1.close(), URL.revokeObjectURL(o);
                        }
                        return r;
                    }
                )(Ie, Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100).createChannelMerger();
                        if ("max" === e.channelCountMode) return !0;
                        try {
                            e.channelCount = 2;
                        } catch  {
                            return !0;
                        }
                        return !1;
                    }
                )(Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100);
                        return void 0 === e.createConstantSource || e.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
                    }
                )(Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100), s = e.createConvolver();
                        s.buffer = e.createBuffer(1, 1, e.sampleRate);
                        try {
                            s.buffer = e.createBuffer(1, 1, e.sampleRate);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    }
                )(Ce), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t(1, 1, 44100).createConvolver();
                        try {
                            e.channelCount = 1;
                        } catch  {
                            return !1;
                        }
                        return !0;
                    }
                )(Ce), ce, ((t)=>()=>null !== t && t.hasOwnProperty("isSecureContext")
                )(xe), ((t)=>()=>{
                        if (null === t) return !1;
                        const e = new t;
                        try {
                            return e.createMediaStreamSource(new MediaStream), !1;
                        } catch (t) {
                            return !0;
                        } finally{
                            e.close();
                        }
                    }
                )(Ee), ((t202)=>()=>{
                        if (null === t202) return Promise.resolve(!1);
                        const e = new t202(1, 1, 44100);
                        if (void 0 === e.createStereoPanner) return Promise.resolve(!0);
                        if (void 0 === e.createConstantSource) return Promise.resolve(!0);
                        const s = e.createConstantSource(), n = e.createStereoPanner();
                        return s.channelCount = 1, s.offset.value = 1, n.channelCount = 1, s.start(), s.connect(n).connect(e.destination), e.startRendering().then((t)=>1 !== t.getChannelData(0)[0]
                        );
                    }
                )(Ce), he)
            ;
            function Fn(t) {
                return void 0 === t;
            }
            function In(t) {
                return !Fn(t);
            }
            function Vn(t) {
                return "function" == typeof t;
            }
            function Nn(t) {
                return "number" == typeof t;
            }
            function Pn(t) {
                return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object;
            }
            function jn(t) {
                return "boolean" == typeof t;
            }
            function Ln(t) {
                return Array.isArray(t);
            }
            function zn(t) {
                return "string" == typeof t;
            }
            function Wn(t) {
                return zn(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
            }
            function Bn(t, e) {
                if (!t) throw new Error(e);
            }
            function Un(t, e, s = 1 / 0) {
                if (!(e <= t && t <= s)) throw new RangeError(`Value must be within [${e}, ${s}], got: ${t}`);
            }
            function Gn(t) {
                t.isOffline || "running" === t.state || Kn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
            }
            let Qn = !1, Zn = !1;
            function Xn(t) {
                Qn = t;
            }
            function Yn(t) {
                Fn(t) && Qn && !Zn && (Zn = !0, Kn("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"));
            }
            let $n = console;
            function Hn(t) {
                $n = t;
            }
            function Jn(...t) {
                $n.log(...t);
            }
            function Kn(...t) {
                $n.warn(...t);
            }
            const ti = "object" == typeof self ? self : null, ei = ti && (ti.hasOwnProperty("AudioContext") || ti.hasOwnProperty("webkitAudioContext"));
            function si(t, e, s, n) {
                var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, s) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, s, n);
                else for(var a = t.length - 1; a >= 0; a--)(i = t[a]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, s, r) : i(e, s)) || r);
                return o > 3 && r && Object.defineProperty(e, s, r), r;
            }
            function ni(t203, e117, s, n) {
                return new (s || (s = Promise))(function(i, o) {
                    function r(t) {
                        try {
                            c(n.next(t));
                        } catch (t204) {
                            o(t204);
                        }
                    }
                    function a(t) {
                        try {
                            c(n.throw(t));
                        } catch (t205) {
                            o(t205);
                        }
                    }
                    function c(t206) {
                        var e;
                        t206.done ? i(t206.value) : (e = t206.value, e instanceof s ? e : new s(function(t) {
                            t(e);
                        })).then(r, a);
                    }
                    c((n = n.apply(t203, e117 || [])).next());
                });
            }
            Object.create, Object.create;
            class ii {
                constructor(t, e, s){
                    this._callback = t, this._type = e, this._updateInterval = s, this._createClock();
                }
                _createWorker() {
                    const t = new Blob([
                        `\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1000 * this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`
                    ], {
                        type: "text/javascript"
                    }), e = URL.createObjectURL(t), s = new Worker(e);
                    s.onmessage = this._callback.bind(this), this._worker = s;
                }
                _createTimeout() {
                    this._timeout = setTimeout(()=>{
                        this._createTimeout(), this._callback();
                    }, 1000 * this._updateInterval);
                }
                _createClock() {
                    if ("worker" === this._type) try {
                        this._createWorker();
                    } catch (t) {
                        this._type = "timeout", this._createClock();
                    }
                    else "timeout" === this._type && this._createTimeout();
                }
                _disposeClock() {
                    this._timeout && clearTimeout(this._timeout), this._worker && (this._worker.terminate(), this._worker.onmessage = null);
                }
                get updateInterval() {
                    return this._updateInterval;
                }
                set updateInterval(t) {
                    this._updateInterval = Math.max(t, 128 / 44100), "worker" === this._type && this._worker.postMessage(Math.max(1000 * t, 1));
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    this._disposeClock(), this._type = t, this._createClock();
                }
                dispose() {
                    this._disposeClock();
                }
            }
            function oi(t) {
                return En(t);
            }
            function ri(t) {
                return Mn(t);
            }
            function ai(t) {
                return Rn(t);
            }
            function ci(t) {
                return On(t);
            }
            function hi(t) {
                return t instanceof Ge;
            }
            function li(t, e) {
                return "value" === t || oi(e) || ri(e) || hi(e);
            }
            function ui(t, ...e) {
                if (!e.length) return t;
                const s = e.shift();
                if (Pn(t) && Pn(s)) for(const e118 in s)li(e118, s[e118]) ? t[e118] = s[e118] : Pn(s[e118]) ? (t[e118] || Object.assign(t, {
                    [e118]: {
                    }
                }), ui(t[e118], s[e118])) : Object.assign(t, {
                    [e118]: s[e118]
                });
                return ui(t, ...e);
            }
            function pi(t, e119, s = [], n) {
                const i = {
                }, o = Array.from(e119);
                if (Pn(o[0]) && n && !Reflect.has(o[0], n) && (Object.keys(o[0]).some((e)=>Reflect.has(t, e)
                ) || (ui(i, {
                    [n]: o[0]
                }), s.splice(s.indexOf(n), 1), o.shift())), 1 === o.length && Pn(o[0])) ui(i, o[0]);
                else for(let t207 = 0; t207 < s.length; t207++)In(o[t207]) && (i[s[t207]] = o[t207]);
                return ui(t, i);
            }
            function di(t, e) {
                return Fn(t) ? e : t;
            }
            function fi(t, e120) {
                return e120.forEach((e)=>{
                    Reflect.has(t, e) && delete t[e];
                }), t;
            }
            class _i {
                constructor(){
                    this.debug = !1, this._wasDisposed = !1;
                }
                static getDefaults() {
                    return {
                    };
                }
                log(...t) {
                    (this.debug || ti && this.toString() === ti.TONE_DEBUG_CLASS) && Jn(this, ...t);
                }
                dispose() {
                    return this._wasDisposed = !0, this;
                }
                get disposed() {
                    return this._wasDisposed;
                }
                toString() {
                    return this.name;
                }
            }
            _i.version = i2;
            const mi = 0.000001;
            function gi(t, e) {
                return t > e + mi;
            }
            function vi(t, e) {
                return gi(t, e) || xi(t, e);
            }
            function yi(t, e) {
                return t + mi < e;
            }
            function xi(t, e) {
                return Math.abs(t - e) < mi;
            }
            function wi(t, e, s) {
                return Math.max(Math.min(t, s), e);
            }
            class bi extends _i {
                constructor(){
                    super(), this.name = "Timeline", this._timeline = [];
                    const t = pi(bi.getDefaults(), arguments, [
                        "memory"
                    ]);
                    this.memory = t.memory, this.increasing = t.increasing;
                }
                static getDefaults() {
                    return {
                        memory: 1 / 0,
                        increasing: !1
                    };
                }
                get length() {
                    return this._timeline.length;
                }
                add(t) {
                    if (Bn(Reflect.has(t, "time"), "Timeline: events must have a time attribute"), t.time = t.time.valueOf(), this.increasing && this.length) {
                        const e = this._timeline[this.length - 1];
                        Bn(vi(t.time, e.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(t);
                    } else {
                        const e = this._search(t.time);
                        this._timeline.splice(e + 1, 0, t);
                    }
                    if (this.length > this.memory) {
                        const t = this.length - this.memory;
                        this._timeline.splice(0, t);
                    }
                    return this;
                }
                remove(t) {
                    const e = this._timeline.indexOf(t);
                    return -1 !== e && this._timeline.splice(e, 1), this;
                }
                get(t, e = "time") {
                    const s = this._search(t, e);
                    return -1 !== s ? this._timeline[s] : null;
                }
                peek() {
                    return this._timeline[0];
                }
                shift() {
                    return this._timeline.shift();
                }
                getAfter(t, e = "time") {
                    const s = this._search(t, e);
                    return s + 1 < this._timeline.length ? this._timeline[s + 1] : null;
                }
                getBefore(t) {
                    const e = this._timeline.length;
                    if (e > 0 && this._timeline[e - 1].time < t) return this._timeline[e - 1];
                    const s = this._search(t);
                    return s - 1 >= 0 ? this._timeline[s - 1] : null;
                }
                cancel(t) {
                    if (this._timeline.length > 1) {
                        let e = this._search(t);
                        if (e >= 0) {
                            if (xi(this._timeline[e].time, t)) {
                                for(let s = e; s >= 0 && xi(this._timeline[s].time, t); s--)e = s;
                                this._timeline = this._timeline.slice(0, e);
                            } else this._timeline = this._timeline.slice(0, e + 1);
                        } else this._timeline = [];
                    } else 1 === this._timeline.length && vi(this._timeline[0].time, t) && (this._timeline = []);
                    return this;
                }
                cancelBefore(t) {
                    const e = this._search(t);
                    return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
                }
                previousEvent(t) {
                    const e = this._timeline.indexOf(t);
                    return e > 0 ? this._timeline[e - 1] : null;
                }
                _search(t, e = "time") {
                    if (0 === this._timeline.length) return -1;
                    let s = 0;
                    const n = this._timeline.length;
                    let i = n;
                    if (n > 0 && this._timeline[n - 1][e] <= t) return n - 1;
                    for(; s < i;){
                        let n = Math.floor(s + (i - s) / 2);
                        const o = this._timeline[n], r = this._timeline[n + 1];
                        if (xi(o[e], t)) {
                            for(let s = n; s < this._timeline.length && xi(this._timeline[s][e], t); s++)n = s;
                            return n;
                        }
                        if (yi(o[e], t) && gi(r[e], t)) return n;
                        gi(o[e], t) ? i = n : s = n + 1;
                    }
                    return -1;
                }
                _iterate(t, e = 0, s = this._timeline.length - 1) {
                    this._timeline.slice(e, s + 1).forEach(t);
                }
                forEach(t) {
                    return this._iterate(t), this;
                }
                forEachBefore(t, e) {
                    const s = this._search(t);
                    return -1 !== s && this._iterate(e, 0, s), this;
                }
                forEachAfter(t, e) {
                    const s = this._search(t);
                    return this._iterate(e, s + 1), this;
                }
                forEachBetween(t, e, s) {
                    let n = this._search(t), i = this._search(e);
                    return -1 !== n && -1 !== i ? (this._timeline[n].time !== t && (n += 1), this._timeline[i].time === e && (i -= 1), this._iterate(s, n, i)) : -1 === n && this._iterate(s, 0, i), this;
                }
                forEachFrom(t, e) {
                    let s = this._search(t);
                    for(; s >= 0 && this._timeline[s].time >= t;)s--;
                    return this._iterate(e, s + 1), this;
                }
                forEachAtTime(t208, e) {
                    const s = this._search(t208);
                    if (-1 !== s && xi(this._timeline[s].time, t208)) {
                        let n = s;
                        for(let e121 = s; e121 >= 0 && xi(this._timeline[e121].time, t208); e121--)n = e121;
                        this._iterate((t)=>{
                            e(t);
                        }, n, s);
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._timeline = [], this;
                }
            }
            const Ti = [];
            function Si(t) {
                Ti.push(t);
            }
            const ki = [];
            function Ai(t) {
                ki.push(t);
            }
            class Ci extends _i {
                constructor(){
                    super(...arguments), this.name = "Emitter";
                }
                on(t209, e) {
                    return t209.split(/\W+/).forEach((t)=>{
                        Fn(this._events) && (this._events = {
                        }), this._events.hasOwnProperty(t) || (this._events[t] = []), this._events[t].push(e);
                    }), this;
                }
                once(t, e) {
                    const s = (...n)=>{
                        e(...n), this.off(t, s);
                    };
                    return this.on(t, s), this;
                }
                off(t210, e) {
                    return t210.split(/\W+/).forEach((t)=>{
                        if (Fn(this._events) && (this._events = {
                        }), this._events.hasOwnProperty(t)) {
                            if (Fn(e)) this._events[t] = [];
                            else {
                                const s = this._events[t];
                                for(let t = s.length - 1; t >= 0; t--)s[t] === e && s.splice(t, 1);
                            }
                        }
                    }), this;
                }
                emit(t, ...e) {
                    if (this._events && this._events.hasOwnProperty(t)) {
                        const s = this._events[t].slice(0);
                        for(let t = 0, n = s.length; t < n; t++)s[t].apply(this, e);
                    }
                    return this;
                }
                static mixin(t) {
                    [
                        "on",
                        "once",
                        "off",
                        "emit"
                    ].forEach((e)=>{
                        const s = Object.getOwnPropertyDescriptor(Ci.prototype, e);
                        Object.defineProperty(t.prototype, e, s);
                    });
                }
                dispose() {
                    return super.dispose(), this._events = void 0, this;
                }
            }
            class Di extends Ci {
                constructor(){
                    super(...arguments), this.isOffline = !1;
                }
                toJSON() {
                    return {
                    };
                }
            }
            class Oi extends Di {
                constructor(){
                    super(), this.name = "Context", this._constants = new Map, this._timeouts = new bi, this._timeoutIds = 0, this._initialized = !1, this.isOffline = !1, this._workletModules = new Map;
                    const t211 = pi(Oi.getDefaults(), arguments, [
                        "context"
                    ]);
                    t211.context ? this._context = t211.context : this._context = (function(t) {
                        return new pn(t);
                    })({
                        latencyHint: t211.latencyHint
                    }), this._ticker = new ii(this.emit.bind(this, "tick"), t211.clockSource, t211.updateInterval), this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = ()=>{
                        this.emit("statechange", this.state);
                    }, this._setLatencyHint(t211.latencyHint), this.lookAhead = t211.lookAhead;
                }
                static getDefaults() {
                    return {
                        clockSource: "worker",
                        latencyHint: "interactive",
                        lookAhead: 0.1,
                        updateInterval: 0.05
                    };
                }
                initialize() {
                    var t;
                    return this._initialized || (t = this, Ti.forEach((e)=>e(t)
                    ), this._initialized = !0), this;
                }
                createAnalyser() {
                    return this._context.createAnalyser();
                }
                createOscillator() {
                    return this._context.createOscillator();
                }
                createBufferSource() {
                    return this._context.createBufferSource();
                }
                createBiquadFilter() {
                    return this._context.createBiquadFilter();
                }
                createBuffer(t, e, s) {
                    return this._context.createBuffer(t, e, s);
                }
                createChannelMerger(t) {
                    return this._context.createChannelMerger(t);
                }
                createChannelSplitter(t) {
                    return this._context.createChannelSplitter(t);
                }
                createConstantSource() {
                    return this._context.createConstantSource();
                }
                createConvolver() {
                    return this._context.createConvolver();
                }
                createDelay(t) {
                    return this._context.createDelay(t);
                }
                createDynamicsCompressor() {
                    return this._context.createDynamicsCompressor();
                }
                createGain() {
                    return this._context.createGain();
                }
                createIIRFilter(t, e) {
                    return this._context.createIIRFilter(t, e);
                }
                createPanner() {
                    return this._context.createPanner();
                }
                createPeriodicWave(t, e, s) {
                    return this._context.createPeriodicWave(t, e, s);
                }
                createStereoPanner() {
                    return this._context.createStereoPanner();
                }
                createWaveShaper() {
                    return this._context.createWaveShaper();
                }
                createMediaStreamSource(t) {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(t);
                }
                createMediaElementSource(t) {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaElementSource(t);
                }
                createMediaStreamDestination() {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination();
                }
                decodeAudioData(t) {
                    return this._context.decodeAudioData(t);
                }
                get currentTime() {
                    return this._context.currentTime;
                }
                get state() {
                    return this._context.state;
                }
                get sampleRate() {
                    return this._context.sampleRate;
                }
                get listener() {
                    return this.initialize(), this._listener;
                }
                set listener(t) {
                    Bn(!this._initialized, "The listener cannot be set after initialization."), this._listener = t;
                }
                get transport() {
                    return this.initialize(), this._transport;
                }
                set transport(t) {
                    Bn(!this._initialized, "The transport cannot be set after initialization."), this._transport = t;
                }
                get draw() {
                    return this.initialize(), this._draw;
                }
                set draw(t) {
                    Bn(!this._initialized, "Draw cannot be set after initialization."), this._draw = t;
                }
                get destination() {
                    return this.initialize(), this._destination;
                }
                set destination(t) {
                    Bn(!this._initialized, "The destination cannot be set after initialization."), this._destination = t;
                }
                createAudioWorkletNode(t212, e122) {
                    return (function(t, e, s) {
                        return Bn(In(kn), "This node only works in a secure context (https or localhost)"), new kn(t, e, s);
                    })(this.rawContext, t212, e122);
                }
                addAudioWorkletModule(t, e) {
                    return ni(this, void 0, void 0, function*() {
                        Bn(In(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletModules.has(e) || this._workletModules.set(e, this.rawContext.audioWorklet.addModule(t)), yield this._workletModules.get(e);
                    });
                }
                workletsAreReady() {
                    return ni(this, void 0, void 0, function*() {
                        const t = [];
                        this._workletModules.forEach((e)=>t.push(e)
                        ), yield Promise.all(t);
                    });
                }
                get updateInterval() {
                    return this._ticker.updateInterval;
                }
                set updateInterval(t) {
                    this._ticker.updateInterval = t;
                }
                get clockSource() {
                    return this._ticker.type;
                }
                set clockSource(t) {
                    this._ticker.type = t;
                }
                get latencyHint() {
                    return this._latencyHint;
                }
                _setLatencyHint(t) {
                    let e = 0;
                    if (this._latencyHint = t, zn(t)) switch(t){
                        case "interactive":
                            e = 0.1;
                            break;
                        case "playback":
                            e = 0.5;
                            break;
                        case "balanced":
                            e = 0.25;
                    }
                    this.lookAhead = e, this.updateInterval = e / 2;
                }
                get rawContext() {
                    return this._context;
                }
                now() {
                    return this._context.currentTime + this.lookAhead;
                }
                immediate() {
                    return this._context.currentTime;
                }
                resume() {
                    return ci(this._context) ? this._context.resume() : Promise.resolve();
                }
                close() {
                    return ni(this, void 0, void 0, function*() {
                        var t;
                        ci(this._context) && (yield this._context.close()), this._initialized && (t = this, ki.forEach((e)=>e(t)
                        ));
                    });
                }
                getConstant(t) {
                    if (this._constants.has(t)) return this._constants.get(t);
                    {
                        const e = this._context.createBuffer(1, 128, this._context.sampleRate), s = e.getChannelData(0);
                        for(let e123 = 0; e123 < s.length; e123++)s[e123] = t;
                        const n = this._context.createBufferSource();
                        return n.channelCount = 1, n.channelCountMode = "explicit", n.buffer = e, n.loop = !0, n.start(0), this._constants.set(t, n), n;
                    }
                }
                dispose() {
                    return super.dispose(), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map((t)=>this._constants[t].disconnect()
                    ), this;
                }
                _timeoutLoop() {
                    const t = this.now();
                    let e = this._timeouts.peek();
                    for(; this._timeouts.length && e && e.time <= t;)e.callback(), this._timeouts.shift(), e = this._timeouts.peek();
                }
                setTimeout(t, e) {
                    this._timeoutIds++;
                    const s = this.now();
                    return this._timeouts.add({
                        callback: t,
                        id: this._timeoutIds,
                        time: s + e
                    }), this._timeoutIds;
                }
                clearTimeout(t) {
                    return this._timeouts.forEach((e)=>{
                        e.id === t && this._timeouts.remove(e);
                    }), this;
                }
                clearInterval(t) {
                    return this.clearTimeout(t);
                }
                setInterval(t, e) {
                    const s = ++this._timeoutIds, n = ()=>{
                        const i = this.now();
                        this._timeouts.add({
                            callback: ()=>{
                                t(), n();
                            },
                            id: s,
                            time: i + e
                        });
                    };
                    return n(), s;
                }
            }
            function Mi(t, e124) {
                Ln(e124) ? e124.forEach((e)=>Mi(t, e)
                ) : Object.defineProperty(t, e124, {
                    enumerable: !0,
                    writable: !1
                });
            }
            function Ei(t, e125) {
                Ln(e125) ? e125.forEach((e)=>Ei(t, e)
                ) : Object.defineProperty(t, e125, {
                    writable: !0
                });
            }
            const Ri = ()=>{
            };
            class qi extends _i {
                constructor(){
                    super(), this.name = "ToneAudioBuffer", this.onload = Ri;
                    const t = pi(qi.getDefaults(), arguments, [
                        "url",
                        "onload",
                        "onerror"
                    ]);
                    this.reverse = t.reverse, this.onload = t.onload, t.url && hi(t.url) || t.url instanceof qi ? this.set(t.url) : zn(t.url) && this.load(t.url).catch(t.onerror);
                }
                static getDefaults() {
                    return {
                        onerror: Ri,
                        onload: Ri,
                        reverse: !1
                    };
                }
                get sampleRate() {
                    return this._buffer ? this._buffer.sampleRate : Ni().sampleRate;
                }
                set(t) {
                    return t instanceof qi ? t.loaded ? this._buffer = t.get() : t.onload = ()=>{
                        this.set(t), this.onload(this);
                    } : this._buffer = t, this._reversed && this._reverse(), this;
                }
                get() {
                    return this._buffer;
                }
                load(t213) {
                    return ni(this, void 0, void 0, function*() {
                        const e = qi.load(t213).then((t)=>{
                            this.set(t), this.onload(this);
                        });
                        qi.downloads.push(e);
                        try {
                            yield e;
                        } finally{
                            const t = qi.downloads.indexOf(e);
                            qi.downloads.splice(t, 1);
                        }
                        return this;
                    });
                }
                dispose() {
                    return super.dispose(), this._buffer = void 0, this;
                }
                fromArray(t) {
                    const e = Ln(t) && t[0].length > 0, s = e ? t.length : 1, n = e ? t[0].length : t.length, i = Ni(), o = i.createBuffer(s, n, i.sampleRate), r = e || 1 !== s ? t : [
                        t
                    ];
                    for(let t214 = 0; t214 < s; t214++)o.copyToChannel(r[t214], t214);
                    return this._buffer = o, this;
                }
                toMono(t) {
                    if (Nn(t)) this.fromArray(this.toArray(t));
                    else {
                        let t215 = new Float32Array(this.length);
                        const e = this.numberOfChannels;
                        for(let s = 0; s < e; s++){
                            const e = this.toArray(s);
                            for(let s82 = 0; s82 < e.length; s82++)t215[s82] += e[s82];
                        }
                        t215 = t215.map((t)=>t / e
                        ), this.fromArray(t215);
                    }
                    return this;
                }
                toArray(t) {
                    if (Nn(t)) return this.getChannelData(t);
                    if (1 === this.numberOfChannels) return this.toArray(0);
                    {
                        const t = [];
                        for(let e = 0; e < this.numberOfChannels; e++)t[e] = this.getChannelData(e);
                        return t;
                    }
                }
                getChannelData(t) {
                    return this._buffer ? this._buffer.getChannelData(t) : new Float32Array(0);
                }
                slice(t, e = this.duration) {
                    Bn(this.loaded, "Buffer is not loaded");
                    const s = Math.floor(t * this.sampleRate), n = Math.floor(e * this.sampleRate);
                    Bn(s < n, "The start time must be less than the end time");
                    const i = n - s, o = Ni().createBuffer(this.numberOfChannels, i, this.sampleRate);
                    for(let t216 = 0; t216 < this.numberOfChannels; t216++)o.copyToChannel(this.getChannelData(t216).subarray(s, n), t216);
                    return new qi(o);
                }
                _reverse() {
                    if (this.loaded) for(let t = 0; t < this.numberOfChannels; t++)this.getChannelData(t).reverse();
                    return this;
                }
                get loaded() {
                    return this.length > 0;
                }
                get duration() {
                    return this._buffer ? this._buffer.duration : 0;
                }
                get length() {
                    return this._buffer ? this._buffer.length : 0;
                }
                get numberOfChannels() {
                    return this._buffer ? this._buffer.numberOfChannels : 0;
                }
                get reverse() {
                    return this._reversed;
                }
                set reverse(t) {
                    this._reversed !== t && (this._reversed = t, this._reverse());
                }
                static fromArray(t) {
                    return (new qi).fromArray(t);
                }
                static fromUrl(t) {
                    return ni(this, void 0, void 0, function*() {
                        const e = new qi;
                        return yield e.load(t);
                    });
                }
                static load(t217) {
                    return ni(this, void 0, void 0, function*() {
                        const e = t217.match(/\[([^\]\[]+\|.+)\]$/);
                        if (e) {
                            const s = e[1].split("|");
                            let n = s[0];
                            for (const t of s)if (qi.supportsType(t)) {
                                n = t;
                                break;
                            }
                            t217 = t217.replace(e[0], n);
                        }
                        const s = "" === qi.baseUrl || qi.baseUrl.endsWith("/") ? qi.baseUrl : qi.baseUrl + "/", n = document.createElement("a");
                        n.href = s + t217, n.pathname = (n.pathname + n.hash).split("/").map(encodeURIComponent).join("/");
                        const i = yield fetch(n.href);
                        if (!i.ok) throw new Error(`could not load url: ${t217}`);
                        const o = yield i.arrayBuffer();
                        return yield Ni().decodeAudioData(o);
                    });
                }
                static supportsType(t) {
                    const e = t.split("."), s = e[e.length - 1];
                    return "" !== document.createElement("audio").canPlayType("audio/" + s);
                }
                static loaded() {
                    return ni(this, void 0, void 0, function*() {
                        for(yield Promise.resolve(); qi.downloads.length;)yield qi.downloads[0];
                    });
                }
            }
            qi.baseUrl = "", qi.downloads = [];
            class Fi extends Oi {
                constructor(){
                    var t, e, s;
                    super({
                        clockSource: "offline",
                        context: ai(arguments[0]) ? arguments[0] : (t = arguments[0], e = arguments[1] * arguments[2], s = arguments[2], new Dn(t, e, s)),
                        lookAhead: 0,
                        updateInterval: ai(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
                    }), this.name = "OfflineContext", this._currentTime = 0, this.isOffline = !0, this._duration = ai(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
                }
                now() {
                    return this._currentTime;
                }
                get currentTime() {
                    return this._currentTime;
                }
                _renderClock(t218) {
                    return ni(this, void 0, void 0, function*() {
                        let e = 0;
                        for(; this._duration - this._currentTime >= 0;){
                            this.emit("tick"), this._currentTime += 128 / this.sampleRate, e++;
                            const s = Math.floor(this.sampleRate / 128);
                            t218 && e % s == 0 && (yield new Promise((t)=>setTimeout(t, 1)
                            ));
                        }
                    });
                }
                render(t = !0) {
                    return ni(this, void 0, void 0, function*() {
                        yield this.workletsAreReady(), yield this._renderClock(t);
                        const e = yield this._context.startRendering();
                        return new qi(e);
                    });
                }
                close() {
                    return Promise.resolve();
                }
            }
            const Ii = new class extends Di {
                constructor(){
                    super(...arguments), this.lookAhead = 0, this.latencyHint = 0, this.isOffline = !1;
                }
                createAnalyser() {
                    return {
                    };
                }
                createOscillator() {
                    return {
                    };
                }
                createBufferSource() {
                    return {
                    };
                }
                createBiquadFilter() {
                    return {
                    };
                }
                createBuffer(t, e, s) {
                    return {
                    };
                }
                createChannelMerger(t) {
                    return {
                    };
                }
                createChannelSplitter(t) {
                    return {
                    };
                }
                createConstantSource() {
                    return {
                    };
                }
                createConvolver() {
                    return {
                    };
                }
                createDelay(t) {
                    return {
                    };
                }
                createDynamicsCompressor() {
                    return {
                    };
                }
                createGain() {
                    return {
                    };
                }
                createIIRFilter(t, e) {
                    return {
                    };
                }
                createPanner() {
                    return {
                    };
                }
                createPeriodicWave(t, e, s) {
                    return {
                    };
                }
                createStereoPanner() {
                    return {
                    };
                }
                createWaveShaper() {
                    return {
                    };
                }
                createMediaStreamSource(t) {
                    return {
                    };
                }
                createMediaElementSource(t) {
                    return {
                    };
                }
                createMediaStreamDestination() {
                    return {
                    };
                }
                decodeAudioData(t) {
                    return Promise.resolve({
                    });
                }
                createAudioWorkletNode(t, e) {
                    return {
                    };
                }
                get rawContext() {
                    return {
                    };
                }
                addAudioWorkletModule(t, e) {
                    return ni(this, void 0, void 0, function*() {
                        return Promise.resolve();
                    });
                }
                resume() {
                    return Promise.resolve();
                }
                setTimeout(t, e) {
                    return 0;
                }
                clearTimeout(t) {
                    return this;
                }
                setInterval(t, e) {
                    return 0;
                }
                clearInterval(t) {
                    return this;
                }
                getConstant(t) {
                    return {
                    };
                }
                get currentTime() {
                    return 0;
                }
                get state() {
                    return {
                    };
                }
                get sampleRate() {
                    return 0;
                }
                get listener() {
                    return {
                    };
                }
                get transport() {
                    return {
                    };
                }
                get draw() {
                    return {
                    };
                }
                set draw(t) {
                }
                get destination() {
                    return {
                    };
                }
                set destination(t) {
                }
                now() {
                    return 0;
                }
                immediate() {
                    return 0;
                }
            };
            let Vi = Ii;
            function Ni() {
                return Vi === Ii && ei && Pi(new Oi), Vi;
            }
            function Pi(t, e = !1) {
                e && Vi.dispose(), Vi = ci(t) ? new Oi(t) : ai(t) ? new Fi(t) : t;
            }
            function ji() {
                return Vi.resume();
            }
            if (ti && !ti.TONE_SILENCE_LOGGING) {
                let t = "v";
                "dev" === i2 && (t = "");
                const e = ` * Tone.js ${t}${i2} * `;
                console.log(`%c${e}`, "background: #000; color: #fff");
            }
            function Li(t) {
                return Math.pow(10, t / 20);
            }
            function zi(t) {
                return Math.log(t) / Math.LN10 * 20;
            }
            function Wi(t) {
                return Math.pow(2, t / 12);
            }
            let Bi = 440;
            function Ui(t) {
                return Math.round(Gi(t));
            }
            function Gi(t) {
                return 69 + 12 * Math.log2(t / Bi);
            }
            function Qi(t) {
                return Bi * Math.pow(2, (t - 69) / 12);
            }
            class Zi extends _i {
                constructor(t, e, s){
                    super(), this.defaultUnits = "s", this._val = e, this._units = s, this.context = t, this._expressions = this._getExpressions();
                }
                _getExpressions() {
                    return {
                        hz: {
                            method: (t)=>this._frequencyToUnits(parseFloat(t))
                            ,
                            regexp: /^(\d+(?:\.\d+)?)hz$/i
                        },
                        i: {
                            method: (t)=>this._ticksToUnits(parseInt(t, 10))
                            ,
                            regexp: /^(\d+)i$/i
                        },
                        m: {
                            method: (t)=>this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature())
                            ,
                            regexp: /^(\d+)m$/i
                        },
                        n: {
                            method: (t, e)=>{
                                const s = parseInt(t, 10), n = "." === e ? 1.5 : 1;
                                return 1 === s ? this._beatsToUnits(this._getTimeSignature()) * n : this._beatsToUnits(4 / s) * n;
                            },
                            regexp: /^(\d+)n(\.?)$/i
                        },
                        number: {
                            method: (t)=>this._expressions[this.defaultUnits].method.call(this, t)
                            ,
                            regexp: /^(\d+(?:\.\d+)?)$/
                        },
                        s: {
                            method: (t)=>this._secondsToUnits(parseFloat(t))
                            ,
                            regexp: /^(\d+(?:\.\d+)?)s$/
                        },
                        samples: {
                            method: (t)=>parseInt(t, 10) / this.context.sampleRate
                            ,
                            regexp: /^(\d+)samples$/
                        },
                        t: {
                            method: (t)=>{
                                const e = parseInt(t, 10);
                                return this._beatsToUnits(8 / (3 * Math.floor(e)));
                            },
                            regexp: /^(\d+)t$/i
                        },
                        tr: {
                            method: (t, e, s)=>{
                                let n = 0;
                                return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))), s && "0" !== s && (n += this._beatsToUnits(parseFloat(s) / 4)), n;
                            },
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                        }
                    };
                }
                valueOf() {
                    if (this._val instanceof Zi && this.fromType(this._val), Fn(this._val)) return this._noArg();
                    if (zn(this._val) && Fn(this._units)) {
                        for(const t in this._expressions)if (this._expressions[t].regexp.test(this._val.trim())) {
                            this._units = t;
                            break;
                        }
                    } else if (Pn(this._val)) {
                        let t = 0;
                        for(const e in this._val)if (In(this._val[e])) {
                            const s = this._val[e];
                            t += new this.constructor(this.context, e).valueOf() * s;
                        }
                        return t;
                    }
                    if (In(this._units)) {
                        const t = this._expressions[this._units], e = this._val.toString().trim().match(t.regexp);
                        return e ? t.method.apply(this, e.slice(1)) : t.method.call(this, this._val);
                    }
                    return zn(this._val) ? parseFloat(this._val) : this._val;
                }
                _frequencyToUnits(t) {
                    return 1 / t;
                }
                _beatsToUnits(t) {
                    return 60 / this._getBpm() * t;
                }
                _secondsToUnits(t) {
                    return t;
                }
                _ticksToUnits(t) {
                    return t * this._beatsToUnits(1) / this._getPPQ();
                }
                _noArg() {
                    return this._now();
                }
                _getBpm() {
                    return this.context.transport.bpm.value;
                }
                _getTimeSignature() {
                    return this.context.transport.timeSignature;
                }
                _getPPQ() {
                    return this.context.transport.PPQ;
                }
                fromType(t) {
                    switch(this._units = void 0, this.defaultUnits){
                        case "s":
                            this._val = t.toSeconds();
                            break;
                        case "i":
                            this._val = t.toTicks();
                            break;
                        case "hz":
                            this._val = t.toFrequency();
                            break;
                        case "midi":
                            this._val = t.toMidi();
                    }
                    return this;
                }
                toFrequency() {
                    return 1 / this.toSeconds();
                }
                toSamples() {
                    return this.toSeconds() * this.context.sampleRate;
                }
                toMilliseconds() {
                    return 1000 * this.toSeconds();
                }
            }
            class Xi extends Zi {
                constructor(){
                    super(...arguments), this.name = "TimeClass";
                }
                _getExpressions() {
                    return Object.assign(super._getExpressions(), {
                        now: {
                            method: (t)=>this._now() + new this.constructor(this.context, t).valueOf()
                            ,
                            regexp: /^\+(.+)/
                        },
                        quantize: {
                            method: (t)=>{
                                const e = new Xi(this.context, t).valueOf();
                                return this._secondsToUnits(this.context.transport.nextSubdivision(e));
                            },
                            regexp: /^@(.+)/
                        }
                    });
                }
                quantize(t, e = 1) {
                    const s = new this.constructor(this.context, t).valueOf(), n = this.valueOf();
                    return n + (Math.round(n / s) * s - n) * e;
                }
                toNotation() {
                    const t = this.toSeconds(), e126 = [
                        "1m"
                    ];
                    for(let t219 = 1; t219 < 9; t219++){
                        const s = Math.pow(2, t219);
                        e126.push(s + "n."), e126.push(s + "n"), e126.push(s + "t");
                    }
                    e126.push("0");
                    let s = e126[0], n = new Xi(this.context, e126[0]).toSeconds();
                    return e126.forEach((e)=>{
                        const i = new Xi(this.context, e).toSeconds();
                        Math.abs(i - t) < Math.abs(n - t) && (s = e, n = i);
                    }), s;
                }
                toBarsBeatsSixteenths() {
                    const t = this._beatsToUnits(1);
                    let e = this.valueOf() / t;
                    e = parseFloat(e.toFixed(4));
                    const s = Math.floor(e / this._getTimeSignature());
                    let n = e % 1 * 4;
                    e = Math.floor(e) % this._getTimeSignature();
                    const i = n.toString();
                    return i.length > 3 && (n = parseFloat(parseFloat(i).toFixed(3))), [
                        s,
                        e,
                        n
                    ].join(":");
                }
                toTicks() {
                    const t = this._beatsToUnits(1);
                    return this.valueOf() / t * this._getPPQ();
                }
                toSeconds() {
                    return this.valueOf();
                }
                toMidi() {
                    return Ui(this.toFrequency());
                }
                _now() {
                    return this.context.now();
                }
            }
            function Yi(t, e) {
                return new Xi(Ni(), t, e);
            }
            class $i extends Xi {
                constructor(){
                    super(...arguments), this.name = "Frequency", this.defaultUnits = "hz";
                }
                static get A4() {
                    return Bi;
                }
                static set A4(t220) {
                    !function(t) {
                        Bi = t;
                    }(t220);
                }
                _getExpressions() {
                    return Object.assign({
                    }, super._getExpressions(), {
                        midi: {
                            regexp: /^(\d+(?:\.\d+)?midi)/,
                            method (t) {
                                return "midi" === this.defaultUnits ? t : $i.mtof(t);
                            }
                        },
                        note: {
                            regexp: /^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,
                            method (t, e) {
                                const s = Hi[t.toLowerCase()] + 12 * (parseInt(e, 10) + 1);
                                return "midi" === this.defaultUnits ? s : $i.mtof(s);
                            }
                        },
                        tr: {
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                            method (t, e, s) {
                                let n = 1;
                                return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))), s && "0" !== s && (n *= this._beatsToUnits(parseFloat(s) / 4)), n;
                            }
                        }
                    });
                }
                transpose(t) {
                    return new $i(this.context, this.valueOf() * Wi(t));
                }
                harmonize(t221) {
                    return t221.map((t)=>this.transpose(t)
                    );
                }
                toMidi() {
                    return Ui(this.valueOf());
                }
                toNote() {
                    const t = this.toFrequency(), e = Math.log2(t / $i.A4);
                    let s = Math.round(12 * e) + 57;
                    const n = Math.floor(s / 12);
                    return n < 0 && (s += -12 * n), Ji[s % 12] + n.toString();
                }
                toSeconds() {
                    return 1 / super.toSeconds();
                }
                toTicks() {
                    const t = this._beatsToUnits(1), e = this.valueOf() / t;
                    return Math.floor(e * this._getPPQ());
                }
                _noArg() {
                    return 0;
                }
                _frequencyToUnits(t) {
                    return t;
                }
                _ticksToUnits(t) {
                    return 1 / (60 * t / (this._getBpm() * this._getPPQ()));
                }
                _beatsToUnits(t) {
                    return 1 / super._beatsToUnits(t);
                }
                _secondsToUnits(t) {
                    return 1 / t;
                }
                static mtof(t) {
                    return Qi(t);
                }
                static ftom(t) {
                    return Ui(t);
                }
            }
            const Hi = {
                cbbb: -3,
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                "c##": 2,
                "c###": 3,
                "cx#": 3,
                "c#x": 3,
                dbbb: -1,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                "d##": 4,
                "d###": 5,
                "dx#": 5,
                "d#x": 5,
                ebbb: 1,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                "e##": 6,
                "e###": 7,
                "ex#": 7,
                "e#x": 7,
                fbbb: 2,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                "f##": 7,
                "f###": 8,
                "fx#": 8,
                "f#x": 8,
                gbbb: 4,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                "g##": 9,
                "g###": 10,
                "gx#": 10,
                "g#x": 10,
                abbb: 6,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                "a##": 11,
                "a###": 12,
                "ax#": 12,
                "a#x": 12,
                bbbb: 8,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13,
                "b##": 13,
                "b###": 14,
                "bx#": 14,
                "b#x": 14
            }, Ji = [
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ];
            function Ki(t, e) {
                return new $i(Ni(), t, e);
            }
            class to extends Xi {
                constructor(){
                    super(...arguments), this.name = "TransportTime";
                }
                _now() {
                    return this.context.transport.seconds;
                }
            }
            function eo(t, e) {
                return new to(Ni(), t, e);
            }
            class so extends _i {
                constructor(){
                    super();
                    const t = pi(so.getDefaults(), arguments, [
                        "context"
                    ]);
                    this.defaultContext ? this.context = this.defaultContext : this.context = t.context;
                }
                static getDefaults() {
                    return {
                        context: Ni()
                    };
                }
                now() {
                    return this.context.currentTime + this.context.lookAhead;
                }
                immediate() {
                    return this.context.currentTime;
                }
                get sampleTime() {
                    return 1 / this.context.sampleRate;
                }
                get blockTime() {
                    return 128 / this.context.sampleRate;
                }
                toSeconds(t) {
                    return Yn(t), new Xi(this.context, t).toSeconds();
                }
                toFrequency(t) {
                    return new $i(this.context, t).toFrequency();
                }
                toTicks(t) {
                    return new to(this.context, t).toTicks();
                }
                _getPartialProperties(t) {
                    const e = this.get();
                    return Object.keys(e).forEach((s)=>{
                        Fn(t[s]) && delete e[s];
                    }), e;
                }
                get() {
                    const t = this.constructor.getDefaults();
                    return Object.keys(t).forEach((e)=>{
                        if (Reflect.has(this, e)) {
                            const s = this[e];
                            In(s) && In(s.value) && In(s.setValueAtTime) ? t[e] = s.value : s instanceof so ? t[e] = s._getPartialProperties(t[e]) : Ln(s) || Nn(s) || zn(s) || jn(s) ? t[e] = s : delete t[e];
                        }
                    }), t;
                }
                set(t) {
                    return Object.keys(t).forEach((e)=>{
                        Reflect.has(this, e) && In(this[e]) && (this[e] && In(this[e].value) && In(this[e].setValueAtTime) ? this[e].value !== t[e] && (this[e].value = t[e]) : this[e] instanceof so ? this[e].set(t[e]) : this[e] = t[e]);
                    }), this;
                }
            }
            class no extends bi {
                constructor(t = "stopped"){
                    super(), this.name = "StateTimeline", this._initial = t, this.setStateAtTime(this._initial, 0);
                }
                getValueAtTime(t) {
                    const e = this.get(t);
                    return null !== e ? e.state : this._initial;
                }
                setStateAtTime(t, e, s) {
                    return Un(e, 0), this.add(Object.assign({
                    }, s, {
                        state: t,
                        time: e
                    })), this;
                }
                getLastState(t, e) {
                    for(let s = this._search(e); s >= 0; s--){
                        const e = this._timeline[s];
                        if (e.state === t) return e;
                    }
                }
                getNextState(t, e) {
                    const s = this._search(e);
                    if (-1 !== s) for(let e127 = s; e127 < this._timeline.length; e127++){
                        const s = this._timeline[e127];
                        if (s.state === t) return s;
                    }
                }
            }
            class io extends so {
                constructor(){
                    super(pi(io.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ])), this.name = "Param", this.overridden = !1, this._minOutput = 0.0000001;
                    const t = pi(io.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ]);
                    for(Bn(In(t.param) && (oi(t.param) || t.param instanceof io), "param must be an AudioParam"); !oi(t.param);)t.param = t.param._param;
                    this._swappable = !!In(t.swappable) && t.swappable, this._swappable ? (this.input = this.context.createGain(), this._param = t.param, this.input.connect(this._param)) : this._param = this.input = t.param, this._events = new bi(1000), this._initialValue = this._param.defaultValue, this.units = t.units, this.convert = t.convert, this._minValue = t.minValue, this._maxValue = t.maxValue, In(t.value) && t.value !== this._toType(this._initialValue) && this.setValueAtTime(t.value, 0);
                }
                static getDefaults() {
                    return Object.assign(so.getDefaults(), {
                        convert: !0,
                        units: "number"
                    });
                }
                get value() {
                    const t = this.now();
                    return this.getValueAtTime(t);
                }
                set value(t) {
                    this.cancelScheduledValues(this.now()), this.setValueAtTime(t, this.now());
                }
                get minValue() {
                    return In(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue;
                }
                get maxValue() {
                    return In(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue;
                }
                _is(t, e) {
                    return this.units === e;
                }
                _assertRange(t) {
                    return In(this.maxValue) && In(this.minValue) && Un(t, this._fromType(this.minValue), this._fromType(this.maxValue)), t;
                }
                _fromType(t) {
                    return this.convert && !this.overridden ? this._is(t, "time") ? this.toSeconds(t) : this._is(t, "decibels") ? Li(t) : this._is(t, "frequency") ? this.toFrequency(t) : t : this.overridden ? 0 : t;
                }
                _toType(t) {
                    return this.convert && "decibels" === this.units ? zi(t) : t;
                }
                setValueAtTime(t, e) {
                    const s = this.toSeconds(e), n = this._fromType(t);
                    return Bn(isFinite(n) && isFinite(s), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._assertRange(n), this.log(this.units, "setValueAtTime", t, s), this._events.add({
                        time: s,
                        type: "setValueAtTime",
                        value: n
                    }), this._param.setValueAtTime(n, s), this;
                }
                getValueAtTime(t) {
                    const e = Math.max(this.toSeconds(t), 0), s = this._events.getAfter(e), n = this._events.get(e);
                    let i = this._initialValue;
                    if (null === n) i = this._initialValue;
                    else if ("setTargetAtTime" !== n.type || null !== s && "setValueAtTime" !== s.type) {
                        if (null === s) i = n.value;
                        else if ("linearRampToValueAtTime" === s.type || "exponentialRampToValueAtTime" === s.type) {
                            let t = n.value;
                            if ("setTargetAtTime" === n.type) {
                                const e = this._events.getBefore(n.time);
                                t = null === e ? this._initialValue : e.value;
                            }
                            i = "linearRampToValueAtTime" === s.type ? this._linearInterpolate(n.time, t, s.time, s.value, e) : this._exponentialInterpolate(n.time, t, s.time, s.value, e);
                        } else i = n.value;
                    } else {
                        const t = this._events.getBefore(n.time);
                        let s;
                        s = null === t ? this._initialValue : t.value, "setTargetAtTime" === n.type && (i = this._exponentialApproach(n.time, s, n.value, n.constant, e));
                    }
                    return this._toType(i);
                }
                setRampPoint(t) {
                    t = this.toSeconds(t);
                    let e = this.getValueAtTime(t);
                    return this.cancelAndHoldAtTime(t), 0 === this._fromType(e) && (e = this._toType(this._minOutput)), this.setValueAtTime(e, t), this;
                }
                linearRampToValueAtTime(t, e) {
                    const s = this._fromType(t), n = this.toSeconds(e);
                    return Bn(isFinite(s) && isFinite(n), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._assertRange(s), this._events.add({
                        time: n,
                        type: "linearRampToValueAtTime",
                        value: s
                    }), this.log(this.units, "linearRampToValueAtTime", t, n), this._param.linearRampToValueAtTime(s, n), this;
                }
                exponentialRampToValueAtTime(t, e) {
                    let s = this._fromType(t);
                    s = xi(s, 0) ? this._minOutput : s, this._assertRange(s);
                    const n = this.toSeconds(e);
                    return Bn(isFinite(s) && isFinite(n), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._events.add({
                        time: n,
                        type: "exponentialRampToValueAtTime",
                        value: s
                    }), this.log(this.units, "exponentialRampToValueAtTime", t, n), this._param.exponentialRampToValueAtTime(s, n), this;
                }
                exponentialRampTo(t, e, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.exponentialRampToValueAtTime(t, s + this.toSeconds(e)), this;
                }
                linearRampTo(t, e, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.linearRampToValueAtTime(t, s + this.toSeconds(e)), this;
                }
                targetRampTo(t, e, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.exponentialApproachValueAtTime(t, s, e), this;
                }
                exponentialApproachValueAtTime(t, e, s) {
                    e = this.toSeconds(e), s = this.toSeconds(s);
                    const n = Math.log(s + 1) / Math.log(200);
                    return this.setTargetAtTime(t, e, n), this.cancelAndHoldAtTime(e + 0.9 * s), this.linearRampToValueAtTime(t, e + s), this;
                }
                setTargetAtTime(t, e, s) {
                    const n = this._fromType(t);
                    Bn(isFinite(s) && s > 0, "timeConstant must be a number greater than 0");
                    const i = this.toSeconds(e);
                    return this._assertRange(n), Bn(isFinite(n) && isFinite(i), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._events.add({
                        constant: s,
                        time: i,
                        type: "setTargetAtTime",
                        value: n
                    }), this.log(this.units, "setTargetAtTime", t, i, s), this._param.setTargetAtTime(n, i, s), this;
                }
                setValueCurveAtTime(t, e, s, n = 1) {
                    s = this.toSeconds(s), e = this.toSeconds(e);
                    const i = this._fromType(t[0]) * n;
                    this.setValueAtTime(this._toType(i), e);
                    const o = s / (t.length - 1);
                    for(let s83 = 1; s83 < t.length; s83++){
                        const i = this._fromType(t[s83]) * n;
                        this.linearRampToValueAtTime(this._toType(i), e + s83 * o);
                    }
                    return this;
                }
                cancelScheduledValues(t) {
                    const e = this.toSeconds(t);
                    return Bn(isFinite(e), `Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`), this._events.cancel(e), this._param.cancelScheduledValues(e), this.log(this.units, "cancelScheduledValues", e), this;
                }
                cancelAndHoldAtTime(t) {
                    const e = this.toSeconds(t), s = this._fromType(this.getValueAtTime(e));
                    Bn(isFinite(e), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`), this.log(this.units, "cancelAndHoldAtTime", e, "value=" + s);
                    const n = this._events.get(e), i = this._events.getAfter(e);
                    return n && xi(n.time, e) ? i ? (this._param.cancelScheduledValues(i.time), this._events.cancel(i.time)) : (this._param.cancelAndHoldAtTime(e), this._events.cancel(e + this.sampleTime)) : i && (this._param.cancelScheduledValues(i.time), this._events.cancel(i.time), "linearRampToValueAtTime" === i.type ? this.linearRampToValueAtTime(this._toType(s), e) : "exponentialRampToValueAtTime" === i.type && this.exponentialRampToValueAtTime(this._toType(s), e)), this._events.add({
                        time: e,
                        type: "setValueAtTime",
                        value: s
                    }), this._param.setValueAtTime(s, e), this;
                }
                rampTo(t, e = 0.1, s) {
                    return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t, e, s) : this.linearRampTo(t, e, s), this;
                }
                apply(t) {
                    const e128 = this.context.currentTime;
                    t.setValueAtTime(this.getValueAtTime(e128), e128);
                    const s = this._events.get(e128);
                    if (s && "setTargetAtTime" === s.type) {
                        const n = this._events.getAfter(s.time), i = n ? n.time : e128 + 2, o = (i - e128) / 10;
                        for(let s84 = e128; s84 < i; s84 += o)t.linearRampToValueAtTime(this.getValueAtTime(s84), s84);
                    }
                    return this._events.forEachAfter(this.context.currentTime, (e)=>{
                        "cancelScheduledValues" === e.type ? t.cancelScheduledValues(e.time) : "setTargetAtTime" === e.type ? t.setTargetAtTime(e.value, e.time, e.constant) : t[e.type](e.value, e.time);
                    }), this;
                }
                setParam(t) {
                    Bn(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
                    const e = this.input;
                    return e.disconnect(this._param), this.apply(t), this._param = t, e.connect(this._param), this;
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), this;
                }
                get defaultValue() {
                    return this._toType(this._param.defaultValue);
                }
                _exponentialApproach(t, e, s, n, i) {
                    return s + (e - s) * Math.exp(-(i - t) / n);
                }
                _linearInterpolate(t, e, s, n, i) {
                    return e + (i - t) / (s - t) * (n - e);
                }
                _exponentialInterpolate(t, e, s, n, i) {
                    return e * Math.pow(n / e, (i - t) / (s - t));
                }
            }
            class oo extends so {
                constructor(){
                    super(...arguments), this._internalChannels = [];
                }
                get numberOfInputs() {
                    return In(this.input) ? oi(this.input) || this.input instanceof io ? 1 : this.input.numberOfInputs : 0;
                }
                get numberOfOutputs() {
                    return In(this.output) ? this.output.numberOfOutputs : 0;
                }
                _isAudioNode(t) {
                    return In(t) && (t instanceof oo || ri(t));
                }
                _getInternalNodes() {
                    const t = this._internalChannels.slice(0);
                    return this._isAudioNode(this.input) && t.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && t.push(this.output), t;
                }
                _setChannelProperties(t) {
                    this._getInternalNodes().forEach((e)=>{
                        e.channelCount = t.channelCount, e.channelCountMode = t.channelCountMode, e.channelInterpretation = t.channelInterpretation;
                    });
                }
                _getChannelProperties() {
                    const t = this._getInternalNodes();
                    Bn(t.length > 0, "ToneAudioNode does not have any internal nodes");
                    const e = t[0];
                    return {
                        channelCount: e.channelCount,
                        channelCountMode: e.channelCountMode,
                        channelInterpretation: e.channelInterpretation
                    };
                }
                get channelCount() {
                    return this._getChannelProperties().channelCount;
                }
                set channelCount(t) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCount: t
                    }));
                }
                get channelCountMode() {
                    return this._getChannelProperties().channelCountMode;
                }
                set channelCountMode(t) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCountMode: t
                    }));
                }
                get channelInterpretation() {
                    return this._getChannelProperties().channelInterpretation;
                }
                set channelInterpretation(t) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelInterpretation: t
                    }));
                }
                connect(t, e = 0, s = 0) {
                    return ao(this, t, e, s), this;
                }
                toDestination() {
                    return this.connect(this.context.destination), this;
                }
                toMaster() {
                    return Kn("toMaster() has been renamed toDestination()"), this.toDestination();
                }
                disconnect(t, e = 0, s = 0) {
                    return co(this, t, e, s), this;
                }
                chain(...t) {
                    return ro(this, ...t), this;
                }
                fan(...t222) {
                    return t222.forEach((t)=>this.connect(t)
                    ), this;
                }
                dispose() {
                    return super.dispose(), In(this.input) && (this.input instanceof oo ? this.input.dispose() : ri(this.input) && this.input.disconnect()), In(this.output) && (this.output instanceof oo ? this.output.dispose() : ri(this.output) && this.output.disconnect()), this._internalChannels = [], this;
                }
            }
            function ro(...t223) {
                const e129 = t223.shift();
                t223.reduce((t, e)=>(t instanceof oo ? t.connect(e) : ri(t) && ao(t, e), e)
                , e129);
            }
            function ao(t, e, s = 0, n = 0) {
                for(Bn(In(t), "Cannot connect from undefined node"), Bn(In(e), "Cannot connect to undefined node"), (e instanceof oo || ri(e)) && Bn(e.numberOfInputs > 0, "Cannot connect to node with no inputs"), Bn(t.numberOfOutputs > 0, "Cannot connect from node with no outputs"); e instanceof oo || e instanceof io;)In(e.input) && (e = e.input);
                for(; t instanceof oo;)In(t.output) && (t = t.output);
                oi(e) ? t.connect(e, s) : t.connect(e, s, n);
            }
            function co(t, e, s = 0, n = 0) {
                if (In(e)) for(; e instanceof oo;)e = e.input;
                for(; !ri(t);)In(t.output) && (t = t.output);
                oi(e) ? t.disconnect(e, s) : ri(e) ? t.disconnect(e, s, n) : t.disconnect();
            }
            function ho(...t224) {
                const e = t224.pop();
                In(e) && t224.forEach((t)=>ao(t, e)
                );
            }
            class lo extends oo {
                constructor(){
                    super(pi(lo.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ])), this.name = "Gain", this._gainNode = this.context.createGain(), this.input = this._gainNode, this.output = this._gainNode;
                    const t = pi(lo.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ]);
                    this.gain = new io({
                        context: this.context,
                        convert: t.convert,
                        param: this._gainNode.gain,
                        units: t.units,
                        value: t.gain,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }), Mi(this, "gain");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        convert: !0,
                        gain: 1,
                        units: "gain"
                    });
                }
                dispose() {
                    return super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this;
                }
            }
            class uo extends oo {
                constructor(t225){
                    super(t225), this.onended = Ri, this._startTime = -1, this._stopTime = -1, this._timeout = -1, this.output = new lo({
                        context: this.context,
                        gain: 0
                    }), this._gainNode = this.output, this.getStateAtTime = function(t) {
                        const e = this.toSeconds(t);
                        return -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? "started" : "stopped";
                    }, this._fadeIn = t225.fadeIn, this._fadeOut = t225.fadeOut, this._curve = t225.curve, this.onended = t225.onended;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        curve: "linear",
                        fadeIn: 0,
                        fadeOut: 0,
                        onended: Ri
                    });
                }
                _startGain(t, e = 1) {
                    Bn(-1 === this._startTime, "Source cannot be started more than once");
                    const s = this.toSeconds(this._fadeIn);
                    return this._startTime = t + s, this._startTime = Math.max(this._startTime, this.context.currentTime), s > 0 ? (this._gainNode.gain.setValueAtTime(0, t), "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t + s) : this._gainNode.gain.exponentialApproachValueAtTime(e, t, s)) : this._gainNode.gain.setValueAtTime(e, t), this;
                }
                stop(t) {
                    return this.log("stop", t), this._stopGain(this.toSeconds(t)), this;
                }
                _stopGain(t226) {
                    Bn(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop();
                    const e = this.toSeconds(this._fadeOut);
                    return this._stopTime = this.toSeconds(t226) + e, this._stopTime = Math.max(this._stopTime, this.context.currentTime), e > 0 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e, t226) : this._gainNode.gain.targetRampTo(0, e, t226) : (this._gainNode.gain.cancelAndHoldAtTime(t226), this._gainNode.gain.setValueAtTime(0, t226)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(()=>{
                        const t = "exponential" === this._curve ? 2 * e : 0;
                        this._stopSource(this.now() + t), this._onended();
                    }, this._stopTime - this.context.currentTime), this;
                }
                _onended() {
                    if (this.onended !== Ri && (this.onended(this), this.onended = Ri, !this.context.isOffline)) {
                        const t = ()=>this.dispose()
                        ;
                        void 0 !== window.requestIdleCallback ? window.requestIdleCallback(t) : setTimeout(t, 1000);
                    }
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                cancelStop() {
                    return this.log("cancelStop"), Bn(-1 !== this._startTime, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this.onended = Ri, this;
                }
            }
            class po extends uo {
                constructor(){
                    super(pi(po.getDefaults(), arguments, [
                        "offset"
                    ])), this.name = "ToneConstantSource", this._source = this.context.createConstantSource();
                    const t = pi(po.getDefaults(), arguments, [
                        "offset"
                    ]);
                    ao(this._source, this._gainNode), this.offset = new io({
                        context: this.context,
                        convert: t.convert,
                        param: this._source.offset,
                        units: t.units,
                        value: t.offset,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    });
                }
                static getDefaults() {
                    return Object.assign(uo.getDefaults(), {
                        convert: !0,
                        offset: 1,
                        units: "number"
                    });
                }
                start(t) {
                    const e = this.toSeconds(t);
                    return this.log("start", e), this._startGain(e), this._source.start(e), this;
                }
                _stopSource(t) {
                    this._source.stop(t);
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._source.disconnect(), this.offset.dispose(), this;
                }
            }
            class fo extends oo {
                constructor(){
                    super(pi(fo.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "Signal", this.override = !0;
                    const t = pi(fo.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this.output = this._constantSource = new po({
                        context: this.context,
                        convert: t.convert,
                        offset: t.value,
                        units: t.units,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }), this._constantSource.start(0), this.input = this._param = this._constantSource.offset;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        convert: !0,
                        units: "number",
                        value: 0
                    });
                }
                connect(t, e = 0, s = 0) {
                    return _o(this, t, e, s), this;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this._constantSource.dispose(), this;
                }
                setValueAtTime(t, e) {
                    return this._param.setValueAtTime(t, e), this;
                }
                getValueAtTime(t) {
                    return this._param.getValueAtTime(t);
                }
                setRampPoint(t) {
                    return this._param.setRampPoint(t), this;
                }
                linearRampToValueAtTime(t, e) {
                    return this._param.linearRampToValueAtTime(t, e), this;
                }
                exponentialRampToValueAtTime(t, e) {
                    return this._param.exponentialRampToValueAtTime(t, e), this;
                }
                exponentialRampTo(t, e, s) {
                    return this._param.exponentialRampTo(t, e, s), this;
                }
                linearRampTo(t, e, s) {
                    return this._param.linearRampTo(t, e, s), this;
                }
                targetRampTo(t, e, s) {
                    return this._param.targetRampTo(t, e, s), this;
                }
                exponentialApproachValueAtTime(t, e, s) {
                    return this._param.exponentialApproachValueAtTime(t, e, s), this;
                }
                setTargetAtTime(t, e, s) {
                    return this._param.setTargetAtTime(t, e, s), this;
                }
                setValueCurveAtTime(t, e, s, n) {
                    return this._param.setValueCurveAtTime(t, e, s, n), this;
                }
                cancelScheduledValues(t) {
                    return this._param.cancelScheduledValues(t), this;
                }
                cancelAndHoldAtTime(t) {
                    return this._param.cancelAndHoldAtTime(t), this;
                }
                rampTo(t, e, s) {
                    return this._param.rampTo(t, e, s), this;
                }
                get value() {
                    return this._param.value;
                }
                set value(t) {
                    this._param.value = t;
                }
                get convert() {
                    return this._param.convert;
                }
                set convert(t) {
                    this._param.convert = t;
                }
                get units() {
                    return this._param.units;
                }
                get overridden() {
                    return this._param.overridden;
                }
                set overridden(t) {
                    this._param.overridden = t;
                }
                get maxValue() {
                    return this._param.maxValue;
                }
                get minValue() {
                    return this._param.minValue;
                }
                apply(t) {
                    return this._param.apply(t), this;
                }
            }
            function _o(t, e, s, n) {
                (e instanceof io || oi(e) || e instanceof fo && e.override) && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0), e instanceof fo && (e.overridden = !0)), ao(t, e, s, n);
            }
            class mo extends io {
                constructor(){
                    super(pi(mo.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickParam", this._events = new bi(1 / 0), this._multiplier = 1;
                    const t = pi(mo.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._multiplier = t.multiplier, this._events.cancel(0), this._events.add({
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: this._fromType(t.value)
                    }), this.setValueAtTime(t.value, 0);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                setTargetAtTime(t, e, s) {
                    e = this.toSeconds(e), this.setRampPoint(e);
                    const n = this._fromType(t), i = this._events.get(e), o = Math.round(Math.max(1 / s, 1));
                    for(let t227 = 0; t227 <= o; t227++){
                        const o = s * t227 + e, r = this._exponentialApproach(i.time, i.value, n, s, o);
                        this.linearRampToValueAtTime(this._toType(r), o);
                    }
                    return this;
                }
                setValueAtTime(t, e) {
                    const s = this.toSeconds(e);
                    super.setValueAtTime(t, e);
                    const n = this._events.get(s), i = this._events.previousEvent(n), o = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(o, 0), this;
                }
                linearRampToValueAtTime(t, e) {
                    const s = this.toSeconds(e);
                    super.linearRampToValueAtTime(t, e);
                    const n = this._events.get(s), i = this._events.previousEvent(n), o = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(o, 0), this;
                }
                exponentialRampToValueAtTime(t, e) {
                    e = this.toSeconds(e);
                    const s = this._fromType(t), n = this._events.get(e), i = Math.round(Math.max(10 * (e - n.time), 1)), o = (e - n.time) / i;
                    for(let t228 = 0; t228 <= i; t228++){
                        const i = o * t228 + n.time, r = this._exponentialInterpolate(n.time, n.value, e, s, i);
                        this.linearRampToValueAtTime(this._toType(r), i);
                    }
                    return this;
                }
                _getTicksUntilEvent(t, e) {
                    if (null === t) t = {
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: 0
                    };
                    else if (Fn(t.ticks)) {
                        const e = this._events.previousEvent(t);
                        t.ticks = this._getTicksUntilEvent(e, t.time);
                    }
                    const s = this._fromType(this.getValueAtTime(t.time));
                    let n = this._fromType(this.getValueAtTime(e));
                    const i = this._events.get(e);
                    return i && i.time === e && "setValueAtTime" === i.type && (n = this._fromType(this.getValueAtTime(e - this.sampleTime))), 0.5 * (e - t.time) * (s + n) + t.ticks;
                }
                getTicksAtTime(t) {
                    const e = this.toSeconds(t), s = this._events.get(e);
                    return Math.max(this._getTicksUntilEvent(s, e), 0);
                }
                getDurationOfTicks(t, e) {
                    const s = this.toSeconds(e), n = this.getTicksAtTime(e);
                    return this.getTimeOfTick(n + t) - s;
                }
                getTimeOfTick(t) {
                    const e = this._events.get(t, "ticks"), s = this._events.getAfter(t, "ticks");
                    if (e && e.ticks === t) return e.time;
                    if (e && s && "linearRampToValueAtTime" === s.type && e.value !== s.value) {
                        const n = this._fromType(this.getValueAtTime(e.time)), i = (this._fromType(this.getValueAtTime(s.time)) - n) / (s.time - e.time), o = Math.sqrt(Math.pow(n, 2) - 2 * i * (e.ticks - t)), r = (-n + o) / i, a = (-n - o) / i;
                        return (r > 0 ? r : a) + e.time;
                    }
                    return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue;
                }
                ticksToTime(t, e) {
                    return this.getDurationOfTicks(t, e);
                }
                timeToTicks(t, e) {
                    const s = this.toSeconds(e), n = this.toSeconds(t), i = this.getTicksAtTime(s);
                    return this.getTicksAtTime(s + n) - i;
                }
                _fromType(t) {
                    return "bpm" === this.units && this.multiplier ? 1 / (60 / t / this.multiplier) : super._fromType(t);
                }
                _toType(t) {
                    return "bpm" === this.units && this.multiplier ? t / this.multiplier * 60 : super._toType(t);
                }
                get multiplier() {
                    return this._multiplier;
                }
                set multiplier(t) {
                    const e = this.value;
                    this._multiplier = t, this.cancelScheduledValues(0), this.setValueAtTime(e, 0);
                }
            }
            class go extends fo {
                constructor(){
                    super(pi(go.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickSignal";
                    const t = pi(go.getDefaults(), arguments, [
                        "value"
                    ]);
                    this.input = this._param = new mo({
                        context: this.context,
                        convert: t.convert,
                        multiplier: t.multiplier,
                        param: this._constantSource.offset,
                        units: t.units,
                        value: t.value
                    });
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                ticksToTime(t, e) {
                    return this._param.ticksToTime(t, e);
                }
                timeToTicks(t, e) {
                    return this._param.timeToTicks(t, e);
                }
                getTimeOfTick(t) {
                    return this._param.getTimeOfTick(t);
                }
                getDurationOfTicks(t, e) {
                    return this._param.getDurationOfTicks(t, e);
                }
                getTicksAtTime(t) {
                    return this._param.getTicksAtTime(t);
                }
                get multiplier() {
                    return this._param.multiplier;
                }
                set multiplier(t) {
                    this._param.multiplier = t;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this;
                }
            }
            class vo extends so {
                constructor(){
                    super(pi(vo.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "TickSource", this._state = new no, this._tickOffset = new bi, this._ticksAtTime = new bi, this._secondsAtTime = new bi;
                    const t = pi(vo.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new go({
                        context: this.context,
                        units: t.units,
                        value: t.frequency
                    }), Mi(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.setTicksAtTime(0, 0);
                }
                static getDefaults() {
                    return Object.assign({
                        frequency: 1,
                        units: "hertz"
                    }, so.getDefaults());
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                start(t, e) {
                    const s = this.toSeconds(t);
                    return "started" !== this._state.getValueAtTime(s) && (this._state.setStateAtTime("started", s), In(e) && this.setTicksAtTime(e, s), this._ticksAtTime.cancel(s), this._secondsAtTime.cancel(s)), this;
                }
                stop(t) {
                    const e = this.toSeconds(t);
                    if ("stopped" === this._state.getValueAtTime(e)) {
                        const t = this._state.get(e);
                        t && t.time > 0 && (this._tickOffset.cancel(t.time), this._state.cancel(t.time));
                    }
                    return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this.setTicksAtTime(0, e), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e), this;
                }
                pause(t) {
                    const e = this.toSeconds(t);
                    return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e)), this;
                }
                cancel(t) {
                    return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this._ticksAtTime.cancel(t), this._secondsAtTime.cancel(t), this;
                }
                getTicksAtTime(t229) {
                    const e130 = this.toSeconds(t229), s85 = this._state.getLastState("stopped", e130), n = this._ticksAtTime.get(e130), i = {
                        state: "paused",
                        time: e130
                    };
                    this._state.add(i);
                    let o = n || s85, r = n ? n.ticks : 0, a = null;
                    return this._state.forEachBetween(o.time, e130 + this.sampleTime, (t)=>{
                        let e = o.time;
                        const s = this._tickOffset.get(t.time);
                        s && s.time >= o.time && (r = s.ticks, e = s.time), "started" === o.state && "started" !== t.state && (r += this.frequency.getTicksAtTime(t.time) - this.frequency.getTicksAtTime(e), t.time != i.time && (a = {
                            state: t.state,
                            time: t.time,
                            ticks: r
                        })), o = t;
                    }), this._state.remove(i), a && this._ticksAtTime.add(a), r;
                }
                get ticks() {
                    return this.getTicksAtTime(this.now());
                }
                set ticks(t) {
                    this.setTicksAtTime(t, this.now());
                }
                get seconds() {
                    return this.getSecondsAtTime(this.now());
                }
                set seconds(t) {
                    const e = this.now(), s = this.frequency.timeToTicks(t, e);
                    this.setTicksAtTime(s, e);
                }
                getSecondsAtTime(t230) {
                    t230 = this.toSeconds(t230);
                    const e131 = this._state.getLastState("stopped", t230), s = {
                        state: "paused",
                        time: t230
                    };
                    this._state.add(s);
                    const n49 = this._secondsAtTime.get(t230);
                    let i = n49 || e131, o = n49 ? n49.seconds : 0, r = null;
                    return this._state.forEachBetween(i.time, t230 + this.sampleTime, (t)=>{
                        let e = i.time;
                        const n = this._tickOffset.get(t.time);
                        n && n.time >= i.time && (o = n.seconds, e = n.time), "started" === i.state && "started" !== t.state && (o += t.time - e, t.time != s.time && (r = {
                            state: t.state,
                            time: t.time,
                            seconds: o
                        })), i = t;
                    }), this._state.remove(s), r && this._secondsAtTime.add(r), o;
                }
                setTicksAtTime(t, e) {
                    return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
                        seconds: this.frequency.getDurationOfTicks(t, e),
                        ticks: t,
                        time: e
                    }), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e), this;
                }
                getStateAtTime(t) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t);
                }
                getTimeOfTick(t, e = this.now()) {
                    const s = this._tickOffset.get(e), n = this._state.get(e), i = Math.max(s.time, n.time), o = this.frequency.getTicksAtTime(i) + t - s.ticks;
                    return this.frequency.getTimeOfTick(o);
                }
                forEachTickBetween(t, e132, s) {
                    let n = this._state.get(t);
                    this._state.forEachBetween(t, e132, (e)=>{
                        n && "started" === n.state && "started" !== e.state && this.forEachTickBetween(Math.max(n.time, t), e.time - this.sampleTime, s), n = e;
                    });
                    let i = null;
                    if (n && "started" === n.state) {
                        const o = Math.max(n.time, t), r = this.frequency.getTicksAtTime(o), a = r - this.frequency.getTicksAtTime(n.time);
                        let c = Math.ceil(a) - a;
                        c = xi(c, 1) ? 0 : c;
                        let h = this.frequency.getTimeOfTick(r + c);
                        for(; h < e132;){
                            try {
                                s(h, Math.round(this.getTicksAtTime(h)));
                            } catch (t) {
                                i = t;
                                break;
                            }
                            h += this.frequency.getDurationOfTicks(1, h);
                        }
                    }
                    if (i) throw i;
                    return this;
                }
                dispose() {
                    return super.dispose(), this._state.dispose(), this._tickOffset.dispose(), this._ticksAtTime.dispose(), this._secondsAtTime.dispose(), this.frequency.dispose(), this;
                }
            }
            class yo extends so {
                constructor(){
                    super(pi(yo.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ])), this.name = "Clock", this.callback = Ri, this._lastUpdate = 0, this._state = new no("stopped"), this._boundLoop = this._loop.bind(this);
                    const t = pi(yo.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ]);
                    this.callback = t.callback, this._tickSource = new vo({
                        context: this.context,
                        frequency: t.frequency,
                        units: t.units
                    }), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, Mi(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.context.on("tick", this._boundLoop);
                }
                static getDefaults() {
                    return Object.assign(so.getDefaults(), {
                        callback: Ri,
                        frequency: 1,
                        units: "hertz"
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.now());
                }
                start(t, e) {
                    Gn(this.context);
                    const s = this.toSeconds(t);
                    return this.log("start", s), "started" !== this._state.getValueAtTime(s) && (this._state.setStateAtTime("started", s), this._tickSource.start(s, e), s < this._lastUpdate && this.emit("start", s, e)), this;
                }
                stop(t) {
                    const e = this.toSeconds(t);
                    return this.log("stop", e), this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this;
                }
                pause(t) {
                    const e = this.toSeconds(t);
                    return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this;
                }
                get ticks() {
                    return Math.ceil(this.getTicksAtTime(this.now()));
                }
                set ticks(t) {
                    this._tickSource.ticks = t;
                }
                get seconds() {
                    return this._tickSource.seconds;
                }
                set seconds(t) {
                    this._tickSource.seconds = t;
                }
                getSecondsAtTime(t) {
                    return this._tickSource.getSecondsAtTime(t);
                }
                setTicksAtTime(t, e) {
                    return this._tickSource.setTicksAtTime(t, e), this;
                }
                getTimeOfTick(t, e = this.now()) {
                    return this._tickSource.getTimeOfTick(t, e);
                }
                getTicksAtTime(t) {
                    return this._tickSource.getTicksAtTime(t);
                }
                nextTickTime(t, e) {
                    const s = this.toSeconds(e), n = this.getTicksAtTime(s);
                    return this._tickSource.getTimeOfTick(n + t, s);
                }
                _loop() {
                    const t231 = this._lastUpdate, e133 = this.now();
                    this._lastUpdate = e133, this.log("loop", t231, e133), t231 !== e133 && (this._state.forEachBetween(t231, e133, (t)=>{
                        switch(t.state){
                            case "started":
                                const e = this._tickSource.getTicksAtTime(t.time);
                                this.emit("start", t.time, e);
                                break;
                            case "stopped":
                                0 !== t.time && this.emit("stop", t.time);
                                break;
                            case "paused":
                                this.emit("pause", t.time);
                        }
                    }), this._tickSource.forEachTickBetween(t231, e133, (t, e)=>{
                        this.callback(t, e);
                    }));
                }
                getStateAtTime(t) {
                    const e = this.toSeconds(t);
                    return this._state.getValueAtTime(e);
                }
                dispose() {
                    return super.dispose(), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this;
                }
            }
            Ci.mixin(yo);
            class xo extends oo {
                constructor(){
                    super(pi(xo.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ])), this.name = "Delay";
                    const t = pi(xo.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ]), e = this.toSeconds(t.maxDelay);
                    this._maxDelay = Math.max(e, this.toSeconds(t.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(e), this.delayTime = new io({
                        context: this.context,
                        param: this._delayNode.delayTime,
                        units: "time",
                        value: t.delayTime,
                        minValue: 0,
                        maxValue: this.maxDelay
                    }), Mi(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        delayTime: 0,
                        maxDelay: 1
                    });
                }
                get maxDelay() {
                    return this._maxDelay;
                }
                dispose() {
                    return super.dispose(), this._delayNode.disconnect(), this.delayTime.dispose(), this;
                }
            }
            function wo(t, e, s = 2, n = Ni().sampleRate) {
                return ni(this, void 0, void 0, function*() {
                    const i = Ni(), o = new Fi(s, e, n);
                    Pi(o), yield t(o);
                    const r = o.render();
                    Pi(i);
                    const a = yield r;
                    return new qi(a);
                });
            }
            class bo extends _i {
                constructor(){
                    super(), this.name = "ToneAudioBuffers", this._buffers = new Map, this._loadingCount = 0;
                    const t = pi(bo.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls");
                    this.baseUrl = t.baseUrl, Object.keys(t.urls).forEach((e)=>{
                        this._loadingCount++;
                        const s = t.urls[e];
                        this.add(e, s, this._bufferLoaded.bind(this, t.onload), t.onerror);
                    });
                }
                static getDefaults() {
                    return {
                        baseUrl: "",
                        onerror: Ri,
                        onload: Ri,
                        urls: {
                        }
                    };
                }
                has(t) {
                    return this._buffers.has(t.toString());
                }
                get(t) {
                    return Bn(this.has(t), `ToneAudioBuffers has no buffer named: ${t}`), this._buffers.get(t.toString());
                }
                _bufferLoaded(t) {
                    this._loadingCount--, 0 === this._loadingCount && t && t();
                }
                get loaded() {
                    return Array.from(this._buffers).every(([t, e])=>e.loaded
                    );
                }
                add(t, e, s = Ri, n = Ri) {
                    return zn(e) ? (this.baseUrl && "data:audio/" === e.trim().substring(0, 11).toLowerCase() && (this.baseUrl = ""), this._buffers.set(t.toString(), new qi(this.baseUrl + e, s, n))) : this._buffers.set(t.toString(), new qi(e, s, n)), this;
                }
                dispose() {
                    return super.dispose(), this._buffers.forEach((t)=>t.dispose()
                    ), this._buffers.clear(), this;
                }
            }
            class To extends $i {
                constructor(){
                    super(...arguments), this.name = "MidiClass", this.defaultUnits = "midi";
                }
                _frequencyToUnits(t) {
                    return Ui(super._frequencyToUnits(t));
                }
                _ticksToUnits(t) {
                    return Ui(super._ticksToUnits(t));
                }
                _beatsToUnits(t) {
                    return Ui(super._beatsToUnits(t));
                }
                _secondsToUnits(t) {
                    return Ui(super._secondsToUnits(t));
                }
                toMidi() {
                    return this.valueOf();
                }
                toFrequency() {
                    return Qi(this.toMidi());
                }
                transpose(t) {
                    return new To(this.context, this.toMidi() + t);
                }
            }
            function So(t, e) {
                return new To(Ni(), t, e);
            }
            class ko extends to {
                constructor(){
                    super(...arguments), this.name = "Ticks", this.defaultUnits = "i";
                }
                _now() {
                    return this.context.transport.ticks;
                }
                _beatsToUnits(t) {
                    return this._getPPQ() * t;
                }
                _secondsToUnits(t) {
                    return Math.floor(t / (60 / this._getBpm()) * this._getPPQ());
                }
                _ticksToUnits(t) {
                    return t;
                }
                toTicks() {
                    return this.valueOf();
                }
                toSeconds() {
                    return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
                }
            }
            function Ao(t, e) {
                return new ko(Ni(), t, e);
            }
            class Co extends so {
                constructor(){
                    super(...arguments), this.name = "Draw", this.expiration = 0.25, this.anticipation = 0.008, this._events = new bi, this._boundDrawLoop = this._drawLoop.bind(this), this._animationFrame = -1;
                }
                schedule(t, e) {
                    return this._events.add({
                        callback: t,
                        time: this.toSeconds(e)
                    }), 1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this;
                }
                cancel(t) {
                    return this._events.cancel(this.toSeconds(t)), this;
                }
                _drawLoop() {
                    const t = this.context.currentTime;
                    for(; this._events.length && this._events.peek().time - this.anticipation <= t;){
                        const e = this._events.shift();
                        e && t - e.time <= this.expiration && e.callback();
                    }
                    this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this;
                }
            }
            Si((t)=>{
                t.draw = new Co({
                    context: t
                });
            }), Ai((t)=>{
                t.draw.dispose();
            });
            class Do extends _i {
                constructor(){
                    super(...arguments), this.name = "IntervalTimeline", this._root = null, this._length = 0;
                }
                add(t) {
                    Bn(In(t.time), "Events must have a time property"), Bn(In(t.duration), "Events must have a duration parameter"), t.time = t.time.valueOf();
                    let e = new Oo(t.time, t.time + t.duration, t);
                    for(null === this._root ? this._root = e : this._root.insert(e), this._length++; null !== e;)e.updateHeight(), e.updateMax(), this._rebalance(e), e = e.parent;
                    return this;
                }
                remove(t) {
                    if (null !== this._root) {
                        const e = [];
                        this._root.search(t.time, e);
                        for (const s of e)if (s.event === t) {
                            this._removeNode(s), this._length--;
                            break;
                        }
                    }
                    return this;
                }
                get length() {
                    return this._length;
                }
                cancel(t232) {
                    return this.forEachFrom(t232, (t)=>this.remove(t)
                    ), this;
                }
                _setRoot(t) {
                    this._root = t, null !== this._root && (this._root.parent = null);
                }
                _replaceNodeInParent(t, e) {
                    null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e);
                }
                _removeNode(t) {
                    if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
                    else if (null === t.right) this._replaceNodeInParent(t, t.left);
                    else if (null === t.left) this._replaceNodeInParent(t, t.right);
                    else {
                        let e, s = null;
                        if (t.getBalance() > 0) {
                            if (null === t.left.right) e = t.left, e.right = t.right, s = e;
                            else {
                                for(e = t.left.right; null !== e.right;)e = e.right;
                                e.parent && (e.parent.right = e.left, s = e.parent, e.left = t.left, e.right = t.right);
                            }
                        } else if (null === t.right.left) e = t.right, e.left = t.left, s = e;
                        else {
                            for(e = t.right.left; null !== e.left;)e = e.left;
                            e.parent && (e.parent.left = e.right, s = e.parent, e.left = t.left, e.right = t.right);
                        }
                        null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), s && this._rebalance(s);
                    }
                    t.dispose();
                }
                _rotateLeft(t) {
                    const e = t.parent, s = t.isLeftChild(), n = t.right;
                    n && (t.right = n.left, n.left = t), null !== e ? s ? e.left = n : e.right = n : this._setRoot(n);
                }
                _rotateRight(t) {
                    const e = t.parent, s = t.isLeftChild(), n = t.left;
                    n && (t.left = n.right, n.right = t), null !== e ? s ? e.left = n : e.right = n : this._setRoot(n);
                }
                _rebalance(t) {
                    const e = t.getBalance();
                    e > 1 && t.left ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && t.right && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t));
                }
                get(t) {
                    if (null !== this._root) {
                        const e = [];
                        if (this._root.search(t, e), e.length > 0) {
                            let t = e[0];
                            for(let s = 1; s < e.length; s++)e[s].low > t.low && (t = e[s]);
                            return t.event;
                        }
                    }
                    return null;
                }
                forEach(t233) {
                    if (null !== this._root) {
                        const e134 = [];
                        this._root.traverse((t)=>e134.push(t)
                        ), e134.forEach((e)=>{
                            e.event && t233(e.event);
                        });
                    }
                    return this;
                }
                forEachAtTime(t234, e) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.search(t234, s), s.forEach((t)=>{
                            t.event && e(t.event);
                        });
                    }
                    return this;
                }
                forEachFrom(t235, e) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.searchAfter(t235, s), s.forEach((t)=>{
                            t.event && e(t.event);
                        });
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), null !== this._root && this._root.traverse((t)=>t.dispose()
                    ), this._root = null, this;
                }
            }
            class Oo {
                constructor(t, e, s){
                    this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = s, this.low = t, this.high = e, this.max = this.high;
                }
                insert(t) {
                    t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t);
                }
                search(t, e) {
                    t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e));
                }
                searchAfter(t, e) {
                    this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e);
                }
                traverse(t) {
                    t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t);
                }
                updateHeight() {
                    null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0;
                }
                updateMax() {
                    this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
                }
                getBalance() {
                    let t = 0;
                    return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t;
                }
                isLeftChild() {
                    return null !== this.parent && this.parent.left === this;
                }
                get left() {
                    return this._left;
                }
                set left(t) {
                    this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
                }
                get right() {
                    return this._right;
                }
                set right(t) {
                    this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
                }
                dispose() {
                    this.parent = null, this._left = null, this._right = null, this.event = null;
                }
            }
            class Mo extends oo {
                constructor(){
                    super(pi(Mo.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "Volume";
                    const t = pi(Mo.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this.input = this.output = new lo({
                        context: this.context,
                        gain: t.volume,
                        units: "decibels"
                    }), this.volume = this.output.gain, Mi(this, "volume"), this._unmutedVolume = t.volume, this.mute = t.mute;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.volume.value === -1 / 0;
                }
                set mute(t) {
                    !this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
                }
            }
            class Eo extends oo {
                constructor(){
                    super(pi(Eo.getDefaults(), arguments)), this.name = "Destination", this.input = new Mo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this.volume = this.input.volume;
                    const t = pi(Eo.getDefaults(), arguments);
                    ro(this.input, this.output, this.context.rawContext.destination), this.mute = t.mute, this._internalChannels = [
                        this.input,
                        this.context.rawContext.destination,
                        this.output
                    ];
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.input.mute;
                }
                set mute(t) {
                    this.input.mute = t;
                }
                chain(...t) {
                    return this.input.disconnect(), t.unshift(this.input), t.push(this.output), ro(...t), this;
                }
                get maxChannelCount() {
                    return this.context.rawContext.destination.maxChannelCount;
                }
                dispose() {
                    return super.dispose(), this.volume.dispose(), this;
                }
            }
            Si((t)=>{
                t.destination = new Eo({
                    context: t
                });
            }), Ai((t)=>{
                t.destination.dispose();
            });
            class Ro extends _i {
                constructor(t){
                    super(), this.name = "TimelineValue", this._timeline = new bi({
                        memory: 10
                    }), this._initialValue = t;
                }
                set(t, e) {
                    return this._timeline.add({
                        value: t,
                        time: e
                    }), this;
                }
                get(t) {
                    const e = this._timeline.get(t);
                    return e ? e.value : this._initialValue;
                }
            }
            class qo {
                constructor(t, e){
                    this.id = qo._eventId++, this._remainderTime = 0;
                    const s = Object.assign(qo.getDefaults(), e);
                    this.transport = t, this.callback = s.callback, this._once = s.once, this.time = Math.floor(s.time), this._remainderTime = s.time - this.time;
                }
                static getDefaults() {
                    return {
                        callback: Ri,
                        once: !1,
                        time: 0
                    };
                }
                get floatTime() {
                    return this.time + this._remainderTime;
                }
                invoke(t) {
                    if (this.callback) {
                        const e = this.transport.bpm.getDurationOfTicks(1, t);
                        this.callback(t + this._remainderTime * e), this._once && this.transport.clear(this.id);
                    }
                }
                dispose() {
                    return this.callback = void 0, this;
                }
            }
            qo._eventId = 0;
            class Fo extends qo {
                constructor(t, e){
                    super(t, e), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this);
                    const s = Object.assign(Fo.getDefaults(), e);
                    this.duration = s.duration, this._interval = s.interval, this._nextTick = s.time, this.transport.on("start", this._boundRestart), this.transport.on("loopStart", this._boundRestart), this.transport.on("ticks", this._boundRestart), this.context = this.transport.context, this._restart();
                }
                static getDefaults() {
                    return Object.assign({
                    }, qo.getDefaults(), {
                        duration: 1 / 0,
                        interval: 1,
                        once: !1
                    });
                }
                invoke(t) {
                    this._createEvents(t), super.invoke(t);
                }
                _createEvent() {
                    return yi(this._nextTick, this.floatTime + this.duration) ? this.transport.scheduleOnce(this.invoke.bind(this), new ko(this.context, this._nextTick).toSeconds()) : -1;
                }
                _createEvents(t) {
                    yi(this._nextTick + this._interval, this.floatTime + this.duration) && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new ko(this.context, this._nextTick).toSeconds()));
                }
                _restart(t) {
                    this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.floatTime;
                    const e = this.transport.getTicksAtTime(t);
                    gi(e, this.time) && (this._nextTick = this.floatTime + Math.ceil((e - this.floatTime) / this._interval) * this._interval), this._currentId = this._createEvent(), this._nextTick += this._interval, this._nextId = this._createEvent();
                }
                dispose() {
                    return super.dispose(), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this.transport.off("ticks", this._boundRestart), this;
                }
            }
            class Io extends so {
                constructor(){
                    super(pi(Io.getDefaults(), arguments)), this.name = "Transport", this._loop = new Ro(!1), this._loopStart = 0, this._loopEnd = 0, this._scheduledEvents = {
                    }, this._timeline = new bi, this._repeatedEvents = new Do, this._syncedSignals = [], this._swingAmount = 0;
                    const t = pi(Io.getDefaults(), arguments);
                    this._ppq = t.ppq, this._clock = new yo({
                        callback: this._processTick.bind(this),
                        context: this.context,
                        frequency: 0,
                        units: "bpm"
                    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this._clock.frequency.multiplier = t.ppq, this.bpm.setValueAtTime(t.bpm, 0), Mi(this, "bpm"), this._timeSignature = t.timeSignature, this._swingTicks = t.ppq / 2;
                }
                static getDefaults() {
                    return Object.assign(so.getDefaults(), {
                        bpm: 120,
                        loopEnd: "4m",
                        loopStart: 0,
                        ppq: 192,
                        swing: 0,
                        swingSubdivision: "8n",
                        timeSignature: 4
                    });
                }
                _processTick(t, e136) {
                    if (this._loop.get(t) && e136 >= this._loopEnd && (this.emit("loopEnd", t), this._clock.setTicksAtTime(this._loopStart, t), e136 = this._loopStart, this.emit("loopStart", t, this._clock.getSecondsAtTime(t)), this.emit("loop", t)), this._swingAmount > 0 && e136 % this._ppq != 0 && e136 % (2 * this._swingTicks) != 0) {
                        const s = e136 % (2 * this._swingTicks) / (2 * this._swingTicks), n = Math.sin(s * Math.PI) * this._swingAmount;
                        t += new ko(this.context, 2 * this._swingTicks / 3).toSeconds() * n;
                    }
                    Xn(!0), this._timeline.forEachAtTime(e136, (e)=>e.invoke(t)
                    ), Xn(!1);
                }
                schedule(t, e) {
                    const s = new qo(this, {
                        callback: t,
                        time: new to(this.context, e).toTicks()
                    });
                    return this._addEvent(s, this._timeline);
                }
                scheduleRepeat(t, e, s, n = 1 / 0) {
                    const i = new Fo(this, {
                        callback: t,
                        duration: new Xi(this.context, n).toTicks(),
                        interval: new Xi(this.context, e).toTicks(),
                        time: new to(this.context, s).toTicks()
                    });
                    return this._addEvent(i, this._repeatedEvents);
                }
                scheduleOnce(t, e) {
                    const s = new qo(this, {
                        callback: t,
                        once: !0,
                        time: new to(this.context, e).toTicks()
                    });
                    return this._addEvent(s, this._timeline);
                }
                clear(t) {
                    if (this._scheduledEvents.hasOwnProperty(t)) {
                        const e = this._scheduledEvents[t.toString()];
                        e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()];
                    }
                    return this;
                }
                _addEvent(t, e) {
                    return this._scheduledEvents[t.id.toString()] = {
                        event: t,
                        timeline: e
                    }, e.add(t), t.id;
                }
                cancel(t236 = 0) {
                    const e = this.toTicks(t236);
                    return this._timeline.forEachFrom(e, (t)=>this.clear(t.id)
                    ), this._repeatedEvents.forEachFrom(e, (t)=>this.clear(t.id)
                    ), this;
                }
                _bindClockEvents() {
                    this._clock.on("start", (t, e)=>{
                        e = new ko(this.context, e).toSeconds(), this.emit("start", t, e);
                    }), this._clock.on("stop", (t)=>{
                        this.emit("stop", t);
                    }), this._clock.on("pause", (t)=>{
                        this.emit("pause", t);
                    });
                }
                get state() {
                    return this._clock.getStateAtTime(this.now());
                }
                start(t, e) {
                    let s;
                    return this.context.resume(), In(e) && (s = this.toTicks(e)), this._clock.start(t, s), this;
                }
                stop(t) {
                    return this._clock.stop(t), this;
                }
                pause(t) {
                    return this._clock.pause(t), this;
                }
                toggle(t) {
                    return t = this.toSeconds(t), "started" !== this._clock.getStateAtTime(t) ? this.start(t) : this.stop(t), this;
                }
                get timeSignature() {
                    return this._timeSignature;
                }
                set timeSignature(t) {
                    Ln(t) && (t = t[0] / t[1] * 4), this._timeSignature = t;
                }
                get loopStart() {
                    return new Xi(this.context, this._loopStart, "i").toSeconds();
                }
                set loopStart(t) {
                    this._loopStart = this.toTicks(t);
                }
                get loopEnd() {
                    return new Xi(this.context, this._loopEnd, "i").toSeconds();
                }
                set loopEnd(t) {
                    this._loopEnd = this.toTicks(t);
                }
                get loop() {
                    return this._loop.get(this.now());
                }
                set loop(t) {
                    this._loop.set(t, this.now());
                }
                setLoopPoints(t, e) {
                    return this.loopStart = t, this.loopEnd = e, this;
                }
                get swing() {
                    return this._swingAmount;
                }
                set swing(t) {
                    this._swingAmount = t;
                }
                get swingSubdivision() {
                    return new ko(this.context, this._swingTicks).toNotation();
                }
                set swingSubdivision(t) {
                    this._swingTicks = this.toTicks(t);
                }
                get position() {
                    const t = this.now(), e = this._clock.getTicksAtTime(t);
                    return new ko(this.context, e).toBarsBeatsSixteenths();
                }
                set position(t) {
                    const e = this.toTicks(t);
                    this.ticks = e;
                }
                get seconds() {
                    return this._clock.seconds;
                }
                set seconds(t) {
                    const e = this.now(), s = this._clock.frequency.timeToTicks(t, e);
                    this.ticks = s;
                }
                get progress() {
                    if (this.loop) {
                        const t = this.now();
                        return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart);
                    }
                    return 0;
                }
                get ticks() {
                    return this._clock.ticks;
                }
                set ticks(t) {
                    if (this._clock.ticks !== t) {
                        const e = this.now();
                        if ("started" === this.state) {
                            const s = this._clock.getTicksAtTime(e), n = e + this._clock.frequency.getDurationOfTicks(Math.ceil(s) - s, e);
                            this.emit("stop", n), this._clock.setTicksAtTime(t, n), this.emit("start", n, this._clock.getSecondsAtTime(n));
                        } else this.emit("ticks", e), this._clock.setTicksAtTime(t, e);
                    }
                }
                getTicksAtTime(t) {
                    return this._clock.getTicksAtTime(t);
                }
                getSecondsAtTime(t) {
                    return this._clock.getSecondsAtTime(t);
                }
                get PPQ() {
                    return this._clock.frequency.multiplier;
                }
                set PPQ(t) {
                    this._clock.frequency.multiplier = t;
                }
                nextSubdivision(t) {
                    if (t = this.toTicks(t), "started" !== this.state) return 0;
                    {
                        const e = this.now(), s = t - this.getTicksAtTime(e) % t;
                        return this._clock.nextTickTime(s, e);
                    }
                }
                syncSignal(t, e) {
                    if (!e) {
                        const s = this.now();
                        if (0 !== t.getValueAtTime(s)) {
                            const n = 1 / (60 / this.bpm.getValueAtTime(s) / this.PPQ);
                            e = t.getValueAtTime(s) / n;
                        } else e = 0;
                    }
                    const s = new lo(e);
                    return this.bpm.connect(s), s.connect(t._param), this._syncedSignals.push({
                        initial: t.value,
                        ratio: s,
                        signal: t
                    }), t.value = 0, this;
                }
                unsyncSignal(t) {
                    for(let e = this._syncedSignals.length - 1; e >= 0; e--){
                        const s = this._syncedSignals[e];
                        s.signal === t && (s.ratio.dispose(), s.signal.value = s.initial, this._syncedSignals.splice(e, 1));
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._clock.dispose(), Ei(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this;
                }
            }
            Ci.mixin(Io), Si((t)=>{
                t.transport = new Io({
                    context: t
                });
            }), Ai((t)=>{
                t.transport.dispose();
            });
            class Vo extends oo {
                constructor(t){
                    super(t), this.input = void 0, this._state = new no("stopped"), this._synced = !1, this._scheduled = [], this._syncedStart = Ri, this._syncedStop = Ri, this._state.memory = 100, this._state.increasing = !0, this._volume = this.output = new Mo({
                        context: this.context,
                        mute: t.mute,
                        volume: t.volume
                    }), this.volume = this._volume.volume, Mi(this, "volume"), this.onstop = t.onstop;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mute: !1,
                        onstop: Ri,
                        volume: 0
                    });
                }
                get state() {
                    return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now());
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t) {
                    this._volume.mute = t;
                }
                _clampToCurrentTime(t) {
                    return this._synced ? t : Math.max(t, this.context.currentTime);
                }
                start(t, e, s) {
                    let n = Fn(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
                    if (n = this._clampToCurrentTime(n), this._synced || "started" !== this._state.getValueAtTime(n)) {
                        if (this.log("start", n), this._state.setStateAtTime("started", n), this._synced) {
                            const t237 = this._state.get(n);
                            t237 && (t237.offset = this.toSeconds(di(e, 0)), t237.duration = s ? this.toSeconds(s) : void 0);
                            const i = this.context.transport.schedule((t)=>{
                                this._start(t, e, s);
                            }, n);
                            this._scheduled.push(i), "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > n && this._syncedStart(this.now(), this.context.transport.seconds);
                        } else Gn(this.context), this._start(n, e, s);
                    } else Bn(gi(n, this._state.get(n).time), "Start time must be strictly greater than previous start time"), this._state.cancel(n), this._state.setStateAtTime("started", n), this.log("restart", n), this.restart(n, e, s);
                    return this;
                }
                stop(t) {
                    let e = Fn(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
                    if (e = this._clampToCurrentTime(e), "started" === this._state.getValueAtTime(e) || In(this._state.getNextState("started", e))) {
                        if (this.log("stop", e), this._synced) {
                            const t = this.context.transport.schedule(this._stop.bind(this), e);
                            this._scheduled.push(t);
                        } else this._stop(e);
                        this._state.cancel(e), this._state.setStateAtTime("stopped", e);
                    }
                    return this;
                }
                restart(t, e, s) {
                    return t = this.toSeconds(t), "started" === this._state.getValueAtTime(t) && (this._state.cancel(t), this._restart(t, e, s)), this;
                }
                sync() {
                    return this._synced || (this._synced = !0, this._syncedStart = (t, e)=>{
                        if (gi(e, 0)) {
                            const s = this._state.get(e);
                            if (s && "started" === s.state && s.time !== e) {
                                const n = e - this.toSeconds(s.time);
                                let i;
                                s.duration && (i = this.toSeconds(s.duration) - n), this._start(t, this.toSeconds(s.offset) + n, i);
                            }
                        }
                    }, this._syncedStop = (t)=>{
                        const e = this.context.transport.getSecondsAtTime(Math.max(t - this.sampleTime, 0));
                        "started" === this._state.getValueAtTime(e) && this._stop(t);
                    }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this;
                }
                unsync() {
                    return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach((t)=>this.context.transport.clear(t)
                    ), this._scheduled = [], this._state.cancel(0), this._stop(0), this;
                }
                dispose() {
                    return super.dispose(), this.onstop = Ri, this.unsync(), this._volume.dispose(), this._state.dispose(), this;
                }
            }
            class No extends uo {
                constructor(){
                    super(pi(No.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "ToneBufferSource", this._source = this.context.createBufferSource(), this._internalChannels = [
                        this._source
                    ], this._sourceStarted = !1, this._sourceStopped = !1;
                    const t = pi(No.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    ao(this._source, this._gainNode), this._source.onended = ()=>this._stopSource()
                    , this.playbackRate = new io({
                        context: this.context,
                        param: this._source.playbackRate,
                        units: "positive",
                        value: t.playbackRate
                    }), this.loop = t.loop, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this._buffer = new qi(t.url, t.onload, t.onerror), this._internalChannels.push(this._source);
                }
                static getDefaults() {
                    return Object.assign(uo.getDefaults(), {
                        url: new qi,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ri,
                        onerror: Ri,
                        playbackRate: 1
                    });
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t) {
                    this._fadeIn = t;
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t) {
                    this._fadeOut = t;
                }
                get curve() {
                    return this._curve;
                }
                set curve(t) {
                    this._curve = t;
                }
                start(t, e, s, n = 1) {
                    Bn(this.buffer.loaded, "buffer is either not set or not loaded");
                    const i = this.toSeconds(t);
                    this._startGain(i, n), e = this.loop ? di(e, this.loopStart) : di(e, 0);
                    let o = Math.max(this.toSeconds(e), 0);
                    if (this.loop) {
                        const t = this.toSeconds(this.loopEnd) || this.buffer.duration, e = this.toSeconds(this.loopStart), s = t - e;
                        vi(o, t) && (o = (o - e) % s + e), xi(o, this.buffer.duration) && (o = 0);
                    }
                    if (this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, yi(o, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(i, o)), In(s)) {
                        let t = this.toSeconds(s);
                        t = Math.max(t, 0), this.stop(i + t);
                    }
                    return this;
                }
                _stopSource(t) {
                    !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(t)), this._onended());
                }
                get loopStart() {
                    return this._source.loopStart;
                }
                set loopStart(t) {
                    this._source.loopStart = this.toSeconds(t);
                }
                get loopEnd() {
                    return this._source.loopEnd;
                }
                set loopEnd(t) {
                    this._source.loopEnd = this.toSeconds(t);
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t) {
                    this._buffer.set(t);
                }
                get loop() {
                    return this._source.loop;
                }
                set loop(t) {
                    this._source.loop = t, this._sourceStarted && this.cancelStop();
                }
                dispose() {
                    return super.dispose(), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this;
                }
            }
            class Po extends Vo {
                constructor(){
                    super(pi(Po.getDefaults(), arguments, [
                        "type"
                    ])), this.name = "Noise", this._source = null;
                    const t = pi(Po.getDefaults(), arguments, [
                        "type"
                    ]);
                    this._playbackRate = t.playbackRate, this.type = t.type, this._fadeIn = t.fadeIn, this._fadeOut = t.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        fadeIn: 0,
                        fadeOut: 0,
                        playbackRate: 1,
                        type: "white"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    if (Bn(t in zo, "Noise: invalid type: " + t), this._type !== t && (this._type = t, "started" === this.state)) {
                        const t = this.now();
                        this._stop(t), this._start(t);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t) {
                    this._playbackRate = t, this._source && (this._source.playbackRate.value = t);
                }
                _start(t) {
                    const e = zo[this._type];
                    this._source = new No({
                        url: e,
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        loop: !0,
                        onended: ()=>this.onstop(this)
                        ,
                        playbackRate: this._playbackRate
                    }).connect(this.output), this._source.start(this.toSeconds(t), Math.random() * (e.duration - 0.001));
                }
                _stop(t) {
                    this._source && (this._source.stop(this.toSeconds(t)), this._source = null);
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t) {
                    this._fadeIn = t, this._source && (this._source.fadeIn = this._fadeIn);
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t) {
                    this._fadeOut = t, this._source && (this._source.fadeOut = this._fadeOut);
                }
                _restart(t) {
                    this._stop(t), this._start(t);
                }
                dispose() {
                    return super.dispose(), this._source && this._source.disconnect(), this;
                }
            }
            const jo = 220500, Lo = {
                brown: null,
                pink: null,
                white: null
            }, zo = {
                get brown () {
                    if (!Lo.brown) {
                        const t = [];
                        for(let e = 0; e < 2; e++){
                            const s = new Float32Array(jo);
                            t[e] = s;
                            let n = 0;
                            for(let t239 = 0; t239 < jo; t239++){
                                const e = 2 * Math.random() - 1;
                                s[t239] = (n + 0.02 * e) / 1.02, n = s[t239], s[t239] *= 3.5;
                            }
                        }
                        Lo.brown = (new qi).fromArray(t);
                    }
                    return Lo.brown;
                },
                get pink () {
                    if (!Lo.pink) {
                        const t = [];
                        for(let e = 0; e < 2; e++){
                            const s = new Float32Array(jo);
                            let n, i, o, r, a, c, h;
                            t[e] = s, n = i = o = r = a = c = h = 0;
                            for(let t240 = 0; t240 < jo; t240++){
                                const e = 2 * Math.random() - 1;
                                n = 0.99886 * n + 0.0555179 * e, i = 0.99332 * i + 0.0750759 * e, o = 0.969 * o + 0.153852 * e, r = 0.8665 * r + 0.3104856 * e, a = 0.55 * a + 0.5329522 * e, c = -0.7616 * c - 0.016898 * e, s[t240] = n + i + o + r + a + c + h + 0.5362 * e, s[t240] *= 0.11, h = 0.115926 * e;
                            }
                        }
                        Lo.pink = (new qi).fromArray(t);
                    }
                    return Lo.pink;
                },
                get white () {
                    if (!Lo.white) {
                        const t = [];
                        for(let e = 0; e < 2; e++){
                            const s = new Float32Array(jo);
                            t[e] = s;
                            for(let t241 = 0; t241 < jo; t241++)s[t241] = 2 * Math.random() - 1;
                        }
                        Lo.white = (new qi).fromArray(t);
                    }
                    return Lo.white;
                }
            };
            class Wo extends oo {
                constructor(){
                    super(pi(Wo.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "UserMedia";
                    const t = pi(Wo.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this._volume = this.output = new Mo({
                        context: this.context,
                        volume: t.volume
                    }), this.volume = this._volume.volume, Mi(this, "volume"), this.mute = t.mute;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                open(t242) {
                    return ni(this, void 0, void 0, function*() {
                        Bn(Wo.supported, "UserMedia is not supported"), "started" === this.state && this.close();
                        const e137 = yield Wo.enumerateDevices();
                        Nn(t242) ? this._device = e137[t242] : (this._device = e137.find((e)=>e.label === t242 || e.deviceId === t242
                        ), !this._device && e137.length > 0 && (this._device = e137[0]), Bn(In(this._device), `No matching device ${t242}`));
                        const s = {
                            audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                            }
                        };
                        this._device && (s.audio.deviceId = this._device.deviceId);
                        const n = yield navigator.mediaDevices.getUserMedia(s);
                        if (!this._stream) {
                            this._stream = n;
                            const t = this.context.createMediaStreamSource(n);
                            ao(t, this.output), this._mediaStream = t;
                        }
                        return this;
                    });
                }
                close() {
                    return this._stream && this._mediaStream && (this._stream.getAudioTracks().forEach((t)=>{
                        t.stop();
                    }), this._stream = void 0, this._mediaStream.disconnect(), this._mediaStream = void 0), this._device = void 0, this;
                }
                static enumerateDevices() {
                    return ni(this, void 0, void 0, function*() {
                        return (yield navigator.mediaDevices.enumerateDevices()).filter((t)=>"audioinput" === t.kind
                        );
                    });
                }
                get state() {
                    return this._stream && this._stream.active ? "started" : "stopped";
                }
                get deviceId() {
                    return this._device ? this._device.deviceId : void 0;
                }
                get groupId() {
                    return this._device ? this._device.groupId : void 0;
                }
                get label() {
                    return this._device ? this._device.label : void 0;
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t) {
                    this._volume.mute = t;
                }
                dispose() {
                    return super.dispose(), this.close(), this._volume.dispose(), this.volume.dispose(), this;
                }
                static get supported() {
                    return In(navigator.mediaDevices) && In(navigator.mediaDevices.getUserMedia);
                }
            }
            function Bo(t, e) {
                return ni(this, void 0, void 0, function*() {
                    const s = e / t.context.sampleRate, n = new Fi(1, s, t.context.sampleRate);
                    return new t.constructor(Object.assign(t.get(), {
                        frequency: 2 / s,
                        detune: 0,
                        context: n
                    })).toDestination().start(0), (yield n.render()).getChannelData(0);
                });
            }
            class Uo extends uo {
                constructor(){
                    super(pi(Uo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "ToneOscillatorNode", this._oscillator = this.context.createOscillator(), this._internalChannels = [
                        this._oscillator
                    ];
                    const t = pi(Uo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    ao(this._oscillator, this._gainNode), this.type = t.type, this.frequency = new io({
                        context: this.context,
                        param: this._oscillator.frequency,
                        units: "frequency",
                        value: t.frequency
                    }), this.detune = new io({
                        context: this.context,
                        param: this._oscillator.detune,
                        units: "cents",
                        value: t.detune
                    }), Mi(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(uo.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        type: "sine"
                    });
                }
                start(t) {
                    const e = this.toSeconds(t);
                    return this.log("start", e), this._startGain(e), this._oscillator.start(e), this;
                }
                _stopSource(t) {
                    this._oscillator.stop(t);
                }
                setPeriodicWave(t) {
                    return this._oscillator.setPeriodicWave(t), this;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t) {
                    this._oscillator.type = t;
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            class Go extends Vo {
                constructor(){
                    super(pi(Go.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "Oscillator", this._oscillator = null;
                    const t = pi(Go.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }), Mi(this, "frequency"), this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), Mi(this, "detune"), this._partials = t.partials, this._partialCount = t.partialCount, this._type = t.type, t.partialCount && "custom" !== t.type && (this._type = this.baseType + t.partialCount.toString()), this.phase = t.phase;
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        partialCount: 0,
                        partials: [],
                        phase: 0,
                        type: "sine"
                    });
                }
                _start(t) {
                    const e = this.toSeconds(t), s = new Uo({
                        context: this.context,
                        onended: ()=>this.onstop(this)
                    });
                    this._oscillator = s, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(e);
                }
                _stop(t) {
                    const e = this.toSeconds(t);
                    this._oscillator && this._oscillator.stop(e);
                }
                _restart(t) {
                    const e = this.toSeconds(t);
                    return this.log("restart", e), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(e), this;
                }
                syncFrequency() {
                    return this.context.transport.syncSignal(this.frequency), this;
                }
                unsyncFrequency() {
                    return this.context.transport.unsyncSignal(this.frequency), this;
                }
                _getCachedPeriodicWave() {
                    if ("custom" === this._type) return Go._periodicWaveCache.find((t243)=>{
                        var e, s;
                        return t243.phase === this._phase && (e = t243.partials, s = this._partials, e.length === s.length && e.every((t, e)=>s[e] === t
                        ));
                    });
                    {
                        const t244 = Go._periodicWaveCache.find((t)=>t.type === this._type && t.phase === this._phase
                        );
                        return this._partialCount = t244 ? t244.partialCount : this._partialCount, t244;
                    }
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    this._type = t;
                    const e = -1 !== [
                        "sine",
                        "square",
                        "sawtooth",
                        "triangle"
                    ].indexOf(t);
                    if (0 === this._phase && e) this._wave = void 0, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t);
                    else {
                        const e = this._getCachedPeriodicWave();
                        if (In(e)) {
                            const { partials: t , wave: s  } = e;
                            this._wave = s, this._partials = t, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave);
                        } else {
                            const [e, s] = this._getRealImaginary(t, this._phase), n = this.context.createPeriodicWave(e, s);
                            this._wave = n, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), Go._periodicWaveCache.push({
                                imag: s,
                                partialCount: this._partialCount,
                                partials: this._partials,
                                phase: this._phase,
                                real: e,
                                type: this._type,
                                wave: this._wave
                            }), Go._periodicWaveCache.length > 100 && Go._periodicWaveCache.shift();
                        }
                    }
                }
                get baseType() {
                    return this._type.replace(this.partialCount.toString(), "");
                }
                set baseType(t) {
                    this.partialCount && "custom" !== this._type && "custom" !== t ? this.type = t + this.partialCount : this.type = t;
                }
                get partialCount() {
                    return this._partialCount;
                }
                set partialCount(t246) {
                    Un(t246, 0);
                    let e = this._type;
                    const s = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    if (s && (e = s[1]), "custom" !== this._type) this.type = 0 === t246 ? e : e + t246.toString();
                    else {
                        const e = new Float32Array(t246);
                        this._partials.forEach((t, s)=>e[s] = t
                        ), this._partials = Array.from(e), this.type = this._type;
                    }
                }
                _getRealImaginary(t, e) {
                    let s = 2048;
                    const n = new Float32Array(s), i = new Float32Array(s);
                    let o = 1;
                    if ("custom" === t) {
                        if (o = this._partials.length + 1, this._partialCount = this._partials.length, s = o, 0 === this._partials.length) return [
                            n,
                            i
                        ];
                    } else {
                        const e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                        e ? (o = parseInt(e[2], 10) + 1, this._partialCount = parseInt(e[2], 10), t = e[1], o = Math.max(o, 2), s = o) : this._partialCount = 0, this._partials = [];
                    }
                    for(let r = 1; r < s; ++r){
                        const s = 2 / (r * Math.PI);
                        let a;
                        switch(t){
                            case "sine":
                                a = r <= o ? 1 : 0, this._partials[r - 1] = a;
                                break;
                            case "square":
                                a = 1 & r ? 2 * s : 0, this._partials[r - 1] = a;
                                break;
                            case "sawtooth":
                                a = s * (1 & r ? 1 : -1), this._partials[r - 1] = a;
                                break;
                            case "triangle":
                                a = 1 & r ? s * s * 2 * (r - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[r - 1] = a;
                                break;
                            case "custom":
                                a = this._partials[r - 1];
                                break;
                            default:
                                throw new TypeError("Oscillator: invalid type: " + t);
                        }
                        0 !== a ? (n[r] = -a * Math.sin(e * r), i[r] = a * Math.cos(e * r)) : (n[r] = 0, i[r] = 0);
                    }
                    return [
                        n,
                        i
                    ];
                }
                _inverseFFT(t, e, s) {
                    let n = 0;
                    const i = t.length;
                    for(let o = 0; o < i; o++)n += t[o] * Math.cos(o * s) + e[o] * Math.sin(o * s);
                    return n;
                }
                getInitialValue() {
                    const [t, e] = this._getRealImaginary(this._type, 0);
                    let s = 0;
                    const n = 2 * Math.PI;
                    for(let i = 0; i < 32; i++)s = Math.max(this._inverseFFT(t, e, i / 32 * n), s);
                    return wi(-this._inverseFFT(t, e, this._phase) / s, -1, 1);
                }
                get partials() {
                    return this._partials.slice(0, this.partialCount);
                }
                set partials(t) {
                    this._partials = t, this._partialCount = this._partials.length, t.length && (this.type = "custom");
                }
                get phase() {
                    return this._phase * (180 / Math.PI);
                }
                set phase(t) {
                    this._phase = t * Math.PI / 180, this.type = this._type;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), null !== this._oscillator && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            Go._periodicWaveCache = [];
            class Qo extends oo {
                constructor(){
                    super(Object.assign(pi(Qo.getDefaults(), arguments, [
                        "context"
                    ])));
                }
                connect(t, e = 0, s = 0) {
                    return _o(this, t, e, s), this;
                }
            }
            class Zo extends Qo {
                constructor(){
                    super(Object.assign(pi(Zo.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]))), this.name = "WaveShaper", this._shaper = this.context.createWaveShaper(), this.input = this._shaper, this.output = this._shaper;
                    const t = pi(Zo.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]);
                    Ln(t.mapping) || t.mapping instanceof Float32Array ? this.curve = Float32Array.from(t.mapping) : Vn(t.mapping) && this.setMap(t.mapping, t.length);
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        length: 1024
                    });
                }
                setMap(t, e = 1024) {
                    const s = new Float32Array(e);
                    for(let n = 0, i = e; n < i; n++){
                        const e = n / (i - 1) * 2 - 1;
                        s[n] = t(e, n);
                    }
                    return this.curve = s, this;
                }
                get curve() {
                    return this._shaper.curve;
                }
                set curve(t) {
                    this._shaper.curve = t;
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t) {
                    Bn([
                        "none",
                        "2x",
                        "4x"
                    ].some((e)=>e.includes(t)
                    ), "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = t;
                }
                dispose() {
                    return super.dispose(), this._shaper.disconnect(), this;
                }
            }
            class Xo extends Qo {
                constructor(){
                    super(...arguments), this.name = "AudioToGain", this._norm = new Zo({
                        context: this.context,
                        mapping: (t)=>(t + 1) / 2
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class Yo extends fo {
                constructor(){
                    super(Object.assign(pi(Yo.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Multiply", this.override = !1;
                    const t = pi(Yo.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._mult = this.input = this.output = new lo({
                        context: this.context,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }), this.factor = this._param = this._mult.gain, this.factor.setValueAtTime(t.value, 0);
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._mult.dispose(), this;
                }
            }
            class $o extends Vo {
                constructor(){
                    super(pi($o.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "AMOscillator", this._modulationScale = new Xo({
                        context: this.context
                    }), this._modulationNode = new lo({
                        context: this.context
                    });
                    const t = pi($o.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new Go({
                        context: this.context,
                        detune: t.detune,
                        frequency: t.frequency,
                        onstop: ()=>this.onstop(this)
                        ,
                        phase: t.phase,
                        type: t.type
                    }), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this._modulator = new Go({
                        context: this.context,
                        phase: t.phase,
                        type: t.modulationType
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }), this.frequency.chain(this.harmonicity, this._modulator.frequency), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), Mi(this, [
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Go.getDefaults(), {
                        harmonicity: 1,
                        modulationType: "square"
                    });
                }
                _start(t) {
                    this._modulator.start(t), this._carrier.start(t);
                }
                _stop(t) {
                    this._modulator.stop(t), this._carrier.stop(t);
                }
                _restart(t) {
                    this._modulator.restart(t), this._carrier.restart(t);
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t) {
                    this._carrier.type = t;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t) {
                    this._carrier.baseType = t;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t) {
                    this._carrier.partialCount = t;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t) {
                    this._modulator.type = t;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t) {
                    this._carrier.phase = t, this._modulator.phase = t;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t) {
                    this._carrier.partials = t;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Ho extends Vo {
                constructor(){
                    super(pi(Ho.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "FMOscillator", this._modulationNode = new lo({
                        context: this.context,
                        gain: 0
                    });
                    const t = pi(Ho.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new Go({
                        context: this.context,
                        detune: t.detune,
                        frequency: 0,
                        onstop: ()=>this.onstop(this)
                        ,
                        phase: t.phase,
                        type: t.type
                    }), this.detune = this._carrier.detune, this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }), this._modulator = new Go({
                        context: this.context,
                        phase: t.phase,
                        type: t.modulationType
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }), this.modulationIndex = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), Mi(this, [
                        "modulationIndex",
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Go.getDefaults(), {
                        harmonicity: 1,
                        modulationIndex: 2,
                        modulationType: "square"
                    });
                }
                _start(t) {
                    this._modulator.start(t), this._carrier.start(t);
                }
                _stop(t) {
                    this._modulator.stop(t), this._carrier.stop(t);
                }
                _restart(t) {
                    return this._modulator.restart(t), this._carrier.restart(t), this;
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t) {
                    this._carrier.type = t;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t) {
                    this._carrier.baseType = t;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t) {
                    this._carrier.partialCount = t;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t) {
                    this._modulator.type = t;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t) {
                    this._carrier.phase = t, this._modulator.phase = t;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t) {
                    this._carrier.partials = t;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            class Jo extends Vo {
                constructor(){
                    super(pi(Jo.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ])), this.name = "PulseOscillator", this._widthGate = new lo({
                        context: this.context,
                        gain: 0
                    }), this._thresh = new Zo({
                        context: this.context,
                        mapping: (t)=>t <= 0 ? -1 : 1
                    });
                    const t247 = pi(Jo.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ]);
                    this.width = new fo({
                        context: this.context,
                        units: "audioRange",
                        value: t247.width
                    }), this._triangle = new Go({
                        context: this.context,
                        detune: t247.detune,
                        frequency: t247.frequency,
                        onstop: ()=>this.onstop(this)
                        ,
                        phase: t247.phase,
                        type: "triangle"
                    }), this.frequency = this._triangle.frequency, this.detune = this._triangle.detune, this._triangle.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), Mi(this, [
                        "width",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        phase: 0,
                        type: "pulse",
                        width: 0.2
                    });
                }
                _start(t) {
                    t = this.toSeconds(t), this._triangle.start(t), this._widthGate.gain.setValueAtTime(1, t);
                }
                _stop(t) {
                    t = this.toSeconds(t), this._triangle.stop(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(0, t);
                }
                _restart(t) {
                    this._triangle.restart(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(1, t);
                }
                get phase() {
                    return this._triangle.phase;
                }
                set phase(t) {
                    this._triangle.phase = t;
                }
                get type() {
                    return "pulse";
                }
                get baseType() {
                    return "pulse";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                set carrierType(t) {
                    this._triangle.type = t;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this;
                }
            }
            class Ko extends Vo {
                constructor(){
                    super(pi(Ko.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ])), this.name = "FatOscillator", this._oscillators = [];
                    const t = pi(Ko.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ]);
                    this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }), this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), this._spread = t.spread, this._type = t.type, this._phase = t.phase, this._partials = t.partials, this._partialCount = t.partialCount, this.count = t.count, Mi(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Go.getDefaults(), {
                        count: 3,
                        spread: 20,
                        type: "sawtooth"
                    });
                }
                _start(t) {
                    t = this.toSeconds(t), this._forEach((e)=>e.start(t)
                    );
                }
                _stop(t) {
                    t = this.toSeconds(t), this._forEach((e)=>e.stop(t)
                    );
                }
                _restart(t) {
                    this._forEach((e)=>e.restart(t)
                    );
                }
                _forEach(t) {
                    for(let e = 0; e < this._oscillators.length; e++)t(this._oscillators[e], e);
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    this._type = t, this._forEach((e)=>e.type = t
                    );
                }
                get spread() {
                    return this._spread;
                }
                set spread(t248) {
                    if (this._spread = t248, this._oscillators.length > 1) {
                        const e = -t248 / 2, s = t248 / (this._oscillators.length - 1);
                        this._forEach((t, n)=>t.detune.value = e + s * n
                        );
                    }
                }
                get count() {
                    return this._oscillators.length;
                }
                set count(t249) {
                    if (Un(t249, 1), this._oscillators.length !== t249) {
                        this._forEach((t)=>t.dispose()
                        ), this._oscillators = [];
                        for(let e = 0; e < t249; e++){
                            const s = new Go({
                                context: this.context,
                                volume: -6 - 1.1 * t249,
                                type: this._type,
                                phase: this._phase + e / t249 * 360,
                                partialCount: this._partialCount,
                                onstop: 0 === e ? ()=>this.onstop(this)
                                 : Ri
                            });
                            "custom" === this.type && (s.partials = this._partials), this.frequency.connect(s.frequency), this.detune.connect(s.detune), s.detune.overridden = !1, s.connect(this.output), this._oscillators[e] = s;
                        }
                        this.spread = this._spread, "started" === this.state && this._forEach((t)=>t.start()
                        );
                    }
                }
                get phase() {
                    return this._phase;
                }
                set phase(t250) {
                    this._phase = t250, this._forEach((t, e)=>t.phase = this._phase + e / this.count * 360
                    );
                }
                get baseType() {
                    return this._oscillators[0].baseType;
                }
                set baseType(t) {
                    this._forEach((e)=>e.baseType = t
                    ), this._type = this._oscillators[0].type;
                }
                get partials() {
                    return this._oscillators[0].partials;
                }
                set partials(t) {
                    this._partials = t, this._partialCount = this._partials.length, t.length && (this._type = "custom", this._forEach((e)=>e.partials = t
                    ));
                }
                get partialCount() {
                    return this._oscillators[0].partialCount;
                }
                set partialCount(t) {
                    this._partialCount = t, this._forEach((e)=>e.partialCount = t
                    ), this._type = this._oscillators[0].type;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this._forEach((t)=>t.dispose()
                    ), this;
                }
            }
            class tr extends Vo {
                constructor(){
                    super(pi(tr.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ])), this.name = "PWMOscillator", this.sourceType = "pwm", this._scale = new Yo({
                        context: this.context,
                        value: 2
                    });
                    const t = pi(tr.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ]);
                    this._pulse = new Jo({
                        context: this.context,
                        frequency: t.modulationFrequency
                    }), this._pulse.carrierType = "sine", this.modulationFrequency = this._pulse.frequency, this._modulator = new Go({
                        context: this.context,
                        detune: t.detune,
                        frequency: t.frequency,
                        onstop: ()=>this.onstop(this)
                        ,
                        phase: t.phase
                    }), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), Mi(this, [
                        "modulationFrequency",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        modulationFrequency: 0.4,
                        phase: 0,
                        type: "pwm"
                    });
                }
                _start(t) {
                    t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t);
                }
                _stop(t) {
                    t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t);
                }
                _restart(t) {
                    this._modulator.restart(t), this._pulse.restart(t);
                }
                get type() {
                    return "pwm";
                }
                get baseType() {
                    return "pwm";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                get phase() {
                    return this._modulator.phase;
                }
                set phase(t) {
                    this._modulator.phase = t;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this;
                }
            }
            const er = {
                am: $o,
                fat: Ko,
                fm: Ho,
                oscillator: Go,
                pulse: Jo,
                pwm: tr
            };
            class sr extends Vo {
                constructor(){
                    super(pi(sr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OmniOscillator";
                    const t = pi(sr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }), this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), Mi(this, [
                        "frequency",
                        "detune"
                    ]), this.set(t);
                }
                static getDefaults() {
                    return Object.assign(Go.getDefaults(), Ho.getDefaults(), $o.getDefaults(), Ko.getDefaults(), Jo.getDefaults(), tr.getDefaults());
                }
                _start(t) {
                    this._oscillator.start(t);
                }
                _stop(t) {
                    this._oscillator.stop(t);
                }
                _restart(t) {
                    return this._oscillator.restart(t), this;
                }
                get type() {
                    let t251 = "";
                    return [
                        "am",
                        "fm",
                        "fat"
                    ].some((t)=>this._sourceType === t
                    ) && (t251 = this._sourceType), t251 + this._oscillator.type;
                }
                set type(t) {
                    "fm" === t.substr(0, 2) ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(3)) : "pwm" === t ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : "pulse" === t ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = t);
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t);
                }
                get partialCount() {
                    return this._oscillator.partialCount;
                }
                set partialCount(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t);
                }
                set(t) {
                    return Reflect.has(t, "type") && t.type && (this.type = t.type), super.set(t), this;
                }
                _createNewOscillator(t) {
                    if (t !== this._sourceType) {
                        this._sourceType = t;
                        const e = er[t], s = this.now();
                        if (this._oscillator) {
                            const t = this._oscillator;
                            t.stop(s), this.context.setTimeout(()=>t.dispose()
                            , this.blockTime);
                        }
                        this._oscillator = new e({
                            context: this.context
                        }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = ()=>this.onstop(this)
                        , "started" === this.state && this._oscillator.start(s);
                    }
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t) {
                    this._oscillator.phase = t;
                }
                get sourceType() {
                    return this._sourceType;
                }
                set sourceType(t) {
                    let e = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), "fm" === t ? this.type = "fm" + e : "am" === t ? this.type = "am" + e : "fat" === t ? this.type = "fat" + e : "oscillator" === t ? this.type = e : "pulse" === t ? this.type = "pulse" : "pwm" === t && (this.type = "pwm");
                }
                _getOscType(t, e) {
                    return t instanceof er[e];
                }
                get baseType() {
                    return this._oscillator.baseType;
                }
                set baseType(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t || "pwm" === t || (this._oscillator.baseType = t);
                }
                get width() {
                    return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0;
                }
                get count() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0;
                }
                set count(t) {
                    this._getOscType(this._oscillator, "fat") && Nn(t) && (this._oscillator.count = t);
                }
                get spread() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0;
                }
                set spread(t) {
                    this._getOscType(this._oscillator, "fat") && Nn(t) && (this._oscillator.spread = t);
                }
                get modulationType() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0;
                }
                set modulationType(t) {
                    (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && zn(t) && (this._oscillator.modulationType = t);
                }
                get modulationIndex() {
                    return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0;
                }
                get harmonicity() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0;
                }
                get modulationFrequency() {
                    return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Bo(this, t);
                    });
                }
                dispose() {
                    return super.dispose(), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this;
                }
            }
            class nr extends fo {
                constructor(){
                    super(Object.assign(pi(nr.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Add", this._sum = new lo({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this.addend = this._param, ro(this._constantSource, this._sum);
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._sum.dispose(), this;
                }
            }
            class ir extends Qo {
                constructor(){
                    super(Object.assign(pi(ir.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]))), this.name = "Scale";
                    const t = pi(ir.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]);
                    this._mult = this.input = new Yo({
                        context: this.context,
                        value: t.max - t.min
                    }), this._add = this.output = new nr({
                        context: this.context,
                        value: t.min
                    }), this._min = t.min, this._max = t.max, this.input.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(Qo.getDefaults(), {
                        max: 1,
                        min: 0
                    });
                }
                get min() {
                    return this._min;
                }
                set min(t) {
                    this._min = t, this._setRange();
                }
                get max() {
                    return this._max;
                }
                set max(t) {
                    this._max = t, this._setRange();
                }
                _setRange() {
                    this._add.value = this._min, this._mult.value = this._max - this._min;
                }
                dispose() {
                    return super.dispose(), this._add.dispose(), this._mult.dispose(), this;
                }
            }
            class or extends Qo {
                constructor(){
                    super(Object.assign(pi(or.getDefaults(), arguments))), this.name = "Zero", this._gain = new lo({
                        context: this.context
                    }), this.output = this._gain, this.input = void 0, ao(this.context.getConstant(0), this._gain);
                }
                dispose() {
                    return super.dispose(), co(this.context.getConstant(0), this._gain), this;
                }
            }
            class rr extends oo {
                constructor(){
                    super(pi(rr.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ])), this.name = "LFO", this._stoppedValue = 0, this._units = "number", this.convert = !0, this._fromType = io.prototype._fromType, this._toType = io.prototype._toType, this._is = io.prototype._is, this._clampValue = io.prototype._clampValue;
                    const t = pi(rr.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ]);
                    this._oscillator = new Go(t), this.frequency = this._oscillator.frequency, this._amplitudeGain = new lo({
                        context: this.context,
                        gain: t.amplitude,
                        units: "normalRange"
                    }), this.amplitude = this._amplitudeGain.gain, this._stoppedSignal = new fo({
                        context: this.context,
                        units: "audioRange",
                        value: 0
                    }), this._zeros = new or({
                        context: this.context
                    }), this._a2g = new Xo({
                        context: this.context
                    }), this._scaler = this.output = new ir({
                        context: this.context,
                        max: t.max,
                        min: t.min
                    }), this.units = t.units, this.min = t.min, this.max = t.max, this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), Mi(this, [
                        "amplitude",
                        "frequency"
                    ]), this.phase = t.phase;
                }
                static getDefaults() {
                    return Object.assign(Go.getDefaults(), {
                        amplitude: 1,
                        frequency: "4n",
                        max: 1,
                        min: 0,
                        type: "sine",
                        units: "number"
                    });
                }
                start(t) {
                    return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(0, t), this._oscillator.start(t), this;
                }
                stop(t) {
                    return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(this._stoppedValue, t), this._oscillator.stop(t), this;
                }
                sync() {
                    return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
                }
                unsync() {
                    return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
                }
                _setStoppedValue() {
                    this._stoppedValue = this._oscillator.getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
                }
                get min() {
                    return this._toType(this._scaler.min);
                }
                set min(t) {
                    t = this._fromType(t), this._scaler.min = t;
                }
                get max() {
                    return this._toType(this._scaler.max);
                }
                set max(t) {
                    t = this._fromType(t), this._scaler.max = t;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t) {
                    this._oscillator.type = t, this._setStoppedValue();
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t) {
                    this._oscillator.partials = t, this._setStoppedValue();
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t) {
                    this._oscillator.phase = t, this._setStoppedValue();
                }
                get units() {
                    return this._units;
                }
                set units(t) {
                    const e = this.min, s = this.max;
                    this._units = t, this.min = e, this.max = s;
                }
                get state() {
                    return this._oscillator.state;
                }
                connect(t, e, s) {
                    return (t instanceof io || t instanceof fo) && (this.convert = t.convert, this.units = t.units), _o(this, t, e, s), this;
                }
                dispose() {
                    return super.dispose(), this._oscillator.dispose(), this._stoppedSignal.dispose(), this._zeros.dispose(), this._scaler.dispose(), this._a2g.dispose(), this._amplitudeGain.dispose(), this.amplitude.dispose(), this;
                }
            }
            function ar(t, e = 1 / 0) {
                const s = new WeakMap;
                return function(n50, i) {
                    Reflect.defineProperty(n50, i, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return s.get(this);
                        },
                        set: function(n) {
                            Un(n, t, e), s.set(this, n);
                        }
                    });
                };
            }
            function cr(t, e = 1 / 0) {
                const s = new WeakMap;
                return function(n51, i) {
                    Reflect.defineProperty(n51, i, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return s.get(this);
                        },
                        set: function(n) {
                            Un(this.toSeconds(n), t, e), s.set(this, n);
                        }
                    });
                };
            }
            class hr extends Vo {
                constructor(){
                    super(pi(hr.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Player", this._activeSources = new Set;
                    const t = pi(hr.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new qi({
                        onload: this._onload.bind(this, t.onload),
                        onerror: t.onerror,
                        reverse: t.reverse,
                        url: t.url
                    }), this.autostart = t.autostart, this._loop = t.loop, this._loopStart = t.loopStart, this._loopEnd = t.loopEnd, this._playbackRate = t.playbackRate, this.fadeIn = t.fadeIn, this.fadeOut = t.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        autostart: !1,
                        fadeIn: 0,
                        fadeOut: 0,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ri,
                        onerror: Ri,
                        playbackRate: 1,
                        reverse: !1
                    });
                }
                load(t) {
                    return ni(this, void 0, void 0, function*() {
                        return yield this._buffer.load(t), this._onload(), this;
                    });
                }
                _onload(t = Ri) {
                    t(), this.autostart && this.start();
                }
                _onSourceEnd(t) {
                    this.onstop(this), this._activeSources.delete(t), 0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()), this._state.setStateAtTime("stopped", this.now()));
                }
                start(t, e, s) {
                    return super.start(t, e, s), this;
                }
                _start(t, e, s) {
                    e = this._loop ? di(e, this._loopStart) : di(e, 0);
                    const n = this.toSeconds(e), i = s;
                    s = di(s, Math.max(this._buffer.duration - n, 0));
                    let o = this.toSeconds(s);
                    o /= this._playbackRate, t = this.toSeconds(t);
                    const r = new No({
                        url: this._buffer,
                        context: this.context,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut,
                        loop: this._loop,
                        loopEnd: this._loopEnd,
                        loopStart: this._loopStart,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output);
                    this._loop || this._synced || (this._state.cancel(t + o), this._state.setStateAtTime("stopped", t + o, {
                        implicitEnd: !0
                    })), this._activeSources.add(r), this._loop && Fn(i) ? r.start(t, n) : r.start(t, n, o - this.toSeconds(this.fadeOut));
                }
                _stop(t252) {
                    const e = this.toSeconds(t252);
                    this._activeSources.forEach((t)=>t.stop(e)
                    );
                }
                restart(t, e, s) {
                    return super.restart(t, e, s), this;
                }
                _restart(t, e, s) {
                    this._stop(t), this._start(t, e, s);
                }
                seek(t, e) {
                    const s = this.toSeconds(e);
                    if ("started" === this._state.getValueAtTime(s)) {
                        const e = this.toSeconds(t);
                        this._stop(s), this._start(s, e);
                    }
                    return this;
                }
                setLoopPoints(t, e) {
                    return this.loopStart = t, this.loopEnd = e, this;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t) {
                    this._loopStart = t, this.buffer.loaded && Un(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach((e)=>{
                        e.loopStart = t;
                    });
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t) {
                    this._loopEnd = t, this.buffer.loaded && Un(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach((e)=>{
                        e.loopEnd = t;
                    });
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t) {
                    this._buffer.set(t);
                }
                get loop() {
                    return this._loop;
                }
                set loop(t) {
                    if (this._loop !== t && (this._loop = t, this._activeSources.forEach((e)=>{
                        e.loop = t;
                    }), t)) {
                        const t = this._state.getNextState("stopped", this.now());
                        t && this._state.cancel(t.time);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t253) {
                    this._playbackRate = t253;
                    const e = this.now(), s86 = this._state.getNextState("stopped", e);
                    s86 && s86.implicitEnd && (this._state.cancel(s86.time), this._activeSources.forEach((t)=>t.cancelStop()
                    )), this._activeSources.forEach((s)=>{
                        s.playbackRate.setValueAtTime(t253, e);
                    });
                }
                get reverse() {
                    return this._buffer.reverse;
                }
                set reverse(t) {
                    this._buffer.reverse = t;
                }
                get loaded() {
                    return this._buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this._activeSources.forEach((t)=>t.dispose()
                    ), this._activeSources.clear(), this._buffer.dispose(), this;
                }
            }
            si([
                cr(0)
            ], hr.prototype, "fadeIn", void 0), si([
                cr(0)
            ], hr.prototype, "fadeOut", void 0);
            class lr extends oo {
                constructor(){
                    super(pi(lr.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls")), this.name = "Players", this.input = void 0, this._players = new Map;
                    const t = pi(lr.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls");
                    this._volume = this.output = new Mo({
                        context: this.context,
                        volume: t.volume
                    }), this.volume = this._volume.volume, Mi(this, "volume"), this._buffers = new bo({
                        urls: t.urls,
                        onload: t.onload,
                        baseUrl: t.baseUrl,
                        onerror: t.onerror
                    }), this.mute = t.mute, this._fadeIn = t.fadeIn, this._fadeOut = t.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        baseUrl: "",
                        fadeIn: 0,
                        fadeOut: 0,
                        mute: !1,
                        onload: Ri,
                        onerror: Ri,
                        urls: {
                        },
                        volume: 0
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t) {
                    this._volume.mute = t;
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t) {
                    this._fadeIn = t, this._players.forEach((e)=>{
                        e.fadeIn = t;
                    });
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t) {
                    this._fadeOut = t, this._players.forEach((e)=>{
                        e.fadeOut = t;
                    });
                }
                get state() {
                    return Array.from(this._players).some(([t, e])=>"started" === e.state
                    ) ? "started" : "stopped";
                }
                has(t) {
                    return this._buffers.has(t);
                }
                player(t) {
                    if (Bn(this.has(t), `No Player with the name ${t} exists on this object`), !this._players.has(t)) {
                        const e = new hr({
                            context: this.context,
                            fadeIn: this._fadeIn,
                            fadeOut: this._fadeOut,
                            url: this._buffers.get(t)
                        }).connect(this.output);
                        this._players.set(t, e);
                    }
                    return this._players.get(t);
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                add(t, e, s) {
                    return Bn(!this._buffers.has(t), "A buffer with that name already exists on this object"), this._buffers.add(t, e, s), this;
                }
                stopAll(t) {
                    return this._players.forEach((e)=>e.stop(t)
                    ), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.volume.dispose(), this._players.forEach((t)=>t.dispose()
                    ), this._buffers.dispose(), this;
                }
            }
            class ur extends Vo {
                constructor(){
                    super(pi(ur.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "GrainPlayer", this._loopStart = 0, this._loopEnd = 0, this._activeSources = [];
                    const t = pi(ur.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this.buffer = new qi({
                        onload: t.onload,
                        onerror: t.onerror,
                        reverse: t.reverse,
                        url: t.url
                    }), this._clock = new yo({
                        context: this.context,
                        callback: this._tick.bind(this),
                        frequency: 1 / t.grainSize
                    }), this._playbackRate = t.playbackRate, this._grainSize = t.grainSize, this._overlap = t.overlap, this.detune = t.detune, this.overlap = t.overlap, this.loop = t.loop, this.playbackRate = t.playbackRate, this.grainSize = t.grainSize, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this.reverse = t.reverse, this._clock.on("stop", this._onstop.bind(this));
                }
                static getDefaults() {
                    return Object.assign(Vo.getDefaults(), {
                        onload: Ri,
                        onerror: Ri,
                        overlap: 0.1,
                        grainSize: 0.2,
                        playbackRate: 1,
                        detune: 0,
                        loop: !1,
                        loopStart: 0,
                        loopEnd: 0,
                        reverse: !1
                    });
                }
                _start(t, e, s) {
                    e = di(e, 0), e = this.toSeconds(e), t = this.toSeconds(t);
                    const n = 1 / this._clock.frequency.getValueAtTime(t);
                    this._clock.start(t, e / n), s && this.stop(t + this.toSeconds(s));
                }
                restart(t, e, s) {
                    return super.restart(t, e, s), this;
                }
                _restart(t, e, s) {
                    this._stop(t), this._start(t, e, s);
                }
                _stop(t) {
                    this._clock.stop(t);
                }
                _onstop(t) {
                    this._activeSources.forEach((e)=>{
                        e.fadeOut = 0, e.stop(t);
                    }), this.onstop(this);
                }
                _tick(t254) {
                    const e = this._clock.getTicksAtTime(t254), s = e * this._grainSize;
                    if (this.log("offset", s), !this.loop && s > this.buffer.duration) return void this.stop(t254);
                    const n = s < this._overlap ? 0 : this._overlap, i = new No({
                        context: this.context,
                        url: this.buffer,
                        fadeIn: n,
                        fadeOut: this._overlap,
                        loop: this.loop,
                        loopStart: this._loopStart,
                        loopEnd: this._loopEnd,
                        playbackRate: Wi(this.detune / 100)
                    }).connect(this.output);
                    i.start(t254, this._grainSize * e), i.stop(t254 + this._grainSize / this.playbackRate), this._activeSources.push(i), i.onended = ()=>{
                        const t = this._activeSources.indexOf(i);
                        -1 !== t && this._activeSources.splice(t, 1);
                    };
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t) {
                    Un(t, 0.001), this._playbackRate = t, this.grainSize = this._grainSize;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t) {
                    this.buffer.loaded && Un(this.toSeconds(t), 0, this.buffer.duration), this._loopStart = this.toSeconds(t);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t) {
                    this.buffer.loaded && Un(this.toSeconds(t), 0, this.buffer.duration), this._loopEnd = this.toSeconds(t);
                }
                get reverse() {
                    return this.buffer.reverse;
                }
                set reverse(t) {
                    this.buffer.reverse = t;
                }
                get grainSize() {
                    return this._grainSize;
                }
                set grainSize(t) {
                    this._grainSize = this.toSeconds(t), this._clock.frequency.setValueAtTime(this._playbackRate / this._grainSize, this.now());
                }
                get overlap() {
                    return this._overlap;
                }
                set overlap(t) {
                    const e = this.toSeconds(t);
                    Un(e, 0), this._overlap = e;
                }
                get loaded() {
                    return this.buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this.buffer.dispose(), this._clock.dispose(), this._activeSources.forEach((t)=>t.dispose()
                    ), this;
                }
            }
            class pr extends Qo {
                constructor(){
                    super(...arguments), this.name = "Abs", this._abs = new Zo({
                        context: this.context,
                        mapping: (t)=>Math.abs(t) < 0.001 ? 0 : Math.abs(t)
                    }), this.input = this._abs, this.output = this._abs;
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this;
                }
            }
            class dr extends Qo {
                constructor(){
                    super(...arguments), this.name = "GainToAudio", this._norm = new Zo({
                        context: this.context,
                        mapping: (t)=>2 * Math.abs(t) - 1
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class fr extends Qo {
                constructor(){
                    super(...arguments), this.name = "Negate", this._multiply = new Yo({
                        context: this.context,
                        value: -1
                    }), this.input = this._multiply, this.output = this._multiply;
                }
                dispose() {
                    return super.dispose(), this._multiply.dispose(), this;
                }
            }
            class _r extends fo {
                constructor(){
                    super(Object.assign(pi(_r.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Subtract", this._sum = new lo({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this._neg = new fr({
                        context: this.context
                    }), this.subtrahend = this._param, ro(this._constantSource, this._neg, this._sum);
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._neg.dispose(), this._sum.dispose(), this;
                }
            }
            class mr extends Qo {
                constructor(){
                    super(Object.assign(pi(mr.getDefaults(), arguments))), this.name = "GreaterThanZero", this._thresh = this.output = new Zo({
                        context: this.context,
                        length: 127,
                        mapping: (t)=>t <= 0 ? 0 : 1
                    }), this._scale = this.input = new Yo({
                        context: this.context,
                        value: 10000
                    }), this._scale.connect(this._thresh);
                }
                dispose() {
                    return super.dispose(), this._scale.dispose(), this._thresh.dispose(), this;
                }
            }
            class gr extends fo {
                constructor(){
                    super(Object.assign(pi(gr.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "GreaterThan", this.override = !1;
                    const t = pi(gr.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._subtract = this.input = new _r({
                        context: this.context,
                        value: t.value
                    }), this._gtz = this.output = new mr({
                        context: this.context
                    }), this.comparator = this._param = this._subtract.subtrahend, Mi(this, "comparator"), this._subtract.connect(this._gtz);
                }
                static getDefaults() {
                    return Object.assign(fo.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._gtz.dispose(), this._subtract.dispose(), this.comparator.dispose(), this;
                }
            }
            class vr extends Qo {
                constructor(){
                    super(Object.assign(pi(vr.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Pow";
                    const t = pi(vr.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._exponentScaler = this.input = this.output = new Zo({
                        context: this.context,
                        mapping: this._expFunc(t.value),
                        length: 8192
                    }), this._exponent = t.value;
                }
                static getDefaults() {
                    return Object.assign(Qo.getDefaults(), {
                        value: 1
                    });
                }
                _expFunc(t) {
                    return (e)=>Math.pow(Math.abs(e), t)
                    ;
                }
                get value() {
                    return this._exponent;
                }
                set value(t) {
                    this._exponent = t, this._exponentScaler.setMap(this._expFunc(this._exponent));
                }
                dispose() {
                    return super.dispose(), this._exponentScaler.dispose(), this;
                }
            }
            class yr extends ir {
                constructor(){
                    super(Object.assign(pi(yr.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]))), this.name = "ScaleExp";
                    const t = pi(yr.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]);
                    this.input = this._exp = new vr({
                        context: this.context,
                        value: t.exponent
                    }), this._exp.connect(this._mult);
                }
                static getDefaults() {
                    return Object.assign(ir.getDefaults(), {
                        exponent: 1
                    });
                }
                get exponent() {
                    return this._exp.value;
                }
                set exponent(t) {
                    this._exp.value = t;
                }
                dispose() {
                    return super.dispose(), this._exp.dispose(), this;
                }
            }
            class xr extends fo {
                constructor(){
                    super(pi(fo.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "SyncedSignal", this.override = !1;
                    const t = pi(fo.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this._lastVal = t.value, this._synced = this.context.transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._syncedCallback = this._anchorValue.bind(this), this.context.transport.on("start", this._syncedCallback), this.context.transport.on("pause", this._syncedCallback), this.context.transport.on("stop", this._syncedCallback), this._constantSource.disconnect(), this._constantSource.stop(0), this._constantSource = this.output = new po({
                        context: this.context,
                        offset: t.value,
                        units: t.units
                    }).start(0), this.setValueAtTime(t.value, 0);
                }
                _onTick(t) {
                    const e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal !== e && (this._lastVal = e, this._constantSource.offset.setValueAtTime(e, t));
                }
                _anchorValue(t) {
                    const e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal = e, this._constantSource.offset.cancelAndHoldAtTime(t), this._constantSource.offset.setValueAtTime(e, t);
                }
                getValueAtTime(t) {
                    const e = new to(this.context, t).toSeconds();
                    return super.getValueAtTime(e);
                }
                setValueAtTime(t, e) {
                    const s = new to(this.context, e).toSeconds();
                    return super.setValueAtTime(t, s), this;
                }
                linearRampToValueAtTime(t, e) {
                    const s = new to(this.context, e).toSeconds();
                    return super.linearRampToValueAtTime(t, s), this;
                }
                exponentialRampToValueAtTime(t, e) {
                    const s = new to(this.context, e).toSeconds();
                    return super.exponentialRampToValueAtTime(t, s), this;
                }
                setTargetAtTime(t, e, s) {
                    const n = new to(this.context, e).toSeconds();
                    return super.setTargetAtTime(t, n, s), this;
                }
                cancelScheduledValues(t) {
                    const e = new to(this.context, t).toSeconds();
                    return super.cancelScheduledValues(e), this;
                }
                setValueCurveAtTime(t, e, s, n) {
                    const i = new to(this.context, e).toSeconds();
                    return s = this.toSeconds(s), super.setValueCurveAtTime(t, i, s, n), this;
                }
                cancelAndHoldAtTime(t) {
                    const e = new to(this.context, t).toSeconds();
                    return super.cancelAndHoldAtTime(e), this;
                }
                setRampPoint(t) {
                    const e = new to(this.context, t).toSeconds();
                    return super.setRampPoint(e), this;
                }
                exponentialRampTo(t, e, s) {
                    const n = new to(this.context, s).toSeconds();
                    return super.exponentialRampTo(t, e, n), this;
                }
                linearRampTo(t, e, s) {
                    const n = new to(this.context, s).toSeconds();
                    return super.linearRampTo(t, e, n), this;
                }
                targetRampTo(t, e, s) {
                    const n = new to(this.context, s).toSeconds();
                    return super.targetRampTo(t, e, n), this;
                }
                dispose() {
                    return super.dispose(), this.context.transport.clear(this._synced), this.context.transport.off("start", this._syncedCallback), this.context.transport.off("pause", this._syncedCallback), this.context.transport.off("stop", this._syncedCallback), this._constantSource.dispose(), this;
                }
            }
            class wr extends oo {
                constructor(){
                    super(pi(wr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "Envelope", this._sig = new fo({
                        context: this.context,
                        value: 0
                    }), this.output = this._sig, this.input = void 0;
                    const t = pi(wr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this.attack = t.attack, this.decay = t.decay, this.sustain = t.sustain, this.release = t.release, this.attackCurve = t.attackCurve, this.releaseCurve = t.releaseCurve, this.decayCurve = t.decayCurve;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        attack: 0.01,
                        attackCurve: "linear",
                        decay: 0.1,
                        decayCurve: "exponential",
                        release: 1,
                        releaseCurve: "exponential",
                        sustain: 0.5
                    });
                }
                get value() {
                    return this.getValueAtTime(this.now());
                }
                _getCurve(t, e) {
                    if (zn(t)) return t;
                    {
                        let s;
                        for(s in br)if (br[s][e] === t) return s;
                        return t;
                    }
                }
                _setCurve(t, e, s) {
                    if (zn(s) && Reflect.has(br, s)) {
                        const n = br[s];
                        Pn(n) ? "_decayCurve" !== t && (this[t] = n[e]) : this[t] = n;
                    } else {
                        if (!Ln(s) || "_decayCurve" === t) throw new Error("Envelope: invalid curve: " + s);
                        this[t] = s;
                    }
                }
                get attackCurve() {
                    return this._getCurve(this._attackCurve, "In");
                }
                set attackCurve(t) {
                    this._setCurve("_attackCurve", "In", t);
                }
                get releaseCurve() {
                    return this._getCurve(this._releaseCurve, "Out");
                }
                set releaseCurve(t) {
                    this._setCurve("_releaseCurve", "Out", t);
                }
                get decayCurve() {
                    return this._decayCurve;
                }
                set decayCurve(t) {
                    Bn([
                        "linear",
                        "exponential"
                    ].some((e)=>e === t
                    ), `Invalid envelope curve: ${t}`), this._decayCurve = t;
                }
                triggerAttack(t, e = 1) {
                    this.log("triggerAttack", t, e), t = this.toSeconds(t);
                    let s = this.toSeconds(this.attack);
                    const n = this.toSeconds(this.decay), i = this.getValueAtTime(t);
                    if (i > 0 && (s = (1 - i) / (1 / s)), s < this.sampleTime) this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
                    else if ("linear" === this._attackCurve) this._sig.linearRampTo(e, s, t);
                    else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e, s, t);
                    else {
                        this._sig.cancelAndHoldAtTime(t);
                        let n = this._attackCurve;
                        for(let t255 = 1; t255 < n.length; t255++)if (n[t255 - 1] <= i && i <= n[t255]) {
                            n = this._attackCurve.slice(t255), n[0] = i;
                            break;
                        }
                        this._sig.setValueCurveAtTime(n, t, s, e);
                    }
                    if (n && this.sustain < 1) {
                        const i = e * this.sustain, o = t + s;
                        this.log("decay", o), "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(i, n + o) : this._sig.exponentialApproachValueAtTime(i, o, n);
                    }
                    return this;
                }
                triggerRelease(t) {
                    this.log("triggerRelease", t), t = this.toSeconds(t);
                    const e = this.getValueAtTime(t);
                    if (e > 0) {
                        const s = this.toSeconds(this.release);
                        s < this.sampleTime ? this._sig.setValueAtTime(0, t) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, s, t) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, s, t) : (Bn(Ln(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(t), this._sig.setValueCurveAtTime(this._releaseCurve, t, s, e));
                    }
                    return this;
                }
                getValueAtTime(t) {
                    return this._sig.getValueAtTime(t);
                }
                triggerAttackRelease(t, e, s = 1) {
                    return e = this.toSeconds(e), this.triggerAttack(e, s), this.triggerRelease(e + this.toSeconds(t)), this;
                }
                cancel(t) {
                    return this._sig.cancelScheduledValues(this.toSeconds(t)), this;
                }
                connect(t, e = 0, s = 0) {
                    return _o(this, t, e, s), this;
                }
                asArray(t = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        const e = t / this.context.sampleRate, s = new Fi(1, e, this.context.sampleRate), n = this.toSeconds(this.attack) + this.toSeconds(this.decay), i = n + this.toSeconds(this.release), o = 0.1 * i, r = i + o, a = new this.constructor(Object.assign(this.get(), {
                            attack: e * this.toSeconds(this.attack) / r,
                            decay: e * this.toSeconds(this.decay) / r,
                            release: e * this.toSeconds(this.release) / r,
                            context: s
                        }));
                        return a._sig.toDestination(), a.triggerAttackRelease(e * (n + o) / r, 0), (yield s.render()).getChannelData(0);
                    });
                }
                dispose() {
                    return super.dispose(), this._sig.dispose(), this;
                }
            }
            si([
                cr(0)
            ], wr.prototype, "attack", void 0), si([
                cr(0)
            ], wr.prototype, "decay", void 0), si([
                ar(0, 1)
            ], wr.prototype, "sustain", void 0), si([
                cr(0)
            ], wr.prototype, "release", void 0);
            const br = (()=>{
                const t256 = 128;
                let e138, s87;
                const n = [];
                for(e138 = 0; e138 < t256; e138++)n[e138] = Math.sin(e138 / 127 * (Math.PI / 2));
                const i = [];
                for(e138 = 0; e138 < 127; e138++){
                    s87 = e138 / 127;
                    const t = Math.sin(s87 * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    i[e138] = t / 10 + 0.83 * s87;
                }
                i[127] = 1;
                const o = [];
                for(e138 = 0; e138 < t256; e138++)o[e138] = Math.ceil(e138 / 127 * 5) / 5;
                const r = [];
                for(e138 = 0; e138 < t256; e138++)s87 = e138 / 127, r[e138] = 0.5 * (1 - Math.cos(Math.PI * s87));
                const a = [];
                for(e138 = 0; e138 < t256; e138++){
                    s87 = e138 / 127;
                    const t = 4 * Math.pow(s87, 3) + 0.2, n = Math.cos(t * Math.PI * 2 * s87);
                    a[e138] = Math.abs(n * (1 - s87));
                }
                function c(t) {
                    const e = new Array(t.length);
                    for(let s = 0; s < t.length; s++)e[s] = 1 - t[s];
                    return e;
                }
                var h;
                return {
                    bounce: {
                        In: c(a),
                        Out: a
                    },
                    cosine: {
                        In: n,
                        Out: (h = n, h.slice(0).reverse())
                    },
                    exponential: "exponential",
                    linear: "linear",
                    ripple: {
                        In: i,
                        Out: c(i)
                    },
                    sine: {
                        In: r,
                        Out: c(r)
                    },
                    step: {
                        In: o,
                        Out: c(o)
                    }
                };
            })();
            class Tr extends oo {
                constructor(){
                    super(pi(Tr.getDefaults(), arguments)), this._scheduledEvents = [], this._synced = !1, this._original_triggerAttack = this.triggerAttack, this._original_triggerRelease = this.triggerRelease, this._syncedRelease = (t)=>this._original_triggerRelease(t)
                    ;
                    const t257 = pi(Tr.getDefaults(), arguments);
                    this._volume = this.output = new Mo({
                        context: this.context,
                        volume: t257.volume
                    }), this.volume = this._volume.volume, Mi(this, "volume");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        volume: 0
                    });
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this.context.transport.on("stop", this._syncedRelease), this.context.transport.on("pause", this._syncedRelease), this.context.transport.on("loopEnd", this._syncedRelease)), this;
                }
                _syncState() {
                    let t = !1;
                    return this._synced || (this._synced = !0, t = !0), t;
                }
                _syncMethod(t258, e) {
                    const s = this["_original_" + t258] = this[t258];
                    this[t258] = (...t)=>{
                        const n52 = t[e], i = this.context.transport.schedule((n)=>{
                            t[e] = n, s.apply(this, t);
                        }, n52);
                        this._scheduledEvents.push(i);
                    };
                }
                unsync() {
                    return this._scheduledEvents.forEach((t)=>this.context.transport.clear(t)
                    ), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease, this.context.transport.off("stop", this._syncedRelease), this.context.transport.off("pause", this._syncedRelease), this.context.transport.off("loopEnd", this._syncedRelease)), this;
                }
                triggerAttackRelease(t, e, s, n) {
                    const i = this.toSeconds(s), o = this.toSeconds(e);
                    return this.triggerAttack(t, i, n), this.triggerRelease(i + o), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this;
                }
            }
            class Sr extends Tr {
                constructor(){
                    super(pi(Sr.getDefaults(), arguments));
                    const t = pi(Sr.getDefaults(), arguments);
                    this.portamento = t.portamento, this.onsilence = t.onsilence;
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        detune: 0,
                        onsilence: Ri,
                        portamento: 0
                    });
                }
                triggerAttack(t, e, s = 1) {
                    this.log("triggerAttack", t, e, s);
                    const n = this.toSeconds(e);
                    return this._triggerEnvelopeAttack(n, s), this.setNote(t, n), this;
                }
                triggerRelease(t) {
                    this.log("triggerRelease", t);
                    const e = this.toSeconds(t);
                    return this._triggerEnvelopeRelease(e), this;
                }
                setNote(t, e) {
                    const s = this.toSeconds(e), n = t instanceof $i ? t.toFrequency() : t;
                    if (this.portamento > 0 && this.getLevelAtTime(s) > 0.05) {
                        const t = this.toSeconds(this.portamento);
                        this.frequency.exponentialRampTo(n, t, s);
                    } else this.frequency.setValueAtTime(n, s);
                    return this;
                }
            }
            si([
                cr(0)
            ], Sr.prototype, "portamento", void 0);
            class kr extends wr {
                constructor(){
                    super(pi(kr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "AmplitudeEnvelope", this._gainNode = new lo({
                        context: this.context,
                        gain: 0
                    }), this.output = this._gainNode, this.input = this._gainNode, this._sig.connect(this._gainNode.gain), this.output = this._gainNode, this.input = this._gainNode;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this;
                }
            }
            class Ar extends Sr {
                constructor(){
                    super(pi(Ar.getDefaults(), arguments)), this.name = "Synth";
                    const t = pi(Ar.getDefaults(), arguments);
                    this.oscillator = new sr(Object.assign({
                        context: this.context,
                        detune: t.detune,
                        onstop: ()=>this.onsilence(this)
                    }, t.oscillator)), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new kr(Object.assign({
                        context: this.context
                    }, t.envelope)), this.oscillator.chain(this.envelope, this.output), Mi(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sr.getDefaults(), {
                        envelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.005,
                            decay: 0.1,
                            release: 1,
                            sustain: 0.3
                        }),
                        oscillator: Object.assign(fi(sr.getDefaults(), [
                            ...Object.keys(Vo.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "triangle"
                        })
                    });
                }
                _triggerEnvelopeAttack(t, e) {
                    if (this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack), s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t + e + s);
                    }
                }
                _triggerEnvelopeRelease(t) {
                    this.envelope.triggerRelease(t), this.oscillator.stop(t + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t), this.envelope.getValueAtTime(t);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this;
                }
            }
            class Cr extends Sr {
                constructor(){
                    super(pi(Cr.getDefaults(), arguments)), this.name = "ModulationSynth";
                    const t = pi(Cr.getDefaults(), arguments);
                    this._carrier = new Ar({
                        context: this.context,
                        oscillator: t.oscillator,
                        envelope: t.envelope,
                        onsilence: ()=>this.onsilence(this)
                        ,
                        volume: -10
                    }), this._modulator = new Ar({
                        context: this.context,
                        oscillator: t.modulation,
                        envelope: t.modulationEnvelope,
                        volume: -10
                    }), this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope, this.modulation = this._modulator.oscillator, this.modulationEnvelope = this._modulator.envelope, this.frequency = new fo({
                        context: this.context,
                        units: "frequency"
                    }), this.detune = new fo({
                        context: this.context,
                        value: t.detune,
                        units: "cents"
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        value: t.harmonicity,
                        minValue: 0
                    }), this._modulationNode = new lo({
                        context: this.context,
                        gain: 0
                    }), Mi(this, [
                        "frequency",
                        "harmonicity",
                        "oscillator",
                        "envelope",
                        "modulation",
                        "modulationEnvelope",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sr.getDefaults(), {
                        harmonicity: 3,
                        oscillator: Object.assign(fi(sr.getDefaults(), [
                            ...Object.keys(Vo.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "sine"
                        }),
                        envelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.01,
                            decay: 0.01,
                            sustain: 1,
                            release: 0.5
                        }),
                        modulation: Object.assign(fi(sr.getDefaults(), [
                            ...Object.keys(Vo.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "square"
                        }),
                        modulationEnvelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.5,
                            decay: 0,
                            sustain: 1,
                            release: 0.5
                        })
                    });
                }
                _triggerEnvelopeAttack(t, e) {
                    this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t, e);
                }
                _triggerEnvelopeRelease(t) {
                    return this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this;
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t), this.envelope.getValueAtTime(t);
                }
                dispose() {
                    return super.dispose(), this._carrier.dispose(), this._modulator.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._modulationNode.dispose(), this;
                }
            }
            class Dr extends Cr {
                constructor(){
                    super(pi(Dr.getDefaults(), arguments)), this.name = "AMSynth", this._modulationScale = new Xo({
                        context: this.context
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output);
                }
                dispose() {
                    return super.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Or extends oo {
                constructor(){
                    super(pi(Or.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "BiquadFilter";
                    const t = pi(Or.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._filter = this.context.createBiquadFilter(), this.input = this.output = this._filter, this.Q = new io({
                        context: this.context,
                        units: "number",
                        value: t.Q,
                        param: this._filter.Q
                    }), this.frequency = new io({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency,
                        param: this._filter.frequency
                    }), this.detune = new io({
                        context: this.context,
                        units: "cents",
                        value: t.detune,
                        param: this._filter.detune
                    }), this.gain = new io({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t.gain,
                        param: this._filter.gain
                    }), this.type = t.type;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        Q: 1,
                        type: "lowpass",
                        frequency: 350,
                        detune: 0,
                        gain: 0
                    });
                }
                get type() {
                    return this._filter.type;
                }
                set type(t) {
                    Bn(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t), `Invalid filter type: ${t}`), this._filter.type = t;
                }
                getFrequencyResponse(t = 128) {
                    const e = new Float32Array(t);
                    for(let s = 0; s < t; s++){
                        const n = 19980 * Math.pow(s / t, 2) + 20;
                        e[s] = n;
                    }
                    const s88 = new Float32Array(t), n = new Float32Array(t), i = this.context.createBiquadFilter();
                    return i.type = this.type, i.Q.value = this.Q.value, i.frequency.value = this.frequency.value, i.gain.value = this.gain.value, i.getFrequencyResponse(e, s88, n), s88;
                }
                dispose() {
                    return super.dispose(), this._filter.disconnect(), this.Q.dispose(), this.frequency.dispose(), this.gain.dispose(), this.detune.dispose(), this;
                }
            }
            class Mr extends oo {
                constructor(){
                    super(pi(Mr.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ])), this.name = "Filter", this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this._filters = [];
                    const t = pi(Mr.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ]);
                    this._filters = [], this.Q = new fo({
                        context: this.context,
                        units: "positive",
                        value: t.Q
                    }), this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }), this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), this.gain = new fo({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t.gain
                    }), this._type = t.type, this.rolloff = t.rolloff, Mi(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        Q: 1,
                        detune: 0,
                        frequency: 350,
                        gain: 0,
                        rolloff: -12,
                        type: "lowpass"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    Bn(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t), `Invalid filter type: ${t}`), this._type = t, this._filters.forEach((e)=>e.type = t
                    );
                }
                get rolloff() {
                    return this._rolloff;
                }
                set rolloff(t260) {
                    const e = Nn(t260) ? t260 : parseInt(t260, 10), s = [
                        -12,
                        -24,
                        -48,
                        -96
                    ];
                    let n = s.indexOf(e);
                    Bn(-1 !== n, `rolloff can only be ${s.join(", ")}`), n += 1, this._rolloff = e, this.input.disconnect(), this._filters.forEach((t)=>t.disconnect()
                    ), this._filters = new Array(n);
                    for(let t259 = 0; t259 < n; t259++){
                        const e = new Or({
                            context: this.context
                        });
                        e.type = this._type, this.frequency.connect(e.frequency), this.detune.connect(e.detune), this.Q.connect(e.Q), this.gain.connect(e.gain), this._filters[t259] = e;
                    }
                    this._internalChannels = this._filters, ro(this.input, ...this._internalChannels, this.output);
                }
                getFrequencyResponse(t261 = 128) {
                    const e = new Or({
                        frequency: this.frequency.value,
                        gain: this.gain.value,
                        Q: this.Q.value,
                        type: this._type,
                        detune: this.detune.value
                    }), s = new Float32Array(t261).map(()=>1
                    );
                    return this._filters.forEach(()=>{
                        e.getFrequencyResponse(t261).forEach((t, e)=>s[e] *= t
                        );
                    }), e.dispose(), s;
                }
                dispose() {
                    return super.dispose(), this._filters.forEach((t)=>{
                        t.dispose();
                    }), Ei(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]), this.frequency.dispose(), this.Q.dispose(), this.detune.dispose(), this.gain.dispose(), this;
                }
            }
            class Er extends wr {
                constructor(){
                    super(pi(Er.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "FrequencyEnvelope";
                    const t = pi(Er.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this._octaves = t.octaves, this._baseFrequency = this.toFrequency(t.baseFrequency), this._exponent = this.input = new vr({
                        context: this.context,
                        value: t.exponent
                    }), this._scale = this.output = new ir({
                        context: this.context,
                        min: this._baseFrequency,
                        max: this._baseFrequency * Math.pow(2, this._octaves)
                    }), this._sig.chain(this._exponent, this._scale);
                }
                static getDefaults() {
                    return Object.assign(wr.getDefaults(), {
                        baseFrequency: 200,
                        exponent: 1,
                        octaves: 4
                    });
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t) {
                    const e = this.toFrequency(t);
                    Un(e, 0), this._baseFrequency = e, this._scale.min = this._baseFrequency, this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t) {
                    this._octaves = t, this._scale.max = this._baseFrequency * Math.pow(2, t);
                }
                get exponent() {
                    return this._exponent.value;
                }
                set exponent(t) {
                    this._exponent.value = t;
                }
                dispose() {
                    return super.dispose(), this._exponent.dispose(), this._scale.dispose(), this;
                }
            }
            class Rr extends Sr {
                constructor(){
                    super(pi(Rr.getDefaults(), arguments)), this.name = "MonoSynth";
                    const t = pi(Rr.getDefaults(), arguments);
                    this.oscillator = new sr(Object.assign(t.oscillator, {
                        context: this.context,
                        detune: t.detune,
                        onstop: ()=>this.onsilence(this)
                    })), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new Mr(Object.assign(t.filter, {
                        context: this.context
                    })), this.filterEnvelope = new Er(Object.assign(t.filterEnvelope, {
                        context: this.context
                    })), this.envelope = new kr(Object.assign(t.envelope, {
                        context: this.context
                    })), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), Mi(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "filter",
                        "filterEnvelope",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sr.getDefaults(), {
                        envelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.005,
                            decay: 0.1,
                            release: 1,
                            sustain: 0.9
                        }),
                        filter: Object.assign(fi(Mr.getDefaults(), Object.keys(oo.getDefaults())), {
                            Q: 1,
                            rolloff: -12,
                            type: "lowpass"
                        }),
                        filterEnvelope: Object.assign(fi(Er.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.6,
                            baseFrequency: 200,
                            decay: 0.2,
                            exponent: 2,
                            octaves: 3,
                            release: 2,
                            sustain: 0.5
                        }),
                        oscillator: Object.assign(fi(sr.getDefaults(), Object.keys(Vo.getDefaults())), {
                            type: "sawtooth"
                        })
                    });
                }
                _triggerEnvelopeAttack(t, e = 1) {
                    if (this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this.oscillator.start(t), 0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack), s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t + e + s);
                    }
                }
                _triggerEnvelopeRelease(t) {
                    this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this.oscillator.stop(t + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t), this.envelope.getValueAtTime(t);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this.filterEnvelope.dispose(), this.filter.dispose(), this;
                }
            }
            class qr extends Sr {
                constructor(){
                    super(pi(qr.getDefaults(), arguments)), this.name = "DuoSynth";
                    const t = pi(qr.getDefaults(), arguments);
                    this.voice0 = new Rr(Object.assign(t.voice0, {
                        context: this.context,
                        onsilence: ()=>this.onsilence(this)
                    })), this.voice1 = new Rr(Object.assign(t.voice1, {
                        context: this.context
                    })), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }), this._vibrato = new rr({
                        frequency: t.vibratoRate,
                        context: this.context,
                        min: -50,
                        max: 50
                    }), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new lo({
                        context: this.context,
                        units: "normalRange",
                        gain: t.vibratoAmount
                    }), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: 440
                    }), this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.detune.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), Mi(this, [
                        "voice0",
                        "voice1",
                        "frequency",
                        "vibratoAmount",
                        "vibratoRate"
                    ]);
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t), this.voice0.envelope.getValueAtTime(t) + this.voice1.envelope.getValueAtTime(t);
                }
                static getDefaults() {
                    return ui(Sr.getDefaults(), {
                        vibratoAmount: 0.5,
                        vibratoRate: 5,
                        harmonicity: 1.5,
                        voice0: ui(fi(Rr.getDefaults(), Object.keys(Sr.getDefaults())), {
                            filterEnvelope: {
                                attack: 0.01,
                                decay: 0,
                                sustain: 1,
                                release: 0.5
                            },
                            envelope: {
                                attack: 0.01,
                                decay: 0,
                                sustain: 1,
                                release: 0.5
                            }
                        }),
                        voice1: ui(fi(Rr.getDefaults(), Object.keys(Sr.getDefaults())), {
                            filterEnvelope: {
                                attack: 0.01,
                                decay: 0,
                                sustain: 1,
                                release: 0.5
                            },
                            envelope: {
                                attack: 0.01,
                                decay: 0,
                                sustain: 1,
                                release: 0.5
                            }
                        })
                    });
                }
                _triggerEnvelopeAttack(t, e) {
                    this.voice0._triggerEnvelopeAttack(t, e), this.voice1._triggerEnvelopeAttack(t, e);
                }
                _triggerEnvelopeRelease(t) {
                    return this.voice0._triggerEnvelopeRelease(t), this.voice1._triggerEnvelopeRelease(t), this;
                }
                dispose() {
                    return super.dispose(), this.voice0.dispose(), this.voice1.dispose(), this.frequency.dispose(), this.detune.dispose(), this._vibrato.dispose(), this.vibratoRate.dispose(), this._vibratoGain.dispose(), this.harmonicity.dispose(), this;
                }
            }
            class Fr extends Cr {
                constructor(){
                    super(pi(Fr.getDefaults(), arguments)), this.name = "FMSynth";
                    const t = pi(Fr.getDefaults(), arguments);
                    this.modulationIndex = new Yo({
                        context: this.context,
                        value: t.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(Cr.getDefaults(), {
                        modulationIndex: 10
                    });
                }
                dispose() {
                    return super.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            const Ir = [
                1,
                1.483,
                1.932,
                2.546,
                2.63,
                3.897
            ];
            class Vr extends Sr {
                constructor(){
                    super(pi(Vr.getDefaults(), arguments)), this.name = "MetalSynth", this._oscillators = [], this._freqMultipliers = [];
                    const t = pi(Vr.getDefaults(), arguments);
                    this.detune = new fo({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }), this.frequency = new fo({
                        context: this.context,
                        units: "frequency"
                    }), this._amplitude = new lo({
                        context: this.context,
                        gain: 0
                    }).connect(this.output), this._highpass = new Mr({
                        Q: 0,
                        context: this.context,
                        type: "highpass"
                    }).connect(this._amplitude);
                    for(let e = 0; e < Ir.length; e++){
                        const s = new Ho({
                            context: this.context,
                            harmonicity: t.harmonicity,
                            modulationIndex: t.modulationIndex,
                            modulationType: "square",
                            onstop: 0 === e ? ()=>this.onsilence(this)
                             : Ri,
                            type: "square"
                        });
                        s.connect(this._highpass), this._oscillators[e] = s;
                        const n = new Yo({
                            context: this.context,
                            value: Ir[e]
                        });
                        this._freqMultipliers[e] = n, this.frequency.chain(n, s.frequency), this.detune.connect(s.detune);
                    }
                    this._filterFreqScaler = new ir({
                        context: this.context,
                        max: 7000,
                        min: this.toFrequency(t.resonance)
                    }), this.envelope = new wr({
                        attack: t.envelope.attack,
                        attackCurve: "linear",
                        context: this.context,
                        decay: t.envelope.decay,
                        release: t.envelope.release,
                        sustain: 0
                    }), this.envelope.chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitude.gain), this._octaves = t.octaves, this.octaves = t.octaves;
                }
                static getDefaults() {
                    return ui(Sr.getDefaults(), {
                        envelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            attack: 0.001,
                            decay: 1.4,
                            release: 0.2
                        }),
                        harmonicity: 5.1,
                        modulationIndex: 32,
                        octaves: 1.5,
                        resonance: 4000
                    });
                }
                _triggerEnvelopeAttack(t, e139 = 1) {
                    return this.envelope.triggerAttack(t, e139), this._oscillators.forEach((e)=>e.start(t)
                    ), 0 === this.envelope.sustain && this._oscillators.forEach((e)=>{
                        e.stop(t + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay));
                    }), this;
                }
                _triggerEnvelopeRelease(t) {
                    return this.envelope.triggerRelease(t), this._oscillators.forEach((e)=>e.stop(t + this.toSeconds(this.envelope.release))
                    ), this;
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t), this.envelope.getValueAtTime(t);
                }
                get modulationIndex() {
                    return this._oscillators[0].modulationIndex.value;
                }
                set modulationIndex(t) {
                    this._oscillators.forEach((e)=>e.modulationIndex.value = t
                    );
                }
                get harmonicity() {
                    return this._oscillators[0].harmonicity.value;
                }
                set harmonicity(t) {
                    this._oscillators.forEach((e)=>e.harmonicity.value = t
                    );
                }
                get resonance() {
                    return this._filterFreqScaler.min;
                }
                set resonance(t) {
                    this._filterFreqScaler.min = this.toFrequency(t), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t) {
                    this._octaves = t, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t);
                }
                dispose() {
                    return super.dispose(), this._oscillators.forEach((t)=>t.dispose()
                    ), this._freqMultipliers.forEach((t)=>t.dispose()
                    ), this.frequency.dispose(), this.detune.dispose(), this._filterFreqScaler.dispose(), this._amplitude.dispose(), this.envelope.dispose(), this._highpass.dispose(), this;
                }
            }
            class Nr extends Ar {
                constructor(){
                    super(pi(Nr.getDefaults(), arguments)), this.name = "MembraneSynth", this.portamento = 0;
                    const t = pi(Nr.getDefaults(), arguments);
                    this.pitchDecay = t.pitchDecay, this.octaves = t.octaves, Mi(this, [
                        "oscillator",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return ui(Sr.getDefaults(), Ar.getDefaults(), {
                        envelope: {
                            attack: 0.001,
                            attackCurve: "exponential",
                            decay: 0.4,
                            release: 1.4,
                            sustain: 0.01
                        },
                        octaves: 10,
                        oscillator: {
                            type: "sine"
                        },
                        pitchDecay: 0.05
                    });
                }
                setNote(t, e) {
                    const s = this.toSeconds(e), n = this.toFrequency(t instanceof $i ? t.toFrequency() : t), i = n * this.octaves;
                    return this.oscillator.frequency.setValueAtTime(i, s), this.oscillator.frequency.exponentialRampToValueAtTime(n, s + this.toSeconds(this.pitchDecay)), this;
                }
                dispose() {
                    return super.dispose(), this;
                }
            }
            si([
                ar(0)
            ], Nr.prototype, "octaves", void 0), si([
                cr(0)
            ], Nr.prototype, "pitchDecay", void 0);
            class Pr extends Tr {
                constructor(){
                    super(pi(Pr.getDefaults(), arguments)), this.name = "NoiseSynth";
                    const t = pi(Pr.getDefaults(), arguments);
                    this.noise = new Po(Object.assign({
                        context: this.context
                    }, t.noise)), this.envelope = new kr(Object.assign({
                        context: this.context
                    }, t.envelope)), this.noise.chain(this.envelope, this.output);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        envelope: Object.assign(fi(wr.getDefaults(), Object.keys(oo.getDefaults())), {
                            decay: 0.1,
                            sustain: 0
                        }),
                        noise: Object.assign(fi(Po.getDefaults(), Object.keys(Vo.getDefaults())), {
                            type: "white"
                        })
                    });
                }
                triggerAttack(t, e = 1) {
                    return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.noise.start(t), 0 === this.envelope.sustain && this.noise.stop(t + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)), this;
                }
                triggerRelease(t) {
                    return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.noise.stop(t + this.toSeconds(this.envelope.release)), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0)), this;
                }
                triggerAttackRelease(t, e, s = 1) {
                    return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, s), this.triggerRelease(e + t), this;
                }
                dispose() {
                    return super.dispose(), this.noise.dispose(), this.envelope.dispose(), this;
                }
            }
            const jr = new Set;
            function Lr(t) {
                jr.add(t);
            }
            function zr(t, e) {
                const s = `registerProcessor("${t}", ${e})`;
                jr.add(s);
            }
            class Wr extends oo {
                constructor(t){
                    super(t), this.name = "ToneAudioWorklet", this.workletOptions = {
                    }, this.onprocessorerror = Ri;
                    const e = URL.createObjectURL(new Blob([
                        Array.from(jr).join("\n")
                    ], {
                        type: "text/javascript"
                    })), s = this._audioWorkletName();
                    this._dummyGain = this.context.createGain(), this._dummyParam = this._dummyGain.gain, this.context.addAudioWorkletModule(e, s).then(()=>{
                        this.disposed || (this._worklet = this.context.createAudioWorkletNode(s, this.workletOptions), this._worklet.onprocessorerror = this.onprocessorerror.bind(this), this.onReady(this._worklet));
                    });
                }
                dispose() {
                    return super.dispose(), this._dummyGain.disconnect(), this._worklet && (this._worklet.port.postMessage("dispose"), this._worklet.disconnect()), this;
                }
            }
            Lr('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n'), Lr("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n"), Lr("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");
            const Br = "feedback-comb-filter";
            zr(Br, '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');
            class Ur extends Wr {
                constructor(){
                    super(pi(Ur.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ])), this.name = "FeedbackCombFilter";
                    const t = pi(Ur.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ]);
                    this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this.delayTime = new io({
                        context: this.context,
                        value: t.delayTime,
                        units: "time",
                        minValue: 0,
                        maxValue: 1,
                        param: this._dummyParam,
                        swappable: !0
                    }), this.resonance = new io({
                        context: this.context,
                        value: t.resonance,
                        units: "normalRange",
                        param: this._dummyParam,
                        swappable: !0
                    }), Mi(this, [
                        "resonance",
                        "delayTime"
                    ]);
                }
                _audioWorkletName() {
                    return Br;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        delayTime: 0.1,
                        resonance: 0.5
                    });
                }
                onReady(t) {
                    ro(this.input, t, this.output);
                    const e = t.parameters.get("delayTime");
                    this.delayTime.setParam(e);
                    const s = t.parameters.get("feedback");
                    this.resonance.setParam(s);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.delayTime.dispose(), this.resonance.dispose(), this;
                }
            }
            class Gr extends oo {
                constructor(){
                    super(pi(Gr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OnePoleFilter";
                    const t = pi(Gr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._frequency = t.frequency, this._type = t.type, this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this._createFilter();
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        frequency: 880,
                        type: "lowpass"
                    });
                }
                _createFilter() {
                    const t = this._filter, e = this.toFrequency(this._frequency), s = 1 / (2 * Math.PI * e);
                    if ("lowpass" === this._type) {
                        const t = 1 / (s * this.context.sampleRate), e = t - 1;
                        this._filter = this.context.createIIRFilter([
                            t,
                            0
                        ], [
                            1,
                            e
                        ]);
                    } else {
                        const t = 1 / (s * this.context.sampleRate) - 1;
                        this._filter = this.context.createIIRFilter([
                            1,
                            -1
                        ], [
                            1,
                            t
                        ]);
                    }
                    this.input.chain(this._filter, this.output), t && this.context.setTimeout(()=>{
                        this.disposed || (this.input.disconnect(t), t.disconnect());
                    }, this.blockTime);
                }
                get frequency() {
                    return this._frequency;
                }
                set frequency(t) {
                    this._frequency = t, this._createFilter();
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    this._type = t, this._createFilter();
                }
                getFrequencyResponse(t = 128) {
                    const e = new Float32Array(t);
                    for(let s = 0; s < t; s++){
                        const n = 19980 * Math.pow(s / t, 2) + 20;
                        e[s] = n;
                    }
                    const s89 = new Float32Array(t), n = new Float32Array(t);
                    return this._filter.getFrequencyResponse(e, s89, n), s89;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this._filter.disconnect(), this;
                }
            }
            class Qr extends oo {
                constructor(){
                    super(pi(Qr.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ])), this.name = "LowpassCombFilter";
                    const t = pi(Qr.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ]);
                    this._combFilter = this.output = new Ur({
                        context: this.context,
                        delayTime: t.delayTime,
                        resonance: t.resonance
                    }), this.delayTime = this._combFilter.delayTime, this.resonance = this._combFilter.resonance, this._lowpass = this.input = new Gr({
                        context: this.context,
                        frequency: t.dampening,
                        type: "lowpass"
                    }), this._lowpass.connect(this._combFilter);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        dampening: 3000,
                        delayTime: 0.1,
                        resonance: 0.5
                    });
                }
                get dampening() {
                    return this._lowpass.frequency;
                }
                set dampening(t) {
                    this._lowpass.frequency = t;
                }
                dispose() {
                    return super.dispose(), this._combFilter.dispose(), this._lowpass.dispose(), this;
                }
            }
            class Zr extends Tr {
                constructor(){
                    super(pi(Zr.getDefaults(), arguments)), this.name = "PluckSynth";
                    const t = pi(Zr.getDefaults(), arguments);
                    this._noise = new Po({
                        context: this.context,
                        type: "pink"
                    }), this.attackNoise = t.attackNoise, this._lfcf = new Qr({
                        context: this.context,
                        dampening: t.dampening,
                        resonance: t.resonance
                    }), this.resonance = t.resonance, this.release = t.release, this._noise.connect(this._lfcf), this._lfcf.connect(this.output);
                }
                static getDefaults() {
                    return ui(Tr.getDefaults(), {
                        attackNoise: 1,
                        dampening: 4000,
                        resonance: 0.7,
                        release: 1
                    });
                }
                get dampening() {
                    return this._lfcf.dampening;
                }
                set dampening(t) {
                    this._lfcf.dampening = t;
                }
                triggerAttack(t, e) {
                    const s = this.toFrequency(t);
                    e = this.toSeconds(e);
                    const n = 1 / s;
                    return this._lfcf.delayTime.setValueAtTime(n, e), this._noise.start(e), this._noise.stop(e + n * this.attackNoise), this._lfcf.resonance.cancelScheduledValues(e), this._lfcf.resonance.setValueAtTime(this.resonance, e), this;
                }
                triggerRelease(t) {
                    return this._lfcf.resonance.linearRampTo(0, this.release, t), this;
                }
                dispose() {
                    return super.dispose(), this._noise.dispose(), this._lfcf.dispose(), this;
                }
            }
            class Xr extends Tr {
                constructor(){
                    super(pi(Xr.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ])), this.name = "PolySynth", this._availableVoices = [], this._activeVoices = [], this._voices = [], this._gcTimeout = -1, this._averageActiveVoices = 0, this._syncedRelease = (t)=>this.releaseAll(t)
                    ;
                    const t262 = pi(Xr.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ]);
                    Bn(!Nn(t262.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
                    const e = t262.voice.getDefaults();
                    this.options = Object.assign(e, t262.options), this.voice = t262.voice, this.maxPolyphony = t262.maxPolyphony, this._dummyVoice = this._getNextAvailableVoice();
                    const s = this._voices.indexOf(this._dummyVoice);
                    this._voices.splice(s, 1), this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        maxPolyphony: 32,
                        options: {
                        },
                        voice: Ar
                    });
                }
                get activeVoices() {
                    return this._activeVoices.length;
                }
                _makeVoiceAvailable(t) {
                    this._availableVoices.push(t);
                    const e140 = this._activeVoices.findIndex((e)=>e.voice === t
                    );
                    this._activeVoices.splice(e140, 1);
                }
                _getNextAvailableVoice() {
                    if (this._availableVoices.length) return this._availableVoices.shift();
                    if (this._voices.length < this.maxPolyphony) {
                        const t = new this.voice(Object.assign(this.options, {
                            context: this.context,
                            onsilence: this._makeVoiceAvailable.bind(this)
                        }));
                        return Bn(t instanceof Sr, "Voice must extend Monophonic class"), t.connect(this.output), this._voices.push(t), t;
                    }
                    Kn("Max polyphony exceeded. Note dropped.");
                }
                _collectGarbage() {
                    if (this._averageActiveVoices = Math.max(0.95 * this._averageActiveVoices, this.activeVoices), this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
                        const t = this._availableVoices.shift(), e = this._voices.indexOf(t);
                        this._voices.splice(e, 1), this.context.isOffline || t.dispose();
                    }
                }
                _triggerAttack(t263, e, s) {
                    t263.forEach((t)=>{
                        const n = new To(this.context, t).toMidi(), i = this._getNextAvailableVoice();
                        i && (i.triggerAttack(t, e, s), this._activeVoices.push({
                            midi: n,
                            voice: i,
                            released: !1
                        }), this.log("triggerAttack", t, e));
                    });
                }
                _triggerRelease(t264, e141) {
                    t264.forEach((t265)=>{
                        const s = new To(this.context, t265).toMidi(), n = this._activeVoices.find(({ midi: t , released: e  })=>t === s && !e
                        );
                        n && (n.voice.triggerRelease(e141), n.released = !0, this.log("triggerRelease", t265, e141));
                    });
                }
                _scheduleEvent(t, e, s, n) {
                    Bn(!this.disposed, "Synth was already disposed"), s <= this.now() ? "attack" === t ? this._triggerAttack(e, s, n) : this._triggerRelease(e, s) : this.context.setTimeout(()=>{
                        this.disposed || this._scheduleEvent(t, e, s, n);
                    }, s - this.now());
                }
                triggerAttack(t, e, s) {
                    Array.isArray(t) || (t = [
                        t
                    ]);
                    const n = this.toSeconds(e);
                    return this._scheduleEvent("attack", t, n, s), this;
                }
                triggerRelease(t, e) {
                    Array.isArray(t) || (t = [
                        t
                    ]);
                    const s = this.toSeconds(e);
                    return this._scheduleEvent("release", t, s), this;
                }
                triggerAttackRelease(t, e, s, n) {
                    const i = this.toSeconds(s);
                    if (this.triggerAttack(t, i, n), Ln(e)) {
                        Bn(Ln(t), "If the duration is an array, the notes must also be an array");
                        for(let s = 0; s < t.length; s++){
                            const n = e[Math.min(s, e.length - 1)], o = this.toSeconds(n);
                            Bn(o > 0, "The duration must be greater than 0"), this.triggerRelease(t[s], i + o);
                        }
                    } else {
                        const s = this.toSeconds(e);
                        Bn(s > 0, "The duration must be greater than 0"), this.triggerRelease(t, i + s);
                    }
                    return this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this.context.transport.on("stop", this._syncedRelease), this.context.transport.on("pause", this._syncedRelease), this.context.transport.on("loopEnd", this._syncedRelease)), this;
                }
                set(t266) {
                    const e = fi(t266, [
                        "onsilence",
                        "context"
                    ]);
                    return this.options = ui(this.options, e), this._voices.forEach((t)=>t.set(e)
                    ), this._dummyVoice.set(e), this;
                }
                get() {
                    return this._dummyVoice.get();
                }
                releaseAll(t267) {
                    const e = this.toSeconds(t267);
                    return this._activeVoices.forEach(({ voice: t  })=>{
                        t.triggerRelease(e);
                    }), this;
                }
                dispose() {
                    return super.dispose(), this._dummyVoice.dispose(), this._voices.forEach((t)=>t.dispose()
                    ), this._activeVoices = [], this._availableVoices = [], this.context.clearInterval(this._gcTimeout), this;
                }
            }
            class Yr extends Tr {
                constructor(){
                    super(pi(Yr.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls")), this.name = "Sampler", this._activeSources = new Map;
                    const t = pi(Yr.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls"), e = {
                    };
                    Object.keys(t.urls).forEach((s)=>{
                        const n = parseInt(s, 10);
                        if (Bn(Wn(s) || Nn(n) && isFinite(n), `url key is neither a note or midi pitch: ${s}`), Wn(s)) {
                            const n = new $i(this.context, s).toMidi();
                            e[n] = t.urls[s];
                        } else Nn(n) && isFinite(n) && (e[n] = t.urls[n]);
                    }), this._buffers = new bo({
                        urls: e,
                        onload: t.onload,
                        baseUrl: t.baseUrl,
                        onerror: t.onerror
                    }), this.attack = t.attack, this.release = t.release, this.curve = t.curve, this._buffers.loaded && Promise.resolve().then(t.onload);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        attack: 0,
                        baseUrl: "",
                        curve: "exponential",
                        onload: Ri,
                        onerror: Ri,
                        release: 0.1,
                        urls: {
                        }
                    });
                }
                _findClosest(t) {
                    let e = 0;
                    for(; e < 96;){
                        if (this._buffers.has(t + e)) return -e;
                        if (this._buffers.has(t - e)) return e;
                        e++;
                    }
                    throw new Error(`No available buffers for note: ${t}`);
                }
                triggerAttack(t268, e142, s = 1) {
                    return this.log("triggerAttack", t268, e142, s), Array.isArray(t268) || (t268 = [
                        t268
                    ]), t268.forEach((t269)=>{
                        const n = Gi(new $i(this.context, t269).toFrequency()), i = Math.round(n), o = n - i, r = this._findClosest(i), a = i - r, c = this._buffers.get(a), h = Wi(r + o), l = new No({
                            url: c,
                            context: this.context,
                            curve: this.curve,
                            fadeIn: this.attack,
                            fadeOut: this.release,
                            playbackRate: h
                        }).connect(this.output);
                        l.start(e142, 0, c.duration / h, s), Ln(this._activeSources.get(i)) || this._activeSources.set(i, []), this._activeSources.get(i).push(l), l.onended = ()=>{
                            if (this._activeSources && this._activeSources.has(i)) {
                                const t = this._activeSources.get(i), e = t.indexOf(l);
                                -1 !== e && t.splice(e, 1);
                            }
                        };
                    }), this;
                }
                triggerRelease(t270, e) {
                    return this.log("triggerRelease", t270, e), Array.isArray(t270) || (t270 = [
                        t270
                    ]), t270.forEach((t)=>{
                        const s = new $i(this.context, t).toMidi();
                        if (this._activeSources.has(s) && this._activeSources.get(s).length) {
                            const t271 = this._activeSources.get(s);
                            e = this.toSeconds(e), t271.forEach((t)=>{
                                t.stop(e);
                            }), this._activeSources.set(s, []);
                        }
                    }), this;
                }
                releaseAll(t272) {
                    const e = this.toSeconds(t272);
                    return this._activeSources.forEach((t)=>{
                        for(; t.length;)t.shift().stop(e);
                    }), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this;
                }
                triggerAttackRelease(t273, e, s, n53 = 1) {
                    const i = this.toSeconds(s);
                    return this.triggerAttack(t273, i, n53), Ln(e) ? (Bn(Ln(t273), "notes must be an array when duration is array"), t273.forEach((t, s)=>{
                        const n = e[Math.min(s, e.length - 1)];
                        this.triggerRelease(t, i + this.toSeconds(n));
                    })) : this.triggerRelease(t273, i + this.toSeconds(e)), this;
                }
                add(t, e, s) {
                    if (Bn(Wn(t) || isFinite(t), `note must be a pitch or midi: ${t}`), Wn(t)) {
                        const n = new $i(this.context, t).toMidi();
                        this._buffers.add(n, e, s);
                    } else this._buffers.add(t, e, s);
                    return this;
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                dispose() {
                    return super.dispose(), this._buffers.dispose(), this._activeSources.forEach((t274)=>{
                        t274.forEach((t)=>t.dispose()
                        );
                    }), this._activeSources.clear(), this;
                }
            }
            si([
                cr(0)
            ], Yr.prototype, "attack", void 0), si([
                cr(0)
            ], Yr.prototype, "release", void 0);
            class $r extends so {
                constructor(){
                    super(pi($r.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ])), this.name = "ToneEvent", this._state = new no("stopped"), this._startOffset = 0;
                    const t = pi($r.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ]);
                    this._loop = t.loop, this.callback = t.callback, this.value = t.value, this._loopStart = this.toTicks(t.loopStart), this._loopEnd = this.toTicks(t.loopEnd), this._playbackRate = t.playbackRate, this._probability = t.probability, this._humanize = t.humanize, this.mute = t.mute, this._playbackRate = t.playbackRate, this._state.increasing = !0, this._rescheduleEvents();
                }
                static getDefaults() {
                    return Object.assign(so.getDefaults(), {
                        callback: Ri,
                        humanize: !1,
                        loop: !1,
                        loopEnd: "1m",
                        loopStart: 0,
                        mute: !1,
                        playbackRate: 1,
                        probability: 1,
                        value: null
                    });
                }
                _rescheduleEvents(t275 = -1) {
                    this._state.forEachFrom(t275, (t)=>{
                        let e;
                        if ("started" === t.state) {
                            -1 !== t.id && this.context.transport.clear(t.id);
                            const s = t.time + Math.round(this.startOffset / this._playbackRate);
                            if (!0 === this._loop || Nn(this._loop) && this._loop > 1) {
                                e = 1 / 0, Nn(this._loop) && (e = this._loop * this._getLoopDuration());
                                const n = this._state.getAfter(s);
                                null !== n && (e = Math.min(e, n.time - s)), e !== 1 / 0 && (e = new ko(this.context, e));
                                const i = new ko(this.context, this._getLoopDuration());
                                t.id = this.context.transport.scheduleRepeat(this._tick.bind(this), i, new ko(this.context, s), e);
                            } else t.id = this.context.transport.schedule(this._tick.bind(this), new ko(this.context, s));
                        }
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.context.transport.ticks);
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t) {
                    this._startOffset = t;
                }
                get probability() {
                    return this._probability;
                }
                set probability(t) {
                    this._probability = t;
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t) {
                    this._humanize = t;
                }
                start(t) {
                    const e = this.toTicks(t);
                    return "stopped" === this._state.getValueAtTime(e) && (this._state.add({
                        id: -1,
                        state: "started",
                        time: e
                    }), this._rescheduleEvents(e)), this;
                }
                stop(t) {
                    this.cancel(t);
                    const e = this.toTicks(t);
                    if ("started" === this._state.getValueAtTime(e)) {
                        this._state.setStateAtTime("stopped", e, {
                            id: -1
                        });
                        const t = this._state.getBefore(e);
                        let s = e;
                        null !== t && (s = t.time), this._rescheduleEvents(s);
                    }
                    return this;
                }
                cancel(t276) {
                    t276 = di(t276, -1 / 0);
                    const e = this.toTicks(t276);
                    return this._state.forEachFrom(e, (t)=>{
                        this.context.transport.clear(t.id);
                    }), this._state.cancel(e), this;
                }
                _tick(t) {
                    const e = this.context.transport.getTicksAtTime(t);
                    if (!this.mute && "started" === this._state.getValueAtTime(e)) {
                        if (this.probability < 1 && Math.random() > this.probability) return;
                        if (this.humanize) {
                            let e = 0.02;
                            jn(this.humanize) || (e = this.toSeconds(this.humanize)), t += (2 * Math.random() - 1) * e;
                        }
                        this.callback(t, this.value);
                    }
                }
                _getLoopDuration() {
                    return (this._loopEnd - this._loopStart) / this._playbackRate;
                }
                get loop() {
                    return this._loop;
                }
                set loop(t) {
                    this._loop = t, this._rescheduleEvents();
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t) {
                    this._playbackRate = t, this._rescheduleEvents();
                }
                get loopEnd() {
                    return new ko(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(t) {
                    this._loopEnd = this.toTicks(t), this._loop && this._rescheduleEvents();
                }
                get loopStart() {
                    return new ko(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t) {
                    this._loopStart = this.toTicks(t), this._loop && this._rescheduleEvents();
                }
                get progress() {
                    if (this._loop) {
                        const t = this.context.transport.ticks, e = this._state.get(t);
                        if (null !== e && "started" === e.state) {
                            const s = this._getLoopDuration();
                            return (t - e.time) % s / s;
                        }
                        return 0;
                    }
                    return 0;
                }
                dispose() {
                    return super.dispose(), this.cancel(), this._state.dispose(), this;
                }
            }
            class Hr extends so {
                constructor(){
                    super(pi(Hr.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ])), this.name = "Loop";
                    const t = pi(Hr.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ]);
                    this._event = new $r({
                        context: this.context,
                        callback: this._tick.bind(this),
                        loop: !0,
                        loopEnd: t.interval,
                        playbackRate: t.playbackRate,
                        probability: t.probability
                    }), this.callback = t.callback, this.iterations = t.iterations;
                }
                static getDefaults() {
                    return Object.assign(so.getDefaults(), {
                        interval: "4n",
                        callback: Ri,
                        playbackRate: 1,
                        iterations: 1 / 0,
                        probability: 1,
                        mute: !1,
                        humanize: !1
                    });
                }
                start(t) {
                    return this._event.start(t), this;
                }
                stop(t) {
                    return this._event.stop(t), this;
                }
                cancel(t) {
                    return this._event.cancel(t), this;
                }
                _tick(t) {
                    this.callback(t);
                }
                get state() {
                    return this._event.state;
                }
                get progress() {
                    return this._event.progress;
                }
                get interval() {
                    return this._event.loopEnd;
                }
                set interval(t) {
                    this._event.loopEnd = t;
                }
                get playbackRate() {
                    return this._event.playbackRate;
                }
                set playbackRate(t) {
                    this._event.playbackRate = t;
                }
                get humanize() {
                    return this._event.humanize;
                }
                set humanize(t) {
                    this._event.humanize = t;
                }
                get probability() {
                    return this._event.probability;
                }
                set probability(t) {
                    this._event.probability = t;
                }
                get mute() {
                    return this._event.mute;
                }
                set mute(t) {
                    this._event.mute = t;
                }
                get iterations() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop;
                }
                set iterations(t) {
                    this._event.loop = t === 1 / 0 || t;
                }
                dispose() {
                    return super.dispose(), this._event.dispose(), this;
                }
            }
            class Jr extends $r {
                constructor(){
                    super(pi(Jr.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ])), this.name = "Part", this._state = new no("stopped"), this._events = new Set;
                    const t277 = pi(Jr.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ]);
                    this._state.increasing = !0, t277.events.forEach((t)=>{
                        Ln(t) ? this.add(t[0], t[1]) : this.add(t);
                    });
                }
                static getDefaults() {
                    return Object.assign($r.getDefaults(), {
                        events: []
                    });
                }
                start(t, e143) {
                    const s = this.toTicks(t);
                    if ("started" !== this._state.getValueAtTime(s)) {
                        e143 = di(e143, this._loop ? this._loopStart : 0), e143 = this._loop ? di(e143, this._loopStart) : di(e143, 0);
                        const t = this.toTicks(e143);
                        this._state.add({
                            id: -1,
                            offset: t,
                            state: "started",
                            time: s
                        }), this._forEach((e)=>{
                            this._startNote(e, s, t);
                        });
                    }
                    return this;
                }
                _startNote(t, e, s) {
                    e -= s, this._loop ? t.startOffset >= this._loopStart && t.startOffset < this._loopEnd ? (t.startOffset < s && (e += this._getLoopDuration()), t.start(new ko(this.context, e))) : t.startOffset < this._loopStart && t.startOffset >= s && (t.loop = !1, t.start(new ko(this.context, e))) : t.startOffset >= s && t.start(new ko(this.context, e));
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t278) {
                    this._startOffset = t278, this._forEach((t)=>{
                        t.startOffset += this._startOffset;
                    });
                }
                stop(t) {
                    const e144 = this.toTicks(t);
                    return this._state.cancel(e144), this._state.setStateAtTime("stopped", e144), this._forEach((e)=>{
                        e.stop(t);
                    }), this;
                }
                at(t, e) {
                    const s = new to(this.context, t).toTicks(), n = new ko(this.context, 1).toSeconds(), i = this._events.values();
                    let o = i.next();
                    for(; !o.done;){
                        const t = o.value;
                        if (Math.abs(s - t.startOffset) < n) return In(e) && (t.value = e), t;
                        o = i.next();
                    }
                    return In(e) ? (this.add(t, e), this.at(t)) : null;
                }
                add(t, e) {
                    t instanceof Object && Reflect.has(t, "time") && (t = (e = t).time);
                    const s = this.toTicks(t);
                    let n;
                    return e instanceof $r ? (n = e, n.callback = this._tick.bind(this)) : n = new $r({
                        callback: this._tick.bind(this),
                        context: this.context,
                        value: e
                    }), n.startOffset = s, n.set({
                        humanize: this.humanize,
                        loop: this.loop,
                        loopEnd: this.loopEnd,
                        loopStart: this.loopStart,
                        playbackRate: this.playbackRate,
                        probability: this.probability
                    }), this._events.add(n), this._restartEvent(n), this;
                }
                _restartEvent(t) {
                    this._state.forEach((e)=>{
                        "started" === e.state ? this._startNote(t, e.time, e.offset) : t.stop(new ko(this.context, e.time));
                    });
                }
                remove(t, e) {
                    return Pn(t) && t.hasOwnProperty("time") && (t = (e = t).time), t = this.toTicks(t), this._events.forEach((s)=>{
                        s.startOffset === t && (Fn(e) || In(e) && s.value === e) && (this._events.delete(s), s.dispose());
                    }), this;
                }
                clear() {
                    return this._forEach((t)=>t.dispose()
                    ), this._events.clear(), this;
                }
                cancel(t) {
                    return this._forEach((e)=>e.cancel(t)
                    ), this._state.cancel(this.toTicks(t)), this;
                }
                _forEach(t) {
                    return this._events && this._events.forEach((e)=>{
                        e instanceof Jr ? e._forEach(t) : t(e);
                    }), this;
                }
                _setAll(t, e) {
                    this._forEach((s)=>{
                        s[t] = e;
                    });
                }
                _tick(t, e) {
                    this.mute || this.callback(t, e);
                }
                _testLoopBoundries(t) {
                    this._loop && (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd) ? t.cancel(0) : "stopped" === t.state && this._restartEvent(t);
                }
                get probability() {
                    return this._probability;
                }
                set probability(t) {
                    this._probability = t, this._setAll("probability", t);
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t) {
                    this._humanize = t, this._setAll("humanize", t);
                }
                get loop() {
                    return this._loop;
                }
                set loop(t) {
                    this._loop = t, this._forEach((e)=>{
                        e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.loop = t, this._testLoopBoundries(e);
                    });
                }
                get loopEnd() {
                    return new ko(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(t) {
                    this._loopEnd = this.toTicks(t), this._loop && this._forEach((e)=>{
                        e.loopEnd = t, this._testLoopBoundries(e);
                    });
                }
                get loopStart() {
                    return new ko(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t279) {
                    this._loopStart = this.toTicks(t279), this._loop && this._forEach((t)=>{
                        t.loopStart = this.loopStart, this._testLoopBoundries(t);
                    });
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t) {
                    this._playbackRate = t, this._setAll("playbackRate", t);
                }
                get length() {
                    return this._events.size;
                }
                dispose() {
                    return super.dispose(), this.clear(), this;
                }
            }
            function* Kr(t) {
                let e = 0;
                for(; e < t.length;)e = sa(e, t), yield t[e], e++;
            }
            function* ta(t) {
                let e = t.length - 1;
                for(; e >= 0;)e = sa(e, t), yield t[e], e--;
            }
            function* ea(t, e) {
                for(;;)yield* e(t);
            }
            function sa(t, e) {
                return wi(t, 0, e.length - 1);
            }
            function* na(t, e) {
                let s = e ? 0 : t.length - 1;
                for(;;)s = sa(s, t), yield t[s], e ? (s++, s >= t.length - 1 && (e = !1)) : (s--, s <= 0 && (e = !0));
            }
            function* ia(t) {
                let e = 0, s = 0;
                for(; e < t.length;)e = sa(e, t), yield t[e], s++, e += s % 2 ? 2 : -1;
            }
            function* oa(t) {
                let e = t.length - 1, s = 0;
                for(; e >= 0;)e = sa(e, t), yield t[e], s++, e += s % 2 ? -2 : 1;
            }
            function* ra(t) {
                const e = [];
                for(let s = 0; s < t.length; s++)e.push(s);
                for(; e.length > 0;){
                    const s = sa(e.splice(Math.floor(e.length * Math.random()), 1)[0], t);
                    yield t[s];
                }
            }
            function* aa(t280, e145 = "up", s = 0) {
                switch(Bn(t280.length > 0, "The array must have more than one value in it"), e145){
                    case "up":
                        yield* ea(t280, Kr);
                    case "down":
                        yield* ea(t280, ta);
                    case "upDown":
                        yield* na(t280, !0);
                    case "downUp":
                        yield* na(t280, !1);
                    case "alternateUp":
                        yield* ea(t280, ia);
                    case "alternateDown":
                        yield* ea(t280, oa);
                    case "random":
                        yield* (function*(t) {
                            for(;;){
                                const e = Math.floor(Math.random() * t.length);
                                yield t[e];
                            }
                        })(t280);
                    case "randomOnce":
                        yield* ea(t280, ra);
                    case "randomWalk":
                        yield* (function*(t) {
                            let e = Math.floor(Math.random() * t.length);
                            for(;;)0 === e ? e++ : e === t.length - 1 || Math.random() < 0.5 ? e-- : e++, yield t[e];
                        })(t280);
                }
            }
            class ca extends Hr {
                constructor(){
                    super(pi(ca.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ])), this.name = "Pattern";
                    const t = pi(ca.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ]);
                    this.callback = t.callback, this._values = t.values, this._pattern = aa(t.values, t.pattern), this._type = t.pattern;
                }
                static getDefaults() {
                    return Object.assign(Hr.getDefaults(), {
                        pattern: "up",
                        values: [],
                        callback: Ri
                    });
                }
                _tick(t) {
                    const e = this._pattern.next();
                    this._value = e.value, this.callback(t, this._value);
                }
                get values() {
                    return this._values;
                }
                set values(t) {
                    this._values = t, this.pattern = this._type;
                }
                get value() {
                    return this._value;
                }
                get pattern() {
                    return this._type;
                }
                set pattern(t) {
                    this._type = t, this._pattern = aa(this._values, this._type);
                }
            }
            class ha extends $r {
                constructor(){
                    super(pi(ha.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ])), this.name = "Sequence", this._part = new Jr({
                        callback: this._seqCallback.bind(this),
                        context: this.context
                    }), this._events = [], this._eventsArray = [];
                    const t = pi(ha.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ]);
                    this._subdivision = this.toTicks(t.subdivision), this.events = t.events, this.loop = t.loop, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this.playbackRate = t.playbackRate, this.probability = t.probability, this.humanize = t.humanize, this.mute = t.mute, this.playbackRate = t.playbackRate;
                }
                static getDefaults() {
                    return Object.assign(fi($r.getDefaults(), [
                        "value"
                    ]), {
                        events: [],
                        loop: !0,
                        loopEnd: 0,
                        loopStart: 0,
                        subdivision: "8n"
                    });
                }
                _seqCallback(t, e) {
                    null === e || this.mute || this.callback(t, e);
                }
                get events() {
                    return this._events;
                }
                set events(t) {
                    this.clear(), this._eventsArray = t, this._events = this._createSequence(this._eventsArray), this._eventsUpdated();
                }
                start(t, e) {
                    return this._part.start(t, e ? this._indexTime(e) : e), this;
                }
                stop(t) {
                    return this._part.stop(t), this;
                }
                get subdivision() {
                    return new ko(this.context, this._subdivision).toSeconds();
                }
                _createSequence(t281) {
                    return new Proxy(t281, {
                        get: (t, e)=>t[e]
                        ,
                        set: (t, e, s)=>(zn(e) && isFinite(parseInt(e, 10)) && Ln(s) ? t[e] = this._createSequence(s) : t[e] = s, this._eventsUpdated(), !0)
                    });
                }
                _eventsUpdated() {
                    this._part.clear(), this._rescheduleSequence(this._eventsArray, this._subdivision, this.startOffset), this.loopEnd = this.loopEnd;
                }
                _rescheduleSequence(t282, e146, s) {
                    t282.forEach((t, n)=>{
                        const i = n * e146 + s;
                        if (Ln(t)) this._rescheduleSequence(t, e146 / t.length, i);
                        else {
                            const e = new ko(this.context, i, "i").toSeconds();
                            this._part.add(e, t);
                        }
                    });
                }
                _indexTime(t) {
                    return new ko(this.context, t * this._subdivision + this.startOffset).toSeconds();
                }
                clear() {
                    return this._part.clear(), this;
                }
                dispose() {
                    return super.dispose(), this._part.dispose(), this;
                }
                get loop() {
                    return this._part.loop;
                }
                set loop(t) {
                    this._part.loop = t;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t) {
                    this._loopStart = t, this._part.loopStart = this._indexTime(t);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t) {
                    this._loopEnd = t, this._part.loopEnd = 0 === t ? this._indexTime(this._eventsArray.length) : this._indexTime(t);
                }
                get startOffset() {
                    return this._part.startOffset;
                }
                set startOffset(t) {
                    this._part.startOffset = t;
                }
                get playbackRate() {
                    return this._part.playbackRate;
                }
                set playbackRate(t) {
                    this._part.playbackRate = t;
                }
                get probability() {
                    return this._part.probability;
                }
                set probability(t) {
                    this._part.probability = t;
                }
                get progress() {
                    return this._part.progress;
                }
                get humanize() {
                    return this._part.humanize;
                }
                set humanize(t) {
                    this._part.humanize = t;
                }
                get length() {
                    return this._part.length;
                }
            }
            class la extends oo {
                constructor(){
                    super(Object.assign(pi(la.getDefaults(), arguments, [
                        "fade"
                    ]))), this.name = "CrossFade", this._panner = this.context.createStereoPanner(), this._split = this.context.createChannelSplitter(2), this._g2a = new dr({
                        context: this.context
                    }), this.a = new lo({
                        context: this.context,
                        gain: 0
                    }), this.b = new lo({
                        context: this.context,
                        gain: 0
                    }), this.output = new lo({
                        context: this.context
                    }), this._internalChannels = [
                        this.a,
                        this.b
                    ];
                    const t = pi(la.getDefaults(), arguments, [
                        "fade"
                    ]);
                    this.fade = new fo({
                        context: this.context,
                        units: "normalRange",
                        value: t.fade
                    }), Mi(this, "fade"), this.context.getConstant(1).connect(this._panner), this._panner.connect(this._split), this._panner.channelCount = 1, this._panner.channelCountMode = "explicit", ao(this._split, this.a.gain, 0), ao(this._split, this.b.gain, 1), this.fade.chain(this._g2a, this._panner.pan), this.a.connect(this.output), this.b.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        fade: 0.5
                    });
                }
                dispose() {
                    return super.dispose(), this.a.dispose(), this.b.dispose(), this.output.dispose(), this.fade.dispose(), this._g2a.dispose(), this._panner.disconnect(), this._split.disconnect(), this;
                }
            }
            class ua extends oo {
                constructor(t){
                    super(t), this.name = "Effect", this._dryWet = new la({
                        context: this.context
                    }), this.wet = this._dryWet.fade, this.effectSend = new lo({
                        context: this.context
                    }), this.effectReturn = new lo({
                        context: this.context
                    }), this.input = new lo({
                        context: this.context
                    }), this.output = this._dryWet, this.input.fan(this._dryWet.a, this.effectSend), this.effectReturn.connect(this._dryWet.b), this.wet.setValueAtTime(t.wet, 0), this._internalChannels = [
                        this.effectReturn,
                        this.effectSend
                    ], Mi(this, "wet");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        wet: 1
                    });
                }
                connectEffect(t) {
                    return this._internalChannels.push(t), this.effectSend.chain(t, this.effectReturn), this;
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this.effectSend.dispose(), this.effectReturn.dispose(), this.wet.dispose(), this;
                }
            }
            class pa extends ua {
                constructor(t){
                    super(t), this.name = "LFOEffect", this._lfo = new rr({
                        context: this.context,
                        frequency: t.frequency,
                        amplitude: t.depth
                    }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.type = t.type, Mi(this, [
                        "frequency",
                        "depth"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        frequency: 1,
                        type: "sine",
                        depth: 1
                    });
                }
                start(t) {
                    return this._lfo.start(t), this;
                }
                stop(t) {
                    return this._lfo.stop(t), this;
                }
                sync() {
                    return this._lfo.sync(), this;
                }
                unsync() {
                    return this._lfo.unsync(), this;
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t) {
                    this._lfo.type = t;
                }
                dispose() {
                    return super.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class da extends pa {
                constructor(){
                    super(pi(da.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ])), this.name = "AutoFilter";
                    const t = pi(da.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ]);
                    this.filter = new Mr(Object.assign(t.filter, {
                        context: this.context
                    })), this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.octaves = t.octaves, this.baseFrequency = t.baseFrequency;
                }
                static getDefaults() {
                    return Object.assign(pa.getDefaults(), {
                        baseFrequency: 200,
                        octaves: 2.6,
                        filter: {
                            type: "lowpass",
                            rolloff: -12,
                            Q: 1
                        }
                    });
                }
                get baseFrequency() {
                    return this._lfo.min;
                }
                set baseFrequency(t) {
                    this._lfo.min = this.toFrequency(t), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t) {
                    this._octaves = t, this._lfo.max = this._lfo.min * Math.pow(2, t);
                }
                dispose() {
                    return super.dispose(), this.filter.dispose(), this;
                }
            }
            class fa extends oo {
                constructor(){
                    super(Object.assign(pi(fa.getDefaults(), arguments, [
                        "pan"
                    ]))), this.name = "Panner", this._panner = this.context.createStereoPanner(), this.input = this._panner, this.output = this._panner;
                    const t = pi(fa.getDefaults(), arguments, [
                        "pan"
                    ]);
                    this.pan = new io({
                        context: this.context,
                        param: this._panner.pan,
                        value: t.pan,
                        minValue: -1,
                        maxValue: 1
                    }), this._panner.channelCount = t.channelCount, this._panner.channelCountMode = "explicit", Mi(this, "pan");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        pan: 0,
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this;
                }
            }
            class _a extends pa {
                constructor(){
                    super(pi(_a.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "AutoPanner";
                    const t = pi(_a.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this._panner = new fa({
                        context: this.context,
                        channelCount: t.channelCount
                    }), this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this._lfo.min = -1, this._lfo.max = 1;
                }
                static getDefaults() {
                    return Object.assign(pa.getDefaults(), {
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this;
                }
            }
            class ma extends oo {
                constructor(){
                    super(pi(ma.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Follower";
                    const t = pi(ma.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this._abs = this.input = new pr({
                        context: this.context
                    }), this._lowpass = this.output = new Gr({
                        context: this.context,
                        frequency: 1 / this.toSeconds(t.smoothing),
                        type: "lowpass"
                    }), this._abs.connect(this._lowpass), this._smoothing = t.smoothing;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        smoothing: 0.05
                    });
                }
                get smoothing() {
                    return this._smoothing;
                }
                set smoothing(t) {
                    this._smoothing = t, this._lowpass.frequency = 1 / this.toSeconds(this.smoothing);
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this._lowpass.dispose(), this;
                }
            }
            class ga extends ua {
                constructor(){
                    super(pi(ga.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ])), this.name = "AutoWah";
                    const t = pi(ga.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ]);
                    this._follower = new ma({
                        context: this.context,
                        smoothing: t.follower
                    }), this._sweepRange = new yr({
                        context: this.context,
                        min: 0,
                        max: 1,
                        exponent: 0.5
                    }), this._baseFrequency = this.toFrequency(t.baseFrequency), this._octaves = t.octaves, this._inputBoost = new lo({
                        context: this.context
                    }), this._bandpass = new Mr({
                        context: this.context,
                        rolloff: -48,
                        frequency: 0,
                        Q: t.Q
                    }), this._peaking = new Mr({
                        context: this.context,
                        type: "peaking"
                    }), this._peaking.gain.value = t.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this._follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = t.sensitivity, Mi(this, [
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        baseFrequency: 100,
                        octaves: 6,
                        sensitivity: 0,
                        Q: 2,
                        gain: 2,
                        follower: 0.2
                    });
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t) {
                    this._octaves = t, this._setSweepRange();
                }
                get follower() {
                    return this._follower.smoothing;
                }
                set follower(t) {
                    this._follower.smoothing = t;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t) {
                    this._baseFrequency = this.toFrequency(t), this._setSweepRange();
                }
                get sensitivity() {
                    return zi(1 / this._inputBoost.gain.value);
                }
                set sensitivity(t) {
                    this._inputBoost.gain.value = 1 / Li(t);
                }
                _setSweepRange() {
                    this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
                }
                dispose() {
                    return super.dispose(), this._follower.dispose(), this._sweepRange.dispose(), this._bandpass.dispose(), this._peaking.dispose(), this._inputBoost.dispose(), this;
                }
            }
            const va = "bit-crusher";
            zr(va, "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n");
            class ya extends ua {
                constructor(){
                    super(pi(ya.getDefaults(), arguments, [
                        "bits"
                    ])), this.name = "BitCrusher";
                    const t = pi(ya.getDefaults(), arguments, [
                        "bits"
                    ]);
                    this._bitCrusherWorklet = new xa({
                        context: this.context,
                        bits: t.bits
                    }), this.connectEffect(this._bitCrusherWorklet), this.bits = this._bitCrusherWorklet.bits;
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        bits: 4
                    });
                }
                dispose() {
                    return super.dispose(), this._bitCrusherWorklet.dispose(), this;
                }
            }
            class xa extends Wr {
                constructor(){
                    super(pi(xa.getDefaults(), arguments)), this.name = "BitCrusherWorklet";
                    const t = pi(xa.getDefaults(), arguments);
                    this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this.bits = new io({
                        context: this.context,
                        value: t.bits,
                        units: "positive",
                        minValue: 1,
                        maxValue: 16,
                        param: this._dummyParam,
                        swappable: !0
                    });
                }
                static getDefaults() {
                    return Object.assign(Wr.getDefaults(), {
                        bits: 12
                    });
                }
                _audioWorkletName() {
                    return va;
                }
                onReady(t) {
                    ro(this.input, t, this.output);
                    const e = t.parameters.get("bits");
                    this.bits.setParam(e);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.bits.dispose(), this;
                }
            }
            class wa extends ua {
                constructor(){
                    super(pi(wa.getDefaults(), arguments, [
                        "order"
                    ])), this.name = "Chebyshev";
                    const t = pi(wa.getDefaults(), arguments, [
                        "order"
                    ]);
                    this._shaper = new Zo({
                        context: this.context,
                        length: 4096
                    }), this._order = t.order, this.connectEffect(this._shaper), this.order = t.order, this.oversample = t.oversample;
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        order: 1,
                        oversample: "none"
                    });
                }
                _getCoefficient(t, e, s) {
                    return s.has(e) || (0 === e ? s.set(e, 0) : 1 === e ? s.set(e, t) : s.set(e, 2 * t * this._getCoefficient(t, e - 1, s) - this._getCoefficient(t, e - 2, s))), s.get(e);
                }
                get order() {
                    return this._order;
                }
                set order(t) {
                    Bn(Number.isInteger(t), "'order' must be an integer"), this._order = t, this._shaper.setMap((e)=>this._getCoefficient(e, t, new Map)
                    );
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t) {
                    this._shaper.oversample = t;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class ba extends oo {
                constructor(){
                    super(pi(ba.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Split";
                    const t = pi(ba.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._splitter = this.input = this.output = this.context.createChannelSplitter(t.channels), this._internalChannels = [
                        this._splitter
                    ];
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.disconnect(), this;
                }
            }
            class Ta extends oo {
                constructor(){
                    super(pi(Ta.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Merge";
                    const t = pi(Ta.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._merger = this.output = this.input = this.context.createChannelMerger(t.channels);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._merger.disconnect(), this;
                }
            }
            class Sa extends oo {
                constructor(t){
                    super(t), this.name = "StereoEffect", this.input = new lo({
                        context: this.context
                    }), this.input.channelCount = 2, this.input.channelCountMode = "explicit", this._dryWet = this.output = new la({
                        context: this.context,
                        fade: t.wet
                    }), this.wet = this._dryWet.fade, this._split = new ba({
                        context: this.context,
                        channels: 2
                    }), this._merge = new Ta({
                        context: this.context,
                        channels: 2
                    }), this.input.connect(this._split), this.input.connect(this._dryWet.a), this._merge.connect(this._dryWet.b), Mi(this, [
                        "wet"
                    ]);
                }
                connectEffectLeft(...t) {
                    this._split.connect(t[0], 0, 0), ro(...t), ao(t[t.length - 1], this._merge, 0, 0);
                }
                connectEffectRight(...t) {
                    this._split.connect(t[0], 1, 0), ro(...t), ao(t[t.length - 1], this._merge, 0, 1);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        wet: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this._split.dispose(), this._merge.dispose(), this;
                }
            }
            class ka extends Sa {
                constructor(t){
                    super(t), this.feedback = new fo({
                        context: this.context,
                        value: t.feedback,
                        units: "normalRange"
                    }), this._feedbackL = new lo({
                        context: this.context
                    }), this._feedbackR = new lo({
                        context: this.context
                    }), this._feedbackSplit = new ba({
                        context: this.context,
                        channels: 2
                    }), this._feedbackMerge = new Ta({
                        context: this.context,
                        channels: 2
                    }), this._merge.connect(this._feedbackSplit), this._feedbackMerge.connect(this._split), this._feedbackSplit.connect(this._feedbackL, 0, 0), this._feedbackL.connect(this._feedbackMerge, 0, 0), this._feedbackSplit.connect(this._feedbackR, 1, 0), this._feedbackR.connect(this._feedbackMerge, 0, 1), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), Mi(this, [
                        "feedback"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sa.getDefaults(), {
                        feedback: 0.5
                    });
                }
                dispose() {
                    return super.dispose(), this.feedback.dispose(), this._feedbackL.dispose(), this._feedbackR.dispose(), this._feedbackSplit.dispose(), this._feedbackMerge.dispose(), this;
                }
            }
            class Aa extends ka {
                constructor(){
                    super(pi(Aa.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ])), this.name = "Chorus";
                    const t = pi(Aa.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ]);
                    this._depth = t.depth, this._delayTime = t.delayTime / 1000, this._lfoL = new rr({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new rr({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._delayNodeL = new xo({
                        context: this.context
                    }), this._delayNodeR = new xo({
                        context: this.context
                    }), this.frequency = this._lfoL.frequency, Mi(this, [
                        "frequency"
                    ]), this._lfoL.frequency.connect(this._lfoR.frequency), this.connectEffectLeft(this._delayNodeL), this.connectEffectRight(this._delayNodeR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this.depth = this._depth, this.type = t.type, this.spread = t.spread;
                }
                static getDefaults() {
                    return Object.assign(ka.getDefaults(), {
                        frequency: 1.5,
                        delayTime: 3.5,
                        depth: 0.7,
                        type: "sine",
                        spread: 180,
                        feedback: 0,
                        wet: 0.5
                    });
                }
                get depth() {
                    return this._depth;
                }
                set depth(t) {
                    this._depth = t;
                    const e = this._delayTime * t;
                    this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e;
                }
                get delayTime() {
                    return 1000 * this._delayTime;
                }
                set delayTime(t) {
                    this._delayTime = t / 1000, this.depth = this._depth;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t) {
                    this._lfoL.type = t, this._lfoR.type = t;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t) {
                    this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90;
                }
                start(t) {
                    return this._lfoL.start(t), this._lfoR.start(t), this;
                }
                stop(t) {
                    return this._lfoL.stop(t), this._lfoR.stop(t), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._delayNodeL.dispose(), this._delayNodeR.dispose(), this.frequency.dispose(), this;
                }
            }
            class Ca extends ua {
                constructor(){
                    super(pi(Ca.getDefaults(), arguments, [
                        "distortion"
                    ])), this.name = "Distortion";
                    const t = pi(Ca.getDefaults(), arguments, [
                        "distortion"
                    ]);
                    this._shaper = new Zo({
                        context: this.context,
                        length: 4096
                    }), this._distortion = t.distortion, this.connectEffect(this._shaper), this.distortion = t.distortion, this.oversample = t.oversample;
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        distortion: 0.4,
                        oversample: "none"
                    });
                }
                get distortion() {
                    return this._distortion;
                }
                set distortion(t283) {
                    this._distortion = t283;
                    const e = 100 * t283, s = Math.PI / 180;
                    this._shaper.setMap((t)=>Math.abs(t) < 0.001 ? 0 : (3 + e) * t * 20 * s / (Math.PI + e * Math.abs(t))
                    );
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t) {
                    this._shaper.oversample = t;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class Da extends ua {
                constructor(t){
                    super(t), this.name = "FeedbackEffect", this._feedbackGain = new lo({
                        context: this.context,
                        gain: t.feedback,
                        units: "normalRange"
                    }), this.feedback = this._feedbackGain.gain, Mi(this, "feedback"), this.effectReturn.chain(this._feedbackGain, this.effectSend);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        feedback: 0.125
                    });
                }
                dispose() {
                    return super.dispose(), this._feedbackGain.dispose(), this.feedback.dispose(), this;
                }
            }
            class Oa extends Da {
                constructor(){
                    super(pi(Oa.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "FeedbackDelay";
                    const t = pi(Oa.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._delayNode = new xo({
                        context: this.context,
                        delayTime: t.delayTime,
                        maxDelay: t.maxDelay
                    }), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), Mi(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(Da.getDefaults(), {
                        delayTime: 0.25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this.delayTime.dispose(), this;
                }
            }
            class Ma extends oo {
                constructor(t){
                    super(t), this.name = "PhaseShiftAllpass", this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this.offset90 = new lo({
                        context: this.context
                    }), this._bank0 = this._createAllPassFilterBank([
                        0.6923878,
                        0.9360654322959,
                        0.988229522686,
                        0.9987488452737
                    ]), this._bank1 = this._createAllPassFilterBank([
                        0.4021921162426,
                        0.856171088242,
                        0.9722909545651,
                        0.9952884791278
                    ]), this._oneSampleDelay = this.context.createIIRFilter([
                        0,
                        1
                    ], [
                        1,
                        0
                    ]), ro(this.input, ...this._bank0, this._oneSampleDelay, this.output), ro(this.input, ...this._bank1, this.offset90);
                }
                _createAllPassFilterBank(t284) {
                    return t284.map((t)=>{
                        const e = [
                            [
                                t * t,
                                0,
                                -1
                            ],
                            [
                                1,
                                0,
                                -t * t
                            ]
                        ];
                        return this.context.createIIRFilter(e[0], e[1]);
                    });
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.offset90.dispose(), this._bank0.forEach((t)=>t.disconnect()
                    ), this._bank1.forEach((t)=>t.disconnect()
                    ), this._oneSampleDelay.disconnect(), this;
                }
            }
            class Ea extends ua {
                constructor(){
                    super(pi(Ea.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "FrequencyShifter";
                    const t = pi(Ea.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency,
                        minValue: -this.context.sampleRate / 2,
                        maxValue: this.context.sampleRate / 2
                    }), this._sine = new Uo({
                        context: this.context,
                        type: "sine"
                    }), this._cosine = new Go({
                        context: this.context,
                        phase: -90,
                        type: "sine"
                    }), this._sineMultiply = new Yo({
                        context: this.context
                    }), this._cosineMultiply = new Yo({
                        context: this.context
                    }), this._negate = new fr({
                        context: this.context
                    }), this._add = new nr({
                        context: this.context
                    }), this._phaseShifter = new Ma({
                        context: this.context
                    }), this.effectSend.connect(this._phaseShifter), this.frequency.fan(this._sine.frequency, this._cosine.frequency), this._phaseShifter.offset90.connect(this._cosineMultiply), this._cosine.connect(this._cosineMultiply.factor), this._phaseShifter.connect(this._sineMultiply), this._sine.connect(this._sineMultiply.factor), this._sineMultiply.connect(this._negate), this._cosineMultiply.connect(this._add), this._negate.connect(this._add.addend), this._add.connect(this.effectReturn);
                    const e = this.immediate();
                    this._sine.start(e), this._cosine.start(e);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        frequency: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this._add.dispose(), this._cosine.dispose(), this._cosineMultiply.dispose(), this._negate.dispose(), this._phaseShifter.dispose(), this._sine.dispose(), this._sineMultiply.dispose(), this;
                }
            }
            const Ra = [
                1557 / 44100,
                1617 / 44100,
                1491 / 44100,
                1422 / 44100,
                1277 / 44100,
                1356 / 44100,
                1188 / 44100,
                1116 / 44100
            ], qa = [
                225,
                556,
                441,
                341
            ];
            class Fa extends Sa {
                constructor(){
                    super(pi(Fa.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ])), this.name = "Freeverb", this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                    const t285 = pi(Fa.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ]);
                    this.roomSize = new fo({
                        context: this.context,
                        value: t285.roomSize,
                        units: "normalRange"
                    }), this._allpassFiltersL = qa.map((t)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t, e;
                    }), this._allpassFiltersR = qa.map((t)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t, e;
                    }), this._combFilters = Ra.map((e, s)=>{
                        const n = new Qr({
                            context: this.context,
                            dampening: t285.dampening,
                            delayTime: e
                        });
                        return s < Ra.length / 2 ? this.connectEffectLeft(n, ...this._allpassFiltersL) : this.connectEffectRight(n, ...this._allpassFiltersR), this.roomSize.connect(n.resonance), n;
                    }), Mi(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sa.getDefaults(), {
                        roomSize: 0.7,
                        dampening: 3000
                    });
                }
                get dampening() {
                    return this._combFilters[0].dampening;
                }
                set dampening(t) {
                    this._combFilters.forEach((e)=>e.dampening = t
                    );
                }
                dispose() {
                    return super.dispose(), this._allpassFiltersL.forEach((t)=>t.disconnect()
                    ), this._allpassFiltersR.forEach((t)=>t.disconnect()
                    ), this._combFilters.forEach((t)=>t.dispose()
                    ), this.roomSize.dispose(), this;
                }
            }
            const Ia = [
                0.06748,
                0.06404,
                0.08212,
                0.09004
            ], Va = [
                0.773,
                0.802,
                0.753,
                0.733
            ], Na = [
                347,
                113,
                37
            ];
            class Pa extends Sa {
                constructor(){
                    super(pi(Pa.getDefaults(), arguments, [
                        "roomSize"
                    ])), this.name = "JCReverb", this._allpassFilters = [], this._feedbackCombFilters = [];
                    const t286 = pi(Pa.getDefaults(), arguments, [
                        "roomSize"
                    ]);
                    this.roomSize = new fo({
                        context: this.context,
                        value: t286.roomSize,
                        units: "normalRange"
                    }), this._scaleRoomSize = new ir({
                        context: this.context,
                        min: -0.733,
                        max: 0.197
                    }), this._allpassFilters = Na.map((t)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t, e;
                    }), this._feedbackCombFilters = Ia.map((t, e)=>{
                        const s = new Ur({
                            context: this.context,
                            delayTime: t
                        });
                        return this._scaleRoomSize.connect(s.resonance), s.resonance.value = Va[e], e < Ia.length / 2 ? this.connectEffectLeft(...this._allpassFilters, s) : this.connectEffectRight(...this._allpassFilters, s), s;
                    }), this.roomSize.connect(this._scaleRoomSize), Mi(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sa.getDefaults(), {
                        roomSize: 0.5
                    });
                }
                dispose() {
                    return super.dispose(), this._allpassFilters.forEach((t)=>t.disconnect()
                    ), this._feedbackCombFilters.forEach((t)=>t.dispose()
                    ), this.roomSize.dispose(), this._scaleRoomSize.dispose(), this;
                }
            }
            class ja extends ka {
                constructor(t){
                    super(t), this._feedbackL.disconnect(), this._feedbackL.connect(this._feedbackMerge, 0, 1), this._feedbackR.disconnect(), this._feedbackR.connect(this._feedbackMerge, 0, 0), Mi(this, [
                        "feedback"
                    ]);
                }
            }
            class La extends ja {
                constructor(){
                    super(pi(La.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "PingPongDelay";
                    const t = pi(La.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._leftDelay = new xo({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }), this._rightDelay = new xo({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }), this._rightPreDelay = new xo({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }), this.delayTime = new fo({
                        context: this.context,
                        units: "time",
                        value: t.delayTime
                    }), this.connectEffectLeft(this._leftDelay), this.connectEffectRight(this._rightPreDelay, this._rightDelay), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackL.disconnect(), this._feedbackL.connect(this._rightDelay), Mi(this, [
                        "delayTime"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ja.getDefaults(), {
                        delayTime: 0.25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._leftDelay.dispose(), this._rightDelay.dispose(), this._rightPreDelay.dispose(), this.delayTime.dispose(), this;
                }
            }
            class za extends Da {
                constructor(){
                    super(pi(za.getDefaults(), arguments, [
                        "pitch"
                    ])), this.name = "PitchShift";
                    const t = pi(za.getDefaults(), arguments, [
                        "pitch"
                    ]);
                    this._frequency = new fo({
                        context: this.context
                    }), this._delayA = new xo({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoA = new rr({
                        context: this.context,
                        min: 0,
                        max: 0.1,
                        type: "sawtooth"
                    }).connect(this._delayA.delayTime), this._delayB = new xo({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoB = new rr({
                        context: this.context,
                        min: 0,
                        max: 0.1,
                        type: "sawtooth",
                        phase: 180
                    }).connect(this._delayB.delayTime), this._crossFade = new la({
                        context: this.context
                    }), this._crossFadeLFO = new rr({
                        context: this.context,
                        min: 0,
                        max: 1,
                        type: "triangle",
                        phase: 90
                    }).connect(this._crossFade.fade), this._feedbackDelay = new xo({
                        delayTime: t.delayTime,
                        context: this.context
                    }), this.delayTime = this._feedbackDelay.delayTime, Mi(this, "delayTime"), this._pitch = t.pitch, this._windowSize = t.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                    const e = this.now();
                    this._lfoA.start(e), this._lfoB.start(e), this._crossFadeLFO.start(e), this.windowSize = this._windowSize;
                }
                static getDefaults() {
                    return Object.assign(Da.getDefaults(), {
                        pitch: 0,
                        windowSize: 0.1,
                        delayTime: 0,
                        feedback: 0
                    });
                }
                get pitch() {
                    return this._pitch;
                }
                set pitch(t) {
                    this._pitch = t;
                    let e = 0;
                    t < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, e = Wi(t - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, e = Wi(t) - 1), this._frequency.value = e * (1.2 / this._windowSize);
                }
                get windowSize() {
                    return this._windowSize;
                }
                set windowSize(t) {
                    this._windowSize = this.toSeconds(t), this.pitch = this._pitch;
                }
                dispose() {
                    return super.dispose(), this._frequency.dispose(), this._delayA.dispose(), this._delayB.dispose(), this._lfoA.dispose(), this._lfoB.dispose(), this._crossFade.dispose(), this._crossFadeLFO.dispose(), this._feedbackDelay.dispose(), this;
                }
            }
            class Wa extends Sa {
                constructor(){
                    super(pi(Wa.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ])), this.name = "Phaser";
                    const t = pi(Wa.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ]);
                    this._lfoL = new rr({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new rr({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._baseFrequency = this.toFrequency(t.baseFrequency), this._octaves = t.octaves, this.Q = new fo({
                        context: this.context,
                        value: t.Q,
                        units: "positive"
                    }), this._filtersL = this._makeFilters(t.stages, this._lfoL), this._filtersR = this._makeFilters(t.stages, this._lfoR), this.frequency = this._lfoL.frequency, this.frequency.value = t.frequency, this.connectEffectLeft(...this._filtersL), this.connectEffectRight(...this._filtersR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = t.baseFrequency, this.octaves = t.octaves, this._lfoL.start(), this._lfoR.start(), Mi(this, [
                        "frequency",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Sa.getDefaults(), {
                        frequency: 0.5,
                        octaves: 3,
                        stages: 10,
                        Q: 10,
                        baseFrequency: 350
                    });
                }
                _makeFilters(t, e) {
                    const s = [];
                    for(let n = 0; n < t; n++){
                        const t = this.context.createBiquadFilter();
                        t.type = "allpass", this.Q.connect(t.Q), e.connect(t.frequency), s.push(t);
                    }
                    return s;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t) {
                    this._octaves = t;
                    const e = this._baseFrequency * Math.pow(2, t);
                    this._lfoL.max = e, this._lfoR.max = e;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t) {
                    this._baseFrequency = this.toFrequency(t), this._lfoL.min = this._baseFrequency, this._lfoR.min = this._baseFrequency, this.octaves = this._octaves;
                }
                dispose() {
                    return super.dispose(), this.Q.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._filtersL.forEach((t)=>t.disconnect()
                    ), this._filtersR.forEach((t)=>t.disconnect()
                    ), this.frequency.dispose(), this;
                }
            }
            class Ba extends ua {
                constructor(){
                    super(pi(Ba.getDefaults(), arguments, [
                        "decay"
                    ])), this.name = "Reverb", this._convolver = this.context.createConvolver(), this.ready = Promise.resolve();
                    const t = pi(Ba.getDefaults(), arguments, [
                        "decay"
                    ]);
                    this._decay = t.decay, this._preDelay = t.preDelay, this.generate(), this.connectEffect(this._convolver);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        decay: 1.5,
                        preDelay: 0.01
                    });
                }
                get decay() {
                    return this._decay;
                }
                set decay(t) {
                    Un(t = this.toSeconds(t), 0.001), this._decay = t, this.generate();
                }
                get preDelay() {
                    return this._preDelay;
                }
                set preDelay(t) {
                    Un(t = this.toSeconds(t), 0), this._preDelay = t, this.generate();
                }
                generate() {
                    return ni(this, void 0, void 0, function*() {
                        const t = this.ready, e = new Fi(2, this._decay + this._preDelay, this.context.sampleRate), s = new Po({
                            context: e
                        }), n = new Po({
                            context: e
                        }), i = new Ta({
                            context: e
                        });
                        s.connect(i, 0, 0), n.connect(i, 0, 1);
                        const o = new lo({
                            context: e
                        }).toDestination();
                        i.connect(o), s.start(0), n.start(0), o.gain.setValueAtTime(0, 0), o.gain.setValueAtTime(1, this._preDelay), o.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
                        const r = e.render();
                        return this.ready = r.then(Ri), yield t, this._convolver.buffer = (yield r).get(), this;
                    });
                }
                dispose() {
                    return super.dispose(), this._convolver.disconnect(), this;
                }
            }
            class Ua extends oo {
                constructor(){
                    super(pi(Ua.getDefaults(), arguments)), this.name = "MidSideSplit", this._split = this.input = new ba({
                        channels: 2,
                        context: this.context
                    }), this._midAdd = new nr({
                        context: this.context
                    }), this.mid = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._sideSubtract = new _r({
                        context: this.context
                    }), this.side = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._split.connect(this._midAdd, 0), this._split.connect(this._midAdd.addend, 1), this._split.connect(this._sideSubtract, 0), this._split.connect(this._sideSubtract.subtrahend, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midAdd.dispose(), this._sideSubtract.dispose(), this._split.dispose(), this;
                }
            }
            class Ga extends oo {
                constructor(){
                    super(pi(Ga.getDefaults(), arguments)), this.name = "MidSideMerge", this.mid = new lo({
                        context: this.context
                    }), this.side = new lo({
                        context: this.context
                    }), this._left = new nr({
                        context: this.context
                    }), this._leftMult = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._right = new _r({
                        context: this.context
                    }), this._rightMult = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._merge = this.output = new Ta({
                        context: this.context
                    }), this.mid.fan(this._left), this.side.connect(this._left.addend), this.mid.connect(this._right), this.side.connect(this._right.subtrahend), this._left.connect(this._leftMult), this._right.connect(this._rightMult), this._leftMult.connect(this._merge, 0, 0), this._rightMult.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._leftMult.dispose(), this._rightMult.dispose(), this._left.dispose(), this._right.dispose(), this;
                }
            }
            class Qa extends ua {
                constructor(t){
                    super(t), this.name = "MidSideEffect", this._midSideMerge = new Ga({
                        context: this.context
                    }), this._midSideSplit = new Ua({
                        context: this.context
                    }), this._midSend = this._midSideSplit.mid, this._sideSend = this._midSideSplit.side, this._midReturn = this._midSideMerge.mid, this._sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn);
                }
                connectEffectMid(...t) {
                    this._midSend.chain(...t, this._midReturn);
                }
                connectEffectSide(...t) {
                    this._sideSend.chain(...t, this._sideReturn);
                }
                dispose() {
                    return super.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this._midSend.dispose(), this._sideSend.dispose(), this._midReturn.dispose(), this._sideReturn.dispose(), this;
                }
            }
            class Za extends Qa {
                constructor(){
                    super(pi(Za.getDefaults(), arguments, [
                        "width"
                    ])), this.name = "StereoWidener";
                    const t = pi(Za.getDefaults(), arguments, [
                        "width"
                    ]);
                    this.width = new fo({
                        context: this.context,
                        value: t.width,
                        units: "normalRange"
                    }), Mi(this, [
                        "width"
                    ]), this._twoTimesWidthMid = new Yo({
                        context: this.context,
                        value: 2
                    }), this._twoTimesWidthSide = new Yo({
                        context: this.context,
                        value: 2
                    }), this._midMult = new Yo({
                        context: this.context
                    }), this._twoTimesWidthMid.connect(this._midMult.factor), this.connectEffectMid(this._midMult), this._oneMinusWidth = new _r({
                        context: this.context
                    }), this._oneMinusWidth.connect(this._twoTimesWidthMid), ao(this.context.getConstant(1), this._oneMinusWidth), this.width.connect(this._oneMinusWidth.subtrahend), this._sideMult = new Yo({
                        context: this.context
                    }), this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult.factor), this.connectEffectSide(this._sideMult);
                }
                static getDefaults() {
                    return Object.assign(Qa.getDefaults(), {
                        width: 0.5
                    });
                }
                dispose() {
                    return super.dispose(), this.width.dispose(), this._midMult.dispose(), this._sideMult.dispose(), this._twoTimesWidthMid.dispose(), this._twoTimesWidthSide.dispose(), this._oneMinusWidth.dispose(), this;
                }
            }
            class Xa extends Sa {
                constructor(){
                    super(pi(Xa.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Tremolo";
                    const t = pi(Xa.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._lfoL = new rr({
                        context: this.context,
                        type: t.type,
                        min: 1,
                        max: 0
                    }), this._lfoR = new rr({
                        context: this.context,
                        type: t.type,
                        min: 1,
                        max: 0
                    }), this._amplitudeL = new lo({
                        context: this.context
                    }), this._amplitudeR = new lo({
                        context: this.context
                    }), this.frequency = new fo({
                        context: this.context,
                        value: t.frequency,
                        units: "frequency"
                    }), this.depth = new fo({
                        context: this.context,
                        value: t.depth,
                        units: "normalRange"
                    }), Mi(this, [
                        "frequency",
                        "depth"
                    ]), this.connectEffectLeft(this._amplitudeL), this.connectEffectRight(this._amplitudeR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.spread = t.spread;
                }
                static getDefaults() {
                    return Object.assign(Sa.getDefaults(), {
                        frequency: 10,
                        type: "sine",
                        depth: 0.5,
                        spread: 180
                    });
                }
                start(t) {
                    return this._lfoL.start(t), this._lfoR.start(t), this;
                }
                stop(t) {
                    return this._lfoL.stop(t), this._lfoR.stop(t), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this.context.transport.syncSignal(this.frequency), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this.context.transport.unsyncSignal(this.frequency), this;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t) {
                    this._lfoL.type = t, this._lfoR.type = t;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t) {
                    this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._amplitudeL.dispose(), this._amplitudeR.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class Ya extends ua {
                constructor(){
                    super(pi(Ya.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Vibrato";
                    const t = pi(Ya.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._delayNode = new xo({
                        context: this.context,
                        delayTime: 0,
                        maxDelay: t.maxDelay
                    }), this._lfo = new rr({
                        context: this.context,
                        type: t.type,
                        min: 0,
                        max: t.maxDelay,
                        frequency: t.frequency,
                        phase: -90
                    }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = t.depth, Mi(this, [
                        "frequency",
                        "depth"
                    ]), this.effectSend.chain(this._delayNode, this.effectReturn);
                }
                static getDefaults() {
                    return Object.assign(ua.getDefaults(), {
                        maxDelay: 0.005,
                        frequency: 5,
                        depth: 0.1,
                        type: "sine"
                    });
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t) {
                    this._lfo.type = t;
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class $a extends oo {
                constructor(){
                    super(pi($a.getDefaults(), arguments, [
                        "type",
                        "size"
                    ])), this.name = "Analyser", this._analysers = [], this._buffers = [];
                    const t = pi($a.getDefaults(), arguments, [
                        "type",
                        "size"
                    ]);
                    this.input = this.output = this._gain = new lo({
                        context: this.context
                    }), this._split = new ba({
                        context: this.context,
                        channels: t.channels
                    }), this.input.connect(this._split), Un(t.channels, 1);
                    for(let e = 0; e < t.channels; e++)this._analysers[e] = this.context.createAnalyser(), this._split.connect(this._analysers[e], e, 0);
                    this.size = t.size, this.type = t.type, this.smoothing = t.smoothing;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        size: 1024,
                        smoothing: 0.8,
                        type: "fft",
                        channels: 1
                    });
                }
                getValue() {
                    return this._analysers.forEach((t, e)=>{
                        const s = this._buffers[e];
                        "fft" === this._type ? t.getFloatFrequencyData(s) : "waveform" === this._type && t.getFloatTimeDomainData(s);
                    }), 1 === this.channels ? this._buffers[0] : this._buffers;
                }
                get size() {
                    return this._analysers[0].frequencyBinCount;
                }
                set size(t) {
                    this._analysers.forEach((e, s)=>{
                        e.fftSize = 2 * t, this._buffers[s] = new Float32Array(t);
                    });
                }
                get channels() {
                    return this._analysers.length;
                }
                get type() {
                    return this._type;
                }
                set type(t) {
                    Bn("waveform" === t || "fft" === t, `Analyser: invalid type: ${t}`), this._type = t;
                }
                get smoothing() {
                    return this._analysers[0].smoothingTimeConstant;
                }
                set smoothing(t) {
                    this._analysers.forEach((e)=>e.smoothingTimeConstant = t
                    );
                }
                dispose() {
                    return super.dispose(), this._analysers.forEach((t)=>t.disconnect()
                    ), this._split.dispose(), this._gain.dispose(), this;
                }
            }
            class Ha extends oo {
                constructor(){
                    super(pi(Ha.getDefaults(), arguments)), this.name = "MeterBase", this.input = this.output = this._analyser = new $a({
                        context: this.context,
                        size: 256,
                        type: "waveform"
                    });
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class Ja extends Ha {
                constructor(){
                    super(pi(Ja.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Meter", this._rms = 0;
                    const t = pi(Ja.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this.input = this.output = this._analyser = new $a({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                        channels: t.channelCount
                    }), this.smoothing = t.smoothing, this.normalRange = t.normalRange;
                }
                static getDefaults() {
                    return Object.assign(Ha.getDefaults(), {
                        smoothing: 0.8,
                        normalRange: !1,
                        channelCount: 1
                    });
                }
                getLevel() {
                    return Kn("'getLevel' has been changed to 'getValue'"), this.getValue();
                }
                getValue() {
                    const t287 = this._analyser.getValue(), e147 = (1 === this.channels ? [
                        t287
                    ] : t287).map((t288)=>{
                        const e148 = t288.reduce((t, e)=>t + e * e
                        , 0), s = Math.sqrt(e148 / t288.length);
                        return this._rms = Math.max(s, this._rms * this.smoothing), this.normalRange ? this._rms : zi(this._rms);
                    });
                    return 1 === this.channels ? e147[0] : e147;
                }
                get channels() {
                    return this._analyser.channels;
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class Ka extends Ha {
                constructor(){
                    super(pi(Ka.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "FFT";
                    const t = pi(Ka.getDefaults(), arguments, [
                        "size"
                    ]);
                    this.normalRange = t.normalRange, this._analyser.type = "fft", this.size = t.size;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        normalRange: !1,
                        size: 1024,
                        smoothing: 0.8
                    });
                }
                getValue() {
                    return this._analyser.getValue().map((t)=>this.normalRange ? Li(t) : t
                    );
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t) {
                    this._analyser.size = t;
                }
                get smoothing() {
                    return this._analyser.smoothing;
                }
                set smoothing(t) {
                    this._analyser.smoothing = t;
                }
                getFrequencyOfIndex(t) {
                    return Bn(0 <= t && t < this.size, `index must be greater than or equal to 0 and less than ${this.size}`), t * this.context.sampleRate / (2 * this.size);
                }
            }
            class tc extends Ha {
                constructor(){
                    super(pi(tc.getDefaults(), arguments)), this.name = "DCMeter", this._analyser.type = "waveform", this._analyser.size = 256;
                }
                getValue() {
                    return this._analyser.getValue()[0];
                }
            }
            class ec extends Ha {
                constructor(){
                    super(pi(ec.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "Waveform";
                    const t = pi(ec.getDefaults(), arguments, [
                        "size"
                    ]);
                    this._analyser.type = "waveform", this.size = t.size;
                }
                static getDefaults() {
                    return Object.assign(Ha.getDefaults(), {
                        size: 1024
                    });
                }
                getValue() {
                    return this._analyser.getValue();
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t) {
                    this._analyser.size = t;
                }
            }
            class sc extends oo {
                constructor(){
                    super(pi(sc.getDefaults(), arguments, [
                        "solo"
                    ])), this.name = "Solo";
                    const t = pi(sc.getDefaults(), arguments, [
                        "solo"
                    ]);
                    this.input = this.output = new lo({
                        context: this.context
                    }), sc._allSolos.has(this.context) || sc._allSolos.set(this.context, new Set), sc._allSolos.get(this.context).add(this), this.solo = t.solo;
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        solo: !1
                    });
                }
                get solo() {
                    return this._isSoloed();
                }
                set solo(t289) {
                    t289 ? this._addSolo() : this._removeSolo(), sc._allSolos.get(this.context).forEach((t)=>t._updateSolo()
                    );
                }
                get muted() {
                    return 0 === this.input.gain.value;
                }
                _addSolo() {
                    sc._soloed.has(this.context) || sc._soloed.set(this.context, new Set), sc._soloed.get(this.context).add(this);
                }
                _removeSolo() {
                    sc._soloed.has(this.context) && sc._soloed.get(this.context).delete(this);
                }
                _isSoloed() {
                    return sc._soloed.has(this.context) && sc._soloed.get(this.context).has(this);
                }
                _noSolos() {
                    return !sc._soloed.has(this.context) || sc._soloed.has(this.context) && 0 === sc._soloed.get(this.context).size;
                }
                _updateSolo() {
                    this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
                }
                dispose() {
                    return super.dispose(), sc._allSolos.get(this.context).delete(this), this._removeSolo(), this;
                }
            }
            sc._allSolos = new Map, sc._soloed = new Map;
            class nc extends oo {
                constructor(){
                    super(pi(nc.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ])), this.name = "PanVol";
                    const t = pi(nc.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ]);
                    this._panner = this.input = new fa({
                        context: this.context,
                        pan: t.pan,
                        channelCount: t.channelCount
                    }), this.pan = this._panner.pan, this._volume = this.output = new Mo({
                        context: this.context,
                        volume: t.volume
                    }), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t.mute, Mi(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mute: !1,
                        pan: 0,
                        volume: 0,
                        channelCount: 1
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t) {
                    this._volume.mute = t;
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this;
                }
            }
            class ic extends oo {
                constructor(){
                    super(pi(ic.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ])), this.name = "Channel";
                    const t = pi(ic.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ]);
                    this._solo = this.input = new sc({
                        solo: t.solo,
                        context: this.context
                    }), this._panVol = this.output = new nc({
                        context: this.context,
                        pan: t.pan,
                        volume: t.volume,
                        mute: t.mute,
                        channelCount: t.channelCount
                    }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), Mi(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        pan: 0,
                        volume: 0,
                        mute: !1,
                        solo: !1,
                        channelCount: 1
                    });
                }
                get solo() {
                    return this._solo.solo;
                }
                set solo(t) {
                    this._solo.solo = t;
                }
                get muted() {
                    return this._solo.muted || this.mute;
                }
                get mute() {
                    return this._panVol.mute;
                }
                set mute(t) {
                    this._panVol.mute = t;
                }
                _getBus(t) {
                    return ic.buses.has(t) || ic.buses.set(t, new lo({
                        context: this.context
                    })), ic.buses.get(t);
                }
                send(t, e = 0) {
                    const s = this._getBus(t), n = new lo({
                        context: this.context,
                        units: "decibels",
                        gain: e
                    });
                    return this.connect(n), n.connect(s), n;
                }
                receive(t) {
                    return this._getBus(t).connect(this), this;
                }
                dispose() {
                    return super.dispose(), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this;
                }
            }
            ic.buses = new Map;
            class oc extends oo {
                constructor(){
                    super(pi(oc.getDefaults(), arguments)), this.name = "Mono", this.input = new lo({
                        context: this.context
                    }), this._merge = this.output = new Ta({
                        channels: 2,
                        context: this.context
                    }), this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this._merge.dispose(), this.input.dispose(), this;
                }
            }
            class rc extends oo {
                constructor(){
                    super(pi(rc.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ])), this.name = "MultibandSplit", this.input = new lo({
                        context: this.context
                    }), this.output = void 0, this.low = new Mr({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this._lowMidFilter = new Mr({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this.mid = new Mr({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this.high = new Mr({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this._internalChannels = [
                        this.low,
                        this.mid,
                        this.high
                    ];
                    const t = pi(rc.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ]);
                    this.lowFrequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.lowFrequency
                    }), this.highFrequency = new fo({
                        context: this.context,
                        units: "frequency",
                        value: t.highFrequency
                    }), this.Q = new fo({
                        context: this.context,
                        units: "positive",
                        value: t.Q
                    }), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency), this.highFrequency.fan(this.mid.frequency, this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), Mi(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        Q: 1,
                        highFrequency: 2500,
                        lowFrequency: 400
                    });
                }
                dispose() {
                    return super.dispose(), Ei(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]), this.low.dispose(), this._lowMidFilter.dispose(), this.mid.dispose(), this.high.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this.Q.dispose(), this;
                }
            }
            class ac extends oo {
                constructor(){
                    super(...arguments), this.name = "Listener", this.positionX = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.positionX
                    }), this.positionY = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.positionY
                    }), this.positionZ = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.positionZ
                    }), this.forwardX = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardX
                    }), this.forwardY = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardY
                    }), this.forwardZ = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardZ
                    }), this.upX = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.upX
                    }), this.upY = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.upY
                    }), this.upZ = new io({
                        context: this.context,
                        param: this.context.rawContext.listener.upZ
                    });
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        forwardX: 0,
                        forwardY: 0,
                        forwardZ: -1,
                        upX: 0,
                        upY: 1,
                        upZ: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this;
                }
            }
            Si((t)=>{
                t.listener = new ac({
                    context: t
                });
            }), Ai((t)=>{
                t.listener.dispose();
            });
            class cc extends oo {
                constructor(){
                    super(pi(cc.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ])), this.name = "Panner3D";
                    const t = pi(cc.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ]);
                    this._panner = this.input = this.output = this.context.createPanner(), this.panningModel = t.panningModel, this.maxDistance = t.maxDistance, this.distanceModel = t.distanceModel, this.coneOuterGain = t.coneOuterGain, this.coneOuterAngle = t.coneOuterAngle, this.coneInnerAngle = t.coneInnerAngle, this.refDistance = t.refDistance, this.rolloffFactor = t.rolloffFactor, this.positionX = new io({
                        context: this.context,
                        param: this._panner.positionX,
                        value: t.positionX
                    }), this.positionY = new io({
                        context: this.context,
                        param: this._panner.positionY,
                        value: t.positionY
                    }), this.positionZ = new io({
                        context: this.context,
                        param: this._panner.positionZ,
                        value: t.positionZ
                    }), this.orientationX = new io({
                        context: this.context,
                        param: this._panner.orientationX,
                        value: t.orientationX
                    }), this.orientationY = new io({
                        context: this.context,
                        param: this._panner.orientationY,
                        value: t.orientationY
                    }), this.orientationZ = new io({
                        context: this.context,
                        param: this._panner.orientationZ,
                        value: t.orientationZ
                    });
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        coneInnerAngle: 360,
                        coneOuterAngle: 360,
                        coneOuterGain: 0,
                        distanceModel: "inverse",
                        maxDistance: 10000,
                        orientationX: 0,
                        orientationY: 0,
                        orientationZ: 0,
                        panningModel: "equalpower",
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        refDistance: 1,
                        rolloffFactor: 1
                    });
                }
                setPosition(t, e, s) {
                    return this.positionX.value = t, this.positionY.value = e, this.positionZ.value = s, this;
                }
                setOrientation(t, e, s) {
                    return this.orientationX.value = t, this.orientationY.value = e, this.orientationZ.value = s, this;
                }
                get panningModel() {
                    return this._panner.panningModel;
                }
                set panningModel(t) {
                    this._panner.panningModel = t;
                }
                get refDistance() {
                    return this._panner.refDistance;
                }
                set refDistance(t) {
                    this._panner.refDistance = t;
                }
                get rolloffFactor() {
                    return this._panner.rolloffFactor;
                }
                set rolloffFactor(t) {
                    this._panner.rolloffFactor = t;
                }
                get distanceModel() {
                    return this._panner.distanceModel;
                }
                set distanceModel(t) {
                    this._panner.distanceModel = t;
                }
                get coneInnerAngle() {
                    return this._panner.coneInnerAngle;
                }
                set coneInnerAngle(t) {
                    this._panner.coneInnerAngle = t;
                }
                get coneOuterAngle() {
                    return this._panner.coneOuterAngle;
                }
                set coneOuterAngle(t) {
                    this._panner.coneOuterAngle = t;
                }
                get coneOuterGain() {
                    return this._panner.coneOuterGain;
                }
                set coneOuterGain(t) {
                    this._panner.coneOuterGain = t;
                }
                get maxDistance() {
                    return this._panner.maxDistance;
                }
                set maxDistance(t) {
                    this._panner.maxDistance = t;
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.orientationX.dispose(), this.orientationY.dispose(), this.orientationZ.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this;
                }
            }
            class hc extends oo {
                constructor(){
                    super(pi(hc.getDefaults(), arguments)), this.name = "Recorder";
                    const t = pi(hc.getDefaults(), arguments);
                    this.input = new lo({
                        context: this.context
                    }), Bn(hc.supported, "Media Recorder API is not available"), this._stream = this.context.createMediaStreamDestination(), this.input.connect(this._stream), this._recorder = new MediaRecorder(this._stream.stream, {
                        mimeType: t.mimeType
                    });
                }
                static getDefaults() {
                    return oo.getDefaults();
                }
                get mimeType() {
                    return this._recorder.mimeType;
                }
                static get supported() {
                    return null !== ti && Reflect.has(ti, "MediaRecorder");
                }
                get state() {
                    return "inactive" === this._recorder.state ? "stopped" : "paused" === this._recorder.state ? "paused" : "started";
                }
                start() {
                    return ni(this, void 0, void 0, function*() {
                        Bn("started" !== this.state, "Recorder is already started");
                        const t290 = new Promise((t)=>{
                            const e = ()=>{
                                this._recorder.removeEventListener("start", e, !1), t();
                            };
                            this._recorder.addEventListener("start", e, !1);
                        });
                        return this._recorder.start(), yield t290;
                    });
                }
                stop() {
                    return ni(this, void 0, void 0, function*() {
                        Bn("stopped" !== this.state, "Recorder is not started");
                        const t291 = new Promise((t)=>{
                            const e = (s)=>{
                                this._recorder.removeEventListener("dataavailable", e, !1), t(s.data);
                            };
                            this._recorder.addEventListener("dataavailable", e, !1);
                        });
                        return this._recorder.stop(), yield t291;
                    });
                }
                pause() {
                    return Bn("started" === this.state, "Recorder must be started"), this._recorder.pause(), this;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._stream.disconnect(), this;
                }
            }
            class lc extends oo {
                constructor(){
                    super(pi(lc.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ])), this.name = "Compressor", this._compressor = this.context.createDynamicsCompressor(), this.input = this._compressor, this.output = this._compressor;
                    const t = pi(lc.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ]);
                    this.threshold = new io({
                        minValue: this._compressor.threshold.minValue,
                        maxValue: this._compressor.threshold.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.threshold,
                        units: "decibels",
                        value: t.threshold
                    }), this.attack = new io({
                        minValue: this._compressor.attack.minValue,
                        maxValue: this._compressor.attack.maxValue,
                        context: this.context,
                        param: this._compressor.attack,
                        units: "time",
                        value: t.attack
                    }), this.release = new io({
                        minValue: this._compressor.release.minValue,
                        maxValue: this._compressor.release.maxValue,
                        context: this.context,
                        param: this._compressor.release,
                        units: "time",
                        value: t.release
                    }), this.knee = new io({
                        minValue: this._compressor.knee.minValue,
                        maxValue: this._compressor.knee.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.knee,
                        units: "decibels",
                        value: t.knee
                    }), this.ratio = new io({
                        minValue: this._compressor.ratio.minValue,
                        maxValue: this._compressor.ratio.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.ratio,
                        units: "positive",
                        value: t.ratio
                    }), Mi(this, [
                        "knee",
                        "release",
                        "attack",
                        "ratio",
                        "threshold"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        attack: 0.003,
                        knee: 30,
                        ratio: 12,
                        release: 0.25,
                        threshold: -24
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.disconnect(), this.attack.dispose(), this.release.dispose(), this.threshold.dispose(), this.ratio.dispose(), this.knee.dispose(), this;
                }
            }
            class uc extends oo {
                constructor(){
                    super(Object.assign(pi(uc.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]))), this.name = "Gate";
                    const t = pi(uc.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]);
                    this._follower = new ma({
                        context: this.context,
                        smoothing: t.smoothing
                    }), this._gt = new gr({
                        context: this.context,
                        value: Li(t.threshold)
                    }), this.input = new lo({
                        context: this.context
                    }), this._gate = this.output = new lo({
                        context: this.context
                    }), this.input.connect(this._gate), this.input.chain(this._follower, this._gt, this._gate.gain);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        smoothing: 0.1,
                        threshold: -40
                    });
                }
                get threshold() {
                    return zi(this._gt.value);
                }
                set threshold(t) {
                    this._gt.value = Li(t);
                }
                get smoothing() {
                    return this._follower.smoothing;
                }
                set smoothing(t) {
                    this._follower.smoothing = t;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._follower.dispose(), this._gt.dispose(), this._gate.dispose(), this;
                }
            }
            class pc extends oo {
                constructor(){
                    super(Object.assign(pi(pc.getDefaults(), arguments, [
                        "threshold"
                    ]))), this.name = "Limiter";
                    const t = pi(pc.getDefaults(), arguments, [
                        "threshold"
                    ]);
                    this._compressor = this.input = this.output = new lc({
                        context: this.context,
                        ratio: 20,
                        attack: 0.003,
                        release: 0.01,
                        threshold: t.threshold
                    }), this.threshold = this._compressor.threshold, Mi(this, "threshold");
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        threshold: -12
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.dispose(), this.threshold.dispose(), this;
                }
            }
            class dc extends oo {
                constructor(){
                    super(Object.assign(pi(dc.getDefaults(), arguments))), this.name = "MidSideCompressor";
                    const t = pi(dc.getDefaults(), arguments);
                    this._midSideSplit = this.input = new Ua({
                        context: this.context
                    }), this._midSideMerge = this.output = new Ga({
                        context: this.context
                    }), this.mid = new lc(Object.assign(t.mid, {
                        context: this.context
                    })), this.side = new lc(Object.assign(t.side, {
                        context: this.context
                    })), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), Mi(this, [
                        "mid",
                        "side"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: 0.03,
                            attack: 0.02,
                            knee: 16
                        },
                        side: {
                            ratio: 6,
                            threshold: -30,
                            release: 0.25,
                            attack: 0.03,
                            knee: 10
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this;
                }
            }
            class fc extends oo {
                constructor(){
                    super(Object.assign(pi(fc.getDefaults(), arguments))), this.name = "MultibandCompressor";
                    const t = pi(fc.getDefaults(), arguments);
                    this._splitter = this.input = new rc({
                        context: this.context,
                        lowFrequency: t.lowFrequency,
                        highFrequency: t.highFrequency
                    }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new lo({
                        context: this.context
                    }), this.low = new lc(Object.assign(t.low, {
                        context: this.context
                    })), this.mid = new lc(Object.assign(t.mid, {
                        context: this.context
                    })), this.high = new lc(Object.assign(t.high, {
                        context: this.context
                    })), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), Mi(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        lowFrequency: 250,
                        highFrequency: 2000,
                        low: {
                            ratio: 6,
                            threshold: -30,
                            release: 0.25,
                            attack: 0.03,
                            knee: 10
                        },
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: 0.03,
                            attack: 0.02,
                            knee: 16
                        },
                        high: {
                            ratio: 3,
                            threshold: -24,
                            release: 0.03,
                            attack: 0.02,
                            knee: 16
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.output.dispose(), this;
                }
            }
            class _c extends oo {
                constructor(){
                    super(pi(_c.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ])), this.name = "EQ3", this.output = new lo({
                        context: this.context
                    }), this._internalChannels = [];
                    const t = pi(_c.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ]);
                    this.input = this._multibandSplit = new rc({
                        context: this.context,
                        highFrequency: t.highFrequency,
                        lowFrequency: t.lowFrequency
                    }), this._lowGain = new lo({
                        context: this.context,
                        gain: t.low,
                        units: "decibels"
                    }), this._midGain = new lo({
                        context: this.context,
                        gain: t.mid,
                        units: "decibels"
                    }), this._highGain = new lo({
                        context: this.context,
                        gain: t.high,
                        units: "decibels"
                    }), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), Mi(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._internalChannels = [
                        this._multibandSplit
                    ];
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        high: 0,
                        highFrequency: 2500,
                        low: 0,
                        lowFrequency: 400,
                        mid: 0
                    });
                }
                dispose() {
                    return super.dispose(), Ei(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._multibandSplit.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this._lowGain.dispose(), this._midGain.dispose(), this._highGain.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.Q.dispose(), this;
                }
            }
            class mc extends oo {
                constructor(){
                    super(pi(mc.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Convolver", this._convolver = this.context.createConvolver();
                    const t = pi(mc.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new qi(t.url, (e)=>{
                        this.buffer = e, t.onload();
                    }), this.input = new lo({
                        context: this.context
                    }), this.output = new lo({
                        context: this.context
                    }), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = t.normalize, this.input.chain(this._convolver, this.output);
                }
                static getDefaults() {
                    return Object.assign(oo.getDefaults(), {
                        normalize: !0,
                        onload: Ri
                    });
                }
                load(t) {
                    return ni(this, void 0, void 0, function*() {
                        this.buffer = yield this._buffer.load(t);
                    });
                }
                get buffer() {
                    return this._buffer.length ? this._buffer : null;
                }
                set buffer(t) {
                    t && this._buffer.set(t), this._convolver.buffer && (this.input.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.input.chain(this._convolver, this.output));
                    const e = this._buffer.get();
                    this._convolver.buffer = e || null;
                }
                get normalize() {
                    return this._convolver.normalize;
                }
                set normalize(t) {
                    this._convolver.normalize = t;
                }
                dispose() {
                    return super.dispose(), this._buffer.dispose(), this._convolver.disconnect(), this;
                }
            }
            function gc() {
                return Ni().now();
            }
            function vc() {
                return Ni().immediate();
            }
            const yc = Ni().transport;
            function xc() {
                return Ni().transport;
            }
            const wc = Ni().destination, bc = Ni().destination;
            function Tc() {
                return Ni().destination;
            }
            const Sc = Ni().listener;
            function kc() {
                return Ni().listener;
            }
            const Ac = Ni().draw;
            function Cc() {
                return Ni().draw;
            }
            const Dc = Ni();
            function Oc() {
                return qi.loaded();
            }
            const Mc = qi, Ec = bo, Rc = No;
        })(), n1;
    })();
});

},{}]},["lEe9t","jZgE0"], "jZgE0", "parcelRequiredbe8")

//# sourceMappingURL=index.e7f05703.js.map
