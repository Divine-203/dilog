/*!
* fullPage 4.0.11
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/ !function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).fullpage = t();
}(this, function() {
    "use strict";
    var n, t, e, i;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this), e = t.length >>> 0;
            if ("function" != typeof n) throw new TypeError("predicate must be a function");
            for(var i = arguments[1], o = 0; o < e;){
                var r = t[o];
                if (n.call(i, r, o, t)) return r;
                o++;
            }
        }
    }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t) {
        return "function" == typeof t || "[object Function]" === n.call(t);
    }, e = Math.pow(2, 53) - 1, i = function(n) {
        var t = function(n) {
            var t = Number(n);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t;
        }(n);
        return Math.min(Math.max(t, 0), e);
    }, function(n) {
        var e = this, o = Object(n);
        if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var r, a = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== a) {
            if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2]);
        }
        for(var u, l = i(o.length), c = t(e) ? Object(new e(l)) : new Array(l), s = 0; s < l;)u = o[s], c[s] = a ? void 0 === r ? a(u, s) : a.call(r, u, s) : u, s += 1;
        return c.length = l, c;
    }));
    var o = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), u = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent), l = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, c = !!window.MSInputMethodContext && !!document.documentMode, s = {
        test: {},
        shared: {}
    }, f = [
        "parallax",
        "scrollOverflowReset",
        "dragAndMove",
        "offsetSections",
        "fadingEffect",
        "responsiveSlides",
        "continuousHorizontal",
        "interlockedSlides",
        "scrollHorizontally",
        "resetSliders",
        "cards",
        "dropEffect",
        "waterEffect"
    ];
    function v(n, t) {
        o.console && o.console[n] && o.console[n]("fullPage: " + t);
    }
    function d(n) {
        return "none" !== o.getComputedStyle(n).display;
    }
    function h(n) {
        return Array.from(n).filter(function(n) {
            return d(n);
        });
    }
    function p(n, t) {
        return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(n) : null;
    }
    function g(n) {
        n = n || {};
        for(var t = 1, e = arguments.length; t < e; ++t){
            var i = arguments[t];
            if (i) for(var o in i)i.hasOwnProperty(o) && "__proto__" != o && "constructor" != o && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? n[o] = i[o] : n[o] = g(n[o], i[o]));
        }
        return n;
    }
    function m(n, t) {
        return null != n && n.classList.contains(t);
    }
    function w() {
        return "innerHeight" in o ? o.innerHeight : r.documentElement.offsetHeight;
    }
    function b() {
        return o.innerWidth;
    }
    function y(n, t) {
        var e;
        for(e in n = x(n), t)if (t.hasOwnProperty(e) && null !== e) for(var i = 0; i < n.length; i++)n[i].style[e] = t[e];
        return n;
    }
    function S(n) {
        return n.previousElementSibling;
    }
    function T(n) {
        return n.nextElementSibling;
    }
    function M(n) {
        return n[n.length - 1];
    }
    function A(n, t) {
        n = E(n) ? n[0] : n;
        for(var e = null != t ? p(t, n.parentNode) : n.parentNode.childNodes, i = 0, o = 0; o < e.length; o++){
            if (e[o] == n) return i;
            1 == e[o].nodeType && i++;
        }
        return -1;
    }
    function x(n) {
        return E(n) ? n : [
            n
        ];
    }
    function O(n) {
        n = x(n);
        for(var t = 0; t < n.length; t++)n[t].style.display = "none";
        return n;
    }
    function k(n) {
        n = x(n);
        for(var t = 0; t < n.length; t++)n[t].style.display = "block";
        return n;
    }
    function E(n) {
        return "[object Array]" === Object.prototype.toString.call(n) || "[object NodeList]" === Object.prototype.toString.call(n);
    }
    function D(n, t) {
        n = x(n);
        for(var e = 0; e < n.length; e++)n[e].classList.add(t);
        return n;
    }
    function j(n, t) {
        n = x(n);
        for(var e = t.split(" "), i = 0; i < e.length; i++){
            t = e[i];
            for(var o = 0; o < n.length; o++)n[o].classList.remove(t);
        }
        return n;
    }
    function L(n, t) {
        t.appendChild(n);
    }
    function R(n, t, e) {
        var i;
        t = t || r.createElement("div");
        for(var o = 0; o < n.length; o++){
            var a = n[o];
            (e && !o || !e) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a);
        }
        return n;
    }
    function P(n, t) {
        R(n, t, !0);
    }
    function C(n, t) {
        for(n.appendChild(t); n.firstChild !== t;)t.appendChild(n.firstChild);
    }
    function z(n) {
        for(var t = r.createDocumentFragment(); n.firstChild;)t.appendChild(n.firstChild);
        n.parentNode.replaceChild(t, n);
    }
    function F(n, t) {
        return n && 1 === n.nodeType ? Q(n, t) ? n : F(n.parentNode, t) : null;
    }
    function N(n, t) {
        I(n, n.nextSibling, t);
    }
    function B(n, t) {
        I(n, n, t);
    }
    function I(n, t, e) {
        E(e) || ("string" == typeof e && (e = J(e)), e = [
            e
        ]);
        for(var i = 0; i < e.length; i++)n.parentNode.insertBefore(e[i], t);
    }
    function H() {
        var n = r.documentElement;
        return (o.pageYOffset || n.scrollTop) - (n.clientTop || 0);
    }
    function W(n) {
        return Array.prototype.filter.call(n.parentNode.children, function(t) {
            return t !== n;
        });
    }
    function V(n) {
        n.preventDefault();
    }
    function U(n, t) {
        return n.getAttribute(t);
    }
    function _(n, t, e) {
        r.addEventListener(n, t, "undefined" === e ? null : e);
    }
    function K(n, t, e) {
        o.addEventListener(n, t, "undefined" === e ? null : e);
    }
    function G(n, t, e) {
        r.removeEventListener(n, t, "undefined" === e ? null : e);
    }
    function q(n, t, e) {
        o.removeEventListener(n, t, "undefined" === e ? null : e);
    }
    function Y(n) {
        if ("function" == typeof n) return !0;
        var t = Object.prototype.toString.call(n);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
    }
    function $(n, t, e) {
        var i;
        e = void 0 === e ? {} : e, "function" == typeof o.CustomEvent ? i = new CustomEvent(t, {
            detail: e
        }) : (i = r.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, e), n.dispatchEvent(i);
    }
    function Q(n, t) {
        return (n.matches || n.t || n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector).call(n, t);
    }
    function X(n, t) {
        if ("boolean" == typeof t) for(var e = 0; e < n.length; e++)n[e].style.display = t ? "block" : "none";
        return n;
    }
    function J(n) {
        var t = r.createElement("div");
        return t.innerHTML = n.trim(), t.firstChild;
    }
    function Z(n) {
        n = x(n);
        for(var t = 0; t < n.length; t++){
            var e = n[t];
            e && e.parentElement && e.parentNode.removeChild(e);
        }
    }
    function nn(n, t, e) {
        for(var i = n[e], o = []; i;)(Q(i, t) || null == t) && o.push(i), i = i[e];
        return o;
    }
    function tn(n, t) {
        return nn(n, t, "nextElementSibling");
    }
    function en(n, t) {
        return nn(n, t, "previousElementSibling");
    }
    function on(n) {
        return Object.keys(n).map(function(t) {
            return n[t];
        });
    }
    function rn(n) {
        return n[n.length - 1];
    }
    function an(n, t) {
        for(var e = 0, i = n.slice(Math.max(n.length - t, 1)), o = 0; o < i.length; o++)e += i[o];
        return Math.ceil(e / t);
    }
    function un(n, t) {
        n.setAttribute(t, U(n, "data-" + t)), n.removeAttribute("data-" + t);
    }
    function ln(n, t) {
        var e = [
            n
        ];
        do n = n.parentNode, e.push(n);
        while (!Q(n, t));
        return e;
    }
    o.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n, t) {
        t = t || window;
        for(var e = 0; e < this.length; e++)n.call(t, this[e], e, this);
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(n, t) {
            if (null == n) throw new TypeError("Cannot convert undefined or null to object");
            for(var e = Object(n), i = 1; i < arguments.length; i++){
                var o = arguments[i];
                if (null != o) for(var r in o)Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
        },
        writable: !0,
        i: !0
    }), String.prototype.padStart || (String.prototype.padStart = function(n, t) {
        return n >>= 0, t = String(void 0 !== t ? t : " "), this.length > n ? String(this) : ((n -= this.length) > t.length && (t += Array.apply(null, Array(n)).map(function() {
            return t;
        }).join("")), t.slice(0, n) + String(this));
    }), window.fp_utils = {
        $: p,
        deepExtend: g,
        hasClass: m,
        getWindowHeight: w,
        css: y,
        prev: S,
        next: T,
        last: M,
        index: A,
        getList: x,
        hide: O,
        show: k,
        isArrayOrList: E,
        addClass: D,
        removeClass: j,
        appendTo: L,
        wrap: R,
        wrapAll: P,
        unwrap: z,
        closest: F,
        after: N,
        before: B,
        insertBefore: I,
        getScrollTop: H,
        siblings: W,
        preventDefault: V,
        isFunction: Y,
        trigger: $,
        matches: Q,
        toggle: X,
        createElementFromHTML: J,
        remove: Z,
        untilAll: nn,
        nextAll: tn,
        prevAll: en,
        showError: v
    };
    var cn = Object.freeze({
        __proto__: null,
        showError: v,
        isVisible: d,
        o: h,
        $: p,
        deepExtend: g,
        hasClass: m,
        getWindowHeight: w,
        u: b,
        css: y,
        prev: S,
        next: T,
        last: M,
        index: A,
        getList: x,
        hide: O,
        show: k,
        isArrayOrList: E,
        addClass: D,
        removeClass: j,
        appendTo: L,
        wrap: R,
        wrapAll: P,
        l: C,
        unwrap: z,
        closest: F,
        after: N,
        before: B,
        insertBefore: I,
        getScrollTop: H,
        siblings: W,
        preventDefault: V,
        v: U,
        h: _,
        p: K,
        g: G,
        S: q,
        isFunction: Y,
        trigger: $,
        matches: Q,
        toggle: X,
        createElementFromHTML: J,
        remove: Z,
        untilAll: nn,
        nextAll: tn,
        prevAll: en,
        toArray: on,
        T: rn,
        M: an,
        A: un,
        O: ln
    });
    function sn(n) {
        return sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, sn(n);
    }
    var fn = {
        D: {},
        j: function(n, t) {
            var e = this;
            return "object" !== sn(this.D[n]) && (this.D[n] = []), this.D[n].push(t), function() {
                return e.removeListener(n, t);
            };
        },
        removeListener: function(n, t) {
            if ("object" === sn(this.D[n])) {
                var e = this.D[n].indexOf(t);
                e > -1 && this.D[n].splice(e, 1);
            }
        },
        L: function(n) {
            for(var t = this, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)i[o - 1] = arguments[o];
            "object" === sn(this.D[n]) && this.D[n].forEach(function(n) {
                return n.apply(t, i);
            });
        },
        once: function(n, t) {
            var e = this, i = this.j(n, function() {
                i();
                for(var n = arguments.length, o = new Array(n), r = 0; r < n; r++)o[r] = arguments[r];
                t.apply(e, o);
            });
        }
    }, vn = {
        R: 0,
        P: 0,
        slides: [],
        C: [],
        F: null,
        N: null,
        B: !1,
        I: !1,
        H: !1,
        W: !1,
        V: !1,
        U: void 0,
        _: void 0,
        K: !1,
        G: !0,
        q: "none",
        Y: "none",
        X: !1,
        J: !1,
        Z: !0,
        nn: 0,
        tn: w(),
        en: !1,
        on: {},
        scrollY: 0,
        scrollX: 0
    };
    function dn(n) {
        Object.assign(vn, n);
    }
    function hn() {
        return vn;
    }
    function pn(n) {
        fn.L("onClickOrTouch", {
            e: n,
            target: n.target
        });
    }
    function gn() {
        [
            "click",
            "touchstart"
        ].forEach(function(n) {
            G(n, pn);
        });
    }
    function mn() {
        dn({
            Z: !0
        });
    }
    o.state = vn, fn.j("bindEvents", function() {
        [
            "click",
            "touchstart"
        ].forEach(function(n) {
            _(n, pn);
        }), K("focus", mn), fn.j("onDestroy", gn);
    });
    var wn = "fullpage-wrapper", bn = "." + wn, yn = "fp-responsive", Sn = "fp-notransition", Tn = "fp-destroyed", Mn = "fp-enabled", An = "active", xn = ".active", On = "fp-completely", kn = "fp-section", En = "." + kn, Dn = ".fp-tableCell", jn = "#fp-nav", Ln = "fp-slide", Rn = "." + Ln, Pn = ".fp-slide.active", Cn = "fp-slides", zn = ".fp-slides", Fn = "fp-slidesContainer", Nn = "." + Fn, Bn = "fp-table", In = "fp-overflow", Hn = "." + In, Wn = "fp-is-overflow", Vn = ".fp-slidesNav", Un = ".fp-slidesNav a", _n = "fp-controlArrow", Kn = "." + _n, Gn = "fp-prev", qn = ".fp-controlArrow.fp-prev", Yn = ".fp-controlArrow.fp-next", $n = {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        licenseKey: "",
        credits: {
            enabled: !0,
            label: "Made with fullPage.js",
            position: "right"
        },
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        rn: 600,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !0,
        scrollOverflowReset: !1,
        touchSensitivity: 5,
        touchWrapper: null,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        allowCorrectDirection: !1,
        scrollOverflowMacStyle: !0,
        controlArrows: !0,
        controlArrowsHTML: [
            '<div class="fp-arrow"></div>',
            '<div class="fp-arrow"></div>'
        ],
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
            type: "reveal",
            percentage: 62,
            property: "translate"
        },
        cards: !1,
        cardsOptions: {
            perspective: 100,
            fadeContent: !0,
            fadeBackground: !0
        },
        sectionSelector: ".section",
        slideSelector: ".slide",
        afterLoad: null,
        beforeLeave: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        onScrollOverflow: null,
        lazyLoading: !0,
        observer: !0
    }, Qn = null, Xn = !1, Jn = g({}, $n), Zn = null;
    function nt(n) {
        return Qn;
    }
    function tt() {
        return Zn || $n;
    }
    function et() {
        return Jn;
    }
    function it(n, t, e) {
        Zn[n] = t, "internal" !== e && (Jn[n] = t);
    }
    function ot() {
        if (!tt().anchors.length) {
            var n = p(tt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Qn);
            n.length && n.length === p(tt().sectionSelector, Qn).length && (Xn = !0, n.forEach(function(n) {
                tt().anchors.push(U(n, "data-anchor").toString());
            }));
        }
        if (!tt().navigationTooltips.length) {
            var t = p(tt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Qn);
            t.length && t.forEach(function(n) {
                tt().navigationTooltips.push(U(n, "data-tooltip").toString());
            });
        }
    }
    var rt = function(n) {
        this.anchor = n.anchor, this.item = n.item, this.index = n.index(), this.isLast = this.index === n.item.parentElement.querySelectorAll(n.selector).length - 1, this.isFirst = !this.index, this.isActive = n.isActive;
    }, at = function(n, t) {
        this.parent = this.parent || null, this.selector = t, this.anchor = U(n, "data-anchor") || tt().anchors[A(n, tt().sectionSelector)], this.item = n, this.isVisible = d(n), this.isActive = m(n, An), this.an = m(n, In) || null != p(Hn, n)[0], this.un = t === tt().sectionSelector, this.ln = F(n, Nn) || F(n, bn), this.index = function() {
            return this.siblings().indexOf(this);
        };
    };
    function ut(n) {
        return n.map(function(n) {
            return n.item;
        });
    }
    function lt(n, t) {
        return n.find(function(n) {
            return n.item === t;
        });
    }
    at.prototype.siblings = function() {
        return this.un ? this.isVisible ? vn.C : vn.cn : this.parent ? this.parent.slides : 0;
    }, at.prototype.prev = function() {
        var n = this.siblings(), t = (this.un ? n.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
        return t >= 0 ? n[t] : null;
    }, at.prototype.next = function() {
        var n = this.siblings(), t = (this.un ? n.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
        return t < n.length ? n[t] : null;
    }, at.prototype.prevPanel = function() {
        return this.prev() || (this.parent ? this.parent.prev() : null);
    }, at.prototype.nextPanel = function() {
        return this.next() || (this.parent ? this.parent.next() : null);
    }, at.prototype.sn = function() {
        return this.un ? vn.C : vn.vn;
    };
    var ct, st = function(n) {
        rt.call(this, n);
    }, ft = function(n) {
        rt.call(this, n);
    };
    function vt(n) {
        var t = p(Pn, n);
        return t.length && (n = t[0]), n;
    }
    function dt(n) {
        return n ? n.activeSlide ? n.activeSlide : n : null;
    }
    function ht(n) {
        var t, e, i = tt();
        return i.autoScrolling && !i.scrollBar ? (t = -n, e = p(bn)[0]) : (t = n, e = window), {
            options: t,
            element: e
        };
    }
    function pt(n, t) {
        !tt().autoScrolling || tt().scrollBar || n.self != window && m(n, Cn) ? n.self != window && m(n, Cn) ? n.scrollLeft = t : n.scrollTo(0, t) : n.style.top = t + "px";
    }
    function gt(n) {
        var t = "transform " + tt().scrollingSpeed + "ms " + tt().easingcss3;
        return j(n, Sn), y(n, {
            "-webkit-transition": t,
            transition: t
        });
    }
    function mt(n, t) {
        var e = n.index(), i = A(t, En);
        return e == i ? "none" : e > i ? "up" : "down";
    }
    function wt(n) {
        return D(n, Sn);
    }
    function bt(n) {
        return {
            "-webkit-transform": n,
            "-moz-transform": n,
            "-ms-transform": n,
            transform: n
        };
    }
    function yt(n, t) {
        t ? gt(nt()) : wt(nt()), clearTimeout(ct), y(nt(), bt(n)), s.test.dn = n, ct = setTimeout(function() {
            j(nt(), Sn);
        }, 10);
    }
    function St(n) {
        var t = Math.round(n);
        if (tt().css3 && tt().autoScrolling && !tt().scrollBar) yt("translate3d(0px, -" + t + "px, 0px)", !1);
        else if (tt().autoScrolling && !tt().scrollBar) y(nt(), {
            top: -t + "px"
        }), s.test.top = -t + "px";
        else {
            var e = ht(t);
            pt(e.element, e.options);
        }
    }
    function Tt(n, t) {
        it("scrollingSpeed", n, t);
    }
    s.setScrollingSpeed = Tt;
    var Mt, At = null, xt = null, Ot = null;
    function kt(n, t, e, i) {
        var r, a = function(n) {
            return n.self != o && m(n, Cn) ? n.scrollLeft : !tt().autoScrolling || tt().scrollBar ? H() : n.offsetTop;
        }(n), u = t - a, l = !1, c = vn.K;
        dn({
            K: !0
        }), Mt && window.cancelAnimationFrame(Mt), Mt = function(s) {
            r || (r = s);
            var f = Math.floor(s - r);
            if (vn.K) {
                var v = t;
                e && (v = o.fp_easings[tt().easing](f, a, u, e)), f <= e && pt(n, v), f < e ? window.requestAnimationFrame(Mt) : void 0 === i || l || (i(), dn({
                    K: !1
                }), l = !0);
            } else l || c || (i(), dn({
                K: !1
            }), l = !0);
        }, window.requestAnimationFrame(Mt);
    }
    function Et(n) {
        return n && !n.item ? new st(new je(n)) : n ? new st(n) : null;
    }
    function Dt(n) {
        return n ? new ft(n) : null;
    }
    function jt(n, t) {
        var e = function(n, t) {
            var e = {
                afterRender: function() {
                    return {
                        section: Et(hn().F),
                        hn: Dt(hn().F.activeSlide)
                    };
                },
                onLeave: function() {
                    return {
                        origin: Et(t.items.origin),
                        destination: Et(t.items.destination),
                        direction: t.direction,
                        trigger: hn().N
                    };
                },
                afterLoad: function() {
                    return e.onLeave();
                },
                afterSlideLoad: function() {
                    return {
                        section: Et(t.items.section),
                        origin: Et(t.items.origin),
                        destination: Et(t.items.destination),
                        direction: t.direction,
                        trigger: hn().N
                    };
                },
                onSlideLeave: function() {
                    return e.afterSlideLoad();
                },
                beforeLeave: function() {
                    return e.onLeave();
                },
                onScrollOverflow: function() {
                    return {
                        section: Et(hn().F),
                        hn: Dt(hn().F.activeSlide),
                        position: t.position,
                        direction: t.direction
                    };
                }
            };
            return e[n]();
        }(n, t);
        return $(nt(), n, e), !1 !== tt()[n].apply(e[Object.keys(e)[0]], on(e));
    }
    function Lt(n) {
        var t = vt(n);
        p("video, audio", t).forEach(function(n) {
            n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
        }), p('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
            n.hasAttribute("data-autoplay") && Rt(n), n.onload = function() {
                n.hasAttribute("data-autoplay") && Rt(n);
            };
        });
    }
    function Rt(n) {
        n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function Pt(n) {
        var t = vt(n);
        p("video, audio", t).forEach(function(n) {
            n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
        }), p('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
            /youtube\.com\/embed\//.test(U(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        });
    }
    function Ct(n) {
        tt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", vt(n)).forEach(function(n) {
            if ([
                "src",
                "srcset"
            ].forEach(function(t) {
                var e = U(n, "data-" + t);
                null != e && e && (un(n, t), n.addEventListener("load", function() {}));
            }), Q(n, "source")) {
                var t = F(n, "video, audio");
                t && (t.load(), t.onloadeddata = function() {});
            }
        });
    }
    function zt() {
        var n = hn().F.item, t = hn().F.activeSlide, e = Ft(n), i = String(e);
        t && (i = i + "-" + Ft(t.item)), i = i.replace("/", "-").replace("#", "");
        var o = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
        At.className = At.className.replace(o, ""), D(At, "fp-viewing-" + i);
    }
    function Ft(n) {
        if (!n) return null;
        var t = U(n, "data-anchor"), e = A(n);
        return null == t && (t = e), t;
    }
    function Nt(n, t, e) {
        var i = "";
        tt().anchors.length && !tt().lockAnchors && (n ? (null != e && (i = e), null == t && (t = n), dn({
            _: t
        }), Bt(i + "/" + t)) : null != n ? (dn({
            _: t
        }), Bt(e)) : Bt(e)), zt();
    }
    function Bt(n) {
        if (tt().recordHistory) location.hash = n;
        else if (a || l) o.history.replaceState(void 0, void 0, "#" + n);
        else {
            var t = o.location.href.split("#")[0];
            o.location.replace(t + "#" + n);
        }
    }
    function It(n, t, e) {
        var i = "Section" === t ? tt().anchors[n] : U(e, "data-anchor");
        return encodeURI(tt().navigationTooltips[n] || i || t + " " + (n + 1));
    }
    function Ht(n) {
        V(n), dn({
            N: "horizontalNav"
        });
        var t = F(this, En), e = p(zn, F(this, En))[0], i = lt(hn().C, t).slides[A(F(this, "li"))];
        fn.L("landscapeScroll", {
            slides: e,
            destination: i.item
        });
    }
    var Wt, Vt = {};
    function Ut(n, t, e) {
        "all" !== t ? Vt[e][t] = n : Object.keys(Vt[e]).forEach(function(t) {
            Vt[e][t] = n;
        });
    }
    function _t() {
        return Vt;
    }
    function Kt() {
        var n = F(this, En);
        m(this, Gn) ? _t().m.left && (dn({
            N: "slideArrow"
        }), fn.L("moveSlideLeft", {
            section: n
        })) : _t().m.right && (dn({
            N: "slideArrow"
        }), fn.L("moveSlideRight", {
            section: n
        }));
    }
    function Gt() {
        clearTimeout(Wt);
    }
    function qt(n, t, e) {
        var i, o, r = F(n, En), a = hn().C.filter(function(n) {
            return n.item == r;
        })[0], u = a.slides.filter(function(n) {
            return n.item == t;
        })[0], l = {
            slides: n,
            destiny: t,
            direction: e,
            destinyPos: {
                left: t.offsetLeft
            },
            slideIndex: u.index(),
            section: r,
            sectionIndex: a.index(),
            anchorLink: a.anchor,
            slidesNav: p(Vn, r)[0],
            slideAnchor: u.anchor,
            prevSlide: a.activeSlide.item,
            prevSlideIndex: a.activeSlide.index(),
            items: {
                section: a,
                origin: a.activeSlide,
                destination: u
            },
            localIsResizing: vn.W
        };
        l.pn = (i = l.prevSlideIndex, o = l.slideIndex, i == o ? "none" : i > o ? "left" : "right"), l.direction = l.direction ? l.direction : l.pn, l.localIsResizing || dn({
            G: !1
        }), tt().onSlideLeave && !l.localIsResizing && "none" !== l.pn && Y(tt().onSlideLeave) && !1 === jt("onSlideLeave", l) ? dn({
            H: !1
        }) : (D(t, An), j(W(t), An), Oe(), l.localIsResizing || (Pt(l.prevSlide), Ct(t)), function(n) {
            !tt().loopHorizontal && tt().controlArrows && (X(p(qn, n.section), 0 !== n.slideIndex), X(p(Yn, n.section), null != T(n.destiny)));
        }(l), a.isActive && !l.localIsResizing && Nt(l.slideIndex, l.slideAnchor, l.anchorLink), function(n, t, e) {
            var i, o, r = t.destinyPos;
            if (i = t.slidesNav, o = t.slideIndex, tt().slidesNavigation && null != i && (j(p(xn, i), An), D(p("a", p("li", i)[o]), An)), dn({
                scrollX: Math.round(r.left)
            }), tt().css3) {
                var a = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                s.test.gn[t.sectionIndex] = a, y(gt(p(Nn, n)), bt(a)), clearTimeout(Wt), Wt = setTimeout(function() {
                    $t(t);
                }, tt().scrollingSpeed);
            } else s.test.left[t.sectionIndex] = Math.round(r.left), kt(n, Math.round(r.left), tt().scrollingSpeed, function() {
                $t(t);
            });
        }(n, l));
    }
    function Yt() {
        clearTimeout(Wt);
    }
    function $t(n) {
        n.localIsResizing || (Y(tt().afterSlideLoad) && jt("afterSlideLoad", n), dn({
            G: !0
        }), Lt(n.destiny), fn.L("afterSlideLoads", n)), dn({
            H: !1
        });
    }
    function Qt(n, t) {
        Tt(0, "internal"), void 0 !== t && dn({
            W: !0
        }), qt(F(n, zn), n), void 0 !== t && dn({
            W: !1
        }), Tt(et().scrollingSpeed, "internal");
    }
    function Xt(n, t) {
        it("recordHistory", n, t);
    }
    function Jt(n, t) {
        n || St(0), it("autoScrolling", n, t);
        var e = hn().F.item;
        if (tt().autoScrolling && !tt().scrollBar) y(Ot, {
            overflow: "hidden",
            height: "100%"
        }), j(At, "fp-scrollable"), Xt(et().recordHistory, "internal"), y(nt(), {
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), null != e && St(e.offsetTop);
        else if (y(Ot, {
            overflow: "visible",
            height: "initial"
        }), D(At, "fp-scrollable"), Xt(!!tt().autoScrolling && et().recordHistory, "internal"), y(nt(), {
            "-ms-touch-action": "",
            "touch-action": ""
        }), null != e) {
            var i = ht(e.offsetTop);
            i.element.scrollTo(0, i.options);
        }
    }
    function Zt() {
        var n = p(".fp-auto-height")[0] || we() && p(".fp-auto-height-responsive")[0];
        tt().lazyLoading && n && p(".fp-section:not(.active)").forEach(function(n) {
            var t, e, i, o, r;
            e = (t = n.getBoundingClientRect()).top, i = t.bottom, o = e + 2 < vn.tn && e > 0, r = i > 2 && i < vn.tn, (o || r) && Ct(n);
        });
    }
    function ne() {
        $(S(this), "click");
    }
    function te() {
        Z(p(jn));
        var n = r.createElement("div");
        n.setAttribute("id", "fp-nav");
        var t = r.createElement("ul");
        n.appendChild(t), L(n, At);
        var e = p(jn)[0];
        D(e, "fp-" + tt().navigationPosition), tt().showActiveTooltip && D(e, "fp-show-active");
        for(var i = "", o = 0; o < hn().C.length; o++){
            var a = hn().C[o], u = "";
            tt().anchors.length && (u = a.anchor), i += '<li><a href="#' + encodeURI(u) + '"><span class="fp-sr-only">' + It(a.index(), "Section") + "</span><span></span></a>";
            var l = tt().navigationTooltips[a.index()];
            void 0 !== l && "" !== l && (i += '<div class="fp-tooltip fp-' + tt().navigationPosition + '">' + l + "</div>"), i += "</li>";
        }
        p("ul", e)[0].innerHTML = i;
        var c = p("li", p(jn)[0])[hn().F.index()];
        D(p("a", c), An);
    }
    function ee(n) {
        n.preventDefault && V(n), dn({
            N: "verticalNav"
        });
        var t = A(F(this, "#fp-nav li"));
        fn.L("scrollPage", {
            destination: hn().C[t]
        });
    }
    function ie(n, t) {
        var e;
        e = n, tt().menu && tt().menu.length && p(tt().menu).forEach(function(n) {
            null != n && (j(p(xn, n), An), D(p('[data-menuanchor="' + e + '"]', n), An));
        }), function(n, t) {
            var e = p(jn)[0];
            tt().navigation && null != e && "none" !== e.style.display && (j(p(xn, e), An), D(n ? p('a[href="#' + n + '"]', e) : p("a", p("li", e)[t]), An));
        }(n, t);
    }
    Vt.m = {
        up: !0,
        down: !0,
        left: !0,
        right: !0
    }, Vt.k = g({}, Vt.m), fn.j("onClickOrTouch", function(n) {
        var t = n.target;
        (Q(t, Kn) || F(t, Kn)) && Kt.call(t, n);
    }), s.landscapeScroll = qt, fn.j("bindEvents", function() {
        fn.j("onPerformMovement", Gt);
    }), s.setRecordHistory = Xt, s.setAutoScrolling = Jt, s.test.setAutoScrolling = Jt, (new Date).getTime();
    var oe, re, ae, ue, le, ce, se = (re = !0, ae = (new Date).getTime(), ue = !o.fullpage_api, function(n, t) {
        var e = (new Date).getTime(), i = "wheel" === n ? tt().scrollingSpeed : 100;
        return re = ue || e - ae >= i, ue = !o.fullpage_api, re && (oe = t(), ae = e), void 0 === oe || oe;
    });
    function fe(n, t) {
        if (Y(tt().beforeLeave)) return se(hn().N, function() {
            return jt(n, t);
        });
    }
    function ve(n, t, e) {
        var i = n.item;
        if (null != i) {
            var o, r, a = function(n) {
                var t = n.offsetHeight, e = n.offsetTop, i = e, o = e > vn.nn, r = i - w() + t, a = tt().bigSectionsDestination;
                return t > w() ? (o || a) && "bottom" !== a || (i = r) : (o || vn.W && null == T(n)) && (i = r), dn({
                    nn: i
                }), i;
            }(i), u = {
                element: i,
                callback: t,
                isMovementUp: e,
                dtop: a,
                yMovement: mt(hn().F, i),
                anchorLink: n.anchor,
                sectionIndex: n.index(),
                activeSlide: n.activeSlide ? n.activeSlide.item : null,
                leavingSection: hn().F.index() + 1,
                localIsResizing: vn.W,
                items: {
                    origin: hn().F,
                    destination: n
                },
                direction: null
            };
            if (!(hn().F.item == i && !vn.W || tt().scrollBar && H() === u.dtop && !m(i, "fp-auto-height"))) {
                if (null != u.activeSlide && (o = U(u.activeSlide, "data-anchor"), r = A(u.activeSlide, null)), !u.localIsResizing) {
                    var l = u.yMovement;
                    if (void 0 !== e && (l = e ? "up" : "down"), u.direction = l, Y(tt().beforeLeave) && !1 === fe("beforeLeave", u)) return;
                    if (Y(tt().onLeave) && !jt("onLeave", u)) return;
                }
                tt().autoScrolling && tt().continuousVertical && void 0 !== u.isMovementUp && (!u.isMovementUp && "up" == u.yMovement || u.isMovementUp && "down" == u.yMovement) && (u = function(n) {
                    dn({
                        en: !0
                    });
                    var t = hn().F.item;
                    return n.isMovementUp ? B(t, tn(t, En)) : N(t, en(t, En).reverse()), St(hn().F.item.offsetTop), function() {
                        for(var n = p(Pn), t = 0; t < n.length; t++)Qt(n[t], "internal");
                    }(), n.mn = t, n.dtop = n.element.offsetTop, n.yMovement = mt(hn().F, n.element), n;
                }(u)), u.localIsResizing || Pt(hn().F.item), D(i, An), j(W(i), An), Oe(), Ct(i), dn({
                    G: s.test.wn
                }), Nt(r, o, u.anchorLink), function(n) {
                    var t = tt().scrollingSpeed < 700, e = t ? 700 : tt().scrollingSpeed;
                    if (dn({
                        q: "none",
                        scrollY: Math.round(n.dtop)
                    }), fn.L("onPerformMovement"), tt().css3 && tt().autoScrolling && !tt().scrollBar) yt("translate3d(0px, -" + Math.round(n.dtop) + "px, 0px)", !0), tt().scrollingSpeed ? (clearTimeout(le), le = setTimeout(function() {
                        de(n), dn({
                            G: !t || s.test.wn
                        });
                    }, tt().scrollingSpeed)) : de(n);
                    else {
                        var i = ht(n.dtop);
                        s.test.top = -n.dtop + "px", clearTimeout(le), kt(i.element, i.options, tt().scrollingSpeed, function() {
                            tt().scrollBar ? le = setTimeout(function() {
                                de(n);
                            }, 30) : (de(n), dn({
                                G: !t || s.test.wn
                            }));
                        });
                    }
                    t && (clearTimeout(ce), ce = setTimeout(function() {
                        dn({
                            G: !0
                        });
                    }, e));
                }(u), dn({
                    U: u.anchorLink
                }), ie(u.anchorLink, u.sectionIndex);
            }
        }
    }
    function de(n) {
        dn({
            B: !1
        }), function(n) {
            null != n.mn && (n.isMovementUp ? B(p(En)[0], n.mn) : N(p(En)[hn().C.length - 1], n.mn), St(hn().F.item.offsetTop), function() {
                for(var n = p(Pn), t = 0; t < n.length; t++)Qt(n[t], "internal");
            }(), dn({
                en: !1
            }));
        }(n), Y(tt().afterLoad) && !n.localIsResizing && jt("afterLoad", n), Oe(), n.localIsResizing || Lt(n.element), D(n.element, On), j(W(n.element), On), Zt(), Me.bn(), dn({
            G: !0
        }), fn.L("afterSectionLoads", n), Y(n.callback) && n.callback();
    }
    function he(n, t) {
        it("fitToSection", n, t);
    }
    function pe() {
        vn.G && (dn({
            W: !0
        }), ve(vn.F), dn({
            W: !1
        }));
    }
    function ge() {
        var n = tt().responsive || tt().responsiveWidth, t = tt().responsiveHeight, e = n && o.innerWidth < n, i = t && o.innerHeight < t;
        n && t ? me(e || i) : n ? me(e) : t && me(i);
    }
    function me(n) {
        var t = we();
        n ? t || (Jt(!1, "internal"), he(!1, "internal"), O(p(jn)), D(At, yn), Y(tt().afterResponsive) && tt().afterResponsive.call(nt(), n)) : t && (Jt(et().autoScrolling, "internal"), he(et().autoScrolling, "internal"), k(p(jn)), j(At, yn), Y(tt().afterResponsive) && tt().afterResponsive.call(nt(), n));
    }
    function we() {
        return m(At, yn);
    }
    function be(n) {
        tt().verticalCentered && (!tt().scrollOverflow && Me.yn(n.item) || Me.Sn(n) || m(n.item, Bn) || D(n.item, Bn));
    }
    s.moveTo = moveTo, s.getScrollY = function() {
        return vn.scrollY;
    }, fn.j("onDestroy", function() {
        clearTimeout(le), clearTimeout(ce);
    }), s.setFitToSection = he, s.fitToSection = pe, s.setResponsive = me;
    var ye = null;
    function Se(n) {
        var t = n.item, e = n.Tn.length, i = n.index();
        !hn().F && n.isVisible && (D(t, An), Oe()), ye = hn().F.item, tt().paddingTop && y(t, {
            "padding-top": tt().paddingTop
        }), tt().paddingBottom && y(t, {
            "padding-bottom": tt().paddingBottom
        }), void 0 !== tt().sectionsColor[i] && y(t, {
            "background-color": tt().sectionsColor[i]
        }), void 0 !== tt().anchors[i] && t.setAttribute("data-anchor", n.anchor), e || be(n);
    }
    s.getActiveSection = function() {
        return hn().F;
    }, fn.j("bindEvents", function() {
        o.addEventListener("load", function() {
            tt().scrollOverflow && !tt().scrollBar && (Me.Mn(), Me.bn());
        });
    });
    var Te, Me = {
        An: null,
        xn: null,
        On: null,
        kn: function(n) {
            if (!vn.G) return V(n), !1;
        },
        bn: function() {
            r.activeElement === this.An && this.An.blur();
            var n = Me.En(hn().F.item);
            !n || a || l || (this.An = n, this.An.focus());
        },
        Mn: function() {
            tt().scrollOverflowMacStyle && !u && D(At, "fp-scroll-mac"), hn().vn.forEach(function(n) {
                if (!(n.slides && n.slides.length || m(n.item, "fp-auto-height-responsive") && we())) {
                    var t, e = vt(n.item), i = Me.yn(n.item), o = (t = n).un ? t : t.parent;
                    if (c) {
                        var r = i ? "addClass" : "removeClass";
                        cn[r](o.item, Wn), cn[r](n.item, Wn);
                    } else D(o.item, Wn), D(n.item, Wn);
                    n.an || (Me.Dn(e), Me.jn(e)), n.an = !0;
                }
            });
        },
        jn: function(n) {
            Me.En(n).addEventListener("scroll", Me.Ln), n.addEventListener("wheel", Me.kn, {
                passive: !1
            }), n.addEventListener("keydown", Me.kn, {
                passive: !1
            });
        },
        Dn: function(n) {
            var t = document.createElement("div");
            t.className = In, C(n, t), t.setAttribute("tabindex", "-1");
        },
        Rn: function(n) {
            var t = p(Hn, n)[0];
            t && (z(t), n.removeAttribute("tabindex"));
        },
        En: function(n) {
            var t = vt(n);
            return p(Hn, t)[0] || t;
        },
        an: function(n) {
            return m(n, In) || null != p(Hn, n)[0];
        },
        Sn: function(n) {
            return n.un && n.activeSlide ? n.activeSlide.an : n.an;
        },
        yn: function(n) {
            return Me.En(n).scrollHeight > o.innerHeight;
        },
        Pn: function(n, t) {
            if (!vn.G) return !1;
            var e = Me.En(t);
            if (!tt().scrollOverflow || !m(e, In) || m(vt(t), "fp-noscroll")) return !0;
            var i = c ? 1 : 0, o = e.scrollTop, r = "up" === n && o <= 0, a = "down" === n && e.scrollHeight <= Math.ceil(e.offsetHeight + o) + i, u = r || a;
            return u || (this.xn = (new Date).getTime()), u;
        },
        Cn: function() {
            this.On = (new Date).getTime();
            var n = this.On - Me.xn, t = (a || l) && vn.X, e = vn.J && n > 600;
            return t && n > 400 || e;
        },
        Ln: (Te = 0, function(n) {
            var t = n.target.scrollTop, e = "none" !== vn.q ? vn.q : Te < t ? "down" : "up";
            Te = t, Y(tt().onScrollOverflow) && jt("onScrollOverflow", {
                position: t,
                direction: e
            }), m(n.target, In) && vn.G && Me.Pn(e, n.target) && Me.Cn() && fn.L("onScrollOverflowScrolled", {
                direction: e
            });
        })
    }, Ae = null, xe = null;
    function Oe() {
        vn.F = null, vn.C.map(function(n) {
            var t = m(n.item, An);
            n.isActive = t, n.an = Me.an(n.item), t && (vn.F = n), n.slides.length && (n.activeSlide = null, n.slides.map(function(t) {
                var e = m(t.item, An);
                t.an = Me.an(n.item), t.isActive = e, e && (n.activeSlide = t);
            }));
        }), function() {
            var n = vn.F, t = !!vn.F && vn.F.slides.length, e = vn.F ? vn.F.activeSlide : null;
            if (!n && vn.C.length && !hn().B && Ae) {
                var i = De(Ae, vn.C);
                i && (vn.F = i, vn.F.isActive = !0, D(vn.F.item, An)), vn.F && St(vn.F.item.offsetTop);
            }
            if (t && !e && xe) {
                var o = De(xe, vn.F.slides);
                o && (vn.F.activeSlide = o, vn.F.activeSlide.isActive = !0, D(vn.F.activeSlide.item, An)), vn.F.activeSlide && Qt(vn.F.activeSlide.item, "internal");
            }
        }();
    }
    function ke() {
        var n = p(tt().sectionSelector, nt()), t = h(n), e = Array.from(n).map(function(n) {
            return new je(n);
        }), i = e.filter(function(n) {
            return n.isVisible;
        }), o = i.reduce(function(n, t) {
            return n.concat(t.slides);
        }, []);
        Ae = Ee(vn.F), xe = Ee(vn.F ? vn.F.activeSlide : null), vn.R = t.length, vn.P = i.reduce(function(n, t) {
            return n + t.slides.length;
        }, 0), vn.C = i, vn.cn = e, vn.slides = o, vn.vn = vn.C.concat(vn.slides);
    }
    function Ee(n) {
        if (!n) return null;
        var t = n ? n.item : null, e = n.un ? vn.cn : vn.F.zn;
        if (t) {
            var i = lt(e, t);
            return i ? i.index() : null;
        }
        return null;
    }
    function De(n, t) {
        var e, i = n - 1, o = n;
        do {
            if (e = t[i] || t[o]) break;
            i -= 1, o += 1;
        }while (i >= 0 || o < t.length);
        return e;
    }
    var je = function(n) {
        var t = this;
        [].push.call(arguments, tt().sectionSelector), at.apply(this, arguments), this.Tn = p(tt().slideSelector, n), this.zn = Array.from(this.Tn).map(function(n) {
            return new Re(n, t);
        }), this.slides = this.zn.filter(function(n) {
            return n.isVisible;
        }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
            return n.isActive;
        })[0] || this.slides[0] : null;
    };
    je.prototype = at.prototype, je.prototype.constructor = je;
    var Le, Re = function(n, t) {
        this.parent = t, at.call(this, n, tt().slideSelector);
    };
    function Pe() {
        D(p(tt().sectionSelector, nt()), kn), D(p(tt().slideSelector, nt()), Ln);
    }
    function Ce(n) {
        var t = n.slides.length, e = n.Tn, i = n.slides, o = 100 * t, a = 100 / t;
        if (!p(zn, n.item)[0]) {
            var u = r.createElement("div");
            u.className = Cn, P(e, u);
            var l = r.createElement("div");
            l.className = Fn, P(e, l);
        }
        y(p(Nn, n.item), {
            width: o + "%"
        }), t > 1 && (tt().controlArrows && function(n) {
            var t = n.item, e = [
                J(tt().controlArrowsHTML[0]),
                J(tt().controlArrowsHTML[1])
            ];
            N(p(zn, t)[0], e), D(e, _n), D(e[0], Gn), D(e[1], "fp-next"), "#fff" !== tt().controlArrowColor && (y(p(Yn, t), {
                "border-color": "transparent transparent transparent " + tt().controlArrowColor
            }), y(p(qn, t), {
                "border-color": "transparent " + tt().controlArrowColor + " transparent transparent"
            })), tt().loopHorizontal || O(p(qn, t));
        }(n), tt().slidesNavigation && function(n) {
            var t = n.item, e = n.slides.length;
            L(J('<div class="fp-slidesNav"><ul></ul></div>'), t);
            var i = p(Vn, t)[0];
            D(i, "fp-" + tt().slidesNavPosition);
            for(var o = 0; o < e; o++)L(J('<li><a href="#"><span class="fp-sr-only">' + It(o, "Slide", p(Rn, t)[o]) + "</span><span></span></a></li>"), p("ul", i)[0]);
            y(i, {
                "margin-left": "-" + i.innerWidth / 2 + "px"
            });
            var r = n.activeSlide ? n.activeSlide.index() : 0;
            D(p("a", p("li", i)[r]), An);
        }(n)), i.forEach(function(n) {
            y(n.item, {
                width: a + "%"
            }), tt().verticalCentered && be(n);
        });
        var c = n.activeSlide || null;
        null != c && vn.F && (0 !== vn.F.index() || 0 === vn.F.index() && 0 !== c.index()) ? Qt(c.item, "internal") : D(e[0], An);
    }
    Re.prototype = at.prototype, Re.prototype.constructor = je;
    var ze = {
        attributes: !1,
        subtree: !0,
        childList: !0,
        characterData: !0
    };
    function Fe() {
        return h(p(tt().slideSelector, nt())).length !== hn().P;
    }
    function Ne(n) {
        var t = Fe();
        (Fe() || h(p(tt().sectionSelector, nt())).length !== hn().R) && !vn.en && (tt().observer && Le && Le.disconnect(), ke(), Oe(), tt().anchors = [], Z(p(jn)), Pe(), ot(), tt().navigation && te(), t && (Z(p(Vn)), Z(p(Kn))), hn().C.forEach(function(n) {
            n.slides.length ? t && Ce(n) : Se(n);
        })), tt().observer && Le && p(bn)[0] && Le.observe(p(bn)[0], ze);
    }
    fn.j("bindEvents", function() {
        var n, t, e;
        tt().observer && "MutationObserver" in window && p(bn)[0] && (n = p(bn)[0], t = ze, (e = new MutationObserver(Ne)).observe(n, t), Le = e), fn.j("contentChanged", Ne);
    }), s.Fn = Ne;
    var Be = function() {
        var n = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    n = !0;
                }
            });
            K("testPassive", null, t), q("testPassive", null, t);
        } catch (n1) {}
        return function() {
            return n;
        };
    }();
    function Ie() {
        return !!Be() && {
            passive: !1
        };
    }
    var He, We, Ve, Ue, _e = (Ve = (new Date).getTime(), Ue = [], {
        Nn: function(n) {
            var t = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail, e = Math.max(-1, Math.min(1, t)), i = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX;
            He = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !i;
            var r = (new Date).getTime();
            We = e < 0 ? "down" : "up", Ue.length > 149 && Ue.shift(), Ue.push(Math.abs(t));
            var a = r - Ve;
            Ve = r, a > 200 && (Ue = []);
        },
        Bn: function() {
            var n = an(Ue, 10) >= an(Ue, 70);
            return !!Ue.length && n && He;
        },
        In: function() {
            return We;
        }
    });
    function Ke() {
        var n = tt().css3 ? H() + w() : rn(hn().C).item.offsetTop + rn(hn().C).item.offsetHeight, t = ht(n);
        s.test.top = -n + "px", dn({
            G: !1
        }), kt(t.element, t.options, tt().scrollingSpeed, function() {
            setTimeout(function() {
                dn({
                    B: !0
                }), dn({
                    G: !0
                });
            }, 30);
        });
    }
    function Ge() {
        nt().getBoundingClientRect().bottom >= 0 && qe();
    }
    function qe() {
        var n = ht(rn(hn().C).item.offsetTop);
        dn({
            G: !1
        }), kt(n.element, n.options, tt().scrollingSpeed, function() {
            dn({
                G: !0
            }), dn({
                B: !1
            }), dn({
                Hn: !1
            });
        });
    }
    var Ye, $e, Qe, Xe = (Ye = !1, $e = {}, Qe = {}, function(n, t, e) {
        switch(n){
            case "set":
                $e[t] = (new Date).getTime(), Qe[t] = e;
                break;
            case "isNewKeyframe":
                var i = (new Date).getTime();
                Ye = i - $e[t] > Qe[t];
        }
        return Ye;
    });
    function Je() {
        var n = hn().F.next();
        n || !tt().loopBottom && !tt().continuousVertical || (n = hn().C[0]), null != n ? ve(n, null, !1) : nt().scrollHeight < At.scrollHeight && fn.L("scrollBeyondFullpage");
    }
    function Ze() {
        var n = hn().F.prev();
        n || !tt().loopTop && !tt().continuousVertical || (n = rn(hn().C)), null != n && ve(n, null, !0);
    }
    s.moveSectionDown = Je, s.moveSectionUp = Ze;
    var ni = 0;
    function ti(n) {
        tt().autoScrolling && (vn.G && (n.pageY < ni && _t().m.up ? Ze() : n.pageY > ni && _t().m.down && Je()), ni = n.pageY);
    }
    function ei(n) {
        if (_t().m[n]) {
            var t = "down" === n ? Je : Ze;
            tt().scrollOverflow && Me.Sn(hn().F) ? Me.Pn(n, hn().F.item) && Me.Cn() && t() : t();
        }
    }
    var ii, oi, ri, ai, ui = 0, li = 0, ci = 0, si = 0, fi = (o.PointerEvent && (ai = {
        down: "pointerdown",
        move: "pointermove"
    }), ai), vi = {
        Wn: "ontouchmove" in window ? "touchmove" : fi ? fi.move : null,
        Vn: "ontouchstart" in window ? "touchstart" : fi ? fi.down : null
    };
    function di(n) {
        var t = F(n.target, En) || hn().F.item, e = Me.Sn(hn().F);
        if (hi(n)) {
            dn({
                X: !0,
                J: !1
            }), tt().autoScrolling && (!e || e && !vn.G) && V(n);
            var i = mi(n);
            ci = i.y, si = i.x;
            var r = Math.abs(ui - ci) > o.innerHeight / 100 * tt().touchSensitivity, a = Math.abs(li - si) > b() / 100 * tt().touchSensitivity, u = p(zn, t).length && Math.abs(li - si) > Math.abs(ui - ci), l = ui > ci ? "down" : "up";
            dn({
                q: u ? li > si ? "right" : "left" : l
            }), u ? !vn.H && a && (li > si ? _t().m.right && fn.L("moveSlideRight", {
                section: t
            }) : _t().m.left && fn.L("moveSlideLeft", {
                section: t
            })) : tt().autoScrolling && vn.G && r && ei(l);
        }
    }
    function hi(n) {
        return void 0 === n.pointerType || "mouse" != n.pointerType;
    }
    function pi(n) {
        if (tt().fitToSection && dn({
            K: !1
        }), hi(n)) {
            var t = mi(n);
            ui = t.y, li = t.x;
        }
        K("touchend", gi);
    }
    function gi() {
        q("touchend", gi), dn({
            X: !1
        });
    }
    function mi(n) {
        var t = {};
        return t.y = void 0 !== n.pageY && (n.pageY || n.pageX) ? n.pageY : n.touches[0].pageY, t.x = void 0 !== n.pageX && (n.pageY || n.pageX) ? n.pageX : n.touches[0].pageX, l && hi(n) && tt().scrollBar && void 0 !== n.touches && (t.y = n.touches[0].pageY, t.x = n.touches[0].pageX), t;
    }
    function wi(n) {
        tt().autoScrolling && hi(n) && _t().m.up && (vn.G || V(n));
    }
    function bi(n, t) {
        var e = null == t ? hn().F.item : t, i = lt(vn.C, e), o = p(zn, e)[0];
        if (!(null == o || vn.H || i.slides.length < 2)) {
            var r = i.activeSlide, a = "left" === n ? r.prev() : r.next();
            if (!a) {
                if (!tt().loopHorizontal) return;
                a = "left" === n ? rn(i.slides) : i.slides[0];
            }
            dn({
                H: !s.test.wn
            }), qt(o, a.item, n);
        }
    }
    function yi(n) {
        bi("left", n);
    }
    function Si(n) {
        bi("right", n);
    }
    function Ti(n) {
        var t = hn().C.filter(function(t) {
            return t.anchor === n;
        })[0];
        if (!t) {
            var e = void 0 !== n ? n - 1 : 0;
            t = hn().C[e];
        }
        return t;
    }
    function Mi(n) {
        null != n && qt(F(n, zn), n);
    }
    function Ai(n, t) {
        var e = Ti(n);
        if (null != e) {
            var i = function(n, t) {
                var e = t.slides.filter(function(t) {
                    return t.anchor === n;
                })[0];
                return null == e && (n = void 0 !== n ? n : 0, e = t.slides[n]), e ? e.item : null;
            }(t, e);
            e.anchor === vn.U || m(e.item, An) ? Mi(i) : ve(e, function() {
                Mi(i);
            });
        }
    }
    function xi(n, t) {
        var e = Ti(n);
        void 0 !== t ? Ai(n, t) : null != e && ve(e);
    }
    function Oi() {
        clearTimeout(oi), G("keydown", ki), G("keyup", Ei);
    }
    function ki(n) {
        clearTimeout(oi);
        var t, e = n.keyCode, i = [
            37,
            39
        ].indexOf(e) > -1, o = tt().autoScrolling || tt().fitToSection || i;
        9 === e ? function(n) {
            var t = n.shiftKey, e = r.activeElement, i = Pi(vt(hn().F.item));
            function o(n) {
                return V(n), i[0] ? i[0].focus() : null;
            }
            if (!function(n) {
                var t = Pi(r), e = t.indexOf(r.activeElement), i = t[n.shiftKey ? e - 1 : e + 1], o = F(i, Rn), a = F(i, En);
                return !o && !a;
            }(n)) {
                e ? null == F(e, ".fp-section.active,.fp-section.active .fp-slide.active") && (e = o(n)) : o(n);
                var a = e == i[0], u = e == i[i.length - 1], l = t && a;
                if (l || !t && u) {
                    V(n);
                    var c = function(n) {
                        var t, e = n ? "prevPanel" : "nextPanel", i = [], o = dt((vn.F && vn.F.activeSlide ? vn.F.activeSlide : vn.F)[e]());
                        do (i = Pi(o.item)).length && (t = {
                            Un: o,
                            _n: i[n ? i.length - 1 : 0]
                        }), o = dt(o[e]());
                        while (o && 0 === i.length);
                        return t;
                    }(l), s = c ? c.Un : null;
                    if (s) {
                        var f = s.un ? s : s.parent;
                        fn.L("onScrollPageAndSlide", {
                            Kn: f.index() + 1,
                            slideAnchor: s.un ? 0 : s.index()
                        }), ri = c._n, V(n);
                    }
                }
            }
        }(n) : Q(t = r.activeElement, "textarea") || Q(t, "input") || Q(t, "select") || "true" == U(t, "contentEditable") || "" == U(t, "contentEditable") || !tt().keyboardScrolling || !o || (ii = n.ctrlKey, oi = setTimeout(function() {
            !function(n) {
                var t = n.shiftKey, e = r.activeElement, i = Q(e, "video") || Q(e, "audio"), o = Me.Pn("up", hn().F.item), a = Me.Pn("down", hn().F.item), u = [
                    37,
                    39
                ].indexOf(n.keyCode) > -1;
                if (function(n) {
                    (function(n) {
                        return [
                            40,
                            38,
                            32,
                            33,
                            34
                        ].indexOf(n.keyCode) > -1 && !vn.B;
                    })(n) && !F(n.target, Hn) && n.preventDefault();
                }(n), vn.G || u) switch(dn({
                    N: "keydown"
                }), n.keyCode){
                    case 38:
                    case 33:
                        _t().k.up && o && (vn.B ? fn.L("onKeyDown", {
                            e: n
                        }) : Ze());
                        break;
                    case 32:
                        if (t && _t().k.up && !i && o) {
                            Ze();
                            break;
                        }
                    case 40:
                    case 34:
                        if (_t().k.down && a) {
                            if (vn.B) return;
                            32 === n.keyCode && i || Je();
                        }
                        break;
                    case 36:
                        _t().k.up && xi(1);
                        break;
                    case 35:
                        _t().k.down && xi(hn().C.length);
                        break;
                    case 37:
                        _t().k.left && yi();
                        break;
                    case 39:
                        _t().k.right && Si();
                }
            }(n);
        }, 0));
    }
    function Ei(n) {
        vn.Z && (ii = n.ctrlKey);
    }
    function Di() {
        dn({
            Z: !1
        }), ii = !1;
    }
    function ji(n) {
        Ri();
    }
    function Li(n) {
        F(ri, Rn) && !F(ri, Pn) || Ri();
    }
    function Ri() {
        ri && (ri.focus(), ri = null);
    }
    function Pi(n) {
        return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n)).filter(function(n) {
            return "-1" !== U(n, "tabindex") && null !== n.offsetParent;
        });
    }
    s.moveSlideLeft = yi, s.moveSlideRight = Si, s.moveTo = xi, fn.j("bindEvents", function() {
        K("blur", Di), _("keydown", ki), _("keyup", Ei), fn.j("onDestroy", Oi), fn.j("afterSlideLoads", ji), fn.j("afterSectionLoads", Li);
    });
    var Ci = (new Date).getTime(), zi = [];
    function Fi(n) {
        n ? (function() {
            var n, t = "";
            o.addEventListener ? n = "addEventListener" : (n = "attachEvent", t = "on");
            var e = "onwheel" in r.createElement("div") ? "wheel" : void 0 !== r.onmousewheel ? "mousewheel" : "DOMMouseScroll", i = Ie();
            "DOMMouseScroll" == e ? r[n](t + "MozMousePixelScroll", Ni, i) : r[n](t + e, Ni, i);
        }(), nt().addEventListener("mousedown", Bi), nt().addEventListener("mouseup", Ii)) : (r.addEventListener ? (G("mousewheel", Ni, !1), G("wheel", Ni, !1), G("MozMousePixelScroll", Ni, !1)) : r.detachEvent("onmousewheel", Ni), nt().removeEventListener("mousedown", Bi), nt().removeEventListener("mouseup", Ii));
    }
    function Ni(n) {
        var t = (new Date).getTime(), e = m(p(".fp-completely")[0], "fp-normal-scroll"), i = function(n, t) {
            (new Date).getTime();
            var e = hn().B && n.getBoundingClientRect().bottom >= 0 && "up" === _e.In(), i = hn().Hn;
            if (i) return V(t), !1;
            if (hn().B) {
                if (e) {
                    var o;
                    if (!(i || Xe("isNewKeyframe", "beyondFullpage") && _e.Bn())) return (o = ht(rn(hn().C).item.offsetTop + rn(hn().C).item.offsetHeight)).element.scrollTo(0, o.options), dn({
                        Hn: !1
                    }), V(t), !1;
                    if (_e.Bn()) return e = !1, dn({
                        Hn: !0
                    }), dn({
                        N: "wheel"
                    }), qe(), V(t), !1;
                } else Xe("set", "beyondFullpage", 1e3);
                if (!i && !e) return !0;
            }
        }(nt(), n);
        if (vn.J || dn({
            X: !1,
            J: !0,
            q: "none"
        }), !_t().m.down && !_t().m.up) return V(n), !1;
        if (i) return !0;
        if (!1 === i) return V(n), !1;
        if (tt().autoScrolling && !ii && !e) {
            var r = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail, a = Math.max(-1, Math.min(1, r)), u = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX, l = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !u, c = a < 0 ? "down" : a > 0 ? "up" : "none";
            zi.length > 149 && zi.shift(), zi.push(Math.abs(r)), tt().scrollBar && V(n);
            var s = t - Ci;
            return Ci = t, s > 200 && (zi = []), dn({
                Y: c
            }), vn.G && an(zi, 10) >= an(zi, 70) && l && (dn({
                N: "wheel"
            }), ei(a < 0 ? "down" : "up")), !1;
        }
        tt().fitToSection && dn({
            K: !1
        });
    }
    function Bi(n) {
        var t;
        2 == n.which && (t = n.pageY, ni = t, nt().addEventListener("mousemove", ti));
    }
    function Ii(n) {
        2 == n.which && nt().removeEventListener("mousemove", ti);
    }
    function Hi(n) {
        n ? (Fi(!0), function() {
            if (vi.Wn && (a || l)) {
                tt().autoScrolling && (At.removeEventListener(vi.Wn, wi, {
                    passive: !1
                }), At.addEventListener(vi.Wn, wi, {
                    passive: !1
                }));
                var n = tt().touchWrapper;
                n.removeEventListener(vi.Vn, pi), n.removeEventListener(vi.Wn, di, {
                    passive: !1
                }), n.addEventListener(vi.Vn, pi), n.addEventListener(vi.Wn, di, {
                    passive: !1
                });
            }
        }()) : (Fi(!1), function() {
            if (vi.Wn && (a || l)) {
                tt().autoScrolling && (At.removeEventListener(vi.Wn, di, {
                    passive: !1
                }), At.removeEventListener(vi.Wn, wi, {
                    passive: !1
                }));
                var n = tt().touchWrapper;
                n.removeEventListener(vi.Vn, pi), n.removeEventListener(vi.Wn, di, {
                    passive: !1
                });
            }
        }());
    }
    s.setMouseWheelScrolling = Fi;
    var Wi = !0;
    function Vi() {
        [
            "mouseenter",
            "touchstart",
            "mouseleave",
            "touchend"
        ].forEach(function(n) {
            G(n, _i, !0);
        });
    }
    function Ui(n, t) {
        document["fp_" + n] = t, _(n, _i, !0);
    }
    function _i(n) {
        var t = n.type, e = !1, i = "mouseleave" === t ? n.toElement || n.relatedTarget : n.target;
        i != document && i ? ("touchend" === t && (Wi = !1, setTimeout(function() {
            Wi = !0;
        }, 800)), ("mouseenter" !== t || Wi) && (tt().normalScrollElements.split(",").forEach(function(n) {
            if (!e) {
                var t = Q(i, n), o = F(i, n);
                (t || o) && (s.shared.Gn || Hi(!1), s.shared.Gn = !0, e = !0);
            }
        }), !e && s.shared.Gn && (Hi(!0), s.shared.Gn = !1))) : Hi(!0);
    }
    function Ki(n, t) {
        Tt(0, "internal"), xi(n, t), Tt(et().scrollingSpeed, "internal");
    }
    fn.j("bindEvents", function() {
        tt().normalScrollElements && ([
            "mouseenter",
            "touchstart"
        ].forEach(function(n) {
            Ui(n, !1);
        }), [
            "mouseleave",
            "touchend"
        ].forEach(function(n) {
            Ui(n, !0);
        })), fn.j("onDestroy", Vi);
    }), s.silentMoveTo = Ki;
    var Gi, qi, Yi = w(), $i = b(), Qi = !1;
    function Xi() {
        clearTimeout(Gi), clearTimeout(qi), q("resize", Ji);
    }
    function Ji() {
        Qi || (tt().autoScrolling && !tt().scrollBar || !tt().fitToSection) && no(w()), function() {
            if (a) for(var n = 0; n < 4; n++)qi = setTimeout(function() {
                window.requestAnimationFrame(function() {
                    tt().autoScrolling && !tt().scrollBar && (dn({
                        W: !0
                    }), Ki(vn.F.index() + 1), dn({
                        W: !1
                    }));
                });
            }, 200 * n);
        }(), Qi = !0, clearTimeout(Gi), Gi = setTimeout(function() {
            !function() {
                if (dn({
                    W: !0
                }), no(""), tt().autoScrolling || vn.B || function() {
                    if (!tt().autoScrolling || tt().scrollBar) {
                        var n = .01 * o.innerHeight;
                        r.documentElement.style.setProperty("--vh", "".concat(n, "px"));
                    }
                }(), fn.L("contentChanged"), Oe(), ge(), a) {
                    var n = r.activeElement;
                    if (!Q(n, "textarea") && !Q(n, "input") && !Q(n, "select")) {
                        var t = w();
                        Math.abs(t - Yi) > 20 * Math.max(Yi, t) / 100 && (Zi(!0), Yi = t);
                    }
                } else e = w(), i = b(), vn.tn === e && $i === i || (dn({
                    tn: e
                }), $i = i, Zi(!0));
                var e, i;
                dn({
                    W: !1
                });
            }(), Qi = !1;
        }, 400);
    }
    function Zi(n) {
        if (!m(nt(), Tn)) {
            dn({
                W: !0,
                tn: w(),
                qn: b()
            });
            for(var t = hn().C, e = 0; e < t.length; ++e){
                var i = t[e], r = p(zn, i.item)[0];
                i.slides.length > 1 && qt(r, i.activeSlide.item);
            }
            tt().scrollOverflow && Me.Mn();
            var a = hn().F.index();
            vn.B || a && Ki(a + 1), dn({
                W: !1
            }), Y(tt().afterResize) && n && tt().afterResize.call(nt(), o.innerWidth, o.innerHeight), Y(tt().afterReBuild) && !n && tt().afterReBuild.call(nt()), $(nt(), "afterRebuild");
        }
    }
    function no(n) {
        var t = "" === n ? "" : n + "px";
        hn().C.forEach(function(n) {
            y(n.item, {
                height: t
            });
        });
    }
    function to() {
        var n, t, e = o.location.hash;
        if (e.length) {
            var i = e.replace("#", "").split("/"), r = e.indexOf("#/") > -1;
            n = r ? "/" + i[1] : decodeURIComponent(i[0]);
            var a = r ? i[2] : i[1];
            a && a.length && (t = decodeURIComponent(a));
        }
        return {
            section: n,
            hn: t
        };
    }
    function eo() {
        q("hashchange", io);
    }
    function io() {
        if (!vn.V && !tt().lockAnchors) {
            var n = to(), t = n.section, e = n.hn, i = void 0 === vn.U, o = void 0 === vn.U && void 0 === e && !vn.H;
            t && t.length && (t && t !== vn.U && !i || o || !vn.H && vn._ != e) && fn.L("onScrollPageAndSlide", {
                Kn: t,
                slideAnchor: e
            });
        }
    }
    function oo(n) {
        var t = n.target;
        F(t, tt().menu + " [data-menuanchor]") && ro.call(t, n);
    }
    function ro(n) {
        dn({
            N: "menu"
        }), !p(tt().menu)[0] || !tt().lockAnchors && tt().anchors.length || (V(n), fn.L("onMenuClick", {
            anchor: U(this, "data-menuanchor")
        }));
    }
    function ao(n) {
        var t = n.target;
        t && F(t, "#fp-nav a") ? ee.call(t, n.e) : Q(t, ".fp-tooltip") ? ne.call(t) : (Q(t, Un) || null != F(t, Un)) && Ht.call(t, n.e);
    }
    s.reBuild = Zi, fn.j("bindEvents", function() {
        Ji(), K("resize", Ji), fn.j("onDestroy", Xi);
    }), s.setLockAnchors = function(n) {
        tt().lockAnchors = n;
    }, fn.j("bindEvents", function() {
        K("hashchange", io), fn.j("onDestroy", eo);
    }), fn.j("bindEvents", function() {
        _("wheel", _e.Nn, Ie()), fn.j("scrollBeyondFullpage", Ke), fn.j("onKeyDown", Ge);
    }), fn.j("bindEvents", function() {
        fn.j("onClickOrTouch", oo);
    }), fn.j("bindEvents", function() {
        fn.j("onClickOrTouch", ao);
    });
    var uo, lo, co = 0;
    function so(n) {
        var t, e, i, o, r;
        if (!vn.W && hn().F && (rn(hn().C), !hn().B && !hn().Hn && (!tt().autoScrolling || tt().scrollBar))) {
            var a = H(), u = function(n) {
                var t = n > co ? "down" : "up";
                return co = n, dn({
                    nn: n
                }), t;
            }(a), l = 0, c = a + w() / 2, s = At.scrollHeight - w() === a, f = hn().C;
            if (dn({
                scrollY: a
            }), s) l = f.length - 1;
            else if (a) for(var v = 0; v < f.length; ++v)f[v].item.offsetTop <= c && (l = v);
            else l = 0;
            if (i = u, o = hn().F.item.offsetTop, r = o + w(), ("up" == i ? r >= H() + w() : o <= H()) && (m(hn().F.item, On) || (D(hn().F.item, On), j(W(hn().F.item), On))), e = (t = f[l]).item, !t.isActive) {
                dn({
                    V: !0
                });
                var d, h, p = hn().F.item, g = hn().F.index() + 1, b = mt(hn().F, e), y = t.anchor, S = t.index() + 1, T = t.activeSlide, M = {
                    F: p,
                    sectionIndex: S - 1,
                    anchorLink: y,
                    element: e,
                    leavingSection: g,
                    direction: b,
                    items: {
                        origin: hn().F,
                        destination: t
                    }
                };
                T && (h = T.anchor, d = T.index()), vn.G && (D(e, An), j(W(e), An), Y(tt().beforeLeave) && fe("beforeLeave", M), Y(tt().onLeave) && jt("onLeave", M), Y(tt().afterLoad) && jt("afterLoad", M), Pt(p), Ct(e), Lt(e), ie(y, S - 1), tt().anchors.length && dn({
                    U: y
                }), Nt(d, h, y), Oe()), clearTimeout(uo), uo = setTimeout(function() {
                    dn({
                        V: !1
                    });
                }, 100);
            }
            tt().fitToSection && vn.G && (clearTimeout(lo), lo = setTimeout(function() {
                vn.C.filter(function(n) {
                    var t = n.item.getBoundingClientRect();
                    return Math.round(t.bottom) === Math.round(w()) || 0 === Math.round(t.top);
                }).length || pe();
            }, tt().rn));
        }
    }
    function fo(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
            Ut(n, t, "k");
        }) : (Ut(n, "all", "k"), tt().keyboardScrolling = n);
    }
    function vo(n) {
        var t = n.index();
        void 0 !== tt().anchors[t] && n.isActive && ie(tt().anchors[t], t), tt().menu && tt().css3 && null != F(p(tt().menu)[0], bn) && p(tt().menu).forEach(function(n) {
            At.appendChild(n);
        });
    }
    function ho() {
        var n, t, e = hn().F, i = hn().F.item;
        D(i, On), Ct(i), Zt(), Lt(i), t = Ti((n = to()).section), n.section && t && (void 0 === t || t.index() !== A(ye)) || !Y(tt().afterLoad) || jt("afterLoad", {
            F: i,
            element: i,
            direction: null,
            anchorLink: e.anchor,
            sectionIndex: e.index(),
            items: {
                origin: hn().F,
                destination: hn().F
            }
        }), Y(tt().afterRender) && jt("afterRender");
    }
    function po(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
            Ut(n, t, "m");
        }) : Ut(n, "all", "m");
    }
    function go() {
        var n = to(), t = n.section, e = n.hn;
        t && (tt().animateAnchor ? Ai(t, e) : Ki(t, e));
    }
    function mo() {
        ke(), Oe(), tt().scrollBar = tt().scrollBar || tt().hybrid, ot(), function() {
            y(ln(nt(), "body"), {
                height: "100%",
                position: "relative"
            }), D(nt(), wn), D(xt, Mn), dn({
                tn: w()
            }), j(nt(), Tn), Pe();
            for(var n = hn().cn, t = 0; t < n.length; t++){
                var e = n[t], i = e.Tn;
                e.item.setAttribute("data-fp-styles", U(e.item, "style")), Se(e), vo(e), i.length > 0 && Ce(e);
            }
            tt().fixedElements && tt().css3 && p(tt().fixedElements).forEach(function(n) {
                At.appendChild(n);
            }), tt().navigation && te(), p('iframe[src*="youtube.com/embed/"]', nt()).forEach(function(n) {
                var t, e;
                e = U(t = n, "src"), t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "enablejsapi=1");
            }), tt().scrollOverflow && Me.Mn();
        }(), po(!0), Hi(!0), Jt(tt().autoScrolling, "internal"), ge(), zt(), "complete" === r.readyState && go(), K("load", go), ho(), ke(), Oe();
    }
    function wo() {
        var n = tt().licenseKey;
        "" === tt().licenseKey.trim() ? (v("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), v("error", "https://github.com/alvarotrigo/fullPage.js#options")) : tt() && vn.Yn || r.domain.indexOf("alvarotrigo.com") > -1 ? n && n.length : (v("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), v("error", "https://alvarotrigo.com/fullPage/pricing")), m(xt, Mn) ? v("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (tt().continuousVertical && (tt().loopTop || tt().loopBottom) && (tt().continuousVertical = !1, v("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !tt().scrollOverflow || !tt().scrollBar && tt().autoScrolling || v("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !tt().continuousVertical || !tt().scrollBar && tt().autoScrolling || (tt().continuousVertical = !1, v("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), f.forEach(function(n) {
            tt()[n] && v("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + n);
        }), tt().anchors.forEach(function(n) {
            var t = [].slice.call(p("[name]")).filter(function(t) {
                return U(t, "name") && U(t, "name").toLowerCase() == n.toLowerCase();
            }), e = [].slice.call(p("[id]")).filter(function(t) {
                return U(t, "id") && U(t, "id").toLowerCase() == n.toLowerCase();
            });
            if (e.length || t.length) {
                v("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                var i = e.length ? "id" : "name";
                (e.length || t.length) && v("error", '"' + n + '" is is being used by another element `' + i + "` property");
            }
        }));
    }
    function bo(n, t) {
        var e;
        if (At = p("body")[0], xt = p("html")[0], Ot = p("html, body"), !m(xt, Mn)) return e = "string" == typeof n ? p(n)[0] : n, $n.touchWrapper = e, function(n) {
            Zn = g({}, $n, n), Jn = Object.assign({}, Zn);
        }(t), function(n) {
            Qn = n;
        }("string" == typeof n ? p(n)[0] : n), fn.L("onInitialise"), wo(), s.getFullpageData = function() {
            return {
                options: tt()
            };
        }, s.version = "4.0.11", s.test = Object.assign(s.test, {
            top: "0px",
            dn: "translate3d(0px, 0px, 0px)",
            gn: function() {
                for(var n = [], t = 0; t < p(tt().sectionSelector, nt()).length; t++)n.push("translate3d(0px, 0px, 0px)");
                return n;
            }(),
            left: function() {
                for(var n = [], t = 0; t < p(tt().sectionSelector, nt()).length; t++)n.push(0);
                return n;
            }(),
            options: tt(),
            setAutoScrolling: null
        }), s.shared = Object.assign(s.shared, {
            $n: null,
            Gn: !1
        }), o.fullpage_api = s, nt() && (fn.L("beforeInit"), mo(), fn.L("bindEvents")), o.fullpage_api;
        wo();
    }
    return fn.j("onDestroy", function() {
        clearTimeout(uo), clearTimeout(lo);
    }), fn.j("bindEvents", function() {
        K("scroll", so), r.body.addEventListener("scroll", so), fn.j("onScrollPageAndSlide", function(n) {
            Ai(n.Kn, n.slideAnchor);
        }), fn.j("onMenuClick", function(n) {
            xi(n.anchor, void 0);
        }), fn.j("onScrollOverflowScrolled", function(n) {
            ("down" === n.direction ? Je : Ze)();
        }), fn.j("scrollPage", function(n) {
            ve(n.destination);
        });
    }), fn.j("onDestroy", function() {
        q("scroll", so);
    }), s.getActiveSlide = function() {
        return Dt(hn().F.activeSlide);
    }, s.getScrollX = function() {
        return vn.scrollX;
    }, fn.j("bindEvents", function() {
        fn.j("onDestroy", Yt), fn.j("landscapeScroll", function(n) {
            qt(n.slides, n.destination);
        }), fn.j("moveSlideRight", function(n) {
            Si(n.section);
        }), fn.j("moveSlideLeft", function(n) {
            yi(n.section);
        });
    }), fn.j("bindEvents", function() {
        var n = tt().credits.position, t = [
            "left",
            "right"
        ].indexOf(n) > -1 ? "".concat(n, ": 0;") : "", e = '\n        <div class="fp-watermark" style="'.concat(t, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(tt().credits.label, "\n            </a>\n        </div>\n    "), i = rn(vn.C), o = tt().credits.enabled && !vn.Yn;
        i && i.item && o && i.item.insertAdjacentHTML("beforeend", e);
    }), function() {
        fn.j("onInitialise", function() {
            var t, u;
            dn({
                Yn: (tt().licenseKey, t = tt().licenseKey, u = function(t) {
                    var e = parseInt("514").toString(16);
                    if (!t || t.length < 29 || 4 === t.split(n[0]).length) return null;
                    var i = [
                        "Each",
                        "for"
                    ][o()]().join(""), u = t[[
                        "split"
                    ]]("-"), l = [];
                    u[i](function(n, t) {
                        if (t < 4) {
                            var i = function(n) {
                                var t = n[n.length - 1], e = [
                                    "NaN",
                                    "is"
                                ][o()]().join("");
                                return window[e](t) ? r(t) : function(n) {
                                    return n - An.length;
                                }(t);
                            }(n);
                            l.push(i);
                            var a = r(n[i]);
                            if (1 === t) {
                                var u = [
                                    "pa",
                                    "dS",
                                    "t",
                                    "art"
                                ].join("");
                                a = a.toString()[u](2, "0");
                            }
                            e += a, 0 !== t && 1 !== t || (e += "-");
                        }
                    });
                    var c = 0, s = "";
                    return t.split("-").forEach(function(n, t) {
                        if (t < 4) {
                            for(var e = 0, i = 0; i < 4; i++)i !== l[t] && (e += Math.abs(r(n[i])), isNaN(n[i]) || c++);
                            var o = a(e);
                            s += o;
                        }
                    }), s += a(c), {
                        Qn: new Date(e + "T00:00"),
                        Xn: e.split("-")[2] === 8 * (An.length - 2) + "",
                        Jn: s
                    };
                }(t), u && (tt().credits && u && e <= u.Qn && u.Jn === t.split(n[0])[4] || function(n) {
                    var t = i[o()]().join("");
                    return n && 0 === t.indexOf(n) && n.length === t.length;
                }(t) || u.Xn) || !1)
            });
        });
        var n = [
            "-"
        ], t = "2022-8-8".split("-"), e = new Date(t[0], t[1], t[2]), i = [
            "se",
            "licen",
            "-",
            "v3",
            "l",
            "gp"
        ];
        function o() {
            return [
                "re",
                "verse"
            ].join("");
        }
        function r(n) {
            return n ? isNaN(n) ? n.charCodeAt(0) - 72 : n : "";
        }
        function a(n) {
            var t = 72 + n;
            return t > 90 && t < 97 && (t += 15), String.fromCharCode(t).toUpperCase();
        }
    }(), s.setKeyboardScrolling = fo, s.shared.$n = ho, s.setAllowScrolling = po, s.destroy = function(n) {
        Jt(!1, "internal"), po(!0), Hi(!1), fo(!1), D(nt(), Tn), fn.L("onDestroy"), n && (St(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", nt()).forEach(function(n) {
            un(n, "src");
        }), p("img[data-srcset]").forEach(function(n) {
            un(n, "srcset");
        }), Z(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), y(ut(hn().C), {
            height: "",
            "background-color": "",
            padding: ""
        }), y(ut(hn().slides), {
            width: ""
        }), y(nt(), {
            height: "",
            position: "",
            "-ms-touch-action": "",
            "touch-action": ""
        }), y(Ot, {
            overflow: "",
            height: ""
        }), j(xt, Mn), j(At, yn), At.className.split(/\s+/).forEach(function(n) {
            0 === n.indexOf("fp-viewing") && j(At, n);
        }), ut(hn().vn).forEach(function(n) {
            tt().scrollOverflow && Me.Rn(n), j(n, "fp-table active " + On), U(n, "data-fp-styles") && n.setAttribute("style", U(n, "data-fp-styles")), m(n, kn) && !Xn && n.removeAttribute("data-anchor");
        }), wt(nt()), [
            Dn,
            Nn,
            zn
        ].forEach(function(n) {
            p(n, nt()).forEach(function(n) {
                z(n);
            });
        }), y(nt(), {
            "-webkit-transition": "none",
            transition: "none"
        }), o.scrollTo(0, 0), [
            kn,
            Ln,
            Fn
        ].forEach(function(n) {
            j(p("." + n), n);
        }));
    }, o.fp_easings = g(o.fp_easings, {
        easeInOutCubic: function(n, t, e, i) {
            return (n /= i / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t;
        }
    }), o.jQuery && function(n, t) {
        n && t ? n.fn.fullpage = function(e) {
            e = n.extend({}, e, {
                $: n
            }), new t(this[0], e), Object.keys(s).forEach(function(n) {
                tt().$.fn.fullpage[n] = s[n];
            });
        } : v("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(o.jQuery, bo), bo;
});

//# sourceMappingURL=index.73e2d2a0.js.map
