(self.webpackChunk = self.webpackChunk || []).push([
    ["323"], {
        95487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new V.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function i(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function a() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var i = n;
                    return $.test(e) || !K.test(e) ? i = parseInt(e, 10) : K.test(e) && (i = 1e3 * parseFloat(e)), 0 > i && (i = 0), i == i ? i : n
                }

                function r(e) {
                    B.debug && window && window.console.warn(e)
                }
                var c, d, l, s = function(e, t, n) {
                        function i(e) {
                            return "object" == typeof e
                        }

                        function a(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function r(c, d) {
                            function l() {
                                var e = new s;
                                return a(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            d === n && (d = c, c = Object), l.Bare = s;
                            var u, f = o[e] = c[e],
                                g = s[e] = l[e] = new o;
                            return g.constructor = l, l.mixin = function(t) {
                                return s[e] = l[e] = r(l, t)[e], l
                            }, l.open = function(e) {
                                if (u = {}, a(e) ? u = e.call(l, g, f, l, c) : i(e) && (u = e), i(u))
                                    for (var n in u) t.call(u, n) && (g[n] = u[n]);
                                return a(g.init) || (g.init = c), l
                            }, l.open(d)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, n, i) {
                            var a = (e /= i) * e,
                                o = a * e;
                            return t + n * (-2.75 * o * a + 11 * a * a + -15.5 * o + 8 * a + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, i) {
                            var a = (e /= i) * e,
                                o = a * e;
                            return t + n * (-1 * o * a + 3 * a * a + -3 * o + 2 * a)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, i) {
                            var a = (e /= i) * e,
                                o = a * e;
                            return t + n * (.3 * o * a + -1.6 * a * a + 2.2 * o + -1.8 * a + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, i) {
                            var a = (e /= i) * e,
                                o = a * e;
                            return t + n * (2 * o * a + -5 * a * a + 2 * o + 2 * a)
                        }],
                        linear: ["linear", function(e, t, n, i) {
                            return n * e / i + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, i) {
                            return n * (e /= i) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, i) {
                            return -n * (e /= i) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, i) {
                            return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, i) {
                            return n * (e /= i) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, i) {
                            return n * ((e = e / i - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, i) {
                            return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, i) {
                            return n * (e /= i) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, i) {
                            return -n * ((e = e / i - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, i) {
                            return (e /= i / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, i) {
                            return n * (e /= i) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, i) {
                            return n * ((e = e / i - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, i) {
                            return (e /= i / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, i) {
                            return -n * Math.cos(e / i * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, i) {
                            return n * Math.sin(e / i * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, i) {
                            return -n / 2 * (Math.cos(Math.PI * e / i) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, i) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, i) {
                            return e === i ? t + n : n * (-Math.pow(2, -10 * e / i) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, i) {
                            return 0 === e ? t : e === i ? t + n : (e /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, i) {
                            return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, i) {
                            return n * Math.sqrt(1 - (e = e / i - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, i) {
                            return (e /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, i, a) {
                            return void 0 === a && (a = 1.70158), n * (e /= i) * e * ((a + 1) * e - a) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, i, a) {
                            return void 0 === a && (a = 1.70158), n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, i, a) {
                            return void 0 === a && (a = 1.70158), (e /= i / 2) < 1 ? n / 2 * e * e * (((a *= 1.525) + 1) * e - a) + t : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    g = window,
                    p = "bkwld-tram",
                    y = /[\-\.0-9]/g,
                    E = /[A-Z]/,
                    T = "number",
                    I = /^(rgb|#)/,
                    m = /(em|cm|mm|in|pt|pc|px)$/,
                    O = /(em|cm|mm|in|pt|pc|px|%)$/,
                    b = /(deg|rad|turn)$/,
                    A = "unitless",
                    R = /(all|none) 0s ease 0s/,
                    _ = /^(width|height)$/,
                    h = document.createElement("a"),
                    v = ["Webkit", "Moz", "O", "ms"],
                    S = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    G = function(e) {
                        if (e in h.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, i = "",
                            a = e.split("-");
                        for (t = 0; t < a.length; t++) i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
                        for (t = 0; t < v.length; t++)
                            if ((n = v[t] + i) in h.style) return {
                                dom: n,
                                css: S[t] + e
                            }
                    },
                    N = t.support = {
                        bind: Function.prototype.bind,
                        transform: G("transform"),
                        transition: G("transition"),
                        backface: G("backface-visibility"),
                        timing: G("transition-timing-function")
                    };
                if (N.transition) {
                    var L = N.timing.dom;
                    if (h.style[L] = u["ease-in-back"][0], !h.style[L])
                        for (var U in f) u[U][0] = f[U]
                }
                var C = t.frame = (c = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame) && N.bind ? c.bind(g) : function(e) {
                        g.setTimeout(e, 16)
                    },
                    P = t.now = (l = (d = g.performance) && (d.now || d.webkitNow || d.msNow || d.mozNow)) && N.bind ? l.bind(d) : Date.now || function() {
                        return +new Date
                    },
                    M = s(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                                        var a = e[t];
                                        a && i.push(a)
                                    }
                                    return i
                                }(("" + e).split(" ")),
                                i = n[0];
                            t = t || {};
                            var a = j[i];
                            if (!a) return r("Unsupported property: " + i);
                            if (!t.weak || !this.props[i]) {
                                var o = a[0],
                                    c = this.props[i];
                                return c || (c = this.props[i] = new o.Bare), c.init(this.$el, n, a, t), c
                            }
                        }

                        function i(e, t, i) {
                            if (e) {
                                var r = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && t) return this.timer = new z({
                                    duration: e,
                                    context: this,
                                    complete: a
                                }), void(this.active = !0);
                                if ("string" == r && t) {
                                    switch (e) {
                                        case "hide":
                                            d.call(this);
                                            break;
                                        case "stop":
                                            c.call(this);
                                            break;
                                        case "redraw":
                                            l.call(this);
                                            break;
                                        default:
                                            n.call(this, e, i && i[1])
                                    }
                                    return a.call(this)
                                }
                                if ("function" == r) return void e.call(this, this);
                                if ("object" == r) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new z({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = a));
                                    var g = this,
                                        p = !1,
                                        y = {};
                                    C(function() {
                                        u.call(g, e, function(e) {
                                            e.active && (p = !0, y[e.name] = e.nextStyle)
                                        }), p && g.$el.css(y)
                                    })
                                }
                            }
                        }

                        function a() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                i.call(this, e.options, !0, e.args)
                            }
                        }

                        function c(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function d() {
                            c.call(this), this.el.style.display = "none"
                        }

                        function l() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[N.transition.dom] = n)
                        }

                        function u(e, t, i) {
                            var a, o, r, c, d = t !== f,
                                l = {};
                            for (a in e) r = e[a], a in Q ? (l.transform || (l.transform = {}), l.transform[a] = r) : (E.test(a) && (a = a.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), a in j ? l[a] = r : (c || (c = {}), c[a] = r));
                            for (a in l) {
                                if (r = l[a], !(o = this.props[a])) {
                                    if (!d) continue;
                                    o = n.call(this, a)
                                }
                                t.call(this, o, r)
                            }
                            i && c && i.call(this, c)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function g(e, t) {
                            e.set(t)
                        }

                        function y(e) {
                            this.$el.css(e)
                        }

                        function T(e, n) {
                            t[e] = function() {
                                return this.children ? I.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function I(e, t) {
                            var n, i = this.children.length;
                            for (n = 0; i > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, B.keepInherited && !B.fallback) {
                                var n = W(this.el, "transition");
                                n && !R.test(n) && (this.upstream = n)
                            }
                            N.backface && B.hideBackface && Y(this.el, N.backface.css, "hidden")
                        }, T("add", n), T("start", i), T("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new z({
                                duration: e,
                                context: this,
                                complete: a
                            }), this.active = !0)
                        }), T("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = a)) : r("No active transition timer. Use start() or wait() before then().")
                        }), T("next", a), T("stop", c), T("set", function(e) {
                            c.call(this, e), u.call(this, e, g, y)
                        }), T("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), T("hide", d), T("redraw", l), T("destroy", function() {
                            c.call(this), e.removeData(this.el, p), this.$el = this.el = null
                        })
                    }),
                    V = s(M, function(t) {
                        function n(t, n) {
                            var i = e.data(t, p) || e.data(t, p, new M.Bare);
                            return i.el || i.init(t), n ? i.start(n) : i
                        }
                        t.init = function(t, i) {
                            var a = e(t);
                            if (!a.length) return this;
                            if (1 === a.length) return n(a[0], i);
                            var o = [];
                            return a.each(function(e, t) {
                                o.push(n(t, i))
                            }), this.children = o, this
                        }
                    }),
                    w = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, n, i) {
                            this.$el = e, this.el = e[0];
                            var a, r, c, d = t[0];
                            n[2] && (d = n[2]), H[d] && (d = H[d]), this.name = d, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (a = t[2], r = this.ease, c = "ease", void 0 !== r && (c = r), a in u ? a : c), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = i.unit || this.unit || B.defaultUnit, this.angle = i.angle || this.angle || B.defaultAngle, B.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new k({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return W(this.el, this.name)
                        }, e.update = function(e) {
                            Y(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, a, o = "number" == typeof e,
                                c = "string" == typeof e;
                            switch (t) {
                                case T:
                                    if (o) return e;
                                    if (c && "" === e.replace(y, "")) return +e;
                                    a = "number(unitless)";
                                    break;
                                case I:
                                    if (c) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? i(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    a = "hex or rgb string";
                                    break;
                                case m:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    a = "number(px) or string(unit)";
                                    break;
                                case O:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    a = "number(px) or string(unit or %)";
                                    break;
                                case b:
                                    if (o) return e + this.angle;
                                    if (c && t.test(e)) return e;
                                    a = "number(deg) or string(angle)";
                                    break;
                                case A:
                                    if (o || c && O.test(e)) return e;
                                    a = "number(unitless) or string(unit or %)"
                            }
                            return r("Type warning: Expected: [" + a + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    D = s(w, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), I))
                        }
                    }),
                    F = s(w, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    x = s(w, function(e, t) {
                        function n(e, t) {
                            var n, i, a, o, r;
                            for (n in e) a = (o = Q[n])[0], i = o[1] || n, r = this.convert(e[n], a), t.call(this, i, r, a)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && B.perspective && (this.current.perspective = B.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), Y(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, i = {};
                            for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(i)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            Y(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, i = {};
                            return n.call(this, e, function(e, n, a) {
                                i[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, a))
                            }), i
                        }
                    }),
                    k = s(function(t) {
                        function o() {
                            var e, t, n, i = d.length;
                            if (i)
                                for (C(o), t = P(), e = i; e--;)(n = d[e]) && n.render(t)
                        }
                        var c = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || c.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = c.ease), this.ease = t, this.update = e.update || a, this.complete = e.complete || a, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                i = e.to;
                            void 0 === n && (n = c.from), void 0 === i && (i = c.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = P(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = P()), this.active = !0, 1 === d.push(this) && C(o))
                        }, t.stop = function() {
                            var t, n;
                            this.active && (this.active = !1, (n = e.inArray(this, d)) >= 0 && (t = d.slice(n + 1), d.length = n, t.length && (d = d.concat(t))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var a, o, r = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (a = this.startRGB, o = this.endRGB, i(a[0] + r * (o[0] - a[0]), a[1] + r * (o[1] - a[1]), a[2] + r * (o[2] - a[2]))) : Math.round((this.begin + r * this.change) * l) / l, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var i = t.replace(y, "");
                                i !== e.replace(y, "") && r("Units do not match [tween]: " + t + ", " + e), this.unit = i
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = a
                        };
                        var d = [],
                            l = 1e3
                    }),
                    z = s(k, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || a, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    X = s(k, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new k({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, i = this.tweens.length,
                                a = !1;
                            for (t = i; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, a = !0);
                            return a ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    B = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !N.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!N.transition) return B.fallback = !0;
                    B.agentTests.push("(" + e + ")");
                    var t = RegExp(B.agentTests.join("|"), "i");
                    B.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new k(e)
                }, t.delay = function(e, t, n) {
                    return new z({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var Y = e.style,
                    W = e.css,
                    H = {
                        transform: N.transform && N.transform.css
                    },
                    j = {
                        color: [D, I],
                        background: [D, I, "background-color"],
                        "outline-color": [D, I],
                        "border-color": [D, I],
                        "border-top-color": [D, I],
                        "border-right-color": [D, I],
                        "border-bottom-color": [D, I],
                        "border-left-color": [D, I],
                        "border-width": [w, m],
                        "border-top-width": [w, m],
                        "border-right-width": [w, m],
                        "border-bottom-width": [w, m],
                        "border-left-width": [w, m],
                        "border-spacing": [w, m],
                        "letter-spacing": [w, m],
                        margin: [w, m],
                        "margin-top": [w, m],
                        "margin-right": [w, m],
                        "margin-bottom": [w, m],
                        "margin-left": [w, m],
                        padding: [w, m],
                        "padding-top": [w, m],
                        "padding-right": [w, m],
                        "padding-bottom": [w, m],
                        "padding-left": [w, m],
                        "outline-width": [w, m],
                        opacity: [w, T],
                        top: [w, O],
                        right: [w, O],
                        bottom: [w, O],
                        left: [w, O],
                        "font-size": [w, O],
                        "text-indent": [w, O],
                        "word-spacing": [w, O],
                        width: [w, O],
                        "min-width": [w, O],
                        "max-width": [w, O],
                        height: [w, O],
                        "min-height": [w, O],
                        "max-height": [w, O],
                        "line-height": [w, A],
                        "scroll-top": [F, T, "scrollTop"],
                        "scroll-left": [F, T, "scrollLeft"]
                    },
                    Q = {};
                N.transform && (j.transform = [x], Q = {
                    x: [O, "translateX"],
                    y: [O, "translateY"],
                    rotate: [b],
                    rotateX: [b],
                    rotateY: [b],
                    scale: [T],
                    scaleX: [T],
                    scaleY: [T],
                    skew: [b],
                    skewX: [b],
                    skewY: [b]
                }), N.transform && N.backface && (Q.z = [O, "translateZ"], Q.rotateZ = [b], Q.scaleZ = [T], Q.perspective = [m]);
                var $ = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        35756: function(e, t, n) {
            "use strict";
            var i, a, o, r, c, d, l, s, u, f, g, p, y, E, T, I, m, O, b, A, R = window.$,
                _ = n(95487) && R.tram;
            (i = {}).VERSION = "1.6.0-Webflow", a = {}, o = Array.prototype, r = Object.prototype, c = Function.prototype, o.push, d = o.slice, o.concat, r.toString, l = r.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, g = o.some, p = o.indexOf, o.lastIndexOf, y = Object.keys, c.bind, E = i.each = i.forEach = function(e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, r = e.length; o < r; o++)
                        if (t.call(n, e[o], o, e) === a) return
                } else
                    for (var c = i.keys(e), o = 0, r = c.length; o < r; o++)
                        if (t.call(n, e[c[o]], c[o], e) === a) return;
                return e
            }, i.map = i.collect = function(e, t, n) {
                var i = [];
                return null == e ? i : u && e.map === u ? e.map(t, n) : (E(e, function(e, a, o) {
                    i.push(t.call(n, e, a, o))
                }), i)
            }, i.find = i.detect = function(e, t, n) {
                var i;
                return T(e, function(e, a, o) {
                    if (t.call(n, e, a, o)) return i = e, !0
                }), i
            }, i.filter = i.select = function(e, t, n) {
                var i = [];
                return null == e ? i : f && e.filter === f ? e.filter(t, n) : (E(e, function(e, a, o) {
                    t.call(n, e, a, o) && i.push(e)
                }), i)
            }, T = i.some = i.any = function(e, t, n) {
                t || (t = i.identity);
                var o = !1;
                return null == e ? o : g && e.some === g ? e.some(t, n) : (E(e, function(e, i, r) {
                    if (o || (o = t.call(n, e, i, r))) return a
                }), !!o)
            }, i.contains = i.include = function(e, t) {
                return null != e && (p && e.indexOf === p ? -1 != e.indexOf(t) : T(e, function(e) {
                    return e === t
                }))
            }, i.delay = function(e, t) {
                var n = d.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, i.defer = function(e) {
                return i.delay.apply(i, [e, 1].concat(d.call(arguments, 1)))
            }, i.throttle = function(e) {
                var t, n, i;
                return function() {
                    t || (t = !0, n = arguments, i = this, _.frame(function() {
                        t = !1, e.apply(i, n)
                    }))
                }
            }, i.debounce = function(e, t, n) {
                var a, o, r, c, d, l = function() {
                    var s = i.now() - c;
                    s < t ? a = setTimeout(l, t - s) : (a = null, n || (d = e.apply(r, o), r = o = null))
                };
                return function() {
                    r = this, o = arguments, c = i.now();
                    var s = n && !a;
                    return a || (a = setTimeout(l, t)), s && (d = e.apply(r, o), r = o = null), d
                }
            }, i.defaults = function(e) {
                if (!i.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var a = arguments[t];
                    for (var o in a) void 0 === e[o] && (e[o] = a[o])
                }
                return e
            }, i.keys = function(e) {
                if (!i.isObject(e)) return [];
                if (y) return y(e);
                var t = [];
                for (var n in e) i.has(e, n) && t.push(n);
                return t
            }, i.has = function(e, t) {
                return l.call(e, t)
            }, i.isObject = function(e) {
                return e === Object(e)
            }, i.now = Date.now || function() {
                return new Date().getTime()
            }, i.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, I = /(.)^/, m = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, O = /\\|'|\r|\n|\u2028|\u2029/g, b = function(e) {
                return "\\" + m[e]
            }, A = /^\s*(\w|\$)+\s*$/, i.template = function(e, t, n) {
                !t && n && (t = n);
                var a, o = RegExp([((t = i.defaults({}, t, i.templateSettings)).escape || I).source, (t.interpolate || I).source, (t.evaluate || I).source].join("|") + "|$", "g"),
                    r = 0,
                    c = "__p+='";
                e.replace(o, function(t, n, i, a, o) {
                    return c += e.slice(r, o).replace(O, b), r = o + t.length, n ? c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? c += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (c += "';\n" + a + "\n__p+='"), t
                }), c += "';\n";
                var d = t.variable;
                if (d) {
                    if (!A.test(d)) throw Error("variable is not a bare identifier: " + d)
                } else c = "with(obj||{}){\n" + c + "}\n", d = "obj";
                c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                try {
                    a = Function(t.variable || "obj", "_", c)
                } catch (e) {
                    throw e.source = c, e
                }
                var l = function(e) {
                    return a.call(this, e, i)
                };
                return l.source = "function(" + d + "){\n" + c + "}", l
            }, e.exports = i
        },
        9461: function(e, t, n) {
            "use strict";
            var i = n(43949);
            i.define("brand", e.exports = function(e) {
                var t, n = {},
                    a = document,
                    o = e("html"),
                    r = e("body"),
                    c = window.location,
                    d = /PhantomJS/i.test(navigator.userAgent),
                    l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var n = a.fullScreen || a.mozFullScreen || a.webkitIsFullScreen || a.msFullscreenElement || !!a.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function u() {
                    var e = r.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        a = i.env("editor");
                    if (n) {
                        a && e.remove();
                        return
                    }
                    e.length && e.remove(), a || r.append(t)
                }
                return n.ready = function() {
                    var n, i, r, f = o.attr("data-wf-status"),
                        g = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(g) && c.hostname !== g && (f = !0), f && !d && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), i = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), r = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(i, r), n[0]), u(), setTimeout(u, 500), e(a).off(l, s).on(l, s))
                }, n
            })
        },
        60322: function(e, t, n) {
            "use strict";
            var i = n(43949);
            i.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var a, o = e(window),
                    r = e(document.documentElement),
                    c = document.location,
                    d = "hashchange",
                    l = n.load || function() {
                        var t, n, i;
                        a = !0, window.WebflowEditor = !0, o.off(d, u), t = function(t) {
                            var n;
                            e.ajax({
                                url: g("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: r.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (n = t, function(t) {
                                    var i, a, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = n, a = (i = t.scriptPath).indexOf("//") >= 0 ? i : g("https://editor-api.webflow.com" + i), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: a,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)
                                })
                            })
                        }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", i = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (p(n, i), t(!1)) : "WF_third_party_cookies_supported" === e.data && (p(n, i), t(!0))
                        }, n.onerror = function() {
                            p(n, i), t(!1)
                        }, window.addEventListener("message", i, !1), window.document.body.appendChild(n)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !a && /\?edit/.test(c.hash) && l()
                }

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function g(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function p(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return s ? l() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && l() : o.on(d, u).triggerHandler(d), {}
            })
        },
        12338: function(e, t, n) {
            "use strict";
            n(43949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    i = null,
                                    a = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function r(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function c() {
                                    t = !1
                                }

                                function d() {
                                    document.addEventListener("mousemove", l), document.addEventListener("mousedown", l), document.addEventListener("mouseup", l), document.addEventListener("pointermove", l), document.addEventListener("pointerdown", l), document.addEventListener("pointerup", l), document.addEventListener("touchmove", l), document.addEventListener("touchstart", l), document.addEventListener("touchend", l)
                                }

                                function l(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", l), document.removeEventListener("mousedown", l), document.removeEventListener("mouseup", l), document.removeEventListener("pointermove", l), document.removeEventListener("pointerdown", l), document.removeEventListener("pointerup", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchstart", l), document.removeEventListener("touchend", l))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && r(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", c, !0), document.addEventListener("pointerdown", c, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), d())
                                }, !0), d(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var n, i, c;
                                        (t || (i = (n = e.target).type, "INPUT" === (c = n.tagName) && a[i] && !n.readOnly || "TEXTAREA" === c && !n.readOnly || n.isContentEditable || 0)) && r(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, n) {
            "use strict";
            var i = n(43949);
            i.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function a(n) {
                    var i, a;
                    a = (i = n.target).tagName, (/^a$/i.test(a) && null != i.href || /^(button|textarea)$/i.test(a) && !0 !== i.disabled || /^input$/i.test(a) && /^(button|reset|submit|radio|checkbox)$/i.test(i.type) && !i.disabled || !/^(button|input|textarea|select|a)$/i.test(a) && !Number.isNaN(Number.parseFloat(i.tabIndex)) || /^audio$/i.test(a) || /^video$/i.test(a) && !0 === i.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var i = e.pop();
                            i.target.dispatchEvent(new MouseEvent(i.type, i))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && i.env.safari && (document.addEventListener("mousedown", a, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                i = [],
                a = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, i) {
                        i.__wf_intro || (i.__wf_intro = !0, t(i).triggerHandler(n.types.INTRO))
                    },
                    outro: function(e, i) {
                        i.__wf_intro && (i.__wf_intro = null, t(i).triggerHandler(n.types.OUTRO))
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + a,
                OUTRO: "w-ix-outro" + a
            }, n.init = function() {
                for (var e = i.length, a = 0; a < e; a++) {
                    var r = i[a];
                    r[0](0, r[1])
                }
                i = [], t.extend(n.triggers, o)
            }, n.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
                        i.push([t, n])
                    })
                }
            }, n.async(), e.exports = n
        },
        65134: function(e, t, n) {
            "use strict";
            var i = n(7199);

            function a(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
            }
            var o = window.jQuery,
                r = {},
                c = ".w-ix";
            r.triggers = {}, r.types = {
                INTRO: "w-ix-intro" + c,
                OUTRO: "w-ix-outro" + c
            }, o.extend(r.triggers, {
                reset: function(e, t) {
                    i.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = r
        },
        40941: function(e, t, n) {
            "use strict";
            var i = n(43949),
                a = n(46011);
            a.setEnv(i.env), i.define("ix2", e.exports = function() {
                return a
            })
        },
        43949: function(e, t, n) {
            "use strict";
            var i, a, o = {},
                r = {},
                c = [],
                d = window.Webflow || [],
                l = window.jQuery,
                s = l(window),
                u = l(document),
                f = l.isFunction,
                g = o._ = n(35756),
                p = o.tram = n(95487) && l.tram,
                y = !1,
                E = !1;

            function T(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (y) return e.ready();
                    g.contains(c, e.ready) || c.push(e.ready)
                }(e)
            }

            function I(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, c = g.filter(c, function(e) {
                    return e !== t.ready
                }))
            }
            p.config.hideBackface = !1, p.config.keepInherited = !0, o.define = function(e, t, n) {
                r[e] && I(r[e]);
                var i = r[e] = t(l, g, n) || {};
                return T(i), i
            }, o.require = function(e) {
                return r[e]
            }, o.push = function(e) {
                if (y) {
                    f(e) && e();
                    return
                }
                d.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var m = navigator.userAgent.toLowerCase(),
                O = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                b = o.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10),
                A = o.env.ios = /(ipod|iphone|ipad)/.test(m);
            o.env.safari = /safari/.test(m) && !b && !A, O && u.on("touchstart mousedown", function(e) {
                i = e.target
            }), o.validClick = O ? function(e) {
                return e === i || l.contains(e, i)
            } : function() {
                return !0
            };
            var R = "resize.webflow orientationchange.webflow load.webflow",
                _ = "scroll.webflow " + R;

            function h(e, t) {
                var n = [],
                    i = {};
                return i.up = g.throttle(function(e) {
                    g.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, i.up), i.on = function(e) {
                    "function" == typeof e && (g.contains(n, e) || n.push(e))
                }, i.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = g.filter(n, function(t) {
                        return t !== e
                    })
                }, i
            }

            function v(e) {
                f(e) && e()
            }

            function S() {
                a && (a.reject(), s.off("load", a.resolve)), a = new l.Deferred, s.on("load", a.resolve)
            }
            o.resize = h(s, R), o.scroll = h(s, _), o.redraw = h(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                y = !0, E ? (E = !1, g.each(r, T)) : g.each(c, v), g.each(d, v), o.resize.up()
            }, o.load = function(e) {
                a.then(e)
            }, o.destroy = function(e) {
                e = e || {}, E = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (y = e.domready), g.each(r, I), o.resize.off(), o.scroll.off(), o.redraw.off(), c = [], d = [], "pending" === a.state() && S()
            }, l(o.ready), S(), e.exports = window.Webflow = o
        },
        27624: function(e, t, n) {
            "use strict";
            var i = n(43949);
            i.define("links", e.exports = function(e, t) {
                var n, a, o, r = {},
                    c = e(window),
                    d = i.env(),
                    l = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    g = /\/$/;

                function p() {
                    var e = c.scrollTop(),
                        n = c.height();
                    t.each(a, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var i = t.link,
                                a = t.sec,
                                o = a.offset().top,
                                r = a.outerHeight(),
                                c = .5 * n,
                                d = a.is(":visible") && o + r - c >= e && o + c <= e + n;
                            t.active !== d && (t.active = d, y(i, u, d))
                        }
                    })
                }

                function y(e, t, n) {
                    var i = e.hasClass(t);
                    (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return r.ready = r.design = r.preview = function() {
                    n = d && i.env("design"), o = i.env("slug") || l.pathname || "", i.scroll.off(p), a = [];
                    for (var t = document.links, r = 0; r < t.length; ++r) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var i = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = i, !(i.indexOf(":") >= 0)) {
                                var r = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === l.host + l.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var c = e(s.hash);
                                    c.length && a.push({
                                        link: r,
                                        sec: c,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== i && "" !== i && y(r, u, s.href === l.href || i === o || f.test(i) && g.test(o))
                            }
                        }
                    }(t[r]);
                    a.length && (i.scroll.on(p), p())
                }, r
            })
        },
        30286: function(e, t, n) {
            "use strict";
            var i = n(43949);
            i.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    a = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    r = e(document),
                    c = e(document.body),
                    d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    l = i.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    g = document.createElement("style");
                g.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var p = /^#[a-zA-Z0-9][\w:.-]*$/;
                let y = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function E(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function T(t) {
                    var r = t.currentTarget;
                    if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))) {
                        var l = p.test(r.hash) && r.host + r.pathname === n.host + n.pathname ? r.hash : "";
                        if ("" !== l) {
                            var u, f = e(l);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = l, n.hash !== u && a && a.pushState && !(i.env.chrome && "file:" === n.protocol) && (a.state && a.state.hash) !== u && a.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, n) {
                                    var i = o.scrollTop(),
                                        a = function(t) {
                                            var n = e(s),
                                                i = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                a = t.offset().top - i;
                                            if ("mid" === t.data("scroll")) {
                                                var r = o.height() - i,
                                                    c = t.outerHeight();
                                                c < r && (a -= Math.round((r - c) / 2))
                                            }
                                            return a
                                        }(t);
                                    if (i !== a) {
                                        var r = function(e, t, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || y.matches) return 0;
                                                var i = 1;
                                                return c.add(e).each(function(e, t) {
                                                    var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (i = n)
                                                }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * i
                                            }(t, i, a),
                                            l = Date.now(),
                                            u = function() {
                                                var e, t, o, c, s, f = Date.now() - l;
                                                window.scroll(0, (e = i, t = a, (o = f) > (c = r) ? t : e + (t - e) * ((s = o / c) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= r ? d(u) : "function" == typeof n && n()
                                            };
                                        d(u)
                                    }
                                }(f, function() {
                                    E(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), E(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        r.on(n, f, T), r.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(g, document.head.firstChild)
                    }
                }
            })
        },
        93695: function(e, t, n) {
            "use strict";
            n(43949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function i(t) {
                    var i, a, o = !1,
                        r = !1,
                        c = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function d(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (r = !0, i = t[0].clientX) : i = e.clientX, a = i)
                    }

                    function l(t) {
                        if (o) {
                            if (r && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var i, d, l, s, f = t.touches,
                                g = f ? f[0].clientX : t.clientX,
                                p = g - a;
                            a = g, Math.abs(p) > c && n && "" === String(n()) && (i = "swipe", d = t, l = {
                                direction: p > 0 ? "right" : "left"
                            }, s = e.Event(i, {
                                originalEvent: d
                            }), e(d.target).trigger(s, l), u())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, r && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), r = !1;
                            return
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", d, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", d, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", d, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", d, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new i(t) : null
                }, t.instance = t.init(document), t
            })
        },
        41655: function(e, t, n) {
            "use strict";
            var i = n(43949),
                a = n(65134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            i.define("navbar", e.exports = function(e, t) {
                var n, r, c, d, l = {},
                    s = e.tram,
                    u = e(window),
                    f = e(document),
                    g = t.debounce,
                    p = i.env(),
                    y = ".w-nav",
                    E = "w--open",
                    T = "w--nav-dropdown-open",
                    I = "w--nav-dropdown-toggle-open",
                    m = "w--nav-dropdown-list-open",
                    O = "w--nav-link-open",
                    b = a.triggers,
                    A = e();

                function R() {
                    i.resize.off(_)
                }

                function _() {
                    r.each(M)
                }

                function h(n, i) {
                    var a, r, l, s, g, p = e(i),
                        E = e.data(i, y);
                    E || (E = e.data(i, y, {
                        open: !1,
                        el: p,
                        config: {},
                        selectedIdx: -1
                    })), E.menu = p.find(".w-nav-menu"), E.links = E.menu.find(".w-nav-link"), E.dropdowns = E.menu.find(".w-dropdown"), E.dropdownToggle = E.menu.find(".w-dropdown-toggle"), E.dropdownList = E.menu.find(".w-dropdown-list"), E.button = p.find(".w-nav-button"), E.container = p.find(".w-container"), E.overlayContainerId = "w-nav-overlay-" + n, E.outside = ((a = E).outside && f.off("click" + y, a.outside), function(t) {
                        var n = e(t.target);
                        d && n.closest(".w-editor-bem-EditorOverlay").length || P(a, n)
                    });
                    var T = p.find(".w-nav-brand");
                    T && "/" === T.attr("href") && null == T.attr("aria-label") && T.attr("aria-label", "home"), E.button.attr("style", "-webkit-user-select: text;"), null == E.button.attr("aria-label") && E.button.attr("aria-label", "menu"), E.button.attr("role", "button"), E.button.attr("tabindex", "0"), E.button.attr("aria-controls", E.overlayContainerId), E.button.attr("aria-haspopup", "menu"), E.button.attr("aria-expanded", "false"), E.el.off(y), E.button.off(y), E.menu.off(y), G(E), c ? (S(E), E.el.on("setting" + y, (r = E, function(e, n) {
                        n = n || {};
                        var i = u.width();
                        G(r), !0 === n.open && F(r, !0), !1 === n.open && k(r, !0), r.open && t.defer(function() {
                            i !== u.width() && L(r)
                        })
                    }))) : ((l = E).overlay || (l.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(l.el), l.overlay.attr("id", l.overlayContainerId), l.parent = l.menu.parent(), k(l, !0)), E.button.on("click" + y, U(E)), E.menu.on("click" + y, "a", C(E)), E.button.on("keydown" + y, (s = E, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return U(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return k(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, N(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), E.el.on("keydown" + y, (g = E, function(e) {
                        if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, N(g), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return k(g), g.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), N(g), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), N(g), e.preventDefault(), e.stopPropagation()
                        }
                    }))), M(n, i)
                }

                function v(t, n) {
                    var i = e.data(n, y);
                    i && (S(i), e.removeData(n, y))
                }

                function S(e) {
                    e.overlay && (k(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function G(e) {
                    var n = {},
                        i = e.config || {},
                        a = n.animation = e.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(a), n.animDirect = /left$/.test(a) ? -1 : 1, i.animation !== a && e.open && t.defer(L, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
                }

                function N(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), C(t)
                    }
                }

                function L(e) {
                    e.open && (k(e, !0), F(e, !0))
                }

                function U(e) {
                    return g(function() {
                        e.open ? k(e) : F(e)
                    })
                }

                function C(t) {
                    return function(n) {
                        var a = e(this).attr("href");
                        if (!i.validClick(n.currentTarget)) return void n.preventDefault();
                        a && 0 === a.indexOf("#") && t.open && k(t)
                    }
                }
                l.ready = l.design = l.preview = function() {
                    c = p && i.env("design"), d = i.env("editor"), n = e(document.body), (r = f.find(y)).length && (r.each(h), R(), i.resize.on(_))
                }, l.destroy = function() {
                    A = e(), R(), r && r.length && r.each(v)
                };
                var P = g(function(e, t) {
                    if (e.open) {
                        var n = t.closest(".w-nav-menu");
                        e.menu.is(n) || k(e)
                    }
                });

                function M(t, n) {
                    var i = e.data(n, y),
                        a = i.collapsed = "none" !== i.button.css("display");
                    if (!i.open || a || c || k(i, !0), i.container.length) {
                        var o, r = ("none" === (o = i.container.css(V)) && (o = ""), function(t, n) {
                            (n = e(n)).css(V, ""), "none" === n.css(V) && n.css(V, o)
                        });
                        i.links.each(r), i.dropdowns.each(r)
                    }
                    i.open && x(i)
                }
                var V = "max-width";

                function w(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function D(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function F(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(w), e.links.addClass(O), e.dropdowns.addClass(T), e.dropdownToggle.addClass(I), e.dropdownList.addClass(m), e.button.addClass(E);
                        var n = e.config;
                        ("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0);
                        var a = x(e),
                            o = e.menu.outerHeight(!0),
                            r = e.menu.outerWidth(!0),
                            d = e.el.height(),
                            l = e.el[0];
                        if (M(0, l), b.intro(0, l), i.redraw.up(), c || f.on("click" + y, e.outside), t) return void g();
                        var u = "transform " + n.duration + "ms " + n.easing;
                        if (e.overlay && (A = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
                            s(e.menu).add(u).set({
                                x: n.animDirect * r,
                                height: a
                            }).start({
                                x: 0
                            }).then(g), e.overlay && e.overlay.width(r);
                            return
                        }
                        s(e.menu).add(u).set({
                            y: -(d + o)
                        }).start({
                            y: 0
                        }).then(g)
                    }

                    function g() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function x(e) {
                    var t = e.config,
                        i = t.docHeight ? f.height() : n.height();
                    return t.animOver ? e.menu.height(i) : "fixed" !== e.el.css("position") && (i -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(i), i
                }

                function k(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(E);
                        var n = e.config;
                        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0), b.outro(0, e.el[0]), f.off("click" + y, e.outside), t) {
                            s(e.menu).stop(), c();
                            return
                        }
                        var i = "transform " + n.duration + "ms " + n.easing2,
                            a = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            r = e.el.height();
                        if (n.animOver) return void s(e.menu).add(i).start({
                            x: o * n.animDirect
                        }).then(c);
                        s(e.menu).add(i).start({
                            y: -(r + a)
                        }).then(c)
                    }

                    function c() {
                        e.menu.height(""), s(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(D), e.links.removeClass(O), e.dropdowns.removeClass(T), e.dropdownToggle.removeClass(I), e.dropdownList.removeClass(m), e.overlay && e.overlay.children().length && (A.length ? e.menu.insertAfter(A) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return l
            })
        },
        13946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                actionListPlaybackChanged: function() {
                    return W
                },
                animationFrameChanged: function() {
                    return x
                },
                clearRequested: function() {
                    return V
                },
                elementStateChanged: function() {
                    return Y
                },
                eventListenerAdded: function() {
                    return w
                },
                eventStateChanged: function() {
                    return F
                },
                instanceAdded: function() {
                    return z
                },
                instanceRemoved: function() {
                    return B
                },
                instanceStarted: function() {
                    return X
                },
                mediaQueriesDefined: function() {
                    return j
                },
                parameterChanged: function() {
                    return k
                },
                playbackRequested: function() {
                    return P
                },
                previewRequested: function() {
                    return C
                },
                rawDataImported: function() {
                    return G
                },
                sessionInitialized: function() {
                    return N
                },
                sessionStarted: function() {
                    return L
                },
                sessionStopped: function() {
                    return U
                },
                stopRequested: function() {
                    return M
                },
                testFrameRendered: function() {
                    return D
                },
                viewportWidthChanged: function() {
                    return H
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = n(7087),
                r = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_INITIALIZED: d,
                    IX2_SESSION_STARTED: l,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: g,
                    IX2_CLEAR_REQUESTED: p,
                    IX2_EVENT_LISTENER_ADDED: y,
                    IX2_TEST_FRAME_RENDERED: E,
                    IX2_EVENT_STATE_CHANGED: T,
                    IX2_ANIMATION_FRAME_CHANGED: I,
                    IX2_PARAMETER_CHANGED: m,
                    IX2_INSTANCE_ADDED: O,
                    IX2_INSTANCE_STARTED: b,
                    IX2_INSTANCE_REMOVED: A,
                    IX2_ELEMENT_STATE_CHANGED: R,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
                    IX2_VIEWPORT_WIDTH_CHANGED: h,
                    IX2_MEDIA_QUERIES_DEFINED: v
                } = o.IX2EngineActionTypes,
                {
                    reifyState: S
                } = r.IX2VanillaUtils,
                G = e => ({
                    type: c,
                    payload: { ...S(e)
                    }
                }),
                N = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: d,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                L = () => ({
                    type: l
                }),
                U = () => ({
                    type: s
                }),
                C = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                P = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: i,
                    allowEvents: a,
                    immediate: r,
                    testManual: c,
                    verbose: d,
                    rawData: l
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: c,
                        eventId: i,
                        allowEvents: a,
                        immediate: r,
                        verbose: d,
                        rawData: l
                    }
                }),
                M = e => ({
                    type: g,
                    payload: {
                        actionListId: e
                    }
                }),
                V = () => ({
                    type: p
                }),
                w = (e, t) => ({
                    type: y,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                D = (e = 1) => ({
                    type: E,
                    payload: {
                        step: e
                    }
                }),
                F = (e, t) => ({
                    type: T,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                x = (e, t) => ({
                    type: I,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                k = (e, t) => ({
                    type: m,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                z = e => ({
                    type: O,
                    payload: { ...e
                    }
                }),
                X = (e, t) => ({
                    type: b,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                B = e => ({
                    type: A,
                    payload: {
                        instanceId: e
                    }
                }),
                Y = (e, t, n, i) => ({
                    type: R,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: i
                    }
                }),
                W = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: _,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                H = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: h,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                j = () => ({
                    type: v
                })
        },
        46011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a = {
                actions: function() {
                    return l
                },
                destroy: function() {
                    return p
                },
                init: function() {
                    return g
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var o in a) Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            });
            let r = n(19516),
                c = (i = n(17243)) && i.__esModule ? i : {
                    default: i
                },
                d = n(51970),
                l = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {
                            __proto__: null
                        },
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                        }
                    return i.default = e, n && n.set(e, i), i
                }(n(13946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            let u = (0, r.createStore)(c.default);

            function f(e) {
                e() && (0, d.observeRequests)(u)
            }

            function g(e) {
                p(), (0, d.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function p() {
                (0, d.stopEngine)(u)
            }
        },
        15012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                elementContains: function() {
                    return m
                },
                getChildElements: function() {
                    return b
                },
                getClosestElement: function() {
                    return R
                },
                getProperty: function() {
                    return p
                },
                getQuerySelector: function() {
                    return E
                },
                getRefType: function() {
                    return _
                },
                getSiblingElements: function() {
                    return A
                },
                getStyle: function() {
                    return g
                },
                getValidDocument: function() {
                    return T
                },
                isSiblingNode: function() {
                    return O
                },
                matchSelector: function() {
                    return y
                },
                queryDocument: function() {
                    return I
                },
                setStyle: function() {
                    return f
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = n(9468),
                r = n(7087),
                {
                    ELEMENT_MATCHES: c
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: d,
                    HTML_ELEMENT: l,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = r.IX2EngineConstants;

            function f(e, t, n) {
                e.style[t] = n
            }

            function g(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function p(e, t) {
                return e[t]
            }

            function y(e) {
                return t => t[c](e)
            }

            function E({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(d)) {
                        let n = e.split(d),
                            i = n[0];
                        if (t = n[1], i !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function T(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function I(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function m(e, t) {
                return e.contains(t)
            }

            function O(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function b(e) {
                let t = [];
                for (let n = 0, {
                        length: i
                    } = e || []; n < i; n++) {
                    let {
                        children: i
                    } = e[n], {
                        length: a
                    } = i;
                    if (a)
                        for (let e = 0; e < a; e++) t.push(i[e])
                }
                return t
            }

            function A(e = []) {
                let t = [],
                    n = [];
                for (let i = 0, {
                        length: a
                    } = e; i < a; i++) {
                    let {
                        parentNode: a
                    } = e[i];
                    if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a)) continue;
                    n.push(a);
                    let o = a.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let R = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[c] && n[c](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function _(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? l : s : null
            }
        },
        51970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return ep
                },
                startEngine: function() {
                    return ei
                },
                stopActionGroup: function() {
                    return eg
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ea
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = I(n(19777)),
                r = I(n(24738)),
                c = I(n(64659)),
                d = I(n(13452)),
                l = I(n(86633)),
                s = I(n(53729)),
                u = I(n(32397)),
                f = I(n(35082)),
                g = n(7087),
                p = n(9468),
                y = n(13946),
                E = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {
                            __proto__: null
                        },
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                        }
                    return i.default = e, n && n.set(e, i), i
                }(n(15012)),
                T = I(n(58955));

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }
            let O = Object.keys(g.QuickEffectIds),
                b = e => O.includes(e),
                {
                    COLON_DELIMITER: A,
                    BOUNDARY_SELECTOR: R,
                    HTML_ELEMENT: _,
                    RENDER_GENERAL: h,
                    W_MOD_IX: v
                } = g.IX2EngineConstants,
                {
                    getAffectedElements: S,
                    getElementId: G,
                    getDestinationValues: N,
                    observeStore: L,
                    getInstanceId: U,
                    renderHTMLElement: C,
                    clearAllStyles: P,
                    getMaxDurationItemIndex: M,
                    getComputedStyle: V,
                    getInstanceOrigin: w,
                    reduceListToGroup: D,
                    shouldNamespaceEventParameter: F,
                    getNamespacedParameterId: x,
                    shouldAllowMediaQuery: k,
                    cleanupHTMLElement: z,
                    clearObjectCache: X,
                    stringifyTarget: B,
                    mediaQueriesEqual: Y,
                    shallowEqual: W
                } = p.IX2VanillaUtils,
                {
                    isPluginType: H,
                    createPluginInstance: j,
                    getPluginDuration: Q
                } = p.IX2VanillaPlugins,
                $ = navigator.userAgent,
                K = $.match(/iPad/i) || $.match(/iPhone/);

            function q(e) {
                L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: en
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, n) {
                let i = () => {
                    ei({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(i, 0) : i()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: i,
                    actionItemId: a,
                    eventId: o,
                    allowEvents: r,
                    immediate: c,
                    testManual: d,
                    verbose: l = !0
                } = e, {
                    rawData: s
                } = e;
                if (i && a && s && c) {
                    let e = s.actionLists[i];
                    e && (s = D({
                        actionList: e,
                        actionItemId: a,
                        rawData: s
                    }))
                }
                if (ei({
                        store: t,
                        rawData: s,
                        allowEvents: r,
                        testManual: d
                    }), i && n === g.ActionTypeConsts.GENERAL_START_ACTION || b(n)) {
                    eg({
                        store: t,
                        actionListId: i
                    }), eu({
                        store: t,
                        actionListId: i,
                        eventId: o
                    });
                    let e = ep({
                        store: t,
                        eventId: o,
                        actionListId: i,
                        immediate: c,
                        verbose: l
                    });
                    l && e && t.dispatch((0, y.actionListPlaybackChanged)({
                        actionListId: i,
                        isPlaying: !c
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? eg({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ea(t)
            }

            function en(e, t) {
                ea(t), P({
                    store: t,
                    elementApi: E
                })
            }

            function ei({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: i
            }) {
                let {
                    ixSession: a
                } = e.getState();
                if (t && e.dispatch((0, y.rawDataImported)(t)), !a.active) {
                    (e.dispatch((0, y.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(R),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), n) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: n
                        } = t;
                        ec(e), (0, u.default)(n, (t, n) => {
                            let i = T.default[n];
                            if (!i) return void console.warn(`IX2 event type not configured: ${n}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: n
                            }) {
                                ! function(e) {
                                    if (!K) return;
                                    let t = {},
                                        n = "";
                                    for (let i in e) {
                                        let {
                                            eventTypeId: a,
                                            target: o
                                        } = e[i], r = E.getQuerySelector(o);
                                        t[r] || (a === g.EventTypeConsts.MOUSE_CLICK || a === g.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[r] = !0, n += r + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (n) {
                                        let e = document.createElement("style");
                                        e.textContent = n, document.body.appendChild(e)
                                    }
                                }(n);
                                let {
                                    types: i,
                                    handler: a
                                } = e, {
                                    ixData: d
                                } = t.getState(), {
                                    actionLists: l
                                } = d, s = ed(n, es);
                                if (!(0, c.default)(s)) return;
                                (0, u.default)(s, (e, i) => {
                                    let a = n[i],
                                        {
                                            action: c,
                                            id: s,
                                            mediaQueries: u = d.mediaQueryKeys
                                        } = a,
                                        {
                                            actionListId: f
                                        } = c.config;
                                    Y(u, d.mediaQueryKeys) || t.dispatch((0, y.mediaQueriesDefined)()), c.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(a.config) ? a.config : [a.config]).forEach(n => {
                                        let {
                                            continuousParameterGroupId: i
                                        } = n, a = (0, r.default)(l, `${f}.continuousParameterGroups`, []), c = (0, o.default)(a, ({
                                            id: e
                                        }) => e === i), d = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
                                        c && e.forEach((e, i) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: n,
                                                eventId: i,
                                                eventConfig: a,
                                                actionListId: o,
                                                parameterGroup: c,
                                                smoothing: d,
                                                restingValue: l
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, p = f[i], {
                                                    eventTypeId: y
                                                } = p, T = {}, I = {}, m = [], {
                                                    continuousActionGroups: O
                                                } = c, {
                                                    id: b
                                                } = c;
                                                F(y, a) && (b = x(t, b));
                                                let _ = u.hasBoundaryNodes && n ? E.getClosestElement(n, R) : null;
                                                O.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: i
                                                    } = e;
                                                    i.forEach(e => {
                                                        let {
                                                            actionTypeId: i
                                                        } = e, {
                                                            target: a
                                                        } = e.config;
                                                        if (!a) return;
                                                        let o = a.boundaryMode ? _ : null,
                                                            r = B(a) + A + i;
                                                        if (I[r] = function(e = [], t, n) {
                                                                let i, a = [...e];
                                                                return a.some((e, n) => e.keyframe === t && (i = n, !0)), null == i && (i = a.length, a.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), a[i].actionItems.push(n), a
                                                            }(I[r], t, e), !T[r]) {
                                                            T[r] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            S({
                                                                config: t,
                                                                event: p,
                                                                eventTarget: n,
                                                                elementRoot: o,
                                                                elementApi: E
                                                            }).forEach(e => {
                                                                m.push({
                                                                    element: e,
                                                                    key: r
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), m.forEach(({
                                                    element: t,
                                                    key: n
                                                }) => {
                                                    let a = I[n],
                                                        c = (0, r.default)(a, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = c,
                                                        u = (s === g.ActionTypeConsts.PLUGIN_RIVE ? 0 === (c.config ? .target ? .selectorGuids || []).length : H(s)) ? j(s) ? .(t, c) : null,
                                                        f = N({
                                                            element: t,
                                                            actionItem: c,
                                                            elementApi: E
                                                        }, u);
                                                    ey({
                                                        store: e,
                                                        element: t,
                                                        eventId: i,
                                                        actionListId: o,
                                                        actionItem: c,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: b,
                                                        actionGroups: a,
                                                        smoothing: d,
                                                        restingValue: l,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + A + i,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: n,
                                                actionListId: f,
                                                parameterGroup: c,
                                                smoothing: d,
                                                restingValue: u
                                            })
                                        })
                                    }), (c.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || b(c.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let p = e => {
                                        let {
                                            ixSession: i
                                        } = t.getState();
                                        el(s, (o, r, c) => {
                                            let l = n[r],
                                                s = i.eventState[c],
                                                {
                                                    action: u,
                                                    mediaQueries: f = d.mediaQueryKeys
                                                } = l;
                                            if (!k(f, i.mediaQueryKey)) return;
                                            let p = (n = {}) => {
                                                let i = a({
                                                    store: t,
                                                    element: o,
                                                    event: l,
                                                    eventConfig: n,
                                                    nativeEvent: e,
                                                    eventStateKey: c
                                                }, s);
                                                W(i, s) || t.dispatch((0, y.eventStateChanged)(c, i))
                                            };
                                            u.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(p) : p()
                                        })
                                    },
                                    T = (0, f.default)(p, 12),
                                    I = ({
                                        target: e = document,
                                        types: n,
                                        throttle: i
                                    }) => {
                                        n.split(" ").filter(Boolean).forEach(n => {
                                            let a = i ? T : p;
                                            e.addEventListener(n, a), t.dispatch((0, y.eventListenerAdded)(e, [n, a]))
                                        })
                                    };
                                Array.isArray(i) ? i.forEach(I) : "string" == typeof i && I(e)
                            }({
                                logic: i,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: i
                        } = e.getState();
                        i.eventListeners.length && function(e) {
                            let t = () => {
                                ec(e)
                            };
                            er.forEach(n => {
                                window.addEventListener(n, t), e.dispatch((0, y.eventListenerAdded)(window, [n, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(v) && (e.className += ` ${v}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && L({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ea(e), P({
                                store: e,
                                elementApi: E
                            }), ei({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, y.sessionStarted)()),
                        function(e, t) {
                            let n = i => {
                                let {
                                    ixSession: a,
                                    ixParameters: o
                                } = e.getState();
                                if (a.active)
                                    if (e.dispatch((0, y.animationFrameChanged)(i, o)), t) {
                                        let t = L({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                n(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(n)
                            };
                            n(window.performance.now())
                        }(e, i)
                }
            }

            function ea(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(eo), X(), e.dispatch((0, y.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let er = ["resize", "orientationchange"];

            function ec(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), i = window.innerWidth;
                if (i !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, y.viewportWidthChanged)({
                        width: i,
                        mediaQueries: t
                    }))
                }
            }
            let ed = (e, t) => (0, d.default)((0, s.default)(e, t), l.default),
                el = (e, t) => {
                    (0, u.default)(e, (e, n) => {
                        e.forEach((e, i) => {
                            t(e, n, n + A + i)
                        })
                    })
                },
                es = e => S({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: E
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: i,
                    ixSession: a
                } = e.getState(), {
                    actionLists: o,
                    events: c
                } = i, d = c[n], l = o[t];
                if (l && l.useFirstGroupAsInitialState) {
                    let o = (0, r.default)(l, "actionItemGroups[0].actionItems", []);
                    if (!k((0, r.default)(d, "mediaQueries", i.mediaQueryKeys), a.mediaQueryKey)) return;
                    o.forEach(i => {
                        let {
                            config: a,
                            actionTypeId: o
                        } = i, r = S({
                            config: a ? .target ? .useEventTarget === !0 && a ? .target ? .objectId == null ? {
                                target: d.target,
                                targets: d.targets
                            } : a,
                            event: d,
                            elementApi: E
                        }), c = H(o);
                        r.forEach(a => {
                            let r = c ? j(o) ? .(a, i) : null;
                            ey({
                                destination: N({
                                    element: a,
                                    actionItem: i,
                                    elementApi: E
                                }, r),
                                immediate: !0,
                                store: e,
                                element: a,
                                eventId: n,
                                actionItem: i,
                                actionListId: t,
                                pluginInstance: r
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: i
                        } = t;
                        eE(t, e), i && e.dispatch((0, y.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eg({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: i,
                actionListId: a
            }) {
                let {
                    ixInstances: o,
                    ixSession: c
                } = e.getState(), d = c.hasBoundaryNodes && n ? E.getClosestElement(n, R) : null;
                (0, u.default)(o, n => {
                    let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
                        c = !i || n.eventStateKey === i;
                    if (n.actionListId === a && n.eventId === t && c) {
                        if (d && o && !E.elementContains(d, n.element)) return;
                        eE(n, e), n.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
                            actionListId: a,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: i,
                actionListId: a,
                groupIndex: o = 0,
                immediate: c,
                verbose: d
            }) {
                let {
                    ixData: l,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = l, f = u[t] || {}, {
                    mediaQueries: g = l.mediaQueryKeys
                } = f, {
                    actionItemGroups: p,
                    useFirstGroupAsInitialState: y
                } = (0, r.default)(l, `actionLists.${a}`, {});
                if (!p || !p.length) return !1;
                o >= p.length && (0, r.default)(f, "config.loop") && (o = 0), 0 === o && y && o++;
                let T = (0 === o || 1 === o && y) && b(f.action ? .actionTypeId) ? f.config.delay : void 0,
                    I = (0, r.default)(p, [o, "actionItems"], []);
                if (!I.length || !k(g, s.mediaQueryKey)) return !1;
                let m = s.hasBoundaryNodes && n ? E.getClosestElement(n, R) : null,
                    O = M(I),
                    A = !1;
                return I.forEach((r, l) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = r, g = H(u), {
                        target: p
                    } = s;
                    p && S({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: p.boundaryMode ? m : null,
                        elementApi: E
                    }).forEach((s, f) => {
                        let p = g ? j(u) ? .(s, r) : null,
                            y = g ? Q(u)(s, r) : null;
                        A = !0;
                        let I = V({
                                element: s,
                                actionItem: r
                            }),
                            m = N({
                                element: s,
                                actionItem: r,
                                elementApi: E
                            }, p);
                        ey({
                            store: e,
                            element: s,
                            actionItem: r,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: i,
                            actionListId: a,
                            groupIndex: o,
                            isCarrier: O === l && 0 === f,
                            computedStyle: I,
                            destination: m,
                            immediate: c,
                            verbose: d,
                            pluginInstance: p,
                            pluginDuration: y,
                            instanceDelay: T
                        })
                    })
                }), A
            }

            function ey(e) {
                let t, {
                        store: n,
                        computedStyle: i,
                        ...a
                    } = e,
                    {
                        element: o,
                        actionItem: r,
                        immediate: c,
                        pluginInstance: d,
                        continuous: l,
                        restingValue: s,
                        eventId: u
                    } = a,
                    f = U(),
                    {
                        ixElements: p,
                        ixSession: T,
                        ixData: I
                    } = n.getState(),
                    m = G(p, o),
                    {
                        refState: O
                    } = p[m] || {},
                    b = E.getRefType(o),
                    A = T.reducedMotion && g.ReducedMotionTypes[r.actionTypeId];
                if (A && l) switch (I.events[u] ? .eventTypeId) {
                    case g.EventTypeConsts.MOUSE_MOVE:
                    case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let R = w(o, O, i, r, E, d);
                if (n.dispatch((0, y.instanceAdded)({
                        instanceId: f,
                        elementId: m,
                        origin: R,
                        refType: b,
                        skipMotion: A,
                        skipToValue: t,
                        ...a
                    })), eT(document.body, "ix2-animation-started", f), c) return void
                function(e, t) {
                    let {
                        ixParameters: n
                    } = e.getState();
                    e.dispatch((0, y.instanceStarted)(t, 0)), e.dispatch((0, y.animationFrameChanged)(performance.now(), n));
                    let {
                        ixInstances: i
                    } = e.getState();
                    eI(i[t], e)
                }(n, f);
                L({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: eI
                }), l || n.dispatch((0, y.instanceStarted)(f, T.tick))
            }

            function eE(e, t) {
                eT(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: i
                } = e, {
                    ixElements: a
                } = t.getState(), {
                    ref: o,
                    refType: r
                } = a[n] || {};
                r === _ && z(o, i, E), t.dispatch((0, y.instanceRemoved)(e.id))
            }

            function eT(e, t, n) {
                let i = document.createEvent("CustomEvent");
                i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i)
            }

            function eI(e, t) {
                let {
                    active: n,
                    continuous: i,
                    complete: a,
                    elementId: o,
                    actionItem: r,
                    actionTypeId: c,
                    renderType: d,
                    current: l,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: g,
                    actionListId: p,
                    isCarrier: T,
                    styleProp: I,
                    verbose: m,
                    pluginInstance: O
                } = e, {
                    ixData: b,
                    ixSession: A
                } = t.getState(), {
                    events: R
                } = b, {
                    mediaQueries: v = b.mediaQueryKeys
                } = R && R[u] ? R[u] : {};
                if (k(v, A.mediaQueryKey) && (i || n || a)) {
                    if (l || d === h && a) {
                        t.dispatch((0, y.elementStateChanged)(o, c, l, r));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: n,
                            refType: i,
                            refState: a
                        } = e[o] || {}, s = a && a[c];
                        (i === _ || H(c)) && C(n, a, s, u, r, I, E, d, O)
                    }
                    if (a) {
                        if (T) {
                            let e = ep({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: g,
                                actionListId: p,
                                groupIndex: s + 1,
                                verbose: m
                            });
                            m && !e && t.dispatch((0, y.actionListPlaybackChanged)({
                                actionListId: p,
                                isPlaying: !1
                            }))
                        }
                        eE(e, t)
                    }
                }
            }
        },
        58955: function(e, t, n) {
            "use strict";
            let i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return eg
                }
            });
            let a = u(n(85801)),
                o = u(n(24738)),
                r = u(n(43789)),
                c = n(7087),
                d = n(51970),
                l = n(13946),
                s = n(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: g,
                MOUSE_DOWN: p,
                MOUSE_UP: y,
                MOUSE_OVER: E,
                MOUSE_OUT: T,
                DROPDOWN_CLOSE: I,
                DROPDOWN_OPEN: m,
                SLIDER_ACTIVE: O,
                SLIDER_INACTIVE: b,
                TAB_ACTIVE: A,
                TAB_INACTIVE: R,
                NAVBAR_CLOSE: _,
                NAVBAR_OPEN: h,
                MOUSE_MOVE: v,
                PAGE_SCROLL_DOWN: S,
                SCROLL_INTO_VIEW: G,
                SCROLL_OUT_OF_VIEW: N,
                PAGE_SCROLL_UP: L,
                SCROLLING_IN_VIEW: U,
                PAGE_FINISH: C,
                ECOMMERCE_CART_CLOSE: P,
                ECOMMERCE_CART_OPEN: M,
                PAGE_START: V,
                PAGE_SCROLL: w
            } = c.EventTypeConsts, D = "COMPONENT_ACTIVE", F = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: x
            } = c.IX2EngineConstants, {
                getNamespacedParameterId: k
            } = s.IX2VanillaUtils, z = e => t => !!("object" == typeof t && e(t)) || t, X = z(({
                element: e,
                nativeEvent: t
            }) => e === t.target), B = z(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), Y = (0, a.default)([X, B]), W = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: i
                    } = n, a = i[t];
                    if (a && !ee[a.eventTypeId]) return a
                }
                return null
            }, H = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: i
                } = n.config;
                return !!W(e, i)
            }, j = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: i
            }, a) => {
                let {
                    action: r,
                    id: c
                } = t, {
                    actionListId: l,
                    autoStopEventId: s
                } = r.config, u = W(e, s);
                return u && (0, d.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: n,
                    eventStateKey: s + x + i.split(x)[1],
                    actionListId: (0, o.default)(u, "action.config.actionListId")
                }), (0, d.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: n,
                    eventStateKey: i,
                    actionListId: l
                }), (0, d.startActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: n,
                    eventStateKey: i,
                    actionListId: l
                }), a
            }, Q = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i, $ = {
                handler: Q(Y, j)
            }, K = { ...$,
                types: [D, F].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: V,
                PAGE_FINISH: C
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, r.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ei = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: i,
                    relatedTarget: a
                } = t, o = e.contains(i);
                if ("mouseover" === n && o) return !0;
                let r = e.contains(a);
                return "mouseout" === n && !!o && !!r
            }, ea = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: i,
                    clientHeight: a
                } = et(), o = n.scrollOffsetValue, r = "PX" === n.scrollOffsetUnit ? o : a * (o || 0) / 100;
                return en(t.getBoundingClientRect(), {
                    left: 0,
                    top: r,
                    right: i,
                    bottom: a - r
                })
            }, eo = e => (t, n) => {
                let {
                    type: i
                } = t.nativeEvent, a = -1 !== [D, F].indexOf(i) ? i === D : n.isActive, o = { ...n,
                    isActive: a
                };
                return (!n || o.isActive !== n.isActive) && e(t, o) || o
            }, er = e => (t, n) => {
                let i = {
                    elementHovered: ei(t)
                };
                return (n ? i.elementHovered !== n.elementHovered : i.elementHovered) && e(t, i) || i
            }, ec = e => (t, n = {}) => {
                let i, a, {
                        stiffScrollTop: o,
                        scrollHeight: r,
                        innerHeight: c
                    } = et(),
                    {
                        event: {
                            config: d,
                            eventTypeId: l
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = d,
                    f = r - c,
                    g = Number((o / f).toFixed(2));
                if (n && n.percentTop === g) return n;
                let p = ("PX" === u ? s : c * (s || 0) / 100) / f,
                    y = 0;
                n && (i = g > n.percentTop, y = (a = n.scrollingDown !== i) ? g : n.anchorTop);
                let E = l === S ? g >= y + p : g <= y - p,
                    T = { ...n,
                        percentTop: g,
                        inBounds: E,
                        anchorTop: y,
                        scrollingDown: i
                    };
                return n && E && (a || T.inBounds !== n.inBounds) && e(t, T) || T
            }, ed = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, el = e => (t, n = {
                clickCount: 0
            }) => {
                let i = {
                    clickCount: n.clickCount % 2 + 1
                };
                return i.clickCount !== n.clickCount && e(t, i) || i
            }, es = (e = !0) => ({ ...K,
                handler: Q(e ? Y : X, eo((e, t) => t.isActive ? $.handler(e, t) : t))
            }), eu = (e = !0) => ({ ...K,
                handler: Q(e ? Y : X, eo((e, t) => t.isActive ? t : $.handler(e, t)))
            }), ef = { ...J,
                handler: (i = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: i,
                        store: a
                    } = e, {
                        ixData: o
                    } = a.getState(), {
                        events: r
                    } = o;
                    return !r[i.action.config.autoStopEventId] && t.triggered ? t : i.eventTypeId === G === n ? (j(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: ea(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && i(e, n) || n
                })
            }, eg = {
                [O]: es(),
                [b]: eu(),
                [m]: es(),
                [I]: eu(),
                [h]: es(!1),
                [_]: eu(!1),
                [A]: es(),
                [R]: eu(),
                [M]: {
                    types: "ecommerce-cart-open",
                    handler: Q(Y, j)
                },
                [P]: {
                    types: "ecommerce-cart-close",
                    handler: Q(Y, j)
                },
                [f]: {
                    types: "click",
                    handler: Q(Y, el((e, {
                        clickCount: t
                    }) => {
                        H(e) ? 1 === t && j(e) : j(e)
                    }))
                },
                [g]: {
                    types: "click",
                    handler: Q(Y, el((e, {
                        clickCount: t
                    }) => {
                        2 === t && j(e)
                    }))
                },
                [p]: { ...$,
                    types: "mousedown"
                },
                [y]: { ...$,
                    types: "mouseup"
                },
                [E]: {
                    types: Z,
                    handler: Q(Y, er((e, t) => {
                        t.elementHovered && j(e)
                    }))
                },
                [T]: {
                    types: Z,
                    handler: Q(Y, er((e, t) => {
                        t.elementHovered || j(e)
                    }))
                },
                [v]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: i,
                        eventStateKey: a
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: r,
                            selectedAxis: d,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = n, {
                            clientX: g = o.clientX,
                            clientY: p = o.clientY,
                            pageX: y = o.pageX,
                            pageY: E = o.pageY
                        } = i, T = "X_AXIS" === d, I = "mouseout" === i.type, m = f / 100, O = s, b = !1;
                        switch (r) {
                            case c.EventBasedOn.VIEWPORT:
                                m = T ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break;
                            case c.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: i
                                    } = et();m = T ? Math.min(e + y, n) / n : Math.min(t + E, i) / i;
                                    break
                                }
                            case c.EventBasedOn.ELEMENT:
                            default:
                                {
                                    O = k(a, s);
                                    let e = 0 === i.type.indexOf("mouse");
                                    if (e && !0 !== Y({
                                            element: t,
                                            nativeEvent: i
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: r,
                                            width: c,
                                            height: d
                                        } = n;
                                    if (!e && !ed({
                                            left: g,
                                            top: p
                                        }, n)) break;b = !0,
                                    m = T ? (g - o) / c : (p - r) / d
                                }
                        }
                        return I && (m > .95 || m < .05) && (m = Math.round(m)), (r !== c.EventBasedOn.ELEMENT || b || b !== o.elementHovered) && (m = u ? 1 - m : m, e.dispatch((0, l.parameterChanged)(O, m))), {
                            elementHovered: b,
                            clientX: g,
                            clientY: p,
                            pageX: y,
                            pageY: E
                        }
                    }
                },
                [w]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: i
                        } = t, {
                            scrollTop: a,
                            scrollHeight: o,
                            clientHeight: r
                        } = et(), c = a / (o - r);
                        c = i ? 1 - c : c, e.dispatch((0, l.parameterChanged)(n, c))
                    }
                },
                [U]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: i
                    }, a = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: r,
                            scrollWidth: d,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: g,
                            continuousParameterGroupId: p,
                            startsEntering: y,
                            startsExiting: E,
                            addEndOffset: T,
                            addStartOffset: I,
                            addOffsetValue: m = 0,
                            endOffsetValue: O = 0
                        } = n;
                        if (f === c.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === g ? o / d : r / s;
                            return e !== a.scrollPercent && t.dispatch((0, l.parameterChanged)(p, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = k(i, p),
                                o = e.getBoundingClientRect(),
                                r = (I ? m : 0) / 100,
                                c = (T ? O : 0) / 100;
                            r = y ? r : 1 - r, c = E ? c : 1 - c;
                            let d = o.top + Math.min(o.height * r, u),
                                f = Math.min(u + (o.top + o.height * c - d), s),
                                g = Math.min(Math.max(0, u - d), f) / f;
                            return g !== a.scrollPercent && t.dispatch((0, l.parameterChanged)(n, g)), {
                                scrollPercent: g
                            }
                        }
                    }
                },
                [G]: ef,
                [N]: ef,
                [S]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown && j(e)
                    })
                },
                [L]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown || j(e)
                    })
                },
                [C]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(X, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && j(e), n
                    })
                },
                [V]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(X, (e, t) => (t || j(e), {
                        started: !0
                    }))
                }
            }
        },
        34609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: i
            } = n(7087).IX2EngineActionTypes, a = (e = Object.freeze({}), t) => t.type === i ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let i = n(7087),
                a = n(9468),
                o = n(81185),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_STOPPED: c,
                    IX2_INSTANCE_ADDED: d,
                    IX2_INSTANCE_STARTED: l,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = i.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: g,
                    createBezierEasing: p
                } = a.IX2EasingUtils,
                {
                    RENDER_GENERAL: y
                } = i.IX2EngineConstants,
                {
                    getItemConfigByKey: E,
                    getRenderType: T,
                    getStyleProp: I
                } = a.IX2VanillaUtils,
                m = (e, t) => {
                    let n, i, a, r, {
                            position: c,
                            parameterId: d,
                            actionGroups: l,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: p,
                            actionTypeId: y,
                            customEasingFn: T,
                            skipMotion: I,
                            skipToValue: m
                        } = e,
                        {
                            parameters: O
                        } = t.payload,
                        b = Math.max(1 - u, .01),
                        A = O[d];
                    null == A && (b = 1, A = p);
                    let R = f((Math.max(A, 0) || 0) - c),
                        _ = I ? m : f(c + R * b),
                        h = 100 * _;
                    if (_ === c && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = l; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = l[e];
                        if (0 === e && (n = o[0]), h >= t) {
                            n = o[0];
                            let c = l[e + 1],
                                d = c && h !== t;
                            i = d ? c.actionItems[0] : null, d && (a = t / 100, r = (c.keyframe - t) / 100)
                        }
                    }
                    let v = {};
                    if (n && !i)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            v[t] = E(y, t, n.config)
                        } else if (n && i && void 0 !== a && void 0 !== r) {
                            let e = (_ - a) / r,
                                t = g(n.config.easing, e, T);
                            for (let e = 0, {
                                    length: a
                                } = s; e < a; e++) {
                                let a = s[e],
                                    o = E(y, a, n.config),
                                    r = (E(y, a, i.config) - o) * t + o;
                                v[a] = r
                            }
                        }
                    return (0, o.merge)(e, {
                        position: _,
                        current: v
                    })
                },
                O = (e, t) => {
                    let {
                        active: n,
                        origin: i,
                        start: a,
                        immediate: r,
                        renderType: c,
                        verbose: d,
                        actionItem: l,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: p,
                        instanceDelay: E,
                        customEasingFn: T,
                        skipMotion: I
                    } = e, m = l.config.easing, {
                        duration: O,
                        delay: b
                    } = l.config;
                    null != p && (O = p), b = null != E ? E : b, c === y ? O = 0 : (r || I) && (O = b = 0);
                    let {
                        now: A
                    } = t.payload;
                    if (n && i) {
                        let t = A - (a + b);
                        if (d) {
                            let t = O + b,
                                n = f(Math.min(Math.max(0, (A - a) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / O), 1)),
                            r = g(m, n, T),
                            c = {},
                            l = null;
                        return u.length && (l = u.reduce((e, t) => {
                            let n = s[t],
                                a = parseFloat(i[t]) || 0,
                                o = parseFloat(n) - a;
                            return e[t] = o * r + a, e
                        }, {})), c.current = l, c.position = n, 1 === n && (c.active = !1, c.complete = !0), (0, o.merge)(e, c)
                    }
                    return e
                },
                b = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case r:
                            return t.payload.ixInstances || Object.freeze({});
                        case c:
                            return Object.freeze({});
                        case d:
                            {
                                let {
                                    instanceId: n,
                                    elementId: i,
                                    actionItem: a,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: g,
                                    immediate: y,
                                    verbose: E,
                                    continuous: m,
                                    parameterId: O,
                                    actionGroups: b,
                                    smoothing: A,
                                    restingValue: R,
                                    pluginInstance: _,
                                    pluginDuration: h,
                                    instanceDelay: v,
                                    skipMotion: S,
                                    skipToValue: G
                                } = t.payload,
                                {
                                    actionTypeId: N
                                } = a,
                                L = T(N),
                                U = I(L, N),
                                C = Object.keys(g).filter(e => null != g[e] && "string" != typeof g[e]),
                                {
                                    easing: P
                                } = a.config;
                                return (0, o.set)(e, n, {
                                    id: n,
                                    elementId: i,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: f,
                                    destination: g,
                                    destinationKeys: C,
                                    immediate: y,
                                    verbose: E,
                                    current: null,
                                    actionItem: a,
                                    actionTypeId: N,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    renderType: L,
                                    isCarrier: u,
                                    styleProp: U,
                                    continuous: m,
                                    parameterId: O,
                                    actionGroups: b,
                                    smoothing: A,
                                    restingValue: R,
                                    pluginInstance: _,
                                    pluginDuration: h,
                                    instanceDelay: v,
                                    skipMotion: S,
                                    skipToValue: G,
                                    customEasingFn: Array.isArray(P) && 4 === P.length ? p(P) : void 0
                                })
                            }
                        case l:
                            {
                                let {
                                    instanceId: n,
                                    time: i
                                } = t.payload;
                                return (0, o.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: i
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let i = {},
                                    a = Object.keys(e),
                                    {
                                        length: o
                                    } = a;
                                for (let t = 0; t < o; t++) {
                                    let o = a[t];
                                    o !== n && (i[o] = e[o])
                                }
                                return i
                            }
                        case u:
                            {
                                let n = e,
                                    i = Object.keys(e),
                                    {
                                        length: a
                                    } = i;
                                for (let r = 0; r < a; r++) {
                                    let a = i[r],
                                        c = e[a],
                                        d = c.continuous ? m : O;
                                    n = (0, o.set)(n, a, d(c, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        71540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: i,
                IX2_SESSION_STOPPED: a,
                IX2_PARAMETER_CHANGED: o
            } = n(7087).IX2EngineActionTypes, r = (e = {}, t) => {
                switch (t.type) {
                    case i:
                        return t.payload.ixParameters || {};
                    case a:
                        return {};
                    case o:
                        {
                            let {
                                key: n,
                                value: i
                            } = t.payload;
                            return e[n] = i,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        17243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let i = n(19516),
                a = n(34609),
                o = n(30628),
                r = n(25862),
                c = n(9468),
                d = n(7718),
                l = n(71540),
                {
                    ixElements: s
                } = c.IX2ElementsReducer,
                u = (0, i.combineReducers)({
                    ixData: a.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: r.ixSession,
                    ixElements: s,
                    ixInstances: d.ixInstances,
                    ixParameters: l.ixParameters
                })
        },
        30628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let i = n(7087),
                a = n(81185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: r,
                    IX2_STOP_REQUESTED: c,
                    IX2_CLEAR_REQUESTED: d
                } = i.IX2EngineActionTypes,
                l = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [r]: {
                        value: "playback"
                    },
                    [c]: {
                        value: "stop"
                    },
                    [d]: {
                        value: "clear"
                    }
                }),
                u = (e = l, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, a.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        25862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            let i = n(7087),
                a = n(81185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: r,
                    IX2_TEST_FRAME_RENDERED: c,
                    IX2_SESSION_STOPPED: d,
                    IX2_EVENT_LISTENER_ADDED: l,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: g,
                    IX2_MEDIA_QUERIES_DEFINED: p
                } = i.IX2EngineActionTypes,
                y = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                E = (e = y, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: i
                                } = t.payload;
                                return (0, a.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: i
                                })
                            }
                        case r:
                            return (0, a.set)(e, "active", !0);
                        case c:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, a.set)(e, "tick", e.tick + n)
                            }
                        case d:
                            return y;
                        case u:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, a.set)(e, "tick", n)
                            }
                        case l:
                            {
                                let n = (0, a.addLast)(e.eventListeners, t.payload);
                                return (0, a.set)(e, "eventListeners", n)
                            }
                        case s:
                            {
                                let {
                                    stateKey: n,
                                    newState: i
                                } = t.payload;
                                return (0, a.setIn)(e, ["eventState", n], i)
                            }
                        case f:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: i
                                } = t.payload;
                                return (0, a.setIn)(e, ["playbackState", n], i)
                            }
                        case g:
                            {
                                let {
                                    width: n,
                                    mediaQueries: i
                                } = t.payload,
                                o = i.length,
                                r = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: a,
                                        max: o
                                    } = i[e];
                                    if (n >= a && n <= o) {
                                        r = t;
                                        break
                                    }
                                }
                                return (0, a.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: r
                                })
                            }
                        case p:
                            return (0, a.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        97377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return d
                },
                getPluginConfig: function() {
                    return a
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return l
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                r = e => e || {
                    value: 0
                },
                c = e => ({
                    value: e.value
                }),
                d = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                l = (e, t, n) => {
                    if (!e) return;
                    let i = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * i)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        92570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                r = e => document.querySelector(`[data-w-id="${e}"]`),
                c = () => window.Webflow.require("rive"),
                d = (e, t) => e.value.inputs[t],
                l = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: i = {}
                        } = t.config.value;
                    for (let e in i) null == i[e] && (n[e] = 0);
                    return n
                },
                u = e => e.value.inputs ? ? {},
                f = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? r(n) : null
                },
                g = (e, {
                    PLUGIN_RIVE: t
                }, n) => {
                    let i = c();
                    if (!i) return;
                    let r = i.getInstance(e),
                        d = i.rive.StateMachineInputType,
                        {
                            name: l,
                            inputs: s = {}
                        } = n.config.value || {};

                    function u(e) {
                        if (e.loaded) n();
                        else {
                            let t = () => {
                                n(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function n() {
                            let n = e.stateMachineInputs(l);
                            if (null != n) {
                                if (e.isPlaying || e.play(l, !1), a in s || o in s) {
                                    let t = e.layout,
                                        n = s[a] ? ? t.fit,
                                        i = s[o] ? ? t.alignment;
                                    (n !== t.fit || i !== t.alignment) && (e.layout = t.copyWith({
                                        fit: n,
                                        alignment: i
                                    }))
                                }
                                for (let e in s) {
                                    if (e === a || e === o) continue;
                                    let i = n.find(t => t.name === e);
                                    if (null != i) switch (i.type) {
                                        case d.Boolean:
                                            null != s[e] && (i.value = !!s[e]);
                                            break;
                                        case d.Number:
                                            {
                                                let n = t[e];null != n && (i.value = n);
                                                break
                                            }
                                        case d.Trigger:
                                            s[e] && i.fire()
                                    }
                                }
                            }
                        }
                    }
                    r ? .rive ? u(r.rive) : i.setLoadHandler(e, u)
                },
                p = (e, t) => null
        },
        22866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                r = (e, t) => e.filter(e => !t.includes(e)),
                c = (e, t) => e.value[t],
                d = () => null,
                l = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = r(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = l[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = l[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? a(n) : null
                },
                g = (e, t, n) => {
                    let i = o();
                    if (!i) return;
                    let a = i.getInstance(e),
                        r = n.config.target.objectId,
                        c = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = r && e.findObjectById(r);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: i
                            } = t;
                            null != i.positionX && (n.position.x = i.positionX), null != i.positionY && (n.position.y = i.positionY), null != i.positionZ && (n.position.z = i.positionZ), null != i.rotationX && (n.rotation.x = i.rotationX), null != i.rotationY && (n.rotation.y = i.rotationY), null != i.rotationZ && (n.rotation.z = i.rotationZ), null != i.scaleX && (n.scale.x = i.scaleX), null != i.scaleY && (n.scale.y = i.scaleY), null != i.scaleZ && (n.scale.z = i.scaleZ)
                        };
                    a ? c(a.spline) : i.setLoadHandler(e, c)
                },
                p = () => null
        },
        11407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = n(40380),
                r = (e, t) => e.value[t],
                c = () => null,
                d = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        i = t.config.target.objectId,
                        a = getComputedStyle(document.documentElement).getPropertyValue(i);
                    return null != n.size ? {
                        size: parseInt(a, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(a)
                    } : null != n.red && null != n.green && null != n.blue ? (0, o.normalizeColor)(a) : void 0
                },
                l = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: i
                        }) => [e, t, n, i].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: i
                        }) => `rgba(${e}, ${t}, ${n}, ${i})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, n) => {
                    let {
                        target: {
                            objectId: i
                        },
                        value: {
                            unit: a
                        }
                    } = n.config, o = t.PLUGIN_VARIABLE, r = Object.values(u).find(e => e.match(o, a));
                    r && document.documentElement.style.setProperty(i, r.getValue(o, a))
                },
                g = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        63690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = n(7087),
                a = l(n(97377)),
                o = l(n(22866)),
                r = l(n(92570)),
                c = l(n(11407));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var i = {
                        __proto__: null
                    },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                    }
                return i.default = e, n && n.set(e, i), i
            }
            let s = new Map([
                [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a
                }],
                [i.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [i.ActionTypeConsts.PLUGIN_RIVE, { ...r
                }],
                [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...c
                }]
            ])
        },
        48023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return O
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return p
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return m
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return g
                },
                IX2_INSTANCE_ADDED: function() {
                    return E
                },
                IX2_INSTANCE_REMOVED: function() {
                    return I
                },
                IX2_INSTANCE_STARTED: function() {
                    return T
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return A
                },
                IX2_PARAMETER_CHANGED: function() {
                    return y
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return l
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return d
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return a
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return r
                },
                IX2_SESSION_STOPPED: function() {
                    return c
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return R
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return b
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                r = "IX2_SESSION_STARTED",
                c = "IX2_SESSION_STOPPED",
                d = "IX2_PREVIEW_REQUESTED",
                l = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                g = "IX2_EVENT_STATE_CHANGED",
                p = "IX2_ANIMATION_FRAME_CHANGED",
                y = "IX2_PARAMETER_CHANGED",
                E = "IX2_INSTANCE_ADDED",
                T = "IX2_INSTANCE_STARTED",
                I = "IX2_INSTANCE_REMOVED",
                m = "IX2_ELEMENT_STATE_CHANGED",
                O = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                b = "IX2_VIEWPORT_WIDTH_CHANGED",
                A = "IX2_MEDIA_QUERIES_DEFINED",
                R = "IX2_TEST_FRAME_RENDERED"
        },
        52686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return Y
                },
                BACKGROUND: function() {
                    return F
                },
                BACKGROUND_COLOR: function() {
                    return D
                },
                BAR_DELIMITER: function() {
                    return j
                },
                BORDER_COLOR: function() {
                    return x
                },
                BOUNDARY_SELECTOR: function() {
                    return d
                },
                CHILDREN: function() {
                    return Q
                },
                COLON_DELIMITER: function() {
                    return H
                },
                COLOR: function() {
                    return k
                },
                COMMA_DELIMITER: function() {
                    return W
                },
                CONFIG_UNIT: function() {
                    return E
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return g
                },
                CONFIG_X_VALUE: function() {
                    return l
                },
                CONFIG_Y_UNIT: function() {
                    return p
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return y
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return z
                },
                FILTER: function() {
                    return P
                },
                FLEX: function() {
                    return X
                },
                FONT_VARIATION_SETTINGS: function() {
                    return M
                },
                HEIGHT: function() {
                    return w
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return a
                },
                OPACITY: function() {
                    return C
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return ei
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ea
                },
                RENDER_TRANSFORM: function() {
                    return en
                },
                ROTATE_X: function() {
                    return v
                },
                ROTATE_Y: function() {
                    return S
                },
                ROTATE_Z: function() {
                    return G
                },
                SCALE_3D: function() {
                    return h
                },
                SCALE_X: function() {
                    return A
                },
                SCALE_Y: function() {
                    return R
                },
                SCALE_Z: function() {
                    return _
                },
                SIBLINGS: function() {
                    return K
                },
                SKEW: function() {
                    return N
                },
                SKEW_X: function() {
                    return L
                },
                SKEW_Y: function() {
                    return U
                },
                TRANSFORM: function() {
                    return T
                },
                TRANSLATE_3D: function() {
                    return b
                },
                TRANSLATE_X: function() {
                    return I
                },
                TRANSLATE_Y: function() {
                    return m
                },
                TRANSLATE_Z: function() {
                    return O
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return V
                },
                WILL_CHANGE: function() {
                    return B
                },
                W_MOD_IX: function() {
                    return c
                },
                W_MOD_JS: function() {
                    return r
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = "|",
                o = "data-wf-page",
                r = "w-mod-js",
                c = "w-mod-ix",
                d = ".w-dyn-item",
                l = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                g = "xUnit",
                p = "yUnit",
                y = "zUnit",
                E = "unit",
                T = "transform",
                I = "translateX",
                m = "translateY",
                O = "translateZ",
                b = "translate3d",
                A = "scaleX",
                R = "scaleY",
                _ = "scaleZ",
                h = "scale3d",
                v = "rotateX",
                S = "rotateY",
                G = "rotateZ",
                N = "skew",
                L = "skewX",
                U = "skewY",
                C = "opacity",
                P = "filter",
                M = "font-variation-settings",
                V = "width",
                w = "height",
                D = "backgroundColor",
                F = "background",
                x = "borderColor",
                k = "color",
                z = "display",
                X = "flex",
                B = "willChange",
                Y = "AUTO",
                W = ",",
                H = ":",
                j = "|",
                Q = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                K = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                en = "RENDER_TRANSFORM",
                ei = "RENDER_GENERAL",
                ea = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        70262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return a
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                ActionTypeConsts: function() {
                    return r.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return c
                },
                IX2EngineConstants: function() {
                    return d
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = l(n(61833), t),
                r = l(n(70262), t);
            l(n(28704), t), l(n(83213), t);
            let c = u(n(48023)),
                d = u(n(52686));

            function l(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = s(t);
                if (n && n.has(e)) return n.get(e);
                var i = {
                        __proto__: null
                    },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                    }
                return i.default = e, n && n.set(e, i), i
            }
        },
        83213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: i,
                TRANSFORM_SCALE: a,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: r,
                STYLE_SIZE: c,
                STYLE_FILTER: d,
                STYLE_FONT_VARIATION: l
            } = n(70262).ActionTypeConsts, s = {
                [i]: !0,
                [a]: !0,
                [o]: !0,
                [r]: !0,
                [c]: !0,
                [d]: !0,
                [l]: !0
            }
        },
        61833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return r
                },
                EventContinuousMouseAxes: function() {
                    return c
                },
                EventLimitAffectedElements: function() {
                    return d
                },
                EventTypeConsts: function() {
                    return a
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return l
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let a = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                r = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                c = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                d = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                l = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        28704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        40380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function i(e) {
                let t, i, a, o = 1,
                    r = e.replace(/\s/g, "").toLowerCase(),
                    c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
                if (c.startsWith("#")) {
                    let e = c.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), i = parseInt(e[1] + e[1], 16), a = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), i = parseInt(e.substring(2, 4), 16), a = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (c.startsWith("rgba")) {
                    let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), i = parseInt(e[1], 10), a = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (c.startsWith("rgb")) {
                    let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), i = parseInt(e[1], 10), a = parseInt(e[2], 10)
                } else if (c.startsWith("hsla")) {
                    let e, n, r, d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(d[0]),
                        s = parseFloat(d[1].replace("%", "")) / 100,
                        u = parseFloat(d[2].replace("%", "")) / 100;
                    o = parseFloat(d[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        g = f * (1 - Math.abs(l / 60 % 2 - 1)),
                        p = u - f / 2;
                    l >= 0 && l < 60 ? (e = f, n = g, r = 0) : l >= 60 && l < 120 ? (e = g, n = f, r = 0) : l >= 120 && l < 180 ? (e = 0, n = f, r = g) : l >= 180 && l < 240 ? (e = 0, n = g, r = f) : l >= 240 && l < 300 ? (e = g, n = 0, r = f) : (e = f, n = 0, r = g), t = Math.round((e + p) * 255), i = Math.round((n + p) * 255), a = Math.round((r + p) * 255)
                } else if (c.startsWith("hsl")) {
                    let e, n, o, r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(r[0]),
                        l = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * l,
                        f = u * (1 - Math.abs(d / 60 % 2 - 1)),
                        g = s - u / 2;
                    d >= 0 && d < 60 ? (e = u, n = f, o = 0) : d >= 60 && d < 120 ? (e = f, n = u, o = 0) : d >= 120 && d < 180 ? (e = 0, n = u, o = f) : d >= 180 && d < 240 ? (e = 0, n = f, o = u) : d >= 240 && d < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + g) * 255), i = Math.round((n + g) * 255), a = Math.round((o + g) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: i,
                    blue: a,
                    alpha: o
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return c
                },
                IX2Easings: function() {
                    return r
                },
                IX2ElementsReducer: function() {
                    return d
                },
                IX2VanillaPlugins: function() {
                    return l
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = f(n(12662)),
                r = f(n(78686)),
                c = f(n(73767)),
                d = f(n(85861)),
                l = f(n(31799)),
                s = f(n(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = u(t);
                if (n && n.has(e)) return n.get(e);
                var i = {
                        __proto__: null
                    },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                    }
                return i.default = e, n && n.set(e, i), i
            }
        },
        12662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a = {
                ELEMENT_MATCHES: function() {
                    return l
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return c
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return g
                },
                withBrowser: function() {
                    return d
                }
            };
            for (var o in a) Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            });
            let r = (i = n(19777)) && i.__esModule ? i : {
                    default: i
                },
                c = "undefined" != typeof window,
                d = (e, t) => c ? e() : t,
                l = d(() => (0, r.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = d(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let i = 0; i < n; i++) {
                            let n = t[i];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = d(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let i = 0; i < n; i++) {
                            let n = t[i] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                g = f ? f + "TransformStyle" : "transformStyle"
        },
        73767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return l
                }
            };
            for (var o in a) Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            });
            let r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {
                            __proto__: null
                        },
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = e[o]
                        }
                    return i.default = e, n && n.set(e, i), i
                }(n(78686)),
                c = (i = n(1361)) && i.__esModule ? i : {
                    default: i
                };

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t = 5, n = 10) {
                let i = Math.pow(n, t),
                    a = Number(Math.round(e * i) / i);
                return Math.abs(a) > 1e-4 ? a : 0
            }

            function s(e) {
                return (0, c.default)(...e)
            }

            function u(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? l(t > 0 ? n(t) : t) : l(t > 0 && e && r[e] ? r[e](t) : t)
            }
        },
        78686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a = {
                bounce: function() {
                    return X
                },
                bouncePast: function() {
                    return B
                },
                ease: function() {
                    return c
                },
                easeIn: function() {
                    return d
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return l
                },
                inBack: function() {
                    return P
                },
                inCirc: function() {
                    return N
                },
                inCubic: function() {
                    return p
                },
                inElastic: function() {
                    return w
                },
                inExpo: function() {
                    return v
                },
                inOutBack: function() {
                    return V
                },
                inOutCirc: function() {
                    return U
                },
                inOutCubic: function() {
                    return E
                },
                inOutElastic: function() {
                    return F
                },
                inOutExpo: function() {
                    return G
                },
                inOutQuad: function() {
                    return g
                },
                inOutQuart: function() {
                    return m
                },
                inOutQuint: function() {
                    return A
                },
                inOutSine: function() {
                    return h
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return T
                },
                inQuint: function() {
                    return O
                },
                inSine: function() {
                    return R
                },
                outBack: function() {
                    return M
                },
                outBounce: function() {
                    return C
                },
                outCirc: function() {
                    return L
                },
                outCubic: function() {
                    return y
                },
                outElastic: function() {
                    return D
                },
                outExpo: function() {
                    return S
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return I
                },
                outQuint: function() {
                    return b
                },
                outSine: function() {
                    return _
                },
                swingFrom: function() {
                    return k
                },
                swingFromTo: function() {
                    return x
                },
                swingTo: function() {
                    return z
                }
            };
            for (var o in a) Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            });
            let r = (i = n(1361)) && i.__esModule ? i : {
                    default: i
                },
                c = (0, r.default)(.25, .1, .25, 1),
                d = (0, r.default)(.42, 0, 1, 1),
                l = (0, r.default)(0, 0, .58, 1),
                s = (0, r.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function g(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function p(e) {
                return Math.pow(e, 3)
            }

            function y(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function E(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function T(e) {
                return Math.pow(e, 4)
            }

            function I(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function m(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function O(e) {
                return Math.pow(e, 5)
            }

            function b(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function A(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function R(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function _(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function h(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function v(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function S(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function G(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function N(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function L(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function U(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function C(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function P(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function M(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function V(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function w(e) {
                let t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function D(e) {
                let t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function F(e) {
                let t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1) ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function x(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function k(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function z(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function B(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        31799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                clearPlugin: function() {
                    return y
                },
                createPluginInstance: function() {
                    return g
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return c
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = n(12662),
                r = n(63690);

            function c(e) {
                return r.pluginMethodMap.has(e)
            }
            let d = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let n = r.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let i = n[e];
                    if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
                    return i
                },
                l = d("getPluginConfig"),
                s = d("getPluginOrigin"),
                u = d("getPluginDuration"),
                f = d("getPluginDestination"),
                g = d("createPluginInstance"),
                p = d("renderPlugin"),
                y = d("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                cleanupHTMLElement: function() {
                    return eW
                },
                clearAllStyles: function() {
                    return eX
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return eO
                },
                getComputedStyle: function() {
                    return eb
                },
                getDestinationValues: function() {
                    return eN
                },
                getElementId: function() {
                    return ey
                },
                getInstanceId: function() {
                    return eg
                },
                getInstanceOrigin: function() {
                    return eh
                },
                getItemConfigByKey: function() {
                    return eG
                },
                getMaxDurationItemIndex: function() {
                    return eQ
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eL
                },
                getStyleProp: function() {
                    return eU
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return eI
                },
                reduceListToGroup: function() {
                    return eK
                },
                reifyState: function() {
                    return eE
                },
                renderHTMLElement: function() {
                    return eC
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = y(n(34075)),
                r = y(n(51455)),
                c = y(n(45720)),
                d = n(81185),
                l = n(7087),
                s = y(n(57164)),
                u = n(73767),
                f = n(40380),
                g = n(31799),
                p = n(12662);

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: E,
                TRANSFORM: T,
                TRANSLATE_3D: I,
                SCALE_3D: m,
                ROTATE_X: O,
                ROTATE_Y: b,
                ROTATE_Z: A,
                SKEW: R,
                PRESERVE_3D: _,
                FLEX: h,
                OPACITY: v,
                FILTER: S,
                FONT_VARIATION_SETTINGS: G,
                WIDTH: N,
                HEIGHT: L,
                BACKGROUND_COLOR: U,
                BORDER_COLOR: C,
                COLOR: P,
                CHILDREN: M,
                IMMEDIATE_CHILDREN: V,
                SIBLINGS: w,
                PARENT: D,
                DISPLAY: F,
                WILL_CHANGE: x,
                AUTO: k,
                COMMA_DELIMITER: z,
                COLON_DELIMITER: X,
                BAR_DELIMITER: B,
                RENDER_TRANSFORM: Y,
                RENDER_GENERAL: W,
                RENDER_STYLE: H,
                RENDER_PLUGIN: j
            } = l.IX2EngineConstants, {
                TRANSFORM_MOVE: Q,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: K,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: en,
                STYLE_BORDER: ei,
                STYLE_TEXT_COLOR: ea,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: er
            } = l.ActionTypeConsts, ec = e => e.trim(), ed = Object.freeze({
                [en]: U,
                [ei]: C,
                [ea]: P
            }), el = Object.freeze({
                [p.TRANSFORM_PREFIXED]: T,
                [U]: E,
                [v]: v,
                [S]: S,
                [N]: N,
                [L]: L,
                [G]: G
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function eg() {
                return "i" + ef++
            }
            let ep = 1;

            function ey(e, t) {
                for (let n in e) {
                    let i = e[n];
                    if (i && i.ref === t) return i.id
                }
                return "e" + ep++
            }

            function eE({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let i = (0, r.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return e[n] || (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    a = n && n.mediaQueries,
                    o = [];
                return a ? o = a.map(e => e.key) : (a = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: i,
                        mediaQueries: a,
                        mediaQueryKeys: o
                    }
                }
            }
            let eT = (e, t) => e === t;

            function eI({
                store: e,
                select: t,
                onChange: n,
                comparator: i = eT
            }) {
                let {
                    getState: a,
                    subscribe: o
                } = e, r = o(function() {
                    let o = t(a());
                    if (null == o) return void r();
                    i(o, c) || n(c = o, e)
                }), c = t(a());
                return r
            }

            function em(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: i,
                        selectorGuids: a,
                        appliesTo: o,
                        useEventTarget: r
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: i,
                        selectorGuids: a,
                        appliesTo: o,
                        useEventTarget: r
                    }
                }
                return {}
            }

            function eO({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: i,
                elementApi: a
            }) {
                let o, r, c;
                if (!a) throw Error("IX2 missing elementApi");
                let {
                    targets: d
                } = e;
                if (Array.isArray(d) && d.length > 0) return d.reduce((e, o) => e.concat(eO({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: i,
                    elementApi: a
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: g,
                    getSiblingElements: y,
                    matchSelector: E,
                    elementContains: T,
                    isSiblingNode: I
                } = a, {
                    target: m
                } = e;
                if (!m) return [];
                let {
                    id: O,
                    objectId: b,
                    selector: A,
                    selectorGuids: R,
                    appliesTo: _,
                    useEventTarget: h
                } = em(m);
                if (b) return [es.has(b) ? es.get(b) : es.set(b, {}).get(b)];
                if (_ === l.EventAppliesTo.PAGE) {
                    let e = s(O);
                    return e ? [e] : []
                }
                let v = (t ? .action ? .config ? .affectedElements ? ? {})[O || A] || {},
                    S = !!(v.id || v.selector),
                    G = t && u(em(t.target));
                if (S ? (o = v.limitAffectedElements, r = G, c = u(v)) : r = c = u({
                        id: O,
                        selector: A,
                        selectorGuids: R
                    }), t && h) {
                    let e = n && (c || !0 === h) ? [n] : f(G);
                    if (c) {
                        if (h === D) return f(c).filter(t => e.some(e => T(t, e)));
                        if (h === M) return f(c).filter(t => e.some(e => T(e, t)));
                        if (h === w) return f(c).filter(t => e.some(e => I(e, t)))
                    }
                    return e
                }
                return null == r || null == c ? [] : p.IS_BROWSER_ENV && i ? f(c).filter(e => i.contains(e)) : o === M ? f(r, c) : o === V ? g(f(r)).filter(E(c)) : o === w ? y(f(r)).filter(E(c)) : f(c)
            }

            function eb({
                element: e,
                actionItem: t
            }) {
                if (!p.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case et:
                    case en:
                    case ei:
                    case ea:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let eA = /px/,
                eR = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e), e || {}),
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eV[t.type] || t.defaultValue || 0), e), e || {});

            function eh(e, t = {}, n = {}, i, a) {
                let {
                    getStyle: r
                } = a, {
                    actionTypeId: c
                } = i;
                if ((0, g.isPluginType)(c)) return (0, g.getPluginOrigin)(c)(t[c], i);
                switch (i.actionTypeId) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        return t[i.actionTypeId] || eP[i.actionTypeId];
                    case J:
                        return eR(t[i.actionTypeId], i.config.filters);
                    case ee:
                        return e_(t[i.actionTypeId], i.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(r(e, v)), 1)
                        };
                    case et:
                        {
                            let t, a = r(e, N),
                                c = r(e, L);
                            return {
                                widthValue: i.config.widthUnit === k ? eA.test(a) ? parseFloat(a) : parseFloat(n.width) : (0, o.default)(parseFloat(a), parseFloat(n.width)),
                                heightValue: i.config.heightUnit === k ? eA.test(c) ? parseFloat(c) : parseFloat(n.height) : (0, o.default)(parseFloat(c), parseFloat(n.height))
                            }
                        }
                    case en:
                    case ei:
                    case ea:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: i
                        }) {
                            let a = ed[t],
                                r = i(e, a),
                                c = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(ex, eF.test(r) ? r : n[a]).split(z);
                            return {
                                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: i.actionTypeId,
                            computedStyle: n,
                            getStyle: r
                        });
                    case eo:
                        return {
                            value: (0, o.default)(r(e, F), n.display)
                        };
                    case er:
                        return t[i.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let ev = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eG = (e, t, n) => {
                    if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case J:
                            {
                                let e = (0, c.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case ee:
                            {
                                let e = (0, c.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eN({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, g.isPluginType)(t.actionTypeId)) return (0, g.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: i
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: i
                            }
                        }
                    case et:
                        {
                            let {
                                getStyle: i,
                                setStyle: a,
                                getProperty: o
                            } = n,
                            {
                                widthUnit: r,
                                heightUnit: c
                            } = t.config,
                            {
                                widthValue: d,
                                heightValue: l
                            } = t.config;
                            if (!p.IS_BROWSER_ENV) return {
                                widthValue: d,
                                heightValue: l
                            };
                            if (r === k) {
                                let t = i(e, N);
                                a(e, N, ""), d = o(e, "offsetWidth"), a(e, N, t)
                            }
                            if (c === k) {
                                let t = i(e, L);
                                a(e, L, ""), l = o(e, "offsetHeight"), a(e, L, t)
                            }
                            return {
                                widthValue: d,
                                heightValue: l
                            }
                        }
                    case en:
                    case ei:
                    case ea:
                        {
                            let {
                                rValue: i,
                                gValue: a,
                                bValue: o,
                                aValue: r,
                                globalSwatchId: c
                            } = t.config;
                            if (c && c.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, i = t(e, c), a = (0, f.normalizeColor)(i);
                                return {
                                    rValue: a.red,
                                    gValue: a.green,
                                    bValue: a.blue,
                                    aValue: a.alpha
                                }
                            }
                            return {
                                rValue: i,
                                gValue: a,
                                bValue: o,
                                aValue: r
                            }
                        }
                    case J:
                        return t.config.filters.reduce(ev, {});
                    case ee:
                        return t.config.fontVariations.reduce(eS, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eL(e) {
                return /^TRANSFORM_/.test(e) ? Y : /^STYLE_/.test(e) ? H : /^GENERAL_/.test(e) ? W : /^PLUGIN_/.test(e) ? j : void 0
            }

            function eU(e, t) {
                return e === H ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eC(e, t, n, i, a, o, c, d, l) {
                switch (d) {
                    case Y:
                        var s = e,
                            u = t,
                            f = n,
                            y = a,
                            E = c;
                        let T = eD.map(e => {
                                let t = eP[e],
                                    {
                                        xValue: n = t.xValue,
                                        yValue: i = t.yValue,
                                        zValue: a = t.zValue,
                                        xUnit: o = "",
                                        yUnit: r = "",
                                        zUnit: c = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case Q:
                                        return `${I}(${n}${o}, ${i}${r}, ${a}${c})`;
                                    case $:
                                        return `${m}(${n}${o}, ${i}${r}, ${a}${c})`;
                                    case K:
                                        return `${O}(${n}${o}) ${b}(${i}${r}) ${A}(${a}${c})`;
                                    case q:
                                        return `${R}(${n}${o}, ${i}${r})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: v
                            } = E;
                        ek(s, p.TRANSFORM_PREFIXED, E), v(s, p.TRANSFORM_PREFIXED, T),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: n,
                                zValue: i
                            }) {
                                return e === Q && void 0 !== i || e === $ && void 0 !== i || e === K && (void 0 !== t || void 0 !== n)
                            }(y, f) && v(s, p.TRANSFORM_STYLE_PREFIXED, _);
                        return;
                    case H:
                        return function(e, t, n, i, a, o) {
                            let {
                                setStyle: c
                            } = o;
                            switch (i.actionTypeId) {
                                case et:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: a = ""
                                        } = i.config,
                                        {
                                            widthValue: r,
                                            heightValue: d
                                        } = n;void 0 !== r && (t === k && (t = "px"), ek(e, N, o), c(e, N, r + t)),
                                        void 0 !== d && (a === k && (a = "px"), ek(e, L, o), c(e, L, d + a));
                                        break
                                    }
                                case J:
                                    var d = i.config;
                                    let l = (0, r.default)(n, (e, t, n) => `${e} ${n}(${t}${ew(n,d)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    ek(e, S, o), s(e, S, l);
                                    break;
                                case ee:
                                    i.config;
                                    let u = (0, r.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = o;
                                    ek(e, G, o), f(e, G, u);
                                    break;
                                case en:
                                case ei:
                                case ea:
                                    {
                                        let t = ed[i.actionTypeId],
                                            a = Math.round(n.rValue),
                                            r = Math.round(n.gValue),
                                            d = Math.round(n.bValue),
                                            l = n.aValue;ek(e, t, o),
                                        c(e, t, l >= 1 ? `rgb(${a},${r},${d})` : `rgba(${a},${r},${d},${l})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = i.config;ek(e, a, o),
                                        c(e, a, n.value + t)
                                    }
                            }
                        }(e, 0, n, a, o, c);
                    case W:
                        var U = e,
                            C = a,
                            P = c;
                        let {
                            setStyle: M
                        } = P;
                        if (C.actionTypeId === eo) {
                            let {
                                value: e
                            } = C.config;
                            M(U, F, e === h && p.IS_BROWSER_ENV ? p.FLEX_PREFIXED : e);
                        }
                        return;
                    case j:
                        {
                            let {
                                actionTypeId: e
                            } = a;
                            if ((0, g.isPluginType)(e)) return (0, g.renderPlugin)(e)(l, t, a)
                        }
                }
            }
            let eP = {
                    [Q]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [K]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eM = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eV = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                ew = (e, t) => {
                    let n = (0, c.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                eD = Object.keys(eP),
                eF = /^rgb/,
                ex = RegExp("rgba?\\(([^)]+)\\)");

            function ek(e, t, n) {
                if (!p.IS_BROWSER_ENV) return;
                let i = el[t];
                if (!i) return;
                let {
                    getStyle: a,
                    setStyle: o
                } = n, r = a(e, x);
                if (!r) return void o(e, x, i);
                let c = r.split(z).map(ec); - 1 === c.indexOf(i) && o(e, x, c.concat(i).join(z))
            }

            function ez(e, t, n) {
                if (!p.IS_BROWSER_ENV) return;
                let i = el[t];
                if (!i) return;
                let {
                    getStyle: a,
                    setStyle: o
                } = n, r = a(e, x);
                r && -1 !== r.indexOf(i) && o(e, x, r.split(z).map(ec).filter(e => e !== i).join(z))
            }

            function eX({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: i = {},
                    actionLists: a = {}
                } = n;
                Object.keys(i).forEach(e => {
                    let n = i[e],
                        {
                            config: o
                        } = n.action,
                        {
                            actionListId: r
                        } = o,
                        c = a[r];
                    c && eB({
                        actionList: c,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(a).forEach(e => {
                    eB({
                        actionList: a[e],
                        elementApi: t
                    })
                })
            }

            function eB({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: i,
                    continuousParameterGroups: a
                } = e;
                i && i.forEach(e => {
                    eY({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), a && a.forEach(e => {
                    let {
                        continuousActionGroups: i
                    } = e;
                    i.forEach(e => {
                        eY({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function eY({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: i
                } = e;
                i.forEach(e => {
                    let i, {
                        actionTypeId: a,
                        config: o
                    } = e;
                    i = (0, g.isPluginType)(a) ? t => (0, g.clearPlugin)(a)(t, e) : eH({
                        effect: ej,
                        actionTypeId: a,
                        elementApi: n
                    }), eO({
                        config: o,
                        event: t,
                        elementApi: n
                    }).forEach(i)
                })
            }

            function eW(e, t, n) {
                let {
                    setStyle: i,
                    getStyle: a
                } = n, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === k && i(e, N, ""), n.heightUnit === k && i(e, L, "")
                }
                a(e, x) && eH({
                    effect: ez,
                    actionTypeId: o,
                    elementApi: n
                })(e)
            }
            let eH = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => i => {
                switch (t) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        e(i, p.TRANSFORM_PREFIXED, n);
                        break;
                    case J:
                        e(i, S, n);
                        break;
                    case ee:
                        e(i, G, n);
                        break;
                    case Z:
                        e(i, v, n);
                        break;
                    case et:
                        e(i, N, n), e(i, L, n);
                        break;
                    case en:
                    case ei:
                    case ea:
                        e(i, ed[t], n);
                        break;
                    case eo:
                        e(i, F, n)
                }
            };

            function ej(e, t, n) {
                let {
                    setStyle: i
                } = n;
                ez(e, t, n), i(e, t, ""), t === p.TRANSFORM_PREFIXED && i(e, p.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eQ(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, i) => {
                    let {
                        config: a
                    } = e, o = a.delay + a.duration;
                    o >= t && (t = o, n = i)
                }), n
            }

            function e$(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: i
                } = e, {
                    actionItem: a,
                    verboseTimeElapsed: o = 0
                } = t, r = 0, c = 0;
                return n.forEach((e, t) => {
                    if (i && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, d = n[eQ(n)], {
                        config: l,
                        actionTypeId: s
                    } = d;
                    a.id === d.id && (c = r + o);
                    let u = eL(s) === W ? 0 : l.duration;
                    r += l.delay + u
                }), r > 0 ? (0, u.optimizeFloat)(c / r) : 0
            }

            function eK({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: i,
                    continuousParameterGroups: a
                } = e, o = [], r = e => (o.push((0, d.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return i && i.some(({
                    actionItems: e
                }) => e.some(r)), a && a.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(r))
                }), (0, d.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + X + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + B + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: i = ""
                } = e;
                return t + B + n + B + i
            }
        },
        57164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let i = Object.keys(e),
                    a = Object.keys(t);
                if (i.length !== a.length) return !1;
                for (let a = 0; a < i.length; a++)
                    if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
                return !0
            }
        },
        85861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                createElementState: function() {
                    return R
                },
                ixElements: function() {
                    return A
                },
                mergeActionState: function() {
                    return _
                }
            };
            for (var a in i) Object.defineProperty(t, a, {
                enumerable: !0,
                get: i[a]
            });
            let o = n(81185),
                r = n(7087),
                {
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: d,
                    ABSTRACT_NODE: l,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: g,
                    CONFIG_X_UNIT: p,
                    CONFIG_Y_UNIT: y,
                    CONFIG_Z_UNIT: E,
                    CONFIG_UNIT: T
                } = r.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: I,
                    IX2_INSTANCE_ADDED: m,
                    IX2_ELEMENT_STATE_CHANGED: O
                } = r.IX2EngineActionTypes,
                b = {},
                A = (e = b, t = {}) => {
                    switch (t.type) {
                        case I:
                            return b;
                        case m:
                            {
                                let {
                                    elementId: n,
                                    element: i,
                                    origin: a,
                                    actionItem: r,
                                    refType: c
                                } = t.payload,
                                {
                                    actionTypeId: d
                                } = r,
                                l = e;
                                return (0, o.getIn)(l, [n, i]) !== i && (l = R(l, i, c, n, r)),
                                _(l, n, d, a, r)
                            }
                        case O:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: i,
                                    current: a,
                                    actionItem: o
                                } = t.payload;
                                return _(e, n, i, a, o)
                            }
                        default:
                            return e
                    }
                };

            function R(e, t, n, i, a) {
                let r = n === d ? (0, o.getIn)(a, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [i], {
                    id: i,
                    ref: t,
                    refId: r,
                    refType: n
                })
            }

            function _(e, t, n, i, a) {
                let r = function(e) {
                    let {
                        config: t
                    } = e;
                    return h.reduce((e, n) => {
                        let i = n[0],
                            a = n[1],
                            o = t[i],
                            r = t[a];
                        return null != o && null != r && (e[a] = r), e
                    }, {})
                }(a);
                return (0, o.mergeIn)(e, [t, "refState", n], i, r)
            }
            let h = [
                [s, p],
                [u, y],
                [f, E],
                [g, T]
            ]
        },
        34461: function() {
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".dropdown",
                            originalId: "4905afe9-8693-e7ff-0249-8f2547c12433",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".dropdown",
                            originalId: "4905afe9-8693-e7ff-0249-8f2547c12433",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173048083ef
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".dropdown",
                            originalId: "4905afe9-8693-e7ff-0249-8f2547c12433",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".dropdown",
                            originalId: "4905afe9-8693-e7ff-0249-8f2547c12433",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173048083f0
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-4",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".profile-card-link-block",
                            originalId: "30563349-a759-1ebb-c8ab-dd65b83c5080",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".profile-card-link-block",
                            originalId: "30563349-a759-1ebb-c8ab-dd65b83c5080",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17360a517c2
                    },
                    "e-6": {
                        id: "e-6",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-5"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".profile-card-link-block",
                            originalId: "30563349-a759-1ebb-c8ab-dd65b83c5080",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".profile-card-link-block",
                            originalId: "30563349-a759-1ebb-c8ab-dd65b83c5080",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17360a517c2
                    },
                    "e-8": {
                        id: "e-8",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-7"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17360e2c8a3
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-7",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819|bea9b7ed-f748-980a-924e-d39fafb4bf59",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819|bea9b7ed-f748-980a-924e-d39fafb4bf59",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-7-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-7-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }],
                        createdOn: 0x173610c1532
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1737ea29a08
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1737f963c12
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e02536ed9827|a1082321-aef6-d335-17f8-4a69bf242b25",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e02536ed9827|a1082321-aef6-d335-17f8-4a69bf242b25",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17389f552fa
                    },
                    "e-24": {
                        id: "e-24",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-23"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e02536ed9827|a1082321-aef6-d335-17f8-4a69bf242b25",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e02536ed9827|a1082321-aef6-d335-17f8-4a69bf242b25",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17389f552fa
                    },
                    "e-27": {
                        id: "e-27",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-28"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e042bded9824|908b2376-591d-3d9b-be6b-ad4337d0f14a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e042bded9824|908b2376-591d-3d9b-be6b-ad4337d0f14a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17389fab456
                    },
                    "e-28": {
                        id: "e-28",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-27"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e042bded9824|908b2376-591d-3d9b-be6b-ad4337d0f14a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e042bded9824|908b2376-591d-3d9b-be6b-ad4337d0f14a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17389fab456
                    },
                    "e-35": {
                        id: "e-35",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-19",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-36"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c2807aa4-d9bf-2d8f-f78c-7b6aed1a8c42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c2807aa4-d9bf-2d8f-f78c-7b6aed1a8c42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d19eb645
                    },
                    "e-37": {
                        id: "e-37",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-20",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-38"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "bb0bf636-1622-2bac-85b3-47f867d53020",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bb0bf636-1622-2bac-85b3-47f867d53020",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d1c7e88a
                    },
                    "e-38": {
                        id: "e-38",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-37"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "bb0bf636-1622-2bac-85b3-47f867d53020",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bb0bf636-1622-2bac-85b3-47f867d53020",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d1c7e88c
                    },
                    "e-39": {
                        id: "e-39",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-40"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e03ffaed9822|effb1db6-08e5-e10f-77e5-b07e629f8bd2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e03ffaed9822|effb1db6-08e5-e10f-77e5-b07e629f8bd2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d224cebd
                    },
                    "e-40": {
                        id: "e-40",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-39"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e03ffaed9822|effb1db6-08e5-e10f-77e5-b07e629f8bd2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e03ffaed9822|effb1db6-08e5-e10f-77e5-b07e629f8bd2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d224cebd
                    },
                    "e-42": {
                        id: "e-42",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-23",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-41"
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d85d6a9b
                    },
                    "e-46": {
                        id: "e-46",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-45"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d86bc824
                    },
                    "e-48": {
                        id: "e-48",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-47"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d86d00c1
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-49"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d8762b9c
                    },
                    "e-54": {
                        id: "e-54",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d882aa51
                    },
                    "e-56": {
                        id: "e-56",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-55"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d885042d
                    },
                    "e-58": {
                        id: "e-58",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173d88aaf28
                    },
                    "e-60": {
                        id: "e-60",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-59"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173db484fae
                    },
                    "e-61": {
                        id: "e-61",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-62"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e390ad44-2592-9581-74e8-99c94401d838",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e390ad44-2592-9581-74e8-99c94401d838",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173dd991692
                    },
                    "e-62": {
                        id: "e-62",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-61"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e390ad44-2592-9581-74e8-99c94401d838",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e390ad44-2592-9581-74e8-99c94401d838",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173dd991695
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-68"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e1cc3f34
                    },
                    "e-68": {
                        id: "e-68",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-67"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00395ed981d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e1cc3f38
                    },
                    "e-69": {
                        id: "e-69",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e203e1ef
                    },
                    "e-70": {
                        id: "e-70",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-69"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e203e1f2
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-74"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20669e5
                    },
                    "e-74": {
                        id: "e-74",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0334fed9833",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20669e8
                    },
                    "e-77": {
                        id: "e-77",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-78"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20746e9
                    },
                    "e-78": {
                        id: "e-78",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-77"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0153aed9821",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e207470a
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-86"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e078e6ed981a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e078e6ed981a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20936a7
                    },
                    "e-86": {
                        id: "e-86",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-85"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e078e6ed981a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e078e6ed981a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20936ca
                    },
                    "e-87": {
                        id: "e-87",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-88"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0dbfaed981b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0dbfaed981b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20a1329
                    },
                    "e-88": {
                        id: "e-88",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-87"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0dbfaed981b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0dbfaed981b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20a132c
                    },
                    "e-89": {
                        id: "e-89",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-90"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0f519ed9830",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0f519ed9830",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20a8a18
                    },
                    "e-90": {
                        id: "e-90",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-89"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0f519ed9830",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0f519ed9830",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20a8a1c
                    },
                    "e-91": {
                        id: "e-91",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-92"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20b2878
                    },
                    "e-92": {
                        id: "e-92",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-91"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0794ded9826",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20b287b
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-94"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20c0aa0
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-93"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e02536ed9827",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20c0ac4
                    },
                    "e-95": {
                        id: "e-95",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-96"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20c73e4
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e05cf7ed9823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20c73e8
                    },
                    "e-97": {
                        id: "e-97",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-98"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20d1056
                    },
                    "e-98": {
                        id: "e-98",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-97"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e042bded9824",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20d105a
                    },
                    "e-99": {
                        id: "e-99",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-100"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20db516
                    },
                    "e-100": {
                        id: "e-100",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-99"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e00c7ded9828",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20db53b
                    },
                    "e-101": {
                        id: "e-101",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-102"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20e0346
                    },
                    "e-102": {
                        id: "e-102",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-101"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e03ffaed9822",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173e20e036b
                    },
                    "e-103": {
                        id: "e-103",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_ACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-104"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".testimonial-slide",
                            originalId: "63d5384f1c71e0c14ced9819|75bed33a-2617-a42b-d44a-a7c68ddca041",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".testimonial-slide",
                            originalId: "63d5384f1c71e0c14ced9819|75bed33a-2617-a42b-d44a-a7c68ddca041",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f5e9b9db
                    },
                    "e-104": {
                        id: "e-104",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_INACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".testimonial-slide",
                            originalId: "63d5384f1c71e0c14ced9819|75bed33a-2617-a42b-d44a-a7c68ddca041",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".testimonial-slide",
                            originalId: "63d5384f1c71e0c14ced9819|75bed33a-2617-a42b-d44a-a7c68ddca041",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f5e9b9df
                    },
                    "e-106": {
                        id: "e-106",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-105"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f7792e0e
                    },
                    "e-107": {
                        id: "e-107",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-108"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f7792e0e
                    },
                    "e-108": {
                        id: "e-108",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-107"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e01c39ed982b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f7792e0e
                    },
                    "e-109": {
                        id: "e-109",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-110"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f794d922
                    },
                    "e-110": {
                        id: "e-110",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-109"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f794d92a
                    },
                    "e-111": {
                        id: "e-111",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-112"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f79fd44f
                    },
                    "e-112": {
                        id: "e-112",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-111"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".lottie-animation",
                            originalId: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x173f79fd454
                    },
                    "e-113": {
                        id: "e-113",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-114"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".card.donation-box",
                            originalId: "63d5384f1c71e0334fed9833|e6549a40-adc2-c84a-4870-fa1ac6ea7a03",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".card.donation-box",
                            originalId: "63d5384f1c71e0334fed9833|e6549a40-adc2-c84a-4870-fa1ac6ea7a03",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1742fbc814d
                    },
                    "e-114": {
                        id: "e-114",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-113"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".card.donation-box",
                            originalId: "63d5384f1c71e0334fed9833|e6549a40-adc2-c84a-4870-fa1ac6ea7a03",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".card.donation-box",
                            originalId: "63d5384f1c71e0334fed9833|e6549a40-adc2-c84a-4870-fa1ac6ea7a03",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1742fbc8151
                    },
                    "e-123": {
                        id: "e-123",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-124"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e0825aed9825|a463e1d9-0afb-a3d5-4f70-03a3a4fef711",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0825aed9825|a463e1d9-0afb-a3d5-4f70-03a3a4fef711",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x174568ed080
                    },
                    "e-124": {
                        id: "e-124",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-123"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e0825aed9825|a463e1d9-0afb-a3d5-4f70-03a3a4fef711",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0825aed9825|a463e1d9-0afb-a3d5-4f70-03a3a4fef711",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x174568ed080
                    },
                    "e-125": {
                        id: "e-125",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-126"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e069c0ed9829|4f343253-b800-ed52-be6a-2797cc3ea19f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e069c0ed9829|4f343253-b800-ed52-be6a-2797cc3ea19f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1745bdd9ac8
                    },
                    "e-126": {
                        id: "e-126",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-125"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e069c0ed9829|4f343253-b800-ed52-be6a-2797cc3ea19f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e069c0ed9829|4f343253-b800-ed52-be6a-2797cc3ea19f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1745bdd9ac8
                    },
                    "e-128": {
                        id: "e-128",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-127"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e069c0ed9829",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e069c0ed9829",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1745bfe6256
                    },
                    "e-131": {
                        id: "e-131",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-7",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0c14ced9819|a2b159e3-7b93-6b8e-545a-468b0003a824",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-7-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-7-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }],
                        createdOn: 0x1747d2bfdd8
                    },
                    "e-132": {
                        id: "e-132",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-37",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e05cf7ed9823|39a53167-3db5-07e4-fa51-aea3ba33da50",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e05cf7ed9823|39a53167-3db5-07e4-fa51-aea3ba33da50",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-37-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-37-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }],
                        createdOn: 0x1747d355bc1
                    },
                    "e-133": {
                        id: "e-133",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-37",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63d5384f1c71e0794ded9826|2d6e12db-2b97-b54e-5e3d-0bc67710e698",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0794ded9826|2d6e12db-2b97-b54e-5e3d-0bc67710e698",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-37-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-37-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }],
                        createdOn: 0x1747d3651d9
                    },
                    "e-135": {
                        id: "e-135",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-134"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63d5384f1c71e0825aed9825",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63d5384f1c71e0825aed9825",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1755449f67f
                    },
                    "e-138": {
                        id: "e-138",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-139"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".profile-card-link-block",
                            originalId: "63d5384f1c71e0c14ced9819|c5e1beae-1fbe-1fcb-2563-404a45f3b29a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".profile-card-link-block",
                            originalId: "63d5384f1c71e0c14ced9819|c5e1beae-1fbe-1fcb-2563-404a45f3b29a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1862e038fa7
                    },
                    "e-139": {
                        id: "e-139",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-138"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".profile-card-link-block",
                            originalId: "63d5384f1c71e0c14ced9819|c5e1beae-1fbe-1fcb-2563-404a45f3b29a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".profile-card-link-block",
                            originalId: "63d5384f1c71e0c14ced9819|c5e1beae-1fbe-1fcb-2563-404a45f3b29a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1862e038fa7
                    },
                    "e-141": {
                        id: "e-141",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-140"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63e8fc6c63db553d351fe1df",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63e8fc6c63db553d351fe1df",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1864704c0b2
                    },
                    "e-151": {
                        id: "e-151",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-150"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b872228c8
                    },
                    "e-152": {
                        id: "e-152",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-153"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b872228c8
                    },
                    "e-153": {
                        id: "e-153",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-45",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-152"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6541506c74c4f603c7f44c63",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b872228c8
                    }
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Dropdown -- Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".tags-collection-list",
                                        selectorGuids: ["ccfeb391-5201-bf7f-5326-7d5349741bcb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "inOutCirc",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".tags-collection-list",
                                        selectorGuids: ["ccfeb391-5201-bf7f-5326-7d5349741bcb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1730480969f
                    },
                    "a-2": {
                        id: "a-2",
                        title: "Dropdown -- Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-2-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".tags-collection-list",
                                        selectorGuids: ["ccfeb391-5201-bf7f-5326-7d5349741bcb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-2-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-2-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1730480969f
                    },
                    "a-4": {
                        id: "a-4",
                        title: "Profile Card -- Hover Over",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-4-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-4-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-4-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-4-n-9",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-4-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-4-n-10",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 20,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-4-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-4-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-4-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }, {
                                id: "a-4-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "inOutSine",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-4-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360a5439d
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Profile Card -- Hover Away",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-9-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-9-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-9-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17360a5439d
                    },
                    "a-22": {
                        id: "a-22",
                        title: "Homepage -- Page Load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-22-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-center",
                                        selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 21,
                                    yValue: 3,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: -21,
                                    yValue: 3,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-38",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-37",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: -38,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-41",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 38,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-42",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: -4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-10",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: 4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: -3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-33",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-34",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-22-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".header-photo-center",
                                        selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-21",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-39",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-40",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-43",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-22-n-44",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: -12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-24",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-26",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-27",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: -2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-28",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-22-n-32",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-35",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-36",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360e2f649
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Homepage -- Mouse Animation",
                        continuousParameterGroups: [{
                            id: "a-7-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-7-n",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-left-2",
                                            selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                        },
                                        xValue: 5,
                                        yValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-3",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-right-1",
                                            selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                        },
                                        xValue: 2,
                                        yValue: -2,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-5",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-left-1",
                                            selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                        },
                                        xValue: 2,
                                        yValue: -2,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-7",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-right-2",
                                            selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                        },
                                        xValue: 5,
                                        yValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-9",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-center",
                                            selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                        },
                                        xValue: 3,
                                        yValue: -3,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-7-n-2",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-left-2",
                                            selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                        },
                                        xValue: -5,
                                        yValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-4",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-right-1",
                                            selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                        },
                                        xValue: -2,
                                        yValue: 2,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-6",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-left-1",
                                            selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                        },
                                        xValue: -2,
                                        yValue: 2,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-8",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-right-2",
                                            selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                        },
                                        xValue: -5,
                                        yValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-7-n-10",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            selector: ".header-photo-center",
                                            selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                        },
                                        xValue: -3,
                                        yValue: 3,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-7-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: []
                        }],
                        createdOn: 0x173610c2fc7
                    },
                    "a-15": {
                        id: "a-15",
                        title: "Pet Profile -- Page Load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".pet-image-mask-center",
                                        selectorGuids: ["bbd2e630-cfdc-218f-82eb-a25c684e0b98"]
                                    },
                                    xValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".pet-image-mask-left",
                                        selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                    },
                                    xValue: 21,
                                    yValue: 3,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".pet-image-mask-left",
                                        selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".pet-image-mask-right",
                                        selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                    },
                                    xValue: -21,
                                    yValue: 3,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".pet-image-mask-right",
                                        selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-23",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-22",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: -5,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-26",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: 6,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-25",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-32",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-36",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-37",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".pet-image-mask-center",
                                        selectorGuids: ["bbd2e630-cfdc-218f-82eb-a25c684e0b98"]
                                    },
                                    xValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".pet-image-mask-left",
                                        selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-13",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".pet-image-mask-left",
                                        selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: -10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".pet-image-mask-right",
                                        selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-15-n-17",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".pet-image-mask-right",
                                        selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: 2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-27",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-29",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-28",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: -2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-38",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-39",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-33",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-35",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-15-n-34",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360e2f649
                    },
                    "a-16": {
                        id: "a-16",
                        title: "Accordion -- Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-16-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-16-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-16-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-16-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17389e61cde
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Accordion -- Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-17-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".accordion-item-content",
                                        selectorGuids: ["b4d5af18-d29a-c1e0-0f96-6e5bf1d18073"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17389e61cde
                    },
                    "a-19": {
                        id: "a-19",
                        title: "Search Modal -- Hide",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-19-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 250,
                                    target: {
                                        selector: ".search-card",
                                        selectorGuids: ["fad18ae6-1476-763b-cb69-2f89ac679c75"]
                                    },
                                    yValue: 3,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 250,
                                    target: {
                                        selector: ".search-card",
                                        selectorGuids: ["fad18ae6-1476-763b-cb69-2f89ac679c75"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-19-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 250,
                                    target: {
                                        selector: ".search-modal",
                                        selectorGuids: ["0b2ffe41-d63d-8bdf-24ff-cf43fd71ece6"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-19-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        selector: ".search-modal",
                                        selectorGuids: ["0b2ffe41-d63d-8bdf-24ff-cf43fd71ece6"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173d1981b92
                    },
                    "a-20": {
                        id: "a-20",
                        title: "Nav -- Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-20-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    zValue: -10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-17",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    zValue: 12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-21",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    zValue: -10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-27",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-28",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    zValue: 10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-33",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-35",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    zValue: 10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-34",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-39",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-41",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-40",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-20-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 250,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 250,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    zValue: -3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-18",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 350,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 350,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 350,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    zValue: 4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-24",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-25",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    zValue: -6,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-30",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 550,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-32",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 550,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    zValue: 4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-31",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 550,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-36",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 650,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-38",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 650,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-37",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 650,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    zValue: -3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-42",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 750,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-44",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 750,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-20-n-43",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 750,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x173d1c814f7
                    },
                    "a-21": {
                        id: "a-21",
                        title: "Nav -- Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-21-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-1",
                                        selectorGuids: ["321eee00-901e-1d2b-2498-65d07195ab7d"]
                                    },
                                    zValue: -10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-21-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    zValue: 12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-21-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-2",
                                        selectorGuids: ["107aa2ec-c43a-209a-1e62-db3e58c0522a"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    zValue: -10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-21-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-3",
                                        selectorGuids: ["bfc3fe0c-2ee6-23e0-6eec-6dc354bded07"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-4",
                                        selectorGuids: ["11d7821d-ee89-5965-6451-483f8b22eb7f"]
                                    },
                                    zValue: 10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-21-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    zValue: 10,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-21-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-menu-item-5",
                                        selectorGuids: ["42381748-0348-6566-00d7-6c0f1d514f8a"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    yValue: -1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-18",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".navigation-button",
                                        selectorGuids: ["96783f12-3500-eff4-f1eb-67e390f1fb55"]
                                    },
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173d1c814f7
                    },
                    "a-23": {
                        id: "a-23",
                        title: "Homepage -- Page Load (mobile)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-23-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-center",
                                        selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 32,
                                    yValue: -22,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: -37,
                                    yValue: 22,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: -29,
                                    yValue: -18,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 37,
                                    yValue: 22,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-9",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: -4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: 4,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-18",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: -3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-21",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-23-n-23",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 400,
                                    target: {
                                        selector: ".header-photo-center",
                                        selectorGuids: ["6c7d5f54-66e1-e7a1-7bf3-b69ec1188ce9"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-25",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-1",
                                        selectorGuids: ["bf2bfcee-9aa5-c9e7-4687-688bfe92a7dc"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-27",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-1",
                                        selectorGuids: ["4a973a15-bd55-59ac-2e3e-6ae995d15f7c"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-28",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-29",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-right-2",
                                        selectorGuids: ["95c175ae-d58e-1324-3ace-cbbf1636e5af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "VW",
                                    yUnit: "VW",
                                    zUnit: "VW"
                                }
                            }, {
                                id: "a-23-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: "easeInOut",
                                    duration: 600,
                                    target: {
                                        selector: ".header-photo-left-2",
                                        selectorGuids: ["e6a5612a-1801-d642-65d2-c21525b2dd3d"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: -12,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-32",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-33",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-34",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-35",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-36",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-37",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: -2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-38",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-39",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-40",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-41",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-23-n-42",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-43",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-44",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360e2f649
                    },
                    "a-24": {
                        id: "a-24",
                        title: "Other Pages -- Page Load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-24-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: -5,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-10",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: 6,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: -8,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-33",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 1,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-34",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-24-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    zValue: 2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-24",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-1",
                                        selectorGuids: ["52034957-9639-2d58-ca13-11c40852d554"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-26",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-27",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-2",
                                        selectorGuids: ["c26a666b-26d9-51f8-8e15-d0bb5757eac8"]
                                    },
                                    zValue: -2,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-28",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".section",
                                        selectorGuids: ["c19f232e-e6b7-4ce5-60c2-0ff20786302b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    zValue: 1,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-24-n-32",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".heading-row-3",
                                        selectorGuids: ["7ded7030-5423-3b2f-afb6-619ff3d4a01e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-35",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-36",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".static-badge",
                                        selectorGuids: ["2959f784-163c-ace4-3f01-6bdd71cc64b4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360e2f649
                    },
                    "a-25": {
                        id: "a-25",
                        title: "Footer -- Scroll In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 600,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-a",
                                        selectorGuids: ["8a1697cd-47f2-c43c-ee9a-2e1a9faad6c9"]
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-25-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-a",
                                        selectorGuids: ["8a1697cd-47f2-c43c-ee9a-2e1a9faad6c9"]
                                    },
                                    value: 99
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173dd99354f
                    },
                    "a-26": {
                        id: "a-26",
                        title: "Footer -- Scroll Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-a",
                                        selectorGuids: ["8a1697cd-47f2-c43c-ee9a-2e1a9faad6c9"]
                                    },
                                    value: 99
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-26-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-a",
                                        selectorGuids: ["8a1697cd-47f2-c43c-ee9a-2e1a9faad6c9"]
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173dd99354f
                    },
                    "a-30": {
                        id: "a-30",
                        title: "Logo -- Scroll Up",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-30-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 1200,
                                    target: {
                                        id: "46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173e1cc666b
                    },
                    "a-29": {
                        id: "a-29",
                        title: "Logo -- Scroll Down",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-29-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-29-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 200,
                                    easing: "easeInOut",
                                    duration: 1200,
                                    target: {
                                        id: "46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 100
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x173e1cc666b
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Slider -- Slide In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-31-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    yValue: 3,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "EM"
                                }
                            }, {
                                id: "a-31-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".large-text",
                                        selectorGuids: ["b84a03ad-5834-8f8a-a1ef-a0b707b46af2"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".squiggle-container",
                                        selectorGuids: ["d9c36614-b3e3-5f6e-fd66-bb63cd1e5fb1"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.slider-offset",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "a6eeba8c-71fc-e706-fa30-4bc6d3249397"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-31-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.slider-offset",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "a6eeba8c-71fc-e706-fa30-4bc6d3249397"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-31-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".large-text",
                                        selectorGuids: ["b84a03ad-5834-8f8a-a1ef-a0b707b46af2"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 150,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        selector: ".squiggle-container",
                                        selectorGuids: ["d9c36614-b3e3-5f6e-fd66-bb63cd1e5fb1"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-31-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x173f5ea5d52
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Slider -- Slide Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-32-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-image-wrapper",
                                        selectorGuids: ["88498743-89ab-f272-b14c-70ce7e005c94"]
                                    },
                                    yValue: 3,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "EM"
                                }
                            }, {
                                id: "a-32-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".large-text",
                                        selectorGuids: ["b84a03ad-5834-8f8a-a1ef-a0b707b46af2"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".squiggle-container",
                                        selectorGuids: ["d9c36614-b3e3-5f6e-fd66-bb63cd1e5fb1"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.slider-offset",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "a6eeba8c-71fc-e706-fa30-4bc6d3249397"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173f5ea5d52
                    },
                    "a-27": {
                        id: "a-27",
                        title: "Big Lottie Buttons -- Hover Over",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-27-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".big-lottie-icon",
                                        selectorGuids: ["b6b35bcd-54a8-6cda-e519-9d096e2ffafd"]
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-27-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".big-lottie-icon",
                                        selectorGuids: ["b6b35bcd-54a8-6cda-e519-9d096e2ffafd"]
                                    },
                                    value: 99
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173e0c30a4f
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Big Lottie Buttons -- Hover Away",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-28-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".big-lottie-icon",
                                        selectorGuids: ["b6b35bcd-54a8-6cda-e519-9d096e2ffafd"]
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173e0c30a4f
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Donate Card -- Hover Over",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-33-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-33-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".centered-text.donate-cards",
                                        selectorGuids: ["d27f1470-a4d2-e3d6-85e3-b0d6360206c4", "6bbd0517-8f12-4566-65eb-aa4abc9f27c4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-33-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.donation-box",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "9b38532f-5546-7c6e-a8a5-26b5c3e1f92c"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".badge.dark-brand-color",
                                        selectorGuids: ["840b67ac-b2fd-0cc3-773c-67d551f2b904", "577eee35-37c7-013d-9718-22ffb90326a9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-33-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".centered-text.donate-cards",
                                        selectorGuids: ["d27f1470-a4d2-e3d6-85e3-b0d6360206c4", "6bbd0517-8f12-4566-65eb-aa4abc9f27c4"]
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }, {
                                id: "a-33-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    zValue: 20,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-33-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1.15,
                                    yValue: 1.15,
                                    locked: !0
                                }
                            }, {
                                id: "a-33-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.donation-box",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "9b38532f-5546-7c6e-a8a5-26b5c3e1f92c"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".badge.dark-brand-color",
                                        selectorGuids: ["840b67ac-b2fd-0cc3-773c-67d551f2b904", "577eee35-37c7-013d-9718-22ffb90326a9"]
                                    },
                                    yValue: -3,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1742fc6a65a
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Donate Card -- Hover Away",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-34-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-34-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".centered-text.donate-cards",
                                        selectorGuids: ["d27f1470-a4d2-e3d6-85e3-b0d6360206c4", "6bbd0517-8f12-4566-65eb-aa4abc9f27c4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-34-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-34-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-34-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card.donation-box",
                                        selectorGuids: ["e27b7905-4a25-7844-c0a6-b4c1a8e2139b", "9b38532f-5546-7c6e-a8a5-26b5c3e1f92c"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".badge.dark-brand-color",
                                        selectorGuids: ["840b67ac-b2fd-0cc3-773c-67d551f2b904", "577eee35-37c7-013d-9718-22ffb90326a9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1742fc6a65a
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Donate Cards -- Scroll In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-25",
                                        selectorGuids: ["c3ae8824-070e-bcf7-3fc8-69b9b8270e9f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-50",
                                        selectorGuids: ["0e3f899a-1273-166b-f6d3-e210eb73bcab"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-100",
                                        selectorGuids: ["0f7a7c06-c9b6-0ddd-2e82-4188efcf846d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-what-you-like",
                                        selectorGuids: ["5a8b5da1-81e6-2880-bdb8-3dc358f68485"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-25",
                                        selectorGuids: ["c3ae8824-070e-bcf7-3fc8-69b9b8270e9f"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-25",
                                        selectorGuids: ["c3ae8824-070e-bcf7-3fc8-69b9b8270e9f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-50",
                                        selectorGuids: ["0e3f899a-1273-166b-f6d3-e210eb73bcab"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-50",
                                        selectorGuids: ["0e3f899a-1273-166b-f6d3-e210eb73bcab"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-100",
                                        selectorGuids: ["0f7a7c06-c9b6-0ddd-2e82-4188efcf846d"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-100",
                                        selectorGuids: ["0f7a7c06-c9b6-0ddd-2e82-4188efcf846d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-what-you-like",
                                        selectorGuids: ["5a8b5da1-81e6-2880-bdb8-3dc358f68485"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-what-you-like",
                                        selectorGuids: ["5a8b5da1-81e6-2880-bdb8-3dc358f68485"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1744e99c31e
                    },
                    "a-36": {
                        id: "a-36",
                        title: "Donate Cards -- Scroll Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-36-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-25",
                                        selectorGuids: ["c3ae8824-070e-bcf7-3fc8-69b9b8270e9f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-50",
                                        selectorGuids: ["0e3f899a-1273-166b-f6d3-e210eb73bcab"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-100",
                                        selectorGuids: ["0f7a7c06-c9b6-0ddd-2e82-4188efcf846d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".donate-what-you-like",
                                        selectorGuids: ["5a8b5da1-81e6-2880-bdb8-3dc358f68485"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "EM",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1744e99c31e
                    },
                    "a-37": {
                        id: "a-37",
                        title: "Pet Profile -- Mouse Animation",
                        continuousParameterGroups: [{
                            id: "a-37-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-37-n",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-left",
                                            selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                        },
                                        xValue: 5,
                                        yValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-37-n-4",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-right",
                                            selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                        },
                                        xValue: 5,
                                        yValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-37-n-5",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-center",
                                            selectorGuids: ["bbd2e630-cfdc-218f-82eb-a25c684e0b98"]
                                        },
                                        xValue: 3,
                                        yValue: -3,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-37-n-6",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-left",
                                            selectorGuids: ["f20cee90-3b5a-9489-43b1-4f133f5dbe8e"]
                                        },
                                        xValue: -5,
                                        yValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-37-n-9",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-right",
                                            selectorGuids: ["d0b3f81e-5bdd-c53a-2ca5-3cead2597752"]
                                        },
                                        xValue: -5,
                                        yValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-37-n-10",
                                    actionTypeId: "TRANSFORM_SKEW",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pet-image-mask-center",
                                            selectorGuids: ["bbd2e630-cfdc-218f-82eb-a25c684e0b98"]
                                        },
                                        xValue: -3,
                                        yValue: 3,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-37-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: []
                        }],
                        createdOn: 0x173610c2fc7
                    },
                    "a-40": {
                        id: "a-40",
                        title: "Profile Card -- Hover Over 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-40-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-40-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-40-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 20,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-40-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }, {
                                id: "a-40-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "inOutSine",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17360a5439d
                    },
                    "a-41": {
                        id: "a-41",
                        title: "Profile Card -- Hover Away 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".long-fur-pattern",
                                        selectorGuids: ["ae6fe712-7c75-1d0e-4af2-a0e684fca4c8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-41-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".short-fur-pattern",
                                        selectorGuids: ["ccb144d6-089f-a19c-36bf-12e1d4e2f923"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-41-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-41-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".profile-icon",
                                        selectorGuids: ["b888c641-dc21-0422-20eb-512de9f9e320"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-41-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".pet-thumbnail-image",
                                        selectorGuids: ["c36d0edf-7c95-d148-ed75-1960eae7093f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17360a5439d
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Logo -- Scroll Up 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 1200,
                                    target: {
                                        id: "6541506c74c4f603c7f44c63|46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x173e1cc666b
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Logo -- Scroll Down 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-45-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "6541506c74c4f603c7f44c63|46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-45-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 200,
                                    easing: "easeInOut",
                                    duration: 1200,
                                    target: {
                                        id: "6541506c74c4f603c7f44c63|46b83a20-f5b0-8a53-a0a5-8f60c71a63c5"
                                    },
                                    value: 100
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x173e1cc666b
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), Webflow.require("commerce") && Webflow.require("commerce").init({
                siteId: "63d5384f1c71e0fe90ed94db",
                apiUrl: "https://render.webflow.com"
            })
        }
    }
]);