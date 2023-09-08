"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[251], {
    27251: function(e, t, i) {
        i.r(t),
        i.d(t, {
            W3mAccountButton: function() {
                return rC
            },
            W3mConnectButton: function() {
                return rQ
            },
            W3mCoreButton: function() {
                return r7
            },
            W3mModal: function() {
                return au
            },
            W3mNetworkSwitch: function() {
                return ab
            },
            W3mQrCode: function() {
                return iR
            }
        });
        /**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        let r = window
          , a = r.ShadowRoot && (void 0 === r.ShadyCSS || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , l = Symbol()
          , o = new WeakMap;
        class n {
            constructor(e, t, i) {
                if (this._$cssResult$ = !0,
                i !== l)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e,
                this.t = t
            }
            get styleSheet() {
                let e = this.o
                  , t = this.t;
                if (a && void 0 === e) {
                    let i = void 0 !== t && 1 === t.length;
                    i && (e = o.get(t)),
                    void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText),
                    i && o.set(t, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        let s = e=>new n("string" == typeof e ? e : e + "",void 0,l)
          , c = (e,...t)=>{
            let i = 1 === e.length ? e[0] : t.reduce((t,i,r)=>t + (e=>{
                if (!0 === e._$cssResult$)
                    return e.cssText;
                if ("number" == typeof e)
                    return e;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(i) + e[r + 1], e[0]);
            return new n(i,e,l)
        }
          , d = (e,t)=>{
            a ? e.adoptedStyleSheets = t.map(e=>e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t=>{
                let i = document.createElement("style")
                  , a = r.litNonce;
                void 0 !== a && i.setAttribute("nonce", a),
                i.textContent = t.cssText,
                e.appendChild(i)
            }
            )
        }
          , h = a ? e=>e : e=>e instanceof CSSStyleSheet ? (e=>{
            let t = "";
            for (let i of e.cssRules)
                t += i.cssText;
            return s(t)
        }
        )(e) : e
          , m = window
          , p = m.trustedTypes
          , u = p ? p.emptyScript : ""
          , w = m.reactiveElementPolyfillSupport
          , g = {
            toAttribute(e, t) {
                switch (t) {
                case Boolean:
                    e = e ? u : null;
                    break;
                case Object:
                case Array:
                    e = null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                let i = e;
                switch (t) {
                case Boolean:
                    i = null !== e;
                    break;
                case Number:
                    i = null === e ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        i = JSON.parse(e)
                    } catch (e) {
                        i = null
                    }
                }
                return i
            }
        }
          , v = (e,t)=>t !== e && (t == t || e == e)
          , f = {
            attribute: !0,
            type: String,
            converter: g,
            reflect: !1,
            hasChanged: v
        };
        class b extends HTMLElement {
            constructor() {
                super(),
                this._$Ei = new Map,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$El = null,
                this.u()
            }
            static addInitializer(e) {
                var t;
                this.finalize(),
                (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
            }
            static get observedAttributes() {
                this.finalize();
                let e = [];
                return this.elementProperties.forEach((t,i)=>{
                    let r = this._$Ep(i, t);
                    void 0 !== r && (this._$Ev.set(r, i),
                    e.push(r))
                }
                ),
                e
            }
            static createProperty(e, t=f) {
                if (t.state && (t.attribute = !1),
                this.finalize(),
                this.elementProperties.set(e, t),
                !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                    let i = "symbol" == typeof e ? Symbol() : "__" + e
                      , r = this.getPropertyDescriptor(e, i, t);
                    void 0 !== r && Object.defineProperty(this.prototype, e, r)
                }
            }
            static getPropertyDescriptor(e, t, i) {
                return {
                    get() {
                        return this[t]
                    },
                    set(r) {
                        let a = this[e];
                        this[t] = r,
                        this.requestUpdate(e, a, i)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) || f
            }
            static finalize() {
                if (this.hasOwnProperty("finalized"))
                    return !1;
                this.finalized = !0;
                let e = Object.getPrototypeOf(this);
                if (e.finalize(),
                void 0 !== e.h && (this.h = [...e.h]),
                this.elementProperties = new Map(e.elementProperties),
                this._$Ev = new Map,
                this.hasOwnProperty("properties")) {
                    let e = this.properties
                      , t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                    for (let i of t)
                        this.createProperty(i, e[i])
                }
                return this.elementStyles = this.finalizeStyles(this.styles),
                !0
            }
            static finalizeStyles(e) {
                let t = [];
                if (Array.isArray(e)) {
                    let i = new Set(e.flat(1 / 0).reverse());
                    for (let e of i)
                        t.unshift(h(e))
                } else
                    void 0 !== e && t.push(h(e));
                return t
            }
            static _$Ep(e, t) {
                let i = t.attribute;
                return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
            }
            u() {
                var e;
                this._$E_ = new Promise(e=>this.enableUpdating = e),
                this._$AL = new Map,
                this._$Eg(),
                this.requestUpdate(),
                null === (e = this.constructor.h) || void 0 === e || e.forEach(e=>e(this))
            }
            addController(e) {
                var t, i;
                (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e),
                void 0 !== this.renderRoot && this.isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e))
            }
            removeController(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach((e,t)=>{
                    this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]),
                    delete this[t])
                }
                )
            }
            createRenderRoot() {
                var e;
                let t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                return d(t, this.constructor.elementStyles),
                t
            }
            connectedCallback() {
                var e;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (e = this._$ES) || void 0 === e || e.forEach(e=>{
                    var t;
                    return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                }
                )
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach(e=>{
                    var t;
                    return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                }
                )
            }
            attributeChangedCallback(e, t, i) {
                this._$AK(e, i)
            }
            _$EO(e, t, i=f) {
                var r;
                let a = this.constructor._$Ep(e, i);
                if (void 0 !== a && !0 === i.reflect) {
                    let l = (void 0 !== (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute) ? i.converter : g).toAttribute(t, i.type);
                    this._$El = e,
                    null == l ? this.removeAttribute(a) : this.setAttribute(a, l),
                    this._$El = null
                }
            }
            _$AK(e, t) {
                var i;
                let r = this.constructor
                  , a = r._$Ev.get(e);
                if (void 0 !== a && this._$El !== a) {
                    let e = r.getPropertyOptions(a)
                      , l = "function" == typeof e.converter ? {
                        fromAttribute: e.converter
                    } : void 0 !== (null === (i = e.converter) || void 0 === i ? void 0 : i.fromAttribute) ? e.converter : g;
                    this._$El = a,
                    this[a] = l.fromAttribute(t, e.type),
                    this._$El = null
                }
            }
            requestUpdate(e, t, i) {
                let r = !0;
                void 0 !== e && (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || v)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t),
                !0 === i.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map),
                this._$EC.set(e, i))) : r = !1),
                !this.isUpdatePending && r && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (e) {
                    Promise.reject(e)
                }
                let e = this.scheduleUpdate();
                return null != e && await e,
                !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var e;
                if (!this.isUpdatePending)
                    return;
                this.hasUpdated,
                this._$Ei && (this._$Ei.forEach((e,t)=>this[t] = e),
                this._$Ei = void 0);
                let t = !1
                  , i = this._$AL;
                try {
                    (t = this.shouldUpdate(i)) ? (this.willUpdate(i),
                    null === (e = this._$ES) || void 0 === e || e.forEach(e=>{
                        var t;
                        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                    }
                    ),
                    this.update(i)) : this._$Ek()
                } catch (e) {
                    throw t = !1,
                    this._$Ek(),
                    e
                }
                t && this._$AE(i)
            }
            willUpdate(e) {}
            _$AE(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach(e=>{
                    var t;
                    return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                }
                ),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(e)),
                this.updated(e)
            }
            _$Ek() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this._$EC && (this._$EC.forEach((e,t)=>this._$EO(t, this[t], e)),
                this._$EC = void 0),
                this._$Ek()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        b.finalized = !0,
        b.elementProperties = new Map,
        b.elementStyles = [],
        b.shadowRootOptions = {
            mode: "open"
        },
        null == w || w({
            ReactiveElement: b
        }),
        (null !== (ep = m.reactiveElementVersions) && void 0 !== ep ? ep : m.reactiveElementVersions = []).push("1.6.1");
        let x = window
          , y = x.trustedTypes
          , C = y ? y.createPolicy("lit-html", {
            createHTML: e=>e
        }) : void 0
          , $ = "$lit$"
          , k = `lit$ ${(Math.random() + "").slice(9)}$`
          , A = "?" + k
          , O = `<${A}>`
          , E = document
          , _ = ()=>E.createComment("")
          , I = e=>null === e || "object" != typeof e && "function" != typeof e
          , P = Array.isArray
          , M = e=>P(e) || "function" == typeof (null == e ? void 0 : e[Symbol.iterator])
          , j = "[ 	\n\f\r]"
          , T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , W = /-->/g
          , R = />/g
          , D = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g")
          , S = /'/g
          , L = /"/g
          , N = /^(?:script|style|textarea|title)$/i
          , z = e=>(t,...i)=>({
            _$litType$: e,
            strings: t,
            values: i
        })
          , H = z(1)
          , V = z(2)
          , U = Symbol.for("lit-noChange")
          , Z = Symbol.for("lit-nothing")
          , B = new WeakMap
          , F = E.createTreeWalker(E, 129, null, !1)
          , G = (e,t)=>{
            let i = e.length - 1, r = [], a, l = 2 === t ? "<svg>" : "", o = T;
            for (let t = 0; t < i; t++) {
                let i = e[t], n, s, c = -1, d = 0;
                for (; d < i.length && (o.lastIndex = d,
                null !== (s = o.exec(i))); )
                    d = o.lastIndex,
                    o === T ? "!--" === s[1] ? o = W : void 0 !== s[1] ? o = R : void 0 !== s[2] ? (N.test(s[2]) && (a = RegExp("</" + s[2], "g")),
                    o = D) : void 0 !== s[3] && (o = D) : o === D ? ">" === s[0] ? (o = null != a ? a : T,
                    c = -1) : void 0 === s[1] ? c = -2 : (c = o.lastIndex - s[2].length,
                    n = s[1],
                    o = void 0 === s[3] ? D : '"' === s[3] ? L : S) : o === L || o === S ? o = D : o === W || o === R ? o = T : (o = D,
                    a = void 0);
                let h = o === D && e[t + 1].startsWith("/>") ? " " : "";
                l += o === T ? i + O : c >= 0 ? (r.push(n),
                i.slice(0, c) + $ + i.slice(c) + k + h) : i + k + (-2 === c ? (r.push(void 0),
                t) : h)
            }
            let n = l + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
            if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return [void 0 !== C ? C.createHTML(n) : n, r]
        }
        ;
        class q {
            constructor({strings: e, _$litType$: t}, i) {
                let r;
                this.parts = [];
                let a = 0
                  , l = 0
                  , o = e.length - 1
                  , n = this.parts
                  , [s,c] = G(e, t);
                if (this.el = q.createElement(s, i),
                F.currentNode = this.el.content,
                2 === t) {
                    let e = this.el.content
                      , t = e.firstChild;
                    t.remove(),
                    e.append(...t.childNodes)
                }
                for (; null !== (r = F.nextNode()) && n.length < o; ) {
                    if (1 === r.nodeType) {
                        if (r.hasAttributes()) {
                            let e = [];
                            for (let t of r.getAttributeNames())
                                if (t.endsWith($) || t.startsWith(k)) {
                                    let i = c[l++];
                                    if (e.push(t),
                                    void 0 !== i) {
                                        let e = r.getAttribute(i.toLowerCase() + $).split(k)
                                          , t = /([.?@])?(.*)/.exec(i);
                                        n.push({
                                            type: 1,
                                            index: a,
                                            name: t[2],
                                            strings: e,
                                            ctor: "." === t[1] ? J : "?" === t[1] ? et : "@" === t[1] ? ei : Q
                                        })
                                    } else
                                        n.push({
                                            type: 6,
                                            index: a
                                        })
                                }
                            for (let t of e)
                                r.removeAttribute(t)
                        }
                        if (N.test(r.tagName)) {
                            let e = r.textContent.split(k)
                              , t = e.length - 1;
                            if (t > 0) {
                                r.textContent = y ? y.emptyScript : "";
                                for (let i = 0; i < t; i++)
                                    r.append(e[i], _()),
                                    F.nextNode(),
                                    n.push({
                                        type: 2,
                                        index: ++a
                                    });
                                r.append(e[t], _())
                            }
                        }
                    } else if (8 === r.nodeType) {
                        if (r.data === A)
                            n.push({
                                type: 2,
                                index: a
                            });
                        else {
                            let e = -1;
                            for (; -1 !== (e = r.data.indexOf(k, e + 1)); )
                                n.push({
                                    type: 7,
                                    index: a
                                }),
                                e += k.length - 1
                        }
                    }
                    a++
                }
            }
            static createElement(e, t) {
                let i = E.createElement("template");
                return i.innerHTML = e,
                i
            }
        }
        function K(e, t, i=e, r) {
            var a, l, o, n;
            if (t === U)
                return t;
            let s = void 0 !== r ? null === (a = i._$Co) || void 0 === a ? void 0 : a[r] : i._$Cl
              , c = I(t) ? void 0 : t._$litDirective$;
            return (null == s ? void 0 : s.constructor) !== c && (null === (l = null == s ? void 0 : s._$AO) || void 0 === l || l.call(s, !1),
            void 0 === c ? s = void 0 : (s = new c(e))._$AT(e, i, r),
            void 0 !== r ? (null !== (o = (n = i)._$Co) && void 0 !== o ? o : n._$Co = [])[r] = s : i._$Cl = s),
            void 0 !== s && (t = K(e, s._$AS(e, t.values), s, r)),
            t
        }
        class Y {
            constructor(e, t) {
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = e,
                this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(e) {
                var t;
                let {el: {content: i}, parts: r} = this._$AD
                  , a = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : E).importNode(i, !0);
                F.currentNode = a;
                let l = F.nextNode()
                  , o = 0
                  , n = 0
                  , s = r[0];
                for (; void 0 !== s; ) {
                    if (o === s.index) {
                        let t;
                        2 === s.type ? t = new X(l,l.nextSibling,this,e) : 1 === s.type ? t = new s.ctor(l,s.name,s.strings,this,e) : 6 === s.type && (t = new er(l,this,e)),
                        this._$AV.push(t),
                        s = r[++n]
                    }
                    o !== (null == s ? void 0 : s.index) && (l = F.nextNode(),
                    o++)
                }
                return a
            }
            v(e) {
                let t = 0;
                for (let i of this._$AV)
                    void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, t),
                    t += i.strings.length - 2) : i._$AI(e[t])),
                    t++
            }
        }
        class X {
            constructor(e, t, i, r) {
                var a;
                this.type = 2,
                this._$AH = Z,
                this._$AN = void 0,
                this._$AA = e,
                this._$AB = t,
                this._$AM = i,
                this.options = r,
                this._$Cp = null === (a = null == r ? void 0 : r.isConnected) || void 0 === a || a
            }
            get _$AU() {
                var e, t;
                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
            }
            get parentNode() {
                let e = this._$AA.parentNode
                  , t = this._$AM;
                return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode),
                e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t=this) {
                I(e = K(this, e, t)) ? e === Z || null == e || "" === e ? (this._$AH !== Z && this._$AR(),
                this._$AH = Z) : e !== this._$AH && e !== U && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : M(e) ? this.T(e) : this._(e)
            }
            k(e) {
                return this._$AA.parentNode.insertBefore(e, this._$AB)
            }
            $(e) {
                this._$AH !== e && (this._$AR(),
                this._$AH = this.k(e))
            }
            _(e) {
                this._$AH !== Z && I(this._$AH) ? this._$AA.nextSibling.data = e : this.$(E.createTextNode(e)),
                this._$AH = e
            }
            g(e) {
                var t;
                let {values: i, _$litType$: r} = e
                  , a = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = q.createElement(r.h, this.options)),
                r);
                if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === a)
                    this._$AH.v(i);
                else {
                    let e = new Y(a,this)
                      , t = e.u(this.options);
                    e.v(i),
                    this.$(t),
                    this._$AH = e
                }
            }
            _$AC(e) {
                let t = B.get(e.strings);
                return void 0 === t && B.set(e.strings, t = new q(e)),
                t
            }
            T(e) {
                P(this._$AH) || (this._$AH = [],
                this._$AR());
                let t = this._$AH, i, r = 0;
                for (let a of e)
                    r === t.length ? t.push(i = new X(this.k(_()),this.k(_()),this,this.options)) : i = t[r],
                    i._$AI(a),
                    r++;
                r < t.length && (this._$AR(i && i._$AB.nextSibling, r),
                t.length = r)
            }
            _$AR(e=this._$AA.nextSibling, t) {
                var i;
                for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t); e && e !== this._$AB; ) {
                    let t = e.nextSibling;
                    e.remove(),
                    e = t
                }
            }
            setConnected(e) {
                var t;
                void 0 === this._$AM && (this._$Cp = e,
                null === (t = this._$AP) || void 0 === t || t.call(this, e))
            }
        }
        class Q {
            constructor(e, t, i, r, a) {
                this.type = 1,
                this._$AH = Z,
                this._$AN = void 0,
                this.element = e,
                this.name = t,
                this._$AM = r,
                this.options = a,
                i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String),
                this.strings = i) : this._$AH = Z
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e, t=this, i, r) {
                let a = this.strings
                  , l = !1;
                if (void 0 === a)
                    (l = !I(e = K(this, e, t, 0)) || e !== this._$AH && e !== U) && (this._$AH = e);
                else {
                    let r, o;
                    let n = e;
                    for (e = a[0],
                    r = 0; r < a.length - 1; r++)
                        (o = K(this, n[i + r], t, r)) === U && (o = this._$AH[r]),
                        l || (l = !I(o) || o !== this._$AH[r]),
                        o === Z ? e = Z : e !== Z && (e += (null != o ? o : "") + a[r + 1]),
                        this._$AH[r] = o
                }
                l && !r && this.j(e)
            }
            j(e) {
                e === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
            }
        }
        class J extends Q {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            j(e) {
                this.element[this.name] = e === Z ? void 0 : e
            }
        }
        let ee = y ? y.emptyScript : "";
        class et extends Q {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            j(e) {
                e && e !== Z ? this.element.setAttribute(this.name, ee) : this.element.removeAttribute(this.name)
            }
        }
        class ei extends Q {
            constructor(e, t, i, r, a) {
                super(e, t, i, r, a),
                this.type = 5
            }
            _$AI(e, t=this) {
                var i;
                if ((e = null !== (i = K(this, e, t, 0)) && void 0 !== i ? i : Z) === U)
                    return;
                let r = this._$AH
                  , a = e === Z && r !== Z || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive
                  , l = e !== Z && (r === Z || a);
                a && this.element.removeEventListener(this.name, this, r),
                l && this.element.addEventListener(this.name, this, e),
                this._$AH = e
            }
            handleEvent(e) {
                var t, i;
                "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== i ? i : this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class er {
            constructor(e, t, i) {
                this.element = e,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = t,
                this.options = i
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                K(this, e)
            }
        }
        let ea = x.litHtmlPolyfillSupport;
        null == ea || ea(q, X),
        (null !== (eu = x.litHtmlVersions) && void 0 !== eu ? eu : x.litHtmlVersions = []).push("2.7.2");
        let el = (e,t,i)=>{
            var r, a;
            let l = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : t
              , o = l._$litPart$;
            if (void 0 === o) {
                let e = null !== (a = null == i ? void 0 : i.renderBefore) && void 0 !== a ? a : null;
                l._$litPart$ = o = new X(t.insertBefore(_(), e),e,void 0,null != i ? i : {})
            }
            return o._$AI(e),
            o
        }
        ;
        class eo extends b {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this._$Do = void 0
            }
            createRenderRoot() {
                var e, t;
                let i = super.createRenderRoot();
                return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = i.firstChild),
                i
            }
            update(e) {
                let t = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                super.update(e),
                this._$Do = el(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var e;
                super.connectedCallback(),
                null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
            }
            disconnectedCallback() {
                var e;
                super.disconnectedCallback(),
                null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
            }
            render() {
                return U
            }
        }
        eo.finalized = !0,
        eo._$litElement$ = !0,
        null === (ew = globalThis.litElementHydrateSupport) || void 0 === ew || ew.call(globalThis, {
            LitElement: eo
        });
        let en = globalThis.litElementPolyfillSupport;
        null == en || en({
            LitElement: eo
        }),
        (null !== (eg = globalThis.litElementVersions) && void 0 !== eg ? eg : globalThis.litElementVersions = []).push("3.3.1");
        /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        let es = e=>t=>"function" == typeof t ? (customElements.define(e, t),
        t) : ((e,t)=>{
            let {kind: i, elements: r} = t;
            return {
                kind: i,
                elements: r,
                finisher(t) {
                    customElements.define(e, t)
                }
            }
        }
        )(e, t)
          , ec = (e,t)=>"method" !== t.kind || !t.descriptor || "value"in t.descriptor ? {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: t.key,
            initializer() {
                "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
            },
            finisher(i) {
                i.createProperty(t.key, e)
            }
        } : {
            ...t,
            finisher(i) {
                i.createProperty(t.key, e)
            }
        };
        function ed(e) {
            return (t,i)=>void 0 !== i ? ((e,t,i)=>{
                t.constructor.createProperty(i, e)
            }
            )(e, t, i) : ec(e, t)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        function eh(e) {
            return ed({
                ...e,
                state: !0
            })
        }
        null != (null === (ev = window.HTMLSlotElement) || void 0 === ev ? void 0 : ev.prototype.assignedElements) || ((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType === Node.ELEMENT_NODE));
        var em, ep, eu, ew, eg, ev, ef, eb = i(30218);
        /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        let ex = {
            ATTRIBUTE: 1,
            CHILD: 2,
            PROPERTY: 3,
            BOOLEAN_ATTRIBUTE: 4,
            EVENT: 5,
            ELEMENT: 6
        };
        class ey {
            constructor(e) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(e, t, i) {
                this._$Ct = e,
                this._$AM = t,
                this._$Ci = i
            }
            _$AS(e, t) {
                return this.update(e, t)
            }
            update(e, t) {
                return this.render(...t)
            }
        }
        /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
        let eC = (em = class extends ey {
            constructor(e) {
                var t;
                if (super(e),
                e.type !== ex.ATTRIBUTE || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
                    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
            }
            render(e) {
                return " " + Object.keys(e).filter(t=>e[t]).join(" ") + " "
            }
            update(e, [t]) {
                var i, r;
                if (void 0 === this.it) {
                    for (let r in this.it = new Set,
                    void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(e=>"" !== e))),
                    t)
                        !t[r] || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(r)) || this.it.add(r);
                    return this.render(t)
                }
                let a = e.element.classList;
                for (let e in this.it.forEach(e=>{
                    e in t || (a.remove(e),
                    this.it.delete(e))
                }
                ),
                t) {
                    let i = !!t[e];
                    i === this.it.has(e) || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(e)) || (i ? (a.add(e),
                    this.it.add(e)) : (a.remove(e),
                    this.it.delete(e)))
                }
                return U
            }
        }
        ,
        (...e)=>({
            _$litDirective$: em,
            values: e
        }))
          , e$ = {
            duration: .3,
            delay: 0,
            endDelay: 0,
            repeat: 0,
            easing: "ease"
        }
          , ek = {
            ms: e=>1e3 * e,
            s: e=>e / 1e3
        }
          , eA = ()=>{}
          , eO = e=>e;
        function eE(e, t=!0) {
            if (e && "finished" !== e.playState)
                try {
                    e.stop ? e.stop() : (t && e.commitStyles(),
                    e.cancel())
                } catch (e) {}
        }
        let e_ = e=>e()
          , eI = (e,t,i=e$.duration)=>new Proxy({
            animations: e.map(e_).filter(Boolean),
            duration: i,
            options: t
        },eM)
          , eP = e=>e.animations[0]
          , eM = {
            get: (e,t)=>{
                let i = eP(e);
                switch (t) {
                case "duration":
                    return e.duration;
                case "currentTime":
                    return ek.s((null == i ? void 0 : i[t]) || 0);
                case "playbackRate":
                case "playState":
                    return null == i ? void 0 : i[t];
                case "finished":
                    return e.finished || (e.finished = Promise.all(e.animations.map(ej)).catch(eA)),
                    e.finished;
                case "stop":
                    return ()=>{
                        e.animations.forEach(e=>eE(e))
                    }
                    ;
                case "forEachNative":
                    return t=>{
                        e.animations.forEach(i=>t(i, e))
                    }
                    ;
                default:
                    return void 0 === (null == i ? void 0 : i[t]) ? void 0 : ()=>e.animations.forEach(e=>e[t]())
                }
            }
            ,
            set: (e,t,i)=>{
                switch (t) {
                case "currentTime":
                    i = ek.ms(i);
                case "currentTime":
                case "playbackRate":
                    for (let r = 0; r < e.animations.length; r++)
                        e.animations[r][t] = i;
                    return !0
                }
                return !1
            }
        }
          , ej = e=>e.finished
          , eT = e=>"object" == typeof e && !!e.createAnimation
          , eW = e=>"number" == typeof e
          , eR = e=>Array.isArray(e) && !eW(e[0])
          , eD = (e,t,i)=>-i * e + i * t + e
          , eS = (e,t,i)=>t - e == 0 ? 1 : (i - e) / (t - e);
        function eL(e, t) {
            let i = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
                let a = eS(0, t, r);
                e.push(eD(i, 1, a))
            }
        }
        let eN = (e,t,i)=>{
            let r = t - e;
            return ((i - e) % r + r) % r + e
        }
          , ez = (e,t,i)=>Math.min(Math.max(i, e), t)
          , eH = (e,t,i)=>(((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
        function eV(e, t, i, r) {
            if (e === t && i === r)
                return eO;
            let a = t=>(function(e, t, i, r, a) {
                let l, o;
                let n = 0;
                do
                    (l = eH(o = t + (i - t) / 2, r, a) - e) > 0 ? i = o : t = o;
                while (Math.abs(l) > 1e-7 && ++n < 12);
                return o
            }
            )(t, 0, 1, e, i);
            return e=>0 === e || 1 === e ? e : eH(a(e), t, r)
        }
        let eU = (e,t="end")=>i=>{
            i = "end" === t ? Math.min(i, .999) : Math.max(i, .001);
            let r = i * e;
            return ez(0, 1, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
        }
          , eZ = e=>"function" == typeof e
          , eB = e=>Array.isArray(e) && eW(e[0])
          , eF = {
            ease: eV(.25, .1, .25, 1),
            "ease-in": eV(.42, 0, 1, 1),
            "ease-in-out": eV(.42, 0, .58, 1),
            "ease-out": eV(0, 0, .58, 1)
        }
          , eG = /\((.*?)\)/;
        function eq(e) {
            if (eZ(e))
                return e;
            if (eB(e))
                return eV(...e);
            if (eF[e])
                return eF[e];
            if (e.startsWith("steps")) {
                let t = eG.exec(e);
                if (t) {
                    let e = t[1].split(",");
                    return eU(parseFloat(e[0]), e[1].trim())
                }
            }
            return eO
        }
        class eK {
            constructor(e, t=[0, 1], {easing: i, duration: r=e$.duration, delay: a=e$.delay, endDelay: l=e$.endDelay, repeat: o=e$.repeat, offset: n, direction: s="normal"}={}) {
                if (this.startTime = null,
                this.rate = 1,
                this.t = 0,
                this.cancelTimestamp = null,
                this.easing = eO,
                this.duration = 0,
                this.totalDuration = 0,
                this.repeat = 0,
                this.playState = "idle",
                this.finished = new Promise((e,t)=>{
                    this.resolve = e,
                    this.reject = t
                }
                ),
                eT(i = i || e$.easing)) {
                    let e = i.createAnimation(t);
                    i = e.easing,
                    t = e.keyframes || t,
                    r = e.duration || r
                }
                this.repeat = o,
                this.easing = eR(i) ? eO : eq(i),
                this.updateDuration(r);
                let c = function(e, t=function(e) {
                    let t = [0];
                    return eL(t, e - 1),
                    t
                }(e.length), i=eO) {
                    let r = e.length
                      , a = r - t.length;
                    return a > 0 && eL(t, a),
                    a=>{
                        var l;
                        let o = 0;
                        for (; o < r - 2 && !(a < t[o + 1]); o++)
                            ;
                        let n = ez(0, 1, eS(t[o], t[o + 1], a))
                          , s = (l = o,
                        eR(i) ? i[eN(0, i.length, l)] : i);
                        return n = s(n),
                        eD(e[o], e[o + 1], n)
                    }
                }(t, n, eR(i) ? i.map(eq) : eO);
                this.tick = t=>{
                    var i;
                    let r = 0;
                    r = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate,
                    this.t = r,
                    r /= 1e3,
                    r = Math.max(r - a, 0),
                    "finished" === this.playState && void 0 === this.pauseTime && (r = this.totalDuration);
                    let o = r / this.duration
                      , n = Math.floor(o)
                      , d = o % 1;
                    !d && o >= 1 && (d = 1),
                    1 === d && n--;
                    let h = n % 2;
                    ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (d = 1 - d);
                    let m = r >= this.totalDuration ? 1 : Math.min(d, 1)
                      , p = c(this.easing(m));
                    e(p);
                    let u = void 0 === this.pauseTime && ("finished" === this.playState || r >= this.totalDuration + l);
                    u ? (this.playState = "finished",
                    null === (i = this.resolve) || void 0 === i || i.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                }
                ,
                this.play()
            }
            play() {
                let e = performance.now();
                this.playState = "running",
                void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e),
                this.cancelTimestamp = this.startTime,
                this.pauseTime = void 0,
                this.frameRequestId = requestAnimationFrame(this.tick)
            }
            pause() {
                this.playState = "paused",
                this.pauseTime = this.t
            }
            finish() {
                this.playState = "finished",
                this.tick(0)
            }
            stop() {
                var e;
                this.playState = "idle",
                void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId),
                null === (e = this.reject) || void 0 === e || e.call(this, !1)
            }
            cancel() {
                this.stop(),
                this.tick(this.cancelTimestamp)
            }
            reverse() {
                this.rate *= -1
            }
            commitStyles() {}
            updateDuration(e) {
                this.duration = e,
                this.totalDuration = e * (this.repeat + 1)
            }
            get currentTime() {
                return this.t
            }
            set currentTime(e) {
                void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
            }
            get playbackRate() {
                return this.rate
            }
            set playbackRate(e) {
                this.rate = e
            }
        }
        var eY = function() {};
        class eX {
            setAnimation(e) {
                this.animation = e,
                null == e || e.finished.then(()=>this.clearAnimation()).catch(()=>{}
                )
            }
            clearAnimation() {
                this.animation = this.generator = void 0
            }
        }
        let eQ = new WeakMap;
        function eJ(e) {
            return eQ.has(e) || eQ.set(e, {
                transforms: [],
                values: new Map
            }),
            eQ.get(e)
        }
        let e0 = ["", "X", "Y", "Z"]
          , e1 = {
            x: "translateX",
            y: "translateY",
            z: "translateZ"
        }
          , e3 = {
            syntax: "<angle>",
            initialValue: "0deg",
            toDefaultUnit: e=>e + "deg"
        }
          , e2 = {
            translate: {
                syntax: "<length-percentage>",
                initialValue: "0px",
                toDefaultUnit: e=>e + "px"
            },
            rotate: e3,
            scale: {
                syntax: "<number>",
                initialValue: 1,
                toDefaultUnit: eO
            },
            skew: e3
        }
          , e5 = new Map
          , e4 = e=>`--motion-${e}`
          , e6 = ["x", "y", "z"];
        ["translate", "scale", "rotate", "skew"].forEach(e=>{
            e0.forEach(t=>{
                e6.push(e + t),
                e5.set(e4(e + t), e2[e])
            }
            )
        }
        );
        let e7 = (e,t)=>e6.indexOf(e) - e6.indexOf(t)
          , e8 = new Set(e6)
          , e9 = e=>e8.has(e)
          , te = (e,t)=>{
            var i;
            e1[t] && (t = e1[t]);
            let {transforms: r} = eJ(e);
            i = t,
            -1 === r.indexOf(i) && r.push(i),
            e.style.transform = tt(r)
        }
          , tt = e=>e.sort(e7).reduce(ti, "").trim()
          , ti = (e,t)=>`${e} ${t}(var(${e4(t)}))`
          , tr = e=>e.startsWith("--")
          , ta = new Set
          , tl = (e,t)=>document.createElement("div").animate(e, t)
          , to = {
            cssRegisterProperty: ()=>"undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
            partialKeyframes: ()=>{
                try {
                    tl({
                        opacity: [1]
                    })
                } catch (e) {
                    return !1
                }
                return !0
            }
            ,
            finished: ()=>!!tl({
                opacity: [0, 1]
            }, {
                duration: .001
            }).finished,
            linearEasing: ()=>{
                try {
                    tl({
                        opacity: 0
                    }, {
                        easing: "linear(0, 1)"
                    })
                } catch (e) {
                    return !1
                }
                return !0
            }
        }
          , tn = {}
          , ts = {};
        for (let e in to)
            ts[e] = ()=>(void 0 === tn[e] && (tn[e] = to[e]()),
            tn[e]);
        let tc = (e,t)=>{
            let i = ""
              , r = Math.round(t / .015);
            for (let t = 0; t < r; t++)
                i += e(eS(0, r - 1, t)) + ", ";
            return i.substring(0, i.length - 2)
        }
          , td = (e,t)=>eZ(e) ? ts.linearEasing() ? `linear(${tc(e, t)})` : e$.easing : eB(e) ? th(e) : e
          , th = ([e,t,i,r])=>`cubic-bezier(${e}, ${t}, ${i}, ${r})`
          , tm = e=>Array.isArray(e) ? e : [e];
        function tp(e) {
            return e1[e] && (e = e1[e]),
            e9(e) ? e4(e) : e
        }
        let tu = {
            get: (e,t)=>{
                let i = tr(t = tp(t)) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                if (!i && 0 !== i) {
                    let e = e5.get(t);
                    e && (i = e.initialValue)
                }
                return i
            }
            ,
            set: (e,t,i)=>{
                tr(t = tp(t)) ? e.style.setProperty(t, i) : e.style[t] = i
            }
        }
          , tw = e=>"string" == typeof e
          , tg = (e,t)=>e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
          , tv = function(e, t, i={}) {
            var r, a, l, o, n;
            "string" == typeof (r = e) ? a ? (null !== (l = a[r]) && void 0 !== l || (a[r] = document.querySelectorAll(r)),
            r = a[r]) : r = document.querySelectorAll(r) : r instanceof Element && (r = [r]),
            e = Array.from(r || []);
            let s = e.length;
            eY(!!s, "No valid element provided."),
            eY(!!t, "No keyframes defined.");
            let c = [];
            for (let r = 0; r < s; r++) {
                let a = e[r];
                for (let e in t) {
                    let l = tg(i, e);
                    l.delay = (o = l.delay,
                    n = r,
                    eZ(o) ? o(n, s) : o);
                    let d = function(e, t, i, r={}, a) {
                        var l;
                        let o;
                        let n = window.__MOTION_DEV_TOOLS_RECORD
                          , s = !1 !== r.record && n
                          , {duration: c=e$.duration, delay: d=e$.delay, endDelay: h=e$.endDelay, repeat: m=e$.repeat, easing: p=e$.easing, persist: u=!1, direction: w, offset: g, allowWebkitAcceleration: v=!1} = r
                          , f = eJ(e)
                          , b = e9(t)
                          , x = ts.waapi();
                        b && te(e, t);
                        let y = tp(t)
                          , C = ((l = f.values).has(y) || l.set(y, new eX),
                        l.get(y))
                          , $ = e5.get(y);
                        return eE(C.animation, !(eT(p) && C.generator) && !1 !== r.record),
                        ()=>{
                            let l = ()=>{
                                var t, i;
                                return null !== (i = null !== (t = tu.get(e, y)) && void 0 !== t ? t : null == $ ? void 0 : $.initialValue) && void 0 !== i ? i : 0
                            }
                              , f = function(e, t) {
                                for (let i = 0; i < e.length; i++)
                                    null === e[i] && (e[i] = i ? e[i - 1] : t());
                                return e
                            }(tm(i), l)
                              , k = function(e, t) {
                                var i;
                                let r = (null == t ? void 0 : t.toDefaultUnit) || eO
                                  , a = e[e.length - 1];
                                if (tw(a)) {
                                    let e = (null === (i = a.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === i ? void 0 : i[2]) || "";
                                    e && (r = t=>t + e)
                                }
                                return r
                            }(f, $);
                            if (eT(p)) {
                                let e = p.createAnimation(f, "opacity" !== t, l, y, C);
                                p = e.easing,
                                f = e.keyframes || f,
                                c = e.duration || c
                            }
                            if (tr(y) && (ts.cssRegisterProperty() ? function(e) {
                                if (!ta.has(e)) {
                                    ta.add(e);
                                    try {
                                        let {syntax: t, initialValue: i} = e5.has(e) ? e5.get(e) : {};
                                        CSS.registerProperty({
                                            name: e,
                                            inherits: !1,
                                            syntax: t,
                                            initialValue: i
                                        })
                                    } catch (e) {}
                                }
                            }(y) : x = !1),
                            b && !ts.linearEasing() && (eZ(p) || eR(p) && p.some(eZ)) && (x = !1),
                            x) {
                                $ && (f = f.map(e=>eW(e) ? $.toDefaultUnit(e) : e)),
                                1 === f.length && (!ts.partialKeyframes() || s) && f.unshift(l());
                                let t = {
                                    delay: ek.ms(d),
                                    duration: ek.ms(c),
                                    endDelay: ek.ms(h),
                                    easing: eR(p) ? void 0 : td(p, c),
                                    direction: w,
                                    iterations: m + 1,
                                    fill: "both"
                                };
                                (o = e.animate({
                                    [y]: f,
                                    offset: g,
                                    easing: eR(p) ? p.map(e=>td(e, c)) : void 0
                                }, t)).finished || (o.finished = new Promise((e,t)=>{
                                    o.onfinish = e,
                                    o.oncancel = t
                                }
                                ));
                                let i = f[f.length - 1];
                                o.finished.then(()=>{
                                    u || (tu.set(e, y, i),
                                    o.cancel())
                                }
                                ).catch(eA),
                                v || (o.playbackRate = 1.000001)
                            } else if (a && b)
                                1 === (f = f.map(e=>"string" == typeof e ? parseFloat(e) : e)).length && f.unshift(parseFloat(l())),
                                o = new a(t=>{
                                    tu.set(e, y, k ? k(t) : t)
                                }
                                ,f,Object.assign(Object.assign({}, r), {
                                    duration: c,
                                    easing: p
                                }));
                            else {
                                let t = f[f.length - 1];
                                tu.set(e, y, $ && eW(t) ? $.toDefaultUnit(t) : t)
                            }
                            return s && n(e, t, f, {
                                duration: c,
                                delay: d,
                                easing: p,
                                repeat: m,
                                offset: g
                            }, "motion-one"),
                            C.setAnimation(o),
                            o
                        }
                    }(a, e, t[e], l, eK);
                    c.push(d)
                }
            }
            return eI(c, i, i.duration)
        };
        function tf(e, t={}) {
            return eI([()=>{
                let i = new eK(e,[0, 1],t);
                return i.finished.catch(()=>{}
                ),
                i
            }
            ], t, t.duration)
        }
        function tb(e, t, i) {
            let r = eZ(e) ? tf : tv;
            return r(e, t, i)
        }
        var tx = i(92592)
          , ty = Object.defineProperty
          , tC = Object.getOwnPropertySymbols
          , t$ = Object.prototype.hasOwnProperty
          , tk = Object.prototype.propertyIsEnumerable
          , tA = (e,t,i)=>t in e ? ty(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , tO = (e,t)=>{
            for (var i in t || (t = {}))
                t$.call(t, i) && tA(e, i, t[i]);
            if (tC)
                for (var i of tC(t))
                    tk.call(t, i) && tA(e, i, t[i]);
            return e
        }
        ;
        function tE() {
            return {
                "--w3m-accent-color": "#3396FF",
                "--w3m-accent-fill-color": "#FFFFFF",
                "--w3m-z-index": "89",
                "--w3m-background-color": "#3396FF",
                "--w3m-background-border-radius": "8px",
                "--w3m-container-border-radius": "30px",
                "--w3m-wallet-icon-border-radius": "15px",
                "--w3m-wallet-icon-large-border-radius": "30px",
                "--w3m-wallet-icon-small-border-radius": "7px",
                "--w3m-input-border-radius": "28px",
                "--w3m-button-border-radius": "10px",
                "--w3m-notification-border-radius": "36px",
                "--w3m-secondary-button-border-radius": "28px",
                "--w3m-icon-button-border-radius": "50%",
                "--w3m-button-hover-highlight-border-radius": "10px",
                "--w3m-text-big-bold-size": "20px",
                "--w3m-text-big-bold-weight": "600",
                "--w3m-text-big-bold-line-height": "24px",
                "--w3m-text-big-bold-letter-spacing": "-0.03em",
                "--w3m-text-big-bold-text-transform": "none",
                "--w3m-text-xsmall-bold-size": "10px",
                "--w3m-text-xsmall-bold-weight": "700",
                "--w3m-text-xsmall-bold-line-height": "12px",
                "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                "--w3m-text-xsmall-bold-text-transform": "uppercase",
                "--w3m-text-xsmall-regular-size": "12px",
                "--w3m-text-xsmall-regular-weight": "600",
                "--w3m-text-xsmall-regular-line-height": "14px",
                "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                "--w3m-text-xsmall-regular-text-transform": "none",
                "--w3m-text-small-thin-size": "14px",
                "--w3m-text-small-thin-weight": "500",
                "--w3m-text-small-thin-line-height": "16px",
                "--w3m-text-small-thin-letter-spacing": "-0.03em",
                "--w3m-text-small-thin-text-transform": "none",
                "--w3m-text-small-regular-size": "14px",
                "--w3m-text-small-regular-weight": "600",
                "--w3m-text-small-regular-line-height": "16px",
                "--w3m-text-small-regular-letter-spacing": "-0.03em",
                "--w3m-text-small-regular-text-transform": "none",
                "--w3m-text-medium-regular-size": "16px",
                "--w3m-text-medium-regular-weight": "600",
                "--w3m-text-medium-regular-line-height": "20px",
                "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                "--w3m-text-medium-regular-text-transform": "none",
                "--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                "--w3m-success-color": "rgb(38,181,98)",
                "--w3m-error-color": "rgb(242, 90, 103)"
            }
        }
        let t_ = {
            getPreset: e=>tE()[e],
            setTheme() {
                let e = document.querySelector(":root")
                  , {themeVariables: t} = eb.Ic.state;
                if (e) {
                    let i = tO(tO(tO(tO({}, function() {
                        var e;
                        let t = null != (e = eb.Ic.state.themeMode) ? e : "dark"
                          , i = {
                            light: {
                                foreground: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(121,134,134)",
                                    3: "rgb(158,169,169)"
                                },
                                background: {
                                    1: "rgb(255,255,255)",
                                    2: "rgb(241,243,243)",
                                    3: "rgb(228,231,231)"
                                },
                                overlay: "rgba(0,0,0,0.1)"
                            },
                            dark: {
                                foreground: {
                                    1: "rgb(228,231,231)",
                                    2: "rgb(148,158,158)",
                                    3: "rgb(110,119,119)"
                                },
                                background: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(39,42,42)",
                                    3: "rgb(59,64,64)"
                                },
                                overlay: "rgba(255,255,255,0.1)"
                            }
                        }[t];
                        return {
                            "--w3m-color-fg-1": i.foreground[1],
                            "--w3m-color-fg-2": i.foreground[2],
                            "--w3m-color-fg-3": i.foreground[3],
                            "--w3m-color-bg-1": i.background[1],
                            "--w3m-color-bg-2": i.background[2],
                            "--w3m-color-bg-3": i.background[3],
                            "--w3m-color-overlay": i.overlay
                        }
                    }()), tE()), t), function() {
                        let {themeVariables: e} = eb.Ic.state;
                        return {
                            "--w3m-background-image-url": null != e && e["--w3m-background-image-url"] ? `url(${e["--w3m-background-image-url"]})` : "none"
                        }
                    }());
                    Object.entries(i).forEach(([t,i])=>e.style.setProperty(t, i))
                }
            },
            globalCss: c`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`
        }
          , tI = c`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
        var tP = Object.defineProperty
          , tM = Object.getOwnPropertyDescriptor
          , tj = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? tM(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && tP(t, i, l),
            l
        }
        ;
        let tT = class extends eo {
            constructor() {
                super(...arguments),
                this.icon = void 0,
                this.label = "",
                this.onClick = ()=>null
            }
            render() {
                return H`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
            }
        }
        ;
        tT.styles = [t_.globalCss, tI],
        tj([ed()], tT.prototype, "icon", 2),
        tj([ed()], tT.prototype, "label", 2),
        tj([ed()], tT.prototype, "onClick", 2),
        tT = tj([es("w3m-box-button")], tT);
        let tW = c`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost,.w3m-ghost:hover::after,.w3m-outline{background-color:transparent}.w3m-ghost:hover{opacity:.5}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
        var tR = Object.defineProperty
          , tD = Object.getOwnPropertyDescriptor
          , tS = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? tD(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && tR(t, i, l),
            l
        }
        ;
        let tL = class extends eo {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.iconLeft = void 0,
                this.iconRight = void 0,
                this.onClick = ()=>null,
                this.variant = "default"
            }
            render() {
                let e = {
                    "w3m-icon-left": void 0 !== this.iconLeft,
                    "w3m-icon-right": void 0 !== this.iconRight,
                    "w3m-ghost": "ghost" === this.variant,
                    "w3m-outline": "outline" === this.variant
                }
                  , t = "inverse";
                return "ghost" === this.variant && (t = "secondary"),
                "outline" === this.variant && (t = "accent"),
                H`<button class="${eC(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-regular" color="${t}"><slot></slot></w3m-text>${this.iconRight}</button>`
            }
        }
        ;
        tL.styles = [t_.globalCss, tW],
        tS([ed()], tL.prototype, "disabled", 2),
        tS([ed()], tL.prototype, "iconLeft", 2),
        tS([ed()], tL.prototype, "iconRight", 2),
        tS([ed()], tL.prototype, "onClick", 2),
        tS([ed()], tL.prototype, "variant", 2),
        tL = tS([es("w3m-button")], tL);
        let tN = c`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}`;
        var tz = Object.defineProperty
          , tH = Object.getOwnPropertyDescriptor
          , tV = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? tH(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && tz(t, i, l),
            l
        }
        ;
        let tU = class extends eo {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.variant = "primary"
            }
            render() {
                let e = {
                    "w3m-secondary": "secondary" === this.variant
                };
                return H`<button ?disabled="${this.disabled}" class="${eC(e)}"><slot></slot></button>`
            }
        }
        ;
        tU.styles = [t_.globalCss, tN],
        tV([ed()], tU.prototype, "disabled", 2),
        tV([ed()], tU.prototype, "variant", 2),
        tU = tV([es("w3m-button-big")], tU);
        let tZ = c`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
        var tB = Object.defineProperty
          , tF = Object.getOwnPropertyDescriptor;
        let tG = class extends eo {
            render() {
                return H`<div><slot></slot></div>`
            }
        }
        ;
        tG.styles = [t_.globalCss, tZ],
        tG = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? tF(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && tB(t, i, l),
            l
        }
        )([es("w3m-info-footer")], tG);
        let tq = {
            CROSS_ICON: V`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
            WALLET_CONNECT_LOGO: V`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
            WALLET_CONNECT_ICON: V`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
            WALLET_CONNECT_ICON_COLORED: V`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
            BACK_ICON: V`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
            COPY_ICON: V`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
            RETRY_ICON: V`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
            DESKTOP_ICON: V`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
            MOBILE_ICON: V`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
            ARROW_DOWN_ICON: V`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
            ARROW_UP_RIGHT_ICON: V`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
            ARROW_RIGHT_ICON: V`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
            QRCODE_ICON: V`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
            SCAN_ICON: V`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
            CHECKMARK_ICON: V`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
            HELP_ETH_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
            HELP_PAINTING_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
            HELP_CHART_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
            HELP_KEY_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
            HELP_USER_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
            HELP_LOCK_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
            HELP_COMPAS_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
            HELP_NOUN_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
            HELP_DAO_IMG: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
            SEARCH_ICON: V`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
            HELP_ICON: V`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
            WALLET_ICON: V`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
            NETWORK_PLACEHOLDER: V`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
            WALLET_PLACEHOLDER: V`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
            TOKEN_PLACEHOLDER: V`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
            ACCOUNT_COPY: V`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
            ACCOUNT_DISCONNECT: V`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
            GLOBE_ICON: V`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
        }
          , tK = c`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;
        var tY = Object.defineProperty
          , tX = Object.getOwnPropertyDescriptor
          , tQ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? tX(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && tY(t, i, l),
            l
        }
        ;
        let tJ = class extends eo {
            constructor() {
                super(),
                this.isHelp = !1,
                this.unsubscribeRouter = void 0,
                this.unsubscribeRouter = eb.AV.subscribe(e=>{
                    this.isHelp = "Help" === e.view
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeRouter) || e.call(this)
            }
            onHelp() {
                eb.AV.push("Help")
            }
            logoTemplate() {
                var e;
                let t = null == (e = eb.Ic.state.themeVariables) ? void 0 : e["--w3m-logo-image-url"];
                return t ? H`<img src="${t}">` : tq.WALLET_CONNECT_LOGO
            }
            render() {
                let e = {
                    "w3m-help-active": this.isHelp
                };
                return H`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${eC(e)}"><button @click="${this.onHelp}">${tq.HELP_ICON}</button> <button @click="${eb.jb.close}">${tq.CROSS_ICON}</button></div></div>`
            }
        }
        ;
        tJ.styles = [t_.globalCss, tK],
        tQ([eh()], tJ.prototype, "isHelp", 2),
        tJ = tQ([es("w3m-modal-backcard")], tJ);
        let t0 = c`main{padding:20px;padding-top:0;width:100%}`;
        var t1 = Object.defineProperty
          , t3 = Object.getOwnPropertyDescriptor;
        let t2 = class extends eo {
            render() {
                return H`<main><slot></slot></main>`
            }
        }
        ;
        t2.styles = [t_.globalCss, t0],
        t2 = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? t3(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && t1(t, i, l),
            l
        }
        )([es("w3m-modal-content")], t2);
        let t5 = c`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
        var t4 = Object.defineProperty
          , t6 = Object.getOwnPropertyDescriptor;
        let t7 = class extends eo {
            render() {
                return H`<footer><slot></slot></footer>`
            }
        }
        ;
        t7.styles = [t_.globalCss, t5],
        t7 = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? t6(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && t4(t, i, l),
            l
        }
        )([es("w3m-modal-footer")], t7);
        let t8 = c`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
        var t9 = Object.defineProperty
          , ie = Object.getOwnPropertyDescriptor
          , it = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? ie(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && t9(t, i, l),
            l
        }
        ;
        let ii = class extends eo {
            constructor() {
                super(...arguments),
                this.title = "",
                this.onAction = void 0,
                this.actionIcon = void 0,
                this.border = !1
            }
            backBtnTemplate() {
                return H`<button class="w3m-back-btn" @click="${eb.AV.goBack}">${tq.BACK_ICON}</button>`
            }
            actionBtnTemplate() {
                return H`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
            }
            render() {
                let e = {
                    "w3m-border": this.border
                }
                  , t = eb.AV.state.history.length > 1
                  , i = this.title ? H`<w3m-text variant="big-bold">${this.title}</w3m-text>` : H`<slot></slot>`;
                return H`<header class="${eC(e)}">${t ? this.backBtnTemplate() : null} ${i} ${this.onAction ? this.actionBtnTemplate() : null}</header>`
            }
        }
        ;
        ii.styles = [t_.globalCss, t8],
        it([ed()], ii.prototype, "title", 2),
        it([ed()], ii.prototype, "onAction", 2),
        it([ed()], ii.prototype, "actionIcon", 2),
        it([ed()], ii.prototype, "border", 2),
        ii = it([es("w3m-modal-header")], ii);
        let ir = {
            1: "692ed6ba-e569-459a-556a-776476829e00",
            42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00"
        }
          , ia = {
            ETH: {
                icon: "692ed6ba-e569-459a-556a-776476829e00"
            },
            WETH: {
                icon: "692ed6ba-e569-459a-556a-776476829e00"
            },
            AVAX: {
                icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
            },
            FTM: {
                icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
            },
            BNB: {
                icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
            },
            MATIC: {
                icon: "41d04d42-da3b-4453-8506-668cc0727900"
            },
            OP: {
                icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
            },
            xDAI: {
                icon: "02b53f6a-e3d4-479e-1cb4-21178987d100"
            },
            EVMOS: {
                icon: "f926ff41-260d-4028-635e-91913fc28e00"
            },
            METIS: {
                icon: "3897a66d-40b9-4833-162f-a2c90531c900"
            },
            IOTX: {
                icon: "34e68754-e536-40da-c153-6ef2e7188a00"
            }
        }
          , il = {
            externalWallets() {
                let {isStandalone: e} = eb.zb.state;
                return e ? [] : eb.Id.client().getConnectors().filter(e=>"injected" !== e.id)
            },
            manualMobileWallets() {
                var e;
                return null != (e = eb.t0.state.mobileWallets) ? e : []
            },
            manualDesktopWallets() {
                var e;
                return null != (e = eb.t0.state.desktopWallets) ? e : []
            },
            manualWallets() {
                var e;
                let {mobileWallets: t, desktopWallets: i} = eb.t0.state;
                return null != (e = eb.zv.isMobile() ? t : i) ? e : []
            },
            installedInjectedWallets() {
                let {isStandalone: e} = eb.zb.state;
                if (e || !eb.Id.client().isInjectedProviderInstalled())
                    return [];
                let {namespace: t} = eb.Id.client()
                  , {injectedWallets: i} = eb.uc.state
                  , r = i.filter(({injected: e})=>!!e.some(e=>eb.Id.client().safeCheckInjectedProvider(e.injected_id) && e.namespace === t));
                return r.length > 1 && (r = r.filter(({injected: e})=>!!e.map(({injected_id: e})=>e).every(e=>"isMetaMask" !== e))),
                r.length ? r : [{
                    name: "Browser",
                    id: "browser",
                    image_id: void 0
                }]
            },
            injectedWallets() {
                let {isStandalone: e} = eb.zb.state
                  , {explorerExcludedWalletIds: t, explorerRecommendedWalletIds: i} = eb.t0.state
                  , r = eb.zv.isMobile();
                if (e || "ALL" === t || r)
                    return [];
                let {namespace: a} = eb.Id.client()
                  , {injectedWallets: l} = eb.uc.state;
                return l.filter(({id: e, injected: r})=>{
                    let l = eb.zv.isArray(t) ? t : []
                      , o = eb.zv.isArray(i) ? i : [];
                    return !!r.some(t=>t.namespace === a && !l.includes(e) && !o.includes(e))
                }
                )
            },
            recentWallet: ()=>io.getRecentWallet(),
            recomendedWallets(e=!1) {
                var t;
                let i = il.installedInjectedWallets().map(({id: e})=>e)
                  , r = e || null == (t = il.recentWallet()) ? void 0 : t.id
                  , a = [...i, r]
                  , {recomendedWallets: l} = eb.uc.state;
                return l.filter(e=>!a.includes(e.id))
            }
        }
          , io = {
            MOBILE_BREAKPOINT: 600,
            W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
            EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
            rejectStandaloneButtonComponent() {
                let {isStandalone: e} = eb.zb.state;
                if (e)
                    throw Error("Web3Modal button components are not available in standalone mode.")
            },
            getShadowRootElement(e, t) {
                let i = e.renderRoot.querySelector(t);
                if (!i)
                    throw Error(`${t} not found`);
                return i
            },
            getWalletIcon({id: e, image_id: t}) {
                let {walletImages: i} = eb.t0.state;
                return null != i && i[e] ? i[e] : t ? eb.uc.getWalletImageUrl(t) : ""
            },
            getWalletName: (e,t=!1)=>t ? e.split(" ")[0] : e,
            getChainIcon(e) {
                var t;
                let i = ir[e]
                  , {projectId: r, chainImages: a} = eb.t0.state;
                return null != (t = a?.[e]) ? t : r && i ? eb.uc.getAssetImageUrl(i) : ""
            },
            getTokenIcon(e) {
                var t, i;
                let r = null == (t = ia[e]) ? void 0 : t.icon
                  , {projectId: a, tokenImages: l} = eb.t0.state;
                return null != (i = l?.[e]) ? i : a && r ? eb.uc.getAssetImageUrl(r) : ""
            },
            isMobileAnimation: ()=>window.innerWidth <= io.MOBILE_BREAKPOINT,
            async preloadImage(e) {
                let t = new Promise((t,i)=>{
                    let r = new Image;
                    r.onload = t,
                    r.onerror = i,
                    r.src = e
                }
                );
                return Promise.race([t, eb.zv.wait(3e3)])
            },
            getErrorMessage: e=>e instanceof Error ? e.message : "Unknown Error",
            debounce(e, t=500) {
                let i;
                return (...r)=>{
                    i && clearTimeout(i),
                    i = setTimeout(function() {
                        e(...r)
                    }, t)
                }
            },
            handleMobileLinking(e) {
                var t;
                let i;
                let {standaloneUri: r} = eb.zb.state
                  , {pairingUri: a} = eb.kD.state
                  , {mobile: l, name: o} = e
                  , n = l?.native
                  , s = l?.universal;
                io.setRecentWallet(e),
                t = r || a,
                i = "",
                n ? i = eb.zv.formatUniversalUrl(n, t, o) : s && (i = eb.zv.formatNativeUrl(s, t, o)),
                eb.zv.openHref(i, "_self")
            },
            handleAndroidLinking() {
                let {standaloneUri: e} = eb.zb.state
                  , {pairingUri: t} = eb.kD.state;
                e ? (eb.zv.setWalletConnectAndroidDeepLink(e),
                eb.zv.openHref(e, "_self")) : (eb.zv.setWalletConnectAndroidDeepLink(t),
                eb.zv.openHref(t, "_self"))
            },
            async handleUriCopy() {
                let {standaloneUri: e} = eb.zb.state
                  , {pairingUri: t} = eb.kD.state;
                e ? await navigator.clipboard.writeText(e) : await navigator.clipboard.writeText(t),
                eb.Vs.openToast("Link copied", "success")
            },
            async handleConnectorConnection(e, t) {
                try {
                    let {selectedChain: t} = eb.zb.state;
                    await eb.Id.client().connectConnector(e, t?.id),
                    eb.jb.close()
                } catch (e) {
                    console.error(e),
                    t ? t() : eb.Vs.openToast(io.getErrorMessage(e), "error")
                }
            },
            getCustomImageUrls() {
                let {chainImages: e, walletImages: t} = eb.t0.state
                  , i = Object.values(e ?? {})
                  , r = Object.values(t ?? {});
                return Object.values([...i, ...r])
            },
            truncate: (e,t=8)=>e.length <= t ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`,
            generateAvatarColors(e) {
                var t;
                let i = null == (t = e.match(/.{1,7}/g)) ? void 0 : t.splice(0, 5)
                  , r = [];
                i?.forEach(e=>{
                    let t = 0;
                    for (let i = 0; i < e.length; i += 1)
                        t = e.charCodeAt(i) + ((t << 5) - t),
                        t &= t;
                    let i = [0, 0, 0];
                    for (let e = 0; e < 3; e += 1) {
                        let r = t >> 8 * e & 255;
                        i[e] = r
                    }
                    r.push(`rgb(${i[0]}, ${i[1]}, ${i[2]})`)
                }
                );
                let a = document.querySelector(":root");
                if (a) {
                    let e = {
                        "--w3m-color-av-1": r[0],
                        "--w3m-color-av-2": r[1],
                        "--w3m-color-av-3": r[2],
                        "--w3m-color-av-4": r[3],
                        "--w3m-color-av-5": r[4]
                    };
                    Object.entries(e).forEach(([e,t])=>a.style.setProperty(e, t))
                }
            },
            setRecentWallet(e) {
                let {walletConnectVersion: t} = eb.zb.state;
                localStorage.setItem(io.W3M_RECENT_WALLET_DATA, JSON.stringify({
                    [t]: e
                }))
            },
            getRecentWallet() {
                let e = localStorage.getItem(io.W3M_RECENT_WALLET_DATA);
                if (e) {
                    let {walletConnectVersion: t} = eb.zb.state
                      , i = JSON.parse(e);
                    if (i[t])
                        return i[t]
                }
            },
            caseSafeIncludes: (e,t)=>e.toUpperCase().includes(t.toUpperCase()),
            openWalletExplorerUrl() {
                eb.zv.openHref(io.EXPLORER_WALLET_URL, "_blank")
            },
            getCachedRouterWalletPlatforms() {
                let {id: e, desktop: t, mobile: i, injected: r} = eb.zv.getWalletRouterData()
                  , a = il.installedInjectedWallets()
                  , l = !!(null != r && r.length)
                  , o = a.some(t=>t.id === e)
                  , n = !!(null != t && t.native)
                  , s = !!(null != t && t.universal)
                  , c = !!(null != i && i.native) || !!(null != i && i.universal);
                return {
                    isInjectedInstalled: o,
                    isInjected: l,
                    isDesktop: n,
                    isMobile: c,
                    isWeb: s
                }
            },
            goToConnectingView(e) {
                eb.AV.setData({
                    Wallet: e
                });
                let t = eb.zv.isMobile()
                  , {isDesktop: i, isWeb: r, isMobile: a, isInjectedInstalled: l} = io.getCachedRouterWalletPlatforms();
                t ? l ? eb.AV.push("InjectedConnecting") : a ? eb.AV.push("MobileConnecting") : r ? eb.AV.push("WebConnecting") : eb.AV.push("InstallWallet") : l ? eb.AV.push("InjectedConnecting") : i ? eb.AV.push("DesktopConnecting") : r ? eb.AV.push("WebConnecting") : a ? eb.AV.push("MobileQrcodeConnecting") : eb.AV.push("InstallWallet")
            }
        }
          , is = c`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
        var ic = Object.defineProperty
          , id = Object.getOwnPropertyDescriptor
          , ih = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? id(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ic(t, i, l),
            l
        }
        ;
        let im = class extends eo {
            constructor() {
                super(),
                this.view = eb.AV.state.view,
                this.prevView = eb.AV.state.view,
                this.unsubscribe = void 0,
                this.oldHeight = "0px",
                this.resizeObserver = void 0,
                this.unsubscribe = eb.AV.subscribe(e=>{
                    this.view !== e.view && this.onChangeRoute()
                }
                )
            }
            firstUpdated() {
                this.resizeObserver = new ResizeObserver(([e])=>{
                    let t = `${e.contentRect.height}px`;
                    "0px" !== this.oldHeight && tb(this.routerEl, {
                        height: [this.oldHeight, t]
                    }, {
                        duration: .2
                    }),
                    this.oldHeight = t
                }
                ),
                this.resizeObserver.observe(this.contentEl)
            }
            disconnectedCallback() {
                var e, t;
                null == (e = this.unsubscribe) || e.call(this),
                null == (t = this.resizeObserver) || t.disconnect()
            }
            get routerEl() {
                return io.getShadowRootElement(this, ".w3m-router")
            }
            get contentEl() {
                return io.getShadowRootElement(this, ".w3m-content")
            }
            viewTemplate() {
                switch (this.view) {
                case "ConnectWallet":
                    return H`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
                case "SelectNetwork":
                    return H`<w3m-select-network-view></w3m-select-network-view>`;
                case "InjectedConnecting":
                    return H`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
                case "DesktopConnecting":
                    return H`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
                case "MobileConnecting":
                    return H`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
                case "WebConnecting":
                    return H`<w3m-web-connecting-view></w3m-web-connecting-view>`;
                case "MobileQrcodeConnecting":
                    return H`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
                case "GetWallet":
                    return H`<w3m-get-wallet-view></w3m-get-wallet-view>`;
                case "WalletExplorer":
                    return H`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
                case "Qrcode":
                    return H`<w3m-qrcode-view></w3m-qrcode-view>`;
                case "Help":
                    return H`<w3m-help-view></w3m-help-view>`;
                case "Account":
                    return H`<w3m-account-view></w3m-account-view>`;
                case "SwitchNetwork":
                    return H`<w3m-switch-network-view></w3m-switch-network-view>`;
                case "InstallWallet":
                    return H`<w3m-install-wallet-view></w3m-install-wallet-view>`;
                default:
                    return H`<div>Not Found</div>`
                }
            }
            async onChangeRoute() {
                await tb(this.routerEl, {
                    opacity: [1, 0],
                    scale: [1, 1.02]
                }, {
                    duration: .15,
                    delay: .1
                }).finished,
                this.view = eb.AV.state.view,
                tb(this.routerEl, {
                    opacity: [0, 1],
                    scale: [.99, 1]
                }, {
                    duration: .37,
                    delay: .05
                })
            }
            render() {
                return H`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`
            }
        }
        ;
        im.styles = [t_.globalCss, is],
        ih([eh()], im.prototype, "view", 2),
        ih([eh()], im.prototype, "prevView", 2),
        im = ih([es("w3m-modal-router")], im);
        let ip = c`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
        var iu = Object.defineProperty
          , iw = Object.getOwnPropertyDescriptor
          , ig = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iw(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iu(t, i, l),
            l
        }
        ;
        let iv = class extends eo {
            constructor() {
                super(),
                this.open = !1,
                this.unsubscribe = void 0,
                this.timeout = void 0,
                this.unsubscribe = eb.Vs.subscribe(e=>{
                    e.open ? (this.open = !0,
                    this.timeout = setTimeout(()=>eb.Vs.closeToast(), 2200)) : (this.open = !1,
                    clearTimeout(this.timeout))
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribe) || e.call(this),
                clearTimeout(this.timeout),
                eb.Vs.closeToast()
            }
            render() {
                let {message: e, variant: t} = eb.Vs.state;
                return this.open ? H`<div class="${eC({
                    "w3m-success": "success" === t,
                    "w3m-error": "error" === t
                })}">${"success" === t ? tq.CHECKMARK_ICON : null} ${"error" === t ? tq.CROSS_ICON : null}<w3m-text variant="small-regular">${e}</w3m-text></div>` : null
            }
        }
        ;
        iv.styles = [t_.globalCss, ip],
        ig([eh()], iv.prototype, "open", 2),
        iv = ig([es("w3m-modal-toast")], iv);
        let ib = c`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;
        var ix = Object.defineProperty
          , iy = Object.getOwnPropertyDescriptor
          , iC = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iy(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ix(t, i, l),
            l
        }
        ;
        let i$ = class extends eo {
            constructor() {
                super(...arguments),
                this.onClick = ()=>null,
                this.name = "",
                this.chainId = ""
            }
            render() {
                return H`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular">${this.name}</w3m-text></button>`
            }
        }
        ;
        i$.styles = [t_.globalCss, ib],
        iC([ed()], i$.prototype, "onClick", 2),
        iC([ed()], i$.prototype, "name", 2),
        iC([ed()], i$.prototype, "chainId", 2),
        i$ = iC([es("w3m-network-button")], i$);
        let ik = c`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
        var iA = Object.defineProperty
          , iO = Object.getOwnPropertyDescriptor
          , iE = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iO(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iA(t, i, l),
            l
        }
        ;
        let i_ = class extends eo {
            constructor() {
                super(...arguments),
                this.chainId = ""
            }
            render() {
                let e = io.getChainIcon(this.chainId);
                return e ? H`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${e}"/><image href="${e}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>` : H`${tq.NETWORK_PLACEHOLDER}`
            }
        }
        ;
        function iI(e, t, i) {
            return e !== t && (e - t < 0 ? t - e : e - t) <= i + .1
        }
        i_.styles = [t_.globalCss, ik],
        iE([ed()], i_.prototype, "chainId", 2),
        i_ = iE([es("w3m-network-image")], i_);
        let iP = {
            generate(e, t, i, r) {
                let a = "light" === r ? "#141414" : "#fff"
                  , l = "light" === r ? "#fff" : "#141414"
                  , o = []
                  , n = function(e, t) {
                    let i = Array.prototype.slice.call(tx.create(e, {
                        errorCorrectionLevel: "Q"
                    }).modules.data, 0)
                      , r = Math.sqrt(i.length);
                    return i.reduce((e,t,i)=>(i % r == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                }(e, 0)
                  , s = t / n.length
                  , c = [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 0,
                    y: 1
                }];
                c.forEach(({x: e, y: t})=>{
                    let i = (n.length - 7) * s * e
                      , r = (n.length - 7) * s * t;
                    for (let e = 0; e < c.length; e += 1) {
                        let t = s * (7 - 2 * e);
                        o.push(V`<rect fill="${e % 2 == 0 ? a : l}" height="${t}" rx="${.32 * t}" ry="${.32 * t}" width="${t}" x="${i + s * e}" y="${r + s * e}">`)
                    }
                }
                );
                let d = Math.floor((i + 25) / s)
                  , h = n.length / 2 - d / 2
                  , m = n.length / 2 + d / 2 - 1
                  , p = [];
                n.forEach((e,t)=>{
                    e.forEach((e,i)=>{
                        !n[t][i] || t < 7 && i < 7 || t > n.length - 8 && i < 7 || t < 7 && i > n.length - 8 || t > h && t < m && i > h && i < m || p.push([t * s + s / 2, i * s + s / 2])
                    }
                    )
                }
                );
                let u = {};
                return p.forEach(([e,t])=>{
                    u[e] ? u[e].push(t) : u[e] = [t]
                }
                ),
                Object.entries(u).map(([e,t])=>{
                    let i = t.filter(e=>t.every(t=>!iI(e, t, s)));
                    return [Number(e), i]
                }
                ).forEach(([e,t])=>{
                    t.forEach(t=>{
                        o.push(V`<circle cx="${e}" cy="${t}" fill="${a}" r="${s / 2.5}">`)
                    }
                    )
                }
                ),
                Object.entries(u).filter(([e,t])=>t.length > 1).map(([e,t])=>{
                    let i = t.filter(e=>t.some(t=>iI(e, t, s)));
                    return [Number(e), i]
                }
                ).map(([e,t])=>{
                    t.sort((e,t)=>e < t ? -1 : 1);
                    let i = [];
                    for (let e of t) {
                        let t = i.find(t=>t.some(t=>iI(e, t, s)));
                        t ? t.push(e) : i.push([e])
                    }
                    return [e, i.map(e=>[e[0], e[e.length - 1]])]
                }
                ).forEach(([e,t])=>{
                    t.forEach(([t,i])=>{
                        o.push(V`<line x1="${e}" x2="${e}" y1="${t}" y2="${i}" stroke="${a}" stroke-width="${s / 1.25}" stroke-linecap="round">`)
                    }
                    )
                }
                ),
                o
            }
        }
          , iM = c`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
        var ij = Object.defineProperty
          , iT = Object.getOwnPropertyDescriptor
          , iW = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iT(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ij(t, i, l),
            l
        }
        ;
        let iR = class extends eo {
            constructor() {
                super(...arguments),
                this.uri = "",
                this.size = 0,
                this.imageId = void 0,
                this.walletId = void 0,
                this.imageUrl = void 0
            }
            svgTemplate() {
                var e;
                let t = null != (e = eb.Ic.state.themeMode) ? e : "light";
                return V`<svg height="${this.size}" width="${this.size}">${iP.generate(this.uri, this.size, this.size / 4, t)}</svg>`
            }
            render() {
                return H`<div>${this.walletId || this.imageUrl ? H`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>` : tq.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`
            }
        }
        ;
        iR.styles = [t_.globalCss, iM],
        iW([ed()], iR.prototype, "uri", 2),
        iW([ed({
            type: Number
        })], iR.prototype, "size", 2),
        iW([ed()], iR.prototype, "imageId", 2),
        iW([ed()], iR.prototype, "walletId", 2),
        iW([ed()], iR.prototype, "imageUrl", 2),
        iR = iW([es("w3m-qrcode")], iR);
        let iD = c`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin:2px 4px 0 0}div{top:0;left:calc(50% - 12px);transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:calc(100% - 2px);width:fit-content;position:relative}input:focus-within+div,input:not(:placeholder-shown)+div{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+div w3m-text,input:not(:placeholder-shown)+div w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
        var iS = Object.defineProperty
          , iL = Object.getOwnPropertyDescriptor
          , iN = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iL(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iS(t, i, l),
            l
        }
        ;
        let iz = class extends eo {
            constructor() {
                super(...arguments),
                this.onChange = ()=>null
            }
            render() {
                let e = "Search wallets";
                return H`<input type="text" @input="${this.onChange}" placeholder="${e}"><div>${tq.SEARCH_ICON}<w3m-text color="secondary" variant="small-thin">${e}</w3m-text></div>`
            }
        }
        ;
        iz.styles = [t_.globalCss, iD],
        iN([ed()], iz.prototype, "onChange", 2),
        iz = iN([es("w3m-search-input")], iz);
        let iH = c`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
        var iV = Object.defineProperty
          , iU = Object.getOwnPropertyDescriptor;
        let iZ = class extends eo {
            render() {
                return H`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
            }
        }
        ;
        iZ.styles = [t_.globalCss, iH],
        iZ = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iU(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iV(t, i, l),
            l
        }
        )([es("w3m-spinner")], iZ);
        let iB = c`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
        var iF = Object.defineProperty
          , iG = Object.getOwnPropertyDescriptor
          , iq = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iG(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iF(t, i, l),
            l
        }
        ;
        let iK = class extends eo {
            constructor() {
                super(...arguments),
                this.variant = "medium-regular",
                this.color = "primary"
            }
            render() {
                let e = {
                    "w3m-big-bold": "big-bold" === this.variant,
                    "w3m-medium-regular": "medium-regular" === this.variant,
                    "w3m-small-regular": "small-regular" === this.variant,
                    "w3m-small-thin": "small-thin" === this.variant,
                    "w3m-xsmall-regular": "xsmall-regular" === this.variant,
                    "w3m-xsmall-bold": "xsmall-bold" === this.variant,
                    "w3m-color-primary": "primary" === this.color,
                    "w3m-color-secondary": "secondary" === this.color,
                    "w3m-color-tertiary": "tertiary" === this.color,
                    "w3m-color-inverse": "inverse" === this.color,
                    "w3m-color-accnt": "accent" === this.color,
                    "w3m-color-error": "error" === this.color
                };
                return H`<span><slot class="${eC(e)}"></slot></span>`
            }
        }
        ;
        iK.styles = [t_.globalCss, iB],
        iq([ed()], iK.prototype, "variant", 2),
        iq([ed()], iK.prototype, "color", 2),
        iK = iq([es("w3m-text")], iK);
        let iY = c`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
        var iX = Object.defineProperty
          , iQ = Object.getOwnPropertyDescriptor
          , iJ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? iQ(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && iX(t, i, l),
            l
        }
        ;
        let i0 = class extends eo {
            constructor() {
                super(...arguments),
                this.symbol = void 0
            }
            render() {
                var e;
                let t = io.getTokenIcon(null != (e = this.symbol) ? e : "");
                return t ? H`<div><img src="${t}" alt="${this.id}"></div>` : tq.TOKEN_PLACEHOLDER
            }
        }
        ;
        i0.styles = [t_.globalCss, iY],
        iJ([ed()], i0.prototype, "symbol", 2),
        i0 = iJ([es("w3m-token-image")], i0);
        let i1 = c`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
        var i3 = Object.defineProperty
          , i2 = Object.getOwnPropertyDescriptor
          , i5 = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? i2(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && i3(t, i, l),
            l
        }
        ;
        let i4 = class extends eo {
            constructor() {
                super(...arguments),
                this.onClick = ()=>null,
                this.name = "",
                this.walletId = "",
                this.label = void 0,
                this.imageId = void 0,
                this.installed = !1,
                this.recent = !1
            }
            sublabelTemplate() {
                return this.recent ? H`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? H`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null
            }
            render() {
                var e;
                return H`<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image><w3m-text variant="xsmall-regular">${null != (e = this.label) ? e : io.getWalletName(this.name, !0)}</w3m-text>${this.sublabelTemplate()}</div></button>`
            }
        }
        ;
        i4.styles = [t_.globalCss, i1],
        i5([ed()], i4.prototype, "onClick", 2),
        i5([ed()], i4.prototype, "name", 2),
        i5([ed()], i4.prototype, "walletId", 2),
        i5([ed()], i4.prototype, "label", 2),
        i5([ed()], i4.prototype, "imageId", 2),
        i5([ed()], i4.prototype, "installed", 2),
        i5([ed()], i4.prototype, "recent", 2),
        i4 = i5([es("w3m-wallet-button")], i4);
        let i6 = c`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
        var i7 = Object.defineProperty
          , i8 = Object.getOwnPropertyDescriptor
          , i9 = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? i8(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && i7(t, i, l),
            l
        }
        ;
        let re = class extends eo {
            constructor() {
                super(...arguments),
                this.walletId = "",
                this.imageId = void 0,
                this.imageUrl = void 0
            }
            render() {
                var e;
                let t = null != (e = this.imageUrl) && e.length ? this.imageUrl : io.getWalletIcon({
                    id: this.walletId,
                    image_id: this.imageId
                });
                return H`${t.length ? H`<div><img src="${t}" alt="${this.id}"></div>` : tq.WALLET_PLACEHOLDER}`
            }
        }
        ;
        re.styles = [t_.globalCss, i6],
        i9([ed()], re.prototype, "walletId", 2),
        i9([ed()], re.prototype, "imageId", 2),
        i9([ed()], re.prototype, "imageUrl", 2),
        re = i9([es("w3m-wallet-image")], re);
        var rt = Object.defineProperty
          , ri = Object.getOwnPropertyDescriptor;
        let rr = class extends eo {
            constructor() {
                super(),
                this.unwatchAccount = void 0,
                eb.CV.getAccount(),
                this.fetchProfile(),
                this.fetchBalance(),
                this.unwatchAccount = eb.Id.client().watchAccount(e=>{
                    let {address: t, isConnected: i} = eb.CV.state;
                    e.isConnected && e.address !== t && (this.fetchProfile(e.address),
                    this.fetchBalance(e.address),
                    eb.CV.setAddress(e.address)),
                    e.isConnected || eb.CV.resetAccount(),
                    i !== e.isConnected && eb.jb.close(),
                    eb.CV.setIsConnected(e.isConnected)
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchAccount) || e.call(this)
            }
            async fetchProfile(e) {
                var t;
                let i = null == (t = eb.zb.state.chains) ? void 0 : t.find(e=>1 === e.id);
                if (eb.t0.state.enableAccountView && i)
                    try {
                        await eb.CV.fetchProfile(io.preloadImage, e)
                    } catch (e) {
                        console.error(e),
                        eb.Vs.openToast(io.getErrorMessage(e), "error")
                    }
            }
            async fetchBalance(e) {
                if (eb.t0.state.enableAccountView)
                    try {
                        await eb.CV.fetchBalance(e)
                    } catch (e) {
                        console.error(e),
                        eb.Vs.openToast(io.getErrorMessage(e), "error")
                    }
            }
        }
        ;
        rr = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? ri(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rt(t, i, l),
            l
        }
        )([es("w3m-account-context")], rr);
        var ra = Object.defineProperty
          , rl = Object.getOwnPropertyDescriptor
          , ro = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rl(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ra(t, i, l),
            l
        }
        ;
        let rn = class extends eo {
            constructor() {
                super(),
                this.preload = !0,
                this.preloadData()
            }
            async loadImages(e) {
                try {
                    null != e && e.length && await Promise.all(e.map(async e=>io.preloadImage(e)))
                } catch {
                    console.info("Unsuccessful attempt at preloading some images", e)
                }
            }
            async preloadListings() {
                var e;
                if (eb.t0.state.enableExplorer) {
                    let {chains: t} = eb.zb.state;
                    await Promise.all([eb.uc.getRecomendedWallets(), eb.uc.getInjectedWallets()]),
                    eb.zb.setIsDataLoaded(!0);
                    let {recomendedWallets: i} = eb.uc.state
                      , r = il.installedInjectedWallets()
                      , a = null != (e = t?.map(e=>io.getChainIcon(e.id))) ? e : []
                      , l = i.map(e=>io.getWalletIcon(e))
                      , o = r.map(e=>io.getWalletIcon(e));
                    await this.loadImages([...a, ...l, ...o])
                } else
                    eb.zb.setIsDataLoaded(!0)
            }
            async preloadCustomImages() {
                let e = io.getCustomImageUrls();
                await this.loadImages(e)
            }
            async preloadData() {
                try {
                    this.preload && (this.preload = !1,
                    await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                } catch (e) {
                    console.error(e),
                    eb.Vs.openToast("Failed preloading", "error")
                }
            }
        }
        ;
        ro([eh()], rn.prototype, "preload", 2),
        rn = ro([es("w3m-explorer-context")], rn);
        var rs = Object.defineProperty
          , rc = Object.getOwnPropertyDescriptor
          , rd = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rc(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rs(t, i, l),
            l
        }
        ;
        let rh = class extends eo {
            constructor() {
                super(),
                this.activeChainId = void 0,
                this.unwatchNetwork = void 0;
                let e = eb.zb.getSelectedChain();
                this.activeChainId = e?.id,
                this.unwatchNetwork = eb.Id.client().watchNetwork(e=>{
                    let t = e.chain;
                    t && this.activeChainId !== t.id && (eb.zb.setSelectedChain(t),
                    this.activeChainId = t.id,
                    eb.CV.resetBalance(),
                    this.fetchBalance())
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchNetwork) || e.call(this)
            }
            async fetchBalance() {
                if (eb.t0.state.enableAccountView)
                    try {
                        await eb.CV.fetchBalance()
                    } catch (e) {
                        console.error(e),
                        eb.Vs.openToast(io.getErrorMessage(e), "error")
                    }
            }
        }
        ;
        rd([eh()], rh.prototype, "activeChainId", 2),
        rh = rd([es("w3m-network-context")], rh);
        var rm = Object.defineProperty
          , rp = Object.getOwnPropertyDescriptor;
        let ru = class extends eo {
            constructor() {
                super(),
                this.unsubscribeTheme = void 0,
                t_.setTheme(),
                this.unsubscribeTheme = eb.Ic.subscribe(t_.setTheme),
                this.preloadThemeImages()
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeTheme) || e.call(this)
            }
            async preloadThemeImages() {
                try {
                    let {themeVariables: e} = eb.Ic.state
                      , t = [e?.["--w3m-background-image-url"], e?.["--w3m-logo-image-url"]].filter(Boolean);
                    t.length && await Promise.all(t.map(async e=>io.preloadImage(e)))
                } catch {
                    console.info("Unsuccessful attempt at preloading some images")
                }
            }
        }
        ;
        ru = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rp(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rm(t, i, l),
            l
        }
        )([es("w3m-theme-context")], ru);
        var rw = Object.defineProperty
          , rg = Object.getOwnPropertyDescriptor;
        let rv = class extends eo {
            constructor() {
                super(),
                this.unwatchOptions = void 0,
                this.unwatchAccount = void 0,
                this.timeout = void 0,
                this.isGenerated = !1,
                this.selectedChainId = null == (ef = eb.zb.state.selectedChain) ? void 0 : ef.id,
                this.isAccountConnected = eb.CV.state.isConnected,
                this.lastRetry = Date.now(),
                this.unwatchOptions = eb.zb.subscribe(e=>{
                    var t, i;
                    (null == (t = e.selectedChain) ? void 0 : t.id) !== this.selectedChainId && (this.selectedChainId = null == (i = e.selectedChain) ? void 0 : i.id,
                    this.connectAndWait())
                }
                ),
                this.unwatchAccount = eb.CV.subscribe(e=>{
                    this.isAccountConnected === e.isConnected && this.isGenerated || (this.isAccountConnected = e.isConnected,
                    setTimeout(this.connectAndWait.bind(this), 0))
                }
                ),
                document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this))
            }
            disconnectedCallback() {
                var e, t;
                null == (e = this.unwatchOptions) || e.call(this),
                null == (t = this.unwatchAccount) || t.call(this),
                document.removeEventListener("visibilitychange", this.onVisibilityChange)
            }
            async connectAndWait() {
                if (clearTimeout(this.timeout),
                !this.isAccountConnected) {
                    this.isGenerated = !0,
                    this.timeout = setTimeout(this.connectAndWait.bind(this), 18e4);
                    try {
                        let {standaloneUri: e, selectedChain: t} = eb.zb.state;
                        e ? eb.kD.setPairingUri(e) : await eb.Id.client().connectWalletConnect(e=>eb.kD.setPairingUri(e), t?.id)
                    } catch (e) {
                        console.error(e),
                        eb.kD.setPairingError(!0),
                        eb.Vs.openToast("Connection request declined", "error"),
                        Date.now() - this.lastRetry >= 1e3 && (this.lastRetry = Date.now(),
                        this.connectAndWait())
                    }
                }
            }
            async onVisibilityChange() {
                !document.hidden && eb.zv.isMobile() && (await eb.Id.client().pingWalletConnect(),
                this.connectAndWait())
            }
        }
        ;
        rv = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rg(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rw(t, i, l),
            l
        }
        )([es("w3m-wc-connection-context")], rv);
        let rf = c`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
        var rb = Object.defineProperty
          , rx = Object.getOwnPropertyDescriptor
          , ry = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rx(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rb(t, i, l),
            l
        }
        ;
        let rC = class extends eo {
            constructor() {
                super(),
                this.balance = "hide",
                this.avatar = "show",
                io.rejectStandaloneButtonComponent()
            }
            onOpen() {
                let {isStandalone: e} = eb.zb.state;
                e || eb.jb.open({
                    route: "Account"
                })
            }
            accountTemplate() {
                let e = "show" === this.avatar;
                return H`${e ? H`<w3m-avatar></w3m-avatar>` : null}<w3m-address-text></w3m-address-text>`
            }
            render() {
                let e = "show" === this.balance
                  , t = {
                    "w3m-no-avatar": "hide" === this.avatar
                };
                return e ? H`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}" class="${eC(t)}">${this.accountTemplate()}</button></div>` : H`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`
            }
        }
        ;
        rC.styles = [t_.globalCss, rf],
        ry([ed()], rC.prototype, "balance", 2),
        ry([ed()], rC.prototype, "avatar", 2),
        rC = ry([es("w3m-account-button")], rC);
        let r$ = c`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
        var rk = Object.defineProperty
          , rA = Object.getOwnPropertyDescriptor
          , rO = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rA(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rk(t, i, l),
            l
        }
        ;
        let rE = class extends eo {
            constructor() {
                super(),
                this.chainId = 0,
                this.label = "",
                this.unsubscribeNetwork = void 0;
                let {selectedChain: e} = eb.zb.state;
                this.chainId = e?.id,
                this.label = e?.name,
                this.unsubscribeNetwork = eb.zb.subscribe(({selectedChain: e})=>{
                    this.chainId = e?.id,
                    this.label = e?.name
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeNetwork) || e.call(this)
            }
            onClick() {
                eb.AV.push("SelectNetwork")
            }
            render() {
                let {chains: e, selectedChain: t} = eb.zb.state
                  , i = e?.map(e=>e.id)
                  , r = t && i?.includes(t.id)
                  , a = e && e.length <= 1 && r;
                return H`<button @click="${this.onClick}" ?disabled="${a}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
            }
        }
        ;
        rE.styles = [t_.globalCss, r$],
        rO([eh()], rE.prototype, "chainId", 2),
        rO([eh()], rE.prototype, "label", 2),
        rE = rO([es("w3m-account-network-button")], rE);
        let r_ = c`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
        var rI = Object.defineProperty
          , rP = Object.getOwnPropertyDescriptor
          , rM = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rP(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rI(t, i, l),
            l
        }
        ;
        let rj = class extends eo {
            constructor() {
                super(),
                this.address = void 0,
                this.name = void 0,
                this.loading = !0,
                this.variant = "button",
                this.unsubscribeAccount = void 0,
                this.address = eb.CV.state.address,
                this.name = eb.CV.state.profileName,
                this.loading = !!eb.CV.state.profileLoading,
                this.unsubscribeAccount = eb.CV.subscribe(({address: e, profileName: t, profileLoading: i})=>{
                    this.address = e,
                    this.name = t,
                    this.loading = !!i
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeAccount) || e.call(this)
            }
            render() {
                var e;
                let t = "button" === this.variant
                  , i = {
                    "w3m-loading": this.loading
                };
                return H`<w3m-text class="${eC(i)}" variant="${t ? "medium-regular" : "big-bold"}" color="${t ? "inverse" : "primary"}">${this.name ? this.name : io.truncate(null != (e = this.address) ? e : "")}</w3m-text>`
            }
        }
        ;
        rj.styles = [t_.globalCss, r_],
        rM([eh()], rj.prototype, "address", 2),
        rM([eh()], rj.prototype, "name", 2),
        rM([eh()], rj.prototype, "loading", 2),
        rM([ed()], rj.prototype, "variant", 2),
        rj = rM([es("w3m-address-text")], rj);
        let rT = {
            onConnecting(e) {
                io.goToConnectingView(e)
            },
            onExternal(e) {
                io.handleConnectorConnection(e)
            },
            manualWalletsTemplate() {
                return il.manualDesktopWallets().map(e=>H`<w3m-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></w3m-wallet-button>`)
            },
            recomendedWalletsTemplate(e=!1) {
                return il.recomendedWallets(e).map(e=>H`<w3m-wallet-button walletId="${e.id}" imageId="${e.image_id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></w3m-wallet-button>`)
            },
            externalWalletsTemplate() {
                return il.externalWallets().map(e=>H`<w3m-wallet-button name="${e.name}" walletId="${e.id}" .onClick="${()=>this.onExternal(e.id)}"></w3m-wallet-button>`)
            },
            recentWalletTemplate() {
                let e = il.recentWallet();
                if (e)
                    return H`<w3m-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .recent="${!0}" .onClick="${()=>this.onConnecting(e)}"></w3m-wallet-button>`
            },
            installedInjectedWalletsTemplate() {
                return il.installedInjectedWallets().map(e=>H`<w3m-wallet-button .installed="${!0}" name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></w3m-wallet-button>`)
            },
            injectedWalletsTemplate() {
                return il.injectedWallets().map(e=>H`<w3m-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></w3m-wallet-button>`)
            }
        }
          , rW = c`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
        var rR = Object.defineProperty
          , rD = Object.getOwnPropertyDescriptor;
        let rS = class extends eo {
            onGoToQrcode() {
                eb.AV.push("Qrcode")
            }
            onGetWallet() {
                eb.AV.push("GetWallet")
            }
            render() {
                let {recomendedWallets: e} = eb.uc.state
                  , t = [...e, ...e]
                  , i = rT.externalWalletsTemplate()
                  , r = rT.installedInjectedWalletsTemplate()
                  , a = [...r, ...i].length > 0
                  , l = 2 * eb.zv.RECOMMENDED_WALLET_AMOUNT;
                return H`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${tq.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${tq.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[...Array(l)].map((e,i)=>{
                    let r = t[i % t.length];
                    return r ? H`<w3m-wallet-image walletId="${r.id}" imageId="${r.image_id}"></w3m-wallet-image>` : tq.WALLET_PLACEHOLDER
                }
                )}</div><w3m-button-big @click="${io.handleAndroidLinking}"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${a ? H`<w3m-modal-footer><div class="w3m-title">${tq.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${r} ${i}</div></w3m-modal-footer>` : null}<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Choose WalletConnect to see supported apps on your device ${a ? ", or select from other options" : ""}`}</w3m-text><w3m-button variant="outline" .iconRight="${tq.ARROW_UP_RIGHT_ICON}" .onClick="${()=>this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`
            }
        }
        ;
        rS.styles = [t_.globalCss, rW],
        rS = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rD(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rR(t, i, l),
            l
        }
        )([es("w3m-android-wallet-selection")], rS);
        let rL = c`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
        var rN = Object.defineProperty
          , rz = Object.getOwnPropertyDescriptor
          , rH = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rz(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rN(t, i, l),
            l
        }
        ;
        let rV = class extends eo {
            constructor() {
                super(),
                this.address = void 0,
                this.avatar = void 0,
                this.loading = !0,
                this.size = "small",
                this.unsubscribeAccount = void 0,
                this.address = eb.CV.state.address,
                this.avatar = eb.CV.state.profileAvatar,
                this.loading = !!eb.CV.state.profileLoading,
                this.unsubscribeAccount = eb.CV.subscribe(({address: e, profileAvatar: t, profileLoading: i})=>{
                    this.address = e,
                    this.avatar = t,
                    this.loading = !!i
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeAccount) || e.call(this)
            }
            render() {
                let e = {
                    "w3m-placeholder": !0,
                    "w3m-small": "small" === this.size,
                    "w3m-medium": "medium" === this.size
                };
                return this.avatar ? H`<img class="${eC(e)}" src="${this.avatar}">` : this.address ? (io.generateAvatarColors(this.address),
                H`<div class="${eC(e)}">${this.loading ? H`<div class="w3m-loader"></div>` : null}</div>`) : null
            }
        }
        ;
        rV.styles = [t_.globalCss, rL],
        rH([eh()], rV.prototype, "address", 2),
        rH([eh()], rV.prototype, "avatar", 2),
        rH([eh()], rV.prototype, "loading", 2),
        rH([ed()], rV.prototype, "size", 2),
        rV = rH([es("w3m-avatar")], rV);
        let rU = c`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
        var rZ = Object.defineProperty
          , rB = Object.getOwnPropertyDescriptor
          , rF = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rB(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rZ(t, i, l),
            l
        }
        ;
        let rG = class extends eo {
            constructor() {
                var e, t;
                super(),
                this.symbol = void 0,
                this.amount = void 0,
                this.unsubscribeAccount = void 0,
                this.symbol = null == (e = eb.CV.state.balance) ? void 0 : e.symbol,
                this.amount = null == (t = eb.CV.state.balance) ? void 0 : t.amount,
                this.unsubscribeAccount = eb.CV.subscribe(({balance: e})=>{
                    this.symbol = e?.symbol,
                    this.amount = e?.amount
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeAccount) || e.call(this)
            }
            render() {
                let e = "_._";
                return "0.0" === this.amount ? e = 0 : "string" == typeof this.amount && this.amount.length > 6 ? e = parseFloat(this.amount).toFixed(3) : "string" == typeof this.amount && (e = parseFloat(this.amount)),
                H`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${e} ${this.symbol}</w3m-text></div>`
            }
        }
        ;
        rG.styles = [t_.globalCss, rU],
        rF([eh()], rG.prototype, "symbol", 2),
        rF([eh()], rG.prototype, "amount", 2),
        rG = rF([es("w3m-balance")], rG);
        let rq = c`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
        var rK = Object.defineProperty
          , rY = Object.getOwnPropertyDescriptor
          , rX = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? rY(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && rK(t, i, l),
            l
        }
        ;
        let rQ = class extends eo {
            constructor() {
                super(),
                this.loading = !1,
                this.label = "Connect Wallet",
                this.icon = "show",
                this.modalUnsub = void 0,
                io.rejectStandaloneButtonComponent(),
                this.modalUnsub = eb.jb.subscribe(e=>{
                    e.open && (this.loading = !0),
                    e.open || (this.loading = !1)
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.modalUnsub) || e.call(this)
            }
            iconTemplate() {
                return "show" === this.icon ? tq.WALLET_CONNECT_ICON : null
            }
            onClick() {
                eb.CV.state.isConnected ? this.onDisconnect() : this.onConnect()
            }
            async onConnect() {
                this.loading = !0,
                await eb.jb.open(),
                eb.jb.state.open || (this.loading = !1)
            }
            async onDisconnect() {
                await eb.Id.client().disconnect()
            }
            render() {
                return H`<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading ? H`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>` : H`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`
            }
        }
        ;
        rQ.styles = [t_.globalCss, rq],
        rX([eh()], rQ.prototype, "loading", 2),
        rX([ed()], rQ.prototype, "label", 2),
        rX([ed()], rQ.prototype, "icon", 2),
        rQ = rX([es("w3m-connect-button")], rQ);
        let rJ = c`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
        var r0 = Object.defineProperty
          , r1 = Object.getOwnPropertyDescriptor
          , r3 = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? r1(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && r0(t, i, l),
            l
        }
        ;
        let r2 = class extends eo {
            constructor() {
                super(...arguments),
                this.walletId = void 0,
                this.imageId = void 0,
                this.isError = !1,
                this.isStale = !1,
                this.label = ""
            }
            svgLoaderTemplate() {
                var e, t;
                let i = null != (t = null == (e = eb.Ic.state.themeVariables) ? void 0 : e["--w3m-wallet-icon-large-border-radius"]) ? t : t_.getPreset("--w3m-wallet-icon-large-border-radius")
                  , r = 0;
                r = (i.includes("%") ? .88 * parseInt(i, 10) : parseInt(i, 10)) * 1.17;
                let a = 317 - 1.57 * r
                  , l = 425 - 1.8 * r;
                return H`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${r}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${a}" stroke-dashoffset="${l}"></use></svg>`
            }
            render() {
                let e = {
                    "w3m-error": this.isError,
                    "w3m-stale": this.isStale
                };
                return H`<div class="${eC(e)}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</w3m-text>`
            }
        }
        ;
        r2.styles = [t_.globalCss, rJ],
        r3([ed()], r2.prototype, "walletId", 2),
        r3([ed()], r2.prototype, "imageId", 2),
        r3([ed()], r2.prototype, "isError", 2),
        r3([ed()], r2.prototype, "isStale", 2),
        r3([ed()], r2.prototype, "label", 2),
        r2 = r3([es("w3m-connector-waiting")], r2);
        var r5 = Object.defineProperty
          , r4 = Object.getOwnPropertyDescriptor
          , r6 = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? r4(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && r5(t, i, l),
            l
        }
        ;
        let r7 = class extends eo {
            constructor() {
                super(),
                this.isConnected = !1,
                this.label = "Connect Wallet",
                this.icon = "show",
                this.avatar = "show",
                this.balance = "hide",
                this.unsubscribeAccount = void 0,
                io.rejectStandaloneButtonComponent(),
                this.isConnected = eb.CV.state.isConnected,
                this.unsubscribeAccount = eb.CV.subscribe(({isConnected: e})=>{
                    this.isConnected = e
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeAccount) || e.call(this)
            }
            render() {
                let {enableAccountView: e} = eb.t0.state
                  , t = this.balance
                  , i = this.label
                  , r = this.icon
                  , a = this.avatar;
                return this.isConnected && e ? H`<w3m-account-button balance="${t}" avatar="${a}"></w3m-account-button>` : H`<w3m-connect-button label="${this.isConnected ? "Disconnect" : i}" icon="${r}"></w3m-connect-button>`
            }
        }
        ;
        r6([eh()], r7.prototype, "isConnected", 2),
        r6([ed()], r7.prototype, "label", 2),
        r6([ed()], r7.prototype, "icon", 2),
        r6([ed()], r7.prototype, "avatar", 2),
        r6([ed()], r7.prototype, "balance", 2),
        r7 = r6([es("w3m-core-button")], r7);
        let r8 = c`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
        var r9 = Object.defineProperty
          , ae = Object.getOwnPropertyDescriptor;
        let at = class extends eo {
            render() {
                let {isStandalone: e} = eb.zb.state
                  , {explorerExcludedWalletIds: t, enableExplorer: i} = eb.t0.state
                  , r = rT.manualWalletsTemplate()
                  , a = rT.recomendedWalletsTemplate()
                  , l = rT.externalWalletsTemplate()
                  , o = rT.recentWalletTemplate()
                  , n = rT.installedInjectedWalletsTemplate()
                  , s = [o, ...r, ...a];
                e || (s = [...n, o, ...l, ...r, ...a]),
                s = s.filter(Boolean);
                let c = s.length > 4 || "ALL" !== t && i
                  , d = [];
                d = c ? s.slice(0, 3) : s;
                let h = !!d.length;
                return H`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${io.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${tq.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${tq.SCAN_ICON}<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${h ? H`<w3m-modal-footer><div class="w3m-desktop-title">${tq.DESKTOP_ICON}<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${d} ${c ? H`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}</div></w3m-modal-footer>` : null}`
            }
        }
        ;
        at.styles = [t_.globalCss, r8],
        at = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? ae(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && r9(t, i, l),
            l
        }
        )([es("w3m-desktop-wallet-selection")], at);
        let ai = c`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:hover{opacity:.8}`;
        var ar = Object.defineProperty
          , aa = Object.getOwnPropertyDescriptor;
        let al = class extends eo {
            render() {
                let {termsOfServiceUrl: e, privacyPolicyUrl: t} = eb.t0.state;
                return e ?? t ? H`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e ? H`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && t ? "and" : null} ${t ? H`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</w3m-text></div>` : null
            }
        }
        ;
        al.styles = [t_.globalCss, ai],
        al = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aa(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ar(t, i, l),
            l
        }
        )([es("w3m-legal-notice")], al);
        let ao = c`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
        var an = Object.defineProperty
          , as = Object.getOwnPropertyDescriptor;
        let ac = class extends eo {
            onQrcode() {
                eb.AV.push("Qrcode")
            }
            render() {
                let {isStandalone: e} = eb.zb.state
                  , {explorerExcludedWalletIds: t, enableExplorer: i} = eb.t0.state
                  , r = rT.manualWalletsTemplate()
                  , a = rT.recomendedWalletsTemplate()
                  , l = rT.externalWalletsTemplate()
                  , o = rT.recentWalletTemplate()
                  , n = rT.installedInjectedWalletsTemplate()
                  , s = [o, ...r, ...a];
                e || (s = [...n, o, ...l, ...r, ...a]),
                s = s.filter(Boolean);
                let c = s.length > 8 || "ALL" !== t && i
                  , d = [];
                d = c ? s.slice(0, 7) : s;
                let h = !!d.length;
                return H`<w3m-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${tq.QRCODE_ICON}"></w3m-modal-header>${h ? H`<w3m-modal-content><div>${d} ${c ? H`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}</div></w3m-modal-content>` : null}`
            }
        }
        ;
        ac.styles = [t_.globalCss, ao],
        ac = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? as(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && an(t, i, l),
            l
        }
        )([es("w3m-mobile-wallet-selection")], ac);
        let ad = c`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
        var ah = Object.defineProperty
          , am = Object.getOwnPropertyDescriptor
          , ap = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? am(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ah(t, i, l),
            l
        }
        ;
        let au = class extends eo {
            constructor() {
                super(),
                this.open = !1,
                this.active = !1,
                this.unsubscribeModal = void 0,
                this.abortController = void 0,
                this.unsubscribeModal = eb.jb.subscribe(e=>{
                    e.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeModal) || e.call(this)
            }
            get overlayEl() {
                return io.getShadowRootElement(this, ".w3m-overlay")
            }
            get containerEl() {
                return io.getShadowRootElement(this, ".w3m-container")
            }
            toggleBodyScroll(e) {
                if (document.querySelector("body")) {
                    if (e) {
                        let e = document.getElementById("w3m-styles");
                        e?.remove()
                    } else
                        document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                }
            }
            onCloseModal(e) {
                e.target === e.currentTarget && eb.jb.close()
            }
            onOpenModalEvent() {
                this.toggleBodyScroll(!1),
                this.addKeyboardEvents(),
                this.open = !0,
                setTimeout(async()=>{
                    let e = io.isMobileAnimation() ? {
                        y: ["50vh", "0vh"]
                    } : {
                        scale: [.98, 1]
                    };
                    await Promise.all([tb(this.overlayEl, {
                        opacity: [0, 1]
                    }, {
                        delay: .1,
                        duration: .2
                    }).finished, tb(this.containerEl, e, {
                        delay: .1,
                        duration: .2
                    }).finished]),
                    this.active = !0
                }
                , 0)
            }
            async onCloseModalEvent() {
                this.toggleBodyScroll(!0),
                this.removeKeyboardEvents();
                let e = io.isMobileAnimation() ? {
                    y: ["0vh", "50vh"]
                } : {
                    scale: [1, .98]
                };
                await Promise.all([tb(this.overlayEl, {
                    opacity: [1, 0]
                }, {
                    duration: .2
                }).finished, tb(this.containerEl, e, {
                    duration: .2
                }).finished]),
                this.containerEl.removeAttribute("style"),
                this.active = !1,
                this.open = !1
            }
            addKeyboardEvents() {
                this.abortController = new AbortController,
                window.addEventListener("keydown", e=>{
                    var t;
                    "Escape" === e.key ? eb.jb.close() : "Tab" === e.key && (null != (t = e.target) && t.tagName.includes("W3M-") || this.containerEl.focus())
                }
                , this.abortController),
                this.containerEl.focus()
            }
            removeKeyboardEvents() {
                var e;
                null == (e = this.abortController) || e.abort(),
                this.abortController = void 0
            }
            managedModalContextTemplate() {
                let {isStandalone: e} = eb.zb.state;
                return e ? null : H`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`
            }
            render() {
                let e = {
                    "w3m-overlay": !0,
                    "w3m-active": this.active
                };
                return H`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${eC(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open ? H`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>` : null}</div></div>`
            }
        }
        ;
        au.styles = [t_.globalCss, ad],
        ap([eh()], au.prototype, "open", 2),
        ap([eh()], au.prototype, "active", 2),
        au = ap([es("w3m-modal")], au);
        let aw = c`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
        var ag = Object.defineProperty
          , av = Object.getOwnPropertyDescriptor
          , af = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? av(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ag(t, i, l),
            l
        }
        ;
        let ab = class extends eo {
            constructor() {
                super(),
                this.chainId = "",
                this.label = "",
                this.wrongNetwork = !1,
                this.unsubscribeNetwork = void 0,
                io.rejectStandaloneButtonComponent();
                let {selectedChain: e} = eb.zb.state;
                this.onSetChainData(e),
                this.unsubscribeNetwork = eb.zb.subscribe(({selectedChain: e})=>{
                    this.onSetChainData(e)
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unsubscribeNetwork) || e.call(this)
            }
            onSetChainData(e) {
                if (e) {
                    let {chains: t} = eb.zb.state
                      , i = t?.map(e=>e.id);
                    this.chainId = e.id.toString(),
                    this.wrongNetwork = !(null != i && i.includes(e.id)),
                    this.label = this.wrongNetwork ? "Wrong Network" : e.name
                }
            }
            onClick() {
                eb.jb.open({
                    route: "SelectNetwork"
                })
            }
            render() {
                var e;
                let {chains: t} = eb.zb.state
                  , i = t && t.length > 1;
                return H`<w3m-button-big @click="${this.onClick}" ?disabled="${!i}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${null != (e = this.label) && e.length ? this.label : "Select Network"}</w3m-text></w3m-button-big>`
            }
        }
        ;
        ab.styles = [t_.globalCss, aw],
        af([eh()], ab.prototype, "chainId", 2),
        af([eh()], ab.prototype, "label", 2),
        af([eh()], ab.prototype, "wrongNetwork", 2),
        ab = af([es("w3m-network-switch")], ab);
        let ax = c`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
        var ay = Object.defineProperty
          , aC = Object.getOwnPropertyDescriptor
          , a$ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aC(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ay(t, i, l),
            l
        }
        ;
        let ak = class extends eo {
            constructor() {
                super(...arguments),
                this.chainId = void 0,
                this.isError = !1,
                this.label = ""
            }
            svgLoaderTemplate() {
                return H`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`
            }
            render() {
                let e = {
                    "w3m-error": this.isError
                };
                return H`<div class="${eC(e)}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${this.chainId}"></w3m-network-image></div><w3m-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Switch declined" : this.label}</w3m-text>`
            }
        }
        ;
        ak.styles = [t_.globalCss, ax],
        a$([ed()], ak.prototype, "chainId", 2),
        a$([ed()], ak.prototype, "isError", 2),
        a$([ed()], ak.prototype, "label", 2),
        ak = a$([es("w3m-network-waiting")], ak);
        let aA = c`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
        var aO = Object.defineProperty
          , aE = Object.getOwnPropertyDescriptor
          , a_ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aE(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aO(t, i, l),
            l
        }
        ;
        let aI = class extends eo {
            constructor() {
                super(...arguments),
                this.isMobile = !1,
                this.isInjected = !1,
                this.isInjectedInstalled = !1,
                this.isDesktop = !1,
                this.isWeb = !1,
                this.isRetry = !1
            }
            onMobile() {
                eb.zv.isMobile() ? eb.AV.replace("MobileConnecting") : eb.AV.replace("MobileQrcodeConnecting")
            }
            onInjected() {
                this.isInjectedInstalled ? eb.AV.replace("InjectedConnecting") : eb.AV.replace("InstallWallet")
            }
            onDesktop() {
                eb.AV.replace("DesktopConnecting")
            }
            onWeb() {
                eb.AV.replace("WebConnecting")
            }
            render() {
                let {isStandalone: e} = eb.zb.state;
                return H`<div>${this.isRetry ? H`<slot></slot>` : null} ${this.isMobile ? H`<w3m-button .onClick="${this.onMobile}" .iconLeft="${tq.MOBILE_ICON}" variant="outline">Mobile</w3m-button>` : null} ${this.isInjected && !e ? H`<w3m-button .onClick="${this.onInjected}" .iconLeft="${tq.WALLET_ICON}" variant="outline">Browser</w3m-button>` : null} ${this.isDesktop ? H`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${tq.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>` : null} ${this.isWeb ? H`<w3m-button .onClick="${this.onWeb}" .iconLeft="${tq.GLOBE_ICON}" variant="outline">Web</w3m-button>` : null}</div>`
            }
        }
        ;
        aI.styles = [t_.globalCss, aA],
        a_([ed()], aI.prototype, "isMobile", 2),
        a_([ed()], aI.prototype, "isInjected", 2),
        a_([ed()], aI.prototype, "isInjectedInstalled", 2),
        a_([ed()], aI.prototype, "isDesktop", 2),
        a_([ed()], aI.prototype, "isWeb", 2),
        a_([ed()], aI.prototype, "isRetry", 2),
        aI = a_([es("w3m-platform-selection")], aI);
        let aP = c`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
        var aM = Object.defineProperty
          , aj = Object.getOwnPropertyDescriptor;
        let aT = class extends eo {
            onClick() {
                eb.AV.push("WalletExplorer")
            }
            render() {
                let {recomendedWallets: e} = eb.uc.state
                  , t = il.manualWallets()
                  , i = [...e, ...t].reverse().slice(0, 4);
                return H`<button @click="${this.onClick}"><div class="w3m-icons">${i.map(e=>{
                    let t = io.getWalletIcon(e);
                    if (t)
                        return H`<img src="${t}">`;
                    let i = io.getWalletIcon({
                        id: e.id
                    });
                    return i ? H`<img src="${i}">` : tq.WALLET_PLACEHOLDER
                }
                )} ${[...Array(4 - i.length)].map(()=>tq.WALLET_PLACEHOLDER)}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`
            }
        }
        ;
        aT.styles = [t_.globalCss, aP],
        aT = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aj(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aM(t, i, l),
            l
        }
        )([es("w3m-view-all-wallets-button")], aT);
        let aW = c`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
        var aR = Object.defineProperty
          , aD = Object.getOwnPropertyDescriptor
          , aS = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aD(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aR(t, i, l),
            l
        }
        ;
        let aL = class extends eo {
            constructor() {
                super(),
                this.walletId = "",
                this.imageId = "",
                this.uri = "",
                this.unwatchWcConnection = void 0,
                setTimeout(()=>{
                    let {pairingUri: e} = eb.kD.state
                      , {standaloneUri: t} = eb.zb.state;
                    this.uri = t ?? e
                }
                , 0),
                this.unwatchWcConnection = eb.kD.subscribe(e=>{
                    e.pairingUri && (this.uri = e.pairingUri)
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchWcConnection) || e.call(this)
            }
            get overlayEl() {
                return io.getShadowRootElement(this, ".w3m-qr-container")
            }
            render() {
                return H`<div class="w3m-qr-container">${this.uri ? H`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>` : H`<w3m-spinner></w3m-spinner>`}</div>`
            }
        }
        ;
        aL.styles = [t_.globalCss, aW],
        aS([ed()], aL.prototype, "walletId", 2),
        aS([ed()], aL.prototype, "imageId", 2),
        aS([eh()], aL.prototype, "uri", 2),
        aL = aS([es("w3m-walletconnect-qr")], aL);
        let aN = c`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
        var az = Object.defineProperty
          , aH = Object.getOwnPropertyDescriptor;
        let aV = class extends eo {
            async onDisconnect() {
                await eb.Id.client().disconnect()
            }
            async onCopyAddress() {
                var e;
                await navigator.clipboard.writeText(null != (e = eb.CV.state.address) ? e : ""),
                eb.Vs.openToast("Address copied", "success")
            }
            render() {
                return H`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${tq.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${tq.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`
            }
        }
        ;
        aV.styles = [t_.globalCss, aN],
        aV = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aH(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && az(t, i, l),
            l
        }
        )([es("w3m-account-view")], aV);
        var aU = Object.defineProperty
          , aZ = Object.getOwnPropertyDescriptor;
        let aB = class extends eo {
            viewTemplate() {
                return eb.zv.isAndroid() ? H`<w3m-android-wallet-selection></w3m-android-wallet-selection>` : eb.zv.isMobile() ? H`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : H`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`
            }
            render() {
                return H`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`
            }
        }
        ;
        aB.styles = [t_.globalCss],
        aB = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aZ(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aU(t, i, l),
            l
        }
        )([es("w3m-connect-wallet-view")], aB);
        let aF = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
        var aG = Object.defineProperty
          , aq = Object.getOwnPropertyDescriptor
          , aK = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aq(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aG(t, i, l),
            l
        }
        ;
        let aY = class extends eo {
            constructor() {
                super(),
                this.isError = !1,
                this.unwatchConnection = void 0,
                this.openDesktopApp(),
                this.unwatchConnection = eb.kD.subscribe(e=>{
                    this.isError = e.pairingError
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchConnection) || e.call(this)
            }
            onFormatAndRedirect(e) {
                let {desktop: t, name: i} = eb.zv.getWalletRouterData()
                  , r = t?.native;
                if (r) {
                    let t = eb.zv.formatNativeUrl(r, e, i);
                    eb.zv.openHref(t, "_self")
                }
            }
            openDesktopApp() {
                eb.kD.setPairingError(!1);
                let {standaloneUri: e} = eb.zb.state
                  , {pairingUri: t} = eb.kD.state
                  , i = eb.zv.getWalletRouterData();
                io.setRecentWallet(i),
                e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t)
            }
            render() {
                let {name: e, id: t, image_id: i} = eb.zv.getWalletRouterData()
                  , {isMobile: r, isInjected: a, isWeb: l} = io.getCachedRouterWalletPlatforms();
                return H`<w3m-modal-header title="${e}" .onAction="${io.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${i}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${r}" .isInjected="${a}" .isWeb="${l}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${tq.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
            }
        }
        ;
        aY.styles = [t_.globalCss, aF],
        aK([eh()], aY.prototype, "isError", 2),
        aY = aK([es("w3m-desktop-connecting-view")], aY);
        let aX = c`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
        var aQ = Object.defineProperty
          , aJ = Object.getOwnPropertyDescriptor;
        let a0 = class extends eo {
            onGet(e) {
                eb.zv.openHref(e, "_blank")
            }
            render() {
                let e = eb.uc.state.recomendedWallets.slice(0, 5)
                  , t = il.manualWallets().slice(0, 5)
                  , i = e.length
                  , r = t.length;
                return H`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${i ? e.map(e=>H`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${e.id}" imageId="${e.image_id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${e.name}</w3m-text><w3m-button .iconRight="${tq.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(e.homepage)}">Get</w3m-button></div></div>`) : null} ${r ? t.map(e=>H`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${e.id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${e.name}</w3m-text><w3m-button .iconRight="${tq.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(e.links.universal)}">Get</w3m-button></div></div>`) : null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${io.openWalletExplorerUrl}" .iconRight="${tq.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`
            }
        }
        ;
        a0.styles = [t_.globalCss, aX],
        a0 = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? aJ(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && aQ(t, i, l),
            l
        }
        )([es("w3m-get-wallet-view")], a0);
        let a1 = c`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
        var a3 = Object.defineProperty
          , a2 = Object.getOwnPropertyDescriptor;
        let a5 = class extends eo {
            constructor() {
                super(...arguments),
                this.learnUrl = "https://ethereum.org/en/wallets/"
            }
            onGet() {
                eb.t0.state.enableExplorer ? eb.AV.push("GetWallet") : io.openWalletExplorerUrl()
            }
            onLearnMore() {
                eb.zv.openHref(this.learnUrl, "_blank")
            }
            render() {
                return H`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${tq.HELP_CHART_IMG} ${tq.HELP_PAINTING_IMG} ${tq.HELP_ETH_IMG}</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${tq.HELP_KEY_IMG} ${tq.HELP_USER_IMG} ${tq.HELP_LOCK_IMG}</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${tq.HELP_COMPAS_IMG} ${tq.HELP_NOUN_IMG} ${tq.HELP_DAO_IMG}</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${tq.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${tq.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`
            }
        }
        ;
        a5.styles = [t_.globalCss, a1],
        a5 = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? a2(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && a3(t, i, l),
            l
        }
        )([es("w3m-help-view")], a5);
        let a4 = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
        var a6 = Object.defineProperty
          , a7 = Object.getOwnPropertyDescriptor
          , a8 = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? a7(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && a6(t, i, l),
            l
        }
        ;
        let a9 = class extends eo {
            constructor() {
                super(),
                this.isError = !1,
                this.connector = eb.Id.client().getConnectorById("injected"),
                this.openInjectedApp()
            }
            async openInjectedApp() {
                let {ready: e} = this.connector;
                e && (this.isError = !1,
                await io.handleConnectorConnection("injected", ()=>{
                    this.isError = !0
                }
                ))
            }
            render() {
                let {name: e, id: t, image_id: i} = eb.zv.getWalletRouterData()
                  , {isMobile: r, isDesktop: a, isWeb: l} = io.getCachedRouterWalletPlatforms();
                return H`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${i}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${r}" .isDesktop="${a}" .isWeb="${l}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(this)}" .disabled="${!this.isError}" .iconRight="${tq.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
            }
        }
        ;
        a9.styles = [t_.globalCss, a4],
        a8([eh()], a9.prototype, "isError", 2),
        a9 = a8([es("w3m-injected-connecting-view")], a9);
        let le = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
        var lt = Object.defineProperty
          , li = Object.getOwnPropertyDescriptor;
        let lr = class extends eo {
            onInstall(e) {
                e && eb.zv.openHref(e, "_blank")
            }
            render() {
                let {name: e, id: t, image_id: i, homepage: r} = eb.zv.getWalletRouterData();
                return H`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${i}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</w3m-text><w3m-button .onClick="${()=>this.onInstall(r)}" .iconLeft="${tq.ARROW_DOWN_ICON}">Download</w3m-button></w3m-info-footer>`
            }
        }
        ;
        lr.styles = [t_.globalCss, le],
        lr = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? li(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && lt(t, i, l),
            l
        }
        )([es("w3m-install-wallet-view")], lr);
        let la = c`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection div{display:flex}w3m-platform-selection w3m-button:nth-child(2){margin-left:10px}`;
        var ll = Object.defineProperty
          , lo = Object.getOwnPropertyDescriptor
          , ln = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lo(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ll(t, i, l),
            l
        }
        ;
        let ls = class extends eo {
            constructor() {
                super(),
                this.isError = !1,
                this.unwatchConnection = void 0,
                this.openMobileApp(),
                this.unwatchConnection = eb.kD.subscribe(e=>{
                    this.isError = e.pairingError
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchConnection) || e.call(this)
            }
            onFormatAndRedirect(e, t=!1) {
                let {mobile: i, name: r} = eb.zv.getWalletRouterData()
                  , a = i?.native
                  , l = i?.universal;
                if (a && !t) {
                    let t = eb.zv.formatNativeUrl(a, e, r);
                    eb.zv.openHref(t, "_self")
                } else if (l) {
                    let t = eb.zv.formatUniversalUrl(l, e, r);
                    eb.zv.openHref(t, "_self")
                }
            }
            openMobileApp(e=!1) {
                eb.kD.setPairingError(!1);
                let {standaloneUri: t} = eb.zb.state
                  , {pairingUri: i} = eb.kD.state
                  , r = eb.zv.getWalletRouterData();
                io.setRecentWallet(r),
                t ? this.onFormatAndRedirect(t, e) : this.onFormatAndRedirect(i, e)
            }
            onGoToAppStore(e) {
                e && eb.zv.openHref(e, "_blank")
            }
            render() {
                let {name: e, id: t, image_id: i, app: r, mobile: a} = eb.zv.getWalletRouterData()
                  , {isWeb: l} = io.getCachedRouterWalletPlatforms()
                  , o = r?.ios
                  , n = a?.universal;
                return H`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${i}" label="Tap 'Open' to continue…" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-text color="secondary" variant="small-thin">You can reload the website to try again ${n ? ` or open ${e} using a "Backup" instead` : ""}</w3m-text><w3m-platform-selection .isWeb="${l}" .isRetry="${!0}"><div><w3m-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${tq.RETRY_ICON}">Retry</w3m-button>${n ? H`<w3m-button variant="outline" .onClick="${()=>this.openMobileApp(!0)}" .iconRight="${tq.ARROW_UP_RIGHT_ICON}">Backup</w3m-button>` : null}</div></w3m-platform-selection></w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${t}" imageId="${i}"></w3m-wallet-image><w3m-text>${`Get ${e}`}</w3m-text></div><w3m-button .iconRight="${tq.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(o)}" variant="ghost">App Store</w3m-button></w3m-info-footer>`
            }
        }
        ;
        ls.styles = [t_.globalCss, la],
        ln([eh()], ls.prototype, "isError", 2),
        ls = ln([es("w3m-mobile-connecting-view")], ls);
        let lc = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
        var ld = Object.defineProperty
          , lh = Object.getOwnPropertyDescriptor;
        let lm = class extends eo {
            render() {
                let {name: e, id: t, image_id: i} = eb.zv.getWalletRouterData()
                  , {isInjected: r, isDesktop: a, isWeb: l} = io.getCachedRouterWalletPlatforms();
                return H`<w3m-modal-header title="${e}" .onAction="${io.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${t}" imageId="${i}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this qrcode with your phone's camera or inside ${e} app`}</w3m-text><w3m-platform-selection .isDesktop="${a}" .isInjected="${r}" .isWeb="${l}"></w3m-platform-selection></w3m-info-footer>`
            }
        }
        ;
        lm.styles = [t_.globalCss, lc],
        lm = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lh(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ld(t, i, l),
            l
        }
        )([es("w3m-mobile-qr-connecting-view")], lm);
        var lp = Object.defineProperty
          , lu = Object.getOwnPropertyDescriptor;
        let lw = class extends eo {
            render() {
                return H`<w3m-modal-header title="Scan the code" .onAction="${io.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`
            }
        }
        ;
        lw.styles = [t_.globalCss],
        lw = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lu(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && lp(t, i, l),
            l
        }
        )([es("w3m-qrcode-view")], lw);
        let lg = c`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
        var lv = Object.defineProperty
          , lf = Object.getOwnPropertyDescriptor;
        let lb = class extends eo {
            async onSelectChain(e) {
                try {
                    let {selectedChain: t, walletConnectVersion: i, isInjectedMobile: r} = eb.zb.state
                      , {isConnected: a} = eb.CV.state;
                    a ? t?.id === e.id ? eb.AV.reset("Account") : 2 === i ? (await eb.Id.client().switchNetwork({
                        chainId: e.id
                    }),
                    eb.AV.reset("Account")) : eb.AV.push("SwitchNetwork", {
                        SwitchNetwork: e
                    }) : r ? (eb.zb.setSelectedChain(e),
                    eb.jb.close()) : (eb.zb.setSelectedChain(e),
                    eb.AV.push("ConnectWallet"))
                } catch (e) {
                    console.error(e),
                    eb.Vs.openToast(io.getErrorMessage(e), "error")
                }
            }
            render() {
                let {chains: e} = eb.zb.state;
                return H`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${e?.map(e=>H`<w3m-network-button name="${e.name}" chainId="${e.id}" .onClick="${async()=>this.onSelectChain(e)}">${e.name}</w3m-network-button>`)}</div></w3m-modal-content>`
            }
        }
        ;
        lb.styles = [t_.globalCss, lg],
        lb = ((e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lf(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && lv(t, i, l),
            l
        }
        )([es("w3m-select-network-view")], lb);
        let lx = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
        var ly = Object.defineProperty
          , lC = Object.getOwnPropertyDescriptor
          , l$ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lC(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && ly(t, i, l),
            l
        }
        ;
        let lk = class extends eo {
            constructor() {
                super(),
                this.isError = !1,
                this.onSwitchNetwork()
            }
            async onSwitchNetwork() {
                try {
                    this.isError = !1;
                    let e = eb.zv.getSwitchNetworkRouterData();
                    await eb.Id.client().switchNetwork({
                        chainId: e.id
                    }),
                    eb.zb.setSelectedChain(e),
                    eb.AV.reset("Account")
                } catch {
                    this.isError = !0
                }
            }
            render() {
                let {id: e, name: t} = eb.zv.getSwitchNetworkRouterData();
                return H`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${e}" label="Approve in your wallet" .isError="${this.isError}"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.isError}" .iconRight="${tq.RETRY_ICON}">Try Again</w3m-button></w3m-info-footer>`
            }
        }
        ;
        lk.styles = [t_.globalCss, lx],
        l$([eh()], lk.prototype, "isError", 2),
        lk = l$([es("w3m-switch-network-view")], lk);
        let lA = c`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
        var lO = Object.defineProperty
          , lE = Object.getOwnPropertyDescriptor
          , l_ = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lE(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && lO(t, i, l),
            l
        }
        ;
        let lI = class extends eo {
            constructor() {
                super(...arguments),
                this.loading = !eb.uc.state.wallets.listings.length,
                this.firstFetch = !eb.uc.state.wallets.listings.length,
                this.search = "",
                this.endReached = !1,
                this.intersectionObserver = void 0,
                this.searchDebounce = io.debounce(e=>{
                    e.length >= 3 ? (this.firstFetch = !0,
                    this.endReached = !1,
                    this.search = e,
                    eb.uc.resetSearch(),
                    this.fetchWallets()) : this.search && (this.search = "",
                    this.endReached = this.isLastPage(),
                    eb.uc.resetSearch())
                }
                )
            }
            firstUpdated() {
                this.createPaginationObserver()
            }
            disconnectedCallback() {
                var e;
                null == (e = this.intersectionObserver) || e.disconnect()
            }
            get placeholderEl() {
                return io.getShadowRootElement(this, ".w3m-placeholder-block")
            }
            createPaginationObserver() {
                this.intersectionObserver = new IntersectionObserver(([e])=>{
                    e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
                }
                ),
                this.intersectionObserver.observe(this.placeholderEl)
            }
            isLastPage() {
                let {wallets: e, search: t} = eb.uc.state
                  , {listings: i, total: r} = this.search ? t : e;
                return r <= 40 || i.length >= r
            }
            async fetchWallets() {
                var e;
                let {wallets: t, search: i, injectedWallets: r} = eb.uc.state
                  , {listings: a, total: l, page: o} = this.search ? i : t;
                if (!this.endReached && (this.firstFetch || l > 40 && a.length < l))
                    try {
                        this.loading = !0;
                        let t = null == (e = eb.zb.state.standaloneChains) ? void 0 : e.join(",")
                          , {listings: i} = await eb.uc.getWallets({
                            page: this.firstFetch ? 1 : o + 1,
                            entries: 40,
                            search: this.search,
                            version: eb.zb.state.walletConnectVersion,
                            chains: t
                        })
                          , a = i.map(e=>io.getWalletIcon(e))
                          , l = r.map(e=>io.getWalletIcon(e));
                        await Promise.all([...a.map(async e=>io.preloadImage(e)), ...l.map(async e=>io.preloadImage(e)), eb.zv.wait(300)]),
                        this.endReached = this.isLastPage()
                    } catch (e) {
                        console.error(e),
                        eb.Vs.openToast(io.getErrorMessage(e), "error")
                    } finally {
                        this.loading = !1,
                        this.firstFetch = !1
                    }
            }
            onConnect(e) {
                eb.zv.isAndroid() ? io.handleMobileLinking(e) : io.goToConnectingView(e)
            }
            onSearchChange(e) {
                let {value: t} = e.target;
                this.searchDebounce(t)
            }
            render() {
                let {wallets: e, search: t} = eb.uc.state
                  , {listings: i} = this.search ? t : e
                  , r = this.loading && !i.length
                  , a = this.search.length >= 3
                  , l = rT.injectedWalletsTemplate()
                  , o = rT.manualWalletsTemplate()
                  , n = rT.recomendedWalletsTemplate(!0);
                a && (l = l.filter(({values: e})=>io.caseSafeIncludes(e[0], this.search)),
                o = o.filter(({values: e})=>io.caseSafeIncludes(e[0], this.search)),
                n = n.filter(({values: e})=>io.caseSafeIncludes(e[0], this.search)));
                let s = !this.loading && !i.length && !l.length && !n.length
                  , c = Math.max(l.length, i.length)
                  , d = {
                    "w3m-loading": r,
                    "w3m-end-reached": this.endReached || !this.loading,
                    "w3m-empty": s
                };
                return H`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${eC(d)}"><div class="w3m-grid">${r ? null : n} ${r ? null : [...Array(c)].map((e,t)=>H`${o[t]} ${l[t]} ${i[t] ? H`<w3m-wallet-button imageId="${i[t].image_id}" name="${i[t].name}" walletId="${i[t].id}" .onClick="${()=>this.onConnect(i[t])}"></w3m-wallet-button>` : null}`)}</div><div class="w3m-placeholder-block">${s ? H`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>` : null} ${!s && this.loading ? H`<w3m-spinner></w3m-spinner>` : null}</div></w3m-modal-content>`
            }
        }
        ;
        lI.styles = [t_.globalCss, lA],
        l_([eh()], lI.prototype, "loading", 2),
        l_([eh()], lI.prototype, "firstFetch", 2),
        l_([eh()], lI.prototype, "search", 2),
        l_([eh()], lI.prototype, "endReached", 2),
        lI = l_([es("w3m-wallet-explorer-view")], lI);
        let lP = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
        var lM = Object.defineProperty
          , lj = Object.getOwnPropertyDescriptor
          , lT = (e,t,i,r)=>{
            for (var a, l = r > 1 ? void 0 : r ? lj(t, i) : t, o = e.length - 1; o >= 0; o--)
                (a = e[o]) && (l = (r ? a(t, i, l) : a(l)) || l);
            return r && l && lM(t, i, l),
            l
        }
        ;
        let lW = class extends eo {
            constructor() {
                super(),
                this.isError = !1,
                this.unwatchConnection = void 0,
                this.openWebWallet(),
                this.unwatchConnection = eb.kD.subscribe(e=>{
                    this.isError = e.pairingError
                }
                )
            }
            disconnectedCallback() {
                var e;
                null == (e = this.unwatchConnection) || e.call(this)
            }
            onFormatAndRedirect(e) {
                let {desktop: t, name: i} = eb.zv.getWalletRouterData()
                  , r = t?.universal;
                if (r) {
                    let t = eb.zv.formatUniversalUrl(r, e, i);
                    eb.zv.openHref(t, "_blank")
                }
            }
            openWebWallet() {
                eb.kD.setPairingError(!1);
                let {standaloneUri: e} = eb.zb.state
                  , {pairingUri: t} = eb.kD.state
                  , i = eb.zv.getWalletRouterData();
                io.setRecentWallet(i),
                e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t)
            }
            render() {
                let {name: e, id: t, image_id: i} = eb.zv.getWalletRouterData()
                  , {isMobile: r, isInjected: a, isDesktop: l} = io.getCachedRouterWalletPlatforms()
                  , o = eb.zv.isMobile();
                return H`<w3m-modal-header title="${e}" .onAction="${io.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${i}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${r}" .isInjected="${!o && a}" .isDesktop="${!o && l}" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${tq.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
            }
        }
        ;
        lW.styles = [t_.globalCss, lP],
        lT([eh()], lW.prototype, "isError", 2),
        lW = lT([es("w3m-web-connecting-view")], lW)
    }
}]);
