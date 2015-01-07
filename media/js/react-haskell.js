// EventProperties
function js_bubbles(obj) {return obj.bubbles;}
function js_cancelable(obj) {return obj.cancelable;}
function js_currentTarget(obj) {return obj.currentTarget;}
function js_defaultPrevented(obj) {return obj.defaultPrevented;}
function js_eventPhase(obj) {return obj.eventPhase;}
function js_isTrusted(obj) {return obj.isTrusted;}
//                  -- ,  nativeEvent :: DOMEvent
//                  -- , preventDefault :: IO ()
//                  -- ,  stopPropagation :: IO ()
function js_evtTarget(obj) {return obj.evtTarget;}
//                  --, timeStamp :: DateTime

//ModifierKeys
function js_type(obj) {return obj.type;}
function js_altKey(obj) {return obj.altKey;}
function js_ctrlKey(obj) {return obj.ctrlKey;}
function js_metaKey(obj) {return obj.metaKey;}
function js_shiftKey(obj) {return obj.shiftKey;}

//MouseEvent
function js_button(obj) {return obj.button;}
function js_buttons(obj) {return obj.buttons;}
function js_clientX(obj) {return obj.clientX;}
function js_clientY(obj) {return obj.clientY;}
function js_pageX(obj) {return obj.pageX;}
function js_pageY(obj) {return obj.pageY;}
//--                             , relatedTarget :: Unpacked
function js_screenX(obj) {return obj.screenX;}
function js_screenY(obj) {return obj.screenY;}

// KeyboardEvent
function js_charCode(obj) {return obj.charCode;}
function js_key(obj) {return obj.key;}
function js_keyCode(obj) {return obj.keyCode;}
function js_locale(obj) {return obj.locale;}
function js_location(obj) {return obj.location;}
function js_repeat(obj) {return obj.repeat;}
function js_which(obj) {return obj.which;}

//ChangeEvent
function js_targetValue(obj) {return obj.target.value;}

//FocusEvent
function js_focusEventProperties(obj) {return obj.focusEventProperties;}
function js_domEventTarget(obj) {return obj.domEventTarget;}
function js_relatedTarget(obj) {return obj.relatedTarget;}

function js_empty_object() {return {};}
function js_set_field(obj, field, value) {obj[field] = value;}
function js_set_field_True(obj, field, value) {obj[field] = true;}
function js_set_field_False(obj, field, value) {obj[field] = false;}

function js_set_onClick(cb, attrs) {
    attrs.onClick = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onDoubleClick(cb, attrs) {
    attrs.onDoubleClick = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onChange(cb, attrs) {
    attrs.onChange = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onKeyUp(cb, attrs) {
    attrs.onKeyUp = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onKeyPress(cb, attrs) {
    attrs.onKeyPress = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onKeyDown(cb, attrs) {
    attrs.onKeyDown = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onBlur(cb, attrs) {
    attrs.onBlur = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onMouseEnter(cb, attrs) {
    attrs.onMouseEnter = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}
function js_set_onMouseLeave(cb, attrs) {
    attrs.onMouseLeave = function(e) {
        e.persist();
        B(A(cb,[[0,e],0]));
    };
}

function js_React_DOM(tagName, attrs) {return React.DOM[tagName](attrs);}

function js_empty() {return [];}
function js_push(a,v) {a.push(v);}

// Ptr (Maybe React)
function js_React_getDomNode(r) {
  try {
    var ret = [1, [0, r.getDOMNode()]];
  } catch(e) {
    return [0];
  }
  return ret;
}

// Normal elements
function js_React_DOM_a(a,c) {return React.DOM.a(a,c);}
function js_React_DOM_abbr(a,c) {return React.DOM.abbr(a,c);}
function js_React_DOM_address(a,c) {return React.DOM.address(a,c);}
function js_React_DOM_article(a,c) {return React.DOM.article(a,c);}
function js_React_DOM_aside(a,c) {return React.DOM.aside(a,c);}
function js_React_DOM_audio(a,c) {return React.DOM.audio(a,c);}
function js_React_DOM_b(a,c) {return React.DOM.b(a,c);}
function js_React_DOM_bdi(a,c) {return React.DOM.bdi(a,c);}
function js_React_DOM_bdo(a,c) {return React.DOM.bdo(a,c);}
function js_React_DOM_big(a,c) {return React.DOM.big(a,c);}
function js_React_DOM_blockquote(a,c) {return React.DOM.blockquote(a,c);}
function js_React_DOM_body(a,c) {return React.DOM.body(a,c);}
function js_React_DOM_button(a,c) {return React.DOM.button(a,c);}
function js_React_DOM_canvas(a,c) {return React.DOM.canvas(a,c);}
function js_React_DOM_caption(a,c) {return React.DOM.caption(a,c);}
function js_React_DOM_cite(a,c) {return React.DOM.cite(a,c);}
function js_React_DOM_code(a,c) {return React.DOM.code(a,c);}
function js_React_DOM_colgroup(a,c) {return React.DOM.colgroup(a,c);}
function js_React_DOM_data(a,c) {return React.DOM.data(a,c);}
function js_React_DOM_datalist(a,c) {return React.DOM.datalist(a,c);}
function js_React_DOM_dd(a,c) {return React.DOM.dd(a,c);}
function js_React_DOM_del(a,c) {return React.DOM.del(a,c);}
function js_React_DOM_details(a,c) {return React.DOM.details(a,c);}
function js_React_DOM_dfn(a,c) {return React.DOM.dfn(a,c);}
function js_React_DOM_div(a,c) {return React.DOM.div(a,c);}
function js_React_DOM_dl(a,c) {return React.DOM.dl(a,c);}
function js_React_DOM_dt(a,c) {return React.DOM.dt(a,c);}
function js_React_DOM_em(a,c) {return React.DOM.em(a,c);}
function js_React_DOM_fieldset(a,c) {return React.DOM.fieldset(a,c);}
function js_React_DOM_figcaption(a,c) {return React.DOM.figcaption(a,c);}
function js_React_DOM_figure(a,c) {return React.DOM.figure(a,c);}
function js_React_DOM_footer(a,c) {return React.DOM.footer(a,c);}
function js_React_DOM_form(a,c) {return React.DOM.form(a,c);}
function js_React_DOM_h1(a,c) {return React.DOM.h1(a,c);}
function js_React_DOM_h2(a,c) {return React.DOM.h2(a,c);}
function js_React_DOM_h3(a,c) {return React.DOM.h3(a,c);}
function js_React_DOM_h4(a,c) {return React.DOM.h4(a,c);}
function js_React_DOM_h5(a,c) {return React.DOM.h5(a,c);}
function js_React_DOM_h6(a,c) {return React.DOM.h6(a,c);}
function js_React_DOM_head(a,c) {return React.DOM.head(a,c);}
function js_React_DOM_header(a,c) {return React.DOM.header(a,c);}
function js_React_DOM_html(a,c) {return React.DOM.html(a,c);}
function js_React_DOM_i(a,c) {return React.DOM.i(a,c);}
function js_React_DOM_iframe(a,c) {return React.DOM.iframe(a,c);}
function js_React_DOM_ins(a,c) {return React.DOM.ins(a,c);}
function js_React_DOM_kbd(a,c) {return React.DOM.kbd(a,c);}
function js_React_DOM_label(a,c) {return React.DOM.label(a,c);}
function js_React_DOM_legend(a,c) {return React.DOM.legend(a,c);}
function js_React_DOM_li(a,c) {return React.DOM.li(a,c);}
function js_React_DOM_main(a,c) {return React.DOM.main(a,c);}
function js_React_DOM_map(a,c) {return React.DOM.map(a,c);}
function js_React_DOM_mark(a,c) {return React.DOM.mark(a,c);}
function js_React_DOM_menu(a,c) {return React.DOM.menu(a,c);}
function js_React_DOM_menuitem(a,c) {return React.DOM.menuitem(a,c);}
function js_React_DOM_meter(a,c) {return React.DOM.meter(a,c);}
function js_React_DOM_nav(a,c) {return React.DOM.nav(a,c);}
function js_React_DOM_noscript(a,c) {return React.DOM.noscript(a,c);}
function js_React_DOM_object(a,c) {return React.DOM.object(a,c);}
function js_React_DOM_ol(a,c) {return React.DOM.ol(a,c);}
function js_React_DOM_optgroup(a,c) {return React.DOM.optgroup(a,c);}
function js_React_DOM_option(a,c) {return React.DOM.option(a,c);}
function js_React_DOM_output(a,c) {return React.DOM.output(a,c);}
function js_React_DOM_p(a,c) {return React.DOM.p(a,c);}
function js_React_DOM_pre(a,c) {return React.DOM.pre(a,c);}
function js_React_DOM_progress(a,c) {return React.DOM.progress(a,c);}
function js_React_DOM_q(a,c) {return React.DOM.q(a,c);}
function js_React_DOM_rp(a,c) {return React.DOM.rp(a,c);}
function js_React_DOM_rt(a,c) {return React.DOM.rt(a,c);}
function js_React_DOM_ruby(a,c) {return React.DOM.ruby(a,c);}
function js_React_DOM_s(a,c) {return React.DOM.s(a,c);}
function js_React_DOM_samp(a,c) {return React.DOM.samp(a,c);}
function js_React_DOM_section(a,c) {return React.DOM.section(a,c);}
function js_React_DOM_select(a,c) {return React.DOM.select(a,c);}
function js_React_DOM_small(a,c) {return React.DOM.small(a,c);}
function js_React_DOM_span(a,c) {return React.DOM.span(a,c);}
function js_React_DOM_strong(a,c) {return React.DOM.strong(a,c);}
function js_React_DOM_sub(a,c) {return React.DOM.sub(a,c);}
function js_React_DOM_summary(a,c) {return React.DOM.summary(a,c);}
function js_React_DOM_sup(a,c) {return React.DOM.sup(a,c);}
function js_React_DOM_table(a,c) {return React.DOM.table(a,c);}
function js_React_DOM_tbody(a,c) {return React.DOM.tbody(a,c);}
function js_React_DOM_td(a,c) {return React.DOM.td(a,c);}
function js_React_DOM_tfoot(a,c) {return React.DOM.tfoot(a,c);}
function js_React_DOM_th(a,c) {return React.DOM.th(a,c);}
function js_React_DOM_thead(a,c) {return React.DOM.thead(a,c);}
function js_React_DOM_time(a,c) {return React.DOM.time(a,c);}
function js_React_DOM_tr(a,c) {return React.DOM.tr(a,c);}
function js_React_DOM_u(a,c) {return React.DOM.u(a,c);}
function js_React_DOM_ul(a,c) {return React.DOM.ul(a,c);}
function js_React_DOM_var(a,c) {return React.DOM.var(a,c);}
function js_React_DOM_video(a,c) {return React.DOM.video(a,c);}

// No-child
function js_React_DOM_area(a) {return React.DOM.area(a);}
function js_React_DOM_base(a) {return React.DOM.base(a);}
function js_React_DOM_br(a) {return React.DOM.br(a);}
function js_React_DOM_col(a) {return React.DOM.col(a);}
function js_React_DOM_embed(a) {return React.DOM.embed(a);}
function js_React_DOM_hr(a) {return React.DOM.hr(a);}
function js_React_DOM_img(a) {return React.DOM.img(a);}
function js_React_DOM_input(a) {return React.DOM.input(a);}
function js_React_DOM_keygen(a) {return React.DOM.keygen(a);}
function js_React_DOM_link(a) {return React.DOM.link(a);}
function js_React_DOM_meta(a) {return React.DOM.meta(a);}
function js_React_DOM_param(a) {return React.DOM.param(a);}
function js_React_DOM_source(a) {return React.DOM.source(a);}
function js_React_DOM_track(a) {return React.DOM.track(a);}
function js_React_DOM_wbr(a) {return React.DOM.wbr(a);}

// text-only
function js_React_DOM_script(a,t) {return React.DOM.script(a,t);}
function js_React_DOM_style(a,t) {return React.DOM.style(a,t);}
function js_React_DOM_textarea(a,t) {return React.DOM.textarea(a,t);}
function js_React_DOM_title(a,t) {return React.DOM.title(a,t);}
function js_id(a) {return a;}

// custom
function js_React_DOM_leaf(name, a) { return React.DOM[name](a); }
function js_React_DOM_parent(name, a, c) { return React.DOM[name](a, c); }

function js_parseChangeEvent(raw) {
    // wrap the string in two constructors - Ptr and JSString
    return [0, raw.target.value];
}

function js_parseKeyboardEvent(raw) {
    return [
        0,
        [
            0,
            raw.altKey,
            raw.ctrlKey,
            raw.metaKey,
            raw.shiftKey
        ],
        raw.charCode,
        raw.key,
        raw.keyCode,
        raw.locale,
        raw.location,
        raw.repeat,
        raw.which
    ];
}

function js_parseMouseEvent(raw) {
    return [
        0,
        [
            0,
            raw.altKey,
            raw.ctrlKey,
            raw.metaKey,
            raw.shiftKey
        ],
        raw.button,
        raw.clientX,
        raw.clientY,
        raw.pageX,
        raw.pageY,
        raw.screenX,
        raw.screenY
    ];
}

// polyfill from http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function js_raf(cb) {
    return window.requestAnimationFrame(function(time) {
        B(A(cb,[[0,time],0]));
    });
}

function js_createClass(render, setState) {
    return React.createClass({
        render: render
    });
}

function js_bezier(x0, y0, x1, y1, x) {
    return BezierEasing(x0, y0, x1, y1)(x);
}

function js_render(e, r){
    React.render(e, r);
}

function js_cancelRaf(id) {
    window.cancelAnimationFrame(id);
}

/**
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 – MIT License
 *
 * Credits: is based on Firefox's nsSMILKeySpline.cpp
 * Usage:
 * var spline = BezierEasing(0.25, 0.1, 0.25, 1.0)
 * spline(x) => returns the easing value | x must be in [0, 1] range
 *
 */
(function (definition) {
  if (typeof exports === "object") {
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    define([], definition);
  } else {
    window.BezierEasing = definition();
  }
}(function () {
  var global = this;

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = 'Float32Array' in global;

  function BezierEasing (mX1, mY1, mX2, mY2) {
    // Validate arguments
    if (arguments.length !== 4) {
      throw new Error("BezierEasing requires 4 arguments.");
    }
    for (var i=0; i<4; ++i) {
      if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
        throw new Error("BezierEasing arguments should be integers.");
      }
    }
    if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
      throw new Error("BezierEasing x values must be in [0, 1] range.");
    }

    var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
    function C (aA1)      { return 3.0 * aA1; }

    // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    function calcBezier (aT, aA1, aA2) {
      return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
    }

    // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    function getSlope (aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function newtonRaphsonIterate (aX, aGuessT) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function calcSampleValues () {
      for (var i = 0; i < kSplineTableSize; ++i) {
        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function binarySubdivide (aX, aA, aB) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }

    function getTForX (aX) {
      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
      }
    }

    var _precomputed = false;
    function precompute() {
      _precomputed = true;
      if (mX1 != mY1 || mX2 != mY2)
        calcSampleValues();
    }

    var f = function (aX) {
      if (!_precomputed) precompute();
      if (mX1 === mY1 && mX2 === mY2) return aX; // linear
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (aX === 0) return 0;
      if (aX === 1) return 1;
      return calcBezier(getTForX(aX), mY1, mY2);
    };

    f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };

    var args = [mX1, mY1, mX2, mY2];
    var str = "BezierEasing("+args+")";
    f.toString = function () { return str; };

    var css = "cubic-bezier("+args+")";
    f.toCSS = function () { return css; };

    return f;
  }

  // CSS mapping
  BezierEasing.css = {
    "ease":        BezierEasing(0.25, 0.1, 0.25, 1.0),
    "linear":      BezierEasing(0.00, 0.0, 1.00, 1.0),
    "ease-in":     BezierEasing(0.42, 0.0, 1.00, 1.0),
    "ease-out":    BezierEasing(0.00, 0.0, 0.58, 1.0),
    "ease-in-out": BezierEasing(0.42, 0.0, 0.58, 1.0)
  };

  return BezierEasing;

}));

// This object will hold all exports.
var Haste = {};

/* Thunk
   Creates a thunk representing the given closure.
   Since we want automatic memoization of as many expressions as possible, we
   use a JS object as a sort of tagged pointer, where the member x denotes the
   object actually pointed to. If a "pointer" points to a thunk, it has a
   member 't' which is set to true; if it points to a value, be it a function,
   a value of an algebraic type of a primitive value, it has no member 't'.
*/

function T(f) {
    this.f = f;
}

function F(f) {
    this.f = f;
}

// Special object used for blackholing.
var __blackhole = {};

/* Apply
   Applies the function f to the arguments args. If the application is under-
   saturated, a closure is returned, awaiting further arguments. If it is over-
   saturated, the function is fully applied, and the result (assumed to be a
   function) is then applied to the remaining arguments.
*/
function A(f, args) {
    if(f instanceof T) {
        f = E(f);
    }
    // Closure does some funny stuff with functions that occasionally
    // results in non-functions getting applied, so we have to deal with
    // it.
    if(!(f instanceof Function)) {
        f = B(f);
        if(!(f instanceof Function)) {
            return f;
        }
    }

    if(f.arity === undefined) {
        f.arity = f.length;
    }
    if(args.length === f.arity) {
        switch(f.arity) {
            case 0:  return f();
            case 1:  return f(args[0]);
            default: return f.apply(null, args);
        }
    } else if(args.length > f.arity) {
        switch(f.arity) {
            case 0:  return f();
            case 1:  return A(f(args.shift()), args);
            default: return A(f.apply(null, args.splice(0, f.arity)), args);
        }
    } else {
        var g = function() {
            return A(f, args.concat(Array.prototype.slice.call(arguments)));
        };
        g.arity = f.arity - args.length;
        return g;
    }
}

/* Eval
   Evaluate the given thunk t into head normal form.
   If the "thunk" we get isn't actually a thunk, just return it.
*/
function E(t) {
    if(t instanceof T) {
        if(t.f != __blackhole) {
            var f = t.f;
            t.f = __blackhole;
            t.x = f();
        }
        return t.x;
    } else {
        return t;
    }
}

/* Bounce
   Bounce on a trampoline for as long as we get a function back.
*/
function B(f) {
    while(f instanceof F) {
        var fun = f.f;
        f = __blackhole;
        f = fun();
    }
    return f;
}

// Export Haste, A, B and E. Haste because we need to preserve exports, A, B
// and E because they're handy for Haste.Foreign.
if(!window) {
    var window = {};
}
window['Haste'] = Haste;
window['A'] = A;
window['E'] = E;
window['B'] = B;


/* Throw an error.
   We need to be able to use throw as an exception so we wrap it in a function.
*/
function die(err) {
    throw err;
}

function quot(a, b) {
    return (a-a%b)/b;
}

function quotRemI(a, b) {
    return [0, (a-a%b)/b, a%b];
}

// 32 bit integer multiplication, with correct overflow behavior
// note that |0 or >>>0 needs to be applied to the result, for int and word
// respectively.
if(Math.imul) {
    var imul = Math.imul;
} else {
    var imul = function(a, b) {
        // ignore high a * high a as the result will always be truncated
        var lows = (a & 0xffff) * (b & 0xffff); // low a * low b
        var aB = (a & 0xffff) * (b & 0xffff0000); // low a * high b
        var bA = (a & 0xffff0000) * (b & 0xffff); // low b * high a
        return lows + aB + bA; // sum will not exceed 52 bits, so it's safe
    }
}

function addC(a, b) {
    var x = a+b;
    return [0, x & 0xffffffff, x > 0x7fffffff];
}

function subC(a, b) {
    var x = a-b;
    return [0, x & 0xffffffff, x < -2147483648];
}

function sinh (arg) {
    return (Math.exp(arg) - Math.exp(-arg)) / 2;
}

function tanh (arg) {
    return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
}

function cosh (arg) {
    return (Math.exp(arg) + Math.exp(-arg)) / 2;
}

// Scratch space for byte arrays.
var rts_scratchBuf = new ArrayBuffer(8);
var rts_scratchW32 = new Uint32Array(rts_scratchBuf);
var rts_scratchFloat = new Float32Array(rts_scratchBuf);
var rts_scratchDouble = new Float64Array(rts_scratchBuf);

function decodeFloat(x) {
    rts_scratchFloat[0] = x;
    var sign = x < 0 ? -1 : 1;
    var exp = ((rts_scratchW32[0] >> 23) & 0xff) - 150;
    var man = rts_scratchW32[0] & 0x7fffff;
    if(exp === 0) {
        ++exp;
    } else {
        man |= (1 << 23);
    }
    return [0, sign*man, exp];
}

function decodeDouble(x) {
    rts_scratchDouble[0] = x;
    var sign = x < 0 ? -1 : 1;
    var manHigh = rts_scratchW32[1] & 0xfffff;
    var manLow = rts_scratchW32[0];
    var exp = ((rts_scratchW32[1] >> 20) & 0x7ff) - 1075;
    if(exp === 0) {
        ++exp;
    } else {
        manHigh |= (1 << 20);
    }
    return [0, sign, manHigh, manLow, exp];
}

function isFloatFinite(x) {
    return isFinite(x);
}

function isDoubleFinite(x) {
    return isFinite(x);
}

function err(str) {
    die(toJSStr(str));
}

/* unpackCString#
   NOTE: update constructor tags if the code generator starts munging them.
*/
function unCStr(str) {return unAppCStr(str, [0]);}

function unFoldrCStr(str, f, z) {
    var acc = z;
    for(var i = str.length-1; i >= 0; --i) {
        acc = B(A(f, [[0, str.charCodeAt(i)], acc]));
    }
    return acc;
}

function unAppCStr(str, chrs) {
    var i = arguments[2] ? arguments[2] : 0;
    if(i >= str.length) {
        return E(chrs);
    } else {
        return [1,[0,str.charCodeAt(i)],new T(function() {
            return unAppCStr(str,chrs,i+1);
        })];
    }
}

function charCodeAt(str, i) {return str.charCodeAt(i);}

function fromJSStr(str) {
    return unCStr(E(str));
}

function toJSStr(hsstr) {
    var s = '';
    for(var str = E(hsstr); str[0] == 1; str = E(str[2])) {
        s += String.fromCharCode(E(str[1])[1]);
    }
    return s;
}

// newMutVar
function nMV(val) {
    return ({x: val});
}

// readMutVar
function rMV(mv) {
    return mv.x;
}

// writeMutVar
function wMV(mv, val) {
    mv.x = val;
}

// atomicModifyMutVar
function mMV(mv, f) {
    var x = B(A(f, [mv.x]));
    mv.x = x[1];
    return x[2];
}

function localeEncoding() {
    var le = newByteArr(5);
    le['v']['i8'][0] = 'U'.charCodeAt(0);
    le['v']['i8'][1] = 'T'.charCodeAt(0);
    le['v']['i8'][2] = 'F'.charCodeAt(0);
    le['v']['i8'][3] = '-'.charCodeAt(0);
    le['v']['i8'][4] = '8'.charCodeAt(0);
    return le;
}

var isDoubleNaN = isNaN;
var isFloatNaN = isNaN;

function isDoubleInfinite(d) {
    return (d === Infinity);
}
var isFloatInfinite = isDoubleInfinite;

function isDoubleNegativeZero(x) {
    return (x===0 && (1/x)===-Infinity);
}
var isFloatNegativeZero = isDoubleNegativeZero;

function strEq(a, b) {
    return a == b;
}

function strOrd(a, b) {
    if(a < b) {
        return [0];
    } else if(a == b) {
        return [1];
    }
    return [2];
}

function jsCatch(act, handler) {
    try {
        return B(A(act,[0]));
    } catch(e) {
        return B(A(handler,[e, 0]));
    }
}

/* Haste represents constructors internally using 1 for the first constructor,
   2 for the second, etc.
   However, dataToTag should use 0, 1, 2, etc. Also, booleans might be unboxed.
 */
function dataToTag(x) {
    if(x instanceof Array) {
        return x[0];
    } else {
        return x;
    }
}

function __word_encodeDouble(d, e) {
    return d * Math.pow(2,e);
}

var __word_encodeFloat = __word_encodeDouble;
var jsRound = Math.round; // Stupid GHC doesn't like periods in FFI IDs...
var realWorld = undefined;
if(typeof _ == 'undefined') {
    var _ = undefined;
}

function popCnt(i) {
    i = i - ((i >> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
    return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
}

function jsAlert(val) {
    if(typeof alert != 'undefined') {
        alert(val);
    } else {
        print(val);
    }
}

function jsLog(val) {
    console.log(val);
}

function jsPrompt(str) {
    var val;
    if(typeof prompt != 'undefined') {
        val = prompt(str);
    } else {
        print(str);
        val = readline();
    }
    return val == undefined ? '' : val.toString();
}

function jsEval(str) {
    var x = eval(str);
    return x == undefined ? '' : x.toString();
}

function isNull(obj) {
    return obj === null;
}

function jsRead(str) {
    return Number(str);
}

function jsShowI(val) {return val.toString();}
function jsShow(val) {
    var ret = val.toString();
    return val == Math.round(val) ? ret + '.0' : ret;
}

function jsGetMouseCoords(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) 	{
	posx = e.pageX;
	posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
	posx = e.clientX + document.body.scrollLeft
	    + document.documentElement.scrollLeft;
	posy = e.clientY + document.body.scrollTop
	    + document.documentElement.scrollTop;
    }
    return [posx - (e.currentTarget.offsetLeft || 0),
	    posy - (e.currentTarget.offsetTop || 0)];
}

function jsSetCB(elem, evt, cb) {
    // Count return press in single line text box as a change event.
    if(evt == 'change' && elem.type.toLowerCase() == 'text') {
        setCB(elem, 'keyup', function(k) {
            if(k == '\n'.charCodeAt(0)) {
                B(A(cb,[[0,k.keyCode],0]));
            }
        });
    }

    var fun;
    switch(evt) {
    case 'click':
    case 'dblclick':
    case 'mouseup':
    case 'mousedown':
        fun = function(x) {
            var mpos = jsGetMouseCoords(x);
            var mx = [0,mpos[0]];
            var my = [0,mpos[1]];
            B(A(cb,[[0,x.button],[0,mx,my],0]));
        };
        break;
    case 'mousemove':
    case 'mouseover':
        fun = function(x) {
            var mpos = jsGetMouseCoords(x);
            var mx = [0,mpos[0]];
            var my = [0,mpos[1]];
            B(A(cb,[[0,mx,my],0]));
        };
        break;
    case 'keypress':
    case 'keyup':
    case 'keydown':
        fun = function(x) {B(A(cb,[[0,x.keyCode],0]));};
        break;        
    default:
        fun = function() {B(A(cb,[0]));};
        break;
    }
    return setCB(elem, evt, fun);
}

function setCB(elem, evt, cb) {
    if(elem.addEventListener) {
        elem.addEventListener(evt, cb, false);
        return true;
    } else if(elem.attachEvent) {
        elem.attachEvent('on'+evt, cb);
        return true;
    }
    return false;
}

function jsSetTimeout(msecs, cb) {
    window.setTimeout(function() {B(A(cb,[0]));}, msecs);
}

function jsGet(elem, prop) {
    return elem[prop].toString();
}

function jsSet(elem, prop, val) {
    elem[prop] = val;
}

function jsGetAttr(elem, prop) {
    if(elem.hasAttribute(prop)) {
        return elem.getAttribute(prop).toString();
    } else {
        return "";
    }
}

function jsSetAttr(elem, prop, val) {
    elem.setAttribute(prop, val);
}

function jsGetStyle(elem, prop) {
    return elem.style[prop].toString();
}

function jsSetStyle(elem, prop, val) {
    elem.style[prop] = val;
}

function jsKillChild(child, parent) {
    parent.removeChild(child);
}

function jsClearChildren(elem) {
    while(elem.hasChildNodes()){
        elem.removeChild(elem.lastChild);
    }
}

function jsFind(elem) {
    var e = document.getElementById(elem)
    if(e) {
        return [1,[0,e]];
    }
    return [0];
}

function jsQuerySelectorAll(elem, query) {
  var els = [0],
      len, nl, i;

  if (!elem || typeof elem.querySelectorAll !== 'function') {
    return els;
  }

  nl = elem.querySelectorAll(query);
  len = nl.length;

  for (i=len-1; i >= 0; --i) {
    els = [1, [0, nl[i]], els];
  }

  return els;
}

function jsCreateElem(tag) {
    return document.createElement(tag);
}

function jsCreateTextNode(str) {
    return document.createTextNode(str);
}

function jsGetChildBefore(elem) {
    elem = elem.previousSibling;
    while(elem) {
        if(typeof elem.tagName != 'undefined') {
            return [1,[0,elem]];
        }
        elem = elem.previousSibling;
    }
    return [0];
}

function jsGetLastChild(elem) {
    var len = elem.childNodes.length;
    for(var i = len-1; i >= 0; --i) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            return [1,[0,elem.childNodes[i]]];
        }
    }
    return [0];
}


function jsGetFirstChild(elem) {
    var len = elem.childNodes.length;
    for(var i = 0; i < len; i++) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            return [1,[0,elem.childNodes[i]]];
        }
    }
    return [0];
}


function jsGetChildren(elem) {
    var children = [0];
    var len = elem.childNodes.length;
    for(var i = len-1; i >= 0; --i) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            children = [1, [0,elem.childNodes[i]], children];
        }
    }
    return children;
}

function jsSetChildren(elem, children) {
    children = E(children);
    jsClearChildren(elem, 0);
    while(children[0] === 1) {
        elem.appendChild(E(E(children[1])[1]));
        children = E(children[2]);
    }
}

function jsAppendChild(child, container) {
    container.appendChild(child);
}

function jsAddChildBefore(child, container, after) {
    container.insertBefore(child, after);
}

var jsRand = Math.random;

// Concatenate a Haskell list of JS strings
function jsCat(strs, sep) {
    var arr = [];
    strs = E(strs);
    while(strs[0]) {
        strs = E(strs);
        arr.push(E(strs[1])[1]);
        strs = E(strs[2]);
    }
    return arr.join(sep);
}

var jsJSONParse = JSON.parse;

// JSON stringify a string
function jsStringify(str) {
    return JSON.stringify(str);
}

// Parse a JSON message into a Haste.JSON.JSON value.
// As this pokes around inside Haskell values, it'll need to be updated if:
// * Haste.JSON.JSON changes;
// * E() starts to choke on non-thunks;
// * data constructor code generation changes; or
// * Just and Nothing change tags.
function jsParseJSON(str) {
    try {
        var js = JSON.parse(str);
        var hs = toHS(js);
    } catch(_) {
        return [0];
    }
    return [1,hs];
}

function toHS(obj) {
    switch(typeof obj) {
    case 'number':
        return [0, [0, jsRead(obj)]];
    case 'string':
        return [1, [0, obj]];
        break;
    case 'boolean':
        return [2, obj]; // Booleans are special wrt constructor tags!
        break;
    case 'object':
        if(obj instanceof Array) {
            return [3, arr2lst_json(obj, 0)];
        } else if (obj == null) {
            return [5];
        } else {
            // Object type but not array - it's a dictionary.
            // The RFC doesn't say anything about the ordering of keys, but
            // considering that lots of people rely on keys being "in order" as
            // defined by "the same way someone put them in at the other end,"
            // it's probably a good idea to put some cycles into meeting their
            // misguided expectations.
            var ks = [];
            for(var k in obj) {
                ks.unshift(k);
            }
            var xs = [0];
            for(var i = 0; i < ks.length; i++) {
                xs = [1, [0, [0,ks[i]], toHS(obj[ks[i]])], xs];
            }
            return [4, xs];
        }
    }
}

function arr2lst_json(arr, elem) {
    if(elem >= arr.length) {
        return [0];
    }
    return [1, toHS(arr[elem]), new T(function() {return arr2lst_json(arr,elem+1);})]
}

function arr2lst(arr, elem) {
    if(elem >= arr.length) {
        return [0];
    }
    return [1, arr[elem], new T(function() {return arr2lst(arr,elem+1);})]
}

function lst2arr(xs) {
    var arr = [];
    for(; xs[0]; xs = E(xs[2])) {
        arr.push(E(xs[1]));
    }
    return arr;
}

function ajaxReq(method, url, async, postdata, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, async);

    if(method == "POST") {
        xhr.setRequestHeader("Content-type",
                             "application/x-www-form-urlencoded");
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                B(A(cb,[[1,[0,xhr.responseText]],0]));
            } else {
                B(A(cb,[[0],0])); // Nothing
            }
        }
    }
    xhr.send(postdata);
}

// Create a little endian ArrayBuffer representation of something.
function toABHost(v, n, x) {
    var a = new ArrayBuffer(n);
    new window[v](a)[0] = x;
    return a;
}

function toABSwap(v, n, x) {
    var a = new ArrayBuffer(n);
    new window[v](a)[0] = x;
    var bs = new Uint8Array(a);
    for(var i = 0, j = n-1; i < j; ++i, --j) {
        var tmp = bs[i];
        bs[i] = bs[j];
        bs[j] = tmp;
    }
    return a;
}

window['toABle'] = toABHost;
window['toABbe'] = toABSwap;

// Swap byte order if host is not little endian.
var buffer = new ArrayBuffer(2);
new DataView(buffer).setInt16(0, 256, true);
if(new Int16Array(buffer)[0] !== 256) {
    window['toABle'] = toABSwap;
    window['toABbe'] = toABHost;
}

// MVar implementation.
// Since Haste isn't concurrent, takeMVar and putMVar don't block on empty
// and full MVars respectively, but terminate the program since they would
// otherwise be blocking forever.

function newMVar() {
    return ({empty: true});
}

function tryTakeMVar(mv) {
    if(mv.empty) {
        return [0, 0, undefined];
    } else {
        var val = mv.x;
        mv.empty = true;
        mv.x = null;
        return [0, 1, val];
    }
}

function takeMVar(mv) {
    if(mv.empty) {
        // TODO: real BlockedOnDeadMVar exception, perhaps?
        err("Attempted to take empty MVar!");
    }
    var val = mv.x;
    mv.empty = true;
    mv.x = null;
    return val;
}

function putMVar(mv, val) {
    if(!mv.empty) {
        // TODO: real BlockedOnDeadMVar exception, perhaps?
        err("Attempted to put full MVar!");
    }
    mv.empty = false;
    mv.x = val;
}

function tryPutMVar(mv, val) {
    if(!mv.empty) {
        return 0;
    } else {
        mv.empty = false;
        mv.x = val;
        return 1;
    }
}

function sameMVar(a, b) {
    return (a == b);
}

function isEmptyMVar(mv) {
    return mv.empty ? 1 : 0;
}

// Implementation of stable names.
// Unlike native GHC, the garbage collector isn't going to move data around
// in a way that we can detect, so each object could serve as its own stable
// name if it weren't for the fact we can't turn a JS reference into an
// integer.
// So instead, each object has a unique integer attached to it, which serves
// as its stable name.

var __next_stable_name = 1;

function makeStableName(x) {
    if(!x.stableName) {
        x.stableName = __next_stable_name;
        __next_stable_name += 1;
    }
    return x.stableName;
}

function eqStableName(x, y) {
    return (x == y) ? 1 : 0;
}

var Integer = function(bits, sign) {
  this.bits_ = [];
  this.sign_ = sign;

  var top = true;
  for (var i = bits.length - 1; i >= 0; i--) {
    var val = bits[i] | 0;
    if (!top || val != sign) {
      this.bits_[i] = val;
      top = false;
    }
  }
};

Integer.IntCache_ = {};

var I_fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = Integer.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }

  var obj = new Integer([value | 0], value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    Integer.IntCache_[value] = obj;
  }
  return obj;
};

var I_fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return Integer.ZERO;
  } else if (value < 0) {
    return I_negate(I_fromNumber(-value));
  } else {
    var bits = [];
    var pow = 1;
    for (var i = 0; value >= pow; i++) {
      bits[i] = (value / pow) | 0;
      pow *= Integer.TWO_PWR_32_DBL_;
    }
    return new Integer(bits, 0);
  }
};

var I_fromBits = function(bits) {
  var high = bits[bits.length - 1];
  return new Integer(bits, high & (1 << 31) ? -1 : 0);
};

var I_fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw Error('number format error: empty string');
  }

  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error('radix out of range: ' + radix);
  }

  if (str.charAt(0) == '-') {
    return I_negate(I_fromString(str.substring(1), radix));
  } else if (str.indexOf('-') >= 0) {
    throw Error('number format error: interior "-" character');
  }

  var radixToPower = I_fromNumber(Math.pow(radix, 8));

  var result = Integer.ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = I_fromNumber(Math.pow(radix, size));
      result = I_add(I_mul(result, power), I_fromNumber(value));
    } else {
      result = I_mul(result, radixToPower);
      result = I_add(result, I_fromNumber(value));
    }
  }
  return result;
};


Integer.TWO_PWR_32_DBL_ = (1 << 16) * (1 << 16);
Integer.ZERO = I_fromInt(0);
Integer.ONE = I_fromInt(1);
Integer.TWO_PWR_24_ = I_fromInt(1 << 24);

var I_toInt = function(self) {
  return self.bits_.length > 0 ? self.bits_[0] : self.sign_;
};

var I_toWord = function(self) {
  return I_toInt(self) >>> 0;
};

var I_toNumber = function(self) {
  if (isNegative(self)) {
    return -I_toNumber(I_negate(self));
  } else {
    var val = 0;
    var pow = 1;
    for (var i = 0; i < self.bits_.length; i++) {
      val += I_getBitsUnsigned(self, i) * pow;
      pow *= Integer.TWO_PWR_32_DBL_;
    }
    return val;
  }
};

var I_getBits = function(self, index) {
  if (index < 0) {
    return 0;
  } else if (index < self.bits_.length) {
    return self.bits_[index];
  } else {
    return self.sign_;
  }
};

var I_getBitsUnsigned = function(self, index) {
  var val = I_getBits(self, index);
  return val >= 0 ? val : Integer.TWO_PWR_32_DBL_ + val;
};

var getSign = function(self) {
  return self.sign_;
};

var isZero = function(self) {
  if (self.sign_ != 0) {
    return false;
  }
  for (var i = 0; i < self.bits_.length; i++) {
    if (self.bits_[i] != 0) {
      return false;
    }
  }
  return true;
};

var isNegative = function(self) {
  return self.sign_ == -1;
};

var isOdd = function(self) {
  return (self.bits_.length == 0) && (self.sign_ == -1) ||
         (self.bits_.length > 0) && ((self.bits_[0] & 1) != 0);
};

var I_equals = function(self, other) {
  if (self.sign_ != other.sign_) {
    return false;
  }
  var len = Math.max(self.bits_.length, other.bits_.length);
  for (var i = 0; i < len; i++) {
    if (I_getBits(self, i) != I_getBits(other, i)) {
      return false;
    }
  }
  return true;
};

var I_notEquals = function(self, other) {
  return !I_equals(self, other);
};

var I_greaterThan = function(self, other) {
  return I_compare(self, other) > 0;
};

var I_greaterThanOrEqual = function(self, other) {
  return I_compare(self, other) >= 0;
};

var I_lessThan = function(self, other) {
  return I_compare(self, other) < 0;
};

var I_lessThanOrEqual = function(self, other) {
  return I_compare(self, other) <= 0;
};

var I_compare = function(self, other) {
  var diff = I_sub(self, other);
  if (isNegative(diff)) {
    return -1;
  } else if (isZero(diff)) {
    return 0;
  } else {
    return +1;
  }
};

var I_compareInt = function(self, other) {
  return I_compare(self, I_fromInt(other));
}

var shorten = function(self, numBits) {
  var arr_index = (numBits - 1) >> 5;
  var bit_index = (numBits - 1) % 32;
  var bits = [];
  for (var i = 0; i < arr_index; i++) {
    bits[i] = I_getBits(self, i);
  }
  var sigBits = bit_index == 31 ? 0xFFFFFFFF : (1 << (bit_index + 1)) - 1;
  var val = I_getBits(self, arr_index) & sigBits;
  if (val & (1 << bit_index)) {
    val |= 0xFFFFFFFF - sigBits;
    bits[arr_index] = val;
    return new Integer(bits, -1);
  } else {
    bits[arr_index] = val;
    return new Integer(bits, 0);
  }
};

var I_negate = function(self) {
  return I_add(not(self), Integer.ONE);
};

var I_add = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  var carry = 0;

  for (var i = 0; i <= len; i++) {
    var a1 = I_getBits(self, i) >>> 16;
    var a0 = I_getBits(self, i) & 0xFFFF;

    var b1 = I_getBits(other, i) >>> 16;
    var b0 = I_getBits(other, i) & 0xFFFF;

    var c0 = carry + a0 + b0;
    var c1 = (c0 >>> 16) + a1 + b1;
    carry = c1 >>> 16;
    c0 &= 0xFFFF;
    c1 &= 0xFFFF;
    arr[i] = (c1 << 16) | c0;
  }
  return I_fromBits(arr);
};

var I_sub = function(self, other) {
  return I_add(self, I_negate(other));
};

var I_mul = function(self, other) {
  if (isZero(self)) {
    return Integer.ZERO;
  } else if (isZero(other)) {
    return Integer.ZERO;
  }

  if (isNegative(self)) {
    if (isNegative(other)) {
      return I_mul(I_negate(self), I_negate(other));
    } else {
      return I_negate(I_mul(I_negate(self), other));
    }
  } else if (isNegative(other)) {
    return I_negate(I_mul(self, I_negate(other)));
  }

  if (I_lessThan(self, Integer.TWO_PWR_24_) &&
      I_lessThan(other, Integer.TWO_PWR_24_)) {
    return I_fromNumber(I_toNumber(self) * I_toNumber(other));
  }

  var len = self.bits_.length + other.bits_.length;
  var arr = [];
  for (var i = 0; i < 2 * len; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < self.bits_.length; i++) {
    for (var j = 0; j < other.bits_.length; j++) {
      var a1 = I_getBits(self, i) >>> 16;
      var a0 = I_getBits(self, i) & 0xFFFF;

      var b1 = I_getBits(other, j) >>> 16;
      var b0 = I_getBits(other, j) & 0xFFFF;

      arr[2 * i + 2 * j] += a0 * b0;
      Integer.carry16_(arr, 2 * i + 2 * j);
      arr[2 * i + 2 * j + 1] += a1 * b0;
      Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 1] += a0 * b1;
      Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 2] += a1 * b1;
      Integer.carry16_(arr, 2 * i + 2 * j + 2);
    }
  }

  for (var i = 0; i < len; i++) {
    arr[i] = (arr[2 * i + 1] << 16) | arr[2 * i];
  }
  for (var i = len; i < 2 * len; i++) {
    arr[i] = 0;
  }
  return new Integer(arr, 0);
};

Integer.carry16_ = function(bits, index) {
  while ((bits[index] & 0xFFFF) != bits[index]) {
    bits[index + 1] += bits[index] >>> 16;
    bits[index] &= 0xFFFF;
  }
};

var I_mod = function(self, other) {
  return I_rem(I_add(other, I_rem(self, other)), other);
}

var I_div = function(self, other) {
  if(I_greaterThan(self, Integer.ZERO) != I_greaterThan(other, Integer.ZERO)) {
    if(I_rem(self, other) != Integer.ZERO) {
      return I_sub(I_quot(self, other), Integer.ONE);
    }
  }
  return I_quot(self, other);
}

var I_quotRem = function(self, other) {
  return [0, I_quot(self, other), I_rem(self, other)];
}

var I_divMod = function(self, other) {
  return [0, I_div(self, other), I_mod(self, other)];
}

var I_quot = function(self, other) {
  if (isZero(other)) {
    throw Error('division by zero');
  } else if (isZero(self)) {
    return Integer.ZERO;
  }

  if (isNegative(self)) {
    if (isNegative(other)) {
      return I_quot(I_negate(self), I_negate(other));
    } else {
      return I_negate(I_quot(I_negate(self), other));
    }
  } else if (isNegative(other)) {
    return I_negate(I_quot(self, I_negate(other)));
  }

  var res = Integer.ZERO;
  var rem = self;
  while (I_greaterThanOrEqual(rem, other)) {
    var approx = Math.max(1, Math.floor(I_toNumber(rem) / I_toNumber(other)));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
    var approxRes = I_fromNumber(approx);
    var approxRem = I_mul(approxRes, other);
    while (isNegative(approxRem) || I_greaterThan(approxRem, rem)) {
      approx -= delta;
      approxRes = I_fromNumber(approx);
      approxRem = I_mul(approxRes, other);
    }

    if (isZero(approxRes)) {
      approxRes = Integer.ONE;
    }

    res = I_add(res, approxRes);
    rem = I_sub(rem, approxRem);
  }
  return res;
};

var I_rem = function(self, other) {
  return I_sub(self, I_mul(I_quot(self, other), other));
};

var not = function(self) {
  var len = self.bits_.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = ~self.bits_[i];
  }
  return new Integer(arr, ~self.sign_);
};

var I_and = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) & I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ & other.sign_);
};

var I_or = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) | I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ | other.sign_);
};

var I_xor = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) ^ I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ ^ other.sign_);
};

var I_shiftLeft = function(self, numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = self.bits_.length + arr_delta + (bit_delta > 0 ? 1 : 0);
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = (I_getBits(self, i - arr_delta) << bit_delta) |
               (I_getBits(self, i - arr_delta - 1) >>> (32 - bit_delta));
    } else {
      arr[i] = I_getBits(self, i - arr_delta);
    }
  }
  return new Integer(arr, self.sign_);
};

var I_shiftRight = function(self, numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = self.bits_.length - arr_delta;
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = (I_getBits(self, i + arr_delta) >>> bit_delta) |
               (I_getBits(self, i + arr_delta + 1) << (32 - bit_delta));
    } else {
      arr[i] = I_getBits(self, i + arr_delta);
    }
  }
  return new Integer(arr, self.sign_);
};

var I_signum = function(self) {
  var cmp = I_compare(self, Integer.ZERO);
  if(cmp > 0) {
    return Integer.ONE
  }
  if(cmp < 0) {
    return I_sub(Integer.ZERO, Integer.ONE);
  }
  return Integer.ZERO;
};

var I_abs = function(self) {
  if(I_compare(self, Integer.ZERO) < 0) {
    return I_sub(Integer.ZERO, self);
  }
  return self;
};

var I_decodeDouble = function(x) {
  var dec = decodeDouble(x);
  var mantissa = I_fromBits([dec[3], dec[2]]);
  if(dec[1] < 0) {
    mantissa = I_negate(mantissa);
  }
  return [0, dec[4], mantissa];
}

var I_toString = function(self) {
  var radix = 10;

  if (isZero(self)) {
    return '0';
  } else if (isNegative(self)) {
    return '-' + I_toString(I_negate(self));
  }

  var radixToPower = I_fromNumber(Math.pow(radix, 6));

  var rem = self;
  var result = '';
  while (true) {
    var remDiv = I_div(rem, radixToPower);
    var intval = I_toInt(I_sub(rem, I_mul(remDiv, radixToPower)));
    var digits = intval.toString();

    rem = remDiv;
    if (isZero(rem)) {
      return digits + result;
    } else {
      while (digits.length < 6) {
        digits = '0' + digits;
      }
      result = '' + digits + result;
    }
  }
};

var I_fromRat = function(a, b) {
    return I_toNumber(a) / I_toNumber(b);
}

function I_fromInt64(x) {
    return I_fromBits([x.getLowBits(), x.getHighBits()]);
}

function I_toInt64(x) {
    return Long.fromBits(I_getBits(x, 0), I_getBits(x, 1));
}

function I_fromWord64(x) {
    return x;
}

function I_toWord64(x) {
    return I_rem(I_add(__w64_max, x), __w64_max);
}

// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Long = function(low, high) {
  this.low_ = low | 0;
  this.high_ = high | 0;
};

Long.IntCache_ = {};

Long.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = Long.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }

  var obj = new Long(value | 0, value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    Long.IntCache_[value] = obj;
  }
  return obj;
};

Long.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return Long.ZERO;
  } else if (value <= -Long.TWO_PWR_63_DBL_) {
    return Long.MIN_VALUE;
  } else if (value + 1 >= Long.TWO_PWR_63_DBL_) {
    return Long.MAX_VALUE;
  } else if (value < 0) {
    return Long.fromNumber(-value).negate();
  } else {
    return new Long(
        (value % Long.TWO_PWR_32_DBL_) | 0,
        (value / Long.TWO_PWR_32_DBL_) | 0);
  }
};

Long.fromBits = function(lowBits, highBits) {
  return new Long(lowBits, highBits);
};

Long.TWO_PWR_16_DBL_ = 1 << 16;
Long.TWO_PWR_24_DBL_ = 1 << 24;
Long.TWO_PWR_32_DBL_ =
    Long.TWO_PWR_16_DBL_ * Long.TWO_PWR_16_DBL_;
Long.TWO_PWR_31_DBL_ =
    Long.TWO_PWR_32_DBL_ / 2;
Long.TWO_PWR_48_DBL_ =
    Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_16_DBL_;
Long.TWO_PWR_64_DBL_ =
    Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_32_DBL_;
Long.TWO_PWR_63_DBL_ =
    Long.TWO_PWR_64_DBL_ / 2;
Long.ZERO = Long.fromInt(0);
Long.ONE = Long.fromInt(1);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_VALUE =
    Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0);
Long.TWO_PWR_24_ = Long.fromInt(1 << 24);

Long.prototype.toInt = function() {
  return this.low_;
};

Long.prototype.toNumber = function() {
  return this.high_ * Long.TWO_PWR_32_DBL_ +
         this.getLowBitsUnsigned();
};

Long.prototype.getHighBits = function() {
  return this.high_;
};

Long.prototype.getLowBits = function() {
  return this.low_;
};

Long.prototype.getLowBitsUnsigned = function() {
  return (this.low_ >= 0) ?
      this.low_ : Long.TWO_PWR_32_DBL_ + this.low_;
};

Long.prototype.isZero = function() {
  return this.high_ == 0 && this.low_ == 0;
};

Long.prototype.isNegative = function() {
  return this.high_ < 0;
};

Long.prototype.isOdd = function() {
  return (this.low_ & 1) == 1;
};

Long.prototype.equals = function(other) {
  return (this.high_ == other.high_) && (this.low_ == other.low_);
};

Long.prototype.notEquals = function(other) {
  return (this.high_ != other.high_) || (this.low_ != other.low_);
};

Long.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};

Long.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};

Long.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};

Long.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};

Long.prototype.compare = function(other) {
  if (this.equals(other)) {
    return 0;
  }

  var thisNeg = this.isNegative();
  var otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) {
    return -1;
  }
  if (!thisNeg && otherNeg) {
    return 1;
  }

  if (this.subtract(other).isNegative()) {
    return -1;
  } else {
    return 1;
  }
};

Long.prototype.negate = function() {
  if (this.equals(Long.MIN_VALUE)) {
    return Long.MIN_VALUE;
  } else {
    return this.not().add(Long.ONE);
  }
};

Long.prototype.add = function(other) {
  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};

Long.prototype.subtract = function(other) {
  return this.add(other.negate());
};

Long.prototype.multiply = function(other) {
  if (this.isZero()) {
    return Long.ZERO;
  } else if (other.isZero()) {
    return Long.ZERO;
  }

  if (this.equals(Long.MIN_VALUE)) {
    return other.isOdd() ? Long.MIN_VALUE : Long.ZERO;
  } else if (other.equals(Long.MIN_VALUE)) {
    return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else if (other.isNegative()) {
    return this.multiply(other.negate()).negate();
  }

  if (this.lessThan(Long.TWO_PWR_24_) &&
      other.lessThan(Long.TWO_PWR_24_)) {
    return Long.fromNumber(this.toNumber() * other.toNumber());
  }

  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};

Long.prototype.div = function(other) {
  if (other.isZero()) {
    throw Error('division by zero');
  } else if (this.isZero()) {
    return Long.ZERO;
  }

  if (this.equals(Long.MIN_VALUE)) {
    if (other.equals(Long.ONE) ||
        other.equals(Long.NEG_ONE)) {
      return Long.MIN_VALUE;
    } else if (other.equals(Long.MIN_VALUE)) {
      return Long.ONE;
    } else {
      var halfThis = this.shiftRight(1);
      var approx = halfThis.div(other).shiftLeft(1);
      if (approx.equals(Long.ZERO)) {
        return other.isNegative() ? Long.ONE : Long.NEG_ONE;
      } else {
        var rem = this.subtract(other.multiply(approx));
        var result = approx.add(rem.div(other));
        return result;
      }
    }
  } else if (other.equals(Long.MIN_VALUE)) {
    return Long.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().div(other.negate());
    } else {
      return this.negate().div(other).negate();
    }
  } else if (other.isNegative()) {
    return this.div(other.negate()).negate();
  }

  var res = Long.ZERO;
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));

    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);

    var approxRes = Long.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = Long.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }

    if (approxRes.isZero()) {
      approxRes = Long.ONE;
    }

    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return res;
};

Long.prototype.modulo = function(other) {
  return this.subtract(this.div(other).multiply(other));
};

Long.prototype.not = function() {
  return Long.fromBits(~this.low_, ~this.high_);
};

Long.prototype.and = function(other) {
  return Long.fromBits(this.low_ & other.low_,
                                 this.high_ & other.high_);
};

Long.prototype.or = function(other) {
  return Long.fromBits(this.low_ | other.low_,
                                 this.high_ | other.high_);
};

Long.prototype.xor = function(other) {
  return Long.fromBits(this.low_ ^ other.low_,
                                 this.high_ ^ other.high_);
};

Long.prototype.shiftLeft = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var low = this.low_;
    if (numBits < 32) {
      var high = this.high_;
      return Long.fromBits(
          low << numBits,
          (high << numBits) | (low >>> (32 - numBits)));
    } else {
      return Long.fromBits(0, low << (numBits - 32));
    }
  }
};

Long.prototype.shiftRight = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Long.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >> numBits);
    } else {
      return Long.fromBits(
          high >> (numBits - 32),
          high >= 0 ? 0 : -1);
    }
  }
};

Long.prototype.shiftRightUnsigned = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Long.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >>> numBits);
    } else if (numBits == 32) {
      return Long.fromBits(high, 0);
    } else {
      return Long.fromBits(high >>> (numBits - 32), 0);
    }
  }
};



// Int64
function hs_eqInt64(x, y) {return x.equals(y);}
function hs_neInt64(x, y) {return !x.equals(y);}
function hs_ltInt64(x, y) {return x.compare(y) < 0;}
function hs_leInt64(x, y) {return x.compare(y) <= 0;}
function hs_gtInt64(x, y) {return x.compare(y) > 0;}
function hs_geInt64(x, y) {return x.compare(y) >= 0;}
function hs_quotInt64(x, y) {return x.div(y);}
function hs_remInt64(x, y) {return x.modulo(y);}
function hs_plusInt64(x, y) {return x.add(y);}
function hs_minusInt64(x, y) {return x.subtract(y);}
function hs_timesInt64(x, y) {return x.multiply(y);}
function hs_negateInt64(x) {return x.negate();}
function hs_uncheckedIShiftL64(x, bits) {return x.shiftLeft(bits);}
function hs_uncheckedIShiftRA64(x, bits) {return x.shiftRight(bits);}
function hs_uncheckedIShiftRL64(x, bits) {return x.shiftRightUnsigned(bits);}
function hs_intToInt64(x) {return new Long(x, 0);}
function hs_int64ToInt(x) {return x.toInt();}



// Word64
function hs_wordToWord64(x) {
    return I_fromInt(x);
}
function hs_word64ToWord(x) {
    return I_toInt(x);
}
function hs_mkWord64(low, high) {
    return I_fromBits([low, high]);
}

var hs_and64 = I_and;
var hs_or64 = I_or;
var hs_xor64 = I_xor;
var __i64_all_ones = I_fromBits([0xffffffff, 0xffffffff]);
function hs_not64(x) {
    return I_xor(x, __i64_all_ones);
}
var hs_eqWord64 = I_equals;
var hs_neWord64 = I_notEquals;
var hs_ltWord64 = I_lessThan;
var hs_leWord64 = I_lessThanOrEqual;
var hs_gtWord64 = I_greaterThan;
var hs_geWord64 = I_greaterThanOrEqual;
var hs_quotWord64 = I_quot;
var hs_remWord64 = I_rem;
var __w64_max = I_fromBits([0,0,1]);
function hs_uncheckedShiftL64(x, bits) {
    return I_rem(I_shiftLeft(x, bits), __w64_max);
}
var hs_uncheckedShiftRL64 = I_shiftRight;
function hs_int64ToWord64(x) {
    var tmp = I_add(__w64_max, I_fromBits([x.getLowBits(), x.getHighBits()]));
    return I_rem(tmp, __w64_max);
}
function hs_word64ToInt64(x) {
    return Long.fromBits(I_getBits(x, 0), I_getBits(x, 1));
}

// Joseph Myers' MD5 implementation; used under the BSD license.

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

function md5blk(s) {
var md5blks = [], i;
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

// Functions for dealing with arrays.

function newArr(n, x) {
    var arr = [];
    for(; n >= 0; --n) {
        arr.push(x);
    }
    return arr;
}

// Create all views at once; perhaps it's wasteful, but it's better than having
// to check for the right view at each read or write.
function newByteArr(n) {
    // Pad the thing to multiples of 8.
    var padding = 8 - n % 8;
    if(padding < 8) {
        n += padding;
    }
    var arr = {};
    var buffer = new ArrayBuffer(n);
    var views = {};
    views['i8']  = new Int8Array(buffer);
    views['i16'] = new Int16Array(buffer);
    views['i32'] = new Int32Array(buffer);
    views['w8']  = new Uint8Array(buffer);
    views['w16'] = new Uint16Array(buffer);
    views['w32'] = new Uint32Array(buffer);
    views['f32'] = new Float32Array(buffer);
    views['f64'] = new Float64Array(buffer);
    arr['b'] = buffer;
    arr['v'] = views;
    // ByteArray and Addr are the same thing, so keep an offset if we get
    // casted.
    arr['off'] = 0;
    return arr;
}

// An attempt at emulating pointers enough for ByteString and Text to be
// usable without patching the hell out of them.
// The general idea is that Addr# is a byte array with an associated offset.

function plusAddr(addr, off) {
    var newaddr = {};
    newaddr['off'] = addr['off'] + off;
    newaddr['b']   = addr['b'];
    newaddr['v']   = addr['v'];
    return newaddr;
}

function writeOffAddr(type, elemsize, addr, off, x) {
    addr['v'][type][addr.off/elemsize + off] = x;
}

function readOffAddr(type, elemsize, addr, off) {
    return addr['v'][type][addr.off/elemsize + off];
}

// Two addresses are equal if they point to the same buffer and have the same
// offset. For other comparisons, just use the offsets - nobody in their right
// mind would check if one pointer is less than another, completely unrelated,
// pointer and then act on that information anyway.
function addrEq(a, b) {
    if(a == b) {
        return true;
    }
    return a && b && a['b'] == b['b'] && a['off'] == b['off'];
}

function addrLT(a, b) {
    if(a) {
        return b && a['off'] < b['off'];
    } else {
        return (b != 0); 
    }
}

function addrGT(a, b) {
    if(b) {
        return a && a['off'] > b['off'];
    } else {
        return (a != 0);
    }
}

function withChar(f, charCode) {
    return f(String.fromCharCode(charCode)).charCodeAt(0);
}

function u_towlower(charCode) {
    return withChar(function(c) {return c.toLowerCase()}, charCode);
}

function u_towupper(charCode) {
    return withChar(function(c) {return c.toUpperCase()}, charCode);
}

var u_towtitle = u_towupper;

function u_iswupper(charCode) {
    var c = String.fromCharCode(charCode);
    return c == c.toUpperCase() && c != c.toLowerCase();
}

function u_iswlower(charCode) {
    var c = String.fromCharCode(charCode);
    return  c == c.toLowerCase() && c != c.toUpperCase();
}

function u_iswdigit(charCode) {
    return charCode >= 48 && charCode <= 57;
}

function u_iswcntrl(charCode) {
    return charCode <= 0x1f || charCode == 0x7f;
}

function u_iswspace(charCode) {
    var c = String.fromCharCode(charCode);
    return c.replace(/\s/g,'') != c;
}

function u_iswalpha(charCode) {
    var c = String.fromCharCode(charCode);
    return c.replace(__hs_alphare, '') != c;
}

function u_iswalnum(charCode) {
    return u_iswdigit(charCode) || u_iswalpha(charCode);
}

function u_iswprint(charCode) {
    return !u_iswcntrl(charCode);
}

function u_gencat(c) {
    throw 'u_gencat is only supported with --full-unicode.';
}

// Regex that matches any alphabetic character in any language. Horrible thing.
var __hs_alphare = /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g;

// 2D Canvas drawing primitives.
function jsHasCtx2D(elem) {return !!elem.getContext;}
function jsGetCtx2D(elem) {return elem.getContext('2d');}
function jsBeginPath(ctx) {ctx.beginPath();}
function jsMoveTo(ctx, x, y) {ctx.moveTo(x, y);}
function jsLineTo(ctx, x, y) {ctx.lineTo(x, y);}
function jsStroke(ctx) {ctx.stroke();}
function jsFill(ctx) {ctx.fill();}
function jsRotate(ctx, radians) {ctx.rotate(radians);}
function jsTranslate(ctx, x, y) {ctx.translate(x, y);}
function jsScale(ctx, x, y) {ctx.scale(x, y);}
function jsPushState(ctx) {ctx.save();}
function jsPopState(ctx) {ctx.restore();}
function jsResetCanvas(el) {el.width = el.width;}
function jsDrawImage(ctx, img, x, y) {ctx.drawImage(img, x, y);}
function jsDrawImageClipped(ctx, img, x, y, cx, cy, cw, ch) {
    ctx.drawImage(img, cx, cy, cw, ch, x, y, cw, ch);
}
function jsDrawText(ctx, str, x, y) {ctx.fillText(str, x, y);}
function jsClip(ctx) {ctx.clip();}
function jsArc(ctx, x, y, radius, fromAngle, toAngle) {
    ctx.arc(x, y, radius, fromAngle, toAngle);
}
function jsCanvasToDataURL(el) {return el.toDataURL('image/png');}

// Simulate handles.
// When implementing new handles, remember that passed strings may be thunks,
// and so need to be evaluated before use.

function jsNewHandle(init, read, write, flush, close, seek, tell) {
    var h = {
        read: read || function() {},
        write: write || function() {},
        seek: seek || function() {},
        tell: tell || function() {},
        close: close || function() {},
        flush: flush || function() {}
    };
    init.call(h);
    return h;
}

function jsReadHandle(h, len) {return h.read(len);}
function jsWriteHandle(h, str) {return h.write(str);}
function jsFlushHandle(h) {return h.flush();}
function jsCloseHandle(h) {return h.close();}

function jsMkConWriter(op) {
    return function(str) {
        str = E(str);
        var lines = (this.buf + str).split('\n');
        for(var i = 0; i < lines.length-1; ++i) {
            op.call(console, lines[i]);
        }
        this.buf = lines[lines.length-1];
    }
}

function jsMkStdout() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(_) {return '';},
        jsMkConWriter(console.log),
        function() {console.log(this.buf); this.buf = '';}
    );
}

function jsMkStderr() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(_) {return '';},
        jsMkConWriter(console.warn),
        function() {console.warn(this.buf); this.buf = '';}
    );
}

function jsMkStdin() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(len) {
            while(this.buf.length < len) {
                this.buf += prompt('[stdin]') + '\n';
            }
            var ret = this.buf.substr(0, len);
            this.buf = this.buf.substr(len);
            return ret;
        }
    );
}

var _0/* any */ = function(_1, _2){
  while(1){
    var _3 = E(_2);
    if(!_3[0]){
      return false;
    }else{
      if(!B(A(_1,[_3[1]]))){
        _2 = _3[2];
        continue;
      }else{
        return true;
      }
    }
  }
}, _4/* lvl */ = new T(function(){
  return B(unCStr("Maybe.fromJust: Nothing"));
}), _5/* fromJust1 */ = new T(function(){
  return B(err(_4/* Data.Maybe.lvl */));
}), _6/* fromJust */ = function(_7){
  var _8 = E(_7);
  return _8[0]==0 ? E(_5/* Data.Maybe.fromJust1 */) : E(_8[1]);
}, _9/* isNothing */ = function(_a){
  return E(_a)[0]==0 ? true : false;
}, _b/* [] */ = [0], _c/* main13 */ = function(_d, _){
  var _e = E(_d);
  if(!_e[0]){
    return _b/* GHC.Types.[] */;
  }else{
    var _f = jsFind(E(_e[1])[1]), _g = _f, _h = B(_c/* Main.main13 */(_e[2], _)), _i = _h;
    return [1, _g, _i];
  }
}, _j/* $wmapAccumL */ = function(_k, _l, _m){
  var _n = E(_m);
  if(!_n[0]){
    return [0, _l, _b/* GHC.Types.[] */];
  }else{
    var _o = new T(function(){
      return B(A(_k,[_l, _n[1]]));
}), _p = new T(function(){
      var _q = B(_j/* Data.List.$wmapAccumL */(_k, new T(function(){
        return E(E(_o)[1]);
}), _n[2]));
      return [0, _q[1], _q[2]];
});
    return [0, new T(function(){
      return E(E(_p)[1]);
}), [1, new T(function(){
      return E(E(_o)[2]);
}), new T(function(){
      return E(E(_p)[2]);
})]];
  }
}, _r/* () */ = 0, _s/* foldr2 */ = function(_t, _u, _v, _w){
  var _x = E(_v);
  if(!_x[0]){
    return E(_u);
  }else{
    var _y = E(_w);
    if(!_y[0]){
      return E(_u);
    }else{
      return new F(function(){return A(_t,[_x[1], _y[1], new T(function(){
        return B(_s/* GHC.List.foldr2 */(_t, _u, _x[2], _y[2]));
})]);});
    }
  }
}, _z/* $fExceptionNestedAtomically3 */ = new T(function(){
  return B(unCStr("Control.Exception.Base"));
}), _A/* $fExceptionNestedAtomically4 */ = new T(function(){
  return B(unCStr("base"));
}), _B/* $fExceptionPatternMatchFail2 */ = new T(function(){
  return B(unCStr("PatternMatchFail"));
}), _C/* $fExceptionPatternMatchFail1 */ = new T(function(){
  var _D = hs_wordToWord64(18445595), _E = _D, _F = hs_wordToWord64(52003073), _G = _F;
  return [0, _E, _G, [0, _E, _G, _A/* Control.Exception.Base.$fExceptionNestedAtomically4 */, _z/* Control.Exception.Base.$fExceptionNestedAtomically3 */, _B/* Control.Exception.Base.$fExceptionPatternMatchFail2 */], _b/* GHC.Types.[] */];
}), _H/* $fExceptionPatternMatchFail_$ctypeRep# */ = function(_I){
  return E(_C/* Control.Exception.Base.$fExceptionPatternMatchFail1 */);
}, _J/* $p1Exception */ = function(_K){
  return E(E(_K)[1]);
}, _L/* cast */ = function(_M, _N, _O){
  var _P = B(A(_M,[_])), _Q = B(A(_N,[_])), _R = hs_eqWord64(_P[1], _Q[1]), _S = _R;
  if(!E(_S)){
    return [0];
  }else{
    var _T = hs_eqWord64(_P[2], _Q[2]), _U = _T;
    return E(_U)==0 ? [0] : [1, _O];
  }
}, _V/* $fExceptionPatternMatchFail_$cfromException */ = function(_W){
  var _X = E(_W);
  return new F(function(){return _L/* Data.Typeable.cast */(B(_J/* GHC.Exception.$p1Exception */(_X[1])), _H/* Control.Exception.Base.$fExceptionPatternMatchFail_$ctypeRep# */, _X[2]);});
}, _Y/* $fShowPatternMatchFail_$cshow */ = function(_Z){
  return E(E(_Z)[1]);
}, _10/* ++ */ = function(_11, _12){
  var _13 = E(_11);
  return _13[0]==0 ? E(_12) : [1, _13[1], new T(function(){
    return B(_10/* GHC.Base.++ */(_13[2], _12));
})];
}, _14/* $fShowPatternMatchFail1 */ = function(_15, _16){
  return new F(function(){return _10/* GHC.Base.++ */(E(_15)[1], _16);});
}, _17/* showList__1 */ = [0, 44], _18/* showList__2 */ = [0, 93], _19/* showList__3 */ = [0, 91], _1a/* showList__ */ = function(_1b, _1c, _1d){
  var _1e = E(_1c);
  return _1e[0]==0 ? B(unAppCStr("[]", _1d)) : [1, _19/* GHC.Show.showList__3 */, new T(function(){
    return B(A(_1b,[_1e[1], new T(function(){
      var _1f = function(_1g){
        var _1h = E(_1g);
        return _1h[0]==0 ? E([1, _18/* GHC.Show.showList__2 */, _1d]) : [1, _17/* GHC.Show.showList__1 */, new T(function(){
          return B(A(_1b,[_1h[1], new T(function(){
            return B(_1f(_1h[2]));
})]));
})];
      };
      return B(_1f(_1e[2]));
})]));
})];
}, _1i/* $fShowPatternMatchFail_$cshowList */ = function(_1j, _1k){
  return new F(function(){return _1a/* GHC.Show.showList__ */(_14/* Control.Exception.Base.$fShowPatternMatchFail1 */, _1j, _1k);});
}, _1l/* $fShowPatternMatchFail_$cshowsPrec */ = function(_1m, _1n, _1o){
  return new F(function(){return _10/* GHC.Base.++ */(E(_1n)[1], _1o);});
}, _1p/* $fShowPatternMatchFail */ = [0, _1l/* Control.Exception.Base.$fShowPatternMatchFail_$cshowsPrec */, _Y/* Control.Exception.Base.$fShowPatternMatchFail_$cshow */, _1i/* Control.Exception.Base.$fShowPatternMatchFail_$cshowList */], _1q/* $fExceptionPatternMatchFail */ = new T(function(){
  return [0, _H/* Control.Exception.Base.$fExceptionPatternMatchFail_$ctypeRep# */, _1p/* Control.Exception.Base.$fShowPatternMatchFail */, _1r/* Control.Exception.Base.$fExceptionPatternMatchFail_$ctoException */, _V/* Control.Exception.Base.$fExceptionPatternMatchFail_$cfromException */];
}), _1r/* $fExceptionPatternMatchFail_$ctoException */ = function(_1s){
  return [0, _1q/* Control.Exception.Base.$fExceptionPatternMatchFail */, _1s];
}, _1t/* lvl4 */ = new T(function(){
  return B(unCStr("Irrefutable pattern failed for pattern"));
}), _1u/* throw2 */ = function(_1v, _1w){
  return new F(function(){return die(new T(function(){
    return B(A(_1w,[_1v]));
}));});
}, _1x/* $wspan */ = function(_1y, _1z){
  var _1A = E(_1z);
  if(!_1A[0]){
    return [0, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */];
  }else{
    var _1B = _1A[1];
    if(!B(A(_1y,[_1B]))){
      return [0, _b/* GHC.Types.[] */, _1A];
    }else{
      var _1C = new T(function(){
        var _1D = B(_1x/* GHC.List.$wspan */(_1y, _1A[2]));
        return [0, _1D[1], _1D[2]];
});
      return [0, [1, _1B, new T(function(){
        return E(E(_1C)[1]);
})], new T(function(){
        return E(E(_1C)[2]);
})];
    }
  }
}, _1E/* untangle1 */ = [0, 32], _1F/* untangle3 */ = [0, 10], _1G/* untangle2 */ = [1, _1F/* GHC.IO.Exception.untangle3 */, _b/* GHC.Types.[] */], _1H/* untangle4 */ = function(_1I){
  return E(E(_1I)[1])==124 ? false : true;
}, _1J/* untangle */ = function(_1K, _1L){
  var _1M = B(_1x/* GHC.List.$wspan */(_1H/* GHC.IO.Exception.untangle4 */, B(unCStr(_1K)))), _1N = _1M[1], _1O = function(_1P, _1Q){
    return new F(function(){return _10/* GHC.Base.++ */(_1P, new T(function(){
      return B(unAppCStr(": ", new T(function(){
        return B(_10/* GHC.Base.++ */(_1L, new T(function(){
          return B(_10/* GHC.Base.++ */(_1Q, _1G/* GHC.IO.Exception.untangle2 */));
})));
})));
}));});
  }, _1R = E(_1M[2]);
  if(!_1R[0]){
    return new F(function(){return _1O(_1N, _b/* GHC.Types.[] */);});
  }else{
    return E(E(_1R[1])[1])==124 ? B(_1O(_1N, [1, _1E/* GHC.IO.Exception.untangle1 */, _1R[2]])) : B(_1O(_1N, _b/* GHC.Types.[] */));
  }
}, _1S/* irrefutPatError */ = function(_1T){
  return new F(function(){return _1u/* GHC.Exception.throw2 */([0, new T(function(){
    return B(_1J/* GHC.IO.Exception.untangle */(_1T, _1t/* Control.Exception.Base.lvl4 */));
})], _1r/* Control.Exception.Base.$fExceptionPatternMatchFail_$ctoException */);});
}, _1U/* interpret1 */ = new T(function(){
  return B(_1S/* Control.Exception.Base.irrefutPatError */("src/React/Interpret.hs:65:5-42|(child : _, ())"));
}), _1V/* $wa */ = function(_1W, _1X, _1Y, _){
  var _1Z = function(_20, _){
    var _21 = B(A(_1X,[_20]));
    return _21[0]==0 ? _r/* GHC.Tuple.() */ : B(A(_21[1],[_]));
  };
  switch(E(_1Y)){
    case 0:
      var _22 = js_set_onChange(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 1:
      var _23 = js_set_onKeyDown(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 2:
      var _24 = js_set_onKeyPress(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 3:
      var _25 = js_set_onKeyUp(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 4:
      var _26 = js_set_onClick(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 5:
      var _27 = js_set_onDoubleClick(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    case 6:
      var _28 = js_set_onMouseEnter(_1Z, E(_1W)[1]);
      return _r/* GHC.Tuple.() */;
    default:
      return _r/* GHC.Tuple.() */;
  }
}, _29/* lvl1 */ = new T(function(){
  return B(unCStr("Non-exhaustive patterns in"));
}), _2a/* patError */ = function(_2b){
  return new F(function(){return _1u/* GHC.Exception.throw2 */([0, new T(function(){
    return B(_1J/* GHC.IO.Exception.untangle */(_2b, _29/* Control.Exception.Base.lvl1 */));
})], _1r/* Control.Exception.Base.$fExceptionPatternMatchFail_$ctoException */);});
}, _2c/* lvl */ = new T(function(){
  return B(_2a/* Control.Exception.Base.patError */("src/React/Interpret.hs:(42,1)-(52,37)|function setField"));
}), _2d/* $wa */ = function(_2e, _2f, _2g, _){
  var _2h = E(_2g);
  switch(_2h[0]){
    case 0:
      var _2i = js_set_field(E(_2e)[1], E(_2f)[1], _2h[1]);
      return _r/* GHC.Tuple.() */;
    case 1:
      var _2j = js_set_field(E(_2e)[1], E(_2f)[1], _2h[1]);
      return _r/* GHC.Tuple.() */;
    case 2:
      if(!E(_2h[1])){
        var _2k = js_set_field_False(E(_2e)[1], E(_2f)[1]);
        return _r/* GHC.Tuple.() */;
      }else{
        var _2l = js_set_field_True(E(_2e)[1], E(_2f)[1]);
        return _r/* GHC.Tuple.() */;
      }
      break;
    case 3:
      return E(_2c/* React.Interpret.lvl */);
    case 4:
      var _2m = js_empty_object(), _2n = _2m, _2o = B((function(_2p, _){
        while(1){
          var _2q = E(_2p);
          if(!_2q[0]){
            return _r/* GHC.Tuple.() */;
          }else{
            var _2r = E(_2q[1]), _2s = B(_2d/* React.Interpret.$wa */([0, _2n], _2r[1], _2r[2], _)), _2t = _2s;
            _2p = _2q[2];
            continue;
          }
        }
      })(_2h[1], _)), _2u = _2o, _2v = js_set_field(E(_2e)[1], E(_2f)[1], _2n);
      return _r/* GHC.Tuple.() */;
    default:
      return _r/* GHC.Tuple.() */;
  }
}, _2w/* element1 */ = function(_2x, _2y, _2z, _2A, _2B, _){
  var _2C = js_empty_object(), _2D = _2C, _2E = [0, _2D], _2F = B((function(_2G, _){
    while(1){
      var _2H = E(_2G);
      if(!_2H[0]){
        return _r/* GHC.Tuple.() */;
      }else{
        var _2I = E(_2H[1]), _2J = B(_2d/* React.Interpret.$wa */(_2E, _2I[1], _2I[2], _)), _2K = _2J;
        _2G = _2H[2];
        continue;
      }
    }
  })(_2z, _)), _2L = _2F, _2M = B((function(_2N, _){
    while(1){
      var _2O = E(_2N);
      if(!_2O[0]){
        return _r/* GHC.Tuple.() */;
      }else{
        var _2P = E(_2O[1]), _2Q = B(_1V/* React.Events.$wa */(_2E, _2P[1], _2P[2], _)), _2R = _2Q;
        _2N = _2O[2];
        continue;
      }
    }
  })(_2A, _)), _2S = _2M, _2T = js_empty(), _2U = _2T, _2V = B((function(_2W, _){
    while(1){
      var _2X = E(_2W);
      if(!_2X[0]){
        return _r/* GHC.Tuple.() */;
      }else{
        var _2Y = js_push(_2U, E(_2X[1])[1]);
        _2W = _2X[2];
        continue;
      }
    }
  })(_2B, _)), _2Z = _2V;
  return new F(function(){return A(_2x,[_2y, _2E, [0, _2U], _]);});
}, _30/* a5 */ = function(_31, _32, _33, _){
  var _34 = js_React_DOM_parent(E(_31)[1], E(_32)[1], E(_33)[1]), _35 = _34;
  return [0, _35];
}, _36/* js_React_DOM_parent */ = function(_37, _38, _39, _){
  return new F(function(){return _30/* React.Imports.a5 */(_37, _38, _39, _);});
}, _3a/* lvl1 */ = function(_3b, _3c, _3d, _){
  var _3e = js_React_DOM_leaf(E(_3b)[1], E(_3c)[1]), _3f = _3e;
  return [0, _3f];
}, _3g/* map */ = function(_3h, _3i){
  var _3j = E(_3i);
  return _3j[0]==0 ? [0] : [1, new T(function(){
    return B(A(_3h,[_3j[1]]));
}), new T(function(){
    return B(_3g/* GHC.Base.map */(_3h, _3j[2]));
})];
}, _3k/* unHandler */ = function(_3l, _3m){
  var _3n = E(_3m);
  return [0, function(_3o){
    var _3p = B(A(_3n[1],[_3o]));
    return _3p[0]==0 ? [0] : [1, new T(function(){
      return B(A(_3l,[_3p[1]]));
})];
  }, _3n[2]];
}, _3q/* interpret2 */ = function(_3r, _3s, _){
  var _3t = E(_3s);
  switch(_3t[0]){
    case 0:
      var _3u = function(_3v, _){
        var _3w = E(_3v);
        if(!_3w[0]){
          return _b/* GHC.Types.[] */;
        }else{
          var _3x = B(_3q/* React.Interpret.interpret2 */(_3r, _3w[1], _)), _3y = _3x, _3z = B(_3u(_3w[2], _)), _3A = _3z;
          return [1, _3y, _3A];
        }
      }, _3B = B(_3u(_3t[4], _)), _3C = _3B;
      return new F(function(){return _2w/* React.Interpret.element1 */(_36/* React.Imports.js_React_DOM_parent */, _3t[1], _3t[2], new T(function(){
        return B(_3g/* GHC.Base.map */(function(_3D){
          return new F(function(){return _3k/* React.Events.unHandler */(_3r, _3D);});
        }, _3t[3]));
}), _3C, _);});
      break;
    case 1:
      return new F(function(){return _2w/* React.Interpret.element1 */(_3a/* React.Interpret.lvl1 */, _3t[1], _3t[2], new T(function(){
        return B(_3g/* GHC.Base.map */(function(_3D){
          return new F(function(){return _3k/* React.Events.unHandler */(_3r, _3D);});
        }, _3t[3]));
}), _b/* GHC.Types.[] */, _);});
      break;
    default:
      var _3E = js_id(toJSStr(E(_3t[1]))), _3F = _3E;
      return [0, _3F];
  }
}, _3G/* $fFractionalDouble1 */ = new T(function(){
  return [0, 0/0];
}), _3H/* $fFractionalDouble2 */ = new T(function(){
  return [0, -1/0];
}), _3I/* $fFractionalDouble3 */ = new T(function(){
  return [0, 1/0];
}), _3J/* $fFractionalDouble4 */ = [0, 0], _3K/* $wfromRat */ = function(_3L, _3M){
  while(1){
    var _3N = E(_3L);
    if(!_3N[0]){
      _3L = [1, I_fromInt(_3N[1])];
      continue;
    }else{
      var _3O = E(_3M);
      if(!_3O[0]){
        _3L = _3N;
        _3M = [1, I_fromInt(_3O[1])];
        continue;
      }else{
        return new F(function(){return I_fromRat(_3N[1], _3O[1]);});
      }
    }
  }
}, _3P/* eqInteger */ = function(_3Q, _3R){
  var _3S = E(_3Q);
  if(!_3S[0]){
    var _3T = _3S[1], _3U = E(_3R);
    return _3U[0]==0 ? _3T==_3U[1] : I_compareInt(_3U[1], _3T)==0 ? true : false;
  }else{
    var _3V = _3S[1], _3W = E(_3R);
    return _3W[0]==0 ? I_compareInt(_3V, _3W[1])==0 ? true : false : I_compare(_3V, _3W[1])==0 ? true : false;
  }
}, _3X/* ltInteger */ = function(_3Y, _3Z){
  var _40 = E(_3Y);
  if(!_40[0]){
    var _41 = _40[1], _42 = E(_3Z);
    return _42[0]==0 ? _41<_42[1] : I_compareInt(_42[1], _41)>0;
  }else{
    var _43 = _40[1], _44 = E(_3Z);
    return _44[0]==0 ? I_compareInt(_43, _44[1])<0 : I_compare(_43, _44[1])<0;
  }
}, _45/* $w$cfromRational */ = function(_46, _47){
  return !B(_3P/* GHC.Integer.Type.eqInteger */(_47, _3J/* GHC.Float.$fFractionalDouble4 */)) ? [0, B(_3K/* GHC.Integer.Type.$wfromRat */(_46, _47))] : !B(_3P/* GHC.Integer.Type.eqInteger */(_46, _3J/* GHC.Float.$fFractionalDouble4 */)) ? !B(_3X/* GHC.Integer.Type.ltInteger */(_46, _3J/* GHC.Float.$fFractionalDouble4 */)) ? E(_3I/* GHC.Float.$fFractionalDouble3 */) : E(_3H/* GHC.Float.$fFractionalDouble2 */) : E(_3G/* GHC.Float.$fFractionalDouble1 */);
}, _48/* $fFractionalDouble_$cfromRational */ = function(_49){
  var _4a = E(_49);
  return new F(function(){return _45/* GHC.Float.$w$cfromRational */(_4a[1], _4a[2]);});
}, _4b/* $fFractionalDouble_$crecip */ = function(_4c){
  return [0, 1/E(_4c)[1]];
}, _4d/* $fNumDouble_$cabs */ = function(_4e){
  var _4f = E(_4e), _4g = _4f[1];
  return _4g<0 ? [0,  -_4g] : E(_4f);
}, _4h/* doubleFromInteger */ = function(_4i){
  var _4j = E(_4i);
  return _4j[0]==0 ? _4j[1] : I_toNumber(_4j[1]);
}, _4k/* $fNumDouble_$cfromInteger */ = function(_4l){
  return [0, B(_4h/* GHC.Integer.Type.doubleFromInteger */(_4l))];
}, _4m/* $fNumDouble1 */ = [0, 0], _4n/* $fNumDouble2 */ = [0, 1], _4o/* $fNumDouble3 */ = [0, -1], _4p/* $fNumDouble_$csignum */ = function(_4q){
  var _4r = E(E(_4q)[1]);
  return _4r==0 ? E(_4m/* GHC.Float.$fNumDouble1 */) : _4r<=0 ? E(_4o/* GHC.Float.$fNumDouble3 */) : E(_4n/* GHC.Float.$fNumDouble2 */);
}, _4s/* minusDouble */ = function(_4t, _4u){
  return [0, E(_4t)[1]-E(_4u)[1]];
}, _4v/* negateDouble */ = function(_4w){
  return [0,  -E(_4w)[1]];
}, _4x/* plusDouble */ = function(_4y, _4z){
  return [0, E(_4y)[1]+E(_4z)[1]];
}, _4A/* timesDouble */ = function(_4B, _4C){
  return [0, E(_4B)[1]*E(_4C)[1]];
}, _4D/* $fNumDouble */ = [0, _4x/* GHC.Float.plusDouble */, _4A/* GHC.Float.timesDouble */, _4s/* GHC.Float.minusDouble */, _4v/* GHC.Float.negateDouble */, _4d/* GHC.Float.$fNumDouble_$cabs */, _4p/* GHC.Float.$fNumDouble_$csignum */, _4k/* GHC.Float.$fNumDouble_$cfromInteger */], _4E/* divideDouble */ = function(_4F, _4G){
  return [0, E(_4F)[1]/E(_4G)[1]];
}, _4H/* $fFractionalDouble */ = [0, _4D/* GHC.Float.$fNumDouble */, _4E/* GHC.Float.divideDouble */, _4b/* GHC.Float.$fFractionalDouble_$crecip */, _48/* GHC.Float.$fFractionalDouble_$cfromRational */], _4I/* $fEnumRatio1 */ = [0, 1], _4J/* $p1Fractional */ = function(_4K){
  return E(E(_4K)[1]);
}, _4L/* $wnumericEnumFrom */ = function(_4M, _4N){
  var _4O = E(_4N);
  return [0, _4O, new T(function(){
    var _4P = B(_4J/* GHC.Real.$p1Fractional */(_4M)), _4Q = B(_4L/* GHC.Real.$wnumericEnumFrom */(_4M, B(A(_4P[1],[_4O, new T(function(){
      return B(A(_4P[7],[_4I/* GHC.Real.$fEnumRatio1 */]));
})]))));
    return [1, _4Q[1], _4Q[2]];
})];
}, _4R/* lvl */ = [0, 1], _4S/* lvl1 */ = new T(function(){
  var _4T = B(_4L/* GHC.Real.$wnumericEnumFrom */(_4H/* GHC.Float.$fFractionalDouble */, _4R/* React.Render.lvl */));
  return [1, _4T[1], _4T[2]];
}), _4U/* True */ = true, _4V/* lvl2 */ = function(_4W){
  return new F(function(){return A(E(E(_4W)[1])[6],[_4U/* GHC.Types.True */]);});
}, _4X/* lvl3 */ = function(_4Y, _4Z, _50){
  return [1, [0, _4Y, _4Z], _50];
}, _51/* mapMaybe */ = function(_52, _53){
  while(1){
    var _54 = (function(_55, _56){
      var _57 = E(_56);
      if(!_57[0]){
        return [0];
      }else{
        var _58 = _57[2], _59 = B(A(_55,[_57[1]]));
        if(!_59[0]){
          var _5a = _55;
          _53 = _58;
          _52 = _5a;
          return null;
        }else{
          return [1, _59[1], new T(function(){
            return B(_51/* Data.Maybe.mapMaybe */(_55, _58));
})];
        }
      }
    })(_52, _53);
    if(_54!=null){
      return _54;
    }
  }
}, _5b/* poly_z */ = [0, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */], _5c/* poly_z1 */ = function(_5d){
  return [0];
}, _5e/* $fFunctorIdentity1 */ = function(_5f, _5g){
  return E(_5f);
}, _5h/* $fFunctorIdentity2 */ = function(_5i, _5j){
  return new F(function(){return A(_5i,[_5j]);});
}, _5k/* $fFunctorIdentity */ = [0, _5h/* Data.Functor.Identity.$fFunctorIdentity2 */, _5e/* Data.Functor.Identity.$fFunctorIdentity1 */], _5l/* animAdd */ = function(_5m){
  return E(E(_5m)[2]);
}, _5n/* animZero */ = function(_5o){
  return E(E(_5o)[4]);
}, _5p/* interpolate */ = function(_5q){
  return E(E(_5q)[1]);
}, _5r/* stepRunningAnims */ = function(_5s, _5t){
  var _5u = function(_5v){
    var _5w = E(_5v);
    if(!_5w[0]){
      return E(new T(function(){
        var _5x = function(_5y){
          var _5z = E(_5y);
          if(!_5z[0]){
            return E(_5s);
          }else{
            var _5A = E(E(E(_5z[1])[1])[1]);
            return new F(function(){return A(_5A[4],[_5k/* Data.Functor.Identity.$fFunctorIdentity */, function(_5B){
              return E(new T(function(){
                return B(_5n/* React.Types.animZero */(_5A[1]));
}));
            }, new T(function(){
              return B(_5x(_5z[2]));
})]);});
          }
        };
        return B(_5x(_5t));
}));
    }else{
      var _5C = E(_5w[1]), _5D = E(E(_5C[1])[1]), _5E = _5D[1], _5F = E(_5D[3]);
      return new F(function(){return A(_5D[4],[_5k/* Data.Functor.Identity.$fFunctorIdentity */, function(_5G){
        return new F(function(){return A(new T(function(){
          return B(_5l/* React.Types.animAdd */(_5E));
}),[_5G, new T(function(){
          return B(A(_5p/* React.Types.interpolate */,[_5E, _5D[5], _5F[1], _5F[2], _5C[2]]));
})]);});
      }, new T(function(){
        return B(_5u(_5w[2]));
})]);});
    }
  };
  return new F(function(){return _5u(_5t);});
}, _5H/* $wa1 */ = function(_5I, _5J, _5K, _5L, _5M, _5N, _5O, _5P, _){
  var _5Q = rMV(_5P), _5R = _5Q, _5S = E(_5O)[1], _5T = rMV(_5S), _5U = _5T, _5V = E(_5M)[1], _5W = rMV(_5V), _5X = _5W, _5Y = E(_5N)[1], _5Z = rMV(_5Y), _60 = _5Z, _61 = new T(function(){
    var _62 = B(_j/* Data.List.$wmapAccumL */(_5L, _5X, _5R));
    return [0, _62[1], _62[2]];
}), _63 = new T(function(){
    return E(E(_61)[1]);
}), _64 = new T(function(){
    var _65 = function(_66){
      var _67 = E(_66);
      if(!_67[0]){
        return E(new T(function(){
          var _68 = function(_69){
            var _6a = E(_69);
            if(!_6a[0]){
              return E(_5b/* React.Render.poly_z */);
            }else{
              var _6b = function(_6c){
                var _6d = E(_6c);
                if(!_6d[0]){
                  return E(new T(function(){
                    return B(_68(_6a[2]));
}));
                }else{
                  var _6e = E(_5J), _6f = _6e[1], _6g = E(_6d[1]), _6h = new T(function(){
                    return B(_6b(_6d[2]));
});
                  return _6f+E(_6g[2])[1]<=_6f ? [0, new T(function(){
                    return E(E(_6h)[1]);
}), [1, [0, _6g, _6e], new T(function(){
                    return E(E(_6h)[2]);
})]] : [0, [1, [0, _6g, _6e], new T(function(){
                    return E(E(_6h)[1]);
})], new T(function(){
                    return E(E(_6h)[2]);
})];
                }
              };
              return new F(function(){return _6b(_6a[1]);});
            }
          };
          return B(_68(E(_61)[2]));
}));
      }else{
        var _6i = E(_67[1]), _6j = new T(function(){
          return B(_65(_67[2]));
});
        return E(_6i[2])[1]+E(E(_6i[1])[2])[1]<=E(_5J)[1] ? [0, new T(function(){
          return E(E(_6j)[1]);
}), [1, _6i, new T(function(){
          return E(E(_6j)[2]);
})]] : [0, [1, _6i, new T(function(){
          return E(E(_6j)[1]);
})], new T(function(){
          return E(E(_6j)[2]);
})];
      }
    };
    return B(_65(_5U));
}), _6k = new T(function(){
    return E(E(_64)[1]);
}), _6l = new T(function(){
    return E(E(_64)[2]);
}), _6m = new T(function(){
    return B(_5r/* React.Anim.stepRunningAnims */(_60, B(_s/* GHC.List.foldr2 */(_4X/* React.Render.lvl3 */, new T(function(){
      var _6n = function(_6o){
        var _6p = E(_6o);
        return _6p[0]==0 ? E(_5c/* React.Render.poly_z1 */) : function(_6q){
          var _6r = E(_6q);
          return _6r[0]==0 ? [0] : [1, [0, _6r[1], new T(function(){
            var _6s = E(_6p[1]);
            return [0, (E(_5J)[1]-E(_6s[2])[1])/E(E(_6s[1])[2])[1]];
})], new T(function(){
            return B(A(new T(function(){
              return B(_6n(_6p[2]));
}),[_6r[2]]));
})];
        };
      };
      return B(A(_6n,[_6k, _6k]));
}), _6l, _4S/* React.Render.lvl1 */))));
}), _6t = B(A(_5K,[_63, _6m])), _6u = E(_6t[1]);
  if(!_6u[0]){
    return E(_1U/* React.Interpret.interpret1 */);
  }else{
    var _6v = E(_6t[2]), _6w = B(_3q/* React.Interpret.interpret2 */(function(_6x, _){
      var _6y = rMV(_5P), _6z = _6y, _ = wMV(_5P, [1, _6x, _6z]);
      return _r/* GHC.Tuple.() */;
    }, _6u[1], _)), _6A = _6w, _6B = js_render(E(_6A)[1], E(_5I)[1]), _ = wMV(_5V, _63), _ = wMV(_5Y, _6m), _ = wMV(_5S, _6k), _ = wMV(_5P, new T(function(){
      return B(_51/* Data.Maybe.mapMaybe */(_4V/* React.Render.lvl2 */, _6l));
}));
    return _r/* GHC.Tuple.() */;
  }
}, _6C/* $wlen */ = function(_6D, _6E){
  while(1){
    var _6F = E(_6D);
    if(!_6F[0]){
      return E(_6E);
    }else{
      _6D = _6F[2];
      var _6G = _6E+1|0;
      _6E = _6G;
      continue;
    }
  }
}, _6H/* render2 */ = [0, 0], _6I/* $wa */ = function(_6J, _6K, _6L, _6M, _6N, _6O, _6P, _){
  var _6Q = function(_6R, _){
    var _6S = rMV(_6P), _6T = _6S, _6U = E(_6O), _6V = rMV(_6U[1]), _6W = _6V;
    if((B(_6C/* GHC.List.$wlen */(_6T, 0))+B(_6C/* GHC.List.$wlen */(_6W, 0))|0)<=0){
      var _6X = js_raf(_6Q), _6Y = _6X;
      return _r/* GHC.Tuple.() */;
    }else{
      var _6Z = B(_5H/* React.Render.$wa1 */(_6J, _6R, _6K, _6L, _6M, _6N, _6U, _6P, _)), _70 = _6Z, _71 = js_raf(_6Q), _72 = _71;
      return _r/* GHC.Tuple.() */;
    }
  }, _73 = B(_5H/* React.Render.$wa1 */(_6J, _6H/* React.Render.render2 */, _6K, _6L, _6M, _6N, _6O, _6P, _)), _74 = _73, _75 = js_raf(_6Q), _76 = _75;
  return [0, _76];
}, _77/* Closed */ = 1, _78/* Closed */ = 1, _79/* $fAnimatableColor2 */ = [0, 1], _7a/* $fAnimatableColor_$canimZero1 */ = [0, 0], _7b/* lvl */ = new T(function(){
  return B(unCStr("Negative exponent"));
}), _7c/* $s^1 */ = new T(function(){
  return B(err(_7b/* Numeric.lvl */));
}), _7d/* $wg1 */ = function(_7e, _7f, _7g){
  while(1){
    if(!(_7f%2)){
      var _7h = _7e*_7e, _7i = quot(_7f, 2);
      _7e = _7h;
      _7f = _7i;
      continue;
    }else{
      var _7j = E(_7f);
      if(_7j==1){
        return _7e*_7g;
      }else{
        var _7h = _7e*_7e;
        _7f = quot(_7j-1|0, 2);
        var _7k = _7e*_7g;
        _7e = _7h;
        _7g = _7k;
        continue;
      }
    }
  }
}, _7l/* $wf */ = function(_7m, _7n){
  while(1){
    if(!(_7n%2)){
      var _7o = _7m*_7m, _7p = quot(_7n, 2);
      _7m = _7o;
      _7n = _7p;
      continue;
    }else{
      var _7q = E(_7n);
      if(_7q==1){
        return E(_7m);
      }else{
        return new F(function(){return _7d/* Numeric.$wg1 */(_7m*_7m, quot(_7q-1|0, 2), _7m);});
      }
    }
  }
}, _7r/* $w$s^^ */ = function(_7s, _7t){
  if(_7t<0){
    var _7u =  -_7t;
    if(_7u>=0){
      var _7v = E(_7u);
      return _7v==0 ? 1 : 1/B(_7l/* Numeric.$wf */(E(_7s)[1], _7v));
    }else{
      return E(_7c/* Numeric.$s^1 */);
    }
  }else{
    if(_7t>=0){
      var _7w = E(_7t);
      if(!_7w){
        return 1;
      }else{
        return new F(function(){return _7l/* Numeric.$wf */(E(_7s)[1], _7w);});
      }
    }else{
      return E(_7c/* Numeric.$s^1 */);
    }
  }
}, _7x/* $weaseInOutPow */ = function(_7y, _7z){
  return _7z>=0.5 ? 1-B(_7r/* React.Anim.$w$s^^ */([0, 1-_7z+(1-_7z)], _7y))/2 : B(_7r/* React.Anim.$w$s^^ */([0, _7z+_7z], _7y))/2;
}, _7A/* EaseInBounce */ = [16], _7B/* EaseOutBounce */ = [17], _7C/* elastic */ = function(_7D){
  var _7E = E(_7D)[1];
  return [0, Math.pow(2,  -(10*_7E))*Math.sin((_7E-7.5e-2)*20.943951023931955)+1];
}, _7F/* js_bezier */ = function(_7G, _7H, _7I, _7J, _7K){
  var _7L = js_bezier(E(_7G)[1], E(_7H)[1], E(_7I)[1], E(_7J)[1], E(_7K)[1]), _7M = _7L;
  return [0, _7M];
}, _7N/* easeDouble */ = function(_7O, _7P){
  while(1){
    var _7Q = (function(_7R, _7S){
      var _7T = E(_7R);
      switch(_7T[0]){
        case 0:
          return E(_7S);
        case 1:
          return [0, B(_7r/* React.Anim.$w$s^^ */(_7S, 2))];
        case 2:
          return [0, 1-B(_7r/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7S)[1]];
}), 2))];
        case 3:
          return [0, B(_7x/* React.Anim.$weaseInOutPow */(2, E(_7S)[1]))];
        case 4:
          return [0, B(_7r/* React.Anim.$w$s^^ */(_7S, 3))];
        case 5:
          return [0, 1-B(_7r/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7S)[1]];
}), 3))];
        case 6:
          return [0, B(_7x/* React.Anim.$weaseInOutPow */(3, E(_7S)[1]))];
        case 7:
          return [0, B(_7r/* React.Anim.$w$s^^ */(_7S, 4))];
        case 8:
          return [0, 1-B(_7r/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7S)[1]];
}), 4))];
        case 9:
          return [0, B(_7x/* React.Anim.$weaseInOutPow */(4, E(_7S)[1]))];
        case 10:
          return [0, B(_7r/* React.Anim.$w$s^^ */(_7S, 5))];
        case 11:
          return [0, 1-B(_7r/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7S)[1]];
}), 5))];
        case 12:
          return [0, B(_7x/* React.Anim.$weaseInOutPow */(5, E(_7S)[1]))];
        case 13:
          var _7U = 1-E(_7S)[1];
          return [0, 1-(Math.pow(2,  -(10*_7U))*Math.sin((_7U-7.5e-2)*20.943951023931955)+1)];
        case 14:
          return new F(function(){return _7C/* React.Anim.elastic */(_7S);});
          break;
        case 15:
          var _7V = E(_7S)[1];
          if(_7V>=0.5){
            var _7W = 1-_7V+(1-_7V);
            return [0, 1-(Math.pow(2,  -(10*_7W))*Math.sin((_7W-7.5e-2)*20.943951023931955)+1)/2];
          }else{
            var _7X = _7V+_7V;
            return [0, (Math.pow(2,  -(10*_7X))*Math.sin((_7X-7.5e-2)*20.943951023931955)+1)/2];
          }
          break;
        case 16:
          _7O = _7B/* React.Types.EaseOutBounce */;
          _7P = new T(function(){
            return [0, 1-E(_7S)[1]];
});
          return null;
        case 17:
          var _7Y = E(_7S)[1];
          if(_7Y>=0.36363636363636365){
            if(_7Y>=0.7272727272727273){
              if(_7Y>=0.9090909090909091){
                var _7Z = _7Y-0.9545454545454546;
                return [0, 7.5625*_7Z*_7Z+0.984375];
              }else{
                var _80 = _7Y-0.8181818181818182;
                return [0, 7.5625*_80*_80+0.9375];
              }
            }else{
              var _81 = _7Y-0.5454545454545454;
              return [0, 7.5625*_81*_81+0.75];
            }
          }else{
            return [0, 7.5625*_7Y*_7Y];
          }
          break;
        case 18:
          var _82 = E(_7S)[1];
          return _82>=0.5 ? [0, 1-B(_7N/* React.Anim.easeDouble */(_7B/* React.Types.EaseOutBounce */, [0, 1-_82+(1-_82)]))[1]/2] : [0, B(_7N/* React.Anim.easeDouble */(_7A/* React.Types.EaseInBounce */, [0, _82+_82]))[1]/2];
        case 19:
          return new F(function(){return _7F/* React.Imports.js_bezier */(_7T[1], _7T[2], _7T[3], _7T[4], _7S);});
          break;
        case 20:
          var _83 = js_bezier(0.47, 0, 0.745, 0.715, E(_7S)[1]), _84 = _83;
          return [0, _84];
        default:
          var _85 = js_bezier(0.39, 0.575, 0.565, 1, E(_7S)[1]), _86 = _85;
          return [0, _86];
      }
    })(_7O, _7P);
    if(_7Q!=null){
      return _7Q;
    }
  }
}, _87/* intLerp */ = function(_88, _89, _8a){
  var _8b = E(_88)[1], _8c = _8b+(E(_89)[1]-_8b|0)*E(_8a)[1], _8d = _8c&4294967295;
  return _8c>=_8d ? [0, _8d] : [0, _8d-1|0];
}, _8e/* $w$cinterpolate */ = function(_8f, _8g, _8h, _8i, _8j, _8k, _8l, _8m){
  var _8n = new T(function(){
    var _8o = E(_8m), _8p = _8o[1];
    if(_8p>0){
      var _8q = _8p<1 ? B(_7N/* React.Anim.easeDouble */(_8f, _8o)) : E(_79/* React.Anim.$fAnimatableColor2 */);
    }else{
      var _8q = E(_7a/* React.Anim.$fAnimatableColor_$canimZero1 */);
    }
    var _8r = _8q, _8s = _8r;
    return _8s;
});
  return [0, new T(function(){
    return B(_87/* React.Anim.intLerp */(_8g, _8j, _8n));
}), new T(function(){
    return B(_87/* React.Anim.intLerp */(_8h, _8k, _8n));
}), new T(function(){
    return B(_87/* React.Anim.intLerp */(_8i, _8l, _8n));
})];
}, _8t/* $fShow(,)1 */ = function(_8u, _8v, _8w){
  return new F(function(){return A(_8u,[[1, _17/* GHC.Show.showList__1 */, new T(function(){
    return B(A(_8v,[_8w]));
})]]);});
}, _8x/* shows12 */ = [0, 41], _8y/* $fShowColor2 */ = [1, _8x/* GHC.Show.shows12 */, _b/* GHC.Types.[] */], _8z/* itos */ = function(_8A, _8B){
  var _8C = jsShowI(_8A), _8D = _8C;
  return new F(function(){return _10/* GHC.Base.++ */(fromJSStr(_8D), _8B);});
}, _8E/* shows13 */ = [0, 40], _8F/* $wshowSignedInt */ = function(_8G, _8H, _8I){
  if(_8H>=0){
    return new F(function(){return _8z/* GHC.Show.itos */(_8H, _8I);});
  }else{
    return _8G<=6 ? B(_8z/* GHC.Show.itos */(_8H, _8I)) : [1, _8E/* GHC.Show.shows13 */, new T(function(){
      var _8J = jsShowI(_8H), _8K = _8J;
      return B(_10/* GHC.Base.++ */(fromJSStr(_8K), [1, _8x/* GHC.Show.shows12 */, _8I]));
})];
  }
}, _8L/* lvl4 */ = new T(function(){
  return B(unCStr(": empty list"));
}), _8M/* prel_list_str */ = new T(function(){
  return B(unCStr("Prelude."));
}), _8N/* errorEmptyList */ = function(_8O){
  return new F(function(){return err(B(_10/* GHC.Base.++ */(_8M/* GHC.List.prel_list_str */, new T(function(){
    return B(_10/* GHC.Base.++ */(_8O, _8L/* GHC.List.lvl4 */));
}))));});
}, _8P/* lvl5 */ = new T(function(){
  return B(unCStr("foldr1"));
}), _8Q/* lvl6 */ = new T(function(){
  return B(_8N/* GHC.List.errorEmptyList */(_8P/* GHC.List.lvl5 */));
}), _8R/* foldr1 */ = function(_8S, _8T){
  var _8U = E(_8T);
  if(!_8U[0]){
    return E(_8Q/* GHC.List.lvl6 */);
  }else{
    var _8V = _8U[1], _8W = E(_8U[2]);
    if(!_8W[0]){
      return E(_8V);
    }else{
      return new F(function(){return A(_8S,[_8V, new T(function(){
        return B(_8R/* GHC.List.foldr1 */(_8S, _8W));
})]);});
    }
  }
}, _8X/* $w$cshow */ = function(_8Y, _8Z, _90){
  return new F(function(){return unAppCStr("rgb", [1, _8E/* GHC.Show.shows13 */, new T(function(){
    return B(A(_8R/* GHC.List.foldr1 */,[_8t/* GHC.Show.$fShow(,)1 */, [1, function(_91){
      return new F(function(){return _8F/* GHC.Show.$wshowSignedInt */(0, E(_8Y)[1], _91);});
    }, [1, function(_92){
      return new F(function(){return _8F/* GHC.Show.$wshowSignedInt */(0, E(_8Z)[1], _92);});
    }, [1, function(_93){
      return new F(function(){return _8F/* GHC.Show.$wshowSignedInt */(0, E(_90)[1], _93);});
    }, _b/* GHC.Types.[] */]]], _8y/* React.Anim.$fShowColor2 */]));
})]);});
}, _94/* $wseparateAttrs */ = function(_95){
  var _96 = E(_95);
  if(!_96[0]){
    return [0, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */];
  }else{
    var _97 = _96[2], _98 = E(_96[1]);
    if(!_98[0]){
      var _99 = new T(function(){
        var _9a = B(_94/* React.Types.$wseparateAttrs */(_97));
        return [0, _9a[1], _9a[2]];
});
      return [0, new T(function(){
        return E(E(_99)[1]);
}), [1, [0, _98[1], _98[2]], new T(function(){
        return E(E(_99)[2]);
})]];
    }else{
      var _9b = new T(function(){
        var _9c = B(_94/* React.Types.$wseparateAttrs */(_97));
        return [0, _9c[1], _9c[2]];
});
      return [0, [1, _98[1], new T(function(){
        return E(E(_9b)[1]);
})], new T(function(){
        return E(E(_9b)[2]);
})];
    }
  }
}, _9d/* EaseInOutQuad */ = [3], _9e/* Linear */ = [0], _9f/* a */ = [0, 74], _9g/* a1 */ = [0, 178], _9h/* a10 */ = [2, _b/* GHC.Types.[] */], _9i/* a11 */ = [1, _9h/* Chain.a10 */, _b/* GHC.Types.[] */], _9j/* a2 */ = [0, 182], _9k/* div_1 */ = new T(function(){
  return [0, "div"];
}), _9l/* finalHeight */ = [0, 200], _9m/* finalWidth */ = [0, 400], _9n/* lvl */ = [0, _9m/* Chain.finalWidth */, _9l/* Chain.finalHeight */], _9o/* startHeight */ = [0, 20], _9p/* lvl1 */ = [0, _9o/* Chain.startHeight */, _9o/* Chain.startHeight */], _9q/* lvl10 */ = new T(function(){
  return [0, "width"];
}), _9r/* lvl11 */ = new T(function(){
  return [0, "height"];
}), _9s/* lvl12 */ = new T(function(){
  return [0, "backgroundColor"];
}), _9t/* a6 */ = new T(function(){
  return B(unCStr("toggle"));
}), _9u/* a7 */ = [2, _9t/* Chain.a6 */], _9v/* a8 */ = [1, _9u/* Chain.a7 */, _b/* GHC.Types.[] */], _9w/* button_1 */ = new T(function(){
  return [0, "button"];
}), _9x/* class_1 */ = new T(function(){
  return [0, "className"];
}), _9y/* lvl2 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _9z/* lvl3 */ = [0, _9x/* React.Attrs.class_1 */, _9y/* Chain.lvl2 */], _9A/* ClickEvt */ = 4, _9B/* Toggle */ = 0, _9C/* x */ = [1, _9B/* Chain.Toggle */], _9D/* lvl4 */ = function(_9E){
  var _9F = js_parseMouseEvent(E(_9E)[1]), _9G = _9F, _9H = E(_9G);
  return E(_9C/* Chain.x */);
}, _9I/* lvl5 */ = [0, _9D/* Chain.lvl4 */, _9A/* React.Types.ClickEvt */], _9J/* lvl6 */ = [1, _9I/* Chain.lvl5 */], _9K/* lvl7 */ = [1, _9J/* Chain.lvl6 */, _b/* GHC.Types.[] */], _9L/* lvl8 */ = [1, _9z/* Chain.lvl3 */, _9K/* Chain.lvl7 */], _9M/* ds */ = new T(function(){
  var _9N = B(_94/* React.Types.$wseparateAttrs */(_9L/* Chain.lvl8 */));
  return [0, _9N[1], _9N[2]];
}), _9O/* lvl19 */ = new T(function(){
  return E(E(_9M/* Chain.ds */)[2]);
}), _9P/* lvl20 */ = new T(function(){
  return E(E(_9M/* Chain.ds */)[1]);
}), _9Q/* lvl13 */ = [0, _9w/* React.Elements.button_1 */, _9O/* Chain.lvl19 */, _9P/* Chain.lvl20 */, _9v/* Chain.a8 */], _9R/* lvl14 */ = [1, _9Q/* Chain.lvl13 */, _b/* GHC.Types.[] */], _9S/* lvl15 */ = [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _9R/* Chain.lvl14 */], _9T/* lvl16 */ = [1, _9S/* Chain.lvl15 */, _b/* GHC.Types.[] */], _9U/* a3 */ = new T(function(){
  return [1, "chain-container"];
}), _9V/* a4 */ = [0, _9x/* React.Attrs.class_1 */, _9U/* Chain.a3 */], _9W/* a5 */ = [1, _9V/* Chain.a4 */, _b/* GHC.Types.[] */], _9X/* ds1 */ = new T(function(){
  var _9Y = B(_94/* React.Types.$wseparateAttrs */(_9W/* Chain.a5 */));
  return [0, _9Y[1], _9Y[2]];
}), _9Z/* lvl17 */ = new T(function(){
  return E(E(_9X/* Chain.ds1 */)[2]);
}), _a0/* lvl18 */ = new T(function(){
  return E(E(_9X/* Chain.ds1 */)[1]);
}), _a1/* a9 */ = new T(function(){
  return [1, "chaining"];
}), _a2/* lvl9 */ = [0, _9x/* React.Attrs.class_1 */, _a1/* Chain.a9 */], _a3/* style_1 */ = new T(function(){
  return [0, "style"];
}), _a4/* chainClass17 */ = function(_a5, _a6){
  var _a7 = new T(function(){
    return B(A(function(_a8){
      var _a9 = new T(function(){
        var _aa = new T(function(){
          var _ab = E(_a8);
          if(!E(_a5)){
            var _ac = [0, _ab[1]+1];
          }else{
            var _ac = E(_ab);
          }
          var _ad = _ac;
          return _ad;
}), _ae = new T(function(){
          var _af = E(E(_aa)[1]);
          if(!_af){
            var _ag = E(_9p/* Chain.lvl1 */);
          }else{
            if(_af>=0.3333333333333333){
              if(_af>=0.6666666666666666){
                var _ah = _af>=1 ? E(_9n/* Chain.lvl */) : [0, _9m/* Chain.finalWidth */, new T(function(){
                  var _ai = (_af-0.3333333333333333)*1.5;
                  if(_ai>0){
                    if(_ai<1){
                      var _aj = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _ai]))[1]*180];
                    }else{
                      var _aj = E(_9l/* Chain.finalHeight */);
                    }
                    var _ak = _aj, _al = _ak;
                  }else{
                    var _al = E(_9o/* Chain.startHeight */);
                  }
                  var _am = _al, _an = _am, _ao = _an;
                  return _ao;
})];
              }else{
                var _ah = [0, new T(function(){
                  var _ap = _af*1.5;
                  if(_ap>0){
                    if(_ap<1){
                      var _aq = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _ap]))[1]*380];
                    }else{
                      var _aq = E(_9m/* Chain.finalWidth */);
                    }
                    var _ar = _aq, _as = _ar;
                  }else{
                    var _as = E(_9o/* Chain.startHeight */);
                  }
                  var _at = _as, _au = _at;
                  return _au;
}), new T(function(){
                  var _av = (_af-0.3333333333333333)*1.5;
                  if(_av>0){
                    if(_av<1){
                      var _aw = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _av]))[1]*180];
                    }else{
                      var _aw = E(_9l/* Chain.finalHeight */);
                    }
                    var _ax = _aw, _ay = _ax;
                  }else{
                    var _ay = E(_9o/* Chain.startHeight */);
                  }
                  var _az = _ay, _aA = _az, _aB = _aA;
                  return _aB;
})];
              }
              var _aC = _ah, _aD = _aC;
            }else{
              var _aD = [0, new T(function(){
                var _aE = _af*1.5;
                if(_aE>0){
                  if(_aE<1){
                    var _aF = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _aE]))[1]*380];
                  }else{
                    var _aF = E(_9m/* Chain.finalWidth */);
                  }
                  var _aG = _aF, _aH = _aG;
                }else{
                  var _aH = E(_9o/* Chain.startHeight */);
                }
                var _aI = _aH, _aJ = _aI;
                return _aJ;
}), _9o/* Chain.startHeight */];
            }
            var _aK = _aD, _ag = _aK;
          }
          var _aL = _ag;
          return _aL;
}), _aM = B(_94/* React.Types.$wseparateAttrs */([1, _a2/* Chain.lvl9 */, [1, [0, _a3/* React.Attrs.style_1 */, [4, E([1, [0, _9q/* Chain.lvl10 */, new T(function(){
          return [0, E(E(_ae)[1])[1]];
})], [1, [0, _9r/* Chain.lvl11 */, new T(function(){
          return [0, E(E(_ae)[2])[1]];
})], [1, [0, _9s/* Chain.lvl12 */, new T(function(){
          var _aN = B(_8e/* React.Anim.$w$cinterpolate */(_9e/* React.Types.Linear */, _9f/* Chain.a */, _9f/* Chain.a */, _9j/* Chain.a2 */, _9f/* Chain.a */, _9g/* Chain.a1 */, _9j/* Chain.a2 */, _aa));
          return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_aN[1], _aN[2], _aN[3])))];
})], _b/* GHC.Types.[] */]]])]], _b/* GHC.Types.[] */]]));
        return [0, _aM[1], _aM[2]];
});
      return function(_aO){
        return [0, new T(function(){
          return B(_10/* GHC.Base.++ */(_9T/* Chain.lvl16 */, [1, [0, _9k/* React.Elements.div_1 */, new T(function(){
            return E(E(_a9)[2]);
}), new T(function(){
            return E(E(_a9)[1]);
}), _9i/* Chain.a11 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_a6, _a6]));
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _9Z/* Chain.lvl17 */, _a0/* Chain.lvl18 */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_a7)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_a7)[2]);
})];
}, _aP/* chainClass2 */ = [0, 0], _aQ/* $w$cinterpolate1 */ = function(_aR, _aS, _aT, _aU){
  if(_aU>0){
    if(_aU<1){
      var _aV = E(_aS)[1];
      return [0, _aV+B(_7N/* React.Anim.easeDouble */(_aR, [0, _aU]))[1]*(E(_aT)[1]-_aV)];
    }else{
      return E(_aT);
    }
  }else{
    return E(_aS);
  }
}, _aW/* $fAnimatableDouble_$cinterpolate */ = function(_aX, _aY, _aZ, _b0){
  return new F(function(){return _aQ/* React.Anim.$w$cinterpolate1 */(_aX, _aY, _aZ, E(_b0)[1]);});
}, _b1/* $fAnimatableDouble */ = [0, _aW/* React.Anim.$fAnimatableDouble_$cinterpolate */, _4x/* GHC.Float.plusDouble */, _4s/* GHC.Float.minusDouble */, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */], _b2/* chainClass11 */ = [0, 1000], _b3/* chainClass16 */ = [0, 1], _b4/* chainClass15 */ = [0, _b3/* Chain.chainClass16 */, _aP/* Chain.chainClass2 */], _b5/* chainClass7 */ = function(_b6){
  return [0];
}, _b7/* chainClass8 */ = function(_b8, _b9){
  return E(_b9);
}, _ba/* chainClass14 */ = [0, _b1/* React.Anim.$fAnimatableDouble */, _b2/* Chain.chainClass11 */, _b4/* Chain.chainClass15 */, _b7/* Chain.chainClass8 */, _9d/* React.Types.EaseInOutQuad */, _b5/* Chain.chainClass7 */], _bb/* chainClass13 */ = [1, _ba/* Chain.chainClass14 */, _b/* GHC.Types.[] */], _bc/* chainClass12 */ = [0, _77/* Chain.Closed */, _bb/* Chain.chainClass13 */], _bd/* Open */ = 0, _be/* chainClass10 */ = [0, -1], _bf/* chainClass9 */ = [0, _be/* Chain.chainClass10 */, _aP/* Chain.chainClass2 */], _bg/* chainClass6 */ = [0, _b1/* React.Anim.$fAnimatableDouble */, _b2/* Chain.chainClass11 */, _bf/* Chain.chainClass9 */, _b7/* Chain.chainClass8 */, _9d/* React.Types.EaseInOutQuad */, _b5/* Chain.chainClass7 */], _bh/* chainClass5 */ = [1, _bg/* Chain.chainClass6 */, _b/* GHC.Types.[] */], _bi/* chainClass4 */ = [0, _bd/* Chain.Open */, _bh/* Chain.chainClass5 */], _bj/* chainClass3 */ = function(_bk, _bl){
  if(!E(_bk)){
    var _bm = E(_bl);
    return E(_bc/* Chain.chainClass12 */);
  }else{
    var _bn = E(_bl);
    return E(_bi/* Chain.chainClass4 */);
  }
}, _bo/* RepeatingFlash */ = [1], _bp/* circlesClass2 */ = [1, _bo/* Circles.RepeatingFlash */, _b/* GHC.Types.[] */], _bq/* $fAnimatableColor1 */ = [0, 0], _br/* $fAnimatableColor_$canimZero */ = [0, _bq/* React.Anim.$fAnimatableColor1 */, _bq/* React.Anim.$fAnimatableColor1 */, _bq/* React.Anim.$fAnimatableColor1 */], _bs/* circlesClass5 */ = [0, 0], _bt/* circlesClass4 */ = [0, _bs/* Circles.circlesClass5 */, _bs/* Circles.circlesClass5 */], _bu/* circlesClass3 */ = [0, _br/* React.Anim.$fAnimatableColor_$canimZero */, _br/* React.Anim.$fAnimatableColor_$canimZero */, _br/* React.Anim.$fAnimatableColor_$canimZero */, _br/* React.Anim.$fAnimatableColor_$canimZero */, _bt/* Circles.circlesClass4 */], _bv/* C1 */ = 0, _bw/* C3 */ = 2, _bx/* C2 */ = 1, _by/* C4 */ = 3, _bz/* lvl41 */ = [1, _by/* Circles.C4 */, _b/* GHC.Types.[] */], _bA/* lvl42 */ = [1, _bx/* Circles.C2 */, _bz/* Circles.lvl41 */], _bB/* lvl43 */ = [1, _bw/* Circles.C3 */, _bA/* Circles.lvl42 */], _bC/* lvl44 */ = [1, _bv/* Circles.C1 */, _bB/* Circles.lvl43 */], _bD/* circlesClass_xs' */ = new T(function(){
  return B(_10/* GHC.Base.++ */(_bC/* Circles.lvl44 */, _bD/* Circles.circlesClass_xs' */));
}), _bE/* lvl10 */ = new T(function(){
  return B(unCStr("tail"));
}), _bF/* tail1 */ = new T(function(){
  return B(_8N/* GHC.List.errorEmptyList */(_bE/* GHC.List.lvl10 */));
}), _bG/* circlesClass7 */ = new T(function(){
  var _bH = E(_bD/* Circles.circlesClass_xs' */);
  return _bH[0]==0 ? E(_bF/* GHC.List.tail1 */) : E(_bH[2]);
}), _bI/* circlesClass6 */ = [0, _bv/* Circles.C1 */, _bG/* Circles.circlesClass7 */], _bJ/* $fAnimatable(,)_$canimAdd */ = function(_bK, _bL, _bM, _bN){
  var _bO = E(_bM), _bP = E(_bN);
  return [0, new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_bK, _bO[1], _bP[1]]));
}), new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_bL, _bO[2], _bP[2]]));
})];
}, _bQ/* animSub */ = function(_bR){
  return E(E(_bR)[3]);
}, _bS/* $fAnimatable(,)_$canimSub */ = function(_bT, _bU, _bV, _bW){
  var _bX = E(_bV), _bY = E(_bW);
  return [0, new T(function(){
    return B(A(_bQ/* React.Types.animSub */,[_bT, _bX[1], _bY[1]]));
}), new T(function(){
    return B(A(_bQ/* React.Types.animSub */,[_bU, _bX[2], _bY[2]]));
})];
}, _bZ/* $fAnimatable(,)_$canimZero */ = function(_c0, _c1){
  return [0, new T(function(){
    return B(_5n/* React.Types.animZero */(_c0));
}), new T(function(){
    return B(_5n/* React.Types.animZero */(_c1));
})];
}, _c2/* $fAnimatable(,)_$cinterpolate */ = function(_c3, _c4, _c5, _c6, _c7, _c8){
  var _c9 = E(_c6), _ca = E(_c7);
  return [0, new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_c3, _c5, _c9[1], _ca[1], _c8]));
}), new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_c4, _c5, _c9[2], _ca[2], _c8]));
})];
}, _cb/* $fAnimatable(,) */ = function(_cc, _cd){
  return [0, function(_ce, _cf, _cg, _ch){
    return new F(function(){return _c2/* React.Anim.$fAnimatable(,)_$cinterpolate */(_cc, _cd, _ce, _cf, _cg, _ch);});
  }, function(_cg, _ch){
    return new F(function(){return _bJ/* React.Anim.$fAnimatable(,)_$canimAdd */(_cc, _cd, _cg, _ch);});
  }, function(_cg, _ch){
    return new F(function(){return _bS/* React.Anim.$fAnimatable(,)_$canimSub */(_cc, _cd, _cg, _ch);});
  }, new T(function(){
    return B(_bZ/* React.Anim.$fAnimatable(,)_$canimZero */(_cc, _cd));
})];
}, _ci/* $dAnimatable */ = new T(function(){
  return B(_cb/* React.Anim.$fAnimatable(,) */(_b1/* React.Anim.$fAnimatableDouble */, _b1/* React.Anim.$fAnimatableDouble */));
}), _cj/* $fNumInt_$c+ */ = function(_ck, _cl){
  return [0, E(_ck)[1]+E(_cl)[1]|0];
}, _cm/* $fAnimatableColor_$canimAdd */ = function(_cn, _co){
  var _cp = E(_cn), _cq = E(_co);
  return [0, new T(function(){
    return B(_cj/* GHC.Num.$fNumInt_$c+ */(_cp[1], _cq[1]));
}), new T(function(){
    return B(_cj/* GHC.Num.$fNumInt_$c+ */(_cp[2], _cq[2]));
}), new T(function(){
    return B(_cj/* GHC.Num.$fNumInt_$c+ */(_cp[3], _cq[3]));
})];
}, _cr/* $fNumInt_$c- */ = function(_cs, _ct){
  return [0, E(_cs)[1]-E(_ct)[1]|0];
}, _cu/* $fAnimatableColor_$canimSub */ = function(_cv, _cw){
  var _cx = E(_cv), _cy = E(_cw);
  return [0, new T(function(){
    return B(_cr/* GHC.Num.$fNumInt_$c- */(_cx[1], _cy[1]));
}), new T(function(){
    return B(_cr/* GHC.Num.$fNumInt_$c- */(_cx[2], _cy[2]));
}), new T(function(){
    return B(_cr/* GHC.Num.$fNumInt_$c- */(_cx[3], _cy[3]));
})];
}, _cz/* $fAnimatableColor_$cinterpolate */ = function(_cA, _cB, _cC, _cD){
  var _cE = E(_cB), _cF = E(_cC), _cG = B(_8e/* React.Anim.$w$cinterpolate */(_cA, _cE[1], _cE[2], _cE[3], _cF[1], _cF[2], _cF[3], _cD));
  return [0, _cG[1], _cG[2], _cG[3]];
}, _cH/* $fAnimatableColor */ = [0, _cz/* React.Anim.$fAnimatableColor_$cinterpolate */, _cm/* React.Anim.$fAnimatableColor_$canimAdd */, _cu/* React.Anim.$fAnimatableColor_$canimSub */, _br/* React.Anim.$fAnimatableColor_$canimZero */], _cI/* EaseInQuad */ = [1], _cJ/* Nothing */ = [0], _cK/* lvl11 */ = new T(function(){
  return B(unCStr("head"));
}), _cL/* badHead */ = new T(function(){
  return B(_8N/* GHC.List.errorEmptyList */(_cK/* GHC.List.lvl11 */));
}), _cM/* fmap */ = function(_cN){
  return E(E(_cN)[1]);
}, _cO/* lvl10 */ = function(_cP){
  return [0];
}, _cQ/* lvl3 */ = [1, _bo/* Circles.RepeatingFlash */], _cR/* lvl31 */ = [0, -2], _cS/* lvl32 */ = [0, _cR/* Circles.lvl31 */, _bs/* Circles.circlesClass5 */], _cT/* lvl33 */ = [0, _cR/* Circles.lvl31 */, _cR/* Circles.lvl31 */], _cU/* lvl34 */ = [0, _bs/* Circles.circlesClass5 */, _cR/* Circles.lvl31 */], _cV/* lvl35 */ = [0, 2], _cW/* lvl36 */ = [0, _cV/* Circles.lvl35 */, _bs/* Circles.circlesClass5 */], _cX/* lvl37 */ = [0, _cV/* Circles.lvl35 */, _cR/* Circles.lvl31 */], _cY/* lvl38 */ = [0, _cV/* Circles.lvl35 */, _cV/* Circles.lvl35 */], _cZ/* lvl39 */ = [0, _bs/* Circles.circlesClass5 */, _cV/* Circles.lvl35 */], _d0/* lvl4 */ = [0, 800], _d1/* lvl40 */ = [0, _cR/* Circles.lvl31 */, _cV/* Circles.lvl35 */], _d2/* a13 */ = [0, 160], _d3/* a14 */ = [0, 14], _d4/* a15 */ = [0, -169], _d5/* lvl5 */ = [0, _d2/* Circles.a13 */, _d3/* Circles.a14 */, _d4/* Circles.a15 */], _d6/* lvl6 */ = [0, _d5/* Circles.lvl5 */, _br/* React.Anim.$fAnimatableColor_$canimZero */], _d7/* lvl7 */ = [0, 2000], _d8/* lvl8 */ = [0, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */], _d9/* lvl9 */ = function(_da, _db, _dc){
  var _dd = E(_dc);
  return new F(function(){return A(_cM/* GHC.Base.fmap */,[_da, function(_de){
    return [0, _dd[1], _dd[2], _dd[3], _dd[4], _de];
  }, new T(function(){
    return B(A(_db,[_dd[5]]));
})]);});
}, _df/* circlesClass8 */ = function(_dg, _dh){
  var _di = E(_dg), _dj = _di[1], _dk = _di[2], _dl = new T(function(){
    var _dm = E(_dh);
    return _dm[0]==0 ? [0, _dm[1], _dk, _cJ/* Data.Maybe.Nothing */] : [0, new T(function(){
      var _dn = E(_dk);
      return _dn[0]==0 ? E(_cL/* GHC.List.badHead */) : E(_dn[1]);
}), new T(function(){
      var _do = E(_dk);
      return _do[0]==0 ? E(_bF/* GHC.List.tail1 */) : E(_do[2]);
}), _cQ/* Circles.lvl3 */];
}), _dp = new T(function(){
    return E(E(_dl)[1]);
});
  return [0, [0, _dp, new T(function(){
    return E(E(_dl)[2]);
})], [1, [0, _cH/* React.Anim.$fAnimatableColor */, _d0/* Circles.lvl4 */, _d6/* Circles.lvl6 */, function(_dq, _dr, _ds){
    switch(E(_dp)){
      case 0:
        var _dt = E(_ds);
        return new F(function(){return A(_cM/* GHC.Base.fmap */,[_dq, function(_du){
          return [0, _du, _dt[2], _dt[3], _dt[4], _dt[5]];
        }, new T(function(){
          return B(A(_dr,[_dt[1]]));
})]);});
        break;
      case 1:
        var _dv = E(_ds);
        return new F(function(){return A(_cM/* GHC.Base.fmap */,[_dq, function(_dw){
          return [0, _dv[1], _dw, _dv[3], _dv[4], _dv[5]];
        }, new T(function(){
          return B(A(_dr,[_dv[2]]));
})]);});
        break;
      case 2:
        var _dx = E(_ds);
        return new F(function(){return A(_cM/* GHC.Base.fmap */,[_dq, function(_dy){
          return [0, _dx[1], _dx[2], _dy, _dx[4], _dx[5]];
        }, new T(function(){
          return B(A(_dr,[_dx[3]]));
})]);});
        break;
      default:
        var _dz = E(_ds);
        return new F(function(){return A(_cM/* GHC.Base.fmap */,[_dq, function(_dA){
          return [0, _dz[1], _dz[2], _dz[3], _dA, _dz[5]];
        }, new T(function(){
          return B(A(_dr,[_dz[4]]));
})]);});
    }
  }, _cI/* React.Types.EaseInQuad */, function(_dB){
    return E(new T(function(){
      return E(E(_dl)[3]);
}));
  }], [1, [0, _ci/* Circles.$dAnimatable */, _d7/* Circles.lvl7 */, [0, new T(function(){
    switch(E(_dp)){
      case 0:
        switch(E(_dj)){
          case 0:
            var _dC = E(_bt/* Circles.circlesClass4 */);
            break;
          case 1:
            var _dC = E(_cS/* Circles.lvl32 */);
            break;
          case 2:
            var _dC = E(_cT/* Circles.lvl33 */);
            break;
          default:
            var _dC = E(_cU/* Circles.lvl34 */);
        }
        var _dD = _dC;
        break;
      case 1:
        switch(E(_dj)){
          case 0:
            var _dE = E(_cW/* Circles.lvl36 */);
            break;
          case 1:
            var _dE = E(_bt/* Circles.circlesClass4 */);
            break;
          case 2:
            var _dE = E(_cU/* Circles.lvl34 */);
            break;
          default:
            var _dE = E(_cX/* Circles.lvl37 */);
        }
        var _dD = _dE;
        break;
      case 2:
        switch(E(_dj)){
          case 0:
            var _dF = E(_cY/* Circles.lvl38 */);
            break;
          case 1:
            var _dF = E(_cZ/* Circles.lvl39 */);
            break;
          case 2:
            var _dF = E(_bt/* Circles.circlesClass4 */);
            break;
          default:
            var _dF = E(_cW/* Circles.lvl36 */);
        }
        var _dD = _dF;
        break;
      default:
        switch(E(_dj)){
          case 0:
            var _dG = E(_cZ/* Circles.lvl39 */);
            break;
          case 1:
            var _dG = E(_d1/* Circles.lvl40 */);
            break;
          case 2:
            var _dG = E(_cS/* Circles.lvl32 */);
            break;
          default:
            var _dG = E(_bt/* Circles.circlesClass4 */);
        }
        var _dD = _dG;
    }
    return _dD;
}), _d8/* Circles.lvl8 */], _d9/* Circles.lvl9 */, _9d/* React.Types.EaseInOutQuad */, _cO/* Circles.lvl10 */], _b/* GHC.Types.[] */]]];
}, _dH/* circle_1 */ = new T(function(){
  return [0, "circle"];
}), _dI/* cx_1 */ = new T(function(){
  return [0, "cx"];
}), _dJ/* cy_1 */ = new T(function(){
  return [0, "cy"];
}), _dK/* fill_1 */ = new T(function(){
  return [0, "fill"];
}), _dL/* a3 */ = [0, 0.15], _dM/* r_3 */ = [0, 114], _dN/* r_2 */ = [1, _dM/* React.Attrs.r_3 */, _b/* GHC.Types.[] */], _dO/* r_1 */ = new T(function(){
  return [0, toJSStr(_dN/* React.Attrs.r_2 */)];
}), _dP/* lvl */ = [0, _dO/* React.Attrs.r_1 */, _dL/* Circles.a3 */], _dQ/* a4 */ = new T(function(){
  return [1, "hover-circ"];
}), _dR/* lvl1 */ = [0, _9x/* React.Attrs.class_1 */, _dQ/* Circles.a4 */], _dS/* $wonClick */ = function(_dT){
  return [0, function(_dU){
    var _dV = js_parseMouseEvent(E(_dU)[1]), _dW = _dV;
    return new F(function(){return A(_dT,[E(_dW)]);});
  }, _9A/* React.Types.ClickEvt */];
}, _dX/* onClick */ = function(_dY){
  return [1, B(_dS/* React.Events.$wonClick */(_dY))];
}, _dZ/* $wcirc' */ = function(_e0, _e1, _e2, _e3, _e4){
  var _e5 = new T(function(){
    var _e6 = new T(function(){
      var _e7 = E(_e4);
      return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_e7[1], _e7[2], _e7[3])))];
});
    if(!E(_e0)){
      var _e8 = B(_94/* React.Types.$wseparateAttrs */([1, [0, _dI/* React.Attrs.cx_1 */, new T(function(){
        return [0, E(_e2)[1]];
})], [1, [0, _dJ/* React.Attrs.cy_1 */, new T(function(){
        return [0, E(_e3)[1]];
})], [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, _e6], _b/* GHC.Types.[] */]]]])), _e9 = [0, _e8[1], _e8[2]];
    }else{
      var _ea = B(_94/* React.Types.$wseparateAttrs */([1, _dR/* Circles.lvl1 */, [1, new T(function(){
        return B(_dX/* React.Events.onClick */(_e1));
}), [1, [0, _dI/* React.Attrs.cx_1 */, new T(function(){
        return [0, E(_e2)[1]];
})], [1, [0, _dJ/* React.Attrs.cy_1 */, new T(function(){
        return [0, E(_e3)[1]];
})], [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, _e6], _b/* GHC.Types.[] */]]]]]])), _e9 = [0, _ea[1], _ea[2]];
    }
    return _e9;
});
  return function(_eb){
    return E([0, [1, [1, _dH/* React.Elements.circle_1 */, new T(function(){
      return E(E(_e5)[2]);
}), new T(function(){
      return E(E(_e5)[1]);
})], _b/* GHC.Types.[] */], _r/* GHC.Tuple.() */]);
  };
}, _ec/* False */ = false, _ed/* a */ = [0, 85], _ee/* a1 */ = [0, 161], _ef/* a2 */ = [0, 220], _eg/* fillblue */ = [0, _ed/* Circles.a */, _ee/* Circles.a1 */, _ef/* Circles.a2 */], _eh/* a8 */ = new T(function(){
  return [1, "-1.5 -1.5 3 3"];
}), _ei/* viewBox_1 */ = new T(function(){
  return [0, "viewBox"];
}), _ej/* a9 */ = [0, _ei/* React.Attrs.viewBox_1 */, _eh/* Circles.a8 */], _ek/* a10 */ = [1, _ej/* Circles.a9 */, _b/* GHC.Types.[] */], _el/* a5 */ = [0, 600], _em/* height_1 */ = new T(function(){
  return [0, "height"];
}), _en/* a7 */ = [0, _em/* React.Attrs.height_1 */, _el/* Circles.a5 */], _eo/* a11 */ = [1, _en/* Circles.a7 */, _ek/* Circles.a10 */], _ep/* width_1 */ = new T(function(){
  return [0, "width"];
}), _eq/* a6 */ = [0, _ep/* React.Attrs.width_1 */, _el/* Circles.a5 */], _er/* a12 */ = [1, _eq/* Circles.a6 */, _eo/* Circles.a11 */], _es/* ds */ = new T(function(){
  var _et = B(_94/* React.Types.$wseparateAttrs */(_er/* Circles.a12 */));
  return [0, _et[1], _et[2]];
}), _eu/* lvl11 */ = new T(function(){
  return E(E(_es/* Circles.ds */)[2]);
}), _ev/* lvl12 */ = new T(function(){
  return E(E(_es/* Circles.ds */)[1]);
}), _ew/* a16 */ = [0, _bv/* Circles.C1 */], _ex/* x */ = [1, _ew/* Circles.a16 */], _ey/* lvl13 */ = function(_ez){
  var _eA = js_parseMouseEvent(E(_ez)[1]), _eB = _eA, _eC = E(_eB);
  return E(_ex/* Circles.x */);
}, _eD/* lvl14 */ = [0, _ey/* Circles.lvl13 */, _9A/* React.Types.ClickEvt */], _eE/* lvl15 */ = [1, _eD/* Circles.lvl14 */], _eF/* lvl16 */ = [0, -1], _eG/* lvl17 */ = [0, _dI/* React.Attrs.cx_1 */, _eF/* Circles.lvl16 */], _eH/* lvl18 */ = [0, _dJ/* React.Attrs.cy_1 */, _eF/* Circles.lvl16 */], _eI/* lvl2 */ = function(_eJ){
  return [0];
}, _eK/* a17 */ = [0, _bx/* Circles.C2 */], _eL/* x1 */ = [1, _eK/* Circles.a17 */], _eM/* lvl19 */ = function(_eN){
  var _eO = js_parseMouseEvent(E(_eN)[1]), _eP = _eO, _eQ = E(_eP);
  return E(_eL/* Circles.x1 */);
}, _eR/* lvl20 */ = [0, _eM/* Circles.lvl19 */, _9A/* React.Types.ClickEvt */], _eS/* lvl21 */ = [1, _eR/* Circles.lvl20 */], _eT/* lvl22 */ = [0, 1], _eU/* lvl23 */ = [0, _dI/* React.Attrs.cx_1 */, _eT/* Circles.lvl22 */], _eV/* a18 */ = [0, _bw/* Circles.C3 */], _eW/* x2 */ = [1, _eV/* Circles.a18 */], _eX/* lvl24 */ = function(_eY){
  var _eZ = js_parseMouseEvent(E(_eY)[1]), _f0 = _eZ, _f1 = E(_f0);
  return E(_eW/* Circles.x2 */);
}, _f2/* lvl25 */ = [0, _eX/* Circles.lvl24 */, _9A/* React.Types.ClickEvt */], _f3/* lvl26 */ = [1, _f2/* Circles.lvl25 */], _f4/* lvl27 */ = [0, _dJ/* React.Attrs.cy_1 */, _eT/* Circles.lvl22 */], _f5/* a19 */ = [0, _by/* Circles.C4 */], _f6/* x3 */ = [1, _f5/* Circles.a19 */], _f7/* lvl28 */ = function(_f8){
  var _f9 = js_parseMouseEvent(E(_f8)[1]), _fa = _f9, _fb = E(_fa);
  return E(_f6/* Circles.x3 */);
}, _fc/* lvl29 */ = [0, _f7/* Circles.lvl28 */, _9A/* React.Types.ClickEvt */], _fd/* lvl30 */ = [1, _fc/* Circles.lvl29 */], _fe/* svg_1 */ = new T(function(){
  return [0, "svg"];
}), _ff/* circlesClass9 */ = function(_fg, _fh){
  var _fi = new T(function(){
    var _fj = E(_fh), _fk = _fj[5], _fl = new T(function(){
      switch(E(E(_fg)[1])){
        case 0:
          var _fm = E(_fk), _fn = B(A(_dZ/* Circles.$wcirc' */,[_ec/* GHC.Types.False */, _eI/* Circles.lvl2 */, new T(function(){
            return [0, -1-E(_fm[1])[1]];
}), new T(function(){
            return [0, -1-E(_fm[2])[1]];
}), _eg/* Circles.fillblue */, _fj]));
          break;
        case 1:
          var _fo = E(_fk), _fn = B(A(_dZ/* Circles.$wcirc' */,[_ec/* GHC.Types.False */, _eI/* Circles.lvl2 */, new T(function(){
            return [0, 1-E(_fo[1])[1]];
}), new T(function(){
            return [0, -1-E(_fo[2])[1]];
}), _eg/* Circles.fillblue */, _fj]));
          break;
        case 2:
          var _fp = E(_fk), _fn = B(A(_dZ/* Circles.$wcirc' */,[_ec/* GHC.Types.False */, _eI/* Circles.lvl2 */, new T(function(){
            return [0, 1-E(_fp[1])[1]];
}), new T(function(){
            return [0, 1-E(_fp[2])[1]];
}), _eg/* Circles.fillblue */, _fj]));
          break;
        default:
          var _fq = E(_fk), _fn = B(A(_dZ/* Circles.$wcirc' */,[_ec/* GHC.Types.False */, _eI/* Circles.lvl2 */, new T(function(){
            return [0, -1-E(_fq[1])[1]];
}), new T(function(){
            return [0, 1-E(_fq[2])[1]];
}), _eg/* Circles.fillblue */, _fj]));
      }
      return _fn;
});
    return [0, [1, [0, _fe/* React.Elements.svg_1 */, _eu/* Circles.lvl11 */, _ev/* Circles.lvl12 */, new T(function(){
      var _fr = new T(function(){
        var _fs = B(_94/* React.Types.$wseparateAttrs */([1, _dR/* Circles.lvl1 */, [1, _eE/* Circles.lvl15 */, [1, _eG/* Circles.lvl17 */, [1, _eH/* Circles.lvl18 */, [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, new T(function(){
          var _ft = E(_fj[1]);
          return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(new T(function(){
            return [0, 85+E(_ft[1])[1]|0];
}), new T(function(){
            return [0, 161+E(_ft[2])[1]|0];
}), new T(function(){
            return [0, 220+E(_ft[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
        return [0, _fs[1], _fs[2]];
});
      return B(_10/* GHC.Base.++ */([1, [1, _dH/* React.Elements.circle_1 */, new T(function(){
        return E(E(_fr)[2]);
}), new T(function(){
        return E(E(_fr)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
        var _fu = new T(function(){
          var _fv = B(_94/* React.Types.$wseparateAttrs */([1, _dR/* Circles.lvl1 */, [1, _eS/* Circles.lvl21 */, [1, _eU/* Circles.lvl23 */, [1, _eH/* Circles.lvl18 */, [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, new T(function(){
            var _fw = E(_fj[2]);
            return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(new T(function(){
              return [0, 85+E(_fw[1])[1]|0];
}), new T(function(){
              return [0, 161+E(_fw[2])[1]|0];
}), new T(function(){
              return [0, 220+E(_fw[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
          return [0, _fv[1], _fv[2]];
});
        return B(_10/* GHC.Base.++ */([1, [1, _dH/* React.Elements.circle_1 */, new T(function(){
          return E(E(_fu)[2]);
}), new T(function(){
          return E(E(_fu)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
          var _fx = new T(function(){
            var _fy = B(_94/* React.Types.$wseparateAttrs */([1, _dR/* Circles.lvl1 */, [1, _f3/* Circles.lvl26 */, [1, _eU/* Circles.lvl23 */, [1, _f4/* Circles.lvl27 */, [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, new T(function(){
              var _fz = E(_fj[3]);
              return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(new T(function(){
                return [0, 85+E(_fz[1])[1]|0];
}), new T(function(){
                return [0, 161+E(_fz[2])[1]|0];
}), new T(function(){
                return [0, 220+E(_fz[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
            return [0, _fy[1], _fy[2]];
});
          return B(_10/* GHC.Base.++ */([1, [1, _dH/* React.Elements.circle_1 */, new T(function(){
            return E(E(_fx)[2]);
}), new T(function(){
            return E(E(_fx)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
            var _fA = new T(function(){
              var _fB = B(_94/* React.Types.$wseparateAttrs */([1, _dR/* Circles.lvl1 */, [1, _fd/* Circles.lvl30 */, [1, _eG/* Circles.lvl17 */, [1, _f4/* Circles.lvl27 */, [1, _dP/* Circles.lvl */, [1, [0, _dK/* React.Attrs.fill_1 */, new T(function(){
                var _fC = E(_fj[4]);
                return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(new T(function(){
                  return [0, 85+E(_fC[1])[1]|0];
}), new T(function(){
                  return [0, 161+E(_fC[2])[1]|0];
}), new T(function(){
                  return [0, 220+E(_fC[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
              return [0, _fB[1], _fB[2]];
});
            return B(_10/* GHC.Base.++ */([1, [1, _dH/* React.Elements.circle_1 */, new T(function(){
              return E(E(_fA)[2]);
}), new T(function(){
              return E(E(_fA)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
              return E(E(_fl)[1]);
})));
})));
})));
})));
})], _b/* GHC.Types.[] */], new T(function(){
      return E(E(_fl)[2]);
})];
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_fi)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_fi)[2]);
})];
}, _fD/* $fOrdDouble_$ccompare */ = function(_fE, _fF){
  var _fG = E(_fE)[1], _fH = E(_fF)[1];
  return _fG>=_fH ? _fG!=_fH ? 2 : 1 : 0;
}, _fI/* $fOrdEasing_$ccompare */ = function(_fJ, _fK){
  var _fL = E(_fJ);
  if(_fL[0]==19){
    var _fM = E(_fK);
    if(dataToTag(E(_fM))>=19){
      var _fN = E(_fM);
      if(_fN[0]==19){
        var _fO = E(_fL[1])[1], _fP = E(_fN[1])[1];
        if(_fO>=_fP){
          if(_fO!=_fP){
            return 2;
          }else{
            var _fQ = E(_fL[2])[1], _fR = E(_fN[2])[1];
            if(_fQ>=_fR){
              if(_fQ!=_fR){
                return 2;
              }else{
                var _fS = E(_fL[3])[1], _fT = E(_fN[3])[1];
                return _fS>=_fT ? _fS!=_fT ? 2 : B(_fD/* GHC.Classes.$fOrdDouble_$ccompare */(_fL[4], _fN[4])) : 0;
              }
            }else{
              return 0;
            }
          }
        }else{
          return 0;
        }
      }else{
        return 0;
      }
    }else{
      return 2;
    }
  }else{
    var _fU = dataToTag(E(E(_fK))), _fV = dataToTag(E(_fL));
    return _fV>=_fU ? _fV!=_fU ? 2 : 1 : 0;
  }
}, _fW/* Tip */ = [1], _fX/* lvl8 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceR"));
}), _fY/* $wpoly_fail */ = function(_fZ){
  return new F(function(){return err(_fX/* Data.Map.Base.lvl8 */);});
}, _g0/* lvl9 */ = new T(function(){
  return B(_fY/* Data.Map.Base.$wpoly_fail */(_));
}), _g1/* balanceR */ = function(_g2, _g3, _g4, _g5){
  var _g6 = E(_g4);
  if(!_g6[0]){
    var _g7 = _g6[1], _g8 = E(_g5);
    if(!_g8[0]){
      var _g9 = _g8[1], _ga = _g8[2], _gb = _g8[3];
      if(_g9<=(imul(3, _g7)|0)){
        return [0, (1+_g7|0)+_g9|0, E(E(_g2)), _g3, E(_g6), E(_g8)];
      }else{
        var _gc = E(_g8[4]);
        if(!_gc[0]){
          var _gd = _gc[1], _ge = _gc[2], _gf = _gc[3], _gg = _gc[4], _gh = E(_g8[5]);
          if(!_gh[0]){
            var _gi = _gh[1];
            if(_gd>=(imul(2, _gi)|0)){
              var _gj = function(_gk){
                var _gl = E(_g2), _gm = E(_gc[5]);
                return _gm[0]==0 ? [0, (1+_g7|0)+_g9|0, E(_ge), _gf, E([0, (1+_g7|0)+_gk|0, E(_gl), _g3, E(_g6), E(_gg)]), E([0, (1+_gi|0)+_gm[1]|0, E(_ga), _gb, E(_gm), E(_gh)])] : [0, (1+_g7|0)+_g9|0, E(_ge), _gf, E([0, (1+_g7|0)+_gk|0, E(_gl), _g3, E(_g6), E(_gg)]), E([0, 1+_gi|0, E(_ga), _gb, E(_fW/* Data.Map.Base.Tip */), E(_gh)])];
              }, _gn = E(_gg);
              return _gn[0]==0 ? B(_gj(_gn[1])) : B(_gj(0));
            }else{
              return [0, (1+_g7|0)+_g9|0, E(_ga), _gb, E([0, (1+_g7|0)+_gd|0, E(E(_g2)), _g3, E(_g6), E(_gc)]), E(_gh)];
            }
          }else{
            return E(_g0/* Data.Map.Base.lvl9 */);
          }
        }else{
          return E(_g0/* Data.Map.Base.lvl9 */);
        }
      }
    }else{
      return [0, 1+_g7|0, E(E(_g2)), _g3, E(_g6), E(_fW/* Data.Map.Base.Tip */)];
    }
  }else{
    var _go = E(_g5);
    if(!_go[0]){
      var _gp = _go[1], _gq = _go[2], _gr = _go[3], _gs = _go[5], _gt = E(_go[4]);
      if(!_gt[0]){
        var _gu = _gt[1], _gv = _gt[2], _gw = _gt[3], _gx = _gt[4], _gy = E(_gs);
        if(!_gy[0]){
          var _gz = _gy[1];
          if(_gu>=(imul(2, _gz)|0)){
            var _gA = function(_gB){
              var _gC = E(_g2), _gD = E(_gt[5]);
              return _gD[0]==0 ? [0, 1+_gp|0, E(_gv), _gw, E([0, 1+_gB|0, E(_gC), _g3, E(_fW/* Data.Map.Base.Tip */), E(_gx)]), E([0, (1+_gz|0)+_gD[1]|0, E(_gq), _gr, E(_gD), E(_gy)])] : [0, 1+_gp|0, E(_gv), _gw, E([0, 1+_gB|0, E(_gC), _g3, E(_fW/* Data.Map.Base.Tip */), E(_gx)]), E([0, 1+_gz|0, E(_gq), _gr, E(_fW/* Data.Map.Base.Tip */), E(_gy)])];
            }, _gE = E(_gx);
            return _gE[0]==0 ? B(_gA(_gE[1])) : B(_gA(0));
          }else{
            return [0, 1+_gp|0, E(_gq), _gr, E([0, 1+_gu|0, E(E(_g2)), _g3, E(_fW/* Data.Map.Base.Tip */), E(_gt)]), E(_gy)];
          }
        }else{
          return [0, 3, E(_gv), _gw, E([0, 1, E(E(_g2)), _g3, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)]), E([0, 1, E(_gq), _gr, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _gF = E(_gs);
        return _gF[0]==0 ? [0, 3, E(_gq), _gr, E([0, 1, E(E(_g2)), _g3, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)]), E(_gF)] : [0, 2, E(E(_g2)), _g3, E(_fW/* Data.Map.Base.Tip */), E(_go)];
      }
    }else{
      return [0, 1, E(E(_g2)), _g3, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
    }
  }
}, _gG/* singleton */ = function(_gH, _gI){
  return [0, 1, E(E(_gH)), _gI, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
}, _gJ/* insertMax */ = function(_gK, _gL, _gM){
  var _gN = E(_gM);
  if(!_gN[0]){
    return new F(function(){return _g1/* Data.Map.Base.balanceR */(_gN[2], _gN[3], _gN[4], B(_gJ/* Data.Map.Base.insertMax */(_gK, _gL, _gN[5])));});
  }else{
    return new F(function(){return _gG/* Data.Map.Base.singleton */(_gK, _gL);});
  }
}, _gO/* lvl11 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceL"));
}), _gP/* $wpoly_fail1 */ = function(_gQ){
  return new F(function(){return err(_gO/* Data.Map.Base.lvl11 */);});
}, _gR/* lvl12 */ = new T(function(){
  return B(_gP/* Data.Map.Base.$wpoly_fail1 */(_));
}), _gS/* balanceL */ = function(_gT, _gU, _gV, _gW){
  var _gX = E(_gW);
  if(!_gX[0]){
    var _gY = _gX[1], _gZ = E(_gV);
    if(!_gZ[0]){
      var _h0 = _gZ[1], _h1 = _gZ[2], _h2 = _gZ[3];
      if(_h0<=(imul(3, _gY)|0)){
        return [0, (1+_h0|0)+_gY|0, E(E(_gT)), _gU, E(_gZ), E(_gX)];
      }else{
        var _h3 = E(_gZ[4]);
        if(!_h3[0]){
          var _h4 = _h3[1], _h5 = E(_gZ[5]);
          if(!_h5[0]){
            var _h6 = _h5[1], _h7 = _h5[2], _h8 = _h5[3], _h9 = _h5[4];
            if(_h6>=(imul(2, _h4)|0)){
              var _ha = function(_hb){
                var _hc = E(_h5[5]);
                return _hc[0]==0 ? [0, (1+_h0|0)+_gY|0, E(_h7), _h8, E([0, (1+_h4|0)+_hb|0, E(_h1), _h2, E(_h3), E(_h9)]), E([0, (1+_gY|0)+_hc[1]|0, E(E(_gT)), _gU, E(_hc), E(_gX)])] : [0, (1+_h0|0)+_gY|0, E(_h7), _h8, E([0, (1+_h4|0)+_hb|0, E(_h1), _h2, E(_h3), E(_h9)]), E([0, 1+_gY|0, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_gX)])];
              }, _hd = E(_h9);
              return _hd[0]==0 ? B(_ha(_hd[1])) : B(_ha(0));
            }else{
              return [0, (1+_h0|0)+_gY|0, E(_h1), _h2, E(_h3), E([0, (1+_gY|0)+_h6|0, E(E(_gT)), _gU, E(_h5), E(_gX)])];
            }
          }else{
            return E(_gR/* Data.Map.Base.lvl12 */);
          }
        }else{
          return E(_gR/* Data.Map.Base.lvl12 */);
        }
      }
    }else{
      return [0, 1+_gY|0, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_gX)];
    }
  }else{
    var _he = E(_gV);
    if(!_he[0]){
      var _hf = _he[1], _hg = _he[2], _hh = _he[3], _hi = _he[5], _hj = E(_he[4]);
      if(!_hj[0]){
        var _hk = _hj[1], _hl = E(_hi);
        if(!_hl[0]){
          var _hm = _hl[1], _hn = _hl[2], _ho = _hl[3], _hp = _hl[4];
          if(_hm>=(imul(2, _hk)|0)){
            var _hq = function(_hr){
              var _hs = E(_hl[5]);
              return _hs[0]==0 ? [0, 1+_hf|0, E(_hn), _ho, E([0, (1+_hk|0)+_hr|0, E(_hg), _hh, E(_hj), E(_hp)]), E([0, 1+_hs[1]|0, E(E(_gT)), _gU, E(_hs), E(_fW/* Data.Map.Base.Tip */)])] : [0, 1+_hf|0, E(_hn), _ho, E([0, (1+_hk|0)+_hr|0, E(_hg), _hh, E(_hj), E(_hp)]), E([0, 1, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)])];
            }, _ht = E(_hp);
            return _ht[0]==0 ? B(_hq(_ht[1])) : B(_hq(0));
          }else{
            return [0, 1+_hf|0, E(_hg), _hh, E(_hj), E([0, 1+_hm|0, E(E(_gT)), _gU, E(_hl), E(_fW/* Data.Map.Base.Tip */)])];
          }
        }else{
          return [0, 3, E(_hg), _hh, E(_hj), E([0, 1, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _hu = E(_hi);
        return _hu[0]==0 ? [0, 3, E(_hu[2]), _hu[3], E([0, 1, E(_hg), _hh, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)]), E([0, 1, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)])] : [0, 2, E(E(_gT)), _gU, E(_he), E(_fW/* Data.Map.Base.Tip */)];
      }
    }else{
      return [0, 1, E(E(_gT)), _gU, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
    }
  }
}, _hv/* insertMin */ = function(_hw, _hx, _hy){
  var _hz = E(_hy);
  if(!_hz[0]){
    return new F(function(){return _gS/* Data.Map.Base.balanceL */(_hz[2], _hz[3], B(_hv/* Data.Map.Base.insertMin */(_hw, _hx, _hz[4])), _hz[5]);});
  }else{
    return new F(function(){return _gG/* Data.Map.Base.singleton */(_hw, _hx);});
  }
}, _hA/* link_$sinsertMin */ = function(_hB, _hC, _hD, _hE, _hF, _hG, _hH){
  return new F(function(){return _gS/* Data.Map.Base.balanceL */(_hE, _hF, B(_hv/* Data.Map.Base.insertMin */(_hB, _hC, _hG)), _hH);});
}, _hI/* link_$slink1 */ = function(_hJ, _hK, _hL, _hM, _hN, _hO, _hP, _hQ){
  var _hR = E(_hL);
  if(!_hR[0]){
    var _hS = _hR[1], _hT = _hR[2], _hU = _hR[3], _hV = _hR[4], _hW = _hR[5];
    if((imul(3, _hS)|0)>=_hM){
      if((imul(3, _hM)|0)>=_hS){
        return [0, (_hS+_hM|0)+1|0, E(E(_hJ)), _hK, E(_hR), E([0, _hM, E(_hN), _hO, E(_hP), E(_hQ)])];
      }else{
        return new F(function(){return _g1/* Data.Map.Base.balanceR */(_hT, _hU, _hV, B(_hI/* Data.Map.Base.link_$slink1 */(_hJ, _hK, _hW, _hM, _hN, _hO, _hP, _hQ)));});
      }
    }else{
      return new F(function(){return _gS/* Data.Map.Base.balanceL */(_hN, _hO, B(_hX/* Data.Map.Base.link_$slink */(_hJ, _hK, _hS, _hT, _hU, _hV, _hW, _hP)), _hQ);});
    }
  }else{
    return new F(function(){return _hA/* Data.Map.Base.link_$sinsertMin */(_hJ, _hK, _hM, _hN, _hO, _hP, _hQ);});
  }
}, _hX/* link_$slink */ = function(_hY, _hZ, _i0, _i1, _i2, _i3, _i4, _i5){
  var _i6 = E(_i5);
  if(!_i6[0]){
    var _i7 = _i6[1], _i8 = _i6[2], _i9 = _i6[3], _ia = _i6[4], _ib = _i6[5];
    if((imul(3, _i0)|0)>=_i7){
      if((imul(3, _i7)|0)>=_i0){
        return [0, (_i0+_i7|0)+1|0, E(E(_hY)), _hZ, E([0, _i0, E(_i1), _i2, E(_i3), E(_i4)]), E(_i6)];
      }else{
        return new F(function(){return _g1/* Data.Map.Base.balanceR */(_i1, _i2, _i3, B(_hI/* Data.Map.Base.link_$slink1 */(_hY, _hZ, _i4, _i7, _i8, _i9, _ia, _ib)));});
      }
    }else{
      return new F(function(){return _gS/* Data.Map.Base.balanceL */(_i8, _i9, B(_hX/* Data.Map.Base.link_$slink */(_hY, _hZ, _i0, _i1, _i2, _i3, _i4, _ia)), _ib);});
    }
  }else{
    return new F(function(){return _gJ/* Data.Map.Base.insertMax */(_hY, _hZ, [0, _i0, E(_i1), _i2, E(_i3), E(_i4)]);});
  }
}, _ic/* link */ = function(_id, _ie, _if, _ig){
  var _ih = E(_if);
  if(!_ih[0]){
    var _ii = _ih[1], _ij = _ih[2], _ik = _ih[3], _il = _ih[4], _im = _ih[5], _in = E(_ig);
    if(!_in[0]){
      var _io = _in[1], _ip = _in[2], _iq = _in[3], _ir = _in[4], _is = _in[5];
      if((imul(3, _ii)|0)>=_io){
        if((imul(3, _io)|0)>=_ii){
          return [0, (_ii+_io|0)+1|0, E(E(_id)), _ie, E(_ih), E(_in)];
        }else{
          return new F(function(){return _g1/* Data.Map.Base.balanceR */(_ij, _ik, _il, B(_hI/* Data.Map.Base.link_$slink1 */(_id, _ie, _im, _io, _ip, _iq, _ir, _is)));});
        }
      }else{
        return new F(function(){return _gS/* Data.Map.Base.balanceL */(_ip, _iq, B(_hX/* Data.Map.Base.link_$slink */(_id, _ie, _ii, _ij, _ik, _il, _im, _ir)), _is);});
      }
    }else{
      return new F(function(){return _gJ/* Data.Map.Base.insertMax */(_id, _ie, _ih);});
    }
  }else{
    return new F(function(){return _hv/* Data.Map.Base.insertMin */(_id, _ie, _ig);});
  }
}, _it/* $s$wpoly_create */ = function(_iu, _iv, _iw, _ix){
  var _iy = E(_iu);
  if(_iy==1){
    var _iz = E(_ix);
    return _iz[0]==0 ? [0, new T(function(){
      return [0, 1, E(E(_iv)), _iw, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _b/* GHC.Types.[] */] : B(_fI/* React.Types.$fOrdEasing_$ccompare */(_iv, E(_iz[1])[1]))==0 ? [0, new T(function(){
      return [0, 1, E(E(_iv)), _iw, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
}), _iz, _b/* GHC.Types.[] */] : [0, new T(function(){
      return [0, 1, E(E(_iv)), _iw, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _iz];
  }else{
    var _iA = B(_it/* Easing.$s$wpoly_create */(_iy>>1, _iv, _iw, _ix)), _iB = _iA[1], _iC = _iA[3], _iD = E(_iA[2]);
    if(!_iD[0]){
      return [0, _iB, _b/* GHC.Types.[] */, _iC];
    }else{
      var _iE = E(_iD[1]), _iF = _iE[1], _iG = _iE[2], _iH = E(_iD[2]);
      if(!_iH[0]){
        return [0, new T(function(){
          return B(_gJ/* Data.Map.Base.insertMax */(_iF, _iG, _iB));
}), _b/* GHC.Types.[] */, _iC];
      }else{
        var _iI = E(_iH[1]), _iJ = _iI[1];
        if(!B(_fI/* React.Types.$fOrdEasing_$ccompare */(_iF, _iJ))){
          var _iK = B(_it/* Easing.$s$wpoly_create */(_iy>>1, _iJ, _iI[2], _iH[2]));
          return [0, new T(function(){
            return B(_ic/* Data.Map.Base.link */(_iF, _iG, _iB, _iK[1]));
}), _iK[2], _iK[3]];
        }else{
          return [0, _iB, _b/* GHC.Types.[] */, _iD];
        }
      }
    }
  }
}, _iL/* $sinsert_$sgo10 */ = function(_iM, _iN, _iO){
  var _iP = E(_iM), _iQ = E(_iO);
  if(!_iQ[0]){
    var _iR = _iQ[1], _iS = _iQ[2], _iT = _iQ[3], _iU = _iQ[4], _iV = _iQ[5], _iW = E(_iP);
    if(_iW[0]==19){
      if(dataToTag(E(_iS))>=19){
        var _iX = E(_iS);
        if(_iX[0]==19){
          var _iY = E(_iW[1])[1], _iZ = E(_iX[1])[1];
          if(_iY>=_iZ){
            if(_iY!=_iZ){
              return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iX, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
            }else{
              var _j0 = E(_iW[2])[1], _j1 = E(_iX[2])[1];
              if(_j0>=_j1){
                if(_j0!=_j1){
                  return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iX, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
                }else{
                  var _j2 = E(_iW[3])[1], _j3 = E(_iX[3])[1];
                  if(_j2>=_j3){
                    if(_j2!=_j3){
                      return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iX, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
                    }else{
                      var _j4 = E(_iW[4])[1], _j5 = E(_iX[4])[1];
                      if(_j4>=_j5){
                        if(_j4!=_j5){
                          return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iX, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
                        }else{
                          return [0, _iR, E(_iW), _iN, E(_iU), E(_iV)];
                        }
                      }else{
                        return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iX, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
                      }
                    }
                  }else{
                    return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iX, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
                  }
                }
              }else{
                return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iX, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
              }
            }
          }else{
            return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iX, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
          }
        }else{
          return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iX, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
        }
      }else{
        return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iS, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
      }
    }else{
      var _j6 = dataToTag(E(_iW)), _j7 = dataToTag(E(_iS));
      if(_j6>=_j7){
        if(_j6!=_j7){
          return new F(function(){return _g1/* Data.Map.Base.balanceR */(_iS, _iT, _iU, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iV)));});
        }else{
          return [0, _iR, E(_iW), _iN, E(_iU), E(_iV)];
        }
      }else{
        return new F(function(){return _gS/* Data.Map.Base.balanceL */(_iS, _iT, B(_iL/* Easing.$sinsert_$sgo10 */(_iW, _iN, _iU)), _iV);});
      }
    }
  }else{
    return [0, 1, E(_iP), _iN, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
  }
}, _j8/* poly_go10 */ = function(_j9, _ja){
  while(1){
    var _jb = E(_ja);
    if(!_jb[0]){
      return E(_j9);
    }else{
      var _jc = E(_jb[1]), _jd = B(_iL/* Easing.$sinsert_$sgo10 */(_jc[1], _jc[2], _j9));
      _ja = _jb[2];
      _j9 = _jd;
      continue;
    }
  }
}, _je/* $sfromList_$spoly_go10 */ = function(_jf, _jg, _jh, _ji){
  return new F(function(){return _j8/* Easing.poly_go10 */(B(_iL/* Easing.$sinsert_$sgo10 */(_jg, _jh, _jf)), _ji);});
}, _jj/* $spoly_go10 */ = function(_jk, _jl, _jm){
  var _jn = E(_jl);
  return new F(function(){return _j8/* Easing.poly_go10 */(B(_iL/* Easing.$sinsert_$sgo10 */(_jn[1], _jn[2], _jk)), _jm);});
}, _jo/* $wpoly_go10 */ = function(_jp, _jq, _jr){
  while(1){
    var _js = E(_jr);
    if(!_js[0]){
      return E(_jq);
    }else{
      var _jt = E(_js[1]), _ju = _jt[1], _jv = _jt[2], _jw = E(_js[2]);
      if(!_jw[0]){
        return new F(function(){return _gJ/* Data.Map.Base.insertMax */(_ju, _jv, _jq);});
      }else{
        var _jx = E(_jw[1]), _jy = _jx[1];
        if(!B(_fI/* React.Types.$fOrdEasing_$ccompare */(_ju, _jy))){
          var _jz = B(_it/* Easing.$s$wpoly_create */(_jp, _jy, _jx[2], _jw[2])), _jA = _jz[1], _jB = E(_jz[3]);
          if(!_jB[0]){
            var _jC = _jp<<1, _jD = B(_ic/* Data.Map.Base.link */(_ju, _jv, _jq, _jA));
            _jr = _jz[2];
            _jp = _jC;
            _jq = _jD;
            continue;
          }else{
            return new F(function(){return _jj/* Easing.$spoly_go10 */(B(_ic/* Data.Map.Base.link */(_ju, _jv, _jq, _jA)), _jB[1], _jB[2]);});
          }
        }else{
          return new F(function(){return _je/* Easing.$sfromList_$spoly_go10 */(_jq, _ju, _jv, _jw);});
        }
      }
    }
  }
}, _jE/* $sfromList_$s$wpoly_go10 */ = function(_jF, _jG, _jH, _jI, _jJ){
  var _jK = E(_jJ);
  if(!_jK[0]){
    return new F(function(){return _gJ/* Data.Map.Base.insertMax */(_jH, _jI, _jG);});
  }else{
    var _jL = E(_jK[1]), _jM = _jL[1];
    if(!B(_fI/* React.Types.$fOrdEasing_$ccompare */(_jH, _jM))){
      var _jN = B(_it/* Easing.$s$wpoly_create */(_jF, _jM, _jL[2], _jK[2])), _jO = _jN[1], _jP = E(_jN[3]);
      if(!_jP[0]){
        return new F(function(){return _jo/* Easing.$wpoly_go10 */(_jF<<1, B(_ic/* Data.Map.Base.link */(_jH, _jI, _jG, _jO)), _jN[2]);});
      }else{
        return new F(function(){return _jj/* Easing.$spoly_go10 */(B(_ic/* Data.Map.Base.link */(_jH, _jI, _jG, _jO)), _jP[1], _jP[2]);});
      }
    }else{
      return new F(function(){return _je/* Easing.$sfromList_$spoly_go10 */(_jG, _jH, _jI, _jK);});
    }
  }
}, _jQ/* $sfromList */ = function(_jR){
  var _jS = E(_jR);
  if(!_jS[0]){
    return [1];
  }else{
    var _jT = E(_jS[1]), _jU = _jT[1], _jV = _jT[2], _jW = E(_jS[2]);
    if(!_jW[0]){
      return [0, 1, E(E(_jU)), _jV, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)];
    }else{
      var _jX = _jW[2], _jY = E(_jW[1]), _jZ = _jY[1], _k0 = _jY[2];
      if(!B(_fI/* React.Types.$fOrdEasing_$ccompare */(_jU, _jZ))){
        return new F(function(){return _jE/* Easing.$sfromList_$s$wpoly_go10 */(1, [0, 1, E(E(_jU)), _jV, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)], _jZ, _k0, _jX);});
      }else{
        return new F(function(){return _je/* Easing.$sfromList_$spoly_go10 */([0, 1, E(E(_jU)), _jV, E(_fW/* Data.Map.Base.Tip */), E(_fW/* Data.Map.Base.Tip */)], _jZ, _k0, _jX);});
      }
    }
  }
}, _k1/* EaseOutQuad */ = [2], _k2/* EaseInCubic */ = [4], _k3/* EaseOutCubic */ = [5], _k4/* EaseInOutCubic */ = [6], _k5/* EaseInQuart */ = [7], _k6/* EaseOutQuart */ = [8], _k7/* EaseInOutQuart */ = [9], _k8/* EaseInQuint */ = [10], _k9/* EaseOutQuint */ = [11], _ka/* EaseInOutQuint */ = [12], _kb/* EaseInElastic */ = [13], _kc/* EaseOutElastic */ = [14], _kd/* EaseInSine */ = [20], _ke/* EaseOutSine */ = [21], _kf/* easingClass22 */ = [1, _ke/* React.Types.EaseOutSine */, _b/* GHC.Types.[] */], _kg/* easingClass21 */ = [1, _kd/* React.Types.EaseInSine */, _kf/* Easing.easingClass22 */], _kh/* easingClass24 */ = [0, 0.8], _ki/* easingClass25 */ = [0, 0], _kj/* easingClass26 */ = [0, 0.5], _kk/* easingClass23 */ = [19, _kj/* Easing.easingClass26 */, _ki/* Easing.easingClass25 */, _kh/* Easing.easingClass24 */, _kh/* Easing.easingClass24 */], _kl/* easingClass20 */ = [1, _kk/* Easing.easingClass23 */, _kg/* Easing.easingClass21 */], _km/* easingClass19 */ = [1, _7B/* React.Types.EaseOutBounce */, _kl/* Easing.easingClass20 */], _kn/* easingClass18 */ = [1, _kc/* React.Types.EaseOutElastic */, _km/* Easing.easingClass19 */], _ko/* easingClass17 */ = [1, _kb/* React.Types.EaseInElastic */, _kn/* Easing.easingClass18 */], _kp/* easingClass16 */ = [1, _ka/* React.Types.EaseInOutQuint */, _ko/* Easing.easingClass17 */], _kq/* easingClass15 */ = [1, _k9/* React.Types.EaseOutQuint */, _kp/* Easing.easingClass16 */], _kr/* easingClass14 */ = [1, _k8/* React.Types.EaseInQuint */, _kq/* Easing.easingClass15 */], _ks/* easingClass13 */ = [1, _k7/* React.Types.EaseInOutQuart */, _kr/* Easing.easingClass14 */], _kt/* easingClass12 */ = [1, _k6/* React.Types.EaseOutQuart */, _ks/* Easing.easingClass13 */], _ku/* easingClass11 */ = [1, _k5/* React.Types.EaseInQuart */, _kt/* Easing.easingClass12 */], _kv/* easingClass10 */ = [1, _k4/* React.Types.EaseInOutCubic */, _ku/* Easing.easingClass11 */], _kw/* easingClass9 */ = [1, _k3/* React.Types.EaseOutCubic */, _kv/* Easing.easingClass10 */], _kx/* easingClass8 */ = [1, _k2/* React.Types.EaseInCubic */, _kw/* Easing.easingClass9 */], _ky/* easingClass7 */ = [1, _9d/* React.Types.EaseInOutQuad */, _kx/* Easing.easingClass8 */], _kz/* easingClass6 */ = [1, _k1/* React.Types.EaseOutQuad */, _ky/* Easing.easingClass7 */], _kA/* easingClass5 */ = [1, _cI/* React.Types.EaseInQuad */, _kz/* Easing.easingClass6 */], _kB/* xs */ = function(_kC){
  var _kD = E(_kC);
  return _kD[0]==0 ? [0] : [1, [0, _kD[1], _ki/* Easing.easingClass25 */], new T(function(){
    return B(_kB/* Easing.xs */(_kD[2]));
})];
}, _kE/* easingClass_$sxs */ = function(_kF, _kG){
  return [1, [0, _kF, _ki/* Easing.easingClass25 */], new T(function(){
    return B(_kB/* Easing.xs */(_kG));
})];
}, _kH/* easingClass4 */ = new T(function(){
  return B(_kE/* Easing.easingClass_$sxs */(_9e/* React.Types.Linear */, _kA/* Easing.easingClass5 */));
}), _kI/* easingClass3 */ = new T(function(){
  return B(_jQ/* Easing.$sfromList */(_kH/* Easing.easingClass4 */));
}), _kJ/* easingClass2 */ = [0, _kI/* Easing.easingClass3 */], _kK/* Closed */ = 1, _kL/* easings */ = [1, _9e/* React.Types.Linear */, _kA/* Easing.easingClass5 */], _kM/* easingClass27 */ = [0, _kK/* Easing.Closed */, _kL/* Easing.easings */], _kN/* Open */ = 0, _kO/* lvl26 */ = new T(function(){
  return B(unCStr("Map.!: given key is not an element in the map"));
}), _kP/* lvl27 */ = new T(function(){
  return B(err(_kO/* Easing.lvl26 */));
}), _kQ/* $s!1 */ = function(_kR, _kS){
  while(1){
    var _kT = E(_kS);
    if(!_kT[0]){
      var _kU = _kT[2], _kV = _kT[3], _kW = _kT[4], _kX = _kT[5], _kY = E(E(_kR));
      if(_kY[0]==19){
        if(dataToTag(E(_kU))>=19){
          var _kZ = E(_kU);
          if(_kZ[0]==19){
            var _l0 = E(_kY[1])[1], _l1 = E(_kZ[1])[1];
            if(_l0>=_l1){
              if(_l0!=_l1){
                _kR = _kY;
                _kS = _kX;
                continue;
              }else{
                var _l2 = E(_kY[2])[1], _l3 = E(_kZ[2])[1];
                if(_l2>=_l3){
                  if(_l2!=_l3){
                    _kR = _kY;
                    _kS = _kX;
                    continue;
                  }else{
                    var _l4 = E(_kY[3])[1], _l5 = E(_kZ[3])[1];
                    if(_l4>=_l5){
                      if(_l4!=_l5){
                        _kR = _kY;
                        _kS = _kX;
                        continue;
                      }else{
                        var _l6 = E(_kY[4])[1], _l7 = E(_kZ[4])[1];
                        if(_l6>=_l7){
                          if(_l6!=_l7){
                            _kR = _kY;
                            _kS = _kX;
                            continue;
                          }else{
                            return E(_kV);
                          }
                        }else{
                          _kR = _kY;
                          _kS = _kW;
                          continue;
                        }
                      }
                    }else{
                      _kR = _kY;
                      _kS = _kW;
                      continue;
                    }
                  }
                }else{
                  _kR = _kY;
                  _kS = _kW;
                  continue;
                }
              }
            }else{
              _kR = _kY;
              _kS = _kW;
              continue;
            }
          }else{
            _kR = _kY;
            _kS = _kW;
            continue;
          }
        }else{
          _kR = _kY;
          _kS = _kX;
          continue;
        }
      }else{
        var _l8 = dataToTag(E(_kY)), _l9 = dataToTag(E(_kU));
        if(_l8>=_l9){
          if(_l8!=_l9){
            _kR = _kY;
            _kS = _kX;
            continue;
          }else{
            return E(_kV);
          }
        }else{
          _kR = _kY;
          _kS = _kW;
          continue;
        }
      }
    }else{
      return E(_kP/* Easing.lvl27 */);
    }
  }
}, _la/* EasingMap */ = function(_lb){
  return [0, _lb];
}, _lc/* $wanimIx */ = function(_ld, _le, _lf, _lg){
  return new F(function(){return A(_le,[_la/* Easing.EasingMap */, new T(function(){
    return B(A(_le,[function(_lh){
      return new F(function(){return _iL/* Easing.$sinsert_$sgo10 */(_ld, _lh, _lg);});
    }, new T(function(){
      return B(A(_lf,[new T(function(){
        return B(_kQ/* Easing.$s!1 */(_ld, _lg));
})]));
})]));
})]);});
}, _li/* animIx */ = function(_lj, _lk, _ll, _lm){
  return new F(function(){return _lc/* Easing.$wanimIx */(_lj, E(_lk)[1], _ll, E(_lm)[1]);});
}, _ln/* lvl */ = function(_lo){
  return [0];
}, _lp/* lvl1 */ = [0, -1], _lq/* lvl2 */ = [0, _lp/* Easing.lvl1 */, _ki/* Easing.easingClass25 */], _lr/* lvl3 */ = [0, 1000], _ls/* easingClass_go */ = function(_lt){
  var _lu = E(_lt);
  if(!_lu[0]){
    return [0];
  }else{
    var _lv = _lu[1];
    return [1, [0, _b1/* React.Anim.$fAnimatableDouble */, _lr/* Easing.lvl3 */, _lq/* Easing.lvl2 */, function(_lw, _lx, _ly){
      return new F(function(){return _li/* Easing.animIx */(_lv, _lw, _lx, _ly);});
    }, _lv, _ln/* Easing.lvl */], new T(function(){
      return B(_ls/* Easing.easingClass_go */(_lu[2]));
})];
  }
}, _lz/* lvl4 */ = [0, 1], _lA/* lvl5 */ = [0, _lz/* Easing.lvl4 */, _ki/* Easing.easingClass25 */], _lB/* easingClass_go1 */ = function(_lC){
  var _lD = E(_lC);
  if(!_lD[0]){
    return [0];
  }else{
    var _lE = _lD[1];
    return [1, [0, _b1/* React.Anim.$fAnimatableDouble */, _lr/* Easing.lvl3 */, _lA/* Easing.lvl5 */, function(_lF, _lG, _lH){
      return new F(function(){return _li/* Easing.animIx */(_lE, _lF, _lG, _lH);});
    }, _lE, _ln/* Easing.lvl */], new T(function(){
      return B(_lB/* Easing.easingClass_go1 */(_lD[2]));
})];
  }
}, _lI/* easingClass28 */ = function(_lJ, _lK){
  var _lL = E(_lJ), _lM = _lL[2];
  if(!E(_lL[1])){
    var _lN = E(_lK);
    return [0, [0, _kK/* Easing.Closed */, _lM], new T(function(){
      return B(_lB/* Easing.easingClass_go1 */(_lM));
})];
  }else{
    var _lO = E(_lK);
    return [0, [0, _kN/* Easing.Open */, _lM], new T(function(){
      return B(_ls/* Easing.easingClass_go */(_lM));
})];
  }
}, _lP/* jsShowD1 */ = function(_lQ){
  var _lR = jsShow(E(_lQ)[1]), _lS = _lR;
  return new F(function(){return fromJSStr(_lS);});
}, _lT/* $fShowDouble2 */ = function(_lU){
  return function(_lV){
    return new F(function(){return _10/* GHC.Base.++ */(new T(function(){
      return B(_lP/* GHC.HastePrim.jsShowD1 */(_lU));
}), _lV);});
  };
}, _lW/* $fShowEasing10 */ = new T(function(){
  return B(unCStr("EaseInOutBounce"));
}), _lX/* $fShowEasing12 */ = new T(function(){
  return B(unCStr("EaseOutBounce"));
}), _lY/* $fShowEasing14 */ = new T(function(){
  return B(unCStr("EaseInBounce"));
}), _lZ/* $fShowEasing16 */ = new T(function(){
  return B(unCStr("EaseInOutElastic"));
}), _m0/* $fShowEasing18 */ = new T(function(){
  return B(unCStr("EaseOutElastic"));
}), _m1/* $fShowEasing20 */ = new T(function(){
  return B(unCStr("EaseInElastic"));
}), _m2/* $fShowEasing22 */ = new T(function(){
  return B(unCStr("EaseInOutQuint"));
}), _m3/* $fShowEasing24 */ = new T(function(){
  return B(unCStr("EaseOutQuint"));
}), _m4/* $fShowEasing26 */ = new T(function(){
  return B(unCStr("EaseInQuint"));
}), _m5/* $fShowEasing28 */ = new T(function(){
  return B(unCStr("EaseInOutQuart"));
}), _m6/* $fShowEasing30 */ = new T(function(){
  return B(unCStr("EaseOutQuart"));
}), _m7/* $fShowEasing32 */ = new T(function(){
  return B(unCStr("EaseInQuart"));
}), _m8/* $fShowEasing34 */ = new T(function(){
  return B(unCStr("EaseInOutCubic"));
}), _m9/* $fShowEasing36 */ = new T(function(){
  return B(unCStr("EaseOutCubic"));
}), _ma/* $fShowEasing38 */ = new T(function(){
  return B(unCStr("EaseInCubic"));
}), _mb/* $fShowEasing4 */ = new T(function(){
  return B(unCStr("EaseOutSine"));
}), _mc/* $fShowEasing40 */ = new T(function(){
  return B(unCStr("EaseInOutQuad"));
}), _md/* $fShowEasing42 */ = new T(function(){
  return B(unCStr("EaseOutQuad"));
}), _me/* $fShowEasing44 */ = new T(function(){
  return B(unCStr("EaseInQuad"));
}), _mf/* $fShowEasing46 */ = new T(function(){
  return B(unCStr("Linear"));
}), _mg/* $fShowEasing6 */ = new T(function(){
  return B(unCStr("EaseInSine"));
}), _mh/* $fShowEasing7 */ = new T(function(){
  return B(unCStr("EaseBezier "));
}), _mi/* $fShowEasing8 */ = [0, 11], _mj/* lvl6 */ = new T(function(){
  return [0, "EaseBezier 0.5 0.0 0.8 0.8"];
}), _mk/* lvl7 */ = new T(function(){
  return [0, "EaseBezier (--0.5) (-0.0) (--0.8) (--0.8)"];
}), _ml/* $w$j */ = function(_mm){
  var _mn = strEq(_mm, E(_mk/* Easing.lvl7 */)[1]), _mo = _mn;
  if(!E(_mo)){
    return new F(function(){return fromJSStr(_mm);});
  }else{
    return new F(function(){return fromJSStr(E(_mj/* Easing.lvl6 */)[1]);});
  }
}, _mp/* $fShowDouble3 */ = [0, 45], _mq/* $w$sshowSignedFloat */ = function(_mr, _ms, _mt){
  var _mu = function(_mv){
    var _mw = new T(function(){
      return B(A(_mr,[[0,  -_mt]]));
});
    return E(_ms)[1]<=6 ? function(_mx){
      return [1, _mp/* GHC.Float.$fShowDouble3 */, new T(function(){
        return B(A(_mw,[_mx]));
})];
    } : function(_my){
      return [1, _8E/* GHC.Show.shows13 */, [1, _mp/* GHC.Float.$fShowDouble3 */, new T(function(){
        return B(A(_mw,[[1, _8x/* GHC.Show.shows12 */, _my]]));
})]];
    };
  };
  if(_mt>=0){
    var _mz = isDoubleNegativeZero(_mt), _mA = _mz;
    return E(_mA)==0 ? B(A(_mr,[[0, _mt]])) : B(_mu(_));
  }else{
    return new F(function(){return _mu(_);});
  }
}, _mB/* drop_drop# */ = function(_mC, _mD){
  while(1){
    var _mE = E(_mC);
    if(!_mE){
      return E(_mD);
    }else{
      var _mF = E(_mD);
      if(!_mF[0]){
        return [0];
      }else{
        _mC = _mE-1|0;
        _mD = _mF[2];
        continue;
      }
    }
  }
}, _mG/* eqString */ = function(_mH, _mI){
  while(1){
    var _mJ = E(_mH);
    if(!_mJ[0]){
      return E(_mI)[0]==0 ? true : false;
    }else{
      var _mK = E(_mI);
      if(!_mK[0]){
        return false;
      }else{
        if(E(_mJ[1])[1]!=E(_mK[1])[1]){
          return false;
        }else{
          _mH = _mJ[2];
          _mI = _mK[2];
          continue;
        }
      }
    }
  }
}, _mL/* lvl25 */ = new T(function(){
  return B(unCStr("--"));
}), _mM/* shows24 */ = [0, 0], _mN/* take_unsafe_UInt */ = function(_mO, _mP){
  var _mQ = E(_mO);
  if(!_mQ){
    return [0];
  }else{
    var _mR = E(_mP);
    return _mR[0]==0 ? [0] : [1, _mR[1], new T(function(){
      return B(_mN/* GHC.List.take_unsafe_UInt */(_mQ-1|0, _mR[2]));
})];
  }
}, _mS/* $w$ssafeShow */ = function(_mT){
  var _mU = B(A(_mq/* GHC.Float.$w$sshowSignedFloat */,[_lT/* GHC.Float.$fShowDouble2 */, _mM/* GHC.Show.shows24 */, _mT, _b/* GHC.Types.[] */]));
  return !B(_mG/* GHC.Base.eqString */(B(_mN/* GHC.List.take_unsafe_UInt */(2, _mU)), _mL/* Easing.lvl25 */)) ? E(_mU) : B(_mB/* GHC.List.drop_drop# */(2, _mU));
}, _mV/* a13 */ = [0, 0], _mW/* a31 */ = [0, 220], _mX/* a32 */ = [0, 161], _mY/* a33 */ = [0, 85], _mZ/* a34 */ = [0, 51], _n0/* a35 */ = [0, 175], _n1/* a36 */ = [0, 245], _n2/* a38 */ = [0, _b/* GHC.Types.[] */, _r/* GHC.Tuple.() */], _n3/* a39 */ = function(_n4){
  return E(_n2/* Easing.a38 */);
}, _n5/* a3 */ = [0, 40], _n6/* lvl10 */ = [0, _em/* React.Attrs.height_1 */, _n5/* Easing.a3 */], _n7/* a4 */ = [0, 15], _n8/* lvl11 */ = [0, _ep/* React.Attrs.width_1 */, _n7/* Easing.a4 */], _n9/* a5 */ = [0, -20], _na/* y_3 */ = [0, 121], _nb/* y_2 */ = [1, _na/* React.Attrs.y_3 */, _b/* GHC.Types.[] */], _nc/* y_1 */ = new T(function(){
  return [0, toJSStr(_nb/* React.Attrs.y_2 */)];
}), _nd/* lvl12 */ = [0, _nc/* React.Attrs.y_1 */, _n9/* Easing.a5 */], _ne/* a6 */ = [0, -7.5], _nf/* x_3 */ = [0, 120], _ng/* x_2 */ = [1, _nf/* React.Attrs.x_3 */, _b/* GHC.Types.[] */], _nh/* x_1 */ = new T(function(){
  return [0, toJSStr(_ng/* React.Attrs.x_2 */)];
}), _ni/* lvl13 */ = [0, _nh/* React.Attrs.x_1 */, _ne/* Easing.a6 */], _nj/* a7 */ = [0, 30], _nk/* lvl14 */ = [0, _em/* React.Attrs.height_1 */, _nj/* Easing.a7 */], _nl/* lvl15 */ = [0, _ep/* React.Attrs.width_1 */, _n5/* Easing.a3 */], _nm/* a8 */ = [0, 60], _nn/* lvl16 */ = [0, _nc/* React.Attrs.y_1 */, _nm/* Easing.a8 */], _no/* a9 */ = [0, 5], _np/* lvl17 */ = [0, _nh/* React.Attrs.x_1 */, _no/* Easing.a9 */], _nq/* lvl18 */ = [0, _ep/* React.Attrs.width_1 */, _nj/* Easing.a7 */], _nr/* a10 */ = [0, -10], _ns/* lvl19 */ = [0, _nc/* React.Attrs.y_1 */, _nr/* Easing.a10 */], _nt/* a11 */ = [0, -15], _nu/* lvl20 */ = [0, _nh/* React.Attrs.x_1 */, _nt/* Easing.a11 */], _nv/* lvl21 */ = [0, _nh/* React.Attrs.x_1 */, _n7/* Easing.a4 */], _nw/* lvl23 */ = [0, _nc/* React.Attrs.y_1 */, _mV/* Easing.a13 */], _nx/* lvl24 */ = [0, _nh/* React.Attrs.x_1 */, _mV/* Easing.a13 */], _ny/* a37 */ = new T(function(){
  return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_mY/* Easing.a33 */, _mX/* Easing.a32 */, _mW/* Easing.a31 */)))];
}), _nz/* lvl28 */ = [0, _dK/* React.Attrs.fill_1 */, _ny/* Easing.a37 */], _nA/* a12 */ = [0, 2], _nB/* lvl22 */ = [0, _em/* React.Attrs.height_1 */, _nA/* Easing.a12 */], _nC/* lvl29 */ = [1, _nz/* Easing.lvl28 */, _b/* GHC.Types.[] */], _nD/* lvl30 */ = [1, _nB/* Easing.lvl22 */, _nC/* Easing.lvl29 */], _nE/* lvl40 */ = new T(function(){
  return [1, "button-box"];
}), _nF/* lvl41 */ = [0, _9x/* React.Attrs.class_1 */, _nE/* Easing.lvl40 */], _nG/* lvl42 */ = [1, _nF/* Easing.lvl41 */, _b/* GHC.Types.[] */], _nH/* ds1 */ = new T(function(){
  var _nI = B(_94/* React.Types.$wseparateAttrs */(_nG/* Easing.lvl42 */));
  return [0, _nI[1], _nI[2]];
}), _nJ/* lvl43 */ = new T(function(){
  return E(E(_nH/* Easing.ds1 */)[2]);
}), _nK/* lvl44 */ = new T(function(){
  return E(E(_nH/* Easing.ds1 */)[1]);
}), _nL/* a28 */ = new T(function(){
  return B(unCStr("toggle easing"));
}), _nM/* a29 */ = [2, _nL/* Easing.a28 */], _nN/* a30 */ = [1, _nM/* Easing.a29 */, _b/* GHC.Types.[] */], _nO/* lvl31 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _nP/* lvl32 */ = [0, _9x/* React.Attrs.class_1 */, _nO/* Easing.lvl31 */], _nQ/* Toggle */ = 0, _nR/* x */ = [1, _nQ/* Easing.Toggle */], _nS/* lvl33 */ = function(_nT){
  var _nU = js_parseMouseEvent(E(_nT)[1]), _nV = _nU, _nW = E(_nV);
  return E(_nR/* Easing.x */);
}, _nX/* lvl34 */ = [0, _nS/* Easing.lvl33 */, _9A/* React.Types.ClickEvt */], _nY/* lvl35 */ = [1, _nX/* Easing.lvl34 */], _nZ/* lvl36 */ = [1, _nY/* Easing.lvl35 */, _b/* GHC.Types.[] */], _o0/* lvl37 */ = [1, _nP/* Easing.lvl32 */, _nZ/* Easing.lvl36 */], _o1/* ds */ = new T(function(){
  var _o2 = B(_94/* React.Types.$wseparateAttrs */(_o0/* Easing.lvl37 */));
  return [0, _o2[1], _o2[2]];
}), _o3/* lvl38 */ = new T(function(){
  return E(E(_o1/* Easing.ds */)[2]);
}), _o4/* lvl39 */ = new T(function(){
  return E(E(_o1/* Easing.ds */)[1]);
}), _o5/* lvl45 */ = [0, _9w/* React.Elements.button_1 */, _o3/* Easing.lvl38 */, _o4/* Easing.lvl39 */, _nN/* Easing.a30 */], _o6/* lvl46 */ = [1, _o5/* Easing.lvl45 */, _b/* GHC.Types.[] */], _o7/* lvl47 */ = [0, _9k/* React.Elements.div_1 */, _nJ/* Easing.lvl43 */, _nK/* Easing.lvl44 */, _o6/* Easing.lvl46 */], _o8/* lvl48 */ = [1, _o7/* Easing.lvl47 */, _b/* GHC.Types.[] */], _o9/* a25 */ = new T(function(){
  return [1, "easings"];
}), _oa/* a26 */ = [0, _9x/* React.Attrs.class_1 */, _o9/* Easing.a25 */], _ob/* a27 */ = [1, _oa/* Easing.a26 */, _b/* GHC.Types.[] */], _oc/* ds2 */ = new T(function(){
  var _od = B(_94/* React.Types.$wseparateAttrs */(_ob/* Easing.a27 */));
  return [0, _od[1], _od[2]];
}), _oe/* lvl49 */ = new T(function(){
  return E(E(_oc/* Easing.ds2 */)[2]);
}), _of/* lvl50 */ = new T(function(){
  return E(E(_oc/* Easing.ds2 */)[1]);
}), _og/* lvl51 */ = [0, 1000], _oh/* a14 */ = [0, 100], _oi/* a15 */ = [0, _ep/* React.Attrs.width_1 */, _oh/* Easing.a14 */], _oj/* a16 */ = [0, _em/* React.Attrs.height_1 */, _oh/* Easing.a14 */], _ok/* a17 */ = new T(function(){
  return [1, "0 0 100 100"];
}), _ol/* a18 */ = [0, _ei/* React.Attrs.viewBox_1 */, _ok/* Easing.a17 */], _om/* a19 */ = [1, _ol/* Easing.a18 */, _b/* GHC.Types.[] */], _on/* a20 */ = [1, _oj/* Easing.a16 */, _om/* Easing.a19 */], _oo/* a21 */ = [1, _oi/* Easing.a15 */, _on/* Easing.a20 */], _op/* ds3 */ = new T(function(){
  var _oq = B(_94/* React.Types.$wseparateAttrs */(_oo/* Easing.a21 */));
  return [0, _oq[1], _oq[2]];
}), _or/* lvl52 */ = new T(function(){
  return E(E(_op/* Easing.ds3 */)[2]);
}), _os/* lvl53 */ = new T(function(){
  return E(E(_op/* Easing.ds3 */)[1]);
}), _ot/* a */ = new T(function(){
  return [1, "caption"];
}), _ou/* a1 */ = [0, _9x/* React.Attrs.class_1 */, _ot/* Easing.a */], _ov/* a2 */ = [1, _ou/* Easing.a1 */, _b/* GHC.Types.[] */], _ow/* ds4 */ = new T(function(){
  var _ox = B(_94/* React.Types.$wseparateAttrs */(_ov/* Easing.a2 */));
  return [0, _ox[1], _ox[2]];
}), _oy/* lvl54 */ = new T(function(){
  return E(E(_ow/* Easing.ds4 */)[2]);
}), _oz/* lvl55 */ = new T(function(){
  return E(E(_ow/* Easing.ds4 */)[1]);
}), _oA/* a22 */ = new T(function(){
  return [1, "box"];
}), _oB/* a23 */ = [0, _9x/* React.Attrs.class_1 */, _oA/* Easing.a22 */], _oC/* a24 */ = [1, _oB/* Easing.a23 */, _b/* GHC.Types.[] */], _oD/* ds5 */ = new T(function(){
  var _oE = B(_94/* React.Types.$wseparateAttrs */(_oC/* Easing.a24 */));
  return [0, _oE[1], _oE[2]];
}), _oF/* lvl56 */ = new T(function(){
  return E(E(_oD/* Easing.ds5 */)[2]);
}), _oG/* lvl57 */ = new T(function(){
  return E(E(_oD/* Easing.ds5 */)[1]);
}), _oH/* lvl8 */ = [0, 41], _oI/* lvl9 */ = [1, _oH/* Easing.lvl8 */, _b/* GHC.Types.[] */], _oJ/* rect_1 */ = new T(function(){
  return [0, "rect"];
}), _oK/* showSpace1 */ = [0, 32], _oL/* transform_1 */ = new T(function(){
  return [0, "transform"];
}), _oM/* easingClass29 */ = function(_oN, _oO){
  var _oP = E(_oN), _oQ = new T(function(){
    var _oR = E(_oO), _oS = _oR[1];
    return [0, new T(function(){
      return B(_10/* GHC.Base.++ */(_o8/* Easing.lvl48 */, new T(function(){
        return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _oe/* Easing.lvl49 */, _of/* Easing.lvl50 */, new T(function(){
          var _oT = function(_oU){
            var _oV = E(_oU);
            if(!_oV[0]){
              return E(_n3/* Easing.a39 */);
            }else{
              var _oW = _oV[1];
              return function(_oX){
                var _oY = new T(function(){
                  return B(A(new T(function(){
                    return B(_oT(_oV[2]));
}),[_oX]));
});
                return [0, new T(function(){
                  return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _oF/* Easing.lvl56 */, _oG/* Easing.lvl57 */, new T(function(){
                    return B(_10/* GHC.Base.++ */([1, [0, _fe/* React.Elements.svg_1 */, _or/* Easing.lvl52 */, _os/* Easing.lvl53 */, new T(function(){
                      var _oZ = new T(function(){
                        if(!E(_oP[1])){
                          var _p0 = [0, 1+B(_kQ/* Easing.$s!1 */(_oW, _oS))[1]];
                        }else{
                          var _p0 = B(_kQ/* Easing.$s!1 */(_oW, _oS));
                        }
                        return _p0;
}), _p1 = new T(function(){
                        var _p2 = B(_94/* React.Types.$wseparateAttrs */([1, _nx/* Easing.lvl24 */, [1, _nw/* Easing.lvl23 */, [1, [0, _ep/* React.Attrs.width_1 */, new T(function(){
                          var _p3 = E(_oZ)[1]*100;
                          if(_p3>=0){
                            var _p4 = _p3<=1000 ? [0, _p3] : E(_og/* Easing.lvl51 */);
                          }else{
                            var _p4 = E(_mV/* Easing.a13 */);
                          }
                          var _p5 = _p4, _p6 = _p5, _p7 = _p6;
                          return _p7;
})], _nD/* Easing.lvl30 */]]]));
                        return [0, _p2[1], _p2[2]];
});
                      return B(_10/* GHC.Base.++ */([1, [1, _oJ/* React.Elements.rect_1 */, new T(function(){
                        return E(E(_p1)[2]);
}), new T(function(){
                        return E(E(_p1)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                        var _p8 = new T(function(){
                          var _p9 = B(_94/* React.Types.$wseparateAttrs */([1, _nv/* Easing.lvl21 */, [1, [0, _nc/* React.Attrs.y_1 */, new T(function(){
                            return [0, 5+10*(1-E(_oZ)[1])];
})], [1, _nq/* Easing.lvl18 */, [1, _n6/* Easing.lvl10 */, [1, _nz/* Easing.lvl28 */, [1, [0, _oL/* React.Attrs.transform_1 */, new T(function(){
                            return [1, toJSStr(B(unAppCStr("translate(0 ", new T(function(){
                              return B(_10/* GHC.Base.++ */(B(_mS/* Easing.$w$ssafeShow */(E(_oZ)[1])), _oI/* Easing.lvl9 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                          return [0, _p9[1], _p9[2]];
});
                        return B(_10/* GHC.Base.++ */([1, [1, _oJ/* React.Elements.rect_1 */, new T(function(){
                          return E(E(_p8)[2]);
}), new T(function(){
                          return E(E(_p8)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                          var _pa = new T(function(){
                            var _pb = B(_94/* React.Types.$wseparateAttrs */([1, _nu/* Easing.lvl20 */, [1, _ns/* Easing.lvl19 */, [1, _nq/* Easing.lvl18 */, [1, _nk/* Easing.lvl14 */, [1, _nz/* Easing.lvl28 */, [1, [0, _oL/* React.Attrs.transform_1 */, new T(function(){
                              return [1, toJSStr(B(unAppCStr("translate(75 25) scale(", new T(function(){
                                return B(_10/* GHC.Base.++ */(B(_mS/* Easing.$w$ssafeShow */(1+0.5*E(_oZ)[1])), _oI/* Easing.lvl9 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                            return [0, _pb[1], _pb[2]];
});
                          return B(_10/* GHC.Base.++ */([1, [1, _oJ/* React.Elements.rect_1 */, new T(function(){
                            return E(E(_pa)[2]);
}), new T(function(){
                            return E(E(_pa)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                            var _pc = new T(function(){
                              var _pd = B(_94/* React.Types.$wseparateAttrs */([1, _ni/* Easing.lvl13 */, [1, _nd/* Easing.lvl12 */, [1, _n8/* Easing.lvl11 */, [1, _n6/* Easing.lvl10 */, [1, _nz/* Easing.lvl28 */, [1, [0, _oL/* React.Attrs.transform_1 */, new T(function(){
                                return [1, toJSStr(B(unAppCStr("translate(80 75) rotate(", new T(function(){
                                  return B(_10/* GHC.Base.++ */(B(_mS/* Easing.$w$ssafeShow */(E(_oZ)[1]*90)), _oI/* Easing.lvl9 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                              return [0, _pd[1], _pd[2]];
}), _pe = new T(function(){
                              var _pf = B(_94/* React.Types.$wseparateAttrs */([1, _np/* Easing.lvl17 */, [1, _nn/* Easing.lvl16 */, [1, _nl/* Easing.lvl15 */, [1, _nk/* Easing.lvl14 */, [1, [0, _dK/* React.Attrs.fill_1 */, new T(function(){
                                var _pg = B(_8e/* React.Anim.$w$cinterpolate */(_9e/* React.Types.Linear */, _mY/* Easing.a33 */, _mX/* Easing.a32 */, _mW/* Easing.a31 */, _n1/* Easing.a36 */, _n0/* Easing.a35 */, _mZ/* Easing.a34 */, _oZ));
                                return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_pg[1], _pg[2], _pg[3])))];
})], _b/* GHC.Types.[] */]]]]]));
                              return [0, _pf[1], _pf[2]];
});
                            return B(_10/* GHC.Base.++ */([1, [1, _oJ/* React.Elements.rect_1 */, new T(function(){
                              return E(E(_pe)[2]);
}), new T(function(){
                              return E(E(_pe)[1]);
})], _b/* GHC.Types.[] */], [1, [1, _oJ/* React.Elements.rect_1 */, new T(function(){
                              return E(E(_pc)[2]);
}), new T(function(){
                              return E(E(_pc)[1]);
})], _b/* GHC.Types.[] */]));
})));
})));
})));
})], _b/* GHC.Types.[] */], [1, [0, _9k/* React.Elements.div_1 */, _oy/* Easing.lvl54 */, _oz/* Easing.lvl55 */, [1, [2, new T(function(){
                      var _ph = E(_oW);
                      switch(_ph[0]){
                        case 0:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_mf/* React.Types.$fShowEasing46 */))));
                          break;
                        case 1:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_me/* React.Types.$fShowEasing44 */))));
                          break;
                        case 2:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_md/* React.Types.$fShowEasing42 */))));
                          break;
                        case 3:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_mc/* React.Types.$fShowEasing40 */))));
                          break;
                        case 4:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_ma/* React.Types.$fShowEasing38 */))));
                          break;
                        case 5:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m9/* React.Types.$fShowEasing36 */))));
                          break;
                        case 6:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m8/* React.Types.$fShowEasing34 */))));
                          break;
                        case 7:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m7/* React.Types.$fShowEasing32 */))));
                          break;
                        case 8:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m6/* React.Types.$fShowEasing30 */))));
                          break;
                        case 9:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m5/* React.Types.$fShowEasing28 */))));
                          break;
                        case 10:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m4/* React.Types.$fShowEasing26 */))));
                          break;
                        case 11:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m3/* React.Types.$fShowEasing24 */))));
                          break;
                        case 12:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m2/* React.Types.$fShowEasing22 */))));
                          break;
                        case 13:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m1/* React.Types.$fShowEasing20 */))));
                          break;
                        case 14:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_m0/* React.Types.$fShowEasing18 */))));
                          break;
                        case 15:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_lZ/* React.Types.$fShowEasing16 */))));
                          break;
                        case 16:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_lY/* React.Types.$fShowEasing14 */))));
                          break;
                        case 17:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_lX/* React.Types.$fShowEasing12 */))));
                          break;
                        case 18:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_lW/* React.Types.$fShowEasing10 */))));
                          break;
                        case 19:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(B(_10/* GHC.Base.++ */(_mh/* React.Types.$fShowEasing7 */, new T(function(){
                            return B(A(_mq/* GHC.Float.$w$sshowSignedFloat */,[_lT/* GHC.Float.$fShowDouble2 */, _mi/* React.Types.$fShowEasing8 */, E(_ph[1])[1], [1, _oK/* GHC.Show.showSpace1 */, new T(function(){
                              return B(A(_mq/* GHC.Float.$w$sshowSignedFloat */,[_lT/* GHC.Float.$fShowDouble2 */, _mi/* React.Types.$fShowEasing8 */, E(_ph[2])[1], [1, _oK/* GHC.Show.showSpace1 */, new T(function(){
                                return B(A(_mq/* GHC.Float.$w$sshowSignedFloat */,[_lT/* GHC.Float.$fShowDouble2 */, _mi/* React.Types.$fShowEasing8 */, E(_ph[3])[1], [1, _oK/* GHC.Show.showSpace1 */, new T(function(){
                                  return B(A(_mq/* GHC.Float.$w$sshowSignedFloat */,[_lT/* GHC.Float.$fShowDouble2 */, _mi/* React.Types.$fShowEasing8 */, E(_ph[4])[1], _b/* GHC.Types.[] */]));
})]]));
})]]));
})]]));
}))))));
                          break;
                        case 20:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_mg/* React.Types.$fShowEasing6 */))));
                          break;
                        default:
                          var _pi = B(_ml/* Easing.$w$j */(toJSStr(E(_mb/* React.Types.$fShowEasing4 */))));
                      }
                      return _pi;
})], _b/* GHC.Types.[] */]], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], new T(function(){
                    return E(E(_oY)[1]);
})));
}), new T(function(){
                  return E(E(_oY)[2]);
})];
              };
            }
          };
          return E(B(A(_oT,[_oP[2], _oR]))[1]);
})], _b/* GHC.Types.[] */], _o8/* Easing.lvl48 */));
})));
}), _r/* GHC.Tuple.() */];
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_oQ)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_oQ)[2]);
})];
}, _pj/* fail */ = function(_pk){
  return new F(function(){return _2a/* Control.Exception.Base.patError */("Main.hs:(17,9)-(25,21)|lambda");});
}, _pl/* lvl */ = new T(function(){
  return B(_pj/* Main.fail */(_));
}), _pm/* simpleClass3 */ = new T(function(){
  return [0, toJSStr(_b/* GHC.Types.[] */)];
}), _pn/* simpleClass4 */ = new T(function(){
  return [0, "pit"];
}), _po/* simpleClass5 */ = new T(function(){
  return [0, "little mac!"];
}), _pp/* simpleClass2 */ = [0, _po/* Simple.simpleClass5 */, _pn/* Simple.simpleClass4 */, _pm/* Simple.simpleClass3 */], _pq/* simpleClass6 */ = function(_pr, _ps){
  var _pt = E(_ps);
  if(!_pt[0]){
    return [0, new T(function(){
      var _pu = E(_pr);
      return [0, _pu[1], _pu[2], _pt[1]];
}), _b/* GHC.Types.[] */];
  }else{
    var _pv = E(_pr);
    return [0, [0, _pv[3], _pv[1], _pm/* Simple.simpleClass3 */], _b/* GHC.Types.[] */];
  }
}, _pw/* input_1 */ = new T(function(){
  return [0, "input"];
}), _px/* simpleClass13 */ = new T(function(){
  return B(unCStr("fighter 1: "));
}), _py/* simpleClass12 */ = [2, _px/* Simple.simpleClass13 */], _pz/* simpleClass11 */ = [1, _py/* Simple.simpleClass12 */, _b/* GHC.Types.[] */], _pA/* simpleClass16 */ = new T(function(){
  return B(unCStr("send a new competitor into the ring: "));
}), _pB/* simpleClass15 */ = [2, _pA/* Simple.simpleClass16 */], _pC/* simpleClass14 */ = [1, _pB/* Simple.simpleClass15 */, _b/* GHC.Types.[] */], _pD/* KeyPressEvt */ = 2, _pE/* onEnter1 */ = new T(function(){
  return [0, "Enter"];
}), _pF/* $wonEnter */ = function(_pG){
  return [0, function(_pH){
    var _pI = js_parseKeyboardEvent(E(_pH)[1]), _pJ = _pI, _pK = strEq(E(_pJ)[3], E(_pE/* React.Events.onEnter1 */)[1]), _pL = _pK;
    return E(_pL)==0 ? [0] : E([1, _pG]);
  }, _pD/* React.Types.KeyPressEvt */];
}, _pM/* Enter */ = [1], _pN/* simpleClass19 */ = new T(function(){
  return [1, B(_pF/* React.Events.$wonEnter */(_pM/* Simple.Enter */))];
}), _pO/* simpleClass18 */ = [1, _pN/* Simple.simpleClass19 */, _b/* GHC.Types.[] */], _pP/* ChangeEvt */ = 0, _pQ/* simpleClass22 */ = function(_pR){
  var _pS = js_parseChangeEvent(E(_pR)[1]), _pT = _pS;
  return [1, [0, E(_pT)]];
}, _pU/* simpleClass21 */ = [0, _pQ/* Simple.simpleClass22 */, _pP/* React.Types.ChangeEvt */], _pV/* simpleClass20 */ = [1, _pU/* Simple.simpleClass21 */], _pW/* simpleClass17 */ = [1, _pV/* Simple.simpleClass20 */, _pO/* Simple.simpleClass18 */], _pX/* simpleClass10 */ = new T(function(){
  return B(unCStr("fighter 2: "));
}), _pY/* simpleClass9 */ = [2, _pX/* Simple.simpleClass10 */], _pZ/* simpleClass8 */ = [1, _pY/* Simple.simpleClass9 */, _b/* GHC.Types.[] */], _q0/* $WStr */ = function(_q1){
  return [1, E(_q1)[1]];
}, _q2/* value_1 */ = new T(function(){
  return [0, "value"];
}), _q3/* value_ */ = function(_q4){
  return [0, _q2/* React.Attrs.value_1 */, new T(function(){
    return B(_q0/* Haste.JSON.$WStr */(_q4));
})];
}, _q5/* simpleClass7 */ = function(_q6){
  var _q7 = E(_q6);
  return function(_q8){
    return E([0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
      return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
        var _q9 = new T(function(){
          var _qa = B(_94/* React.Types.$wseparateAttrs */([1, new T(function(){
            return B(_q3/* React.Attrs.value_ */(_q7[3]));
}), _pW/* Simple.simpleClass17 */]));
          return [0, _qa[1], _qa[2]];
});
        return B(_10/* GHC.Base.++ */(_pC/* Simple.simpleClass14 */, [1, [1, _pw/* React.Elements.input_1 */, new T(function(){
          return E(E(_q9)[2]);
}), new T(function(){
          return E(E(_q9)[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], new T(function(){
        return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
          return B(_10/* GHC.Base.++ */(_pz/* Simple.simpleClass11 */, [1, [2, new T(function(){
            return fromJSStr(E(_q7[1])[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
          return B(_10/* GHC.Base.++ */(_pZ/* Simple.simpleClass8 */, [1, [2, new T(function(){
            return fromJSStr(E(_q7[2])[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */]));
})));
})], _b/* GHC.Types.[] */], _r/* GHC.Tuple.() */]);
  };
}, _qb/* slideClass21 */ = [2, _b/* GHC.Types.[] */], _qc/* slideClass20 */ = [1, _qb/* Slide.slideClass21 */, _b/* GHC.Types.[] */], _qd/* slideClass28 */ = new T(function(){
  return B(unCStr("toggle"));
}), _qe/* slideClass27 */ = [2, _qd/* Slide.slideClass28 */], _qf/* slideClass26 */ = [1, _qe/* Slide.slideClass27 */, _b/* GHC.Types.[] */], _qg/* Toggle */ = 0, _qh/* slideClass_x */ = [1, _qg/* Slide.Toggle */], _qi/* slideClass33 */ = function(_qj){
  var _qk = js_parseMouseEvent(E(_qj)[1]), _ql = _qk, _qm = E(_ql);
  return E(_qh/* Slide.slideClass_x */);
}, _qn/* slideClass32 */ = [0, _qi/* Slide.slideClass33 */, _9A/* React.Types.ClickEvt */], _qo/* slideClass31 */ = [1, _qn/* Slide.slideClass32 */], _qp/* slideClass30 */ = [1, _qo/* Slide.slideClass31 */, _b/* GHC.Types.[] */], _qq/* slideClass35 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _qr/* slideClass34 */ = [0, _9x/* React.Attrs.class_1 */, _qq/* Slide.slideClass35 */], _qs/* slideClass29 */ = [1, _qr/* Slide.slideClass34 */, _qp/* Slide.slideClass30 */], _qt/* slideClass_ds1 */ = new T(function(){
  var _qu = B(_94/* React.Types.$wseparateAttrs */(_qs/* Slide.slideClass29 */));
  return [0, _qu[1], _qu[2]];
}), _qv/* slideClass_lvl1 */ = new T(function(){
  return E(E(_qt/* Slide.slideClass_ds1 */)[1]);
}), _qw/* slideClass_lvl2 */ = new T(function(){
  return E(E(_qt/* Slide.slideClass_ds1 */)[2]);
}), _qx/* slideClass25 */ = [0, _9w/* React.Elements.button_1 */, _qw/* Slide.slideClass_lvl2 */, _qv/* Slide.slideClass_lvl1 */, _qf/* Slide.slideClass26 */], _qy/* slideClass24 */ = [1, _qx/* Slide.slideClass25 */, _b/* GHC.Types.[] */], _qz/* slideClass23 */ = [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _qy/* Slide.slideClass24 */], _qA/* slideClass22 */ = [1, _qz/* Slide.slideClass23 */, _b/* GHC.Types.[] */], _qB/* slideClass36 */ = new T(function(){
  return [0, "width"];
}), _qC/* slideClass38 */ = new T(function(){
  return [1, "slider"];
}), _qD/* slideClass37 */ = [0, _9x/* React.Attrs.class_1 */, _qC/* Slide.slideClass38 */], _qE/* slideClass19 */ = new T(function(){
  return [1, "slider-container"];
}), _qF/* slideClass18 */ = [0, _9x/* React.Attrs.class_1 */, _qE/* Slide.slideClass19 */], _qG/* slideClass17 */ = [1, _qF/* Slide.slideClass18 */, _b/* GHC.Types.[] */], _qH/* slideClass_ds */ = new T(function(){
  var _qI = B(_94/* React.Types.$wseparateAttrs */(_qG/* Slide.slideClass17 */));
  return [0, _qI[1], _qI[2]];
}), _qJ/* slideClass_lvl19 */ = new T(function(){
  return E(E(_qH/* Slide.slideClass_ds */)[2]);
}), _qK/* slideClass_lvl20 */ = new T(function(){
  return E(E(_qH/* Slide.slideClass_ds */)[1]);
}), _qL/* slideClass16 */ = function(_qM, _qN){
  var _qO = new T(function(){
    return B(A(function(_qP){
      var _qQ = new T(function(){
        var _qR = B(_94/* React.Types.$wseparateAttrs */([1, _qD/* Slide.slideClass37 */, [1, [0, _a3/* React.Attrs.style_1 */, [4, E([1, [0, _qB/* Slide.slideClass36 */, new T(function(){
          if(!E(_qM)){
            var _qS = [0, 200+E(_qP)[1]];
          }else{
            var _qS = [0, E(_qP)[1]];
          }
          return _qS;
})], _b/* GHC.Types.[] */])]], _b/* GHC.Types.[] */]]));
        return [0, _qR[1], _qR[2]];
});
      return function(_qT){
        return [0, new T(function(){
          return B(_10/* GHC.Base.++ */(_qA/* Slide.slideClass22 */, [1, [0, _9k/* React.Elements.div_1 */, new T(function(){
            return E(E(_qQ)[2]);
}), new T(function(){
            return E(E(_qQ)[1]);
}), _qc/* Slide.slideClass20 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_qN, _qN]));
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _qJ/* Slide.slideClass_lvl19 */, _qK/* Slide.slideClass_lvl20 */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_qO)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_qO)[2]);
})];
}, _qU/* slideClass2 */ = [0, 0], _qV/* slideClass11 */ = [0, 1000], _qW/* paneWidth */ = [0, 200], _qX/* slideClass15 */ = [0, _qW/* Slide.paneWidth */, _qU/* Slide.slideClass2 */], _qY/* slideClass7 */ = function(_qZ){
  return [0];
}, _r0/* slideClass8 */ = function(_r1, _r2){
  return E(_r2);
}, _r3/* slideClass14 */ = [0, _b1/* React.Anim.$fAnimatableDouble */, _qV/* Slide.slideClass11 */, _qX/* Slide.slideClass15 */, _r0/* Slide.slideClass8 */, _9d/* React.Types.EaseInOutQuad */, _qY/* Slide.slideClass7 */], _r4/* slideClass13 */ = [1, _r3/* Slide.slideClass14 */, _b/* GHC.Types.[] */], _r5/* slideClass12 */ = [0, _78/* Slide.Closed */, _r4/* Slide.slideClass13 */], _r6/* Open */ = 0, _r7/* slideClass10 */ = [0, -200], _r8/* slideClass9 */ = [0, _r7/* Slide.slideClass10 */, _qU/* Slide.slideClass2 */], _r9/* slideClass6 */ = [0, _b1/* React.Anim.$fAnimatableDouble */, _qV/* Slide.slideClass11 */, _r8/* Slide.slideClass9 */, _r0/* Slide.slideClass8 */, _9d/* React.Types.EaseInOutQuad */, _qY/* Slide.slideClass7 */], _ra/* slideClass5 */ = [1, _r9/* Slide.slideClass6 */, _b/* GHC.Types.[] */], _rb/* slideClass4 */ = [0, _r6/* Slide.Open */, _ra/* Slide.slideClass5 */], _rc/* slideClass3 */ = function(_rd, _re){
  if(!E(_rd)){
    var _rf = E(_re);
    return E(_r5/* Slide.slideClass12 */);
  }else{
    var _rg = E(_re);
    return E(_rb/* Slide.slideClass4 */);
  }
}, _rh/* main2 */ = function(_ri, _){
  var _rj = E(_ri);
  if(!_rj[0]){
    return E(_pl/* Main.lvl */);
  }else{
    var _rk = E(_rj[2]);
    if(!_rk[0]){
      return E(_pl/* Main.lvl */);
    }else{
      var _rl = E(_rk[2]);
      if(!_rl[0]){
        return E(_pl/* Main.lvl */);
      }else{
        var _rm = E(_rl[2]);
        if(!_rm[0]){
          return E(_pl/* Main.lvl */);
        }else{
          var _rn = E(_rm[2]);
          if(!_rn[0]){
            return E(_pl/* Main.lvl */);
          }else{
            if(!E(_rn[2])[0]){
              var _ro = js_createClass(_q5/* Simple.simpleClass7 */), _rp = _ro, _rq = nMV(_pp/* Simple.simpleClass2 */), _rr = _rq, _rs = nMV(_r/* GHC.Tuple.() */), _rt = _rs, _ru = nMV(_b/* GHC.Types.[] */), _rv = _ru, _rw = nMV(_b/* GHC.Types.[] */), _rx = _rw, _ry = B(_6I/* React.Render.$wa */(_rj[1], _q5/* Simple.simpleClass7 */, _pq/* Simple.simpleClass6 */, [0, _rr], [0, _rt], [0, _rv], _rx, _)), _rz = _ry, _rA = js_createClass(_ff/* Circles.circlesClass9 */), _rB = _rA, _rC = nMV(_bI/* Circles.circlesClass6 */), _rD = _rC, _rE = nMV(_bu/* Circles.circlesClass3 */), _rF = _rE, _rG = nMV(_b/* GHC.Types.[] */), _rH = _rG, _rI = nMV(_bp/* Circles.circlesClass2 */), _rJ = _rI, _rK = B(_6I/* React.Render.$wa */(_rk[1], _ff/* Circles.circlesClass9 */, _df/* Circles.circlesClass8 */, [0, _rD], [0, _rF], [0, _rH], _rJ, _)), _rL = _rK, _rM = js_createClass(_oM/* Easing.easingClass29 */), _rN = _rM, _rO = nMV(_kM/* Easing.easingClass27 */), _rP = _rO, _rQ = nMV(_kJ/* Easing.easingClass2 */), _rR = _rQ, _rS = nMV(_b/* GHC.Types.[] */), _rT = _rS, _rU = nMV(_b/* GHC.Types.[] */), _rV = _rU, _rW = B(_6I/* React.Render.$wa */(_rl[1], _oM/* Easing.easingClass29 */, _lI/* Easing.easingClass28 */, [0, _rP], [0, _rR], [0, _rT], _rV, _)), _rX = _rW, _rY = js_createClass(_qL/* Slide.slideClass16 */), _rZ = _rY, _s0 = nMV(_78/* Slide.Closed */), _s1 = _s0, _s2 = nMV(_qU/* Slide.slideClass2 */), _s3 = _s2, _s4 = nMV(_b/* GHC.Types.[] */), _s5 = _s4, _s6 = nMV(_b/* GHC.Types.[] */), _s7 = _s6, _s8 = B(_6I/* React.Render.$wa */(_rm[1], _qL/* Slide.slideClass16 */, _rc/* Slide.slideClass3 */, [0, _s1], [0, _s3], [0, _s5], _s7, _)), _s9 = _s8, _sa = js_createClass(_a4/* Chain.chainClass17 */), _sb = _sa, _sc = nMV(_77/* Chain.Closed */), _sd = _sc, _se = nMV(_aP/* Chain.chainClass2 */), _sf = _se, _sg = nMV(_b/* GHC.Types.[] */), _sh = _sg, _si = nMV(_b/* GHC.Types.[] */), _sj = _si, _sk = B(_6I/* React.Render.$wa */(_rn[1], _a4/* Chain.chainClass17 */, _bj/* Chain.chainClass3 */, [0, _sd], [0, _sf], [0, _sh], _sj, _)), _sl = _sk;
              return _r/* GHC.Tuple.() */;
            }else{
              return E(_pl/* Main.lvl */);
            }
          }
        }
      }
    }
  }
}, _sm/* main12 */ = new T(function(){
  return B(unCStr("simple-demo"));
}), _sn/* main11 */ = new T(function(){
  return B(unCStr("circles-demo"));
}), _so/* main10 */ = new T(function(){
  return B(unCStr("easing-demo"));
}), _sp/* main8 */ = new T(function(){
  return B(unCStr("chain-demo"));
}), _sq/* main7 */ = [1, _sp/* Main.main8 */, _b/* GHC.Types.[] */], _sr/* main9 */ = new T(function(){
  return B(unCStr("slide-demo"));
}), _ss/* main6 */ = [1, _sr/* Main.main9 */, _sq/* Main.main7 */], _st/* main5 */ = [1, _so/* Main.main10 */, _ss/* Main.main6 */], _su/* main4 */ = [1, _sn/* Main.main11 */, _st/* Main.main5 */], _sv/* main3 */ = [1, _sm/* Main.main12 */, _su/* Main.main4 */], _sw/* toJSStr1 */ = function(_sx){
  return [0, toJSStr(E(_sx))];
}, _sy/* main_w2 */ = new T(function(){
  return B(_3g/* GHC.Base.map */(_sw/* GHC.HastePrim.toJSStr1 */, _sv/* Main.main3 */));
}), _sz/* findElems */ = function(_sA, _sB){
  while(1){
    var _sC = (function(_sD, _sE){
      var _sF = E(_sD);
      if(!_sF[0]){
        return [0];
      }else{
        var _sG = _sF[2], _sH = E(_sE);
        if(!_sH[0]){
          return [0];
        }else{
          var _sI = _sH[2];
          if(!E(_sH[1])[0]){
            return [1, _sF[1], new T(function(){
              return B(_sz/* Haste.DOM.JSString.findElems */(_sG, _sI));
})];
          }else{
            _sA = _sG;
            _sB = _sI;
            return null;
          }
        }
      }
    })(_sA, _sB);
    if(_sC!=null){
      return _sC;
    }
  }
}, _sJ/* lvl */ = new T(function(){
  return B(unAppCStr("[]", _b/* GHC.Types.[] */));
}), _sK/* lvl17 */ = [1, _18/* GHC.Show.showList__2 */, _b/* GHC.Types.[] */], _sL/* showl */ = function(_sM){
  var _sN = E(_sM);
  return _sN[0]==0 ? E(_sK/* Haste.DOM.JSString.lvl17 */) : [1, _17/* GHC.Show.showList__1 */, new T(function(){
    return B(_10/* GHC.Base.++ */(fromJSStr(E(_sN[1])[1]), new T(function(){
      return B(_sL/* Haste.DOM.JSString.showl */(_sN[2]));
})));
})];
}, _sO/* withElems1 */ = function(_sP, _sQ){
  return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ", new T(function(){
    var _sR = B(_sz/* Haste.DOM.JSString.findElems */(_sQ, _sP));
    return _sR[0]==0 ? E(_sJ/* Haste.DOM.JSString.lvl */) : [1, _19/* GHC.Show.showList__3 */, new T(function(){
      return B(_10/* GHC.Base.++ */(fromJSStr(E(_sR[1])[1]), new T(function(){
        return B(_sL/* Haste.DOM.JSString.showl */(_sR[2]));
})));
})];
}))));});
}, _sS/* main1 */ = function(_){
  var _sT = B(_c/* Main.main13 */(_sy/* Main.main_w2 */, _)), _sU = _sT;
  if(!B(_0/* GHC.List.any */(_9/* Data.Maybe.isNothing */, _sU))){
    return new F(function(){return _rh/* Main.main2 */(B(_3g/* GHC.Base.map */(_6/* Data.Maybe.fromJust */, _sU)), _);});
  }else{
    return new F(function(){return _sO/* Haste.DOM.JSString.withElems1 */(_sU, _sy/* Main.main_w2 */);});
  }
}, _sV/* main */ = function(_){
  return new F(function(){return _sS/* Main.main1 */(_);});
};

var hasteMain = function() {B(A(_sV, [0]));};window.onload = hasteMain;