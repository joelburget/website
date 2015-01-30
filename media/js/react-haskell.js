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
    var _62 = B(_j/* Data.List.$wmapAccumL */(function(_63, _64){
      return new F(function(){return A(_5L,[_64, _63]);});
    }, _5X, _5R));
    return [0, _62[1], _62[2]];
}), _65 = new T(function(){
    return E(E(_61)[1]);
}), _66 = new T(function(){
    var _67 = function(_68){
      var _69 = E(_68);
      if(!_69[0]){
        return E(new T(function(){
          var _6a = function(_6b){
            var _6c = E(_6b);
            if(!_6c[0]){
              return E(_5b/* React.Render.poly_z */);
            }else{
              var _6d = function(_6e){
                var _6f = E(_6e);
                if(!_6f[0]){
                  return E(new T(function(){
                    return B(_6a(_6c[2]));
}));
                }else{
                  var _6g = E(_5J), _6h = _6g[1], _6i = E(_6f[1]), _6j = new T(function(){
                    return B(_6d(_6f[2]));
});
                  return _6h+E(_6i[2])[1]<=_6h ? [0, new T(function(){
                    return E(E(_6j)[1]);
}), [1, [0, _6i, _6g], new T(function(){
                    return E(E(_6j)[2]);
})]] : [0, [1, [0, _6i, _6g], new T(function(){
                    return E(E(_6j)[1]);
})], new T(function(){
                    return E(E(_6j)[2]);
})];
                }
              };
              return new F(function(){return _6d(_6c[1]);});
            }
          };
          return B(_6a(E(_61)[2]));
}));
      }else{
        var _6k = E(_69[1]), _6l = new T(function(){
          return B(_67(_69[2]));
});
        return E(_6k[2])[1]+E(E(_6k[1])[2])[1]<=E(_5J)[1] ? [0, new T(function(){
          return E(E(_6l)[1]);
}), [1, _6k, new T(function(){
          return E(E(_6l)[2]);
})]] : [0, [1, _6k, new T(function(){
          return E(E(_6l)[1]);
})], new T(function(){
          return E(E(_6l)[2]);
})];
      }
    };
    return B(_67(_5U));
}), _6m = new T(function(){
    return E(E(_66)[1]);
}), _6n = new T(function(){
    return E(E(_66)[2]);
}), _6o = new T(function(){
    return B(_5r/* React.Anim.stepRunningAnims */(_60, B(_s/* GHC.List.foldr2 */(_4X/* React.Render.lvl3 */, new T(function(){
      var _6p = function(_6q){
        var _6r = E(_6q);
        return _6r[0]==0 ? E(_5c/* React.Render.poly_z1 */) : function(_6s){
          var _6t = E(_6s);
          return _6t[0]==0 ? [0] : [1, [0, _6t[1], new T(function(){
            var _6u = E(_6r[1]);
            return [0, (E(_5J)[1]-E(_6u[2])[1])/E(E(_6u[1])[2])[1]];
})], new T(function(){
            return B(A(new T(function(){
              return B(_6p(_6r[2]));
}),[_6t[2]]));
})];
        };
      };
      return B(A(_6p,[_6m, _6m]));
}), _6n, _4S/* React.Render.lvl1 */))));
}), _6v = B(A(_5K,[_65, _6o])), _6w = E(_6v[1]);
  if(!_6w[0]){
    return E(_1U/* React.Interpret.interpret1 */);
  }else{
    var _6x = E(_6v[2]), _6y = B(_3q/* React.Interpret.interpret2 */(function(_6z, _){
      var _6A = rMV(_5P), _6B = _6A, _ = wMV(_5P, [1, _6z, _6B]);
      return _r/* GHC.Tuple.() */;
    }, _6w[1], _)), _6C = _6y, _6D = js_render(E(_6C)[1], E(_5I)[1]), _ = wMV(_5V, _65), _ = wMV(_5Y, _6o), _ = wMV(_5S, _6m), _ = wMV(_5P, new T(function(){
      return B(_51/* Data.Maybe.mapMaybe */(_4V/* React.Render.lvl2 */, _6n));
}));
    return _r/* GHC.Tuple.() */;
  }
}, _6E/* $wlen */ = function(_6F, _6G){
  while(1){
    var _6H = E(_6F);
    if(!_6H[0]){
      return E(_6G);
    }else{
      _6F = _6H[2];
      var _6I = _6G+1|0;
      _6G = _6I;
      continue;
    }
  }
}, _6J/* render2 */ = [0, 0], _6K/* $wa */ = function(_6L, _6M, _6N, _6O, _6P, _6Q, _6R, _){
  var _6S = function(_6T, _){
    var _6U = rMV(_6R), _6V = _6U, _6W = E(_6Q), _6X = rMV(_6W[1]), _6Y = _6X;
    if((B(_6E/* GHC.List.$wlen */(_6V, 0))+B(_6E/* GHC.List.$wlen */(_6Y, 0))|0)<=0){
      var _6Z = js_raf(_6S), _70 = _6Z;
      return _r/* GHC.Tuple.() */;
    }else{
      var _71 = B(_5H/* React.Render.$wa1 */(_6L, _6T, _6M, _6N, _6O, _6P, _6W, _6R, _)), _72 = _71, _73 = js_raf(_6S), _74 = _73;
      return _r/* GHC.Tuple.() */;
    }
  }, _75 = B(_5H/* React.Render.$wa1 */(_6L, _6J/* React.Render.render2 */, _6M, _6N, _6O, _6P, _6Q, _6R, _)), _76 = _75, _77 = js_raf(_6S), _78 = _77;
  return [0, _78];
}, _79/* Closed */ = 1, _7a/* Closed */ = 1, _7b/* $fAnimatableColor2 */ = [0, 1], _7c/* $fAnimatableColor_$canimZero1 */ = [0, 0], _7d/* lvl */ = new T(function(){
  return B(unCStr("Negative exponent"));
}), _7e/* $s^1 */ = new T(function(){
  return B(err(_7d/* Numeric.lvl */));
}), _7f/* $wg1 */ = function(_7g, _7h, _7i){
  while(1){
    if(!(_7h%2)){
      var _7j = _7g*_7g, _7k = quot(_7h, 2);
      _7g = _7j;
      _7h = _7k;
      continue;
    }else{
      var _7l = E(_7h);
      if(_7l==1){
        return _7g*_7i;
      }else{
        var _7j = _7g*_7g;
        _7h = quot(_7l-1|0, 2);
        var _7m = _7g*_7i;
        _7g = _7j;
        _7i = _7m;
        continue;
      }
    }
  }
}, _7n/* $wf */ = function(_7o, _7p){
  while(1){
    if(!(_7p%2)){
      var _7q = _7o*_7o, _7r = quot(_7p, 2);
      _7o = _7q;
      _7p = _7r;
      continue;
    }else{
      var _7s = E(_7p);
      if(_7s==1){
        return E(_7o);
      }else{
        return new F(function(){return _7f/* Numeric.$wg1 */(_7o*_7o, quot(_7s-1|0, 2), _7o);});
      }
    }
  }
}, _7t/* $w$s^^ */ = function(_7u, _7v){
  if(_7v<0){
    var _7w =  -_7v;
    if(_7w>=0){
      var _7x = E(_7w);
      return _7x==0 ? 1 : 1/B(_7n/* Numeric.$wf */(E(_7u)[1], _7x));
    }else{
      return E(_7e/* Numeric.$s^1 */);
    }
  }else{
    if(_7v>=0){
      var _7y = E(_7v);
      if(!_7y){
        return 1;
      }else{
        return new F(function(){return _7n/* Numeric.$wf */(E(_7u)[1], _7y);});
      }
    }else{
      return E(_7e/* Numeric.$s^1 */);
    }
  }
}, _7z/* $weaseInOutPow */ = function(_7A, _7B){
  return _7B>=0.5 ? 1-B(_7t/* React.Anim.$w$s^^ */([0, 1-_7B+(1-_7B)], _7A))/2 : B(_7t/* React.Anim.$w$s^^ */([0, _7B+_7B], _7A))/2;
}, _7C/* EaseInBounce */ = [16], _7D/* EaseOutBounce */ = [17], _7E/* elastic */ = function(_7F){
  var _7G = E(_7F)[1];
  return [0, Math.pow(2,  -(10*_7G))*Math.sin((_7G-7.5e-2)*20.943951023931955)+1];
}, _7H/* js_bezier */ = function(_7I, _7J, _7K, _7L, _7M){
  var _7N = js_bezier(E(_7I)[1], E(_7J)[1], E(_7K)[1], E(_7L)[1], E(_7M)[1]), _7O = _7N;
  return [0, _7O];
}, _7P/* easeDouble */ = function(_7Q, _7R){
  while(1){
    var _7S = (function(_7T, _7U){
      var _7V = E(_7T);
      switch(_7V[0]){
        case 0:
          return E(_7U);
        case 1:
          return [0, B(_7t/* React.Anim.$w$s^^ */(_7U, 2))];
        case 2:
          return [0, 1-B(_7t/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7U)[1]];
}), 2))];
        case 3:
          return [0, B(_7z/* React.Anim.$weaseInOutPow */(2, E(_7U)[1]))];
        case 4:
          return [0, B(_7t/* React.Anim.$w$s^^ */(_7U, 3))];
        case 5:
          return [0, 1-B(_7t/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7U)[1]];
}), 3))];
        case 6:
          return [0, B(_7z/* React.Anim.$weaseInOutPow */(3, E(_7U)[1]))];
        case 7:
          return [0, B(_7t/* React.Anim.$w$s^^ */(_7U, 4))];
        case 8:
          return [0, 1-B(_7t/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7U)[1]];
}), 4))];
        case 9:
          return [0, B(_7z/* React.Anim.$weaseInOutPow */(4, E(_7U)[1]))];
        case 10:
          return [0, B(_7t/* React.Anim.$w$s^^ */(_7U, 5))];
        case 11:
          return [0, 1-B(_7t/* React.Anim.$w$s^^ */(new T(function(){
            return [0, 1-E(_7U)[1]];
}), 5))];
        case 12:
          return [0, B(_7z/* React.Anim.$weaseInOutPow */(5, E(_7U)[1]))];
        case 13:
          var _7W = 1-E(_7U)[1];
          return [0, 1-(Math.pow(2,  -(10*_7W))*Math.sin((_7W-7.5e-2)*20.943951023931955)+1)];
        case 14:
          return new F(function(){return _7E/* React.Anim.elastic */(_7U);});
          break;
        case 15:
          var _7X = E(_7U)[1];
          if(_7X>=0.5){
            var _7Y = 1-_7X+(1-_7X);
            return [0, 1-(Math.pow(2,  -(10*_7Y))*Math.sin((_7Y-7.5e-2)*20.943951023931955)+1)/2];
          }else{
            var _7Z = _7X+_7X;
            return [0, (Math.pow(2,  -(10*_7Z))*Math.sin((_7Z-7.5e-2)*20.943951023931955)+1)/2];
          }
          break;
        case 16:
          _7Q = _7D/* React.Types.EaseOutBounce */;
          _7R = new T(function(){
            return [0, 1-E(_7U)[1]];
});
          return null;
        case 17:
          var _80 = E(_7U)[1];
          if(_80>=0.36363636363636365){
            if(_80>=0.7272727272727273){
              if(_80>=0.9090909090909091){
                var _81 = _80-0.9545454545454546;
                return [0, 7.5625*_81*_81+0.984375];
              }else{
                var _82 = _80-0.8181818181818182;
                return [0, 7.5625*_82*_82+0.9375];
              }
            }else{
              var _83 = _80-0.5454545454545454;
              return [0, 7.5625*_83*_83+0.75];
            }
          }else{
            return [0, 7.5625*_80*_80];
          }
          break;
        case 18:
          var _84 = E(_7U)[1];
          return _84>=0.5 ? [0, 1-B(_7P/* React.Anim.easeDouble */(_7D/* React.Types.EaseOutBounce */, [0, 1-_84+(1-_84)]))[1]/2] : [0, B(_7P/* React.Anim.easeDouble */(_7C/* React.Types.EaseInBounce */, [0, _84+_84]))[1]/2];
        case 19:
          return new F(function(){return _7H/* React.Imports.js_bezier */(_7V[1], _7V[2], _7V[3], _7V[4], _7U);});
          break;
        case 20:
          var _85 = js_bezier(0.47, 0, 0.745, 0.715, E(_7U)[1]), _86 = _85;
          return [0, _86];
        default:
          var _87 = js_bezier(0.39, 0.575, 0.565, 1, E(_7U)[1]), _88 = _87;
          return [0, _88];
      }
    })(_7Q, _7R);
    if(_7S!=null){
      return _7S;
    }
  }
}, _89/* intLerp */ = function(_8a, _8b, _8c){
  var _8d = E(_8a)[1], _8e = _8d+(E(_8b)[1]-_8d|0)*E(_8c)[1], _8f = _8e&4294967295;
  return _8e>=_8f ? [0, _8f] : [0, _8f-1|0];
}, _8g/* $w$cinterpolate */ = function(_8h, _8i, _8j, _8k, _8l, _8m, _8n, _8o){
  var _8p = new T(function(){
    var _8q = E(_8o), _8r = _8q[1];
    if(_8r>0){
      var _8s = _8r<1 ? B(_7P/* React.Anim.easeDouble */(_8h, _8q)) : E(_7b/* React.Anim.$fAnimatableColor2 */);
    }else{
      var _8s = E(_7c/* React.Anim.$fAnimatableColor_$canimZero1 */);
    }
    var _8t = _8s, _8u = _8t;
    return _8u;
});
  return [0, new T(function(){
    return B(_89/* React.Anim.intLerp */(_8i, _8l, _8p));
}), new T(function(){
    return B(_89/* React.Anim.intLerp */(_8j, _8m, _8p));
}), new T(function(){
    return B(_89/* React.Anim.intLerp */(_8k, _8n, _8p));
})];
}, _8v/* $fShow(,)1 */ = function(_8w, _8x, _8y){
  return new F(function(){return A(_8w,[[1, _17/* GHC.Show.showList__1 */, new T(function(){
    return B(A(_8x,[_8y]));
})]]);});
}, _8z/* shows12 */ = [0, 41], _8A/* $fShowColor2 */ = [1, _8z/* GHC.Show.shows12 */, _b/* GHC.Types.[] */], _8B/* itos */ = function(_8C, _8D){
  var _8E = jsShowI(_8C), _8F = _8E;
  return new F(function(){return _10/* GHC.Base.++ */(fromJSStr(_8F), _8D);});
}, _8G/* shows13 */ = [0, 40], _8H/* $wshowSignedInt */ = function(_8I, _8J, _8K){
  if(_8J>=0){
    return new F(function(){return _8B/* GHC.Show.itos */(_8J, _8K);});
  }else{
    return _8I<=6 ? B(_8B/* GHC.Show.itos */(_8J, _8K)) : [1, _8G/* GHC.Show.shows13 */, new T(function(){
      var _8L = jsShowI(_8J), _8M = _8L;
      return B(_10/* GHC.Base.++ */(fromJSStr(_8M), [1, _8z/* GHC.Show.shows12 */, _8K]));
})];
  }
}, _8N/* lvl4 */ = new T(function(){
  return B(unCStr(": empty list"));
}), _8O/* prel_list_str */ = new T(function(){
  return B(unCStr("Prelude."));
}), _8P/* errorEmptyList */ = function(_8Q){
  return new F(function(){return err(B(_10/* GHC.Base.++ */(_8O/* GHC.List.prel_list_str */, new T(function(){
    return B(_10/* GHC.Base.++ */(_8Q, _8N/* GHC.List.lvl4 */));
}))));});
}, _8R/* lvl5 */ = new T(function(){
  return B(unCStr("foldr1"));
}), _8S/* lvl6 */ = new T(function(){
  return B(_8P/* GHC.List.errorEmptyList */(_8R/* GHC.List.lvl5 */));
}), _8T/* foldr1 */ = function(_8U, _8V){
  var _8W = E(_8V);
  if(!_8W[0]){
    return E(_8S/* GHC.List.lvl6 */);
  }else{
    var _8X = _8W[1], _8Y = E(_8W[2]);
    if(!_8Y[0]){
      return E(_8X);
    }else{
      return new F(function(){return A(_8U,[_8X, new T(function(){
        return B(_8T/* GHC.List.foldr1 */(_8U, _8Y));
})]);});
    }
  }
}, _8Z/* $w$cshow */ = function(_90, _91, _92){
  return new F(function(){return unAppCStr("rgb", [1, _8G/* GHC.Show.shows13 */, new T(function(){
    return B(A(_8T/* GHC.List.foldr1 */,[_8v/* GHC.Show.$fShow(,)1 */, [1, function(_93){
      return new F(function(){return _8H/* GHC.Show.$wshowSignedInt */(0, E(_90)[1], _93);});
    }, [1, function(_94){
      return new F(function(){return _8H/* GHC.Show.$wshowSignedInt */(0, E(_91)[1], _94);});
    }, [1, function(_95){
      return new F(function(){return _8H/* GHC.Show.$wshowSignedInt */(0, E(_92)[1], _95);});
    }, _b/* GHC.Types.[] */]]], _8A/* React.Anim.$fShowColor2 */]));
})]);});
}, _96/* $wseparateAttrs */ = function(_97){
  var _98 = E(_97);
  if(!_98[0]){
    return [0, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */];
  }else{
    var _99 = _98[2], _9a = E(_98[1]);
    if(!_9a[0]){
      var _9b = new T(function(){
        var _9c = B(_96/* React.Types.$wseparateAttrs */(_99));
        return [0, _9c[1], _9c[2]];
});
      return [0, new T(function(){
        return E(E(_9b)[1]);
}), [1, [0, _9a[1], _9a[2]], new T(function(){
        return E(E(_9b)[2]);
})]];
    }else{
      var _9d = new T(function(){
        var _9e = B(_96/* React.Types.$wseparateAttrs */(_99));
        return [0, _9e[1], _9e[2]];
});
      return [0, [1, _9a[1], new T(function(){
        return E(E(_9d)[1]);
})], new T(function(){
        return E(E(_9d)[2]);
})];
    }
  }
}, _9f/* EaseInOutQuad */ = [3], _9g/* Linear */ = [0], _9h/* a */ = [0, 74], _9i/* a1 */ = [0, 178], _9j/* a10 */ = [2, _b/* GHC.Types.[] */], _9k/* a11 */ = [1, _9j/* Chain.a10 */, _b/* GHC.Types.[] */], _9l/* a2 */ = [0, 182], _9m/* div_1 */ = new T(function(){
  return [0, "div"];
}), _9n/* finalHeight */ = [0, 200], _9o/* finalWidth */ = [0, 400], _9p/* lvl */ = [0, _9o/* Chain.finalWidth */, _9n/* Chain.finalHeight */], _9q/* startHeight */ = [0, 20], _9r/* lvl1 */ = [0, _9q/* Chain.startHeight */, _9q/* Chain.startHeight */], _9s/* lvl10 */ = new T(function(){
  return [0, "width"];
}), _9t/* lvl11 */ = new T(function(){
  return [0, "height"];
}), _9u/* lvl12 */ = new T(function(){
  return [0, "backgroundColor"];
}), _9v/* a6 */ = new T(function(){
  return B(unCStr("toggle"));
}), _9w/* a7 */ = [2, _9v/* Chain.a6 */], _9x/* a8 */ = [1, _9w/* Chain.a7 */, _b/* GHC.Types.[] */], _9y/* button_1 */ = new T(function(){
  return [0, "button"];
}), _9z/* class_1 */ = new T(function(){
  return [0, "className"];
}), _9A/* lvl2 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _9B/* lvl3 */ = [0, _9z/* React.Attrs.class_1 */, _9A/* Chain.lvl2 */], _9C/* ClickEvt */ = 4, _9D/* Toggle */ = 0, _9E/* x */ = [1, _9D/* Chain.Toggle */], _9F/* lvl4 */ = function(_9G){
  var _9H = js_parseMouseEvent(E(_9G)[1]), _9I = _9H, _9J = E(_9I);
  return E(_9E/* Chain.x */);
}, _9K/* lvl5 */ = [0, _9F/* Chain.lvl4 */, _9C/* React.Types.ClickEvt */], _9L/* lvl6 */ = [1, _9K/* Chain.lvl5 */], _9M/* lvl7 */ = [1, _9L/* Chain.lvl6 */, _b/* GHC.Types.[] */], _9N/* lvl8 */ = [1, _9B/* Chain.lvl3 */, _9M/* Chain.lvl7 */], _9O/* ds */ = new T(function(){
  var _9P = B(_96/* React.Types.$wseparateAttrs */(_9N/* Chain.lvl8 */));
  return [0, _9P[1], _9P[2]];
}), _9Q/* lvl19 */ = new T(function(){
  return E(E(_9O/* Chain.ds */)[2]);
}), _9R/* lvl20 */ = new T(function(){
  return E(E(_9O/* Chain.ds */)[1]);
}), _9S/* lvl13 */ = [0, _9y/* React.Elements.button_1 */, _9Q/* Chain.lvl19 */, _9R/* Chain.lvl20 */, _9x/* Chain.a8 */], _9T/* lvl14 */ = [1, _9S/* Chain.lvl13 */, _b/* GHC.Types.[] */], _9U/* lvl15 */ = [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _9T/* Chain.lvl14 */], _9V/* lvl16 */ = [1, _9U/* Chain.lvl15 */, _b/* GHC.Types.[] */], _9W/* a3 */ = new T(function(){
  return [1, "chain-container"];
}), _9X/* a4 */ = [0, _9z/* React.Attrs.class_1 */, _9W/* Chain.a3 */], _9Y/* a5 */ = [1, _9X/* Chain.a4 */, _b/* GHC.Types.[] */], _9Z/* ds1 */ = new T(function(){
  var _a0 = B(_96/* React.Types.$wseparateAttrs */(_9Y/* Chain.a5 */));
  return [0, _a0[1], _a0[2]];
}), _a1/* lvl17 */ = new T(function(){
  return E(E(_9Z/* Chain.ds1 */)[2]);
}), _a2/* lvl18 */ = new T(function(){
  return E(E(_9Z/* Chain.ds1 */)[1]);
}), _a3/* a9 */ = new T(function(){
  return [1, "chaining"];
}), _a4/* lvl9 */ = [0, _9z/* React.Attrs.class_1 */, _a3/* Chain.a9 */], _a5/* style_1 */ = new T(function(){
  return [0, "style"];
}), _a6/* chainClass17 */ = function(_a7, _a8){
  var _a9 = new T(function(){
    return B(A(function(_aa){
      var _ab = new T(function(){
        var _ac = new T(function(){
          var _ad = E(_aa);
          if(!E(_a7)){
            var _ae = [0, _ad[1]+1];
          }else{
            var _ae = E(_ad);
          }
          var _af = _ae;
          return _af;
}), _ag = new T(function(){
          var _ah = E(E(_ac)[1]);
          if(!_ah){
            var _ai = E(_9r/* Chain.lvl1 */);
          }else{
            if(_ah>=0.3333333333333333){
              if(_ah>=0.6666666666666666){
                var _aj = _ah>=1 ? E(_9p/* Chain.lvl */) : [0, _9o/* Chain.finalWidth */, new T(function(){
                  var _ak = (_ah-0.3333333333333333)*1.5;
                  if(_ak>0){
                    if(_ak<1){
                      var _al = [0, 20+B(_7P/* React.Anim.easeDouble */(_9f/* React.Types.EaseInOutQuad */, [0, _ak]))[1]*180];
                    }else{
                      var _al = E(_9n/* Chain.finalHeight */);
                    }
                    var _am = _al, _an = _am;
                  }else{
                    var _an = E(_9q/* Chain.startHeight */);
                  }
                  var _ao = _an, _ap = _ao, _aq = _ap;
                  return _aq;
})];
              }else{
                var _aj = [0, new T(function(){
                  var _ar = _ah*1.5;
                  if(_ar>0){
                    if(_ar<1){
                      var _as = [0, 20+B(_7P/* React.Anim.easeDouble */(_9f/* React.Types.EaseInOutQuad */, [0, _ar]))[1]*380];
                    }else{
                      var _as = E(_9o/* Chain.finalWidth */);
                    }
                    var _at = _as, _au = _at;
                  }else{
                    var _au = E(_9q/* Chain.startHeight */);
                  }
                  var _av = _au, _aw = _av;
                  return _aw;
}), new T(function(){
                  var _ax = (_ah-0.3333333333333333)*1.5;
                  if(_ax>0){
                    if(_ax<1){
                      var _ay = [0, 20+B(_7P/* React.Anim.easeDouble */(_9f/* React.Types.EaseInOutQuad */, [0, _ax]))[1]*180];
                    }else{
                      var _ay = E(_9n/* Chain.finalHeight */);
                    }
                    var _az = _ay, _aA = _az;
                  }else{
                    var _aA = E(_9q/* Chain.startHeight */);
                  }
                  var _aB = _aA, _aC = _aB, _aD = _aC;
                  return _aD;
})];
              }
              var _aE = _aj, _aF = _aE;
            }else{
              var _aF = [0, new T(function(){
                var _aG = _ah*1.5;
                if(_aG>0){
                  if(_aG<1){
                    var _aH = [0, 20+B(_7P/* React.Anim.easeDouble */(_9f/* React.Types.EaseInOutQuad */, [0, _aG]))[1]*380];
                  }else{
                    var _aH = E(_9o/* Chain.finalWidth */);
                  }
                  var _aI = _aH, _aJ = _aI;
                }else{
                  var _aJ = E(_9q/* Chain.startHeight */);
                }
                var _aK = _aJ, _aL = _aK;
                return _aL;
}), _9q/* Chain.startHeight */];
            }
            var _aM = _aF, _ai = _aM;
          }
          var _aN = _ai;
          return _aN;
}), _aO = B(_96/* React.Types.$wseparateAttrs */([1, _a4/* Chain.lvl9 */, [1, [0, _a5/* React.Attrs.style_1 */, [4, E([1, [0, _9s/* Chain.lvl10 */, new T(function(){
          return [0, E(E(_ag)[1])[1]];
})], [1, [0, _9t/* Chain.lvl11 */, new T(function(){
          return [0, E(E(_ag)[2])[1]];
})], [1, [0, _9u/* Chain.lvl12 */, new T(function(){
          var _aP = B(_8g/* React.Anim.$w$cinterpolate */(_9g/* React.Types.Linear */, _9h/* Chain.a */, _9h/* Chain.a */, _9l/* Chain.a2 */, _9h/* Chain.a */, _9i/* Chain.a1 */, _9l/* Chain.a2 */, _ac));
          return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(_aP[1], _aP[2], _aP[3])))];
})], _b/* GHC.Types.[] */]]])]], _b/* GHC.Types.[] */]]));
        return [0, _aO[1], _aO[2]];
});
      return function(_aQ){
        return [0, new T(function(){
          return B(_10/* GHC.Base.++ */(_9V/* Chain.lvl16 */, [1, [0, _9m/* React.Elements.div_1 */, new T(function(){
            return E(E(_ab)[2]);
}), new T(function(){
            return E(E(_ab)[1]);
}), _9k/* Chain.a11 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_a8, _a8]));
});
  return [0, [1, [0, _9m/* React.Elements.div_1 */, _a1/* Chain.lvl17 */, _a2/* Chain.lvl18 */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_a9)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_a9)[2]);
})];
}, _aR/* chainClass2 */ = [0, 0], _aS/* $w$cinterpolate1 */ = function(_aT, _aU, _aV, _aW){
  if(_aW>0){
    if(_aW<1){
      var _aX = E(_aU)[1];
      return [0, _aX+B(_7P/* React.Anim.easeDouble */(_aT, [0, _aW]))[1]*(E(_aV)[1]-_aX)];
    }else{
      return E(_aV);
    }
  }else{
    return E(_aU);
  }
}, _aY/* $fAnimatableDouble_$cinterpolate */ = function(_aZ, _b0, _b1, _b2){
  return new F(function(){return _aS/* React.Anim.$w$cinterpolate1 */(_aZ, _b0, _b1, E(_b2)[1]);});
}, _b3/* $fAnimatableDouble */ = [0, _aY/* React.Anim.$fAnimatableDouble_$cinterpolate */, _4x/* GHC.Float.plusDouble */, _4s/* GHC.Float.minusDouble */, _7c/* React.Anim.$fAnimatableColor_$canimZero1 */], _b4/* chainClass11 */ = [0, 1000], _b5/* chainClass16 */ = [0, 1], _b6/* chainClass15 */ = [0, _b5/* Chain.chainClass16 */, _aR/* Chain.chainClass2 */], _b7/* chainClass7 */ = function(_b8){
  return [0];
}, _b9/* chainClass8 */ = function(_ba, _bb){
  return E(_bb);
}, _bc/* chainClass14 */ = [0, _b3/* React.Anim.$fAnimatableDouble */, _b4/* Chain.chainClass11 */, _b6/* Chain.chainClass15 */, _b9/* Chain.chainClass8 */, _9f/* React.Types.EaseInOutQuad */, _b7/* Chain.chainClass7 */], _bd/* chainClass13 */ = [1, _bc/* Chain.chainClass14 */, _b/* GHC.Types.[] */], _be/* chainClass12 */ = [0, _79/* Chain.Closed */, _bd/* Chain.chainClass13 */], _bf/* Open */ = 0, _bg/* chainClass10 */ = [0, -1], _bh/* chainClass9 */ = [0, _bg/* Chain.chainClass10 */, _aR/* Chain.chainClass2 */], _bi/* chainClass6 */ = [0, _b3/* React.Anim.$fAnimatableDouble */, _b4/* Chain.chainClass11 */, _bh/* Chain.chainClass9 */, _b9/* Chain.chainClass8 */, _9f/* React.Types.EaseInOutQuad */, _b7/* Chain.chainClass7 */], _bj/* chainClass5 */ = [1, _bi/* Chain.chainClass6 */, _b/* GHC.Types.[] */], _bk/* chainClass4 */ = [0, _bf/* Chain.Open */, _bj/* Chain.chainClass5 */], _bl/* chainClass3 */ = function(_bm, _bn){
  var _bo = E(_bm);
  return E(_bn)==0 ? E(_be/* Chain.chainClass12 */) : E(_bk/* Chain.chainClass4 */);
}, _bp/* RepeatingFlash */ = [1], _bq/* circlesClass2 */ = [1, _bp/* Circles.RepeatingFlash */, _b/* GHC.Types.[] */], _br/* $fAnimatableColor1 */ = [0, 0], _bs/* $fAnimatableColor_$canimZero */ = [0, _br/* React.Anim.$fAnimatableColor1 */, _br/* React.Anim.$fAnimatableColor1 */, _br/* React.Anim.$fAnimatableColor1 */], _bt/* circlesClass5 */ = [0, 0], _bu/* circlesClass4 */ = [0, _bt/* Circles.circlesClass5 */, _bt/* Circles.circlesClass5 */], _bv/* circlesClass3 */ = [0, _bs/* React.Anim.$fAnimatableColor_$canimZero */, _bs/* React.Anim.$fAnimatableColor_$canimZero */, _bs/* React.Anim.$fAnimatableColor_$canimZero */, _bs/* React.Anim.$fAnimatableColor_$canimZero */, _bu/* Circles.circlesClass4 */], _bw/* C1 */ = 0, _bx/* C3 */ = 2, _by/* C2 */ = 1, _bz/* C4 */ = 3, _bA/* lvl41 */ = [1, _bz/* Circles.C4 */, _b/* GHC.Types.[] */], _bB/* lvl42 */ = [1, _by/* Circles.C2 */, _bA/* Circles.lvl41 */], _bC/* lvl43 */ = [1, _bx/* Circles.C3 */, _bB/* Circles.lvl42 */], _bD/* lvl44 */ = [1, _bw/* Circles.C1 */, _bC/* Circles.lvl43 */], _bE/* circlesClass_xs' */ = new T(function(){
  return B(_10/* GHC.Base.++ */(_bD/* Circles.lvl44 */, _bE/* Circles.circlesClass_xs' */));
}), _bF/* lvl10 */ = new T(function(){
  return B(unCStr("tail"));
}), _bG/* tail1 */ = new T(function(){
  return B(_8P/* GHC.List.errorEmptyList */(_bF/* GHC.List.lvl10 */));
}), _bH/* circlesClass7 */ = new T(function(){
  var _bI = E(_bE/* Circles.circlesClass_xs' */);
  return _bI[0]==0 ? E(_bG/* GHC.List.tail1 */) : E(_bI[2]);
}), _bJ/* circlesClass6 */ = [0, _bw/* Circles.C1 */, _bH/* Circles.circlesClass7 */], _bK/* $fAnimatable(,)_$canimAdd */ = function(_bL, _bM, _bN, _bO){
  var _bP = E(_bN), _bQ = E(_bO);
  return [0, new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_bL, _bP[1], _bQ[1]]));
}), new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_bM, _bP[2], _bQ[2]]));
})];
}, _bR/* animSub */ = function(_bS){
  return E(E(_bS)[3]);
}, _bT/* $fAnimatable(,)_$canimSub */ = function(_bU, _bV, _bW, _bX){
  var _bY = E(_bW), _bZ = E(_bX);
  return [0, new T(function(){
    return B(A(_bR/* React.Types.animSub */,[_bU, _bY[1], _bZ[1]]));
}), new T(function(){
    return B(A(_bR/* React.Types.animSub */,[_bV, _bY[2], _bZ[2]]));
})];
}, _c0/* $fAnimatable(,)_$canimZero */ = function(_c1, _c2){
  return [0, new T(function(){
    return B(_5n/* React.Types.animZero */(_c1));
}), new T(function(){
    return B(_5n/* React.Types.animZero */(_c2));
})];
}, _c3/* $fAnimatable(,)_$cinterpolate */ = function(_c4, _c5, _c6, _c7, _c8, _c9){
  var _ca = E(_c7), _cb = E(_c8);
  return [0, new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_c4, _c6, _ca[1], _cb[1], _c9]));
}), new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_c5, _c6, _ca[2], _cb[2], _c9]));
})];
}, _cc/* $fAnimatable(,) */ = function(_cd, _ce){
  return [0, function(_cf, _cg, _ch, _ci){
    return new F(function(){return _c3/* React.Anim.$fAnimatable(,)_$cinterpolate */(_cd, _ce, _cf, _cg, _ch, _ci);});
  }, function(_ch, _ci){
    return new F(function(){return _bK/* React.Anim.$fAnimatable(,)_$canimAdd */(_cd, _ce, _ch, _ci);});
  }, function(_ch, _ci){
    return new F(function(){return _bT/* React.Anim.$fAnimatable(,)_$canimSub */(_cd, _ce, _ch, _ci);});
  }, new T(function(){
    return B(_c0/* React.Anim.$fAnimatable(,)_$canimZero */(_cd, _ce));
})];
}, _cj/* $dAnimatable */ = new T(function(){
  return B(_cc/* React.Anim.$fAnimatable(,) */(_b3/* React.Anim.$fAnimatableDouble */, _b3/* React.Anim.$fAnimatableDouble */));
}), _ck/* $fNumInt_$c+ */ = function(_cl, _cm){
  return [0, E(_cl)[1]+E(_cm)[1]|0];
}, _cn/* $fAnimatableColor_$canimAdd */ = function(_co, _cp){
  var _cq = E(_co), _cr = E(_cp);
  return [0, new T(function(){
    return B(_ck/* GHC.Num.$fNumInt_$c+ */(_cq[1], _cr[1]));
}), new T(function(){
    return B(_ck/* GHC.Num.$fNumInt_$c+ */(_cq[2], _cr[2]));
}), new T(function(){
    return B(_ck/* GHC.Num.$fNumInt_$c+ */(_cq[3], _cr[3]));
})];
}, _cs/* $fNumInt_$c- */ = function(_ct, _cu){
  return [0, E(_ct)[1]-E(_cu)[1]|0];
}, _cv/* $fAnimatableColor_$canimSub */ = function(_cw, _cx){
  var _cy = E(_cw), _cz = E(_cx);
  return [0, new T(function(){
    return B(_cs/* GHC.Num.$fNumInt_$c- */(_cy[1], _cz[1]));
}), new T(function(){
    return B(_cs/* GHC.Num.$fNumInt_$c- */(_cy[2], _cz[2]));
}), new T(function(){
    return B(_cs/* GHC.Num.$fNumInt_$c- */(_cy[3], _cz[3]));
})];
}, _cA/* $fAnimatableColor_$cinterpolate */ = function(_cB, _cC, _cD, _cE){
  var _cF = E(_cC), _cG = E(_cD), _cH = B(_8g/* React.Anim.$w$cinterpolate */(_cB, _cF[1], _cF[2], _cF[3], _cG[1], _cG[2], _cG[3], _cE));
  return [0, _cH[1], _cH[2], _cH[3]];
}, _cI/* $fAnimatableColor */ = [0, _cA/* React.Anim.$fAnimatableColor_$cinterpolate */, _cn/* React.Anim.$fAnimatableColor_$canimAdd */, _cv/* React.Anim.$fAnimatableColor_$canimSub */, _bs/* React.Anim.$fAnimatableColor_$canimZero */], _cJ/* EaseInQuad */ = [1], _cK/* Nothing */ = [0], _cL/* lvl11 */ = new T(function(){
  return B(unCStr("head"));
}), _cM/* badHead */ = new T(function(){
  return B(_8P/* GHC.List.errorEmptyList */(_cL/* GHC.List.lvl11 */));
}), _cN/* fmap */ = function(_cO){
  return E(E(_cO)[1]);
}, _cP/* lvl10 */ = function(_cQ){
  return [0];
}, _cR/* lvl3 */ = [1, _bp/* Circles.RepeatingFlash */], _cS/* lvl31 */ = [0, -2], _cT/* lvl32 */ = [0, _cS/* Circles.lvl31 */, _bt/* Circles.circlesClass5 */], _cU/* lvl33 */ = [0, _cS/* Circles.lvl31 */, _cS/* Circles.lvl31 */], _cV/* lvl34 */ = [0, _bt/* Circles.circlesClass5 */, _cS/* Circles.lvl31 */], _cW/* lvl35 */ = [0, 2], _cX/* lvl36 */ = [0, _cW/* Circles.lvl35 */, _bt/* Circles.circlesClass5 */], _cY/* lvl37 */ = [0, _cW/* Circles.lvl35 */, _cS/* Circles.lvl31 */], _cZ/* lvl38 */ = [0, _cW/* Circles.lvl35 */, _cW/* Circles.lvl35 */], _d0/* lvl39 */ = [0, _bt/* Circles.circlesClass5 */, _cW/* Circles.lvl35 */], _d1/* lvl4 */ = [0, 800], _d2/* lvl40 */ = [0, _cS/* Circles.lvl31 */, _cW/* Circles.lvl35 */], _d3/* a13 */ = [0, 160], _d4/* a14 */ = [0, 14], _d5/* a15 */ = [0, -169], _d6/* lvl5 */ = [0, _d3/* Circles.a13 */, _d4/* Circles.a14 */, _d5/* Circles.a15 */], _d7/* lvl6 */ = [0, _d6/* Circles.lvl5 */, _bs/* React.Anim.$fAnimatableColor_$canimZero */], _d8/* lvl7 */ = [0, 2000], _d9/* lvl8 */ = [0, _7c/* React.Anim.$fAnimatableColor_$canimZero1 */, _7c/* React.Anim.$fAnimatableColor_$canimZero1 */], _da/* lvl9 */ = function(_db, _dc, _dd){
  var _de = E(_dd);
  return new F(function(){return A(_cN/* GHC.Base.fmap */,[_db, function(_df){
    return [0, _de[1], _de[2], _de[3], _de[4], _df];
  }, new T(function(){
    return B(A(_dc,[_de[5]]));
})]);});
}, _dg/* circlesClass8 */ = function(_dh, _di){
  var _dj = E(_di), _dk = _dj[1], _dl = _dj[2], _dm = new T(function(){
    var _dn = E(_dh);
    return _dn[0]==0 ? [0, _dn[1], _dl, _cK/* Data.Maybe.Nothing */] : [0, new T(function(){
      var _do = E(_dl);
      return _do[0]==0 ? E(_cM/* GHC.List.badHead */) : E(_do[1]);
}), new T(function(){
      var _dp = E(_dl);
      return _dp[0]==0 ? E(_bG/* GHC.List.tail1 */) : E(_dp[2]);
}), _cR/* Circles.lvl3 */];
}), _dq = new T(function(){
    return E(E(_dm)[1]);
});
  return [0, [0, _dq, new T(function(){
    return E(E(_dm)[2]);
})], [1, [0, _cI/* React.Anim.$fAnimatableColor */, _d1/* Circles.lvl4 */, _d7/* Circles.lvl6 */, function(_dr, _ds, _dt){
    switch(E(_dq)){
      case 0:
        var _du = E(_dt);
        return new F(function(){return A(_cN/* GHC.Base.fmap */,[_dr, function(_dv){
          return [0, _dv, _du[2], _du[3], _du[4], _du[5]];
        }, new T(function(){
          return B(A(_ds,[_du[1]]));
})]);});
        break;
      case 1:
        var _dw = E(_dt);
        return new F(function(){return A(_cN/* GHC.Base.fmap */,[_dr, function(_dx){
          return [0, _dw[1], _dx, _dw[3], _dw[4], _dw[5]];
        }, new T(function(){
          return B(A(_ds,[_dw[2]]));
})]);});
        break;
      case 2:
        var _dy = E(_dt);
        return new F(function(){return A(_cN/* GHC.Base.fmap */,[_dr, function(_dz){
          return [0, _dy[1], _dy[2], _dz, _dy[4], _dy[5]];
        }, new T(function(){
          return B(A(_ds,[_dy[3]]));
})]);});
        break;
      default:
        var _dA = E(_dt);
        return new F(function(){return A(_cN/* GHC.Base.fmap */,[_dr, function(_dB){
          return [0, _dA[1], _dA[2], _dA[3], _dB, _dA[5]];
        }, new T(function(){
          return B(A(_ds,[_dA[4]]));
})]);});
    }
  }, _cJ/* React.Types.EaseInQuad */, function(_dC){
    return E(new T(function(){
      return E(E(_dm)[3]);
}));
  }], [1, [0, _cj/* Circles.$dAnimatable */, _d8/* Circles.lvl7 */, [0, new T(function(){
    switch(E(_dq)){
      case 0:
        switch(E(_dk)){
          case 0:
            var _dD = E(_bu/* Circles.circlesClass4 */);
            break;
          case 1:
            var _dD = E(_cT/* Circles.lvl32 */);
            break;
          case 2:
            var _dD = E(_cU/* Circles.lvl33 */);
            break;
          default:
            var _dD = E(_cV/* Circles.lvl34 */);
        }
        var _dE = _dD;
        break;
      case 1:
        switch(E(_dk)){
          case 0:
            var _dF = E(_cX/* Circles.lvl36 */);
            break;
          case 1:
            var _dF = E(_bu/* Circles.circlesClass4 */);
            break;
          case 2:
            var _dF = E(_cV/* Circles.lvl34 */);
            break;
          default:
            var _dF = E(_cY/* Circles.lvl37 */);
        }
        var _dE = _dF;
        break;
      case 2:
        switch(E(_dk)){
          case 0:
            var _dG = E(_cZ/* Circles.lvl38 */);
            break;
          case 1:
            var _dG = E(_d0/* Circles.lvl39 */);
            break;
          case 2:
            var _dG = E(_bu/* Circles.circlesClass4 */);
            break;
          default:
            var _dG = E(_cX/* Circles.lvl36 */);
        }
        var _dE = _dG;
        break;
      default:
        switch(E(_dk)){
          case 0:
            var _dH = E(_d0/* Circles.lvl39 */);
            break;
          case 1:
            var _dH = E(_d2/* Circles.lvl40 */);
            break;
          case 2:
            var _dH = E(_cT/* Circles.lvl32 */);
            break;
          default:
            var _dH = E(_bu/* Circles.circlesClass4 */);
        }
        var _dE = _dH;
    }
    return _dE;
}), _d9/* Circles.lvl8 */], _da/* Circles.lvl9 */, _9f/* React.Types.EaseInOutQuad */, _cP/* Circles.lvl10 */], _b/* GHC.Types.[] */]]];
}, _dI/* circle_1 */ = new T(function(){
  return [0, "circle"];
}), _dJ/* cx_1 */ = new T(function(){
  return [0, "cx"];
}), _dK/* cy_1 */ = new T(function(){
  return [0, "cy"];
}), _dL/* fill_1 */ = new T(function(){
  return [0, "fill"];
}), _dM/* a3 */ = [0, 0.15], _dN/* r_3 */ = [0, 114], _dO/* r_2 */ = [1, _dN/* React.Attrs.r_3 */, _b/* GHC.Types.[] */], _dP/* r_1 */ = new T(function(){
  return [0, toJSStr(_dO/* React.Attrs.r_2 */)];
}), _dQ/* lvl */ = [0, _dP/* React.Attrs.r_1 */, _dM/* Circles.a3 */], _dR/* a4 */ = new T(function(){
  return [1, "hover-circ"];
}), _dS/* lvl1 */ = [0, _9z/* React.Attrs.class_1 */, _dR/* Circles.a4 */], _dT/* $wonClick */ = function(_dU){
  return [0, function(_dV){
    var _dW = js_parseMouseEvent(E(_dV)[1]), _dX = _dW;
    return new F(function(){return A(_dU,[E(_dX)]);});
  }, _9C/* React.Types.ClickEvt */];
}, _dY/* onClick */ = function(_dZ){
  return [1, B(_dT/* React.Events.$wonClick */(_dZ))];
}, _e0/* $wcirc' */ = function(_e1, _e2, _e3, _e4, _e5){
  var _e6 = new T(function(){
    var _e7 = new T(function(){
      var _e8 = E(_e5);
      return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(_e8[1], _e8[2], _e8[3])))];
});
    if(!E(_e1)){
      var _e9 = B(_96/* React.Types.$wseparateAttrs */([1, [0, _dJ/* React.Attrs.cx_1 */, new T(function(){
        return [0, E(_e3)[1]];
})], [1, [0, _dK/* React.Attrs.cy_1 */, new T(function(){
        return [0, E(_e4)[1]];
})], [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, _e7], _b/* GHC.Types.[] */]]]])), _ea = [0, _e9[1], _e9[2]];
    }else{
      var _eb = B(_96/* React.Types.$wseparateAttrs */([1, _dS/* Circles.lvl1 */, [1, new T(function(){
        return B(_dY/* React.Events.onClick */(_e2));
}), [1, [0, _dJ/* React.Attrs.cx_1 */, new T(function(){
        return [0, E(_e3)[1]];
})], [1, [0, _dK/* React.Attrs.cy_1 */, new T(function(){
        return [0, E(_e4)[1]];
})], [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, _e7], _b/* GHC.Types.[] */]]]]]])), _ea = [0, _eb[1], _eb[2]];
    }
    return _ea;
});
  return function(_ec){
    return E([0, [1, [1, _dI/* React.Elements.circle_1 */, new T(function(){
      return E(E(_e6)[2]);
}), new T(function(){
      return E(E(_e6)[1]);
})], _b/* GHC.Types.[] */], _r/* GHC.Tuple.() */]);
  };
}, _ed/* False */ = false, _ee/* a */ = [0, 85], _ef/* a1 */ = [0, 161], _eg/* a2 */ = [0, 220], _eh/* fillblue */ = [0, _ee/* Circles.a */, _ef/* Circles.a1 */, _eg/* Circles.a2 */], _ei/* a8 */ = new T(function(){
  return [1, "-1.5 -1.5 3 3"];
}), _ej/* viewBox_1 */ = new T(function(){
  return [0, "viewBox"];
}), _ek/* a9 */ = [0, _ej/* React.Attrs.viewBox_1 */, _ei/* Circles.a8 */], _el/* a10 */ = [1, _ek/* Circles.a9 */, _b/* GHC.Types.[] */], _em/* a5 */ = [0, 600], _en/* height_1 */ = new T(function(){
  return [0, "height"];
}), _eo/* a7 */ = [0, _en/* React.Attrs.height_1 */, _em/* Circles.a5 */], _ep/* a11 */ = [1, _eo/* Circles.a7 */, _el/* Circles.a10 */], _eq/* width_1 */ = new T(function(){
  return [0, "width"];
}), _er/* a6 */ = [0, _eq/* React.Attrs.width_1 */, _em/* Circles.a5 */], _es/* a12 */ = [1, _er/* Circles.a6 */, _ep/* Circles.a11 */], _et/* ds */ = new T(function(){
  var _eu = B(_96/* React.Types.$wseparateAttrs */(_es/* Circles.a12 */));
  return [0, _eu[1], _eu[2]];
}), _ev/* lvl11 */ = new T(function(){
  return E(E(_et/* Circles.ds */)[2]);
}), _ew/* lvl12 */ = new T(function(){
  return E(E(_et/* Circles.ds */)[1]);
}), _ex/* a16 */ = [0, _bw/* Circles.C1 */], _ey/* x */ = [1, _ex/* Circles.a16 */], _ez/* lvl13 */ = function(_eA){
  var _eB = js_parseMouseEvent(E(_eA)[1]), _eC = _eB, _eD = E(_eC);
  return E(_ey/* Circles.x */);
}, _eE/* lvl14 */ = [0, _ez/* Circles.lvl13 */, _9C/* React.Types.ClickEvt */], _eF/* lvl15 */ = [1, _eE/* Circles.lvl14 */], _eG/* lvl16 */ = [0, -1], _eH/* lvl17 */ = [0, _dJ/* React.Attrs.cx_1 */, _eG/* Circles.lvl16 */], _eI/* lvl18 */ = [0, _dK/* React.Attrs.cy_1 */, _eG/* Circles.lvl16 */], _eJ/* lvl2 */ = function(_eK){
  return [0];
}, _eL/* a17 */ = [0, _by/* Circles.C2 */], _eM/* x1 */ = [1, _eL/* Circles.a17 */], _eN/* lvl19 */ = function(_eO){
  var _eP = js_parseMouseEvent(E(_eO)[1]), _eQ = _eP, _eR = E(_eQ);
  return E(_eM/* Circles.x1 */);
}, _eS/* lvl20 */ = [0, _eN/* Circles.lvl19 */, _9C/* React.Types.ClickEvt */], _eT/* lvl21 */ = [1, _eS/* Circles.lvl20 */], _eU/* lvl22 */ = [0, 1], _eV/* lvl23 */ = [0, _dJ/* React.Attrs.cx_1 */, _eU/* Circles.lvl22 */], _eW/* a18 */ = [0, _bx/* Circles.C3 */], _eX/* x2 */ = [1, _eW/* Circles.a18 */], _eY/* lvl24 */ = function(_eZ){
  var _f0 = js_parseMouseEvent(E(_eZ)[1]), _f1 = _f0, _f2 = E(_f1);
  return E(_eX/* Circles.x2 */);
}, _f3/* lvl25 */ = [0, _eY/* Circles.lvl24 */, _9C/* React.Types.ClickEvt */], _f4/* lvl26 */ = [1, _f3/* Circles.lvl25 */], _f5/* lvl27 */ = [0, _dK/* React.Attrs.cy_1 */, _eU/* Circles.lvl22 */], _f6/* a19 */ = [0, _bz/* Circles.C4 */], _f7/* x3 */ = [1, _f6/* Circles.a19 */], _f8/* lvl28 */ = function(_f9){
  var _fa = js_parseMouseEvent(E(_f9)[1]), _fb = _fa, _fc = E(_fb);
  return E(_f7/* Circles.x3 */);
}, _fd/* lvl29 */ = [0, _f8/* Circles.lvl28 */, _9C/* React.Types.ClickEvt */], _fe/* lvl30 */ = [1, _fd/* Circles.lvl29 */], _ff/* svg_1 */ = new T(function(){
  return [0, "svg"];
}), _fg/* circlesClass9 */ = function(_fh, _fi){
  var _fj = new T(function(){
    var _fk = E(_fi), _fl = _fk[5], _fm = new T(function(){
      switch(E(E(_fh)[1])){
        case 0:
          var _fn = E(_fl), _fo = B(A(_e0/* Circles.$wcirc' */,[_ed/* GHC.Types.False */, _eJ/* Circles.lvl2 */, new T(function(){
            return [0, -1-E(_fn[1])[1]];
}), new T(function(){
            return [0, -1-E(_fn[2])[1]];
}), _eh/* Circles.fillblue */, _fk]));
          break;
        case 1:
          var _fp = E(_fl), _fo = B(A(_e0/* Circles.$wcirc' */,[_ed/* GHC.Types.False */, _eJ/* Circles.lvl2 */, new T(function(){
            return [0, 1-E(_fp[1])[1]];
}), new T(function(){
            return [0, -1-E(_fp[2])[1]];
}), _eh/* Circles.fillblue */, _fk]));
          break;
        case 2:
          var _fq = E(_fl), _fo = B(A(_e0/* Circles.$wcirc' */,[_ed/* GHC.Types.False */, _eJ/* Circles.lvl2 */, new T(function(){
            return [0, 1-E(_fq[1])[1]];
}), new T(function(){
            return [0, 1-E(_fq[2])[1]];
}), _eh/* Circles.fillblue */, _fk]));
          break;
        default:
          var _fr = E(_fl), _fo = B(A(_e0/* Circles.$wcirc' */,[_ed/* GHC.Types.False */, _eJ/* Circles.lvl2 */, new T(function(){
            return [0, -1-E(_fr[1])[1]];
}), new T(function(){
            return [0, 1-E(_fr[2])[1]];
}), _eh/* Circles.fillblue */, _fk]));
      }
      return _fo;
});
    return [0, [1, [0, _ff/* React.Elements.svg_1 */, _ev/* Circles.lvl11 */, _ew/* Circles.lvl12 */, new T(function(){
      var _fs = new T(function(){
        var _ft = B(_96/* React.Types.$wseparateAttrs */([1, _dS/* Circles.lvl1 */, [1, _eF/* Circles.lvl15 */, [1, _eH/* Circles.lvl17 */, [1, _eI/* Circles.lvl18 */, [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, new T(function(){
          var _fu = E(_fk[1]);
          return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(new T(function(){
            return [0, 85+E(_fu[1])[1]|0];
}), new T(function(){
            return [0, 161+E(_fu[2])[1]|0];
}), new T(function(){
            return [0, 220+E(_fu[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
        return [0, _ft[1], _ft[2]];
});
      return B(_10/* GHC.Base.++ */([1, [1, _dI/* React.Elements.circle_1 */, new T(function(){
        return E(E(_fs)[2]);
}), new T(function(){
        return E(E(_fs)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
        var _fv = new T(function(){
          var _fw = B(_96/* React.Types.$wseparateAttrs */([1, _dS/* Circles.lvl1 */, [1, _eT/* Circles.lvl21 */, [1, _eV/* Circles.lvl23 */, [1, _eI/* Circles.lvl18 */, [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, new T(function(){
            var _fx = E(_fk[2]);
            return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(new T(function(){
              return [0, 85+E(_fx[1])[1]|0];
}), new T(function(){
              return [0, 161+E(_fx[2])[1]|0];
}), new T(function(){
              return [0, 220+E(_fx[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
          return [0, _fw[1], _fw[2]];
});
        return B(_10/* GHC.Base.++ */([1, [1, _dI/* React.Elements.circle_1 */, new T(function(){
          return E(E(_fv)[2]);
}), new T(function(){
          return E(E(_fv)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
          var _fy = new T(function(){
            var _fz = B(_96/* React.Types.$wseparateAttrs */([1, _dS/* Circles.lvl1 */, [1, _f4/* Circles.lvl26 */, [1, _eV/* Circles.lvl23 */, [1, _f5/* Circles.lvl27 */, [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, new T(function(){
              var _fA = E(_fk[3]);
              return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(new T(function(){
                return [0, 85+E(_fA[1])[1]|0];
}), new T(function(){
                return [0, 161+E(_fA[2])[1]|0];
}), new T(function(){
                return [0, 220+E(_fA[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
            return [0, _fz[1], _fz[2]];
});
          return B(_10/* GHC.Base.++ */([1, [1, _dI/* React.Elements.circle_1 */, new T(function(){
            return E(E(_fy)[2]);
}), new T(function(){
            return E(E(_fy)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
            var _fB = new T(function(){
              var _fC = B(_96/* React.Types.$wseparateAttrs */([1, _dS/* Circles.lvl1 */, [1, _fe/* Circles.lvl30 */, [1, _eH/* Circles.lvl17 */, [1, _f5/* Circles.lvl27 */, [1, _dQ/* Circles.lvl */, [1, [0, _dL/* React.Attrs.fill_1 */, new T(function(){
                var _fD = E(_fk[4]);
                return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(new T(function(){
                  return [0, 85+E(_fD[1])[1]|0];
}), new T(function(){
                  return [0, 161+E(_fD[2])[1]|0];
}), new T(function(){
                  return [0, 220+E(_fD[3])[1]|0];
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
              return [0, _fC[1], _fC[2]];
});
            return B(_10/* GHC.Base.++ */([1, [1, _dI/* React.Elements.circle_1 */, new T(function(){
              return E(E(_fB)[2]);
}), new T(function(){
              return E(E(_fB)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
              return E(E(_fm)[1]);
})));
})));
})));
})));
})], _b/* GHC.Types.[] */], new T(function(){
      return E(E(_fm)[2]);
})];
});
  return [0, [1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_fj)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_fj)[2]);
})];
}, _fE/* $fOrdDouble_$ccompare */ = function(_fF, _fG){
  var _fH = E(_fF)[1], _fI = E(_fG)[1];
  return _fH>=_fI ? _fH!=_fI ? 2 : 1 : 0;
}, _fJ/* $fOrdEasing_$ccompare */ = function(_fK, _fL){
  var _fM = E(_fK);
  if(_fM[0]==19){
    var _fN = E(_fL);
    if(dataToTag(E(_fN))>=19){
      var _fO = E(_fN);
      if(_fO[0]==19){
        var _fP = E(_fM[1])[1], _fQ = E(_fO[1])[1];
        if(_fP>=_fQ){
          if(_fP!=_fQ){
            return 2;
          }else{
            var _fR = E(_fM[2])[1], _fS = E(_fO[2])[1];
            if(_fR>=_fS){
              if(_fR!=_fS){
                return 2;
              }else{
                var _fT = E(_fM[3])[1], _fU = E(_fO[3])[1];
                return _fT>=_fU ? _fT!=_fU ? 2 : B(_fE/* GHC.Classes.$fOrdDouble_$ccompare */(_fM[4], _fO[4])) : 0;
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
    var _fV = dataToTag(E(E(_fL))), _fW = dataToTag(E(_fM));
    return _fW>=_fV ? _fW!=_fV ? 2 : 1 : 0;
  }
}, _fX/* Tip */ = [1], _fY/* lvl8 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceR"));
}), _fZ/* $wpoly_fail */ = function(_g0){
  return new F(function(){return err(_fY/* Data.Map.Base.lvl8 */);});
}, _g1/* lvl9 */ = new T(function(){
  return B(_fZ/* Data.Map.Base.$wpoly_fail */(_));
}), _g2/* balanceR */ = function(_g3, _g4, _g5, _g6){
  var _g7 = E(_g5);
  if(!_g7[0]){
    var _g8 = _g7[1], _g9 = E(_g6);
    if(!_g9[0]){
      var _ga = _g9[1], _gb = _g9[2], _gc = _g9[3];
      if(_ga<=(imul(3, _g8)|0)){
        return [0, (1+_g8|0)+_ga|0, E(E(_g3)), _g4, E(_g7), E(_g9)];
      }else{
        var _gd = E(_g9[4]);
        if(!_gd[0]){
          var _ge = _gd[1], _gf = _gd[2], _gg = _gd[3], _gh = _gd[4], _gi = E(_g9[5]);
          if(!_gi[0]){
            var _gj = _gi[1];
            if(_ge>=(imul(2, _gj)|0)){
              var _gk = function(_gl){
                var _gm = E(_g3), _gn = E(_gd[5]);
                return _gn[0]==0 ? [0, (1+_g8|0)+_ga|0, E(_gf), _gg, E([0, (1+_g8|0)+_gl|0, E(_gm), _g4, E(_g7), E(_gh)]), E([0, (1+_gj|0)+_gn[1]|0, E(_gb), _gc, E(_gn), E(_gi)])] : [0, (1+_g8|0)+_ga|0, E(_gf), _gg, E([0, (1+_g8|0)+_gl|0, E(_gm), _g4, E(_g7), E(_gh)]), E([0, 1+_gj|0, E(_gb), _gc, E(_fX/* Data.Map.Base.Tip */), E(_gi)])];
              }, _go = E(_gh);
              return _go[0]==0 ? B(_gk(_go[1])) : B(_gk(0));
            }else{
              return [0, (1+_g8|0)+_ga|0, E(_gb), _gc, E([0, (1+_g8|0)+_ge|0, E(E(_g3)), _g4, E(_g7), E(_gd)]), E(_gi)];
            }
          }else{
            return E(_g1/* Data.Map.Base.lvl9 */);
          }
        }else{
          return E(_g1/* Data.Map.Base.lvl9 */);
        }
      }
    }else{
      return [0, 1+_g8|0, E(E(_g3)), _g4, E(_g7), E(_fX/* Data.Map.Base.Tip */)];
    }
  }else{
    var _gp = E(_g6);
    if(!_gp[0]){
      var _gq = _gp[1], _gr = _gp[2], _gs = _gp[3], _gt = _gp[5], _gu = E(_gp[4]);
      if(!_gu[0]){
        var _gv = _gu[1], _gw = _gu[2], _gx = _gu[3], _gy = _gu[4], _gz = E(_gt);
        if(!_gz[0]){
          var _gA = _gz[1];
          if(_gv>=(imul(2, _gA)|0)){
            var _gB = function(_gC){
              var _gD = E(_g3), _gE = E(_gu[5]);
              return _gE[0]==0 ? [0, 1+_gq|0, E(_gw), _gx, E([0, 1+_gC|0, E(_gD), _g4, E(_fX/* Data.Map.Base.Tip */), E(_gy)]), E([0, (1+_gA|0)+_gE[1]|0, E(_gr), _gs, E(_gE), E(_gz)])] : [0, 1+_gq|0, E(_gw), _gx, E([0, 1+_gC|0, E(_gD), _g4, E(_fX/* Data.Map.Base.Tip */), E(_gy)]), E([0, 1+_gA|0, E(_gr), _gs, E(_fX/* Data.Map.Base.Tip */), E(_gz)])];
            }, _gF = E(_gy);
            return _gF[0]==0 ? B(_gB(_gF[1])) : B(_gB(0));
          }else{
            return [0, 1+_gq|0, E(_gr), _gs, E([0, 1+_gv|0, E(E(_g3)), _g4, E(_fX/* Data.Map.Base.Tip */), E(_gu)]), E(_gz)];
          }
        }else{
          return [0, 3, E(_gw), _gx, E([0, 1, E(E(_g3)), _g4, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)]), E([0, 1, E(_gr), _gs, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _gG = E(_gt);
        return _gG[0]==0 ? [0, 3, E(_gr), _gs, E([0, 1, E(E(_g3)), _g4, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)]), E(_gG)] : [0, 2, E(E(_g3)), _g4, E(_fX/* Data.Map.Base.Tip */), E(_gp)];
      }
    }else{
      return [0, 1, E(E(_g3)), _g4, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
    }
  }
}, _gH/* singleton */ = function(_gI, _gJ){
  return [0, 1, E(E(_gI)), _gJ, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
}, _gK/* insertMax */ = function(_gL, _gM, _gN){
  var _gO = E(_gN);
  if(!_gO[0]){
    return new F(function(){return _g2/* Data.Map.Base.balanceR */(_gO[2], _gO[3], _gO[4], B(_gK/* Data.Map.Base.insertMax */(_gL, _gM, _gO[5])));});
  }else{
    return new F(function(){return _gH/* Data.Map.Base.singleton */(_gL, _gM);});
  }
}, _gP/* lvl11 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceL"));
}), _gQ/* $wpoly_fail1 */ = function(_gR){
  return new F(function(){return err(_gP/* Data.Map.Base.lvl11 */);});
}, _gS/* lvl12 */ = new T(function(){
  return B(_gQ/* Data.Map.Base.$wpoly_fail1 */(_));
}), _gT/* balanceL */ = function(_gU, _gV, _gW, _gX){
  var _gY = E(_gX);
  if(!_gY[0]){
    var _gZ = _gY[1], _h0 = E(_gW);
    if(!_h0[0]){
      var _h1 = _h0[1], _h2 = _h0[2], _h3 = _h0[3];
      if(_h1<=(imul(3, _gZ)|0)){
        return [0, (1+_h1|0)+_gZ|0, E(E(_gU)), _gV, E(_h0), E(_gY)];
      }else{
        var _h4 = E(_h0[4]);
        if(!_h4[0]){
          var _h5 = _h4[1], _h6 = E(_h0[5]);
          if(!_h6[0]){
            var _h7 = _h6[1], _h8 = _h6[2], _h9 = _h6[3], _ha = _h6[4];
            if(_h7>=(imul(2, _h5)|0)){
              var _hb = function(_hc){
                var _hd = E(_h6[5]);
                return _hd[0]==0 ? [0, (1+_h1|0)+_gZ|0, E(_h8), _h9, E([0, (1+_h5|0)+_hc|0, E(_h2), _h3, E(_h4), E(_ha)]), E([0, (1+_gZ|0)+_hd[1]|0, E(E(_gU)), _gV, E(_hd), E(_gY)])] : [0, (1+_h1|0)+_gZ|0, E(_h8), _h9, E([0, (1+_h5|0)+_hc|0, E(_h2), _h3, E(_h4), E(_ha)]), E([0, 1+_gZ|0, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_gY)])];
              }, _he = E(_ha);
              return _he[0]==0 ? B(_hb(_he[1])) : B(_hb(0));
            }else{
              return [0, (1+_h1|0)+_gZ|0, E(_h2), _h3, E(_h4), E([0, (1+_gZ|0)+_h7|0, E(E(_gU)), _gV, E(_h6), E(_gY)])];
            }
          }else{
            return E(_gS/* Data.Map.Base.lvl12 */);
          }
        }else{
          return E(_gS/* Data.Map.Base.lvl12 */);
        }
      }
    }else{
      return [0, 1+_gZ|0, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_gY)];
    }
  }else{
    var _hf = E(_gW);
    if(!_hf[0]){
      var _hg = _hf[1], _hh = _hf[2], _hi = _hf[3], _hj = _hf[5], _hk = E(_hf[4]);
      if(!_hk[0]){
        var _hl = _hk[1], _hm = E(_hj);
        if(!_hm[0]){
          var _hn = _hm[1], _ho = _hm[2], _hp = _hm[3], _hq = _hm[4];
          if(_hn>=(imul(2, _hl)|0)){
            var _hr = function(_hs){
              var _ht = E(_hm[5]);
              return _ht[0]==0 ? [0, 1+_hg|0, E(_ho), _hp, E([0, (1+_hl|0)+_hs|0, E(_hh), _hi, E(_hk), E(_hq)]), E([0, 1+_ht[1]|0, E(E(_gU)), _gV, E(_ht), E(_fX/* Data.Map.Base.Tip */)])] : [0, 1+_hg|0, E(_ho), _hp, E([0, (1+_hl|0)+_hs|0, E(_hh), _hi, E(_hk), E(_hq)]), E([0, 1, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)])];
            }, _hu = E(_hq);
            return _hu[0]==0 ? B(_hr(_hu[1])) : B(_hr(0));
          }else{
            return [0, 1+_hg|0, E(_hh), _hi, E(_hk), E([0, 1+_hn|0, E(E(_gU)), _gV, E(_hm), E(_fX/* Data.Map.Base.Tip */)])];
          }
        }else{
          return [0, 3, E(_hh), _hi, E(_hk), E([0, 1, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _hv = E(_hj);
        return _hv[0]==0 ? [0, 3, E(_hv[2]), _hv[3], E([0, 1, E(_hh), _hi, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)]), E([0, 1, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)])] : [0, 2, E(E(_gU)), _gV, E(_hf), E(_fX/* Data.Map.Base.Tip */)];
      }
    }else{
      return [0, 1, E(E(_gU)), _gV, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
    }
  }
}, _hw/* insertMin */ = function(_hx, _hy, _hz){
  var _hA = E(_hz);
  if(!_hA[0]){
    return new F(function(){return _gT/* Data.Map.Base.balanceL */(_hA[2], _hA[3], B(_hw/* Data.Map.Base.insertMin */(_hx, _hy, _hA[4])), _hA[5]);});
  }else{
    return new F(function(){return _gH/* Data.Map.Base.singleton */(_hx, _hy);});
  }
}, _hB/* link_$sinsertMin */ = function(_hC, _hD, _hE, _hF, _hG, _hH, _hI){
  return new F(function(){return _gT/* Data.Map.Base.balanceL */(_hF, _hG, B(_hw/* Data.Map.Base.insertMin */(_hC, _hD, _hH)), _hI);});
}, _hJ/* link_$slink1 */ = function(_hK, _hL, _hM, _hN, _hO, _hP, _hQ, _hR){
  var _hS = E(_hM);
  if(!_hS[0]){
    var _hT = _hS[1], _hU = _hS[2], _hV = _hS[3], _hW = _hS[4], _hX = _hS[5];
    if((imul(3, _hT)|0)>=_hN){
      if((imul(3, _hN)|0)>=_hT){
        return [0, (_hT+_hN|0)+1|0, E(E(_hK)), _hL, E(_hS), E([0, _hN, E(_hO), _hP, E(_hQ), E(_hR)])];
      }else{
        return new F(function(){return _g2/* Data.Map.Base.balanceR */(_hU, _hV, _hW, B(_hJ/* Data.Map.Base.link_$slink1 */(_hK, _hL, _hX, _hN, _hO, _hP, _hQ, _hR)));});
      }
    }else{
      return new F(function(){return _gT/* Data.Map.Base.balanceL */(_hO, _hP, B(_hY/* Data.Map.Base.link_$slink */(_hK, _hL, _hT, _hU, _hV, _hW, _hX, _hQ)), _hR);});
    }
  }else{
    return new F(function(){return _hB/* Data.Map.Base.link_$sinsertMin */(_hK, _hL, _hN, _hO, _hP, _hQ, _hR);});
  }
}, _hY/* link_$slink */ = function(_hZ, _i0, _i1, _i2, _i3, _i4, _i5, _i6){
  var _i7 = E(_i6);
  if(!_i7[0]){
    var _i8 = _i7[1], _i9 = _i7[2], _ia = _i7[3], _ib = _i7[4], _ic = _i7[5];
    if((imul(3, _i1)|0)>=_i8){
      if((imul(3, _i8)|0)>=_i1){
        return [0, (_i1+_i8|0)+1|0, E(E(_hZ)), _i0, E([0, _i1, E(_i2), _i3, E(_i4), E(_i5)]), E(_i7)];
      }else{
        return new F(function(){return _g2/* Data.Map.Base.balanceR */(_i2, _i3, _i4, B(_hJ/* Data.Map.Base.link_$slink1 */(_hZ, _i0, _i5, _i8, _i9, _ia, _ib, _ic)));});
      }
    }else{
      return new F(function(){return _gT/* Data.Map.Base.balanceL */(_i9, _ia, B(_hY/* Data.Map.Base.link_$slink */(_hZ, _i0, _i1, _i2, _i3, _i4, _i5, _ib)), _ic);});
    }
  }else{
    return new F(function(){return _gK/* Data.Map.Base.insertMax */(_hZ, _i0, [0, _i1, E(_i2), _i3, E(_i4), E(_i5)]);});
  }
}, _id/* link */ = function(_ie, _if, _ig, _ih){
  var _ii = E(_ig);
  if(!_ii[0]){
    var _ij = _ii[1], _ik = _ii[2], _il = _ii[3], _im = _ii[4], _in = _ii[5], _io = E(_ih);
    if(!_io[0]){
      var _ip = _io[1], _iq = _io[2], _ir = _io[3], _is = _io[4], _it = _io[5];
      if((imul(3, _ij)|0)>=_ip){
        if((imul(3, _ip)|0)>=_ij){
          return [0, (_ij+_ip|0)+1|0, E(E(_ie)), _if, E(_ii), E(_io)];
        }else{
          return new F(function(){return _g2/* Data.Map.Base.balanceR */(_ik, _il, _im, B(_hJ/* Data.Map.Base.link_$slink1 */(_ie, _if, _in, _ip, _iq, _ir, _is, _it)));});
        }
      }else{
        return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iq, _ir, B(_hY/* Data.Map.Base.link_$slink */(_ie, _if, _ij, _ik, _il, _im, _in, _is)), _it);});
      }
    }else{
      return new F(function(){return _gK/* Data.Map.Base.insertMax */(_ie, _if, _ii);});
    }
  }else{
    return new F(function(){return _hw/* Data.Map.Base.insertMin */(_ie, _if, _ih);});
  }
}, _iu/* $s$wpoly_create */ = function(_iv, _iw, _ix, _iy){
  var _iz = E(_iv);
  if(_iz==1){
    var _iA = E(_iy);
    return _iA[0]==0 ? [0, new T(function(){
      return [0, 1, E(E(_iw)), _ix, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _b/* GHC.Types.[] */] : B(_fJ/* React.Types.$fOrdEasing_$ccompare */(_iw, E(_iA[1])[1]))==0 ? [0, new T(function(){
      return [0, 1, E(E(_iw)), _ix, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
}), _iA, _b/* GHC.Types.[] */] : [0, new T(function(){
      return [0, 1, E(E(_iw)), _ix, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _iA];
  }else{
    var _iB = B(_iu/* Easing.$s$wpoly_create */(_iz>>1, _iw, _ix, _iy)), _iC = _iB[1], _iD = _iB[3], _iE = E(_iB[2]);
    if(!_iE[0]){
      return [0, _iC, _b/* GHC.Types.[] */, _iD];
    }else{
      var _iF = E(_iE[1]), _iG = _iF[1], _iH = _iF[2], _iI = E(_iE[2]);
      if(!_iI[0]){
        return [0, new T(function(){
          return B(_gK/* Data.Map.Base.insertMax */(_iG, _iH, _iC));
}), _b/* GHC.Types.[] */, _iD];
      }else{
        var _iJ = E(_iI[1]), _iK = _iJ[1];
        if(!B(_fJ/* React.Types.$fOrdEasing_$ccompare */(_iG, _iK))){
          var _iL = B(_iu/* Easing.$s$wpoly_create */(_iz>>1, _iK, _iJ[2], _iI[2]));
          return [0, new T(function(){
            return B(_id/* Data.Map.Base.link */(_iG, _iH, _iC, _iL[1]));
}), _iL[2], _iL[3]];
        }else{
          return [0, _iC, _b/* GHC.Types.[] */, _iE];
        }
      }
    }
  }
}, _iM/* $sinsert_$sgo10 */ = function(_iN, _iO, _iP){
  var _iQ = E(_iN), _iR = E(_iP);
  if(!_iR[0]){
    var _iS = _iR[1], _iT = _iR[2], _iU = _iR[3], _iV = _iR[4], _iW = _iR[5], _iX = E(_iQ);
    if(_iX[0]==19){
      if(dataToTag(E(_iT))>=19){
        var _iY = E(_iT);
        if(_iY[0]==19){
          var _iZ = E(_iX[1])[1], _j0 = E(_iY[1])[1];
          if(_iZ>=_j0){
            if(_iZ!=_j0){
              return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iY, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
            }else{
              var _j1 = E(_iX[2])[1], _j2 = E(_iY[2])[1];
              if(_j1>=_j2){
                if(_j1!=_j2){
                  return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iY, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
                }else{
                  var _j3 = E(_iX[3])[1], _j4 = E(_iY[3])[1];
                  if(_j3>=_j4){
                    if(_j3!=_j4){
                      return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iY, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
                    }else{
                      var _j5 = E(_iX[4])[1], _j6 = E(_iY[4])[1];
                      if(_j5>=_j6){
                        if(_j5!=_j6){
                          return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iY, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
                        }else{
                          return [0, _iS, E(_iX), _iO, E(_iV), E(_iW)];
                        }
                      }else{
                        return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iY, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
                      }
                    }
                  }else{
                    return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iY, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
                  }
                }
              }else{
                return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iY, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
              }
            }
          }else{
            return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iY, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
          }
        }else{
          return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iY, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
        }
      }else{
        return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iT, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
      }
    }else{
      var _j7 = dataToTag(E(_iX)), _j8 = dataToTag(E(_iT));
      if(_j7>=_j8){
        if(_j7!=_j8){
          return new F(function(){return _g2/* Data.Map.Base.balanceR */(_iT, _iU, _iV, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iW)));});
        }else{
          return [0, _iS, E(_iX), _iO, E(_iV), E(_iW)];
        }
      }else{
        return new F(function(){return _gT/* Data.Map.Base.balanceL */(_iT, _iU, B(_iM/* Easing.$sinsert_$sgo10 */(_iX, _iO, _iV)), _iW);});
      }
    }
  }else{
    return [0, 1, E(_iQ), _iO, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
  }
}, _j9/* poly_go10 */ = function(_ja, _jb){
  while(1){
    var _jc = E(_jb);
    if(!_jc[0]){
      return E(_ja);
    }else{
      var _jd = E(_jc[1]), _je = B(_iM/* Easing.$sinsert_$sgo10 */(_jd[1], _jd[2], _ja));
      _jb = _jc[2];
      _ja = _je;
      continue;
    }
  }
}, _jf/* $sfromList_$spoly_go10 */ = function(_jg, _jh, _ji, _jj){
  return new F(function(){return _j9/* Easing.poly_go10 */(B(_iM/* Easing.$sinsert_$sgo10 */(_jh, _ji, _jg)), _jj);});
}, _jk/* $spoly_go10 */ = function(_jl, _jm, _jn){
  var _jo = E(_jm);
  return new F(function(){return _j9/* Easing.poly_go10 */(B(_iM/* Easing.$sinsert_$sgo10 */(_jo[1], _jo[2], _jl)), _jn);});
}, _jp/* $wpoly_go10 */ = function(_jq, _jr, _js){
  while(1){
    var _jt = E(_js);
    if(!_jt[0]){
      return E(_jr);
    }else{
      var _ju = E(_jt[1]), _jv = _ju[1], _jw = _ju[2], _jx = E(_jt[2]);
      if(!_jx[0]){
        return new F(function(){return _gK/* Data.Map.Base.insertMax */(_jv, _jw, _jr);});
      }else{
        var _jy = E(_jx[1]), _jz = _jy[1];
        if(!B(_fJ/* React.Types.$fOrdEasing_$ccompare */(_jv, _jz))){
          var _jA = B(_iu/* Easing.$s$wpoly_create */(_jq, _jz, _jy[2], _jx[2])), _jB = _jA[1], _jC = E(_jA[3]);
          if(!_jC[0]){
            var _jD = _jq<<1, _jE = B(_id/* Data.Map.Base.link */(_jv, _jw, _jr, _jB));
            _js = _jA[2];
            _jq = _jD;
            _jr = _jE;
            continue;
          }else{
            return new F(function(){return _jk/* Easing.$spoly_go10 */(B(_id/* Data.Map.Base.link */(_jv, _jw, _jr, _jB)), _jC[1], _jC[2]);});
          }
        }else{
          return new F(function(){return _jf/* Easing.$sfromList_$spoly_go10 */(_jr, _jv, _jw, _jx);});
        }
      }
    }
  }
}, _jF/* $sfromList_$s$wpoly_go10 */ = function(_jG, _jH, _jI, _jJ, _jK){
  var _jL = E(_jK);
  if(!_jL[0]){
    return new F(function(){return _gK/* Data.Map.Base.insertMax */(_jI, _jJ, _jH);});
  }else{
    var _jM = E(_jL[1]), _jN = _jM[1];
    if(!B(_fJ/* React.Types.$fOrdEasing_$ccompare */(_jI, _jN))){
      var _jO = B(_iu/* Easing.$s$wpoly_create */(_jG, _jN, _jM[2], _jL[2])), _jP = _jO[1], _jQ = E(_jO[3]);
      if(!_jQ[0]){
        return new F(function(){return _jp/* Easing.$wpoly_go10 */(_jG<<1, B(_id/* Data.Map.Base.link */(_jI, _jJ, _jH, _jP)), _jO[2]);});
      }else{
        return new F(function(){return _jk/* Easing.$spoly_go10 */(B(_id/* Data.Map.Base.link */(_jI, _jJ, _jH, _jP)), _jQ[1], _jQ[2]);});
      }
    }else{
      return new F(function(){return _jf/* Easing.$sfromList_$spoly_go10 */(_jH, _jI, _jJ, _jL);});
    }
  }
}, _jR/* $sfromList */ = function(_jS){
  var _jT = E(_jS);
  if(!_jT[0]){
    return [1];
  }else{
    var _jU = E(_jT[1]), _jV = _jU[1], _jW = _jU[2], _jX = E(_jT[2]);
    if(!_jX[0]){
      return [0, 1, E(E(_jV)), _jW, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)];
    }else{
      var _jY = _jX[2], _jZ = E(_jX[1]), _k0 = _jZ[1], _k1 = _jZ[2];
      if(!B(_fJ/* React.Types.$fOrdEasing_$ccompare */(_jV, _k0))){
        return new F(function(){return _jF/* Easing.$sfromList_$s$wpoly_go10 */(1, [0, 1, E(E(_jV)), _jW, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)], _k0, _k1, _jY);});
      }else{
        return new F(function(){return _jf/* Easing.$sfromList_$spoly_go10 */([0, 1, E(E(_jV)), _jW, E(_fX/* Data.Map.Base.Tip */), E(_fX/* Data.Map.Base.Tip */)], _k0, _k1, _jY);});
      }
    }
  }
}, _k2/* EaseOutQuad */ = [2], _k3/* EaseInCubic */ = [4], _k4/* EaseOutCubic */ = [5], _k5/* EaseInOutCubic */ = [6], _k6/* EaseInQuart */ = [7], _k7/* EaseOutQuart */ = [8], _k8/* EaseInOutQuart */ = [9], _k9/* EaseInQuint */ = [10], _ka/* EaseOutQuint */ = [11], _kb/* EaseInOutQuint */ = [12], _kc/* EaseInElastic */ = [13], _kd/* EaseOutElastic */ = [14], _ke/* EaseInSine */ = [20], _kf/* EaseOutSine */ = [21], _kg/* easingClass22 */ = [1, _kf/* React.Types.EaseOutSine */, _b/* GHC.Types.[] */], _kh/* easingClass21 */ = [1, _ke/* React.Types.EaseInSine */, _kg/* Easing.easingClass22 */], _ki/* easingClass24 */ = [0, 0.8], _kj/* easingClass25 */ = [0, 0], _kk/* easingClass26 */ = [0, 0.5], _kl/* easingClass23 */ = [19, _kk/* Easing.easingClass26 */, _kj/* Easing.easingClass25 */, _ki/* Easing.easingClass24 */, _ki/* Easing.easingClass24 */], _km/* easingClass20 */ = [1, _kl/* Easing.easingClass23 */, _kh/* Easing.easingClass21 */], _kn/* easingClass19 */ = [1, _7D/* React.Types.EaseOutBounce */, _km/* Easing.easingClass20 */], _ko/* easingClass18 */ = [1, _kd/* React.Types.EaseOutElastic */, _kn/* Easing.easingClass19 */], _kp/* easingClass17 */ = [1, _kc/* React.Types.EaseInElastic */, _ko/* Easing.easingClass18 */], _kq/* easingClass16 */ = [1, _kb/* React.Types.EaseInOutQuint */, _kp/* Easing.easingClass17 */], _kr/* easingClass15 */ = [1, _ka/* React.Types.EaseOutQuint */, _kq/* Easing.easingClass16 */], _ks/* easingClass14 */ = [1, _k9/* React.Types.EaseInQuint */, _kr/* Easing.easingClass15 */], _kt/* easingClass13 */ = [1, _k8/* React.Types.EaseInOutQuart */, _ks/* Easing.easingClass14 */], _ku/* easingClass12 */ = [1, _k7/* React.Types.EaseOutQuart */, _kt/* Easing.easingClass13 */], _kv/* easingClass11 */ = [1, _k6/* React.Types.EaseInQuart */, _ku/* Easing.easingClass12 */], _kw/* easingClass10 */ = [1, _k5/* React.Types.EaseInOutCubic */, _kv/* Easing.easingClass11 */], _kx/* easingClass9 */ = [1, _k4/* React.Types.EaseOutCubic */, _kw/* Easing.easingClass10 */], _ky/* easingClass8 */ = [1, _k3/* React.Types.EaseInCubic */, _kx/* Easing.easingClass9 */], _kz/* easingClass7 */ = [1, _9f/* React.Types.EaseInOutQuad */, _ky/* Easing.easingClass8 */], _kA/* easingClass6 */ = [1, _k2/* React.Types.EaseOutQuad */, _kz/* Easing.easingClass7 */], _kB/* easingClass5 */ = [1, _cJ/* React.Types.EaseInQuad */, _kA/* Easing.easingClass6 */], _kC/* xs */ = function(_kD){
  var _kE = E(_kD);
  return _kE[0]==0 ? [0] : [1, [0, _kE[1], _kj/* Easing.easingClass25 */], new T(function(){
    return B(_kC/* Easing.xs */(_kE[2]));
})];
}, _kF/* easingClass_$sxs */ = function(_kG, _kH){
  return [1, [0, _kG, _kj/* Easing.easingClass25 */], new T(function(){
    return B(_kC/* Easing.xs */(_kH));
})];
}, _kI/* easingClass4 */ = new T(function(){
  return B(_kF/* Easing.easingClass_$sxs */(_9g/* React.Types.Linear */, _kB/* Easing.easingClass5 */));
}), _kJ/* easingClass3 */ = new T(function(){
  return B(_jR/* Easing.$sfromList */(_kI/* Easing.easingClass4 */));
}), _kK/* easingClass2 */ = [0, _kJ/* Easing.easingClass3 */], _kL/* Closed */ = 1, _kM/* easings */ = [1, _9g/* React.Types.Linear */, _kB/* Easing.easingClass5 */], _kN/* easingClass27 */ = [0, _kL/* Easing.Closed */, _kM/* Easing.easings */], _kO/* Open */ = 0, _kP/* lvl26 */ = new T(function(){
  return B(unCStr("Map.!: given key is not an element in the map"));
}), _kQ/* lvl27 */ = new T(function(){
  return B(err(_kP/* Easing.lvl26 */));
}), _kR/* $s!1 */ = function(_kS, _kT){
  while(1){
    var _kU = E(_kT);
    if(!_kU[0]){
      var _kV = _kU[2], _kW = _kU[3], _kX = _kU[4], _kY = _kU[5], _kZ = E(E(_kS));
      if(_kZ[0]==19){
        if(dataToTag(E(_kV))>=19){
          var _l0 = E(_kV);
          if(_l0[0]==19){
            var _l1 = E(_kZ[1])[1], _l2 = E(_l0[1])[1];
            if(_l1>=_l2){
              if(_l1!=_l2){
                _kS = _kZ;
                _kT = _kY;
                continue;
              }else{
                var _l3 = E(_kZ[2])[1], _l4 = E(_l0[2])[1];
                if(_l3>=_l4){
                  if(_l3!=_l4){
                    _kS = _kZ;
                    _kT = _kY;
                    continue;
                  }else{
                    var _l5 = E(_kZ[3])[1], _l6 = E(_l0[3])[1];
                    if(_l5>=_l6){
                      if(_l5!=_l6){
                        _kS = _kZ;
                        _kT = _kY;
                        continue;
                      }else{
                        var _l7 = E(_kZ[4])[1], _l8 = E(_l0[4])[1];
                        if(_l7>=_l8){
                          if(_l7!=_l8){
                            _kS = _kZ;
                            _kT = _kY;
                            continue;
                          }else{
                            return E(_kW);
                          }
                        }else{
                          _kS = _kZ;
                          _kT = _kX;
                          continue;
                        }
                      }
                    }else{
                      _kS = _kZ;
                      _kT = _kX;
                      continue;
                    }
                  }
                }else{
                  _kS = _kZ;
                  _kT = _kX;
                  continue;
                }
              }
            }else{
              _kS = _kZ;
              _kT = _kX;
              continue;
            }
          }else{
            _kS = _kZ;
            _kT = _kX;
            continue;
          }
        }else{
          _kS = _kZ;
          _kT = _kY;
          continue;
        }
      }else{
        var _l9 = dataToTag(E(_kZ)), _la = dataToTag(E(_kV));
        if(_l9>=_la){
          if(_l9!=_la){
            _kS = _kZ;
            _kT = _kY;
            continue;
          }else{
            return E(_kW);
          }
        }else{
          _kS = _kZ;
          _kT = _kX;
          continue;
        }
      }
    }else{
      return E(_kQ/* Easing.lvl27 */);
    }
  }
}, _lb/* EasingMap */ = function(_lc){
  return [0, _lc];
}, _ld/* $wanimIx */ = function(_le, _lf, _lg, _lh){
  return new F(function(){return A(_lf,[_lb/* Easing.EasingMap */, new T(function(){
    return B(A(_lf,[function(_li){
      return new F(function(){return _iM/* Easing.$sinsert_$sgo10 */(_le, _li, _lh);});
    }, new T(function(){
      return B(A(_lg,[new T(function(){
        return B(_kR/* Easing.$s!1 */(_le, _lh));
})]));
})]));
})]);});
}, _lj/* animIx */ = function(_lk, _ll, _lm, _ln){
  return new F(function(){return _ld/* Easing.$wanimIx */(_lk, E(_ll)[1], _lm, E(_ln)[1]);});
}, _lo/* lvl */ = function(_lp){
  return [0];
}, _lq/* lvl1 */ = [0, -1], _lr/* lvl2 */ = [0, _lq/* Easing.lvl1 */, _kj/* Easing.easingClass25 */], _ls/* lvl3 */ = [0, 1000], _lt/* easingClass_go */ = function(_lu){
  var _lv = E(_lu);
  if(!_lv[0]){
    return [0];
  }else{
    var _lw = _lv[1];
    return [1, [0, _b3/* React.Anim.$fAnimatableDouble */, _ls/* Easing.lvl3 */, _lr/* Easing.lvl2 */, function(_lx, _ly, _lz){
      return new F(function(){return _lj/* Easing.animIx */(_lw, _lx, _ly, _lz);});
    }, _lw, _lo/* Easing.lvl */], new T(function(){
      return B(_lt/* Easing.easingClass_go */(_lv[2]));
})];
  }
}, _lA/* lvl4 */ = [0, 1], _lB/* lvl5 */ = [0, _lA/* Easing.lvl4 */, _kj/* Easing.easingClass25 */], _lC/* easingClass_go1 */ = function(_lD){
  var _lE = E(_lD);
  if(!_lE[0]){
    return [0];
  }else{
    var _lF = _lE[1];
    return [1, [0, _b3/* React.Anim.$fAnimatableDouble */, _ls/* Easing.lvl3 */, _lB/* Easing.lvl5 */, function(_lG, _lH, _lI){
      return new F(function(){return _lj/* Easing.animIx */(_lF, _lG, _lH, _lI);});
    }, _lF, _lo/* Easing.lvl */], new T(function(){
      return B(_lC/* Easing.easingClass_go1 */(_lE[2]));
})];
  }
}, _lJ/* easingClass28 */ = function(_lK, _lL){
  var _lM = E(_lK), _lN = E(_lL), _lO = _lN[2];
  return E(_lN[1])==0 ? [0, [0, _kL/* Easing.Closed */, _lO], new T(function(){
    return B(_lC/* Easing.easingClass_go1 */(_lO));
})] : [0, [0, _kO/* Easing.Open */, _lO], new T(function(){
    return B(_lt/* Easing.easingClass_go */(_lO));
})];
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
      return [1, _8G/* GHC.Show.shows13 */, [1, _mp/* GHC.Float.$fShowDouble3 */, new T(function(){
        return B(A(_mw,[[1, _8z/* GHC.Show.shows12 */, _my]]));
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
}, _n5/* a3 */ = [0, 40], _n6/* lvl10 */ = [0, _en/* React.Attrs.height_1 */, _n5/* Easing.a3 */], _n7/* a4 */ = [0, 15], _n8/* lvl11 */ = [0, _eq/* React.Attrs.width_1 */, _n7/* Easing.a4 */], _n9/* a5 */ = [0, -20], _na/* y_3 */ = [0, 121], _nb/* y_2 */ = [1, _na/* React.Attrs.y_3 */, _b/* GHC.Types.[] */], _nc/* y_1 */ = new T(function(){
  return [0, toJSStr(_nb/* React.Attrs.y_2 */)];
}), _nd/* lvl12 */ = [0, _nc/* React.Attrs.y_1 */, _n9/* Easing.a5 */], _ne/* a6 */ = [0, -7.5], _nf/* x_3 */ = [0, 120], _ng/* x_2 */ = [1, _nf/* React.Attrs.x_3 */, _b/* GHC.Types.[] */], _nh/* x_1 */ = new T(function(){
  return [0, toJSStr(_ng/* React.Attrs.x_2 */)];
}), _ni/* lvl13 */ = [0, _nh/* React.Attrs.x_1 */, _ne/* Easing.a6 */], _nj/* a7 */ = [0, 30], _nk/* lvl14 */ = [0, _en/* React.Attrs.height_1 */, _nj/* Easing.a7 */], _nl/* lvl15 */ = [0, _eq/* React.Attrs.width_1 */, _n5/* Easing.a3 */], _nm/* a8 */ = [0, 60], _nn/* lvl16 */ = [0, _nc/* React.Attrs.y_1 */, _nm/* Easing.a8 */], _no/* a9 */ = [0, 5], _np/* lvl17 */ = [0, _nh/* React.Attrs.x_1 */, _no/* Easing.a9 */], _nq/* lvl18 */ = [0, _eq/* React.Attrs.width_1 */, _nj/* Easing.a7 */], _nr/* a10 */ = [0, -10], _ns/* lvl19 */ = [0, _nc/* React.Attrs.y_1 */, _nr/* Easing.a10 */], _nt/* a11 */ = [0, -15], _nu/* lvl20 */ = [0, _nh/* React.Attrs.x_1 */, _nt/* Easing.a11 */], _nv/* lvl21 */ = [0, _nh/* React.Attrs.x_1 */, _n7/* Easing.a4 */], _nw/* lvl23 */ = [0, _nc/* React.Attrs.y_1 */, _mV/* Easing.a13 */], _nx/* lvl24 */ = [0, _nh/* React.Attrs.x_1 */, _mV/* Easing.a13 */], _ny/* a37 */ = new T(function(){
  return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(_mY/* Easing.a33 */, _mX/* Easing.a32 */, _mW/* Easing.a31 */)))];
}), _nz/* lvl28 */ = [0, _dL/* React.Attrs.fill_1 */, _ny/* Easing.a37 */], _nA/* a12 */ = [0, 2], _nB/* lvl22 */ = [0, _en/* React.Attrs.height_1 */, _nA/* Easing.a12 */], _nC/* lvl29 */ = [1, _nz/* Easing.lvl28 */, _b/* GHC.Types.[] */], _nD/* lvl30 */ = [1, _nB/* Easing.lvl22 */, _nC/* Easing.lvl29 */], _nE/* lvl40 */ = new T(function(){
  return [1, "button-box"];
}), _nF/* lvl41 */ = [0, _9z/* React.Attrs.class_1 */, _nE/* Easing.lvl40 */], _nG/* lvl42 */ = [1, _nF/* Easing.lvl41 */, _b/* GHC.Types.[] */], _nH/* ds1 */ = new T(function(){
  var _nI = B(_96/* React.Types.$wseparateAttrs */(_nG/* Easing.lvl42 */));
  return [0, _nI[1], _nI[2]];
}), _nJ/* lvl43 */ = new T(function(){
  return E(E(_nH/* Easing.ds1 */)[2]);
}), _nK/* lvl44 */ = new T(function(){
  return E(E(_nH/* Easing.ds1 */)[1]);
}), _nL/* a28 */ = new T(function(){
  return B(unCStr("toggle easing"));
}), _nM/* a29 */ = [2, _nL/* Easing.a28 */], _nN/* a30 */ = [1, _nM/* Easing.a29 */, _b/* GHC.Types.[] */], _nO/* lvl31 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _nP/* lvl32 */ = [0, _9z/* React.Attrs.class_1 */, _nO/* Easing.lvl31 */], _nQ/* Toggle */ = 0, _nR/* x */ = [1, _nQ/* Easing.Toggle */], _nS/* lvl33 */ = function(_nT){
  var _nU = js_parseMouseEvent(E(_nT)[1]), _nV = _nU, _nW = E(_nV);
  return E(_nR/* Easing.x */);
}, _nX/* lvl34 */ = [0, _nS/* Easing.lvl33 */, _9C/* React.Types.ClickEvt */], _nY/* lvl35 */ = [1, _nX/* Easing.lvl34 */], _nZ/* lvl36 */ = [1, _nY/* Easing.lvl35 */, _b/* GHC.Types.[] */], _o0/* lvl37 */ = [1, _nP/* Easing.lvl32 */, _nZ/* Easing.lvl36 */], _o1/* ds */ = new T(function(){
  var _o2 = B(_96/* React.Types.$wseparateAttrs */(_o0/* Easing.lvl37 */));
  return [0, _o2[1], _o2[2]];
}), _o3/* lvl38 */ = new T(function(){
  return E(E(_o1/* Easing.ds */)[2]);
}), _o4/* lvl39 */ = new T(function(){
  return E(E(_o1/* Easing.ds */)[1]);
}), _o5/* lvl45 */ = [0, _9y/* React.Elements.button_1 */, _o3/* Easing.lvl38 */, _o4/* Easing.lvl39 */, _nN/* Easing.a30 */], _o6/* lvl46 */ = [1, _o5/* Easing.lvl45 */, _b/* GHC.Types.[] */], _o7/* lvl47 */ = [0, _9m/* React.Elements.div_1 */, _nJ/* Easing.lvl43 */, _nK/* Easing.lvl44 */, _o6/* Easing.lvl46 */], _o8/* lvl48 */ = [1, _o7/* Easing.lvl47 */, _b/* GHC.Types.[] */], _o9/* a25 */ = new T(function(){
  return [1, "easings"];
}), _oa/* a26 */ = [0, _9z/* React.Attrs.class_1 */, _o9/* Easing.a25 */], _ob/* a27 */ = [1, _oa/* Easing.a26 */, _b/* GHC.Types.[] */], _oc/* ds2 */ = new T(function(){
  var _od = B(_96/* React.Types.$wseparateAttrs */(_ob/* Easing.a27 */));
  return [0, _od[1], _od[2]];
}), _oe/* lvl49 */ = new T(function(){
  return E(E(_oc/* Easing.ds2 */)[2]);
}), _of/* lvl50 */ = new T(function(){
  return E(E(_oc/* Easing.ds2 */)[1]);
}), _og/* lvl51 */ = [0, 1000], _oh/* a14 */ = [0, 100], _oi/* a15 */ = [0, _eq/* React.Attrs.width_1 */, _oh/* Easing.a14 */], _oj/* a16 */ = [0, _en/* React.Attrs.height_1 */, _oh/* Easing.a14 */], _ok/* a17 */ = new T(function(){
  return [1, "0 0 100 100"];
}), _ol/* a18 */ = [0, _ej/* React.Attrs.viewBox_1 */, _ok/* Easing.a17 */], _om/* a19 */ = [1, _ol/* Easing.a18 */, _b/* GHC.Types.[] */], _on/* a20 */ = [1, _oj/* Easing.a16 */, _om/* Easing.a19 */], _oo/* a21 */ = [1, _oi/* Easing.a15 */, _on/* Easing.a20 */], _op/* ds3 */ = new T(function(){
  var _oq = B(_96/* React.Types.$wseparateAttrs */(_oo/* Easing.a21 */));
  return [0, _oq[1], _oq[2]];
}), _or/* lvl52 */ = new T(function(){
  return E(E(_op/* Easing.ds3 */)[2]);
}), _os/* lvl53 */ = new T(function(){
  return E(E(_op/* Easing.ds3 */)[1]);
}), _ot/* a */ = new T(function(){
  return [1, "caption"];
}), _ou/* a1 */ = [0, _9z/* React.Attrs.class_1 */, _ot/* Easing.a */], _ov/* a2 */ = [1, _ou/* Easing.a1 */, _b/* GHC.Types.[] */], _ow/* ds4 */ = new T(function(){
  var _ox = B(_96/* React.Types.$wseparateAttrs */(_ov/* Easing.a2 */));
  return [0, _ox[1], _ox[2]];
}), _oy/* lvl54 */ = new T(function(){
  return E(E(_ow/* Easing.ds4 */)[2]);
}), _oz/* lvl55 */ = new T(function(){
  return E(E(_ow/* Easing.ds4 */)[1]);
}), _oA/* a22 */ = new T(function(){
  return [1, "box"];
}), _oB/* a23 */ = [0, _9z/* React.Attrs.class_1 */, _oA/* Easing.a22 */], _oC/* a24 */ = [1, _oB/* Easing.a23 */, _b/* GHC.Types.[] */], _oD/* ds5 */ = new T(function(){
  var _oE = B(_96/* React.Types.$wseparateAttrs */(_oC/* Easing.a24 */));
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
        return B(_10/* GHC.Base.++ */([1, [0, _9m/* React.Elements.div_1 */, _oe/* Easing.lvl49 */, _of/* Easing.lvl50 */, new T(function(){
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
                  return B(_10/* GHC.Base.++ */([1, [0, _9m/* React.Elements.div_1 */, _oF/* Easing.lvl56 */, _oG/* Easing.lvl57 */, new T(function(){
                    return B(_10/* GHC.Base.++ */([1, [0, _ff/* React.Elements.svg_1 */, _or/* Easing.lvl52 */, _os/* Easing.lvl53 */, new T(function(){
                      var _oZ = new T(function(){
                        if(!E(_oP[1])){
                          var _p0 = [0, 1+B(_kR/* Easing.$s!1 */(_oW, _oS))[1]];
                        }else{
                          var _p0 = B(_kR/* Easing.$s!1 */(_oW, _oS));
                        }
                        return _p0;
}), _p1 = new T(function(){
                        var _p2 = B(_96/* React.Types.$wseparateAttrs */([1, _nx/* Easing.lvl24 */, [1, _nw/* Easing.lvl23 */, [1, [0, _eq/* React.Attrs.width_1 */, new T(function(){
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
                          var _p9 = B(_96/* React.Types.$wseparateAttrs */([1, _nv/* Easing.lvl21 */, [1, [0, _nc/* React.Attrs.y_1 */, new T(function(){
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
                            var _pb = B(_96/* React.Types.$wseparateAttrs */([1, _nu/* Easing.lvl20 */, [1, _ns/* Easing.lvl19 */, [1, _nq/* Easing.lvl18 */, [1, _nk/* Easing.lvl14 */, [1, _nz/* Easing.lvl28 */, [1, [0, _oL/* React.Attrs.transform_1 */, new T(function(){
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
                              var _pd = B(_96/* React.Types.$wseparateAttrs */([1, _ni/* Easing.lvl13 */, [1, _nd/* Easing.lvl12 */, [1, _n8/* Easing.lvl11 */, [1, _n6/* Easing.lvl10 */, [1, _nz/* Easing.lvl28 */, [1, [0, _oL/* React.Attrs.transform_1 */, new T(function(){
                                return [1, toJSStr(B(unAppCStr("translate(80 75) rotate(", new T(function(){
                                  return B(_10/* GHC.Base.++ */(B(_mS/* Easing.$w$ssafeShow */(E(_oZ)[1]*90)), _oI/* Easing.lvl9 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                              return [0, _pd[1], _pd[2]];
}), _pe = new T(function(){
                              var _pf = B(_96/* React.Types.$wseparateAttrs */([1, _np/* Easing.lvl17 */, [1, _nn/* Easing.lvl16 */, [1, _nl/* Easing.lvl15 */, [1, _nk/* Easing.lvl14 */, [1, [0, _dL/* React.Attrs.fill_1 */, new T(function(){
                                var _pg = B(_8g/* React.Anim.$w$cinterpolate */(_9g/* React.Types.Linear */, _mY/* Easing.a33 */, _mX/* Easing.a32 */, _mW/* Easing.a31 */, _n1/* Easing.a36 */, _n0/* Easing.a35 */, _mZ/* Easing.a34 */, _oZ));
                                return [1, toJSStr(B(_8Z/* React.Anim.$w$cshow */(_pg[1], _pg[2], _pg[3])))];
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
})], _b/* GHC.Types.[] */], [1, [0, _9m/* React.Elements.div_1 */, _oy/* Easing.lvl54 */, _oz/* Easing.lvl55 */, [1, [2, new T(function(){
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
  return [0, [1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
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
  var _pt = E(_pr);
  if(!_pt[0]){
    return [0, new T(function(){
      var _pu = E(_ps);
      return [0, _pu[1], _pu[2], _pt[1]];
}), _b/* GHC.Types.[] */];
  }else{
    var _pv = E(_ps);
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
    return E([0, [1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
      return B(_10/* GHC.Base.++ */([1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
        var _q9 = new T(function(){
          var _qa = B(_96/* React.Types.$wseparateAttrs */([1, new T(function(){
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
        return B(_10/* GHC.Base.++ */([1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
          return B(_10/* GHC.Base.++ */(_pz/* Simple.simpleClass11 */, [1, [2, new T(function(){
            return fromJSStr(E(_q7[1])[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], [1, [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
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
}, _qn/* slideClass32 */ = [0, _qi/* Slide.slideClass33 */, _9C/* React.Types.ClickEvt */], _qo/* slideClass31 */ = [1, _qn/* Slide.slideClass32 */], _qp/* slideClass30 */ = [1, _qo/* Slide.slideClass31 */, _b/* GHC.Types.[] */], _qq/* slideClass35 */ = new T(function(){
  return [1, "btn btn--m btn--gray-border"];
}), _qr/* slideClass34 */ = [0, _9z/* React.Attrs.class_1 */, _qq/* Slide.slideClass35 */], _qs/* slideClass29 */ = [1, _qr/* Slide.slideClass34 */, _qp/* Slide.slideClass30 */], _qt/* slideClass_ds1 */ = new T(function(){
  var _qu = B(_96/* React.Types.$wseparateAttrs */(_qs/* Slide.slideClass29 */));
  return [0, _qu[1], _qu[2]];
}), _qv/* slideClass_lvl1 */ = new T(function(){
  return E(E(_qt/* Slide.slideClass_ds1 */)[1]);
}), _qw/* slideClass_lvl2 */ = new T(function(){
  return E(E(_qt/* Slide.slideClass_ds1 */)[2]);
}), _qx/* slideClass25 */ = [0, _9y/* React.Elements.button_1 */, _qw/* Slide.slideClass_lvl2 */, _qv/* Slide.slideClass_lvl1 */, _qf/* Slide.slideClass26 */], _qy/* slideClass24 */ = [1, _qx/* Slide.slideClass25 */, _b/* GHC.Types.[] */], _qz/* slideClass23 */ = [0, _9m/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _qy/* Slide.slideClass24 */], _qA/* slideClass22 */ = [1, _qz/* Slide.slideClass23 */, _b/* GHC.Types.[] */], _qB/* slideClass36 */ = new T(function(){
  return [0, "width"];
}), _qC/* slideClass38 */ = new T(function(){
  return [1, "slider"];
}), _qD/* slideClass37 */ = [0, _9z/* React.Attrs.class_1 */, _qC/* Slide.slideClass38 */], _qE/* slideClass19 */ = new T(function(){
  return [1, "slider-container"];
}), _qF/* slideClass18 */ = [0, _9z/* React.Attrs.class_1 */, _qE/* Slide.slideClass19 */], _qG/* slideClass17 */ = [1, _qF/* Slide.slideClass18 */, _b/* GHC.Types.[] */], _qH/* slideClass_ds */ = new T(function(){
  var _qI = B(_96/* React.Types.$wseparateAttrs */(_qG/* Slide.slideClass17 */));
  return [0, _qI[1], _qI[2]];
}), _qJ/* slideClass_lvl19 */ = new T(function(){
  return E(E(_qH/* Slide.slideClass_ds */)[2]);
}), _qK/* slideClass_lvl20 */ = new T(function(){
  return E(E(_qH/* Slide.slideClass_ds */)[1]);
}), _qL/* slideClass16 */ = function(_qM, _qN){
  var _qO = new T(function(){
    return B(A(function(_qP){
      var _qQ = new T(function(){
        var _qR = B(_96/* React.Types.$wseparateAttrs */([1, _qD/* Slide.slideClass37 */, [1, [0, _a5/* React.Attrs.style_1 */, [4, E([1, [0, _qB/* Slide.slideClass36 */, new T(function(){
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
          return B(_10/* GHC.Base.++ */(_qA/* Slide.slideClass22 */, [1, [0, _9m/* React.Elements.div_1 */, new T(function(){
            return E(E(_qQ)[2]);
}), new T(function(){
            return E(E(_qQ)[1]);
}), _qc/* Slide.slideClass20 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_qN, _qN]));
});
  return [0, [1, [0, _9m/* React.Elements.div_1 */, _qJ/* Slide.slideClass_lvl19 */, _qK/* Slide.slideClass_lvl20 */, new T(function(){
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
}, _r3/* slideClass14 */ = [0, _b3/* React.Anim.$fAnimatableDouble */, _qV/* Slide.slideClass11 */, _qX/* Slide.slideClass15 */, _r0/* Slide.slideClass8 */, _9f/* React.Types.EaseInOutQuad */, _qY/* Slide.slideClass7 */], _r4/* slideClass13 */ = [1, _r3/* Slide.slideClass14 */, _b/* GHC.Types.[] */], _r5/* slideClass12 */ = [0, _7a/* Slide.Closed */, _r4/* Slide.slideClass13 */], _r6/* Open */ = 0, _r7/* slideClass10 */ = [0, -200], _r8/* slideClass9 */ = [0, _r7/* Slide.slideClass10 */, _qU/* Slide.slideClass2 */], _r9/* slideClass6 */ = [0, _b3/* React.Anim.$fAnimatableDouble */, _qV/* Slide.slideClass11 */, _r8/* Slide.slideClass9 */, _r0/* Slide.slideClass8 */, _9f/* React.Types.EaseInOutQuad */, _qY/* Slide.slideClass7 */], _ra/* slideClass5 */ = [1, _r9/* Slide.slideClass6 */, _b/* GHC.Types.[] */], _rb/* slideClass4 */ = [0, _r6/* Slide.Open */, _ra/* Slide.slideClass5 */], _rc/* slideClass3 */ = function(_rd, _re){
  var _rf = E(_rd);
  return E(_re)==0 ? E(_r5/* Slide.slideClass12 */) : E(_rb/* Slide.slideClass4 */);
}, _rg/* main2 */ = function(_rh, _){
  var _ri = E(_rh);
  if(!_ri[0]){
    return E(_pl/* Main.lvl */);
  }else{
    var _rj = E(_ri[2]);
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
            if(!E(_rm[2])[0]){
              var _rn = js_createClass(_q5/* Simple.simpleClass7 */), _ro = _rn, _rp = nMV(_pp/* Simple.simpleClass2 */), _rq = _rp, _rr = nMV(_r/* GHC.Tuple.() */), _rs = _rr, _rt = nMV(_b/* GHC.Types.[] */), _ru = _rt, _rv = nMV(_b/* GHC.Types.[] */), _rw = _rv, _rx = B(_6K/* React.Render.$wa */(_ri[1], _q5/* Simple.simpleClass7 */, _pq/* Simple.simpleClass6 */, [0, _rq], [0, _rs], [0, _ru], _rw, _)), _ry = _rx, _rz = js_createClass(_fg/* Circles.circlesClass9 */), _rA = _rz, _rB = nMV(_bJ/* Circles.circlesClass6 */), _rC = _rB, _rD = nMV(_bv/* Circles.circlesClass3 */), _rE = _rD, _rF = nMV(_b/* GHC.Types.[] */), _rG = _rF, _rH = nMV(_bq/* Circles.circlesClass2 */), _rI = _rH, _rJ = B(_6K/* React.Render.$wa */(_rj[1], _fg/* Circles.circlesClass9 */, _dg/* Circles.circlesClass8 */, [0, _rC], [0, _rE], [0, _rG], _rI, _)), _rK = _rJ, _rL = js_createClass(_oM/* Easing.easingClass29 */), _rM = _rL, _rN = nMV(_kN/* Easing.easingClass27 */), _rO = _rN, _rP = nMV(_kK/* Easing.easingClass2 */), _rQ = _rP, _rR = nMV(_b/* GHC.Types.[] */), _rS = _rR, _rT = nMV(_b/* GHC.Types.[] */), _rU = _rT, _rV = B(_6K/* React.Render.$wa */(_rk[1], _oM/* Easing.easingClass29 */, _lJ/* Easing.easingClass28 */, [0, _rO], [0, _rQ], [0, _rS], _rU, _)), _rW = _rV, _rX = js_createClass(_qL/* Slide.slideClass16 */), _rY = _rX, _rZ = nMV(_7a/* Slide.Closed */), _s0 = _rZ, _s1 = nMV(_qU/* Slide.slideClass2 */), _s2 = _s1, _s3 = nMV(_b/* GHC.Types.[] */), _s4 = _s3, _s5 = nMV(_b/* GHC.Types.[] */), _s6 = _s5, _s7 = B(_6K/* React.Render.$wa */(_rl[1], _qL/* Slide.slideClass16 */, _rc/* Slide.slideClass3 */, [0, _s0], [0, _s2], [0, _s4], _s6, _)), _s8 = _s7, _s9 = js_createClass(_a6/* Chain.chainClass17 */), _sa = _s9, _sb = nMV(_79/* Chain.Closed */), _sc = _sb, _sd = nMV(_aR/* Chain.chainClass2 */), _se = _sd, _sf = nMV(_b/* GHC.Types.[] */), _sg = _sf, _sh = nMV(_b/* GHC.Types.[] */), _si = _sh, _sj = B(_6K/* React.Render.$wa */(_rm[1], _a6/* Chain.chainClass17 */, _bl/* Chain.chainClass3 */, [0, _sc], [0, _se], [0, _sg], _si, _)), _sk = _sj;
              return _r/* GHC.Tuple.() */;
            }else{
              return E(_pl/* Main.lvl */);
            }
          }
        }
      }
    }
  }
}, _sl/* main12 */ = new T(function(){
  return B(unCStr("simple-demo"));
}), _sm/* main11 */ = new T(function(){
  return B(unCStr("circles-demo"));
}), _sn/* main10 */ = new T(function(){
  return B(unCStr("easing-demo"));
}), _so/* main8 */ = new T(function(){
  return B(unCStr("chain-demo"));
}), _sp/* main7 */ = [1, _so/* Main.main8 */, _b/* GHC.Types.[] */], _sq/* main9 */ = new T(function(){
  return B(unCStr("slide-demo"));
}), _sr/* main6 */ = [1, _sq/* Main.main9 */, _sp/* Main.main7 */], _ss/* main5 */ = [1, _sn/* Main.main10 */, _sr/* Main.main6 */], _st/* main4 */ = [1, _sm/* Main.main11 */, _ss/* Main.main5 */], _su/* main3 */ = [1, _sl/* Main.main12 */, _st/* Main.main4 */], _sv/* toJSStr1 */ = function(_sw){
  return [0, toJSStr(E(_sw))];
}, _sx/* main_w2 */ = new T(function(){
  return B(_3g/* GHC.Base.map */(_sv/* GHC.HastePrim.toJSStr1 */, _su/* Main.main3 */));
}), _sy/* findElems */ = function(_sz, _sA){
  while(1){
    var _sB = (function(_sC, _sD){
      var _sE = E(_sC);
      if(!_sE[0]){
        return [0];
      }else{
        var _sF = _sE[2], _sG = E(_sD);
        if(!_sG[0]){
          return [0];
        }else{
          var _sH = _sG[2];
          if(!E(_sG[1])[0]){
            return [1, _sE[1], new T(function(){
              return B(_sy/* Haste.DOM.JSString.findElems */(_sF, _sH));
})];
          }else{
            _sz = _sF;
            _sA = _sH;
            return null;
          }
        }
      }
    })(_sz, _sA);
    if(_sB!=null){
      return _sB;
    }
  }
}, _sI/* lvl */ = new T(function(){
  return B(unAppCStr("[]", _b/* GHC.Types.[] */));
}), _sJ/* lvl17 */ = [1, _18/* GHC.Show.showList__2 */, _b/* GHC.Types.[] */], _sK/* showl */ = function(_sL){
  var _sM = E(_sL);
  return _sM[0]==0 ? E(_sJ/* Haste.DOM.JSString.lvl17 */) : [1, _17/* GHC.Show.showList__1 */, new T(function(){
    return B(_10/* GHC.Base.++ */(fromJSStr(E(_sM[1])[1]), new T(function(){
      return B(_sK/* Haste.DOM.JSString.showl */(_sM[2]));
})));
})];
}, _sN/* withElems1 */ = function(_sO, _sP){
  return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ", new T(function(){
    var _sQ = B(_sy/* Haste.DOM.JSString.findElems */(_sP, _sO));
    return _sQ[0]==0 ? E(_sI/* Haste.DOM.JSString.lvl */) : [1, _19/* GHC.Show.showList__3 */, new T(function(){
      return B(_10/* GHC.Base.++ */(fromJSStr(E(_sQ[1])[1]), new T(function(){
        return B(_sK/* Haste.DOM.JSString.showl */(_sQ[2]));
})));
})];
}))));});
}, _sR/* main1 */ = function(_){
  var _sS = B(_c/* Main.main13 */(_sx/* Main.main_w2 */, _)), _sT = _sS;
  if(!B(_0/* GHC.List.any */(_9/* Data.Maybe.isNothing */, _sT))){
    return new F(function(){return _rg/* Main.main2 */(B(_3g/* GHC.Base.map */(_6/* Data.Maybe.fromJust */, _sT)), _);});
  }else{
    return new F(function(){return _sN/* Haste.DOM.JSString.withElems1 */(_sT, _sx/* Main.main_w2 */);});
  }
}, _sU/* main */ = function(_){
  return new F(function(){return _sR/* Main.main1 */(_);});
};

var hasteMain = function() {B(A(_sU, [0]));};window.onload = hasteMain;