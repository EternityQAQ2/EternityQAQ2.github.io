import { useCallback as e, useEffect as t, useImperativeHandle as n, useMemo as r, useRef as i, useState as a } from "react";
//#region \0rolldown/runtime.js
var o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), c = /* @__PURE__ */ function(e) {
	return e[e.CREATE_TEXTURE = 0] = "CREATE_TEXTURE", e[e.IMAGE_LOADING = 1] = "IMAGE_LOADING", e;
}({}), l = {
	step: .1,
	wheelDisabled: !1,
	touchPadDisabled: !1
}, u = {
	step: .5,
	disabled: !1
}, d = {
	step: 2,
	disabled: !1,
	mode: "toggle",
	animationTime: 200
}, f = {
	disabled: !1,
	velocityDisabled: !0
}, p = {
	sizeX: 0,
	sizeY: 0,
	velocityAlignmentTime: .2
}, m = {
	sensitivity: 1,
	animationTime: .2
}, h = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), g = /* @__PURE__ */ o(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, s, u) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, a(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = s("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), _ = (/* @__PURE__ */ o(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = h() : t.exports = g();
})))(), v = ({ title: e, defaultExpanded: t = !1, children: n }) => {
	let [r, i] = a(t);
	return /* @__PURE__ */ (0, _.jsxs)("div", {
		style: { marginBottom: "8px" },
		children: [/* @__PURE__ */ (0, _.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
				padding: "2px 0",
				borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
				marginBottom: r ? "4px" : "0"
			},
			onClick: () => i(!r),
			children: [/* @__PURE__ */ (0, _.jsx)("span", {
				style: {
					marginRight: "6px",
					fontSize: "10px",
					transform: r ? "rotate(90deg)" : "rotate(0deg)",
					transition: "transform 0.2s ease"
				},
				children: "▶"
			}), /* @__PURE__ */ (0, _.jsx)("span", {
				style: {
					fontWeight: "bold",
					fontSize: "11px"
				},
				children: e
			})]
		}), r && /* @__PURE__ */ (0, _.jsx)("div", {
			style: {
				paddingLeft: "16px",
				fontSize: "11px"
			},
			children: n
		})]
	});
}, y = ({ color: e, label: t }) => /* @__PURE__ */ (0, _.jsxs)("span", {
	style: {
		display: "flex",
		alignItems: "center",
		gap: "4px"
	},
	children: [/* @__PURE__ */ (0, _.jsx)("span", { style: {
		width: "6px",
		height: "6px",
		borderRadius: "50%",
		backgroundColor: e,
		display: "inline-block"
	} }), t]
}), b = ({ ref: t, outlineEnabled: r, onToggleOutline: i }) => {
	let [o, s] = a(null), [c, l] = a(!1);
	n(t, e(() => ({ updateDebugInfo: (e) => {
		s(e);
	} }), []));
	let u = (e) => {
		switch (e) {
			case "high": return "#4ade80";
			case "medium": return "#fbbf24";
			case "low": return "#f87171";
			default: return "#94a3b8";
		}
	}, d = (e) => e < 50 ? "#4ade80" : e < 80 ? "#fbbf24" : "#f87171";
	function f(e) {
		return e ? /* @__PURE__ */ (0, _.jsxs)(v, {
			title: "Tile System",
			defaultExpanded: !1,
			children: [
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Cache Size:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
						e.cacheSize,
						" / ",
						e.cacheLimit
					] })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Visible Tiles:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: e.visibleTiles })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Loading Tiles:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: e.loadingTiles })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Pending Requests:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: e.pendingRequests })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Tile Size:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: e.tileSize })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Max Tiles/Frame:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: e.maxTilesPerFrame })]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: {
						fontSize: "10px",
						marginTop: 4,
						opacity: .7
					},
					children: [
						/* @__PURE__ */ (0, _.jsxs)("div", { children: [
							"Cache Keys: ",
							e.cacheKeys?.slice(0, 3).join(", "),
							e.cacheKeys?.length > 3 ? " ..." : ""
						] }),
						/* @__PURE__ */ (0, _.jsxs)("div", { children: [
							"Visible Keys: ",
							e.visibleKeys?.slice(0, 3).join(", "),
							e.visibleKeys?.length > 3 ? " ..." : ""
						] }),
						/* @__PURE__ */ (0, _.jsxs)("div", { children: [
							"Loading Keys: ",
							e.loadingKeys?.slice(0, 3).join(", "),
							e.loadingKeys?.length > 3 ? " ..." : ""
						] }),
						/* @__PURE__ */ (0, _.jsxs)("div", { children: [
							"Pending Keys: ",
							e.pendingKeys?.slice(0, 3).join(", "),
							e.pendingKeys?.length > 3 ? " ..." : ""
						] })
					]
				})
			]
		}) : null;
	}
	if (!o) return null;
	let p = r === void 0 ? o.tileOutlinesEnabled ?? !1 : r;
	return /* @__PURE__ */ (0, _.jsxs)("div", {
		style: {
			position: "absolute",
			top: "10px",
			left: "10px",
			background: "rgba(0, 0, 0, 0.9)",
			color: "white",
			padding: "8px",
			borderRadius: "6px",
			fontSize: "11px",
			fontFamily: "monospace",
			lineHeight: "1.3",
			pointerEvents: "auto",
			zIndex: 1e3,
			minWidth: "240px",
			maxWidth: "300px",
			backdropFilter: "blur(4px)",
			border: "1px solid rgba(255, 255, 255, 0.1)"
		},
		children: [
			/* @__PURE__ */ (0, _.jsxs)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "8px",
					paddingBottom: "4px",
					borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
				},
				children: [/* @__PURE__ */ (0, _.jsx)("span", {
					style: {
						fontWeight: "bold",
						fontSize: "12px"
					},
					children: "WebGL Debug"
				}), /* @__PURE__ */ (0, _.jsx)("button", {
					type: "button",
					style: {
						background: "none",
						border: "none",
						color: "white",
						cursor: "pointer",
						fontSize: "10px",
						padding: "2px 4px",
						borderRadius: "2px",
						opacity: .7
					},
					onClick: () => l(!c),
					onMouseEnter: (e) => e.currentTarget.style.opacity = "1",
					onMouseLeave: (e) => e.currentTarget.style.opacity = "0.7",
					children: c ? "📈" : "📉"
				})]
			}),
			!c && /* @__PURE__ */ (0, _.jsxs)(_.Fragment, { children: [
				i && /* @__PURE__ */ (0, _.jsx)("div", {
					style: { marginBottom: "8px" },
					children: /* @__PURE__ */ (0, _.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Tile Outline:" }), /* @__PURE__ */ (0, _.jsx)("button", {
							type: "button",
							style: {
								background: p ? "rgba(34, 197, 94, 0.25)" : "rgba(148, 163, 184, 0.25)",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								color: "white",
								cursor: "pointer",
								fontSize: "10px",
								padding: "2px 6px",
								borderRadius: "3px"
							},
							onClick: () => i(!p),
							children: p ? "On" : "Off"
						})]
					})
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					style: { marginBottom: "8px" },
					children: [
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Scale:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: o.scale.toFixed(2) })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "LOD:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
								o.currentLOD,
								" / ",
								o.lodLevels - 1
							] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Quality:" }), /* @__PURE__ */ (0, _.jsx)(y, {
								color: u(o.quality),
								label: o.quality
							})]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Status:" }), /* @__PURE__ */ (0, _.jsx)(y, {
								color: o.isLoading ? "#fbbf24" : "#4ade80",
								label: o.isLoading ? "Loading" : "Ready"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, _.jsxs)(v, {
					title: "Transform",
					children: [
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Relative Scale:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: o.relativeScale.toFixed(3) })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Position:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
								"(",
								o.translateX.toFixed(0),
								", ",
								o.translateY.toFixed(0),
								")"
							] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Fit Scale:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: o.fitToScreenScale.toFixed(3) })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Max Scale:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: o.effectiveMaxScale.toFixed(3) })]
						})
					]
				}),
				/* @__PURE__ */ (0, _.jsxs)(v, {
					title: "Image Info",
					children: [
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Canvas:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
								o.canvasSize.width,
								"×",
								o.canvasSize.height
							] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Image:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
								o.imageSize.width,
								"×",
								o.imageSize.height
							] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "DPR:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: window.devicePixelRatio || 1 })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Max Texture:" }), /* @__PURE__ */ (0, _.jsx)("span", { children: o.maxTextureSize })]
						})
					]
				}),
				/* @__PURE__ */ (0, _.jsxs)(v, {
					title: "Memory",
					children: [
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Textures:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [o.memory.textures.toFixed(1), " MB"] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Estimated:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [o.memory.estimated.toFixed(1), " MB"] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Budget:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [o.memory.budget.toFixed(1), " MB"] })]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Pressure:" }), /* @__PURE__ */ (0, _.jsx)(y, {
								color: d(o.memory.pressure),
								label: `${o.memory.pressure.toFixed(1)}%`
							})]
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Active LODs:" }), /* @__PURE__ */ (0, _.jsxs)("span", { children: [
								o.memory.activeLODs,
								" / ",
								o.memory.maxConcurrentLODs
							] })]
						})
					]
				}),
				f(o.tileSystem)
			] }),
			c && /* @__PURE__ */ (0, _.jsx)("div", {
				style: {
					fontSize: "10px",
					opacity: .8
				},
				children: /* @__PURE__ */ (0, _.jsxs)("div", { children: [
					"Scale: ",
					o.scale.toFixed(2),
					" | LOD: ",
					o.currentLOD,
					" |",
					" ",
					/* @__PURE__ */ (0, _.jsx)(y, {
						color: u(o.quality),
						label: o.quality
					})
				] })
			})
		]
	});
};
b.displayName = "DebugInfo";
//#endregion
//#region src/ImageViewerEngineBase.ts
var x = class {}, S = "\n  attribute vec2 a_position;\n  attribute vec2 a_texCoord;\n  \n  uniform mat3 u_matrix;\n  \n  varying vec2 v_texCoord;\n  \n  void main() {\n    vec3 position = u_matrix * vec3(a_position, 1.0);\n    gl_Position = vec4(position.xy, 0, 1);\n    v_texCoord = a_texCoord;\n  }\n", C = "\n  precision mediump float;\n  \n  uniform sampler2D u_image;\n  uniform int u_renderMode;\n  uniform vec4 u_solidColor;\n  varying vec2 v_texCoord;\n  \n  void main() {\n    if (u_renderMode == 0) {\n      gl_FragColor = texture2D(u_image, v_texCoord);\n    } else {\n      gl_FragColor = u_solidColor;\n    }\n  }\n";
function w(e, t, n) {
	let r = e.createShader(t);
	if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
		let t = e.getShaderInfoLog(r);
		throw e.deleteShader(r), Error(`Shader compilation failed: ${t}`);
	}
	return r;
}
//#endregion
//#region src/texture.worker.js?raw
var T = "// @ts-nocheck\n/// <reference lib=\"webworker\" />\n\nlet originalImage = null\n\nconst TILE_SIZE = 512 // Must be same as in WebGLImageViewerEngine.ts\n\n// 简化的 LOD 级别\nconst WORKER_SIMPLE_LOD_LEVELS = [\n  { scale: 0.25 }, // 极低质量\n  { scale: 0.5 }, // 低质量\n  { scale: 1 }, // 正常质量\n  { scale: 2 }, // 高质量\n  { scale: 4 }, // 超高质量\n]\n/**\n *\n * @param {MessageEvent} e\n * @returns\n */\nself.onmessage = async (e) => {\n  const { type, payload } = e.data\n  console.info('[Worker] Received message:', type, payload)\n\n  switch (type) {\n    case 'load-image': {\n      const { imageBlob, url } = payload\n\n      // 优先使用直接传递的 Blob（主线程已解码），避免 blob URL 竞态\n      if (imageBlob) {\n        // === DIAGNOSTIC: blob inspection before decode ===\n        try {\n          const u8 = new Uint8Array(await imageBlob.slice(0, 16).arrayBuffer())\n          const headerHex = [...u8].map((v) => v.toString(16).padStart(2, '0')).join(' ')\n          console.info('[Worker] Blob diagnostic:', {\n            type: imageBlob.type,\n            size: imageBlob.size,\n            headerHex,\n          })\n        } catch (diagErr) {\n          console.warn('[Worker] Blob diagnostic failed:', diagErr)\n        }\n\n        try {\n          console.info('[Worker] Decoding Blob directly (no fetch needed)')\n          originalImage = await createImageBitmap(imageBlob)\n        } catch (error) {\n          console.error('[Worker] Error decoding Blob:', error)\n\n          // === DIAGNOSTIC: send blob bytes back to main thread for inspection ===\n          try {\n            const bytes = await imageBlob.arrayBuffer()\n            self.postMessage(\n              {\n                type: 'debug-blob',\n                payload: { bytes, blobType: imageBlob.type, blobSize: imageBlob.size, error: String(error) },\n              },\n              [bytes],\n            )\n          } catch (sendErr) {\n            console.warn('[Worker] Could not send debug blob to main:', sendErr)\n          }\n\n          self.postMessage({ type: 'load-error', payload: { error: String(error) } })\n          break\n        }\n      } else if (url) {\n        try {\n          console.info('[Worker] Fetching image:', url)\n          // blob: URLs are same-origin and don't need CORS; other URLs may need it\n          const isBlobUrl = url.startsWith('blob:')\n          const response = await fetch(url, isBlobUrl ? {} : { mode: 'cors' })\n          if (!response.ok) {\n            throw new Error(`HTTP ${response.status} ${response.statusText}`)\n          }\n          const blob = await response.blob()\n\n          // === DIAGNOSTIC: blob inspection before decode (URL fetch) ===\n          try {\n            const u8 = new Uint8Array(await blob.slice(0, 16).arrayBuffer())\n            const headerHex2 = [...u8].map((v) => v.toString(16).padStart(2, '0')).join(' ')\n            console.info('[Worker] Blob diagnostic (from URL):', {\n              type: blob.type,\n              size: blob.size,\n              headerHex: headerHex2,\n              url,\n              contentType: response.headers.get('Content-Type'),\n              contentLength: response.headers.get('Content-Length'),\n              contentEncoding: response.headers.get('Content-Encoding'),\n              acceptRanges: response.headers.get('Accept-Ranges'),\n            })\n          } catch (diagErr) {\n            console.warn('[Worker] Blob diagnostic (URL fetch) failed:', diagErr)\n          }\n\n          originalImage = await createImageBitmap(blob)\n        } catch (error) {\n          console.error('[Worker] Error loading image:', error, { url })\n          self.postMessage({ type: 'load-error', payload: { error: String(error) } })\n          break\n        }\n      } else {\n        console.error('[Worker] load-image received without imageBlob or url')\n        self.postMessage({ type: 'load-error', payload: { error: 'No image data provided' } })\n        break\n      }\n\n      console.info('[Worker] Image decoded, posting init-done')\n      self.postMessage({ type: 'init-done' })\n\n      // Create initial LOD texture\n      const lodLevel = 1 // Initial LOD level\n      const lodConfig = WORKER_SIMPLE_LOD_LEVELS[lodLevel]\n      const finalWidth = Math.max(1, Math.round(originalImage.width * lodConfig.scale))\n      const finalHeight = Math.max(1, Math.round(originalImage.height * lodConfig.scale))\n\n      const initialLODBitmap = await createImageBitmap(originalImage, {\n        resizeWidth: finalWidth,\n        resizeHeight: finalHeight,\n        resizeQuality: 'medium',\n      })\n\n      console.info('[Worker] Initial LOD created, posting image-loaded')\n      self.postMessage(\n        {\n          type: 'image-loaded',\n          payload: {\n            imageBitmap: initialLODBitmap,\n            imageWidth: originalImage.width,\n            imageHeight: originalImage.height,\n            lodLevel,\n          },\n        },\n        [initialLODBitmap],\n      )\n      break\n    }\n    case 'init': {\n      originalImage = payload.imageBitmap\n      self.postMessage({ type: 'init-done' })\n      break\n    }\n    case 'create-tile': {\n      if (!originalImage) {\n        console.warn('Worker has not been initialized with an image.', { key })\n        self.postMessage({ type: 'tile-error', payload: { key, error: 'Worker not initialized' } })\n        return\n      }\n\n      const { x, y, lodLevel, lodConfig, imageWidth, imageHeight, key } = payload\n\n      try {\n        const { cols, rows } = getTileGridSize(imageWidth, imageHeight, lodLevel, lodConfig)\n\n        // Calculate tile region in the original image\n        const sourceWidth = imageWidth / cols\n        const sourceHeight = imageHeight / rows // Assuming square tiles from a square grid on the image\n        const sourceX = x * sourceWidth\n        const sourceY = y * sourceHeight\n\n        const actualSourceWidth = Math.min(sourceWidth, imageWidth - sourceX)\n        const actualSourceHeight = Math.min(sourceHeight, imageHeight - sourceY)\n\n        const targetWidth = Math.min(TILE_SIZE, Math.ceil(actualSourceWidth * lodConfig.scale))\n        const targetHeight = Math.min(TILE_SIZE, Math.ceil(actualSourceHeight * lodConfig.scale))\n\n        if (targetWidth <= 0 || targetHeight <= 0) {\n          return\n        }\n\n        // Use OffscreenCanvas to draw the tile\n        const canvas = new OffscreenCanvas(targetWidth, targetHeight)\n        const ctx = canvas.getContext('2d')\n\n        ctx.imageSmoothingEnabled = true\n        ctx.imageSmoothingQuality = lodConfig.scale >= 1 ? 'high' : 'medium'\n\n        ctx.drawImage(\n          originalImage,\n          sourceX,\n          sourceY,\n          actualSourceWidth,\n          actualSourceHeight,\n          0,\n          0,\n          targetWidth,\n          targetHeight,\n        )\n\n        const imageBitmap = canvas.transferToImageBitmap()\n        self.postMessage({ type: 'tile-created', payload: { key, imageBitmap, lodLevel } }, [imageBitmap])\n      } catch (error) {\n        console.error('Error creating tile in worker:', error)\n        self.postMessage({ type: 'tile-error', payload: { key, error } })\n      }\n      break\n    }\n  }\n}\n\n/**\n *\n * @param {number} imageWidth\n * @param {number} imageHeight\n * @param {number} _lodLevel\n * @param {object} lodConfig\n * @returns\n */\nfunction getTileGridSize(imageWidth, imageHeight, _lodLevel, lodConfig) {\n  const scaledWidth = imageWidth * lodConfig.scale\n  const scaledHeight = imageHeight * lodConfig.scale\n\n  const cols = Math.ceil(scaledWidth / TILE_SIZE)\n  const rows = Math.ceil(scaledHeight / TILE_SIZE)\n\n  return { cols, rows }\n}\n", E = 512, D = 4, O = 32, k = [
	{ scale: .25 },
	{ scale: .5 },
	{ scale: 1 },
	{ scale: 2 },
	{ scale: 4 }
], A = class extends x {
	canvas;
	gl;
	program;
	texture = null;
	imageLoaded = !1;
	originalImageSrc = "";
	scale = 1;
	translateX = 0;
	translateY = 0;
	imageWidth = 0;
	imageHeight = 0;
	canvasWidth = 0;
	canvasHeight = 0;
	devicePixelRatio = 1;
	isDragging = !1;
	lastMouseX = 0;
	lastMouseY = 0;
	lastTouchDistance = 0;
	lastDoubleClickTime = 0;
	isOriginalSize = !1;
	lastTouchTime = 0;
	lastTouchX = 0;
	lastTouchY = 0;
	isAnimating = !1;
	animationStartTime = 0;
	animationDuration = 300;
	startScale = 1;
	targetScale = 1;
	startTranslateX = 0;
	startTranslateY = 0;
	targetTranslateX = 0;
	targetTranslateY = 0;
	animationStartLOD = -1;
	currentLOD = 1;
	lodTextures = /* @__PURE__ */ new Map();
	config;
	onZoomChange;
	onImageCopied;
	onLoadingStateChange;
	onDebugUpdate;
	currentQuality = "unknown";
	isLoadingTexture = !0;
	worker = null;
	textureWorkerInitialized = !1;
	positionBuffer = null;
	texCoordBuffer = null;
	tileOutlineBuffer = null;
	positionLocation = -1;
	texCoordLocation = -1;
	matrixLocation;
	imageLocation;
	renderModeLocation;
	solidColorLocation;
	tileOutlineEnabled = !1;
	contextLost = !1;
	boundContextLost;
	boundContextRestored;
	boundHandleMouseDown;
	boundHandleMouseMove;
	boundHandleMouseUp;
	boundHandleWheel;
	boundHandleDoubleClick;
	boundHandleTouchStart;
	boundHandleTouchMove;
	boundHandleTouchEnd;
	boundResizeCanvas;
	tileCache = /* @__PURE__ */ new Map();
	loadingTiles = /* @__PURE__ */ new Map();
	pendingTileRequests = [];
	tileProcessingFrameId = null;
	currentVisibleTiles = /* @__PURE__ */ new Set();
	lastViewportHash = "";
	loadImageResolve = null;
	loadImageReject = null;
	pendingImageBlob = null;
	diagnosticResults = [];
	constructor(e, t, n) {
		super(), this.canvas = e, this.config = t, this.onZoomChange = t.onZoomChange, this.onImageCopied = t.onImageCopied, this.onLoadingStateChange = t.onLoadingStateChange, this.onDebugUpdate = n;
		let r = e.getContext("webgl", {
			alpha: !0,
			premultipliedAlpha: !1,
			antialias: !0,
			powerPreference: "default"
		});
		if (!r) throw Error("WebGL not supported");
		this.gl = r, this.boundHandleMouseDown = (e) => this.handleMouseDown(e), this.boundHandleMouseMove = (e) => this.handleMouseMove(e), this.boundHandleMouseUp = () => this.handleMouseUp(), this.boundHandleWheel = (e) => this.handleWheel(e), this.boundHandleDoubleClick = (e) => this.handleDoubleClick(e), this.boundHandleTouchStart = (e) => this.handleTouchStart(e), this.boundHandleTouchMove = (e) => this.handleTouchMove(e), this.boundHandleTouchEnd = (e) => this.handleTouchEnd(e), this.boundResizeCanvas = () => this.resizeCanvas(), this.boundContextLost = (e) => {
			e.preventDefault(), this.contextLost = !0, console.warn("[WebGL] Context lost — rendering suspended");
		}, this.boundContextRestored = () => {
			this.contextLost = !1, console.info("[WebGL] Context restored");
			try {
				this.initWebGL(), this.render();
			} catch (e) {
				console.error("[WebGL] Failed to reinitialize after context restore:", e);
			}
		}, this.setupCanvas(), this.initWebGL(), this.initWorker(), this.setupEventListeners(), this.isLoadingTexture = !1, this.notifyLoadingStateChange(!1);
	}
	resizeObserver = null;
	setupCanvas() {
		this.resizeCanvas(), window.addEventListener("resize", this.boundResizeCanvas), this.resizeObserver && this.resizeObserver.disconnect(), this.resizeObserver = new ResizeObserver((e) => {
			e[0].target === this.canvas && this.boundResizeCanvas();
		}), this.resizeObserver.observe(this.canvas);
	}
	resizeCanvas() {
		let e = this.canvas.getBoundingClientRect();
		this.devicePixelRatio = window.devicePixelRatio || 1, this.canvasWidth = e.width, this.canvasHeight = e.height;
		let t = Math.round(e.width * this.devicePixelRatio), n = Math.round(e.height * this.devicePixelRatio);
		this.canvas.width = t, this.canvas.height = n, this.gl.viewport(0, 0, t, n), this.imageLoaded && (this.constrainScaleAndPosition(), this.render(), this.notifyZoomChange());
	}
	initWebGL() {
		let { gl: e } = this, t = w(e, e.VERTEX_SHADER, S), n = w(e, e.FRAGMENT_SHADER, C);
		if (this.program = e.createProgram(), e.attachShader(this.program, t), e.attachShader(this.program, n), e.linkProgram(this.program), !e.getProgramParameter(this.program, e.LINK_STATUS)) throw Error(`Program linking failed: ${e.getProgramInfoLog(this.program)}`);
		if (e.useProgram(this.program), this.positionLocation = e.getAttribLocation(this.program, "a_position"), this.texCoordLocation = e.getAttribLocation(this.program, "a_texCoord"), this.positionLocation === -1 || this.texCoordLocation === -1) throw Error("Failed to get attribute locations");
		let r = e.getUniformLocation(this.program, "u_matrix"), i = e.getUniformLocation(this.program, "u_image"), a = e.getUniformLocation(this.program, "u_renderMode"), o = e.getUniformLocation(this.program, "u_solidColor");
		if (!r || !i || !a || !o) throw Error("Failed to get uniform locations");
		this.matrixLocation = r, this.imageLocation = i, this.renderModeLocation = a, this.solidColorLocation = o, e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
		let s = new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			1
		]), c = new Float32Array([
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			0
		]), l = e.createBuffer();
		if (!l) throw Error("Failed to create position buffer");
		this.positionBuffer = l, e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW);
		let u = e.createBuffer();
		if (!u) throw Error("Failed to create texCoord buffer");
		this.texCoordBuffer = u, e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW);
		let d = new Float32Array([
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1
		]), f = e.createBuffer();
		if (!f) throw Error("Failed to create outline buffer");
		this.tileOutlineBuffer = f, e.bindBuffer(e.ARRAY_BUFFER, f), e.bufferData(e.ARRAY_BUFFER, d, e.STATIC_DRAW), e.enableVertexAttribArray(this.positionLocation), e.enableVertexAttribArray(this.texCoordLocation), this.bindQuadBuffers(), e.uniform1i(this.renderModeLocation, 0);
	}
	bindQuadBuffers() {
		if (!this.positionBuffer || !this.texCoordBuffer) return;
		let { gl: e } = this;
		e.bindBuffer(e.ARRAY_BUFFER, this.positionBuffer), e.vertexAttribPointer(this.positionLocation, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this.texCoordBuffer), e.vertexAttribPointer(this.texCoordLocation, 2, e.FLOAT, !1, 0, 0);
	}
	bindOutlineBuffer() {
		if (!this.tileOutlineBuffer) return;
		let { gl: e } = this;
		e.bindBuffer(e.ARRAY_BUFFER, this.tileOutlineBuffer), e.vertexAttribPointer(this.positionLocation, 2, e.FLOAT, !1, 0, 0);
	}
	drawTileOutlines(e) {
		if (!this.tileOutlineEnabled || e.length === 0 || !this.tileOutlineBuffer) return;
		let { gl: t } = this;
		t.uniform1i(this.renderModeLocation, 1), t.uniform4f(this.solidColorLocation, 1, .4, 0, .7), this.bindOutlineBuffer(), t.lineWidth(1);
		for (let n of e) t.uniformMatrix3fv(this.matrixLocation, !1, n), t.drawArrays(t.LINE_LOOP, 0, 4);
		this.bindQuadBuffers(), t.uniform1i(this.renderModeLocation, 0);
	}
	initWorker() {
		this.worker = new Worker(URL.createObjectURL(new Blob([T])), { name: "texture-worker" }), this.worker.onmessage = (e) => {
			this.handleWorkerMessage(e);
		}, this.worker.onerror = (e) => {
			console.error("[Worker] Error:", e.message, e.error);
		};
	}
	handleWorkerMessage(e) {
		let { type: t, payload: n } = e.data;
		if (t === "debug-blob") {
			let { bytes: e, blobType: t, blobSize: r, error: i } = n || {};
			if (console.info("[Engine] === DIAGNOSTIC: Received debug-blob from worker ===", {
				blobType: t,
				blobSize: `${(r / 1024).toFixed(1)}KB`,
				workerError: i,
				bytesLength: e?.byteLength
			}), e) {
				let n = new Blob([e], { type: t || "application/octet-stream" }), a = URL.createObjectURL(n), o = document.createElement("a");
				o.href = a, o.download = "debug-worker-blob.bin", o.style.display = "none", document.body.appendChild(o), console.info("[Engine] Download debug blob:", o.download, a), this.testMainThreadDecode(n, "").then((e) => {
					console.info("[Engine] === DIAGNOSTIC RESULT ==="), console.info("  Worker createImageBitmap: FAIL"), console.info("  Main thread createImageBitmap: PASS"), console.info("  Image dimensions:", e.width, "x", e.height), console.info("  Conclusion: Worker environment issue (blob is valid)"), console.group("[Engine] Full diagnostic summary"), console.log("Blob.type:", t), console.log("Blob.size:", r), console.log("Worker createImageBitmap: FAIL —", i), console.log("Main thread createImageBitmap: PASS"), console.log("Image.width:", e.width), console.log("Image.height:", e.height), console.groupEnd();
				}).catch(() => {
					console.info("[Engine] === DIAGNOSTIC RESULT ==="), console.info("  Worker createImageBitmap: FAIL"), console.info("  Main thread createImageBitmap: FAIL"), console.info("  Conclusion: Blob content is corrupted (both fail)");
				}).finally(() => {
					URL.revokeObjectURL(a), document.body.removeChild(o);
				});
			}
			return;
		}
		if (t === "image-loaded") {
			let { imageBitmap: e, imageWidth: t, imageHeight: r, lodLevel: i } = n;
			try {
				(!this.imageWidth || !this.imageHeight) && (this.imageWidth = t, this.imageHeight = r, this.setupInitialScaling()), this.notifyLoadingStateChange(!0, c.CREATE_TEXTURE);
				let n = this.createWebGLTexture(e);
				e.close(), n && (this.cleanupLODTextures(), this.lodTextures.set(i, n), this.texture = n, this.currentLOD = i, this.currentQuality = k[i].scale >= 2 ? "high" : k[i].scale >= 1 ? "medium" : "low"), this.imageLoaded = !0, this.isLoadingTexture = !1, this.notifyLoadingStateChange(!1), this.render(), this.notifyZoomChange(), this.loadImageResolve && this.loadImageResolve();
			} catch (e) {
				this.loadImageReject && this.loadImageReject(e);
			}
			return;
		}
		if (t === "load-error") {
			if (this.isLoadingTexture = !1, this.notifyLoadingStateChange(!1), this.pendingImageBlob &&= (console.info("[Engine] Worker failed — testing main thread decode..."), this.testMainThreadDecode(this.pendingImageBlob, this.originalImageSrc).then((e) => {
				console.info("[Engine] === DIAGNOSTIC RESULT ==="), console.info("  Worker createImageBitmap: FAIL"), console.info("  Main thread createImageBitmap: PASS"), console.info("  Image dimensions:", e.width, "x", e.height), console.info("  Conclusion: Worker environment issue or transfer corruption");
			}).catch(() => {
				console.info("[Engine] === DIAGNOSTIC RESULT ==="), console.info("  Worker createImageBitmap: FAIL"), console.info("  Main thread createImageBitmap: FAIL"), console.info("  Conclusion: Blob content is corrupted");
			}), null), this.loadImageReject) {
				let e = n?.error || "Failed to load image in worker";
				this.loadImageReject(Error(e));
			}
			return;
		}
		if (t === "init-done") {
			this.textureWorkerInitialized = !0, this.updateTileCache();
			return;
		}
		if (t === "tile-created") {
			let { key: e, imageBitmap: t, lodLevel: r } = n, i = this.loadingTiles.get(e), a = this.tileCache.get(e);
			if (!this.currentVisibleTiles.has(e)) {
				t.close(), i && this.loadingTiles.delete(e);
				return;
			}
			let o = this.createWebGLTexture(t);
			if (t.close(), o) {
				let [t, n] = e.split("-").map(Number), s = {
					x: t,
					y: n,
					lodLevel: r,
					texture: o,
					lastUsed: performance.now(),
					isLoading: !1,
					priority: i ? i.priority : a ? a.priority : 0
				};
				this.tileCache.set(e, s), i && this.loadingTiles.delete(e), this.currentVisibleTiles.has(e) && this.render();
			} else i && this.loadingTiles.delete(e);
		} else if (t === "tile-error") {
			let { key: e, error: t } = n;
			console.warn(`Worker failed to create tile: ${e}`, t), this.loadingTiles.delete(e), setTimeout(() => {
				!this.tileCache.has(e) && this.currentVisibleTiles.has(e) && (this.pendingTileRequests.push({
					key: e,
					priority: 2 ** 53 - 1
				}), this.processPendingTileRequests());
			}, 2e3);
		}
	}
	async loadImage(e, t, n, r) {
		return this.originalImageSrc = e, this.isLoadingTexture = !0, this.notifyLoadingStateChange(!0, c.IMAGE_LOADING), t && n && (this.imageWidth = t, this.imageHeight = n, this.setupInitialScaling()), this.pendingImageBlob = r || null, new Promise((t, n) => {
			this.loadImageResolve = t, this.loadImageReject = n, console.info("[Engine] Posting \"load-image\" to worker", this.worker), r ? (console.info("[Engine] Sending imageBlob to worker:", {
				type: r.type,
				size: r.size
			}), this.worker?.postMessage({
				type: "load-image",
				payload: { imageBlob: r }
			})) : (console.info("[Engine] Sending URL to worker:", e), this.worker?.postMessage({
				type: "load-image",
				payload: { url: e }
			}));
		});
	}
	setupInitialScaling() {
		if (this.config.centerOnInit) this.fitImageToScreen();
		else {
			let e = this.getFitToScreenScale();
			this.scale = e * this.config.initialScale;
		}
	}
	async testMainThreadDecode(e, t) {
		console.info("[Engine] === DIAGNOSTIC: Main thread decode test ===", {
			type: e.type,
			size: e.size,
			url: t
		});
		try {
			let t = await createImageBitmap(e), n = {
				width: t.width,
				height: t.height
			};
			return t.close(), console.info("[Engine] Main thread decode: PASS", n), n;
		} catch (e) {
			throw console.error("[Engine] Main thread decode: FAIL", e), e;
		}
	}
	createWebGLTexture(e) {
		let { gl: t } = this, n = t.createTexture();
		return n ? (t.bindTexture(t.TEXTURE_2D, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), n) : null;
	}
	cleanupLODTextures() {
		for (let e of this.lodTextures.values()) this.gl.deleteTexture(e);
		this.lodTextures.clear();
	}
	selectOptimalLOD() {
		if (this.isAnimating && this.animationStartLOD > -1) return this.animationStartLOD;
		if (!this.imageLoaded) return 1;
		let e = this.scale * this.devicePixelRatio;
		for (let [t, n] of k.entries()) if (n.scale >= e) return t;
		return k.length - 1;
	}
	easeOutQuart(e) {
		return 1 - (1 - e) ** 4;
	}
	startAnimation(e, t, n, r) {
		this.isAnimating = !0, this.animationStartTime = performance.now(), this.animationDuration = r || (this.config.smooth ? 300 : 0), this.startScale = this.scale, this.targetScale = e, this.startTranslateX = this.translateX, this.startTranslateY = this.translateY, this.targetTranslateX = t, this.targetTranslateY = n, this.animationStartLOD = this.selectOptimalLOD();
		let i = this.scale, a = this.translateX, o = this.translateY;
		this.scale = e, this.translateX = t, this.translateY = n, this.constrainImagePosition(), this.targetTranslateX = this.translateX, this.targetTranslateY = this.translateY, this.scale = i, this.translateX = a, this.translateY = o, this.animate();
	}
	animate() {
		if (!this.isAnimating) return;
		let e = performance.now() - this.animationStartTime, t = Math.min(e / this.animationDuration, 1), n = this.config.smooth ? this.easeOutQuart(t) : t;
		this.scale = this.startScale + (this.targetScale - this.startScale) * n, this.translateX = this.startTranslateX + (this.targetTranslateX - this.startTranslateX) * n, this.translateY = this.startTranslateY + (this.targetTranslateY - this.startTranslateY) * n, this.render(), this.notifyZoomChange(), t < 1 ? requestAnimationFrame(() => this.animate()) : (this.isAnimating = !1, this.animationStartLOD = -1, this.scale = this.targetScale, this.translateX = this.targetTranslateX, this.translateY = this.targetTranslateY, this.render(), this.notifyZoomChange(), this.updateTileCache());
	}
	fitImageToScreen() {
		let e = this.canvasWidth / this.imageWidth, t = this.canvasHeight / this.imageHeight, n = Math.min(e, t);
		this.scale = n * this.config.initialScale, this.translateX = 0, this.translateY = 0, this.isOriginalSize = !1;
	}
	createMatrix() {
		let e = this.imageWidth * this.scale / this.canvasWidth, t = this.imageHeight * this.scale / this.canvasHeight, n = this.translateX * 2 / this.canvasWidth, r = -(this.translateY * 2) / this.canvasHeight;
		return new Float32Array([
			e,
			0,
			0,
			0,
			t,
			0,
			n,
			r,
			1
		]);
	}
	getFitToScreenScale() {
		let e = this.canvasWidth / this.imageWidth, t = this.canvasHeight / this.imageHeight;
		return Math.min(e, t);
	}
	constrainImagePosition() {
		if (!this.config.limitToBounds) return;
		let e = this.getFitToScreenScale();
		if (this.scale <= e) {
			this.translateX = 0, this.translateY = 0;
			return;
		}
		let t = this.imageWidth * this.scale, n = this.imageHeight * this.scale, r = Math.max(0, (t - this.canvasWidth) / 2), i = Math.max(0, (n - this.canvasHeight) / 2);
		this.translateX = Math.max(-r, Math.min(r, this.translateX)), this.translateY = Math.max(-i, Math.min(i, this.translateY));
	}
	constrainScaleAndPosition() {
		let e = this.getFitToScreenScale(), t = e * this.config.minScale, n = e * this.config.maxScale, r = Math.max(n, 1);
		this.scale < t ? this.scale = t : this.scale > r && (this.scale = r), this.constrainImagePosition();
	}
	getTileKey(e, t, n) {
		return `${e}-${t}-${n}`;
	}
	getTileGridSize(e) {
		let t = k[e], n = this.imageWidth * t.scale, r = this.imageHeight * t.scale;
		return {
			cols: Math.ceil(n / E),
			rows: Math.ceil(r / E)
		};
	}
	calculateVisibleTiles() {
		if (!this.imageLoaded) return [];
		let e = this.selectOptimalLOD(), { cols: t, rows: n } = this.getTileGridSize(e), r = this.canvasWidth / 2 + this.translateX, i = this.canvasHeight / 2 + this.translateY, a = this.imageWidth * this.scale, o = this.imageHeight * this.scale, s = r - a / 2, c = i - o / 2, l = Math.max(0, -s / this.scale), u = Math.max(0, -c / this.scale), d = Math.min(this.imageWidth, (this.canvasWidth - s) / this.scale), f = Math.min(this.imageHeight, (this.canvasHeight - c) / this.scale), p = this.imageWidth / t, m = this.imageHeight / n, h = Math.max(0, Math.floor(l / p) - 1), g = Math.min(t - 1, Math.ceil(d / p) + 1), _ = Math.max(0, Math.floor(u / m) - 1), v = Math.min(n - 1, Math.ceil(f / m) + 1), y = [], b = (l + d) / 2, x = (u + f) / 2;
		for (let t = _; t <= v; t++) for (let n = h; n <= g; n++) {
			let r = (n + .5) * p, i = (t + .5) * m, a = Math.sqrt((r - b) ** 2 + (i - x) ** 2);
			y.push({
				x: n,
				y: t,
				lodLevel: e,
				priority: a
			});
		}
		return y.sort((e, t) => e.priority - t.priority), y;
	}
	async updateTileCache() {
		let e = this.calculateVisibleTiles(), t = /* @__PURE__ */ new Set(), n = `${this.scale.toFixed(3)}-${this.translateX.toFixed(1)}-${this.translateY.toFixed(1)}`, r = n !== this.lastViewportHash;
		this.lastViewportHash = n;
		let i = !1;
		for (let n of e) {
			let e = this.getTileKey(n.x, n.y, n.lodLevel);
			t.add(e);
			let r = this.pendingTileRequests.find((t) => t.key === e);
			if (!this.tileCache.has(e) && !this.loadingTiles.has(e) && !r) this.pendingTileRequests.push({
				key: e,
				priority: n.priority
			}), i = !0;
			else if (r) r.priority = Math.min(r.priority, n.priority);
			else if (this.tileCache.has(e)) {
				let t = this.tileCache.get(e);
				t.lastUsed = performance.now();
			}
		}
		this.currentVisibleTiles = t, this.cleanupOldTiles(), (r || i || this.pendingTileRequests.length > 0) && this.processPendingTileRequests();
	}
	cleanupOldTiles() {
		let e = performance.now();
		if (this.tileCache.size > O) {
			let e = Array.from(this.tileCache.entries()).filter(([e]) => !this.currentVisibleTiles.has(e)).sort(([, e], [, t]) => e.lastUsed - t.lastUsed).slice(0, this.tileCache.size - O + 5);
			for (let [t, n] of e) n.texture && this.gl.deleteTexture(n.texture), this.tileCache.delete(t);
		}
		for (let [t, n] of this.tileCache.entries()) !this.currentVisibleTiles.has(t) && e - n.lastUsed > 3e4 && (n.texture && this.gl.deleteTexture(n.texture), this.tileCache.delete(t));
	}
	processPendingTileRequests() {
		if (!this.worker || !this.textureWorkerInitialized) return;
		if (this.pendingTileRequests.length === 0) {
			this.tileProcessingFrameId !== null && (cancelAnimationFrame(this.tileProcessingFrameId), this.tileProcessingFrameId = null);
			return;
		}
		this.pendingTileRequests.sort((e, t) => e.priority - t.priority);
		let e = Math.max(1, Math.ceil(this.pendingTileRequests.length / 2)), t = Math.min(D, e), n = this.pendingTileRequests.splice(0, t);
		for (let e of n) {
			let { key: t, priority: n } = e;
			if (this.loadingTiles.has(t) || this.tileCache.has(t)) continue;
			this.loadingTiles.set(t, { priority: n });
			let [r, i, a] = t.split("-").map(Number), o = k[a];
			this.worker.postMessage({
				type: "create-tile",
				payload: {
					x: r,
					y: i,
					lodLevel: a,
					lodConfig: o,
					imageWidth: this.imageWidth,
					imageHeight: this.imageHeight,
					key: t
				}
			});
		}
		this.pendingTileRequests.length > 0 && this.tileProcessingFrameId === null && (this.tileProcessingFrameId = requestAnimationFrame(() => {
			this.tileProcessingFrameId = null, this.processPendingTileRequests();
		}));
	}
	render() {
		let { gl: e } = this;
		if (!this.positionBuffer || !this.texCoordBuffer || this.contextLost) return;
		e.viewport(0, 0, this.canvas.width, this.canvas.height), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.useProgram(this.program), this.bindQuadBuffers(), e.uniform1i(this.renderModeLocation, 0);
		let t = this.selectOptimalLOD(), n = [], { cols: r, rows: i } = this.imageLoaded ? this.getTileGridSize(t) : {
			cols: 0,
			rows: 0
		};
		r * i;
		let a = 0;
		for (let r of this.currentVisibleTiles) {
			let i = this.tileCache.get(r);
			if (!i || !i.texture || i.lodLevel !== t) continue;
			a++;
			let o = this.createTileMatrix(i.x, i.y, i.lodLevel);
			e.uniformMatrix3fv(this.matrixLocation, !1, o), e.uniform1i(this.imageLocation, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, i.texture), e.drawArrays(e.TRIANGLES, 0, 6), this.tileOutlineEnabled && n.push(o);
		}
		this.texture && a === 0 && (e.uniformMatrix3fv(this.matrixLocation, !1, this.createMatrix()), e.uniform1i(this.imageLocation, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.texture), e.drawArrays(e.TRIANGLES, 0, 6)), this.drawTileOutlines(n), this.updateDebugInfo(), !this.isAnimating && performance.now() - this.lastTileUpdateTime > 100 && (this.lastTileUpdateTime = performance.now(), setTimeout(() => this.updateTileCache(), 0));
	}
	createTileMatrix(e, t, n) {
		let { cols: r, rows: i } = this.getTileGridSize(n), a = this.imageWidth / r, o = this.imageHeight / i, s = e * a, c = t * o, l = Math.min(this.imageWidth, (e + 1) * a), u = Math.min(this.imageHeight, (t + 1) * o), d = l - s, f = u - c, p = (s + l) / 2, m = (c + u) / 2, h = p - this.imageWidth / 2, g = m - this.imageHeight / 2, _ = this.canvasWidth / 2 + this.translateX + h * this.scale, v = this.canvasHeight / 2 + this.translateY + g * this.scale, y = d * this.scale, b = f * this.scale, x = y / this.canvasWidth, S = b / this.canvasHeight, C = _ * 2 / this.canvasWidth - 1, w = -(v * 2 / this.canvasHeight - 1), T = 1 / this.canvas.width, E = 1 / this.canvas.height;
		return new Float32Array([
			x + T,
			0,
			0,
			0,
			S + E,
			0,
			C,
			w,
			1
		]);
	}
	lastTileUpdateTime = 0;
	zoomIn(e = !1) {
		let t = this.canvasWidth / 2, n = this.canvasHeight / 2;
		this.zoomAt(t, n, 1 + this.config.wheel.step, e);
	}
	zoomOut(e = !1) {
		let t = this.canvasWidth / 2, n = this.canvasHeight / 2;
		this.zoomAt(t, n, 1 - this.config.wheel.step, e);
	}
	resetView() {
		let e = this.getFitToScreenScale() * this.config.initialScale;
		this.startAnimation(e, 0, 0);
	}
	getScale() {
		return this.scale;
	}
	updateCallbacks({ onZoomChange: e, onImageCopied: t, onLoadingStateChange: n }) {
		this.onZoomChange = e, this.onImageCopied = t, this.onLoadingStateChange = n;
	}
	updateInteractionConfig({ wheel: e, pinch: t, doubleClick: n, panning: r }) {
		this.config.wheel = e, this.config.pinch = t, this.config.doubleClick = n, this.config.panning = r, r.disabled && (this.isDragging = !1), t.disabled && (this.lastTouchDistance = 0);
	}
	setTileOutlineEnabled(e) {
		this.tileOutlineEnabled = e, this.render();
	}
	isTileOutlineEnabled() {
		return this.tileOutlineEnabled;
	}
	destroy() {
		window.removeEventListener("resize", this.boundResizeCanvas), this.canvas.removeEventListener("mousedown", this.boundHandleMouseDown), this.canvas.removeEventListener("mousemove", this.boundHandleMouseMove), this.canvas.removeEventListener("mouseup", this.boundHandleMouseUp), this.canvas.removeEventListener("wheel", this.boundHandleWheel), this.canvas.removeEventListener("dblclick", this.boundHandleDoubleClick), this.canvas.removeEventListener("touchstart", this.boundHandleTouchStart), this.canvas.removeEventListener("touchmove", this.boundHandleTouchMove), this.canvas.removeEventListener("touchend", this.boundHandleTouchEnd), this.canvas.removeEventListener("webglcontextlost", this.boundContextLost), this.canvas.removeEventListener("webglcontextrestored", this.boundContextRestored), this.cleanupLODTextures(), this.texture && this.gl.deleteTexture(this.texture), this.positionBuffer &&= (this.gl.deleteBuffer(this.positionBuffer), null), this.texCoordBuffer &&= (this.gl.deleteBuffer(this.texCoordBuffer), null), this.tileOutlineBuffer &&= (this.gl.deleteBuffer(this.tileOutlineBuffer), null), this.program && this.gl.deleteProgram(this.program), this.resizeObserver && this.resizeObserver.disconnect(), this.tileProcessingFrameId !== null && (cancelAnimationFrame(this.tileProcessingFrameId), this.tileProcessingFrameId = null), this.worker?.terminate();
	}
	updateDebugInfo() {
		if (!this.onDebugUpdate?.current) return;
		let e = this.getFitToScreenScale(), t = this.scale / e, n = e * this.config.maxScale, r = Math.max(n, 1), i = this.tileCache.size * 4 + this.lodTextures.size * 16, a = {
			cacheSize: this.tileCache.size,
			visibleTiles: this.currentVisibleTiles.size,
			loadingTiles: this.loadingTiles.size,
			pendingRequests: this.pendingTileRequests.length,
			cacheLimit: O,
			maxTilesPerFrame: D,
			tileSize: E,
			cacheKeys: Array.from(this.tileCache.keys()),
			visibleKeys: Array.from(this.currentVisibleTiles),
			loadingKeys: Array.from(this.loadingTiles.keys()),
			pendingKeys: this.pendingTileRequests.map((e) => e.key)
		};
		this.onDebugUpdate.current({
			scale: this.scale,
			relativeScale: t,
			translateX: this.translateX,
			translateY: this.translateY,
			currentLOD: this.currentLOD,
			lodLevels: k.length,
			canvasSize: {
				width: this.canvasWidth,
				height: this.canvasHeight
			},
			imageSize: {
				width: this.imageWidth,
				height: this.imageHeight
			},
			fitToScreenScale: e,
			userMaxScale: n,
			effectiveMaxScale: r,
			originalSizeScale: 1,
			renderCount: performance.now(),
			maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
			quality: this.currentQuality,
			isLoading: this.isLoadingTexture,
			memory: {
				textures: i,
				estimated: i,
				budget: 256,
				pressure: i / 256 * 100,
				activeLODs: this.lodTextures.size,
				maxConcurrentLODs: 3,
				onDemandStrategy: !0
			},
			tileOutlinesEnabled: this.tileOutlineEnabled,
			tileSystem: a
		});
	}
	notifyZoomChange() {
		if (this.onZoomChange) {
			let e = this.scale, t = this.getFitToScreenScale(), n = this.scale / t;
			this.onZoomChange(e, n);
		}
	}
	notifyLoadingStateChange(e, t, n) {
		this.onLoadingStateChange && this.onLoadingStateChange(e, t, n || this.currentQuality);
	}
	setupEventListeners() {
		this.canvas.addEventListener("mousedown", this.boundHandleMouseDown), this.canvas.addEventListener("mousemove", this.boundHandleMouseMove), this.canvas.addEventListener("mouseup", this.boundHandleMouseUp), this.canvas.addEventListener("wheel", this.boundHandleWheel), this.canvas.addEventListener("dblclick", this.boundHandleDoubleClick), this.canvas.addEventListener("touchstart", this.boundHandleTouchStart), this.canvas.addEventListener("touchmove", this.boundHandleTouchMove), this.canvas.addEventListener("touchend", this.boundHandleTouchEnd), this.canvas.addEventListener("webglcontextlost", this.boundContextLost), this.canvas.addEventListener("webglcontextrestored", this.boundContextRestored);
	}
	handleMouseDown(e) {
		this.isAnimating && (this.isAnimating = !1, this.animationStartLOD = -1), !this.config.panning.disabled && (this.isDragging = !0, this.lastMouseX = e.clientX, this.lastMouseY = e.clientY);
	}
	handleMouseMove(e) {
		if (!this.isDragging || this.config.panning.disabled) return;
		let t = e.clientX - this.lastMouseX, n = e.clientY - this.lastMouseY;
		this.translateX += t, this.translateY += n, this.lastMouseX = e.clientX, this.lastMouseY = e.clientY, this.constrainImagePosition(), this.render();
	}
	handleMouseUp() {
		this.isDragging = !1;
	}
	handleWheel(e) {
		if (e.preventDefault(), this.config.wheel.wheelDisabled) return;
		this.isAnimating && (this.isAnimating = !1, this.animationStartLOD = -1);
		let t = this.canvas.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = e.deltaY > 0 ? 1 - this.config.wheel.step : 1 + this.config.wheel.step;
		this.zoomAt(n, r, i);
	}
	handleDoubleClick(e) {
		if (e.preventDefault(), this.config.doubleClick.disabled) return;
		let t = Date.now();
		if (t - this.lastDoubleClickTime < 300) return;
		this.lastDoubleClickTime = t;
		let n = this.canvas.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top;
		this.performDoubleClickAction(r, i);
	}
	handleTouchStart(e) {
		let t = e.touches.length === 1 && (!this.config.panning.disabled || !this.config.doubleClick.disabled), n = e.touches.length === 2 && !this.config.pinch.disabled;
		if (!(!t && !n)) {
			if (e.preventDefault(), this.isAnimating && (this.isAnimating = !1, this.animationStartLOD = -1), e.touches.length === 1) {
				let t = e.touches[0], n = Date.now();
				if (!this.config.doubleClick.disabled && n - this.lastTouchTime < 300 && Math.abs(t.clientX - this.lastTouchX) < 50 && Math.abs(t.clientY - this.lastTouchY) < 50) {
					this.handleTouchDoubleTap(t.clientX, t.clientY), this.lastTouchTime = 0;
					return;
				}
				this.config.panning.disabled || (this.isDragging = !0, this.lastMouseX = t.clientX, this.lastMouseY = t.clientY), this.lastTouchTime = n, this.lastTouchX = t.clientX, this.lastTouchY = t.clientY;
			} else if (e.touches.length === 2 && !this.config.pinch.disabled) {
				this.isDragging = !1;
				let t = e.touches[0], n = e.touches[1];
				this.lastTouchDistance = Math.sqrt((n.clientX - t.clientX) ** 2 + (n.clientY - t.clientY) ** 2);
			}
		}
	}
	handleTouchMove(e) {
		if (e.touches.length === 1 && this.isDragging && !this.config.panning.disabled) {
			e.preventDefault();
			let t = e.touches[0].clientX - this.lastMouseX, n = e.touches[0].clientY - this.lastMouseY;
			this.translateX += t, this.translateY += n, this.lastMouseX = e.touches[0].clientX, this.lastMouseY = e.touches[0].clientY, this.constrainImagePosition(), this.render();
		} else if (e.touches.length === 2 && !this.config.pinch.disabled) {
			e.preventDefault();
			let t = e.touches[0], n = e.touches[1], r = Math.sqrt((n.clientX - t.clientX) ** 2 + (n.clientY - t.clientY) ** 2);
			if (this.lastTouchDistance > 0) {
				let e = r / this.lastTouchDistance, i = (t.clientX + n.clientX) / 2, a = (t.clientY + n.clientY) / 2, o = this.canvas.getBoundingClientRect();
				this.zoomAt(i - o.left, a - o.top, e);
			}
			this.lastTouchDistance = r;
		}
	}
	handleTouchEnd(e) {
		this.isDragging = !1, this.lastTouchDistance = 0;
	}
	handleTouchDoubleTap(e, t) {
		if (this.config.doubleClick.disabled) return;
		let n = this.canvas.getBoundingClientRect(), r = e - n.left, i = t - n.top;
		this.performDoubleClickAction(r, i);
	}
	performDoubleClickAction(e, t) {
		if (this.isAnimating = !1, this.animationStartLOD = -1, this.config.doubleClick.mode === "toggle") {
			let n = this.getFitToScreenScale(), r = n * this.config.minScale, i = n * this.config.maxScale, a = Math.max(i, 1);
			if (this.isOriginalSize) {
				let i = Math.max(r, Math.min(a, n)), o = (e - this.canvasWidth / 2 - this.translateX) / this.scale, s = (t - this.canvasHeight / 2 - this.translateY) / this.scale, c = e - this.canvasWidth / 2 - o * i, l = t - this.canvasHeight / 2 - s * i;
				this.startAnimation(i, c, l, this.config.doubleClick.animationTime), this.isOriginalSize = !1;
			} else {
				let n = Math.max(r, Math.min(a, 1)), i = (e - this.canvasWidth / 2 - this.translateX) / this.scale, o = (t - this.canvasHeight / 2 - this.translateY) / this.scale, s = e - this.canvasWidth / 2 - i * n, c = t - this.canvasHeight / 2 - o * n;
				this.startAnimation(n, s, c, this.config.doubleClick.animationTime), this.isOriginalSize = !0;
			}
		} else this.zoomAt(e, t, this.config.doubleClick.step, !0);
	}
	zoomAt(e, t, n, r = !1) {
		let i = this.scale * n, a = this.getFitToScreenScale(), o = a * this.config.minScale, s = a * this.config.maxScale;
		if (!(i < o || i > Math.max(s, 1))) if (r && this.config.smooth) {
			let n = (e - this.canvasWidth / 2 - this.translateX) / this.scale, r = (t - this.canvasHeight / 2 - this.translateY) / this.scale, a = e - this.canvasWidth / 2 - n * i, o = t - this.canvasHeight / 2 - r * i;
			this.startAnimation(i, a, o);
		} else {
			let n = (e - this.canvasWidth / 2 - this.translateX) / this.scale, r = (t - this.canvasHeight / 2 - this.translateY) / this.scale;
			this.scale = i, this.translateX = e - this.canvasWidth / 2 - n * this.scale, this.translateY = t - this.canvasHeight / 2 - r * this.scale, this.constrainImagePosition(), this.render(), this.notifyZoomChange();
		}
	}
	async copyOriginalImageToClipboard() {
		try {
			let e = await (await fetch(this.originalImageSrc)).blob();
			if (!navigator.clipboard || !navigator.clipboard.write) {
				console.warn("Clipboard API not supported");
				return;
			}
			let t = new ClipboardItem({ [e.type]: e });
			await navigator.clipboard.write([t]), this.onImageCopied && this.onImageCopied();
		} catch (e) {
			console.error("Failed to copy image to clipboard:", e);
		}
	}
}, j = ({ ref: o, src: s, imageBlob: c, className: h = "", width: g, height: v, initialScale: y = 1, minScale: x = .1, maxScale: S = 10, wheel: C = l, pinch: w = u, doubleClick: T = d, panning: E = f, limitToBounds: D = !0, centerOnInit: O = !0, smooth: k = !0, alignmentAnimation: j = p, velocityAnimation: M = m, onZoomChange: N, onImageCopied: P, onLoadingStateChange: F, debug: I = !1, ...L }) => {
	let R = i(null), z = i(null), [B, V] = a(!1), H = i((() => {})), U = !!I, W = r(() => ({
		...l,
		...C
	}), [C]), G = r(() => ({
		...u,
		...w
	}), [w]), K = r(() => ({
		...d,
		...T
	}), [T]), q = r(() => ({
		...f,
		...E
	}), [E]), J = r(() => ({
		...p,
		...j
	}), [j]), Y = r(() => ({
		...m,
		...M
	}), [M]), X = i({
		onZoomChange: N || (() => {}),
		onImageCopied: P || (() => {}),
		onLoadingStateChange: F || (() => {})
	});
	X.current = {
		onZoomChange: N || (() => {}),
		onImageCopied: P || (() => {}),
		onLoadingStateChange: F || (() => {})
	};
	let Z = i({
		wheel: W,
		pinch: G,
		doubleClick: K,
		panning: q
	});
	Z.current = {
		wheel: W,
		pinch: G,
		doubleClick: K,
		panning: q
	}, n(o, () => ({
		zoomIn: (e) => z.current?.zoomIn(e),
		zoomOut: (e) => z.current?.zoomOut(e),
		resetView: () => z.current?.resetView(),
		getScale: () => z.current?.getScale() || 1
	})), t(() => {
		if (!R.current) return;
		let e = new A(R.current, {
			src: s,
			className: "",
			width: g || 0,
			height: v || 0,
			initialScale: y,
			minScale: x,
			maxScale: S,
			wheel: Z.current.wheel,
			pinch: Z.current.pinch,
			doubleClick: Z.current.doubleClick,
			panning: Z.current.panning,
			limitToBounds: D,
			centerOnInit: O,
			smooth: k,
			alignmentAnimation: J,
			velocityAnimation: Y,
			onZoomChange: X.current.onZoomChange,
			onImageCopied: X.current.onImageCopied,
			onLoadingStateChange: X.current.onLoadingStateChange,
			debug: U
		}, U ? H : void 0);
		try {
			let t = g && g > 0 ? g : void 0, n = v && v > 0 ? v : void 0;
			e.loadImage(s, t, n, c).catch(console.error), z.current = e, V(e.isTileOutlineEnabled());
		} catch (e) {
			console.error("Failed to initialize WebGL Image Viewer:", e);
		}
		return () => {
			e?.destroy(), z.current = null;
		};
	}, [
		s,
		g,
		v,
		y,
		x,
		S,
		D,
		O,
		k,
		J,
		Y,
		U
	]), t(() => {
		z.current?.updateCallbacks(X.current);
	}, [
		N,
		P,
		F
	]), t(() => {
		z.current?.updateInteractionConfig(Z.current);
	}, [
		W,
		G,
		K,
		q
	]);
	let Q = e((e) => {
		V(e), z.current?.setTileOutlineEnabled(e);
	}, [V]);
	return /* @__PURE__ */ (0, _.jsxs)("div", {
		...L,
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			...L.style
		},
		children: [/* @__PURE__ */ (0, _.jsx)("canvas", {
			ref: R,
			className: h,
			style: {
				display: "block",
				width: "100%",
				height: "100%",
				touchAction: "none",
				border: "none",
				outline: "none",
				margin: 0,
				padding: 0,
				imageRendering: "auto",
				backfaceVisibility: "hidden",
				transform: "translateZ(0)"
			}
		}), I && /* @__PURE__ */ (0, _.jsx)(b, {
			outlineEnabled: B,
			onToggleOutline: Q,
			ref: (e) => {
				e && (H.current = e.updateDebugInfo);
			}
		})]
	});
};
j.displayName = "WebGLImageViewer";
//#endregion
export { c as LoadingState, j as WebGLImageViewer };
