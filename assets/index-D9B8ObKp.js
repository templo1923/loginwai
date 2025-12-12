(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const c of o)
            if (c.type === "childList")
                for (const d of c.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(o) {
        const c = {};
        return o.integrity && (c.integrity = o.integrity),
        o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? c.credentials = "include" : o.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const c = i(o);
        fetch(o.href, c)
    }
}
)();
function Fv(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var Df = {
    exports: {}
}
  , hr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v_;
function YS() {
    if (v_)
        return hr;
    v_ = 1;
    var s = Symbol.for("react.transitional.element")
      , e = Symbol.for("react.fragment");
    function i(r, o, c) {
        var d = null;
        if (c !== void 0 && (d = "" + c),
        o.key !== void 0 && (d = "" + o.key),
        "key"in o) {
            c = {};
            for (var h in o)
                h !== "key" && (c[h] = o[h])
        } else
            c = o;
        return o = c.ref,
        {
            $$typeof: s,
            type: r,
            key: d,
            ref: o !== void 0 ? o : null,
            props: c
        }
    }
    return hr.Fragment = e,
    hr.jsx = i,
    hr.jsxs = i,
    hr
}
var y_;
function FS() {
    return y_ || (y_ = 1,
    Df.exports = YS()),
    Df.exports
}
var b = FS()
  , Mf = {
    exports: {}
}
  , ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E_;
function KS() {
    if (E_)
        return ae;
    E_ = 1;
    var s = Symbol.for("react.transitional.element")
      , e = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , c = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , E = Symbol.iterator;
    function v(T) {
        return T === null || typeof T != "object" ? null : (T = E && T[E] || T["@@iterator"],
        typeof T == "function" ? T : null)
    }
    var x = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , A = Object.assign
      , U = {};
    function B(T, w, z) {
        this.props = T,
        this.context = w,
        this.refs = U,
        this.updater = z || x
    }
    B.prototype.isReactComponent = {},
    B.prototype.setState = function(T, w) {
        if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, w, "setState")
    }
    ,
    B.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
    function H() {}
    H.prototype = B.prototype;
    function q(T, w, z) {
        this.props = T,
        this.context = w,
        this.refs = U,
        this.updater = z || x
    }
    var Y = q.prototype = new H;
    Y.constructor = q,
    A(Y, B.prototype),
    Y.isPureReactComponent = !0;
    var W = Array.isArray
      , K = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , ve = Object.prototype.hasOwnProperty;
    function Te(T, w, z, V, X, re) {
        return z = re.ref,
        {
            $$typeof: s,
            type: T,
            key: w,
            ref: z !== void 0 ? z : null,
            props: re
        }
    }
    function me(T, w) {
        return Te(T.type, w, void 0, void 0, void 0, T.props)
    }
    function he(T) {
        return typeof T == "object" && T !== null && T.$$typeof === s
    }
    function _e(T) {
        var w = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(z) {
            return w[z]
        })
    }
    var ut = /\/+/g;
    function Le(T, w) {
        return typeof T == "object" && T !== null && T.key != null ? _e("" + T.key) : w.toString(36)
    }
    function Xe() {}
    function Rt(T) {
        switch (T.status) {
        case "fulfilled":
            return T.value;
        case "rejected":
            throw T.reason;
        default:
            switch (typeof T.status == "string" ? T.then(Xe, Xe) : (T.status = "pending",
            T.then(function(w) {
                T.status === "pending" && (T.status = "fulfilled",
                T.value = w)
            }, function(w) {
                T.status === "pending" && (T.status = "rejected",
                T.reason = w)
            })),
            T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason
            }
        }
        throw T
    }
    function Fe(T, w, z, V, X) {
        var re = typeof T;
        (re === "undefined" || re === "boolean") && (T = null);
        var ee = !1;
        if (T === null)
            ee = !0;
        else
            switch (re) {
            case "bigint":
            case "string":
            case "number":
                ee = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                case s:
                case e:
                    ee = !0;
                    break;
                case y:
                    return ee = T._init,
                    Fe(ee(T._payload), w, z, V, X)
                }
            }
        if (ee)
            return X = X(T),
            ee = V === "" ? "." + Le(T, 0) : V,
            W(X) ? (z = "",
            ee != null && (z = ee.replace(ut, "$&/") + "/"),
            Fe(X, w, z, "", function(qn) {
                return qn
            })) : X != null && (he(X) && (X = me(X, z + (X.key == null || T && T.key === X.key ? "" : ("" + X.key).replace(ut, "$&/") + "/") + ee)),
            w.push(X)),
            1;
        ee = 0;
        var ze = V === "" ? "." : V + ":";
        if (W(T))
            for (var Ue = 0; Ue < T.length; Ue++)
                V = T[Ue],
                re = ze + Le(V, Ue),
                ee += Fe(V, w, z, re, X);
        else if (Ue = v(T),
        typeof Ue == "function")
            for (T = Ue.call(T),
            Ue = 0; !(V = T.next()).done; )
                V = V.value,
                re = ze + Le(V, Ue++),
                ee += Fe(V, w, z, re, X);
        else if (re === "object") {
            if (typeof T.then == "function")
                return Fe(Rt(T), w, z, V, X);
            throw w = String(T),
            Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ee
    }
    function k(T, w, z) {
        if (T == null)
            return T;
        var V = []
          , X = 0;
        return Fe(T, V, "", "", function(re) {
            return w.call(z, re, X++)
        }),
        V
    }
    function F(T) {
        if (T._status === -1) {
            var w = T._result;
            w = w(),
            w.then(function(z) {
                (T._status === 0 || T._status === -1) && (T._status = 1,
                T._result = z)
            }, function(z) {
                (T._status === 0 || T._status === -1) && (T._status = 2,
                T._result = z)
            }),
            T._status === -1 && (T._status = 0,
            T._result = w)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var Z = typeof reportError == "function" ? reportError : function(T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var w = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(w))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    }
    ;
    function be() {}
    return ae.Children = {
        map: k,
        forEach: function(T, w, z) {
            k(T, function() {
                w.apply(this, arguments)
            }, z)
        },
        count: function(T) {
            var w = 0;
            return k(T, function() {
                w++
            }),
            w
        },
        toArray: function(T) {
            return k(T, function(w) {
                return w
            }) || []
        },
        only: function(T) {
            if (!he(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
    ae.Component = B,
    ae.Fragment = i,
    ae.Profiler = o,
    ae.PureComponent = q,
    ae.StrictMode = r,
    ae.Suspense = p,
    ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    ae.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(T) {
            return K.H.useMemoCache(T)
        }
    },
    ae.cache = function(T) {
        return function() {
            return T.apply(null, arguments)
        }
    }
    ,
    ae.cloneElement = function(T, w, z) {
        if (T == null)
            throw Error("The argument must be a React element, but you passed " + T + ".");
        var V = A({}, T.props)
          , X = T.key
          , re = void 0;
        if (w != null)
            for (ee in w.ref !== void 0 && (re = void 0),
            w.key !== void 0 && (X = "" + w.key),
            w)
                !ve.call(w, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && w.ref === void 0 || (V[ee] = w[ee]);
        var ee = arguments.length - 2;
        if (ee === 1)
            V.children = z;
        else if (1 < ee) {
            for (var ze = Array(ee), Ue = 0; Ue < ee; Ue++)
                ze[Ue] = arguments[Ue + 2];
            V.children = ze
        }
        return Te(T.type, X, void 0, void 0, re, V)
    }
    ,
    ae.createContext = function(T) {
        return T = {
            $$typeof: d,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        T.Provider = T,
        T.Consumer = {
            $$typeof: c,
            _context: T
        },
        T
    }
    ,
    ae.createElement = function(T, w, z) {
        var V, X = {}, re = null;
        if (w != null)
            for (V in w.key !== void 0 && (re = "" + w.key),
            w)
                ve.call(w, V) && V !== "key" && V !== "__self" && V !== "__source" && (X[V] = w[V]);
        var ee = arguments.length - 2;
        if (ee === 1)
            X.children = z;
        else if (1 < ee) {
            for (var ze = Array(ee), Ue = 0; Ue < ee; Ue++)
                ze[Ue] = arguments[Ue + 2];
            X.children = ze
        }
        if (T && T.defaultProps)
            for (V in ee = T.defaultProps,
            ee)
                X[V] === void 0 && (X[V] = ee[V]);
        return Te(T, re, void 0, void 0, null, X)
    }
    ,
    ae.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ae.forwardRef = function(T) {
        return {
            $$typeof: h,
            render: T
        }
    }
    ,
    ae.isValidElement = he,
    ae.lazy = function(T) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: F
        }
    }
    ,
    ae.memo = function(T, w) {
        return {
            $$typeof: m,
            type: T,
            compare: w === void 0 ? null : w
        }
    }
    ,
    ae.startTransition = function(T) {
        var w = K.T
          , z = {};
        K.T = z;
        try {
            var V = T()
              , X = K.S;
            X !== null && X(z, V),
            typeof V == "object" && V !== null && typeof V.then == "function" && V.then(be, Z)
        } catch (re) {
            Z(re)
        } finally {
            K.T = w
        }
    }
    ,
    ae.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    ae.use = function(T) {
        return K.H.use(T)
    }
    ,
    ae.useActionState = function(T, w, z) {
        return K.H.useActionState(T, w, z)
    }
    ,
    ae.useCallback = function(T, w) {
        return K.H.useCallback(T, w)
    }
    ,
    ae.useContext = function(T) {
        return K.H.useContext(T)
    }
    ,
    ae.useDebugValue = function() {}
    ,
    ae.useDeferredValue = function(T, w) {
        return K.H.useDeferredValue(T, w)
    }
    ,
    ae.useEffect = function(T, w, z) {
        var V = K.H;
        if (typeof z == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return V.useEffect(T, w)
    }
    ,
    ae.useId = function() {
        return K.H.useId()
    }
    ,
    ae.useImperativeHandle = function(T, w, z) {
        return K.H.useImperativeHandle(T, w, z)
    }
    ,
    ae.useInsertionEffect = function(T, w) {
        return K.H.useInsertionEffect(T, w)
    }
    ,
    ae.useLayoutEffect = function(T, w) {
        return K.H.useLayoutEffect(T, w)
    }
    ,
    ae.useMemo = function(T, w) {
        return K.H.useMemo(T, w)
    }
    ,
    ae.useOptimistic = function(T, w) {
        return K.H.useOptimistic(T, w)
    }
    ,
    ae.useReducer = function(T, w, z) {
        return K.H.useReducer(T, w, z)
    }
    ,
    ae.useRef = function(T) {
        return K.H.useRef(T)
    }
    ,
    ae.useState = function(T) {
        return K.H.useState(T)
    }
    ,
    ae.useSyncExternalStore = function(T, w, z) {
        return K.H.useSyncExternalStore(T, w, z)
    }
    ,
    ae.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    ae.version = "19.1.0",
    ae
}
var b_;
function Cd() {
    return b_ || (b_ = 1,
    Mf.exports = KS()),
    Mf.exports
}
var N = Cd();
const QS = Fv(N);
var kf = {
    exports: {}
}
  , pr = {}
  , Lf = {
    exports: {}
}
  , Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S_;
function XS() {
    return S_ || (S_ = 1,
    function(s) {
        function e(k, F) {
            var Z = k.length;
            k.push(F);
            e: for (; 0 < Z; ) {
                var be = Z - 1 >>> 1
                  , T = k[be];
                if (0 < o(T, F))
                    k[be] = F,
                    k[Z] = T,
                    Z = be;
                else
                    break e
            }
        }
        function i(k) {
            return k.length === 0 ? null : k[0]
        }
        function r(k) {
            if (k.length === 0)
                return null;
            var F = k[0]
              , Z = k.pop();
            if (Z !== F) {
                k[0] = Z;
                e: for (var be = 0, T = k.length, w = T >>> 1; be < w; ) {
                    var z = 2 * (be + 1) - 1
                      , V = k[z]
                      , X = z + 1
                      , re = k[X];
                    if (0 > o(V, Z))
                        X < T && 0 > o(re, V) ? (k[be] = re,
                        k[X] = Z,
                        be = X) : (k[be] = V,
                        k[z] = Z,
                        be = z);
                    else if (X < T && 0 > o(re, Z))
                        k[be] = re,
                        k[X] = Z,
                        be = X;
                    else
                        break e
                }
            }
            return F
        }
        function o(k, F) {
            var Z = k.sortIndex - F.sortIndex;
            return Z !== 0 ? Z : k.id - F.id
        }
        if (s.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            s.unstable_now = function() {
                return c.now()
            }
        } else {
            var d = Date
              , h = d.now();
            s.unstable_now = function() {
                return d.now() - h
            }
        }
        var p = []
          , m = []
          , y = 1
          , E = null
          , v = 3
          , x = !1
          , A = !1
          , U = !1
          , B = !1
          , H = typeof setTimeout == "function" ? setTimeout : null
          , q = typeof clearTimeout == "function" ? clearTimeout : null
          , Y = typeof setImmediate < "u" ? setImmediate : null;
        function W(k) {
            for (var F = i(m); F !== null; ) {
                if (F.callback === null)
                    r(m);
                else if (F.startTime <= k)
                    r(m),
                    F.sortIndex = F.expirationTime,
                    e(p, F);
                else
                    break;
                F = i(m)
            }
        }
        function K(k) {
            if (U = !1,
            W(k),
            !A)
                if (i(p) !== null)
                    A = !0,
                    ve || (ve = !0,
                    Le());
                else {
                    var F = i(m);
                    F !== null && Fe(K, F.startTime - k)
                }
        }
        var ve = !1
          , Te = -1
          , me = 5
          , he = -1;
        function _e() {
            return B ? !0 : !(s.unstable_now() - he < me)
        }
        function ut() {
            if (B = !1,
            ve) {
                var k = s.unstable_now();
                he = k;
                var F = !0;
                try {
                    e: {
                        A = !1,
                        U && (U = !1,
                        q(Te),
                        Te = -1),
                        x = !0;
                        var Z = v;
                        try {
                            t: {
                                for (W(k),
                                E = i(p); E !== null && !(E.expirationTime > k && _e()); ) {
                                    var be = E.callback;
                                    if (typeof be == "function") {
                                        E.callback = null,
                                        v = E.priorityLevel;
                                        var T = be(E.expirationTime <= k);
                                        if (k = s.unstable_now(),
                                        typeof T == "function") {
                                            E.callback = T,
                                            W(k),
                                            F = !0;
                                            break t
                                        }
                                        E === i(p) && r(p),
                                        W(k)
                                    } else
                                        r(p);
                                    E = i(p)
                                }
                                if (E !== null)
                                    F = !0;
                                else {
                                    var w = i(m);
                                    w !== null && Fe(K, w.startTime - k),
                                    F = !1
                                }
                            }
                            break e
                        } finally {
                            E = null,
                            v = Z,
                            x = !1
                        }
                        F = void 0
                    }
                } finally {
                    F ? Le() : ve = !1
                }
            }
        }
        var Le;
        if (typeof Y == "function")
            Le = function() {
                Y(ut)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Xe = new MessageChannel
              , Rt = Xe.port2;
            Xe.port1.onmessage = ut,
            Le = function() {
                Rt.postMessage(null)
            }
        } else
            Le = function() {
                H(ut, 0)
            }
            ;
        function Fe(k, F) {
            Te = H(function() {
                k(s.unstable_now())
            }, F)
        }
        s.unstable_IdlePriority = 5,
        s.unstable_ImmediatePriority = 1,
        s.unstable_LowPriority = 4,
        s.unstable_NormalPriority = 3,
        s.unstable_Profiling = null,
        s.unstable_UserBlockingPriority = 2,
        s.unstable_cancelCallback = function(k) {
            k.callback = null
        }
        ,
        s.unstable_forceFrameRate = function(k) {
            0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < k ? Math.floor(1e3 / k) : 5
        }
        ,
        s.unstable_getCurrentPriorityLevel = function() {
            return v
        }
        ,
        s.unstable_next = function(k) {
            switch (v) {
            case 1:
            case 2:
            case 3:
                var F = 3;
                break;
            default:
                F = v
            }
            var Z = v;
            v = F;
            try {
                return k()
            } finally {
                v = Z
            }
        }
        ,
        s.unstable_requestPaint = function() {
            B = !0
        }
        ,
        s.unstable_runWithPriority = function(k, F) {
            switch (k) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                k = 3
            }
            var Z = v;
            v = k;
            try {
                return F()
            } finally {
                v = Z
            }
        }
        ,
        s.unstable_scheduleCallback = function(k, F, Z) {
            var be = s.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? be + Z : be) : Z = be,
            k) {
            case 1:
                var T = -1;
                break;
            case 2:
                T = 250;
                break;
            case 5:
                T = 1073741823;
                break;
            case 4:
                T = 1e4;
                break;
            default:
                T = 5e3
            }
            return T = Z + T,
            k = {
                id: y++,
                callback: F,
                priorityLevel: k,
                startTime: Z,
                expirationTime: T,
                sortIndex: -1
            },
            Z > be ? (k.sortIndex = Z,
            e(m, k),
            i(p) === null && k === i(m) && (U ? (q(Te),
            Te = -1) : U = !0,
            Fe(K, Z - be))) : (k.sortIndex = T,
            e(p, k),
            A || x || (A = !0,
            ve || (ve = !0,
            Le()))),
            k
        }
        ,
        s.unstable_shouldYield = _e,
        s.unstable_wrapCallback = function(k) {
            var F = v;
            return function() {
                var Z = v;
                v = F;
                try {
                    return k.apply(this, arguments)
                } finally {
                    v = Z
                }
            }
        }
    }(Uf)),
    Uf
}
var T_;
function WS() {
    return T_ || (T_ = 1,
    Lf.exports = XS()),
    Lf.exports
}
var Pf = {
    exports: {}
}
  , ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C_;
function $S() {
    if (C_)
        return ht;
    C_ = 1;
    var s = Cd();
    function e(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() {}
    var r = {
        d: {
            f: i,
            r: function() {
                throw Error(e(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for("react.portal");
    function c(p, m, y) {
        var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: E == null ? null : "" + E,
            children: p,
            containerInfo: m,
            implementation: y
        }
    }
    var d = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(p, m) {
        if (p === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    ht.createPortal = function(p, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(e(299));
        return c(p, m, null, y)
    }
    ,
    ht.flushSync = function(p) {
        var m = d.T
          , y = r.p;
        try {
            if (d.T = null,
            r.p = 2,
            p)
                return p()
        } finally {
            d.T = m,
            r.p = y,
            r.d.f()
        }
    }
    ,
    ht.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        r.d.C(p, m))
    }
    ,
    ht.prefetchDNS = function(p) {
        typeof p == "string" && r.d.D(p)
    }
    ,
    ht.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var y = m.as
              , E = h(y, m.crossOrigin)
              , v = typeof m.integrity == "string" ? m.integrity : void 0
              , x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: E,
                integrity: v,
                fetchPriority: x
            }) : y === "script" && r.d.X(p, {
                crossOrigin: E,
                integrity: v,
                fetchPriority: x,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    ht.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = h(m.as, m.crossOrigin);
                    r.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && r.d.M(p)
    }
    ,
    ht.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as
              , E = h(y, m.crossOrigin);
            r.d.L(p, y, {
                crossOrigin: E,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    ht.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var y = h(m.as, m.crossOrigin);
                r.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                r.d.m(p)
    }
    ,
    ht.requestFormReset = function(p) {
        r.d.r(p)
    }
    ,
    ht.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }
    ,
    ht.useFormState = function(p, m, y) {
        return d.H.useFormState(p, m, y)
    }
    ,
    ht.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    ht.version = "19.1.0",
    ht
}
var w_;
function ZS() {
    if (w_)
        return Pf.exports;
    w_ = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (e) {
                console.error(e)
            }
    }
    return s(),
    Pf.exports = $S(),
    Pf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A_;
function JS() {
    if (A_)
        return pr;
    A_ = 1;
    var s = WS()
      , e = Cd()
      , i = ZS();
    function r(t) {
        var n = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                n += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function c(t) {
        var n = t
          , a = t;
        if (t.alternate)
            for (; n.return; )
                n = n.return;
        else {
            t = n;
            do
                n = t,
                (n.flags & 4098) !== 0 && (a = n.return),
                t = n.return;
            while (t)
        }
        return n.tag === 3 ? a : null
    }
    function d(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate,
            t !== null && (n = t.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function h(t) {
        if (c(t) !== t)
            throw Error(r(188))
    }
    function p(t) {
        var n = t.alternate;
        if (!n) {
            if (n = c(t),
            n === null)
                throw Error(r(188));
            return n !== t ? null : t
        }
        for (var a = t, l = n; ; ) {
            var u = a.return;
            if (u === null)
                break;
            var f = u.alternate;
            if (f === null) {
                if (l = u.return,
                l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f; ) {
                    if (f === a)
                        return h(u),
                        t;
                    if (f === l)
                        return h(u),
                        n;
                    f = f.sibling
                }
                throw Error(r(188))
            }
            if (a.return !== l.return)
                a = u,
                l = f;
            else {
                for (var g = !1, _ = u.child; _; ) {
                    if (_ === a) {
                        g = !0,
                        a = u,
                        l = f;
                        break
                    }
                    if (_ === l) {
                        g = !0,
                        l = u,
                        a = f;
                        break
                    }
                    _ = _.sibling
                }
                if (!g) {
                    for (_ = f.child; _; ) {
                        if (_ === a) {
                            g = !0,
                            a = f,
                            l = u;
                            break
                        }
                        if (_ === l) {
                            g = !0,
                            l = f,
                            a = u;
                            break
                        }
                        _ = _.sibling
                    }
                    if (!g)
                        throw Error(r(189))
                }
            }
            if (a.alternate !== l)
                throw Error(r(190))
        }
        if (a.tag !== 3)
            throw Error(r(188));
        return a.stateNode.current === a ? t : n
    }
    function m(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (n = m(t),
            n !== null)
                return n;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign
      , E = Symbol.for("react.element")
      , v = Symbol.for("react.transitional.element")
      , x = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , U = Symbol.for("react.strict_mode")
      , B = Symbol.for("react.profiler")
      , H = Symbol.for("react.provider")
      , q = Symbol.for("react.consumer")
      , Y = Symbol.for("react.context")
      , W = Symbol.for("react.forward_ref")
      , K = Symbol.for("react.suspense")
      , ve = Symbol.for("react.suspense_list")
      , Te = Symbol.for("react.memo")
      , me = Symbol.for("react.lazy")
      , he = Symbol.for("react.activity")
      , _e = Symbol.for("react.memo_cache_sentinel")
      , ut = Symbol.iterator;
    function Le(t) {
        return t === null || typeof t != "object" ? null : (t = ut && t[ut] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Xe = Symbol.for("react.client.reference");
    function Rt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Xe ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case A:
            return "Fragment";
        case B:
            return "Profiler";
        case U:
            return "StrictMode";
        case K:
            return "Suspense";
        case ve:
            return "SuspenseList";
        case he:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case x:
                return "Portal";
            case Y:
                return (t.displayName || "Context") + ".Provider";
            case q:
                return (t._context.displayName || "Context") + ".Consumer";
            case W:
                var n = t.render;
                return t = t.displayName,
                t || (t = n.displayName || n.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case Te:
                return n = t.displayName || null,
                n !== null ? n : Rt(t.type) || "Memo";
            case me:
                n = t._payload,
                t = t._init;
                try {
                    return Rt(t(n))
                } catch {}
            }
        return null
    }
    var Fe = Array.isArray
      , k = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , F = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , be = []
      , T = -1;
    function w(t) {
        return {
            current: t
        }
    }
    function z(t) {
        0 > T || (t.current = be[T],
        be[T] = null,
        T--)
    }
    function V(t, n) {
        T++,
        be[T] = t.current,
        t.current = n
    }
    var X = w(null)
      , re = w(null)
      , ee = w(null)
      , ze = w(null);
    function Ue(t, n) {
        switch (V(ee, n),
        V(re, t),
        V(X, null),
        n.nodeType) {
        case 9:
        case 11:
            t = (t = n.documentElement) && (t = t.namespaceURI) ? Fg(t) : 0;
            break;
        default:
            if (t = n.tagName,
            n = n.namespaceURI)
                n = Fg(n),
                t = Kg(n, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        z(X),
        V(X, t)
    }
    function qn() {
        z(X),
        z(re),
        z(ee)
    }
    function gc(t) {
        t.memoizedState !== null && V(ze, t);
        var n = X.current
          , a = Kg(n, t.type);
        n !== a && (V(re, t),
        V(X, a))
    }
    function nl(t) {
        re.current === t && (z(X),
        z(re)),
        ze.current === t && (z(ze),
        or._currentValue = Z)
    }
    var _c = Object.prototype.hasOwnProperty
      , vc = s.unstable_scheduleCallback
      , yc = s.unstable_cancelCallback
      , T0 = s.unstable_shouldYield
      , C0 = s.unstable_requestPaint
      , rn = s.unstable_now
      , w0 = s.unstable_getCurrentPriorityLevel
      , Ah = s.unstable_ImmediatePriority
      , Rh = s.unstable_UserBlockingPriority
      , il = s.unstable_NormalPriority
      , A0 = s.unstable_LowPriority
      , Nh = s.unstable_IdlePriority
      , R0 = s.log
      , N0 = s.unstable_setDisableYieldValue
      , ga = null
      , Nt = null;
    function Vn(t) {
        if (typeof R0 == "function" && N0(t),
        Nt && typeof Nt.setStrictMode == "function")
            try {
                Nt.setStrictMode(ga, t)
            } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : I0
      , x0 = Math.log
      , O0 = Math.LN2;
    function I0(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (x0(t) / O0 | 0) | 0
    }
    var sl = 256
      , al = 4194304;
    function xi(t) {
        var n = t & 42;
        if (n !== 0)
            return n;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function rl(t, n, a) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var u = 0
          , f = t.suspendedLanes
          , g = t.pingedLanes;
        t = t.warmLanes;
        var _ = l & 134217727;
        return _ !== 0 ? (l = _ & ~f,
        l !== 0 ? u = xi(l) : (g &= _,
        g !== 0 ? u = xi(g) : a || (a = _ & ~t,
        a !== 0 && (u = xi(a))))) : (_ = l & ~f,
        _ !== 0 ? u = xi(_) : g !== 0 ? u = xi(g) : a || (a = l & ~t,
        a !== 0 && (u = xi(a)))),
        u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u,
        a = n & -n,
        f >= a || f === 32 && (a & 4194048) !== 0) ? n : u
    }
    function _a(t, n) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
    }
    function D0(t, n) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return n + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function xh() {
        var t = sl;
        return sl <<= 1,
        (sl & 4194048) === 0 && (sl = 256),
        t
    }
    function Oh() {
        var t = al;
        return al <<= 1,
        (al & 62914560) === 0 && (al = 4194304),
        t
    }
    function Ec(t) {
        for (var n = [], a = 0; 31 > a; a++)
            n.push(t);
        return n
    }
    function va(t, n) {
        t.pendingLanes |= n,
        n !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function M0(t, n, a, l, u, f) {
        var g = t.pendingLanes;
        t.pendingLanes = a,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= a,
        t.entangledLanes &= a,
        t.errorRecoveryDisabledLanes &= a,
        t.shellSuspendCounter = 0;
        var _ = t.entanglements
          , S = t.expirationTimes
          , I = t.hiddenUpdates;
        for (a = g & ~a; 0 < a; ) {
            var L = 31 - xt(a)
              , j = 1 << L;
            _[L] = 0,
            S[L] = -1;
            var D = I[L];
            if (D !== null)
                for (I[L] = null,
                L = 0; L < D.length; L++) {
                    var M = D[L];
                    M !== null && (M.lane &= -536870913)
                }
            a &= ~j
        }
        l !== 0 && Ih(t, l, 0),
        f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(g & ~n))
    }
    function Ih(t, n, a) {
        t.pendingLanes |= n,
        t.suspendedLanes &= ~n;
        var l = 31 - xt(n);
        t.entangledLanes |= n,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 4194090
    }
    function Dh(t, n) {
        var a = t.entangledLanes |= n;
        for (t = t.entanglements; a; ) {
            var l = 31 - xt(a)
              , u = 1 << l;
            u & n | t[l] & n && (t[l] |= n),
            a &= ~u
        }
    }
    function bc(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Sc(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Mh() {
        var t = F.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : d_(t.type))
    }
    function k0(t, n) {
        var a = F.p;
        try {
            return F.p = t,
            n()
        } finally {
            F.p = a
        }
    }
    var Gn = Math.random().toString(36).slice(2)
      , ft = "__reactFiber$" + Gn
      , yt = "__reactProps$" + Gn
      , os = "__reactContainer$" + Gn
      , Tc = "__reactEvents$" + Gn
      , L0 = "__reactListeners$" + Gn
      , U0 = "__reactHandles$" + Gn
      , kh = "__reactResources$" + Gn
      , ya = "__reactMarker$" + Gn;
    function Cc(t) {
        delete t[ft],
        delete t[yt],
        delete t[Tc],
        delete t[L0],
        delete t[U0]
    }
    function cs(t) {
        var n = t[ft];
        if (n)
            return n;
        for (var a = t.parentNode; a; ) {
            if (n = a[os] || a[ft]) {
                if (a = n.alternate,
                n.child !== null || a !== null && a.child !== null)
                    for (t = $g(t); t !== null; ) {
                        if (a = t[ft])
                            return a;
                        t = $g(t)
                    }
                return n
            }
            t = a,
            a = t.parentNode
        }
        return null
    }
    function us(t) {
        if (t = t[ft] || t[os]) {
            var n = t.tag;
            if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
                return t
        }
        return null
    }
    function Ea(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return t.stateNode;
        throw Error(r(33))
    }
    function fs(t) {
        var n = t[kh];
        return n || (n = t[kh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        n
    }
    function et(t) {
        t[ya] = !0
    }
    var Lh = new Set
      , Uh = {};
    function Oi(t, n) {
        ds(t, n),
        ds(t + "Capture", n)
    }
    function ds(t, n) {
        for (Uh[t] = n,
        t = 0; t < n.length; t++)
            Lh.add(n[t])
    }
    var P0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Ph = {}
      , jh = {};
    function j0(t) {
        return _c.call(jh, t) ? !0 : _c.call(Ph, t) ? !1 : P0.test(t) ? jh[t] = !0 : (Ph[t] = !0,
        !1)
    }
    function ll(t, n, a) {
        if (j0(n))
            if (a === null)
                t.removeAttribute(n);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(n);
                    return;
                case "boolean":
                    var l = n.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(n);
                        return
                    }
                }
                t.setAttribute(n, "" + a)
            }
    }
    function ol(t, n, a) {
        if (a === null)
            t.removeAttribute(n);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttribute(n, "" + a)
        }
    }
    function mn(t, n, a, l) {
        if (l === null)
            t.removeAttribute(a);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(a);
                return
            }
            t.setAttributeNS(n, a, "" + l)
        }
    }
    var wc, zh;
    function hs(t) {
        if (wc === void 0)
            try {
                throw Error()
            } catch (a) {
                var n = a.stack.trim().match(/\n( *(at )?)/);
                wc = n && n[1] || "",
                zh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + wc + t + zh
    }
    var Ac = !1;
    function Rc(t, n) {
        if (!t || Ac)
            return "";
        Ac = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var j = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(j.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(j, [])
                                } catch (M) {
                                    var D = M
                                }
                                Reflect.construct(t, [], j)
                            } else {
                                try {
                                    j.call()
                                } catch (M) {
                                    D = M
                                }
                                t.call(j.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (M) {
                                D = M
                            }
                            (j = t()) && typeof j.catch == "function" && j.catch(function() {})
                        }
                    } catch (M) {
                        if (M && D && typeof M.stack == "string")
                            return [M.stack, D.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = l.DetermineComponentFrameRoot()
              , g = f[0]
              , _ = f[1];
            if (g && _) {
                var S = g.split(`
`)
                  , I = _.split(`
`);
                for (u = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; u < I.length && !I[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (l === S.length || u === I.length)
                    for (l = S.length - 1,
                    u = I.length - 1; 1 <= l && 0 <= u && S[l] !== I[u]; )
                        u--;
                for (; 1 <= l && 0 <= u; l--,
                u--)
                    if (S[l] !== I[u]) {
                        if (l !== 1 || u !== 1)
                            do
                                if (l--,
                                u--,
                                0 > u || S[l] !== I[u]) {
                                    var L = `
` + S[l].replace(" at new ", " at ");
                                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)),
                                    L
                                }
                            while (1 <= l && 0 <= u);
                        break
                    }
            }
        } finally {
            Ac = !1,
            Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? hs(a) : ""
    }
    function z0(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return hs(t.type);
        case 16:
            return hs("Lazy");
        case 13:
            return hs("Suspense");
        case 19:
            return hs("SuspenseList");
        case 0:
        case 15:
            return Rc(t.type, !1);
        case 11:
            return Rc(t.type.render, !1);
        case 1:
            return Rc(t.type, !0);
        case 31:
            return hs("Activity");
        default:
            return ""
        }
    }
    function Hh(t) {
        try {
            var n = "";
            do
                n += z0(t),
                t = t.return;
            while (t);
            return n
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function Pt(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function Bh(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }
    function H0(t) {
        var n = Bh(t) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n)
          , l = "" + t[n];
        if (!t.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get
              , f = a.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(g) {
                    l = "" + g,
                    f.call(this, g)
                }
            }),
            Object.defineProperty(t, n, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(g) {
                    l = "" + g
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[n]
                }
            }
        }
    }
    function cl(t) {
        t._valueTracker || (t._valueTracker = H0(t))
    }
    function qh(t) {
        if (!t)
            return !1;
        var n = t._valueTracker;
        if (!n)
            return !0;
        var a = n.getValue()
          , l = "";
        return t && (l = Bh(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== a ? (n.setValue(t),
        !0) : !1
    }
    function ul(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var B0 = /[\n"\\]/g;
    function jt(t) {
        return t.replace(B0, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }
    function Nc(t, n, a, l, u, f, g, _) {
        t.name = "",
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"),
        n != null ? g === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Pt(n)) : t.value !== "" + Pt(n) && (t.value = "" + Pt(n)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"),
        n != null ? xc(t, g, Pt(n)) : a != null ? xc(t, g, Pt(a)) : l != null && t.removeAttribute("value"),
        u == null && f != null && (t.defaultChecked = !!f),
        u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
        _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? t.name = "" + Pt(_) : t.removeAttribute("name")
    }
    function Vh(t, n, a, l, u, f, g, _) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f),
        n != null || a != null) {
            if (!(f !== "submit" && f !== "reset" || n != null))
                return;
            a = a != null ? "" + Pt(a) : "",
            n = n != null ? "" + Pt(n) : a,
            _ || n === t.value || (t.value = n),
            t.defaultValue = n
        }
        l = l ?? u,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = _ ? t.checked : !!l,
        t.defaultChecked = !!l,
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g)
    }
    function xc(t, n, a) {
        n === "number" && ul(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }
    function ps(t, n, a, l) {
        if (t = t.options,
        n) {
            n = {};
            for (var u = 0; u < a.length; u++)
                n["$" + a[u]] = !0;
            for (a = 0; a < t.length; a++)
                u = n.hasOwnProperty("$" + t[a].value),
                t[a].selected !== u && (t[a].selected = u),
                u && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + Pt(a),
            n = null,
            u = 0; u < t.length; u++) {
                if (t[u].value === a) {
                    t[u].selected = !0,
                    l && (t[u].defaultSelected = !0);
                    return
                }
                n !== null || t[u].disabled || (n = t[u])
            }
            n !== null && (n.selected = !0)
        }
    }
    function Gh(t, n, a) {
        if (n != null && (n = "" + Pt(n),
        n !== t.value && (t.value = n),
        a == null)) {
            t.defaultValue !== n && (t.defaultValue = n);
            return
        }
        t.defaultValue = a != null ? "" + Pt(a) : ""
    }
    function Yh(t, n, a, l) {
        if (n == null) {
            if (l != null) {
                if (a != null)
                    throw Error(r(92));
                if (Fe(l)) {
                    if (1 < l.length)
                        throw Error(r(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""),
            n = a
        }
        a = Pt(n),
        t.defaultValue = a,
        l = t.textContent,
        l === a && l !== "" && l !== null && (t.value = l)
    }
    function ms(t, n) {
        if (n) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var q0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Fh(t, n, a) {
        var l = n.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : l ? t.setProperty(n, a) : typeof a != "number" || a === 0 || q0.has(n) ? n === "float" ? t.cssFloat = a : t[n] = ("" + a).trim() : t[n] = a + "px"
    }
    function Kh(t, n, a) {
        if (n != null && typeof n != "object")
            throw Error(r(62));
        if (t = t.style,
        a != null) {
            for (var l in a)
                !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var u in n)
                l = n[u],
                n.hasOwnProperty(u) && a[u] !== l && Fh(t, u, l)
        } else
            for (var f in n)
                n.hasOwnProperty(f) && Fh(t, f, n[f])
    }
    function Oc(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var V0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , G0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function fl(t) {
        return G0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var Ic = null;
    function Dc(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var gs = null
      , _s = null;
    function Qh(t) {
        var n = us(t);
        if (n && (t = n.stateNode)) {
            var a = t[yt] || null;
            e: switch (t = n.stateNode,
            n.type) {
            case "input":
                if (Nc(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                n = a.name,
                a.type === "radio" && n != null) {
                    for (a = t; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + jt("" + n) + '"][type="radio"]'),
                    n = 0; n < a.length; n++) {
                        var l = a[n];
                        if (l !== t && l.form === t.form) {
                            var u = l[yt] || null;
                            if (!u)
                                throw Error(r(90));
                            Nc(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (n = 0; n < a.length; n++)
                        l = a[n],
                        l.form === t.form && qh(l)
                }
                break e;
            case "textarea":
                Gh(t, a.value, a.defaultValue);
                break e;
            case "select":
                n = a.value,
                n != null && ps(t, !!a.multiple, n, !1)
            }
        }
    }
    var Mc = !1;
    function Xh(t, n, a) {
        if (Mc)
            return t(n, a);
        Mc = !0;
        try {
            var l = t(n);
            return l
        } finally {
            if (Mc = !1,
            (gs !== null || _s !== null) && (Wl(),
            gs && (n = gs,
            t = _s,
            _s = gs = null,
            Qh(n),
            t)))
                for (n = 0; n < t.length; n++)
                    Qh(t[n])
        }
    }
    function ba(t, n) {
        var a = t.stateNode;
        if (a === null)
            return null;
        var l = a[yt] || null;
        if (l === null)
            return null;
        a = l[n];
        e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break e;
        default:
            t = !1
        }
        if (t)
            return null;
        if (a && typeof a != "function")
            throw Error(r(231, n, typeof a));
        return a
    }
    var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , kc = !1;
    if (gn)
        try {
            var Sa = {};
            Object.defineProperty(Sa, "passive", {
                get: function() {
                    kc = !0
                }
            }),
            window.addEventListener("test", Sa, Sa),
            window.removeEventListener("test", Sa, Sa)
        } catch {
            kc = !1
        }
    var Yn = null
      , Lc = null
      , dl = null;
    function Wh() {
        if (dl)
            return dl;
        var t, n = Lc, a = n.length, l, u = "value"in Yn ? Yn.value : Yn.textContent, f = u.length;
        for (t = 0; t < a && n[t] === u[t]; t++)
            ;
        var g = a - t;
        for (l = 1; l <= g && n[a - l] === u[f - l]; l++)
            ;
        return dl = u.slice(t, 1 < l ? 1 - l : void 0)
    }
    function hl(t) {
        var n = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && n === 13 && (t = 13)) : t = n,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function pl() {
        return !0
    }
    function $h() {
        return !1
    }
    function Et(t) {
        function n(a, l, u, f, g) {
            this._reactName = a,
            this._targetInst = u,
            this.type = l,
            this.nativeEvent = f,
            this.target = g,
            this.currentTarget = null;
            for (var _ in t)
                t.hasOwnProperty(_) && (a = t[_],
                this[_] = a ? a(f) : f[_]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? pl : $h,
            this.isPropagationStopped = $h,
            this
        }
        return y(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = pl)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = pl)
            },
            persist: function() {},
            isPersistent: pl
        }),
        n
    }
    var Ii = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ml = Et(Ii), Ta = y({}, Ii, {
        view: 0,
        detail: 0
    }), Y0 = Et(Ta), Uc, Pc, Ca, gl = y({}, Ta, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: zc,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Ca && (Ca && t.type === "mousemove" ? (Uc = t.screenX - Ca.screenX,
            Pc = t.screenY - Ca.screenY) : Pc = Uc = 0,
            Ca = t),
            Uc)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Pc
        }
    }), Zh = Et(gl), F0 = y({}, gl, {
        dataTransfer: 0
    }), K0 = Et(F0), Q0 = y({}, Ta, {
        relatedTarget: 0
    }), jc = Et(Q0), X0 = y({}, Ii, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), W0 = Et(X0), $0 = y({}, Ii, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Z0 = Et($0), J0 = y({}, Ii, {
        data: 0
    }), Jh = Et(J0), eb = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, tb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, nb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ib(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = nb[t]) ? !!n[t] : !1
    }
    function zc() {
        return ib
    }
    var sb = y({}, Ta, {
        key: function(t) {
            if (t.key) {
                var n = eb[t.key] || t.key;
                if (n !== "Unidentified")
                    return n
            }
            return t.type === "keypress" ? (t = hl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? tb[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zc,
        charCode: function(t) {
            return t.type === "keypress" ? hl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? hl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , ab = Et(sb)
      , rb = y({}, gl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , ep = Et(rb)
      , lb = y({}, Ta, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zc
    })
      , ob = Et(lb)
      , cb = y({}, Ii, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , ub = Et(cb)
      , fb = y({}, gl, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , db = Et(fb)
      , hb = y({}, Ii, {
        newState: 0,
        oldState: 0
    })
      , pb = Et(hb)
      , mb = [9, 13, 27, 32]
      , Hc = gn && "CompositionEvent"in window
      , wa = null;
    gn && "documentMode"in document && (wa = document.documentMode);
    var gb = gn && "TextEvent"in window && !wa
      , tp = gn && (!Hc || wa && 8 < wa && 11 >= wa)
      , np = " "
      , ip = !1;
    function sp(t, n) {
        switch (t) {
        case "keyup":
            return mb.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ap(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var vs = !1;
    function _b(t, n) {
        switch (t) {
        case "compositionend":
            return ap(n);
        case "keypress":
            return n.which !== 32 ? null : (ip = !0,
            np);
        case "textInput":
            return t = n.data,
            t === np && ip ? null : t;
        default:
            return null
        }
    }
    function vb(t, n) {
        if (vs)
            return t === "compositionend" || !Hc && sp(t, n) ? (t = Wh(),
            dl = Lc = Yn = null,
            vs = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length)
                    return n.char;
                if (n.which)
                    return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return tp && n.locale !== "ko" ? null : n.data;
        default:
            return null
        }
    }
    var yb = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function rp(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!yb[t.type] : n === "textarea"
    }
    function lp(t, n, a, l) {
        gs ? _s ? _s.push(l) : _s = [l] : gs = l,
        n = no(n, "onChange"),
        0 < n.length && (a = new ml("onChange","change",null,a,l),
        t.push({
            event: a,
            listeners: n
        }))
    }
    var Aa = null
      , Ra = null;
    function Eb(t) {
        Bg(t, 0)
    }
    function _l(t) {
        var n = Ea(t);
        if (qh(n))
            return t
    }
    function op(t, n) {
        if (t === "change")
            return n
    }
    var cp = !1;
    if (gn) {
        var Bc;
        if (gn) {
            var qc = "oninput"in document;
            if (!qc) {
                var up = document.createElement("div");
                up.setAttribute("oninput", "return;"),
                qc = typeof up.oninput == "function"
            }
            Bc = qc
        } else
            Bc = !1;
        cp = Bc && (!document.documentMode || 9 < document.documentMode)
    }
    function fp() {
        Aa && (Aa.detachEvent("onpropertychange", dp),
        Ra = Aa = null)
    }
    function dp(t) {
        if (t.propertyName === "value" && _l(Ra)) {
            var n = [];
            lp(n, Ra, t, Dc(t)),
            Xh(Eb, n)
        }
    }
    function bb(t, n, a) {
        t === "focusin" ? (fp(),
        Aa = n,
        Ra = a,
        Aa.attachEvent("onpropertychange", dp)) : t === "focusout" && fp()
    }
    function Sb(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return _l(Ra)
    }
    function Tb(t, n) {
        if (t === "click")
            return _l(n)
    }
    function Cb(t, n) {
        if (t === "input" || t === "change")
            return _l(n)
    }
    function wb(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var Ot = typeof Object.is == "function" ? Object.is : wb;
    function Na(t, n) {
        if (Ot(t, n))
            return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null)
            return !1;
        var a = Object.keys(t)
          , l = Object.keys(n);
        if (a.length !== l.length)
            return !1;
        for (l = 0; l < a.length; l++) {
            var u = a[l];
            if (!_c.call(n, u) || !Ot(t[u], n[u]))
                return !1
        }
        return !0
    }
    function hp(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function pp(t, n) {
        var a = hp(t);
        t = 0;
        for (var l; a; ) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length,
                t <= n && l >= n)
                    return {
                        node: a,
                        offset: n - t
                    };
                t = l
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = hp(a)
        }
    }
    function mp(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? mp(t, n.parentNode) : "contains"in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }
    function gp(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var n = ul(t.document); n instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof n.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                t = n.contentWindow;
            else
                break;
            n = ul(t.document)
        }
        return n
    }
    function Vc(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    var Ab = gn && "documentMode"in document && 11 >= document.documentMode
      , ys = null
      , Gc = null
      , xa = null
      , Yc = !1;
    function _p(t, n, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Yc || ys == null || ys !== ul(l) || (l = ys,
        "selectionStart"in l && Vc(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        xa && Na(xa, l) || (xa = l,
        l = no(Gc, "onSelect"),
        0 < l.length && (n = new ml("onSelect","select",null,n,a),
        t.push({
            event: n,
            listeners: l
        }),
        n.target = ys)))
    }
    function Di(t, n) {
        var a = {};
        return a[t.toLowerCase()] = n.toLowerCase(),
        a["Webkit" + t] = "webkit" + n,
        a["Moz" + t] = "moz" + n,
        a
    }
    var Es = {
        animationend: Di("Animation", "AnimationEnd"),
        animationiteration: Di("Animation", "AnimationIteration"),
        animationstart: Di("Animation", "AnimationStart"),
        transitionrun: Di("Transition", "TransitionRun"),
        transitionstart: Di("Transition", "TransitionStart"),
        transitioncancel: Di("Transition", "TransitionCancel"),
        transitionend: Di("Transition", "TransitionEnd")
    }
      , Fc = {}
      , vp = {};
    gn && (vp = document.createElement("div").style,
    "AnimationEvent"in window || (delete Es.animationend.animation,
    delete Es.animationiteration.animation,
    delete Es.animationstart.animation),
    "TransitionEvent"in window || delete Es.transitionend.transition);
    function Mi(t) {
        if (Fc[t])
            return Fc[t];
        if (!Es[t])
            return t;
        var n = Es[t], a;
        for (a in n)
            if (n.hasOwnProperty(a) && a in vp)
                return Fc[t] = n[a];
        return t
    }
    var yp = Mi("animationend")
      , Ep = Mi("animationiteration")
      , bp = Mi("animationstart")
      , Rb = Mi("transitionrun")
      , Nb = Mi("transitionstart")
      , xb = Mi("transitioncancel")
      , Sp = Mi("transitionend")
      , Tp = new Map
      , Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Kc.push("scrollEnd");
    function Qt(t, n) {
        Tp.set(t, n),
        Oi(n, [t])
    }
    var Cp = new WeakMap;
    function zt(t, n) {
        if (typeof t == "object" && t !== null) {
            var a = Cp.get(t);
            return a !== void 0 ? a : (n = {
                value: t,
                source: n,
                stack: Hh(n)
            },
            Cp.set(t, n),
            n)
        }
        return {
            value: t,
            source: n,
            stack: Hh(n)
        }
    }
    var Ht = []
      , bs = 0
      , Qc = 0;
    function vl() {
        for (var t = bs, n = Qc = bs = 0; n < t; ) {
            var a = Ht[n];
            Ht[n++] = null;
            var l = Ht[n];
            Ht[n++] = null;
            var u = Ht[n];
            Ht[n++] = null;
            var f = Ht[n];
            if (Ht[n++] = null,
            l !== null && u !== null) {
                var g = l.pending;
                g === null ? u.next = u : (u.next = g.next,
                g.next = u),
                l.pending = u
            }
            f !== 0 && wp(a, u, f)
        }
    }
    function yl(t, n, a, l) {
        Ht[bs++] = t,
        Ht[bs++] = n,
        Ht[bs++] = a,
        Ht[bs++] = l,
        Qc |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function Xc(t, n, a, l) {
        return yl(t, n, a, l),
        El(t)
    }
    function Ss(t, n) {
        return yl(t, null, null, n),
        El(t)
    }
    function wp(t, n, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var u = !1, f = t.return; f !== null; )
            f.childLanes |= a,
            l = f.alternate,
            l !== null && (l.childLanes |= a),
            f.tag === 22 && (t = f.stateNode,
            t === null || t._visibility & 1 || (u = !0)),
            t = f,
            f = f.return;
        return t.tag === 3 ? (f = t.stateNode,
        u && n !== null && (u = 31 - xt(a),
        t = f.hiddenUpdates,
        l = t[u],
        l === null ? t[u] = [n] : l.push(n),
        n.lane = a | 536870912),
        f) : null
    }
    function El(t) {
        if (50 < er)
            throw er = 0,
            tf = null,
            Error(r(185));
        for (var n = t.return; n !== null; )
            t = n,
            n = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ts = {};
    function Ob(t, n, a, l) {
        this.tag = t,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = n,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function It(t, n, a, l) {
        return new Ob(t,n,a,l)
    }
    function Wc(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function _n(t, n) {
        var a = t.alternate;
        return a === null ? (a = It(t.tag, n, t.key, t.mode),
        a.elementType = t.elementType,
        a.type = t.type,
        a.stateNode = t.stateNode,
        a.alternate = t,
        t.alternate = a) : (a.pendingProps = n,
        a.type = t.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = t.flags & 65011712,
        a.childLanes = t.childLanes,
        a.lanes = t.lanes,
        a.child = t.child,
        a.memoizedProps = t.memoizedProps,
        a.memoizedState = t.memoizedState,
        a.updateQueue = t.updateQueue,
        n = t.dependencies,
        a.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        },
        a.sibling = t.sibling,
        a.index = t.index,
        a.ref = t.ref,
        a.refCleanup = t.refCleanup,
        a
    }
    function Ap(t, n) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0,
        t.lanes = n,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = a.childLanes,
        t.lanes = a.lanes,
        t.child = a.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = a.memoizedProps,
        t.memoizedState = a.memoizedState,
        t.updateQueue = a.updateQueue,
        t.type = a.type,
        n = a.dependencies,
        t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }),
        t
    }
    function bl(t, n, a, l, u, f) {
        var g = 0;
        if (l = t,
        typeof t == "function")
            Wc(t) && (g = 1);
        else if (typeof t == "string")
            g = DS(t, a, X.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            e: switch (t) {
            case he:
                return t = It(31, a, n, u),
                t.elementType = he,
                t.lanes = f,
                t;
            case A:
                return ki(a.children, u, f, n);
            case U:
                g = 8,
                u |= 24;
                break;
            case B:
                return t = It(12, a, n, u | 2),
                t.elementType = B,
                t.lanes = f,
                t;
            case K:
                return t = It(13, a, n, u),
                t.elementType = K,
                t.lanes = f,
                t;
            case ve:
                return t = It(19, a, n, u),
                t.elementType = ve,
                t.lanes = f,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case H:
                    case Y:
                        g = 10;
                        break e;
                    case q:
                        g = 9;
                        break e;
                    case W:
                        g = 11;
                        break e;
                    case Te:
                        g = 14;
                        break e;
                    case me:
                        g = 16,
                        l = null;
                        break e
                    }
                g = 29,
                a = Error(r(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return n = It(g, a, n, u),
        n.elementType = t,
        n.type = l,
        n.lanes = f,
        n
    }
    function ki(t, n, a, l) {
        return t = It(7, t, l, n),
        t.lanes = a,
        t
    }
    function $c(t, n, a) {
        return t = It(6, t, null, n),
        t.lanes = a,
        t
    }
    function Zc(t, n, a) {
        return n = It(4, t.children !== null ? t.children : [], t.key, n),
        n.lanes = a,
        n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        n
    }
    var Cs = []
      , ws = 0
      , Sl = null
      , Tl = 0
      , Bt = []
      , qt = 0
      , Li = null
      , vn = 1
      , yn = "";
    function Ui(t, n) {
        Cs[ws++] = Tl,
        Cs[ws++] = Sl,
        Sl = t,
        Tl = n
    }
    function Rp(t, n, a) {
        Bt[qt++] = vn,
        Bt[qt++] = yn,
        Bt[qt++] = Li,
        Li = t;
        var l = vn;
        t = yn;
        var u = 32 - xt(l) - 1;
        l &= ~(1 << u),
        a += 1;
        var f = 32 - xt(n) + u;
        if (30 < f) {
            var g = u - u % 5;
            f = (l & (1 << g) - 1).toString(32),
            l >>= g,
            u -= g,
            vn = 1 << 32 - xt(n) + u | a << u | l,
            yn = f + t
        } else
            vn = 1 << f | a << u | l,
            yn = t
    }
    function Jc(t) {
        t.return !== null && (Ui(t, 1),
        Rp(t, 1, 0))
    }
    function eu(t) {
        for (; t === Sl; )
            Sl = Cs[--ws],
            Cs[ws] = null,
            Tl = Cs[--ws],
            Cs[ws] = null;
        for (; t === Li; )
            Li = Bt[--qt],
            Bt[qt] = null,
            yn = Bt[--qt],
            Bt[qt] = null,
            vn = Bt[--qt],
            Bt[qt] = null
    }
    var mt = null
      , Be = null
      , Se = !1
      , Pi = null
      , ln = !1
      , tu = Error(r(519));
    function ji(t) {
        var n = Error(r(418, ""));
        throw Da(zt(n, t)),
        tu
    }
    function Np(t) {
        var n = t.stateNode
          , a = t.type
          , l = t.memoizedProps;
        switch (n[ft] = t,
        n[yt] = l,
        a) {
        case "dialog":
            fe("cancel", n),
            fe("close", n);
            break;
        case "iframe":
        case "object":
        case "embed":
            fe("load", n);
            break;
        case "video":
        case "audio":
            for (a = 0; a < nr.length; a++)
                fe(nr[a], n);
            break;
        case "source":
            fe("error", n);
            break;
        case "img":
        case "image":
        case "link":
            fe("error", n),
            fe("load", n);
            break;
        case "details":
            fe("toggle", n);
            break;
        case "input":
            fe("invalid", n),
            Vh(n, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
            cl(n);
            break;
        case "select":
            fe("invalid", n);
            break;
        case "textarea":
            fe("invalid", n),
            Yh(n, l.value, l.defaultValue, l.children),
            cl(n)
        }
        a = l.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Yg(n.textContent, a) ? (l.popover != null && (fe("beforetoggle", n),
        fe("toggle", n)),
        l.onScroll != null && fe("scroll", n),
        l.onScrollEnd != null && fe("scrollend", n),
        l.onClick != null && (n.onclick = io),
        n = !0) : n = !1,
        n || ji(t)
    }
    function xp(t) {
        for (mt = t.return; mt; )
            switch (mt.tag) {
            case 5:
            case 13:
                ln = !1;
                return;
            case 27:
            case 3:
                ln = !0;
                return;
            default:
                mt = mt.return
            }
    }
    function Oa(t) {
        if (t !== mt)
            return !1;
        if (!Se)
            return xp(t),
            Se = !0,
            !1;
        var n = t.tag, a;
        if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = t.type,
        a = !(a !== "form" && a !== "button") || vf(t.type, t.memoizedProps)),
        a = !a),
        a && Be && ji(t),
        xp(t),
        n === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            e: {
                for (t = t.nextSibling,
                n = 0; t; ) {
                    if (t.nodeType === 8)
                        if (a = t.data,
                        a === "/$") {
                            if (n === 0) {
                                Be = Wt(t.nextSibling);
                                break e
                            }
                            n--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || n++;
                    t = t.nextSibling
                }
                Be = null
            }
        } else
            n === 27 ? (n = Be,
            li(t.type) ? (t = Sf,
            Sf = null,
            Be = t) : Be = n) : Be = mt ? Wt(t.stateNode.nextSibling) : null;
        return !0
    }
    function Ia() {
        Be = mt = null,
        Se = !1
    }
    function Op() {
        var t = Pi;
        return t !== null && (Tt === null ? Tt = t : Tt.push.apply(Tt, t),
        Pi = null),
        t
    }
    function Da(t) {
        Pi === null ? Pi = [t] : Pi.push(t)
    }
    var nu = w(null)
      , zi = null
      , En = null;
    function Fn(t, n, a) {
        V(nu, n._currentValue),
        n._currentValue = a
    }
    function bn(t) {
        t._currentValue = nu.current,
        z(nu)
    }
    function iu(t, n, a) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n,
            l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
            t === a)
                break;
            t = t.return
        }
    }
    function su(t, n, a, l) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
            var f = u.dependencies;
            if (f !== null) {
                var g = u.child;
                f = f.firstContext;
                e: for (; f !== null; ) {
                    var _ = f;
                    f = u;
                    for (var S = 0; S < n.length; S++)
                        if (_.context === n[S]) {
                            f.lanes |= a,
                            _ = f.alternate,
                            _ !== null && (_.lanes |= a),
                            iu(f.return, a, t),
                            l || (g = null);
                            break e
                        }
                    f = _.next
                }
            } else if (u.tag === 18) {
                if (g = u.return,
                g === null)
                    throw Error(r(341));
                g.lanes |= a,
                f = g.alternate,
                f !== null && (f.lanes |= a),
                iu(g, a, t),
                g = null
            } else
                g = u.child;
            if (g !== null)
                g.return = u;
            else
                for (g = u; g !== null; ) {
                    if (g === t) {
                        g = null;
                        break
                    }
                    if (u = g.sibling,
                    u !== null) {
                        u.return = g.return,
                        g = u;
                        break
                    }
                    g = g.return
                }
            u = g
        }
    }
    function Ma(t, n, a, l) {
        t = null;
        for (var u = n, f = !1; u !== null; ) {
            if (!f) {
                if ((u.flags & 524288) !== 0)
                    f = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var g = u.alternate;
                if (g === null)
                    throw Error(r(387));
                if (g = g.memoizedProps,
                g !== null) {
                    var _ = u.type;
                    Ot(u.pendingProps.value, g.value) || (t !== null ? t.push(_) : t = [_])
                }
            } else if (u === ze.current) {
                if (g = u.alternate,
                g === null)
                    throw Error(r(387));
                g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(or) : t = [or])
            }
            u = u.return
        }
        t !== null && su(n, t, a, l),
        n.flags |= 262144
    }
    function Cl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ot(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Hi(t) {
        zi = t,
        En = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function dt(t) {
        return Ip(zi, t)
    }
    function wl(t, n) {
        return zi === null && Hi(t),
        Ip(t, n)
    }
    function Ip(t, n) {
        var a = n._currentValue;
        if (n = {
            context: n,
            memoizedValue: a,
            next: null
        },
        En === null) {
            if (t === null)
                throw Error(r(308));
            En = n,
            t.dependencies = {
                lanes: 0,
                firstContext: n
            },
            t.flags |= 524288
        } else
            En = En.next = n;
        return a
    }
    var Ib = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , n = this.signal = {
            aborted: !1,
            addEventListener: function(a, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            n.aborted = !0,
            t.forEach(function(a) {
                return a()
            })
        }
    }
      , Db = s.unstable_scheduleCallback
      , Mb = s.unstable_NormalPriority
      , We = {
        $$typeof: Y,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function au() {
        return {
            controller: new Ib,
            data: new Map,
            refCount: 0
        }
    }
    function ka(t) {
        t.refCount--,
        t.refCount === 0 && Db(Mb, function() {
            t.controller.abort()
        })
    }
    var La = null
      , ru = 0
      , As = 0
      , Rs = null;
    function kb(t, n) {
        if (La === null) {
            var a = La = [];
            ru = 0,
            As = cf(),
            Rs = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return ru++,
        n.then(Dp, Dp),
        n
    }
    function Dp() {
        if (--ru === 0 && La !== null) {
            Rs !== null && (Rs.status = "fulfilled");
            var t = La;
            La = null,
            As = 0,
            Rs = null;
            for (var n = 0; n < t.length; n++)
                (0,
                t[n])()
        }
    }
    function Lb(t, n) {
        var a = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                a.push(u)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = n;
            for (var u = 0; u < a.length; u++)
                (0,
                a[u])(n)
        }, function(u) {
            for (l.status = "rejected",
            l.reason = u,
            u = 0; u < a.length; u++)
                (0,
                a[u])(void 0)
        }),
        l
    }
    var Mp = k.S;
    k.S = function(t, n) {
        typeof n == "object" && n !== null && typeof n.then == "function" && kb(t, n),
        Mp !== null && Mp(t, n)
    }
    ;
    var Bi = w(null);
    function lu() {
        var t = Bi.current;
        return t !== null ? t : De.pooledCache
    }
    function Al(t, n) {
        n === null ? V(Bi, Bi.current) : V(Bi, n.pool)
    }
    function kp() {
        var t = lu();
        return t === null ? null : {
            parent: We._currentValue,
            pool: t
        }
    }
    var Ua = Error(r(460))
      , Lp = Error(r(474))
      , Rl = Error(r(542))
      , ou = {
        then: function() {}
    };
    function Up(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Nl() {}
    function Pp(t, n, a) {
        switch (a = t[a],
        a === void 0 ? t.push(n) : a !== n && (n.then(Nl, Nl),
        n = a),
        n.status) {
        case "fulfilled":
            return n.value;
        case "rejected":
            throw t = n.reason,
            zp(t),
            t;
        default:
            if (typeof n.status == "string")
                n.then(Nl, Nl);
            else {
                if (t = De,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(r(482));
                t = n,
                t.status = "pending",
                t.then(function(l) {
                    if (n.status === "pending") {
                        var u = n;
                        u.status = "fulfilled",
                        u.value = l
                    }
                }, function(l) {
                    if (n.status === "pending") {
                        var u = n;
                        u.status = "rejected",
                        u.reason = l
                    }
                })
            }
            switch (n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw t = n.reason,
                zp(t),
                t
            }
            throw Pa = n,
            Ua
        }
    }
    var Pa = null;
    function jp() {
        if (Pa === null)
            throw Error(r(459));
        var t = Pa;
        return Pa = null,
        t
    }
    function zp(t) {
        if (t === Ua || t === Rl)
            throw Error(r(483))
    }
    var Kn = !1;
    function cu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function uu(t, n) {
        t = t.updateQueue,
        n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Qn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Xn(t, n, a) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ce & 2) !== 0) {
            var u = l.pending;
            return u === null ? n.next = n : (n.next = u.next,
            u.next = n),
            l.pending = n,
            n = El(t),
            wp(t, null, a),
            n
        }
        return yl(t, l, n, a),
        El(t)
    }
    function ja(t, n, a) {
        if (n = n.updateQueue,
        n !== null && (n = n.shared,
        (a & 4194048) !== 0)) {
            var l = n.lanes;
            l &= t.pendingLanes,
            a |= l,
            n.lanes = a,
            Dh(t, a)
        }
    }
    function fu(t, n) {
        var a = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        a === l)) {
            var u = null
              , f = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var g = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? u = f = g : f = f.next = g,
                    a = a.next
                } while (a !== null);
                f === null ? u = f = n : f = f.next = n
            } else
                u = f = n;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate,
        t === null ? a.firstBaseUpdate = n : t.next = n,
        a.lastBaseUpdate = n
    }
    var du = !1;
    function za() {
        if (du) {
            var t = Rs;
            if (t !== null)
                throw t
        }
    }
    function Ha(t, n, a, l) {
        du = !1;
        var u = t.updateQueue;
        Kn = !1;
        var f = u.firstBaseUpdate
          , g = u.lastBaseUpdate
          , _ = u.shared.pending;
        if (_ !== null) {
            u.shared.pending = null;
            var S = _
              , I = S.next;
            S.next = null,
            g === null ? f = I : g.next = I,
            g = S;
            var L = t.alternate;
            L !== null && (L = L.updateQueue,
            _ = L.lastBaseUpdate,
            _ !== g && (_ === null ? L.firstBaseUpdate = I : _.next = I,
            L.lastBaseUpdate = S))
        }
        if (f !== null) {
            var j = u.baseState;
            g = 0,
            L = I = S = null,
            _ = f;
            do {
                var D = _.lane & -536870913
                  , M = D !== _.lane;
                if (M ? (ge & D) === D : (l & D) === D) {
                    D !== 0 && D === As && (du = !0),
                    L !== null && (L = L.next = {
                        lane: 0,
                        tag: _.tag,
                        payload: _.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var se = t
                          , J = _;
                        D = n;
                        var Ne = a;
                        switch (J.tag) {
                        case 1:
                            if (se = J.payload,
                            typeof se == "function") {
                                j = se.call(Ne, j, D);
                                break e
                            }
                            j = se;
                            break e;
                        case 3:
                            se.flags = se.flags & -65537 | 128;
                        case 0:
                            if (se = J.payload,
                            D = typeof se == "function" ? se.call(Ne, j, D) : se,
                            D == null)
                                break e;
                            j = y({}, j, D);
                            break e;
                        case 2:
                            Kn = !0
                        }
                    }
                    D = _.callback,
                    D !== null && (t.flags |= 64,
                    M && (t.flags |= 8192),
                    M = u.callbacks,
                    M === null ? u.callbacks = [D] : M.push(D))
                } else
                    M = {
                        lane: D,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    },
                    L === null ? (I = L = M,
                    S = j) : L = L.next = M,
                    g |= D;
                if (_ = _.next,
                _ === null) {
                    if (_ = u.shared.pending,
                    _ === null)
                        break;
                    M = _,
                    _ = M.next,
                    M.next = null,
                    u.lastBaseUpdate = M,
                    u.shared.pending = null
                }
            } while (!0);
            L === null && (S = j),
            u.baseState = S,
            u.firstBaseUpdate = I,
            u.lastBaseUpdate = L,
            f === null && (u.shared.lanes = 0),
            ii |= g,
            t.lanes = g,
            t.memoizedState = j
        }
    }
    function Hp(t, n) {
        if (typeof t != "function")
            throw Error(r(191, t));
        t.call(n)
    }
    function Bp(t, n) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null,
            t = 0; t < a.length; t++)
                Hp(a[t], n)
    }
    var Ns = w(null)
      , xl = w(0);
    function qp(t, n) {
        t = Nn,
        V(xl, t),
        V(Ns, n),
        Nn = t | n.baseLanes
    }
    function hu() {
        V(xl, Nn),
        V(Ns, Ns.current)
    }
    function pu() {
        Nn = xl.current,
        z(Ns),
        z(xl)
    }
    var Wn = 0
      , le = null
      , Ae = null
      , Ke = null
      , Ol = !1
      , xs = !1
      , qi = !1
      , Il = 0
      , Ba = 0
      , Os = null
      , Ub = 0;
    function Ge() {
        throw Error(r(321))
    }
    function mu(t, n) {
        if (n === null)
            return !1;
        for (var a = 0; a < n.length && a < t.length; a++)
            if (!Ot(t[a], n[a]))
                return !1;
        return !0
    }
    function gu(t, n, a, l, u, f) {
        return Wn = f,
        le = n,
        n.memoizedState = null,
        n.updateQueue = null,
        n.lanes = 0,
        k.H = t === null || t.memoizedState === null ? wm : Am,
        qi = !1,
        f = a(l, u),
        qi = !1,
        xs && (f = Gp(n, a, l, u)),
        Vp(t),
        f
    }
    function Vp(t) {
        k.H = Pl;
        var n = Ae !== null && Ae.next !== null;
        if (Wn = 0,
        Ke = Ae = le = null,
        Ol = !1,
        Ba = 0,
        Os = null,
        n)
            throw Error(r(300));
        t === null || tt || (t = t.dependencies,
        t !== null && Cl(t) && (tt = !0))
    }
    function Gp(t, n, a, l) {
        le = t;
        var u = 0;
        do {
            if (xs && (Os = null),
            Ba = 0,
            xs = !1,
            25 <= u)
                throw Error(r(301));
            if (u += 1,
            Ke = Ae = null,
            t.updateQueue != null) {
                var f = t.updateQueue;
                f.lastEffect = null,
                f.events = null,
                f.stores = null,
                f.memoCache != null && (f.memoCache.index = 0)
            }
            k.H = Vb,
            f = n(a, l)
        } while (xs);
        return f
    }
    function Pb() {
        var t = k.H
          , n = t.useState()[0];
        return n = typeof n.then == "function" ? qa(n) : n,
        t = t.useState()[0],
        (Ae !== null ? Ae.memoizedState : null) !== t && (le.flags |= 1024),
        n
    }
    function _u() {
        var t = Il !== 0;
        return Il = 0,
        t
    }
    function vu(t, n, a) {
        n.updateQueue = t.updateQueue,
        n.flags &= -2053,
        t.lanes &= ~a
    }
    function yu(t) {
        if (Ol) {
            for (t = t.memoizedState; t !== null; ) {
                var n = t.queue;
                n !== null && (n.pending = null),
                t = t.next
            }
            Ol = !1
        }
        Wn = 0,
        Ke = Ae = le = null,
        xs = !1,
        Ba = Il = 0,
        Os = null
    }
    function bt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ke === null ? le.memoizedState = Ke = t : Ke = Ke.next = t,
        Ke
    }
    function Qe() {
        if (Ae === null) {
            var t = le.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Ae.next;
        var n = Ke === null ? le.memoizedState : Ke.next;
        if (n !== null)
            Ke = n,
            Ae = t;
        else {
            if (t === null)
                throw le.alternate === null ? Error(r(467)) : Error(r(310));
            Ae = t,
            t = {
                memoizedState: Ae.memoizedState,
                baseState: Ae.baseState,
                baseQueue: Ae.baseQueue,
                queue: Ae.queue,
                next: null
            },
            Ke === null ? le.memoizedState = Ke = t : Ke = Ke.next = t
        }
        return Ke
    }
    function Eu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function qa(t) {
        var n = Ba;
        return Ba += 1,
        Os === null && (Os = []),
        t = Pp(Os, t, n),
        n = le,
        (Ke === null ? n.memoizedState : Ke.next) === null && (n = n.alternate,
        k.H = n === null || n.memoizedState === null ? wm : Am),
        t
    }
    function Dl(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return qa(t);
            if (t.$$typeof === Y)
                return dt(t)
        }
        throw Error(r(438, String(t)))
    }
    function bu(t) {
        var n = null
          , a = le.updateQueue;
        if (a !== null && (n = a.memoCache),
        n == null) {
            var l = le.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (n = {
                data: l.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
            data: [],
            index: 0
        }),
        a === null && (a = Eu(),
        le.updateQueue = a),
        a.memoCache = n,
        a = n.data[n.index],
        a === void 0)
            for (a = n.data[n.index] = Array(t),
            l = 0; l < t; l++)
                a[l] = _e;
        return n.index++,
        a
    }
    function Sn(t, n) {
        return typeof n == "function" ? n(t) : n
    }
    function Ml(t) {
        var n = Qe();
        return Su(n, Ae, t)
    }
    function Su(t, n, a) {
        var l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = a;
        var u = t.baseQueue
          , f = l.pending;
        if (f !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = f.next,
                f.next = g
            }
            n.baseQueue = u = f,
            l.pending = null
        }
        if (f = t.baseState,
        u === null)
            t.memoizedState = f;
        else {
            n = u.next;
            var _ = g = null
              , S = null
              , I = n
              , L = !1;
            do {
                var j = I.lane & -536870913;
                if (j !== I.lane ? (ge & j) === j : (Wn & j) === j) {
                    var D = I.revertLane;
                    if (D === 0)
                        S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: I.action,
                            hasEagerState: I.hasEagerState,
                            eagerState: I.eagerState,
                            next: null
                        }),
                        j === As && (L = !0);
                    else if ((Wn & D) === D) {
                        I = I.next,
                        D === As && (L = !0);
                        continue
                    } else
                        j = {
                            lane: 0,
                            revertLane: I.revertLane,
                            action: I.action,
                            hasEagerState: I.hasEagerState,
                            eagerState: I.eagerState,
                            next: null
                        },
                        S === null ? (_ = S = j,
                        g = f) : S = S.next = j,
                        le.lanes |= D,
                        ii |= D;
                    j = I.action,
                    qi && a(f, j),
                    f = I.hasEagerState ? I.eagerState : a(f, j)
                } else
                    D = {
                        lane: j,
                        revertLane: I.revertLane,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    },
                    S === null ? (_ = S = D,
                    g = f) : S = S.next = D,
                    le.lanes |= j,
                    ii |= j;
                I = I.next
            } while (I !== null && I !== n);
            if (S === null ? g = f : S.next = _,
            !Ot(f, t.memoizedState) && (tt = !0,
            L && (a = Rs,
            a !== null)))
                throw a;
            t.memoizedState = f,
            t.baseState = g,
            t.baseQueue = S,
            l.lastRenderedState = f
        }
        return u === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function Tu(t) {
        var n = Qe()
          , a = n.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch
          , u = a.pending
          , f = n.memoizedState;
        if (u !== null) {
            a.pending = null;
            var g = u = u.next;
            do
                f = t(f, g.action),
                g = g.next;
            while (g !== u);
            Ot(f, n.memoizedState) || (tt = !0),
            n.memoizedState = f,
            n.baseQueue === null && (n.baseState = f),
            a.lastRenderedState = f
        }
        return [f, l]
    }
    function Yp(t, n, a) {
        var l = le
          , u = Qe()
          , f = Se;
        if (f) {
            if (a === void 0)
                throw Error(r(407));
            a = a()
        } else
            a = n();
        var g = !Ot((Ae || u).memoizedState, a);
        g && (u.memoizedState = a,
        tt = !0),
        u = u.queue;
        var _ = Qp.bind(null, l, u, t);
        if (Va(2048, 8, _, [t]),
        u.getSnapshot !== n || g || Ke !== null && Ke.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Is(9, kl(), Kp.bind(null, l, u, a, n), null),
            De === null)
                throw Error(r(349));
            f || (Wn & 124) !== 0 || Fp(l, n, a)
        }
        return a
    }
    function Fp(t, n, a) {
        t.flags |= 16384,
        t = {
            getSnapshot: n,
            value: a
        },
        n = le.updateQueue,
        n === null ? (n = Eu(),
        le.updateQueue = n,
        n.stores = [t]) : (a = n.stores,
        a === null ? n.stores = [t] : a.push(t))
    }
    function Kp(t, n, a, l) {
        n.value = a,
        n.getSnapshot = l,
        Xp(n) && Wp(t)
    }
    function Qp(t, n, a) {
        return a(function() {
            Xp(n) && Wp(t)
        })
    }
    function Xp(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var a = n();
            return !Ot(t, a)
        } catch {
            return !0
        }
    }
    function Wp(t) {
        var n = Ss(t, 2);
        n !== null && Ut(n, t, 2)
    }
    function Cu(t) {
        var n = bt();
        if (typeof t == "function") {
            var a = t;
            if (t = a(),
            qi) {
                Vn(!0);
                try {
                    a()
                } finally {
                    Vn(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = t,
        n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Sn,
            lastRenderedState: t
        },
        n
    }
    function $p(t, n, a, l) {
        return t.baseState = a,
        Su(t, Ae, typeof l == "function" ? l : Sn)
    }
    function jb(t, n, a, l, u) {
        if (Ul(t))
            throw Error(r(485));
        if (t = n.action,
        t !== null) {
            var f = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    f.listeners.push(g)
                }
            };
            k.T !== null ? a(!0) : f.isTransition = !1,
            l(f),
            a = n.pending,
            a === null ? (f.next = n.pending = f,
            Zp(n, f)) : (f.next = a.next,
            n.pending = a.next = f)
        }
    }
    function Zp(t, n) {
        var a = n.action
          , l = n.payload
          , u = t.state;
        if (n.isTransition) {
            var f = k.T
              , g = {};
            k.T = g;
            try {
                var _ = a(u, l)
                  , S = k.S;
                S !== null && S(g, _),
                Jp(t, n, _)
            } catch (I) {
                wu(t, n, I)
            } finally {
                k.T = f
            }
        } else
            try {
                f = a(u, l),
                Jp(t, n, f)
            } catch (I) {
                wu(t, n, I)
            }
    }
    function Jp(t, n, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            em(t, n, l)
        }, function(l) {
            return wu(t, n, l)
        }) : em(t, n, a)
    }
    function em(t, n, a) {
        n.status = "fulfilled",
        n.value = a,
        tm(n),
        t.state = a,
        n = t.pending,
        n !== null && (a = n.next,
        a === n ? t.pending = null : (a = a.next,
        n.next = a,
        Zp(t, a)))
    }
    function wu(t, n, a) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                n.status = "rejected",
                n.reason = a,
                tm(n),
                n = n.next;
            while (n !== l)
        }
        t.action = null
    }
    function tm(t) {
        t = t.listeners;
        for (var n = 0; n < t.length; n++)
            (0,
            t[n])()
    }
    function nm(t, n) {
        return n
    }
    function im(t, n) {
        if (Se) {
            var a = De.formState;
            if (a !== null) {
                e: {
                    var l = le;
                    if (Se) {
                        if (Be) {
                            t: {
                                for (var u = Be, f = ln; u.nodeType !== 8; ) {
                                    if (!f) {
                                        u = null;
                                        break t
                                    }
                                    if (u = Wt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                f = u.data,
                                u = f === "F!" || f === "F" ? u : null
                            }
                            if (u) {
                                Be = Wt(u.nextSibling),
                                l = u.data === "F!";
                                break e
                            }
                        }
                        ji(l)
                    }
                    l = !1
                }
                l && (n = a[0])
            }
        }
        return a = bt(),
        a.memoizedState = a.baseState = n,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: nm,
            lastRenderedState: n
        },
        a.queue = l,
        a = Sm.bind(null, le, l),
        l.dispatch = a,
        l = Cu(!1),
        f = Ou.bind(null, le, !1, l.queue),
        l = bt(),
        u = {
            state: n,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = u,
        a = jb.bind(null, le, u, f, a),
        u.dispatch = a,
        l.memoizedState = t,
        [n, a, !1]
    }
    function sm(t) {
        var n = Qe();
        return am(n, Ae, t)
    }
    function am(t, n, a) {
        if (n = Su(t, n, nm)[0],
        t = Ml(Sn)[0],
        typeof n == "object" && n !== null && typeof n.then == "function")
            try {
                var l = qa(n)
            } catch (g) {
                throw g === Ua ? Rl : g
            }
        else
            l = n;
        n = Qe();
        var u = n.queue
          , f = u.dispatch;
        return a !== n.memoizedState && (le.flags |= 2048,
        Is(9, kl(), zb.bind(null, u, a), null)),
        [l, f, t]
    }
    function zb(t, n) {
        t.action = n
    }
    function rm(t) {
        var n = Qe()
          , a = Ae;
        if (a !== null)
            return am(n, a, t);
        Qe(),
        n = n.memoizedState,
        a = Qe();
        var l = a.queue.dispatch;
        return a.memoizedState = t,
        [n, l, !1]
    }
    function Is(t, n, a, l) {
        return t = {
            tag: t,
            create: a,
            deps: l,
            inst: n,
            next: null
        },
        n = le.updateQueue,
        n === null && (n = Eu(),
        le.updateQueue = n),
        a = n.lastEffect,
        a === null ? n.lastEffect = t.next = t : (l = a.next,
        a.next = t,
        t.next = l,
        n.lastEffect = t),
        t
    }
    function kl() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function lm() {
        return Qe().memoizedState
    }
    function Ll(t, n, a, l) {
        var u = bt();
        l = l === void 0 ? null : l,
        le.flags |= t,
        u.memoizedState = Is(1 | n, kl(), a, l)
    }
    function Va(t, n, a, l) {
        var u = Qe();
        l = l === void 0 ? null : l;
        var f = u.memoizedState.inst;
        Ae !== null && l !== null && mu(l, Ae.memoizedState.deps) ? u.memoizedState = Is(n, f, a, l) : (le.flags |= t,
        u.memoizedState = Is(1 | n, f, a, l))
    }
    function om(t, n) {
        Ll(8390656, 8, t, n)
    }
    function cm(t, n) {
        Va(2048, 8, t, n)
    }
    function um(t, n) {
        return Va(4, 2, t, n)
    }
    function fm(t, n) {
        return Va(4, 4, t, n)
    }
    function dm(t, n) {
        if (typeof n == "function") {
            t = t();
            var a = n(t);
            return function() {
                typeof a == "function" ? a() : n(null)
            }
        }
        if (n != null)
            return t = t(),
            n.current = t,
            function() {
                n.current = null
            }
    }
    function hm(t, n, a) {
        a = a != null ? a.concat([t]) : null,
        Va(4, 4, dm.bind(null, n, t), a)
    }
    function Au() {}
    function pm(t, n) {
        var a = Qe();
        n = n === void 0 ? null : n;
        var l = a.memoizedState;
        return n !== null && mu(n, l[1]) ? l[0] : (a.memoizedState = [t, n],
        t)
    }
    function mm(t, n) {
        var a = Qe();
        n = n === void 0 ? null : n;
        var l = a.memoizedState;
        if (n !== null && mu(n, l[1]))
            return l[0];
        if (l = t(),
        qi) {
            Vn(!0);
            try {
                t()
            } finally {
                Vn(!1)
            }
        }
        return a.memoizedState = [l, n],
        l
    }
    function Ru(t, n, a) {
        return a === void 0 || (Wn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = a,
        t = vg(),
        le.lanes |= t,
        ii |= t,
        a)
    }
    function gm(t, n, a, l) {
        return Ot(a, n) ? a : Ns.current !== null ? (t = Ru(t, a, l),
        Ot(t, n) || (tt = !0),
        t) : (Wn & 42) === 0 ? (tt = !0,
        t.memoizedState = a) : (t = vg(),
        le.lanes |= t,
        ii |= t,
        n)
    }
    function _m(t, n, a, l, u) {
        var f = F.p;
        F.p = f !== 0 && 8 > f ? f : 8;
        var g = k.T
          , _ = {};
        k.T = _,
        Ou(t, !1, n, a);
        try {
            var S = u()
              , I = k.S;
            if (I !== null && I(_, S),
            S !== null && typeof S == "object" && typeof S.then == "function") {
                var L = Lb(S, l);
                Ga(t, n, L, Lt(t))
            } else
                Ga(t, n, l, Lt(t))
        } catch (j) {
            Ga(t, n, {
                then: function() {},
                status: "rejected",
                reason: j
            }, Lt())
        } finally {
            F.p = f,
            k.T = g
        }
    }
    function Hb() {}
    function Nu(t, n, a, l) {
        if (t.tag !== 5)
            throw Error(r(476));
        var u = vm(t).queue;
        _m(t, u, n, Z, a === null ? Hb : function() {
            return ym(t),
            a(l)
        }
        )
    }
    function vm(t) {
        var n = t.memoizedState;
        if (n !== null)
            return n;
        n = {
            memoizedState: Z,
            baseState: Z,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Sn,
                lastRenderedState: Z
            },
            next: null
        };
        var a = {};
        return n.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Sn,
                lastRenderedState: a
            },
            next: null
        },
        t.memoizedState = n,
        t = t.alternate,
        t !== null && (t.memoizedState = n),
        n
    }
    function ym(t) {
        var n = vm(t).next.queue;
        Ga(t, n, {}, Lt())
    }
    function xu() {
        return dt(or)
    }
    function Em() {
        return Qe().memoizedState
    }
    function bm() {
        return Qe().memoizedState
    }
    function Bb(t) {
        for (var n = t.return; n !== null; ) {
            switch (n.tag) {
            case 24:
            case 3:
                var a = Lt();
                t = Qn(a);
                var l = Xn(n, t, a);
                l !== null && (Ut(l, n, a),
                ja(l, n, a)),
                n = {
                    cache: au()
                },
                t.payload = n;
                return
            }
            n = n.return
        }
    }
    function qb(t, n, a) {
        var l = Lt();
        a = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ul(t) ? Tm(n, a) : (a = Xc(t, n, a, l),
        a !== null && (Ut(a, t, l),
        Cm(a, n, l)))
    }
    function Sm(t, n, a) {
        var l = Lt();
        Ga(t, n, a, l)
    }
    function Ga(t, n, a, l) {
        var u = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ul(t))
            Tm(n, u);
        else {
            var f = t.alternate;
            if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer,
            f !== null))
                try {
                    var g = n.lastRenderedState
                      , _ = f(g, a);
                    if (u.hasEagerState = !0,
                    u.eagerState = _,
                    Ot(_, g))
                        return yl(t, n, u, 0),
                        De === null && vl(),
                        !1
                } catch {} finally {}
            if (a = Xc(t, n, u, l),
            a !== null)
                return Ut(a, t, l),
                Cm(a, n, l),
                !0
        }
        return !1
    }
    function Ou(t, n, a, l) {
        if (l = {
            lane: 2,
            revertLane: cf(),
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ul(t)) {
            if (n)
                throw Error(r(479))
        } else
            n = Xc(t, a, l, 2),
            n !== null && Ut(n, t, 2)
    }
    function Ul(t) {
        var n = t.alternate;
        return t === le || n !== null && n === le
    }
    function Tm(t, n) {
        xs = Ol = !0;
        var a = t.pending;
        a === null ? n.next = n : (n.next = a.next,
        a.next = n),
        t.pending = n
    }
    function Cm(t, n, a) {
        if ((a & 4194048) !== 0) {
            var l = n.lanes;
            l &= t.pendingLanes,
            a |= l,
            n.lanes = a,
            Dh(t, a)
        }
    }
    var Pl = {
        readContext: dt,
        use: Dl,
        useCallback: Ge,
        useContext: Ge,
        useEffect: Ge,
        useImperativeHandle: Ge,
        useLayoutEffect: Ge,
        useInsertionEffect: Ge,
        useMemo: Ge,
        useReducer: Ge,
        useRef: Ge,
        useState: Ge,
        useDebugValue: Ge,
        useDeferredValue: Ge,
        useTransition: Ge,
        useSyncExternalStore: Ge,
        useId: Ge,
        useHostTransitionStatus: Ge,
        useFormState: Ge,
        useActionState: Ge,
        useOptimistic: Ge,
        useMemoCache: Ge,
        useCacheRefresh: Ge
    }
      , wm = {
        readContext: dt,
        use: Dl,
        useCallback: function(t, n) {
            return bt().memoizedState = [t, n === void 0 ? null : n],
            t
        },
        useContext: dt,
        useEffect: om,
        useImperativeHandle: function(t, n, a) {
            a = a != null ? a.concat([t]) : null,
            Ll(4194308, 4, dm.bind(null, n, t), a)
        },
        useLayoutEffect: function(t, n) {
            return Ll(4194308, 4, t, n)
        },
        useInsertionEffect: function(t, n) {
            Ll(4, 2, t, n)
        },
        useMemo: function(t, n) {
            var a = bt();
            n = n === void 0 ? null : n;
            var l = t();
            if (qi) {
                Vn(!0);
                try {
                    t()
                } finally {
                    Vn(!1)
                }
            }
            return a.memoizedState = [l, n],
            l
        },
        useReducer: function(t, n, a) {
            var l = bt();
            if (a !== void 0) {
                var u = a(n);
                if (qi) {
                    Vn(!0);
                    try {
                        a(n)
                    } finally {
                        Vn(!1)
                    }
                }
            } else
                u = n;
            return l.memoizedState = l.baseState = u,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: u
            },
            l.queue = t,
            t = t.dispatch = qb.bind(null, le, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var n = bt();
            return t = {
                current: t
            },
            n.memoizedState = t
        },
        useState: function(t) {
            t = Cu(t);
            var n = t.queue
              , a = Sm.bind(null, le, n);
            return n.dispatch = a,
            [t.memoizedState, a]
        },
        useDebugValue: Au,
        useDeferredValue: function(t, n) {
            var a = bt();
            return Ru(a, t, n)
        },
        useTransition: function() {
            var t = Cu(!1);
            return t = _m.bind(null, le, t.queue, !0, !1),
            bt().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, n, a) {
            var l = le
              , u = bt();
            if (Se) {
                if (a === void 0)
                    throw Error(r(407));
                a = a()
            } else {
                if (a = n(),
                De === null)
                    throw Error(r(349));
                (ge & 124) !== 0 || Fp(l, n, a)
            }
            u.memoizedState = a;
            var f = {
                value: a,
                getSnapshot: n
            };
            return u.queue = f,
            om(Qp.bind(null, l, f, t), [t]),
            l.flags |= 2048,
            Is(9, kl(), Kp.bind(null, l, f, a, n), null),
            a
        },
        useId: function() {
            var t = bt()
              , n = De.identifierPrefix;
            if (Se) {
                var a = yn
                  , l = vn;
                a = (l & ~(1 << 32 - xt(l) - 1)).toString(32) + a,
                n = "«" + n + "R" + a,
                a = Il++,
                0 < a && (n += "H" + a.toString(32)),
                n += "»"
            } else
                a = Ub++,
                n = "«" + n + "r" + a.toString(32) + "»";
            return t.memoizedState = n
        },
        useHostTransitionStatus: xu,
        useFormState: im,
        useActionState: im,
        useOptimistic: function(t) {
            var n = bt();
            n.memoizedState = n.baseState = t;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return n.queue = a,
            n = Ou.bind(null, le, !0, a),
            a.dispatch = n,
            [t, n]
        },
        useMemoCache: bu,
        useCacheRefresh: function() {
            return bt().memoizedState = Bb.bind(null, le)
        }
    }
      , Am = {
        readContext: dt,
        use: Dl,
        useCallback: pm,
        useContext: dt,
        useEffect: cm,
        useImperativeHandle: hm,
        useInsertionEffect: um,
        useLayoutEffect: fm,
        useMemo: mm,
        useReducer: Ml,
        useRef: lm,
        useState: function() {
            return Ml(Sn)
        },
        useDebugValue: Au,
        useDeferredValue: function(t, n) {
            var a = Qe();
            return gm(a, Ae.memoizedState, t, n)
        },
        useTransition: function() {
            var t = Ml(Sn)[0]
              , n = Qe().memoizedState;
            return [typeof t == "boolean" ? t : qa(t), n]
        },
        useSyncExternalStore: Yp,
        useId: Em,
        useHostTransitionStatus: xu,
        useFormState: sm,
        useActionState: sm,
        useOptimistic: function(t, n) {
            var a = Qe();
            return $p(a, Ae, t, n)
        },
        useMemoCache: bu,
        useCacheRefresh: bm
    }
      , Vb = {
        readContext: dt,
        use: Dl,
        useCallback: pm,
        useContext: dt,
        useEffect: cm,
        useImperativeHandle: hm,
        useInsertionEffect: um,
        useLayoutEffect: fm,
        useMemo: mm,
        useReducer: Tu,
        useRef: lm,
        useState: function() {
            return Tu(Sn)
        },
        useDebugValue: Au,
        useDeferredValue: function(t, n) {
            var a = Qe();
            return Ae === null ? Ru(a, t, n) : gm(a, Ae.memoizedState, t, n)
        },
        useTransition: function() {
            var t = Tu(Sn)[0]
              , n = Qe().memoizedState;
            return [typeof t == "boolean" ? t : qa(t), n]
        },
        useSyncExternalStore: Yp,
        useId: Em,
        useHostTransitionStatus: xu,
        useFormState: rm,
        useActionState: rm,
        useOptimistic: function(t, n) {
            var a = Qe();
            return Ae !== null ? $p(a, Ae, t, n) : (a.baseState = t,
            [t, a.queue.dispatch])
        },
        useMemoCache: bu,
        useCacheRefresh: bm
    }
      , Ds = null
      , Ya = 0;
    function jl(t) {
        var n = Ya;
        return Ya += 1,
        Ds === null && (Ds = []),
        Pp(Ds, t, n)
    }
    function Fa(t, n) {
        n = n.props.ref,
        t.ref = n !== void 0 ? n : null
    }
    function zl(t, n) {
        throw n.$$typeof === E ? Error(r(525)) : (t = Object.prototype.toString.call(n),
        Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
    }
    function Rm(t) {
        var n = t._init;
        return n(t._payload)
    }
    function Nm(t) {
        function n(R, C) {
            if (t) {
                var O = R.deletions;
                O === null ? (R.deletions = [C],
                R.flags |= 16) : O.push(C)
            }
        }
        function a(R, C) {
            if (!t)
                return null;
            for (; C !== null; )
                n(R, C),
                C = C.sibling;
            return null
        }
        function l(R) {
            for (var C = new Map; R !== null; )
                R.key !== null ? C.set(R.key, R) : C.set(R.index, R),
                R = R.sibling;
            return C
        }
        function u(R, C) {
            return R = _n(R, C),
            R.index = 0,
            R.sibling = null,
            R
        }
        function f(R, C, O) {
            return R.index = O,
            t ? (O = R.alternate,
            O !== null ? (O = O.index,
            O < C ? (R.flags |= 67108866,
            C) : O) : (R.flags |= 67108866,
            C)) : (R.flags |= 1048576,
            C)
        }
        function g(R) {
            return t && R.alternate === null && (R.flags |= 67108866),
            R
        }
        function _(R, C, O, P) {
            return C === null || C.tag !== 6 ? (C = $c(O, R.mode, P),
            C.return = R,
            C) : (C = u(C, O),
            C.return = R,
            C)
        }
        function S(R, C, O, P) {
            var Q = O.type;
            return Q === A ? L(R, C, O.props.children, P, O.key) : C !== null && (C.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === me && Rm(Q) === C.type) ? (C = u(C, O.props),
            Fa(C, O),
            C.return = R,
            C) : (C = bl(O.type, O.key, O.props, null, R.mode, P),
            Fa(C, O),
            C.return = R,
            C)
        }
        function I(R, C, O, P) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== O.containerInfo || C.stateNode.implementation !== O.implementation ? (C = Zc(O, R.mode, P),
            C.return = R,
            C) : (C = u(C, O.children || []),
            C.return = R,
            C)
        }
        function L(R, C, O, P, Q) {
            return C === null || C.tag !== 7 ? (C = ki(O, R.mode, P, Q),
            C.return = R,
            C) : (C = u(C, O),
            C.return = R,
            C)
        }
        function j(R, C, O) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return C = $c("" + C, R.mode, O),
                C.return = R,
                C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case v:
                    return O = bl(C.type, C.key, C.props, null, R.mode, O),
                    Fa(O, C),
                    O.return = R,
                    O;
                case x:
                    return C = Zc(C, R.mode, O),
                    C.return = R,
                    C;
                case me:
                    var P = C._init;
                    return C = P(C._payload),
                    j(R, C, O)
                }
                if (Fe(C) || Le(C))
                    return C = ki(C, R.mode, O, null),
                    C.return = R,
                    C;
                if (typeof C.then == "function")
                    return j(R, jl(C), O);
                if (C.$$typeof === Y)
                    return j(R, wl(R, C), O);
                zl(R, C)
            }
            return null
        }
        function D(R, C, O, P) {
            var Q = C !== null ? C.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return Q !== null ? null : _(R, C, "" + O, P);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case v:
                    return O.key === Q ? S(R, C, O, P) : null;
                case x:
                    return O.key === Q ? I(R, C, O, P) : null;
                case me:
                    return Q = O._init,
                    O = Q(O._payload),
                    D(R, C, O, P)
                }
                if (Fe(O) || Le(O))
                    return Q !== null ? null : L(R, C, O, P, null);
                if (typeof O.then == "function")
                    return D(R, C, jl(O), P);
                if (O.$$typeof === Y)
                    return D(R, C, wl(R, O), P);
                zl(R, O)
            }
            return null
        }
        function M(R, C, O, P, Q) {
            if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
                return R = R.get(O) || null,
                _(C, R, "" + P, Q);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case v:
                    return R = R.get(P.key === null ? O : P.key) || null,
                    S(C, R, P, Q);
                case x:
                    return R = R.get(P.key === null ? O : P.key) || null,
                    I(C, R, P, Q);
                case me:
                    var oe = P._init;
                    return P = oe(P._payload),
                    M(R, C, O, P, Q)
                }
                if (Fe(P) || Le(P))
                    return R = R.get(O) || null,
                    L(C, R, P, Q, null);
                if (typeof P.then == "function")
                    return M(R, C, O, jl(P), Q);
                if (P.$$typeof === Y)
                    return M(R, C, O, wl(C, P), Q);
                zl(C, P)
            }
            return null
        }
        function se(R, C, O, P) {
            for (var Q = null, oe = null, $ = C, te = C = 0, it = null; $ !== null && te < O.length; te++) {
                $.index > te ? (it = $,
                $ = null) : it = $.sibling;
                var ye = D(R, $, O[te], P);
                if (ye === null) {
                    $ === null && ($ = it);
                    break
                }
                t && $ && ye.alternate === null && n(R, $),
                C = f(ye, C, te),
                oe === null ? Q = ye : oe.sibling = ye,
                oe = ye,
                $ = it
            }
            if (te === O.length)
                return a(R, $),
                Se && Ui(R, te),
                Q;
            if ($ === null) {
                for (; te < O.length; te++)
                    $ = j(R, O[te], P),
                    $ !== null && (C = f($, C, te),
                    oe === null ? Q = $ : oe.sibling = $,
                    oe = $);
                return Se && Ui(R, te),
                Q
            }
            for ($ = l($); te < O.length; te++)
                it = M($, R, te, O[te], P),
                it !== null && (t && it.alternate !== null && $.delete(it.key === null ? te : it.key),
                C = f(it, C, te),
                oe === null ? Q = it : oe.sibling = it,
                oe = it);
            return t && $.forEach(function(di) {
                return n(R, di)
            }),
            Se && Ui(R, te),
            Q
        }
        function J(R, C, O, P) {
            if (O == null)
                throw Error(r(151));
            for (var Q = null, oe = null, $ = C, te = C = 0, it = null, ye = O.next(); $ !== null && !ye.done; te++,
            ye = O.next()) {
                $.index > te ? (it = $,
                $ = null) : it = $.sibling;
                var di = D(R, $, ye.value, P);
                if (di === null) {
                    $ === null && ($ = it);
                    break
                }
                t && $ && di.alternate === null && n(R, $),
                C = f(di, C, te),
                oe === null ? Q = di : oe.sibling = di,
                oe = di,
                $ = it
            }
            if (ye.done)
                return a(R, $),
                Se && Ui(R, te),
                Q;
            if ($ === null) {
                for (; !ye.done; te++,
                ye = O.next())
                    ye = j(R, ye.value, P),
                    ye !== null && (C = f(ye, C, te),
                    oe === null ? Q = ye : oe.sibling = ye,
                    oe = ye);
                return Se && Ui(R, te),
                Q
            }
            for ($ = l($); !ye.done; te++,
            ye = O.next())
                ye = M($, R, te, ye.value, P),
                ye !== null && (t && ye.alternate !== null && $.delete(ye.key === null ? te : ye.key),
                C = f(ye, C, te),
                oe === null ? Q = ye : oe.sibling = ye,
                oe = ye);
            return t && $.forEach(function(GS) {
                return n(R, GS)
            }),
            Se && Ui(R, te),
            Q
        }
        function Ne(R, C, O, P) {
            if (typeof O == "object" && O !== null && O.type === A && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case v:
                    e: {
                        for (var Q = O.key; C !== null; ) {
                            if (C.key === Q) {
                                if (Q = O.type,
                                Q === A) {
                                    if (C.tag === 7) {
                                        a(R, C.sibling),
                                        P = u(C, O.props.children),
                                        P.return = R,
                                        R = P;
                                        break e
                                    }
                                } else if (C.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === me && Rm(Q) === C.type) {
                                    a(R, C.sibling),
                                    P = u(C, O.props),
                                    Fa(P, O),
                                    P.return = R,
                                    R = P;
                                    break e
                                }
                                a(R, C);
                                break
                            } else
                                n(R, C);
                            C = C.sibling
                        }
                        O.type === A ? (P = ki(O.props.children, R.mode, P, O.key),
                        P.return = R,
                        R = P) : (P = bl(O.type, O.key, O.props, null, R.mode, P),
                        Fa(P, O),
                        P.return = R,
                        R = P)
                    }
                    return g(R);
                case x:
                    e: {
                        for (Q = O.key; C !== null; ) {
                            if (C.key === Q)
                                if (C.tag === 4 && C.stateNode.containerInfo === O.containerInfo && C.stateNode.implementation === O.implementation) {
                                    a(R, C.sibling),
                                    P = u(C, O.children || []),
                                    P.return = R,
                                    R = P;
                                    break e
                                } else {
                                    a(R, C);
                                    break
                                }
                            else
                                n(R, C);
                            C = C.sibling
                        }
                        P = Zc(O, R.mode, P),
                        P.return = R,
                        R = P
                    }
                    return g(R);
                case me:
                    return Q = O._init,
                    O = Q(O._payload),
                    Ne(R, C, O, P)
                }
                if (Fe(O))
                    return se(R, C, O, P);
                if (Le(O)) {
                    if (Q = Le(O),
                    typeof Q != "function")
                        throw Error(r(150));
                    return O = Q.call(O),
                    J(R, C, O, P)
                }
                if (typeof O.then == "function")
                    return Ne(R, C, jl(O), P);
                if (O.$$typeof === Y)
                    return Ne(R, C, wl(R, O), P);
                zl(R, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O,
            C !== null && C.tag === 6 ? (a(R, C.sibling),
            P = u(C, O),
            P.return = R,
            R = P) : (a(R, C),
            P = $c(O, R.mode, P),
            P.return = R,
            R = P),
            g(R)) : a(R, C)
        }
        return function(R, C, O, P) {
            try {
                Ya = 0;
                var Q = Ne(R, C, O, P);
                return Ds = null,
                Q
            } catch ($) {
                if ($ === Ua || $ === Rl)
                    throw $;
                var oe = It(29, $, null, R.mode);
                return oe.lanes = P,
                oe.return = R,
                oe
            } finally {}
        }
    }
    var Ms = Nm(!0)
      , xm = Nm(!1)
      , Vt = w(null)
      , on = null;
    function $n(t) {
        var n = t.alternate;
        V($e, $e.current & 1),
        V(Vt, t),
        on === null && (n === null || Ns.current !== null || n.memoizedState !== null) && (on = t)
    }
    function Om(t) {
        if (t.tag === 22) {
            if (V($e, $e.current),
            V(Vt, t),
            on === null) {
                var n = t.alternate;
                n !== null && n.memoizedState !== null && (on = t)
            }
        } else
            Zn()
    }
    function Zn() {
        V($e, $e.current),
        V(Vt, Vt.current)
    }
    function Tn(t) {
        z(Vt),
        on === t && (on = null),
        z($e)
    }
    var $e = w(0);
    function Hl(t) {
        for (var n = t; n !== null; ) {
            if (n.tag === 13) {
                var a = n.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || bf(a)))
                    return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 128) !== 0)
                    return n
            } else if (n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return null;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
        return null
    }
    function Iu(t, n, a, l) {
        n = t.memoizedState,
        a = a(l, n),
        a = a == null ? n : y({}, n, a),
        t.memoizedState = a,
        t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Du = {
        enqueueSetState: function(t, n, a) {
            t = t._reactInternals;
            var l = Lt()
              , u = Qn(l);
            u.payload = n,
            a != null && (u.callback = a),
            n = Xn(t, u, l),
            n !== null && (Ut(n, t, l),
            ja(n, t, l))
        },
        enqueueReplaceState: function(t, n, a) {
            t = t._reactInternals;
            var l = Lt()
              , u = Qn(l);
            u.tag = 1,
            u.payload = n,
            a != null && (u.callback = a),
            n = Xn(t, u, l),
            n !== null && (Ut(n, t, l),
            ja(n, t, l))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var a = Lt()
              , l = Qn(a);
            l.tag = 2,
            n != null && (l.callback = n),
            n = Xn(t, l, a),
            n !== null && (Ut(n, t, a),
            ja(n, t, a))
        }
    };
    function Im(t, n, a, l, u, f, g) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, f, g) : n.prototype && n.prototype.isPureReactComponent ? !Na(a, l) || !Na(u, f) : !0
    }
    function Dm(t, n, a, l) {
        t = n.state,
        typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l),
        typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l),
        n.state !== t && Du.enqueueReplaceState(n, n.state, null)
    }
    function Vi(t, n) {
        var a = n;
        if ("ref"in n) {
            a = {};
            for (var l in n)
                l !== "ref" && (a[l] = n[l])
        }
        if (t = t.defaultProps) {
            a === n && (a = y({}, a));
            for (var u in t)
                a[u] === void 0 && (a[u] = t[u])
        }
        return a
    }
    var Bl = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(n))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function Mm(t) {
        Bl(t)
    }
    function km(t) {
        console.error(t)
    }
    function Lm(t) {
        Bl(t)
    }
    function ql(t, n) {
        try {
            var a = t.onUncaughtError;
            a(n.value, {
                componentStack: n.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function Um(t, n, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function Mu(t, n, a) {
        return a = Qn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            ql(t, n)
        }
        ,
        a
    }
    function Pm(t) {
        return t = Qn(t),
        t.tag = 3,
        t
    }
    function jm(t, n, a, l) {
        var u = a.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = l.value;
            t.payload = function() {
                return u(f)
            }
            ,
            t.callback = function() {
                Um(n, a, l)
            }
        }
        var g = a.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
            Um(n, a, l),
            typeof u != "function" && (si === null ? si = new Set([this]) : si.add(this));
            var _ = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: _ !== null ? _ : ""
            })
        }
        )
    }
    function Gb(t, n, a, l, u) {
        if (a.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (n = a.alternate,
            n !== null && Ma(n, a, u, !0),
            a = Vt.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return on === null ? sf() : a.alternate === null && qe === 0 && (qe = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = u,
                    l === ou ? a.flags |= 16384 : (n = a.updateQueue,
                    n === null ? a.updateQueue = new Set([l]) : n.add(l),
                    rf(t, l, u)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    l === ou ? a.flags |= 16384 : (n = a.updateQueue,
                    n === null ? (n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    a.updateQueue = n) : (a = n.retryQueue,
                    a === null ? n.retryQueue = new Set([l]) : a.add(l)),
                    rf(t, l, u)),
                    !1
                }
                throw Error(r(435, a.tag))
            }
            return rf(t, l, u),
            sf(),
            !1
        }
        if (Se)
            return n = Vt.current,
            n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            n.flags |= 65536,
            n.lanes = u,
            l !== tu && (t = Error(r(422), {
                cause: l
            }),
            Da(zt(t, a)))) : (l !== tu && (n = Error(r(423), {
                cause: l
            }),
            Da(zt(n, a))),
            t = t.current.alternate,
            t.flags |= 65536,
            u &= -u,
            t.lanes |= u,
            l = zt(l, a),
            u = Mu(t.stateNode, l, u),
            fu(t, u),
            qe !== 4 && (qe = 2)),
            !1;
        var f = Error(r(520), {
            cause: l
        });
        if (f = zt(f, a),
        Ja === null ? Ja = [f] : Ja.push(f),
        qe !== 4 && (qe = 2),
        n === null)
            return !0;
        l = zt(l, a),
        a = n;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                t = u & -u,
                a.lanes |= t,
                t = Mu(a.stateNode, l, t),
                fu(a, t),
                !1;
            case 1:
                if (n = a.type,
                f = a.stateNode,
                (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (si === null || !si.has(f))))
                    return a.flags |= 65536,
                    u &= -u,
                    a.lanes |= u,
                    u = Pm(u),
                    jm(u, t, a, l),
                    fu(a, u),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var zm = Error(r(461))
      , tt = !1;
    function lt(t, n, a, l) {
        n.child = t === null ? xm(n, null, a, l) : Ms(n, t.child, a, l)
    }
    function Hm(t, n, a, l, u) {
        a = a.render;
        var f = n.ref;
        if ("ref"in l) {
            var g = {};
            for (var _ in l)
                _ !== "ref" && (g[_] = l[_])
        } else
            g = l;
        return Hi(n),
        l = gu(t, n, a, g, f, u),
        _ = _u(),
        t !== null && !tt ? (vu(t, n, u),
        Cn(t, n, u)) : (Se && _ && Jc(n),
        n.flags |= 1,
        lt(t, n, l, u),
        n.child)
    }
    function Bm(t, n, a, l, u) {
        if (t === null) {
            var f = a.type;
            return typeof f == "function" && !Wc(f) && f.defaultProps === void 0 && a.compare === null ? (n.tag = 15,
            n.type = f,
            qm(t, n, f, l, u)) : (t = bl(a.type, null, l, n, n.mode, u),
            t.ref = n.ref,
            t.return = n,
            n.child = t)
        }
        if (f = t.child,
        !Bu(t, u)) {
            var g = f.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Na,
            a(g, l) && t.ref === n.ref)
                return Cn(t, n, u)
        }
        return n.flags |= 1,
        t = _n(f, l),
        t.ref = n.ref,
        t.return = n,
        n.child = t
    }
    function qm(t, n, a, l, u) {
        if (t !== null) {
            var f = t.memoizedProps;
            if (Na(f, l) && t.ref === n.ref)
                if (tt = !1,
                n.pendingProps = l = f,
                Bu(t, u))
                    (t.flags & 131072) !== 0 && (tt = !0);
                else
                    return n.lanes = t.lanes,
                    Cn(t, n, u)
        }
        return ku(t, n, a, l, u)
    }
    function Vm(t, n, a) {
        var l = n.pendingProps
          , u = l.children
          , f = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (l = f !== null ? f.baseLanes | a : a,
                t !== null) {
                    for (u = n.child = t.child,
                    f = 0; u !== null; )
                        f = f | u.lanes | u.childLanes,
                        u = u.sibling;
                    n.childLanes = f & ~l
                } else
                    n.childLanes = 0,
                    n.child = null;
                return Gm(t, n, l, a)
            }
            if ((a & 536870912) !== 0)
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Al(n, f !== null ? f.cachePool : null),
                f !== null ? qp(n, f) : hu(),
                Om(n);
            else
                return n.lanes = n.childLanes = 536870912,
                Gm(t, n, f !== null ? f.baseLanes | a : a, a)
        } else
            f !== null ? (Al(n, f.cachePool),
            qp(n, f),
            Zn(),
            n.memoizedState = null) : (t !== null && Al(n, null),
            hu(),
            Zn());
        return lt(t, n, u, a),
        n.child
    }
    function Gm(t, n, a, l) {
        var u = lu();
        return u = u === null ? null : {
            parent: We._currentValue,
            pool: u
        },
        n.memoizedState = {
            baseLanes: a,
            cachePool: u
        },
        t !== null && Al(n, null),
        hu(),
        Om(n),
        t !== null && Ma(t, n, l, !0),
        null
    }
    function Vl(t, n) {
        var a = n.ref;
        if (a === null)
            t !== null && t.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(r(284));
            (t === null || t.ref !== a) && (n.flags |= 4194816)
        }
    }
    function ku(t, n, a, l, u) {
        return Hi(n),
        a = gu(t, n, a, l, void 0, u),
        l = _u(),
        t !== null && !tt ? (vu(t, n, u),
        Cn(t, n, u)) : (Se && l && Jc(n),
        n.flags |= 1,
        lt(t, n, a, u),
        n.child)
    }
    function Ym(t, n, a, l, u, f) {
        return Hi(n),
        n.updateQueue = null,
        a = Gp(n, l, a, u),
        Vp(t),
        l = _u(),
        t !== null && !tt ? (vu(t, n, f),
        Cn(t, n, f)) : (Se && l && Jc(n),
        n.flags |= 1,
        lt(t, n, a, f),
        n.child)
    }
    function Fm(t, n, a, l, u) {
        if (Hi(n),
        n.stateNode === null) {
            var f = Ts
              , g = a.contextType;
            typeof g == "object" && g !== null && (f = dt(g)),
            f = new a(l,f),
            n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            f.updater = Du,
            n.stateNode = f,
            f._reactInternals = n,
            f = n.stateNode,
            f.props = l,
            f.state = n.memoizedState,
            f.refs = {},
            cu(n),
            g = a.contextType,
            f.context = typeof g == "object" && g !== null ? dt(g) : Ts,
            f.state = n.memoizedState,
            g = a.getDerivedStateFromProps,
            typeof g == "function" && (Iu(n, a, g, l),
            f.state = n.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state,
            typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
            g !== f.state && Du.enqueueReplaceState(f, f.state, null),
            Ha(n, l, f, u),
            za(),
            f.state = n.memoizedState),
            typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            l = !0
        } else if (t === null) {
            f = n.stateNode;
            var _ = n.memoizedProps
              , S = Vi(a, _);
            f.props = S;
            var I = f.context
              , L = a.contextType;
            g = Ts,
            typeof L == "object" && L !== null && (g = dt(L));
            var j = a.getDerivedStateFromProps;
            L = typeof j == "function" || typeof f.getSnapshotBeforeUpdate == "function",
            _ = n.pendingProps !== _,
            L || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || I !== g) && Dm(n, f, l, g),
            Kn = !1;
            var D = n.memoizedState;
            f.state = D,
            Ha(n, l, f, u),
            za(),
            I = n.memoizedState,
            _ || D !== I || Kn ? (typeof j == "function" && (Iu(n, a, j, l),
            I = n.memoizedState),
            (S = Kn || Im(n, a, S, l, D, I, g)) ? (L || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            n.memoizedProps = l,
            n.memoizedState = I),
            f.props = l,
            f.state = I,
            f.context = g,
            l = S) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            l = !1)
        } else {
            f = n.stateNode,
            uu(t, n),
            g = n.memoizedProps,
            L = Vi(a, g),
            f.props = L,
            j = n.pendingProps,
            D = f.context,
            I = a.contextType,
            S = Ts,
            typeof I == "object" && I !== null && (S = dt(I)),
            _ = a.getDerivedStateFromProps,
            (I = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== j || D !== S) && Dm(n, f, l, S),
            Kn = !1,
            D = n.memoizedState,
            f.state = D,
            Ha(n, l, f, u),
            za();
            var M = n.memoizedState;
            g !== j || D !== M || Kn || t !== null && t.dependencies !== null && Cl(t.dependencies) ? (typeof _ == "function" && (Iu(n, a, _, l),
            M = n.memoizedState),
            (L = Kn || Im(n, a, L, l, D, M, S) || t !== null && t.dependencies !== null && Cl(t.dependencies)) ? (I || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, M, S),
            typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, M, S)),
            typeof f.componentDidUpdate == "function" && (n.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && D === t.memoizedState || (n.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && D === t.memoizedState || (n.flags |= 1024),
            n.memoizedProps = l,
            n.memoizedState = M),
            f.props = l,
            f.state = M,
            f.context = S,
            l = L) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && D === t.memoizedState || (n.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && D === t.memoizedState || (n.flags |= 1024),
            l = !1)
        }
        return f = l,
        Vl(t, n),
        l = (n.flags & 128) !== 0,
        f || l ? (f = n.stateNode,
        a = l && typeof a.getDerivedStateFromError != "function" ? null : f.render(),
        n.flags |= 1,
        t !== null && l ? (n.child = Ms(n, t.child, null, u),
        n.child = Ms(n, null, a, u)) : lt(t, n, a, u),
        n.memoizedState = f.state,
        t = n.child) : t = Cn(t, n, u),
        t
    }
    function Km(t, n, a, l) {
        return Ia(),
        n.flags |= 256,
        lt(t, n, a, l),
        n.child
    }
    var Lu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Uu(t) {
        return {
            baseLanes: t,
            cachePool: kp()
        }
    }
    function Pu(t, n, a) {
        return t = t !== null ? t.childLanes & ~a : 0,
        n && (t |= Gt),
        t
    }
    function Qm(t, n, a) {
        var l = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, g;
        if ((g = f) || (g = t !== null && t.memoizedState === null ? !1 : ($e.current & 2) !== 0),
        g && (u = !0,
        n.flags &= -129),
        g = (n.flags & 32) !== 0,
        n.flags &= -33,
        t === null) {
            if (Se) {
                if (u ? $n(n) : Zn(),
                Se) {
                    var _ = Be, S;
                    if (S = _) {
                        e: {
                            for (S = _,
                            _ = ln; S.nodeType !== 8; ) {
                                if (!_) {
                                    _ = null;
                                    break e
                                }
                                if (S = Wt(S.nextSibling),
                                S === null) {
                                    _ = null;
                                    break e
                                }
                            }
                            _ = S
                        }
                        _ !== null ? (n.memoizedState = {
                            dehydrated: _,
                            treeContext: Li !== null ? {
                                id: vn,
                                overflow: yn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        S = It(18, null, null, 0),
                        S.stateNode = _,
                        S.return = n,
                        n.child = S,
                        mt = n,
                        Be = null,
                        S = !0) : S = !1
                    }
                    S || ji(n)
                }
                if (_ = n.memoizedState,
                _ !== null && (_ = _.dehydrated,
                _ !== null))
                    return bf(_) ? n.lanes = 32 : n.lanes = 536870912,
                    null;
                Tn(n)
            }
            return _ = l.children,
            l = l.fallback,
            u ? (Zn(),
            u = n.mode,
            _ = Gl({
                mode: "hidden",
                children: _
            }, u),
            l = ki(l, u, a, null),
            _.return = n,
            l.return = n,
            _.sibling = l,
            n.child = _,
            u = n.child,
            u.memoizedState = Uu(a),
            u.childLanes = Pu(t, g, a),
            n.memoizedState = Lu,
            l) : ($n(n),
            ju(n, _))
        }
        if (S = t.memoizedState,
        S !== null && (_ = S.dehydrated,
        _ !== null)) {
            if (f)
                n.flags & 256 ? ($n(n),
                n.flags &= -257,
                n = zu(t, n, a)) : n.memoizedState !== null ? (Zn(),
                n.child = t.child,
                n.flags |= 128,
                n = null) : (Zn(),
                u = l.fallback,
                _ = n.mode,
                l = Gl({
                    mode: "visible",
                    children: l.children
                }, _),
                u = ki(u, _, a, null),
                u.flags |= 2,
                l.return = n,
                u.return = n,
                l.sibling = u,
                n.child = l,
                Ms(n, t.child, null, a),
                l = n.child,
                l.memoizedState = Uu(a),
                l.childLanes = Pu(t, g, a),
                n.memoizedState = Lu,
                n = u);
            else if ($n(n),
            bf(_)) {
                if (g = _.nextSibling && _.nextSibling.dataset,
                g)
                    var I = g.dgst;
                g = I,
                l = Error(r(419)),
                l.stack = "",
                l.digest = g,
                Da({
                    value: l,
                    source: null,
                    stack: null
                }),
                n = zu(t, n, a)
            } else if (tt || Ma(t, n, a, !1),
            g = (a & t.childLanes) !== 0,
            tt || g) {
                if (g = De,
                g !== null && (l = a & -a,
                l = (l & 42) !== 0 ? 1 : bc(l),
                l = (l & (g.suspendedLanes | a)) !== 0 ? 0 : l,
                l !== 0 && l !== S.retryLane))
                    throw S.retryLane = l,
                    Ss(t, l),
                    Ut(g, t, l),
                    zm;
                _.data === "$?" || sf(),
                n = zu(t, n, a)
            } else
                _.data === "$?" ? (n.flags |= 192,
                n.child = t.child,
                n = null) : (t = S.treeContext,
                Be = Wt(_.nextSibling),
                mt = n,
                Se = !0,
                Pi = null,
                ln = !1,
                t !== null && (Bt[qt++] = vn,
                Bt[qt++] = yn,
                Bt[qt++] = Li,
                vn = t.id,
                yn = t.overflow,
                Li = n),
                n = ju(n, l.children),
                n.flags |= 4096);
            return n
        }
        return u ? (Zn(),
        u = l.fallback,
        _ = n.mode,
        S = t.child,
        I = S.sibling,
        l = _n(S, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = S.subtreeFlags & 65011712,
        I !== null ? u = _n(I, u) : (u = ki(u, _, a, null),
        u.flags |= 2),
        u.return = n,
        l.return = n,
        l.sibling = u,
        n.child = l,
        l = u,
        u = n.child,
        _ = t.child.memoizedState,
        _ === null ? _ = Uu(a) : (S = _.cachePool,
        S !== null ? (I = We._currentValue,
        S = S.parent !== I ? {
            parent: I,
            pool: I
        } : S) : S = kp(),
        _ = {
            baseLanes: _.baseLanes | a,
            cachePool: S
        }),
        u.memoizedState = _,
        u.childLanes = Pu(t, g, a),
        n.memoizedState = Lu,
        l) : ($n(n),
        a = t.child,
        t = a.sibling,
        a = _n(a, {
            mode: "visible",
            children: l.children
        }),
        a.return = n,
        a.sibling = null,
        t !== null && (g = n.deletions,
        g === null ? (n.deletions = [t],
        n.flags |= 16) : g.push(t)),
        n.child = a,
        n.memoizedState = null,
        a)
    }
    function ju(t, n) {
        return n = Gl({
            mode: "visible",
            children: n
        }, t.mode),
        n.return = t,
        t.child = n
    }
    function Gl(t, n) {
        return t = It(22, t, null, n),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function zu(t, n, a) {
        return Ms(n, t.child, null, a),
        t = ju(n, n.pendingProps.children),
        t.flags |= 2,
        n.memoizedState = null,
        t
    }
    function Xm(t, n, a) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n),
        iu(t.return, n, a)
    }
    function Hu(t, n, a, l, u) {
        var f = t.memoizedState;
        f === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: u
        } : (f.isBackwards = n,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = l,
        f.tail = a,
        f.tailMode = u)
    }
    function Wm(t, n, a) {
        var l = n.pendingProps
          , u = l.revealOrder
          , f = l.tail;
        if (lt(t, n, l.children, a),
        l = $e.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            n.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                e: for (t = n.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && Xm(t, a, n);
                    else if (t.tag === 19)
                        Xm(t, a, n);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === n)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === n)
                            break e;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l &= 1
        }
        switch (V($e, l),
        u) {
        case "forwards":
            for (a = n.child,
            u = null; a !== null; )
                t = a.alternate,
                t !== null && Hl(t) === null && (u = a),
                a = a.sibling;
            a = u,
            a === null ? (u = n.child,
            n.child = null) : (u = a.sibling,
            a.sibling = null),
            Hu(n, !1, u, a, f);
            break;
        case "backwards":
            for (a = null,
            u = n.child,
            n.child = null; u !== null; ) {
                if (t = u.alternate,
                t !== null && Hl(t) === null) {
                    n.child = u;
                    break
                }
                t = u.sibling,
                u.sibling = a,
                a = u,
                u = t
            }
            Hu(n, !0, a, null, f);
            break;
        case "together":
            Hu(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
        }
        return n.child
    }
    function Cn(t, n, a) {
        if (t !== null && (n.dependencies = t.dependencies),
        ii |= n.lanes,
        (a & n.childLanes) === 0)
            if (t !== null) {
                if (Ma(t, n, a, !1),
                (a & n.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && n.child !== t.child)
            throw Error(r(153));
        if (n.child !== null) {
            for (t = n.child,
            a = _n(t, t.pendingProps),
            n.child = a,
            a.return = n; t.sibling !== null; )
                t = t.sibling,
                a = a.sibling = _n(t, t.pendingProps),
                a.return = n;
            a.sibling = null
        }
        return n.child
    }
    function Bu(t, n) {
        return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Cl(t)))
    }
    function Yb(t, n, a) {
        switch (n.tag) {
        case 3:
            Ue(n, n.stateNode.containerInfo),
            Fn(n, We, t.memoizedState.cache),
            Ia();
            break;
        case 27:
        case 5:
            gc(n);
            break;
        case 4:
            Ue(n, n.stateNode.containerInfo);
            break;
        case 10:
            Fn(n, n.type, n.memoizedProps.value);
            break;
        case 13:
            var l = n.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? ($n(n),
                n.flags |= 128,
                null) : (a & n.child.childLanes) !== 0 ? Qm(t, n, a) : ($n(n),
                t = Cn(t, n, a),
                t !== null ? t.sibling : null);
            $n(n);
            break;
        case 19:
            var u = (t.flags & 128) !== 0;
            if (l = (a & n.childLanes) !== 0,
            l || (Ma(t, n, a, !1),
            l = (a & n.childLanes) !== 0),
            u) {
                if (l)
                    return Wm(t, n, a);
                n.flags |= 128
            }
            if (u = n.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            V($e, $e.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0,
            Vm(t, n, a);
        case 24:
            Fn(n, We, t.memoizedState.cache)
        }
        return Cn(t, n, a)
    }
    function $m(t, n, a) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps)
                tt = !0;
            else {
                if (!Bu(t, a) && (n.flags & 128) === 0)
                    return tt = !1,
                    Yb(t, n, a);
                tt = (t.flags & 131072) !== 0
            }
        else
            tt = !1,
            Se && (n.flags & 1048576) !== 0 && Rp(n, Tl, n.index);
        switch (n.lanes = 0,
        n.tag) {
        case 16:
            e: {
                t = n.pendingProps;
                var l = n.elementType
                  , u = l._init;
                if (l = u(l._payload),
                n.type = l,
                typeof l == "function")
                    Wc(l) ? (t = Vi(l, t),
                    n.tag = 1,
                    n = Fm(null, n, l, t, a)) : (n.tag = 0,
                    n = ku(null, n, l, t, a));
                else {
                    if (l != null) {
                        if (u = l.$$typeof,
                        u === W) {
                            n.tag = 11,
                            n = Hm(null, n, l, t, a);
                            break e
                        } else if (u === Te) {
                            n.tag = 14,
                            n = Bm(null, n, l, t, a);
                            break e
                        }
                    }
                    throw n = Rt(l) || l,
                    Error(r(306, n, ""))
                }
            }
            return n;
        case 0:
            return ku(t, n, n.type, n.pendingProps, a);
        case 1:
            return l = n.type,
            u = Vi(l, n.pendingProps),
            Fm(t, n, l, u, a);
        case 3:
            e: {
                if (Ue(n, n.stateNode.containerInfo),
                t === null)
                    throw Error(r(387));
                l = n.pendingProps;
                var f = n.memoizedState;
                u = f.element,
                uu(t, n),
                Ha(n, l, null, a);
                var g = n.memoizedState;
                if (l = g.cache,
                Fn(n, We, l),
                l !== f.cache && su(n, [We], a, !0),
                za(),
                l = g.element,
                f.isDehydrated)
                    if (f = {
                        element: l,
                        isDehydrated: !1,
                        cache: g.cache
                    },
                    n.updateQueue.baseState = f,
                    n.memoizedState = f,
                    n.flags & 256) {
                        n = Km(t, n, l, a);
                        break e
                    } else if (l !== u) {
                        u = zt(Error(r(424)), n),
                        Da(u),
                        n = Km(t, n, l, a);
                        break e
                    } else {
                        switch (t = n.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Be = Wt(t.firstChild),
                        mt = n,
                        Se = !0,
                        Pi = null,
                        ln = !0,
                        a = xm(n, null, l, a),
                        n.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (Ia(),
                    l === u) {
                        n = Cn(t, n, a);
                        break e
                    }
                    lt(t, n, l, a)
                }
                n = n.child
            }
            return n;
        case 26:
            return Vl(t, n),
            t === null ? (a = t_(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : Se || (a = n.type,
            t = n.pendingProps,
            l = so(ee.current).createElement(a),
            l[ft] = n,
            l[yt] = t,
            ct(l, a, t),
            et(l),
            n.stateNode = l) : n.memoizedState = t_(n.type, t.memoizedProps, n.pendingProps, t.memoizedState),
            null;
        case 27:
            return gc(n),
            t === null && Se && (l = n.stateNode = Zg(n.type, n.pendingProps, ee.current),
            mt = n,
            ln = !0,
            u = Be,
            li(n.type) ? (Sf = u,
            Be = Wt(l.firstChild)) : Be = u),
            lt(t, n, n.pendingProps.children, a),
            Vl(t, n),
            t === null && (n.flags |= 4194304),
            n.child;
        case 5:
            return t === null && Se && ((u = l = Be) && (l = yS(l, n.type, n.pendingProps, ln),
            l !== null ? (n.stateNode = l,
            mt = n,
            Be = Wt(l.firstChild),
            ln = !1,
            u = !0) : u = !1),
            u || ji(n)),
            gc(n),
            u = n.type,
            f = n.pendingProps,
            g = t !== null ? t.memoizedProps : null,
            l = f.children,
            vf(u, f) ? l = null : g !== null && vf(u, g) && (n.flags |= 32),
            n.memoizedState !== null && (u = gu(t, n, Pb, null, null, a),
            or._currentValue = u),
            Vl(t, n),
            lt(t, n, l, a),
            n.child;
        case 6:
            return t === null && Se && ((t = a = Be) && (a = ES(a, n.pendingProps, ln),
            a !== null ? (n.stateNode = a,
            mt = n,
            Be = null,
            t = !0) : t = !1),
            t || ji(n)),
            null;
        case 13:
            return Qm(t, n, a);
        case 4:
            return Ue(n, n.stateNode.containerInfo),
            l = n.pendingProps,
            t === null ? n.child = Ms(n, null, l, a) : lt(t, n, l, a),
            n.child;
        case 11:
            return Hm(t, n, n.type, n.pendingProps, a);
        case 7:
            return lt(t, n, n.pendingProps, a),
            n.child;
        case 8:
            return lt(t, n, n.pendingProps.children, a),
            n.child;
        case 12:
            return lt(t, n, n.pendingProps.children, a),
            n.child;
        case 10:
            return l = n.pendingProps,
            Fn(n, n.type, l.value),
            lt(t, n, l.children, a),
            n.child;
        case 9:
            return u = n.type._context,
            l = n.pendingProps.children,
            Hi(n),
            u = dt(u),
            l = l(u),
            n.flags |= 1,
            lt(t, n, l, a),
            n.child;
        case 14:
            return Bm(t, n, n.type, n.pendingProps, a);
        case 15:
            return qm(t, n, n.type, n.pendingProps, a);
        case 19:
            return Wm(t, n, a);
        case 31:
            return l = n.pendingProps,
            a = n.mode,
            l = {
                mode: l.mode,
                children: l.children
            },
            t === null ? (a = Gl(l, a),
            a.ref = n.ref,
            n.child = a,
            a.return = n,
            n = a) : (a = _n(t.child, l),
            a.ref = n.ref,
            n.child = a,
            a.return = n,
            n = a),
            n;
        case 22:
            return Vm(t, n, a);
        case 24:
            return Hi(n),
            l = dt(We),
            t === null ? (u = lu(),
            u === null && (u = De,
            f = au(),
            u.pooledCache = f,
            f.refCount++,
            f !== null && (u.pooledCacheLanes |= a),
            u = f),
            n.memoizedState = {
                parent: l,
                cache: u
            },
            cu(n),
            Fn(n, We, u)) : ((t.lanes & a) !== 0 && (uu(t, n),
            Ha(n, null, null, a),
            za()),
            u = t.memoizedState,
            f = n.memoizedState,
            u.parent !== l ? (u = {
                parent: l,
                cache: l
            },
            n.memoizedState = u,
            n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u),
            Fn(n, We, l)) : (l = f.cache,
            Fn(n, We, l),
            l !== u.cache && su(n, [We], a, !0))),
            lt(t, n, n.pendingProps.children, a),
            n.child;
        case 29:
            throw n.pendingProps
        }
        throw Error(r(156, n.tag))
    }
    function wn(t) {
        t.flags |= 4
    }
    function Zm(t, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !r_(n)) {
            if (n = Vt.current,
            n !== null && ((ge & 4194048) === ge ? on !== null : (ge & 62914560) !== ge && (ge & 536870912) === 0 || n !== on))
                throw Pa = ou,
                Lp;
            t.flags |= 8192
        }
    }
    function Yl(t, n) {
        n !== null && (t.flags |= 4),
        t.flags & 16384 && (n = t.tag !== 22 ? Oh() : 536870912,
        t.lanes |= n,
        Ps |= n)
    }
    function Ka(t, n) {
        if (!Se)
            switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var a = null; n !== null; )
                    n.alternate !== null && (a = n),
                    n = n.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null; )
                    a.alternate !== null && (l = a),
                    a = a.sibling;
                l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function He(t) {
        var n = t.alternate !== null && t.alternate.child === t.child
          , a = 0
          , l = 0;
        if (n)
            for (var u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags & 65011712,
                l |= u.flags & 65011712,
                u.return = t,
                u = u.sibling;
        else
            for (u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags,
                l |= u.flags,
                u.return = t,
                u = u.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = a,
        n
    }
    function Fb(t, n, a) {
        var l = n.pendingProps;
        switch (eu(n),
        n.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return He(n),
            null;
        case 1:
            return He(n),
            null;
        case 3:
            return a = n.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            n.memoizedState.cache !== l && (n.flags |= 2048),
            bn(We),
            qn(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (t === null || t.child === null) && (Oa(n) ? wn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
            Op())),
            He(n),
            null;
        case 26:
            return a = n.memoizedState,
            t === null ? (wn(n),
            a !== null ? (He(n),
            Zm(n, a)) : (He(n),
            n.flags &= -16777217)) : a ? a !== t.memoizedState ? (wn(n),
            He(n),
            Zm(n, a)) : (He(n),
            n.flags &= -16777217) : (t.memoizedProps !== l && wn(n),
            He(n),
            n.flags &= -16777217),
            null;
        case 27:
            nl(n),
            a = ee.current;
            var u = n.type;
            if (t !== null && n.stateNode != null)
                t.memoizedProps !== l && wn(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(r(166));
                    return He(n),
                    null
                }
                t = X.current,
                Oa(n) ? Np(n) : (t = Zg(u, l, a),
                n.stateNode = t,
                wn(n))
            }
            return He(n),
            null;
        case 5:
            if (nl(n),
            a = n.type,
            t !== null && n.stateNode != null)
                t.memoizedProps !== l && wn(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(r(166));
                    return He(n),
                    null
                }
                if (t = X.current,
                Oa(n))
                    Np(n);
                else {
                    switch (u = so(ee.current),
                    t) {
                    case 1:
                        t = u.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            t = u.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            t = u.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof l.is == "string" ? u.createElement("select", {
                                is: l.is
                            }) : u.createElement("select"),
                            l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                            break;
                        default:
                            t = typeof l.is == "string" ? u.createElement(a, {
                                is: l.is
                            }) : u.createElement(a)
                        }
                    }
                    t[ft] = n,
                    t[yt] = l;
                    e: for (u = n.child; u !== null; ) {
                        if (u.tag === 5 || u.tag === 6)
                            t.appendChild(u.stateNode);
                        else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                            u.child.return = u,
                            u = u.child;
                            continue
                        }
                        if (u === n)
                            break e;
                        for (; u.sibling === null; ) {
                            if (u.return === null || u.return === n)
                                break e;
                            u = u.return
                        }
                        u.sibling.return = u.return,
                        u = u.sibling
                    }
                    n.stateNode = t;
                    e: switch (ct(t, a, l),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!l.autoFocus;
                        break e;
                    case "img":
                        t = !0;
                        break e;
                    default:
                        t = !1
                    }
                    t && wn(n)
                }
            }
            return He(n),
            n.flags &= -16777217,
            null;
        case 6:
            if (t && n.stateNode != null)
                t.memoizedProps !== l && wn(n);
            else {
                if (typeof l != "string" && n.stateNode === null)
                    throw Error(r(166));
                if (t = ee.current,
                Oa(n)) {
                    if (t = n.stateNode,
                    a = n.memoizedProps,
                    l = null,
                    u = mt,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            l = u.memoizedProps
                        }
                    t[ft] = n,
                    t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Yg(t.nodeValue, a)),
                    t || ji(n)
                } else
                    t = so(t).createTextNode(l),
                    t[ft] = n,
                    n.stateNode = t
            }
            return He(n),
            null;
        case 13:
            if (l = n.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = Oa(n),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!u)
                            throw Error(r(318));
                        if (u = n.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(r(317));
                        u[ft] = n
                    } else
                        Ia(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    He(n),
                    u = !1
                } else
                    u = Op(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return n.flags & 256 ? (Tn(n),
                    n) : (Tn(n),
                    null)
            }
            if (Tn(n),
            (n.flags & 128) !== 0)
                return n.lanes = a,
                n;
            if (a = l !== null,
            t = t !== null && t.memoizedState !== null,
            a) {
                l = n.child,
                u = null,
                l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool);
                var f = null;
                l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool),
                f !== u && (l.flags |= 2048)
            }
            return a !== t && a && (n.child.flags |= 8192),
            Yl(n, n.updateQueue),
            He(n),
            null;
        case 4:
            return qn(),
            t === null && hf(n.stateNode.containerInfo),
            He(n),
            null;
        case 10:
            return bn(n.type),
            He(n),
            null;
        case 19:
            if (z($e),
            u = n.memoizedState,
            u === null)
                return He(n),
                null;
            if (l = (n.flags & 128) !== 0,
            f = u.rendering,
            f === null)
                if (l)
                    Ka(u, !1);
                else {
                    if (qe !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = n.child; t !== null; ) {
                            if (f = Hl(t),
                            f !== null) {
                                for (n.flags |= 128,
                                Ka(u, !1),
                                t = f.updateQueue,
                                n.updateQueue = t,
                                Yl(n, t),
                                n.subtreeFlags = 0,
                                t = a,
                                a = n.child; a !== null; )
                                    Ap(a, t),
                                    a = a.sibling;
                                return V($e, $e.current & 1 | 2),
                                n.child
                            }
                            t = t.sibling
                        }
                    u.tail !== null && rn() > Ql && (n.flags |= 128,
                    l = !0,
                    Ka(u, !1),
                    n.lanes = 4194304)
                }
            else {
                if (!l)
                    if (t = Hl(f),
                    t !== null) {
                        if (n.flags |= 128,
                        l = !0,
                        t = t.updateQueue,
                        n.updateQueue = t,
                        Yl(n, t),
                        Ka(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !f.alternate && !Se)
                            return He(n),
                            null
                    } else
                        2 * rn() - u.renderingStartTime > Ql && a !== 536870912 && (n.flags |= 128,
                        l = !0,
                        Ka(u, !1),
                        n.lanes = 4194304);
                u.isBackwards ? (f.sibling = n.child,
                n.child = f) : (t = u.last,
                t !== null ? t.sibling = f : n.child = f,
                u.last = f)
            }
            return u.tail !== null ? (n = u.tail,
            u.rendering = n,
            u.tail = n.sibling,
            u.renderingStartTime = rn(),
            n.sibling = null,
            t = $e.current,
            V($e, l ? t & 1 | 2 : t & 1),
            n) : (He(n),
            null);
        case 22:
        case 23:
            return Tn(n),
            pu(),
            l = n.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192),
            l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (He(n),
            n.subtreeFlags & 6 && (n.flags |= 8192)) : He(n),
            a = n.updateQueue,
            a !== null && Yl(n, a.retryQueue),
            a = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            l = null,
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool),
            l !== a && (n.flags |= 2048),
            t !== null && z(Bi),
            null;
        case 24:
            return a = null,
            t !== null && (a = t.memoizedState.cache),
            n.memoizedState.cache !== a && (n.flags |= 2048),
            bn(We),
            He(n),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, n.tag))
    }
    function Kb(t, n) {
        switch (eu(n),
        n.tag) {
        case 1:
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 3:
            return bn(We),
            qn(),
            t = n.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 26:
        case 27:
        case 5:
            return nl(n),
            null;
        case 13:
            if (Tn(n),
            t = n.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (n.alternate === null)
                    throw Error(r(340));
                Ia()
            }
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 19:
            return z($e),
            null;
        case 4:
            return qn(),
            null;
        case 10:
            return bn(n.type),
            null;
        case 22:
        case 23:
            return Tn(n),
            pu(),
            t !== null && z(Bi),
            t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 24:
            return bn(We),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Jm(t, n) {
        switch (eu(n),
        n.tag) {
        case 3:
            bn(We),
            qn();
            break;
        case 26:
        case 27:
        case 5:
            nl(n);
            break;
        case 4:
            qn();
            break;
        case 13:
            Tn(n);
            break;
        case 19:
            z($e);
            break;
        case 10:
            bn(n.type);
            break;
        case 22:
        case 23:
            Tn(n),
            pu(),
            t !== null && z(Bi);
            break;
        case 24:
            bn(We)
        }
    }
    function Qa(t, n) {
        try {
            var a = n.updateQueue
              , l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var f = a.create
                          , g = a.inst;
                        l = f(),
                        g.destroy = l
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (_) {
            Oe(n, n.return, _)
        }
    }
    function Jn(t, n, a) {
        try {
            var l = n.updateQueue
              , u = l !== null ? l.lastEffect : null;
            if (u !== null) {
                var f = u.next;
                l = f;
                do {
                    if ((l.tag & t) === t) {
                        var g = l.inst
                          , _ = g.destroy;
                        if (_ !== void 0) {
                            g.destroy = void 0,
                            u = n;
                            var S = a
                              , I = _;
                            try {
                                I()
                            } catch (L) {
                                Oe(u, S, L)
                            }
                        }
                    }
                    l = l.next
                } while (l !== f)
            }
        } catch (L) {
            Oe(n, n.return, L)
        }
    }
    function eg(t) {
        var n = t.updateQueue;
        if (n !== null) {
            var a = t.stateNode;
            try {
                Bp(n, a)
            } catch (l) {
                Oe(t, t.return, l)
            }
        }
    }
    function tg(t, n, a) {
        a.props = Vi(t.type, t.memoizedProps),
        a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            Oe(t, n, l)
        }
    }
    function Xa(t, n) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (u) {
            Oe(t, n, u)
        }
    }
    function cn(t, n) {
        var a = t.ref
          , l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (u) {
                    Oe(t, n, u)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (u) {
                    Oe(t, n, u)
                }
            else
                a.current = null
    }
    function ng(t) {
        var n = t.type
          , a = t.memoizedProps
          , l = t.stateNode;
        try {
            e: switch (n) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && l.focus();
                break e;
            case "img":
                a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        } catch (u) {
            Oe(t, t.return, u)
        }
    }
    function qu(t, n, a) {
        try {
            var l = t.stateNode;
            pS(l, t.type, a, n),
            l[yt] = n
        } catch (u) {
            Oe(t, t.return, u)
        }
    }
    function ig(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && li(t.type) || t.tag === 4
    }
    function Vu(t) {
        e: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || ig(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && li(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue e;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Gu(t, n, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            n.appendChild(t),
            a = a._reactRootContainer,
            a != null || n.onclick !== null || (n.onclick = io));
        else if (l !== 4 && (l === 27 && li(t.type) && (a = t.stateNode,
        n = null),
        t = t.child,
        t !== null))
            for (Gu(t, n, a),
            t = t.sibling; t !== null; )
                Gu(t, n, a),
                t = t.sibling
    }
    function Fl(t, n, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? a.insertBefore(t, n) : a.appendChild(t);
        else if (l !== 4 && (l === 27 && li(t.type) && (a = t.stateNode),
        t = t.child,
        t !== null))
            for (Fl(t, n, a),
            t = t.sibling; t !== null; )
                Fl(t, n, a),
                t = t.sibling
    }
    function sg(t) {
        var n = t.stateNode
          , a = t.memoizedProps;
        try {
            for (var l = t.type, u = n.attributes; u.length; )
                n.removeAttributeNode(u[0]);
            ct(n, l, a),
            n[ft] = t,
            n[yt] = a
        } catch (f) {
            Oe(t, t.return, f)
        }
    }
    var An = !1
      , Ye = !1
      , Yu = !1
      , ag = typeof WeakSet == "function" ? WeakSet : Set
      , nt = null;
    function Qb(t, n) {
        if (t = t.containerInfo,
        gf = uo,
        t = gp(t),
        Vc(t)) {
            if ("selectionStart"in t)
                var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                e: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var l = a.getSelection && a.getSelection();
                    if (l && l.rangeCount !== 0) {
                        a = l.anchorNode;
                        var u = l.anchorOffset
                          , f = l.focusNode;
                        l = l.focusOffset;
                        try {
                            a.nodeType,
                            f.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var g = 0
                          , _ = -1
                          , S = -1
                          , I = 0
                          , L = 0
                          , j = t
                          , D = null;
                        t: for (; ; ) {
                            for (var M; j !== a || u !== 0 && j.nodeType !== 3 || (_ = g + u),
                            j !== f || l !== 0 && j.nodeType !== 3 || (S = g + l),
                            j.nodeType === 3 && (g += j.nodeValue.length),
                            (M = j.firstChild) !== null; )
                                D = j,
                                j = M;
                            for (; ; ) {
                                if (j === t)
                                    break t;
                                if (D === a && ++I === u && (_ = g),
                                D === f && ++L === l && (S = g),
                                (M = j.nextSibling) !== null)
                                    break;
                                j = D,
                                D = j.parentNode
                            }
                            j = M
                        }
                        a = _ === -1 || S === -1 ? null : {
                            start: _,
                            end: S
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (_f = {
            focusedElem: t,
            selectionRange: a
        },
        uo = !1,
        nt = n; nt !== null; )
            if (n = nt,
            t = n.child,
            (n.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = n,
                nt = t;
            else
                for (; nt !== null; ) {
                    switch (n = nt,
                    f = n.alternate,
                    t = n.flags,
                    n.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && f !== null) {
                            t = void 0,
                            a = n,
                            u = f.memoizedProps,
                            f = f.memoizedState,
                            l = a.stateNode;
                            try {
                                var se = Vi(a.type, u, a.elementType === a.type);
                                t = l.getSnapshotBeforeUpdate(se, f),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (J) {
                                Oe(a, a.return, J)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = n.stateNode.containerInfo,
                            a = t.nodeType,
                            a === 9)
                                Ef(t);
                            else if (a === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Ef(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (t = n.sibling,
                    t !== null) {
                        t.return = n.return,
                        nt = t;
                        break
                    }
                    nt = n.return
                }
    }
    function rg(t, n, a) {
        var l = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            ei(t, a),
            l & 4 && Qa(5, a);
            break;
        case 1:
            if (ei(t, a),
            l & 4)
                if (t = a.stateNode,
                n === null)
                    try {
                        t.componentDidMount()
                    } catch (g) {
                        Oe(a, a.return, g)
                    }
                else {
                    var u = Vi(a.type, n.memoizedProps);
                    n = n.memoizedState;
                    try {
                        t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (g) {
                        Oe(a, a.return, g)
                    }
                }
            l & 64 && eg(a),
            l & 512 && Xa(a, a.return);
            break;
        case 3:
            if (ei(t, a),
            l & 64 && (t = a.updateQueue,
            t !== null)) {
                if (n = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        n = a.child.stateNode;
                        break;
                    case 1:
                        n = a.child.stateNode
                    }
                try {
                    Bp(t, n)
                } catch (g) {
                    Oe(a, a.return, g)
                }
            }
            break;
        case 27:
            n === null && l & 4 && sg(a);
        case 26:
        case 5:
            ei(t, a),
            n === null && l & 4 && ng(a),
            l & 512 && Xa(a, a.return);
            break;
        case 12:
            ei(t, a);
            break;
        case 13:
            ei(t, a),
            l & 4 && cg(t, a),
            l & 64 && (t = a.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (a = iS.bind(null, a),
            bS(t, a))));
            break;
        case 22:
            if (l = a.memoizedState !== null || An,
            !l) {
                n = n !== null && n.memoizedState !== null || Ye,
                u = An;
                var f = Ye;
                An = l,
                (Ye = n) && !f ? ti(t, a, (a.subtreeFlags & 8772) !== 0) : ei(t, a),
                An = u,
                Ye = f
            }
            break;
        case 30:
            break;
        default:
            ei(t, a)
        }
    }
    function lg(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null,
        lg(n)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (n = t.stateNode,
        n !== null && Cc(n)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Pe = null
      , St = !1;
    function Rn(t, n, a) {
        for (a = a.child; a !== null; )
            og(t, n, a),
            a = a.sibling
    }
    function og(t, n, a) {
        if (Nt && typeof Nt.onCommitFiberUnmount == "function")
            try {
                Nt.onCommitFiberUnmount(ga, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Ye || cn(a, n),
            Rn(t, n, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Ye || cn(a, n);
            var l = Pe
              , u = St;
            li(a.type) && (Pe = a.stateNode,
            St = !1),
            Rn(t, n, a),
            sr(a.stateNode),
            Pe = l,
            St = u;
            break;
        case 5:
            Ye || cn(a, n);
        case 6:
            if (l = Pe,
            u = St,
            Pe = null,
            Rn(t, n, a),
            Pe = l,
            St = u,
            Pe !== null)
                if (St)
                    try {
                        (Pe.nodeType === 9 ? Pe.body : Pe.nodeName === "HTML" ? Pe.ownerDocument.body : Pe).removeChild(a.stateNode)
                    } catch (f) {
                        Oe(a, n, f)
                    }
                else
                    try {
                        Pe.removeChild(a.stateNode)
                    } catch (f) {
                        Oe(a, n, f)
                    }
            break;
        case 18:
            Pe !== null && (St ? (t = Pe,
            Wg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
            dr(t)) : Wg(Pe, a.stateNode));
            break;
        case 4:
            l = Pe,
            u = St,
            Pe = a.stateNode.containerInfo,
            St = !0,
            Rn(t, n, a),
            Pe = l,
            St = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ye || Jn(2, a, n),
            Ye || Jn(4, a, n),
            Rn(t, n, a);
            break;
        case 1:
            Ye || (cn(a, n),
            l = a.stateNode,
            typeof l.componentWillUnmount == "function" && tg(a, n, l)),
            Rn(t, n, a);
            break;
        case 21:
            Rn(t, n, a);
            break;
        case 22:
            Ye = (l = Ye) || a.memoizedState !== null,
            Rn(t, n, a),
            Ye = l;
            break;
        default:
            Rn(t, n, a)
        }
    }
    function cg(t, n) {
        if (n.memoizedState === null && (t = n.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                dr(t)
            } catch (a) {
                Oe(n, n.return, a)
            }
    }
    function Xb(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var n = t.stateNode;
            return n === null && (n = t.stateNode = new ag),
            n;
        case 22:
            return t = t.stateNode,
            n = t._retryCache,
            n === null && (n = t._retryCache = new ag),
            n;
        default:
            throw Error(r(435, t.tag))
        }
    }
    function Fu(t, n) {
        var a = Xb(t);
        n.forEach(function(l) {
            var u = sS.bind(null, t, l);
            a.has(l) || (a.add(l),
            l.then(u, u))
        })
    }
    function Dt(t, n) {
        var a = n.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var u = a[l]
                  , f = t
                  , g = n
                  , _ = g;
                e: for (; _ !== null; ) {
                    switch (_.tag) {
                    case 27:
                        if (li(_.type)) {
                            Pe = _.stateNode,
                            St = !1;
                            break e
                        }
                        break;
                    case 5:
                        Pe = _.stateNode,
                        St = !1;
                        break e;
                    case 3:
                    case 4:
                        Pe = _.stateNode.containerInfo,
                        St = !0;
                        break e
                    }
                    _ = _.return
                }
                if (Pe === null)
                    throw Error(r(160));
                og(f, g, u),
                Pe = null,
                St = !1,
                f = u.alternate,
                f !== null && (f.return = null),
                u.return = null
            }
        if (n.subtreeFlags & 13878)
            for (n = n.child; n !== null; )
                ug(n, t),
                n = n.sibling
    }
    var Xt = null;
    function ug(t, n) {
        var a = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Dt(n, t),
            Mt(t),
            l & 4 && (Jn(3, t, t.return),
            Qa(3, t),
            Jn(5, t, t.return));
            break;
        case 1:
            Dt(n, t),
            Mt(t),
            l & 512 && (Ye || a === null || cn(a, a.return)),
            l & 64 && An && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (a = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
            break;
        case 26:
            var u = Xt;
            if (Dt(n, t),
            Mt(t),
            l & 512 && (Ye || a === null || cn(a, a.return)),
            l & 4) {
                var f = a !== null ? a.memoizedState : null;
                if (l = t.memoizedState,
                a === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            e: {
                                l = t.type,
                                a = t.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (l) {
                                case "title":
                                    f = u.getElementsByTagName("title")[0],
                                    (!f || f[ya] || f[ft] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l),
                                    u.head.insertBefore(f, u.querySelector("head > title"))),
                                    ct(f, l, a),
                                    f[ft] = t,
                                    et(f),
                                    l = f;
                                    break e;
                                case "link":
                                    var g = s_("link", "href", u).get(l + (a.href || ""));
                                    if (g) {
                                        for (var _ = 0; _ < g.length; _++)
                                            if (f = g[_],
                                            f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                g.splice(_, 1);
                                                break t
                                            }
                                    }
                                    f = u.createElement(l),
                                    ct(f, l, a),
                                    u.head.appendChild(f);
                                    break;
                                case "meta":
                                    if (g = s_("meta", "content", u).get(l + (a.content || ""))) {
                                        for (_ = 0; _ < g.length; _++)
                                            if (f = g[_],
                                            f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                g.splice(_, 1);
                                                break t
                                            }
                                    }
                                    f = u.createElement(l),
                                    ct(f, l, a),
                                    u.head.appendChild(f);
                                    break;
                                default:
                                    throw Error(r(468, l))
                                }
                                f[ft] = t,
                                et(f),
                                l = f
                            }
                            t.stateNode = l
                        } else
                            a_(u, t.type, t.stateNode);
                    else
                        t.stateNode = i_(u, l, t.memoizedProps);
                else
                    f !== l ? (f === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : f.count--,
                    l === null ? a_(u, t.type, t.stateNode) : i_(u, l, t.memoizedProps)) : l === null && t.stateNode !== null && qu(t, t.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Dt(n, t),
            Mt(t),
            l & 512 && (Ye || a === null || cn(a, a.return)),
            a !== null && l & 4 && qu(t, t.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Dt(n, t),
            Mt(t),
            l & 512 && (Ye || a === null || cn(a, a.return)),
            t.flags & 32) {
                u = t.stateNode;
                try {
                    ms(u, "")
                } catch (M) {
                    Oe(t, t.return, M)
                }
            }
            l & 4 && t.stateNode != null && (u = t.memoizedProps,
            qu(t, u, a !== null ? a.memoizedProps : u)),
            l & 1024 && (Yu = !0);
            break;
        case 6:
            if (Dt(n, t),
            Mt(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(r(162));
                l = t.memoizedProps,
                a = t.stateNode;
                try {
                    a.nodeValue = l
                } catch (M) {
                    Oe(t, t.return, M)
                }
            }
            break;
        case 3:
            if (lo = null,
            u = Xt,
            Xt = ao(n.containerInfo),
            Dt(n, t),
            Xt = u,
            Mt(t),
            l & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    dr(n.containerInfo)
                } catch (M) {
                    Oe(t, t.return, M)
                }
            Yu && (Yu = !1,
            fg(t));
            break;
        case 4:
            l = Xt,
            Xt = ao(t.stateNode.containerInfo),
            Dt(n, t),
            Mt(t),
            Xt = l;
            break;
        case 12:
            Dt(n, t),
            Mt(t);
            break;
        case 13:
            Dt(n, t),
            Mt(t),
            t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Zu = rn()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Fu(t, l)));
            break;
        case 22:
            u = t.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null
              , I = An
              , L = Ye;
            if (An = I || u,
            Ye = L || S,
            Dt(n, t),
            Ye = L,
            An = I,
            Mt(t),
            l & 8192)
                e: for (n = t.stateNode,
                n._visibility = u ? n._visibility & -2 : n._visibility | 1,
                u && (a === null || S || An || Ye || Gi(t)),
                a = null,
                n = t; ; ) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (a === null) {
                            S = a = n;
                            try {
                                if (f = S.stateNode,
                                u)
                                    g = f.style,
                                    typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    _ = S.stateNode;
                                    var j = S.memoizedProps.style
                                      , D = j != null && j.hasOwnProperty("display") ? j.display : null;
                                    _.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim()
                                }
                            } catch (M) {
                                Oe(S, S.return, M)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (a === null) {
                            S = n;
                            try {
                                S.stateNode.nodeValue = u ? "" : S.memoizedProps
                            } catch (M) {
                                Oe(S, S.return, M)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === t)
                            break e;
                        a === n && (a = null),
                        n = n.return
                    }
                    a === n && (a = null),
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (a = l.retryQueue,
            a !== null && (l.retryQueue = null,
            Fu(t, a))));
            break;
        case 19:
            Dt(n, t),
            Mt(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Fu(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Dt(n, t),
            Mt(t)
        }
    }
    function Mt(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                for (var a, l = t.return; l !== null; ) {
                    if (ig(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null)
                    throw Error(r(160));
                switch (a.tag) {
                case 27:
                    var u = a.stateNode
                      , f = Vu(t);
                    Fl(t, f, u);
                    break;
                case 5:
                    var g = a.stateNode;
                    a.flags & 32 && (ms(g, ""),
                    a.flags &= -33);
                    var _ = Vu(t);
                    Fl(t, _, g);
                    break;
                case 3:
                case 4:
                    var S = a.stateNode.containerInfo
                      , I = Vu(t);
                    Gu(t, I, S);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (L) {
                Oe(t, t.return, L)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }
    function fg(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var n = t;
                fg(n),
                n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
                t = t.sibling
            }
    }
    function ei(t, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null; )
                rg(t, n.alternate, n),
                n = n.sibling
    }
    function Gi(t) {
        for (t = t.child; t !== null; ) {
            var n = t;
            switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Jn(4, n, n.return),
                Gi(n);
                break;
            case 1:
                cn(n, n.return);
                var a = n.stateNode;
                typeof a.componentWillUnmount == "function" && tg(n, n.return, a),
                Gi(n);
                break;
            case 27:
                sr(n.stateNode);
            case 26:
            case 5:
                cn(n, n.return),
                Gi(n);
                break;
            case 22:
                n.memoizedState === null && Gi(n);
                break;
            case 30:
                Gi(n);
                break;
            default:
                Gi(n)
            }
            t = t.sibling
        }
    }
    function ti(t, n, a) {
        for (a = a && (n.subtreeFlags & 8772) !== 0,
        n = n.child; n !== null; ) {
            var l = n.alternate
              , u = t
              , f = n
              , g = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                ti(u, f, a),
                Qa(4, f);
                break;
            case 1:
                if (ti(u, f, a),
                l = f,
                u = l.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (I) {
                        Oe(l, l.return, I)
                    }
                if (l = f,
                u = l.updateQueue,
                u !== null) {
                    var _ = l.stateNode;
                    try {
                        var S = u.shared.hiddenCallbacks;
                        if (S !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < S.length; u++)
                                Hp(S[u], _)
                    } catch (I) {
                        Oe(l, l.return, I)
                    }
                }
                a && g & 64 && eg(f),
                Xa(f, f.return);
                break;
            case 27:
                sg(f);
            case 26:
            case 5:
                ti(u, f, a),
                a && l === null && g & 4 && ng(f),
                Xa(f, f.return);
                break;
            case 12:
                ti(u, f, a);
                break;
            case 13:
                ti(u, f, a),
                a && g & 4 && cg(u, f);
                break;
            case 22:
                f.memoizedState === null && ti(u, f, a),
                Xa(f, f.return);
                break;
            case 30:
                break;
            default:
                ti(u, f, a)
            }
            n = n.sibling
        }
    }
    function Ku(t, n) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
        t = null,
        n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++,
        a != null && ka(a))
    }
    function Qu(t, n) {
        t = null,
        n.alternate !== null && (t = n.alternate.memoizedState.cache),
        n = n.memoizedState.cache,
        n !== t && (n.refCount++,
        t != null && ka(t))
    }
    function un(t, n, a, l) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; )
                dg(t, n, a, l),
                n = n.sibling
    }
    function dg(t, n, a, l) {
        var u = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            un(t, n, a, l),
            u & 2048 && Qa(9, n);
            break;
        case 1:
            un(t, n, a, l);
            break;
        case 3:
            un(t, n, a, l),
            u & 2048 && (t = null,
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            n = n.memoizedState.cache,
            n !== t && (n.refCount++,
            t != null && ka(t)));
            break;
        case 12:
            if (u & 2048) {
                un(t, n, a, l),
                t = n.stateNode;
                try {
                    var f = n.memoizedProps
                      , g = f.id
                      , _ = f.onPostCommit;
                    typeof _ == "function" && _(g, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (S) {
                    Oe(n, n.return, S)
                }
            } else
                un(t, n, a, l);
            break;
        case 13:
            un(t, n, a, l);
            break;
        case 23:
            break;
        case 22:
            f = n.stateNode,
            g = n.alternate,
            n.memoizedState !== null ? f._visibility & 2 ? un(t, n, a, l) : Wa(t, n) : f._visibility & 2 ? un(t, n, a, l) : (f._visibility |= 2,
            ks(t, n, a, l, (n.subtreeFlags & 10256) !== 0)),
            u & 2048 && Ku(g, n);
            break;
        case 24:
            un(t, n, a, l),
            u & 2048 && Qu(n.alternate, n);
            break;
        default:
            un(t, n, a, l)
        }
    }
    function ks(t, n, a, l, u) {
        for (u = u && (n.subtreeFlags & 10256) !== 0,
        n = n.child; n !== null; ) {
            var f = t
              , g = n
              , _ = a
              , S = l
              , I = g.flags;
            switch (g.tag) {
            case 0:
            case 11:
            case 15:
                ks(f, g, _, S, u),
                Qa(8, g);
                break;
            case 23:
                break;
            case 22:
                var L = g.stateNode;
                g.memoizedState !== null ? L._visibility & 2 ? ks(f, g, _, S, u) : Wa(f, g) : (L._visibility |= 2,
                ks(f, g, _, S, u)),
                u && I & 2048 && Ku(g.alternate, g);
                break;
            case 24:
                ks(f, g, _, S, u),
                u && I & 2048 && Qu(g.alternate, g);
                break;
            default:
                ks(f, g, _, S, u)
            }
            n = n.sibling
        }
    }
    function Wa(t, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; ) {
                var a = t
                  , l = n
                  , u = l.flags;
                switch (l.tag) {
                case 22:
                    Wa(a, l),
                    u & 2048 && Ku(l.alternate, l);
                    break;
                case 24:
                    Wa(a, l),
                    u & 2048 && Qu(l.alternate, l);
                    break;
                default:
                    Wa(a, l)
                }
                n = n.sibling
            }
    }
    var $a = 8192;
    function Ls(t) {
        if (t.subtreeFlags & $a)
            for (t = t.child; t !== null; )
                hg(t),
                t = t.sibling
    }
    function hg(t) {
        switch (t.tag) {
        case 26:
            Ls(t),
            t.flags & $a && t.memoizedState !== null && kS(Xt, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Ls(t);
            break;
        case 3:
        case 4:
            var n = Xt;
            Xt = ao(t.stateNode.containerInfo),
            Ls(t),
            Xt = n;
            break;
        case 22:
            t.memoizedState === null && (n = t.alternate,
            n !== null && n.memoizedState !== null ? (n = $a,
            $a = 16777216,
            Ls(t),
            $a = n) : Ls(t));
            break;
        default:
            Ls(t)
        }
    }
    function pg(t) {
        var n = t.alternate;
        if (n !== null && (t = n.child,
        t !== null)) {
            n.child = null;
            do
                n = t.sibling,
                t.sibling = null,
                t = n;
            while (t !== null)
        }
    }
    function Za(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var l = n[a];
                    nt = l,
                    gg(l, t)
                }
            pg(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                mg(t),
                t = t.sibling
    }
    function mg(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Za(t),
            t.flags & 2048 && Jn(9, t, t.return);
            break;
        case 3:
            Za(t);
            break;
        case 12:
            Za(t);
            break;
        case 22:
            var n = t.stateNode;
            t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3,
            Kl(t)) : Za(t);
            break;
        default:
            Za(t)
        }
    }
    function Kl(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var l = n[a];
                    nt = l,
                    gg(l, t)
                }
            pg(t)
        }
        for (t = t.child; t !== null; ) {
            switch (n = t,
            n.tag) {
            case 0:
            case 11:
            case 15:
                Jn(8, n, n.return),
                Kl(n);
                break;
            case 22:
                a = n.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Kl(n));
                break;
            default:
                Kl(n)
            }
            t = t.sibling
        }
    }
    function gg(t, n) {
        for (; nt !== null; ) {
            var a = nt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Jn(8, a, n);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var l = a.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                ka(a.memoizedState.cache)
            }
            if (l = a.child,
            l !== null)
                l.return = a,
                nt = l;
            else
                e: for (a = t; nt !== null; ) {
                    l = nt;
                    var u = l.sibling
                      , f = l.return;
                    if (lg(l),
                    l === a) {
                        nt = null;
                        break e
                    }
                    if (u !== null) {
                        u.return = f,
                        nt = u;
                        break e
                    }
                    nt = f
                }
        }
    }
    var Wb = {
        getCacheForType: function(t) {
            var n = dt(We)
              , a = n.data.get(t);
            return a === void 0 && (a = t(),
            n.data.set(t, a)),
            a
        }
    }
      , $b = typeof WeakMap == "function" ? WeakMap : Map
      , Ce = 0
      , De = null
      , ue = null
      , ge = 0
      , we = 0
      , kt = null
      , ni = !1
      , Us = !1
      , Xu = !1
      , Nn = 0
      , qe = 0
      , ii = 0
      , Yi = 0
      , Wu = 0
      , Gt = 0
      , Ps = 0
      , Ja = null
      , Tt = null
      , $u = !1
      , Zu = 0
      , Ql = 1 / 0
      , Xl = null
      , si = null
      , ot = 0
      , ai = null
      , js = null
      , zs = 0
      , Ju = 0
      , ef = null
      , _g = null
      , er = 0
      , tf = null;
    function Lt() {
        if ((Ce & 2) !== 0 && ge !== 0)
            return ge & -ge;
        if (k.T !== null) {
            var t = As;
            return t !== 0 ? t : cf()
        }
        return Mh()
    }
    function vg() {
        Gt === 0 && (Gt = (ge & 536870912) === 0 || Se ? xh() : 536870912);
        var t = Vt.current;
        return t !== null && (t.flags |= 32),
        Gt
    }
    function Ut(t, n, a) {
        (t === De && (we === 2 || we === 9) || t.cancelPendingCommit !== null) && (Hs(t, 0),
        ri(t, ge, Gt, !1)),
        va(t, a),
        ((Ce & 2) === 0 || t !== De) && (t === De && ((Ce & 2) === 0 && (Yi |= a),
        qe === 4 && ri(t, ge, Gt, !1)),
        fn(t))
    }
    function yg(t, n, a) {
        if ((Ce & 6) !== 0)
            throw Error(r(327));
        var l = !a && (n & 124) === 0 && (n & t.expiredLanes) === 0 || _a(t, n)
          , u = l ? eS(t, n) : af(t, n, !0)
          , f = l;
        do {
            if (u === 0) {
                Us && !l && ri(t, n, 0, !1);
                break
            } else {
                if (a = t.current.alternate,
                f && !Zb(a)) {
                    u = af(t, n, !1),
                    f = !1;
                    continue
                }
                if (u === 2) {
                    if (f = n,
                    t.errorRecoveryDisabledLanes & f)
                        var g = 0;
                    else
                        g = t.pendingLanes & -536870913,
                        g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        n = g;
                        e: {
                            var _ = t;
                            u = Ja;
                            var S = _.current.memoizedState.isDehydrated;
                            if (S && (Hs(_, g).flags |= 256),
                            g = af(_, g, !1),
                            g !== 2) {
                                if (Xu && !S) {
                                    _.errorRecoveryDisabledLanes |= f,
                                    Yi |= f,
                                    u = 4;
                                    break e
                                }
                                f = Tt,
                                Tt = u,
                                f !== null && (Tt === null ? Tt = f : Tt.push.apply(Tt, f))
                            }
                            u = g
                        }
                        if (f = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Hs(t, 0),
                    ri(t, n, 0, !0);
                    break
                }
                e: {
                    switch (l = t,
                    f = u,
                    f) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((n & 4194048) !== n)
                            break;
                    case 6:
                        ri(l, n, Gt, !ni);
                        break e;
                    case 2:
                        Tt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((n & 62914560) === n && (u = Zu + 300 - rn(),
                    10 < u)) {
                        if (ri(l, n, Gt, !ni),
                        rl(l, 0, !0) !== 0)
                            break e;
                        l.timeoutHandle = Qg(Eg.bind(null, l, a, Tt, Xl, $u, n, Gt, Yi, Ps, ni, f, 2, -0, 0), u);
                        break e
                    }
                    Eg(l, a, Tt, Xl, $u, n, Gt, Yi, Ps, ni, f, 0, -0, 0)
                }
            }
            break
        } while (!0);
        fn(t)
    }
    function Eg(t, n, a, l, u, f, g, _, S, I, L, j, D, M) {
        if (t.timeoutHandle = -1,
        j = n.subtreeFlags,
        (j & 8192 || (j & 16785408) === 16785408) && (lr = {
            stylesheets: null,
            count: 0,
            unsuspend: MS
        },
        hg(n),
        j = LS(),
        j !== null)) {
            t.cancelPendingCommit = j(Rg.bind(null, t, n, f, a, l, u, g, _, S, L, 1, D, M)),
            ri(t, f, g, !I);
            return
        }
        Rg(t, n, f, a, l, u, g, _, S)
    }
    function Zb(t) {
        for (var n = t; ; ) {
            var a = n.tag;
            if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var u = a[l]
                      , f = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Ot(f(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = n.child,
            n.subtreeFlags & 16384 && a !== null)
                a.return = n,
                n = a;
            else {
                if (n === t)
                    break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === t)
                        return !0;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
        return !0
    }
    function ri(t, n, a, l) {
        n &= ~Wu,
        n &= ~Yi,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        l && (t.warmLanes |= n),
        l = t.expirationTimes;
        for (var u = n; 0 < u; ) {
            var f = 31 - xt(u)
              , g = 1 << f;
            l[f] = -1,
            u &= ~g
        }
        a !== 0 && Ih(t, a, n)
    }
    function Wl() {
        return (Ce & 6) === 0 ? (tr(0),
        !1) : !0
    }
    function nf() {
        if (ue !== null) {
            if (we === 0)
                var t = ue.return;
            else
                t = ue,
                En = zi = null,
                yu(t),
                Ds = null,
                Ya = 0,
                t = ue;
            for (; t !== null; )
                Jm(t.alternate, t),
                t = t.return;
            ue = null
        }
    }
    function Hs(t, n) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1,
        gS(a)),
        a = t.cancelPendingCommit,
        a !== null && (t.cancelPendingCommit = null,
        a()),
        nf(),
        De = t,
        ue = a = _n(t.current, null),
        ge = n,
        we = 0,
        kt = null,
        ni = !1,
        Us = _a(t, n),
        Xu = !1,
        Ps = Gt = Wu = Yi = ii = qe = 0,
        Tt = Ja = null,
        $u = !1,
        (n & 8) !== 0 && (n |= n & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= n; 0 < l; ) {
                var u = 31 - xt(l)
                  , f = 1 << u;
                n |= t[u],
                l &= ~f
            }
        return Nn = n,
        vl(),
        a
    }
    function bg(t, n) {
        le = null,
        k.H = Pl,
        n === Ua || n === Rl ? (n = jp(),
        we = 3) : n === Lp ? (n = jp(),
        we = 4) : we = n === zm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
        kt = n,
        ue === null && (qe = 1,
        ql(t, zt(n, t.current)))
    }
    function Sg() {
        var t = k.H;
        return k.H = Pl,
        t === null ? Pl : t
    }
    function Tg() {
        var t = k.A;
        return k.A = Wb,
        t
    }
    function sf() {
        qe = 4,
        ni || (ge & 4194048) !== ge && Vt.current !== null || (Us = !0),
        (ii & 134217727) === 0 && (Yi & 134217727) === 0 || De === null || ri(De, ge, Gt, !1)
    }
    function af(t, n, a) {
        var l = Ce;
        Ce |= 2;
        var u = Sg()
          , f = Tg();
        (De !== t || ge !== n) && (Xl = null,
        Hs(t, n)),
        n = !1;
        var g = qe;
        e: do
            try {
                if (we !== 0 && ue !== null) {
                    var _ = ue
                      , S = kt;
                    switch (we) {
                    case 8:
                        nf(),
                        g = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Vt.current === null && (n = !0);
                        var I = we;
                        if (we = 0,
                        kt = null,
                        Bs(t, _, S, I),
                        a && Us) {
                            g = 0;
                            break e
                        }
                        break;
                    default:
                        I = we,
                        we = 0,
                        kt = null,
                        Bs(t, _, S, I)
                    }
                }
                Jb(),
                g = qe;
                break
            } catch (L) {
                bg(t, L)
            }
        while (!0);
        return n && t.shellSuspendCounter++,
        En = zi = null,
        Ce = l,
        k.H = u,
        k.A = f,
        ue === null && (De = null,
        ge = 0,
        vl()),
        g
    }
    function Jb() {
        for (; ue !== null; )
            Cg(ue)
    }
    function eS(t, n) {
        var a = Ce;
        Ce |= 2;
        var l = Sg()
          , u = Tg();
        De !== t || ge !== n ? (Xl = null,
        Ql = rn() + 500,
        Hs(t, n)) : Us = _a(t, n);
        e: do
            try {
                if (we !== 0 && ue !== null) {
                    n = ue;
                    var f = kt;
                    t: switch (we) {
                    case 1:
                        we = 0,
                        kt = null,
                        Bs(t, n, f, 1);
                        break;
                    case 2:
                    case 9:
                        if (Up(f)) {
                            we = 0,
                            kt = null,
                            wg(n);
                            break
                        }
                        n = function() {
                            we !== 2 && we !== 9 || De !== t || (we = 7),
                            fn(t)
                        }
                        ,
                        f.then(n, n);
                        break e;
                    case 3:
                        we = 7;
                        break e;
                    case 4:
                        we = 5;
                        break e;
                    case 7:
                        Up(f) ? (we = 0,
                        kt = null,
                        wg(n)) : (we = 0,
                        kt = null,
                        Bs(t, n, f, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (ue.tag) {
                        case 26:
                            g = ue.memoizedState;
                        case 5:
                        case 27:
                            var _ = ue;
                            if (!g || r_(g)) {
                                we = 0,
                                kt = null;
                                var S = _.sibling;
                                if (S !== null)
                                    ue = S;
                                else {
                                    var I = _.return;
                                    I !== null ? (ue = I,
                                    $l(I)) : ue = null
                                }
                                break t
                            }
                        }
                        we = 0,
                        kt = null,
                        Bs(t, n, f, 5);
                        break;
                    case 6:
                        we = 0,
                        kt = null,
                        Bs(t, n, f, 6);
                        break;
                    case 8:
                        nf(),
                        qe = 6;
                        break e;
                    default:
                        throw Error(r(462))
                    }
                }
                tS();
                break
            } catch (L) {
                bg(t, L)
            }
        while (!0);
        return En = zi = null,
        k.H = l,
        k.A = u,
        Ce = a,
        ue !== null ? 0 : (De = null,
        ge = 0,
        vl(),
        qe)
    }
    function tS() {
        for (; ue !== null && !T0(); )
            Cg(ue)
    }
    function Cg(t) {
        var n = $m(t.alternate, t, Nn);
        t.memoizedProps = t.pendingProps,
        n === null ? $l(t) : ue = n
    }
    function wg(t) {
        var n = t
          , a = n.alternate;
        switch (n.tag) {
        case 15:
        case 0:
            n = Ym(a, n, n.pendingProps, n.type, void 0, ge);
            break;
        case 11:
            n = Ym(a, n, n.pendingProps, n.type.render, n.ref, ge);
            break;
        case 5:
            yu(n);
        default:
            Jm(a, n),
            n = ue = Ap(n, Nn),
            n = $m(a, n, Nn)
        }
        t.memoizedProps = t.pendingProps,
        n === null ? $l(t) : ue = n
    }
    function Bs(t, n, a, l) {
        En = zi = null,
        yu(n),
        Ds = null,
        Ya = 0;
        var u = n.return;
        try {
            if (Gb(t, u, n, a, ge)) {
                qe = 1,
                ql(t, zt(a, t.current)),
                ue = null;
                return
            }
        } catch (f) {
            if (u !== null)
                throw ue = u,
                f;
            qe = 1,
            ql(t, zt(a, t.current)),
            ue = null;
            return
        }
        n.flags & 32768 ? (Se || l === 1 ? t = !0 : Us || (ge & 536870912) !== 0 ? t = !1 : (ni = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Vt.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        Ag(n, t)) : $l(n)
    }
    function $l(t) {
        var n = t;
        do {
            if ((n.flags & 32768) !== 0) {
                Ag(n, ni);
                return
            }
            t = n.return;
            var a = Fb(n.alternate, n, Nn);
            if (a !== null) {
                ue = a;
                return
            }
            if (n = n.sibling,
            n !== null) {
                ue = n;
                return
            }
            ue = n = t
        } while (n !== null);
        qe === 0 && (qe = 5)
    }
    function Ag(t, n) {
        do {
            var a = Kb(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767,
                ue = a;
                return
            }
            if (a = t.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !n && (t = t.sibling,
            t !== null)) {
                ue = t;
                return
            }
            ue = t = a
        } while (t !== null);
        qe = 6,
        ue = null
    }
    function Rg(t, n, a, l, u, f, g, _, S) {
        t.cancelPendingCommit = null;
        do
            Zl();
        while (ot !== 0);
        if ((Ce & 6) !== 0)
            throw Error(r(327));
        if (n !== null) {
            if (n === t.current)
                throw Error(r(177));
            if (f = n.lanes | n.childLanes,
            f |= Qc,
            M0(t, a, f, g, _, S),
            t === De && (ue = De = null,
            ge = 0),
            js = n,
            ai = t,
            zs = a,
            Ju = f,
            ef = u,
            _g = l,
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            aS(il, function() {
                return Dg(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (n.flags & 13878) !== 0,
            (n.subtreeFlags & 13878) !== 0 || l) {
                l = k.T,
                k.T = null,
                u = F.p,
                F.p = 2,
                g = Ce,
                Ce |= 4;
                try {
                    Qb(t, n, a)
                } finally {
                    Ce = g,
                    F.p = u,
                    k.T = l
                }
            }
            ot = 1,
            Ng(),
            xg(),
            Og()
        }
    }
    function Ng() {
        if (ot === 1) {
            ot = 0;
            var t = ai
              , n = js
              , a = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || a) {
                a = k.T,
                k.T = null;
                var l = F.p;
                F.p = 2;
                var u = Ce;
                Ce |= 4;
                try {
                    ug(n, t);
                    var f = _f
                      , g = gp(t.containerInfo)
                      , _ = f.focusedElem
                      , S = f.selectionRange;
                    if (g !== _ && _ && _.ownerDocument && mp(_.ownerDocument.documentElement, _)) {
                        if (S !== null && Vc(_)) {
                            var I = S.start
                              , L = S.end;
                            if (L === void 0 && (L = I),
                            "selectionStart"in _)
                                _.selectionStart = I,
                                _.selectionEnd = Math.min(L, _.value.length);
                            else {
                                var j = _.ownerDocument || document
                                  , D = j && j.defaultView || window;
                                if (D.getSelection) {
                                    var M = D.getSelection()
                                      , se = _.textContent.length
                                      , J = Math.min(S.start, se)
                                      , Ne = S.end === void 0 ? J : Math.min(S.end, se);
                                    !M.extend && J > Ne && (g = Ne,
                                    Ne = J,
                                    J = g);
                                    var R = pp(_, J)
                                      , C = pp(_, Ne);
                                    if (R && C && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== C.node || M.focusOffset !== C.offset)) {
                                        var O = j.createRange();
                                        O.setStart(R.node, R.offset),
                                        M.removeAllRanges(),
                                        J > Ne ? (M.addRange(O),
                                        M.extend(C.node, C.offset)) : (O.setEnd(C.node, C.offset),
                                        M.addRange(O))
                                    }
                                }
                            }
                        }
                        for (j = [],
                        M = _; M = M.parentNode; )
                            M.nodeType === 1 && j.push({
                                element: M,
                                left: M.scrollLeft,
                                top: M.scrollTop
                            });
                        for (typeof _.focus == "function" && _.focus(),
                        _ = 0; _ < j.length; _++) {
                            var P = j[_];
                            P.element.scrollLeft = P.left,
                            P.element.scrollTop = P.top
                        }
                    }
                    uo = !!gf,
                    _f = gf = null
                } finally {
                    Ce = u,
                    F.p = l,
                    k.T = a
                }
            }
            t.current = n,
            ot = 2
        }
    }
    function xg() {
        if (ot === 2) {
            ot = 0;
            var t = ai
              , n = js
              , a = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || a) {
                a = k.T,
                k.T = null;
                var l = F.p;
                F.p = 2;
                var u = Ce;
                Ce |= 4;
                try {
                    rg(t, n.alternate, n)
                } finally {
                    Ce = u,
                    F.p = l,
                    k.T = a
                }
            }
            ot = 3
        }
    }
    function Og() {
        if (ot === 4 || ot === 3) {
            ot = 0,
            C0();
            var t = ai
              , n = js
              , a = zs
              , l = _g;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ot = 5 : (ot = 0,
            js = ai = null,
            Ig(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (si = null),
            Sc(a),
            n = n.stateNode,
            Nt && typeof Nt.onCommitFiberRoot == "function")
                try {
                    Nt.onCommitFiberRoot(ga, n, void 0, (n.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                n = k.T,
                u = F.p,
                F.p = 2,
                k.T = null;
                try {
                    for (var f = t.onRecoverableError, g = 0; g < l.length; g++) {
                        var _ = l[g];
                        f(_.value, {
                            componentStack: _.stack
                        })
                    }
                } finally {
                    k.T = n,
                    F.p = u
                }
            }
            (zs & 3) !== 0 && Zl(),
            fn(t),
            u = t.pendingLanes,
            (a & 4194090) !== 0 && (u & 42) !== 0 ? t === tf ? er++ : (er = 0,
            tf = t) : er = 0,
            tr(0)
        }
    }
    function Ig(t, n) {
        (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache,
        n != null && (t.pooledCache = null,
        ka(n)))
    }
    function Zl(t) {
        return Ng(),
        xg(),
        Og(),
        Dg()
    }
    function Dg() {
        if (ot !== 5)
            return !1;
        var t = ai
          , n = Ju;
        Ju = 0;
        var a = Sc(zs)
          , l = k.T
          , u = F.p;
        try {
            F.p = 32 > a ? 32 : a,
            k.T = null,
            a = ef,
            ef = null;
            var f = ai
              , g = zs;
            if (ot = 0,
            js = ai = null,
            zs = 0,
            (Ce & 6) !== 0)
                throw Error(r(331));
            var _ = Ce;
            if (Ce |= 4,
            mg(f.current),
            dg(f, f.current, g, a),
            Ce = _,
            tr(0, !1),
            Nt && typeof Nt.onPostCommitFiberRoot == "function")
                try {
                    Nt.onPostCommitFiberRoot(ga, f)
                } catch {}
            return !0
        } finally {
            F.p = u,
            k.T = l,
            Ig(t, n)
        }
    }
    function Mg(t, n, a) {
        n = zt(a, n),
        n = Mu(t.stateNode, n, 2),
        t = Xn(t, n, 2),
        t !== null && (va(t, 2),
        fn(t))
    }
    function Oe(t, n, a) {
        if (t.tag === 3)
            Mg(t, t, a);
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    Mg(n, t, a);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (si === null || !si.has(l))) {
                        t = zt(a, t),
                        a = Pm(2),
                        l = Xn(n, a, 2),
                        l !== null && (jm(a, l, n, t),
                        va(l, 2),
                        fn(l));
                        break
                    }
                }
                n = n.return
            }
    }
    function rf(t, n, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new $b;
            var u = new Set;
            l.set(n, u)
        } else
            u = l.get(n),
            u === void 0 && (u = new Set,
            l.set(n, u));
        u.has(a) || (Xu = !0,
        u.add(a),
        t = nS.bind(null, t, n, a),
        n.then(t, t))
    }
    function nS(t, n, a) {
        var l = t.pingCache;
        l !== null && l.delete(n),
        t.pingedLanes |= t.suspendedLanes & a,
        t.warmLanes &= ~a,
        De === t && (ge & a) === a && (qe === 4 || qe === 3 && (ge & 62914560) === ge && 300 > rn() - Zu ? (Ce & 2) === 0 && Hs(t, 0) : Wu |= a,
        Ps === ge && (Ps = 0)),
        fn(t)
    }
    function kg(t, n) {
        n === 0 && (n = Oh()),
        t = Ss(t, n),
        t !== null && (va(t, n),
        fn(t))
    }
    function iS(t) {
        var n = t.memoizedState
          , a = 0;
        n !== null && (a = n.retryLane),
        kg(t, a)
    }
    function sS(t, n) {
        var a = 0;
        switch (t.tag) {
        case 13:
            var l = t.stateNode
              , u = t.memoizedState;
            u !== null && (a = u.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(n),
        kg(t, a)
    }
    function aS(t, n) {
        return vc(t, n)
    }
    var Jl = null
      , qs = null
      , lf = !1
      , eo = !1
      , of = !1
      , Fi = 0;
    function fn(t) {
        t !== qs && t.next === null && (qs === null ? Jl = qs = t : qs = qs.next = t),
        eo = !0,
        lf || (lf = !0,
        lS())
    }
    function tr(t, n) {
        if (!of && eo) {
            of = !0;
            do
                for (var a = !1, l = Jl; l !== null; ) {
                    if (t !== 0) {
                        var u = l.pendingLanes;
                        if (u === 0)
                            var f = 0;
                        else {
                            var g = l.suspendedLanes
                              , _ = l.pingedLanes;
                            f = (1 << 31 - xt(42 | t) + 1) - 1,
                            f &= u & ~(g & ~_),
                            f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (a = !0,
                        jg(l, f))
                    } else
                        f = ge,
                        f = rl(l, l === De ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (f & 3) === 0 || _a(l, f) || (a = !0,
                        jg(l, f));
                    l = l.next
                }
            while (a);
            of = !1
        }
    }
    function rS() {
        Lg()
    }
    function Lg() {
        eo = lf = !1;
        var t = 0;
        Fi !== 0 && (mS() && (t = Fi),
        Fi = 0);
        for (var n = rn(), a = null, l = Jl; l !== null; ) {
            var u = l.next
              , f = Ug(l, n);
            f === 0 ? (l.next = null,
            a === null ? Jl = u : a.next = u,
            u === null && (qs = a)) : (a = l,
            (t !== 0 || (f & 3) !== 0) && (eo = !0)),
            l = u
        }
        tr(t)
    }
    function Ug(t, n) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
            var g = 31 - xt(f)
              , _ = 1 << g
              , S = u[g];
            S === -1 ? ((_ & a) === 0 || (_ & l) !== 0) && (u[g] = D0(_, n)) : S <= n && (t.expiredLanes |= _),
            f &= ~_
        }
        if (n = De,
        a = ge,
        a = rl(t, t === n ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        a === 0 || t === n && (we === 2 || we === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && yc(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((a & 3) === 0 || _a(t, a)) {
            if (n = a & -a,
            n === t.callbackPriority)
                return n;
            switch (l !== null && yc(l),
            Sc(a)) {
            case 2:
            case 8:
                a = Rh;
                break;
            case 32:
                a = il;
                break;
            case 268435456:
                a = Nh;
                break;
            default:
                a = il
            }
            return l = Pg.bind(null, t),
            a = vc(a, l),
            t.callbackPriority = n,
            t.callbackNode = a,
            n
        }
        return l !== null && l !== null && yc(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Pg(t, n) {
        if (ot !== 0 && ot !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var a = t.callbackNode;
        if (Zl() && t.callbackNode !== a)
            return null;
        var l = ge;
        return l = rl(t, t === De ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (yg(t, l, n),
        Ug(t, rn()),
        t.callbackNode != null && t.callbackNode === a ? Pg.bind(null, t) : null)
    }
    function jg(t, n) {
        if (Zl())
            return null;
        yg(t, n, !0)
    }
    function lS() {
        _S(function() {
            (Ce & 6) !== 0 ? vc(Ah, rS) : Lg()
        })
    }
    function cf() {
        return Fi === 0 && (Fi = xh()),
        Fi
    }
    function zg(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fl("" + t)
    }
    function Hg(t, n) {
        var a = n.ownerDocument.createElement("input");
        return a.name = n.name,
        a.value = n.value,
        t.id && a.setAttribute("form", t.id),
        n.parentNode.insertBefore(a, n),
        t = new FormData(t),
        a.parentNode.removeChild(a),
        t
    }
    function oS(t, n, a, l, u) {
        if (n === "submit" && a && a.stateNode === u) {
            var f = zg((u[yt] || null).action)
              , g = l.submitter;
            g && (n = (n = g[yt] || null) ? zg(n.formAction) : g.getAttribute("formAction"),
            n !== null && (f = n,
            g = null));
            var _ = new ml("action","action",null,l,u);
            t.push({
                event: _,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Fi !== 0) {
                                var S = g ? Hg(u, g) : new FormData(u);
                                Nu(a, {
                                    pending: !0,
                                    data: S,
                                    method: u.method,
                                    action: f
                                }, null, S)
                            }
                        } else
                            typeof f == "function" && (_.preventDefault(),
                            S = g ? Hg(u, g) : new FormData(u),
                            Nu(a, {
                                pending: !0,
                                data: S,
                                method: u.method,
                                action: f
                            }, f, S))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var uf = 0; uf < Kc.length; uf++) {
        var ff = Kc[uf]
          , cS = ff.toLowerCase()
          , uS = ff[0].toUpperCase() + ff.slice(1);
        Qt(cS, "on" + uS)
    }
    Qt(yp, "onAnimationEnd"),
    Qt(Ep, "onAnimationIteration"),
    Qt(bp, "onAnimationStart"),
    Qt("dblclick", "onDoubleClick"),
    Qt("focusin", "onFocus"),
    Qt("focusout", "onBlur"),
    Qt(Rb, "onTransitionRun"),
    Qt(Nb, "onTransitionStart"),
    Qt(xb, "onTransitionCancel"),
    Qt(Sp, "onTransitionEnd"),
    ds("onMouseEnter", ["mouseout", "mouseover"]),
    ds("onMouseLeave", ["mouseout", "mouseover"]),
    ds("onPointerEnter", ["pointerout", "pointerover"]),
    ds("onPointerLeave", ["pointerout", "pointerover"]),
    Oi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Oi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Oi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Oi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Oi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , fS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr));
    function Bg(t, n) {
        n = (n & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a]
              , u = l.event;
            l = l.listeners;
            e: {
                var f = void 0;
                if (n)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var _ = l[g]
                          , S = _.instance
                          , I = _.currentTarget;
                        if (_ = _.listener,
                        S !== f && u.isPropagationStopped())
                            break e;
                        f = _,
                        u.currentTarget = I;
                        try {
                            f(u)
                        } catch (L) {
                            Bl(L)
                        }
                        u.currentTarget = null,
                        f = S
                    }
                else
                    for (g = 0; g < l.length; g++) {
                        if (_ = l[g],
                        S = _.instance,
                        I = _.currentTarget,
                        _ = _.listener,
                        S !== f && u.isPropagationStopped())
                            break e;
                        f = _,
                        u.currentTarget = I;
                        try {
                            f(u)
                        } catch (L) {
                            Bl(L)
                        }
                        u.currentTarget = null,
                        f = S
                    }
            }
        }
    }
    function fe(t, n) {
        var a = n[Tc];
        a === void 0 && (a = n[Tc] = new Set);
        var l = t + "__bubble";
        a.has(l) || (qg(n, t, 2, !1),
        a.add(l))
    }
    function df(t, n, a) {
        var l = 0;
        n && (l |= 4),
        qg(a, t, l, n)
    }
    var to = "_reactListening" + Math.random().toString(36).slice(2);
    function hf(t) {
        if (!t[to]) {
            t[to] = !0,
            Lh.forEach(function(a) {
                a !== "selectionchange" && (fS.has(a) || df(a, !1, t),
                df(a, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[to] || (n[to] = !0,
            df("selectionchange", !1, n))
        }
    }
    function qg(t, n, a, l) {
        switch (d_(n)) {
        case 2:
            var u = jS;
            break;
        case 8:
            u = zS;
            break;
        default:
            u = Rf
        }
        a = u.bind(null, n, a, t),
        u = void 0,
        !kc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0),
        l ? u !== void 0 ? t.addEventListener(n, a, {
            capture: !0,
            passive: u
        }) : t.addEventListener(n, a, !0) : u !== void 0 ? t.addEventListener(n, a, {
            passive: u
        }) : t.addEventListener(n, a, !1)
    }
    function pf(t, n, a, l, u) {
        var f = l;
        if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var g = l.tag;
                if (g === 3 || g === 4) {
                    var _ = l.stateNode.containerInfo;
                    if (_ === u)
                        break;
                    if (g === 4)
                        for (g = l.return; g !== null; ) {
                            var S = g.tag;
                            if ((S === 3 || S === 4) && g.stateNode.containerInfo === u)
                                return;
                            g = g.return
                        }
                    for (; _ !== null; ) {
                        if (g = cs(_),
                        g === null)
                            return;
                        if (S = g.tag,
                        S === 5 || S === 6 || S === 26 || S === 27) {
                            l = f = g;
                            continue e
                        }
                        _ = _.parentNode
                    }
                }
                l = l.return
            }
        Xh(function() {
            var I = f
              , L = Dc(a)
              , j = [];
            e: {
                var D = Tp.get(t);
                if (D !== void 0) {
                    var M = ml
                      , se = t;
                    switch (t) {
                    case "keypress":
                        if (hl(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        M = ab;
                        break;
                    case "focusin":
                        se = "focus",
                        M = jc;
                        break;
                    case "focusout":
                        se = "blur",
                        M = jc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        M = jc;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        M = Zh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        M = K0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        M = ob;
                        break;
                    case yp:
                    case Ep:
                    case bp:
                        M = W0;
                        break;
                    case Sp:
                        M = ub;
                        break;
                    case "scroll":
                    case "scrollend":
                        M = Y0;
                        break;
                    case "wheel":
                        M = db;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        M = Z0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        M = ep;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        M = pb
                    }
                    var J = (n & 4) !== 0
                      , Ne = !J && (t === "scroll" || t === "scrollend")
                      , R = J ? D !== null ? D + "Capture" : null : D;
                    J = [];
                    for (var C = I, O; C !== null; ) {
                        var P = C;
                        if (O = P.stateNode,
                        P = P.tag,
                        P !== 5 && P !== 26 && P !== 27 || O === null || R === null || (P = ba(C, R),
                        P != null && J.push(ir(C, P, O))),
                        Ne)
                            break;
                        C = C.return
                    }
                    0 < J.length && (D = new M(D,se,null,a,L),
                    j.push({
                        event: D,
                        listeners: J
                    }))
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (D = t === "mouseover" || t === "pointerover",
                    M = t === "mouseout" || t === "pointerout",
                    D && a !== Ic && (se = a.relatedTarget || a.fromElement) && (cs(se) || se[os]))
                        break e;
                    if ((M || D) && (D = L.window === L ? L : (D = L.ownerDocument) ? D.defaultView || D.parentWindow : window,
                    M ? (se = a.relatedTarget || a.toElement,
                    M = I,
                    se = se ? cs(se) : null,
                    se !== null && (Ne = c(se),
                    J = se.tag,
                    se !== Ne || J !== 5 && J !== 27 && J !== 6) && (se = null)) : (M = null,
                    se = I),
                    M !== se)) {
                        if (J = Zh,
                        P = "onMouseLeave",
                        R = "onMouseEnter",
                        C = "mouse",
                        (t === "pointerout" || t === "pointerover") && (J = ep,
                        P = "onPointerLeave",
                        R = "onPointerEnter",
                        C = "pointer"),
                        Ne = M == null ? D : Ea(M),
                        O = se == null ? D : Ea(se),
                        D = new J(P,C + "leave",M,a,L),
                        D.target = Ne,
                        D.relatedTarget = O,
                        P = null,
                        cs(L) === I && (J = new J(R,C + "enter",se,a,L),
                        J.target = O,
                        J.relatedTarget = Ne,
                        P = J),
                        Ne = P,
                        M && se)
                            t: {
                                for (J = M,
                                R = se,
                                C = 0,
                                O = J; O; O = Vs(O))
                                    C++;
                                for (O = 0,
                                P = R; P; P = Vs(P))
                                    O++;
                                for (; 0 < C - O; )
                                    J = Vs(J),
                                    C--;
                                for (; 0 < O - C; )
                                    R = Vs(R),
                                    O--;
                                for (; C--; ) {
                                    if (J === R || R !== null && J === R.alternate)
                                        break t;
                                    J = Vs(J),
                                    R = Vs(R)
                                }
                                J = null
                            }
                        else
                            J = null;
                        M !== null && Vg(j, D, M, J, !1),
                        se !== null && Ne !== null && Vg(j, Ne, se, J, !0)
                    }
                }
                e: {
                    if (D = I ? Ea(I) : window,
                    M = D.nodeName && D.nodeName.toLowerCase(),
                    M === "select" || M === "input" && D.type === "file")
                        var Q = op;
                    else if (rp(D))
                        if (cp)
                            Q = Cb;
                        else {
                            Q = Sb;
                            var oe = bb
                        }
                    else
                        M = D.nodeName,
                        !M || M.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? I && Oc(I.elementType) && (Q = op) : Q = Tb;
                    if (Q && (Q = Q(t, I))) {
                        lp(j, Q, a, L);
                        break e
                    }
                    oe && oe(t, D, I),
                    t === "focusout" && I && D.type === "number" && I.memoizedProps.value != null && xc(D, "number", D.value)
                }
                switch (oe = I ? Ea(I) : window,
                t) {
                case "focusin":
                    (rp(oe) || oe.contentEditable === "true") && (ys = oe,
                    Gc = I,
                    xa = null);
                    break;
                case "focusout":
                    xa = Gc = ys = null;
                    break;
                case "mousedown":
                    Yc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Yc = !1,
                    _p(j, a, L);
                    break;
                case "selectionchange":
                    if (Ab)
                        break;
                case "keydown":
                case "keyup":
                    _p(j, a, L)
                }
                var $;
                if (Hc)
                    e: {
                        switch (t) {
                        case "compositionstart":
                            var te = "onCompositionStart";
                            break e;
                        case "compositionend":
                            te = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            te = "onCompositionUpdate";
                            break e
                        }
                        te = void 0
                    }
                else
                    vs ? sp(t, a) && (te = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (te = "onCompositionStart");
                te && (tp && a.locale !== "ko" && (vs || te !== "onCompositionStart" ? te === "onCompositionEnd" && vs && ($ = Wh()) : (Yn = L,
                Lc = "value"in Yn ? Yn.value : Yn.textContent,
                vs = !0)),
                oe = no(I, te),
                0 < oe.length && (te = new Jh(te,t,null,a,L),
                j.push({
                    event: te,
                    listeners: oe
                }),
                $ ? te.data = $ : ($ = ap(a),
                $ !== null && (te.data = $)))),
                ($ = gb ? _b(t, a) : vb(t, a)) && (te = no(I, "onBeforeInput"),
                0 < te.length && (oe = new Jh("onBeforeInput","beforeinput",null,a,L),
                j.push({
                    event: oe,
                    listeners: te
                }),
                oe.data = $)),
                oS(j, t, I, a, L)
            }
            Bg(j, n)
        })
    }
    function ir(t, n, a) {
        return {
            instance: t,
            listener: n,
            currentTarget: a
        }
    }
    function no(t, n) {
        for (var a = n + "Capture", l = []; t !== null; ) {
            var u = t
              , f = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || f === null || (u = ba(t, a),
            u != null && l.unshift(ir(t, u, f)),
            u = ba(t, n),
            u != null && l.push(ir(t, u, f))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function Vs(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Vg(t, n, a, l, u) {
        for (var f = n._reactName, g = []; a !== null && a !== l; ) {
            var _ = a
              , S = _.alternate
              , I = _.stateNode;
            if (_ = _.tag,
            S !== null && S === l)
                break;
            _ !== 5 && _ !== 26 && _ !== 27 || I === null || (S = I,
            u ? (I = ba(a, f),
            I != null && g.unshift(ir(a, I, S))) : u || (I = ba(a, f),
            I != null && g.push(ir(a, I, S)))),
            a = a.return
        }
        g.length !== 0 && t.push({
            event: n,
            listeners: g
        })
    }
    var dS = /\r\n?/g
      , hS = /\u0000|\uFFFD/g;
    function Gg(t) {
        return (typeof t == "string" ? t : "" + t).replace(dS, `
`).replace(hS, "")
    }
    function Yg(t, n) {
        return n = Gg(n),
        Gg(t) === n
    }
    function io() {}
    function Re(t, n, a, l, u, f) {
        switch (a) {
        case "children":
            typeof l == "string" ? n === "body" || n === "textarea" && l === "" || ms(t, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && ms(t, "" + l);
            break;
        case "className":
            ol(t, "class", l);
            break;
        case "tabIndex":
            ol(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            ol(t, a, l);
            break;
        case "style":
            Kh(t, l, f);
            break;
        case "data":
            if (n !== "object") {
                ol(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (n !== "a" || a !== "href")) {
                t.removeAttribute(a);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = fl("" + l),
            t.setAttribute(a, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof f == "function" && (a === "formAction" ? (n !== "input" && Re(t, n, "name", u.name, u, null),
                Re(t, n, "formEncType", u.formEncType, u, null),
                Re(t, n, "formMethod", u.formMethod, u, null),
                Re(t, n, "formTarget", u.formTarget, u, null)) : (Re(t, n, "encType", u.encType, u, null),
                Re(t, n, "method", u.method, u, null),
                Re(t, n, "target", u.target, u, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = fl("" + l),
            t.setAttribute(a, l);
            break;
        case "onClick":
            l != null && (t.onclick = io);
            break;
        case "onScroll":
            l != null && fe("scroll", t);
            break;
        case "onScrollEnd":
            l != null && fe("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    t.innerHTML = a
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            a = fl("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
            break;
        case "popover":
            fe("beforetoggle", t),
            fe("toggle", t),
            ll(t, "popover", l);
            break;
        case "xlinkActuate":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            mn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            ll(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = V0.get(a) || a,
            ll(t, a, l))
        }
    }
    function mf(t, n, a, l, u, f) {
        switch (a) {
        case "style":
            Kh(t, l, f);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    t.innerHTML = a
                }
            }
            break;
        case "children":
            typeof l == "string" ? ms(t, l) : (typeof l == "number" || typeof l == "bigint") && ms(t, "" + l);
            break;
        case "onScroll":
            l != null && fe("scroll", t);
            break;
        case "onScrollEnd":
            l != null && fe("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = io);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Uh.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"),
                    n = a.slice(2, u ? a.length - 7 : void 0),
                    f = t[yt] || null,
                    f = f != null ? f[a] : null,
                    typeof f == "function" && t.removeEventListener(n, f, u),
                    typeof l == "function")) {
                        typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                        t.addEventListener(n, l, u);
                        break e
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : ll(t, a, l)
                }
        }
    }
    function ct(t, n, a) {
        switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            fe("error", t),
            fe("load", t);
            var l = !1, u = !1, f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = a[f];
                    if (g != null)
                        switch (f) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, n));
                        default:
                            Re(t, n, f, g, a, null)
                        }
                }
            u && Re(t, n, "srcSet", a.srcSet, a, null),
            l && Re(t, n, "src", a.src, a, null);
            return;
        case "input":
            fe("invalid", t);
            var _ = f = g = u = null
              , S = null
              , I = null;
            for (l in a)
                if (a.hasOwnProperty(l)) {
                    var L = a[l];
                    if (L != null)
                        switch (l) {
                        case "name":
                            u = L;
                            break;
                        case "type":
                            g = L;
                            break;
                        case "checked":
                            S = L;
                            break;
                        case "defaultChecked":
                            I = L;
                            break;
                        case "value":
                            f = L;
                            break;
                        case "defaultValue":
                            _ = L;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (L != null)
                                throw Error(r(137, n));
                            break;
                        default:
                            Re(t, n, l, L, a, null)
                        }
                }
            Vh(t, f, _, S, I, g, u, !1),
            cl(t);
            return;
        case "select":
            fe("invalid", t),
            l = g = f = null;
            for (u in a)
                if (a.hasOwnProperty(u) && (_ = a[u],
                _ != null))
                    switch (u) {
                    case "value":
                        f = _;
                        break;
                    case "defaultValue":
                        g = _;
                        break;
                    case "multiple":
                        l = _;
                    default:
                        Re(t, n, u, _, a, null)
                    }
            n = f,
            a = g,
            t.multiple = !!l,
            n != null ? ps(t, !!l, n, !1) : a != null && ps(t, !!l, a, !0);
            return;
        case "textarea":
            fe("invalid", t),
            f = u = l = null;
            for (g in a)
                if (a.hasOwnProperty(g) && (_ = a[g],
                _ != null))
                    switch (g) {
                    case "value":
                        l = _;
                        break;
                    case "defaultValue":
                        u = _;
                        break;
                    case "children":
                        f = _;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (_ != null)
                            throw Error(r(91));
                        break;
                    default:
                        Re(t, n, g, _, a, null)
                    }
            Yh(t, l, u, f),
            cl(t);
            return;
        case "option":
            for (S in a)
                if (a.hasOwnProperty(S) && (l = a[S],
                l != null))
                    switch (S) {
                    case "selected":
                        t.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        Re(t, n, S, l, a, null)
                    }
            return;
        case "dialog":
            fe("beforetoggle", t),
            fe("toggle", t),
            fe("cancel", t),
            fe("close", t);
            break;
        case "iframe":
        case "object":
            fe("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < nr.length; l++)
                fe(nr[l], t);
            break;
        case "image":
            fe("error", t),
            fe("load", t);
            break;
        case "details":
            fe("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            fe("error", t),
            fe("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (I in a)
                if (a.hasOwnProperty(I) && (l = a[I],
                l != null))
                    switch (I) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, n));
                    default:
                        Re(t, n, I, l, a, null)
                    }
            return;
        default:
            if (Oc(n)) {
                for (L in a)
                    a.hasOwnProperty(L) && (l = a[L],
                    l !== void 0 && mf(t, n, L, l, a, void 0));
                return
            }
        }
        for (_ in a)
            a.hasOwnProperty(_) && (l = a[_],
            l != null && Re(t, n, _, l, a, null))
    }
    function pS(t, n, a, l) {
        switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , f = null
              , g = null
              , _ = null
              , S = null
              , I = null
              , L = null;
            for (M in a) {
                var j = a[M];
                if (a.hasOwnProperty(M) && j != null)
                    switch (M) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        S = j;
                    default:
                        l.hasOwnProperty(M) || Re(t, n, M, null, l, j)
                    }
            }
            for (var D in l) {
                var M = l[D];
                if (j = a[D],
                l.hasOwnProperty(D) && (M != null || j != null))
                    switch (D) {
                    case "type":
                        f = M;
                        break;
                    case "name":
                        u = M;
                        break;
                    case "checked":
                        I = M;
                        break;
                    case "defaultChecked":
                        L = M;
                        break;
                    case "value":
                        g = M;
                        break;
                    case "defaultValue":
                        _ = M;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (M != null)
                            throw Error(r(137, n));
                        break;
                    default:
                        M !== j && Re(t, n, D, M, l, j)
                    }
            }
            Nc(t, g, _, S, I, L, f, u);
            return;
        case "select":
            M = g = _ = D = null;
            for (f in a)
                if (S = a[f],
                a.hasOwnProperty(f) && S != null)
                    switch (f) {
                    case "value":
                        break;
                    case "multiple":
                        M = S;
                    default:
                        l.hasOwnProperty(f) || Re(t, n, f, null, l, S)
                    }
            for (u in l)
                if (f = l[u],
                S = a[u],
                l.hasOwnProperty(u) && (f != null || S != null))
                    switch (u) {
                    case "value":
                        D = f;
                        break;
                    case "defaultValue":
                        _ = f;
                        break;
                    case "multiple":
                        g = f;
                    default:
                        f !== S && Re(t, n, u, f, l, S)
                    }
            n = _,
            a = g,
            l = M,
            D != null ? ps(t, !!a, D, !1) : !!l != !!a && (n != null ? ps(t, !!a, n, !0) : ps(t, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            M = D = null;
            for (_ in a)
                if (u = a[_],
                a.hasOwnProperty(_) && u != null && !l.hasOwnProperty(_))
                    switch (_) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Re(t, n, _, null, l, u)
                    }
            for (g in l)
                if (u = l[g],
                f = a[g],
                l.hasOwnProperty(g) && (u != null || f != null))
                    switch (g) {
                    case "value":
                        D = u;
                        break;
                    case "defaultValue":
                        M = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(r(91));
                        break;
                    default:
                        u !== f && Re(t, n, g, u, l, f)
                    }
            Gh(t, D, M);
            return;
        case "option":
            for (var se in a)
                if (D = a[se],
                a.hasOwnProperty(se) && D != null && !l.hasOwnProperty(se))
                    switch (se) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Re(t, n, se, null, l, D)
                    }
            for (S in l)
                if (D = l[S],
                M = a[S],
                l.hasOwnProperty(S) && D !== M && (D != null || M != null))
                    switch (S) {
                    case "selected":
                        t.selected = D && typeof D != "function" && typeof D != "symbol";
                        break;
                    default:
                        Re(t, n, S, D, l, M)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var J in a)
                D = a[J],
                a.hasOwnProperty(J) && D != null && !l.hasOwnProperty(J) && Re(t, n, J, null, l, D);
            for (I in l)
                if (D = l[I],
                M = a[I],
                l.hasOwnProperty(I) && D !== M && (D != null || M != null))
                    switch (I) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (D != null)
                            throw Error(r(137, n));
                        break;
                    default:
                        Re(t, n, I, D, l, M)
                    }
            return;
        default:
            if (Oc(n)) {
                for (var Ne in a)
                    D = a[Ne],
                    a.hasOwnProperty(Ne) && D !== void 0 && !l.hasOwnProperty(Ne) && mf(t, n, Ne, void 0, l, D);
                for (L in l)
                    D = l[L],
                    M = a[L],
                    !l.hasOwnProperty(L) || D === M || D === void 0 && M === void 0 || mf(t, n, L, D, l, M);
                return
            }
        }
        for (var R in a)
            D = a[R],
            a.hasOwnProperty(R) && D != null && !l.hasOwnProperty(R) && Re(t, n, R, null, l, D);
        for (j in l)
            D = l[j],
            M = a[j],
            !l.hasOwnProperty(j) || D === M || D == null && M == null || Re(t, n, j, D, l, M)
    }
    var gf = null
      , _f = null;
    function so(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Fg(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Kg(t, n) {
        if (t === 0)
            switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && n === "foreignObject" ? 0 : t
    }
    function vf(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var yf = null;
    function mS() {
        var t = window.event;
        return t && t.type === "popstate" ? t === yf ? !1 : (yf = t,
        !0) : (yf = null,
        !1)
    }
    var Qg = typeof setTimeout == "function" ? setTimeout : void 0
      , gS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Xg = typeof Promise == "function" ? Promise : void 0
      , _S = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xg < "u" ? function(t) {
        return Xg.resolve(null).then(t).catch(vS)
    }
    : Qg;
    function vS(t) {
        setTimeout(function() {
            throw t
        })
    }
    function li(t) {
        return t === "head"
    }
    function Wg(t, n) {
        var a = n
          , l = 0
          , u = 0;
        do {
            var f = a.nextSibling;
            if (t.removeChild(a),
            f && f.nodeType === 8)
                if (a = f.data,
                a === "/$") {
                    if (0 < l && 8 > l) {
                        a = l;
                        var g = t.ownerDocument;
                        if (a & 1 && sr(g.documentElement),
                        a & 2 && sr(g.body),
                        a & 4)
                            for (a = g.head,
                            sr(a),
                            g = a.firstChild; g; ) {
                                var _ = g.nextSibling
                                  , S = g.nodeName;
                                g[ya] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && g.rel.toLowerCase() === "stylesheet" || a.removeChild(g),
                                g = _
                            }
                    }
                    if (u === 0) {
                        t.removeChild(f),
                        dr(n);
                        return
                    }
                    u--
                } else
                    a === "$" || a === "$?" || a === "$!" ? u++ : l = a.charCodeAt(0) - 48;
            else
                l = 0;
            a = f
        } while (a);
        dr(n)
    }
    function Ef(t) {
        var n = t.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
            var a = n;
            switch (n = n.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Ef(a),
                Cc(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(a)
        }
    }
    function yS(t, n, a, l) {
        for (; t.nodeType === 1; ) {
            var u = a;
            if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[ya])
                    switch (n) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (f = t.getAttribute("rel"),
                        f === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (f !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (f = t.getAttribute("src"),
                        (f !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (n === "input" && t.type === "hidden") {
                var f = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === f)
                    return t
            } else
                return t;
            if (t = Wt(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function ES(t, n, a) {
        if (n === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Wt(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function bf(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function bS(t, n) {
        var a = t.ownerDocument;
        if (t.data !== "$?" || a.readyState === "complete")
            n();
        else {
            var l = function() {
                n(),
                a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function Wt(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3)
                break;
            if (n === 8) {
                if (n = t.data,
                n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
                    break;
                if (n === "/$")
                    return null
            }
        }
        return t
    }
    var Sf = null;
    function $g(t) {
        t = t.previousSibling;
        for (var n = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (n === 0)
                        return t;
                    n--
                } else
                    a === "/$" && n++
            }
            t = t.previousSibling
        }
        return null
    }
    function Zg(t, n, a) {
        switch (n = so(a),
        t) {
        case "html":
            if (t = n.documentElement,
            !t)
                throw Error(r(452));
            return t;
        case "head":
            if (t = n.head,
            !t)
                throw Error(r(453));
            return t;
        case "body":
            if (t = n.body,
            !t)
                throw Error(r(454));
            return t;
        default:
            throw Error(r(451))
        }
    }
    function sr(t) {
        for (var n = t.attributes; n.length; )
            t.removeAttributeNode(n[0]);
        Cc(t)
    }
    var Yt = new Map
      , Jg = new Set;
    function ao(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var xn = F.d;
    F.d = {
        f: SS,
        r: TS,
        D: CS,
        C: wS,
        L: AS,
        m: RS,
        X: xS,
        S: NS,
        M: OS
    };
    function SS() {
        var t = xn.f()
          , n = Wl();
        return t || n
    }
    function TS(t) {
        var n = us(t);
        n !== null && n.tag === 5 && n.type === "form" ? ym(n) : xn.r(t)
    }
    var Gs = typeof document > "u" ? null : document;
    function e_(t, n, a) {
        var l = Gs;
        if (l && typeof n == "string" && n) {
            var u = jt(n);
            u = 'link[rel="' + t + '"][href="' + u + '"]',
            typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
            Jg.has(u) || (Jg.add(u),
            t = {
                rel: t,
                crossOrigin: a,
                href: n
            },
            l.querySelector(u) === null && (n = l.createElement("link"),
            ct(n, "link", t),
            et(n),
            l.head.appendChild(n)))
        }
    }
    function CS(t) {
        xn.D(t),
        e_("dns-prefetch", t, null)
    }
    function wS(t, n) {
        xn.C(t, n),
        e_("preconnect", t, n)
    }
    function AS(t, n, a) {
        xn.L(t, n, a);
        var l = Gs;
        if (l && t && n) {
            var u = 'link[rel="preload"][as="' + jt(n) + '"]';
            n === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + jt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (u += '[imagesizes="' + jt(a.imageSizes) + '"]')) : u += '[href="' + jt(t) + '"]';
            var f = u;
            switch (n) {
            case "style":
                f = Ys(t);
                break;
            case "script":
                f = Fs(t)
            }
            Yt.has(f) || (t = y({
                rel: "preload",
                href: n === "image" && a && a.imageSrcSet ? void 0 : t,
                as: n
            }, a),
            Yt.set(f, t),
            l.querySelector(u) !== null || n === "style" && l.querySelector(ar(f)) || n === "script" && l.querySelector(rr(f)) || (n = l.createElement("link"),
            ct(n, "link", t),
            et(n),
            l.head.appendChild(n)))
        }
    }
    function RS(t, n) {
        xn.m(t, n);
        var a = Gs;
        if (a && t) {
            var l = n && typeof n.as == "string" ? n.as : "script"
              , u = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(t) + '"]'
              , f = u;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                f = Fs(t)
            }
            if (!Yt.has(f) && (t = y({
                rel: "modulepreload",
                href: t
            }, n),
            Yt.set(f, t),
            a.querySelector(u) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(rr(f)))
                        return
                }
                l = a.createElement("link"),
                ct(l, "link", t),
                et(l),
                a.head.appendChild(l)
            }
        }
    }
    function NS(t, n, a) {
        xn.S(t, n, a);
        var l = Gs;
        if (l && t) {
            var u = fs(l).hoistableStyles
              , f = Ys(t);
            n = n || "default";
            var g = u.get(f);
            if (!g) {
                var _ = {
                    loading: 0,
                    preload: null
                };
                if (g = l.querySelector(ar(f)))
                    _.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": n
                    }, a),
                    (a = Yt.get(f)) && Tf(t, a);
                    var S = g = l.createElement("link");
                    et(S),
                    ct(S, "link", t),
                    S._p = new Promise(function(I, L) {
                        S.onload = I,
                        S.onerror = L
                    }
                    ),
                    S.addEventListener("load", function() {
                        _.loading |= 1
                    }),
                    S.addEventListener("error", function() {
                        _.loading |= 2
                    }),
                    _.loading |= 4,
                    ro(g, n, l)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: _
                },
                u.set(f, g)
            }
        }
    }
    function xS(t, n) {
        xn.X(t, n);
        var a = Gs;
        if (a && t) {
            var l = fs(a).hoistableScripts
              , u = Fs(t)
              , f = l.get(u);
            f || (f = a.querySelector(rr(u)),
            f || (t = y({
                src: t,
                async: !0
            }, n),
            (n = Yt.get(u)) && Cf(t, n),
            f = a.createElement("script"),
            et(f),
            ct(f, "link", t),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(u, f))
        }
    }
    function OS(t, n) {
        xn.M(t, n);
        var a = Gs;
        if (a && t) {
            var l = fs(a).hoistableScripts
              , u = Fs(t)
              , f = l.get(u);
            f || (f = a.querySelector(rr(u)),
            f || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, n),
            (n = Yt.get(u)) && Cf(t, n),
            f = a.createElement("script"),
            et(f),
            ct(f, "link", t),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(u, f))
        }
    }
    function t_(t, n, a, l) {
        var u = (u = ee.current) ? ao(u) : null;
        if (!u)
            throw Error(r(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ys(a.href),
            a = fs(u).hoistableStyles,
            l = a.get(n),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                t = Ys(a.href);
                var f = fs(u).hoistableStyles
                  , g = f.get(t);
                if (g || (u = u.ownerDocument || u,
                g = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                f.set(t, g),
                (f = u.querySelector(ar(t))) && !f._p && (g.instance = f,
                g.state.loading = 5),
                Yt.has(t) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Yt.set(t, a),
                f || IS(u, t, a, g.state))),
                n && l === null)
                    throw Error(r(528, ""));
                return g
            }
            if (n && l !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return n = a.async,
            a = a.src,
            typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Fs(a),
            a = fs(u).hoistableScripts,
            l = a.get(n),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, t))
        }
    }
    function Ys(t) {
        return 'href="' + jt(t) + '"'
    }
    function ar(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function n_(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function IS(t, n, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = t.createElement("link"),
        l.preload = n,
        n.addEventListener("load", function() {
            return l.loading |= 1
        }),
        n.addEventListener("error", function() {
            return l.loading |= 2
        }),
        ct(n, "link", a),
        et(n),
        t.head.appendChild(n))
    }
    function Fs(t) {
        return '[src="' + jt(t) + '"]'
    }
    function rr(t) {
        return "script[async]" + t
    }
    function i_(t, n, a) {
        if (n.count++,
        n.instance === null)
            switch (n.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + jt(a.href) + '"]');
                if (l)
                    return n.instance = l,
                    et(l),
                    l;
                var u = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                et(l),
                ct(l, "style", u),
                ro(l, a.precedence, t),
                n.instance = l;
            case "stylesheet":
                u = Ys(a.href);
                var f = t.querySelector(ar(u));
                if (f)
                    return n.state.loading |= 4,
                    n.instance = f,
                    et(f),
                    f;
                l = n_(a),
                (u = Yt.get(u)) && Tf(l, u),
                f = (t.ownerDocument || t).createElement("link"),
                et(f);
                var g = f;
                return g._p = new Promise(function(_, S) {
                    g.onload = _,
                    g.onerror = S
                }
                ),
                ct(f, "link", l),
                n.state.loading |= 4,
                ro(f, a.precedence, t),
                n.instance = f;
            case "script":
                return f = Fs(a.src),
                (u = t.querySelector(rr(f))) ? (n.instance = u,
                et(u),
                u) : (l = a,
                (u = Yt.get(f)) && (l = y({}, a),
                Cf(l, u)),
                t = t.ownerDocument || t,
                u = t.createElement("script"),
                et(u),
                ct(u, "link", l),
                t.head.appendChild(u),
                n.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, n.type))
            }
        else
            n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance,
            n.state.loading |= 4,
            ro(l, a.precedence, t));
        return n.instance
    }
    function ro(t, n, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, f = u, g = 0; g < l.length; g++) {
            var _ = l[g];
            if (_.dataset.precedence === n)
                f = _;
            else if (f !== u)
                break
        }
        f ? f.parentNode.insertBefore(t, f.nextSibling) : (n = a.nodeType === 9 ? a.head : a,
        n.insertBefore(t, n.firstChild))
    }
    function Tf(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
        t.title == null && (t.title = n.title)
    }
    function Cf(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
        t.integrity == null && (t.integrity = n.integrity)
    }
    var lo = null;
    function s_(t, n, a) {
        if (lo === null) {
            var l = new Map
              , u = lo = new Map;
            u.set(a, l)
        } else
            u = lo,
            l = u.get(a),
            l || (l = new Map,
            u.set(a, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        a = a.getElementsByTagName(t),
        u = 0; u < a.length; u++) {
            var f = a[u];
            if (!(f[ya] || f[ft] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = f.getAttribute(n) || "";
                g = t + g;
                var _ = l.get(g);
                _ ? _.push(f) : l.set(g, [f])
            }
        }
        return l
    }
    function a_(t, n, a) {
        t = t.ownerDocument || t,
        t.head.insertBefore(a, n === "title" ? t.querySelector("head > title") : null)
    }
    function DS(t, n, a) {
        if (a === 1 || n.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
                break;
            return !0;
        case "link":
            if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
                break;
            switch (n.rel) {
            case "stylesheet":
                return t = n.disabled,
                typeof n.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
                return !0
        }
        return !1
    }
    function r_(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var lr = null;
    function MS() {}
    function kS(t, n, a) {
        if (lr === null)
            throw Error(r(475));
        var l = lr;
        if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var u = Ys(a.href)
                  , f = t.querySelector(ar(u));
                if (f) {
                    t = f._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = oo.bind(l),
                    t.then(l, l)),
                    n.state.loading |= 4,
                    n.instance = f,
                    et(f);
                    return
                }
                f = t.ownerDocument || t,
                a = n_(a),
                (u = Yt.get(u)) && Tf(a, u),
                f = f.createElement("link"),
                et(f);
                var g = f;
                g._p = new Promise(function(_, S) {
                    g.onload = _,
                    g.onerror = S
                }
                ),
                ct(f, "link", a),
                n.instance = f
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(n, t),
            (t = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++,
            n = oo.bind(l),
            t.addEventListener("load", n),
            t.addEventListener("error", n))
        }
    }
    function LS() {
        if (lr === null)
            throw Error(r(475));
        var t = lr;
        return t.stylesheets && t.count === 0 && wf(t, t.stylesheets),
        0 < t.count ? function(n) {
            var a = setTimeout(function() {
                if (t.stylesheets && wf(t, t.stylesheets),
                t.unsuspend) {
                    var l = t.unsuspend;
                    t.unsuspend = null,
                    l()
                }
            }, 6e4);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function oo() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                wf(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var co = null;
    function wf(t, n) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        co = new Map,
        n.forEach(US, t),
        co = null,
        oo.call(t))
    }
    function US(t, n) {
        if (!(n.state.loading & 4)) {
            var a = co.get(t);
            if (a)
                var l = a.get(null);
            else {
                a = new Map,
                co.set(t, a);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < u.length; f++) {
                    var g = u[f];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (a.set(g.dataset.precedence, g),
                    l = g)
                }
                l && a.set(null, l)
            }
            u = n.instance,
            g = u.getAttribute("data-precedence"),
            f = a.get(g) || l,
            f === l && a.set(null, u),
            a.set(g, u),
            this.count++,
            l = oo.bind(this),
            u.addEventListener("load", l),
            u.addEventListener("error", l),
            f ? f.parentNode.insertBefore(u, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(u, t.firstChild)),
            n.state.loading |= 4
        }
    }
    var or = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: Z,
        _currentValue2: Z,
        _threadCount: 0
    };
    function PS(t, n, a, l, u, f, g, _) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Ec(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ec(0),
        this.hiddenUpdates = Ec(null),
        this.identifierPrefix = l,
        this.onUncaughtError = u,
        this.onCaughtError = f,
        this.onRecoverableError = g,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = _,
        this.incompleteTransitions = new Map
    }
    function l_(t, n, a, l, u, f, g, _, S, I, L, j) {
        return t = new PS(t,n,a,g,_,S,I,j),
        n = 1,
        f === !0 && (n |= 24),
        f = It(3, null, null, n),
        t.current = f,
        f.stateNode = t,
        n = au(),
        n.refCount++,
        t.pooledCache = n,
        n.refCount++,
        f.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: n
        },
        cu(f),
        t
    }
    function o_(t) {
        return t ? (t = Ts,
        t) : Ts
    }
    function c_(t, n, a, l, u, f) {
        u = o_(u),
        l.context === null ? l.context = u : l.pendingContext = u,
        l = Qn(n),
        l.payload = {
            element: a
        },
        f = f === void 0 ? null : f,
        f !== null && (l.callback = f),
        a = Xn(t, l, n),
        a !== null && (Ut(a, t, n),
        ja(a, t, n))
    }
    function u_(t, n) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < n ? a : n
        }
    }
    function Af(t, n) {
        u_(t, n),
        (t = t.alternate) && u_(t, n)
    }
    function f_(t) {
        if (t.tag === 13) {
            var n = Ss(t, 67108864);
            n !== null && Ut(n, t, 67108864),
            Af(t, 67108864)
        }
    }
    var uo = !0;
    function jS(t, n, a, l) {
        var u = k.T;
        k.T = null;
        var f = F.p;
        try {
            F.p = 2,
            Rf(t, n, a, l)
        } finally {
            F.p = f,
            k.T = u
        }
    }
    function zS(t, n, a, l) {
        var u = k.T;
        k.T = null;
        var f = F.p;
        try {
            F.p = 8,
            Rf(t, n, a, l)
        } finally {
            F.p = f,
            k.T = u
        }
    }
    function Rf(t, n, a, l) {
        if (uo) {
            var u = Nf(l);
            if (u === null)
                pf(t, n, l, fo, a),
                h_(t, l);
            else if (BS(u, t, n, a, l))
                l.stopPropagation();
            else if (h_(t, l),
            n & 4 && -1 < HS.indexOf(t)) {
                for (; u !== null; ) {
                    var f = us(u);
                    if (f !== null)
                        switch (f.tag) {
                        case 3:
                            if (f = f.stateNode,
                            f.current.memoizedState.isDehydrated) {
                                var g = xi(f.pendingLanes);
                                if (g !== 0) {
                                    var _ = f;
                                    for (_.pendingLanes |= 2,
                                    _.entangledLanes |= 2; g; ) {
                                        var S = 1 << 31 - xt(g);
                                        _.entanglements[1] |= S,
                                        g &= ~S
                                    }
                                    fn(f),
                                    (Ce & 6) === 0 && (Ql = rn() + 500,
                                    tr(0))
                                }
                            }
                            break;
                        case 13:
                            _ = Ss(f, 2),
                            _ !== null && Ut(_, f, 2),
                            Wl(),
                            Af(f, 2)
                        }
                    if (f = Nf(l),
                    f === null && pf(t, n, l, fo, a),
                    f === u)
                        break;
                    u = f
                }
                u !== null && l.stopPropagation()
            } else
                pf(t, n, l, null, a)
        }
    }
    function Nf(t) {
        return t = Dc(t),
        xf(t)
    }
    var fo = null;
    function xf(t) {
        if (fo = null,
        t = cs(t),
        t !== null) {
            var n = c(t);
            if (n === null)
                t = null;
            else {
                var a = n.tag;
                if (a === 13) {
                    if (t = d(n),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated)
                        return n.tag === 3 ? n.stateNode.containerInfo : null;
                    t = null
                } else
                    n !== t && (t = null)
            }
        }
        return fo = t,
        null
    }
    function d_(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (w0()) {
            case Ah:
                return 2;
            case Rh:
                return 8;
            case il:
            case A0:
                return 32;
            case Nh:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Of = !1
      , oi = null
      , ci = null
      , ui = null
      , cr = new Map
      , ur = new Map
      , fi = []
      , HS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function h_(t, n) {
        switch (t) {
        case "focusin":
        case "focusout":
            oi = null;
            break;
        case "dragenter":
        case "dragleave":
            ci = null;
            break;
        case "mouseover":
        case "mouseout":
            ui = null;
            break;
        case "pointerover":
        case "pointerout":
            cr.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ur.delete(n.pointerId)
        }
    }
    function fr(t, n, a, l, u, f) {
        return t === null || t.nativeEvent !== f ? (t = {
            blockedOn: n,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: f,
            targetContainers: [u]
        },
        n !== null && (n = us(n),
        n !== null && f_(n)),
        t) : (t.eventSystemFlags |= l,
        n = t.targetContainers,
        u !== null && n.indexOf(u) === -1 && n.push(u),
        t)
    }
    function BS(t, n, a, l, u) {
        switch (n) {
        case "focusin":
            return oi = fr(oi, t, n, a, l, u),
            !0;
        case "dragenter":
            return ci = fr(ci, t, n, a, l, u),
            !0;
        case "mouseover":
            return ui = fr(ui, t, n, a, l, u),
            !0;
        case "pointerover":
            var f = u.pointerId;
            return cr.set(f, fr(cr.get(f) || null, t, n, a, l, u)),
            !0;
        case "gotpointercapture":
            return f = u.pointerId,
            ur.set(f, fr(ur.get(f) || null, t, n, a, l, u)),
            !0
        }
        return !1
    }
    function p_(t) {
        var n = cs(t.target);
        if (n !== null) {
            var a = c(n);
            if (a !== null) {
                if (n = a.tag,
                n === 13) {
                    if (n = d(a),
                    n !== null) {
                        t.blockedOn = n,
                        k0(t.priority, function() {
                            if (a.tag === 13) {
                                var l = Lt();
                                l = bc(l);
                                var u = Ss(a, l);
                                u !== null && Ut(u, a, l),
                                Af(a, l)
                            }
                        });
                        return
                    }
                } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function ho(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var n = t.targetContainers; 0 < n.length; ) {
            var a = Nf(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type,a);
                Ic = l,
                a.target.dispatchEvent(l),
                Ic = null
            } else
                return n = us(a),
                n !== null && f_(n),
                t.blockedOn = a,
                !1;
            n.shift()
        }
        return !0
    }
    function m_(t, n, a) {
        ho(t) && a.delete(n)
    }
    function qS() {
        Of = !1,
        oi !== null && ho(oi) && (oi = null),
        ci !== null && ho(ci) && (ci = null),
        ui !== null && ho(ui) && (ui = null),
        cr.forEach(m_),
        ur.forEach(m_)
    }
    function po(t, n) {
        t.blockedOn === n && (t.blockedOn = null,
        Of || (Of = !0,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, qS)))
    }
    var mo = null;
    function g_(t) {
        mo !== t && (mo = t,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
            mo === t && (mo = null);
            for (var n = 0; n < t.length; n += 3) {
                var a = t[n]
                  , l = t[n + 1]
                  , u = t[n + 2];
                if (typeof l != "function") {
                    if (xf(l || a) === null)
                        continue;
                    break
                }
                var f = us(a);
                f !== null && (t.splice(n, 3),
                n -= 3,
                Nu(f, {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: l
                }, l, u))
            }
        }))
    }
    function dr(t) {
        function n(S) {
            return po(S, t)
        }
        oi !== null && po(oi, t),
        ci !== null && po(ci, t),
        ui !== null && po(ui, t),
        cr.forEach(n),
        ur.forEach(n);
        for (var a = 0; a < fi.length; a++) {
            var l = fi[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < fi.length && (a = fi[0],
        a.blockedOn === null); )
            p_(a),
            a.blockedOn === null && fi.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay,
        a != null)
            for (l = 0; l < a.length; l += 3) {
                var u = a[l]
                  , f = a[l + 1]
                  , g = u[yt] || null;
                if (typeof f == "function")
                    g || g_(a);
                else if (g) {
                    var _ = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (u = f,
                        g = f[yt] || null)
                            _ = g.formAction;
                        else if (xf(u) !== null)
                            continue
                    } else
                        _ = g.action;
                    typeof _ == "function" ? a[l + 1] = _ : (a.splice(l, 3),
                    l -= 3),
                    g_(a)
                }
            }
    }
    function If(t) {
        this._internalRoot = t
    }
    go.prototype.render = If.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null)
            throw Error(r(409));
        var a = n.current
          , l = Lt();
        c_(a, l, t, n, null, null)
    }
    ,
    go.prototype.unmount = If.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            c_(t.current, 2, null, t, null, null),
            Wl(),
            n[os] = null
        }
    }
    ;
    function go(t) {
        this._internalRoot = t
    }
    go.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = Mh();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var a = 0; a < fi.length && n !== 0 && n < fi[a].priority; a++)
                ;
            fi.splice(a, 0, t),
            a === 0 && p_(t)
        }
    }
    ;
    var __ = e.version;
    if (__ !== "19.1.0")
        throw Error(r(527, __, "19.1.0"));
    F.findDOMNode = function(t) {
        var n = t._reactInternals;
        if (n === void 0)
            throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
            Error(r(268, t)));
        return t = p(n),
        t = t !== null ? m(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var VS = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: k,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!_o.isDisabled && _o.supportsFiber)
            try {
                ga = _o.inject(VS),
                Nt = _o
            } catch {}
    }
    return pr.createRoot = function(t, n) {
        if (!o(t))
            throw Error(r(299));
        var a = !1
          , l = ""
          , u = Mm
          , f = km
          , g = Lm
          , _ = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (f = n.onCaughtError),
        n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (_ = n.unstable_transitionCallbacks)),
        n = l_(t, 1, !1, null, null, a, l, u, f, g, _, null),
        t[os] = n.current,
        hf(t),
        new If(n)
    }
    ,
    pr.hydrateRoot = function(t, n, a) {
        if (!o(t))
            throw Error(r(299));
        var l = !1
          , u = ""
          , f = Mm
          , g = km
          , _ = Lm
          , S = null
          , I = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
        a.onCaughtError !== void 0 && (g = a.onCaughtError),
        a.onRecoverableError !== void 0 && (_ = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (I = a.formState)),
        n = l_(t, 1, !0, n, a ?? null, l, u, f, g, _, S, I),
        n.context = o_(null),
        a = n.current,
        l = Lt(),
        l = bc(l),
        u = Qn(l),
        u.callback = null,
        Xn(a, u, l),
        a = l,
        n.current.lanes = a,
        va(n, a),
        fn(n),
        t[os] = n.current,
        hf(t),
        new go(n)
    }
    ,
    pr.version = "19.1.0",
    pr
}
var R_;
function eT() {
    if (R_)
        return kf.exports;
    R_ = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (e) {
                console.error(e)
            }
    }
    return s(),
    kf.exports = JS(),
    kf.exports
}
var tT = eT();
const nT = Fv(tT);
var mr = {}, N_;
function iT() {
    if (N_)
        return mr;
    N_ = 1,
    Object.defineProperty(mr, "__esModule", {
        value: !0
    }),
    mr.parse = d,
    mr.serialize = m;
    const s = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
      , e = /^[\u0021-\u003A\u003C-\u007E]*$/
      , i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
      , r = /^[\u0020-\u003A\u003D-\u007E]*$/
      , o = Object.prototype.toString
      , c = ( () => {
        const v = function() {};
        return v.prototype = Object.create(null),
        v
    }
    )();
    function d(v, x) {
        const A = new c
          , U = v.length;
        if (U < 2)
            return A;
        const B = (x == null ? void 0 : x.decode) || y;
        let H = 0;
        do {
            const q = v.indexOf("=", H);
            if (q === -1)
                break;
            const Y = v.indexOf(";", H)
              , W = Y === -1 ? U : Y;
            if (q > W) {
                H = v.lastIndexOf(";", q - 1) + 1;
                continue
            }
            const K = h(v, H, q)
              , ve = p(v, q, K)
              , Te = v.slice(K, ve);
            if (A[Te] === void 0) {
                let me = h(v, q + 1, W)
                  , he = p(v, W, me);
                const _e = B(v.slice(me, he));
                A[Te] = _e
            }
            H = W + 1
        } while (H < U);
        return A
    }
    function h(v, x, A) {
        do {
            const U = v.charCodeAt(x);
            if (U !== 32 && U !== 9)
                return x
        } while (++x < A);
        return A
    }
    function p(v, x, A) {
        for (; x > A; ) {
            const U = v.charCodeAt(--x);
            if (U !== 32 && U !== 9)
                return x + 1
        }
        return A
    }
    function m(v, x, A) {
        const U = (A == null ? void 0 : A.encode) || encodeURIComponent;
        if (!s.test(v))
            throw new TypeError(`argument name is invalid: ${v}`);
        const B = U(x);
        if (!e.test(B))
            throw new TypeError(`argument val is invalid: ${x}`);
        let H = v + "=" + B;
        if (!A)
            return H;
        if (A.maxAge !== void 0) {
            if (!Number.isInteger(A.maxAge))
                throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
            H += "; Max-Age=" + A.maxAge
        }
        if (A.domain) {
            if (!i.test(A.domain))
                throw new TypeError(`option domain is invalid: ${A.domain}`);
            H += "; Domain=" + A.domain
        }
        if (A.path) {
            if (!r.test(A.path))
                throw new TypeError(`option path is invalid: ${A.path}`);
            H += "; Path=" + A.path
        }
        if (A.expires) {
            if (!E(A.expires) || !Number.isFinite(A.expires.valueOf()))
                throw new TypeError(`option expires is invalid: ${A.expires}`);
            H += "; Expires=" + A.expires.toUTCString()
        }
        if (A.httpOnly && (H += "; HttpOnly"),
        A.secure && (H += "; Secure"),
        A.partitioned && (H += "; Partitioned"),
        A.priority)
            switch (typeof A.priority == "string" ? A.priority.toLowerCase() : void 0) {
            case "low":
                H += "; Priority=Low";
                break;
            case "medium":
                H += "; Priority=Medium";
                break;
            case "high":
                H += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${A.priority}`)
            }
        if (A.sameSite)
            switch (typeof A.sameSite == "string" ? A.sameSite.toLowerCase() : A.sameSite) {
            case !0:
            case "strict":
                H += "; SameSite=Strict";
                break;
            case "lax":
                H += "; SameSite=Lax";
                break;
            case "none":
                H += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${A.sameSite}`)
            }
        return H
    }
    function y(v) {
        if (v.indexOf("%") === -1)
            return v;
        try {
            return decodeURIComponent(v)
        } catch {
            return v
        }
    }
    function E(v) {
        return o.call(v) === "[object Date]"
    }
    return mr
}
iT();
var x_ = "popstate";
function sT(s={}) {
    function e(r, o) {
        let {pathname: c, search: d, hash: h} = r.location;
        return ed("", {
            pathname: c,
            search: d,
            hash: h
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function i(r, o) {
        return typeof o == "string" ? o : Or(o)
    }
    return rT(e, i, null, s)
}
function je(s, e) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(e)
}
function sn(s, e) {
    if (!s) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function aT() {
    return Math.random().toString(36).substring(2, 10)
}
function O_(s, e) {
    return {
        usr: s.state,
        key: s.key,
        idx: e
    }
}
function ed(s, e, i=null, r) {
    return {
        pathname: typeof s == "string" ? s : s.pathname,
        search: "",
        hash: "",
        ...typeof e == "string" ? ra(e) : e,
        state: i,
        key: e && e.key || r || aT()
    }
}
function Or({pathname: s="/", search: e="", hash: i=""}) {
    return e && e !== "?" && (s += e.charAt(0) === "?" ? e : "?" + e),
    i && i !== "#" && (s += i.charAt(0) === "#" ? i : "#" + i),
    s
}
function ra(s) {
    let e = {};
    if (s) {
        let i = s.indexOf("#");
        i >= 0 && (e.hash = s.substring(i),
        s = s.substring(0, i));
        let r = s.indexOf("?");
        r >= 0 && (e.search = s.substring(r),
        s = s.substring(0, r)),
        s && (e.pathname = s)
    }
    return e
}
function rT(s, e, i, r={}) {
    let {window: o=document.defaultView, v5Compat: c=!1} = r
      , d = o.history
      , h = "POP"
      , p = null
      , m = y();
    m == null && (m = 0,
    d.replaceState({
        ...d.state,
        idx: m
    }, ""));
    function y() {
        return (d.state || {
            idx: null
        }).idx
    }
    function E() {
        h = "POP";
        let B = y()
          , H = B == null ? null : B - m;
        m = B,
        p && p({
            action: h,
            location: U.location,
            delta: H
        })
    }
    function v(B, H) {
        h = "PUSH";
        let q = ed(U.location, B, H);
        m = y() + 1;
        let Y = O_(q, m)
          , W = U.createHref(q);
        try {
            d.pushState(Y, "", W)
        } catch (K) {
            if (K instanceof DOMException && K.name === "DataCloneError")
                throw K;
            o.location.assign(W)
        }
        c && p && p({
            action: h,
            location: U.location,
            delta: 1
        })
    }
    function x(B, H) {
        h = "REPLACE";
        let q = ed(U.location, B, H);
        m = y();
        let Y = O_(q, m)
          , W = U.createHref(q);
        d.replaceState(Y, "", W),
        c && p && p({
            action: h,
            location: U.location,
            delta: 0
        })
    }
    function A(B) {
        return lT(B)
    }
    let U = {
        get action() {
            return h
        },
        get location() {
            return s(o, d)
        },
        listen(B) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(x_, E),
            p = B,
            () => {
                o.removeEventListener(x_, E),
                p = null
            }
        },
        createHref(B) {
            return e(o, B)
        },
        createURL: A,
        encodeLocation(B) {
            let H = A(B);
            return {
                pathname: H.pathname,
                search: H.search,
                hash: H.hash
            }
        },
        push: v,
        replace: x,
        go(B) {
            return d.go(B)
        }
    };
    return U
}
function lT(s, e=!1) {
    let i = "http://localhost";
    typeof window < "u" && (i = window.location.origin !== "null" ? window.location.origin : window.location.href),
    je(i, "No window.location.(origin|href) available to create URL");
    let r = typeof s == "string" ? s : Or(s);
    return r = r.replace(/ $/, "%20"),
    !e && r.startsWith("//") && (r = i + r),
    new URL(r,i)
}
function Kv(s, e, i="/") {
    return oT(s, e, i, !1)
}
function oT(s, e, i, r) {
    let o = typeof e == "string" ? ra(e) : e
      , c = Un(o.pathname || "/", i);
    if (c == null)
        return null;
    let d = Qv(s);
    cT(d);
    let h = null;
    for (let p = 0; h == null && p < d.length; ++p) {
        let m = ET(c);
        h = vT(d[p], m, r)
    }
    return h
}
function Qv(s, e=[], i=[], r="") {
    let o = (c, d, h) => {
        let p = {
            relativePath: h === void 0 ? c.path || "" : h,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: d,
            route: c
        };
        p.relativePath.startsWith("/") && (je(p.relativePath.startsWith(r), `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        p.relativePath = p.relativePath.slice(r.length));
        let m = kn([r, p.relativePath])
          , y = i.concat(p);
        c.children && c.children.length > 0 && (je(c.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`),
        Qv(c.children, e, y, m)),
        !(c.path == null && !c.index) && e.push({
            path: m,
            score: gT(m, c.index),
            routesMeta: y
        })
    }
    ;
    return s.forEach( (c, d) => {
        var h;
        if (c.path === "" || !((h = c.path) != null && h.includes("?")))
            o(c, d);
        else
            for (let p of Xv(c.path))
                o(c, d, p)
    }
    ),
    e
}
function Xv(s) {
    let e = s.split("/");
    if (e.length === 0)
        return [];
    let[i,...r] = e
      , o = i.endsWith("?")
      , c = i.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [c, ""] : [c];
    let d = Xv(r.join("/"))
      , h = [];
    return h.push(...d.map(p => p === "" ? c : [c, p].join("/"))),
    o && h.push(...d),
    h.map(p => s.startsWith("/") && p === "" ? "/" : p)
}
function cT(s) {
    s.sort( (e, i) => e.score !== i.score ? i.score - e.score : _T(e.routesMeta.map(r => r.childrenIndex), i.routesMeta.map(r => r.childrenIndex)))
}
var uT = /^:[\w-]+$/
  , fT = 3
  , dT = 2
  , hT = 1
  , pT = 10
  , mT = -2
  , I_ = s => s === "*";
function gT(s, e) {
    let i = s.split("/")
      , r = i.length;
    return i.some(I_) && (r += mT),
    e && (r += dT),
    i.filter(o => !I_(o)).reduce( (o, c) => o + (uT.test(c) ? fT : c === "" ? hT : pT), r)
}
function _T(s, e) {
    return s.length === e.length && s.slice(0, -1).every( (r, o) => r === e[o]) ? s[s.length - 1] - e[e.length - 1] : 0
}
function vT(s, e, i=!1) {
    let {routesMeta: r} = s
      , o = {}
      , c = "/"
      , d = [];
    for (let h = 0; h < r.length; ++h) {
        let p = r[h]
          , m = h === r.length - 1
          , y = c === "/" ? e : e.slice(c.length) || "/"
          , E = Oo({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: m
        }, y)
          , v = p.route;
        if (!E && m && i && !r[r.length - 1].route.index && (E = Oo({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: !1
        }, y)),
        !E)
            return null;
        Object.assign(o, E.params),
        d.push({
            params: o,
            pathname: kn([c, E.pathname]),
            pathnameBase: CT(kn([c, E.pathnameBase])),
            route: v
        }),
        E.pathnameBase !== "/" && (c = kn([c, E.pathnameBase]))
    }
    return d
}
function Oo(s, e) {
    typeof s == "string" && (s = {
        path: s,
        caseSensitive: !1,
        end: !0
    });
    let[i,r] = yT(s.path, s.caseSensitive, s.end)
      , o = e.match(i);
    if (!o)
        return null;
    let c = o[0]
      , d = c.replace(/(.)\/+$/, "$1")
      , h = o.slice(1);
    return {
        params: r.reduce( (m, {paramName: y, isOptional: E}, v) => {
            if (y === "*") {
                let A = h[v] || "";
                d = c.slice(0, c.length - A.length).replace(/(.)\/+$/, "$1")
            }
            const x = h[v];
            return E && !x ? m[y] = void 0 : m[y] = (x || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: c,
        pathnameBase: d,
        pattern: s
    }
}
function yT(s, e=!1, i=!0) {
    sn(s === "*" || !s.endsWith("*") || s.endsWith("/*"), `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`);
    let r = []
      , o = "^" + s.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, p) => (r.push({
        paramName: h,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return s.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? o += "\\/*$" : s !== "" && s !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,e ? void 0 : "i"), r]
}
function ET(s) {
    try {
        return s.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return sn(!1, `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),
        s
    }
}
function Un(s, e) {
    if (e === "/")
        return s;
    if (!s.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let i = e.endsWith("/") ? e.length - 1 : e.length
      , r = s.charAt(i);
    return r && r !== "/" ? null : s.slice(i) || "/"
}
function bT(s, e="/") {
    let {pathname: i, search: r="", hash: o=""} = typeof s == "string" ? ra(s) : s;
    return {
        pathname: i ? i.startsWith("/") ? i : ST(i, e) : e,
        search: wT(r),
        hash: AT(o)
    }
}
function ST(s, e) {
    let i = e.replace(/\/+$/, "").split("/");
    return s.split("/").forEach(o => {
        o === ".." ? i.length > 1 && i.pop() : o !== "." && i.push(o)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function jf(s, e, i, r) {
    return `Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function TT(s) {
    return s.filter( (e, i) => i === 0 || e.route.path && e.route.path.length > 0)
}
function wd(s) {
    let e = TT(s);
    return e.map( (i, r) => r === e.length - 1 ? i.pathname : i.pathnameBase)
}
function Ad(s, e, i, r=!1) {
    let o;
    typeof s == "string" ? o = ra(s) : (o = {
        ...s
    },
    je(!o.pathname || !o.pathname.includes("?"), jf("?", "pathname", "search", o)),
    je(!o.pathname || !o.pathname.includes("#"), jf("#", "pathname", "hash", o)),
    je(!o.search || !o.search.includes("#"), jf("#", "search", "hash", o)));
    let c = s === "" || o.pathname === "", d = c ? "/" : o.pathname, h;
    if (d == null)
        h = i;
    else {
        let E = e.length - 1;
        if (!r && d.startsWith("..")) {
            let v = d.split("/");
            for (; v[0] === ".."; )
                v.shift(),
                E -= 1;
            o.pathname = v.join("/")
        }
        h = E >= 0 ? e[E] : "/"
    }
    let p = bT(o, h)
      , m = d && d !== "/" && d.endsWith("/")
      , y = (c || d === ".") && i.endsWith("/");
    return !p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"),
    p
}
var kn = s => s.join("/").replace(/\/\/+/g, "/")
  , CT = s => s.replace(/\/+$/, "").replace(/^\/*/, "/")
  , wT = s => !s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s
  , AT = s => !s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s;
function RT(s) {
    return s != null && typeof s.status == "number" && typeof s.statusText == "string" && typeof s.internal == "boolean" && "data"in s
}
var Wv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Wv);
var NT = ["GET", ...Wv];
new Set(NT);
var la = N.createContext(null);
la.displayName = "DataRouter";
var Jo = N.createContext(null);
Jo.displayName = "DataRouterState";
var $v = N.createContext({
    isTransitioning: !1
});
$v.displayName = "ViewTransition";
var xT = N.createContext(new Map);
xT.displayName = "Fetchers";
var OT = N.createContext(null);
OT.displayName = "Await";
var an = N.createContext(null);
an.displayName = "Navigation";
var Vr = N.createContext(null);
Vr.displayName = "Location";
var pn = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
pn.displayName = "Route";
var Rd = N.createContext(null);
Rd.displayName = "RouteError";
function IT(s, {relative: e}={}) {
    je(oa(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: i, navigator: r} = N.useContext(an)
      , {hash: o, pathname: c, search: d} = Gr(s, {
        relative: e
    })
      , h = c;
    return i !== "/" && (h = c === "/" ? i : kn([i, c])),
    r.createHref({
        pathname: h,
        search: d,
        hash: o
    })
}
function oa() {
    return N.useContext(Vr) != null
}
function Ai() {
    return je(oa(), "useLocation() may be used only in the context of a <Router> component."),
    N.useContext(Vr).location
}
var Zv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Jv(s) {
    N.useContext(an).static || N.useLayoutEffect(s)
}
function Nd() {
    let {isDataRoute: s} = N.useContext(pn);
    return s ? GT() : DT()
}
function DT() {
    je(oa(), "useNavigate() may be used only in the context of a <Router> component.");
    let s = N.useContext(la)
      , {basename: e, navigator: i} = N.useContext(an)
      , {matches: r} = N.useContext(pn)
      , {pathname: o} = Ai()
      , c = JSON.stringify(wd(r))
      , d = N.useRef(!1);
    return Jv( () => {
        d.current = !0
    }
    ),
    N.useCallback( (p, m={}) => {
        if (sn(d.current, Zv),
        !d.current)
            return;
        if (typeof p == "number") {
            i.go(p);
            return
        }
        let y = Ad(p, JSON.parse(c), o, m.relative === "path");
        s == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : kn([e, y.pathname])),
        (m.replace ? i.replace : i.push)(y, m.state, m)
    }
    , [e, i, c, o, s])
}
N.createContext(null);
function Gr(s, {relative: e}={}) {
    let {matches: i} = N.useContext(pn)
      , {pathname: r} = Ai()
      , o = JSON.stringify(wd(i));
    return N.useMemo( () => Ad(s, JSON.parse(o), r, e === "path"), [s, o, r, e])
}
function MT(s, e) {
    return ey(s, e)
}
function ey(s, e, i, r) {
    var H;
    je(oa(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: o} = N.useContext(an)
      , {matches: c} = N.useContext(pn)
      , d = c[c.length - 1]
      , h = d ? d.params : {}
      , p = d ? d.pathname : "/"
      , m = d ? d.pathnameBase : "/"
      , y = d && d.route;
    {
        let q = y && y.path || "";
        ty(p, !y || q.endsWith("*") || q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`)
    }
    let E = Ai(), v;
    if (e) {
        let q = typeof e == "string" ? ra(e) : e;
        je(m === "/" || ((H = q.pathname) == null ? void 0 : H.startsWith(m)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${q.pathname}" was given in the \`location\` prop.`),
        v = q
    } else
        v = E;
    let x = v.pathname || "/"
      , A = x;
    if (m !== "/") {
        let q = m.replace(/^\//, "").split("/");
        A = "/" + x.replace(/^\//, "").split("/").slice(q.length).join("/")
    }
    let U = Kv(s, {
        pathname: A
    });
    sn(y || U != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    sn(U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let B = jT(U && U.map(q => Object.assign({}, q, {
        params: Object.assign({}, h, q.params),
        pathname: kn([m, o.encodeLocation ? o.encodeLocation(q.pathname).pathname : q.pathname]),
        pathnameBase: q.pathnameBase === "/" ? m : kn([m, o.encodeLocation ? o.encodeLocation(q.pathnameBase).pathname : q.pathnameBase])
    })), c, i, r);
    return e && B ? N.createElement(Vr.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...v
            },
            navigationType: "POP"
        }
    }, B) : B
}
function kT() {
    let s = VT()
      , e = RT(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s)
      , i = s instanceof Error ? s.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , c = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", s),
    d = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
        style: c
    }, "ErrorBoundary"), " or", " ", N.createElement("code", {
        style: c
    }, "errorElement"), " prop on your route.")),
    N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), i ? N.createElement("pre", {
        style: o
    }, i) : null, d)
}
var LT = N.createElement(kT, null)
  , UT = class extends N.Component {
    constructor(s) {
        super(s),
        this.state = {
            location: s.location,
            revalidation: s.revalidation,
            error: s.error
        }
    }
    static getDerivedStateFromError(s) {
        return {
            error: s
        }
    }
    static getDerivedStateFromProps(s, e) {
        return e.location !== s.location || e.revalidation !== "idle" && s.revalidation === "idle" ? {
            error: s.error,
            location: s.location,
            revalidation: s.revalidation
        } : {
            error: s.error !== void 0 ? s.error : e.error,
            location: e.location,
            revalidation: s.revalidation || e.revalidation
        }
    }
    componentDidCatch(s, e) {
        console.error("React Router caught the following error during render", s, e)
    }
    render() {
        return this.state.error !== void 0 ? N.createElement(pn.Provider, {
            value: this.props.routeContext
        }, N.createElement(Rd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function PT({routeContext: s, match: e, children: i}) {
    let r = N.useContext(la);
    return r && r.static && r.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = e.route.id),
    N.createElement(pn.Provider, {
        value: s
    }, i)
}
function jT(s, e=[], i=null, r=null) {
    if (s == null) {
        if (!i)
            return null;
        if (i.errors)
            s = i.matches;
        else if (e.length === 0 && !i.initialized && i.matches.length > 0)
            s = i.matches;
        else
            return null
    }
    let o = s
      , c = i == null ? void 0 : i.errors;
    if (c != null) {
        let p = o.findIndex(m => m.route.id && (c == null ? void 0 : c[m.route.id]) !== void 0);
        je(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),
        o = o.slice(0, Math.min(o.length, p + 1))
    }
    let d = !1
      , h = -1;
    if (i)
        for (let p = 0; p < o.length; p++) {
            let m = o[p];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p),
            m.route.id) {
                let {loaderData: y, errors: E} = i
                  , v = m.route.loader && !y.hasOwnProperty(m.route.id) && (!E || E[m.route.id] === void 0);
                if (m.route.lazy || v) {
                    d = !0,
                    h >= 0 ? o = o.slice(0, h + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (p, m, y) => {
        let E, v = !1, x = null, A = null;
        i && (E = c && m.route.id ? c[m.route.id] : void 0,
        x = m.route.errorElement || LT,
        d && (h < 0 && y === 0 ? (ty("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        v = !0,
        A = null) : h === y && (v = !0,
        A = m.route.hydrateFallbackElement || null)));
        let U = e.concat(o.slice(0, y + 1))
          , B = () => {
            let H;
            return E ? H = x : v ? H = A : m.route.Component ? H = N.createElement(m.route.Component, null) : m.route.element ? H = m.route.element : H = p,
            N.createElement(PT, {
                match: m,
                routeContext: {
                    outlet: p,
                    matches: U,
                    isDataRoute: i != null
                },
                children: H
            })
        }
        ;
        return i && (m.route.ErrorBoundary || m.route.errorElement || y === 0) ? N.createElement(UT, {
            location: i.location,
            revalidation: i.revalidation,
            component: x,
            error: E,
            children: B(),
            routeContext: {
                outlet: null,
                matches: U,
                isDataRoute: !0
            }
        }) : B()
    }
    , null)
}
function xd(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function zT(s) {
    let e = N.useContext(la);
    return je(e, xd(s)),
    e
}
function HT(s) {
    let e = N.useContext(Jo);
    return je(e, xd(s)),
    e
}
function BT(s) {
    let e = N.useContext(pn);
    return je(e, xd(s)),
    e
}
function Od(s) {
    let e = BT(s)
      , i = e.matches[e.matches.length - 1];
    return je(i.route.id, `${s} can only be used on routes that contain a unique "id"`),
    i.route.id
}
function qT() {
    return Od("useRouteId")
}
function VT() {
    var r;
    let s = N.useContext(Rd)
      , e = HT("useRouteError")
      , i = Od("useRouteError");
    return s !== void 0 ? s : (r = e.errors) == null ? void 0 : r[i]
}
function GT() {
    let {router: s} = zT("useNavigate")
      , e = Od("useNavigate")
      , i = N.useRef(!1);
    return Jv( () => {
        i.current = !0
    }
    ),
    N.useCallback(async (o, c={}) => {
        sn(i.current, Zv),
        i.current && (typeof o == "number" ? s.navigate(o) : await s.navigate(o, {
            fromRouteId: e,
            ...c
        }))
    }
    , [s, e])
}
var D_ = {};
function ty(s, e, i) {
    !e && !D_[s] && (D_[s] = !0,
    sn(!1, i))
}
N.memo(YT);
function YT({routes: s, future: e, state: i}) {
    return ey(s, void 0, i, e)
}
function FT({to: s, replace: e, state: i, relative: r}) {
    je(oa(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: o} = N.useContext(an);
    sn(!o, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: c} = N.useContext(pn)
      , {pathname: d} = Ai()
      , h = Nd()
      , p = Ad(s, wd(c), d, r === "path")
      , m = JSON.stringify(p);
    return N.useEffect( () => {
        h(JSON.parse(m), {
            replace: e,
            state: i,
            relative: r
        })
    }
    , [h, m, r, e, i]),
    null
}
function td(s) {
    je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function KT({basename: s="/", children: e=null, location: i, navigationType: r="POP", navigator: o, static: c=!1}) {
    je(!oa(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = s.replace(/^\/*/, "/")
      , h = N.useMemo( () => ({
        basename: d,
        navigator: o,
        static: c,
        future: {}
    }), [d, o, c]);
    typeof i == "string" && (i = ra(i));
    let {pathname: p="/", search: m="", hash: y="", state: E=null, key: v="default"} = i
      , x = N.useMemo( () => {
        let A = Un(p, d);
        return A == null ? null : {
            location: {
                pathname: A,
                search: m,
                hash: y,
                state: E,
                key: v
            },
            navigationType: r
        }
    }
    , [d, p, m, y, E, v, r]);
    return sn(x != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),
    x == null ? null : N.createElement(an.Provider, {
        value: h
    }, N.createElement(Vr.Provider, {
        children: e,
        value: x
    }))
}
function QT({children: s, location: e}) {
    return MT(nd(s), e)
}
function nd(s, e=[]) {
    let i = [];
    return N.Children.forEach(s, (r, o) => {
        if (!N.isValidElement(r))
            return;
        let c = [...e, o];
        if (r.type === N.Fragment) {
            i.push.apply(i, nd(r.props.children, c));
            return
        }
        je(r.type === td, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        je(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let d = {
            id: r.props.id || c.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (d.children = nd(r.props.children, c)),
        i.push(d)
    }
    ),
    i
}
var To = "get"
  , Co = "application/x-www-form-urlencoded";
function ec(s) {
    return s != null && typeof s.tagName == "string"
}
function XT(s) {
    return ec(s) && s.tagName.toLowerCase() === "button"
}
function WT(s) {
    return ec(s) && s.tagName.toLowerCase() === "form"
}
function $T(s) {
    return ec(s) && s.tagName.toLowerCase() === "input"
}
function ZT(s) {
    return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey)
}
function JT(s, e) {
    return s.button === 0 && (!e || e === "_self") && !ZT(s)
}
var vo = null;
function eC() {
    if (vo === null)
        try {
            new FormData(document.createElement("form"),0),
            vo = !1
        } catch {
            vo = !0
        }
    return vo
}
var tC = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function zf(s) {
    return s != null && !tC.has(s) ? (sn(!1, `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Co}"`),
    null) : s
}
function nC(s, e) {
    let i, r, o, c, d;
    if (WT(s)) {
        let h = s.getAttribute("action");
        r = h ? Un(h, e) : null,
        i = s.getAttribute("method") || To,
        o = zf(s.getAttribute("enctype")) || Co,
        c = new FormData(s)
    } else if (XT(s) || $T(s) && (s.type === "submit" || s.type === "image")) {
        let h = s.form;
        if (h == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = s.getAttribute("formaction") || h.getAttribute("action");
        if (r = p ? Un(p, e) : null,
        i = s.getAttribute("formmethod") || h.getAttribute("method") || To,
        o = zf(s.getAttribute("formenctype")) || zf(h.getAttribute("enctype")) || Co,
        c = new FormData(h,s),
        !eC()) {
            let {name: m, type: y, value: E} = s;
            if (y === "image") {
                let v = m ? `${m}.` : "";
                c.append(`${v}x`, "0"),
                c.append(`${v}y`, "0")
            } else
                m && c.append(m, E)
        }
    } else {
        if (ec(s))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        i = To,
        r = null,
        o = Co,
        d = s
    }
    return c && o === "text/plain" && (d = c,
    c = void 0),
    {
        action: r,
        method: i.toLowerCase(),
        encType: o,
        formData: c,
        body: d
    }
}
function Id(s, e) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(e)
}
async function iC(s, e) {
    if (s.id in e)
        return e[s.id];
    try {
        let i = await import(s.module);
        return e[s.id] = i,
        i
    } catch (i) {
        return console.error(`Error loading route module \`${s.module}\`, reloading page...`),
        console.error(i),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function sC(s) {
    return s == null ? !1 : s.href == null ? s.rel === "preload" && typeof s.imageSrcSet == "string" && typeof s.imageSizes == "string" : typeof s.rel == "string" && typeof s.href == "string"
}
async function aC(s, e, i) {
    let r = await Promise.all(s.map(async o => {
        let c = e.routes[o.route.id];
        if (c) {
            let d = await iC(c, i);
            return d.links ? d.links() : []
        }
        return []
    }
    ));
    return cC(r.flat(1).filter(sC).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function M_(s, e, i, r, o, c) {
    let d = (p, m) => i[m] ? p.route.id !== i[m].route.id : !0
      , h = (p, m) => {
        var y;
        return i[m].pathname !== p.pathname || ((y = i[m].route.path) == null ? void 0 : y.endsWith("*")) && i[m].params["*"] !== p.params["*"]
    }
    ;
    return c === "assets" ? e.filter( (p, m) => d(p, m) || h(p, m)) : c === "data" ? e.filter( (p, m) => {
        var E;
        let y = r.routes[p.route.id];
        if (!y || !y.hasLoader)
            return !1;
        if (d(p, m) || h(p, m))
            return !0;
        if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash,window.origin),
                currentParams: ((E = i[0]) == null ? void 0 : E.params) || {},
                nextUrl: new URL(s,window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function rC(s, e, {includeHydrateFallback: i}={}) {
    return lC(s.map(r => {
        let o = e.routes[r.route.id];
        if (!o)
            return [];
        let c = [o.module];
        return o.clientActionModule && (c = c.concat(o.clientActionModule)),
        o.clientLoaderModule && (c = c.concat(o.clientLoaderModule)),
        i && o.hydrateFallbackModule && (c = c.concat(o.hydrateFallbackModule)),
        o.imports && (c = c.concat(o.imports)),
        c
    }
    ).flat(1))
}
function lC(s) {
    return [...new Set(s)]
}
function oC(s) {
    let e = {}
      , i = Object.keys(s).sort();
    for (let r of i)
        e[r] = s[r];
    return e
}
function cC(s, e) {
    let i = new Set;
    return new Set(e),
    s.reduce( (r, o) => {
        let c = JSON.stringify(oC(o));
        return i.has(c) || (i.add(c),
        r.push({
            key: c,
            link: o
        })),
        r
    }
    , [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var uC = new Set([100, 101, 204, 205]);
function fC(s, e) {
    let i = typeof s == "string" ? new URL(s,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : s;
    return i.pathname === "/" ? i.pathname = "_root.data" : e && Un(i.pathname, e) === "/" ? i.pathname = `${e.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`,
    i
}
function ny() {
    let s = N.useContext(la);
    return Id(s, "You must render this element inside a <DataRouterContext.Provider> element"),
    s
}
function dC() {
    let s = N.useContext(Jo);
    return Id(s, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    s
}
var Dd = N.createContext(void 0);
Dd.displayName = "FrameworkContext";
function iy() {
    let s = N.useContext(Dd);
    return Id(s, "You must render this element inside a <HydratedRouter> element"),
    s
}
function hC(s, e) {
    let i = N.useContext(Dd)
      , [r,o] = N.useState(!1)
      , [c,d] = N.useState(!1)
      , {onFocus: h, onBlur: p, onMouseEnter: m, onMouseLeave: y, onTouchStart: E} = e
      , v = N.useRef(null);
    N.useEffect( () => {
        if (s === "render" && d(!0),
        s === "viewport") {
            let U = H => {
                H.forEach(q => {
                    d(q.isIntersecting)
                }
                )
            }
              , B = new IntersectionObserver(U,{
                threshold: .5
            });
            return v.current && B.observe(v.current),
            () => {
                B.disconnect()
            }
        }
    }
    , [s]),
    N.useEffect( () => {
        if (r) {
            let U = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(U)
            }
        }
    }
    , [r]);
    let x = () => {
        o(!0)
    }
      , A = () => {
        o(!1),
        d(!1)
    }
    ;
    return i ? s !== "intent" ? [c, v, {}] : [c, v, {
        onFocus: gr(h, x),
        onBlur: gr(p, A),
        onMouseEnter: gr(m, x),
        onMouseLeave: gr(y, A),
        onTouchStart: gr(E, x)
    }] : [!1, v, {}]
}
function gr(s, e) {
    return i => {
        s && s(i),
        i.defaultPrevented || e(i)
    }
}
function pC({page: s, ...e}) {
    let {router: i} = ny()
      , r = N.useMemo( () => Kv(i.routes, s, i.basename), [i.routes, s, i.basename]);
    return r ? N.createElement(gC, {
        page: s,
        matches: r,
        ...e
    }) : null
}
function mC(s) {
    let {manifest: e, routeModules: i} = iy()
      , [r,o] = N.useState([]);
    return N.useEffect( () => {
        let c = !1;
        return aC(s, e, i).then(d => {
            c || o(d)
        }
        ),
        () => {
            c = !0
        }
    }
    , [s, e, i]),
    r
}
function gC({page: s, matches: e, ...i}) {
    let r = Ai()
      , {manifest: o, routeModules: c} = iy()
      , {basename: d} = ny()
      , {loaderData: h, matches: p} = dC()
      , m = N.useMemo( () => M_(s, e, p, o, r, "data"), [s, e, p, o, r])
      , y = N.useMemo( () => M_(s, e, p, o, r, "assets"), [s, e, p, o, r])
      , E = N.useMemo( () => {
        if (s === r.pathname + r.search + r.hash)
            return [];
        let A = new Set
          , U = !1;
        if (e.forEach(H => {
            var Y;
            let q = o.routes[H.route.id];
            !q || !q.hasLoader || (!m.some(W => W.route.id === H.route.id) && H.route.id in h && ((Y = c[H.route.id]) != null && Y.shouldRevalidate) || q.hasClientLoader ? U = !0 : A.add(H.route.id))
        }
        ),
        A.size === 0)
            return [];
        let B = fC(s, d);
        return U && A.size > 0 && B.searchParams.set("_routes", e.filter(H => A.has(H.route.id)).map(H => H.route.id).join(",")),
        [B.pathname + B.search]
    }
    , [d, h, r, o, m, e, s, c])
      , v = N.useMemo( () => rC(y, o), [y, o])
      , x = mC(y);
    return N.createElement(N.Fragment, null, E.map(A => N.createElement("link", {
        key: A,
        rel: "prefetch",
        as: "fetch",
        href: A,
        ...i
    })), v.map(A => N.createElement("link", {
        key: A,
        rel: "modulepreload",
        href: A,
        ...i
    })), x.map( ({key: A, link: U}) => N.createElement("link", {
        key: A,
        ...U
    })))
}
function _C(...s) {
    return e => {
        s.forEach(i => {
            typeof i == "function" ? i(e) : i != null && (i.current = e)
        }
        )
    }
}
var sy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    sy && (window.__reactRouterVersion = "7.6.2")
} catch {}
function vC({basename: s, children: e, window: i}) {
    let r = N.useRef();
    r.current == null && (r.current = sT({
        window: i,
        v5Compat: !0
    }));
    let o = r.current
      , [c,d] = N.useState({
        action: o.action,
        location: o.location
    })
      , h = N.useCallback(p => {
        N.startTransition( () => d(p))
    }
    , [d]);
    return N.useLayoutEffect( () => o.listen(h), [o, h]),
    N.createElement(KT, {
        basename: s,
        children: e,
        location: c.location,
        navigationType: c.action,
        navigator: o
    })
}
var ay = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ry = N.forwardRef(function({onClick: e, discover: i="render", prefetch: r="none", relative: o, reloadDocument: c, replace: d, state: h, target: p, to: m, preventScrollReset: y, viewTransition: E, ...v}, x) {
    let {basename: A} = N.useContext(an), U = typeof m == "string" && ay.test(m), B, H = !1;
    if (typeof m == "string" && U && (B = m,
    sy))
        try {
            let he = new URL(window.location.href)
              , _e = m.startsWith("//") ? new URL(he.protocol + m) : new URL(m)
              , ut = Un(_e.pathname, A);
            _e.origin === he.origin && ut != null ? m = ut + _e.search + _e.hash : H = !0
        } catch {
            sn(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let q = IT(m, {
        relative: o
    })
      , [Y,W,K] = hC(r, v)
      , ve = SC(m, {
        replace: d,
        state: h,
        target: p,
        preventScrollReset: y,
        relative: o,
        viewTransition: E
    });
    function Te(he) {
        e && e(he),
        he.defaultPrevented || ve(he)
    }
    let me = N.createElement("a", {
        ...v,
        ...K,
        href: B || q,
        onClick: H || c ? e : Te,
        ref: _C(x, W),
        target: p,
        "data-discover": !U && i === "render" ? "true" : void 0
    });
    return Y && !U ? N.createElement(N.Fragment, null, me, N.createElement(pC, {
        page: q
    })) : me
});
ry.displayName = "Link";
var yC = N.forwardRef(function({"aria-current": e="page", caseSensitive: i=!1, className: r="", end: o=!1, style: c, to: d, viewTransition: h, children: p, ...m}, y) {
    let E = Gr(d, {
        relative: m.relative
    })
      , v = Ai()
      , x = N.useContext(Jo)
      , {navigator: A, basename: U} = N.useContext(an)
      , B = x != null && RC(E) && h === !0
      , H = A.encodeLocation ? A.encodeLocation(E).pathname : E.pathname
      , q = v.pathname
      , Y = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    i || (q = q.toLowerCase(),
    Y = Y ? Y.toLowerCase() : null,
    H = H.toLowerCase()),
    Y && U && (Y = Un(Y, U) || Y);
    const W = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
    let K = q === H || !o && q.startsWith(H) && q.charAt(W) === "/", ve = Y != null && (Y === H || !o && Y.startsWith(H) && Y.charAt(H.length) === "/"), Te = {
        isActive: K,
        isPending: ve,
        isTransitioning: B
    }, me = K ? e : void 0, he;
    typeof r == "function" ? he = r(Te) : he = [r, K ? "active" : null, ve ? "pending" : null, B ? "transitioning" : null].filter(Boolean).join(" ");
    let _e = typeof c == "function" ? c(Te) : c;
    return N.createElement(ry, {
        ...m,
        "aria-current": me,
        className: he,
        ref: y,
        style: _e,
        to: d,
        viewTransition: h
    }, typeof p == "function" ? p(Te) : p)
});
yC.displayName = "NavLink";
var EC = N.forwardRef( ({discover: s="render", fetcherKey: e, navigate: i, reloadDocument: r, replace: o, state: c, method: d=To, action: h, onSubmit: p, relative: m, preventScrollReset: y, viewTransition: E, ...v}, x) => {
    let A = wC()
      , U = AC(h, {
        relative: m
    })
      , B = d.toLowerCase() === "get" ? "get" : "post"
      , H = typeof h == "string" && ay.test(h)
      , q = Y => {
        if (p && p(Y),
        Y.defaultPrevented)
            return;
        Y.preventDefault();
        let W = Y.nativeEvent.submitter
          , K = (W == null ? void 0 : W.getAttribute("formmethod")) || d;
        A(W || Y.currentTarget, {
            fetcherKey: e,
            method: K,
            navigate: i,
            replace: o,
            state: c,
            relative: m,
            preventScrollReset: y,
            viewTransition: E
        })
    }
    ;
    return N.createElement("form", {
        ref: x,
        method: B,
        action: U,
        onSubmit: r ? p : q,
        ...v,
        "data-discover": !H && s === "render" ? "true" : void 0
    })
}
);
EC.displayName = "Form";
function bC(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function ly(s) {
    let e = N.useContext(la);
    return je(e, bC(s)),
    e
}
function SC(s, {target: e, replace: i, state: r, preventScrollReset: o, relative: c, viewTransition: d}={}) {
    let h = Nd()
      , p = Ai()
      , m = Gr(s, {
        relative: c
    });
    return N.useCallback(y => {
        if (JT(y, e)) {
            y.preventDefault();
            let E = i !== void 0 ? i : Or(p) === Or(m);
            h(s, {
                replace: E,
                state: r,
                preventScrollReset: o,
                relative: c,
                viewTransition: d
            })
        }
    }
    , [p, h, m, i, r, e, s, o, c, d])
}
var TC = 0
  , CC = () => `__${String(++TC)}__`;
function wC() {
    let {router: s} = ly("useSubmit")
      , {basename: e} = N.useContext(an)
      , i = qT();
    return N.useCallback(async (r, o={}) => {
        let {action: c, method: d, encType: h, formData: p, body: m} = nC(r, e);
        if (o.navigate === !1) {
            let y = o.fetcherKey || CC();
            await s.fetch(y, i, o.action || c, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: m,
                formMethod: o.method || d,
                formEncType: o.encType || h,
                flushSync: o.flushSync
            })
        } else
            await s.navigate(o.action || c, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: m,
                formMethod: o.method || d,
                formEncType: o.encType || h,
                replace: o.replace,
                state: o.state,
                fromRouteId: i,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            })
    }
    , [s, e, i])
}
function AC(s, {relative: e}={}) {
    let {basename: i} = N.useContext(an)
      , r = N.useContext(pn);
    je(r, "useFormAction must be used inside a RouteContext");
    let[o] = r.matches.slice(-1)
      , c = {
        ...Gr(s || ".", {
            relative: e
        })
    }
      , d = Ai();
    if (s == null) {
        c.search = d.search;
        let h = new URLSearchParams(c.search)
          , p = h.getAll("index");
        if (p.some(y => y === "")) {
            h.delete("index"),
            p.filter(E => E).forEach(E => h.append("index", E));
            let y = h.toString();
            c.search = y ? `?${y}` : ""
        }
    }
    return (!s || s === ".") && o.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : kn([i, c.pathname])),
    Or(c)
}
function RC(s, e={}) {
    let i = N.useContext($v);
    je(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = ly("useViewTransitionState")
      , o = Gr(s, {
        relative: e.relative
    });
    if (!i.isTransitioning)
        return !1;
    let c = Un(i.currentLocation.pathname, r) || i.currentLocation.pathname
      , d = Un(i.nextLocation.pathname, r) || i.nextLocation.pathname;
    return Oo(o.pathname, d) != null || Oo(o.pathname, c) != null
}
[...uC];
const NC = () => {}
;
var k_ = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oy = {
    NODE_ADMIN: !1,
    SDK_VERSION: "${JSCORE_VERSION}"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G = function(s, e) {
    if (!s)
        throw ca(e)
}
  , ca = function(s) {
    return new Error("Firebase Database (" + oy.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + s)
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cy = function(s) {
    const e = [];
    let i = 0;
    for (let r = 0; r < s.length; r++) {
        let o = s.charCodeAt(r);
        o < 128 ? e[i++] = o : o < 2048 ? (e[i++] = o >> 6 | 192,
        e[i++] = o & 63 | 128) : (o & 64512) === 55296 && r + 1 < s.length && (s.charCodeAt(r + 1) & 64512) === 56320 ? (o = 65536 + ((o & 1023) << 10) + (s.charCodeAt(++r) & 1023),
        e[i++] = o >> 18 | 240,
        e[i++] = o >> 12 & 63 | 128,
        e[i++] = o >> 6 & 63 | 128,
        e[i++] = o & 63 | 128) : (e[i++] = o >> 12 | 224,
        e[i++] = o >> 6 & 63 | 128,
        e[i++] = o & 63 | 128)
    }
    return e
}
  , xC = function(s) {
    const e = [];
    let i = 0
      , r = 0;
    for (; i < s.length; ) {
        const o = s[i++];
        if (o < 128)
            e[r++] = String.fromCharCode(o);
        else if (o > 191 && o < 224) {
            const c = s[i++];
            e[r++] = String.fromCharCode((o & 31) << 6 | c & 63)
        } else if (o > 239 && o < 365) {
            const c = s[i++]
              , d = s[i++]
              , h = s[i++]
              , p = ((o & 7) << 18 | (c & 63) << 12 | (d & 63) << 6 | h & 63) - 65536;
            e[r++] = String.fromCharCode(55296 + (p >> 10)),
            e[r++] = String.fromCharCode(56320 + (p & 1023))
        } else {
            const c = s[i++]
              , d = s[i++];
            e[r++] = String.fromCharCode((o & 15) << 12 | (c & 63) << 6 | d & 63)
        }
    }
    return e.join("")
}
  , Md = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(s, e) {
        if (!Array.isArray(s))
            throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const i = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
          , r = [];
        for (let o = 0; o < s.length; o += 3) {
            const c = s[o]
              , d = o + 1 < s.length
              , h = d ? s[o + 1] : 0
              , p = o + 2 < s.length
              , m = p ? s[o + 2] : 0
              , y = c >> 2
              , E = (c & 3) << 4 | h >> 4;
            let v = (h & 15) << 2 | m >> 6
              , x = m & 63;
            p || (x = 64,
            d || (v = 64)),
            r.push(i[y], i[E], i[v], i[x])
        }
        return r.join("")
    },
    encodeString(s, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? btoa(s) : this.encodeByteArray(cy(s), e)
    },
    decodeString(s, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? atob(s) : xC(this.decodeStringToByteArray(s, e))
    },
    decodeStringToByteArray(s, e) {
        this.init_();
        const i = e ? this.charToByteMapWebSafe_ : this.charToByteMap_
          , r = [];
        for (let o = 0; o < s.length; ) {
            const c = i[s.charAt(o++)]
              , h = o < s.length ? i[s.charAt(o)] : 0;
            ++o;
            const m = o < s.length ? i[s.charAt(o)] : 64;
            ++o;
            const E = o < s.length ? i[s.charAt(o)] : 64;
            if (++o,
            c == null || h == null || m == null || E == null)
                throw new OC;
            const v = c << 2 | h >> 4;
            if (r.push(v),
            m !== 64) {
                const x = h << 4 & 240 | m >> 2;
                if (r.push(x),
                E !== 64) {
                    const A = m << 6 & 192 | E;
                    r.push(A)
                }
            }
        }
        return r
    },
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {},
            this.charToByteMap_ = {},
            this.byteToCharMapWebSafe_ = {},
            this.charToByteMapWebSafe_ = {};
            for (let s = 0; s < this.ENCODED_VALS.length; s++)
                this.byteToCharMap_[s] = this.ENCODED_VALS.charAt(s),
                this.charToByteMap_[this.byteToCharMap_[s]] = s,
                this.byteToCharMapWebSafe_[s] = this.ENCODED_VALS_WEBSAFE.charAt(s),
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]] = s,
                s >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)] = s,
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)] = s)
        }
    }
};
class OC extends Error {
    constructor() {
        super(...arguments),
        this.name = "DecodeBase64StringError"
    }
}
const uy = function(s) {
    const e = cy(s);
    return Md.encodeByteArray(e, !0)
}
  , Io = function(s) {
    return uy(s).replace(/\./g, "")
}
  , Do = function(s) {
    try {
        return Md.decodeString(s, !0)
    } catch (e) {
        console.error("base64Decode failed: ", e)
    }
    return null
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function IC(s) {
    return fy(void 0, s)
}
function fy(s, e) {
    if (!(e instanceof Object))
        return e;
    switch (e.constructor) {
    case Date:
        const i = e;
        return new Date(i.getTime());
    case Object:
        s === void 0 && (s = {});
        break;
    case Array:
        s = [];
        break;
    default:
        return e
    }
    for (const i in e)
        !e.hasOwnProperty(i) || !DC(i) || (s[i] = fy(s[i], e[i]));
    return s
}
function DC(s) {
    return s !== "__proto__"
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function MC() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kC = () => MC().__FIREBASE_DEFAULTS__
  , LC = () => {
    if (typeof process > "u" || typeof k_ > "u")
        return;
    const s = k_.__FIREBASE_DEFAULTS__;
    if (s)
        return JSON.parse(s)
}
  , UC = () => {
    if (typeof document > "u")
        return;
    let s;
    try {
        s = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
        return
    }
    const e = s && Do(s[1]);
    return e && JSON.parse(e)
}
  , kd = () => {
    try {
        return NC() || kC() || LC() || UC()
    } catch (s) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);
        return
    }
}
  , dy = s => {
    var e, i;
    return (i = (e = kd()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || i === void 0 ? void 0 : i[s]
}
  , PC = s => {
    const e = dy(s);
    if (!e)
        return;
    const i = e.lastIndexOf(":");
    if (i <= 0 || i + 1 === e.length)
        throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(i + 1), 10);
    return e[0] === "[" ? [e.substring(1, i - 1), r] : [e.substring(0, i), r]
}
  , hy = () => {
    var s;
    return (s = kd()) === null || s === void 0 ? void 0 : s.config
}
  , py = s => {
    var e;
    return (e = kd()) === null || e === void 0 ? void 0 : e[`_${s}`]
}
;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc {
    constructor() {
        this.reject = () => {}
        ,
        this.resolve = () => {}
        ,
        this.promise = new Promise( (e, i) => {
            this.resolve = e,
            this.reject = i
        }
        )
    }
    wrapCallback(e) {
        return (i, r) => {
            i ? this.reject(i) : this.resolve(r),
            typeof e == "function" && (this.promise.catch( () => {}
            ),
            e.length === 1 ? e(i) : e(i, r))
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(s) {
    return s.endsWith(".cloudworkstations.dev")
}
async function my(s) {
    return (await fetch(s, {
        credentials: "include"
    })).ok
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jC(s, e) {
    if (s.uid)
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const i = {
        alg: "none",
        type: "JWT"
    }
      , r = e || "demo-project"
      , o = s.iat || 0
      , c = s.sub || s.user_id;
    if (!c)
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const d = Object.assign({
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: o,
        exp: o + 3600,
        auth_time: o,
        sub: c,
        user_id: c,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, s);
    return [Io(JSON.stringify(i)), Io(JSON.stringify(d)), ""].join(".")
}
const Tr = {};
function zC() {
    const s = {
        prod: [],
        emulator: []
    };
    for (const e of Object.keys(Tr))
        Tr[e] ? s.emulator.push(e) : s.prod.push(e);
    return s
}
function HC(s) {
    let e = document.getElementById(s)
      , i = !1;
    return e || (e = document.createElement("div"),
    e.setAttribute("id", s),
    i = !0),
    {
        created: i,
        element: e
    }
}
let L_ = !1;
function gy(s, e) {
    if (typeof window > "u" || typeof document > "u" || !Yr(window.location.host) || Tr[s] === e || Tr[s] || L_)
        return;
    Tr[s] = e;
    function i(v) {
        return `__firebase__banner__${v}`
    }
    const r = "__firebase__banner"
      , c = zC().prod.length > 0;
    function d() {
        const v = document.getElementById(r);
        v && v.remove()
    }
    function h(v) {
        v.style.display = "flex",
        v.style.background = "#7faaf0",
        v.style.position = "fixed",
        v.style.bottom = "5px",
        v.style.left = "5px",
        v.style.padding = ".5em",
        v.style.borderRadius = "5px",
        v.style.alignItems = "center"
    }
    function p(v, x) {
        v.setAttribute("width", "24"),
        v.setAttribute("id", x),
        v.setAttribute("height", "24"),
        v.setAttribute("viewBox", "0 0 24 24"),
        v.setAttribute("fill", "none"),
        v.style.marginLeft = "-6px"
    }
    function m() {
        const v = document.createElement("span");
        return v.style.cursor = "pointer",
        v.style.marginLeft = "16px",
        v.style.fontSize = "24px",
        v.innerHTML = " &times;",
        v.onclick = () => {
            L_ = !0,
            d()
        }
        ,
        v
    }
    function y(v, x) {
        v.setAttribute("id", x),
        v.innerText = "Learn more",
        v.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend",
        v.setAttribute("target", "__blank"),
        v.style.paddingLeft = "5px",
        v.style.textDecoration = "underline"
    }
    function E() {
        const v = HC(r)
          , x = i("text")
          , A = document.getElementById(x) || document.createElement("span")
          , U = i("learnmore")
          , B = document.getElementById(U) || document.createElement("a")
          , H = i("preprendIcon")
          , q = document.getElementById(H) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (v.created) {
            const Y = v.element;
            h(Y),
            y(B, U);
            const W = m();
            p(q, H),
            Y.append(q, A, B, W),
            document.body.appendChild(Y)
        }
        c ? (A.innerText = "Preview backend disconnected.",
        q.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (q.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,
        A.innerText = "Preview backend running in this workspace."),
        A.setAttribute("id", x)
    }
    document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", E) : E()
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function Ld() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())
}
function BC() {
    return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"
}
function qC() {
    const s = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof s == "object" && s.id !== void 0
}
function _y() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function VC() {
    const s = _t();
    return s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0
}
function GC() {
    return oy.NODE_ADMIN === !0
}
function YC() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function FC() {
    return new Promise( (s, e) => {
        try {
            let i = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module"
              , o = self.indexedDB.open(r);
            o.onsuccess = () => {
                o.result.close(),
                i || self.indexedDB.deleteDatabase(r),
                s(!0)
            }
            ,
            o.onupgradeneeded = () => {
                i = !1
            }
            ,
            o.onerror = () => {
                var c;
                e(((c = o.error) === null || c === void 0 ? void 0 : c.message) || "")
            }
        } catch (i) {
            e(i)
        }
    }
    )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const KC = "FirebaseError";
class Ri extends Error {
    constructor(e, i, r) {
        super(i),
        this.code = e,
        this.customData = r,
        this.name = KC,
        Object.setPrototypeOf(this, Ri.prototype),
        Error.captureStackTrace && Error.captureStackTrace(this, Fr.prototype.create)
    }
}
class Fr {
    constructor(e, i, r) {
        this.service = e,
        this.serviceName = i,
        this.errors = r
    }
    create(e, ...i) {
        const r = i[0] || {}
          , o = `${this.service}/${e}`
          , c = this.errors[e]
          , d = c ? QC(c, r) : "Error"
          , h = `${this.serviceName}: ${d} (${o}).`;
        return new Ri(o,h,r)
    }
}
function QC(s, e) {
    return s.replace(XC, (i, r) => {
        const o = e[r];
        return o != null ? String(o) : `<${r}?>`
    }
    )
}
const XC = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ir(s) {
    return JSON.parse(s)
}
function Ze(s) {
    return JSON.stringify(s)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vy = function(s) {
    let e = {}
      , i = {}
      , r = {}
      , o = "";
    try {
        const c = s.split(".");
        e = Ir(Do(c[0]) || ""),
        i = Ir(Do(c[1]) || ""),
        o = c[2],
        r = i.d || {},
        delete i.d
    } catch {}
    return {
        header: e,
        claims: i,
        data: r,
        signature: o
    }
}
  , WC = function(s) {
    const e = vy(s)
      , i = e.claims;
    return !!i && typeof i == "object" && i.hasOwnProperty("iat")
}
  , $C = function(s) {
    const e = vy(s).claims;
    return typeof e == "object" && e.admin === !0
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hn(s, e) {
    return Object.prototype.hasOwnProperty.call(s, e)
}
function ea(s, e) {
    if (Object.prototype.hasOwnProperty.call(s, e))
        return s[e]
}
function id(s) {
    for (const e in s)
        if (Object.prototype.hasOwnProperty.call(s, e))
            return !1;
    return !0
}
function Mo(s, e, i) {
    const r = {};
    for (const o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (r[o] = e.call(i, s[o], o, s));
    return r
}
function Zi(s, e) {
    if (s === e)
        return !0;
    const i = Object.keys(s)
      , r = Object.keys(e);
    for (const o of i) {
        if (!r.includes(o))
            return !1;
        const c = s[o]
          , d = e[o];
        if (U_(c) && U_(d)) {
            if (!Zi(c, d))
                return !1
        } else if (c !== d)
            return !1
    }
    for (const o of r)
        if (!i.includes(o))
            return !1;
    return !0
}
function U_(s) {
    return s !== null && typeof s == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(s) {
    const e = [];
    for (const [i,r] of Object.entries(s))
        Array.isArray(r) ? r.forEach(o => {
            e.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))
        }
        ) : e.push(encodeURIComponent(i) + "=" + encodeURIComponent(r));
    return e.length ? "&" + e.join("&") : ""
}
function br(s) {
    const e = {};
    return s.replace(/^\?/, "").split("&").forEach(r => {
        if (r) {
            const [o,c] = r.split("=");
            e[decodeURIComponent(o)] = decodeURIComponent(c)
        }
    }
    ),
    e
}
function Sr(s) {
    const e = s.indexOf("?");
    if (!e)
        return "";
    const i = s.indexOf("#", e);
    return s.substring(e, i > 0 ? i : void 0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ZC {
    constructor() {
        this.chain_ = [],
        this.buf_ = [],
        this.W_ = [],
        this.pad_ = [],
        this.inbuf_ = 0,
        this.total_ = 0,
        this.blockSize = 512 / 8,
        this.pad_[0] = 128;
        for (let e = 1; e < this.blockSize; ++e)
            this.pad_[e] = 0;
        this.reset()
    }
    reset() {
        this.chain_[0] = 1732584193,
        this.chain_[1] = 4023233417,
        this.chain_[2] = 2562383102,
        this.chain_[3] = 271733878,
        this.chain_[4] = 3285377520,
        this.inbuf_ = 0,
        this.total_ = 0
    }
    compress_(e, i) {
        i || (i = 0);
        const r = this.W_;
        if (typeof e == "string")
            for (let E = 0; E < 16; E++)
                r[E] = e.charCodeAt(i) << 24 | e.charCodeAt(i + 1) << 16 | e.charCodeAt(i + 2) << 8 | e.charCodeAt(i + 3),
                i += 4;
        else
            for (let E = 0; E < 16; E++)
                r[E] = e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3],
                i += 4;
        for (let E = 16; E < 80; E++) {
            const v = r[E - 3] ^ r[E - 8] ^ r[E - 14] ^ r[E - 16];
            r[E] = (v << 1 | v >>> 31) & 4294967295
        }
        let o = this.chain_[0], c = this.chain_[1], d = this.chain_[2], h = this.chain_[3], p = this.chain_[4], m, y;
        for (let E = 0; E < 80; E++) {
            E < 40 ? E < 20 ? (m = h ^ c & (d ^ h),
            y = 1518500249) : (m = c ^ d ^ h,
            y = 1859775393) : E < 60 ? (m = c & d | h & (c | d),
            y = 2400959708) : (m = c ^ d ^ h,
            y = 3395469782);
            const v = (o << 5 | o >>> 27) + m + p + y + r[E] & 4294967295;
            p = h,
            h = d,
            d = (c << 30 | c >>> 2) & 4294967295,
            c = o,
            o = v
        }
        this.chain_[0] = this.chain_[0] + o & 4294967295,
        this.chain_[1] = this.chain_[1] + c & 4294967295,
        this.chain_[2] = this.chain_[2] + d & 4294967295,
        this.chain_[3] = this.chain_[3] + h & 4294967295,
        this.chain_[4] = this.chain_[4] + p & 4294967295
    }
    update(e, i) {
        if (e == null)
            return;
        i === void 0 && (i = e.length);
        const r = i - this.blockSize;
        let o = 0;
        const c = this.buf_;
        let d = this.inbuf_;
        for (; o < i; ) {
            if (d === 0)
                for (; o <= r; )
                    this.compress_(e, o),
                    o += this.blockSize;
            if (typeof e == "string") {
                for (; o < i; )
                    if (c[d] = e.charCodeAt(o),
                    ++d,
                    ++o,
                    d === this.blockSize) {
                        this.compress_(c),
                        d = 0;
                        break
                    }
            } else
                for (; o < i; )
                    if (c[d] = e[o],
                    ++d,
                    ++o,
                    d === this.blockSize) {
                        this.compress_(c),
                        d = 0;
                        break
                    }
        }
        this.inbuf_ = d,
        this.total_ += i
    }
    digest() {
        const e = [];
        let i = this.total_ * 8;
        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        for (let o = this.blockSize - 1; o >= 56; o--)
            this.buf_[o] = i & 255,
            i /= 256;
        this.compress_(this.buf_);
        let r = 0;
        for (let o = 0; o < 5; o++)
            for (let c = 24; c >= 0; c -= 8)
                e[r] = this.chain_[o] >> c & 255,
                ++r;
        return e
    }
}
function JC(s, e) {
    const i = new e1(s,e);
    return i.subscribe.bind(i)
}
class e1 {
    constructor(e, i) {
        this.observers = [],
        this.unsubscribes = [],
        this.observerCount = 0,
        this.task = Promise.resolve(),
        this.finalized = !1,
        this.onNoObservers = i,
        this.task.then( () => {
            e(this)
        }
        ).catch(r => {
            this.error(r)
        }
        )
    }
    next(e) {
        this.forEachObserver(i => {
            i.next(e)
        }
        )
    }
    error(e) {
        this.forEachObserver(i => {
            i.error(e)
        }
        ),
        this.close(e)
    }
    complete() {
        this.forEachObserver(e => {
            e.complete()
        }
        ),
        this.close()
    }
    subscribe(e, i, r) {
        let o;
        if (e === void 0 && i === void 0 && r === void 0)
            throw new Error("Missing Observer.");
        t1(e, ["next", "error", "complete"]) ? o = e : o = {
            next: e,
            error: i,
            complete: r
        },
        o.next === void 0 && (o.next = Hf),
        o.error === void 0 && (o.error = Hf),
        o.complete === void 0 && (o.complete = Hf);
        const c = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then( () => {
            try {
                this.finalError ? o.error(this.finalError) : o.complete()
            } catch {}
        }
        ),
        this.observers.push(o),
        c
    }
    unsubscribeOne(e) {
        this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e],
        this.observerCount -= 1,
        this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(e) {
        if (!this.finalized)
            for (let i = 0; i < this.observers.length; i++)
                this.sendOne(i, e)
    }
    sendOne(e, i) {
        this.task.then( () => {
            if (this.observers !== void 0 && this.observers[e] !== void 0)
                try {
                    i(this.observers[e])
                } catch (r) {
                    typeof console < "u" && console.error && console.error(r)
                }
        }
        )
    }
    close(e) {
        this.finalized || (this.finalized = !0,
        e !== void 0 && (this.finalError = e),
        this.task.then( () => {
            this.observers = void 0,
            this.onNoObservers = void 0
        }
        ))
    }
}
function t1(s, e) {
    if (typeof s != "object" || s === null)
        return !1;
    for (const i of e)
        if (i in s && typeof s[i] == "function")
            return !0;
    return !1
}
function Hf() {}
function Ud(s, e) {
    return `${s} failed: ${e} argument `
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n1 = function(s) {
    const e = [];
    let i = 0;
    for (let r = 0; r < s.length; r++) {
        let o = s.charCodeAt(r);
        if (o >= 55296 && o <= 56319) {
            const c = o - 55296;
            r++,
            G(r < s.length, "Surrogate pair missing trail surrogate.");
            const d = s.charCodeAt(r) - 56320;
            o = 65536 + (c << 10) + d
        }
        o < 128 ? e[i++] = o : o < 2048 ? (e[i++] = o >> 6 | 192,
        e[i++] = o & 63 | 128) : o < 65536 ? (e[i++] = o >> 12 | 224,
        e[i++] = o >> 6 & 63 | 128,
        e[i++] = o & 63 | 128) : (e[i++] = o >> 18 | 240,
        e[i++] = o >> 12 & 63 | 128,
        e[i++] = o >> 6 & 63 | 128,
        e[i++] = o & 63 | 128)
    }
    return e
}
  , nc = function(s) {
    let e = 0;
    for (let i = 0; i < s.length; i++) {
        const r = s.charCodeAt(i);
        r < 128 ? e++ : r < 2048 ? e += 2 : r >= 55296 && r <= 56319 ? (e += 4,
        i++) : e += 3
    }
    return e
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(s) {
    return s && s._delegate ? s._delegate : s
}
class Ji {
    constructor(e, i, r) {
        this.name = e,
        this.instanceFactory = i,
        this.type = r,
        this.multipleInstances = !1,
        this.serviceProps = {},
        this.instantiationMode = "LAZY",
        this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e,
        this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e,
        this
    }
    setServiceProps(e) {
        return this.serviceProps = e,
        this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e,
        this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ki = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i1 {
    constructor(e, i) {
        this.name = e,
        this.container = i,
        this.component = null,
        this.instances = new Map,
        this.instancesDeferred = new Map,
        this.instancesOptions = new Map,
        this.onInitCallbacks = new Map
    }
    get(e) {
        const i = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(i)) {
            const r = new tc;
            if (this.instancesDeferred.set(i, r),
            this.isInitialized(i) || this.shouldAutoInitialize())
                try {
                    const o = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    o && r.resolve(o)
                } catch {}
        }
        return this.instancesDeferred.get(i).promise
    }
    getImmediate(e) {
        var i;
        const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier)
          , o = (i = e == null ? void 0 : e.optional) !== null && i !== void 0 ? i : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                })
            } catch (c) {
                if (o)
                    return null;
                throw c
            }
        else {
            if (o)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name)
            throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e,
        !!this.shouldAutoInitialize()) {
            if (a1(e))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: Ki
                    })
                } catch {}
            for (const [i,r] of this.instancesDeferred.entries()) {
                const o = this.normalizeInstanceIdentifier(i);
                try {
                    const c = this.getOrInitializeService({
                        instanceIdentifier: o
                    });
                    r.resolve(c)
                } catch {}
            }
        }
    }
    clearInstance(e=Ki) {
        this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(i => "INTERNAL"in i).map(i => i.INTERNAL.delete()), ...e.filter(i => "_delete"in i).map(i => i._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e=Ki) {
        return this.instances.has(e)
    }
    getOptions(e=Ki) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e={}) {
        const {options: i={}} = e
          , r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const o = this.getOrInitializeService({
            instanceIdentifier: r,
            options: i
        });
        for (const [c,d] of this.instancesDeferred.entries()) {
            const h = this.normalizeInstanceIdentifier(c);
            r === h && d.resolve(o)
        }
        return o
    }
    onInit(e, i) {
        var r;
        const o = this.normalizeInstanceIdentifier(i)
          , c = (r = this.onInitCallbacks.get(o)) !== null && r !== void 0 ? r : new Set;
        c.add(e),
        this.onInitCallbacks.set(o, c);
        const d = this.instances.get(o);
        return d && e(d, o),
        () => {
            c.delete(e)
        }
    }
    invokeOnInitCallbacks(e, i) {
        const r = this.onInitCallbacks.get(i);
        if (r)
            for (const o of r)
                try {
                    o(e, i)
                } catch {}
    }
    getOrInitializeService({instanceIdentifier: e, options: i={}}) {
        let r = this.instances.get(e);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
            instanceIdentifier: s1(e),
            options: i
        }),
        this.instances.set(e, r),
        this.instancesOptions.set(e, i),
        this.invokeOnInitCallbacks(r, e),
        this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, e, r)
            } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(e=Ki) {
        return this.component ? this.component.multipleInstances ? e : Ki : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function s1(s) {
    return s === Ki ? void 0 : s
}
function a1(s) {
    return s.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r1 {
    constructor(e) {
        this.name = e,
        this.providers = new Map
    }
    addComponent(e) {
        const i = this.getProvider(e.name);
        if (i.isComponentSet())
            throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        i.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
        this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e))
            return this.providers.get(e);
        const i = new i1(e,this);
        return this.providers.set(e, i),
        i
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xe;
(function(s) {
    s[s.DEBUG = 0] = "DEBUG",
    s[s.VERBOSE = 1] = "VERBOSE",
    s[s.INFO = 2] = "INFO",
    s[s.WARN = 3] = "WARN",
    s[s.ERROR = 4] = "ERROR",
    s[s.SILENT = 5] = "SILENT"
}
)(xe || (xe = {}));
const l1 = {
    debug: xe.DEBUG,
    verbose: xe.VERBOSE,
    info: xe.INFO,
    warn: xe.WARN,
    error: xe.ERROR,
    silent: xe.SILENT
}
  , o1 = xe.INFO
  , c1 = {
    [xe.DEBUG]: "log",
    [xe.VERBOSE]: "log",
    [xe.INFO]: "info",
    [xe.WARN]: "warn",
    [xe.ERROR]: "error"
}
  , u1 = (s, e, ...i) => {
    if (e < s.logLevel)
        return;
    const r = new Date().toISOString()
      , o = c1[e];
    if (o)
        console[o](`[${r}]  ${s.name}:`, ...i);
    else
        throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
}
;
class Pd {
    constructor(e) {
        this.name = e,
        this._logLevel = o1,
        this._logHandler = u1,
        this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in xe))
            throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? l1[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, xe.DEBUG, ...e),
        this._logHandler(this, xe.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, xe.VERBOSE, ...e),
        this._logHandler(this, xe.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, xe.INFO, ...e),
        this._logHandler(this, xe.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, xe.WARN, ...e),
        this._logHandler(this, xe.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, xe.ERROR, ...e),
        this._logHandler(this, xe.ERROR, ...e)
    }
}
const f1 = (s, e) => e.some(i => s instanceof i);
let P_, j_;
function d1() {
    return P_ || (P_ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function h1() {
    return j_ || (j_ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const yy = new WeakMap
  , sd = new WeakMap
  , Ey = new WeakMap
  , Bf = new WeakMap
  , jd = new WeakMap;
function p1(s) {
    const e = new Promise( (i, r) => {
        const o = () => {
            s.removeEventListener("success", c),
            s.removeEventListener("error", d)
        }
          , c = () => {
            i(_i(s.result)),
            o()
        }
          , d = () => {
            r(s.error),
            o()
        }
        ;
        s.addEventListener("success", c),
        s.addEventListener("error", d)
    }
    );
    return e.then(i => {
        i instanceof IDBCursor && yy.set(i, s)
    }
    ).catch( () => {}
    ),
    jd.set(e, s),
    e
}
function m1(s) {
    if (sd.has(s))
        return;
    const e = new Promise( (i, r) => {
        const o = () => {
            s.removeEventListener("complete", c),
            s.removeEventListener("error", d),
            s.removeEventListener("abort", d)
        }
          , c = () => {
            i(),
            o()
        }
          , d = () => {
            r(s.error || new DOMException("AbortError","AbortError")),
            o()
        }
        ;
        s.addEventListener("complete", c),
        s.addEventListener("error", d),
        s.addEventListener("abort", d)
    }
    );
    sd.set(s, e)
}
let ad = {
    get(s, e, i) {
        if (s instanceof IDBTransaction) {
            if (e === "done")
                return sd.get(s);
            if (e === "objectStoreNames")
                return s.objectStoreNames || Ey.get(s);
            if (e === "store")
                return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0])
        }
        return _i(s[e])
    },
    set(s, e, i) {
        return s[e] = i,
        !0
    },
    has(s, e) {
        return s instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in s
    }
};
function g1(s) {
    ad = s(ad)
}
function _1(s) {
    return s === IDBDatabase.prototype.transaction && !("objectStoreNames"in IDBTransaction.prototype) ? function(e, ...i) {
        const r = s.call(qf(this), e, ...i);
        return Ey.set(r, e.sort ? e.sort() : [e]),
        _i(r)
    }
    : h1().includes(s) ? function(...e) {
        return s.apply(qf(this), e),
        _i(yy.get(this))
    }
    : function(...e) {
        return _i(s.apply(qf(this), e))
    }
}
function v1(s) {
    return typeof s == "function" ? _1(s) : (s instanceof IDBTransaction && m1(s),
    f1(s, d1()) ? new Proxy(s,ad) : s)
}
function _i(s) {
    if (s instanceof IDBRequest)
        return p1(s);
    if (Bf.has(s))
        return Bf.get(s);
    const e = v1(s);
    return e !== s && (Bf.set(s, e),
    jd.set(e, s)),
    e
}
const qf = s => jd.get(s);
function y1(s, e, {blocked: i, upgrade: r, blocking: o, terminated: c}={}) {
    const d = indexedDB.open(s, e)
      , h = _i(d);
    return r && d.addEventListener("upgradeneeded", p => {
        r(_i(d.result), p.oldVersion, p.newVersion, _i(d.transaction), p)
    }
    ),
    i && d.addEventListener("blocked", p => i(p.oldVersion, p.newVersion, p)),
    h.then(p => {
        c && p.addEventListener("close", () => c()),
        o && p.addEventListener("versionchange", m => o(m.oldVersion, m.newVersion, m))
    }
    ).catch( () => {}
    ),
    h
}
const E1 = ["get", "getKey", "getAll", "getAllKeys", "count"]
  , b1 = ["put", "add", "delete", "clear"]
  , Vf = new Map;
function z_(s, e) {
    if (!(s instanceof IDBDatabase && !(e in s) && typeof e == "string"))
        return;
    if (Vf.get(e))
        return Vf.get(e);
    const i = e.replace(/FromIndex$/, "")
      , r = e !== i
      , o = b1.includes(i);
    if (!(i in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || E1.includes(i)))
        return;
    const c = async function(d, ...h) {
        const p = this.transaction(d, o ? "readwrite" : "readonly");
        let m = p.store;
        return r && (m = m.index(h.shift())),
        (await Promise.all([m[i](...h), o && p.done]))[0]
    };
    return Vf.set(e, c),
    c
}
g1(s => ({
    ...s,
    get: (e, i, r) => z_(e, i) || s.get(e, i, r),
    has: (e, i) => !!z_(e, i) || s.has(e, i)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S1 {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(i => {
            if (T1(i)) {
                const r = i.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }
        ).filter(i => i).join(" ")
    }
}
function T1(s) {
    const e = s.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const rd = "@firebase/app"
  , H_ = "0.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn = new Pd("@firebase/app")
  , C1 = "@firebase/app-compat"
  , w1 = "@firebase/analytics-compat"
  , A1 = "@firebase/analytics"
  , R1 = "@firebase/app-check-compat"
  , N1 = "@firebase/app-check"
  , x1 = "@firebase/auth"
  , O1 = "@firebase/auth-compat"
  , I1 = "@firebase/database"
  , D1 = "@firebase/data-connect"
  , M1 = "@firebase/database-compat"
  , k1 = "@firebase/functions"
  , L1 = "@firebase/functions-compat"
  , U1 = "@firebase/installations"
  , P1 = "@firebase/installations-compat"
  , j1 = "@firebase/messaging"
  , z1 = "@firebase/messaging-compat"
  , H1 = "@firebase/performance"
  , B1 = "@firebase/performance-compat"
  , q1 = "@firebase/remote-config"
  , V1 = "@firebase/remote-config-compat"
  , G1 = "@firebase/storage"
  , Y1 = "@firebase/storage-compat"
  , F1 = "@firebase/firestore"
  , K1 = "@firebase/ai"
  , Q1 = "@firebase/firestore-compat"
  , X1 = "firebase"
  , W1 = "11.8.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ld = "[DEFAULT]"
  , $1 = {
    [rd]: "fire-core",
    [C1]: "fire-core-compat",
    [A1]: "fire-analytics",
    [w1]: "fire-analytics-compat",
    [N1]: "fire-app-check",
    [R1]: "fire-app-check-compat",
    [x1]: "fire-auth",
    [O1]: "fire-auth-compat",
    [I1]: "fire-rtdb",
    [D1]: "fire-data-connect",
    [M1]: "fire-rtdb-compat",
    [k1]: "fire-fn",
    [L1]: "fire-fn-compat",
    [U1]: "fire-iid",
    [P1]: "fire-iid-compat",
    [j1]: "fire-fcm",
    [z1]: "fire-fcm-compat",
    [H1]: "fire-perf",
    [B1]: "fire-perf-compat",
    [q1]: "fire-rc",
    [V1]: "fire-rc-compat",
    [G1]: "fire-gcs",
    [Y1]: "fire-gcs-compat",
    [F1]: "fire-fst",
    [Q1]: "fire-fst-compat",
    [K1]: "fire-vertex",
    "fire-js": "fire-js",
    [X1]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ko = new Map
  , Z1 = new Map
  , od = new Map;
function B_(s, e) {
    try {
        s.container.addComponent(e)
    } catch (i) {
        Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`, i)
    }
}
function ta(s) {
    const e = s.name;
    if (od.has(e))
        return Pn.debug(`There were multiple attempts to register component ${e}.`),
        !1;
    od.set(e, s);
    for (const i of ko.values())
        B_(i, s);
    for (const i of Z1.values())
        B_(i, s);
    return !0
}
function zd(s, e) {
    const i = s.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return i && i.triggerHeartbeat(),
    s.container.getProvider(e)
}
function Ft(s) {
    return s == null ? !1 : s.settings !== void 0
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J1 = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}
  , vi = new Fr("app","Firebase",J1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ew {
    constructor(e, i, r) {
        this._isDeleted = !1,
        this._options = Object.assign({}, e),
        this._config = Object.assign({}, i),
        this._name = i.name,
        this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled,
        this._container = r,
        this.container.addComponent(new Ji("app", () => this,"PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
        this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(),
        this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(),
        this._name
    }
    get options() {
        return this.checkDestroyed(),
        this._options
    }
    get config() {
        return this.checkDestroyed(),
        this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw vi.create("app-deleted", {
                appName: this._name
            })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fa = W1;
function by(s, e={}) {
    let i = s;
    typeof e != "object" && (e = {
        name: e
    });
    const r = Object.assign({
        name: ld,
        automaticDataCollectionEnabled: !0
    }, e)
      , o = r.name;
    if (typeof o != "string" || !o)
        throw vi.create("bad-app-name", {
            appName: String(o)
        });
    if (i || (i = hy()),
    !i)
        throw vi.create("no-options");
    const c = ko.get(o);
    if (c) {
        if (Zi(i, c.options) && Zi(r, c.config))
            return c;
        throw vi.create("duplicate-app", {
            appName: o
        })
    }
    const d = new r1(o);
    for (const p of od.values())
        d.addComponent(p);
    const h = new ew(i,r,d);
    return ko.set(o, h),
    h
}
function Sy(s=ld) {
    const e = ko.get(s);
    if (!e && s === ld && hy())
        return by();
    if (!e)
        throw vi.create("no-app", {
            appName: s
        });
    return e
}
function yi(s, e, i) {
    var r;
    let o = (r = $1[s]) !== null && r !== void 0 ? r : s;
    i && (o += `-${i}`);
    const c = o.match(/\s|\//)
      , d = e.match(/\s|\//);
    if (c || d) {
        const h = [`Unable to register library "${o}" with version "${e}":`];
        c && h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),
        c && d && h.push("and"),
        d && h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
        Pn.warn(h.join(" "));
        return
    }
    ta(new Ji(`${o}-version`, () => ({
        library: o,
        version: e
    }),"VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tw = "firebase-heartbeat-database"
  , nw = 1
  , Dr = "firebase-heartbeat-store";
let Gf = null;
function Ty() {
    return Gf || (Gf = y1(tw, nw, {
        upgrade: (s, e) => {
            switch (e) {
            case 0:
                try {
                    s.createObjectStore(Dr)
                } catch (i) {
                    console.warn(i)
                }
            }
        }
    }).catch(s => {
        throw vi.create("idb-open", {
            originalErrorMessage: s.message
        })
    }
    )),
    Gf
}
async function iw(s) {
    try {
        const i = (await Ty()).transaction(Dr)
          , r = await i.objectStore(Dr).get(Cy(s));
        return await i.done,
        r
    } catch (e) {
        if (e instanceof Ri)
            Pn.warn(e.message);
        else {
            const i = vi.create("idb-get", {
                originalErrorMessage: e == null ? void 0 : e.message
            });
            Pn.warn(i.message)
        }
    }
}
async function q_(s, e) {
    try {
        const r = (await Ty()).transaction(Dr, "readwrite");
        await r.objectStore(Dr).put(e, Cy(s)),
        await r.done
    } catch (i) {
        if (i instanceof Ri)
            Pn.warn(i.message);
        else {
            const r = vi.create("idb-set", {
                originalErrorMessage: i == null ? void 0 : i.message
            });
            Pn.warn(r.message)
        }
    }
}
function Cy(s) {
    return `${s.name}!${s.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sw = 1024
  , aw = 30;
class rw {
    constructor(e) {
        this.container = e,
        this._heartbeatsCache = null;
        const i = this.container.getProvider("app").getImmediate();
        this._storage = new ow(i),
        this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r,
        r))
    }
    async triggerHeartbeat() {
        var e, i;
        try {
            const o = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
              , c = V_();
            if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
            ((i = this._heartbeatsCache) === null || i === void 0 ? void 0 : i.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === c || this._heartbeatsCache.heartbeats.some(d => d.date === c))
                return;
            if (this._heartbeatsCache.heartbeats.push({
                date: c,
                agent: o
            }),
            this._heartbeatsCache.heartbeats.length > aw) {
                const d = cw(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(d, 1)
            }
            return this._storage.overwrite(this._heartbeatsCache)
        } catch (r) {
            Pn.warn(r)
        }
    }
    async getHeartbeatsHeader() {
        var e;
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
            ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
                return "";
            const i = V_()
              , {heartbeatsToSend: r, unsentEntries: o} = lw(this._heartbeatsCache.heartbeats)
              , c = Io(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
            return this._heartbeatsCache.lastSentHeartbeatDate = i,
            o.length > 0 ? (this._heartbeatsCache.heartbeats = o,
            await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
            this._storage.overwrite(this._heartbeatsCache)),
            c
        } catch (i) {
            return Pn.warn(i),
            ""
        }
    }
}
function V_() {
    return new Date().toISOString().substring(0, 10)
}
function lw(s, e=sw) {
    const i = [];
    let r = s.slice();
    for (const o of s) {
        const c = i.find(d => d.agent === o.agent);
        if (c) {
            if (c.dates.push(o.date),
            G_(i) > e) {
                c.dates.pop();
                break
            }
        } else if (i.push({
            agent: o.agent,
            dates: [o.date]
        }),
        G_(i) > e) {
            i.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: i,
        unsentEntries: r
    }
}
class ow {
    constructor(e) {
        this.app = e,
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return YC() ? FC().then( () => !0).catch( () => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const i = await iw(this.app);
            return i != null && i.heartbeats ? i : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(e) {
        var i;
        if (await this._canUseIndexedDBPromise) {
            const o = await this.read();
            return q_(this.app, {
                lastSentHeartbeatDate: (i = e.lastSentHeartbeatDate) !== null && i !== void 0 ? i : o.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else
            return
    }
    async add(e) {
        var i;
        if (await this._canUseIndexedDBPromise) {
            const o = await this.read();
            return q_(this.app, {
                lastSentHeartbeatDate: (i = e.lastSentHeartbeatDate) !== null && i !== void 0 ? i : o.lastSentHeartbeatDate,
                heartbeats: [...o.heartbeats, ...e.heartbeats]
            })
        } else
            return
    }
}
function G_(s) {
    return Io(JSON.stringify({
        version: 2,
        heartbeats: s
    })).length
}
function cw(s) {
    if (s.length === 0)
        return -1;
    let e = 0
      , i = s[0].date;
    for (let r = 1; r < s.length; r++)
        s[r].date < i && (i = s[r].date,
        e = r);
    return e
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uw(s) {
    ta(new Ji("platform-logger",e => new S1(e),"PRIVATE")),
    ta(new Ji("heartbeat",e => new rw(e),"PRIVATE")),
    yi(rd, H_, s),
    yi(rd, H_, "esm2017"),
    yi("fire-js", "")
}
uw("");
var fw = "firebase"
  , dw = "11.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
yi(fw, dw, "app");
function Hd(s, e) {
    var i = {};
    for (var r in s)
        Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (i[r] = s[r]);
    if (s != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(s); o < r.length; o++)
            e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[o]) && (i[r[o]] = s[r[o]]);
    return i
}
function wy() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const hw = wy
  , Ay = new Fr("auth","Firebase",wy());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lo = new Pd("@firebase/auth");
function pw(s, ...e) {
    Lo.logLevel <= xe.WARN && Lo.warn(`Auth (${fa}): ${s}`, ...e)
}
function wo(s, ...e) {
    Lo.logLevel <= xe.ERROR && Lo.error(`Auth (${fa}): ${s}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(s, ...e) {
    throw qd(s, ...e)
}
function tn(s, ...e) {
    return qd(s, ...e)
}
function Bd(s, e, i) {
    const r = Object.assign(Object.assign({}, hw()), {
        [e]: i
    });
    return new Fr("auth","Firebase",r).create(e, {
        appName: s.name
    })
}
function Ei(s) {
    return Bd(s, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}
function mw(s, e, i) {
    const r = i;
    if (!(e instanceof r))
        throw r.name !== e.constructor.name && Kt(s, "argument-error"),
        Bd(s, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function qd(s, ...e) {
    if (typeof s != "string") {
        const i = e[0]
          , r = [...e.slice(1)];
        return r[0] && (r[0].appName = s.name),
        s._errorFactory.create(i, ...r)
    }
    return Ay.create(s, ...e)
}
function ne(s, e, ...i) {
    if (!s)
        throw qd(e, ...i)
}
function In(s) {
    const e = "INTERNAL ASSERTION FAILED: " + s;
    throw wo(e),
    new Error(e)
}
function jn(s, e) {
    s || In(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cd() {
    var s;
    return typeof self < "u" && ((s = self.location) === null || s === void 0 ? void 0 : s.href) || ""
}
function gw() {
    return Y_() === "http:" || Y_() === "https:"
}
function Y_() {
    var s;
    return typeof self < "u" && ((s = self.location) === null || s === void 0 ? void 0 : s.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _w() {
    return typeof navigator < "u" && navigator && "onLine"in navigator && typeof navigator.onLine == "boolean" && (gw() || qC() || "connection"in navigator) ? navigator.onLine : !0
}
function vw() {
    if (typeof navigator > "u")
        return null;
    const s = navigator;
    return s.languages && s.languages[0] || s.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr {
    constructor(e, i) {
        this.shortDelay = e,
        this.longDelay = i,
        jn(i > e, "Short delay should be less than long delay!"),
        this.isMobile = Ld() || _y()
    }
    get() {
        return _w() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vd(s, e) {
    jn(s.emulator, "Emulator should always be set here");
    const {url: i} = s.emulator;
    return e ? `${i}${e.startsWith("/") ? e.slice(1) : e}` : i
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ry {
    static initialize(e, i, r) {
        this.fetchImpl = e,
        i && (this.headersImpl = i),
        r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch"in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers"in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response"in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yw = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ew = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"]
  , bw = new Kr(3e4,6e4);
function ss(s, e) {
    return s.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
        tenantId: s.tenantId
    }) : e
}
async function Ni(s, e, i, r, o={}) {
    return Ny(s, o, async () => {
        let c = {}
          , d = {};
        r && (e === "GET" ? d = r : c = {
            body: JSON.stringify(r)
        });
        const h = ua(Object.assign({
            key: s.config.apiKey
        }, d)).slice(1)
          , p = await s._getAdditionalHeaders();
        p["Content-Type"] = "application/json",
        s.languageCode && (p["X-Firebase-Locale"] = s.languageCode);
        const m = Object.assign({
            method: e,
            headers: p
        }, c);
        return BC() || (m.referrerPolicy = "no-referrer"),
        s.emulatorConfig && Yr(s.emulatorConfig.host) && (m.credentials = "include"),
        Ry.fetch()(await xy(s, s.config.apiHost, i, h), m)
    }
    )
}
async function Ny(s, e, i) {
    s._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, yw), e);
    try {
        const o = new Tw(s)
          , c = await Promise.race([i(), o.promise]);
        o.clearNetworkTimeout();
        const d = await c.json();
        if ("needConfirmation"in d)
            throw yo(s, "account-exists-with-different-credential", d);
        if (c.ok && !("errorMessage"in d))
            return d;
        {
            const h = c.ok ? d.errorMessage : d.error.message
              , [p,m] = h.split(" : ");
            if (p === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw yo(s, "credential-already-in-use", d);
            if (p === "EMAIL_EXISTS")
                throw yo(s, "email-already-in-use", d);
            if (p === "USER_DISABLED")
                throw yo(s, "user-disabled", d);
            const y = r[p] || p.toLowerCase().replace(/[_\s]+/g, "-");
            if (m)
                throw Bd(s, y, m);
            Kt(s, y)
        }
    } catch (o) {
        if (o instanceof Ri)
            throw o;
        Kt(s, "network-request-failed", {
            message: String(o)
        })
    }
}
async function ic(s, e, i, r, o={}) {
    const c = await Ni(s, e, i, r, o);
    return "mfaPendingCredential"in c && Kt(s, "multi-factor-auth-required", {
        _serverResponse: c
    }),
    c
}
async function xy(s, e, i, r) {
    const o = `${e}${i}?${r}`
      , c = s
      , d = c.config.emulator ? Vd(s.config, o) : `${s.config.apiScheme}://${o}`;
    return Ew.includes(i) && (await c._persistenceManagerAvailable,
    c._getPersistenceType() === "COOKIE") ? c._getPersistence()._getFinalTarget(d).toString() : d
}
function Sw(s) {
    switch (s) {
    case "ENFORCE":
        return "ENFORCE";
    case "AUDIT":
        return "AUDIT";
    case "OFF":
        return "OFF";
    default:
        return "ENFORCEMENT_STATE_UNSPECIFIED"
    }
}
class Tw {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(e) {
        this.auth = e,
        this.timer = null,
        this.promise = new Promise( (i, r) => {
            this.timer = setTimeout( () => r(tn(this.auth, "network-request-failed")), bw.get())
        }
        )
    }
}
function yo(s, e, i) {
    const r = {
        appName: s.name
    };
    i.email && (r.email = i.email),
    i.phoneNumber && (r.phoneNumber = i.phoneNumber);
    const o = tn(s, e, r);
    return o.customData._tokenResponse = i,
    o
}
function F_(s) {
    return s !== void 0 && s.enterprise !== void 0
}
class Cw {
    constructor(e) {
        if (this.siteKey = "",
        this.recaptchaEnforcementState = [],
        e.recaptchaKey === void 0)
            throw new Error("recaptchaKey undefined");
        this.siteKey = e.recaptchaKey.split("/")[3],
        this.recaptchaEnforcementState = e.recaptchaEnforcementState
    }
    getProviderEnforcementState(e) {
        if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
            return null;
        for (const i of this.recaptchaEnforcementState)
            if (i.provider && i.provider === e)
                return Sw(i.enforcementState);
        return null
    }
    isProviderEnabled(e) {
        return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT"
    }
    isAnyProviderEnabled() {
        return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER")
    }
}
async function ww(s, e) {
    return Ni(s, "GET", "/v2/recaptchaConfig", ss(s, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Aw(s, e) {
    return Ni(s, "POST", "/v1/accounts:delete", e)
}
async function Uo(s, e) {
    return Ni(s, "POST", "/v1/accounts:lookup", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cr(s) {
    if (s)
        try {
            const e = new Date(Number(s));
            if (!isNaN(e.getTime()))
                return e.toUTCString()
        } catch {}
}
async function Rw(s, e=!1) {
    const i = vt(s)
      , r = await i.getIdToken(e)
      , o = Gd(r);
    ne(o && o.exp && o.auth_time && o.iat, i.auth, "internal-error");
    const c = typeof o.firebase == "object" ? o.firebase : void 0
      , d = c == null ? void 0 : c.sign_in_provider;
    return {
        claims: o,
        token: r,
        authTime: Cr(Yf(o.auth_time)),
        issuedAtTime: Cr(Yf(o.iat)),
        expirationTime: Cr(Yf(o.exp)),
        signInProvider: d || null,
        signInSecondFactor: (c == null ? void 0 : c.sign_in_second_factor) || null
    }
}
function Yf(s) {
    return Number(s) * 1e3
}
function Gd(s) {
    const [e,i,r] = s.split(".");
    if (e === void 0 || i === void 0 || r === void 0)
        return wo("JWT malformed, contained fewer than 3 sections"),
        null;
    try {
        const o = Do(i);
        return o ? JSON.parse(o) : (wo("Failed to decode base64 JWT payload"),
        null)
    } catch (o) {
        return wo("Caught error parsing JWT payload as JSON", o == null ? void 0 : o.toString()),
        null
    }
}
function K_(s) {
    const e = Gd(s);
    return ne(e, "internal-error"),
    ne(typeof e.exp < "u", "internal-error"),
    ne(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mr(s, e, i=!1) {
    if (i)
        return e;
    try {
        return await e
    } catch (r) {
        throw r instanceof Ri && Nw(r) && s.auth.currentUser === s && await s.auth.signOut(),
        r
    }
}
function Nw({code: s}) {
    return s === "auth/user-disabled" || s === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xw {
    constructor(e) {
        this.user = e,
        this.isRunning = !1,
        this.timerId = null,
        this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
        this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
        this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        var i;
        if (e) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
            r
        } else {
            this.errorBackoff = 3e4;
            const o = ((i = this.user.stsTokenManager.expirationTime) !== null && i !== void 0 ? i : 0) - Date.now() - 3e5;
            return Math.max(0, o)
        }
    }
    schedule(e=!1) {
        if (!this.isRunning)
            return;
        const i = this.getInterval(e);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
        , i)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ud {
    constructor(e, i) {
        this.createdAt = e,
        this.lastLoginAt = i,
        this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = Cr(this.lastLoginAt),
        this.creationTime = Cr(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt,
        this.lastLoginAt = e.lastLoginAt,
        this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Po(s) {
    var e;
    const i = s.auth
      , r = await s.getIdToken()
      , o = await Mr(s, Uo(i, {
        idToken: r
    }));
    ne(o == null ? void 0 : o.users.length, i, "internal-error");
    const c = o.users[0];
    s._notifyReloadListener(c);
    const d = !((e = c.providerUserInfo) === null || e === void 0) && e.length ? Oy(c.providerUserInfo) : []
      , h = Iw(s.providerData, d)
      , p = s.isAnonymous
      , m = !(s.email && c.passwordHash) && !(h != null && h.length)
      , y = p ? m : !1
      , E = {
        uid: c.localId,
        displayName: c.displayName || null,
        photoURL: c.photoUrl || null,
        email: c.email || null,
        emailVerified: c.emailVerified || !1,
        phoneNumber: c.phoneNumber || null,
        tenantId: c.tenantId || null,
        providerData: h,
        metadata: new ud(c.createdAt,c.lastLoginAt),
        isAnonymous: y
    };
    Object.assign(s, E)
}
async function Ow(s) {
    const e = vt(s);
    await Po(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e)
}
function Iw(s, e) {
    return [...s.filter(r => !e.some(o => o.providerId === r.providerId)), ...e]
}
function Oy(s) {
    return s.map(e => {
        var {providerId: i} = e
          , r = Hd(e, ["providerId"]);
        return {
            providerId: i,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    }
    )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dw(s, e) {
    const i = await Ny(s, {}, async () => {
        const r = ua({
            grant_type: "refresh_token",
            refresh_token: e
        }).slice(1)
          , {tokenApiHost: o, apiKey: c} = s.config
          , d = await xy(s, o, "/v1/token", `key=${c}`)
          , h = await s._getAdditionalHeaders();
        return h["Content-Type"] = "application/x-www-form-urlencoded",
        Ry.fetch()(d, {
            method: "POST",
            headers: h,
            body: r
        })
    }
    );
    return {
        accessToken: i.access_token,
        expiresIn: i.expires_in,
        refreshToken: i.refresh_token
    }
}
async function Mw(s, e) {
    return Ni(s, "POST", "/v2/accounts:revokeToken", ss(s, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs {
    constructor() {
        this.refreshToken = null,
        this.accessToken = null,
        this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        ne(e.idToken, "internal-error"),
        ne(typeof e.idToken < "u", "internal-error"),
        ne(typeof e.refreshToken < "u", "internal-error");
        const i = "expiresIn"in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : K_(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, i)
    }
    updateFromIdToken(e) {
        ne(e.length !== 0, "internal-error");
        const i = K_(e);
        this.updateTokensAndExpiration(e, null, i)
    }
    async getToken(e, i=!1) {
        return !i && this.accessToken && !this.isExpired ? this.accessToken : (ne(this.refreshToken, e, "user-token-expired"),
        this.refreshToken ? (await this.refresh(e, this.refreshToken),
        this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, i) {
        const {accessToken: r, refreshToken: o, expiresIn: c} = await Dw(e, i);
        this.updateTokensAndExpiration(r, o, Number(c))
    }
    updateTokensAndExpiration(e, i, r) {
        this.refreshToken = i || null,
        this.accessToken = e || null,
        this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(e, i) {
        const {refreshToken: r, accessToken: o, expirationTime: c} = i
          , d = new Xs;
        return r && (ne(typeof r == "string", "internal-error", {
            appName: e
        }),
        d.refreshToken = r),
        o && (ne(typeof o == "string", "internal-error", {
            appName: e
        }),
        d.accessToken = o),
        c && (ne(typeof c == "number", "internal-error", {
            appName: e
        }),
        d.expirationTime = c),
        d
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken,
        this.refreshToken = e.refreshToken,
        this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new Xs, this.toJSON())
    }
    _performRefresh() {
        return In("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(s, e) {
    ne(typeof s == "string" || typeof s > "u", "internal-error", {
        appName: e
    })
}
class Zt {
    constructor(e) {
        var {uid: i, auth: r, stsTokenManager: o} = e
          , c = Hd(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
        this.proactiveRefresh = new xw(this),
        this.reloadUserInfo = null,
        this.reloadListener = null,
        this.uid = i,
        this.auth = r,
        this.stsTokenManager = o,
        this.accessToken = o.accessToken,
        this.displayName = c.displayName || null,
        this.email = c.email || null,
        this.emailVerified = c.emailVerified || !1,
        this.phoneNumber = c.phoneNumber || null,
        this.photoURL = c.photoURL || null,
        this.isAnonymous = c.isAnonymous || !1,
        this.tenantId = c.tenantId || null,
        this.providerData = c.providerData ? [...c.providerData] : [],
        this.metadata = new ud(c.createdAt || void 0,c.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        const i = await Mr(this, this.stsTokenManager.getToken(this.auth, e));
        return ne(i, this.auth, "internal-error"),
        this.accessToken !== i && (this.accessToken = i,
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
        i
    }
    getIdTokenResult(e) {
        return Rw(this, e)
    }
    reload() {
        return Ow(this)
    }
    _assign(e) {
        this !== e && (ne(this.uid === e.uid, this.auth, "internal-error"),
        this.displayName = e.displayName,
        this.photoURL = e.photoURL,
        this.email = e.email,
        this.emailVerified = e.emailVerified,
        this.phoneNumber = e.phoneNumber,
        this.isAnonymous = e.isAnonymous,
        this.tenantId = e.tenantId,
        this.providerData = e.providerData.map(i => Object.assign({}, i)),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        const i = new Zt(Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return i.metadata._copy(this.metadata),
        i
    }
    _onReload(e) {
        ne(!this.reloadListener, this.auth, "internal-error"),
        this.reloadListener = e,
        this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
        this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, i=!1) {
        let r = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e),
        r = !0),
        i && await Po(this),
        await this.auth._persistUserIfCurrent(this),
        r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (Ft(this.auth.app))
            return Promise.reject(Ei(this.auth));
        const e = await this.getIdToken();
        return await Mr(this, Aw(this.auth, {
            idToken: e
        })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(e => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, i) {
        var r, o, c, d, h, p, m, y;
        const E = (r = i.displayName) !== null && r !== void 0 ? r : void 0
          , v = (o = i.email) !== null && o !== void 0 ? o : void 0
          , x = (c = i.phoneNumber) !== null && c !== void 0 ? c : void 0
          , A = (d = i.photoURL) !== null && d !== void 0 ? d : void 0
          , U = (h = i.tenantId) !== null && h !== void 0 ? h : void 0
          , B = (p = i._redirectEventId) !== null && p !== void 0 ? p : void 0
          , H = (m = i.createdAt) !== null && m !== void 0 ? m : void 0
          , q = (y = i.lastLoginAt) !== null && y !== void 0 ? y : void 0
          , {uid: Y, emailVerified: W, isAnonymous: K, providerData: ve, stsTokenManager: Te} = i;
        ne(Y && Te, e, "internal-error");
        const me = Xs.fromJSON(this.name, Te);
        ne(typeof Y == "string", e, "internal-error"),
        hi(E, e.name),
        hi(v, e.name),
        ne(typeof W == "boolean", e, "internal-error"),
        ne(typeof K == "boolean", e, "internal-error"),
        hi(x, e.name),
        hi(A, e.name),
        hi(U, e.name),
        hi(B, e.name),
        hi(H, e.name),
        hi(q, e.name);
        const he = new Zt({
            uid: Y,
            auth: e,
            email: v,
            emailVerified: W,
            displayName: E,
            isAnonymous: K,
            photoURL: A,
            phoneNumber: x,
            tenantId: U,
            stsTokenManager: me,
            createdAt: H,
            lastLoginAt: q
        });
        return ve && Array.isArray(ve) && (he.providerData = ve.map(_e => Object.assign({}, _e))),
        B && (he._redirectEventId = B),
        he
    }
    static async _fromIdTokenResponse(e, i, r=!1) {
        const o = new Xs;
        o.updateFromServerResponse(i);
        const c = new Zt({
            uid: i.localId,
            auth: e,
            stsTokenManager: o,
            isAnonymous: r
        });
        return await Po(c),
        c
    }
    static async _fromGetAccountInfoResponse(e, i, r) {
        const o = i.users[0];
        ne(o.localId !== void 0, "internal-error");
        const c = o.providerUserInfo !== void 0 ? Oy(o.providerUserInfo) : []
          , d = !(o.email && o.passwordHash) && !(c != null && c.length)
          , h = new Xs;
        h.updateFromIdToken(r);
        const p = new Zt({
            uid: o.localId,
            auth: e,
            stsTokenManager: h,
            isAnonymous: d
        })
          , m = {
            uid: o.localId,
            displayName: o.displayName || null,
            photoURL: o.photoUrl || null,
            email: o.email || null,
            emailVerified: o.emailVerified || !1,
            phoneNumber: o.phoneNumber || null,
            tenantId: o.tenantId || null,
            providerData: c,
            metadata: new ud(o.createdAt,o.lastLoginAt),
            isAnonymous: !(o.email && o.passwordHash) && !(c != null && c.length)
        };
        return Object.assign(p, m),
        p
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q_ = new Map;
function Dn(s) {
    jn(s instanceof Function, "Expected a class definition");
    let e = Q_.get(s);
    return e ? (jn(e instanceof s, "Instance stored in cache mismatched with class"),
    e) : (e = new s,
    Q_.set(s, e),
    e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iy {
    constructor() {
        this.type = "NONE",
        this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, i) {
        this.storage[e] = i
    }
    async _get(e) {
        const i = this.storage[e];
        return i === void 0 ? null : i
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, i) {}
    _removeListener(e, i) {}
}
Iy.type = "NONE";
const X_ = Iy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(s, e, i) {
    return `firebase:${s}:${e}:${i}`
}
class Ws {
    constructor(e, i, r) {
        this.persistence = e,
        this.auth = i,
        this.userKey = r;
        const {config: o, name: c} = this.auth;
        this.fullUserKey = Ao(this.userKey, o.apiKey, c),
        this.fullPersistenceKey = Ao("persistence", o.apiKey, c),
        this.boundEventHandler = i._onStorageEvent.bind(i),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        if (!e)
            return null;
        if (typeof e == "string") {
            const i = await Uo(this.auth, {
                idToken: e
            }).catch( () => {}
            );
            return i ? Zt._fromGetAccountInfoResponse(this.auth, i, e) : null
        }
        return Zt._fromJSON(this.auth, e)
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e)
            return;
        const i = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
        this.persistence = e,
        i)
            return this.setCurrentUser(i)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, i, r="authUser") {
        if (!i.length)
            return new Ws(Dn(X_),e,r);
        const o = (await Promise.all(i.map(async m => {
            if (await m._isAvailable())
                return m
        }
        ))).filter(m => m);
        let c = o[0] || Dn(X_);
        const d = Ao(r, e.config.apiKey, e.name);
        let h = null;
        for (const m of i)
            try {
                const y = await m._get(d);
                if (y) {
                    let E;
                    if (typeof y == "string") {
                        const v = await Uo(e, {
                            idToken: y
                        }).catch( () => {}
                        );
                        if (!v)
                            break;
                        E = await Zt._fromGetAccountInfoResponse(e, v, y)
                    } else
                        E = Zt._fromJSON(e, y);
                    m !== c && (h = E),
                    c = m;
                    break
                }
            } catch {}
        const p = o.filter(m => m._shouldAllowMigration);
        return !c._shouldAllowMigration || !p.length ? new Ws(c,e,r) : (c = p[0],
        h && await c._set(d, h.toJSON()),
        await Promise.all(i.map(async m => {
            if (m !== c)
                try {
                    await m._remove(d)
                } catch {}
        }
        )),
        new Ws(c,e,r))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W_(s) {
    const e = s.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
        return "Opera";
    if (Ly(e))
        return "IEMobile";
    if (e.includes("msie") || e.includes("trident/"))
        return "IE";
    if (e.includes("edge/"))
        return "Edge";
    if (Dy(e))
        return "Firefox";
    if (e.includes("silk/"))
        return "Silk";
    if (Py(e))
        return "Blackberry";
    if (jy(e))
        return "Webos";
    if (My(e))
        return "Safari";
    if ((e.includes("chrome/") || ky(e)) && !e.includes("edge/"))
        return "Chrome";
    if (Uy(e))
        return "Android";
    {
        const i = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
          , r = s.match(i);
        if ((r == null ? void 0 : r.length) === 2)
            return r[1]
    }
    return "Other"
}
function Dy(s=_t()) {
    return /firefox\//i.test(s)
}
function My(s=_t()) {
    const e = s.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}
function ky(s=_t()) {
    return /crios\//i.test(s)
}
function Ly(s=_t()) {
    return /iemobile/i.test(s)
}
function Uy(s=_t()) {
    return /android/i.test(s)
}
function Py(s=_t()) {
    return /blackberry/i.test(s)
}
function jy(s=_t()) {
    return /webos/i.test(s)
}
function Yd(s=_t()) {
    return /iphone|ipad|ipod/i.test(s) || /macintosh/i.test(s) && /mobile/i.test(s)
}
function kw(s=_t()) {
    var e;
    return Yd(s) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}
function Lw() {
    return VC() && document.documentMode === 10
}
function zy(s=_t()) {
    return Yd(s) || Uy(s) || jy(s) || Py(s) || /windows phone/i.test(s) || Ly(s)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hy(s, e=[]) {
    let i;
    switch (s) {
    case "Browser":
        i = W_(_t());
        break;
    case "Worker":
        i = `${W_(_t())}-${s}`;
        break;
    default:
        i = s
    }
    const r = e.length ? e.join(",") : "FirebaseCore-web";
    return `${i}/JsCore/${fa}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uw {
    constructor(e) {
        this.auth = e,
        this.queue = []
    }
    pushCallback(e, i) {
        const r = c => new Promise( (d, h) => {
            try {
                const p = e(c);
                d(p)
            } catch (p) {
                h(p)
            }
        }
        );
        r.onAbort = i,
        this.queue.push(r);
        const o = this.queue.length - 1;
        return () => {
            this.queue[o] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e)
            return;
        const i = [];
        try {
            for (const r of this.queue)
                await r(e),
                r.onAbort && i.push(r.onAbort)
        } catch (r) {
            i.reverse();
            for (const o of i)
                try {
                    o()
                } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pw(s, e={}) {
    return Ni(s, "GET", "/v2/passwordPolicy", ss(s, e))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jw = 6;
class zw {
    constructor(e) {
        var i, r, o, c;
        const d = e.customStrengthOptions;
        this.customStrengthOptions = {},
        this.customStrengthOptions.minPasswordLength = (i = d.minPasswordLength) !== null && i !== void 0 ? i : jw,
        d.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = d.maxPasswordLength),
        d.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = d.containsLowercaseCharacter),
        d.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = d.containsUppercaseCharacter),
        d.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = d.containsNumericCharacter),
        d.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = d.containsNonAlphanumericCharacter),
        this.enforcementState = e.enforcementState,
        this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
        this.allowedNonAlphanumericCharacters = (o = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && o !== void 0 ? o : "",
        this.forceUpgradeOnSignin = (c = e.forceUpgradeOnSignin) !== null && c !== void 0 ? c : !1,
        this.schemaVersion = e.schemaVersion
    }
    validatePassword(e) {
        var i, r, o, c, d, h;
        const p = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(e, p),
        this.validatePasswordCharacterOptions(e, p),
        p.isValid && (p.isValid = (i = p.meetsMinPasswordLength) !== null && i !== void 0 ? i : !0),
        p.isValid && (p.isValid = (r = p.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
        p.isValid && (p.isValid = (o = p.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
        p.isValid && (p.isValid = (c = p.containsUppercaseLetter) !== null && c !== void 0 ? c : !0),
        p.isValid && (p.isValid = (d = p.containsNumericCharacter) !== null && d !== void 0 ? d : !0),
        p.isValid && (p.isValid = (h = p.containsNonAlphanumericCharacter) !== null && h !== void 0 ? h : !0),
        p
    }
    validatePasswordLengthOptions(e, i) {
        const r = this.customStrengthOptions.minPasswordLength
          , o = this.customStrengthOptions.maxPasswordLength;
        r && (i.meetsMinPasswordLength = e.length >= r),
        o && (i.meetsMaxPasswordLength = e.length <= o)
    }
    validatePasswordCharacterOptions(e, i) {
        this.updatePasswordCharacterOptionsStatuses(i, !1, !1, !1, !1);
        let r;
        for (let o = 0; o < e.length; o++)
            r = e.charAt(o),
            this.updatePasswordCharacterOptionsStatuses(i, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(e, i, r, o, c) {
        this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = i)),
        this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
        this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = o)),
        this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = c))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hw {
    constructor(e, i, r, o) {
        this.app = e,
        this.heartbeatServiceProvider = i,
        this.appCheckServiceProvider = r,
        this.config = o,
        this.currentUser = null,
        this.emulatorConfig = null,
        this.operations = Promise.resolve(),
        this.authStateSubscription = new $_(this),
        this.idTokenSubscription = new $_(this),
        this.beforeStateQueue = new Uw(this),
        this.redirectUser = null,
        this.isProactiveRefreshEnabled = !1,
        this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
        this._canInitEmulator = !0,
        this._isInitialized = !1,
        this._deleted = !1,
        this._initializationPromise = null,
        this._popupRedirectResolver = null,
        this._errorFactory = Ay,
        this._agentRecaptchaConfig = null,
        this._tenantRecaptchaConfigs = {},
        this._projectPasswordPolicy = null,
        this._tenantPasswordPolicies = {},
        this._resolvePersistenceManagerAvailable = void 0,
        this.lastNotifiedUid = void 0,
        this.languageCode = null,
        this.tenantId = null,
        this.settings = {
            appVerificationDisabledForTesting: !1
        },
        this.frameworks = [],
        this.name = e.name,
        this.clientVersion = o.sdkClientVersion,
        this._persistenceManagerAvailable = new Promise(c => this._resolvePersistenceManagerAvailable = c)
    }
    _initializeWithPersistence(e, i) {
        return i && (this._popupRedirectResolver = Dn(i)),
        this._initializationPromise = this.queue(async () => {
            var r, o, c;
            if (!this._deleted && (this.persistenceManager = await Ws.create(this, e),
            (r = this._resolvePersistenceManagerAvailable) === null || r === void 0 || r.call(this),
            !this._deleted)) {
                if (!((o = this._popupRedirectResolver) === null || o === void 0) && o._shouldInitProactively)
                    try {
                        await this._popupRedirectResolver._initialize(this)
                    } catch {}
                await this.initializeCurrentUser(i),
                this.lastNotifiedUid = ((c = this.currentUser) === null || c === void 0 ? void 0 : c.uid) || null,
                !this._deleted && (this._isInitialized = !0)
            }
        }
        ),
        this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e),
                await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUserFromIdToken(e) {
        try {
            const i = await Uo(this, {
                idToken: e
            })
              , r = await Zt._fromGetAccountInfoResponse(this, i, e);
            await this.directlySetCurrentUser(r)
        } catch (i) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", i),
            await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(e) {
        var i;
        if (Ft(this.app)) {
            const d = this.app.settings.authIdToken;
            return d ? new Promise(h => {
                setTimeout( () => this.initializeCurrentUserFromIdToken(d).then(h, h))
            }
            ) : this.directlySetCurrentUser(null)
        }
        const r = await this.assertedPersistence.getCurrentUser();
        let o = r
          , c = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const d = (i = this.redirectUser) === null || i === void 0 ? void 0 : i._redirectEventId
              , h = o == null ? void 0 : o._redirectEventId
              , p = await this.tryRedirectSignIn(e);
            (!d || d === h) && (p != null && p.user) && (o = p.user,
            c = !0)
        }
        if (!o)
            return this.directlySetCurrentUser(null);
        if (!o._redirectEventId) {
            if (c)
                try {
                    await this.beforeStateQueue.runMiddleware(o)
                } catch (d) {
                    o = r,
                    this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(d))
                }
            return o ? this.reloadAndSetCurrentUserOrClear(o) : this.directlySetCurrentUser(null)
        }
        return ne(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === o._redirectEventId ? this.directlySetCurrentUser(o) : this.reloadAndSetCurrentUserOrClear(o)
    }
    async tryRedirectSignIn(e) {
        let i = null;
        try {
            i = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return i
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await Po(e)
        } catch (i) {
            if ((i == null ? void 0 : i.code) !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = vw()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        if (Ft(this.app))
            return Promise.reject(Ei(this));
        const i = e ? vt(e) : null;
        return i && ne(i.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
        this._updateCurrentUser(i && i._clone(this))
    }
    async _updateCurrentUser(e, i=!1) {
        if (!this._deleted)
            return e && ne(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
            i || await this.beforeStateQueue.runMiddleware(e),
            this.queue(async () => {
                await this.directlySetCurrentUser(e),
                this.notifyAuthListeners()
            }
            )
    }
    async signOut() {
        return Ft(this.app) ? Promise.reject(Ei(this)) : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
        this._updateCurrentUser(null, !0))
    }
    setPersistence(e) {
        return Ft(this.app) ? Promise.reject(Ei(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(Dn(e))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(e) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const i = this._getPasswordPolicyInternal();
        return i.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : i.validatePassword(e)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const e = await Pw(this)
          , i = new zw(e);
        this.tenantId === null ? this._projectPasswordPolicy = i : this._tenantPasswordPolicies[this.tenantId] = i
    }
    _getPersistenceType() {
        return this.assertedPersistence.persistence.type
    }
    _getPersistence() {
        return this.assertedPersistence.persistence
    }
    _updateErrorMap(e) {
        this._errorFactory = new Fr("auth","Firebase",e())
    }
    onAuthStateChanged(e, i, r) {
        return this.registerStateListener(this.authStateSubscription, e, i, r)
    }
    beforeAuthStateChanged(e, i) {
        return this.beforeStateQueue.pushCallback(e, i)
    }
    onIdTokenChanged(e, i, r) {
        return this.registerStateListener(this.idTokenSubscription, e, i, r)
    }
    authStateReady() {
        return new Promise( (e, i) => {
            if (this.currentUser)
                e();
            else {
                const r = this.onAuthStateChanged( () => {
                    r(),
                    e()
                }
                , i)
            }
        }
        )
    }
    async revokeAccessToken(e) {
        if (this.currentUser) {
            const i = await this.currentUser.getIdToken()
              , r = {
                providerId: "apple.com",
                tokenType: "ACCESS_TOKEN",
                token: e,
                idToken: i
            };
            this.tenantId != null && (r.tenantId = this.tenantId),
            await Mw(this, r)
        }
    }
    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
        }
    }
    async _setRedirectUser(e, i) {
        const r = await this.getOrInitRedirectPersistenceManager(i);
        return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const i = e && Dn(e) || this._popupRedirectResolver;
            ne(i, this, "argument-error"),
            this.redirectPersistenceManager = await Ws.create(this, [Dn(i._redirectPersistence)], "redirectUser"),
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        var i, r;
        return this._isInitialized && await this.queue(async () => {}
        ),
        ((i = this._currentUser) === null || i === void 0 ? void 0 : i._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
        this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
        this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var e, i;
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (i = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && i !== void 0 ? i : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r,
        this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, i, r, o) {
        if (this._deleted)
            return () => {}
            ;
        const c = typeof i == "function" ? i : i.next.bind(i);
        let d = !1;
        const h = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (ne(h, this, "internal-error"),
        h.then( () => {
            d || c(this.currentUser)
        }
        ),
        typeof i == "function") {
            const p = e.addObserver(i, r, o);
            return () => {
                d = !0,
                p()
            }
        } else {
            const p = e.addObserver(i);
            return () => {
                d = !0,
                p()
            }
        }
    }
    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        this.currentUser = e,
        e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(e) {
        return this.operations = this.operations.then(e, e),
        this.operations
    }
    get assertedPersistence() {
        return ne(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e),
        this.frameworks.sort(),
        this.clientVersion = Hy(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var e;
        const i = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (i["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await ((e = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
        r && (i["X-Firebase-Client"] = r);
        const o = await this._getAppCheckToken();
        return o && (i["X-Firebase-AppCheck"] = o),
        i
    }
    async _getAppCheckToken() {
        var e;
        if (Ft(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        const i = await ((e = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getToken());
        return i != null && i.error && pw(`Error while retrieving App Check token: ${i.error}`),
        i == null ? void 0 : i.token
    }
}
function as(s) {
    return vt(s)
}
class $_ {
    constructor(e) {
        this.auth = e,
        this.observer = null,
        this.addObserver = JC(i => this.observer = i)
    }
    get next() {
        return ne(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let sc = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function Bw(s) {
    sc = s
}
function By(s) {
    return sc.loadJS(s)
}
function qw() {
    return sc.recaptchaEnterpriseScript
}
function Vw() {
    return sc.gapiScript
}
function Gw(s) {
    return `__${s}${Math.floor(Math.random() * 1e6)}`
}
class Yw {
    constructor() {
        this.enterprise = new Fw
    }
    ready(e) {
        e()
    }
    execute(e, i) {
        return Promise.resolve("token")
    }
    render(e, i) {
        return ""
    }
}
class Fw {
    ready(e) {
        e()
    }
    execute(e, i) {
        return Promise.resolve("token")
    }
    render(e, i) {
        return ""
    }
}
const Kw = "recaptcha-enterprise"
  , qy = "NO_RECAPTCHA";
class Qw {
    constructor(e) {
        this.type = Kw,
        this.auth = as(e)
    }
    async verify(e="verify", i=!1) {
        async function r(c) {
            if (!i) {
                if (c.tenantId == null && c._agentRecaptchaConfig != null)
                    return c._agentRecaptchaConfig.siteKey;
                if (c.tenantId != null && c._tenantRecaptchaConfigs[c.tenantId] !== void 0)
                    return c._tenantRecaptchaConfigs[c.tenantId].siteKey
            }
            return new Promise(async (d, h) => {
                ww(c, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                }).then(p => {
                    if (p.recaptchaKey === void 0)
                        h(new Error("recaptcha Enterprise site key undefined"));
                    else {
                        const m = new Cw(p);
                        return c.tenantId == null ? c._agentRecaptchaConfig = m : c._tenantRecaptchaConfigs[c.tenantId] = m,
                        d(m.siteKey)
                    }
                }
                ).catch(p => {
                    h(p)
                }
                )
            }
            )
        }
        function o(c, d, h) {
            const p = window.grecaptcha;
            F_(p) ? p.enterprise.ready( () => {
                p.enterprise.execute(c, {
                    action: e
                }).then(m => {
                    d(m)
                }
                ).catch( () => {
                    d(qy)
                }
                )
            }
            ) : h(Error("No reCAPTCHA enterprise script loaded."))
        }
        return this.auth.settings.appVerificationDisabledForTesting ? new Yw().execute("siteKey", {
            action: "verify"
        }) : new Promise( (c, d) => {
            r(this.auth).then(h => {
                if (!i && F_(window.grecaptcha))
                    o(h, c, d);
                else {
                    if (typeof window > "u") {
                        d(new Error("RecaptchaVerifier is only supported in browser"));
                        return
                    }
                    let p = qw();
                    p.length !== 0 && (p += h),
                    By(p).then( () => {
                        o(h, c, d)
                    }
                    ).catch(m => {
                        d(m)
                    }
                    )
                }
            }
            ).catch(h => {
                d(h)
            }
            )
        }
        )
    }
}
async function Z_(s, e, i, r=!1, o=!1) {
    const c = new Qw(s);
    let d;
    if (o)
        d = qy;
    else
        try {
            d = await c.verify(i)
        } catch {
            d = await c.verify(i, !0)
        }
    const h = Object.assign({}, e);
    if (i === "mfaSmsEnrollment" || i === "mfaSmsSignIn") {
        if ("phoneEnrollmentInfo"in h) {
            const p = h.phoneEnrollmentInfo.phoneNumber
              , m = h.phoneEnrollmentInfo.recaptchaToken;
            Object.assign(h, {
                phoneEnrollmentInfo: {
                    phoneNumber: p,
                    recaptchaToken: m,
                    captchaResponse: d,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        } else if ("phoneSignInInfo"in h) {
            const p = h.phoneSignInInfo.recaptchaToken;
            Object.assign(h, {
                phoneSignInInfo: {
                    recaptchaToken: p,
                    captchaResponse: d,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        }
        return h
    }
    return r ? Object.assign(h, {
        captchaResp: d
    }) : Object.assign(h, {
        captchaResponse: d
    }),
    Object.assign(h, {
        clientType: "CLIENT_TYPE_WEB"
    }),
    Object.assign(h, {
        recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    }),
    h
}
async function J_(s, e, i, r, o) {
    var c;
    if (!((c = s._getRecaptchaConfig()) === null || c === void 0) && c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
        const d = await Z_(s, e, i, i === "getOobCode");
        return r(s, d)
    } else
        return r(s, e).catch(async d => {
            if (d.code === "auth/missing-recaptcha-token") {
                console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                const h = await Z_(s, e, i, i === "getOobCode");
                return r(s, h)
            } else
                return Promise.reject(d)
        }
        )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xw(s, e) {
    const i = zd(s, "auth");
    if (i.isInitialized()) {
        const o = i.getImmediate()
          , c = i.getOptions();
        if (Zi(c, e ?? {}))
            return o;
        Kt(o, "already-initialized")
    }
    return i.initialize({
        options: e
    })
}
function Ww(s, e) {
    const i = (e == null ? void 0 : e.persistence) || []
      , r = (Array.isArray(i) ? i : [i]).map(Dn);
    e != null && e.errorMap && s._updateErrorMap(e.errorMap),
    s._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver)
}
function $w(s, e, i) {
    const r = as(s);
    ne(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
    const o = !1
      , c = Vy(e)
      , {host: d, port: h} = Zw(e)
      , p = h === null ? "" : `:${h}`
      , m = {
        url: `${c}//${d}${p}/`
    }
      , y = Object.freeze({
        host: d,
        port: h,
        protocol: c.replace(":", ""),
        options: Object.freeze({
            disableWarnings: o
        })
    });
    if (!r._canInitEmulator) {
        ne(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
        ne(Zi(m, r.config.emulator) && Zi(y, r.emulatorConfig), r, "emulator-config-failed");
        return
    }
    r.config.emulator = m,
    r.emulatorConfig = y,
    r.settings.appVerificationDisabledForTesting = !0,
    Yr(d) ? (my(`${c}//${d}${p}`),
    gy("Auth", !0)) : Jw()
}
function Vy(s) {
    const e = s.indexOf(":");
    return e < 0 ? "" : s.substr(0, e + 1)
}
function Zw(s) {
    const e = Vy(s)
      , i = /(\/\/)?([^?#/]+)/.exec(s.substr(e.length));
    if (!i)
        return {
            host: "",
            port: null
        };
    const r = i[2].split("@").pop() || ""
      , o = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (o) {
        const c = o[1];
        return {
            host: c,
            port: ev(r.substr(c.length + 1))
        }
    } else {
        const [c,d] = r.split(":");
        return {
            host: c,
            port: ev(d)
        }
    }
}
function ev(s) {
    if (!s)
        return null;
    const e = Number(s);
    return isNaN(e) ? null : e
}
function Jw() {
    function s() {
        const e = document.createElement("p")
          , i = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.",
        i.position = "fixed",
        i.width = "100%",
        i.backgroundColor = "#ffffff",
        i.border = ".1em solid #000000",
        i.color = "#b50000",
        i.bottom = "0px",
        i.left = "0px",
        i.margin = "0px",
        i.zIndex = "10000",
        i.textAlign = "center",
        e.classList.add("firebase-emulator-warning"),
        document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
    typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", s) : s())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fd {
    constructor(e, i) {
        this.providerId = e,
        this.signInMethod = i
    }
    toJSON() {
        return In("not implemented")
    }
    _getIdTokenResponse(e) {
        return In("not implemented")
    }
    _linkToIdToken(e, i) {
        return In("not implemented")
    }
    _getReauthenticationResolver(e) {
        return In("not implemented")
    }
}
async function eA(s, e) {
    return Ni(s, "POST", "/v1/accounts:signUp", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tA(s, e) {
    return ic(s, "POST", "/v1/accounts:signInWithPassword", ss(s, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nA(s, e) {
    return ic(s, "POST", "/v1/accounts:signInWithEmailLink", ss(s, e))
}
async function iA(s, e) {
    return ic(s, "POST", "/v1/accounts:signInWithEmailLink", ss(s, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr extends Fd {
    constructor(e, i, r, o=null) {
        super("password", r),
        this._email = e,
        this._password = i,
        this._tenantId = o
    }
    static _fromEmailAndPassword(e, i) {
        return new kr(e,i,"password")
    }
    static _fromEmailAndCode(e, i, r=null) {
        return new kr(e,i,"emailLink",r)
    }
    toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        }
    }
    static fromJSON(e) {
        const i = typeof e == "string" ? JSON.parse(e) : e;
        if (i != null && i.email && (i != null && i.password)) {
            if (i.signInMethod === "password")
                return this._fromEmailAndPassword(i.email, i.password);
            if (i.signInMethod === "emailLink")
                return this._fromEmailAndCode(i.email, i.password, i.tenantId)
        }
        return null
    }
    async _getIdTokenResponse(e) {
        switch (this.signInMethod) {
        case "password":
            const i = {
                returnSecureToken: !0,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
            };
            return J_(e, i, "signInWithPassword", tA);
        case "emailLink":
            return nA(e, {
                email: this._email,
                oobCode: this._password
            });
        default:
            Kt(e, "internal-error")
        }
    }
    async _linkToIdToken(e, i) {
        switch (this.signInMethod) {
        case "password":
            const r = {
                idToken: i,
                returnSecureToken: !0,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
            };
            return J_(e, r, "signUpPassword", eA);
        case "emailLink":
            return iA(e, {
                idToken: i,
                email: this._email,
                oobCode: this._password
            });
        default:
            Kt(e, "internal-error")
        }
    }
    _getReauthenticationResolver(e) {
        return this._getIdTokenResponse(e)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $s(s, e) {
    return ic(s, "POST", "/v1/accounts:signInWithIdp", ss(s, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sA = "http://localhost";
class es extends Fd {
    constructor() {
        super(...arguments),
        this.pendingToken = null
    }
    static _fromParams(e) {
        const i = new es(e.providerId,e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (i.idToken = e.idToken),
        e.accessToken && (i.accessToken = e.accessToken),
        e.nonce && !e.pendingToken && (i.nonce = e.nonce),
        e.pendingToken && (i.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (i.accessToken = e.oauthToken,
        i.secret = e.oauthTokenSecret) : Kt("argument-error"),
        i
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        const i = typeof e == "string" ? JSON.parse(e) : e
          , {providerId: r, signInMethod: o} = i
          , c = Hd(i, ["providerId", "signInMethod"]);
        if (!r || !o)
            return null;
        const d = new es(r,o);
        return d.idToken = c.idToken || void 0,
        d.accessToken = c.accessToken || void 0,
        d.secret = c.secret,
        d.nonce = c.nonce,
        d.pendingToken = c.pendingToken || null,
        d
    }
    _getIdTokenResponse(e) {
        const i = this.buildRequest();
        return $s(e, i)
    }
    _linkToIdToken(e, i) {
        const r = this.buildRequest();
        return r.idToken = i,
        $s(e, r)
    }
    _getReauthenticationResolver(e) {
        const i = this.buildRequest();
        return i.autoCreate = !1,
        $s(e, i)
    }
    buildRequest() {
        const e = {
            requestUri: sA,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            e.pendingToken = this.pendingToken;
        else {
            const i = {};
            this.idToken && (i.id_token = this.idToken),
            this.accessToken && (i.access_token = this.accessToken),
            this.secret && (i.oauth_token_secret = this.secret),
            i.providerId = this.providerId,
            this.nonce && !this.pendingToken && (i.nonce = this.nonce),
            e.postBody = ua(i)
        }
        return e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aA(s) {
    switch (s) {
    case "recoverEmail":
        return "RECOVER_EMAIL";
    case "resetPassword":
        return "PASSWORD_RESET";
    case "signIn":
        return "EMAIL_SIGNIN";
    case "verifyEmail":
        return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
    default:
        return null
    }
}
function rA(s) {
    const e = br(Sr(s)).link
      , i = e ? br(Sr(e)).deep_link_id : null
      , r = br(Sr(s)).deep_link_id;
    return (r ? br(Sr(r)).link : null) || r || i || e || s
}
class Kd {
    constructor(e) {
        var i, r, o, c, d, h;
        const p = br(Sr(e))
          , m = (i = p.apiKey) !== null && i !== void 0 ? i : null
          , y = (r = p.oobCode) !== null && r !== void 0 ? r : null
          , E = aA((o = p.mode) !== null && o !== void 0 ? o : null);
        ne(m && y && E, "argument-error"),
        this.apiKey = m,
        this.operation = E,
        this.code = y,
        this.continueUrl = (c = p.continueUrl) !== null && c !== void 0 ? c : null,
        this.languageCode = (d = p.lang) !== null && d !== void 0 ? d : null,
        this.tenantId = (h = p.tenantId) !== null && h !== void 0 ? h : null
    }
    static parseLink(e) {
        const i = rA(e);
        try {
            return new Kd(i)
        } catch {
            return null
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da {
    constructor() {
        this.providerId = da.PROVIDER_ID
    }
    static credential(e, i) {
        return kr._fromEmailAndPassword(e, i)
    }
    static credentialWithLink(e, i) {
        const r = Kd.parseLink(i);
        return ne(r, "argument-error"),
        kr._fromEmailAndCode(e, r.code, r.tenantId)
    }
}
da.PROVIDER_ID = "password";
da.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
da.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qd {
    constructor(e) {
        this.providerId = e,
        this.defaultLanguageCode = null,
        this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e,
        this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr extends Qd {
    constructor() {
        super(...arguments),
        this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e),
        this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi extends Qr {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return es._fromParams({
            providerId: pi.PROVIDER_ID,
            signInMethod: pi.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return pi.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return pi.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken"in e) || !e.oauthAccessToken)
            return null;
        try {
            return pi.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
pi.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
pi.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends Qr {
    constructor() {
        super("google.com"),
        this.addScope("profile")
    }
    static credential(e, i) {
        return es._fromParams({
            providerId: On.PROVIDER_ID,
            signInMethod: On.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: i
        })
    }
    static credentialFromResult(e) {
        return On.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return On.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e)
            return null;
        const {oauthIdToken: i, oauthAccessToken: r} = e;
        if (!i && !r)
            return null;
        try {
            return On.credential(i, r)
        } catch {
            return null
        }
    }
}
On.GOOGLE_SIGN_IN_METHOD = "google.com";
On.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi extends Qr {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return es._fromParams({
            providerId: mi.PROVIDER_ID,
            signInMethod: mi.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return mi.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return mi.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken"in e) || !e.oauthAccessToken)
            return null;
        try {
            return mi.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
mi.GITHUB_SIGN_IN_METHOD = "github.com";
mi.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi extends Qr {
    constructor() {
        super("twitter.com")
    }
    static credential(e, i) {
        return es._fromParams({
            providerId: gi.PROVIDER_ID,
            signInMethod: gi.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: i
        })
    }
    static credentialFromResult(e) {
        return gi.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return gi.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e)
            return null;
        const {oauthAccessToken: i, oauthTokenSecret: r} = e;
        if (!i || !r)
            return null;
        try {
            return gi.credential(i, r)
        } catch {
            return null
        }
    }
}
gi.TWITTER_SIGN_IN_METHOD = "twitter.com";
gi.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na {
    constructor(e) {
        this.user = e.user,
        this.providerId = e.providerId,
        this._tokenResponse = e._tokenResponse,
        this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, i, r, o=!1) {
        const c = await Zt._fromIdTokenResponse(e, r, o)
          , d = tv(r);
        return new na({
            user: c,
            providerId: d,
            _tokenResponse: r,
            operationType: i
        })
    }
    static async _forOperation(e, i, r) {
        await e._updateTokensIfNecessary(r, !0);
        const o = tv(r);
        return new na({
            user: e,
            providerId: o,
            _tokenResponse: r,
            operationType: i
        })
    }
}
function tv(s) {
    return s.providerId ? s.providerId : "phoneNumber"in s ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo extends Ri {
    constructor(e, i, r, o) {
        var c;
        super(i.code, i.message),
        this.operationType = r,
        this.user = o,
        Object.setPrototypeOf(this, jo.prototype),
        this.customData = {
            appName: e.name,
            tenantId: (c = e.tenantId) !== null && c !== void 0 ? c : void 0,
            _serverResponse: i.customData._serverResponse,
            operationType: r
        }
    }
    static _fromErrorAndOperation(e, i, r, o) {
        return new jo(e,i,r,o)
    }
}
function Gy(s, e, i, r) {
    return (e === "reauthenticate" ? i._getReauthenticationResolver(s) : i._getIdTokenResponse(s)).catch(c => {
        throw c.code === "auth/multi-factor-auth-required" ? jo._fromErrorAndOperation(s, c, e, r) : c
    }
    )
}
async function lA(s, e, i=!1) {
    const r = await Mr(s, e._linkToIdToken(s.auth, await s.getIdToken()), i);
    return na._forOperation(s, "link", r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oA(s, e, i=!1) {
    const {auth: r} = s;
    if (Ft(r.app))
        return Promise.reject(Ei(r));
    const o = "reauthenticate";
    try {
        const c = await Mr(s, Gy(r, o, e, s), i);
        ne(c.idToken, r, "internal-error");
        const d = Gd(c.idToken);
        ne(d, r, "internal-error");
        const {sub: h} = d;
        return ne(s.uid === h, r, "user-mismatch"),
        na._forOperation(s, o, c)
    } catch (c) {
        throw (c == null ? void 0 : c.code) === "auth/user-not-found" && Kt(r, "user-mismatch"),
        c
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yy(s, e, i=!1) {
    if (Ft(s.app))
        return Promise.reject(Ei(s));
    const r = "signIn"
      , o = await Gy(s, r, e)
      , c = await na._fromIdTokenResponse(s, r, o);
    return i || await s._updateCurrentUser(c.user),
    c
}
async function cA(s, e) {
    return Yy(as(s), e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function uA(s) {
    const e = as(s);
    e._getPasswordPolicyInternal() && await e._updatePasswordPolicy()
}
function fA(s, e, i) {
    return Ft(s.app) ? Promise.reject(Ei(s)) : cA(vt(s), da.credential(e, i)).catch(async r => {
        throw r.code === "auth/password-does-not-meet-requirements" && uA(s),
        r
    }
    )
}
function dA(s, e, i, r) {
    return vt(s).onIdTokenChanged(e, i, r)
}
function hA(s, e, i) {
    return vt(s).beforeAuthStateChanged(e, i)
}
function pA(s, e, i, r) {
    return vt(s).onAuthStateChanged(e, i, r)
}
function mA(s) {
    return vt(s).signOut()
}
const zo = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fy {
    constructor(e, i) {
        this.storageRetriever = e,
        this.type = i
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(zo, "1"),
            this.storage.removeItem(zo),
            Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, i) {
        return this.storage.setItem(e, JSON.stringify(i)),
        Promise.resolve()
    }
    _get(e) {
        const i = this.storage.getItem(e);
        return Promise.resolve(i ? JSON.parse(i) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e),
        Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gA = 1e3
  , _A = 10;
class Ky extends Fy {
    constructor() {
        super( () => window.localStorage, "LOCAL"),
        this.boundEventHandler = (e, i) => this.onStorageEvent(e, i),
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.fallbackToPolling = zy(),
        this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (const i of Object.keys(this.listeners)) {
            const r = this.storage.getItem(i)
              , o = this.localCache[i];
            r !== o && e(i, o, r)
        }
    }
    onStorageEvent(e, i=!1) {
        if (!e.key) {
            this.forAllChangedKeys( (d, h, p) => {
                this.notifyListeners(d, p)
            }
            );
            return
        }
        const r = e.key;
        i ? this.detachListener() : this.stopPolling();
        const o = () => {
            const d = this.storage.getItem(r);
            !i && this.localCache[r] === d || this.notifyListeners(r, d)
        }
          , c = this.storage.getItem(r);
        Lw() && c !== e.newValue && e.newValue !== e.oldValue ? setTimeout(o, _A) : o()
    }
    notifyListeners(e, i) {
        this.localCache[e] = i;
        const r = this.listeners[e];
        if (r)
            for (const o of Array.from(r))
                o(i && JSON.parse(i))
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval( () => {
            this.forAllChangedKeys( (e, i, r) => {
                this.onStorageEvent(new StorageEvent("storage",{
                    key: e,
                    oldValue: i,
                    newValue: r
                }), !0)
            }
            )
        }
        , gA)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
        this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, i) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] || (this.listeners[e] = new Set,
        this.localCache[e] = this.storage.getItem(e)),
        this.listeners[e].add(i)
    }
    _removeListener(e, i) {
        this.listeners[e] && (this.listeners[e].delete(i),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && (this.detachListener(),
        this.stopPolling())
    }
    async _set(e, i) {
        await super._set(e, i),
        this.localCache[e] = JSON.stringify(i)
    }
    async _get(e) {
        const i = await super._get(e);
        return this.localCache[e] = JSON.stringify(i),
        i
    }
    async _remove(e) {
        await super._remove(e),
        delete this.localCache[e]
    }
}
Ky.type = "LOCAL";
const vA = Ky;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qy extends Fy {
    constructor() {
        super( () => window.sessionStorage, "SESSION")
    }
    _addListener(e, i) {}
    _removeListener(e, i) {}
}
Qy.type = "SESSION";
const Xy = Qy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yA(s) {
    return Promise.all(s.map(async e => {
        try {
            return {
                fulfilled: !0,
                value: await e
            }
        } catch (i) {
            return {
                fulfilled: !1,
                reason: i
            }
        }
    }
    ))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac {
    constructor(e) {
        this.eventTarget = e,
        this.handlersMap = {},
        this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        const i = this.receivers.find(o => o.isListeningto(e));
        if (i)
            return i;
        const r = new ac(e);
        return this.receivers.push(r),
        r
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        const i = e
          , {eventId: r, eventType: o, data: c} = i.data
          , d = this.handlersMap[o];
        if (!(d != null && d.size))
            return;
        i.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: o
        });
        const h = Array.from(d).map(async m => m(i.origin, c))
          , p = await yA(h);
        i.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: o,
            response: p
        })
    }
    _subscribe(e, i) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set),
        this.handlersMap[e].add(i)
    }
    _unsubscribe(e, i) {
        this.handlersMap[e] && i && this.handlersMap[e].delete(i),
        (!i || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
ac.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xd(s="", e=10) {
    let i = "";
    for (let r = 0; r < e; r++)
        i += Math.floor(Math.random() * 10);
    return s + i
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EA {
    constructor(e) {
        this.target = e,
        this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e)
    }
    async _send(e, i, r=50) {
        const o = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!o)
            throw new Error("connection_unavailable");
        let c, d;
        return new Promise( (h, p) => {
            const m = Xd("", 20);
            o.port1.start();
            const y = setTimeout( () => {
                p(new Error("unsupported_event"))
            }
            , r);
            d = {
                messageChannel: o,
                onMessage(E) {
                    const v = E;
                    if (v.data.eventId === m)
                        switch (v.data.status) {
                        case "ack":
                            clearTimeout(y),
                            c = setTimeout( () => {
                                p(new Error("timeout"))
                            }
                            , 3e3);
                            break;
                        case "done":
                            clearTimeout(c),
                            h(v.data.response);
                            break;
                        default:
                            clearTimeout(y),
                            clearTimeout(c),
                            p(new Error("invalid_response"));
                            break
                        }
                }
            },
            this.handlers.add(d),
            o.port1.addEventListener("message", d.onMessage),
            this.target.postMessage({
                eventType: e,
                eventId: m,
                data: i
            }, [o.port2])
        }
        ).finally( () => {
            d && this.removeMessageHandler(d)
        }
        )
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dn() {
    return window
}
function bA(s) {
    dn().location.href = s
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wy() {
    return typeof dn().WorkerGlobalScope < "u" && typeof dn().importScripts == "function"
}
async function SA() {
    if (!(navigator != null && navigator.serviceWorker))
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function TA() {
    var s;
    return ((s = navigator == null ? void 0 : navigator.serviceWorker) === null || s === void 0 ? void 0 : s.controller) || null
}
function CA() {
    return Wy() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $y = "firebaseLocalStorageDb"
  , wA = 1
  , Ho = "firebaseLocalStorage"
  , Zy = "fbase_key";
class Xr {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise( (e, i) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }
            ),
            this.request.addEventListener("error", () => {
                i(this.request.error)
            }
            )
        }
        )
    }
}
function rc(s, e) {
    return s.transaction([Ho], e ? "readwrite" : "readonly").objectStore(Ho)
}
function AA() {
    const s = indexedDB.deleteDatabase($y);
    return new Xr(s).toPromise()
}
function fd() {
    const s = indexedDB.open($y, wA);
    return new Promise( (e, i) => {
        s.addEventListener("error", () => {
            i(s.error)
        }
        ),
        s.addEventListener("upgradeneeded", () => {
            const r = s.result;
            try {
                r.createObjectStore(Ho, {
                    keyPath: Zy
                })
            } catch (o) {
                i(o)
            }
        }
        ),
        s.addEventListener("success", async () => {
            const r = s.result;
            r.objectStoreNames.contains(Ho) ? e(r) : (r.close(),
            await AA(),
            e(await fd()))
        }
        )
    }
    )
}
async function nv(s, e, i) {
    const r = rc(s, !0).put({
        [Zy]: e,
        value: i
    });
    return new Xr(r).toPromise()
}
async function RA(s, e) {
    const i = rc(s, !1).get(e)
      , r = await new Xr(i).toPromise();
    return r === void 0 ? null : r.value
}
function iv(s, e) {
    const i = rc(s, !0).delete(e);
    return new Xr(i).toPromise()
}
const NA = 800
  , xA = 3;
class Jy {
    constructor() {
        this.type = "LOCAL",
        this._shouldAllowMigration = !0,
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.pendingWrites = 0,
        this.receiver = null,
        this.sender = null,
        this.serviceWorkerReceiverAvailable = !1,
        this.activeServiceWorker = null,
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then( () => {}
        , () => {}
        )
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await fd(),
        this.db)
    }
    async _withRetries(e) {
        let i = 0;
        for (; ; )
            try {
                const r = await this._openDb();
                return await e(r)
            } catch (r) {
                if (i++ > xA)
                    throw r;
                this.db && (this.db.close(),
                this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return Wy() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = ac._getInstance(CA()),
        this.receiver._subscribe("keyChanged", async (e, i) => ({
            keyProcessed: (await this._poll()).includes(i.key)
        })),
        this.receiver._subscribe("ping", async (e, i) => ["keyChanged"])
    }
    async initializeSender() {
        var e, i;
        if (this.activeServiceWorker = await SA(),
        !this.activeServiceWorker)
            return;
        this.sender = new EA(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((i = r[0]) === null || i === void 0) && i.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || TA() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: e
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch {}
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const e = await fd();
            return await nv(e, zo, "1"),
            await iv(e, zo),
            !0
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, i) {
        return this._withPendingWrite(async () => (await this._withRetries(r => nv(r, e, i)),
        this.localCache[e] = i,
        this.notifyServiceWorker(e)))
    }
    async _get(e) {
        const i = await this._withRetries(r => RA(r, e));
        return this.localCache[e] = i,
        i
    }
    async _remove(e) {
        return this._withPendingWrite(async () => (await this._withRetries(i => iv(i, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)))
    }
    async _poll() {
        const e = await this._withRetries(o => {
            const c = rc(o, !1).getAll();
            return new Xr(c).toPromise()
        }
        );
        if (!e)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const i = []
          , r = new Set;
        if (e.length !== 0)
            for (const {fbase_key: o, value: c} of e)
                r.add(o),
                JSON.stringify(this.localCache[o]) !== JSON.stringify(c) && (this.notifyListeners(o, c),
                i.push(o));
        for (const o of Object.keys(this.localCache))
            this.localCache[o] && !r.has(o) && (this.notifyListeners(o, null),
            i.push(o));
        return i
    }
    notifyListeners(e, i) {
        this.localCache[e] = i;
        const r = this.listeners[e];
        if (r)
            for (const o of Array.from(r))
                o(i)
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval(async () => this._poll(), NA)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
        this.pollTimer = null)
    }
    _addListener(e, i) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
        this.listeners[e] || (this.listeners[e] = new Set,
        this._get(e)),
        this.listeners[e].add(i)
    }
    _removeListener(e, i) {
        this.listeners[e] && (this.listeners[e].delete(i),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
Jy.type = "LOCAL";
const OA = Jy;
new Kr(3e4,6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eE(s, e) {
    return e ? Dn(e) : (ne(s._popupRedirectResolver, s, "argument-error"),
    s._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wd extends Fd {
    constructor(e) {
        super("custom", "custom"),
        this.params = e
    }
    _getIdTokenResponse(e) {
        return $s(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, i) {
        return $s(e, this._buildIdpRequest(i))
    }
    _getReauthenticationResolver(e) {
        return $s(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        const i = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (i.idToken = e),
        i
    }
}
function IA(s) {
    return Yy(s.auth, new Wd(s), s.bypassAuthState)
}
function DA(s) {
    const {auth: e, user: i} = s;
    return ne(i, e, "internal-error"),
    oA(i, new Wd(s), s.bypassAuthState)
}
async function MA(s) {
    const {auth: e, user: i} = s;
    return ne(i, e, "internal-error"),
    lA(i, new Wd(s), s.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tE {
    constructor(e, i, r, o, c=!1) {
        this.auth = e,
        this.resolver = r,
        this.user = o,
        this.bypassAuthState = c,
        this.pendingPromise = null,
        this.eventManager = null,
        this.filter = Array.isArray(i) ? i : [i]
    }
    execute() {
        return new Promise(async (e, i) => {
            this.pendingPromise = {
                resolve: e,
                reject: i
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                await this.onExecution(),
                this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        }
        )
    }
    async onAuthEvent(e) {
        const {urlResponse: i, sessionId: r, postBody: o, tenantId: c, error: d, type: h} = e;
        if (d) {
            this.reject(d);
            return
        }
        const p = {
            auth: this.auth,
            requestUri: i,
            sessionId: r,
            tenantId: c || void 0,
            postBody: o || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(h)(p))
        } catch (m) {
            this.reject(m)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
            return IA;
        case "linkViaPopup":
        case "linkViaRedirect":
            return MA;
        case "reauthViaPopup":
        case "reauthViaRedirect":
            return DA;
        default:
            Kt(this.auth, "internal-error")
        }
    }
    resolve(e) {
        jn(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp()
    }
    reject(e) {
        jn(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
        this.pendingPromise = null,
        this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kA = new Kr(2e3,1e4);
async function LA(s, e, i) {
    if (Ft(s.app))
        return Promise.reject(tn(s, "operation-not-supported-in-this-environment"));
    const r = as(s);
    mw(s, e, Qd);
    const o = eE(r, i);
    return new Xi(r,"signInViaPopup",e,o).executeNotNull()
}
class Xi extends tE {
    constructor(e, i, r, o, c) {
        super(e, i, o, c),
        this.provider = r,
        this.authWindow = null,
        this.pollId = null,
        Xi.currentPopupAction && Xi.currentPopupAction.cancel(),
        Xi.currentPopupAction = this
    }
    async executeNotNull() {
        const e = await this.execute();
        return ne(e, this.auth, "internal-error"),
        e
    }
    async onExecution() {
        jn(this.filter.length === 1, "Popup operations only handle one event");
        const e = Xd();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e),
        this.authWindow.associatedEvent = e,
        this.resolver._originValidation(this.auth).catch(i => {
            this.reject(i)
        }
        ),
        this.resolver._isIframeWebStorageSupported(this.auth, i => {
            i || this.reject(tn(this.auth, "web-storage-unsupported"))
        }
        ),
        this.pollUserCancellation()
    }
    get eventId() {
        var e;
        return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
    }
    cancel() {
        this.reject(tn(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        this.authWindow = null,
        this.pollId = null,
        Xi.currentPopupAction = null
    }
    pollUserCancellation() {
        const e = () => {
            var i, r;
            if (!((r = (i = this.authWindow) === null || i === void 0 ? void 0 : i.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout( () => {
                    this.pollId = null,
                    this.reject(tn(this.auth, "popup-closed-by-user"))
                }
                , 8e3);
                return
            }
            this.pollId = window.setTimeout(e, kA.get())
        }
        ;
        e()
    }
}
Xi.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const UA = "pendingRedirect"
  , Ro = new Map;
class PA extends tE {
    constructor(e, i, r=!1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], i, void 0, r),
        this.eventId = null
    }
    async execute() {
        let e = Ro.get(this.auth._key());
        if (!e) {
            try {
                const r = await jA(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(r)
            } catch (i) {
                e = () => Promise.reject(i)
            }
            Ro.set(this.auth._key(), e)
        }
        return this.bypassAuthState || Ro.set(this.auth._key(), () => Promise.resolve(null)),
        e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect")
            return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            const i = await this.auth._redirectUserForId(e.eventId);
            if (i)
                return this.user = i,
                super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function jA(s, e) {
    const i = BA(e)
      , r = HA(s);
    if (!await r._isAvailable())
        return !1;
    const o = await r._get(i) === "true";
    return await r._remove(i),
    o
}
function zA(s, e) {
    Ro.set(s._key(), e)
}
function HA(s) {
    return Dn(s._redirectPersistence)
}
function BA(s) {
    return Ao(UA, s.config.apiKey, s.name)
}
async function qA(s, e, i=!1) {
    if (Ft(s.app))
        return Promise.reject(Ei(s));
    const r = as(s)
      , o = eE(r, e)
      , d = await new PA(r,o,i).execute();
    return d && !i && (delete d.user._redirectEventId,
    await r._persistUserIfCurrent(d.user),
    await r._setRedirectUser(null, e)),
    d
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VA = 10 * 60 * 1e3;
class GA {
    constructor(e) {
        this.auth = e,
        this.cachedEventUids = new Set,
        this.consumers = new Set,
        this.queuedRedirectEvent = null,
        this.hasHandledPotentialRedirect = !1,
        this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e),
        this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e))
            return !1;
        let i = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(e, r) && (i = !0,
            this.sendToConsumer(e, r),
            this.saveEventToCache(e))
        }
        ),
        this.hasHandledPotentialRedirect || !YA(e) || (this.hasHandledPotentialRedirect = !0,
        i || (this.queuedRedirectEvent = e,
        i = !0)),
        i
    }
    sendToConsumer(e, i) {
        var r;
        if (e.error && !nE(e)) {
            const o = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            i.onError(tn(this.auth, o))
        } else
            i.onAuthEvent(e)
    }
    isEventForConsumer(e, i) {
        const r = i.eventId === null || !!e.eventId && e.eventId === i.eventId;
        return i.filter.includes(e.type) && r
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= VA && this.cachedEventUids.clear(),
        this.cachedEventUids.has(sv(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(sv(e)),
        this.lastProcessedEventTime = Date.now()
    }
}
function sv(s) {
    return [s.type, s.eventId, s.sessionId, s.tenantId].filter(e => e).join("-")
}
function nE({type: s, error: e}) {
    return s === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
}
function YA(s) {
    switch (s.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
        return !0;
    case "unknown":
        return nE(s);
    default:
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function FA(s, e={}) {
    return Ni(s, "GET", "/v1/projects", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const KA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  , QA = /^https?/;
async function XA(s) {
    if (s.config.emulator)
        return;
    const {authorizedDomains: e} = await FA(s);
    for (const i of e)
        try {
            if (WA(i))
                return
        } catch {}
    Kt(s, "unauthorized-domain")
}
function WA(s) {
    const e = cd()
      , {protocol: i, hostname: r} = new URL(e);
    if (s.startsWith("chrome-extension://")) {
        const d = new URL(s);
        return d.hostname === "" && r === "" ? i === "chrome-extension:" && s.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : i === "chrome-extension:" && d.hostname === r
    }
    if (!QA.test(i))
        return !1;
    if (KA.test(s))
        return r === s;
    const o = s.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + o + "|" + o + ")$","i").test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $A = new Kr(3e4,6e4);
function av() {
    const s = dn().___jsl;
    if (s != null && s.H) {
        for (const e of Object.keys(s.H))
            if (s.H[e].r = s.H[e].r || [],
            s.H[e].L = s.H[e].L || [],
            s.H[e].r = [...s.H[e].L],
            s.CP)
                for (let i = 0; i < s.CP.length; i++)
                    s.CP[i] = null
    }
}
function ZA(s) {
    return new Promise( (e, i) => {
        var r, o, c;
        function d() {
            av(),
            gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                }
                ,
                ontimeout: () => {
                    av(),
                    i(tn(s, "network-request-failed"))
                }
                ,
                timeout: $A.get()
            })
        }
        if (!((o = (r = dn().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || o === void 0) && o.Iframe)
            e(gapi.iframes.getContext());
        else if (!((c = dn().gapi) === null || c === void 0) && c.load)
            d();
        else {
            const h = Gw("iframefcb");
            return dn()[h] = () => {
                gapi.load ? d() : i(tn(s, "network-request-failed"))
            }
            ,
            By(`${Vw()}?onload=${h}`).catch(p => i(p))
        }
    }
    ).catch(e => {
        throw No = null,
        e
    }
    )
}
let No = null;
function JA(s) {
    return No = No || ZA(s),
    No
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const eR = new Kr(5e3,15e3)
  , tR = "__/auth/iframe"
  , nR = "emulator/auth/iframe"
  , iR = {
    style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
}
  , sR = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function aR(s) {
    const e = s.config;
    ne(e.authDomain, s, "auth-domain-config-required");
    const i = e.emulator ? Vd(e, nR) : `https://${s.config.authDomain}/${tR}`
      , r = {
        apiKey: e.apiKey,
        appName: s.name,
        v: fa
    }
      , o = sR.get(s.config.apiHost);
    o && (r.eid = o);
    const c = s._getFrameworks();
    return c.length && (r.fw = c.join(",")),
    `${i}?${ua(r).slice(1)}`
}
async function rR(s) {
    const e = await JA(s)
      , i = dn().gapi;
    return ne(i, s, "internal-error"),
    e.open({
        where: document.body,
        url: aR(s),
        messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: iR,
        dontclear: !0
    }, r => new Promise(async (o, c) => {
        await r.restyle({
            setHideOnLeave: !1
        });
        const d = tn(s, "network-request-failed")
          , h = dn().setTimeout( () => {
            c(d)
        }
        , eR.get());
        function p() {
            dn().clearTimeout(h),
            o(r)
        }
        r.ping(p).then(p, () => {
            c(d)
        }
        )
    }
    ))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lR = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
  , oR = 500
  , cR = 600
  , uR = "_blank"
  , fR = "http://localhost";
class rv {
    constructor(e) {
        this.window = e,
        this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch {}
    }
}
function dR(s, e, i, r=oR, o=cR) {
    const c = Math.max((window.screen.availHeight - o) / 2, 0).toString()
      , d = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let h = "";
    const p = Object.assign(Object.assign({}, lR), {
        width: r.toString(),
        height: o.toString(),
        top: c,
        left: d
    })
      , m = _t().toLowerCase();
    i && (h = ky(m) ? uR : i),
    Dy(m) && (e = e || fR,
    p.scrollbars = "yes");
    const y = Object.entries(p).reduce( (v, [x,A]) => `${v}${x}=${A},`, "");
    if (kw(m) && h !== "_self")
        return hR(e || "", h),
        new rv(null);
    const E = window.open(e || "", h, y);
    ne(E, s, "popup-blocked");
    try {
        E.focus()
    } catch {}
    return new rv(E)
}
function hR(s, e) {
    const i = document.createElement("a");
    i.href = s,
    i.target = e;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    i.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pR = "__/auth/handler"
  , mR = "emulator/auth/handler"
  , gR = encodeURIComponent("fac");
async function lv(s, e, i, r, o, c) {
    ne(s.config.authDomain, s, "auth-domain-config-required"),
    ne(s.config.apiKey, s, "invalid-api-key");
    const d = {
        apiKey: s.config.apiKey,
        appName: s.name,
        authType: i,
        redirectUrl: r,
        v: fa,
        eventId: o
    };
    if (e instanceof Qd) {
        e.setDefaultLanguage(s.languageCode),
        d.providerId = e.providerId || "",
        id(e.getCustomParameters()) || (d.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [y,E] of Object.entries({}))
            d[y] = E
    }
    if (e instanceof Qr) {
        const y = e.getScopes().filter(E => E !== "");
        y.length > 0 && (d.scopes = y.join(","))
    }
    s.tenantId && (d.tid = s.tenantId);
    const h = d;
    for (const y of Object.keys(h))
        h[y] === void 0 && delete h[y];
    const p = await s._getAppCheckToken()
      , m = p ? `#${gR}=${encodeURIComponent(p)}` : "";
    return `${_R(s)}?${ua(h).slice(1)}${m}`
}
function _R({config: s}) {
    return s.emulator ? Vd(s, mR) : `https://${s.authDomain}/${pR}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ff = "webStorageSupport";
class vR {
    constructor() {
        this.eventManagers = {},
        this.iframes = {},
        this.originValidationPromises = {},
        this._redirectPersistence = Xy,
        this._completeRedirectFn = qA,
        this._overrideRedirectResult = zA
    }
    async _openPopup(e, i, r, o) {
        var c;
        jn((c = this.eventManagers[e._key()]) === null || c === void 0 ? void 0 : c.manager, "_initialize() not called before _openPopup()");
        const d = await lv(e, i, r, cd(), o);
        return dR(e, d, Xd())
    }
    async _openRedirect(e, i, r, o) {
        await this._originValidation(e);
        const c = await lv(e, i, r, cd(), o);
        return bA(c),
        new Promise( () => {}
        )
    }
    _initialize(e) {
        const i = e._key();
        if (this.eventManagers[i]) {
            const {manager: o, promise: c} = this.eventManagers[i];
            return o ? Promise.resolve(o) : (jn(c, "If manager is not set, promise should be"),
            c)
        }
        const r = this.initAndGetManager(e);
        return this.eventManagers[i] = {
            promise: r
        },
        r.catch( () => {
            delete this.eventManagers[i]
        }
        ),
        r
    }
    async initAndGetManager(e) {
        const i = await rR(e)
          , r = new GA(e);
        return i.register("authEvent", o => (ne(o == null ? void 0 : o.authEvent, e, "invalid-auth-event"),
        {
            status: r.onEvent(o.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
        this.eventManagers[e._key()] = {
            manager: r
        },
        this.iframes[e._key()] = i,
        r
    }
    _isIframeWebStorageSupported(e, i) {
        this.iframes[e._key()].send(Ff, {
            type: Ff
        }, o => {
            var c;
            const d = (c = o == null ? void 0 : o[0]) === null || c === void 0 ? void 0 : c[Ff];
            d !== void 0 && i(!!d),
            Kt(e, "internal-error")
        }
        , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        const i = e._key();
        return this.originValidationPromises[i] || (this.originValidationPromises[i] = XA(e)),
        this.originValidationPromises[i]
    }
    get _shouldInitProactively() {
        return zy() || My() || Yd()
    }
}
const yR = vR;
var ov = "@firebase/auth"
  , cv = "1.10.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ER {
    constructor(e) {
        this.auth = e,
        this.internalListeners = new Map
    }
    getUid() {
        var e;
        return this.assertAuthConfigured(),
        ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        } : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(),
        this.internalListeners.has(e))
            return;
        const i = this.auth.onIdTokenChanged(r => {
            e((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        }
        );
        this.internalListeners.set(e, i),
        this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const i = this.internalListeners.get(e);
        i && (this.internalListeners.delete(e),
        i(),
        this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        ne(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bR(s) {
    switch (s) {
    case "Node":
        return "node";
    case "ReactNative":
        return "rn";
    case "Worker":
        return "webworker";
    case "Cordova":
        return "cordova";
    case "WebExtension":
        return "web-extension";
    default:
        return
    }
}
function SR(s) {
    ta(new Ji("auth", (e, {options: i}) => {
        const r = e.getProvider("app").getImmediate()
          , o = e.getProvider("heartbeat")
          , c = e.getProvider("app-check-internal")
          , {apiKey: d, authDomain: h} = r.options;
        ne(d && !d.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        const p = {
            apiKey: d,
            authDomain: h,
            clientPlatform: s,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Hy(s)
        }
          , m = new Hw(r,o,c,p);
        return Ww(m, i),
        m
    }
    ,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback( (e, i, r) => {
        e.getProvider("auth-internal").initialize()
    }
    )),
    ta(new Ji("auth-internal",e => {
        const i = as(e.getProvider("auth").getImmediate());
        return (r => new ER(r))(i)
    }
    ,"PRIVATE").setInstantiationMode("EXPLICIT")),
    yi(ov, cv, bR(s)),
    yi(ov, cv, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TR = 5 * 60
  , CR = py("authIdTokenMaxAge") || TR;
let uv = null;
const wR = s => async e => {
    const i = e && await e.getIdTokenResult()
      , r = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
    if (r && r > CR)
        return;
    const o = i == null ? void 0 : i.token;
    uv !== o && (uv = o,
    await fetch(s, {
        method: o ? "POST" : "DELETE",
        headers: o ? {
            Authorization: `Bearer ${o}`
        } : {}
    }))
}
;
function AR(s=Sy()) {
    const e = zd(s, "auth");
    if (e.isInitialized())
        return e.getImmediate();
    const i = Xw(s, {
        popupRedirectResolver: yR,
        persistence: [OA, vA, Xy]
    })
      , r = py("authTokenSyncURL");
    if (r && typeof isSecureContext == "boolean" && isSecureContext) {
        const c = new URL(r,location.origin);
        if (location.origin === c.origin) {
            const d = wR(c.toString());
            hA(i, d, () => d(i.currentUser)),
            dA(i, h => d(h))
        }
    }
    const o = dy("auth");
    return o && $w(i, `http://${o}`),
    i
}
function RR() {
    var s, e;
    return (e = (s = document.getElementsByTagName("head")) === null || s === void 0 ? void 0 : s[0]) !== null && e !== void 0 ? e : document
}
Bw({
    loadJS(s) {
        return new Promise( (e, i) => {
            const r = document.createElement("script");
            r.setAttribute("src", s),
            r.onload = e,
            r.onerror = o => {
                const c = tn("internal-error");
                c.customData = o,
                i(c)
            }
            ,
            r.type = "text/javascript",
            r.charset = "UTF-8",
            RR().appendChild(r)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
SR("Browser");
var fv = {};
const dv = "@firebase/database"
  , hv = "1.0.19";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let iE = "";
function NR(s) {
    iE = s
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xR {
    constructor(e) {
        this.domStorage_ = e,
        this.prefix_ = "firebase:"
    }
    set(e, i) {
        i == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Ze(i))
    }
    get(e) {
        const i = this.domStorage_.getItem(this.prefixedName_(e));
        return i == null ? null : Ir(i)
    }
    remove(e) {
        this.domStorage_.removeItem(this.prefixedName_(e))
    }
    prefixedName_(e) {
        return this.prefix_ + e
    }
    toString() {
        return this.domStorage_.toString()
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OR {
    constructor() {
        this.cache_ = {},
        this.isInMemoryStorage = !0
    }
    set(e, i) {
        i == null ? delete this.cache_[e] : this.cache_[e] = i
    }
    get(e) {
        return Hn(this.cache_, e) ? this.cache_[e] : null
    }
    remove(e) {
        delete this.cache_[e]
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sE = function(s) {
    try {
        if (typeof window < "u" && typeof window[s] < "u") {
            const e = window[s];
            return e.setItem("firebase:sentinel", "cache"),
            e.removeItem("firebase:sentinel"),
            new xR(e)
        }
    } catch {}
    return new OR
}
  , Wi = sE("localStorage")
  , IR = sE("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zs = new Pd("@firebase/database")
  , DR = function() {
    let s = 1;
    return function() {
        return s++
    }
}()
  , aE = function(s) {
    const e = n1(s)
      , i = new ZC;
    i.update(e);
    const r = i.digest();
    return Md.encodeByteArray(r)
}
  , Wr = function(...s) {
    let e = "";
    for (let i = 0; i < s.length; i++) {
        const r = s[i];
        Array.isArray(r) || r && typeof r == "object" && typeof r.length == "number" ? e += Wr.apply(null, r) : typeof r == "object" ? e += Ze(r) : e += r,
        e += " "
    }
    return e
};
let wr = null
  , pv = !0;
const MR = function(s, e) {
    G(!0, "Can't turn on custom loggers persistently."),
    Zs.logLevel = xe.VERBOSE,
    wr = Zs.log.bind(Zs)
}
  , pt = function(...s) {
    if (pv === !0 && (pv = !1,
    wr === null && IR.get("logging_enabled") === !0 && MR()),
    wr) {
        const e = Wr.apply(null, s);
        wr(e)
    }
}
  , $r = function(s) {
    return function(...e) {
        pt(s, ...e)
    }
}
  , dd = function(...s) {
    const e = "FIREBASE INTERNAL ERROR: " + Wr(...s);
    Zs.error(e)
}
  , zn = function(...s) {
    const e = `FIREBASE FATAL ERROR: ${Wr(...s)}`;
    throw Zs.error(e),
    new Error(e)
}
  , wt = function(...s) {
    const e = "FIREBASE WARNING: " + Wr(...s);
    Zs.warn(e)
}
  , kR = function() {
    typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
}
  , rE = function(s) {
    return typeof s == "number" && (s !== s || s === Number.POSITIVE_INFINITY || s === Number.NEGATIVE_INFINITY)
}
  , LR = function(s) {
    if (document.readyState === "complete")
        s();
    else {
        let e = !1;
        const i = function() {
            if (!document.body) {
                setTimeout(i, Math.floor(10));
                return
            }
            e || (e = !0,
            s())
        };
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", i, !1),
        window.addEventListener("load", i, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
            document.readyState === "complete" && i()
        }
        ),
        window.attachEvent("onload", i))
    }
}
  , ia = "[MIN_NAME]"
  , ts = "[MAX_NAME]"
  , ha = function(s, e) {
    if (s === e)
        return 0;
    if (s === ia || e === ts)
        return -1;
    if (e === ia || s === ts)
        return 1;
    {
        const i = mv(s)
          , r = mv(e);
        return i !== null ? r !== null ? i - r === 0 ? s.length - e.length : i - r : -1 : r !== null ? 1 : s < e ? -1 : 1
    }
}
  , UR = function(s, e) {
    return s === e ? 0 : s < e ? -1 : 1
}
  , _r = function(s, e) {
    if (e && s in e)
        return e[s];
    throw new Error("Missing required key (" + s + ") in object: " + Ze(e))
}
  , $d = function(s) {
    if (typeof s != "object" || s === null)
        return Ze(s);
    const e = [];
    for (const r in s)
        e.push(r);
    e.sort();
    let i = "{";
    for (let r = 0; r < e.length; r++)
        r !== 0 && (i += ","),
        i += Ze(e[r]),
        i += ":",
        i += $d(s[e[r]]);
    return i += "}",
    i
}
  , lE = function(s, e) {
    const i = s.length;
    if (i <= e)
        return [s];
    const r = [];
    for (let o = 0; o < i; o += e)
        o + e > i ? r.push(s.substring(o, i)) : r.push(s.substring(o, o + e));
    return r
};
function At(s, e) {
    for (const i in s)
        s.hasOwnProperty(i) && e(i, s[i])
}
const oE = function(s) {
    G(!rE(s), "Invalid JSON number");
    const e = 11
      , i = 52
      , r = (1 << e - 1) - 1;
    let o, c, d, h, p;
    s === 0 ? (c = 0,
    d = 0,
    o = 1 / s === -1 / 0 ? 1 : 0) : (o = s < 0,
    s = Math.abs(s),
    s >= Math.pow(2, 1 - r) ? (h = Math.min(Math.floor(Math.log(s) / Math.LN2), r),
    c = h + r,
    d = Math.round(s * Math.pow(2, i - h) - Math.pow(2, i))) : (c = 0,
    d = Math.round(s / Math.pow(2, 1 - r - i))));
    const m = [];
    for (p = i; p; p -= 1)
        m.push(d % 2 ? 1 : 0),
        d = Math.floor(d / 2);
    for (p = e; p; p -= 1)
        m.push(c % 2 ? 1 : 0),
        c = Math.floor(c / 2);
    m.push(o ? 1 : 0),
    m.reverse();
    const y = m.join("");
    let E = "";
    for (p = 0; p < 64; p += 8) {
        let v = parseInt(y.substr(p, 8), 2).toString(16);
        v.length === 1 && (v = "0" + v),
        E = E + v
    }
    return E.toLowerCase()
}
  , PR = function() {
    return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href))
}
  , jR = function() {
    return typeof Windows == "object" && typeof Windows.UI == "object"
};
function zR(s, e) {
    let i = "Unknown Error";
    s === "too_big" ? i = "The data requested exceeds the maximum size that can be accessed with a single request." : s === "permission_denied" ? i = "Client doesn't have permission to access the desired data." : s === "unavailable" && (i = "The service is unavailable");
    const r = new Error(s + " at " + e._path.toString() + ": " + i);
    return r.code = s.toUpperCase(),
    r
}
const HR = new RegExp("^-?(0*)\\d{1,10}$")
  , BR = -2147483648
  , qR = 2147483647
  , mv = function(s) {
    if (HR.test(s)) {
        const e = Number(s);
        if (e >= BR && e <= qR)
            return e
    }
    return null
}
  , pa = function(s) {
    try {
        s()
    } catch (e) {
        setTimeout( () => {
            const i = e.stack || "";
            throw wt("Exception was thrown by user callback.", i),
            e
        }
        , Math.floor(0))
    }
}
  , VR = function() {
    return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
}
  , Ar = function(s, e) {
    const i = setTimeout(s, e);
    return typeof i == "number" && typeof Deno < "u" && Deno.unrefTimer ? Deno.unrefTimer(i) : typeof i == "object" && i.unref && i.unref(),
    i
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GR {
    constructor(e, i) {
        this.appCheckProvider = i,
        this.appName = e.name,
        Ft(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken),
        this.appCheck = i == null ? void 0 : i.getImmediate({
            optional: !0
        }),
        this.appCheck || i == null || i.get().then(r => this.appCheck = r)
    }
    getToken(e) {
        if (this.serverAppAppCheckToken) {
            if (e)
                throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
            return Promise.resolve({
                token: this.serverAppAppCheckToken
            })
        }
        return this.appCheck ? this.appCheck.getToken(e) : new Promise( (i, r) => {
            setTimeout( () => {
                this.appCheck ? this.getToken(e).then(i, r) : i(null)
            }
            , 0)
        }
        )
    }
    addTokenChangeListener(e) {
        var i;
        (i = this.appCheckProvider) === null || i === void 0 || i.get().then(r => r.addTokenListener(e))
    }
    notifyForInvalidToken() {
        wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class YR {
    constructor(e, i, r) {
        this.appName_ = e,
        this.firebaseOptions_ = i,
        this.authProvider_ = r,
        this.auth_ = null,
        this.auth_ = r.getImmediate({
            optional: !0
        }),
        this.auth_ || r.onInit(o => this.auth_ = o)
    }
    getToken(e) {
        return this.auth_ ? this.auth_.getToken(e).catch(i => i && i.code === "auth/token-not-initialized" ? (pt("Got auth/token-not-initialized error.  Treating as null token."),
        null) : Promise.reject(i)) : new Promise( (i, r) => {
            setTimeout( () => {
                this.auth_ ? this.getToken(e).then(i, r) : i(null)
            }
            , 0)
        }
        )
    }
    addTokenChangeListener(e) {
        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then(i => i.addAuthTokenListener(e))
    }
    removeTokenChangeListener(e) {
        this.authProvider_.get().then(i => i.removeAuthTokenListener(e))
    }
    notifyForInvalidToken() {
        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential"in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount"in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',
        wt(e)
    }
}
class xo {
    constructor(e) {
        this.accessToken = e
    }
    getToken(e) {
        return Promise.resolve({
            accessToken: this.accessToken
        })
    }
    addTokenChangeListener(e) {
        e(this.accessToken)
    }
    removeTokenChangeListener(e) {}
    notifyForInvalidToken() {}
}
xo.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zd = "5"
  , cE = "v"
  , uE = "s"
  , fE = "r"
  , dE = "f"
  , hE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/
  , pE = "ls"
  , mE = "p"
  , hd = "ac"
  , gE = "websocket"
  , _E = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vE {
    constructor(e, i, r, o, c=!1, d="", h=!1, p=!1, m=null) {
        this.secure = i,
        this.namespace = r,
        this.webSocketOnly = o,
        this.nodeAdmin = c,
        this.persistenceKey = d,
        this.includeNamespaceInQueryParams = h,
        this.isUsingEmulator = p,
        this.emulatorOptions = m,
        this._host = e.toLowerCase(),
        this._domain = this._host.substr(this._host.indexOf(".") + 1),
        this.internalHost = Wi.get("host:" + e) || this._host
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === "s-"
    }
    isCustomHost() {
        return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com"
    }
    get host() {
        return this._host
    }
    set host(e) {
        e !== this.internalHost && (this.internalHost = e,
        this.isCacheableHost() && Wi.set("host:" + this._host, this.internalHost))
    }
    toString() {
        let e = this.toURLString();
        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"),
        e
    }
    toURLString() {
        const e = this.secure ? "https://" : "http://"
          , i = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
        return `${e}${this.host}/${i}`
    }
}
function FR(s) {
    return s.host !== s.internalHost || s.isCustomHost() || s.includeNamespaceInQueryParams
}
function yE(s, e, i) {
    G(typeof e == "string", "typeof type must == string"),
    G(typeof i == "object", "typeof params must == object");
    let r;
    if (e === gE)
        r = (s.secure ? "wss://" : "ws://") + s.internalHost + "/.ws?";
    else if (e === _E)
        r = (s.secure ? "https://" : "http://") + s.internalHost + "/.lp?";
    else
        throw new Error("Unknown connection type: " + e);
    FR(s) && (i.ns = s.namespace);
    const o = [];
    return At(i, (c, d) => {
        o.push(c + "=" + d)
    }
    ),
    r + o.join("&")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class KR {
    constructor() {
        this.counters_ = {}
    }
    incrementCounter(e, i=1) {
        Hn(this.counters_, e) || (this.counters_[e] = 0),
        this.counters_[e] += i
    }
    get() {
        return IC(this.counters_)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kf = {}
  , Qf = {};
function Jd(s) {
    const e = s.toString();
    return Kf[e] || (Kf[e] = new KR),
    Kf[e]
}
function QR(s, e) {
    const i = s.toString();
    return Qf[i] || (Qf[i] = e()),
    Qf[i]
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class XR {
    constructor(e) {
        this.onMessage_ = e,
        this.pendingResponses = [],
        this.currentResponseNum = 0,
        this.closeAfterResponse = -1,
        this.onClose = null
    }
    closeAfter(e, i) {
        this.closeAfterResponse = e,
        this.onClose = i,
        this.closeAfterResponse < this.currentResponseNum && (this.onClose(),
        this.onClose = null)
    }
    handleResponse(e, i) {
        for (this.pendingResponses[e] = i; this.pendingResponses[this.currentResponseNum]; ) {
            const r = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let o = 0; o < r.length; ++o)
                r[o] && pa( () => {
                    this.onMessage_(r[o])
                }
                );
            if (this.currentResponseNum === this.closeAfterResponse) {
                this.onClose && (this.onClose(),
                this.onClose = null);
                break
            }
            this.currentResponseNum++
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gv = "start"
  , WR = "close"
  , $R = "pLPCommand"
  , ZR = "pRTLPCB"
  , EE = "id"
  , bE = "pw"
  , SE = "ser"
  , JR = "cb"
  , eN = "seg"
  , tN = "ts"
  , nN = "d"
  , iN = "dframe"
  , TE = 1870
  , CE = 30
  , sN = TE - CE
  , aN = 25e3
  , rN = 3e4;
class Qs {
    constructor(e, i, r, o, c, d, h) {
        this.connId = e,
        this.repoInfo = i,
        this.applicationId = r,
        this.appCheckToken = o,
        this.authToken = c,
        this.transportSessionId = d,
        this.lastSessionId = h,
        this.bytesSent = 0,
        this.bytesReceived = 0,
        this.everConnected_ = !1,
        this.log_ = $r(e),
        this.stats_ = Jd(i),
        this.urlFn = p => (this.appCheckToken && (p[hd] = this.appCheckToken),
        yE(i, _E, p))
    }
    open(e, i) {
        this.curSegmentNum = 0,
        this.onDisconnect_ = i,
        this.myPacketOrderer = new XR(e),
        this.isClosed_ = !1,
        this.connectTimeoutTimer_ = setTimeout( () => {
            this.log_("Timed out trying to connect."),
            this.onClosed_(),
            this.connectTimeoutTimer_ = null
        }
        , Math.floor(rN)),
        LR( () => {
            if (this.isClosed_)
                return;
            this.scriptTagHolder = new eh( (...c) => {
                const [d,h,p,m,y] = c;
                if (this.incrementIncomingBytes_(c),
                !!this.scriptTagHolder)
                    if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
                    this.connectTimeoutTimer_ = null),
                    this.everConnected_ = !0,
                    d === gv)
                        this.id = h,
                        this.password = p;
                    else if (d === WR)
                        h ? (this.scriptTagHolder.sendNewPolls = !1,
                        this.myPacketOrderer.closeAfter(h, () => {
                            this.onClosed_()
                        }
                        )) : this.onClosed_();
                    else
                        throw new Error("Unrecognized command received: " + d)
            }
            , (...c) => {
                const [d,h] = c;
                this.incrementIncomingBytes_(c),
                this.myPacketOrderer.handleResponse(d, h)
            }
            , () => {
                this.onClosed_()
            }
            ,this.urlFn);
            const r = {};
            r[gv] = "t",
            r[SE] = Math.floor(Math.random() * 1e8),
            this.scriptTagHolder.uniqueCallbackIdentifier && (r[JR] = this.scriptTagHolder.uniqueCallbackIdentifier),
            r[cE] = Zd,
            this.transportSessionId && (r[uE] = this.transportSessionId),
            this.lastSessionId && (r[pE] = this.lastSessionId),
            this.applicationId && (r[mE] = this.applicationId),
            this.appCheckToken && (r[hd] = this.appCheckToken),
            typeof location < "u" && location.hostname && hE.test(location.hostname) && (r[fE] = dE);
            const o = this.urlFn(r);
            this.log_("Connecting via long-poll to " + o),
            this.scriptTagHolder.addTag(o, () => {}
            )
        }
        )
    }
    start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password),
        this.addDisconnectPingFrame(this.id, this.password)
    }
    static forceAllow() {
        Qs.forceAllow_ = !0
    }
    static forceDisallow() {
        Qs.forceDisallow_ = !0
    }
    static isAvailable() {
        return Qs.forceAllow_ ? !0 : !Qs.forceDisallow_ && typeof document < "u" && document.createElement != null && !PR() && !jR()
    }
    markConnectionHealthy() {}
    shutdown_() {
        this.isClosed_ = !0,
        this.scriptTagHolder && (this.scriptTagHolder.close(),
        this.scriptTagHolder = null),
        this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame),
        this.myDisconnFrame = null),
        this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
        this.connectTimeoutTimer_ = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("Longpoll is closing itself"),
        this.shutdown_(),
        this.onDisconnect_ && (this.onDisconnect_(this.everConnected_),
        this.onDisconnect_ = null))
    }
    close() {
        this.isClosed_ || (this.log_("Longpoll is being closed."),
        this.shutdown_())
    }
    send(e) {
        const i = Ze(e);
        this.bytesSent += i.length,
        this.stats_.incrementCounter("bytes_sent", i.length);
        const r = uy(i)
          , o = lE(r, sN);
        for (let c = 0; c < o.length; c++)
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, o.length, o[c]),
            this.curSegmentNum++
    }
    addDisconnectPingFrame(e, i) {
        this.myDisconnFrame = document.createElement("iframe");
        const r = {};
        r[iN] = "t",
        r[EE] = e,
        r[bE] = i,
        this.myDisconnFrame.src = this.urlFn(r),
        this.myDisconnFrame.style.display = "none",
        document.body.appendChild(this.myDisconnFrame)
    }
    incrementIncomingBytes_(e) {
        const i = Ze(e).length;
        this.bytesReceived += i,
        this.stats_.incrementCounter("bytes_received", i)
    }
}
class eh {
    constructor(e, i, r, o) {
        this.onDisconnect = r,
        this.urlFn = o,
        this.outstandingRequests = new Set,
        this.pendingSegs = [],
        this.currentSerial = Math.floor(Math.random() * 1e8),
        this.sendNewPolls = !0;
        {
            this.uniqueCallbackIdentifier = DR(),
            window[$R + this.uniqueCallbackIdentifier] = e,
            window[ZR + this.uniqueCallbackIdentifier] = i,
            this.myIFrame = eh.createIFrame_();
            let c = "";
            this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (c = '<script>document.domain="' + document.domain + '";<\/script>');
            const d = "<html><body>" + c + "</body></html>";
            try {
                this.myIFrame.doc.open(),
                this.myIFrame.doc.write(d),
                this.myIFrame.doc.close()
            } catch (h) {
                pt("frame writing exception"),
                h.stack && pt(h.stack),
                pt(h)
            }
        }
    }
    static createIFrame_() {
        const e = document.createElement("iframe");
        if (e.style.display = "none",
        document.body) {
            document.body.appendChild(e);
            try {
                e.contentWindow.document || pt("No IE domain setting required")
            } catch {
                const r = document.domain;
                e.src = "javascript:void((function(){document.open();document.domain='" + r + "';document.close();})())"
            }
        } else
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document),
        e
    }
    close() {
        this.alive = !1,
        this.myIFrame && (this.myIFrame.doc.body.textContent = "",
        setTimeout( () => {
            this.myIFrame !== null && (document.body.removeChild(this.myIFrame),
            this.myIFrame = null)
        }
        , Math.floor(0)));
        const e = this.onDisconnect;
        e && (this.onDisconnect = null,
        e())
    }
    startLongPoll(e, i) {
        for (this.myID = e,
        this.myPW = i,
        this.alive = !0; this.newRequest_(); )
            ;
    }
    newRequest_() {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            const e = {};
            e[EE] = this.myID,
            e[bE] = this.myPW,
            e[SE] = this.currentSerial;
            let i = this.urlFn(e)
              , r = ""
              , o = 0;
            for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + CE + r.length <= TE; ) {
                const d = this.pendingSegs.shift();
                r = r + "&" + eN + o + "=" + d.seg + "&" + tN + o + "=" + d.ts + "&" + nN + o + "=" + d.d,
                o++
            }
            return i = i + r,
            this.addLongPollTag_(i, this.currentSerial),
            !0
        } else
            return !1
    }
    enqueueSegment(e, i, r) {
        this.pendingSegs.push({
            seg: e,
            ts: i,
            d: r
        }),
        this.alive && this.newRequest_()
    }
    addLongPollTag_(e, i) {
        this.outstandingRequests.add(i);
        const r = () => {
            this.outstandingRequests.delete(i),
            this.newRequest_()
        }
          , o = setTimeout(r, Math.floor(aN))
          , c = () => {
            clearTimeout(o),
            r()
        }
        ;
        this.addTag(e, c)
    }
    addTag(e, i) {
        setTimeout( () => {
            try {
                if (!this.sendNewPolls)
                    return;
                const r = this.myIFrame.doc.createElement("script");
                r.type = "text/javascript",
                r.async = !0,
                r.src = e,
                r.onload = r.onreadystatechange = function() {
                    const o = r.readyState;
                    (!o || o === "loaded" || o === "complete") && (r.onload = r.onreadystatechange = null,
                    r.parentNode && r.parentNode.removeChild(r),
                    i())
                }
                ,
                r.onerror = () => {
                    pt("Long-poll script failed to load: " + e),
                    this.sendNewPolls = !1,
                    this.close()
                }
                ,
                this.myIFrame.doc.body.appendChild(r)
            } catch {}
        }
        , Math.floor(1))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lN = 16384
  , oN = 45e3;
let Bo = null;
typeof MozWebSocket < "u" ? Bo = MozWebSocket : typeof WebSocket < "u" && (Bo = WebSocket);
class $t {
    constructor(e, i, r, o, c, d, h) {
        this.connId = e,
        this.applicationId = r,
        this.appCheckToken = o,
        this.authToken = c,
        this.keepaliveTimer = null,
        this.frames = null,
        this.totalFrames = 0,
        this.bytesSent = 0,
        this.bytesReceived = 0,
        this.log_ = $r(this.connId),
        this.stats_ = Jd(i),
        this.connURL = $t.connectionURL_(i, d, h, o, r),
        this.nodeAdmin = i.nodeAdmin
    }
    static connectionURL_(e, i, r, o, c) {
        const d = {};
        return d[cE] = Zd,
        typeof location < "u" && location.hostname && hE.test(location.hostname) && (d[fE] = dE),
        i && (d[uE] = i),
        r && (d[pE] = r),
        o && (d[hd] = o),
        c && (d[mE] = c),
        yE(e, gE, d)
    }
    open(e, i) {
        this.onDisconnect = i,
        this.onMessage = e,
        this.log_("Websocket connecting to " + this.connURL),
        this.everConnected_ = !1,
        Wi.set("previous_websocket_failure", !0);
        try {
            let r;
            GC(),
            this.mySock = new Bo(this.connURL,[],r)
        } catch (r) {
            this.log_("Error instantiating WebSocket.");
            const o = r.message || r.data;
            o && this.log_(o),
            this.onClosed_();
            return
        }
        this.mySock.onopen = () => {
            this.log_("Websocket connected."),
            this.everConnected_ = !0
        }
        ,
        this.mySock.onclose = () => {
            this.log_("Websocket connection was disconnected."),
            this.mySock = null,
            this.onClosed_()
        }
        ,
        this.mySock.onmessage = r => {
            this.handleIncomingFrame(r)
        }
        ,
        this.mySock.onerror = r => {
            this.log_("WebSocket error.  Closing connection.");
            const o = r.message || r.data;
            o && this.log_(o),
            this.onClosed_()
        }
    }
    start() {}
    static forceDisallow() {
        $t.forceDisallow_ = !0
    }
    static isAvailable() {
        let e = !1;
        if (typeof navigator < "u" && navigator.userAgent) {
            const i = /Android ([0-9]{0,}\.[0-9]{0,})/
              , r = navigator.userAgent.match(i);
            r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
        }
        return !e && Bo !== null && !$t.forceDisallow_
    }
    static previouslyFailed() {
        return Wi.isInMemoryStorage || Wi.get("previous_websocket_failure") === !0
    }
    markConnectionHealthy() {
        Wi.remove("previous_websocket_failure")
    }
    appendFrame_(e) {
        if (this.frames.push(e),
        this.frames.length === this.totalFrames) {
            const i = this.frames.join("");
            this.frames = null;
            const r = Ir(i);
            this.onMessage(r)
        }
    }
    handleNewFrameCount_(e) {
        this.totalFrames = e,
        this.frames = []
    }
    extractFrameCount_(e) {
        if (G(this.frames === null, "We already have a frame buffer"),
        e.length <= 6) {
            const i = Number(e);
            if (!isNaN(i))
                return this.handleNewFrameCount_(i),
                null
        }
        return this.handleNewFrameCount_(1),
        e
    }
    handleIncomingFrame(e) {
        if (this.mySock === null)
            return;
        const i = e.data;
        if (this.bytesReceived += i.length,
        this.stats_.incrementCounter("bytes_received", i.length),
        this.resetKeepAlive(),
        this.frames !== null)
            this.appendFrame_(i);
        else {
            const r = this.extractFrameCount_(i);
            r !== null && this.appendFrame_(r)
        }
    }
    send(e) {
        this.resetKeepAlive();
        const i = Ze(e);
        this.bytesSent += i.length,
        this.stats_.incrementCounter("bytes_sent", i.length);
        const r = lE(i, lN);
        r.length > 1 && this.sendString_(String(r.length));
        for (let o = 0; o < r.length; o++)
            this.sendString_(r[o])
    }
    shutdown_() {
        this.isClosed_ = !0,
        this.keepaliveTimer && (clearInterval(this.keepaliveTimer),
        this.keepaliveTimer = null),
        this.mySock && (this.mySock.close(),
        this.mySock = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("WebSocket is closing itself"),
        this.shutdown_(),
        this.onDisconnect && (this.onDisconnect(this.everConnected_),
        this.onDisconnect = null))
    }
    close() {
        this.isClosed_ || (this.log_("WebSocket is being closed"),
        this.shutdown_())
    }
    resetKeepAlive() {
        clearInterval(this.keepaliveTimer),
        this.keepaliveTimer = setInterval( () => {
            this.mySock && this.sendString_("0"),
            this.resetKeepAlive()
        }
        , Math.floor(oN))
    }
    sendString_(e) {
        try {
            this.mySock.send(e)
        } catch (i) {
            this.log_("Exception thrown from WebSocket.send():", i.message || i.data, "Closing connection."),
            setTimeout(this.onClosed_.bind(this), 0)
        }
    }
}
$t.responsesRequiredToBeHealthy = 2;
$t.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr {
    static get ALL_TRANSPORTS() {
        return [Qs, $t]
    }
    static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_
    }
    constructor(e) {
        this.initTransports_(e)
    }
    initTransports_(e) {
        const i = $t && $t.isAvailable();
        let r = i && !$t.previouslyFailed();
        if (e.webSocketOnly && (i || wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),
        r = !0),
        r)
            this.transports_ = [$t];
        else {
            const o = this.transports_ = [];
            for (const c of Lr.ALL_TRANSPORTS)
                c && c.isAvailable() && o.push(c);
            Lr.globalTransportInitialized_ = !0
        }
    }
    initialTransport() {
        if (this.transports_.length > 0)
            return this.transports_[0];
        throw new Error("No transports available")
    }
    upgradeTransport() {
        return this.transports_.length > 1 ? this.transports_[1] : null
    }
}
Lr.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cN = 6e4
  , uN = 5e3
  , fN = 10 * 1024
  , dN = 100 * 1024
  , Xf = "t"
  , _v = "d"
  , hN = "s"
  , vv = "r"
  , pN = "e"
  , yv = "o"
  , Ev = "a"
  , bv = "n"
  , Sv = "p"
  , mN = "h";
class gN {
    constructor(e, i, r, o, c, d, h, p, m, y) {
        this.id = e,
        this.repoInfo_ = i,
        this.applicationId_ = r,
        this.appCheckToken_ = o,
        this.authToken_ = c,
        this.onMessage_ = d,
        this.onReady_ = h,
        this.onDisconnect_ = p,
        this.onKill_ = m,
        this.lastSessionId = y,
        this.connectionCount = 0,
        this.pendingDataMessages = [],
        this.state_ = 0,
        this.log_ = $r("c:" + this.id + ":"),
        this.transportManager_ = new Lr(i),
        this.log_("Connection created"),
        this.start_()
    }
    start_() {
        const e = this.transportManager_.initialTransport();
        this.conn_ = new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),
        this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        const i = this.connReceiver_(this.conn_)
          , r = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_,
        this.rx_ = this.conn_,
        this.secondaryConn_ = null,
        this.isHealthy_ = !1,
        setTimeout( () => {
            this.conn_ && this.conn_.open(i, r)
        }
        , Math.floor(0));
        const o = e.healthyTimeout || 0;
        o > 0 && (this.healthyTimeout_ = Ar( () => {
            this.healthyTimeout_ = null,
            this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > dN ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."),
            this.isHealthy_ = !0,
            this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > fN ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."),
            this.close()))
        }
        , Math.floor(o)))
    }
    nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++
    }
    disconnReceiver_(e) {
        return i => {
            e === this.conn_ ? this.onConnectionLost_(i) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."),
            this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
        }
    }
    connReceiver_(e) {
        return i => {
            this.state_ !== 2 && (e === this.rx_ ? this.onPrimaryMessageReceived_(i) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(i) : this.log_("message on old connection"))
        }
    }
    sendRequest(e) {
        const i = {
            t: "d",
            d: e
        };
        this.sendData_(i)
    }
    tryCleanupConnection() {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId),
        this.conn_ = this.secondaryConn_,
        this.secondaryConn_ = null)
    }
    onSecondaryControl_(e) {
        if (Xf in e) {
            const i = e[Xf];
            i === Ev ? this.upgradeIfSecondaryHealthy_() : i === vv ? (this.log_("Got a reset on secondary, closing it"),
            this.secondaryConn_.close(),
            (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : i === yv && (this.log_("got pong on secondary."),
            this.secondaryResponsesRequired_--,
            this.upgradeIfSecondaryHealthy_())
        }
    }
    onSecondaryMessageReceived_(e) {
        const i = _r("t", e)
          , r = _r("d", e);
        if (i === "c")
            this.onSecondaryControl_(r);
        else if (i === "d")
            this.pendingDataMessages.push(r);
        else
            throw new Error("Unknown protocol layer: " + i)
    }
    upgradeIfSecondaryHealthy_() {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."),
        this.isHealthy_ = !0,
        this.secondaryConn_.markConnectionHealthy(),
        this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."),
        this.secondaryConn_.send({
            t: "c",
            d: {
                t: Sv,
                d: {}
            }
        }))
    }
    proceedWithUpgrade_() {
        this.secondaryConn_.start(),
        this.log_("sending client ack on secondary"),
        this.secondaryConn_.send({
            t: "c",
            d: {
                t: Ev,
                d: {}
            }
        }),
        this.log_("Ending transmission on primary"),
        this.conn_.send({
            t: "c",
            d: {
                t: bv,
                d: {}
            }
        }),
        this.tx_ = this.secondaryConn_,
        this.tryCleanupConnection()
    }
    onPrimaryMessageReceived_(e) {
        const i = _r("t", e)
          , r = _r("d", e);
        i === "c" ? this.onControl_(r) : i === "d" && this.onDataMessage_(r)
    }
    onDataMessage_(e) {
        this.onPrimaryResponse_(),
        this.onMessage_(e)
    }
    onPrimaryResponse_() {
        this.isHealthy_ || (this.primaryResponsesRequired_--,
        this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."),
        this.isHealthy_ = !0,
        this.conn_.markConnectionHealthy()))
    }
    onControl_(e) {
        const i = _r(Xf, e);
        if (_v in e) {
            const r = e[_v];
            if (i === mN) {
                const o = Object.assign({}, r);
                this.repoInfo_.isUsingEmulator && (o.h = this.repoInfo_.host),
                this.onHandshake_(o)
            } else if (i === bv) {
                this.log_("recvd end transmission on primary"),
                this.rx_ = this.secondaryConn_;
                for (let o = 0; o < this.pendingDataMessages.length; ++o)
                    this.onDataMessage_(this.pendingDataMessages[o]);
                this.pendingDataMessages = [],
                this.tryCleanupConnection()
            } else
                i === hN ? this.onConnectionShutdown_(r) : i === vv ? this.onReset_(r) : i === pN ? dd("Server Error: " + r) : i === yv ? (this.log_("got pong on primary."),
                this.onPrimaryResponse_(),
                this.sendPingOnPrimaryIfNecessary_()) : dd("Unknown control packet command: " + i)
        }
    }
    onHandshake_(e) {
        const i = e.ts
          , r = e.v
          , o = e.h;
        this.sessionId = e.s,
        this.repoInfo_.host = o,
        this.state_ === 0 && (this.conn_.start(),
        this.onConnectionEstablished_(this.conn_, i),
        Zd !== r && wt("Protocol version mismatch detected"),
        this.tryStartUpgrade_())
    }
    tryStartUpgrade_() {
        const e = this.transportManager_.upgradeTransport();
        e && this.startUpgrade_(e)
    }
    startUpgrade_(e) {
        this.secondaryConn_ = new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),
        this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        const i = this.connReceiver_(this.secondaryConn_)
          , r = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(i, r),
        Ar( () => {
            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."),
            this.secondaryConn_.close())
        }
        , Math.floor(cN))
    }
    onReset_(e) {
        this.log_("Reset packet received.  New host: " + e),
        this.repoInfo_.host = e,
        this.state_ === 1 ? this.close() : (this.closeConnections_(),
        this.start_())
    }
    onConnectionEstablished_(e, i) {
        this.log_("Realtime connection established."),
        this.conn_ = e,
        this.state_ = 1,
        this.onReady_ && (this.onReady_(i, this.sessionId),
        this.onReady_ = null),
        this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."),
        this.isHealthy_ = !0) : Ar( () => {
            this.sendPingOnPrimaryIfNecessary_()
        }
        , Math.floor(uN))
    }
    sendPingOnPrimaryIfNecessary_() {
        !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."),
        this.sendData_({
            t: "c",
            d: {
                t: Sv,
                d: {}
            }
        }))
    }
    onSecondaryConnectionLost_() {
        const e = this.secondaryConn_;
        this.secondaryConn_ = null,
        (this.tx_ === e || this.rx_ === e) && this.close()
    }
    onConnectionLost_(e) {
        this.conn_ = null,
        !e && this.state_ === 0 ? (this.log_("Realtime connection failed."),
        this.repoInfo_.isCacheableHost() && (Wi.remove("host:" + this.repoInfo_.host),
        this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."),
        this.close()
    }
    onConnectionShutdown_(e) {
        this.log_("Connection shutdown command received. Shutting down..."),
        this.onKill_ && (this.onKill_(e),
        this.onKill_ = null),
        this.onDisconnect_ = null,
        this.close()
    }
    sendData_(e) {
        if (this.state_ !== 1)
            throw "Connection is not connected";
        this.tx_.send(e)
    }
    close() {
        this.state_ !== 2 && (this.log_("Closing realtime connection."),
        this.state_ = 2,
        this.closeConnections_(),
        this.onDisconnect_ && (this.onDisconnect_(),
        this.onDisconnect_ = null))
    }
    closeConnections_() {
        this.log_("Shutting down all connections"),
        this.conn_ && (this.conn_.close(),
        this.conn_ = null),
        this.secondaryConn_ && (this.secondaryConn_.close(),
        this.secondaryConn_ = null),
        this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_),
        this.healthyTimeout_ = null)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wE {
    put(e, i, r, o) {}
    merge(e, i, r, o) {}
    refreshAuthToken(e) {}
    refreshAppCheckToken(e) {}
    onDisconnectPut(e, i, r) {}
    onDisconnectMerge(e, i, r) {}
    onDisconnectCancel(e, i) {}
    reportStats(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AE {
    constructor(e) {
        this.allowedEvents_ = e,
        this.listeners_ = {},
        G(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
    }
    trigger(e, ...i) {
        if (Array.isArray(this.listeners_[e])) {
            const r = [...this.listeners_[e]];
            for (let o = 0; o < r.length; o++)
                r[o].callback.apply(r[o].context, i)
        }
    }
    on(e, i, r) {
        this.validateEventType_(e),
        this.listeners_[e] = this.listeners_[e] || [],
        this.listeners_[e].push({
            callback: i,
            context: r
        });
        const o = this.getInitialEvent(e);
        o && i.apply(r, o)
    }
    off(e, i, r) {
        this.validateEventType_(e);
        const o = this.listeners_[e] || [];
        for (let c = 0; c < o.length; c++)
            if (o[c].callback === i && (!r || r === o[c].context)) {
                o.splice(c, 1);
                return
            }
    }
    validateEventType_(e) {
        G(this.allowedEvents_.find(i => i === e), "Unknown event: " + e)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo extends AE {
    static getInstance() {
        return new qo
    }
    constructor() {
        super(["online"]),
        this.online_ = !0,
        typeof window < "u" && typeof window.addEventListener < "u" && !Ld() && (window.addEventListener("online", () => {
            this.online_ || (this.online_ = !0,
            this.trigger("online", !0))
        }
        , !1),
        window.addEventListener("offline", () => {
            this.online_ && (this.online_ = !1,
            this.trigger("online", !1))
        }
        , !1))
    }
    getInitialEvent(e) {
        return G(e === "online", "Unknown event type: " + e),
        [this.online_]
    }
    currentlyOnline() {
        return this.online_
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tv = 32
  , Cv = 768;
class Ie {
    constructor(e, i) {
        if (i === void 0) {
            this.pieces_ = e.split("/");
            let r = 0;
            for (let o = 0; o < this.pieces_.length; o++)
                this.pieces_[o].length > 0 && (this.pieces_[r] = this.pieces_[o],
                r++);
            this.pieces_.length = r,
            this.pieceNum_ = 0
        } else
            this.pieces_ = e,
            this.pieceNum_ = i
    }
    toString() {
        let e = "";
        for (let i = this.pieceNum_; i < this.pieces_.length; i++)
            this.pieces_[i] !== "" && (e += "/" + this.pieces_[i]);
        return e || "/"
    }
}
function Ee() {
    return new Ie("")
}
function pe(s) {
    return s.pieceNum_ >= s.pieces_.length ? null : s.pieces_[s.pieceNum_]
}
function Ti(s) {
    return s.pieces_.length - s.pieceNum_
}
function Me(s) {
    let e = s.pieceNum_;
    return e < s.pieces_.length && e++,
    new Ie(s.pieces_,e)
}
function RE(s) {
    return s.pieceNum_ < s.pieces_.length ? s.pieces_[s.pieces_.length - 1] : null
}
function _N(s) {
    let e = "";
    for (let i = s.pieceNum_; i < s.pieces_.length; i++)
        s.pieces_[i] !== "" && (e += "/" + encodeURIComponent(String(s.pieces_[i])));
    return e || "/"
}
function NE(s, e=0) {
    return s.pieces_.slice(s.pieceNum_ + e)
}
function xE(s) {
    if (s.pieceNum_ >= s.pieces_.length)
        return null;
    const e = [];
    for (let i = s.pieceNum_; i < s.pieces_.length - 1; i++)
        e.push(s.pieces_[i]);
    return new Ie(e,0)
}
function Je(s, e) {
    const i = [];
    for (let r = s.pieceNum_; r < s.pieces_.length; r++)
        i.push(s.pieces_[r]);
    if (e instanceof Ie)
        for (let r = e.pieceNum_; r < e.pieces_.length; r++)
            i.push(e.pieces_[r]);
    else {
        const r = e.split("/");
        for (let o = 0; o < r.length; o++)
            r[o].length > 0 && i.push(r[o])
    }
    return new Ie(i,0)
}
function de(s) {
    return s.pieceNum_ >= s.pieces_.length
}
function gt(s, e) {
    const i = pe(s)
      , r = pe(e);
    if (i === null)
        return e;
    if (i === r)
        return gt(Me(s), Me(e));
    throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + s + ")")
}
function OE(s, e) {
    if (Ti(s) !== Ti(e))
        return !1;
    for (let i = s.pieceNum_, r = e.pieceNum_; i <= s.pieces_.length; i++,
    r++)
        if (s.pieces_[i] !== e.pieces_[r])
            return !1;
    return !0
}
function Jt(s, e) {
    let i = s.pieceNum_
      , r = e.pieceNum_;
    if (Ti(s) > Ti(e))
        return !1;
    for (; i < s.pieces_.length; ) {
        if (s.pieces_[i] !== e.pieces_[r])
            return !1;
        ++i,
        ++r
    }
    return !0
}
class vN {
    constructor(e, i) {
        this.errorPrefix_ = i,
        this.parts_ = NE(e, 0),
        this.byteLength_ = Math.max(1, this.parts_.length);
        for (let r = 0; r < this.parts_.length; r++)
            this.byteLength_ += nc(this.parts_[r]);
        IE(this)
    }
}
function yN(s, e) {
    s.parts_.length > 0 && (s.byteLength_ += 1),
    s.parts_.push(e),
    s.byteLength_ += nc(e),
    IE(s)
}
function EN(s) {
    const e = s.parts_.pop();
    s.byteLength_ -= nc(e),
    s.parts_.length > 0 && (s.byteLength_ -= 1)
}
function IE(s) {
    if (s.byteLength_ > Cv)
        throw new Error(s.errorPrefix_ + "has a key path longer than " + Cv + " bytes (" + s.byteLength_ + ").");
    if (s.parts_.length > Tv)
        throw new Error(s.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Tv + ") or object contains a cycle " + Qi(s))
}
function Qi(s) {
    return s.parts_.length === 0 ? "" : "in property '" + s.parts_.join(".") + "'"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th extends AE {
    static getInstance() {
        return new th
    }
    constructor() {
        super(["visible"]);
        let e, i;
        typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (i = "visibilitychange",
        e = "hidden") : typeof document.mozHidden < "u" ? (i = "mozvisibilitychange",
        e = "mozHidden") : typeof document.msHidden < "u" ? (i = "msvisibilitychange",
        e = "msHidden") : typeof document.webkitHidden < "u" && (i = "webkitvisibilitychange",
        e = "webkitHidden")),
        this.visible_ = !0,
        i && document.addEventListener(i, () => {
            const r = !document[e];
            r !== this.visible_ && (this.visible_ = r,
            this.trigger("visible", r))
        }
        , !1)
    }
    getInitialEvent(e) {
        return G(e === "visible", "Unknown event type: " + e),
        [this.visible_]
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vr = 1e3
  , bN = 60 * 5 * 1e3
  , wv = 30 * 1e3
  , SN = 1.3
  , TN = 3e4
  , CN = "server_kill"
  , Av = 3;
class Ln extends wE {
    constructor(e, i, r, o, c, d, h, p) {
        if (super(),
        this.repoInfo_ = e,
        this.applicationId_ = i,
        this.onDataUpdate_ = r,
        this.onConnectStatus_ = o,
        this.onServerInfoUpdate_ = c,
        this.authTokenProvider_ = d,
        this.appCheckTokenProvider_ = h,
        this.authOverride_ = p,
        this.id = Ln.nextPersistentConnectionId_++,
        this.log_ = $r("p:" + this.id + ":"),
        this.interruptReasons_ = {},
        this.listens = new Map,
        this.outstandingPuts_ = [],
        this.outstandingGets_ = [],
        this.outstandingPutCount_ = 0,
        this.outstandingGetCount_ = 0,
        this.onDisconnectRequestQueue_ = [],
        this.connected_ = !1,
        this.reconnectDelay_ = vr,
        this.maxReconnectDelay_ = bN,
        this.securityDebugCallback_ = null,
        this.lastSessionId = null,
        this.establishConnectionTimer_ = null,
        this.visible_ = !1,
        this.requestCBHash_ = {},
        this.requestNumber_ = 0,
        this.realtime_ = null,
        this.authToken_ = null,
        this.appCheckToken_ = null,
        this.forceTokenRefresh_ = !1,
        this.invalidAuthTokenCount_ = 0,
        this.invalidAppCheckTokenCount_ = 0,
        this.firstConnection_ = !0,
        this.lastConnectionAttemptTime_ = null,
        this.lastConnectionEstablishedTime_ = null,
        p)
            throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        th.getInstance().on("visible", this.onVisible_, this),
        e.host.indexOf("fblocal") === -1 && qo.getInstance().on("online", this.onOnline_, this)
    }
    sendRequest(e, i, r) {
        const o = ++this.requestNumber_
          , c = {
            r: o,
            a: e,
            b: i
        };
        this.log_(Ze(c)),
        G(this.connected_, "sendRequest call when we're not connected not allowed."),
        this.realtime_.sendRequest(c),
        r && (this.requestCBHash_[o] = r)
    }
    get(e) {
        this.initConnection_();
        const i = new tc
          , o = {
            action: "g",
            request: {
                p: e._path.toString(),
                q: e._queryObject
            },
            onComplete: d => {
                const h = d.d;
                d.s === "ok" ? i.resolve(h) : i.reject(h)
            }
        };
        this.outstandingGets_.push(o),
        this.outstandingGetCount_++;
        const c = this.outstandingGets_.length - 1;
        return this.connected_ && this.sendGet_(c),
        i.promise
    }
    listen(e, i, r, o) {
        this.initConnection_();
        const c = e._queryIdentifier
          , d = e._path.toString();
        this.log_("Listen called for " + d + " " + c),
        this.listens.has(d) || this.listens.set(d, new Map),
        G(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"),
        G(!this.listens.get(d).has(c), "listen() called twice for same path/queryId.");
        const h = {
            onComplete: o,
            hashFn: i,
            query: e,
            tag: r
        };
        this.listens.get(d).set(c, h),
        this.connected_ && this.sendListen_(h)
    }
    sendGet_(e) {
        const i = this.outstandingGets_[e];
        this.sendRequest("g", i.request, r => {
            delete this.outstandingGets_[e],
            this.outstandingGetCount_--,
            this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
            i.onComplete && i.onComplete(r)
        }
        )
    }
    sendListen_(e) {
        const i = e.query
          , r = i._path.toString()
          , o = i._queryIdentifier;
        this.log_("Listen on " + r + " for " + o);
        const c = {
            p: r
        }
          , d = "q";
        e.tag && (c.q = i._queryObject,
        c.t = e.tag),
        c.h = e.hashFn(),
        this.sendRequest(d, c, h => {
            const p = h.d
              , m = h.s;
            Ln.warnOnListenWarnings_(p, i),
            (this.listens.get(r) && this.listens.get(r).get(o)) === e && (this.log_("listen response", h),
            m !== "ok" && this.removeListen_(r, o),
            e.onComplete && e.onComplete(m, p))
        }
        )
    }
    static warnOnListenWarnings_(e, i) {
        if (e && typeof e == "object" && Hn(e, "w")) {
            const r = ea(e, "w");
            if (Array.isArray(r) && ~r.indexOf("no_index")) {
                const o = '".indexOn": "' + i._queryParams.getIndex().toString() + '"'
                  , c = i._path.toString();
                wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)
            }
        }
    }
    refreshAuthToken(e) {
        this.authToken_ = e,
        this.log_("Auth token refreshed"),
        this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {}
        ),
        this.reduceReconnectDelayIfAdminCredential_(e)
    }
    reduceReconnectDelayIfAdminCredential_(e) {
        (e && e.length === 40 || $C(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."),
        this.maxReconnectDelay_ = wv)
    }
    refreshAppCheckToken(e) {
        this.appCheckToken_ = e,
        this.log_("App check token refreshed"),
        this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, () => {}
        )
    }
    tryAuth() {
        if (this.connected_ && this.authToken_) {
            const e = this.authToken_
              , i = WC(e) ? "auth" : "gauth"
              , r = {
                cred: e
            };
            this.authOverride_ === null ? r.noauth = !0 : typeof this.authOverride_ == "object" && (r.authvar = this.authOverride_),
            this.sendRequest(i, r, o => {
                const c = o.s
                  , d = o.d || "error";
                this.authToken_ === e && (c === "ok" ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(c, d))
            }
            )
        }
    }
    tryAppCheck() {
        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
            token: this.appCheckToken_
        }, e => {
            const i = e.s
              , r = e.d || "error";
            i === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(i, r)
        }
        )
    }
    unlisten(e, i) {
        const r = e._path.toString()
          , o = e._queryIdentifier;
        this.log_("Unlisten called for " + r + " " + o),
        G(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"),
        this.removeListen_(r, o) && this.connected_ && this.sendUnlisten_(r, o, e._queryObject, i)
    }
    sendUnlisten_(e, i, r, o) {
        this.log_("Unlisten on " + e + " for " + i);
        const c = {
            p: e
        }
          , d = "n";
        o && (c.q = r,
        c.t = o),
        this.sendRequest(d, c)
    }
    onDisconnectPut(e, i, r) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("o", e, i, r) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "o",
            data: i,
            onComplete: r
        })
    }
    onDisconnectMerge(e, i, r) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("om", e, i, r) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "om",
            data: i,
            onComplete: r
        })
    }
    onDisconnectCancel(e, i) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("oc", e, null, i) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "oc",
            data: null,
            onComplete: i
        })
    }
    sendOnDisconnect_(e, i, r, o) {
        const c = {
            p: i,
            d: r
        };
        this.log_("onDisconnect " + e, c),
        this.sendRequest(e, c, d => {
            o && setTimeout( () => {
                o(d.s, d.d)
            }
            , Math.floor(0))
        }
        )
    }
    put(e, i, r, o) {
        this.putInternal("p", e, i, r, o)
    }
    merge(e, i, r, o) {
        this.putInternal("m", e, i, r, o)
    }
    putInternal(e, i, r, o, c) {
        this.initConnection_();
        const d = {
            p: i,
            d: r
        };
        c !== void 0 && (d.h = c),
        this.outstandingPuts_.push({
            action: e,
            request: d,
            onComplete: o
        }),
        this.outstandingPutCount_++;
        const h = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(h) : this.log_("Buffering put: " + i)
    }
    sendPut_(e) {
        const i = this.outstandingPuts_[e].action
          , r = this.outstandingPuts_[e].request
          , o = this.outstandingPuts_[e].onComplete;
        this.outstandingPuts_[e].queued = this.connected_,
        this.sendRequest(i, r, c => {
            this.log_(i + " response", c),
            delete this.outstandingPuts_[e],
            this.outstandingPutCount_--,
            this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
            o && o(c.s, c.d)
        }
        )
    }
    reportStats(e) {
        if (this.connected_) {
            const i = {
                c: e
            };
            this.log_("reportStats", i),
            this.sendRequest("s", i, r => {
                if (r.s !== "ok") {
                    const c = r.d;
                    this.log_("reportStats", "Error sending stats: " + c)
                }
            }
            )
        }
    }
    onDataMessage_(e) {
        if ("r"in e) {
            this.log_("from server: " + Ze(e));
            const i = e.r
              , r = this.requestCBHash_[i];
            r && (delete this.requestCBHash_[i],
            r(e.b))
        } else {
            if ("error"in e)
                throw "A server-side error has occurred: " + e.error;
            "a"in e && this.onDataPush_(e.a, e.b)
        }
    }
    onDataPush_(e, i) {
        this.log_("handleServerMessage", e, i),
        e === "d" ? this.onDataUpdate_(i.p, i.d, !1, i.t) : e === "m" ? this.onDataUpdate_(i.p, i.d, !0, i.t) : e === "c" ? this.onListenRevoked_(i.p, i.q) : e === "ac" ? this.onAuthRevoked_(i.s, i.d) : e === "apc" ? this.onAppCheckRevoked_(i.s, i.d) : e === "sd" ? this.onSecurityDebugPacket_(i) : dd("Unrecognized action received from server: " + Ze(e) + `
Are you using the latest client?`)
    }
    onReady_(e, i) {
        this.log_("connection ready"),
        this.connected_ = !0,
        this.lastConnectionEstablishedTime_ = new Date().getTime(),
        this.handleTimestamp_(e),
        this.lastSessionId = i,
        this.firstConnection_ && this.sendConnectStats_(),
        this.restoreState_(),
        this.firstConnection_ = !1,
        this.onConnectStatus_(!0)
    }
    scheduleConnect_(e) {
        G(!this.realtime_, "Scheduling a connect when we're already connected/ing?"),
        this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
        this.establishConnectionTimer_ = setTimeout( () => {
            this.establishConnectionTimer_ = null,
            this.establishConnection_()
        }
        , Math.floor(e))
    }
    initConnection_() {
        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
    }
    onVisible_(e) {
        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."),
        this.reconnectDelay_ = vr,
        this.realtime_ || this.scheduleConnect_(0)),
        this.visible_ = e
    }
    onOnline_(e) {
        e ? (this.log_("Browser went online."),
        this.reconnectDelay_ = vr,
        this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."),
        this.realtime_ && this.realtime_.close())
    }
    onRealtimeDisconnect_() {
        if (this.log_("data client disconnected"),
        this.connected_ = !1,
        this.realtime_ = null,
        this.cancelSentTransactions_(),
        this.requestCBHash_ = {},
        this.shouldReconnect_()) {
            this.visible_ ? this.lastConnectionEstablishedTime_ && (new Date().getTime() - this.lastConnectionEstablishedTime_ > TN && (this.reconnectDelay_ = vr),
            this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."),
            this.reconnectDelay_ = this.maxReconnectDelay_,
            this.lastConnectionAttemptTime_ = new Date().getTime());
            const e = Math.max(0, new Date().getTime() - this.lastConnectionAttemptTime_);
            let i = Math.max(0, this.reconnectDelay_ - e);
            i = Math.random() * i,
            this.log_("Trying to reconnect in " + i + "ms"),
            this.scheduleConnect_(i),
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * SN)
        }
        this.onConnectStatus_(!1)
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt"),
            this.lastConnectionAttemptTime_ = new Date().getTime(),
            this.lastConnectionEstablishedTime_ = null;
            const e = this.onDataMessage_.bind(this)
              , i = this.onReady_.bind(this)
              , r = this.onRealtimeDisconnect_.bind(this)
              , o = this.id + ":" + Ln.nextConnectionId_++
              , c = this.lastSessionId;
            let d = !1
              , h = null;
            const p = function() {
                h ? h.close() : (d = !0,
                r())
            }
              , m = function(E) {
                G(h, "sendRequest call when we're not connected not allowed."),
                h.sendRequest(E)
            };
            this.realtime_ = {
                close: p,
                sendRequest: m
            };
            const y = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = !1;
            try {
                const [E,v] = await Promise.all([this.authTokenProvider_.getToken(y), this.appCheckTokenProvider_.getToken(y)]);
                d ? pt("getToken() completed but was canceled") : (pt("getToken() completed. Creating connection."),
                this.authToken_ = E && E.accessToken,
                this.appCheckToken_ = v && v.token,
                h = new gN(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,r,x => {
                    wt(x + " (" + this.repoInfo_.toString() + ")"),
                    this.interrupt(CN)
                }
                ,c))
            } catch (E) {
                this.log_("Failed to get token: " + E),
                d || (this.repoInfo_.nodeAdmin && wt(E),
                p())
            }
        }
    }
    interrupt(e) {
        pt("Interrupting connection for reason: " + e),
        this.interruptReasons_[e] = !0,
        this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_),
        this.establishConnectionTimer_ = null),
        this.connected_ && this.onRealtimeDisconnect_())
    }
    resume(e) {
        pt("Resuming connection for reason: " + e),
        delete this.interruptReasons_[e],
        id(this.interruptReasons_) && (this.reconnectDelay_ = vr,
        this.realtime_ || this.scheduleConnect_(0))
    }
    handleTimestamp_(e) {
        const i = e - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: i
        })
    }
    cancelSentTransactions_() {
        for (let e = 0; e < this.outstandingPuts_.length; e++) {
            const i = this.outstandingPuts_[e];
            i && "h"in i.request && i.queued && (i.onComplete && i.onComplete("disconnect"),
            delete this.outstandingPuts_[e],
            this.outstandingPutCount_--)
        }
        this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = [])
    }
    onListenRevoked_(e, i) {
        let r;
        i ? r = i.map(c => $d(c)).join("$") : r = "default";
        const o = this.removeListen_(e, r);
        o && o.onComplete && o.onComplete("permission_denied")
    }
    removeListen_(e, i) {
        const r = new Ie(e).toString();
        let o;
        if (this.listens.has(r)) {
            const c = this.listens.get(r);
            o = c.get(i),
            c.delete(i),
            c.size === 0 && this.listens.delete(r)
        } else
            o = void 0;
        return o
    }
    onAuthRevoked_(e, i) {
        pt("Auth token revoked: " + e + "/" + i),
        this.authToken_ = null,
        this.forceTokenRefresh_ = !0,
        this.realtime_.close(),
        (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++,
        this.invalidAuthTokenCount_ >= Av && (this.reconnectDelay_ = wv,
        this.authTokenProvider_.notifyForInvalidToken()))
    }
    onAppCheckRevoked_(e, i) {
        pt("App check token revoked: " + e + "/" + i),
        this.appCheckToken_ = null,
        this.forceTokenRefresh_ = !0,
        (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++,
        this.invalidAppCheckTokenCount_ >= Av && this.appCheckTokenProvider_.notifyForInvalidToken())
    }
    onSecurityDebugPacket_(e) {
        this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg"in e && console.log("FIREBASE: " + e.msg.replace(`
`, `
FIREBASE: `))
    }
    restoreState_() {
        this.tryAuth(),
        this.tryAppCheck();
        for (const e of this.listens.values())
            for (const i of e.values())
                this.sendListen_(i);
        for (let e = 0; e < this.outstandingPuts_.length; e++)
            this.outstandingPuts_[e] && this.sendPut_(e);
        for (; this.onDisconnectRequestQueue_.length; ) {
            const e = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
        }
        for (let e = 0; e < this.outstandingGets_.length; e++)
            this.outstandingGets_[e] && this.sendGet_(e)
    }
    sendConnectStats_() {
        const e = {};
        let i = "js";
        e["sdk." + i + "." + iE.replace(/\./g, "-")] = 1,
        Ld() ? e["framework.cordova"] = 1 : _y() && (e["framework.reactnative"] = 1),
        this.reportStats(e)
    }
    shouldReconnect_() {
        const e = qo.getInstance().currentlyOnline();
        return id(this.interruptReasons_) && e
    }
}
Ln.nextPersistentConnectionId_ = 0;
Ln.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce {
    constructor(e, i) {
        this.name = e,
        this.node = i
    }
    static Wrap(e, i) {
        return new ce(e,i)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc {
    getCompare() {
        return this.compare.bind(this)
    }
    indexedValueChanged(e, i) {
        const r = new ce(ia,e)
          , o = new ce(ia,i);
        return this.compare(r, o) !== 0
    }
    minPost() {
        return ce.MIN
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Eo;
class DE extends lc {
    static get __EMPTY_NODE() {
        return Eo
    }
    static set __EMPTY_NODE(e) {
        Eo = e
    }
    compare(e, i) {
        return ha(e.name, i.name)
    }
    isDefinedOn(e) {
        throw ca("KeyIndex.isDefinedOn not expected to be called.")
    }
    indexedValueChanged(e, i) {
        return !1
    }
    minPost() {
        return ce.MIN
    }
    maxPost() {
        return new ce(ts,Eo)
    }
    makePost(e, i) {
        return G(typeof e == "string", "KeyIndex indexValue must always be a string."),
        new ce(e,Eo)
    }
    toString() {
        return ".key"
    }
}
const Js = new DE;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo {
    constructor(e, i, r, o, c=null) {
        this.isReverse_ = o,
        this.resultGenerator_ = c,
        this.nodeStack_ = [];
        let d = 1;
        for (; !e.isEmpty(); )
            if (e = e,
            d = i ? r(e.key, i) : 1,
            o && (d *= -1),
            d < 0)
                this.isReverse_ ? e = e.left : e = e.right;
            else if (d === 0) {
                this.nodeStack_.push(e);
                break
            } else
                this.nodeStack_.push(e),
                this.isReverse_ ? e = e.right : e = e.left
    }
    getNext() {
        if (this.nodeStack_.length === 0)
            return null;
        let e = this.nodeStack_.pop(), i;
        if (this.resultGenerator_ ? i = this.resultGenerator_(e.key, e.value) : i = {
            key: e.key,
            value: e.value
        },
        this.isReverse_)
            for (e = e.left; !e.isEmpty(); )
                this.nodeStack_.push(e),
                e = e.right;
        else
            for (e = e.right; !e.isEmpty(); )
                this.nodeStack_.push(e),
                e = e.left;
        return i
    }
    hasNext() {
        return this.nodeStack_.length > 0
    }
    peek() {
        if (this.nodeStack_.length === 0)
            return null;
        const e = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
            key: e.key,
            value: e.value
        }
    }
}
class at {
    constructor(e, i, r, o, c) {
        this.key = e,
        this.value = i,
        this.color = r ?? at.RED,
        this.left = o ?? Ct.EMPTY_NODE,
        this.right = c ?? Ct.EMPTY_NODE
    }
    copy(e, i, r, o, c) {
        return new at(e ?? this.key,i ?? this.value,r ?? this.color,o ?? this.left,c ?? this.right)
    }
    count() {
        return this.left.count() + 1 + this.right.count()
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(e) {
        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    }
    min_() {
        return this.left.isEmpty() ? this : this.left.min_()
    }
    minKey() {
        return this.min_().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(e, i, r) {
        let o = this;
        const c = r(e, o.key);
        return c < 0 ? o = o.copy(null, null, null, o.left.insert(e, i, r), null) : c === 0 ? o = o.copy(null, i, null, null, null) : o = o.copy(null, null, null, null, o.right.insert(e, i, r)),
        o.fixUp_()
    }
    removeMin_() {
        if (this.left.isEmpty())
            return Ct.EMPTY_NODE;
        let e = this;
        return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
        e = e.copy(null, null, null, e.left.removeMin_(), null),
        e.fixUp_()
    }
    remove(e, i) {
        let r, o;
        if (r = this,
        i(e, r.key) < 0)
            !r.left.isEmpty() && !r.left.isRed_() && !r.left.left.isRed_() && (r = r.moveRedLeft_()),
            r = r.copy(null, null, null, r.left.remove(e, i), null);
        else {
            if (r.left.isRed_() && (r = r.rotateRight_()),
            !r.right.isEmpty() && !r.right.isRed_() && !r.right.left.isRed_() && (r = r.moveRedRight_()),
            i(e, r.key) === 0) {
                if (r.right.isEmpty())
                    return Ct.EMPTY_NODE;
                o = r.right.min_(),
                r = r.copy(o.key, o.value, null, null, r.right.removeMin_())
            }
            r = r.copy(null, null, null, null, r.right.remove(e, i))
        }
        return r.fixUp_()
    }
    isRed_() {
        return this.color
    }
    fixUp_() {
        let e = this;
        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
        e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
        e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
        e
    }
    moveRedLeft_() {
        let e = this.colorFlip_();
        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()),
        e = e.rotateLeft_(),
        e = e.colorFlip_()),
        e
    }
    moveRedRight_() {
        let e = this.colorFlip_();
        return e.left.left.isRed_() && (e = e.rotateRight_(),
        e = e.colorFlip_()),
        e
    }
    rotateLeft_() {
        const e = this.copy(null, null, at.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null)
    }
    rotateRight_() {
        const e = this.copy(null, null, at.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e)
    }
    colorFlip_() {
        const e = this.left.copy(null, null, !this.left.color, null, null)
          , i = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, i)
    }
    checkMaxDepth_() {
        const e = this.check_();
        return Math.pow(2, e) <= this.count() + 1
    }
    check_() {
        if (this.isRed_() && this.left.isRed_())
            throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_())
            throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        const e = this.left.check_();
        if (e !== this.right.check_())
            throw new Error("Black depths differ");
        return e + (this.isRed_() ? 0 : 1)
    }
}
at.RED = !0;
at.BLACK = !1;
class wN {
    copy(e, i, r, o, c) {
        return this
    }
    insert(e, i, r) {
        return new at(e,i,null)
    }
    remove(e, i) {
        return this
    }
    count() {
        return 0
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(e) {
        return !1
    }
    reverseTraversal(e) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    check_() {
        return 0
    }
    isRed_() {
        return !1
    }
}
class Ct {
    constructor(e, i=Ct.EMPTY_NODE) {
        this.comparator_ = e,
        this.root_ = i
    }
    insert(e, i) {
        return new Ct(this.comparator_,this.root_.insert(e, i, this.comparator_).copy(null, null, at.BLACK, null, null))
    }
    remove(e) {
        return new Ct(this.comparator_,this.root_.remove(e, this.comparator_).copy(null, null, at.BLACK, null, null))
    }
    get(e) {
        let i, r = this.root_;
        for (; !r.isEmpty(); ) {
            if (i = this.comparator_(e, r.key),
            i === 0)
                return r.value;
            i < 0 ? r = r.left : i > 0 && (r = r.right)
        }
        return null
    }
    getPredecessorKey(e) {
        let i, r = this.root_, o = null;
        for (; !r.isEmpty(); )
            if (i = this.comparator_(e, r.key),
            i === 0) {
                if (r.left.isEmpty())
                    return o ? o.key : null;
                for (r = r.left; !r.right.isEmpty(); )
                    r = r.right;
                return r.key
            } else
                i < 0 ? r = r.left : i > 0 && (o = r,
                r = r.right);
        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
    }
    isEmpty() {
        return this.root_.isEmpty()
    }
    count() {
        return this.root_.count()
    }
    minKey() {
        return this.root_.minKey()
    }
    maxKey() {
        return this.root_.maxKey()
    }
    inorderTraversal(e) {
        return this.root_.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.root_.reverseTraversal(e)
    }
    getIterator(e) {
        return new bo(this.root_,null,this.comparator_,!1,e)
    }
    getIteratorFrom(e, i) {
        return new bo(this.root_,e,this.comparator_,!1,i)
    }
    getReverseIteratorFrom(e, i) {
        return new bo(this.root_,e,this.comparator_,!0,i)
    }
    getReverseIterator(e) {
        return new bo(this.root_,null,this.comparator_,!0,e)
    }
}
Ct.EMPTY_NODE = new wN;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function AN(s, e) {
    return ha(s.name, e.name)
}
function nh(s, e) {
    return ha(s, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let pd;
function RN(s) {
    pd = s
}
const ME = function(s) {
    return typeof s == "number" ? "number:" + oE(s) : "string:" + s
}
  , kE = function(s) {
    if (s.isLeafNode()) {
        const e = s.val();
        G(typeof e == "string" || typeof e == "number" || typeof e == "object" && Hn(e, ".sv"), "Priority must be a string or number.")
    } else
        G(s === pd || s.isEmpty(), "priority of unexpected type.");
    G(s === pd || s.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rv;
class st {
    static set __childrenNodeConstructor(e) {
        Rv = e
    }
    static get __childrenNodeConstructor() {
        return Rv
    }
    constructor(e, i=st.__childrenNodeConstructor.EMPTY_NODE) {
        this.value_ = e,
        this.priorityNode_ = i,
        this.lazyHash_ = null,
        G(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."),
        kE(this.priorityNode_)
    }
    isLeafNode() {
        return !0
    }
    getPriority() {
        return this.priorityNode_
    }
    updatePriority(e) {
        return new st(this.value_,e)
    }
    getImmediateChild(e) {
        return e === ".priority" ? this.priorityNode_ : st.__childrenNodeConstructor.EMPTY_NODE
    }
    getChild(e) {
        return de(e) ? this : pe(e) === ".priority" ? this.priorityNode_ : st.__childrenNodeConstructor.EMPTY_NODE
    }
    hasChild() {
        return !1
    }
    getPredecessorChildName(e, i) {
        return null
    }
    updateImmediateChild(e, i) {
        return e === ".priority" ? this.updatePriority(i) : i.isEmpty() && e !== ".priority" ? this : st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, i).updatePriority(this.priorityNode_)
    }
    updateChild(e, i) {
        const r = pe(e);
        return r === null ? i : i.isEmpty() && r !== ".priority" ? this : (G(r !== ".priority" || Ti(e) === 1, ".priority must be the last token in a path"),
        this.updateImmediateChild(r, st.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e), i)))
    }
    isEmpty() {
        return !1
    }
    numChildren() {
        return 0
    }
    forEachChild(e, i) {
        return !1
    }
    val(e) {
        return e && !this.getPriority().isEmpty() ? {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
        } : this.getValue()
    }
    hash() {
        if (this.lazyHash_ === null) {
            let e = "";
            this.priorityNode_.isEmpty() || (e += "priority:" + ME(this.priorityNode_.val()) + ":");
            const i = typeof this.value_;
            e += i + ":",
            i === "number" ? e += oE(this.value_) : e += this.value_,
            this.lazyHash_ = aE(e)
        }
        return this.lazyHash_
    }
    getValue() {
        return this.value_
    }
    compareTo(e) {
        return e === st.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof st.__childrenNodeConstructor ? -1 : (G(e.isLeafNode(), "Unknown node type"),
        this.compareToLeafNode_(e))
    }
    compareToLeafNode_(e) {
        const i = typeof e.value_
          , r = typeof this.value_
          , o = st.VALUE_TYPE_ORDER.indexOf(i)
          , c = st.VALUE_TYPE_ORDER.indexOf(r);
        return G(o >= 0, "Unknown leaf type: " + i),
        G(c >= 0, "Unknown leaf type: " + r),
        o === c ? r === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : c - o
    }
    withIndex() {
        return this
    }
    isIndexed() {
        return !0
    }
    equals(e) {
        if (e === this)
            return !0;
        if (e.isLeafNode()) {
            const i = e;
            return this.value_ === i.value_ && this.priorityNode_.equals(i.priorityNode_)
        } else
            return !1
    }
}
st.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let LE, UE;
function NN(s) {
    LE = s
}
function xN(s) {
    UE = s
}
class ON extends lc {
    compare(e, i) {
        const r = e.node.getPriority()
          , o = i.node.getPriority()
          , c = r.compareTo(o);
        return c === 0 ? ha(e.name, i.name) : c
    }
    isDefinedOn(e) {
        return !e.getPriority().isEmpty()
    }
    indexedValueChanged(e, i) {
        return !e.getPriority().equals(i.getPriority())
    }
    minPost() {
        return ce.MIN
    }
    maxPost() {
        return new ce(ts,new st("[PRIORITY-POST]",UE))
    }
    makePost(e, i) {
        const r = LE(e);
        return new ce(i,new st("[PRIORITY-POST]",r))
    }
    toString() {
        return ".priority"
    }
}
const Ve = new ON;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IN = Math.log(2);
class DN {
    constructor(e) {
        const i = c => parseInt(Math.log(c) / IN, 10)
          , r = c => parseInt(Array(c + 1).join("1"), 2);
        this.count = i(e + 1),
        this.current_ = this.count - 1;
        const o = r(this.count);
        this.bits_ = e + 1 & o
    }
    nextBitIsOne() {
        const e = !(this.bits_ & 1 << this.current_);
        return this.current_--,
        e
    }
}
const Vo = function(s, e, i, r) {
    s.sort(e);
    const o = function(p, m) {
        const y = m - p;
        let E, v;
        if (y === 0)
            return null;
        if (y === 1)
            return E = s[p],
            v = i ? i(E) : E,
            new at(v,E.node,at.BLACK,null,null);
        {
            const x = parseInt(y / 2, 10) + p
              , A = o(p, x)
              , U = o(x + 1, m);
            return E = s[x],
            v = i ? i(E) : E,
            new at(v,E.node,at.BLACK,A,U)
        }
    }
      , c = function(p) {
        let m = null
          , y = null
          , E = s.length;
        const v = function(A, U) {
            const B = E - A
              , H = E;
            E -= A;
            const q = o(B + 1, H)
              , Y = s[B]
              , W = i ? i(Y) : Y;
            x(new at(W,Y.node,U,null,q))
        }
          , x = function(A) {
            m ? (m.left = A,
            m = A) : (y = A,
            m = A)
        };
        for (let A = 0; A < p.count; ++A) {
            const U = p.nextBitIsOne()
              , B = Math.pow(2, p.count - (A + 1));
            U ? v(B, at.BLACK) : (v(B, at.BLACK),
            v(B, at.RED))
        }
        return y
    }
      , d = new DN(s.length)
      , h = c(d);
    return new Ct(r || e,h)
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wf;
const Ks = {};
class Mn {
    static get Default() {
        return G(Ks && Ve, "ChildrenNode.ts has not been loaded"),
        Wf = Wf || new Mn({
            ".priority": Ks
        },{
            ".priority": Ve
        }),
        Wf
    }
    constructor(e, i) {
        this.indexes_ = e,
        this.indexSet_ = i
    }
    get(e) {
        const i = ea(this.indexes_, e);
        if (!i)
            throw new Error("No index defined for " + e);
        return i instanceof Ct ? i : null
    }
    hasIndex(e) {
        return Hn(this.indexSet_, e.toString())
    }
    addIndex(e, i) {
        G(e !== Js, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const r = [];
        let o = !1;
        const c = i.getIterator(ce.Wrap);
        let d = c.getNext();
        for (; d; )
            o = o || e.isDefinedOn(d.node),
            r.push(d),
            d = c.getNext();
        let h;
        o ? h = Vo(r, e.getCompare()) : h = Ks;
        const p = e.toString()
          , m = Object.assign({}, this.indexSet_);
        m[p] = e;
        const y = Object.assign({}, this.indexes_);
        return y[p] = h,
        new Mn(y,m)
    }
    addToIndexes(e, i) {
        const r = Mo(this.indexes_, (o, c) => {
            const d = ea(this.indexSet_, c);
            if (G(d, "Missing index implementation for " + c),
            o === Ks)
                if (d.isDefinedOn(e.node)) {
                    const h = []
                      , p = i.getIterator(ce.Wrap);
                    let m = p.getNext();
                    for (; m; )
                        m.name !== e.name && h.push(m),
                        m = p.getNext();
                    return h.push(e),
                    Vo(h, d.getCompare())
                } else
                    return Ks;
            else {
                const h = i.get(e.name);
                let p = o;
                return h && (p = p.remove(new ce(e.name,h))),
                p.insert(e, e.node)
            }
        }
        );
        return new Mn(r,this.indexSet_)
    }
    removeFromIndexes(e, i) {
        const r = Mo(this.indexes_, o => {
            if (o === Ks)
                return o;
            {
                const c = i.get(e.name);
                return c ? o.remove(new ce(e.name,c)) : o
            }
        }
        );
        return new Mn(r,this.indexSet_)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let yr;
class ie {
    static get EMPTY_NODE() {
        return yr || (yr = new ie(new Ct(nh),null,Mn.Default))
    }
    constructor(e, i, r) {
        this.children_ = e,
        this.priorityNode_ = i,
        this.indexMap_ = r,
        this.lazyHash_ = null,
        this.priorityNode_ && kE(this.priorityNode_),
        this.children_.isEmpty() && G(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
    }
    isLeafNode() {
        return !1
    }
    getPriority() {
        return this.priorityNode_ || yr
    }
    updatePriority(e) {
        return this.children_.isEmpty() ? this : new ie(this.children_,e,this.indexMap_)
    }
    getImmediateChild(e) {
        if (e === ".priority")
            return this.getPriority();
        {
            const i = this.children_.get(e);
            return i === null ? yr : i
        }
    }
    getChild(e) {
        const i = pe(e);
        return i === null ? this : this.getImmediateChild(i).getChild(Me(e))
    }
    hasChild(e) {
        return this.children_.get(e) !== null
    }
    updateImmediateChild(e, i) {
        if (G(i, "We should always be passing snapshot nodes"),
        e === ".priority")
            return this.updatePriority(i);
        {
            const r = new ce(e,i);
            let o, c;
            i.isEmpty() ? (o = this.children_.remove(e),
            c = this.indexMap_.removeFromIndexes(r, this.children_)) : (o = this.children_.insert(e, i),
            c = this.indexMap_.addToIndexes(r, this.children_));
            const d = o.isEmpty() ? yr : this.priorityNode_;
            return new ie(o,d,c)
        }
    }
    updateChild(e, i) {
        const r = pe(e);
        if (r === null)
            return i;
        {
            G(pe(e) !== ".priority" || Ti(e) === 1, ".priority must be the last token in a path");
            const o = this.getImmediateChild(r).updateChild(Me(e), i);
            return this.updateImmediateChild(r, o)
        }
    }
    isEmpty() {
        return this.children_.isEmpty()
    }
    numChildren() {
        return this.children_.count()
    }
    val(e) {
        if (this.isEmpty())
            return null;
        const i = {};
        let r = 0
          , o = 0
          , c = !0;
        if (this.forEachChild(Ve, (d, h) => {
            i[d] = h.val(e),
            r++,
            c && ie.INTEGER_REGEXP_.test(d) ? o = Math.max(o, Number(d)) : c = !1
        }
        ),
        !e && c && o < 2 * r) {
            const d = [];
            for (const h in i)
                d[h] = i[h];
            return d
        } else
            return e && !this.getPriority().isEmpty() && (i[".priority"] = this.getPriority().val()),
            i
    }
    hash() {
        if (this.lazyHash_ === null) {
            let e = "";
            this.getPriority().isEmpty() || (e += "priority:" + ME(this.getPriority().val()) + ":"),
            this.forEachChild(Ve, (i, r) => {
                const o = r.hash();
                o !== "" && (e += ":" + i + ":" + o)
            }
            ),
            this.lazyHash_ = e === "" ? "" : aE(e)
        }
        return this.lazyHash_
    }
    getPredecessorChildName(e, i, r) {
        const o = this.resolveIndex_(r);
        if (o) {
            const c = o.getPredecessorKey(new ce(e,i));
            return c ? c.name : null
        } else
            return this.children_.getPredecessorKey(e)
    }
    getFirstChildName(e) {
        const i = this.resolveIndex_(e);
        if (i) {
            const r = i.minKey();
            return r && r.name
        } else
            return this.children_.minKey()
    }
    getFirstChild(e) {
        const i = this.getFirstChildName(e);
        return i ? new ce(i,this.children_.get(i)) : null
    }
    getLastChildName(e) {
        const i = this.resolveIndex_(e);
        if (i) {
            const r = i.maxKey();
            return r && r.name
        } else
            return this.children_.maxKey()
    }
    getLastChild(e) {
        const i = this.getLastChildName(e);
        return i ? new ce(i,this.children_.get(i)) : null
    }
    forEachChild(e, i) {
        const r = this.resolveIndex_(e);
        return r ? r.inorderTraversal(o => i(o.name, o.node)) : this.children_.inorderTraversal(i)
    }
    getIterator(e) {
        return this.getIteratorFrom(e.minPost(), e)
    }
    getIteratorFrom(e, i) {
        const r = this.resolveIndex_(i);
        if (r)
            return r.getIteratorFrom(e, o => o);
        {
            const o = this.children_.getIteratorFrom(e.name, ce.Wrap);
            let c = o.peek();
            for (; c != null && i.compare(c, e) < 0; )
                o.getNext(),
                c = o.peek();
            return o
        }
    }
    getReverseIterator(e) {
        return this.getReverseIteratorFrom(e.maxPost(), e)
    }
    getReverseIteratorFrom(e, i) {
        const r = this.resolveIndex_(i);
        if (r)
            return r.getReverseIteratorFrom(e, o => o);
        {
            const o = this.children_.getReverseIteratorFrom(e.name, ce.Wrap);
            let c = o.peek();
            for (; c != null && i.compare(c, e) > 0; )
                o.getNext(),
                c = o.peek();
            return o
        }
    }
    compareTo(e) {
        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Zr ? -1 : 0
    }
    withIndex(e) {
        if (e === Js || this.indexMap_.hasIndex(e))
            return this;
        {
            const i = this.indexMap_.addIndex(e, this.children_);
            return new ie(this.children_,this.priorityNode_,i)
        }
    }
    isIndexed(e) {
        return e === Js || this.indexMap_.hasIndex(e)
    }
    equals(e) {
        if (e === this)
            return !0;
        if (e.isLeafNode())
            return !1;
        {
            const i = e;
            if (this.getPriority().equals(i.getPriority()))
                if (this.children_.count() === i.children_.count()) {
                    const r = this.getIterator(Ve)
                      , o = i.getIterator(Ve);
                    let c = r.getNext()
                      , d = o.getNext();
                    for (; c && d; ) {
                        if (c.name !== d.name || !c.node.equals(d.node))
                            return !1;
                        c = r.getNext(),
                        d = o.getNext()
                    }
                    return c === null && d === null
                } else
                    return !1;
            else
                return !1
        }
    }
    resolveIndex_(e) {
        return e === Js ? null : this.indexMap_.get(e.toString())
    }
}
ie.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class MN extends ie {
    constructor() {
        super(new Ct(nh), ie.EMPTY_NODE, Mn.Default)
    }
    compareTo(e) {
        return e === this ? 0 : 1
    }
    equals(e) {
        return e === this
    }
    getPriority() {
        return this
    }
    getImmediateChild(e) {
        return ie.EMPTY_NODE
    }
    isEmpty() {
        return !1
    }
}
const Zr = new MN;
Object.defineProperties(ce, {
    MIN: {
        value: new ce(ia,ie.EMPTY_NODE)
    },
    MAX: {
        value: new ce(ts,Zr)
    }
});
DE.__EMPTY_NODE = ie.EMPTY_NODE;
st.__childrenNodeConstructor = ie;
RN(Zr);
xN(Zr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kN = !0;
function rt(s, e=null) {
    if (s === null)
        return ie.EMPTY_NODE;
    if (typeof s == "object" && ".priority"in s && (e = s[".priority"]),
    G(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv"in e, "Invalid priority type found: " + typeof e),
    typeof s == "object" && ".value"in s && s[".value"] !== null && (s = s[".value"]),
    typeof s != "object" || ".sv"in s) {
        const i = s;
        return new st(i,rt(e))
    }
    if (!(s instanceof Array) && kN) {
        const i = [];
        let r = !1;
        if (At(s, (d, h) => {
            if (d.substring(0, 1) !== ".") {
                const p = rt(h);
                p.isEmpty() || (r = r || !p.getPriority().isEmpty(),
                i.push(new ce(d,p)))
            }
        }
        ),
        i.length === 0)
            return ie.EMPTY_NODE;
        const c = Vo(i, AN, d => d.name, nh);
        if (r) {
            const d = Vo(i, Ve.getCompare());
            return new ie(c,rt(e),new Mn({
                ".priority": d
            },{
                ".priority": Ve
            }))
        } else
            return new ie(c,rt(e),Mn.Default)
    } else {
        let i = ie.EMPTY_NODE;
        return At(s, (r, o) => {
            if (Hn(s, r) && r.substring(0, 1) !== ".") {
                const c = rt(o);
                (c.isLeafNode() || !c.isEmpty()) && (i = i.updateImmediateChild(r, c))
            }
        }
        ),
        i.updatePriority(rt(e))
    }
}
NN(rt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class LN extends lc {
    constructor(e) {
        super(),
        this.indexPath_ = e,
        G(!de(e) && pe(e) !== ".priority", "Can't create PathIndex with empty path or .priority key")
    }
    extractChild(e) {
        return e.getChild(this.indexPath_)
    }
    isDefinedOn(e) {
        return !e.getChild(this.indexPath_).isEmpty()
    }
    compare(e, i) {
        const r = this.extractChild(e.node)
          , o = this.extractChild(i.node)
          , c = r.compareTo(o);
        return c === 0 ? ha(e.name, i.name) : c
    }
    makePost(e, i) {
        const r = rt(e)
          , o = ie.EMPTY_NODE.updateChild(this.indexPath_, r);
        return new ce(i,o)
    }
    maxPost() {
        const e = ie.EMPTY_NODE.updateChild(this.indexPath_, Zr);
        return new ce(ts,e)
    }
    toString() {
        return NE(this.indexPath_, 0).join("/")
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UN extends lc {
    compare(e, i) {
        const r = e.node.compareTo(i.node);
        return r === 0 ? ha(e.name, i.name) : r
    }
    isDefinedOn(e) {
        return !0
    }
    indexedValueChanged(e, i) {
        return !e.equals(i)
    }
    minPost() {
        return ce.MIN
    }
    maxPost() {
        return ce.MAX
    }
    makePost(e, i) {
        const r = rt(e);
        return new ce(i,r)
    }
    toString() {
        return ".value"
    }
}
const PN = new UN;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function PE(s) {
    return {
        type: "value",
        snapshotNode: s
    }
}
function sa(s, e) {
    return {
        type: "child_added",
        snapshotNode: e,
        childName: s
    }
}
function Ur(s, e) {
    return {
        type: "child_removed",
        snapshotNode: e,
        childName: s
    }
}
function Pr(s, e, i) {
    return {
        type: "child_changed",
        snapshotNode: e,
        childName: s,
        oldSnap: i
    }
}
function jN(s, e) {
    return {
        type: "child_moved",
        snapshotNode: e,
        childName: s
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih {
    constructor(e) {
        this.index_ = e
    }
    updateChild(e, i, r, o, c, d) {
        G(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        const h = e.getImmediateChild(i);
        return h.getChild(o).equals(r.getChild(o)) && h.isEmpty() === r.isEmpty() || (d != null && (r.isEmpty() ? e.hasChild(i) ? d.trackChildChange(Ur(i, h)) : G(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : h.isEmpty() ? d.trackChildChange(sa(i, r)) : d.trackChildChange(Pr(i, r, h))),
        e.isLeafNode() && r.isEmpty()) ? e : e.updateImmediateChild(i, r).withIndex(this.index_)
    }
    updateFullNode(e, i, r) {
        return r != null && (e.isLeafNode() || e.forEachChild(Ve, (o, c) => {
            i.hasChild(o) || r.trackChildChange(Ur(o, c))
        }
        ),
        i.isLeafNode() || i.forEachChild(Ve, (o, c) => {
            if (e.hasChild(o)) {
                const d = e.getImmediateChild(o);
                d.equals(c) || r.trackChildChange(Pr(o, c, d))
            } else
                r.trackChildChange(sa(o, c))
        }
        )),
        i.withIndex(this.index_)
    }
    updatePriority(e, i) {
        return e.isEmpty() ? ie.EMPTY_NODE : e.updatePriority(i)
    }
    filtersNodes() {
        return !1
    }
    getIndexedFilter() {
        return this
    }
    getIndex() {
        return this.index_
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr {
    constructor(e) {
        this.indexedFilter_ = new ih(e.getIndex()),
        this.index_ = e.getIndex(),
        this.startPost_ = jr.getStartPost_(e),
        this.endPost_ = jr.getEndPost_(e),
        this.startIsInclusive_ = !e.startAfterSet_,
        this.endIsInclusive_ = !e.endBeforeSet_
    }
    getStartPost() {
        return this.startPost_
    }
    getEndPost() {
        return this.endPost_
    }
    matches(e) {
        const i = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0
          , r = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
        return i && r
    }
    updateChild(e, i, r, o, c, d) {
        return this.matches(new ce(i,r)) || (r = ie.EMPTY_NODE),
        this.indexedFilter_.updateChild(e, i, r, o, c, d)
    }
    updateFullNode(e, i, r) {
        i.isLeafNode() && (i = ie.EMPTY_NODE);
        let o = i.withIndex(this.index_);
        o = o.updatePriority(ie.EMPTY_NODE);
        const c = this;
        return i.forEachChild(Ve, (d, h) => {
            c.matches(new ce(d,h)) || (o = o.updateImmediateChild(d, ie.EMPTY_NODE))
        }
        ),
        this.indexedFilter_.updateFullNode(e, o, r)
    }
    updatePriority(e, i) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.indexedFilter_
    }
    getIndex() {
        return this.index_
    }
    static getStartPost_(e) {
        if (e.hasStart()) {
            const i = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), i)
        } else
            return e.getIndex().minPost()
    }
    static getEndPost_(e) {
        if (e.hasEnd()) {
            const i = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), i)
        } else
            return e.getIndex().maxPost()
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zN {
    constructor(e) {
        this.withinDirectionalStart = i => this.reverse_ ? this.withinEndPost(i) : this.withinStartPost(i),
        this.withinDirectionalEnd = i => this.reverse_ ? this.withinStartPost(i) : this.withinEndPost(i),
        this.withinStartPost = i => {
            const r = this.index_.compare(this.rangedFilter_.getStartPost(), i);
            return this.startIsInclusive_ ? r <= 0 : r < 0
        }
        ,
        this.withinEndPost = i => {
            const r = this.index_.compare(i, this.rangedFilter_.getEndPost());
            return this.endIsInclusive_ ? r <= 0 : r < 0
        }
        ,
        this.rangedFilter_ = new jr(e),
        this.index_ = e.getIndex(),
        this.limit_ = e.getLimit(),
        this.reverse_ = !e.isViewFromLeft(),
        this.startIsInclusive_ = !e.startAfterSet_,
        this.endIsInclusive_ = !e.endBeforeSet_
    }
    updateChild(e, i, r, o, c, d) {
        return this.rangedFilter_.matches(new ce(i,r)) || (r = ie.EMPTY_NODE),
        e.getImmediateChild(i).equals(r) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, i, r, o, c, d) : this.fullLimitUpdateChild_(e, i, r, c, d)
    }
    updateFullNode(e, i, r) {
        let o;
        if (i.isLeafNode() || i.isEmpty())
            o = ie.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < i.numChildren() && i.isIndexed(this.index_)) {
            o = ie.EMPTY_NODE.withIndex(this.index_);
            let c;
            this.reverse_ ? c = i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : c = i.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let d = 0;
            for (; c.hasNext() && d < this.limit_; ) {
                const h = c.getNext();
                if (this.withinDirectionalStart(h))
                    if (this.withinDirectionalEnd(h))
                        o = o.updateImmediateChild(h.name, h.node),
                        d++;
                    else
                        break;
                else
                    continue
            }
        } else {
            o = i.withIndex(this.index_),
            o = o.updatePriority(ie.EMPTY_NODE);
            let c;
            this.reverse_ ? c = o.getReverseIterator(this.index_) : c = o.getIterator(this.index_);
            let d = 0;
            for (; c.hasNext(); ) {
                const h = c.getNext();
                d < this.limit_ && this.withinDirectionalStart(h) && this.withinDirectionalEnd(h) ? d++ : o = o.updateImmediateChild(h.name, ie.EMPTY_NODE)
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, o, r)
    }
    updatePriority(e, i) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter()
    }
    getIndex() {
        return this.index_
    }
    fullLimitUpdateChild_(e, i, r, o, c) {
        let d;
        if (this.reverse_) {
            const E = this.index_.getCompare();
            d = (v, x) => E(x, v)
        } else
            d = this.index_.getCompare();
        const h = e;
        G(h.numChildren() === this.limit_, "");
        const p = new ce(i,r)
          , m = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_)
          , y = this.rangedFilter_.matches(p);
        if (h.hasChild(i)) {
            const E = h.getImmediateChild(i);
            let v = o.getChildAfterChild(this.index_, m, this.reverse_);
            for (; v != null && (v.name === i || h.hasChild(v.name)); )
                v = o.getChildAfterChild(this.index_, v, this.reverse_);
            const x = v == null ? 1 : d(v, p);
            if (y && !r.isEmpty() && x >= 0)
                return c != null && c.trackChildChange(Pr(i, r, E)),
                h.updateImmediateChild(i, r);
            {
                c != null && c.trackChildChange(Ur(i, E));
                const U = h.updateImmediateChild(i, ie.EMPTY_NODE);
                return v != null && this.rangedFilter_.matches(v) ? (c != null && c.trackChildChange(sa(v.name, v.node)),
                U.updateImmediateChild(v.name, v.node)) : U
            }
        } else
            return r.isEmpty() ? e : y && d(m, p) >= 0 ? (c != null && (c.trackChildChange(Ur(m.name, m.node)),
            c.trackChildChange(sa(i, r))),
            h.updateImmediateChild(i, r).updateImmediateChild(m.name, ie.EMPTY_NODE)) : e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh {
    constructor() {
        this.limitSet_ = !1,
        this.startSet_ = !1,
        this.startNameSet_ = !1,
        this.startAfterSet_ = !1,
        this.endSet_ = !1,
        this.endNameSet_ = !1,
        this.endBeforeSet_ = !1,
        this.limit_ = 0,
        this.viewFrom_ = "",
        this.indexStartValue_ = null,
        this.indexStartName_ = "",
        this.indexEndValue_ = null,
        this.indexEndName_ = "",
        this.index_ = Ve
    }
    hasStart() {
        return this.startSet_
    }
    isViewFromLeft() {
        return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l"
    }
    getIndexStartValue() {
        return G(this.startSet_, "Only valid if start has been set"),
        this.indexStartValue_
    }
    getIndexStartName() {
        return G(this.startSet_, "Only valid if start has been set"),
        this.startNameSet_ ? this.indexStartName_ : ia
    }
    hasEnd() {
        return this.endSet_
    }
    getIndexEndValue() {
        return G(this.endSet_, "Only valid if end has been set"),
        this.indexEndValue_
    }
    getIndexEndName() {
        return G(this.endSet_, "Only valid if end has been set"),
        this.endNameSet_ ? this.indexEndName_ : ts
    }
    hasLimit() {
        return this.limitSet_
    }
    hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== ""
    }
    getLimit() {
        return G(this.limitSet_, "Only valid if limit has been set"),
        this.limit_
    }
    getIndex() {
        return this.index_
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_)
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === Ve
    }
    copy() {
        const e = new sh;
        return e.limitSet_ = this.limitSet_,
        e.limit_ = this.limit_,
        e.startSet_ = this.startSet_,
        e.startAfterSet_ = this.startAfterSet_,
        e.indexStartValue_ = this.indexStartValue_,
        e.startNameSet_ = this.startNameSet_,
        e.indexStartName_ = this.indexStartName_,
        e.endSet_ = this.endSet_,
        e.endBeforeSet_ = this.endBeforeSet_,
        e.indexEndValue_ = this.indexEndValue_,
        e.endNameSet_ = this.endNameSet_,
        e.indexEndName_ = this.indexEndName_,
        e.index_ = this.index_,
        e.viewFrom_ = this.viewFrom_,
        e
    }
}
function HN(s) {
    return s.loadsAllData() ? new ih(s.getIndex()) : s.hasLimit() ? new zN(s) : new jr(s)
}
function Nv(s) {
    const e = {};
    if (s.isDefault())
        return e;
    let i;
    if (s.index_ === Ve ? i = "$priority" : s.index_ === PN ? i = "$value" : s.index_ === Js ? i = "$key" : (G(s.index_ instanceof LN, "Unrecognized index type!"),
    i = s.index_.toString()),
    e.orderBy = Ze(i),
    s.startSet_) {
        const r = s.startAfterSet_ ? "startAfter" : "startAt";
        e[r] = Ze(s.indexStartValue_),
        s.startNameSet_ && (e[r] += "," + Ze(s.indexStartName_))
    }
    if (s.endSet_) {
        const r = s.endBeforeSet_ ? "endBefore" : "endAt";
        e[r] = Ze(s.indexEndValue_),
        s.endNameSet_ && (e[r] += "," + Ze(s.indexEndName_))
    }
    return s.limitSet_ && (s.isViewFromLeft() ? e.limitToFirst = s.limit_ : e.limitToLast = s.limit_),
    e
}
function xv(s) {
    const e = {};
    if (s.startSet_ && (e.sp = s.indexStartValue_,
    s.startNameSet_ && (e.sn = s.indexStartName_),
    e.sin = !s.startAfterSet_),
    s.endSet_ && (e.ep = s.indexEndValue_,
    s.endNameSet_ && (e.en = s.indexEndName_),
    e.ein = !s.endBeforeSet_),
    s.limitSet_) {
        e.l = s.limit_;
        let i = s.viewFrom_;
        i === "" && (s.isViewFromLeft() ? i = "l" : i = "r"),
        e.vf = i
    }
    return s.index_ !== Ve && (e.i = s.index_.toString()),
    e
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go extends wE {
    reportStats(e) {
        throw new Error("Method not implemented.")
    }
    static getListenId_(e, i) {
        return i !== void 0 ? "tag$" + i : (G(e._queryParams.isDefault(), "should have a tag if it's not a default query."),
        e._path.toString())
    }
    constructor(e, i, r, o) {
        super(),
        this.repoInfo_ = e,
        this.onDataUpdate_ = i,
        this.authTokenProvider_ = r,
        this.appCheckTokenProvider_ = o,
        this.log_ = $r("p:rest:"),
        this.listens_ = {}
    }
    listen(e, i, r, o) {
        const c = e._path.toString();
        this.log_("Listen called for " + c + " " + e._queryIdentifier);
        const d = Go.getListenId_(e, r)
          , h = {};
        this.listens_[d] = h;
        const p = Nv(e._queryParams);
        this.restRequest_(c + ".json", p, (m, y) => {
            let E = y;
            if (m === 404 && (E = null,
            m = null),
            m === null && this.onDataUpdate_(c, E, !1, r),
            ea(this.listens_, d) === h) {
                let v;
                m ? m === 401 ? v = "permission_denied" : v = "rest_error:" + m : v = "ok",
                o(v, null)
            }
        }
        )
    }
    unlisten(e, i) {
        const r = Go.getListenId_(e, i);
        delete this.listens_[r]
    }
    get(e) {
        const i = Nv(e._queryParams)
          , r = e._path.toString()
          , o = new tc;
        return this.restRequest_(r + ".json", i, (c, d) => {
            let h = d;
            c === 404 && (h = null,
            c = null),
            c === null ? (this.onDataUpdate_(r, h, !1, null),
            o.resolve(h)) : o.reject(new Error(h))
        }
        ),
        o.promise
    }
    refreshAuthToken(e) {}
    restRequest_(e, i={}, r) {
        return i.format = "export",
        Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then( ([o,c]) => {
            o && o.accessToken && (i.auth = o.accessToken),
            c && c.token && (i.ac = c.token);
            const d = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + ua(i);
            this.log_("Sending REST request for " + d);
            const h = new XMLHttpRequest;
            h.onreadystatechange = () => {
                if (r && h.readyState === 4) {
                    this.log_("REST Response for " + d + " received. status:", h.status, "response:", h.responseText);
                    let p = null;
                    if (h.status >= 200 && h.status < 300) {
                        try {
                            p = Ir(h.responseText)
                        } catch {
                            wt("Failed to parse JSON response for " + d + ": " + h.responseText)
                        }
                        r(null, p)
                    } else
                        h.status !== 401 && h.status !== 404 && wt("Got unsuccessful REST response for " + d + " Status: " + h.status),
                        r(h.status);
                    r = null
                }
            }
            ,
            h.open("GET", d, !0),
            h.send()
        }
        )
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BN {
    constructor() {
        this.rootNode_ = ie.EMPTY_NODE
    }
    getNode(e) {
        return this.rootNode_.getChild(e)
    }
    updateSnapshot(e, i) {
        this.rootNode_ = this.rootNode_.updateChild(e, i)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yo() {
    return {
        value: null,
        children: new Map
    }
}
function jE(s, e, i) {
    if (de(e))
        s.value = i,
        s.children.clear();
    else if (s.value !== null)
        s.value = s.value.updateChild(e, i);
    else {
        const r = pe(e);
        s.children.has(r) || s.children.set(r, Yo());
        const o = s.children.get(r);
        e = Me(e),
        jE(o, e, i)
    }
}
function md(s, e, i) {
    s.value !== null ? i(e, s.value) : qN(s, (r, o) => {
        const c = new Ie(e.toString() + "/" + r);
        md(o, c, i)
    }
    )
}
function qN(s, e) {
    s.children.forEach( (i, r) => {
        e(r, i)
    }
    )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class VN {
    constructor(e) {
        this.collection_ = e,
        this.last_ = null
    }
    get() {
        const e = this.collection_.get()
          , i = Object.assign({}, e);
        return this.last_ && At(this.last_, (r, o) => {
            i[r] = i[r] - o
        }
        ),
        this.last_ = e,
        i
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ov = 10 * 1e3
  , GN = 30 * 1e3
  , YN = 5 * 60 * 1e3;
class FN {
    constructor(e, i) {
        this.server_ = i,
        this.statsToReport_ = {},
        this.statsListener_ = new VN(e);
        const r = Ov + (GN - Ov) * Math.random();
        Ar(this.reportStats_.bind(this), Math.floor(r))
    }
    reportStats_() {
        const e = this.statsListener_.get()
          , i = {};
        let r = !1;
        At(e, (o, c) => {
            c > 0 && Hn(this.statsToReport_, o) && (i[o] = c,
            r = !0)
        }
        ),
        r && this.server_.reportStats(i),
        Ar(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * YN))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var en;
(function(s) {
    s[s.OVERWRITE = 0] = "OVERWRITE",
    s[s.MERGE = 1] = "MERGE",
    s[s.ACK_USER_WRITE = 2] = "ACK_USER_WRITE",
    s[s.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
}
)(en || (en = {}));
function zE() {
    return {
        fromUser: !0,
        fromServer: !1,
        queryId: null,
        tagged: !1
    }
}
function ah() {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: null,
        tagged: !1
    }
}
function rh(s) {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: s,
        tagged: !0
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo {
    constructor(e, i, r) {
        this.path = e,
        this.affectedTree = i,
        this.revert = r,
        this.type = en.ACK_USER_WRITE,
        this.source = zE()
    }
    operationForChild(e) {
        if (de(this.path)) {
            if (this.affectedTree.value != null)
                return G(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."),
                this;
            {
                const i = this.affectedTree.subtree(new Ie(e));
                return new Fo(Ee(),i,this.revert)
            }
        } else
            return G(pe(this.path) === e, "operationForChild called for unrelated child."),
            new Fo(Me(this.path),this.affectedTree,this.revert)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr {
    constructor(e, i) {
        this.source = e,
        this.path = i,
        this.type = en.LISTEN_COMPLETE
    }
    operationForChild(e) {
        return de(this.path) ? new zr(this.source,Ee()) : new zr(this.source,Me(this.path))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns {
    constructor(e, i, r) {
        this.source = e,
        this.path = i,
        this.snap = r,
        this.type = en.OVERWRITE
    }
    operationForChild(e) {
        return de(this.path) ? new ns(this.source,Ee(),this.snap.getImmediateChild(e)) : new ns(this.source,Me(this.path),this.snap)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr {
    constructor(e, i, r) {
        this.source = e,
        this.path = i,
        this.children = r,
        this.type = en.MERGE
    }
    operationForChild(e) {
        if (de(this.path)) {
            const i = this.children.subtree(new Ie(e));
            return i.isEmpty() ? null : i.value ? new ns(this.source,Ee(),i.value) : new Hr(this.source,Ee(),i)
        } else
            return G(pe(this.path) === e, "Can't get a merge for a child not on the path of the operation"),
            new Hr(this.source,Me(this.path),this.children)
    }
    toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci {
    constructor(e, i, r) {
        this.node_ = e,
        this.fullyInitialized_ = i,
        this.filtered_ = r
    }
    isFullyInitialized() {
        return this.fullyInitialized_
    }
    isFiltered() {
        return this.filtered_
    }
    isCompleteForPath(e) {
        if (de(e))
            return this.isFullyInitialized() && !this.filtered_;
        const i = pe(e);
        return this.isCompleteForChild(i)
    }
    isCompleteForChild(e) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
    }
    getNode() {
        return this.node_
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class KN {
    constructor(e) {
        this.query_ = e,
        this.index_ = this.query_._queryParams.getIndex()
    }
}
function QN(s, e, i, r) {
    const o = []
      , c = [];
    return e.forEach(d => {
        d.type === "child_changed" && s.index_.indexedValueChanged(d.oldSnap, d.snapshotNode) && c.push(jN(d.childName, d.snapshotNode))
    }
    ),
    Er(s, o, "child_removed", e, r, i),
    Er(s, o, "child_added", e, r, i),
    Er(s, o, "child_moved", c, r, i),
    Er(s, o, "child_changed", e, r, i),
    Er(s, o, "value", e, r, i),
    o
}
function Er(s, e, i, r, o, c) {
    const d = r.filter(h => h.type === i);
    d.sort( (h, p) => WN(s, h, p)),
    d.forEach(h => {
        const p = XN(s, h, c);
        o.forEach(m => {
            m.respondsTo(h.type) && e.push(m.createEvent(p, s.query_))
        }
        )
    }
    )
}
function XN(s, e, i) {
    return e.type === "value" || e.type === "child_removed" || (e.prevName = i.getPredecessorChildName(e.childName, e.snapshotNode, s.index_)),
    e
}
function WN(s, e, i) {
    if (e.childName == null || i.childName == null)
        throw ca("Should only compare child_ events.");
    const r = new ce(e.childName,e.snapshotNode)
      , o = new ce(i.childName,i.snapshotNode);
    return s.index_.compare(r, o)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oc(s, e) {
    return {
        eventCache: s,
        serverCache: e
    }
}
function Rr(s, e, i, r) {
    return oc(new Ci(e,i,r), s.serverCache)
}
function HE(s, e, i, r) {
    return oc(s.eventCache, new Ci(e,i,r))
}
function Ko(s) {
    return s.eventCache.isFullyInitialized() ? s.eventCache.getNode() : null
}
function is(s) {
    return s.serverCache.isFullyInitialized() ? s.serverCache.getNode() : null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $f;
const $N = () => ($f || ($f = new Ct(UR)),
$f);
class ke {
    static fromObject(e) {
        let i = new ke(null);
        return At(e, (r, o) => {
            i = i.set(new Ie(r), o)
        }
        ),
        i
    }
    constructor(e, i=$N()) {
        this.value = e,
        this.children = i
    }
    isEmpty() {
        return this.value === null && this.children.isEmpty()
    }
    findRootMostMatchingPathAndValue(e, i) {
        if (this.value != null && i(this.value))
            return {
                path: Ee(),
                value: this.value
            };
        if (de(e))
            return null;
        {
            const r = pe(e)
              , o = this.children.get(r);
            if (o !== null) {
                const c = o.findRootMostMatchingPathAndValue(Me(e), i);
                return c != null ? {
                    path: Je(new Ie(r), c.path),
                    value: c.value
                } : null
            } else
                return null
        }
    }
    findRootMostValueAndPath(e) {
        return this.findRootMostMatchingPathAndValue(e, () => !0)
    }
    subtree(e) {
        if (de(e))
            return this;
        {
            const i = pe(e)
              , r = this.children.get(i);
            return r !== null ? r.subtree(Me(e)) : new ke(null)
        }
    }
    set(e, i) {
        if (de(e))
            return new ke(i,this.children);
        {
            const r = pe(e)
              , c = (this.children.get(r) || new ke(null)).set(Me(e), i)
              , d = this.children.insert(r, c);
            return new ke(this.value,d)
        }
    }
    remove(e) {
        if (de(e))
            return this.children.isEmpty() ? new ke(null) : new ke(null,this.children);
        {
            const i = pe(e)
              , r = this.children.get(i);
            if (r) {
                const o = r.remove(Me(e));
                let c;
                return o.isEmpty() ? c = this.children.remove(i) : c = this.children.insert(i, o),
                this.value === null && c.isEmpty() ? new ke(null) : new ke(this.value,c)
            } else
                return this
        }
    }
    get(e) {
        if (de(e))
            return this.value;
        {
            const i = pe(e)
              , r = this.children.get(i);
            return r ? r.get(Me(e)) : null
        }
    }
    setTree(e, i) {
        if (de(e))
            return i;
        {
            const r = pe(e)
              , c = (this.children.get(r) || new ke(null)).setTree(Me(e), i);
            let d;
            return c.isEmpty() ? d = this.children.remove(r) : d = this.children.insert(r, c),
            new ke(this.value,d)
        }
    }
    fold(e) {
        return this.fold_(Ee(), e)
    }
    fold_(e, i) {
        const r = {};
        return this.children.inorderTraversal( (o, c) => {
            r[o] = c.fold_(Je(e, o), i)
        }
        ),
        i(e, this.value, r)
    }
    findOnPath(e, i) {
        return this.findOnPath_(e, Ee(), i)
    }
    findOnPath_(e, i, r) {
        const o = this.value ? r(i, this.value) : !1;
        if (o)
            return o;
        if (de(e))
            return null;
        {
            const c = pe(e)
              , d = this.children.get(c);
            return d ? d.findOnPath_(Me(e), Je(i, c), r) : null
        }
    }
    foreachOnPath(e, i) {
        return this.foreachOnPath_(e, Ee(), i)
    }
    foreachOnPath_(e, i, r) {
        if (de(e))
            return this;
        {
            this.value && r(i, this.value);
            const o = pe(e)
              , c = this.children.get(o);
            return c ? c.foreachOnPath_(Me(e), Je(i, o), r) : new ke(null)
        }
    }
    foreach(e) {
        this.foreach_(Ee(), e)
    }
    foreach_(e, i) {
        this.children.inorderTraversal( (r, o) => {
            o.foreach_(Je(e, r), i)
        }
        ),
        this.value && i(e, this.value)
    }
    foreachChild(e) {
        this.children.inorderTraversal( (i, r) => {
            r.value && e(i, r.value)
        }
        )
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn {
    constructor(e) {
        this.writeTree_ = e
    }
    static empty() {
        return new nn(new ke(null))
    }
}
function Nr(s, e, i) {
    if (de(e))
        return new nn(new ke(i));
    {
        const r = s.writeTree_.findRootMostValueAndPath(e);
        if (r != null) {
            const o = r.path;
            let c = r.value;
            const d = gt(o, e);
            return c = c.updateChild(d, i),
            new nn(s.writeTree_.set(o, c))
        } else {
            const o = new ke(i)
              , c = s.writeTree_.setTree(e, o);
            return new nn(c)
        }
    }
}
function Iv(s, e, i) {
    let r = s;
    return At(i, (o, c) => {
        r = Nr(r, Je(e, o), c)
    }
    ),
    r
}
function Dv(s, e) {
    if (de(e))
        return nn.empty();
    {
        const i = s.writeTree_.setTree(e, new ke(null));
        return new nn(i)
    }
}
function gd(s, e) {
    return rs(s, e) != null
}
function rs(s, e) {
    const i = s.writeTree_.findRootMostValueAndPath(e);
    return i != null ? s.writeTree_.get(i.path).getChild(gt(i.path, e)) : null
}
function Mv(s) {
    const e = []
      , i = s.writeTree_.value;
    return i != null ? i.isLeafNode() || i.forEachChild(Ve, (r, o) => {
        e.push(new ce(r,o))
    }
    ) : s.writeTree_.children.inorderTraversal( (r, o) => {
        o.value != null && e.push(new ce(r,o.value))
    }
    ),
    e
}
function bi(s, e) {
    if (de(e))
        return s;
    {
        const i = rs(s, e);
        return i != null ? new nn(new ke(i)) : new nn(s.writeTree_.subtree(e))
    }
}
function _d(s) {
    return s.writeTree_.isEmpty()
}
function aa(s, e) {
    return BE(Ee(), s.writeTree_, e)
}
function BE(s, e, i) {
    if (e.value != null)
        return i.updateChild(s, e.value);
    {
        let r = null;
        return e.children.inorderTraversal( (o, c) => {
            o === ".priority" ? (G(c.value !== null, "Priority writes must always be leaf nodes"),
            r = c.value) : i = BE(Je(s, o), c, i)
        }
        ),
        !i.getChild(s).isEmpty() && r !== null && (i = i.updateChild(Je(s, ".priority"), r)),
        i
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cc(s, e) {
    return YE(e, s)
}
function ZN(s, e, i, r, o) {
    G(r > s.lastWriteId, "Stacking an older write on top of newer ones"),
    o === void 0 && (o = !0),
    s.allWrites.push({
        path: e,
        snap: i,
        writeId: r,
        visible: o
    }),
    o && (s.visibleWrites = Nr(s.visibleWrites, e, i)),
    s.lastWriteId = r
}
function JN(s, e) {
    for (let i = 0; i < s.allWrites.length; i++) {
        const r = s.allWrites[i];
        if (r.writeId === e)
            return r
    }
    return null
}
function ex(s, e) {
    const i = s.allWrites.findIndex(h => h.writeId === e);
    G(i >= 0, "removeWrite called with nonexistent writeId.");
    const r = s.allWrites[i];
    s.allWrites.splice(i, 1);
    let o = r.visible
      , c = !1
      , d = s.allWrites.length - 1;
    for (; o && d >= 0; ) {
        const h = s.allWrites[d];
        h.visible && (d >= i && tx(h, r.path) ? o = !1 : Jt(r.path, h.path) && (c = !0)),
        d--
    }
    if (o) {
        if (c)
            return nx(s),
            !0;
        if (r.snap)
            s.visibleWrites = Dv(s.visibleWrites, r.path);
        else {
            const h = r.children;
            At(h, p => {
                s.visibleWrites = Dv(s.visibleWrites, Je(r.path, p))
            }
            )
        }
        return !0
    } else
        return !1
}
function tx(s, e) {
    if (s.snap)
        return Jt(s.path, e);
    for (const i in s.children)
        if (s.children.hasOwnProperty(i) && Jt(Je(s.path, i), e))
            return !0;
    return !1
}
function nx(s) {
    s.visibleWrites = qE(s.allWrites, ix, Ee()),
    s.allWrites.length > 0 ? s.lastWriteId = s.allWrites[s.allWrites.length - 1].writeId : s.lastWriteId = -1
}
function ix(s) {
    return s.visible
}
function qE(s, e, i) {
    let r = nn.empty();
    for (let o = 0; o < s.length; ++o) {
        const c = s[o];
        if (e(c)) {
            const d = c.path;
            let h;
            if (c.snap)
                Jt(i, d) ? (h = gt(i, d),
                r = Nr(r, h, c.snap)) : Jt(d, i) && (h = gt(d, i),
                r = Nr(r, Ee(), c.snap.getChild(h)));
            else if (c.children) {
                if (Jt(i, d))
                    h = gt(i, d),
                    r = Iv(r, h, c.children);
                else if (Jt(d, i))
                    if (h = gt(d, i),
                    de(h))
                        r = Iv(r, Ee(), c.children);
                    else {
                        const p = ea(c.children, pe(h));
                        if (p) {
                            const m = p.getChild(Me(h));
                            r = Nr(r, Ee(), m)
                        }
                    }
            } else
                throw ca("WriteRecord should have .snap or .children")
        }
    }
    return r
}
function VE(s, e, i, r, o) {
    if (!r && !o) {
        const c = rs(s.visibleWrites, e);
        if (c != null)
            return c;
        {
            const d = bi(s.visibleWrites, e);
            if (_d(d))
                return i;
            if (i == null && !gd(d, Ee()))
                return null;
            {
                const h = i || ie.EMPTY_NODE;
                return aa(d, h)
            }
        }
    } else {
        const c = bi(s.visibleWrites, e);
        if (!o && _d(c))
            return i;
        if (!o && i == null && !gd(c, Ee()))
            return null;
        {
            const d = function(m) {
                return (m.visible || o) && (!r || !~r.indexOf(m.writeId)) && (Jt(m.path, e) || Jt(e, m.path))
            }
              , h = qE(s.allWrites, d, e)
              , p = i || ie.EMPTY_NODE;
            return aa(h, p)
        }
    }
}
function sx(s, e, i) {
    let r = ie.EMPTY_NODE;
    const o = rs(s.visibleWrites, e);
    if (o)
        return o.isLeafNode() || o.forEachChild(Ve, (c, d) => {
            r = r.updateImmediateChild(c, d)
        }
        ),
        r;
    if (i) {
        const c = bi(s.visibleWrites, e);
        return i.forEachChild(Ve, (d, h) => {
            const p = aa(bi(c, new Ie(d)), h);
            r = r.updateImmediateChild(d, p)
        }
        ),
        Mv(c).forEach(d => {
            r = r.updateImmediateChild(d.name, d.node)
        }
        ),
        r
    } else {
        const c = bi(s.visibleWrites, e);
        return Mv(c).forEach(d => {
            r = r.updateImmediateChild(d.name, d.node)
        }
        ),
        r
    }
}
function ax(s, e, i, r, o) {
    G(r || o, "Either existingEventSnap or existingServerSnap must exist");
    const c = Je(e, i);
    if (gd(s.visibleWrites, c))
        return null;
    {
        const d = bi(s.visibleWrites, c);
        return _d(d) ? o.getChild(i) : aa(d, o.getChild(i))
    }
}
function rx(s, e, i, r) {
    const o = Je(e, i)
      , c = rs(s.visibleWrites, o);
    if (c != null)
        return c;
    if (r.isCompleteForChild(i)) {
        const d = bi(s.visibleWrites, o);
        return aa(d, r.getNode().getImmediateChild(i))
    } else
        return null
}
function lx(s, e) {
    return rs(s.visibleWrites, e)
}
function ox(s, e, i, r, o, c, d) {
    let h;
    const p = bi(s.visibleWrites, e)
      , m = rs(p, Ee());
    if (m != null)
        h = m;
    else if (i != null)
        h = aa(p, i);
    else
        return [];
    if (h = h.withIndex(d),
    !h.isEmpty() && !h.isLeafNode()) {
        const y = []
          , E = d.getCompare()
          , v = c ? h.getReverseIteratorFrom(r, d) : h.getIteratorFrom(r, d);
        let x = v.getNext();
        for (; x && y.length < o; )
            E(x, r) !== 0 && y.push(x),
            x = v.getNext();
        return y
    } else
        return []
}
function cx() {
    return {
        visibleWrites: nn.empty(),
        allWrites: [],
        lastWriteId: -1
    }
}
function Qo(s, e, i, r) {
    return VE(s.writeTree, s.treePath, e, i, r)
}
function lh(s, e) {
    return sx(s.writeTree, s.treePath, e)
}
function kv(s, e, i, r) {
    return ax(s.writeTree, s.treePath, e, i, r)
}
function Xo(s, e) {
    return lx(s.writeTree, Je(s.treePath, e))
}
function ux(s, e, i, r, o, c) {
    return ox(s.writeTree, s.treePath, e, i, r, o, c)
}
function oh(s, e, i) {
    return rx(s.writeTree, s.treePath, e, i)
}
function GE(s, e) {
    return YE(Je(s.treePath, e), s.writeTree)
}
function YE(s, e) {
    return {
        treePath: s,
        writeTree: e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fx {
    constructor() {
        this.changeMap = new Map
    }
    trackChildChange(e) {
        const i = e.type
          , r = e.childName;
        G(i === "child_added" || i === "child_changed" || i === "child_removed", "Only child changes supported for tracking"),
        G(r !== ".priority", "Only non-priority child changes can be tracked.");
        const o = this.changeMap.get(r);
        if (o) {
            const c = o.type;
            if (i === "child_added" && c === "child_removed")
                this.changeMap.set(r, Pr(r, e.snapshotNode, o.snapshotNode));
            else if (i === "child_removed" && c === "child_added")
                this.changeMap.delete(r);
            else if (i === "child_removed" && c === "child_changed")
                this.changeMap.set(r, Ur(r, o.oldSnap));
            else if (i === "child_changed" && c === "child_added")
                this.changeMap.set(r, sa(r, e.snapshotNode));
            else if (i === "child_changed" && c === "child_changed")
                this.changeMap.set(r, Pr(r, e.snapshotNode, o.oldSnap));
            else
                throw ca("Illegal combination of changes: " + e + " occurred after " + o)
        } else
            this.changeMap.set(r, e)
    }
    getChanges() {
        return Array.from(this.changeMap.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dx {
    getCompleteChild(e) {
        return null
    }
    getChildAfterChild(e, i, r) {
        return null
    }
}
const FE = new dx;
class ch {
    constructor(e, i, r=null) {
        this.writes_ = e,
        this.viewCache_ = i,
        this.optCompleteServerCache_ = r
    }
    getCompleteChild(e) {
        const i = this.viewCache_.eventCache;
        if (i.isCompleteForChild(e))
            return i.getNode().getImmediateChild(e);
        {
            const r = this.optCompleteServerCache_ != null ? new Ci(this.optCompleteServerCache_,!0,!1) : this.viewCache_.serverCache;
            return oh(this.writes_, e, r)
        }
    }
    getChildAfterChild(e, i, r) {
        const o = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : is(this.viewCache_)
          , c = ux(this.writes_, o, i, 1, r, e);
        return c.length === 0 ? null : c[0]
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hx(s) {
    return {
        filter: s
    }
}
function px(s, e) {
    G(e.eventCache.getNode().isIndexed(s.filter.getIndex()), "Event snap not indexed"),
    G(e.serverCache.getNode().isIndexed(s.filter.getIndex()), "Server snap not indexed")
}
function mx(s, e, i, r, o) {
    const c = new fx;
    let d, h;
    if (i.type === en.OVERWRITE) {
        const m = i;
        m.source.fromUser ? d = vd(s, e, m.path, m.snap, r, o, c) : (G(m.source.fromServer, "Unknown source."),
        h = m.source.tagged || e.serverCache.isFiltered() && !de(m.path),
        d = Wo(s, e, m.path, m.snap, r, o, h, c))
    } else if (i.type === en.MERGE) {
        const m = i;
        m.source.fromUser ? d = _x(s, e, m.path, m.children, r, o, c) : (G(m.source.fromServer, "Unknown source."),
        h = m.source.tagged || e.serverCache.isFiltered(),
        d = yd(s, e, m.path, m.children, r, o, h, c))
    } else if (i.type === en.ACK_USER_WRITE) {
        const m = i;
        m.revert ? d = Ex(s, e, m.path, r, o, c) : d = vx(s, e, m.path, m.affectedTree, r, o, c)
    } else if (i.type === en.LISTEN_COMPLETE)
        d = yx(s, e, i.path, r, c);
    else
        throw ca("Unknown operation type: " + i.type);
    const p = c.getChanges();
    return gx(e, d, p),
    {
        viewCache: d,
        changes: p
    }
}
function gx(s, e, i) {
    const r = e.eventCache;
    if (r.isFullyInitialized()) {
        const o = r.getNode().isLeafNode() || r.getNode().isEmpty()
          , c = Ko(s);
        (i.length > 0 || !s.eventCache.isFullyInitialized() || o && !r.getNode().equals(c) || !r.getNode().getPriority().equals(c.getPriority())) && i.push(PE(Ko(e)))
    }
}
function KE(s, e, i, r, o, c) {
    const d = e.eventCache;
    if (Xo(r, i) != null)
        return e;
    {
        let h, p;
        if (de(i))
            if (G(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"),
            e.serverCache.isFiltered()) {
                const m = is(e)
                  , y = m instanceof ie ? m : ie.EMPTY_NODE
                  , E = lh(r, y);
                h = s.filter.updateFullNode(e.eventCache.getNode(), E, c)
            } else {
                const m = Qo(r, is(e));
                h = s.filter.updateFullNode(e.eventCache.getNode(), m, c)
            }
        else {
            const m = pe(i);
            if (m === ".priority") {
                G(Ti(i) === 1, "Can't have a priority with additional path components");
                const y = d.getNode();
                p = e.serverCache.getNode();
                const E = kv(r, i, y, p);
                E != null ? h = s.filter.updatePriority(y, E) : h = d.getNode()
            } else {
                const y = Me(i);
                let E;
                if (d.isCompleteForChild(m)) {
                    p = e.serverCache.getNode();
                    const v = kv(r, i, d.getNode(), p);
                    v != null ? E = d.getNode().getImmediateChild(m).updateChild(y, v) : E = d.getNode().getImmediateChild(m)
                } else
                    E = oh(r, m, e.serverCache);
                E != null ? h = s.filter.updateChild(d.getNode(), m, E, y, o, c) : h = d.getNode()
            }
        }
        return Rr(e, h, d.isFullyInitialized() || de(i), s.filter.filtersNodes())
    }
}
function Wo(s, e, i, r, o, c, d, h) {
    const p = e.serverCache;
    let m;
    const y = d ? s.filter : s.filter.getIndexedFilter();
    if (de(i))
        m = y.updateFullNode(p.getNode(), r, null);
    else if (y.filtersNodes() && !p.isFiltered()) {
        const x = p.getNode().updateChild(i, r);
        m = y.updateFullNode(p.getNode(), x, null)
    } else {
        const x = pe(i);
        if (!p.isCompleteForPath(i) && Ti(i) > 1)
            return e;
        const A = Me(i)
          , B = p.getNode().getImmediateChild(x).updateChild(A, r);
        x === ".priority" ? m = y.updatePriority(p.getNode(), B) : m = y.updateChild(p.getNode(), x, B, A, FE, null)
    }
    const E = HE(e, m, p.isFullyInitialized() || de(i), y.filtersNodes())
      , v = new ch(o,E,c);
    return KE(s, E, i, o, v, h)
}
function vd(s, e, i, r, o, c, d) {
    const h = e.eventCache;
    let p, m;
    const y = new ch(o,e,c);
    if (de(i))
        m = s.filter.updateFullNode(e.eventCache.getNode(), r, d),
        p = Rr(e, m, !0, s.filter.filtersNodes());
    else {
        const E = pe(i);
        if (E === ".priority")
            m = s.filter.updatePriority(e.eventCache.getNode(), r),
            p = Rr(e, m, h.isFullyInitialized(), h.isFiltered());
        else {
            const v = Me(i)
              , x = h.getNode().getImmediateChild(E);
            let A;
            if (de(v))
                A = r;
            else {
                const U = y.getCompleteChild(E);
                U != null ? RE(v) === ".priority" && U.getChild(xE(v)).isEmpty() ? A = U : A = U.updateChild(v, r) : A = ie.EMPTY_NODE
            }
            if (x.equals(A))
                p = e;
            else {
                const U = s.filter.updateChild(h.getNode(), E, A, v, y, d);
                p = Rr(e, U, h.isFullyInitialized(), s.filter.filtersNodes())
            }
        }
    }
    return p
}
function Lv(s, e) {
    return s.eventCache.isCompleteForChild(e)
}
function _x(s, e, i, r, o, c, d) {
    let h = e;
    return r.foreach( (p, m) => {
        const y = Je(i, p);
        Lv(e, pe(y)) && (h = vd(s, h, y, m, o, c, d))
    }
    ),
    r.foreach( (p, m) => {
        const y = Je(i, p);
        Lv(e, pe(y)) || (h = vd(s, h, y, m, o, c, d))
    }
    ),
    h
}
function Uv(s, e, i) {
    return i.foreach( (r, o) => {
        e = e.updateChild(r, o)
    }
    ),
    e
}
function yd(s, e, i, r, o, c, d, h) {
    if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
        return e;
    let p = e, m;
    de(i) ? m = r : m = new ke(null).setTree(i, r);
    const y = e.serverCache.getNode();
    return m.children.inorderTraversal( (E, v) => {
        if (y.hasChild(E)) {
            const x = e.serverCache.getNode().getImmediateChild(E)
              , A = Uv(s, x, v);
            p = Wo(s, p, new Ie(E), A, o, c, d, h)
        }
    }
    ),
    m.children.inorderTraversal( (E, v) => {
        const x = !e.serverCache.isCompleteForChild(E) && v.value === null;
        if (!y.hasChild(E) && !x) {
            const A = e.serverCache.getNode().getImmediateChild(E)
              , U = Uv(s, A, v);
            p = Wo(s, p, new Ie(E), U, o, c, d, h)
        }
    }
    ),
    p
}
function vx(s, e, i, r, o, c, d) {
    if (Xo(o, i) != null)
        return e;
    const h = e.serverCache.isFiltered()
      , p = e.serverCache;
    if (r.value != null) {
        if (de(i) && p.isFullyInitialized() || p.isCompleteForPath(i))
            return Wo(s, e, i, p.getNode().getChild(i), o, c, h, d);
        if (de(i)) {
            let m = new ke(null);
            return p.getNode().forEachChild(Js, (y, E) => {
                m = m.set(new Ie(y), E)
            }
            ),
            yd(s, e, i, m, o, c, h, d)
        } else
            return e
    } else {
        let m = new ke(null);
        return r.foreach( (y, E) => {
            const v = Je(i, y);
            p.isCompleteForPath(v) && (m = m.set(y, p.getNode().getChild(v)))
        }
        ),
        yd(s, e, i, m, o, c, h, d)
    }
}
function yx(s, e, i, r, o) {
    const c = e.serverCache
      , d = HE(e, c.getNode(), c.isFullyInitialized() || de(i), c.isFiltered());
    return KE(s, d, i, r, FE, o)
}
function Ex(s, e, i, r, o, c) {
    let d;
    if (Xo(r, i) != null)
        return e;
    {
        const h = new ch(r,e,o)
          , p = e.eventCache.getNode();
        let m;
        if (de(i) || pe(i) === ".priority") {
            let y;
            if (e.serverCache.isFullyInitialized())
                y = Qo(r, is(e));
            else {
                const E = e.serverCache.getNode();
                G(E instanceof ie, "serverChildren would be complete if leaf node"),
                y = lh(r, E)
            }
            y = y,
            m = s.filter.updateFullNode(p, y, c)
        } else {
            const y = pe(i);
            let E = oh(r, y, e.serverCache);
            E == null && e.serverCache.isCompleteForChild(y) && (E = p.getImmediateChild(y)),
            E != null ? m = s.filter.updateChild(p, y, E, Me(i), h, c) : e.eventCache.getNode().hasChild(y) ? m = s.filter.updateChild(p, y, ie.EMPTY_NODE, Me(i), h, c) : m = p,
            m.isEmpty() && e.serverCache.isFullyInitialized() && (d = Qo(r, is(e)),
            d.isLeafNode() && (m = s.filter.updateFullNode(m, d, c)))
        }
        return d = e.serverCache.isFullyInitialized() || Xo(r, Ee()) != null,
        Rr(e, m, d, s.filter.filtersNodes())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bx {
    constructor(e, i) {
        this.query_ = e,
        this.eventRegistrations_ = [];
        const r = this.query_._queryParams
          , o = new ih(r.getIndex())
          , c = HN(r);
        this.processor_ = hx(c);
        const d = i.serverCache
          , h = i.eventCache
          , p = o.updateFullNode(ie.EMPTY_NODE, d.getNode(), null)
          , m = c.updateFullNode(ie.EMPTY_NODE, h.getNode(), null)
          , y = new Ci(p,d.isFullyInitialized(),o.filtersNodes())
          , E = new Ci(m,h.isFullyInitialized(),c.filtersNodes());
        this.viewCache_ = oc(E, y),
        this.eventGenerator_ = new KN(this.query_)
    }
    get query() {
        return this.query_
    }
}
function Sx(s) {
    return s.viewCache_.serverCache.getNode()
}
function Tx(s) {
    return Ko(s.viewCache_)
}
function Cx(s, e) {
    const i = is(s.viewCache_);
    return i && (s.query._queryParams.loadsAllData() || !de(e) && !i.getImmediateChild(pe(e)).isEmpty()) ? i.getChild(e) : null
}
function Pv(s) {
    return s.eventRegistrations_.length === 0
}
function wx(s, e) {
    s.eventRegistrations_.push(e)
}
function jv(s, e, i) {
    const r = [];
    if (i) {
        G(e == null, "A cancel should cancel all event registrations.");
        const o = s.query._path;
        s.eventRegistrations_.forEach(c => {
            const d = c.createCancelEvent(i, o);
            d && r.push(d)
        }
        )
    }
    if (e) {
        let o = [];
        for (let c = 0; c < s.eventRegistrations_.length; ++c) {
            const d = s.eventRegistrations_[c];
            if (!d.matches(e))
                o.push(d);
            else if (e.hasAnyCallback()) {
                o = o.concat(s.eventRegistrations_.slice(c + 1));
                break
            }
        }
        s.eventRegistrations_ = o
    } else
        s.eventRegistrations_ = [];
    return r
}
function zv(s, e, i, r) {
    e.type === en.MERGE && e.source.queryId !== null && (G(is(s.viewCache_), "We should always have a full cache before handling merges"),
    G(Ko(s.viewCache_), "Missing event cache, even though we have a server cache"));
    const o = s.viewCache_
      , c = mx(s.processor_, o, e, i, r);
    return px(s.processor_, c.viewCache),
    G(c.viewCache.serverCache.isFullyInitialized() || !o.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"),
    s.viewCache_ = c.viewCache,
    QE(s, c.changes, c.viewCache.eventCache.getNode(), null)
}
function Ax(s, e) {
    const i = s.viewCache_.eventCache
      , r = [];
    return i.getNode().isLeafNode() || i.getNode().forEachChild(Ve, (c, d) => {
        r.push(sa(c, d))
    }
    ),
    i.isFullyInitialized() && r.push(PE(i.getNode())),
    QE(s, r, i.getNode(), e)
}
function QE(s, e, i, r) {
    const o = r ? [r] : s.eventRegistrations_;
    return QN(s.eventGenerator_, e, i, o)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $o;
class XE {
    constructor() {
        this.views = new Map
    }
}
function Rx(s) {
    G(!$o, "__referenceConstructor has already been defined"),
    $o = s
}
function Nx() {
    return G($o, "Reference.ts has not been loaded"),
    $o
}
function xx(s) {
    return s.views.size === 0
}
function uh(s, e, i, r) {
    const o = e.source.queryId;
    if (o !== null) {
        const c = s.views.get(o);
        return G(c != null, "SyncTree gave us an op for an invalid query."),
        zv(c, e, i, r)
    } else {
        let c = [];
        for (const d of s.views.values())
            c = c.concat(zv(d, e, i, r));
        return c
    }
}
function WE(s, e, i, r, o) {
    const c = e._queryIdentifier
      , d = s.views.get(c);
    if (!d) {
        let h = Qo(i, o ? r : null)
          , p = !1;
        h ? p = !0 : r instanceof ie ? (h = lh(i, r),
        p = !1) : (h = ie.EMPTY_NODE,
        p = !1);
        const m = oc(new Ci(h,p,!1), new Ci(r,o,!1));
        return new bx(e,m)
    }
    return d
}
function Ox(s, e, i, r, o, c) {
    const d = WE(s, e, r, o, c);
    return s.views.has(e._queryIdentifier) || s.views.set(e._queryIdentifier, d),
    wx(d, i),
    Ax(d, i)
}
function Ix(s, e, i, r) {
    const o = e._queryIdentifier
      , c = [];
    let d = [];
    const h = wi(s);
    if (o === "default")
        for (const [p,m] of s.views.entries())
            d = d.concat(jv(m, i, r)),
            Pv(m) && (s.views.delete(p),
            m.query._queryParams.loadsAllData() || c.push(m.query));
    else {
        const p = s.views.get(o);
        p && (d = d.concat(jv(p, i, r)),
        Pv(p) && (s.views.delete(o),
        p.query._queryParams.loadsAllData() || c.push(p.query)))
    }
    return h && !wi(s) && c.push(new (Nx())(e._repo,e._path)),
    {
        removed: c,
        events: d
    }
}
function $E(s) {
    const e = [];
    for (const i of s.views.values())
        i.query._queryParams.loadsAllData() || e.push(i);
    return e
}
function Si(s, e) {
    let i = null;
    for (const r of s.views.values())
        i = i || Cx(r, e);
    return i
}
function ZE(s, e) {
    if (e._queryParams.loadsAllData())
        return uc(s);
    {
        const r = e._queryIdentifier;
        return s.views.get(r)
    }
}
function JE(s, e) {
    return ZE(s, e) != null
}
function wi(s) {
    return uc(s) != null
}
function uc(s) {
    for (const e of s.views.values())
        if (e.query._queryParams.loadsAllData())
            return e;
    return null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zo;
function Dx(s) {
    G(!Zo, "__referenceConstructor has already been defined"),
    Zo = s
}
function Mx() {
    return G(Zo, "Reference.ts has not been loaded"),
    Zo
}
let kx = 1;
class Hv {
    constructor(e) {
        this.listenProvider_ = e,
        this.syncPointTree_ = new ke(null),
        this.pendingWriteTree_ = cx(),
        this.tagToQueryMap = new Map,
        this.queryToTagMap = new Map
    }
}
function e0(s, e, i, r, o) {
    return ZN(s.pendingWriteTree_, e, i, r, o),
    o ? el(s, new ns(zE(),e,i)) : []
}
function $i(s, e, i=!1) {
    const r = JN(s.pendingWriteTree_, e);
    if (ex(s.pendingWriteTree_, e)) {
        let c = new ke(null);
        return r.snap != null ? c = c.set(Ee(), !0) : At(r.children, d => {
            c = c.set(new Ie(d), !0)
        }
        ),
        el(s, new Fo(r.path,c,i))
    } else
        return []
}
function Jr(s, e, i) {
    return el(s, new ns(ah(),e,i))
}
function Lx(s, e, i) {
    const r = ke.fromObject(i);
    return el(s, new Hr(ah(),e,r))
}
function Ux(s, e) {
    return el(s, new zr(ah(),e))
}
function Px(s, e, i) {
    const r = dh(s, i);
    if (r) {
        const o = hh(r)
          , c = o.path
          , d = o.queryId
          , h = gt(c, e)
          , p = new zr(rh(d),h);
        return ph(s, c, p)
    } else
        return []
}
function t0(s, e, i, r, o=!1) {
    const c = e._path
      , d = s.syncPointTree_.get(c);
    let h = [];
    if (d && (e._queryIdentifier === "default" || JE(d, e))) {
        const p = Ix(d, e, i, r);
        xx(d) && (s.syncPointTree_ = s.syncPointTree_.remove(c));
        const m = p.removed;
        if (h = p.events,
        !o) {
            const y = m.findIndex(v => v._queryParams.loadsAllData()) !== -1
              , E = s.syncPointTree_.findOnPath(c, (v, x) => wi(x));
            if (y && !E) {
                const v = s.syncPointTree_.subtree(c);
                if (!v.isEmpty()) {
                    const x = Bx(v);
                    for (let A = 0; A < x.length; ++A) {
                        const U = x[A]
                          , B = U.query
                          , H = a0(s, U);
                        s.listenProvider_.startListening(xr(B), Br(s, B), H.hashFn, H.onComplete)
                    }
                }
            }
            !E && m.length > 0 && !r && (y ? s.listenProvider_.stopListening(xr(e), null) : m.forEach(v => {
                const x = s.queryToTagMap.get(fc(v));
                s.listenProvider_.stopListening(xr(v), x)
            }
            ))
        }
        qx(s, m)
    }
    return h
}
function n0(s, e, i, r) {
    const o = dh(s, r);
    if (o != null) {
        const c = hh(o)
          , d = c.path
          , h = c.queryId
          , p = gt(d, e)
          , m = new ns(rh(h),p,i);
        return ph(s, d, m)
    } else
        return []
}
function jx(s, e, i, r) {
    const o = dh(s, r);
    if (o) {
        const c = hh(o)
          , d = c.path
          , h = c.queryId
          , p = gt(d, e)
          , m = ke.fromObject(i)
          , y = new Hr(rh(h),p,m);
        return ph(s, d, y)
    } else
        return []
}
function zx(s, e, i, r=!1) {
    const o = e._path;
    let c = null
      , d = !1;
    s.syncPointTree_.foreachOnPath(o, (v, x) => {
        const A = gt(v, o);
        c = c || Si(x, A),
        d = d || wi(x)
    }
    );
    let h = s.syncPointTree_.get(o);
    h ? (d = d || wi(h),
    c = c || Si(h, Ee())) : (h = new XE,
    s.syncPointTree_ = s.syncPointTree_.set(o, h));
    let p;
    c != null ? p = !0 : (p = !1,
    c = ie.EMPTY_NODE,
    s.syncPointTree_.subtree(o).foreachChild( (x, A) => {
        const U = Si(A, Ee());
        U && (c = c.updateImmediateChild(x, U))
    }
    ));
    const m = JE(h, e);
    if (!m && !e._queryParams.loadsAllData()) {
        const v = fc(e);
        G(!s.queryToTagMap.has(v), "View does not exist, but we have a tag");
        const x = Vx();
        s.queryToTagMap.set(v, x),
        s.tagToQueryMap.set(x, v)
    }
    const y = cc(s.pendingWriteTree_, o);
    let E = Ox(h, e, i, y, c, p);
    if (!m && !d && !r) {
        const v = ZE(h, e);
        E = E.concat(Gx(s, e, v))
    }
    return E
}
function fh(s, e, i) {
    const o = s.pendingWriteTree_
      , c = s.syncPointTree_.findOnPath(e, (d, h) => {
        const p = gt(d, e)
          , m = Si(h, p);
        if (m)
            return m
    }
    );
    return VE(o, e, c, i, !0)
}
function Hx(s, e) {
    const i = e._path;
    let r = null;
    s.syncPointTree_.foreachOnPath(i, (m, y) => {
        const E = gt(m, i);
        r = r || Si(y, E)
    }
    );
    let o = s.syncPointTree_.get(i);
    o ? r = r || Si(o, Ee()) : (o = new XE,
    s.syncPointTree_ = s.syncPointTree_.set(i, o));
    const c = r != null
      , d = c ? new Ci(r,!0,!1) : null
      , h = cc(s.pendingWriteTree_, e._path)
      , p = WE(o, e, h, c ? d.getNode() : ie.EMPTY_NODE, c);
    return Tx(p)
}
function el(s, e) {
    return i0(e, s.syncPointTree_, null, cc(s.pendingWriteTree_, Ee()))
}
function i0(s, e, i, r) {
    if (de(s.path))
        return s0(s, e, i, r);
    {
        const o = e.get(Ee());
        i == null && o != null && (i = Si(o, Ee()));
        let c = [];
        const d = pe(s.path)
          , h = s.operationForChild(d)
          , p = e.children.get(d);
        if (p && h) {
            const m = i ? i.getImmediateChild(d) : null
              , y = GE(r, d);
            c = c.concat(i0(h, p, m, y))
        }
        return o && (c = c.concat(uh(o, s, r, i))),
        c
    }
}
function s0(s, e, i, r) {
    const o = e.get(Ee());
    i == null && o != null && (i = Si(o, Ee()));
    let c = [];
    return e.children.inorderTraversal( (d, h) => {
        const p = i ? i.getImmediateChild(d) : null
          , m = GE(r, d)
          , y = s.operationForChild(d);
        y && (c = c.concat(s0(y, h, p, m)))
    }
    ),
    o && (c = c.concat(uh(o, s, r, i))),
    c
}
function a0(s, e) {
    const i = e.query
      , r = Br(s, i);
    return {
        hashFn: () => (Sx(e) || ie.EMPTY_NODE).hash(),
        onComplete: o => {
            if (o === "ok")
                return r ? Px(s, i._path, r) : Ux(s, i._path);
            {
                const c = zR(o, i);
                return t0(s, i, null, c)
            }
        }
    }
}
function Br(s, e) {
    const i = fc(e);
    return s.queryToTagMap.get(i)
}
function fc(s) {
    return s._path.toString() + "$" + s._queryIdentifier
}
function dh(s, e) {
    return s.tagToQueryMap.get(e)
}
function hh(s) {
    const e = s.indexOf("$");
    return G(e !== -1 && e < s.length - 1, "Bad queryKey."),
    {
        queryId: s.substr(e + 1),
        path: new Ie(s.substr(0, e))
    }
}
function ph(s, e, i) {
    const r = s.syncPointTree_.get(e);
    G(r, "Missing sync point for query tag that we're tracking");
    const o = cc(s.pendingWriteTree_, e);
    return uh(r, i, o, null)
}
function Bx(s) {
    return s.fold( (e, i, r) => {
        if (i && wi(i))
            return [uc(i)];
        {
            let o = [];
            return i && (o = $E(i)),
            At(r, (c, d) => {
                o = o.concat(d)
            }
            ),
            o
        }
    }
    )
}
function xr(s) {
    return s._queryParams.loadsAllData() && !s._queryParams.isDefault() ? new (Mx())(s._repo,s._path) : s
}
function qx(s, e) {
    for (let i = 0; i < e.length; ++i) {
        const r = e[i];
        if (!r._queryParams.loadsAllData()) {
            const o = fc(r)
              , c = s.queryToTagMap.get(o);
            s.queryToTagMap.delete(o),
            s.tagToQueryMap.delete(c)
        }
    }
}
function Vx() {
    return kx++
}
function Gx(s, e, i) {
    const r = e._path
      , o = Br(s, e)
      , c = a0(s, i)
      , d = s.listenProvider_.startListening(xr(e), o, c.hashFn, c.onComplete)
      , h = s.syncPointTree_.subtree(r);
    if (o)
        G(!wi(h.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        const p = h.fold( (m, y, E) => {
            if (!de(m) && y && wi(y))
                return [uc(y).query];
            {
                let v = [];
                return y && (v = v.concat($E(y).map(x => x.query))),
                At(E, (x, A) => {
                    v = v.concat(A)
                }
                ),
                v
            }
        }
        );
        for (let m = 0; m < p.length; ++m) {
            const y = p[m];
            s.listenProvider_.stopListening(xr(y), Br(s, y))
        }
    }
    return d
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh {
    constructor(e) {
        this.node_ = e
    }
    getImmediateChild(e) {
        const i = this.node_.getImmediateChild(e);
        return new mh(i)
    }
    node() {
        return this.node_
    }
}
class gh {
    constructor(e, i) {
        this.syncTree_ = e,
        this.path_ = i
    }
    getImmediateChild(e) {
        const i = Je(this.path_, e);
        return new gh(this.syncTree_,i)
    }
    node() {
        return fh(this.syncTree_, this.path_)
    }
}
const Yx = function(s) {
    return s = s || {},
    s.timestamp = s.timestamp || new Date().getTime(),
    s
}
  , Bv = function(s, e, i) {
    if (!s || typeof s != "object")
        return s;
    if (G(".sv"in s, "Unexpected leaf node or priority contents"),
    typeof s[".sv"] == "string")
        return Fx(s[".sv"], e, i);
    if (typeof s[".sv"] == "object")
        return Kx(s[".sv"], e);
    G(!1, "Unexpected server value: " + JSON.stringify(s, null, 2))
}
  , Fx = function(s, e, i) {
    switch (s) {
    case "timestamp":
        return i.timestamp;
    default:
        G(!1, "Unexpected server value: " + s)
    }
}
  , Kx = function(s, e, i) {
    s.hasOwnProperty("increment") || G(!1, "Unexpected server value: " + JSON.stringify(s, null, 2));
    const r = s.increment;
    typeof r != "number" && G(!1, "Unexpected increment value: " + r);
    const o = e.node();
    if (G(o !== null && typeof o < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"),
    !o.isLeafNode())
        return r;
    const d = o.getValue();
    return typeof d != "number" ? r : d + r
}
  , Qx = function(s, e, i, r) {
    return _h(e, new gh(i,s), r)
}
  , r0 = function(s, e, i) {
    return _h(s, new mh(e), i)
};
function _h(s, e, i) {
    const r = s.getPriority().val()
      , o = Bv(r, e.getImmediateChild(".priority"), i);
    let c;
    if (s.isLeafNode()) {
        const d = s
          , h = Bv(d.getValue(), e, i);
        return h !== d.getValue() || o !== d.getPriority().val() ? new st(h,rt(o)) : s
    } else {
        const d = s;
        return c = d,
        o !== d.getPriority().val() && (c = c.updatePriority(new st(o))),
        d.forEachChild(Ve, (h, p) => {
            const m = _h(p, e.getImmediateChild(h), i);
            m !== p && (c = c.updateImmediateChild(h, m))
        }
        ),
        c
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh {
    constructor(e="", i=null, r={
        children: {},
        childCount: 0
    }) {
        this.name = e,
        this.parent = i,
        this.node = r
    }
}
function yh(s, e) {
    let i = e instanceof Ie ? e : new Ie(e)
      , r = s
      , o = pe(i);
    for (; o !== null; ) {
        const c = ea(r.node.children, o) || {
            children: {},
            childCount: 0
        };
        r = new vh(o,r,c),
        i = Me(i),
        o = pe(i)
    }
    return r
}
function ma(s) {
    return s.node.value
}
function l0(s, e) {
    s.node.value = e,
    Ed(s)
}
function o0(s) {
    return s.node.childCount > 0
}
function Xx(s) {
    return ma(s) === void 0 && !o0(s)
}
function dc(s, e) {
    At(s.node.children, (i, r) => {
        e(new vh(i,s,r))
    }
    )
}
function c0(s, e, i, r) {
    i && e(s),
    dc(s, o => {
        c0(o, e, !0)
    }
    )
}
function Wx(s, e, i) {
    let r = s.parent;
    for (; r !== null; ) {
        if (e(r))
            return !0;
        r = r.parent
    }
    return !1
}
function tl(s) {
    return new Ie(s.parent === null ? s.name : tl(s.parent) + "/" + s.name)
}
function Ed(s) {
    s.parent !== null && $x(s.parent, s.name, s)
}
function $x(s, e, i) {
    const r = Xx(i)
      , o = Hn(s.node.children, e);
    r && o ? (delete s.node.children[e],
    s.node.childCount--,
    Ed(s)) : !r && !o && (s.node.children[e] = i.node,
    s.node.childCount++,
    Ed(s))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zx = /[\[\].#$\/\u0000-\u001F\u007F]/
  , Jx = /[\[\].#$\u0000-\u001F\u007F]/
  , Zf = 10 * 1024 * 1024
  , u0 = function(s) {
    return typeof s == "string" && s.length !== 0 && !Zx.test(s)
}
  , f0 = function(s) {
    return typeof s == "string" && s.length !== 0 && !Jx.test(s)
}
  , eO = function(s) {
    return s && (s = s.replace(/^\/*\.info(\/|$)/, "/")),
    f0(s)
}
  , tO = function(s, e, i, r) {
    Eh(Ud(s, "value"), e, i)
}
  , Eh = function(s, e, i) {
    const r = i instanceof Ie ? new vN(i,s) : i;
    if (e === void 0)
        throw new Error(s + "contains undefined " + Qi(r));
    if (typeof e == "function")
        throw new Error(s + "contains a function " + Qi(r) + " with contents = " + e.toString());
    if (rE(e))
        throw new Error(s + "contains " + e.toString() + " " + Qi(r));
    if (typeof e == "string" && e.length > Zf / 3 && nc(e) > Zf)
        throw new Error(s + "contains a string greater than " + Zf + " utf8 bytes " + Qi(r) + " ('" + e.substring(0, 50) + "...')");
    if (e && typeof e == "object") {
        let o = !1
          , c = !1;
        if (At(e, (d, h) => {
            if (d === ".value")
                o = !0;
            else if (d !== ".priority" && d !== ".sv" && (c = !0,
            !u0(d)))
                throw new Error(s + " contains an invalid key (" + d + ") " + Qi(r) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
            yN(r, d),
            Eh(s, h, r),
            EN(r)
        }
        ),
        o && c)
            throw new Error(s + ' contains ".value" child ' + Qi(r) + " in addition to actual children.")
    }
}
  , d0 = function(s, e, i, r) {
    if (!f0(i))
        throw new Error(Ud(s, e) + 'was an invalid path = "' + i + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)
}
  , nO = function(s, e, i, r) {
    i && (i = i.replace(/^\/*\.info(\/|$)/, "/")),
    d0(s, e, i)
}
  , iO = function(s, e) {
    if (pe(e) === ".info")
        throw new Error(s + " failed = Can't modify data under /.info/")
}
  , sO = function(s, e) {
    const i = e.path.toString();
    if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !u0(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || i.length !== 0 && !eO(i))
        throw new Error(Ud(s, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aO {
    constructor() {
        this.eventLists_ = [],
        this.recursionDepth_ = 0
    }
}
function h0(s, e) {
    let i = null;
    for (let r = 0; r < e.length; r++) {
        const o = e[r]
          , c = o.getPath();
        i !== null && !OE(c, i.path) && (s.eventLists_.push(i),
        i = null),
        i === null && (i = {
            events: [],
            path: c
        }),
        i.events.push(o)
    }
    i && s.eventLists_.push(i)
}
function hn(s, e, i) {
    h0(s, i),
    rO(s, r => Jt(r, e) || Jt(e, r))
}
function rO(s, e) {
    s.recursionDepth_++;
    let i = !0;
    for (let r = 0; r < s.eventLists_.length; r++) {
        const o = s.eventLists_[r];
        if (o) {
            const c = o.path;
            e(c) ? (lO(s.eventLists_[r]),
            s.eventLists_[r] = null) : i = !1
        }
    }
    i && (s.eventLists_ = []),
    s.recursionDepth_--
}
function lO(s) {
    for (let e = 0; e < s.events.length; e++) {
        const i = s.events[e];
        if (i !== null) {
            s.events[e] = null;
            const r = i.getEventRunner();
            wr && pt("event: " + i.toString()),
            pa(r)
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oO = "repo_interrupt"
  , cO = 25;
class uO {
    constructor(e, i, r, o) {
        this.repoInfo_ = e,
        this.forceRestClient_ = i,
        this.authTokenProvider_ = r,
        this.appCheckProvider_ = o,
        this.dataUpdateCount = 0,
        this.statsListener_ = null,
        this.eventQueue_ = new aO,
        this.nextWriteId_ = 1,
        this.interceptServerDataCallback_ = null,
        this.onDisconnect_ = Yo(),
        this.transactionQueueTree_ = new vh,
        this.persistentConnection_ = null,
        this.key = this.repoInfo_.toURLString()
    }
    toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    }
}
function fO(s, e, i) {
    if (s.stats_ = Jd(s.repoInfo_),
    s.forceRestClient_ || VR())
        s.server_ = new Go(s.repoInfo_, (r, o, c, d) => {
            qv(s, r, o, c, d)
        }
        ,s.authTokenProvider_,s.appCheckProvider_),
        setTimeout( () => Vv(s, !0), 0);
    else {
        if (typeof i < "u" && i !== null) {
            if (typeof i != "object")
                throw new Error("Only objects are supported for option databaseAuthVariableOverride");
            try {
                Ze(i)
            } catch (r) {
                throw new Error("Invalid authOverride provided: " + r)
            }
        }
        s.persistentConnection_ = new Ln(s.repoInfo_,e, (r, o, c, d) => {
            qv(s, r, o, c, d)
        }
        ,r => {
            Vv(s, r)
        }
        ,r => {
            hO(s, r)
        }
        ,s.authTokenProvider_,s.appCheckProvider_,i),
        s.server_ = s.persistentConnection_
    }
    s.authTokenProvider_.addTokenChangeListener(r => {
        s.server_.refreshAuthToken(r)
    }
    ),
    s.appCheckProvider_.addTokenChangeListener(r => {
        s.server_.refreshAppCheckToken(r.token)
    }
    ),
    s.statsReporter_ = QR(s.repoInfo_, () => new FN(s.stats_,s.server_)),
    s.infoData_ = new BN,
    s.infoSyncTree_ = new Hv({
        startListening: (r, o, c, d) => {
            let h = [];
            const p = s.infoData_.getNode(r._path);
            return p.isEmpty() || (h = Jr(s.infoSyncTree_, r._path, p),
            setTimeout( () => {
                d("ok")
            }
            , 0)),
            h
        }
        ,
        stopListening: () => {}
    }),
    Sh(s, "connected", !1),
    s.serverSyncTree_ = new Hv({
        startListening: (r, o, c, d) => (s.server_.listen(r, c, o, (h, p) => {
            const m = d(h, p);
            hn(s.eventQueue_, r._path, m)
        }
        ),
        []),
        stopListening: (r, o) => {
            s.server_.unlisten(r, o)
        }
    })
}
function dO(s) {
    const i = s.infoData_.getNode(new Ie(".info/serverTimeOffset")).val() || 0;
    return new Date().getTime() + i
}
function bh(s) {
    return Yx({
        timestamp: dO(s)
    })
}
function qv(s, e, i, r, o) {
    s.dataUpdateCount++;
    const c = new Ie(e);
    i = s.interceptServerDataCallback_ ? s.interceptServerDataCallback_(e, i) : i;
    let d = [];
    if (o)
        if (r) {
            const p = Mo(i, m => rt(m));
            d = jx(s.serverSyncTree_, c, p, o)
        } else {
            const p = rt(i);
            d = n0(s.serverSyncTree_, c, p, o)
        }
    else if (r) {
        const p = Mo(i, m => rt(m));
        d = Lx(s.serverSyncTree_, c, p)
    } else {
        const p = rt(i);
        d = Jr(s.serverSyncTree_, c, p)
    }
    let h = c;
    d.length > 0 && (h = pc(s, c)),
    hn(s.eventQueue_, h, d)
}
function Vv(s, e) {
    Sh(s, "connected", e),
    e === !1 && gO(s)
}
function hO(s, e) {
    At(e, (i, r) => {
        Sh(s, i, r)
    }
    )
}
function Sh(s, e, i) {
    const r = new Ie("/.info/" + e)
      , o = rt(i);
    s.infoData_.updateSnapshot(r, o);
    const c = Jr(s.infoSyncTree_, r, o);
    hn(s.eventQueue_, r, c)
}
function p0(s) {
    return s.nextWriteId_++
}
function pO(s, e, i) {
    const r = Hx(s.serverSyncTree_, e);
    return r != null ? Promise.resolve(r) : s.server_.get(e).then(o => {
        const c = rt(o).withIndex(e._queryParams.getIndex());
        zx(s.serverSyncTree_, e, i, !0);
        let d;
        if (e._queryParams.loadsAllData())
            d = Jr(s.serverSyncTree_, e._path, c);
        else {
            const h = Br(s.serverSyncTree_, e);
            d = n0(s.serverSyncTree_, e._path, c, h)
        }
        return hn(s.eventQueue_, e._path, d),
        t0(s.serverSyncTree_, e, i, null, !0),
        c
    }
    , o => (hc(s, "get for query " + Ze(e) + " failed: " + o),
    Promise.reject(new Error(o))))
}
function mO(s, e, i, r, o) {
    hc(s, "set", {
        path: e.toString(),
        value: i,
        priority: r
    });
    const c = bh(s)
      , d = rt(i, r)
      , h = fh(s.serverSyncTree_, e)
      , p = r0(d, h, c)
      , m = p0(s)
      , y = e0(s.serverSyncTree_, e, p, m, !0);
    h0(s.eventQueue_, y),
    s.server_.put(e.toString(), d.val(!0), (v, x) => {
        const A = v === "ok";
        A || wt("set at " + e + " failed: " + v);
        const U = $i(s.serverSyncTree_, m, !A);
        hn(s.eventQueue_, e, U),
        vO(s, o, v, x)
    }
    );
    const E = y0(s, e);
    pc(s, E),
    hn(s.eventQueue_, E, [])
}
function gO(s) {
    hc(s, "onDisconnectEvents");
    const e = bh(s)
      , i = Yo();
    md(s.onDisconnect_, Ee(), (o, c) => {
        const d = Qx(o, c, s.serverSyncTree_, e);
        jE(i, o, d)
    }
    );
    let r = [];
    md(i, Ee(), (o, c) => {
        r = r.concat(Jr(s.serverSyncTree_, o, c));
        const d = y0(s, o);
        pc(s, d)
    }
    ),
    s.onDisconnect_ = Yo(),
    hn(s.eventQueue_, Ee(), r)
}
function _O(s) {
    s.persistentConnection_ && s.persistentConnection_.interrupt(oO)
}
function hc(s, ...e) {
    let i = "";
    s.persistentConnection_ && (i = s.persistentConnection_.id + ":"),
    pt(i, ...e)
}
function vO(s, e, i, r) {
    e && pa( () => {
        if (i === "ok")
            e(null);
        else {
            const o = (i || "error").toUpperCase();
            let c = o;
            r && (c += ": " + r);
            const d = new Error(c);
            d.code = o,
            e(d)
        }
    }
    )
}
function m0(s, e, i) {
    return fh(s.serverSyncTree_, e, i) || ie.EMPTY_NODE
}
function Th(s, e=s.transactionQueueTree_) {
    if (e || mc(s, e),
    ma(e)) {
        const i = _0(s, e);
        G(i.length > 0, "Sending zero length transaction queue"),
        i.every(o => o.status === 0) && yO(s, tl(e), i)
    } else
        o0(e) && dc(e, i => {
            Th(s, i)
        }
        )
}
function yO(s, e, i) {
    const r = i.map(m => m.currentWriteId)
      , o = m0(s, e, r);
    let c = o;
    const d = o.hash();
    for (let m = 0; m < i.length; m++) {
        const y = i[m];
        G(y.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."),
        y.status = 1,
        y.retryCount++;
        const E = gt(e, y.path);
        c = c.updateChild(E, y.currentOutputSnapshotRaw)
    }
    const h = c.val(!0)
      , p = e;
    s.server_.put(p.toString(), h, m => {
        hc(s, "transaction put response", {
            path: p.toString(),
            status: m
        });
        let y = [];
        if (m === "ok") {
            const E = [];
            for (let v = 0; v < i.length; v++)
                i[v].status = 2,
                y = y.concat($i(s.serverSyncTree_, i[v].currentWriteId)),
                i[v].onComplete && E.push( () => i[v].onComplete(null, !0, i[v].currentOutputSnapshotResolved)),
                i[v].unwatcher();
            mc(s, yh(s.transactionQueueTree_, e)),
            Th(s, s.transactionQueueTree_),
            hn(s.eventQueue_, e, y);
            for (let v = 0; v < E.length; v++)
                pa(E[v])
        } else {
            if (m === "datastale")
                for (let E = 0; E < i.length; E++)
                    i[E].status === 3 ? i[E].status = 4 : i[E].status = 0;
            else {
                wt("transaction at " + p.toString() + " failed: " + m);
                for (let E = 0; E < i.length; E++)
                    i[E].status = 4,
                    i[E].abortReason = m
            }
            pc(s, e)
        }
    }
    , d)
}
function pc(s, e) {
    const i = g0(s, e)
      , r = tl(i)
      , o = _0(s, i);
    return EO(s, o, r),
    r
}
function EO(s, e, i) {
    if (e.length === 0)
        return;
    const r = [];
    let o = [];
    const d = e.filter(h => h.status === 0).map(h => h.currentWriteId);
    for (let h = 0; h < e.length; h++) {
        const p = e[h]
          , m = gt(i, p.path);
        let y = !1, E;
        if (G(m !== null, "rerunTransactionsUnderNode_: relativePath should not be null."),
        p.status === 4)
            y = !0,
            E = p.abortReason,
            o = o.concat($i(s.serverSyncTree_, p.currentWriteId, !0));
        else if (p.status === 0)
            if (p.retryCount >= cO)
                y = !0,
                E = "maxretry",
                o = o.concat($i(s.serverSyncTree_, p.currentWriteId, !0));
            else {
                const v = m0(s, p.path, d);
                p.currentInputSnapshot = v;
                const x = e[h].update(v.val());
                if (x !== void 0) {
                    Eh("transaction failed: Data returned ", x, p.path);
                    let A = rt(x);
                    typeof x == "object" && x != null && Hn(x, ".priority") || (A = A.updatePriority(v.getPriority()));
                    const B = p.currentWriteId
                      , H = bh(s)
                      , q = r0(A, v, H);
                    p.currentOutputSnapshotRaw = A,
                    p.currentOutputSnapshotResolved = q,
                    p.currentWriteId = p0(s),
                    d.splice(d.indexOf(B), 1),
                    o = o.concat(e0(s.serverSyncTree_, p.path, q, p.currentWriteId, p.applyLocally)),
                    o = o.concat($i(s.serverSyncTree_, B, !0))
                } else
                    y = !0,
                    E = "nodata",
                    o = o.concat($i(s.serverSyncTree_, p.currentWriteId, !0))
            }
        hn(s.eventQueue_, i, o),
        o = [],
        y && (e[h].status = 2,
        function(v) {
            setTimeout(v, Math.floor(0))
        }(e[h].unwatcher),
        e[h].onComplete && (E === "nodata" ? r.push( () => e[h].onComplete(null, !1, e[h].currentInputSnapshot)) : r.push( () => e[h].onComplete(new Error(E), !1, null))))
    }
    mc(s, s.transactionQueueTree_);
    for (let h = 0; h < r.length; h++)
        pa(r[h]);
    Th(s, s.transactionQueueTree_)
}
function g0(s, e) {
    let i, r = s.transactionQueueTree_;
    for (i = pe(e); i !== null && ma(r) === void 0; )
        r = yh(r, i),
        e = Me(e),
        i = pe(e);
    return r
}
function _0(s, e) {
    const i = [];
    return v0(s, e, i),
    i.sort( (r, o) => r.order - o.order),
    i
}
function v0(s, e, i) {
    const r = ma(e);
    if (r)
        for (let o = 0; o < r.length; o++)
            i.push(r[o]);
    dc(e, o => {
        v0(s, o, i)
    }
    )
}
function mc(s, e) {
    const i = ma(e);
    if (i) {
        let r = 0;
        for (let o = 0; o < i.length; o++)
            i[o].status !== 2 && (i[r] = i[o],
            r++);
        i.length = r,
        l0(e, i.length > 0 ? i : void 0)
    }
    dc(e, r => {
        mc(s, r)
    }
    )
}
function y0(s, e) {
    const i = tl(g0(s, e))
      , r = yh(s.transactionQueueTree_, e);
    return Wx(r, o => {
        Jf(s, o)
    }
    ),
    Jf(s, r),
    c0(r, o => {
        Jf(s, o)
    }
    ),
    i
}
function Jf(s, e) {
    const i = ma(e);
    if (i) {
        const r = [];
        let o = []
          , c = -1;
        for (let d = 0; d < i.length; d++)
            i[d].status === 3 || (i[d].status === 1 ? (G(c === d - 1, "All SENT items should be at beginning of queue."),
            c = d,
            i[d].status = 3,
            i[d].abortReason = "set") : (G(i[d].status === 0, "Unexpected transaction status in abort"),
            i[d].unwatcher(),
            o = o.concat($i(s.serverSyncTree_, i[d].currentWriteId, !0)),
            i[d].onComplete && r.push(i[d].onComplete.bind(null, new Error("set"), !1, null))));
        c === -1 ? l0(e, void 0) : i.length = c + 1,
        hn(s.eventQueue_, tl(e), o);
        for (let d = 0; d < r.length; d++)
            pa(r[d])
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bO(s) {
    let e = "";
    const i = s.split("/");
    for (let r = 0; r < i.length; r++)
        if (i[r].length > 0) {
            let o = i[r];
            try {
                o = decodeURIComponent(o.replace(/\+/g, " "))
            } catch {}
            e += "/" + o
        }
    return e
}
function SO(s) {
    const e = {};
    s.charAt(0) === "?" && (s = s.substring(1));
    for (const i of s.split("&")) {
        if (i.length === 0)
            continue;
        const r = i.split("=");
        r.length === 2 ? e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]) : wt(`Invalid query segment '${i}' in query '${s}'`)
    }
    return e
}
const Gv = function(s, e) {
    const i = TO(s)
      , r = i.namespace;
    i.domain === "firebase.com" && zn(i.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),
    (!r || r === "undefined") && i.domain !== "localhost" && zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),
    i.secure || kR();
    const o = i.scheme === "ws" || i.scheme === "wss";
    return {
        repoInfo: new vE(i.host,i.secure,r,o,e,"",r !== i.subdomain),
        path: new Ie(i.pathString)
    }
}
  , TO = function(s) {
    let e = ""
      , i = ""
      , r = ""
      , o = ""
      , c = ""
      , d = !0
      , h = "https"
      , p = 443;
    if (typeof s == "string") {
        let m = s.indexOf("//");
        m >= 0 && (h = s.substring(0, m - 1),
        s = s.substring(m + 2));
        let y = s.indexOf("/");
        y === -1 && (y = s.length);
        let E = s.indexOf("?");
        E === -1 && (E = s.length),
        e = s.substring(0, Math.min(y, E)),
        y < E && (o = bO(s.substring(y, E)));
        const v = SO(s.substring(Math.min(s.length, E)));
        m = e.indexOf(":"),
        m >= 0 ? (d = h === "https" || h === "wss",
        p = parseInt(e.substring(m + 1), 10)) : m = e.length;
        const x = e.slice(0, m);
        if (x.toLowerCase() === "localhost")
            i = "localhost";
        else if (x.split(".").length <= 2)
            i = x;
        else {
            const A = e.indexOf(".");
            r = e.substring(0, A).toLowerCase(),
            i = e.substring(A + 1),
            c = r
        }
        "ns"in v && (c = v.ns)
    }
    return {
        host: e,
        port: p,
        domain: i,
        subdomain: r,
        secure: d,
        scheme: h,
        pathString: o,
        namespace: c
    }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class CO {
    constructor(e, i, r, o) {
        this.eventType = e,
        this.eventRegistration = i,
        this.snapshot = r,
        this.prevName = o
    }
    getPath() {
        const e = this.snapshot.ref;
        return this.eventType === "value" ? e._path : e.parent._path
    }
    getEventType() {
        return this.eventType
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + Ze(this.snapshot.exportVal())
    }
}
class wO {
    constructor(e, i, r) {
        this.eventRegistration = e,
        this.error = i,
        this.path = r
    }
    getPath() {
        return this.path
    }
    getEventType() {
        return "cancel"
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.path.toString() + ":cancel"
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AO {
    constructor(e, i) {
        this.snapshotCallback = e,
        this.cancelCallback = i
    }
    onValue(e, i) {
        this.snapshotCallback.call(null, e, i)
    }
    onCancel(e) {
        return G(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"),
        this.cancelCallback.call(null, e)
    }
    get hasCancelCallback() {
        return !!this.cancelCallback
    }
    matches(e) {
        return this.snapshotCallback === e.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch {
    constructor(e, i, r, o) {
        this._repo = e,
        this._path = i,
        this._queryParams = r,
        this._orderByCalled = o
    }
    get key() {
        return de(this._path) ? null : RE(this._path)
    }
    get ref() {
        return new Bn(this._repo,this._path)
    }
    get _queryIdentifier() {
        const e = xv(this._queryParams)
          , i = $d(e);
        return i === "{}" ? "default" : i
    }
    get _queryObject() {
        return xv(this._queryParams)
    }
    isEqual(e) {
        if (e = vt(e),
        !(e instanceof Ch))
            return !1;
        const i = this._repo === e._repo
          , r = OE(this._path, e._path)
          , o = this._queryIdentifier === e._queryIdentifier;
        return i && r && o
    }
    toJSON() {
        return this.toString()
    }
    toString() {
        return this._repo.toString() + _N(this._path)
    }
}
class Bn extends Ch {
    constructor(e, i) {
        super(e, i, new sh, !1)
    }
    get parent() {
        const e = xE(this._path);
        return e === null ? null : new Bn(this._repo,e)
    }
    get root() {
        let e = this;
        for (; e.parent !== null; )
            e = e.parent;
        return e
    }
}
class qr {
    constructor(e, i, r) {
        this._node = e,
        this.ref = i,
        this._index = r
    }
    get priority() {
        return this._node.getPriority().val()
    }
    get key() {
        return this.ref.key
    }
    get size() {
        return this._node.numChildren()
    }
    child(e) {
        const i = new Ie(e)
          , r = bd(this.ref, e);
        return new qr(this._node.getChild(i),r,Ve)
    }
    exists() {
        return !this._node.isEmpty()
    }
    exportVal() {
        return this._node.val(!0)
    }
    forEach(e) {
        return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (r, o) => e(new qr(o,bd(this.ref, r),Ve)))
    }
    hasChild(e) {
        const i = new Ie(e);
        return !this._node.getChild(i).isEmpty()
    }
    hasChildren() {
        return this._node.isLeafNode() ? !1 : !this._node.isEmpty()
    }
    toJSON() {
        return this.exportVal()
    }
    val() {
        return this._node.val()
    }
}
function RO(s, e) {
    return s = vt(s),
    s._checkNotDeleted("ref"),
    e !== void 0 ? bd(s._root, e) : s._root
}
function bd(s, e) {
    return s = vt(s),
    pe(s._path) === null ? nO("child", "path", e) : d0("child", "path", e),
    new Bn(s._repo,Je(s._path, e))
}
function NO(s, e) {
    s = vt(s),
    iO("set", s._path),
    tO("set", e, s._path);
    const i = new tc;
    return mO(s._repo, s._path, e, null, i.wrapCallback( () => {}
    )),
    i.promise
}
function xO(s) {
    s = vt(s);
    const e = new AO( () => {}
    )
      , i = new wh(e);
    return pO(s._repo, s, i).then(r => new qr(r,new Bn(s._repo,s._path),s._queryParams.getIndex()))
}
class wh {
    constructor(e) {
        this.callbackContext = e
    }
    respondsTo(e) {
        return e === "value"
    }
    createEvent(e, i) {
        const r = i._queryParams.getIndex();
        return new CO("value",this,new qr(e.snapshotNode,new Bn(i._repo,i._path),r))
    }
    getEventRunner(e) {
        return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
    }
    createCancelEvent(e, i) {
        return this.callbackContext.hasCancelCallback ? new wO(this,e,i) : null
    }
    matches(e) {
        return e instanceof wh ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1
    }
    hasAnyCallback() {
        return this.callbackContext !== null
    }
}
Rx(Bn);
Dx(Bn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const OO = "FIREBASE_DATABASE_EMULATOR_HOST"
  , Sd = {};
let IO = !1;
function DO(s, e, i, r) {
    const o = e.lastIndexOf(":")
      , c = e.substring(0, o)
      , d = Yr(c);
    s.repoInfo_ = new vE(e,d,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),
    r && (s.authTokenProvider_ = r)
}
function MO(s, e, i, r, o) {
    let c = r || s.options.databaseURL;
    c === void 0 && (s.options.projectId || zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),
    pt("Using default host for project ", s.options.projectId),
    c = `${s.options.projectId}-default-rtdb.firebaseio.com`);
    let d = Gv(c, o), h = d.repoInfo, p;
    typeof process < "u" && fv && (p = fv[OO]),
    p ? (c = `http://${p}?ns=${h.namespace}`,
    d = Gv(c, o),
    h = d.repoInfo) : d.repoInfo.secure;
    const m = new YR(s.name,s.options,e);
    sO("Invalid Firebase Database URL", d),
    de(d.path) || zn("Database URL must point to the root of a Firebase Database (not including a child path).");
    const y = LO(h, s, m, new GR(s,i));
    return new UO(y,s)
}
function kO(s, e) {
    const i = Sd[e];
    (!i || i[s.key] !== s) && zn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),
    _O(s),
    delete i[s.key]
}
function LO(s, e, i, r) {
    let o = Sd[e.name];
    o || (o = {},
    Sd[e.name] = o);
    let c = o[s.toURLString()];
    return c && zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),
    c = new uO(s,IO,i,r),
    o[s.toURLString()] = c,
    c
}
class UO {
    constructor(e, i) {
        this._repoInternal = e,
        this.app = i,
        this.type = "database",
        this._instanceStarted = !1
    }
    get _repo() {
        return this._instanceStarted || (fO(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride),
        this._instanceStarted = !0),
        this._repoInternal
    }
    get _root() {
        return this._rootInternal || (this._rootInternal = new Bn(this._repo,Ee())),
        this._rootInternal
    }
    _delete() {
        return this._rootInternal !== null && (kO(this._repo, this.app.name),
        this._repoInternal = null,
        this._rootInternal = null),
        Promise.resolve()
    }
    _checkNotDeleted(e) {
        this._rootInternal === null && zn("Cannot call " + e + " on a deleted database.")
    }
}
function PO(s=Sy(), e) {
    const i = zd(s, "database").getImmediate({
        identifier: e
    });
    if (!i._instanceStarted) {
        const r = PC("database");
        r && jO(i, ...r)
    }
    return i
}
function jO(s, e, i, r={}) {
    s = vt(s),
    s._checkNotDeleted("useEmulator");
    const o = `${e}:${i}`
      , c = s._repoInternal;
    if (s._instanceStarted) {
        if (o === s._repoInternal.repoInfo_.host && Zi(r, c.repoInfo_.emulatorOptions))
            return;
        zn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")
    }
    let d;
    if (c.repoInfo_.nodeAdmin)
        r.mockUserToken && zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),
        d = new xo(xo.OWNER);
    else if (r.mockUserToken) {
        const h = typeof r.mockUserToken == "string" ? r.mockUserToken : jC(r.mockUserToken, s.app.options.projectId);
        d = new xo(h)
    }
    Yr(e) && (my(e),
    gy("Database", !0)),
    DO(c, o, r, d)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zO(s) {
    NR(fa),
    ta(new Ji("database", (e, {instanceIdentifier: i}) => {
        const r = e.getProvider("app").getImmediate()
          , o = e.getProvider("auth-internal")
          , c = e.getProvider("app-check-internal");
        return MO(r, o, c, i)
    }
    ,"PUBLIC").setMultipleInstances(!0)),
    yi(dv, hv, s),
    yi(dv, hv, "esm2017")
}
Ln.prototype.simpleListen = function(s, e) {
    this.sendRequest("q", {
        p: s
    }, e)
}
;
Ln.prototype.echo = function(s, e) {
    this.sendRequest("echo", {
        d: s
    }, e)
}
;
zO();
const HO = {
    apiKey: "AIzaSyA-DMiiqIbjszdvj09F2086JXOz4npDYK4",
    authDomain: "wai-licencia.firebaseapp.com",
    databaseURL: "https://wai-licencia-default-rtdb.firebaseio.com",
    projectId: "wai-licencia",
    storageBucket: "wai-licencia.firebasestorage.app",
    messagingSenderId: "816648166004",
    appId: "1:816648166004:web:7f2e2572a444b94939cf21",
    measurementId: "G-WVGE3JELBE"
}
  , E0 = by(HO)
  , So = AR(E0)
  , BO = PO(E0)
  , qO = new On
  , b0 = N.createContext(null)
  , VO = ({children: s}) => {
    const [e,i] = N.useState(null)
      , [r,o] = N.useState(!0)
      , c = Nd()
      , d = async (E, v) => {
        const x = `usuarios/${E}`
          , A = RO(BO, x);
        try {
            (await xO(A)).exists() ? console.log("Usuario ya existe en RTDB, no se sobrescribe:", v) : (await NO(A, {
                uid: E,
                idInternoCliente: v,
                fechaCreacion: new Date().toISOString()
            }),
            console.log("Usuario guardado en RTDB:", v))
        } catch (U) {
            console.error("Error al guardar usuario en RTDB:", U)
        }
    }
    ;
    N.useEffect( () => {
        const E = pA(So, async v => {
            v ? (i(v),
            await d(v.uid, v.email),
            console.log("Redirigiendo a /panel desde onAuthStateChanged."),
            window.location.href = "/panel") : (i(null),
            console.log("Usuario desautenticado, redirigiendo a /."),
            window.location.pathname !== "/" && c("/")),
            o(!1)
        }
        );
        return () => E()
    }
    , [c]);
    const y = {
        usuario: e,
        estaAutenticado: !!e,
        iniciarSesion: async (E, v) => {
            try {
                return o(!0),
                await fA(So, E, v),
                !0
            } catch (x) {
                throw console.error("Error al iniciar sesión con correo/contraseña:", x.message),
                o(!1),
                x
            }
        }
        ,
        iniciarSesionConGoogle: async () => {
            try {
                return o(!0),
                await LA(So, qO),
                !0
            } catch (E) {
                throw console.error("Error al iniciar sesión con Google:", E.message),
                o(!1),
                E
            }
        }
        ,
        cerrarSesion: async () => {
            try {
                o(!0),
                await mA(So)
            } catch (E) {
                throw console.error("Error al cerrar sesión:", E.message),
                o(!1),
                E
            }
        }
        ,
        cargando: r
    };
    return b.jsx(b0.Provider, {
        value: y,
        children: s
    })
}
  , ls = () => N.useContext(b0)
  , GO = "/assets/logo-google-CZfsvi_7.webp"
  , YO = () => {
    const {iniciarSesionConGoogle: s} = ls()
      , e = async () => {
        await s()
    }
    ;
    return b.jsx("div", {
        className: "login-page",
        children: b.jsxs("div", {
            className: "login-card",
            children: [b.jsx("h1", {
                children: "WAI"
            }), b.jsxs("p", {
                className: "login-description",
                children: [b.jsx("strong", {
                    style: {
                        color: "#ff6b6b",
                        fontSize: "1.4rem"
                    },
                    children: "¡1 DÍA GRATIS!"
                }), b.jsx("br", {}), "Regístrate y automatiza tu WhatsApp", b.jsx("br", {}), b.jsx("span", {
                    style: {
                        color: "#0eda91",
                        fontWeight: "600"
                    },
                    children: "✓ Incluye todas las funciones premium"
                })]
            }), b.jsxs("div", {
                className: "action-area",
                children: [b.jsx("span", {
                    className: "login-subtitle",
                    children: "👇 Acceso Rápido y Seguro"
                }), b.jsxs("button", {
                    onClick: e,
                    className: "google-btn-primary",
                    children: [b.jsx("div", {
                        className: "google-icon-wrapper",
                        children: b.jsx("img", {
                            src: GO,
                            alt: "G",
                            className: "google-icon"
                        })
                    }), b.jsx("span", {
                        className: "btn-text",
                        children: "Regístrate con Google"
                    })]
                }), b.jsx("p", {
                    className: "login-footer-text",
                    children: "🔒 Ecuentra la clave de tu licencia al inciar sesión •"
                })]
            })]
        })
    })
}
  , S0 = "/assets/tutorial-pXl94fiD.mp4"
  , FO = () => {
    const s = "https://crm.jhllegalgroup.com"
      , {usuario: e} = ls()
      , [i,r] = N.useState(null)
      , [o,c] = N.useState(!0)
      , [d,h] = N.useState({
        tipo: "",
        texto: ""
    })
      , [p,m] = N.useState("")
      , [y,E] = N.useState("")
      , [v,x] = N.useState(!1)
      , [A,U] = N.useState(!1)
      , [B,H] = N.useState(!1)
      , [q,Y] = N.useState(!1)
      , [W,K] = N.useState(!1)
      , [ve,Te] = N.useState({
        x: 0,
        y: 0
    })
      , me = N.useRef({
        x: 0,
        y: 0
    })
      , he = N.useRef({
        x: 0,
        y: 0
    })
      , _e = N.useRef(null)
      , ut = async () => {
        if (!e)
            throw new Error("No hay usuario autenticado");
        return await e.getIdToken(!0)
    }
      , Le = async (w, z="GET", V=null) => {
        try {
            const re = {
                Authorization: `Bearer ${await ut()}`,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true"
            }
              , ee = {
                method: z,
                headers: re
            };
            V && z === "POST" && (ee.body = JSON.stringify(V));
            const ze = await fetch(`${s}/api/${w}`, ee);
            if (!ze.ok) {
                if (ze.status === 404)
                    return null;
                throw new Error(`Error ${ze.status}`)
            }
            return await ze.json()
        } catch (X) {
            throw console.error("Error en API:", X),
            X
        }
    }
      , Xe = (w, z) => {
        h({
            tipo: w,
            texto: z
        }),
        setTimeout( () => h({
            tipo: "",
            texto: ""
        }), 3e3)
    }
      , Rt = async (w, z) => {
        if (w)
            try {
                await navigator.clipboard.writeText(w),
                Xe("success", `¡${z} copiado!`)
            } catch {
                Xe("error", "No se pudo copiar automáticamente.")
            }
    }
      , Fe = () => {
        const w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let z = "";
        for (let V = 0; V < 36; V++)
            z += w.charAt(Math.floor(Math.random() * w.length));
        m(z)
    }
      , k = async () => {
        try {
            x(!0),
            U(!1);
            const w = await Le("clave", "POST", {
                clave: p
            });
            w && w.ok ? (E(p),
            m(""),
            H(!1),
            Xe("success", "Nueva clave configurada correctamente")) : Xe("error", "Error al guardar la clave")
        } catch {
            Xe("error", "Error de conexión al guardar")
        } finally {
            x(!1)
        }
    }
      , F = async () => {
        try {
            const [w,z] = await Promise.all([Le("clave"), Le("facturacion")]);
            w != null && w.clave && E(w.clave),
            z != null && z.facturacion ? r(z.facturacion) : r({
                activa: !1,
                fecha: null
            })
        } catch (w) {
            console.error(w)
        } finally {
            c(!1)
        }
    }
      , Z = w => {
        if (!w)
            return "---";
        if (w.includes("/")) {
            const z = w.split("/");
            if (parseInt(z[2]) > 2050)
                return "Licencia de por vida"
        }
        return w
    }
    ;
    N.useEffect( () => {
        e && F()
    }
    , [e]),
    N.useEffect( () => {
        _e.current && (q ? (_e.current.muted = !1,
        _e.current.volume = 1,
        _e.current.currentTime = 0,
        _e.current.play().catch(w => console.log("Autoplay audio blocked", w))) : _e.current.muted = !0)
    }
    , [q]);
    const be = w => {
        q || w.target.closest(".btn-cerrar-video") || w.target.tagName === "VIDEO" && w.target.hasAttribute("controls") || (K(!0),
        me.current = {
            x: w.clientX,
            y: w.clientY
        },
        he.current = {
            ...ve
        },
        w.preventDefault())
    }
    ;
    N.useEffect( () => {
        const w = V => {
            if (!W)
                return;
            const X = V.clientX - me.current.x
              , re = V.clientY - me.current.y;
            Te({
                x: he.current.x + X,
                y: he.current.y + re
            })
        }
          , z = () => {
            K(!1)
        }
        ;
        return W && (window.addEventListener("mousemove", w),
        window.addEventListener("mouseup", z)),
        () => {
            window.removeEventListener("mousemove", w),
            window.removeEventListener("mouseup", z)
        }
    }
    , [W]);
    const T = w => {
        if (!q) {
            const z = Math.abs(w.clientX - me.current.x)
              , V = Math.abs(w.clientY - me.current.y);
            if (z > 5 || V > 5) {
                w.stopPropagation();
                return
            }
            Y(!0)
        }
    }
    ;
    return o ? b.jsxs("div", {
        className: "loading-container",
        children: [b.jsx("div", {
            className: "loading-spinner"
        }), b.jsx("p", {
            children: "Cargando tus datos..."
        })]
    }) : b.jsxs("div", {
        className: "contenido-facturacion",
        children: [b.jsxs("div", {
            className: "facturacion-header",
            children: [b.jsx("h2", {
                children: "Conectar WAI Agente"
            }), b.jsx("p", {
                className: "subtitulo",
                children: "Copia estos datos para iniciar sesión en la aplicación de escritorio."
            })]
        }), d.texto && b.jsxs("div", {
            className: `mensaje-flotante tipo-${d.tipo}`,
            children: [d.tipo === "success" ? "✓" : "⚠️", " ", d.texto]
        }), b.jsxs("div", {
            className: "credenciales-card",
            children: [b.jsxs("div", {
                className: "credenciales-titulo-bloque",
                children: [b.jsxs("div", {
                    className: "fila-superior",
                    children: [b.jsx("h3", {
                        children: "🔑 Credenciales de Acceso"
                    }), b.jsx("span", {
                        className: `badge-estado ${i != null && i.activa ? "activo" : "inactivo"}`,
                        children: i != null && i.activa ? "ACTIVA" : "INACTIVA"
                    })]
                }), (i == null ? void 0 : i.activa) && (i == null ? void 0 : i.fecha) && b.jsxs("div", {
                    className: "fecha-destacada-banner",
                    children: [b.jsx("span", {
                        className: "fecha-label",
                        children: "Vencimiento del Plan:"
                    }), b.jsx("span", {
                        className: "fecha-valor",
                        children: Z(i.fecha)
                    })]
                })]
            }), b.jsxs("div", {
                className: "dato-row",
                children: [b.jsx("div", {
                    className: "dato-numero",
                    children: "1"
                }), b.jsxs("div", {
                    className: "dato-info",
                    children: [b.jsx("label", {
                        children: "Correo (Usuario)"
                    }), b.jsxs("div", {
                        className: "input-falso-container",
                        children: [b.jsx("code", {
                            className: "input-falso",
                            children: e == null ? void 0 : e.email
                        }), b.jsx("button", {
                            className: "btn-copiar-grande",
                            onClick: () => Rt(e == null ? void 0 : e.email, "Correo"),
                            children: "Copiar Correo"
                        })]
                    })]
                })]
            }), b.jsx("div", {
                className: "separador-dashed"
            }), b.jsxs("div", {
                className: "dato-row",
                children: [b.jsx("div", {
                    className: "dato-numero",
                    children: "2"
                }), b.jsxs("div", {
                    className: "dato-info",
                    children: [b.jsx("label", {
                        children: "Clave de Licencia"
                    }), b.jsxs("div", {
                        className: "input-falso-container",
                        children: [y ? b.jsx("code", {
                            className: "input-falso",
                            children: y
                        }) : b.jsx("span", {
                            className: "texto-vacio",
                            children: "No tienes una clave generada aún."
                        }), b.jsx("button", {
                            className: "btn-copiar-grande",
                            onClick: () => Rt(y, "Clave"),
                            disabled: !y,
                            children: "Copiar Clave"
                        })]
                    })]
                })]
            })]
        }), b.jsxs("div", {
            className: "zona-accion-rapida",
            children: [b.jsx("p", {
                children: "¿Ya copiaste los datos? Abre la app:"
            }), b.jsx("a", {
                href: "https://apps.microsoft.com/detail/9PDKF4TXCDZ9?launch=true&mode=mini",
                className: "btn-magic-link",
                target: "_blank",
                children: "🚀 Ejecutar WAI Agente"
            })]
        }), b.jsxs("div", {
            className: "zona-avanzada",
            children: [b.jsx("button", {
                className: "btn-toggle-avanzado",
                onClick: () => H(!B),
                children: B ? "Ocultar opciones avanzadas" : "¿Necesitas regenerar tu clave?"
            }), B && b.jsxs("div", {
                className: "panel-generador",
                children: [b.jsxs("div", {
                    className: "alerta-aviso",
                    children: [b.jsx("strong", {
                        children: "⚠️ Cuidado:"
                    }), " Si generas una nueva clave, la actual dejará de funcionar en todos tus equipos."]
                }), b.jsxs("div", {
                    className: "generador-controles",
                    children: [b.jsx("button", {
                        type: "button",
                        onClick: Fe,
                        className: "btn-secundario",
                        children: "Generar nueva clave"
                    }), p && b.jsxs("div", {
                        className: "nueva-clave-preview",
                        children: [b.jsx("p", {
                            children: "Nueva clave propuesta:"
                        }), b.jsx("code", {
                            children: p
                        }), b.jsx("button", {
                            className: "btn-guardar-final",
                            onClick: () => U(!0),
                            children: "Guardar y Reemplazar"
                        })]
                    })]
                })]
            })]
        }), q && b.jsx("div", {
            className: "video-overlay-backdrop",
            onClick: () => Y(!1)
        }), b.jsxs("div", {
            className: `widget-video-tutorial ${q ? "expandido" : "minimizado"} ${W ? "dragging" : ""}`,
            style: q ? {} : {
                transform: `translate(${ve.x}px, ${ve.y}px)`
            },
            onMouseDown: be,
            onClickCapture: T,
            children: [b.jsx("video", {
                ref: _e,
                src: S0,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                controls: q,
                className: "video-elemento"
            }), !q && b.jsxs("div", {
                className: "etiqueta-video",
                children: [b.jsx("span", {
                    className: "icono-play",
                    children: "▶"
                }), " ", b.jsxs("div", {
                    className: "texto-etiqueta",
                    children: [b.jsx("strong", {
                        children: "¿Cómo funciona?"
                    }), " ", b.jsx("small", {
                        children: "Ver tutorial rápido"
                    })]
                })]
            }), q && b.jsx("button", {
                className: "btn-cerrar-video",
                onClick: w => {
                    w.stopPropagation(),
                    Y(!1)
                }
                ,
                children: "✕"
            })]
        }), A && b.jsx("div", {
            className: "modal-overlay",
            children: b.jsxs("div", {
                className: "modal-content",
                children: [b.jsx("h3", {
                    children: "Confirmar cambio"
                }), b.jsx("p", {
                    children: "La clave anterior dejará de funcionar inmediatamente."
                }), b.jsxs("div", {
                    className: "modal-actions",
                    children: [b.jsx("button", {
                        onClick: () => U(!1),
                        className: "btn-cancel",
                        children: "Cancelar"
                    }), b.jsx("button", {
                        onClick: k,
                        disabled: v,
                        className: "btn-confirm",
                        children: v ? "Guardando..." : "Sí, cambiar clave"
                    })]
                })]
            })
        })]
    })
}
  , KO = "/assets/logo-BSWxvb2b.png"
  , QO = ({establecerPaginaActiva: s, paginaActiva: e}) => {
    const [i,r] = N.useState(!1)
      , {cerrarSesion: o, usuario: c} = ls()
      , d = N.useRef(null)
      , h = N.useRef(null);
    N.useEffect( () => {
        const v = x => {
            var A, U;
            i && !((A = d.current) != null && A.contains(x.target)) && !((U = h.current) != null && U.contains(x.target)) && r(!1)
        }
        ;
        return document.addEventListener("mousedown", v),
        () => document.removeEventListener("mousedown", v)
    }
    , [i]);
    const p = () => r(v => !v)
      , m = v => {
        if (v === "abrir-wai") {
            window.open("https://apps.microsoft.com/detail/9PDKF4TXCDZ9?launch=true&mode=mini", "_blank", "noopener,noreferrer"),
            r(!1);
            return
        }
        s(v),
        r(!1)
    }
      , y = () => {
        o(),
        r(!1)
    }
      , E = [{
        name: "Inicio",
        id: "inicio",
        icon: "🏠"
    }, {
        name: "Comprar Licencia",
        id: "reventa",
        icon: "💎"
    }, {
        name: "Abrir WAI ↗",
        id: "abrir-wai",
        icon: "🖥️"
    }];
    return b.jsxs(b.Fragment, {
        children: [b.jsxs("nav", {
            className: "navbar",
            children: [b.jsx("button", {
                ref: h,
                className: "menu-toggle",
                onClick: p,
                "aria-label": "Toggle menu",
                children: b.jsxs("div", {
                    className: "hamburger",
                    children: [b.jsx("span", {
                        className: i ? "active" : ""
                    }), b.jsx("span", {
                        className: i ? "active" : ""
                    }), b.jsx("span", {
                        className: i ? "active" : ""
                    })]
                })
            }), b.jsxs("div", {
                className: "nav-brand",
                children: [b.jsx("img", {
                    src: KO,
                    alt: "Logo WAI",
                    className: "logo"
                }), b.jsx("span", {
                    className: "app-name",
                    children: "WAI"
                })]
            }), b.jsx("div", {
                className: "user-greeting",
                children: "¡Bienvenido!"
            })]
        }), b.jsx("div", {
            ref: d,
            className: `sidebar ${i ? "open" : ""}`,
            children: b.jsxs("div", {
                className: "menu-content",
                children: [E.map(v => b.jsxs("button", {
                    onClick: () => m(v.id),
                    className: `menu-item ${e === v.id ? "active" : ""}`,
                    children: [b.jsx("span", {
                        className: "menu-icon",
                        children: v.icon
                    }), b.jsx("span", {
                        className: "menu-text",
                        children: v.name
                    })]
                }, v.id)), b.jsx("div", {
                    className: "menu-divider"
                }), b.jsxs("button", {
                    onClick: y,
                    className: "menu-item logout",
                    children: [b.jsx("span", {
                        className: "menu-icon",
                        children: "🚪"
                    }), b.jsx("span", {
                        className: "menu-text",
                        children: "Cerrar Sesión"
                    })]
                })]
            })
        }), i && b.jsx("div", {
            className: "overlay",
            onClick: () => r(!1)
        })]
    })
}
  , XO = () => {
    const s = "https://crm.jhllegalgroup.com"
      , {usuario: e} = ls()
      , [i,r] = N.useState(null)
      , [o,c] = N.useState(!0)
      , [d,h] = N.useState({
        tipo: "",
        texto: ""
    })
      , [p,m] = N.useState("")
      , [y,E] = N.useState("")
      , [v,x] = N.useState(!1)
      , [A,U] = N.useState(!1)
      , [B,H] = N.useState(!1)
      , [q,Y] = N.useState(!1)
      , [W,K] = N.useState(!1)
      , [ve,Te] = N.useState({
        x: 0,
        y: 0
    })
      , me = N.useRef({
        x: 0,
        y: 0
    })
      , he = N.useRef({
        x: 0,
        y: 0
    })
      , _e = N.useRef(null)
      , ut = async () => {
        if (!e)
            throw new Error("No hay usuario autenticado");
        return await e.getIdToken(!0)
    }
      , Le = async (w, z="GET", V=null) => {
        try {
            const re = {
                Authorization: `Bearer ${await ut()}`,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true"
            }
              , ee = {
                method: z,
                headers: re
            };
            V && z === "POST" && (ee.body = JSON.stringify(V));
            const ze = await fetch(`${s}/api/${w}`, ee);
            if (!ze.ok) {
                if (ze.status === 404)
                    return null;
                throw new Error(`Error ${ze.status}`)
            }
            return await ze.json()
        } catch (X) {
            throw console.error("Error en API:", X),
            X
        }
    }
      , Xe = (w, z) => {
        h({
            tipo: w,
            texto: z
        }),
        setTimeout( () => h({
            tipo: "",
            texto: ""
        }), 3e3)
    }
      , Rt = async (w, z) => {
        if (w)
            try {
                await navigator.clipboard.writeText(w),
                Xe("success", `¡${z} copiado!`)
            } catch {
                Xe("error", "No se pudo copiar automáticamente.")
            }
    }
      , Fe = () => {
        const w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let z = "";
        for (let V = 0; V < 36; V++)
            z += w.charAt(Math.floor(Math.random() * w.length));
        m(z)
    }
      , k = async () => {
        try {
            x(!0),
            U(!1);
            const w = await Le("clave", "POST", {
                clave: p
            });
            w && w.ok ? (E(p),
            m(""),
            H(!1),
            Xe("success", "Nueva clave configurada correctamente")) : Xe("error", "Error al guardar la clave")
        } catch {
            Xe("error", "Error de conexión al guardar")
        } finally {
            x(!1)
        }
    }
      , F = async () => {
        try {
            const [w,z] = await Promise.all([Le("clave"), Le("facturacion")]);
            w != null && w.clave && E(w.clave),
            z != null && z.facturacion ? r(z.facturacion) : r({
                activa: !1,
                fecha: null
            })
        } catch (w) {
            console.error(w)
        } finally {
            c(!1)
        }
    }
      , Z = w => {
        if (!w)
            return "---";
        if (w.includes("/")) {
            const z = w.split("/");
            if (parseInt(z[2]) > 2050)
                return "Licencia de por vida"
        }
        return w
    }
    ;
    N.useEffect( () => {
        e && F()
    }
    , [e]),
    N.useEffect( () => {
        _e.current && (q ? (_e.current.muted = !1,
        _e.current.volume = 1,
        _e.current.currentTime = 0,
        _e.current.play().catch(w => console.log("Autoplay audio blocked", w))) : _e.current.muted = !0)
    }
    , [q]);
    const be = w => {
        q || w.target.closest(".btn-cerrar-video") || w.target.tagName === "VIDEO" && w.target.hasAttribute("controls") || (K(!0),
        me.current = {
            x: w.clientX,
            y: w.clientY
        },
        he.current = {
            ...ve
        },
        w.preventDefault())
    }
    ;
    N.useEffect( () => {
        const w = V => {
            if (!W)
                return;
            const X = V.clientX - me.current.x
              , re = V.clientY - me.current.y;
            Te({
                x: he.current.x + X,
                y: he.current.y + re
            })
        }
          , z = () => {
            K(!1)
        }
        ;
        return W && (window.addEventListener("mousemove", w),
        window.addEventListener("mouseup", z)),
        () => {
            window.removeEventListener("mousemove", w),
            window.removeEventListener("mouseup", z)
        }
    }
    , [W]);
    const T = w => {
        if (!q) {
            const z = Math.abs(w.clientX - me.current.x)
              , V = Math.abs(w.clientY - me.current.y);
            if (z > 5 || V > 5) {
                w.stopPropagation();
                return
            }
            Y(!0)
        }
    }
    ;
    return o ? b.jsxs("div", {
        className: "loading-container",
        children: [b.jsx("div", {
            className: "loading-spinner"
        }), b.jsx("p", {
            children: "Cargando tus datos..."
        })]
    }) : b.jsxs("div", {
        className: "contenido-facturacion",
        children: [b.jsxs("div", {
            className: "facturacion-header",
            children: [b.jsx("h2", {
                children: "Conectar WAI Agente"
            }), b.jsx("p", {
                className: "subtitulo",
                children: "Copia estos datos para iniciar sesión en la aplicación de escritorio."
            })]
        }), d.texto && b.jsxs("div", {
            className: `mensaje-flotante tipo-${d.tipo}`,
            children: [d.tipo === "success" ? "✓" : "⚠️", " ", d.texto]
        }), b.jsxs("div", {
            className: "credenciales-card",
            children: [b.jsxs("div", {
                className: "credenciales-titulo-bloque",
                children: [b.jsxs("div", {
                    className: "fila-superior",
                    children: [b.jsx("h3", {
                        children: "🔑 Credenciales de Acceso"
                    }), b.jsx("span", {
                        className: `badge-estado ${i != null && i.activa ? "activo" : "inactivo"}`,
                        children: i != null && i.activa ? "ACTIVA" : "INACTIVA"
                    })]
                }), (i == null ? void 0 : i.activa) && (i == null ? void 0 : i.fecha) && b.jsxs("div", {
                    className: "fecha-destacada-banner",
                    children: [b.jsx("span", {
                        className: "fecha-label",
                        children: "Vencimiento del Plan:"
                    }), b.jsx("span", {
                        className: "fecha-valor",
                        children: Z(i.fecha)
                    })]
                })]
            }), b.jsxs("div", {
                className: "dato-row",
                children: [b.jsx("div", {
                    className: "dato-numero",
                    children: "1"
                }), b.jsxs("div", {
                    className: "dato-info",
                    children: [b.jsx("label", {
                        children: "Correo (Usuario)"
                    }), b.jsxs("div", {
                        className: "input-falso-container",
                        children: [b.jsx("code", {
                            className: "input-falso",
                            children: e == null ? void 0 : e.email
                        }), b.jsx("button", {
                            className: "btn-copiar-grande",
                            onClick: () => Rt(e == null ? void 0 : e.email, "Correo"),
                            children: "Copiar Correo"
                        })]
                    })]
                })]
            }), b.jsx("div", {
                className: "separador-dashed"
            }), b.jsxs("div", {
                className: "dato-row",
                children: [b.jsx("div", {
                    className: "dato-numero",
                    children: "2"
                }), b.jsxs("div", {
                    className: "dato-info",
                    children: [b.jsx("label", {
                        children: "Clave de Licencia"
                    }), b.jsxs("div", {
                        className: "input-falso-container",
                        children: [y ? b.jsx("code", {
                            className: "input-falso",
                            children: y
                        }) : b.jsx("span", {
                            className: "texto-vacio",
                            children: "No tienes una clave generada aún."
                        }), b.jsx("button", {
                            className: "btn-copiar-grande",
                            onClick: () => Rt(y, "Clave"),
                            disabled: !y,
                            children: "Copiar Clave"
                        })]
                    })]
                })]
            })]
        }), b.jsxs("div", {
            className: "zona-accion-rapida",
            children: [b.jsx("p", {
                children: "¿Ya copiaste los datos? Abre la app:"
            }), b.jsx("a", {
                href: "wai://open",
                className: "btn-magic-link",
                children: "🚀 Ejecutar WAI Agente"
            })]
        }), b.jsxs("div", {
            className: "zona-avanzada",
            children: [b.jsx("button", {
                className: "btn-toggle-avanzado",
                onClick: () => H(!B),
                children: B ? "Ocultar opciones avanzadas" : "¿Necesitas regenerar tu clave?"
            }), B && b.jsxs("div", {
                className: "panel-generador",
                children: [b.jsxs("div", {
                    className: "alerta-aviso",
                    children: [b.jsx("strong", {
                        children: "⚠️ Cuidado:"
                    }), " Si generas una nueva clave, la actual dejará de funcionar en todos tus equipos."]
                }), b.jsxs("div", {
                    className: "generador-controles",
                    children: [b.jsx("button", {
                        type: "button",
                        onClick: Fe,
                        className: "btn-secundario",
                        children: "Generar nueva clave"
                    }), p && b.jsxs("div", {
                        className: "nueva-clave-preview",
                        children: [b.jsx("p", {
                            children: "Nueva clave propuesta:"
                        }), b.jsx("code", {
                            children: p
                        }), b.jsx("button", {
                            className: "btn-guardar-final",
                            onClick: () => U(!0),
                            children: "Guardar y Reemplazar"
                        })]
                    })]
                })]
            })]
        }), q && b.jsx("div", {
            className: "video-overlay-backdrop",
            onClick: () => Y(!1)
        }), b.jsxs("div", {
            className: `widget-video-tutorial ${q ? "expandido" : "minimizado"} ${W ? "dragging" : ""}`,
            style: q ? {} : {
                transform: `translate(${ve.x}px, ${ve.y}px)`
            },
            onMouseDown: be,
            onClickCapture: T,
            children: [b.jsx("video", {
                ref: _e,
                src: S0,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                controls: q,
                className: "video-elemento"
            }), !q && b.jsxs("div", {
                className: "etiqueta-video",
                children: [b.jsx("span", {
                    className: "icono-play",
                    children: "▶"
                }), " ", b.jsxs("div", {
                    className: "texto-etiqueta",
                    children: [b.jsx("strong", {
                        children: "¿Cómo funciona?"
                    }), " ", b.jsx("small", {
                        children: "Ver tutorial rápido"
                    })]
                })]
            }), q && b.jsx("button", {
                className: "btn-cerrar-video",
                onClick: w => {
                    w.stopPropagation(),
                    Y(!1)
                }
                ,
                children: "✕"
            })]
        }), A && b.jsx("div", {
            className: "modal-overlay",
            children: b.jsxs("div", {
                className: "modal-content",
                children: [b.jsx("h3", {
                    children: "Confirmar cambio"
                }), b.jsx("p", {
                    children: "La clave anterior dejará de funcionar inmediatamente."
                }), b.jsxs("div", {
                    className: "modal-actions",
                    children: [b.jsx("button", {
                        onClick: () => U(!1),
                        className: "btn-cancel",
                        children: "Cancelar"
                    }), b.jsx("button", {
                        onClick: k,
                        disabled: v,
                        className: "btn-confirm",
                        children: v ? "Guardando..." : "Sí, cambiar clave"
                    })]
                })]
            })
        })]
    })
}
  , Td = "https://crm.jhllegalgroup.com";
console.log("La url: " + Td);
const Yv = {
    CO: {
        nombre: "Colombia",
        moneda: "COP",
        simbolo: "$",
        mensual: 2e4,
        vitalicio: 65e3
    },
    WORLD: {
        nombre: "Resto del Mundo",
        moneda: "USD",
        simbolo: "$",
        mensual: 5.5,
        vitalicio: 18
    }
}
  , WO = () => {
    const {usuario: s} = ls()
      , [e,i] = N.useState(Yv.WORLD)
      , [r,o] = N.useState(!0)
      , [c,d] = N.useState(!1)
      , h = N.useRef(null)
      , p = N.useRef(null)
      , m = N.useRef(!0);
    N.useEffect( () => (m.current = !0,
    () => {
        m.current = !1
    }
    ), []),
    N.useEffect( () => {
        (async () => {
            if (s)
                try {
                    m.current && o(!0);
                    let x = "WORLD";
                    try {
                        (await (await fetch("https://ipapi.co/json/")).json()).country_code === "CO" && (x = "CO")
                    } catch {
                        console.warn("No se pudo detectar país, usando defecto WORLD")
                    }
                    if (!m.current)
                        return;
                    const A = Yv[x];
                    i(A);
                    const U = await s.getIdToken(!0)
                      , B = s == null ? void 0 : s.email
                      , H = await fetch(`${Td}/api/clave`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${U}`,
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": "true"
                        }
                    });
                    if (!H.ok) {
                        const W = await H.text();
                        throw new Error(`Error clave: ${H.status} - ${W}`)
                    }
                    const Y = (await H.json()).clave;
                    await Promise.all([y(Y, A.mensual, A.moneda, "mensual", h, U, B), y(Y, A.vitalicio, A.moneda, "vitalicio", p, U, B)])
                } catch (x) {
                    console.error("Error en el proceso de carga:", x)
                } finally {
                    m.current && (d(!0),
                    o(!1),
                    setTimeout( () => {
                        m.current && d(!1)
                    }
                    , 2500))
                }
        }
        )()
    }
    , [s]);
    const y = async (v, x, A, U, B, H, q) => {
        if (!(!B.current || !m.current))
            try {
                const Y = await fetch(`${Td}/api/firma-bold`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${H}`,
                        "ngrok-skip-browser-warning": "true"
                    },
                    body: JSON.stringify({
                        userId: v,
                        monto: x,
                        moneda: A,
                        plan: U
                    })
                });
                if (!Y.ok)
                    throw new Error("Error al obtener firma");
                const W = await Y.json();
                if (W.error)
                    throw new Error(W.error);
                if (!B.current)
                    return;
                B.current.innerHTML = "";
                const K = document.createElement("script");
                K.src = "https://checkout.bold.co/library/boldPaymentButton.js",
                K.setAttribute("data-bold-button", "dark"),
                K.setAttribute("data-api-key", "0BigvJ6pNtu453u9sAMorop5dreZEtzEZF2ia-_w1W4"),
                K.setAttribute("data-order-id", W.idOrden),
                K.setAttribute("data-integrity-signature", W.firma),
                K.setAttribute("data-amount", W.monto),
                K.setAttribute("data-currency", W.moneda),
                K.setAttribute("data-description", `Suscripción WAI ${U.toUpperCase()}`),
                K.setAttribute("data-redirection-url", "https://wai.artechclick.com"),
                K.setAttribute("data-render-mode", "embedded"),
                q && K.setAttribute("data-extra-data-1", q),
                B.current.appendChild(K)
            } catch (Y) {
                console.error(`Error botón ${U}:`, Y),
                B.current && (B.current.innerHTML = '<span style="color:red; font-size:12px;">Error cargando pago</span>')
            }
    }
      , E = v => typeof v != "number" ? "N/A" : v % 1 !== 0 ? v.toFixed(2) : v.toLocaleString("es-ES");
    return b.jsxs("div", {
        className: "planes-suscripcion-container",
        children: [b.jsx("h2", {
            className: "planes-titulo",
            children: "Elige tu Plan WAI"
        }), b.jsxs("p", {
            className: "planes-subtitulo",
            children: ["Precio exclusivo para ", e.nombre]
        }), b.jsxs("div", {
            className: "planes-grid",
            children: [b.jsxs("div", {
                className: "plan-card",
                children: [b.jsx("h3", {
                    className: "plan-nombre",
                    children: "Plan Mensual"
                }), b.jsxs("div", {
                    className: "plan-precio",
                    children: [b.jsx("span", {
                        className: "simbolo-moneda",
                        children: e.simbolo
                    }), b.jsx("span", {
                        className: "cantidad",
                        children: E(e.mensual)
                    }), b.jsx("span", {
                        className: "codigo-moneda",
                        children: e.moneda
                    })]
                }), b.jsx("div", {
                    className: "precio-mensual-info",
                    children: "Pago recurrente cada mes"
                }), b.jsxs("ul", {
                    className: "plan-caracteristicas",
                    children: [b.jsx("li", {
                        children: "✅ 5 WhatsApps en local"
                    }), b.jsx("li", {
                        children: "✅ Plan prepago"
                    }), b.jsx("li", {
                        children: "✅ Soporte de instalación"
                    }), b.jsx("li", {
                        children: "✅ Respuestas automáticas"
                    }), b.jsx("li", {
                        children: "✅ Opciones de IA (ChatGPT, llama, Gemini)"
                    })]
                }), b.jsxs("div", {
                    style: {
                        minHeight: "60px",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    },
                    children: [r && b.jsx("div", {
                        className: "breathing",
                        children: "Cargando..."
                    }), !r && c && b.jsxs("div", {
                        className: "bold-overlay",
                        children: [b.jsx("div", {
                            className: "spinner-bold"
                        }), b.jsx("span", {
                            className: "texto-bold-loading",
                            children: "Cargando pago seguro de Bold..."
                        })]
                    }), b.jsx("div", {
                        ref: h,
                        style: {
                            display: r ? "none" : "flex",
                            width: "100%",
                            justifyContent: "center"
                        }
                    })]
                })]
            }), b.jsxs("div", {
                className: "plan-card plan-destacado",
                children: [b.jsx("div", {
                    className: "etiqueta-popular",
                    children: "ACCESO VITALICIO"
                }), b.jsx("div", {
                    className: "banda-descuento",
                    children: "MEJOR OPCIÓN"
                }), b.jsx("h3", {
                    className: "plan-nombre",
                    children: "Plan Ilimitado"
                }), b.jsxs("div", {
                    className: "plan-precio",
                    children: [b.jsx("span", {
                        className: "simbolo-moneda",
                        children: e.simbolo
                    }), b.jsx("span", {
                        className: "cantidad",
                        children: E(e.vitalicio)
                    }), b.jsx("span", {
                        className: "codigo-moneda",
                        children: e.moneda
                    })]
                }), b.jsx("div", {
                    className: "precio-mensual-info",
                    children: b.jsx("strong", {
                        children: "Un único pago para siempre"
                    })
                }), b.jsxs("ul", {
                    className: "plan-caracteristicas",
                    children: [b.jsxs("li", {
                        children: ["💎 ", b.jsx("strong", {
                            children: "Acceso al programa de reventa"
                        })]
                    }), b.jsx("li", {
                        children: "✅ 5 WhatsApps en local"
                    }), b.jsxs("li", {
                        children: ["✅ ", b.jsx("strong", {
                            children: "Acceso de por vida"
                        })]
                    }), b.jsx("li", {
                        children: "✅ 6 meses de Actualizaciones incluidas"
                    }), b.jsx("li", {
                        children: "✅ Soporte de instalación"
                    }), b.jsx("li", {
                        children: "✅ IA gratuita o paga (ChatGPT, Llama, Gemini)"
                    })]
                }), b.jsxs("div", {
                    style: {
                        minHeight: "60px",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    },
                    children: [r && b.jsx("div", {
                        className: "breathing",
                        children: "Cargando..."
                    }), !r && c && b.jsxs("div", {
                        className: "bold-overlay",
                        children: [b.jsx("div", {
                            className: "spinner-bold"
                        }), b.jsx("span", {
                            className: "texto-bold-loading",
                            children: "Cargando pago seguro de Bold..."
                        })]
                    }), b.jsx("div", {
                        ref: p,
                        style: {
                            display: r ? "none" : "flex",
                            width: "100%",
                            justifyContent: "center"
                        }
                    })]
                })]
            })]
        }), b.jsx("p", {
            className: "garantia-texto",
            children: "💚 7 días de garantía de devolución • Sin compromisos • Pagos seguros vía Bold"
        })]
    })
}
  , $O = () => {
    const {usuario: s} = ls()
      , [e,i] = N.useState("inicio")
      , [r,o] = N.useState(!1)
      , [c,d] = N.useState(!1)
      , h = "https://crm.jhllegalgroup.com"
      , p = async () => {
        if (!s)
            throw new Error("No hay usuario autenticado");
        return await s.getIdToken(!0)
    }
      , m = async () => {
        if (s)
            try {
                const E = await p()
                  , v = await fetch(`${h}/api/bienvenida`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${E}`,
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "true"
                    }
                });
                if (v.ok) {
                    const x = await v.json();
                    x.acciones && (x.acciones.clienteCreado || x.acciones.parametroCreado) && (o(!0),
                    setTimeout( () => o(!1), 5e3)),
                    d(!0)
                }
            } catch (E) {
                console.error("Error procesando bienvenida:", E),
                d(!0)
            }
    }
    ;
    N.useEffect( () => {
        s && m()
    }
    , [s]);
    const y = () => {
        if (!c)
            return b.jsxs("div", {
                className: "loading-container-panel",
                children: [b.jsx("div", {
                    className: "loading-spinner"
                }), b.jsx("p", {
                    children: "Cargando tu panel..."
                })]
            });
        switch (e) {
        case "inicio":
            return b.jsx("div", {
                className: "dashboard-inicio",
                children: b.jsxs("div", {
                    className: "main-card",
                    children: [b.jsx("div", {
                        className: "seccion-feed",
                        children: b.jsx(FO, {})
                    }), b.jsx("div", {
                        className: "separador-panel"
                    }), b.jsxs("div", {
                        className: "seccion-accion",
                        children: [b.jsx("h3", {
                            className: "titulo-accion",
                            children: "¿Listo para empezar?"
                        }), b.jsx("p", {
                            className: "texto-accion",
                            children: "Adquiere tu licencia oficial para desbloquear todas las funciones de WAI."
                        }), b.jsxs("button", {
                            onClick: () => i("reventa"),
                            className: "btn-comprar-panel",
                            children: [b.jsx("span", {
                                className: "icono-btn",
                                children: "💼"
                            }), b.jsxs("div", {
                                className: "texto-btn-columna",
                                children: [b.jsx("span", {
                                    className: "texto-principal",
                                    children: "Comprar Licencia"
                                }), b.jsx("span", {
                                    className: "texto-secundario",
                                    children: "Ver planes disponibles"
                                })]
                            })]
                        })]
                    })]
                })
            });
        case "reventa":
            return b.jsx("div", {
                className: "contenido-contenedor",
                children: b.jsx(WO, {})
            });
        case "facturacion":
            return b.jsx("div", {
                className: "contenido-contenedor",
                children: b.jsx(XO, {})
            });
        default:
            return null
        }
    }
    ;
    return b.jsxs("div", {
        className: "app-layout",
        children: [b.jsx(QO, {
            establecerPaginaActiva: i,
            paginaActiva: e
        }), b.jsxs("main", {
            className: "main-content",
            children: [y(), r && b.jsxs("div", {
                className: "toast-bienvenida",
                children: [b.jsx("div", {
                    className: "toast-icon",
                    children: "🎉"
                }), b.jsxs("div", {
                    className: "toast-text",
                    children: [b.jsx("h4", {
                        children: "¡Bienvenido a WAI!"
                    }), b.jsxs("p", {
                        children: ["Tienes ", b.jsx("strong", {
                            children: "2 días"
                        }), " de prueba gratis."]
                    })]
                }), b.jsx("button", {
                    onClick: () => o(!1),
                    className: "toast-close",
                    children: "✕"
                })]
            })]
        })]
    })
}
  , ZO = ({children: s}) => {
    const {estaAutenticado: e, cargando: i} = ls();
    return i ? b.jsx("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "2rem",
            color: "var(--color-primary)"
        },
        children: "Cargando..."
    }) : e ? s : b.jsx(FT, {
        to: "/"
    })
}
;
function JO() {
    return b.jsx(vC, {
        children: b.jsx(VO, {
            children: b.jsxs(QT, {
                children: [b.jsx(td, {
                    path: "/",
                    element: b.jsx(YO, {})
                }), b.jsx(td, {
                    path: "/panel",
                    element: b.jsx(ZO, {
                        children: b.jsx($O, {})
                    })
                })]
            })
        })
    })
}
nT.createRoot(document.getElementById("root")).render(b.jsx(QS.StrictMode, {
    children: b.jsx(JO, {})
}));
