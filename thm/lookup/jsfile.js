import {r as u, u as oe, j as e, L as K, N as Ue, X as Y, M as ze, b as J, R as le, A as ce, F as _e, I as Ge, T as Ve, P as qe, c as De, d as Z, H as de, C as me, e as fe, f as He, h as We, i as je, S as Je, k as xe, l as Ke, m as Le, U as Re, n as Ie, o as X, p as Ye, q as ne, t as Ze, v as Xe, w as we, x as Qe, y as Te, D as Se, z as et, B as tt, E as ve, G as st, J as rt, K as $e, O as at, Q as it, W as ue, V as nt, Y as ot, Z as lt, _ as ct, $ as dt, a0 as mt, a1 as xt, a2 as ut, a3 as pt, a4 as _, a5 as ht, a6 as gt} from "./vendor-react-BnOmnsbU.js";
import {h as A, ah as yt, ai as ft, aj as bt, ak as jt, al as te, am as ke, an as pe, ao as vt, S as Nt, N as be} from "./vendor-DnA5YKdn.js";
(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        n(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const p of i.addedNodes)
                    p.tagName === "LINK" && p.rel === "modulepreload" && n(p)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = r(l);
        fetch(l.href, i)
    }
}
)();
const wt = ({isTransparent: t=!1}) => {
    const [s,r] = u.useState(!1)
      , [n,l] = u.useState(!1)
      , i = oe();
    u.useEffect( () => {
        const h = () => {
            r(window.scrollY > 10)
        }
        ;
        return window.addEventListener("scroll", h),
        () => window.removeEventListener("scroll", h)
    }
    , []),
    u.useEffect( () => {
        l(!1)
    }
    , [i]);
    const p = [{
        name: "Home",
        path: "/"
    }, {
        name: "Sight Seeing",
        path: "/sight-seeing"
    }, {
        name: "Direct Travel",
        path: "/direct-travel"
    }, {
        name: "Contact",
        path: "/contact"
    }];
    return e.jsxs("header", {
        className: A("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6", s || n ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-4" : "bg-transparent shadow-none border-b-0 py-6"),
        children: [e.jsxs("div", {
            className: "container mx-auto flex items-center justify-between",
            children: [e.jsx(K, {
                to: "/",
                className: A("font-serif text-2xl font-bold transition-colors duration-300", t && !s && !n ? "text-white" : "text-[#064E3B]"),
                children: "Toils"
            }), e.jsx("nav", {
                className: "hidden md:flex items-center space-x-8",
                children: p.map(h => e.jsxs(Ue, {
                    to: h.path,
                    className: ({isActive: v}) => A("font-medium transition-colors duration-300 relative group hover:text-[#D97706]", t && !s ? "text-white" : "text-[#064E3B]", v && !h.path.startsWith("/#") ? "text-[#D97706]" : ""),
                    children: [h.name, e.jsx("span", {
                        className: A("absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full", t && !s ? "bg-white" : "bg-[#D97706]")
                    })]
                }, h.name))
            }), e.jsx("button", {
                className: A("md:hidden p-2 focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors duration-300", t && !s && !n ? "text-white" : "text-[#064E3B]"),
                onClick: () => l(!n),
                "aria-label": "Toggle menu",
                children: n ? e.jsx(Y, {
                    size: 24
                }) : e.jsx(ze, {
                    size: 24
                })
            })]
        }), e.jsx("div", {
            className: A("md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden", n ? "max-h-screen py-4" : "max-h-0"),
            children: e.jsx("nav", {
                className: "flex flex-col space-y-4 px-6 pb-6",
                children: p.map(h => e.jsx(K, {
                    to: h.path,
                    className: "text-[#064E3B] text-lg font-medium py-2 border-b border-gray-100 hover:text-[#D97706] transition-colors min-h-[48px] flex items-center",
                    children: h.name
                }, h.name))
            })
        })]
    })
}
  , St = () => e.jsxs("section", {
    className: "relative h-screen w-full overflow-hidden flex items-start justify-center pt-20",
    children: [e.jsxs("div", {
        className: "absolute inset-0 z-0 pointer-events-none",
        children: [e.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"
        }), e.jsx("div", {
            className: "absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        }), e.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#0D9488] to-[#064E3B] opacity-60 transition-transform duration-[20s] ease-in-out hover:scale-105",
            style: {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 45%, 75% 35%, 50% 50%, 25% 40%, 0% 55%)"
            }
        }), e.jsx("div", {
            className: "absolute bottom-20 left-0 right-0 h-32 bg-white/30 blur-2xl"
        }), e.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-[#0F766E] to-[#064E3B] opacity-80",
            style: {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 60%, 60% 40%, 0% 70%)"
            }
        }), e.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/40 to-transparent blur-xl"
        }), e.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-[35%] bg-primary",
            style: {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 80%, 40% 50%, 0% 80%)"
            }
        })]
    }), e.jsxs("div", {
        className: "relative z-10 w-full max-w-4xl px-4 text-center mt-10 h-full",
        children: [e.jsxs("h1", {
            className: "text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-6 animate-fade-in-up",
            children: ["Build your own ", e.jsx("span", {
                className: "text-orange-500",
                children: "Journey"
            }), e.jsx("span", {
                className: "block mt-6 text-lg md:text-2xl lg:text-3xl font-normal text-gray-700",
                children: "With Toils - Your favorite travel partner"
            })]
        }), e.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200 absolute left-0 right-0 bottom-[calc(28vh+200px)] px-4 sm:static sm:px-0 sm:bottom-auto",
            children: [e.jsx(K, {
                to: "/sight-seeing",
                className: "bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block",
                children: "Sight Seeing"
            }), e.jsx(K, {
                to: "/direct-travel",
                className: "bg-white/80 backdrop-blur-md text-primary border border-primary/20 px-8 py-3 rounded-full text-lg font-medium hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block",
                children: "Direct Travel"
            })]
        })]
    })]
})
  , he = ({xOffset: t, delay: s}) => e.jsxs("g", {
    transform: `translate(${t}, 0)`,
    children: [e.jsx("rect", {
        x: "-5",
        y: "45",
        width: "5",
        height: "4",
        fill: "#4B5563"
    }), e.jsxs("g", {
        className: "hover:-translate-y-1 transition-transform duration-300",
        children: [e.jsx("rect", {
            x: "0",
            y: "18",
            width: "75",
            height: "27",
            rx: "2",
            fill: "#1e3a8a"
        }), e.jsx("path", {
            d: "M-1 18 Q37.5 14 76 18 L76 20 L-1 20 Z",
            fill: "#374151"
        }), e.jsx("rect", {
            x: "0",
            y: "30",
            width: "75",
            height: "2",
            fill: "white",
            fillOpacity: "0.9"
        }), e.jsxs("g", {
            fill: "white",
            fillOpacity: "0.7",
            children: [e.jsx("rect", {
                x: "5",
                y: "22",
                width: "10",
                height: "6",
                rx: "1"
            }), e.jsx("rect", {
                x: "18",
                y: "22",
                width: "10",
                height: "6",
                rx: "1"
            }), e.jsx("rect", {
                x: "31",
                y: "22",
                width: "10",
                height: "6",
                rx: "1"
            }), e.jsx("rect", {
                x: "44",
                y: "22",
                width: "10",
                height: "6",
                rx: "1"
            }), e.jsx("rect", {
                x: "57",
                y: "22",
                width: "10",
                height: "6",
                rx: "1"
            })]
        }), e.jsx("rect", {
            x: "70",
            y: "20",
            width: "3",
            height: "23",
            fill: "black",
            fillOpacity: "0.2"
        })]
    }), e.jsxs("g", {
        className: "wheel-anim",
        style: {
            animationDelay: `${s}ms`
        },
        children: [e.jsx("circle", {
            cx: "15",
            cy: "50",
            r: "7",
            fill: "#1f2937"
        }), e.jsx("circle", {
            cx: "15",
            cy: "50",
            r: "3",
            fill: "#4b5563"
        }), e.jsx("line", {
            x1: "15",
            y1: "43",
            x2: "15",
            y2: "57",
            stroke: "#9ca3af",
            strokeWidth: "1"
        }), e.jsx("line", {
            x1: "8",
            y1: "50",
            x2: "22",
            y2: "50",
            stroke: "#9ca3af",
            strokeWidth: "1"
        })]
    }), e.jsxs("g", {
        className: "wheel-anim",
        style: {
            animationDelay: `${s}ms`
        },
        children: [e.jsx("circle", {
            cx: "60",
            cy: "50",
            r: "7",
            fill: "#1f2937"
        }), e.jsx("circle", {
            cx: "60",
            cy: "50",
            r: "3",
            fill: "#4b5563"
        }), e.jsx("line", {
            x1: "60",
            y1: "43",
            x2: "60",
            y2: "57",
            stroke: "#9ca3af",
            strokeWidth: "1"
        }), e.jsx("line", {
            x1: "53",
            y1: "50",
            x2: "67",
            y2: "50",
            stroke: "#9ca3af",
            strokeWidth: "1"
        })]
    })]
})
  , kt = () => {
    const t = u.useRef(null);
    return e.jsxs("section", {
        ref: t,
        className: "py-32 overflow-hidden bg-sky-50/50 relative",
        children: [e.jsx("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: e.jsx("div", {
                className: "absolute top-1/2 left-0 w-full h-4 mt-[10px] z-0",
                children: e.jsxs("div", {
                    className: "w-full h-full relative",
                    children: [e.jsx("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: "repeating-linear-gradient(90deg, #5D4037 0px, #5D4037 6px, transparent 6px, transparent 24px)"
                        }
                    }), e.jsx("div", {
                        className: "absolute top-[2px] w-full h-1 bg-gray-400"
                    }), " ", e.jsx("div", {
                        className: "absolute top-[10px] w-full h-1 bg-gray-500"
                    }), " "]
                })
            })
        }), e.jsxs("div", {
            className: "absolute inset-x-0 top-1/2 -translate-y-1/2 z-10",
            children: [e.jsx("style", {
                children: `
          @keyframes train-loop {
            from { transform: translateX(100vw); }
            to { transform: translateX(-100%); }
          }
          .train-moving {
            animation: train-loop 15s linear infinite;
            /* Ensures smoother animation on some devices */
            will-change: transform;
          }
        `
            }), e.jsx("div", {
                className: "relative inline-block train-moving",
                children: e.jsxs("div", {
                    className: "relative inline-block",
                    children: [e.jsx("style", {
                        children: `
               @keyframes smoke-puff {
                 0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                 100% { transform: translate(20px, -20px) scale(2.5); opacity: 0; }
               }
               .smoke-anim {
                 animation: smoke-puff 1.5s ease-out infinite;
               }
             `
                    }), e.jsxs("div", {
                        className: "absolute -top-4 left-[30px] flex z-20 pointer-events-none",
                        children: [e.jsx("div", {
                            className: "w-2 h-2 bg-gray-400 rounded-full smoke-anim",
                            style: {
                                animationDelay: "0ms"
                            }
                        }), e.jsx("div", {
                            className: "absolute w-3 h-3 bg-gray-300 rounded-full smoke-anim",
                            style: {
                                animationDelay: "300ms"
                            }
                        }), e.jsx("div", {
                            className: "absolute w-4 h-4 bg-gray-200 rounded-full smoke-anim",
                            style: {
                                animationDelay: "600ms"
                            }
                        })]
                    }), e.jsxs("svg", {
                        width: "400",
                        height: "60",
                        viewBox: "0 0 400 60",
                        fill: "none",
                        className: "drop-shadow-lg overflow-visible",
                        children: [e.jsx("style", {
                            children: `
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes rod-move {
                  0% { transform: translateX(0); }
                  50% { transform: translateX(3px); }
                  100% { transform: translateX(0); }
                }
                .wheel-anim {
                  animation: spin 2s linear infinite;
                  transform-box: fill-box;
                  transform-origin: center;
                }
                .rod-anim {
                  animation: rod-move 2s linear infinite;
                }
              `
                        }), e.jsxs("g", {
                            className: "text-blue-900",
                            children: [e.jsxs("g", {
                                children: [e.jsxs("g", {
                                    className: "wheel-anim",
                                    children: [e.jsx("circle", {
                                        cx: "20",
                                        cy: "50",
                                        r: "8",
                                        fill: "#1f2937"
                                    }), e.jsx("circle", {
                                        cx: "20",
                                        cy: "50",
                                        r: "3",
                                        fill: "#4b5563"
                                    }), e.jsx("line", {
                                        x1: "20",
                                        y1: "42",
                                        x2: "20",
                                        y2: "58",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    }), e.jsx("line", {
                                        x1: "12",
                                        y1: "50",
                                        x2: "28",
                                        y2: "50",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    })]
                                }), e.jsxs("g", {
                                    className: "wheel-anim",
                                    children: [e.jsx("circle", {
                                        cx: "45",
                                        cy: "50",
                                        r: "8",
                                        fill: "#1f2937"
                                    }), e.jsx("circle", {
                                        cx: "45",
                                        cy: "50",
                                        r: "3",
                                        fill: "#4b5563"
                                    }), e.jsx("line", {
                                        x1: "45",
                                        y1: "42",
                                        x2: "45",
                                        y2: "58",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    }), e.jsx("line", {
                                        x1: "37",
                                        y1: "50",
                                        x2: "53",
                                        y2: "50",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    })]
                                }), e.jsxs("g", {
                                    className: "wheel-anim",
                                    children: [e.jsx("circle", {
                                        cx: "75",
                                        cy: "50",
                                        r: "10",
                                        fill: "#1f2937"
                                    }), e.jsx("circle", {
                                        cx: "75",
                                        cy: "50",
                                        r: "4",
                                        fill: "#4b5563"
                                    }), e.jsx("line", {
                                        x1: "75",
                                        y1: "40",
                                        x2: "75",
                                        y2: "60",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    }), e.jsx("line", {
                                        x1: "65",
                                        y1: "50",
                                        x2: "85",
                                        y2: "50",
                                        stroke: "#9ca3af",
                                        strokeWidth: "1"
                                    })]
                                })]
                            }), e.jsx("rect", {
                                x: "20",
                                y: "48",
                                width: "55",
                                height: "4",
                                rx: "2",
                                fill: "#9ca3af",
                                className: "rod-anim"
                            }), e.jsx("path", {
                                d: "M10 40 L85 40 L85 20 L60 20 L60 10 L45 10 L45 20 L10 20 Z",
                                fill: "#1e3a8a"
                            }), e.jsx("path", {
                                d: "M85 40 L110 40 L110 15 L85 15 Z",
                                fill: "#1e3a8a"
                            }), e.jsx("path", {
                                d: "M82 15 L113 15 L113 17 L82 17 Z",
                                fill: "#374151"
                            }), e.jsx("rect", {
                                x: "90",
                                y: "20",
                                width: "15",
                                height: "10",
                                fill: "white",
                                fillOpacity: "0.5"
                            }), e.jsx("path", {
                                d: "M25 20 L25 5 L35 2 L40 5 L40 20 Z",
                                fill: "#1e3a8a"
                            }), e.jsx("rect", {
                                x: "23",
                                y: "2",
                                width: "20",
                                height: "3",
                                fill: "#374151"
                            }), e.jsx("path", {
                                d: "M10 40 L0 50 L10 50 Z",
                                fill: "#374151"
                            }), e.jsx("rect", {
                                x: "10",
                                y: "32",
                                width: "75",
                                height: "2",
                                fill: "white",
                                fillOpacity: "0.9"
                            })]
                        }), e.jsx(he, {
                            xOffset: 115,
                            delay: 100
                        }), e.jsx(he, {
                            xOffset: 195,
                            delay: 200
                        }), e.jsx(he, {
                            xOffset: 275,
                            delay: 300
                        })]
                    })]
                })
            })]
        })]
    })
}
  , ge = 3
  , Ct = 1e3
  , Pt = 1e4
  , $ = async (t, s="Database Operation") => {
    let r;
    for (let n = 1; n <= ge; n++)
        try {
            const l = new Promise( (p, h) => setTimeout( () => h(new Error("Request timed out")), Pt))
              , i = await Promise.race([t(), l]);
            if (i.error)
                throw i.error;
            return {
                data: i.data,
                error: null
            }
        } catch (l) {
            r = l;
            const i = Dt(l)
              , p = Ct * Math.pow(2, n - 1);
            if (console.warn(`[${s}] Attempt ${n}/${ge} failed:`, l.message || l),
            n < ge && i)
                console.log(`[${s}] Retrying in ${p}ms...`),
                await new Promise(h => setTimeout(h, p));
            else
                break
        }
    return Lt(s, r),
    {
        data: null,
        error: {
            message: r.message || "Unknown error occurred",
            details: r,
            context: s
        }
    }
}
  , Dt = t => {
    if (!t)
        return !1;
    const s = (t.message || "").toLowerCase()
      , r = t.code || t.status;
    return s.includes("network") || s.includes("timeout") || s.includes("fetch failed") || r === "500" || r === "502" || r === "503" || r === "504" ? !0 : !(r && r.toString().startsWith("4"))
}
  , Lt = (t, s) => {
    const n = {
        timestamp: new Date().toISOString(),
        context: t,
        message: s.message || "No error message",
        code: s.code || s.status || "UNKNOWN",
        stack: s.stack,
        raw: s
    };
    console.error(`🚨 [DB Error] ${t} failed permanently.`, n),
    typeof window < "u" && (window.__DB_ERRORS = window.__DB_ERRORS || [],
    window.__DB_ERRORS.push(n))
}
;
let se;
function D() {
    if (se)
        return se;
    const t = "https://bold-caiman-308.convex.cloud";
    return se = new yt(t),
    se
}
const L = bt;
ft();
const B = {
    async createRoute(t) {
        return $(async () => ({
            data: await D().mutation(L.routes.createRoute, {
                name: t.name,
                type: t.type,
                origin: t.origin,
                destination: t.destination,
                price4Seater: t.price4Seater,
                price6SeaterLuxurySuv: t.price6SeaterLuxurySuv,
                price6to10SeaterSuv: t.price6to10SeaterSuv,
                capacity: t.capacity,
                description: t.description,
                coverImage: t.coverImage
            }),
            error: null
        }), "Create Route")
    },
    async getRoutes() {
        return $(async () => ({
            data: await D().query(L.routes.getRoutes, {}),
            error: null
        }), "Get Routes")
    },
    async getTopBookedRoutes({limit: t=10, routeType: s}={}) {
        return $(async () => ({
            data: await D().query(L.routes.getTopBookedRoutes, {
                limit: t,
                routeType: s
            }),
            error: null
        }), "Get Top Booked Routes")
    },
    async updateRoute(t, s) {
        return $(async () => ({
            data: await D().mutation(L.routes.updateRoute, {
                id: t,
                name: s.name,
                type: s.type,
                origin: s.origin,
                destination: s.destination,
                price4Seater: s.price4Seater,
                price6SeaterLuxurySuv: s.price6SeaterLuxurySuv,
                price6to10SeaterSuv: s.price6to10SeaterSuv,
                capacity: s.capacity,
                description: s.description,
                coverImage: s.coverImage
            }),
            error: null
        }), `Update Route ${t}`)
    },
    async deleteRoute(t) {
        return $(async () => ({
            data: await D().mutation(L.routes.deleteRoute, {
                id: t
            }),
            error: null
        }), `Delete Route ${t}`)
    },
    async addStop(t) {
        if (!t.routeId)
            return {
                data: null,
                error: new Error("routeId is required to create a stop")
            };
        const s = {
            ...t,
            routeId: String(t.routeId)
        };
        return $(async () => ({
            data: await D().mutation(L.routes.addStop, {
                routeId: s.routeId,
                name: s.name,
                price4Seater: s.price4Seater,
                price6SeaterLuxurySuv: s.price6SeaterLuxurySuv,
                price6to10SeaterSuv: s.price6to10SeaterSuv,
                description: s.description
            }),
            error: null
        }), "Add Stop")
    },
    async getStopsByRouteId(t) {
        return $(async () => ({
            data: await D().query(L.routes.getStopsByRouteId, {
                routeId: t
            }),
            error: null
        }), `Get Stops for Route ${t}`)
    },
    async updateStop(t, s) {
        const r = {
            ...s
        };
        return r.routeId && (r.route_id = r.routeId,
        delete r.routeId),
        $(async () => ({
            data: await D().mutation(L.routes.updateStop, {
                id: t,
                name: r.name,
                price4Seater: r.price4Seater,
                price6SeaterLuxurySuv: r.price6SeaterLuxurySuv,
                price6to10SeaterSuv: r.price6to10SeaterSuv,
                description: r.description
            }),
            error: null
        }), `Update Stop ${t}`)
    },
    async deleteStop(t) {
        return $(async () => ({
            data: await D().mutation(L.routes.deleteStop, {
                id: t
            }),
            error: null
        }), `Delete Stop ${t}`)
    },
    async setDestinationStop(t, s) {
        const r = s ? {
            routeId: t,
            stopId: s
        } : {
            routeId: t
        };
        return $(async () => ({
            data: await D().mutation(L.routes.setDestinationStop, r),
            error: null
        }), "Set Destination Stop")
    },
    async uploadImage(t, s) {
        const r = await D().mutation(L.files.generateUploadUrl, {})
          , n = await fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": t.type || "application/octet-stream"
            },
            body: t
        });
        if (!n.ok)
            throw new Error("Failed to upload image");
        const {storageId: l} = await n.json()
          , i = await D().query(L.files.getFileUrl, {
            storageId: l
        });
        if (!i)
            throw new Error("Failed to get uploaded image url");
        return i
    },
    async addStopImages(t) {
        return $(async () => ({
            data: await D().mutation(L.routes.addStopImages, {
                images: t
            }),
            error: null
        }), "Add Stop Images")
    },
    async getStopImages(t) {
        return $(async () => ({
            data: await D().query(L.routes.getStopImages, {
                stopId: t
            }),
            error: null
        }), `Get Images for Stop ${t}`)
    }
}
  , Rt = [{
    label: "4 Seater",
    value: "4 Seater",
    priceKey: "price4Seater"
}, {
    label: "6 Seater Luxury SUV",
    value: "6 Seater Luxury SUV",
    priceKey: "price6SeaterLuxurySuv"
}, {
    label: "6-10 Seater SUV",
    value: "6-10 Seater SUV",
    priceKey: "price6to10SeaterSuv"
}]
  , Ee = ({isOpen: t, onClose: s, route: r, selectedCapacity: n, onSelect: l, title: i="Choose Vehicle"}) => {
    if (!t)
        return null;
    const p = (h, v) => {
        if (!h)
            return 0;
        const m = h[v] ?? h.basePrice ?? 0;
        return Number(m) || 0
    }
    ;
    return e.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
        children: e.jsxs("div", {
            className: "bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden",
            children: [e.jsxs("div", {
                className: "flex justify-between items-center p-6 border-b border-gray-100",
                children: [e.jsxs("div", {
                    children: [e.jsx("h3", {
                        className: "text-xl font-semibold text-gray-900",
                        children: i
                    }), r && e.jsxs("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: [r.origin, " to ", r.destination]
                    })]
                }), e.jsx("button", {
                    onClick: s,
                    className: "text-gray-400 hover:text-gray-700",
                    children: e.jsx(Y, {
                        className: "w-6 h-6"
                    })
                })]
            }), e.jsx("div", {
                className: "p-6 space-y-3",
                children: Rt.map(h => {
                    const v = p(r, h.priceKey)
                      , m = String(n || "").toLowerCase() === String(h.value).toLowerCase();
                    return e.jsxs("button", {
                        onClick: () => l && l(h.value),
                        className: `w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-colors text-left ${m ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40 hover:bg-gray-50"}`,
                        children: [e.jsxs("div", {
                            children: [e.jsx("div", {
                                className: "font-semibold text-gray-900",
                                children: h.label
                            }), e.jsx("div", {
                                className: "text-xs text-gray-500 mt-0.5",
                                children: "Tap to select"
                            })]
                        }), e.jsx("div", {
                            className: "text-right",
                            children: e.jsxs("div", {
                                className: "text-lg font-bold text-primary",
                                children: ["₹", v]
                            })
                        })]
                    }, h.value)
                }
                )
            }), e.jsx("div", {
                className: "px-6 pb-6",
                children: e.jsx("button", {
                    type: "button",
                    onClick: s,
                    className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                    children: "Cancel"
                })
            })]
        })
    })
}
  , W = t => (t || "").toString().toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
  , Q = (t, s=null) => {
    const r = W(t.type || "route")
      , n = W(t.origin)
      , l = W(t.destination);
    let i = `/route/${r}_${n}-${l}`;
    return s && (i += `/${W(s)}`),
    i
}
  , It = (t, s) => !s || !t || t.length === 0 ? null : t.find(r => {
    const n = W(r.type || "route")
      , l = W(r.origin)
      , i = W(r.destination);
    return `${n}_${l}-${i}` === s
}
)
  , Tt = t => t ? {
    "4-seater": "4 Seater",
    "6-seater-luxury-suv": "6 Seater Luxury SUV",
    "6-10-seater-suv": "6-10 Seater SUV"
}[t] || t.replace(/-/g, " ") : ""
  , $t = () => {
    const [t,s] = u.useState([])
      , r = J()
      , [n,l] = u.useState(!1)
      , [i,p] = u.useState(null)
      , h = c => {
        const x = c.price4Seater ?? c.basePrice
          , d = c.price6SeaterLuxurySuv ?? c.basePrice
          , a = c.price6to10SeaterSuv ?? c.basePrice;
        return `₹${x} / ₹${d} / ₹${a}`
    }
    ;
    if (u.useEffect( () => {
        (async () => {
            try {
                const {data: x, error: d} = await B.getTopBookedRoutes({
                    limit: 10,
                    routeType: "sightseeing"
                });
                !d && x && s(x.slice(0, 10))
            } catch (x) {
                console.error("Failed to fetch routes for ticker", x)
            }
        }
        )()
    }
    , []),
    t.length === 0)
        return null;
    const v = c => {
        p(c),
        l(!0)
    }
      , m = () => {
        l(!1),
        p(null)
    }
      , g = c => {
        if (!i)
            return;
        const x = Q(i, c);
        m(),
        r(x)
    }
    ;
    return e.jsxs("section", {
        className: "py-12 bg-white relative z-20 border-b border-gray-100",
        children: [e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [e.jsx("h2", {
                className: "text-3xl md:text-4xl font-serif text-primary mb-8 text-center",
                children: "Popular Sight Seeing"
            }), e.jsx("div", {
                className: "flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-4",
                style: {
                    scrollBehavior: "smooth"
                },
                children: t.map(c => e.jsxs("div", {
                    onClick: () => v(c),
                    className: "flex-shrink-0 w-80 md:w-96 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer snap-center group",
                    children: [e.jsxs("div", {
                        className: "w-full relative overflow-hidden bg-gray-100 aspect-[3/2]",
                        children: [c.coverImage ? e.jsx("img", {
                            src: c.coverImage,
                            alt: `${c.origin} to ${c.destination}`,
                            className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        }) : e.jsx("div", {
                            className: "w-full h-full flex items-center justify-center text-gray-300",
                            children: e.jsx(le, {
                                className: "w-12 h-12"
                            })
                        }), e.jsx("div", {
                            className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm",
                            children: h(c)
                        })]
                    }), e.jsxs("div", {
                        className: "p-6",
                        children: [e.jsx("div", {
                            className: "flex justify-between items-start mb-2",
                            children: e.jsx("span", {
                                className: "text-xs font-bold text-accent uppercase tracking-wider",
                                children: "Sight Seeing"
                            })
                        }), e.jsx("h3", {
                            className: "font-serif text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors",
                            children: c.name || e.jsxs(e.Fragment, {
                                children: [c.origin, " ", e.jsx("span", {
                                    className: "text-gray-400 mx-1",
                                    children: "to"
                                }), " ", c.destination]
                            })
                        }), c.name && c.origin && c.destination && e.jsxs("div", {
                            className: "text-xs text-gray-500 mb-2",
                            children: [c.origin, " ", e.jsx("span", {
                                className: "mx-1",
                                children: "→"
                            }), " ", c.destination]
                        }), e.jsx("p", {
                            className: "text-sm text-gray-500 whitespace-pre-line line-clamp-3 md:line-clamp-4 mb-4",
                            children: c.description || `Enjoy a scenic journey from ${c.origin} to ${c.destination}.`
                        }), e.jsx("div", {
                            className: "flex items-center justify-end pt-4 border-t border-gray-50",
                            children: e.jsxs("button", {
                                type: "button",
                                onClick: x => {
                                    x.preventDefault(),
                                    x.stopPropagation(),
                                    v(c)
                                }
                                ,
                                className: "flex items-center gap-1 text-sm text-primary font-bold group-hover:gap-2 transition-all",
                                children: ["Book Now ", e.jsx(ce, {
                                    className: "w-4 h-4"
                                })]
                            })
                        })]
                    })]
                }, c.id))
            })]
        }), e.jsx(Ee, {
            isOpen: n,
            onClose: m,
            route: i,
            selectedCapacity: i == null ? void 0 : i.capacity,
            onSelect: g,
            title: "Select car & continue"
        })]
    })
}
  , Et = () => {
    const t = [{
        name: "Home",
        path: "/"
    }, {
        name: "Sight Seeing",
        path: "/sight-seeing"
    }, {
        name: "Direct Travel",
        path: "/direct-travel"
    }, {
        name: "Contact",
        path: "/contact"
    }];
    return e.jsx("footer", {
        id: "contact",
        className: "bg-primary text-white pt-20 pb-10",
        children: e.jsxs("div", {
            className: "container mx-auto px-4 md:px-8",
            children: [e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16",
                children: [e.jsxs("div", {
                    className: "space-y-6",
                    children: [e.jsx("h2", {
                        className: "font-serif text-3xl font-bold",
                        children: "Toils"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed max-w-sm",
                        children: ["Toils is a new company redefining how Darjeeling is experienced.", e.jsx("br", {}), "Through a platform built for personalization, transparency, and complete flexibility — every journey is shaped entirely by you."]
                    }), e.jsxs("div", {
                        className: "flex space-x-4",
                        children: [e.jsx("a", {
                            href: "#",
                            className: "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300",
                            children: e.jsx(_e, {
                                size: 18
                            })
                        }), e.jsx("a", {
                            href: "#",
                            className: "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300",
                            children: e.jsx(Ge, {
                                size: 18
                            })
                        }), e.jsx("a", {
                            href: "#",
                            className: "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300",
                            children: e.jsx(Ve, {
                                size: 18
                            })
                        })]
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        className: "text-accent font-serif text-xl mb-6",
                        children: "Quick Links"
                    }), e.jsx("ul", {
                        className: "space-y-4",
                        children: t.map(s => e.jsx("li", {
                            children: e.jsxs(K, {
                                to: s.path,
                                className: "text-gray-300 hover:text-white transition-colors flex items-center",
                                children: [e.jsx("span", {
                                    className: "w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                }), s.name]
                            })
                        }, s.name))
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        className: "text-accent font-serif text-xl mb-6",
                        children: "Contact Us"
                    }), e.jsxs("ul", {
                        className: "space-y-6",
                        children: [e.jsxs("li", {
                            className: "flex items-center",
                            children: [e.jsx(qe, {
                                className: "w-5 h-5 text-accent mr-4 flex-shrink-0"
                            }), e.jsx("a", {
                                className: "text-gray-300 hover:text-white transition-colors",
                                href: "tel:+918170848914",
                                children: "+91 8170848914"
                            })]
                        }), e.jsxs("li", {
                            className: "flex items-center",
                            children: [e.jsx(De, {
                                className: "w-5 h-5 text-accent mr-4 flex-shrink-0"
                            }), e.jsx("a", {
                                className: "text-gray-300 hover:text-white transition-colors",
                                href: "mailto:toilsdarjeeling@gmail.com",
                                children: "toilsdarjeeling@gmail.com"
                            })]
                        })]
                    })]
                })]
            }), e.jsx("div", {
                className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400",
                children: e.jsxs("div", {
                    className: "flex space-x-6 mt-4 md:mt-0",
                    children: [e.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Privacy Policy"
                    }), e.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Terms of Service"
                    })]
                })
            })]
        })
    })
}
  , Bt = () => e.jsxs("section", {
    className: "relative h-[30vh] min-h-[250px] w-full overflow-hidden flex items-center justify-center bg-primary",
    children: [e.jsxs("div", {
        className: "absolute inset-0 opacity-80",
        children: [e.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-primary via-[#0D9488] to-[#064E3B]"
        }), e.jsx("div", {
            className: "absolute inset-0 opacity-30",
            style: {
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                backgroundSize: "30px 30px"
            }
        })]
    }), e.jsxs("div", {
        className: "relative z-10 text-center px-4",
        children: [e.jsx("h1", {
            className: "text-3xl md:text-5xl font-serif text-white mb-2 drop-shadow-lg",
            children: "Customised Cabs"
        }), e.jsx("p", {
            className: "text-white/80 text-sm md:text-base max-w-lg mx-auto font-light",
            children: "Choose your stops. Pay only for where you want to travel."
        })]
    })]
})
  , At = ({activeCategory: t, setActiveCategory: s, activeFilter: r, setActiveFilter: n}) => {
    var x;
    const [l,i] = u.useState(!1)
      , [p,h] = u.useState(!1)
      , v = [{
        id: "routes",
        label: "Sight Seeing",
        icon: le
    }, {
        id: "direct",
        label: "Direct Travel",
        icon: me
    }]
      , m = ["Popular", "All", "Price: Low to High", "Price: High to Low"]
      , g = (x = v.find(d => d.id === t)) == null ? void 0 : x.label
      , c = r.replace("Price: ", "");
    return e.jsx("div", {
        className: "sticky top-[72px] md:top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300",
        children: e.jsxs("div", {
            className: "container mx-auto px-4 py-4 md:py-4",
            children: [e.jsxs("div", {
                className: "md:hidden grid grid-cols-2 gap-4",
                children: [e.jsxs("div", {
                    className: "relative",
                    children: [e.jsxs("button", {
                        onClick: () => {
                            i(!l),
                            h(!1)
                        }
                        ,
                        className: "w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white border border-gray-200 text-primary font-medium shadow-sm active:bg-gray-50 transition-colors h-[50px]",
                        children: [e.jsx("span", {
                            className: "mr-2 flex-1 text-center text-xs leading-tight line-clamp-2",
                            children: g
                        }), e.jsx(fe, {
                            className: A("w-4 h-4 flex-shrink-0 transition-transform duration-300", l && "rotate-180")
                        })]
                    }), e.jsx("div", {
                        className: A("absolute top-full left-0 w-[200%] mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 origin-top z-50", l ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"),
                        children: v.map(d => {
                            const a = d.icon;
                            return e.jsxs("button", {
                                onClick: () => {
                                    s(d.id),
                                    i(!1)
                                }
                                ,
                                className: A("w-full flex items-center px-4 py-3 text-left transition-colors", t === d.id ? "bg-primary/5 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"),
                                children: [e.jsx(a, {
                                    className: "w-4 h-4 mr-3"
                                }), d.label]
                            }, d.id)
                        }
                        )
                    })]
                }), e.jsxs("div", {
                    className: "relative",
                    children: [e.jsxs("button", {
                        onClick: () => {
                            h(!p),
                            i(!1)
                        }
                        ,
                        className: "w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium shadow-sm active:bg-gray-50 transition-colors h-[50px]",
                        children: [e.jsx("span", {
                            className: "mr-2 flex-1 text-center text-xs leading-tight line-clamp-2",
                            children: c
                        }), e.jsx(fe, {
                            className: A("w-4 h-4 flex-shrink-0 transition-transform duration-300", p && "rotate-180")
                        })]
                    }), e.jsx("div", {
                        className: A("absolute top-full right-0 w-[200%] mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 origin-top z-50", p ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"),
                        children: m.map(d => e.jsx("button", {
                            onClick: () => {
                                n(d),
                                h(!1)
                            }
                            ,
                            className: A("w-full px-4 py-3 text-left transition-colors text-sm", r === d ? "bg-primary/5 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"),
                            children: d.replace("Price: ", "")
                        }, d))
                    })]
                })]
            }), e.jsx("div", {
                className: "hidden md:flex space-x-4 min-w-max overflow-x-auto no-scrollbar",
                children: v.map(d => {
                    const a = d.icon
                      , o = t === d.id;
                    return e.jsxs("button", {
                        onClick: () => s(d.id),
                        className: A("flex items-center px-4 py-2.5 rounded-full text-base font-medium transition-all duration-300 border", o ? "bg-primary text-white border-primary shadow-md transform scale-105" : "bg-white text-primary border-gray-200 hover:border-primary hover:bg-gray-50"),
                        children: [e.jsx(a, {
                            className: A("w-4 h-4 mr-2", o ? "text-accent" : "text-primary")
                        }), d.label]
                    }, d.id)
                }
                )
            })]
        })
    })
}
  , Mt = ({activeFilter: t, setActiveFilter: s}) => {
    const r = ["Popular", "All", "Price: Low to High", "Price: High to Low"];
    return e.jsx("div", {
        className: "bg-secondary/50 py-3 border-b border-gray-200 hidden md:block",
        children: e.jsxs("div", {
            className: "container mx-auto px-4 flex items-center space-x-3 overflow-x-auto no-scrollbar",
            children: [e.jsx(He, {
                className: "w-4 h-4 text-gray-500 flex-shrink-0"
            }), r.map(n => e.jsx("button", {
                onClick: () => s(n),
                className: A("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", t === n ? "bg-primary/10 text-primary border border-primary/20" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"),
                children: n
            }, n))]
        })
    })
}
  , Ft = ({item: t, category: s, onNavigate: r}) => {
    const n = J()
      , [l,i] = u.useState(!1)
      , [p,h] = u.useState("")
      , v = o => {
        const y = String(o || "").toLowerCase();
        return y.includes("luxury") ? "6 Seater Luxury SUV" : y.includes("6-10") || y.includes("6 to 10") || y.includes("6–10") ? "6-10 Seater SUV" : y.includes("4") ? "4 Seater" : ""
    }
    ;
    u.useEffect( () => {
        const o = v(t == null ? void 0 : t.capacity);
        h(o || "")
    }
    , [t == null ? void 0 : t.id]);
    const g = ( () => {
        switch (s) {
        case "routes":
            return {
                background: "#064E3B",
                iconBg: "bg-accent",
                iconColor: "text-white"
            };
        case "direct":
            return {
                background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                iconBg: "bg-white",
                iconColor: "text-blue-600"
            };
        default:
            return {
                background: "#F3F4F6"
            }
        }
    }
    )()
      , c = s === "direct" ? me : le
      , x = () => {
        s === "routes" || s === "direct" ? r("route-details", t) : console.log("Navigate to details for", s, t.id)
    }
      , d = () => {
        if (s === "routes" || s === "direct") {
            i(!0);
            return
        }
        x()
    }
      , a = o => {
        h(o),
        i(!1),
        n(Q({
            type: t.originalType,
            origin: t.origin,
            destination: t.destination
        }, o))
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            onClick: () => d(),
            className: "group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col h-full",
            children: [e.jsxs("div", {
                className: "w-full relative overflow-hidden bg-gray-100 aspect-[3/2]",
                children: [t.image ? e.jsx("img", {
                    src: t.image,
                    alt: t.title,
                    className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                }) : e.jsx("div", {
                    className: A("w-full h-full flex items-center justify-center shadow-lg z-10", g.iconBg),
                    children: e.jsx(c, {
                        className: A("w-12 h-12", g.iconColor)
                    })
                }), e.jsx("div", {
                    className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm",
                    children: t.price
                })]
            }), e.jsxs("div", {
                className: "p-6 flex-1 flex flex-col",
                children: [e.jsx("div", {
                    className: "flex justify-between items-start mb-2",
                    children: e.jsx("span", {
                        className: "text-xs font-bold text-accent uppercase tracking-wider",
                        children: t.type
                    })
                }), e.jsx("h3", {
                    className: "font-serif text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors",
                    children: t.title
                }), (s === "routes" || s === "direct") && t.origin && t.destination && t.title !== `${t.origin} to ${t.destination}` && e.jsxs("div", {
                    className: "text-xs text-gray-500 mb-2",
                    children: [t.origin, " ", e.jsx("span", {
                        className: "mx-1",
                        children: "→"
                    }), " ", t.destination]
                }), e.jsx("p", {
                    className: "text-sm text-gray-500 whitespace-pre-line line-clamp-3 md:line-clamp-4 mb-4 flex-1",
                    children: t.description
                }), e.jsx("div", {
                    className: "flex items-center justify-end pt-4 border-t border-gray-50 mt-auto",
                    children: e.jsxs("button", {
                        type: "button",
                        onClick: o => {
                            o.preventDefault(),
                            o.stopPropagation(),
                            d()
                        }
                        ,
                        className: "flex items-center gap-1 text-sm text-primary font-bold group-hover:gap-2 transition-all",
                        children: ["Book Now ", e.jsx(ce, {
                            className: "w-4 h-4"
                        })]
                    })
                })]
            })]
        }), e.jsx(Ee, {
            isOpen: l,
            onClose: () => i(!1),
            route: t,
            selectedCapacity: p,
            onSelect: a,
            title: "Choose Vehicle"
        })]
    })
}
  , Ce = ({initialCategory: t="routes", onNavigate: s}) => {
    const [r,n] = u.useState( () => t === "direct" || t === "routes" ? t : "routes")
      , [l,i] = u.useState("Popular")
      , p = J()
      , [h,v] = u.useState([])
      , [m,g] = u.useState(!1);
    Z.useEffect( () => {
        n(t === "direct" || t === "routes" ? t : "routes"),
        window.scrollTo(0, 0)
    }
    , [t]),
    u.useEffect( () => {
        (r === "routes" || r === "direct") && (async () => {
            g(!0);
            try {
                const {data: d} = await B.getRoutes();
                v(d || [])
            } catch (d) {
                console.error("Failed to fetch routes", d)
            } finally {
                g(!1)
            }
        }
        )()
    }
    , [r]);
    const c = u.useMemo( () => {
        let x = [];
        const d = a => {
            const o = a.price4Seater ?? a.basePrice
              , y = a.price6SeaterLuxurySuv ?? a.basePrice
              , N = a.price6to10SeaterSuv ?? a.basePrice;
            return `₹${o} | ₹${y} | ₹${N}`
        }
        ;
        return r === "routes" ? x = h.filter(a => !a.type || a.type === "sightseeing").map(a => ({
            id: a.id,
            title: a.name || `${a.origin} to ${a.destination}`,
            type: "Sight Seeing",
            price: d(a),
            duration: "Flexible",
            capacity: a.capacity,
            description: a.description || `Journey from ${a.origin} to ${a.destination}`,
            tags: ["Route", "Travel"],
            image: a.coverImage,
            origin: a.origin,
            destination: a.destination,
            basePrice: a.basePrice,
            price4Seater: a.price4Seater,
            price6SeaterLuxurySuv: a.price6SeaterLuxurySuv,
            price6to10SeaterSuv: a.price6to10SeaterSuv,
            bookingCount: a.bookingCount ?? 0,
            originalType: a.type || "sightseeing"
        })) : r === "direct" ? x = h.filter(a => a.type === "direct").map(a => ({
            id: a.id,
            title: a.name || `${a.origin} to ${a.destination}`,
            type: "Direct Travel",
            price: d(a),
            duration: "Point to Point",
            capacity: a.capacity,
            description: a.description || `Direct travel from ${a.origin} to ${a.destination}`,
            tags: ["Direct", "Transfer"],
            image: a.coverImage,
            origin: a.origin,
            destination: a.destination,
            basePrice: a.basePrice,
            price4Seater: a.price4Seater,
            price6SeaterLuxurySuv: a.price6SeaterLuxurySuv,
            price6to10SeaterSuv: a.price6to10SeaterSuv,
            bookingCount: a.bookingCount ?? 0,
            originalType: a.type || "direct"
        })) : x = [],
        l === "Popular" ? [...x].sort( (a, o) => {
            const y = Number(a.bookingCount ?? 0)
              , N = Number(o.bookingCount ?? 0);
            return N !== y ? N - y : String(a.title || "").localeCompare(String(o.title || ""))
        }
        ) : l === "Price: Low to High" ? [...x].sort( (a, o) => {
            var w, f;
            const y = typeof a.price == "number" ? a.price : parseFloat(((w = a.price) == null ? void 0 : w.replace(/[^0-9.]/g, "")) || 0)
              , N = typeof o.price == "number" ? o.price : parseFloat(((f = o.price) == null ? void 0 : f.replace(/[^0-9.]/g, "")) || 0);
            return y - N
        }
        ) : l === "Price: High to Low" ? [...x].sort( (a, o) => {
            var w, f;
            const y = typeof a.price == "number" ? a.price : parseFloat(((w = a.price) == null ? void 0 : w.replace(/[^0-9.]/g, "")) || 0);
            return (typeof o.price == "number" ? o.price : parseFloat(((f = o.price) == null ? void 0 : f.replace(/[^0-9.]/g, "")) || 0)) - y
        }
        ) : x
    }
    , [r, l, h]);
    return e.jsxs("div", {
        className: "min-h-screen bg-snow pb-20",
        children: [e.jsxs(de, {
            children: [e.jsx("title", {
                children: r === "routes" ? "Darjeeling Sightseeing Packages & Tours | Toils Darjeeling" : "Direct Travel & Cab Booking in Darjeeling | Toils Darjeeling"
            }), e.jsx("meta", {
                name: "description",
                content: r === "routes" ? "Explore the best sightseeing packages in Darjeeling, Gangtok, and Kalimpong. Book custom tours with experienced drivers." : "Book direct cabs for NJP, Bagdogra, Darjeeling, and Gangtok. Affordable and reliable point-to-point taxi services."
            })]
        }), e.jsx(Bt, {}), e.jsx(At, {
            activeCategory: r,
            setActiveCategory: n,
            activeFilter: l,
            setActiveFilter: i
        }), e.jsx(Mt, {
            activeFilter: l,
            setActiveFilter: i
        }), e.jsx("main", {
            className: "container mx-auto px-4 py-8",
            children: e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                children: [(r === "routes" || r === "direct") && m ? e.jsx("div", {
                    className: "col-span-full text-center py-12 text-gray-500",
                    children: "Loading routes..."
                }) : c.map(x => e.jsx(Ft, {
                    item: x,
                    category: r,
                    onNavigate: (d, a) => {
                        d === "route-details" ? p(Q({
                            type: a.originalType,
                            origin: a.origin,
                            destination: a.destination
                        })) : d === "experiences" && p("/sight-seeing")
                    }
                }, x.id)), !m && c.length === 0 && e.jsx("div", {
                    className: "col-span-full text-center py-12 text-gray-500",
                    children: "No items found in this category."
                })]
            })
        })]
    })
}
  , Ot = {
    stays: [{
        id: "s1",
        title: "Glenary's View Suite",
        type: "Heritage Stay",
        duration: "Per Night",
        capacity: "2 Guests",
        price: "₹8,500",
        description: "Colonial-era suite with panoramic views of Kanchenjunga.",
        tags: ["Heritage", "View", "Breakfast"]
    }, {
        id: "s2",
        title: "Windamere Colonial Room",
        type: "Heritage Stay",
        duration: "Per Night",
        capacity: "2 Guests",
        price: "₹12,000",
        description: "Experience the Raj era in this historic property on the Mall.",
        tags: ["Luxury", "History", "Dining"]
    }, {
        id: "s3",
        title: "Tea Planter's Bungalow",
        type: "Heritage Stay",
        duration: "Per Night",
        capacity: "4 Guests",
        price: "₹15,000",
        description: "Stay amidst lush tea gardens in a restored 19th-century bungalow.",
        tags: ["Nature", "Private", "Guided Tour"]
    }, {
        id: "s4",
        title: "The Elgin Silver Oak",
        type: "Heritage Stay",
        duration: "Per Night",
        capacity: "2 Guests",
        price: "₹9,500",
        description: "A tribute to the rich history of Darjeeling with modern comforts.",
        tags: ["Central", "Spa", "Heritage"]
    }],
    cabs: [{
        id: "c1",
        title: "Innova Crysta Premium",
        type: "Expert Cab",
        duration: "Full Day (8 hrs)",
        capacity: "6 Guests",
        price: "₹4,500",
        description: "Luxury MPV for comfortable sightseeing across Darjeeling.",
        tags: ["AC", "Comfort", "Experienced Driver"]
    }, {
        id: "c2",
        title: "Land Rover Vintage Tour",
        type: "Expert Cab",
        duration: "4 Hours",
        capacity: "4 Guests",
        price: "₹6,000",
        description: "Classic Land Rover experience to Sandakphu or local points.",
        tags: ["Adventure", "Vintage", "Off-road"]
    }, {
        id: "c3",
        title: "Dzire Sedan Comfort",
        type: "Expert Cab",
        duration: "Point to Point",
        capacity: "4 Guests",
        price: "₹1,200",
        description: "Reliable sedan for airport transfers and local drops.",
        tags: ["Budget", "Quick", "Airport"]
    }],
    tours: [{
        id: "t1",
        title: "Makaibari Tea Processing",
        type: "Tea Tour",
        duration: "3 Hours",
        capacity: "Group",
        price: "₹1,500",
        description: "Witness the journey of organic tea from plucking to processing.",
        tags: ["Educational", "Tasting", "Organic"]
    }, {
        id: "t2",
        title: "Glenburn Estate Walk",
        type: "Tea Tour",
        duration: "Half Day",
        capacity: "Small Group",
        price: "₹3,500",
        description: "Guided nature walk through tea bushes and river banks.",
        tags: ["Nature", "Lunch", "Scenic"]
    }, {
        id: "t3",
        title: "Happy Valley Tasting",
        type: "Tea Tour",
        duration: "2 Hours",
        capacity: "Any",
        price: "₹800",
        description: "Learn professional tea tasting techniques at Happy Valley.",
        tags: ["Tasting", "Close to Town"]
    }],
    packages: [{
        id: "p1",
        title: "Himalayan Explorer",
        type: "Package",
        duration: "4 Days / 3 Nights",
        capacity: "Couple",
        price: "₹25,000",
        description: "Complete Darjeeling experience including stays, cabs, and tours.",
        tags: ["All-inclusive", "Best Seller"]
    }, {
        id: "p2",
        title: "Romantic Getaway",
        type: "Package",
        duration: "3 Days / 2 Nights",
        capacity: "Couple",
        price: "₹18,000",
        description: "Candlelight dinners, private tours, and luxury heritage stay.",
        tags: ["Honeymoon", "Luxury"]
    }, {
        id: "p3",
        title: "Adventure & Tea",
        type: "Package",
        duration: "5 Days / 4 Nights",
        capacity: "Group (4+)",
        price: "₹15,000/person",
        description: "Trekking, rafting, and extensive tea garden explorations.",
        tags: ["Adventure", "Active"]
    }],
    routes: [],
    rooms: [],
    room_images: []
}
  , Be = u.createContext()
  , Ae = () => {
    const t = u.useContext(Be);
    if (!t)
        throw new Error("useAdmin must be used within an AdminProvider");
    return t
}
  , Ut = ({children: t}) => {
    const [s,r] = u.useState(!1)
      , [n,l] = u.useState(!1)
      , [i,p] = u.useState({
        stays: [],
        cabs: [],
        tours: [],
        packages: [],
        routes: [],
        rooms: [],
        room_images: []
    })
      , h = () => {
        const a = localStorage.getItem("adminData");
        if (a) {
            const o = JSON.parse(a);
            p({
                stays: o.stays || [],
                cabs: o.cabs || [],
                tours: o.tours || [],
                packages: o.packages || [],
                routes: o.routes || [],
                rooms: o.rooms || [],
                room_images: o.room_images || []
            })
        }
    }
    ;
    u.useEffect( () => {
        h(),
        localStorage.getItem("adminData") || p(Ot),
        l(!0),
        localStorage.getItem("isAdminAuth") === "true" && r(!0);
        const o = () => h();
        return window.addEventListener("db-change", o),
        () => window.removeEventListener("db-change", o)
    }
    , []),
    u.useEffect( () => {
        n && localStorage.setItem("adminData", JSON.stringify(i))
    }
    , [i, n]);
    const v = a => a === "0f1&z\\6Z&qfJ,2q&" ? (r(!0),
    localStorage.setItem("isAdminAuth", "true"),
    !0) : !1
      , m = () => {
        r(!1),
        localStorage.removeItem("isAdminAuth")
    }
      , g = (a, o) => {
        const y = {
            timestamp: new Date().toISOString(),
            action: a,
            details: o
        };
        console.log("[Admin Audit Log]", y)
    }
      , c = (a, o) => {
        const y = {
            ...o,
            id: Date.now().toString()
        };
        p(N => ({
            ...N,
            [a]: [...N[a], y]
        })),
        g("CREATE", {
            category: a,
            item: y
        })
    }
      , x = (a, o, y) => {
        p(N => ({
            ...N,
            [a]: N[a].map(w => w.id === o ? {
                ...w,
                ...y
            } : w)
        })),
        g("UPDATE", {
            category: a,
            id: o,
            changes: y
        })
    }
      , d = (a, o) => {
        p(y => ({
            ...y,
            [a]: y[a].filter(N => N.id !== o)
        })),
        g("DELETE", {
            category: a,
            id: o
        })
    }
    ;
    return e.jsx(Be.Provider, {
        value: {
            isAuthenticated: s,
            login: v,
            logout: m,
            data: i,
            refreshData: h,
            addItem: c,
            updateItem: x,
            deleteItem: d
        },
        children: t
    })
}
  , zt = () => {
    const [t,s] = u.useState("")
      , [r,n] = u.useState("")
      , {login: l} = Ae()
      , i = p => {
        p.preventDefault(),
        l(t) ? n("") : n("Invalid credentials")
    }
    ;
    return e.jsx("div", {
        className: "min-h-screen bg-gray-100 flex items-center justify-center p-4",
        children: e.jsxs("div", {
            className: "bg-white p-8 rounded-lg shadow-md w-full max-w-md",
            children: [e.jsx("div", {
                className: "flex justify-center mb-6",
                children: e.jsx("div", {
                    className: "bg-primary/10 p-3 rounded-full",
                    children: e.jsx(We, {
                        className: "w-8 h-8 text-primary"
                    })
                })
            }), e.jsx("h2", {
                className: "text-2xl font-bold text-center mb-6 text-gray-800",
                children: "Admin Access"
            }), e.jsxs("form", {
                onSubmit: i,
                className: "space-y-4",
                children: [e.jsxs("div", {
                    children: [e.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Password"
                    }), e.jsx("input", {
                        type: "password",
                        value: t,
                        onChange: p => s(p.target.value),
                        className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none",
                        placeholder: "Enter admin password"
                    })]
                }), r && e.jsx("p", {
                    className: "text-red-500 text-sm text-center",
                    children: r
                }), e.jsx("button", {
                    type: "submit",
                    className: "w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors",
                    children: "Login to Dashboard"
                })]
            })]
        })
    })
}
  , _t = ({title: t, data: s, onEdit: r, onDelete: n, onAdd: l, fields: i}) => {
    const p = i.filter(h => !h.hiddenInTable);
    return e.jsxs("div", {
        className: "bg-white rounded-lg shadow overflow-hidden",
        children: [e.jsxs("div", {
            className: "p-6 border-b border-gray-100 flex justify-between items-center",
            children: [e.jsxs("h3", {
                className: "text-xl font-semibold text-gray-800",
                children: [t, " Management"]
            }), e.jsxs("button", {
                onClick: l,
                className: "flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors",
                children: [e.jsx(je, {
                    className: "w-4 h-4"
                }), "Add New"]
            })]
        }), e.jsx("div", {
            className: "overflow-x-auto",
            children: e.jsxs("table", {
                className: "w-full text-left",
                children: [e.jsx("thead", {
                    className: "bg-gray-50 text-gray-600 uppercase text-xs",
                    children: e.jsxs("tr", {
                        children: [p.map(h => e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: h.label
                        }, h.key)), e.jsx("th", {
                            className: "px-6 py-4 text-right",
                            children: "Actions"
                        })]
                    })
                }), e.jsx("tbody", {
                    className: "divide-y divide-gray-100",
                    children: s.length === 0 ? e.jsx("tr", {
                        children: e.jsx("td", {
                            colSpan: p.length + 1,
                            className: "px-6 py-8 text-center text-gray-500",
                            children: "No records found. Add a new item to get started."
                        })
                    }) : s.map(h => e.jsxs("tr", {
                        className: "hover:bg-gray-50 transition-colors",
                        children: [p.map(v => e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: v.render ? v.render(h[v.key], h) : h[v.key]
                        }, v.key)), e.jsx("td", {
                            className: "px-6 py-4 text-right",
                            children: e.jsxs("div", {
                                className: "flex items-center justify-end gap-3",
                                children: [e.jsx("button", {
                                    onClick: () => r(h),
                                    className: "text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50",
                                    title: "Edit",
                                    children: e.jsx(Je, {
                                        className: "w-4 h-4"
                                    })
                                }), e.jsx("button", {
                                    onClick: () => n(h.id),
                                    className: "text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50",
                                    title: "Delete",
                                    children: e.jsx(xe, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            })
                        })]
                    }, h.id))
                })]
            })
        })]
    })
}
  , Gt = jt({
    name: te().min(1, "Route Name is required"),
    origin: te().min(1, "Origin is required"),
    destination: te().min(1, "Destination is required"),
    price4Seater: pe().min(1, "Price must be greater than 0"),
    price6SeaterLuxurySuv: pe().min(1, "Price must be greater than 0"),
    price6to10SeaterSuv: pe().min(1, "Price must be greater than 0"),
    capacity: ke(["4 seater", "6 seater luxury suv", "6-10 seater suv"]),
    type: ke(["sightseeing", "direct"]).default("sightseeing"),
    description: te().optional()
})
  , Vt = ({onRouteCreated: t, initialData: s, defaultType: r="sightseeing"}) => {
    const [n,l] = u.useState(!1)
      , [i,p] = u.useState(null)
      , [h,v] = u.useState((s == null ? void 0 : s.coverImage) || null)
      , [m,g] = u.useState("")
      , [c,x] = u.useState("")
      , {register: d, handleSubmit: a, formState: {errors: o}} = Ke({
        resolver: vt(Gt),
        defaultValues: {
            name: (s == null ? void 0 : s.name) || (s == null ? void 0 : s.routeName) || "",
            origin: (s == null ? void 0 : s.origin) || "",
            destination: (s == null ? void 0 : s.destination) || "",
            price4Seater: (s == null ? void 0 : s.price4Seater) ?? (s == null ? void 0 : s.basePrice) ?? "",
            price6SeaterLuxurySuv: (s == null ? void 0 : s.price6SeaterLuxurySuv) ?? "",
            price6to10SeaterSuv: (s == null ? void 0 : s.price6to10SeaterSuv) ?? "",
            capacity: (s == null ? void 0 : s.capacity) || "4 seater",
            type: (s == null ? void 0 : s.type) || r,
            description: (s == null ? void 0 : s.description) || ""
        }
    })
      , y = w => {
        const f = w.target.files[0];
        if (f) {
            if (f.size > 5 * 1024 * 1024) {
                g("Image size must be less than 5MB");
                return
            }
            if (!f.type.startsWith("image/")) {
                g("File must be an image");
                return
            }
            g(""),
            p(f),
            v(URL.createObjectURL(f))
        }
    }
      , N = async w => {
        if (!i && !(s != null && s.coverImage)) {
            g("Cover image is required");
            return
        }
        l(!0),
        x("");
        try {
            let f = s == null ? void 0 : s.coverImage;
            if (i) {
                const M = `routes/${Date.now()}_${i.name}`;
                f = await B.uploadImage(i, M)
            }
            const I = {
                ...w,
                coverImage: f
            };
            let E;
            s != null && s.id ? E = await B.updateRoute(s.id, I) : E = await B.createRoute(I);
            const {data: z, error: F} = E;
            if (F)
                throw F;
            t(z)
        } catch (f) {
            console.error("Error creating route:", f),
            x("Failed to save route. Please try again.")
        } finally {
            l(!1)
        }
    }
    ;
    return e.jsxs("form", {
        onSubmit: a(N),
        className: "bg-white rounded-lg p-1",
        children: [c && e.jsxs("div", {
            className: "mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2",
            children: [e.jsx(Le, {
                className: "w-5 h-5"
            }), c]
        }), e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [e.jsxs("div", {
                className: "space-y-6",
                children: [e.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800 border-b pb-2",
                    children: "Route Information"
                }), e.jsxs("div", {
                    className: "space-y-1",
                    children: [e.jsxs("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: ["Route Name ", e.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), e.jsx("input", {
                        ...d("name"),
                        className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.name ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                        placeholder: "e.g. Heritage Darjeeling Tour"
                    }), o.name && e.jsx("p", {
                        className: "text-red-500 text-xs",
                        children: o.name.message
                    })]
                }), e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [e.jsxs("div", {
                        className: "space-y-1",
                        children: [e.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: ["Origin ", e.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), e.jsx("input", {
                            ...d("origin"),
                            className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.origin ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                            placeholder: "e.g. Darjeeling"
                        }), o.origin && e.jsx("p", {
                            className: "text-red-500 text-xs",
                            children: o.origin.message
                        })]
                    }), e.jsxs("div", {
                        className: "space-y-1",
                        children: [e.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: ["Destination ", e.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), e.jsx("input", {
                            ...d("destination"),
                            className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.destination ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                            placeholder: "e.g. Siliguri"
                        }), o.destination && e.jsx("p", {
                            className: "text-red-500 text-xs",
                            children: o.destination.message
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "space-y-4",
                    children: [e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [e.jsxs("div", {
                            className: "space-y-1",
                            children: [e.jsxs("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: ["4 Seater Price (₹) ", e.jsx("span", {
                                    className: "text-red-500",
                                    children: "*"
                                })]
                            }), e.jsx("input", {
                                type: "number",
                                ...d("price4Seater"),
                                className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.price4Seater ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                                placeholder: "0.00"
                            }), o.price4Seater && e.jsx("p", {
                                className: "text-red-500 text-xs",
                                children: o.price4Seater.message
                            })]
                        }), e.jsxs("div", {
                            className: "space-y-1",
                            children: [e.jsxs("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: ["6 Seater Luxury SUV Price (₹) ", e.jsx("span", {
                                    className: "text-red-500",
                                    children: "*"
                                })]
                            }), e.jsx("input", {
                                type: "number",
                                ...d("price6SeaterLuxurySuv"),
                                className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.price6SeaterLuxurySuv ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                                placeholder: "0.00"
                            }), o.price6SeaterLuxurySuv && e.jsx("p", {
                                className: "text-red-500 text-xs",
                                children: o.price6SeaterLuxurySuv.message
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [e.jsxs("div", {
                            className: "space-y-1",
                            children: [e.jsxs("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: ["6-10 Seater SUV Price (₹) ", e.jsx("span", {
                                    className: "text-red-500",
                                    children: "*"
                                })]
                            }), e.jsx("input", {
                                type: "number",
                                ...d("price6to10SeaterSuv"),
                                className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${o.price6to10SeaterSuv ? "border-red-300 bg-red-50" : "border-gray-200"}`,
                                placeholder: "0.00"
                            }), o.price6to10SeaterSuv && e.jsx("p", {
                                className: "text-red-500 text-xs",
                                children: o.price6to10SeaterSuv.message
                            })]
                        }), e.jsxs("div", {
                            className: "space-y-1",
                            children: [e.jsxs("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: ["Default Vehicle Type ", e.jsx("span", {
                                    className: "text-red-500",
                                    children: "*"
                                })]
                            }), e.jsxs("select", {
                                ...d("capacity"),
                                className: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white",
                                children: [e.jsx("option", {
                                    value: "4 seater",
                                    children: "4 Seater"
                                }), e.jsx("option", {
                                    value: "6 seater luxury suv",
                                    children: "6 Seater Luxury SUV"
                                }), e.jsx("option", {
                                    value: "6-10 seater suv",
                                    children: "6-10 Seater SUV"
                                })]
                            }), o.capacity && e.jsx("p", {
                                className: "text-red-500 text-xs",
                                children: o.capacity.message
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "space-y-1",
                    children: [e.jsxs("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: ["Route Type ", e.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), e.jsxs("select", {
                        ...d("type"),
                        className: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white",
                        children: [e.jsx("option", {
                            value: "sightseeing",
                            children: "Sight Seeing (with Stops)"
                        }), e.jsx("option", {
                            value: "direct",
                            children: "Direct Travel (Point to Point)"
                        })]
                    }), o.type && e.jsx("p", {
                        className: "text-red-500 text-xs",
                        children: o.type.message
                    })]
                }), e.jsxs("div", {
                    className: "space-y-1",
                    children: [e.jsx("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Description"
                    }), e.jsx("textarea", {
                        ...d("description"),
                        className: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-h-[120px]",
                        placeholder: "Describe the route, key scenic points, road conditions, etc."
                    })]
                })]
            }), e.jsxs("div", {
                className: "space-y-6",
                children: [e.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800 border-b pb-2",
                    children: "Visuals"
                }), e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsxs("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: ["Cover Image ", e.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), e.jsx("div", {
                        className: `mt-1 flex justify-center px-6 pt-10 pb-10 border-2 border-dashed rounded-xl transition-all relative ${m ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-primary/50 hover:bg-gray-50"}`,
                        children: h ? e.jsxs("div", {
                            className: "relative w-full h-64 group",
                            children: [e.jsx("img", {
                                src: h,
                                alt: "Preview",
                                className: "w-full h-full object-cover rounded-lg shadow-sm"
                            }), e.jsx("div", {
                                className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center",
                                children: e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                        p(null),
                                        v(null)
                                    }
                                    ,
                                    className: "bg-white/90 p-2 rounded-full text-red-500 hover:bg-white transition-transform hover:scale-110",
                                    children: e.jsx(Y, {
                                        className: "w-5 h-5"
                                    })
                                })
                            })]
                        }) : e.jsxs("div", {
                            className: "space-y-2 text-center",
                            children: [e.jsx("div", {
                                className: "mx-auto h-12 w-12 text-gray-400 bg-gray-100 rounded-full flex items-center justify-center",
                                children: e.jsx(Re, {
                                    className: "h-6 w-6"
                                })
                            }), e.jsxs("div", {
                                className: "flex text-sm text-gray-600 justify-center",
                                children: [e.jsxs("label", {
                                    className: "relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary/90 focus-within:outline-none",
                                    children: [e.jsx("span", {
                                        children: "Upload a file"
                                    }), e.jsx("input", {
                                        type: "file",
                                        className: "sr-only",
                                        accept: "image/*",
                                        onChange: y
                                    })]
                                }), e.jsx("p", {
                                    className: "pl-1",
                                    children: "or drag and drop"
                                })]
                            }), e.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: "PNG, JPG, GIF up to 5MB"
                            })]
                        })
                    }), m && e.jsx("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: m
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "flex justify-end pt-8 mt-8 border-t border-gray-100",
            children: e.jsx("button", {
                type: "submit",
                disabled: n,
                className: "flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50 shadow-lg shadow-gray-200",
                children: n ? e.jsxs(e.Fragment, {
                    children: [e.jsx(Ie, {
                        className: "w-5 h-5 animate-spin"
                    }), "Processing..."]
                }) : e.jsxs(e.Fragment, {
                    children: [s ? "Update & Continue" : "Create & Continue", e.jsx(ce, {
                        className: "w-5 h-5"
                    })]
                })
            })
        })]
    })
}
  , qt = ({onCancel: t, onComplete: s, initialData: r, defaultType: n="sightseeing"}) => {
    const [l,i] = u.useState(1)
      , [p,h] = u.useState(r || null)
      , [v,m] = u.useState(!1)
      , [g,c] = u.useState(null)
      , [x,d] = u.useState([])
      , [a,o] = u.useState(!1)
      , [y,N] = u.useState(null)
      , [w,f] = u.useState({
        name: "",
        price4Seater: "",
        price6SeaterLuxurySuv: "",
        price6to10SeaterSuv: "",
        description: "",
        images: []
    });
    u.useEffect( () => {
        l === 2 && (p != null && p.id) && E(p.id)
    }
    , [l, p]);
    const I = (j, C) => {
        c({
            type: j,
            message: C
        }),
        setTimeout( () => c(null), 3e3)
    }
      , E = async j => {
        try {
            const {data: C, error: P} = await B.getStopsByRouteId(j);
            if (P)
                throw P;
            const T = await Promise.all(C.map(async U => {
                const {data: V} = await B.getStopImages(U.id);
                return {
                    ...U,
                    images: V || []
                }
            }
            ));
            d(T)
        } catch (C) {
            console.error("Failed to fetch stops", C),
            I("error", "Failed to load stops")
        }
    }
      , z = j => {
        h(j),
        i(2)
    }
      , F = () => {
        s && s()
    }
      , M = j => {
        const {name: C, value: P} = j.target;
        f(T => ({
            ...T,
            [C]: P
        }))
    }
      , O = j => {
        if (j.target.files) {
            const P = Array.from(j.target.files).map(T => ({
                file: T,
                preview: URL.createObjectURL(T)
            }));
            f(T => ({
                ...T,
                images: [...T.images, ...P]
            }))
        }
    }
      , q = async j => {
        w.images[j].id && !window.confirm("Delete this image permanently?") || f(P => ({
            ...P,
            images: P.images.filter( (T, U) => U !== j)
        }))
    }
      , G = j => {
        var C;
        f({
            name: j.name,
            price4Seater: j.price4Seater || "",
            price6SeaterLuxurySuv: j.price6SeaterLuxurySuv || "",
            price6to10SeaterSuv: j.price6to10SeaterSuv || "",
            description: j.description || "",
            images: ((C = j.images) == null ? void 0 : C.map(P => ({
                ...P,
                preview: P.url
            }))) || []
        }),
        N(j.id),
        o(!0)
    }
      , k = async j => {
        if (window.confirm("Delete this stop?"))
            try {
                await B.deleteStop(j),
                d(C => C.filter(P => P.id !== j)),
                I("success", "Stop deleted")
            } catch {
                I("error", "Failed to delete stop")
            }
    }
      , b = async j => {
        const C = j.isDestination ? void 0 : j.id;
        d(P => P.map(T => T.id === j.id ? {
            ...T,
            isDestination: !j.isDestination
        } : {
            ...T,
            isDestination: !1
        }));
        try {
            await B.setDestinationStop(p.id, C),
            await E(p.id),
            I("success", C ? "Destination updated" : "Destination cleared")
        } catch {
            await E(p.id),
            I("error", "Failed to update destination")
        }
    }
      , S = async j => {
        j.preventDefault(),
        m(!0);
        try {
            const C = {
                routeId: p.id,
                name: w.name,
                price4Seater: Number(w.price4Seater) || 0,
                price6SeaterLuxurySuv: Number(w.price6SeaterLuxurySuv) || 0,
                price6to10SeaterSuv: Number(w.price6to10SeaterSuv) || 0,
                description: w.description
            };
            let P = y;
            if (y) {
                const {data: U, error: V} = await B.updateStop(y, C);
                if (V)
                    throw V;
                P = y
            } else {
                const {data: U, error: V} = await B.addStop(C);
                if (V)
                    throw V;
                P = U.id
            }
            const T = w.images.filter(U => U.file);
            if (T.length > 0) {
                const U = T.map(async Ne => {
                    const Fe = `stops/${P}/${Date.now()}_${Ne.file.name}`
                      , Oe = await B.uploadImage(Ne.file, Fe);
                    return {
                        stopId: P,
                        url: Oe
                    }
                }
                )
                  , V = await Promise.all(U);
                await B.addStopImages(V)
            }
            await E(p.id),
            o(!1),
            N(null),
            f({
                name: "",
                price4Seater: "",
                price6SeaterLuxurySuv: "",
                price6to10SeaterSuv: "",
                description: "",
                images: []
            }),
            I("success", "Stop saved successfully")
        } catch (C) {
            console.error(C),
            I("error", "Failed to save stop: " + C.message)
        } finally {
            m(!1)
        }
    }
      , R = () => {
        o(!1),
        N(null),
        f({
            name: "",
            price4Seater: "",
            price6SeaterLuxurySuv: "",
            price6to10SeaterSuv: "",
            description: "",
            images: []
        })
    }
    ;
    return e.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto",
        children: e.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl my-8 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 relative",
            children: [g && e.jsxs("div", {
                className: `absolute top-4 right-4 px-4 py-2 rounded-md shadow-lg flex items-center gap-2 z-50 text-white ${g.type === "success" ? "bg-green-600" : "bg-red-600"}`,
                children: [g.type === "success" ? e.jsx(X, {
                    className: "w-4 h-4"
                }) : e.jsx(Le, {
                    className: "w-4 h-4"
                }), g.message]
            }), e.jsxs("div", {
                className: "flex justify-between items-center p-6 border-b border-gray-100 shrink-0",
                children: [e.jsxs("div", {
                    children: [e.jsxs("h2", {
                        className: "text-2xl font-bold text-gray-800 flex items-center gap-2",
                        children: [l === 1 ? "Route Details" : "Manage Stops", r && e.jsx("span", {
                            className: "text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium",
                            children: "Editing"
                        })]
                    }), e.jsx("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: l === 1 ? "Define the basic information for this route." : `Add stops for ${p == null ? void 0 : p.origin} to ${p == null ? void 0 : p.destination}.`
                    })]
                }), e.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors",
                    children: e.jsx(Y, {
                        className: "w-6 h-6"
                    })
                })]
            }), e.jsx("div", {
                className: "bg-gray-50 border-b border-gray-100 px-8 py-4 shrink-0",
                children: e.jsxs("div", {
                    className: "flex items-center justify-center",
                    children: [e.jsxs("div", {
                        className: `flex items-center gap-2 ${l >= 1 ? "text-primary" : "text-gray-400"}`,
                        children: [e.jsx("div", {
                            className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${l >= 1 ? "bg-primary text-white" : "bg-gray-200"}`,
                            children: "1"
                        }), e.jsx("span", {
                            className: "font-medium",
                            children: "Route Info"
                        })]
                    }), e.jsx("div", {
                        className: `w-24 h-0.5 mx-4 ${l >= 2 ? "bg-primary" : "bg-gray-200"}`
                    }), e.jsxs("div", {
                        className: `flex items-center gap-2 ${l >= 2 ? "text-primary" : "text-gray-400"}`,
                        children: [e.jsx("div", {
                            className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${l >= 2 ? "bg-primary text-white" : "bg-gray-200"}`,
                            children: "2"
                        }), e.jsx("span", {
                            className: "font-medium",
                            children: "Stops"
                        })]
                    })]
                })
            }), e.jsx("div", {
                className: "p-8 overflow-y-auto flex-1 bg-gray-50/50",
                children: l === 1 ? e.jsx(Vt, {
                    onRouteCreated: z,
                    initialData: r,
                    defaultType: n
                }) : e.jsxs("div", {
                    className: "space-y-6",
                    children: [a ? e.jsxs("form", {
                        onSubmit: S,
                        className: "border-2 border-primary/20 rounded-lg p-6 bg-white shadow-sm",
                        children: [e.jsx("h3", {
                            className: "text-lg font-semibold mb-4 text-gray-800",
                            children: y ? "Edit Stop" : "New Stop Details"
                        }), e.jsx("div", {
                            className: "grid grid-cols-1 gap-4 mb-4",
                            children: e.jsxs("div", {
                                children: [e.jsxs("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: ["Stop Name ", e.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })]
                                }), e.jsx("input", {
                                    required: !0,
                                    name: "name",
                                    value: w.name,
                                    onChange: M,
                                    className: "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",
                                    placeholder: "e.g. Lamahatta Eco Park"
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                            children: [e.jsxs("div", {
                                children: [e.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "4 Seater Price (₹)"
                                }), e.jsx("input", {
                                    type: "number",
                                    name: "price4Seater",
                                    value: w.price4Seater,
                                    onChange: M,
                                    className: "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",
                                    placeholder: "0",
                                    min: "0"
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "6 Seater Luxury (₹)"
                                }), e.jsx("input", {
                                    type: "number",
                                    name: "price6SeaterLuxurySuv",
                                    value: w.price6SeaterLuxurySuv,
                                    onChange: M,
                                    className: "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",
                                    placeholder: "0",
                                    min: "0"
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "6–10 Seater SUV (₹)"
                                }), e.jsx("input", {
                                    type: "number",
                                    name: "price6to10SeaterSuv",
                                    value: w.price6to10SeaterSuv,
                                    onChange: M,
                                    className: "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",
                                    placeholder: "0",
                                    min: "0"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "mb-4",
                            children: [e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Description"
                            }), e.jsx("textarea", {
                                name: "description",
                                value: w.description,
                                onChange: M,
                                rows: 3,
                                className: "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none",
                                placeholder: "What makes this stop special?"
                            })]
                        }), e.jsxs("div", {
                            className: "mb-6",
                            children: [e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Images"
                            }), e.jsxs("div", {
                                className: "flex flex-wrap gap-3",
                                children: [w.images.map( (j, C) => e.jsxs("div", {
                                    className: "relative w-36 aspect-[3/2] group",
                                    children: [e.jsx("img", {
                                        src: j.preview || j.url,
                                        alt: "Preview",
                                        className: "w-full h-full object-cover rounded-lg border border-gray-200"
                                    }), e.jsx("button", {
                                        type: "button",
                                        onClick: () => q(C),
                                        className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm",
                                        children: e.jsx(Y, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                }, C)), e.jsxs("label", {
                                    className: "w-36 aspect-[3/2] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors",
                                    children: [e.jsx(Re, {
                                        className: "w-6 h-6 text-gray-400 mb-2"
                                    }), e.jsx("span", {
                                        className: "text-sm text-gray-500",
                                        children: "Add Photos"
                                    }), e.jsx("input", {
                                        type: "file",
                                        multiple: !0,
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: O
                                    })]
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "flex gap-3 justify-end pt-4 border-t border-gray-100",
                            children: [e.jsx("button", {
                                type: "button",
                                onClick: R,
                                className: "px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50",
                                children: "Cancel"
                            }), e.jsxs("button", {
                                type: "submit",
                                disabled: v,
                                className: "px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2",
                                children: [v ? e.jsx(Ie, {
                                    className: "w-4 h-4 animate-spin"
                                }) : e.jsx(Ye, {
                                    className: "w-4 h-4"
                                }), y ? "Update Stop" : "Save Stop"]
                            })]
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            className: "space-y-4",
                            children: x.length === 0 ? e.jsxs("div", {
                                className: "text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-200",
                                children: [e.jsx("div", {
                                    className: "bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm mb-3",
                                    children: e.jsx(ne, {
                                        className: "w-6 h-6 text-gray-400"
                                    })
                                }), e.jsx("h4", {
                                    className: "text-gray-800 font-medium",
                                    children: "No stops added yet"
                                }), e.jsx("p", {
                                    className: "text-gray-500 text-sm mt-1",
                                    children: "Add interesting points to make this route attractive."
                                })]
                            }) : x.map( (j, C) => e.jsxs("div", {
                                className: "group bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex justify-between items-start relative overflow-hidden",
                                children: [e.jsx("div", {
                                    className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-600"
                                }), e.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [e.jsx("div", {
                                        className: "bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-gray-100 text-gray-500 font-bold text-sm",
                                        children: C + 1
                                    }), e.jsxs("div", {
                                        children: [e.jsxs("div", {
                                            className: "flex items-center gap-3 mb-1",
                                            children: [e.jsx("h4", {
                                                className: "font-bold text-lg text-gray-800",
                                                children: j.name
                                            }), j.isDestination && e.jsx("span", {
                                                className: "text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium border border-blue-100",
                                                children: "Destination"
                                            }), (Number(j.price4Seater) || 0) + (Number(j.price6SeaterLuxurySuv) || 0) + (Number(j.price6to10SeaterSuv) || 0) > 0 ? e.jsxs("span", {
                                                className: "text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium border border-green-100",
                                                children: ["₹", Number(j.price4Seater) || 0, " / ₹", Number(j.price6SeaterLuxurySuv) || 0, " / ₹", Number(j.price6to10SeaterSuv) || 0]
                                            }) : e.jsx("span", {
                                                className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium",
                                                children: "Included"
                                            })]
                                        }), e.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: j.description || "No description."
                                        })]
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [e.jsx("button", {
                                        type: "button",
                                        onClick: () => b(j),
                                        className: `p-2 rounded-md ${j.isDestination ? "text-blue-700 bg-blue-50" : "text-gray-500 hover:bg-gray-50"}`,
                                        title: j.isDestination ? "Clear destination" : "Mark as destination",
                                        children: e.jsx(ne, {
                                            className: "w-4 h-4"
                                        })
                                    }), e.jsx("button", {
                                        type: "button",
                                        onClick: () => G(j),
                                        className: "p-2 text-blue-600 hover:bg-blue-50 rounded-md",
                                        title: "Edit stop",
                                        children: e.jsx(Ze, {
                                            className: "w-4 h-4"
                                        })
                                    }), e.jsx("button", {
                                        onClick: () => k(j.id),
                                        className: "p-2 text-red-600 hover:bg-red-50 rounded-md",
                                        children: e.jsx(xe, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                })]
                            }, j.id))
                        }), e.jsxs("button", {
                            onClick: () => o(!0),
                            className: "w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 mt-4 bg-white",
                            children: [e.jsx(je, {
                                className: "w-5 h-5"
                            }), " Add New Stop"]
                        })]
                    }), e.jsx("div", {
                        className: "pt-8 flex justify-end border-t border-gray-100 mt-8",
                        children: e.jsxs("button", {
                            onClick: F,
                            className: "flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-200",
                            children: [e.jsx(X, {
                                className: "w-5 h-5"
                            }), "Finish & Close"]
                        })
                    })]
                })
            })]
        })
    })
}
  , Ht = ({isOpen: t, onClose: s, onConfirm: r, itemName: n}) => t ? e.jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
    children: e.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center",
        children: [e.jsx("div", {
            className: "w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4",
            children: e.jsx("svg", {
                className: "w-6 h-6 text-red-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                })
            })
        }), e.jsx("h3", {
            className: "text-lg font-semibold text-gray-900 mb-2",
            children: "Delete Item?"
        }), e.jsxs("p", {
            className: "text-gray-500 mb-6",
            children: ["Are you sure you want to delete ", e.jsxs("span", {
                className: "font-medium text-gray-900",
                children: ['"', n, '"']
            }), "? This action cannot be undone."]
        }), e.jsxs("div", {
            className: "flex gap-3 justify-center",
            children: [e.jsx("button", {
                onClick: s,
                className: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",
                children: "Cancel"
            }), e.jsx("button", {
                onClick: r,
                className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                children: "Delete"
            })]
        })]
    })
}) : null
  , ae = {
    async createBooking(t) {
        try {
            return {
                data: await D().mutation(L.bookings.createBooking, t),
                error: null
            }
        } catch (s) {
            return {
                data: null,
                error: s
            }
        }
    },
    async listBookings() {
        try {
            return {
                data: await D().query(L.bookings.listBookings, {}),
                error: null
            }
        } catch (t) {
            return {
                data: null,
                error: t
            }
        }
    },
    async updateBookingStatus(t, s) {
        try {
            return {
                data: await D().mutation(L.bookings.updateBookingStatus, {
                    id: t,
                    status: s
                }),
                error: null
            }
        } catch (r) {
            return {
                data: null,
                error: r
            }
        }
    },
    async deleteBooking(t) {
        try {
            return {
                data: await D().mutation(L.bookings.deleteBooking, {
                    id: t
                }),
                error: null
            }
        } catch (s) {
            return {
                data: null,
                error: s
            }
        }
    }
}
  , Wt = t => {
    try {
        const s = new Date(t)
          , r = String(s.getDate()).padStart(2, "0")
          , n = String(s.getMonth() + 1).padStart(2, "0")
          , l = s.getFullYear()
          , i = s.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        return `${r}/${n}/${l}, ${i}`
    } catch {
        return t
    }
}
  , Jt = t => {
    if (!t)
        return "";
    try {
        const s = new Date(t)
          , r = String(s.getDate()).padStart(2, "0")
          , n = String(s.getMonth() + 1).padStart(2, "0")
          , l = s.getFullYear();
        return `${r}/${n}/${l}`
    } catch {
        return t
    }
}
  , Kt = () => {
    const [t,s] = u.useState([])
      , [r,n] = u.useState(!1)
      , [l,i] = u.useState("")
      , p = async () => {
        n(!0),
        i("");
        try {
            const {data: m, error: g} = await ae.listBookings();
            if (g)
                throw g;
            s(m || [])
        } catch (m) {
            i((m == null ? void 0 : m.message) || "Failed to load bookings")
        } finally {
            n(!1)
        }
    }
    ;
    u.useEffect( () => {
        p()
    }
    , []);
    const h = async (m, g) => {
        try {
            const {data: c, error: x} = await ae.updateBookingStatus(m, g);
            if (x)
                throw x;
            s(d => d.map(a => a.id === m ? c : a))
        } catch (c) {
            alert((c == null ? void 0 : c.message) || "Failed to update booking")
        }
    }
      , v = async m => {
        if (window.confirm("Delete this booking?"))
            try {
                const {error: g} = await ae.deleteBooking(m);
                if (g)
                    throw g;
                s(c => c.filter(x => x.id !== m))
            } catch (g) {
                alert((g == null ? void 0 : g.message) || "Failed to delete booking")
            }
    }
    ;
    return e.jsxs("div", {
        className: "bg-white rounded-lg shadow overflow-hidden",
        children: [e.jsxs("div", {
            className: "p-6 border-b border-gray-100 flex justify-between items-center",
            children: [e.jsx("h3", {
                className: "text-xl font-semibold text-gray-800",
                children: "Bookings Management"
            }), e.jsx("button", {
                onClick: p,
                className: "bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors",
                children: "Refresh"
            })]
        }), l && e.jsx("div", {
            className: "p-4 bg-red-50 text-red-700 border-b border-red-100",
            children: l
        }), r ? e.jsx("div", {
            className: "p-8 text-center text-gray-500",
            children: "Loading bookings..."
        }) : e.jsx("div", {
            className: "overflow-x-auto",
            children: e.jsxs("table", {
                className: "w-full text-left",
                children: [e.jsx("thead", {
                    className: "bg-gray-50 text-gray-600 uppercase text-xs",
                    children: e.jsxs("tr", {
                        children: [e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Created"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Name"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Email"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Phone"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Pickup"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Service"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Total"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Status"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium text-right",
                            children: "Actions"
                        })]
                    })
                }), e.jsx("tbody", {
                    className: "divide-y divide-gray-100",
                    children: t.length === 0 ? e.jsx("tr", {
                        children: e.jsx("td", {
                            colSpan: 9,
                            className: "px-6 py-8 text-center text-gray-500",
                            children: "No bookings found."
                        })
                    }) : t.map(m => {
                        var g, c, x, d, a, o, y, N, w, f, I, E, z, F;
                        return e.jsxs("tr", {
                            className: "hover:bg-gray-50 transition-colors",
                            children: [e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: Wt(m.created_at)
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: (g = m.contact) == null ? void 0 : g.name
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: ((c = m.contact) == null ? void 0 : c.email) || "-"
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: (x = m.contact) == null ? void 0 : x.phone
                            }), e.jsxs("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: [e.jsx("div", {
                                    children: (d = m.contact) == null ? void 0 : d.pickupLocation
                                }), (((a = m.booking) == null ? void 0 : a.startDate) || ((o = m.booking) == null ? void 0 : o.timeSlot)) && e.jsxs("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: [Jt((y = m.booking) == null ? void 0 : y.startDate), " ", (N = m.booking) == null ? void 0 : N.timeSlot]
                                })]
                            }), e.jsxs("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: [e.jsx("div", {
                                    children: ((w = m.service) == null ? void 0 : w.title) || ((f = m.service) != null && f.origin && ((I = m.service) != null && I.destination) ? `${m.service.origin} to ${m.service.destination}` : (E = m.service) == null ? void 0 : E.type)
                                }), Array.isArray((z = m.booking) == null ? void 0 : z.stopNames) && m.booking.stopNames.length > 0 && e.jsx("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: m.booking.stopNames.join(", ")
                                })]
                            }), e.jsxs("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: ["₹", Number(((F = m.pricing) == null ? void 0 : F.total) || 0).toFixed(0)]
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-700",
                                children: e.jsxs("select", {
                                    value: m.status,
                                    onChange: M => h(m.id, M.target.value),
                                    className: "border border-gray-200 rounded-md px-2 py-1 bg-white",
                                    children: [e.jsx("option", {
                                        value: "new",
                                        children: "New"
                                    }), e.jsx("option", {
                                        value: "confirmed",
                                        children: "Confirmed"
                                    }), e.jsx("option", {
                                        value: "cancelled",
                                        children: "Cancelled"
                                    })]
                                })
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-right",
                                children: e.jsx("button", {
                                    onClick: () => v(m.id),
                                    className: "text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50",
                                    title: "Delete",
                                    children: e.jsx(xe, {
                                        className: "w-4 h-4"
                                    })
                                })
                            })]
                        }, m.id)
                    }
                    )
                })]
            })
        })]
    })
}
  , ie = {
    async createContactMessage(t) {
        try {
            return {
                data: await D().mutation(L.contactMessages.createContactMessage, t),
                error: null
            }
        } catch (s) {
            return {
                data: null,
                error: s
            }
        }
    },
    async listContactMessages() {
        try {
            return {
                data: await D().query(L.contactMessages.listContactMessages, {}),
                error: null
            }
        } catch (t) {
            return {
                data: null,
                error: t
            }
        }
    },
    async updateContactMessageStatus(t, s) {
        try {
            return {
                data: await D().mutation(L.contactMessages.updateContactMessageStatus, {
                    id: t,
                    status: s
                }),
                error: null
            }
        } catch (r) {
            return {
                data: null,
                error: r
            }
        }
    },
    async deleteContactMessage(t) {
        try {
            return {
                data: await D().mutation(L.contactMessages.deleteContactMessage, {
                    id: t
                }),
                error: null
            }
        } catch (s) {
            return {
                data: null,
                error: s
            }
        }
    }
}
  , Yt = t => {
    try {
        const s = new Date(t)
          , r = String(s.getDate()).padStart(2, "0")
          , n = String(s.getMonth() + 1).padStart(2, "0")
          , l = s.getFullYear()
          , i = s.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        return `${r}/${n}/${l}, ${i}`
    } catch {
        return t
    }
}
  , Zt = () => {
    const [t,s] = u.useState([])
      , [r,n] = u.useState(!1)
      , [l,i] = u.useState("")
      , p = async () => {
        n(!0),
        i("");
        try {
            const {data: m, error: g} = await ie.listContactMessages();
            if (g)
                throw g;
            s(m || [])
        } catch (m) {
            i((m == null ? void 0 : m.message) || "Failed to load contact messages")
        } finally {
            n(!1)
        }
    }
    ;
    u.useEffect( () => {
        p()
    }
    , []);
    const h = async (m, g) => {
        try {
            const {data: c, error: x} = await ie.updateContactMessageStatus(m, g);
            if (x)
                throw x;
            s(d => d.map(a => a.id === m ? c : a))
        } catch (c) {
            alert((c == null ? void 0 : c.message) || "Failed to update message")
        }
    }
      , v = async m => {
        if (window.confirm("Delete this message?"))
            try {
                const {error: g} = await ie.deleteContactMessage(m);
                if (g)
                    throw g;
                s(c => c.filter(x => x.id !== m))
            } catch (g) {
                alert((g == null ? void 0 : g.message) || "Failed to delete message")
            }
    }
    ;
    return e.jsxs("div", {
        className: "bg-white rounded-lg shadow overflow-hidden",
        children: [e.jsxs("div", {
            className: "p-6 border-b border-gray-100 flex justify-between items-center",
            children: [e.jsx("h3", {
                className: "text-xl font-semibold text-gray-800",
                children: "Contact Messages"
            }), e.jsx("button", {
                onClick: p,
                className: "bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors",
                children: "Refresh"
            })]
        }), l && e.jsx("div", {
            className: "p-4 bg-red-50 text-red-700 border-b border-red-100",
            children: l
        }), r ? e.jsx("div", {
            className: "p-8 text-center text-gray-500",
            children: "Loading messages..."
        }) : e.jsx("div", {
            className: "overflow-x-auto",
            children: e.jsxs("table", {
                className: "w-full text-left",
                children: [e.jsx("thead", {
                    className: "bg-gray-50 text-gray-600 uppercase text-xs",
                    children: e.jsxs("tr", {
                        children: [e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Created"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Name"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Phone"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Email"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Message"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium",
                            children: "Status"
                        }), e.jsx("th", {
                            className: "px-6 py-4 font-medium text-right",
                            children: "Actions"
                        })]
                    })
                }), e.jsx("tbody", {
                    className: "divide-y divide-gray-100",
                    children: t.length === 0 ? e.jsx("tr", {
                        children: e.jsx("td", {
                            colSpan: 7,
                            className: "px-6 py-8 text-center text-gray-500",
                            children: "No messages found."
                        })
                    }) : t.map(m => e.jsxs("tr", {
                        className: "hover:bg-gray-50 transition-colors",
                        children: [e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: Yt(m.created_at)
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: m.name
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: m.phone
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: m.email
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: e.jsx("div", {
                                className: "whitespace-pre-wrap break-words max-w-[520px]",
                                children: m.message
                            })
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-sm text-gray-700",
                            children: e.jsxs("select", {
                                value: m.status,
                                onChange: g => h(m.id, g.target.value),
                                className: "border border-gray-200 rounded-md px-2 py-1 bg-white",
                                children: [e.jsx("option", {
                                    value: "new",
                                    children: "New"
                                }), e.jsx("option", {
                                    value: "resolved",
                                    children: "Resolved"
                                })]
                            })
                        }), e.jsx("td", {
                            className: "px-6 py-4 text-right",
                            children: e.jsx("button", {
                                onClick: () => v(m.id),
                                className: "text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50",
                                title: "Delete",
                                children: e.jsx(xe, {
                                    className: "w-4 h-4"
                                })
                            })
                        })]
                    }, m.id))
                })]
            })
        })]
    })
}
  , re = [{
    id: "routes",
    label: "Sight Seeing",
    icon: le
}, {
    id: "direct",
    label: "Direct Travel",
    icon: me
}, {
    id: "bookings",
    label: "Bookings",
    icon: Xe
}, {
    id: "contact",
    label: "Contact",
    icon: De
}]
  , Xt = {
    routes: [{
        key: "name",
        label: "Route Name",
        required: !0
    }, {
        key: "origin",
        label: "Origin",
        required: !0
    }, {
        key: "destination",
        label: "Destination",
        required: !0
    }, {
        key: "prices",
        label: "Prices",
        render: (t, s) => {
            const r = s.price4Seater ?? s.basePrice
              , n = s.price6SeaterLuxurySuv ?? s.basePrice
              , l = s.price6to10SeaterSuv ?? s.basePrice;
            return `₹${r} | ₹${n} | ₹${l}`
        }
    }, {
        key: "capacity",
        label: "Default Vehicle"
    }],
    direct: [{
        key: "name",
        label: "Route Name",
        required: !0
    }, {
        key: "origin",
        label: "Origin",
        required: !0
    }, {
        key: "destination",
        label: "Destination",
        required: !0
    }, {
        key: "prices",
        label: "Prices",
        render: (t, s) => {
            const r = s.price4Seater ?? s.basePrice
              , n = s.price6SeaterLuxurySuv ?? s.basePrice
              , l = s.price6to10SeaterSuv ?? s.basePrice;
            return `₹${r} | ₹${n} | ₹${l}`
        }
    }, {
        key: "capacity",
        label: "Default Vehicle"
    }]
}
  , Qt = () => {
    var O, q, G;
    const {isAuthenticated: t, logout: s} = Ae()
      , [r,n] = u.useState("routes")
      , [l,i] = u.useState([])
      , [p,h] = u.useState(!1)
      , [v,m] = u.useState(null)
      , [g,c] = u.useState(!1)
      , [x,d] = u.useState(null)
      , [a,o] = u.useState(null)
      , [y,N] = u.useState("");
    u.useEffect( () => {
        (r === "routes" || r === "direct") && w()
    }
    , [r]);
    const w = async () => {
        h(!0),
        m(null);
        try {
            const {data: k, error: b} = await B.getRoutes();
            if (b)
                throw b;
            i(k || [])
        } catch (k) {
            console.error("Failed to fetch routes:", k);
            const b = k.message || "Failed to load routes from database.";
            m(b)
        } finally {
            h(!1)
        }
    }
    ;
    if (!t)
        return e.jsx(zt, {});
    const f = () => {
        (r === "routes" || r === "direct") && (d(null),
        c(!0))
    }
      , I = k => {
        const b = {
            ...k
        };
        Array.isArray(k.tags) && (b.tags = k.tags.join(", ")),
        d(b),
        (r === "routes" || r === "direct") && c(!0)
    }
      , E = k => {
        if (r !== "routes" && r !== "direct")
            return;
        const S = l.find(R => R.id === k);
        S && (N(S.name || S.title || S.origin + " to " + S.destination),
        o(k))
    }
      , z = async () => {
        if (a) {
            try {
                const {error: k} = await B.deleteRoute(a);
                if (k)
                    throw k;
                i(b => b.filter(S => S.id !== a))
            } catch (k) {
                console.error("Failed to delete route:", k),
                alert("Failed to delete route. Please try again.")
            }
            o(null)
        }
    }
      , F = ((O = re.find(k => k.id === r)) == null ? void 0 : O.icon) || we
      , M = r === "routes" || r === "direct" ? l.filter(k => r === "direct" ? k.type === "direct" : !k.type || k.type === "sightseeing") : [];
    return e.jsxs("div", {
        className: "min-h-screen bg-gray-50 flex flex-col md:flex-row",
        children: [e.jsxs("aside", {
            className: "w-full md:w-64 bg-white shadow-md z-10",
            children: [e.jsxs("div", {
                className: "p-6 border-b border-gray-100 flex items-center gap-3",
                children: [e.jsx("div", {
                    className: "bg-primary text-white p-2 rounded-lg",
                    children: e.jsx(we, {
                        className: "w-6 h-6"
                    })
                }), e.jsx("h1", {
                    className: "text-xl font-bold text-gray-800",
                    children: "Admin"
                })]
            }), e.jsx("nav", {
                className: "p-4 space-y-1",
                children: re.map(k => {
                    const b = k.icon;
                    return e.jsxs("button", {
                        onClick: () => n(k.id),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${r === k.id ? "bg-primary/10 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`,
                        children: [e.jsx(b, {
                            className: "w-5 h-5"
                        }), k.label]
                    }, k.id)
                }
                )
            }), e.jsx("div", {
                className: "p-4 mt-auto border-t border-gray-100",
                children: e.jsxs("button", {
                    onClick: s,
                    className: "w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                    children: [e.jsx(Qe, {
                        className: "w-5 h-5"
                    }), "Logout"]
                })
            })]
        }), e.jsxs("main", {
            className: "flex-1 p-6 md:p-8 overflow-y-auto",
            children: [e.jsxs("header", {
                className: "mb-8 flex justify-between items-center",
                children: [e.jsxs("div", {
                    children: [e.jsxs("h2", {
                        className: "text-2xl font-bold text-gray-800 flex items-center gap-2",
                        children: [e.jsx(F, {
                            className: "w-6 h-6 text-gray-400"
                        }), (q = re.find(k => k.id === r)) == null ? void 0 : q.label]
                    }), e.jsx("p", {
                        className: "text-gray-500 text-sm mt-1",
                        children: "Manage your service offerings and details."
                    })]
                }), e.jsx("div", {
                    className: "text-sm text-gray-500",
                    children: "Logged in as Admin"
                })]
            }), g ? e.jsx(qt, {
                initialData: x,
                defaultType: r === "direct" ? "direct" : "sightseeing",
                onComplete: () => {
                    c(!1),
                    d(null),
                    w()
                }
                ,
                onCancel: () => {
                    c(!1),
                    d(null)
                }
            }) : r === "bookings" ? e.jsx(Kt, {}) : r === "contact" ? e.jsx(Zt, {}) : e.jsxs(e.Fragment, {
                children: [(r === "routes" || r === "direct") && v && e.jsx("div", {
                    className: "bg-red-50 text-red-600 p-4 rounded-lg mb-4",
                    children: v
                }), (r === "routes" || r === "direct") && p ? e.jsx("div", {
                    className: "text-center py-12 text-gray-500",
                    children: "Loading routes..."
                }) : e.jsx(_t, {
                    title: (G = re.find(k => k.id === r)) == null ? void 0 : G.label,
                    data: M,
                    fields: Xt[r],
                    onAdd: f,
                    onEdit: I,
                    onDelete: E
                }), e.jsx(Ht, {
                    isOpen: !!a,
                    onClose: () => o(null),
                    onConfirm: z,
                    itemName: y
                })]
            })]
        })]
    })
}
  , es = () => {
    const [t,s] = u.useState("")
      , [r,n] = u.useState("")
      , [l,i] = u.useState("")
      , [p,h] = u.useState("")
      , [v,m] = u.useState(!1)
      , [g,c] = u.useState("")
      , [x,d] = u.useState(!1)
      , a = async o => {
        o.preventDefault(),
        c(""),
        d(!1);
        const y = {
            name: t.trim(),
            phone: r.trim(),
            email: l.trim(),
            message: p.trim()
        };
        if (!y.name || !y.phone || !y.email || !y.message) {
            c("Please fill in all fields.");
            return
        }
        m(!0);
        try {
            const {error: N} = await ie.createContactMessage(y);
            if (N)
                throw N;
            d(!0),
            s(""),
            n(""),
            i(""),
            h("")
        } catch (N) {
            c((N == null ? void 0 : N.message) || "Failed to send message. Please try again.")
        } finally {
            m(!1)
        }
    }
    ;
    return e.jsx("main", {
        className: "pt-32 pb-20",
        children: e.jsxs("div", {
            className: "container mx-auto px-4 md:px-8 max-w-3xl",
            children: [e.jsxs("header", {
                className: "mb-10",
                children: [e.jsx("h1", {
                    className: "font-serif text-4xl md:text-5xl text-primary mb-3",
                    children: "Contact Us"
                }), e.jsx("p", {
                    className: "text-gray-600",
                    children: "Send us a message and we’ll get back to you."
                })]
            }), e.jsxs("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8",
                children: [g ? e.jsx("div", {
                    className: "mb-6 rounded-lg bg-red-50 text-red-700 px-4 py-3",
                    children: g
                }) : null, x ? e.jsx("div", {
                    className: "mb-6 rounded-lg bg-green-50 text-green-700 px-4 py-3",
                    children: "Message sent successfully."
                }) : null, e.jsxs("form", {
                    onSubmit: a,
                    className: "space-y-5",
                    children: [e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Name"
                        }), e.jsx("input", {
                            type: "text",
                            value: t,
                            onChange: o => s(o.target.value),
                            className: "w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                            placeholder: "Your name",
                            required: !0
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Phone Number"
                        }), e.jsx("input", {
                            type: "tel",
                            value: r,
                            onChange: o => n(o.target.value),
                            className: "w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                            placeholder: "+91 8170848914",
                            required: !0
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Email"
                        }), e.jsx("input", {
                            type: "email",
                            value: l,
                            onChange: o => i(o.target.value),
                            className: "w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                            placeholder: "toilsdarjeeling@gmail.com",
                            required: !0
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Message"
                        }), e.jsx("textarea", {
                            value: p,
                            onChange: o => h(o.target.value),
                            className: "w-full rounded-lg border border-gray-200 px-4 py-3 min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                            placeholder: "Write your message...",
                            required: !0
                        })]
                    }), e.jsx("button", {
                        type: "submit",
                        disabled: v,
                        onClick: o => {
                            o.preventDefault(),
                            a(o)
                        }
                        ,
                        className: "w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
                        children: v ? "Sending..." : "Send Message"
                    })]
                })]
            })]
        })
    })
}
  , Me = u.createContext()
  , ee = () => {
    const t = u.useContext(Me);
    if (!t)
        throw new Error("useBooking must be used within a BookingProvider");
    return t
}
  , ts = ({children: t}) => {
    const [s,r] = u.useState({
        serviceType: null,
        serviceId: null,
        serviceDetails: null,
        startDate: null,
        endDate: null,
        timeSlot: null,
        guests: 1,
        totalPrice: 0,
        contactDetails: {
            name: "",
            email: "",
            phone: "",
            pickupLocation: ""
        }
    })
      , [n,l] = u.useState(1)
      , i = (c, x) => {
        r({
            serviceType: c,
            serviceId: x.id,
            serviceDetails: x,
            startDate: null,
            endDate: null,
            timeSlot: null,
            guests: 1,
            totalPrice: Number(x.price) || Number(x.basePrice) || 0,
            contactDetails: {
                name: "",
                email: "",
                phone: "",
                pickupLocation: ""
            }
        }),
        l(1)
    }
      , p = (c, x, d) => {
        r(a => ({
            ...a,
            startDate: c,
            endDate: x,
            timeSlot: d
        }))
    }
      , h = c => {
        r(x => ({
            ...x,
            guests: c
        }))
    }
      , v = (c, x) => {
        r(d => ({
            ...d,
            contactDetails: {
                ...d.contactDetails,
                [c]: x
            }
        }))
    }
      , m = () => {
        var N;
        let c = 0;
        const {serviceType: x, serviceDetails: d, guests: a, startDate: o, endDate: y} = s;
        if (!d)
            return 0;
        if (x === "stay") {
            const w = Number(d.price || 0);
            let f = 1;
            if (o && y) {
                const I = Math.abs(y - o);
                f = Math.ceil(I / (1e3 * 60 * 60 * 24)) || 1
            }
            c = w * f
        } else
            x === "route" ? c = Number(d.totalPrice || d.basePrice || 0) : c = Number(((N = d.price) == null ? void 0 : N.replace(/[^0-9.]/g, "")) || 0) * a;
        return c
    }
    ;
    u.useEffect( () => {
        const c = m();
        r(x => ({
            ...x,
            totalPrice: c
        }))
    }
    , [s.startDate, s.endDate, s.guests, s.serviceDetails]);
    const g = {
        bookingData: s,
        currentStep: n,
        setCurrentStep: l,
        initializeBooking: i,
        updateBookingDates: p,
        updateGuests: h,
        updateContact: v
    };
    return e.jsx(Me.Provider, {
        value: g,
        children: t
    })
}
  , ss = () => {
    const {bookingData: t, updateBookingDates: s, updateGuests: r, setCurrentStep: n} = ee()
      , [l,i] = u.useState(t.startDate || new Date)
      , [p,h] = u.useState(t.endDate || Nt(new Date, 1))
      , [v,m] = u.useState("09")
      , [g,c] = u.useState("00")
      , [x,d] = u.useState("AM")
      , [a,o] = u.useState("");
    Z.useEffect( () => {
        t.serviceType
    }
    , [v, g, x, t.serviceType]);
    const y = () => {
        if (!l) {
            o("Please select a date.");
            return
        }
        if (t.serviceType === "stay" && !p) {
            o("Please select a checkout date.");
            return
        }
        let f = t.timeSlot;
        if (t.serviceType !== "stay" && (f = `${v}:${g} ${x}`),
        t.serviceType !== "stay" && !f) {
            o("Please select a time.");
            return
        }
        s(l, p, f),
        n(2)
    }
      , N = Array.from({
        length: 12
    }, (f, I) => (I + 1).toString().padStart(2, "0"))
      , w = ["00", "15", "30", "45"];
    return e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 min-h-[500px]",
        children: [e.jsxs("div", {
            className: "md:col-span-2 p-8 border-r border-gray-100",
            children: [e.jsx("h2", {
                className: "text-2xl font-serif font-bold text-gray-800 mb-6",
                children: "Select Dates & Guests"
            }), e.jsxs("div", {
                className: "mb-8",
                children: [e.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2 flex items-center",
                    children: [e.jsx(Te, {
                        className: "w-4 h-4 mr-2 text-primary"
                    }), t.serviceType === "stay" ? "Check-in / Check-out" : "Travel Date"]
                }), e.jsx("div", {
                    className: "bg-gray-50 p-4 rounded-xl border border-gray-200",
                    children: t.serviceType === "stay" ? e.jsx("div", {
                        className: "flex flex-col md:flex-row gap-4",
                        children: e.jsx(Se, {
                            selected: l,
                            onChange: f => {
                                const [I,E] = f;
                                i(I),
                                h(E),
                                o("")
                            }
                            ,
                            startDate: l,
                            endDate: p,
                            selectsRange: !0,
                            minDate: new Date,
                            inline: !0,
                            calendarClassName: "!border-0 !bg-transparent !w-full"
                        })
                    }) : e.jsx(Se, {
                        selected: l,
                        onChange: f => {
                            i(f),
                            o("")
                        }
                        ,
                        minDate: new Date,
                        inline: !0,
                        calendarClassName: "!border-0 !bg-transparent !w-full"
                    })
                })]
            }), t.serviceType !== "stay" && e.jsxs("div", {
                className: "mb-8",
                children: [e.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2 flex items-center",
                    children: [e.jsx(et, {
                        className: "w-4 h-4 mr-2 text-primary"
                    }), "Select Time"]
                }), e.jsxs("div", {
                    className: "flex flex-wrap md:flex-nowrap items-center gap-2 bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 w-full md:w-max",
                    children: [e.jsx("div", {
                        className: "relative flex-1 md:flex-none",
                        children: e.jsx("select", {
                            value: v,
                            onChange: f => m(f.target.value),
                            className: "appearance-none bg-white border border-gray-200 rounded-lg px-2 md:px-3 py-2 text-base md:text-lg font-bold text-gray-700 focus:outline-none focus:border-primary w-full md:w-20 text-center",
                            children: N.map(f => e.jsx("option", {
                                value: f,
                                children: f
                            }, f))
                        })
                    }), e.jsx("span", {
                        className: "text-xl font-bold text-gray-400",
                        children: ":"
                    }), e.jsx("div", {
                        className: "relative flex-1 md:flex-none",
                        children: e.jsx("select", {
                            value: g,
                            onChange: f => c(f.target.value),
                            className: "appearance-none bg-white border border-gray-200 rounded-lg px-2 md:px-3 py-2 text-base md:text-lg font-bold text-gray-700 focus:outline-none focus:border-primary w-full md:w-20 text-center",
                            children: w.map(f => e.jsx("option", {
                                value: f,
                                children: f
                            }, f))
                        })
                    }), e.jsxs("div", {
                        className: "flex bg-gray-200 rounded-lg p-1 ml-2 w-full md:w-auto justify-center md:justify-start mt-2 md:mt-0",
                        children: [e.jsx("button", {
                            onClick: () => d("AM"),
                            className: `flex-1 md:flex-none px-3 py-1.5 rounded-md text-xs md:text-sm font-bold transition-all ${x === "AM" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                            children: "AM"
                        }), e.jsx("button", {
                            onClick: () => d("PM"),
                            className: `flex-1 md:flex-none px-3 py-1.5 rounded-md text-xs md:text-sm font-bold transition-all ${x === "PM" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                            children: "PM"
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "mb-8",
                children: [e.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2 flex items-center",
                    children: [e.jsx(tt, {
                        className: "w-4 h-4 mr-2 text-primary"
                    }), "Number of Guests"]
                }), e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [e.jsx("button", {
                        onClick: () => r(Math.max(1, t.guests - 1)),
                        className: "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50",
                        children: "-"
                    }), e.jsx("span", {
                        className: "text-xl font-bold w-8 text-center",
                        children: t.guests
                    }), e.jsx("button", {
                        onClick: () => r(t.guests + 1),
                        className: "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50",
                        children: "+"
                    })]
                })]
            }), a && e.jsx("div", {
                className: "bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm",
                children: a
            }), e.jsx("div", {
                className: "flex justify-end",
                children: e.jsxs("button", {
                    onClick: y,
                    className: "flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all transform hover:-translate-y-0.5",
                    children: ["Continue to Checkout ", e.jsx(ce, {
                        className: "w-4 h-4"
                    })]
                })
            })]
        }), e.jsxs("div", {
            className: "bg-gray-50 p-8 flex flex-col",
            children: [e.jsx("h3", {
                className: "text-lg font-bold text-gray-800 mb-4",
                children: "Booking Summary"
            }), t.serviceDetails && e.jsxs("div", {
                className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6",
                children: [(t.serviceDetails.thumbnail_url || t.serviceDetails.image || t.serviceDetails.coverImage) && e.jsx("div", {
                    className: "aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3",
                    children: e.jsx("img", {
                        src: t.serviceDetails.thumbnail_url || t.serviceDetails.image || t.serviceDetails.coverImage,
                        alt: "Service",
                        className: "w-full h-full object-cover"
                    })
                }), e.jsx("h4", {
                    className: "font-bold text-primary mb-1",
                    children: t.serviceDetails.title || t.serviceDetails.origin + " to " + t.serviceDetails.destination
                }), e.jsx("p", {
                    className: "text-xs text-gray-500 line-clamp-2",
                    children: t.serviceDetails.description
                })]
            }), e.jsxs("div", {
                className: "space-y-3 text-sm",
                children: [e.jsxs("div", {
                    className: "flex justify-between pb-3 border-b border-gray-200",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Service Type"
                    }), e.jsx("span", {
                        className: "font-medium capitalize",
                        children: t.serviceType === "route" ? "Sight Seeing" : t.serviceType
                    })]
                }), l && e.jsxs("div", {
                    className: "flex justify-between pb-3 border-b border-gray-200",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Date"
                    }), e.jsx("span", {
                        className: "font-medium",
                        children: be(l, "MMM dd, yyyy")
                    })]
                }), e.jsxs("div", {
                    className: "flex justify-between pb-3 border-b border-gray-200",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Guests"
                    }), e.jsx("span", {
                        className: "font-medium",
                        children: t.guests
                    })]
                }), e.jsxs("div", {
                    className: "flex justify-between pt-2",
                    children: [e.jsx("span", {
                        className: "text-gray-800 font-bold",
                        children: "Estimated Total"
                    }), e.jsxs("span", {
                        className: "text-primary font-bold text-lg",
                        children: ["₹", t.totalPrice]
                    })]
                })]
            })]
        })]
    })
}
  , rs = () => {
    const {bookingData: t, setCurrentStep: s, updateContact: r} = ee()
      , [n,l] = u.useState(!1)
      , [i,p] = u.useState("")
      , h = async () => {
        var o, y, N, w, f, I, E, z, F, M;
        p("");
        const x = (o = t.contactDetails.name) == null ? void 0 : o.trim()
          , d = (y = t.contactDetails.phone) == null ? void 0 : y.trim()
          , a = (N = t.contactDetails.pickupLocation) == null ? void 0 : N.trim();
        if (!x || !d || !a) {
            p("Please fill all required fields.");
            return
        }
        l(!0);
        try {
            const O = Array.isArray((w = t.serviceDetails) == null ? void 0 : w.selectedStops) ? t.serviceDetails.selectedStops.map(k => k == null ? void 0 : k.name).filter(Boolean) : void 0
              , q = {
                contact: {
                    name: x,
                    email: ((f = t.contactDetails.email) == null ? void 0 : f.trim()) || void 0,
                    phone: d,
                    pickupLocation: a
                },
                service: {
                    type: t.serviceType || "",
                    id: t.serviceId || "",
                    title: ((I = t.serviceDetails) == null ? void 0 : I.title) || ((E = t.serviceDetails) == null ? void 0 : E.name) || void 0,
                    origin: ((z = t.serviceDetails) == null ? void 0 : z.origin) || void 0,
                    destination: ((F = t.serviceDetails) == null ? void 0 : F.destination) || void 0,
                    vehicleType: ((M = t.serviceDetails) == null ? void 0 : M.capacity) || void 0
                },
                booking: {
                    startDate: t.startDate ? new Date(t.startDate).toISOString() : void 0,
                    endDate: t.endDate ? new Date(t.endDate).toISOString() : void 0,
                    timeSlot: t.timeSlot || void 0,
                    guests: Number(t.guests || 1),
                    stopNames: O != null && O.length ? O : void 0
                },
                pricing: {
                    subtotal: m,
                    taxes: g,
                    total: c
                }
            }
              , {error: G} = await ae.createBooking(q);
            if (G)
                throw G;
            s(3)
        } catch (O) {
            p((O == null ? void 0 : O.message) || "Failed to place booking.")
        } finally {
            l(!1)
        }
    }
      , v = () => 0
      , m = t.totalPrice
      , g = v()
      , c = m;
    return e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 min-h-[500px]",
        children: [e.jsxs("div", {
            className: "md:col-span-2 p-8 border-r border-gray-100",
            children: [e.jsxs("button", {
                onClick: () => s(1),
                className: "flex items-center text-sm text-gray-500 hover:text-primary mb-6",
                children: [e.jsx(ve, {
                    className: "w-4 h-4 mr-1"
                }), " Back to Dates"]
            }), e.jsx("h2", {
                className: "text-2xl font-serif font-bold text-gray-800 mb-6",
                children: "Confirm & Pay"
            }), i && e.jsx("div", {
                className: "mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
                children: i
            }), e.jsxs("div", {
                className: "mb-8",
                children: [e.jsx("h3", {
                    className: "font-bold text-gray-700 mb-4",
                    children: "Contact Details"
                }), e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [e.jsxs("div", {
                        children: [e.jsxs("label", {
                            className: "block text-xs font-medium text-gray-500 mb-1",
                            children: ["Full Name ", e.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), e.jsx("input", {
                            type: "text",
                            className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary",
                            placeholder: "Name",
                            value: t.contactDetails.name,
                            onChange: x => r("name", x.target.value),
                            required: !0
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: "block text-xs font-medium text-gray-500 mb-1",
                            children: "Email Address"
                        }), e.jsx("input", {
                            type: "email",
                            className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary",
                            placeholder: "*********@gmail.com",
                            value: t.contactDetails.email,
                            onChange: x => r("email", x.target.value)
                        })]
                    }), e.jsxs("div", {
                        className: "md:col-span-2",
                        children: [e.jsxs("label", {
                            className: "block text-xs font-medium text-gray-500 mb-1",
                            children: ["Phone Number ", e.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), e.jsx("input", {
                            type: "tel",
                            className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary",
                            placeholder: "+91 **********",
                            value: t.contactDetails.phone,
                            onChange: x => r("phone", x.target.value),
                            required: !0
                        })]
                    }), e.jsxs("div", {
                        className: "md:col-span-2",
                        children: [e.jsxs("label", {
                            className: "block text-xs font-medium text-gray-500 mb-1",
                            children: ["Pickup Location ", e.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), e.jsx("input", {
                            type: "text",
                            className: "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary",
                            placeholder: "Enter pickup location",
                            value: t.contactDetails.pickupLocation,
                            onChange: x => r("pickupLocation", x.target.value),
                            required: !0
                        })]
                    })]
                })]
            }), e.jsx("button", {
                onClick: h,
                disabled: n,
                className: "w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center",
                children: n ? "Processing..." : "Book"
            }), e.jsxs("p", {
                className: "text-center text-xs text-gray-400 mt-4 flex items-center justify-center",
                children: [e.jsx(st, {
                    className: "w-3 h-3 mr-1"
                }), "Payments are secure and encrypted"]
            })]
        }), e.jsxs("div", {
            className: "bg-gray-50 p-8 flex flex-col h-full",
            children: [e.jsx("h3", {
                className: "text-lg font-bold text-gray-800 mb-6",
                children: "Order Summary"
            }), e.jsxs("div", {
                className: "flex gap-4 mb-6",
                children: [(t.serviceDetails.thumbnail_url || t.serviceDetails.image || t.serviceDetails.coverImage) && e.jsx("div", {
                    className: "w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0",
                    children: e.jsx("img", {
                        src: t.serviceDetails.thumbnail_url || t.serviceDetails.image || t.serviceDetails.coverImage,
                        alt: "Service",
                        className: "w-full h-full object-cover"
                    })
                }), e.jsxs("div", {
                    children: [e.jsx("h4", {
                        className: "font-bold text-gray-800 line-clamp-2",
                        children: t.serviceDetails.title || t.serviceDetails.origin + " to " + t.serviceDetails.destination
                    }), e.jsx("p", {
                        className: "text-sm text-gray-500 capitalize",
                        children: t.serviceType === "route" ? "Sight Seeing" : t.serviceType
                    })]
                })]
            }), e.jsxs("div", {
                className: "space-y-4 text-sm flex-1",
                children: [e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Dates"
                    }), e.jsxs("div", {
                        className: "text-right",
                        children: [e.jsx("span", {
                            className: "block font-medium",
                            children: t.startDate ? be(t.startDate, "MMM dd") : "-"
                        }), t.endDate && e.jsxs("span", {
                            className: "block text-xs text-gray-400",
                            children: ["to ", be(t.endDate, "MMM dd")]
                        })]
                    })]
                }), t.timeSlot && e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Time"
                    }), e.jsx("span", {
                        className: "font-medium",
                        children: t.timeSlot
                    })]
                }), e.jsxs("div", {
                    className: "flex justify-between",
                    children: [e.jsx("span", {
                        className: "text-gray-500",
                        children: "Guests"
                    }), e.jsx("span", {
                        className: "font-medium",
                        children: t.guests
                    })]
                })]
            }), e.jsxs("div", {
                className: "mt-8 border-t border-gray-200 pt-6 space-y-3",
                children: [e.jsxs("div", {
                    className: "flex justify-between text-gray-600",
                    children: [e.jsx("span", {
                        children: "Base Fare"
                    }), e.jsxs("span", {
                        children: ["₹", m.toFixed(0)]
                    })]
                }), e.jsxs("div", {
                    className: "flex justify-between text-xl font-bold text-primary pt-3 border-t border-gray-200/50",
                    children: [e.jsx("span", {
                        children: "Total"
                    }), e.jsxs("span", {
                        children: ["₹", c.toFixed(0)]
                    })]
                })]
            })]
        })]
    })
}
  , as = () => {
    const {currentStep: t, bookingData: s} = ee()
      , r = J();
    if (Z.useEffect( () => {
        s.serviceId || r("/")
    }
    , [s, r]),
    Z.useEffect( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    , [t]),
    !s.serviceId)
        return null;
    const n = [{
        number: 1,
        label: "Date & Time",
        icon: Te
    }, {
        number: 2,
        label: "Checkout",
        icon: rt
    }, {
        number: 3,
        label: "Confirmation",
        icon: X
    }];
    return e.jsx("div", {
        className: "min-h-screen bg-snow pt-24 pb-20",
        children: e.jsxs("div", {
            className: "container mx-auto px-4 max-w-5xl",
            children: [e.jsx("div", {
                className: "mb-12",
                children: e.jsxs("div", {
                    className: "flex items-center justify-center relative",
                    children: [e.jsx("div", {
                        className: "absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10 hidden md:block w-2/3 mx-auto"
                    }), e.jsx("div", {
                        className: "flex justify-between w-full md:w-2/3",
                        children: n.map(l => {
                            const i = l.icon
                              , p = t >= l.number
                              , h = t === l.number;
                            return e.jsxs("div", {
                                className: "flex flex-col items-center bg-snow px-2",
                                children: [e.jsx("div", {
                                    className: `w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${p ? "bg-primary border-primary text-white" : "bg-white border-gray-300 text-gray-400"}`,
                                    children: e.jsx(i, {
                                        className: "w-5 h-5"
                                    })
                                }), e.jsx("span", {
                                    className: `mt-2 text-xs md:text-sm font-medium ${h ? "text-primary" : "text-gray-500"}`,
                                    children: l.label
                                })]
                            }, l.number)
                        }
                        )
                    })]
                })
            }), e.jsxs("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]",
                children: [t === 1 && e.jsx(ss, {}), t === 2 && e.jsx(rs, {}), t === 3 && e.jsxs("div", {
                    className: "p-12 text-center",
                    children: [e.jsx("div", {
                        className: "w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: e.jsx(X, {
                            className: "w-10 h-10"
                        })
                    }), e.jsx("h2", {
                        className: "text-3xl font-serif font-bold text-primary mb-4",
                        children: "Booking Confirmed!"
                    }), e.jsx("p", {
                        className: "text-gray-600 max-w-md mx-auto mb-8",
                        children: "Thank you for booking with Toils. A confirmation email has been sent to your inbox."
                    }), e.jsx("button", {
                        onClick: () => r("/"),
                        className: "px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors",
                        children: "Return Home"
                    })]
                })]
            })]
        })
    })
}
  , is = () => {
    const {pathname: t} = oe();
    return u.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [t]),
    null
}
  , ye = {
    async createStay(t) {
        return $(async () => ({
            data: await D().mutation(L.stays.createStay, t),
            error: null
        }), "Create Stay")
    },
    async getStays() {
        return $(async () => ({
            data: await D().query(L.stays.getStays, {}),
            error: null
        }), "Get Stays")
    },
    async updateStay(t, s) {
        return $(async () => ({
            data: await D().mutation(L.stays.updateStay, {
                id: t,
                name: s.name,
                description: s.description,
                type: s.type,
                location: s.location,
                amenities: s.amenities,
                thumbnail_url: s.thumbnail_url
            }),
            error: null
        }), `Update Stay ${t}`)
    },
    async createRoom(t) {
        return $(async () => ({
            data: await D().mutation(L.stays.createRoom, {
                stayId: t.stay_id,
                name: t.name,
                price: t.price,
                capacity: t.capacity,
                description: t.description
            }),
            error: null
        }), "Create Room")
    },
    async updateRoom(t, s) {
        return $(async () => ({
            data: await D().mutation(L.stays.updateRoom, {
                id: t,
                name: s.name,
                price: s.price,
                capacity: s.capacity,
                description: s.description
            }),
            error: null
        }), `Update Room ${t}`)
    },
    async deleteRoom(t) {
        return $(async () => ({
            data: await D().mutation(L.stays.deleteRoom, {
                id: t
            }),
            error: null
        }), `Delete Room ${t}`)
    },
    async getRoomsByStayId(t) {
        return $(async () => ({
            data: await D().query(L.stays.getRoomsByStayId, {
                stayId: t
            }),
            error: null
        }), `Get Rooms for Stay ${t}`)
    },
    async uploadImage(t, s) {
        const r = await D().mutation(L.files.generateUploadUrl, {})
          , n = await fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": t.type || "application/octet-stream"
            },
            body: t
        });
        if (!n.ok)
            throw new Error("Failed to upload image");
        const {storageId: l} = await n.json()
          , i = await D().query(L.files.getFileUrl, {
            storageId: l
        });
        if (!i)
            throw new Error("Failed to get uploaded image url");
        return i
    },
    async createRoomImage(t) {
        return $(async () => ({
            data: await D().mutation(L.stays.createRoomImage, {
                roomId: t.room_id,
                url: t.url
            }),
            error: null
        }), "Create Room Image")
    },
    async getRoomImages(t) {
        return $(async () => ({
            data: await D().query(L.stays.getRoomImages, {
                roomId: t
            }),
            error: null
        }), `Get Images for Room ${t}`)
    },
    async deleteRoomImage(t) {
        return $(async () => ({
            data: await D().mutation(L.stays.deleteRoomImage, {
                id: t
            }),
            error: null
        }), `Delete Room Image ${t}`)
    }
}
  , ns = {
    Wifi: ct,
    Parking: me,
    Restaurant: lt,
    "Room Service": ot,
    Pool: ue,
    Spa: ue,
    Gym: nt,
    "Air Conditioning": ue,
    Heater: it,
    View: at
}
  , os = () => {
    var d;
    const {id: t} = $e()
      , s = J()
      , {initializeBooking: r} = ee()
      , [n,l] = u.useState(null)
      , [i,p] = u.useState([])
      , [h,v] = u.useState(!0);
    if (u.useEffect( () => {
        t && (async () => {
            try {
                const {data: o} = await ye.getStays()
                  , y = o == null ? void 0 : o.find(N => String(N.id) === String(t));
                if (y) {
                    l(y);
                    const {data: N} = await ye.getRoomsByStayId(y.id)
                      , w = await Promise.all((N || []).map(async f => {
                        const {data: I} = await ye.getRoomImages(f.id);
                        return {
                            ...f,
                            images: I || []
                        }
                    }
                    ));
                    p(w)
                }
            } catch (o) {
                console.error("Error fetching details:", o)
            } finally {
                v(!1)
            }
        }
        )()
    }
    , [t]),
    h)
        return e.jsx("div", {
            className: "min-h-screen flex items-center justify-center text-primary",
            children: "Loading..."
        });
    if (!n)
        return e.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: "Stay not found"
        });
    const m = a => {
        var o, y;
        r("stay", {
            ...a,
            thumbnail_url: ((y = (o = a.images) == null ? void 0 : o[0]) == null ? void 0 : y.url) || n.thumbnail_url,
            title: `${n.title} - ${a.name}`,
            location: n.location
        }),
        s("/book")
    }
      , g = i.length > 0 ? Math.min(...i.map(a => a.price)) : 0
      , c = i.length > 0 ? Math.max(...i.map(a => a.price)) : 0
      , x = {
        "@context": "https://schema.org",
        "@type": "Accommodation",
        name: n.title || n.name,
        description: n.description,
        image: n.thumbnail_url || n.image,
        address: {
            "@type": "PostalAddress",
            addressLocality: n.location,
            addressRegion: "West Bengal",
            addressCountry: "IN"
        },
        ...i.length > 0 && {
            offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: g,
                highPrice: c,
                offerCount: i.length
            }
        },
        amenityFeature: (n.amenities || []).map(a => ({
            "@type": "LocationFeatureSpecification",
            name: a,
            value: !0
        }))
    };
    return e.jsxs("div", {
        className: "min-h-screen bg-snow pt-24 pb-20",
        children: [e.jsxs(de, {
            children: [e.jsxs("title", {
                children: [n.title || n.name, " - Stay in ", n.location, " | Toils Darjeeling"]
            }), e.jsx("meta", {
                name: "description",
                content: ((d = n.description) == null ? void 0 : d.substring(0, 160)) || `Book your stay at ${n.title || n.name} in ${n.location}. Find the best homestays and hotels with Toils Darjeeling.`
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify(x)
            })]
        }), e.jsxs("div", {
            className: "container mx-auto px-4 mb-8",
            children: [e.jsxs("button", {
                onClick: () => s("/experiences"),
                className: "flex items-center text-gray-500 hover:text-primary transition-colors mb-4",
                children: [e.jsx(ve, {
                    className: "w-4 h-4 mr-2"
                }), " Back to Stays"]
            }), e.jsx("h1", {
                className: "text-3xl md:text-4xl font-serif text-primary font-bold",
                children: n.title || n.name
            }), e.jsxs("p", {
                className: "text-gray-600 mt-2 flex items-center gap-2",
                children: [e.jsx("span", {
                    className: "bg-secondary px-2 py-0.5 rounded text-xs font-medium text-gray-700",
                    children: n.type
                }), e.jsx("span", {
                    children: "•"
                }), e.jsx("span", {
                    children: n.location
                })]
            })]
        }), e.jsxs("div", {
            className: "container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [e.jsxs("div", {
                className: "lg:col-span-2 space-y-8",
                children: [e.jsx("div", {
                    className: "rounded-2xl overflow-hidden shadow-sm h-[400px] relative bg-gray-200",
                    children: n.thumbnail_url || n.image ? e.jsx("img", {
                        src: n.thumbnail_url || n.image,
                        alt: n.title,
                        className: "w-full h-full object-cover"
                    }) : e.jsx("div", {
                        className: "flex items-center justify-center h-full text-gray-400",
                        children: "No Image Available"
                    })
                }), e.jsxs("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [e.jsx("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "About this stay"
                    }), e.jsx("p", {
                        className: "text-gray-600 leading-relaxed whitespace-pre-line",
                        children: n.description
                    })]
                }), e.jsxs("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [e.jsx("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "Amenities"
                    }), e.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: (n.amenities || []).map(a => {
                            const o = ns[a] || X;
                            return e.jsxs("div", {
                                className: "flex items-center gap-3 text-gray-600",
                                children: [e.jsx("div", {
                                    className: "w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary",
                                    children: e.jsx(o, {
                                        className: "w-4 h-4"
                                    })
                                }), e.jsx("span", {
                                    className: "text-sm",
                                    children: a
                                })]
                            }, a)
                        }
                        )
                    })]
                })]
            }), e.jsxs("div", {
                className: "space-y-6",
                children: [e.jsx("h2", {
                    className: "text-xl font-bold text-gray-800",
                    children: "Available Rooms"
                }), i.length === 0 ? e.jsx("div", {
                    className: "bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500",
                    children: "No rooms listed for this stay yet."
                }) : i.map(a => e.jsxs("div", {
                    className: "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
                    children: [e.jsx("div", {
                        className: "h-48 bg-gray-100 relative",
                        children: a.images && a.images.length > 0 ? e.jsx("img", {
                            src: a.images[0].url,
                            alt: a.name,
                            className: "w-full h-full object-cover"
                        }) : e.jsx("div", {
                            className: "flex items-center justify-center h-full text-gray-400",
                            children: "No Room Image"
                        })
                    }), e.jsxs("div", {
                        className: "p-5",
                        children: [e.jsx("h3", {
                            className: "font-bold text-lg text-gray-800 mb-1",
                            children: a.name
                        }), e.jsxs("div", {
                            className: "flex items-center gap-3 text-xs text-gray-500 mb-3",
                            children: [e.jsxs("span", {
                                children: [a.capacity, " Guests"]
                            }), e.jsx("span", {
                                children: "•"
                            }), e.jsx("span", {
                                children: a.description
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center justify-between mt-4 pt-4 border-t border-gray-100",
                            children: [e.jsxs("div", {
                                children: [e.jsx("span", {
                                    className: "text-sm text-gray-500",
                                    children: "Starts from"
                                }), e.jsxs("div", {
                                    className: "text-xl font-bold text-primary",
                                    children: ["₹", a.price]
                                })]
                            }), e.jsx("button", {
                                onClick: () => m(a),
                                className: "px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors",
                                children: "Book Now"
                            })]
                        })]
                    })]
                }, a.id))]
            })]
        })]
    })
}
  , ls = ({stop: t, routeCapacity: s, onAdd: r, isSelected: n}) => {
    const [l,i] = u.useState(0)
      , p = u.useRef(null)
      , h = () => {
        if (p.current) {
            const x = p.current.scrollLeft
              , d = p.current.offsetWidth
              , a = Math.round(x / d);
            i(a)
        }
    }
      , v = t.images || []
      , m = v.length > 0
      , c = ( () => {
        const x = t.price4Seater ?? t.detourPrice ?? 0
          , d = t.price6SeaterLuxurySuv ?? t.detourPrice ?? 0
          , a = t.price6to10SeaterSuv ?? t.detourPrice ?? 0
          , o = String(s || "").toLowerCase();
        return o.includes("luxury") ? Number(d) || 0 : o.includes("6-10") || o.includes("6 to 10") ? Number(a) || 0 : Number(x) || 0
    }
    )();
    return e.jsxs("div", {
        className: "w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative group transition-shadow hover:shadow-lg",
        children: [e.jsxs("div", {
            className: "relative w-full aspect-[3/2] bg-gray-100",
            children: [m ? e.jsx("div", {
                ref: p,
                onScroll: h,
                className: "w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide",
                style: {
                    scrollBehavior: "smooth"
                },
                children: v.map( (x, d) => e.jsx("div", {
                    className: "w-full flex-shrink-0 snap-center h-full",
                    children: e.jsx("img", {
                        src: x.url || x.preview,
                        alt: `${t.name} view ${d + 1}`,
                        className: "w-full aspect-[3/2] object-cover",
                        loading: "lazy"
                    })
                }, d))
            }) : e.jsx("div", {
                className: "w-full h-full flex items-center justify-center text-gray-300",
                children: e.jsx(dt, {
                    className: "w-12 h-12"
                })
            }), m && v.length > 1 && e.jsx("div", {
                className: "absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10",
                children: v.map( (x, d) => e.jsx("div", {
                    className: `w-1.5 h-1.5 rounded-full transition-all duration-300 ${l === d ? "bg-white w-3" : "bg-white/50"}`
                }, d))
            })]
        }), e.jsxs("div", {
            className: "p-4 flex-1 flex flex-col",
            children: [e.jsx("div", {
                className: "flex justify-between items-start mb-2",
                children: e.jsx("h3", {
                    className: "font-bold text-lg text-gray-900 leading-tight",
                    children: t.name
                })
            }), e.jsxs("div", {
                className: "text-xl font-bold text-primary mb-2",
                children: [c > 0 ? `₹${c}` : e.jsx("span", {
                    className: "text-green-600 text-lg",
                    children: "Free"
                }), c > 0 && e.jsx("span", {
                    className: "text-xs text-gray-500 font-normal ml-1",
                    children: "stop"
                })]
            }), e.jsx("p", {
                className: "text-sm text-gray-600 leading-relaxed whitespace-pre-line line-clamp-4 mb-4",
                children: t.description || "No description available for this stop."
            }), e.jsxs("div", {
                className: "mt-auto pt-3 border-t border-gray-50 flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center text-xs text-gray-400",
                    children: [e.jsx(ne, {
                        className: "w-3 h-3 mr-1"
                    }), e.jsx("span", {
                        children: "Recommended Stop"
                    })]
                }), e.jsxs("button", {
                    onClick: () => r && r(t),
                    "aria-label": n ? `Remove ${t.name} from route` : `Add ${t.name} to route`,
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors active:scale-95 ${n ? "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200" : "bg-primary text-white hover:bg-primary/90"}`,
                    children: [n ? e.jsx(mt, {
                        className: "w-4 h-4"
                    }) : e.jsx(je, {
                        className: "w-4 h-4"
                    }), n ? "Remove" : "Add Stop"]
                })]
            })]
        })]
    })
}
  , cs = [{
    label: "4 Seater",
    value: "4 Seater"
}, {
    label: "6 Seater Luxury SUV",
    value: "6 Seater Luxury SUV"
}, {
    label: "6-10 Seater SUV",
    value: "6-10 Seater SUV"
}]
  , Pe = () => {
    const {slugOrId: t, capacitySlug: s} = $e()
      , r = J()
      , n = oe()
      , {initializeBooking: l} = ee()
      , [i,p] = u.useState(null)
      , [h,v] = u.useState([])
      , [m,g] = u.useState(!0)
      , [c,x] = u.useState([])
      , [d,a] = u.useState("")
      , [o,y] = u.useState(!1)
      , N = b => {
        const S = String(b || "").toLowerCase();
        return S.includes("luxury") ? "6 Seater Luxury SUV" : S.includes("6-10") || S.includes("6 to 10") || S.includes("6–10") ? "6-10 Seater SUV" : S.includes("4") ? "4 Seater" : ""
    }
      , w = (b, S) => {
        const R = b.price4Seater ?? b.basePrice
          , j = b.price6SeaterLuxurySuv ?? b.basePrice
          , C = b.price6to10SeaterSuv ?? b.basePrice
          , P = String(S || "").toLowerCase();
        return P.includes("luxury") ? Number(j) || 0 : P.includes("6-10") || P.includes("6 to 10") ? Number(C) || 0 : Number(R) || 0
    }
      , f = b => ({
        p4: b.price4Seater ?? b.basePrice,
        p6l: b.price6SeaterLuxurySuv ?? b.basePrice,
        p610: b.price6to10SeaterSuv ?? b.basePrice
    })
      , I = (b, S) => {
        const R = b.price4Seater ?? b.detourPrice ?? 0
          , j = b.price6SeaterLuxurySuv ?? b.detourPrice ?? 0
          , C = b.price6to10SeaterSuv ?? b.detourPrice ?? 0
          , P = String(S || "").toLowerCase();
        return P.includes("luxury") ? Number(j) || 0 : P.includes("6-10") || P.includes("6 to 10") ? Number(C) || 0 : Number(R) || 0
    }
    ;
    u.useEffect( () => {
        const b = new URLSearchParams(n.search).get("capacity")
          , S = Tt(s)
          , R = N(S || b);
        R && a(R)
    }
    , [n.search, s]),
    u.useEffect( () => {
        t && (async () => {
            try {
                console.log("Fetching route details for slugOrId:", t);
                const {data: S} = await B.getRoutes();
                let R = S == null ? void 0 : S.find(C => String(C.id) === String(t))
                  , j = !!R;
                if (R || (R = It(S, t)),
                console.log("Found Route:", R),
                R) {
                    if (j) {
                        const T = new URLSearchParams(n.search).get("capacity") || R.capacity
                          , U = Q(R, T);
                        r(U, {
                            replace: !0
                        });
                        return
                    }
                    p(R);
                    const {data: C} = await B.getStopsByRouteId(R.id);
                    console.log("Stops Data from Service:", C);
                    const P = await Promise.all((C || []).map(async T => {
                        const {data: U} = await B.getStopImages(T.id);
                        return {
                            ...T,
                            images: U || []
                        }
                    }
                    ));
                    v(P),
                    a(T => T || N(R.capacity) || "4 Seater")
                } else
                    console.error("Route not found in list:", S)
            } catch (S) {
                console.error("Error fetching route details:", S)
            } finally {
                g(!1)
            }
        }
        )()
    }
    , [t, r, n.search]);
    const E = b => {
        c.some(S => S.id === b.id) ? x(S => S.filter(R => R.id !== b.id)) : x(S => [...S, b])
    }
      , z = i ? w(i, d || i.capacity) : 0
      , F = i ? c.reduce( (b, S) => b + I(S, d || i.capacity), 0) : 0
      , M = i ? z + F : 0
      , O = b => {
        if (!i)
            return;
        const S = d || i.capacity
          , R = w(i, S)
          , j = c.reduce( (P, T) => P + I(T, S), 0)
          , C = R + j;
        l("route", {
            ...i,
            capacity: S,
            basePrice: R,
            totalPrice: C,
            selectedStops: c
        }),
        r("/book")
    }
      , q = () => {
        O()
    }
      , G = b => {
        a(b),
        y(!1),
        i && r(Q(i, b), {
            replace: !0
        })
    }
    ;
    if (m)
        return e.jsx("div", {
            className: "min-h-screen flex items-center justify-center text-primary",
            children: "Loading..."
        });
    if (!i)
        return e.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: "Route not found"
        });
    const k = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${i.origin} to ${i.destination} ${i.type === "direct" ? "Cab Service" : "Sightseeing Tour"}`,
        description: i.description || `Book a comfortable cab from ${i.origin} to ${i.destination} with Toils Darjeeling.`,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: f(i).p4,
            highPrice: f(i).p610,
            offerCount: 3
        }
    };
    return e.jsxs("div", {
        className: "min-h-screen bg-snow pt-24 pb-20",
        children: [e.jsxs(de, {
            children: [e.jsxs("title", {
                children: [i.origin, " to ", i.destination, " Cabs & Taxis | Toils Darjeeling"]
            }), e.jsx("meta", {
                name: "description",
                content: `Book a ${d || i.capacity} cab from ${i.origin} to ${i.destination}. Enjoy a safe and comfortable journey with Toils Darjeeling.`
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify(k)
            })]
        }), e.jsxs("div", {
            className: "container mx-auto px-4 mb-8",
            children: [e.jsxs("button", {
                onClick: () => {
                    i.type === "direct" ? r("/direct-travel") : r("/experiences")
                }
                ,
                className: "flex items-center text-gray-500 hover:text-primary transition-colors mb-4",
                children: [e.jsx(ve, {
                    className: "w-4 h-4 mr-2"
                }), i.type === "direct" ? "Back to Direct Travel" : "Back to Sight Seeing"]
            }), e.jsxs("h1", {
                className: "text-3xl md:text-4xl font-serif text-primary font-bold",
                children: [i.origin, " to ", i.destination]
            }), e.jsxs("p", {
                className: "text-gray-600 mt-2 flex items-center gap-2",
                children: [e.jsx("span", {
                    className: "bg-secondary px-2 py-0.5 rounded text-xs font-medium text-gray-700",
                    children: i.type === "direct" ? "Direct Travel" : "Sight Seeing"
                }), e.jsx("span", {
                    children: "•"
                }), e.jsxs("span", {
                    children: ["Capacity: ", d || i.capacity]
                })]
            })]
        }), e.jsxs("div", {
            className: "container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [e.jsx("div", {
                className: "lg:col-span-1 space-y-8",
                children: e.jsxs("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [e.jsx("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "Trip Details"
                    }), e.jsxs("div", {
                        className: "space-y-4",
                        children: [e.jsxs("div", {
                            className: "flex justify-between border-b border-gray-100 pb-2",
                            children: [e.jsx("span", {
                                className: "text-gray-500",
                                children: "Total Price"
                            }), e.jsxs("div", {
                                className: "text-right",
                                children: [e.jsxs("span", {
                                    className: "font-bold text-primary text-xl",
                                    children: ["₹", M]
                                }), c.length > 0 && e.jsxs("p", {
                                    className: "text-xs text-gray-500",
                                    children: ["(Base ₹", z, " + Stops ₹", F, ")"]
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "flex justify-between border-b border-gray-100 pb-2",
                            children: [e.jsx("span", {
                                className: "text-gray-500",
                                children: "Prices"
                            }), e.jsx("div", {
                                className: "text-right text-sm text-gray-800",
                                children: ( () => {
                                    const {p4: b, p6l: S, p610: R} = f(i);
                                    return e.jsxs(e.Fragment, {
                                        children: [e.jsxs("div", {
                                            children: ["4 Seater: ₹", b]
                                        }), e.jsxs("div", {
                                            children: ["6 Seater Luxury SUV: ₹", S]
                                        }), e.jsxs("div", {
                                            children: ["6-10 Seater SUV: ₹", R]
                                        })]
                                    })
                                }
                                )()
                            })]
                        }), e.jsxs("div", {
                            className: "flex justify-between border-b border-gray-100 pb-2 relative",
                            children: [e.jsx("span", {
                                className: "text-gray-500",
                                children: "Vehicle Type"
                            }), e.jsxs("div", {
                                className: "relative",
                                children: [e.jsxs("button", {
                                    type: "button",
                                    onClick: () => y(!o),
                                    className: "font-bold text-gray-800 hover:text-primary transition-colors flex items-center gap-1",
                                    children: [d || i.capacity, e.jsx(fe, {
                                        className: `w-4 h-4 transition-transform ${o ? "rotate-180" : ""}`
                                    })]
                                }), o && e.jsx("div", {
                                    className: "absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-2",
                                    children: cs.map(b => e.jsx("button", {
                                        onClick: () => G(b.value),
                                        className: `w-full text-left px-4 py-2 hover:bg-gray-50 text-sm ${(d || i.capacity) === b.value ? "text-primary font-bold bg-primary/5" : "text-gray-700"}`,
                                        children: b.label
                                    }, b.value))
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "pt-2",
                            children: [e.jsx("span", {
                                className: "block text-gray-500 mb-1",
                                children: "Description"
                            }), e.jsx("p", {
                                className: "text-sm text-gray-600 leading-relaxed",
                                children: i.description || `Enjoy a comfortable journey from ${i.origin} to ${i.destination} with our expert drivers.`
                            })]
                        })]
                    }), e.jsx("button", {
                        onClick: q,
                        className: "w-full mt-6 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md",
                        children: "Book Now"
                    })]
                })
            }), e.jsxs("div", {
                className: "lg:col-span-2 space-y-6",
                children: [e.jsxs("h2", {
                    className: "text-2xl font-bold text-gray-800 flex items-center gap-2",
                    children: [e.jsx(ne, {
                        className: "w-6 h-6 text-accent"
                    }), i.type === "direct" ? "Journey Details" : "Stops & Sightseeing"]
                }), h.length === 0 ? e.jsx("div", {
                    className: "bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500",
                    children: i.type === "direct" ? "This is a direct point-to-point journey without scheduled stops." : "No specific stops listed for this route. It's a direct journey!"
                }) : e.jsx("div", {
                    className: "relative border-l-2 border-dashed border-gray-300 ml-4 pl-8 space-y-12 py-4",
                    children: h.map( (b, S) => e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx("div", {
                            className: "absolute -left-[41px] top-8 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-sm z-10"
                        }), e.jsx(ls, {
                            stop: b,
                            routeCapacity: d || i.capacity,
                            onAdd: E,
                            isSelected: c.some(R => R.id === b.id)
                        })]
                    }, b.id))
                })]
            })]
        })]
    })
}
  , H = ({children: t}) => {
    const s = oe()
      , r = ["/sight-seeing", "/direct-travel", "/experiences"].includes(s.pathname);
    return e.jsxs(e.Fragment, {
        children: [e.jsx(wt, {
            isTransparent: r
        }), t, e.jsx(Et, {})]
    })
}
  , ds = () => {
    const t = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Toils Darjeeling",
        image: "https://toils.in/vite.svg",
        description: "Premium cab booking and sightseeing services in Darjeeling, Gangtok, and Sikkim.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Darjeeling",
            addressRegion: "West Bengal",
            addressCountry: "IN"
        },
        url: "https://toils.in",
        telephone: "+91-9876543210",
        priceRange: "₹"
    };
    return e.jsxs("main", {
        children: [e.jsxs(de, {
            children: [e.jsx("title", {
                children: "Toils - Darjeeling Cabs and Sightseeing Packages"
            }), e.jsx("meta", {
                name: "description",
                content: "Book affordable cabs for NJP to Darjeeling, Bagdogra airport transfers, and custom sightseeing tour packages in Darjeeling, Kalimpong, and Gangtok."
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify(t)
            })]
        }), e.jsx(St, {}), e.jsx($t, {}), e.jsx(kt, {})]
    })
}
;
function ms() {
    return e.jsx(xt, {
        children: e.jsx(Ut, {
            children: e.jsx(ts, {
                children: e.jsxs(ut, {
                    children: [e.jsx(is, {}), e.jsx("div", {
                        className: "min-h-screen w-full overflow-x-hidden bg-snow",
                        children: e.jsxs(pt, {
                            children: [e.jsx(_, {
                                path: "/admin",
                                element: e.jsx(Qt, {})
                            }), e.jsx(_, {
                                path: "/",
                                element: e.jsx(H, {
                                    children: e.jsx(ds, {})
                                })
                            }), e.jsx(_, {
                                path: "/hotels-and-stays",
                                element: e.jsx(ht, {
                                    to: "/",
                                    replace: !0
                                })
                            }), e.jsx(_, {
                                path: "/sight-seeing",
                                element: e.jsx(H, {
                                    children: e.jsx(Ce, {
                                        initialCategory: "routes"
                                    })
                                })
                            }), e.jsx(_, {
                                path: "/direct-travel",
                                element: e.jsx(H, {
                                    children: e.jsx(Ce, {
                                        initialCategory: "direct"
                                    })
                                })
                            }), e.jsx(_, {
                                path: "/contact",
                                element: e.jsx(H, {
                                    children: e.jsx(es, {})
                                })
                            }), e.jsx(_, {
                                path: "/stay/:id",
                                element: e.jsx(H, {
                                    children: e.jsx(os, {})
                                })
                            }), e.jsx(_, {
                                path: "/route/:slugOrId",
                                element: e.jsx(H, {
                                    children: e.jsx(Pe, {})
                                })
                            }), e.jsx(_, {
                                path: "/route/:slugOrId/:capacitySlug",
                                element: e.jsx(H, {
                                    children: e.jsx(Pe, {})
                                })
                            }), e.jsx(_, {
                                path: "/book",
                                element: e.jsx(H, {
                                    children: e.jsx(as, {})
                                })
                            })]
                        })
                    })]
                })
            })
        })
    })
}
gt.createRoot(document.getElementById("root")).render(e.jsx(Z.StrictMode, {
    children: e.jsx(ms, {})
}));

