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
            raw.shiftKey,
        ],
        raw.charCode,
        raw.key,
        raw.keyCode,
        raw.locale,
        raw.location,
        raw.repeat,
        raw.which,
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
            raw.shiftKey,
        ],
        raw.button,
        raw.clientX,
        raw.clientY,
        raw.pageX,
        raw.pageY,
        raw.screenX,
        raw.screenY,
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
        render: render,
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
}), _9l/* finalHeight */ = [0, 200], _9m/* finalWidth */ = [0, 400], _9n/* lvl */ = [0, _9m/* Chain.finalWidth */, _9l/* Chain.finalHeight */], _9o/* startHeight */ = [0, 20], _9p/* lvl1 */ = [0, _9o/* Chain.startHeight */, _9o/* Chain.startHeight */], _9q/* a6 */ = new T(function(){
  return B(unCStr("toggle"));
}), _9r/* a7 */ = [2, _9q/* Chain.a6 */], _9s/* a8 */ = [1, _9r/* Chain.a7 */, _b/* GHC.Types.[] */], _9t/* button_1 */ = new T(function(){
  return [0, "button"];
}), _9u/* ClickEvt */ = 4, _9v/* Toggle */ = 0, _9w/* x */ = [1, _9v/* Chain.Toggle */], _9x/* lvl2 */ = function(_9y){
  var _9z = js_parseMouseEvent(E(_9y)[1]), _9A = _9z, _9B = E(_9A);
  return E(_9w/* Chain.x */);
}, _9C/* lvl3 */ = [0, _9x/* Chain.lvl2 */, _9u/* React.Types.ClickEvt */], _9D/* lvl4 */ = [1, _9C/* Chain.lvl3 */], _9E/* lvl5 */ = [1, _9D/* Chain.lvl4 */, _b/* GHC.Types.[] */], _9F/* ds */ = new T(function(){
  var _9G = B(_94/* React.Types.$wseparateAttrs */(_9E/* Chain.lvl5 */));
  return [0, _9G[1], _9G[2]];
}), _9H/* lvl19 */ = new T(function(){
  return E(E(_9F/* Chain.ds */)[2]);
}), _9I/* lvl20 */ = new T(function(){
  return E(E(_9F/* Chain.ds */)[1]);
}), _9J/* lvl10 */ = [0, _9t/* React.Elements.button_1 */, _9H/* Chain.lvl19 */, _9I/* Chain.lvl20 */, _9s/* Chain.a8 */], _9K/* lvl11 */ = [1, _9J/* Chain.lvl10 */, _b/* GHC.Types.[] */], _9L/* lvl12 */ = [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _9K/* Chain.lvl11 */], _9M/* lvl13 */ = [1, _9L/* Chain.lvl12 */, _b/* GHC.Types.[] */], _9N/* a3 */ = new T(function(){
  return [1, "chain-container"];
}), _9O/* class_1 */ = new T(function(){
  return [0, "className"];
}), _9P/* a4 */ = [0, _9O/* React.Attrs.class_1 */, _9N/* Chain.a3 */], _9Q/* a5 */ = [1, _9P/* Chain.a4 */, _b/* GHC.Types.[] */], _9R/* ds1 */ = new T(function(){
  var _9S = B(_94/* React.Types.$wseparateAttrs */(_9Q/* Chain.a5 */));
  return [0, _9S[1], _9S[2]];
}), _9T/* lvl14 */ = new T(function(){
  return E(E(_9R/* Chain.ds1 */)[2]);
}), _9U/* lvl15 */ = new T(function(){
  return E(E(_9R/* Chain.ds1 */)[1]);
}), _9V/* a9 */ = new T(function(){
  return [1, "chaining"];
}), _9W/* lvl6 */ = [0, _9O/* React.Attrs.class_1 */, _9V/* Chain.a9 */], _9X/* lvl7 */ = new T(function(){
  return [0, "width"];
}), _9Y/* lvl8 */ = new T(function(){
  return [0, "height"];
}), _9Z/* lvl9 */ = new T(function(){
  return [0, "background-color"];
}), _a0/* style_1 */ = new T(function(){
  return [0, "style"];
}), _a1/* chainClass17 */ = function(_a2, _a3){
  var _a4 = new T(function(){
    return B(A(function(_a5){
      var _a6 = new T(function(){
        var _a7 = new T(function(){
          var _a8 = E(_a5);
          if(!E(_a2)){
            var _a9 = [0, _a8[1]+1];
          }else{
            var _a9 = E(_a8);
          }
          var _aa = _a9;
          return _aa;
}), _ab = new T(function(){
          var _ac = E(E(_a7)[1]);
          if(!_ac){
            var _ad = E(_9p/* Chain.lvl1 */);
          }else{
            if(_ac>=0.3333333333333333){
              if(_ac>=0.6666666666666666){
                var _ae = _ac>=1 ? E(_9n/* Chain.lvl */) : [0, _9m/* Chain.finalWidth */, new T(function(){
                  var _af = (_ac-0.3333333333333333)*1.5;
                  if(_af>0){
                    if(_af<1){
                      var _ag = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _af]))[1]*180];
                    }else{
                      var _ag = E(_9l/* Chain.finalHeight */);
                    }
                    var _ah = _ag, _ai = _ah;
                  }else{
                    var _ai = E(_9o/* Chain.startHeight */);
                  }
                  var _aj = _ai, _ak = _aj, _al = _ak;
                  return _al;
})];
              }else{
                var _ae = [0, new T(function(){
                  var _am = _ac*1.5;
                  if(_am>0){
                    if(_am<1){
                      var _an = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _am]))[1]*380];
                    }else{
                      var _an = E(_9m/* Chain.finalWidth */);
                    }
                    var _ao = _an, _ap = _ao;
                  }else{
                    var _ap = E(_9o/* Chain.startHeight */);
                  }
                  var _aq = _ap, _ar = _aq;
                  return _ar;
}), new T(function(){
                  var _as = (_ac-0.3333333333333333)*1.5;
                  if(_as>0){
                    if(_as<1){
                      var _at = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _as]))[1]*180];
                    }else{
                      var _at = E(_9l/* Chain.finalHeight */);
                    }
                    var _au = _at, _av = _au;
                  }else{
                    var _av = E(_9o/* Chain.startHeight */);
                  }
                  var _aw = _av, _ax = _aw, _ay = _ax;
                  return _ay;
})];
              }
              var _az = _ae, _aA = _az;
            }else{
              var _aA = [0, new T(function(){
                var _aB = _ac*1.5;
                if(_aB>0){
                  if(_aB<1){
                    var _aC = [0, 20+B(_7N/* React.Anim.easeDouble */(_9d/* React.Types.EaseInOutQuad */, [0, _aB]))[1]*380];
                  }else{
                    var _aC = E(_9m/* Chain.finalWidth */);
                  }
                  var _aD = _aC, _aE = _aD;
                }else{
                  var _aE = E(_9o/* Chain.startHeight */);
                }
                var _aF = _aE, _aG = _aF;
                return _aG;
}), _9o/* Chain.startHeight */];
            }
            var _aH = _aA, _ad = _aH;
          }
          var _aI = _ad;
          return _aI;
}), _aJ = B(_94/* React.Types.$wseparateAttrs */([1, _9W/* Chain.lvl6 */, [1, [0, _a0/* React.Attrs.style_1 */, [4, E([1, [0, _9X/* Chain.lvl7 */, new T(function(){
          return [0, E(E(_ab)[1])[1]];
})], [1, [0, _9Y/* Chain.lvl8 */, new T(function(){
          return [0, E(E(_ab)[2])[1]];
})], [1, [0, _9Z/* Chain.lvl9 */, new T(function(){
          var _aK = B(_8e/* React.Anim.$w$cinterpolate */(_9e/* React.Types.Linear */, _9f/* Chain.a */, _9f/* Chain.a */, _9j/* Chain.a2 */, _9f/* Chain.a */, _9g/* Chain.a1 */, _9j/* Chain.a2 */, _a7));
          return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_aK[1], _aK[2], _aK[3])))];
})], _b/* GHC.Types.[] */]]])]], _b/* GHC.Types.[] */]]));
        return [0, _aJ[1], _aJ[2]];
});
      return function(_aL){
        return [0, new T(function(){
          return B(_10/* GHC.Base.++ */(_9M/* Chain.lvl13 */, [1, [0, _9k/* React.Elements.div_1 */, new T(function(){
            return E(E(_a6)[2]);
}), new T(function(){
            return E(E(_a6)[1]);
}), _9i/* Chain.a11 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_a3, _a3]));
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _9T/* Chain.lvl14 */, _9U/* Chain.lvl15 */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_a4)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_a4)[2]);
})];
}, _aM/* chainClass2 */ = [0, 0], _aN/* $w$cinterpolate1 */ = function(_aO, _aP, _aQ, _aR){
  if(_aR>0){
    if(_aR<1){
      var _aS = E(_aP)[1];
      return [0, _aS+B(_7N/* React.Anim.easeDouble */(_aO, [0, _aR]))[1]*(E(_aQ)[1]-_aS)];
    }else{
      return E(_aQ);
    }
  }else{
    return E(_aP);
  }
}, _aT/* $fAnimatableDouble_$cinterpolate */ = function(_aU, _aV, _aW, _aX){
  return new F(function(){return _aN/* React.Anim.$w$cinterpolate1 */(_aU, _aV, _aW, E(_aX)[1]);});
}, _aY/* $fAnimatableDouble */ = [0, _aT/* React.Anim.$fAnimatableDouble_$cinterpolate */, _4x/* GHC.Float.plusDouble */, _4s/* GHC.Float.minusDouble */, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */], _aZ/* chainClass11 */ = [0, 1000], _b0/* chainClass16 */ = [0, 1], _b1/* chainClass15 */ = [0, _b0/* Chain.chainClass16 */, _aM/* Chain.chainClass2 */], _b2/* chainClass7 */ = function(_b3){
  return [0];
}, _b4/* chainClass8 */ = function(_b5, _b6){
  return E(_b6);
}, _b7/* chainClass14 */ = [0, _aY/* React.Anim.$fAnimatableDouble */, _aZ/* Chain.chainClass11 */, _b1/* Chain.chainClass15 */, _b4/* Chain.chainClass8 */, _9d/* React.Types.EaseInOutQuad */, _b2/* Chain.chainClass7 */], _b8/* chainClass13 */ = [1, _b7/* Chain.chainClass14 */, _b/* GHC.Types.[] */], _b9/* chainClass12 */ = [0, _77/* Chain.Closed */, _b8/* Chain.chainClass13 */], _ba/* Open */ = 0, _bb/* chainClass10 */ = [0, -1], _bc/* chainClass9 */ = [0, _bb/* Chain.chainClass10 */, _aM/* Chain.chainClass2 */], _bd/* chainClass6 */ = [0, _aY/* React.Anim.$fAnimatableDouble */, _aZ/* Chain.chainClass11 */, _bc/* Chain.chainClass9 */, _b4/* Chain.chainClass8 */, _9d/* React.Types.EaseInOutQuad */, _b2/* Chain.chainClass7 */], _be/* chainClass5 */ = [1, _bd/* Chain.chainClass6 */, _b/* GHC.Types.[] */], _bf/* chainClass4 */ = [0, _ba/* Chain.Open */, _be/* Chain.chainClass5 */], _bg/* chainClass3 */ = function(_bh, _bi){
  if(!E(_bh)){
    var _bj = E(_bi);
    return E(_b9/* Chain.chainClass12 */);
  }else{
    var _bk = E(_bi);
    return E(_bf/* Chain.chainClass4 */);
  }
}, _bl/* circle_1 */ = new T(function(){
  return [0, "circle"];
}), _bm/* $WNum */ = function(_bn){
  return [0, E(_bn)[1]];
}, _bo/* cx_1 */ = new T(function(){
  return [0, "cx"];
}), _bp/* cx_ */ = function(_bq){
  return [0, _bo/* React.Attrs.cx_1 */, new T(function(){
    return B(_bm/* Haste.JSON.$WNum */(_bq));
})];
}, _br/* cy_1 */ = new T(function(){
  return [0, "cy"];
}), _bs/* cy_ */ = function(_bt){
  return [0, _br/* React.Attrs.cy_1 */, new T(function(){
    return B(_bm/* Haste.JSON.$WNum */(_bt));
})];
}, _bu/* fill_1 */ = new T(function(){
  return [0, "fill"];
}), _bv/* a3 */ = [0, 0.15], _bw/* r_3 */ = [0, 114], _bx/* r_2 */ = [1, _bw/* React.Attrs.r_3 */, _b/* GHC.Types.[] */], _by/* r_1 */ = new T(function(){
  return [0, toJSStr(_bx/* React.Attrs.r_2 */)];
}), _bz/* lvl2 */ = [0, _by/* React.Attrs.r_1 */, _bv/* Circles.a3 */], _bA/* $wonClick */ = function(_bB){
  return [0, function(_bC){
    var _bD = js_parseMouseEvent(E(_bC)[1]), _bE = _bD;
    return new F(function(){return A(_bB,[E(_bE)]);});
  }, _9u/* React.Types.ClickEvt */];
}, _bF/* onClick */ = function(_bG){
  return [1, B(_bA/* React.Events.$wonClick */(_bG))];
}, _bH/* $wcirc' */ = function(_bI, _bJ, _bK, _bL){
  var _bM = new T(function(){
    var _bN = B(_94/* React.Types.$wseparateAttrs */([1, new T(function(){
      return B(_bp/* React.Attrs.cx_ */(_bJ));
}), [1, new T(function(){
      return B(_bs/* React.Attrs.cy_ */(_bK));
}), [1, _bz/* Circles.lvl2 */, [1, [0, _bu/* React.Attrs.fill_1 */, new T(function(){
      var _bO = E(_bL);
      return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_bO[1], _bO[2], _bO[3])))];
})], [1, new T(function(){
      return B(_bF/* React.Events.onClick */(_bI));
}), _b/* GHC.Types.[] */]]]]]));
    return [0, _bN[1], _bN[2]];
});
  return function(_bP){
    return E([0, [1, [1, _bl/* React.Elements.circle_1 */, new T(function(){
      return E(E(_bM)[2]);
}), new T(function(){
      return E(E(_bM)[1]);
})], _b/* GHC.Types.[] */], _r/* GHC.Tuple.() */]);
  };
}, _bQ/* a */ = [0, 85], _bR/* a1 */ = [0, 161], _bS/* a2 */ = [0, 220], _bT/* fillblue */ = [0, _bQ/* Circles.a */, _bR/* Circles.a1 */, _bS/* Circles.a2 */], _bU/* lvl */ = [0, -1], _bV/* lvl1 */ = [0, 1], _bW/* a4 */ = [0, 600], _bX/* height_1 */ = new T(function(){
  return [0, "height"];
}), _bY/* a6 */ = [0, _bX/* React.Attrs.height_1 */, _bW/* Circles.a4 */], _bZ/* a7 */ = new T(function(){
  return [1, "-1.5 -1.5 3 3"];
}), _c0/* viewBox_1 */ = new T(function(){
  return [0, "viewBox"];
}), _c1/* a8 */ = [0, _c0/* React.Attrs.viewBox_1 */, _bZ/* Circles.a7 */], _c2/* a9 */ = [1, _c1/* Circles.a8 */, _b/* GHC.Types.[] */], _c3/* a10 */ = [1, _bY/* Circles.a6 */, _c2/* Circles.a9 */], _c4/* width_1 */ = new T(function(){
  return [0, "width"];
}), _c5/* a5 */ = [0, _c4/* React.Attrs.width_1 */, _bW/* Circles.a4 */], _c6/* a11 */ = [1, _c5/* Circles.a5 */, _c3/* Circles.a10 */], _c7/* ds */ = new T(function(){
  var _c8 = B(_94/* React.Types.$wseparateAttrs */(_c6/* Circles.a11 */));
  return [0, _c8[1], _c8[2]];
}), _c9/* lvl12 */ = new T(function(){
  return E(E(_c7/* Circles.ds */)[2]);
}), _ca/* lvl13 */ = new T(function(){
  return E(E(_c7/* Circles.ds */)[1]);
}), _cb/* C4 */ = 3, _cc/* a15 */ = [0, _cb/* Circles.C4 */], _cd/* x */ = [1, _cc/* Circles.a15 */], _ce/* lvl14 */ = function(_cf){
  return E(_cd/* Circles.x */);
}, _cg/* C3 */ = 2, _ch/* a16 */ = [0, _cg/* Circles.C3 */], _ci/* x1 */ = [1, _ch/* Circles.a16 */], _cj/* lvl15 */ = function(_ck){
  return E(_ci/* Circles.x1 */);
}, _cl/* C2 */ = 1, _cm/* a17 */ = [0, _cl/* Circles.C2 */], _cn/* x2 */ = [1, _cm/* Circles.a17 */], _co/* lvl16 */ = function(_cp){
  return E(_cn/* Circles.x2 */);
}, _cq/* C1 */ = 0, _cr/* circlesClass3 */ = [0, _cq/* Circles.C1 */], _cs/* x3 */ = [1, _cr/* Circles.circlesClass3 */], _ct/* lvl17 */ = function(_cu){
  return E(_cs/* Circles.x3 */);
}, _cv/* lvl3 */ = function(_cw){
  return [0];
}, _cx/* svg_1 */ = new T(function(){
  return [0, "svg"];
}), _cy/* circlesClass10 */ = function(_cz, _cA){
  var _cB = new T(function(){
    var _cC = E(_cA), _cD = _cC[5], _cE = new T(function(){
      switch(E(E(_cz)[1])){
        case 0:
          var _cF = E(_cD), _cG = B(A(_bH/* Circles.$wcirc' */,[_cv/* Circles.lvl3 */, new T(function(){
            return [0, -1-E(_cF[1])[1]];
}), new T(function(){
            return [0, -1-E(_cF[2])[1]];
}), _bT/* Circles.fillblue */, _cC]));
          break;
        case 1:
          var _cH = E(_cD), _cG = B(A(_bH/* Circles.$wcirc' */,[_cv/* Circles.lvl3 */, new T(function(){
            return [0, 1-E(_cH[1])[1]];
}), new T(function(){
            return [0, -1-E(_cH[2])[1]];
}), _bT/* Circles.fillblue */, _cC]));
          break;
        case 2:
          var _cI = E(_cD), _cG = B(A(_bH/* Circles.$wcirc' */,[_cv/* Circles.lvl3 */, new T(function(){
            return [0, 1-E(_cI[1])[1]];
}), new T(function(){
            return [0, 1-E(_cI[2])[1]];
}), _bT/* Circles.fillblue */, _cC]));
          break;
        default:
          var _cJ = E(_cD), _cG = B(A(_bH/* Circles.$wcirc' */,[_cv/* Circles.lvl3 */, new T(function(){
            return [0, -1-E(_cJ[1])[1]];
}), new T(function(){
            return [0, 1-E(_cJ[2])[1]];
}), _bT/* Circles.fillblue */, _cC]));
      }
      return _cG;
});
    return [0, [1, [0, _cx/* React.Elements.svg_1 */, _c9/* Circles.lvl12 */, _ca/* Circles.lvl13 */, new T(function(){
      return B(_10/* GHC.Base.++ */(B(A(_bH/* Circles.$wcirc' */,[_ct/* Circles.lvl17 */, _bU/* Circles.lvl */, _bU/* Circles.lvl */, new T(function(){
        var _cK = E(_cC[1]);
        return [0, new T(function(){
          return [0, 85+E(_cK[1])[1]|0];
}), new T(function(){
          return [0, 161+E(_cK[2])[1]|0];
}), new T(function(){
          return [0, 220+E(_cK[3])[1]|0];
})];
}), _cC]))[1], new T(function(){
        return B(_10/* GHC.Base.++ */(B(A(_bH/* Circles.$wcirc' */,[_co/* Circles.lvl16 */, _bV/* Circles.lvl1 */, _bU/* Circles.lvl */, new T(function(){
          var _cL = E(_cC[2]);
          return [0, new T(function(){
            return [0, 85+E(_cL[1])[1]|0];
}), new T(function(){
            return [0, 161+E(_cL[2])[1]|0];
}), new T(function(){
            return [0, 220+E(_cL[3])[1]|0];
})];
}), _cC]))[1], new T(function(){
          return B(_10/* GHC.Base.++ */(B(A(_bH/* Circles.$wcirc' */,[_cj/* Circles.lvl15 */, _bV/* Circles.lvl1 */, _bV/* Circles.lvl1 */, new T(function(){
            var _cM = E(_cC[3]);
            return [0, new T(function(){
              return [0, 85+E(_cM[1])[1]|0];
}), new T(function(){
              return [0, 161+E(_cM[2])[1]|0];
}), new T(function(){
              return [0, 220+E(_cM[3])[1]|0];
})];
}), _cC]))[1], new T(function(){
            return B(_10/* GHC.Base.++ */(B(A(_bH/* Circles.$wcirc' */,[_ce/* Circles.lvl14 */, _bU/* Circles.lvl */, _bV/* Circles.lvl1 */, new T(function(){
              var _cN = E(_cC[4]);
              return [0, new T(function(){
                return [0, 85+E(_cN[1])[1]|0];
}), new T(function(){
                return [0, 161+E(_cN[2])[1]|0];
}), new T(function(){
                return [0, 220+E(_cN[3])[1]|0];
})];
}), _cC]))[1], new T(function(){
              return E(E(_cE)[1]);
})));
})));
})));
})));
})], _b/* GHC.Types.[] */], new T(function(){
      return E(E(_cE)[2]);
})];
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_cB)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_cB)[2]);
})];
}, _cO/* circlesClass2 */ = [1, _cr/* Circles.circlesClass3 */, _b/* GHC.Types.[] */], _cP/* $fAnimatableColor1 */ = [0, 0], _cQ/* $fAnimatableColor_$canimZero */ = [0, _cP/* React.Anim.$fAnimatableColor1 */, _cP/* React.Anim.$fAnimatableColor1 */, _cP/* React.Anim.$fAnimatableColor1 */], _cR/* circlesClass6 */ = [0, 0], _cS/* circlesClass5 */ = [0, _cR/* Circles.circlesClass6 */, _cR/* Circles.circlesClass6 */], _cT/* circlesClass4 */ = [0, _cQ/* React.Anim.$fAnimatableColor_$canimZero */, _cQ/* React.Anim.$fAnimatableColor_$canimZero */, _cQ/* React.Anim.$fAnimatableColor_$canimZero */, _cQ/* React.Anim.$fAnimatableColor_$canimZero */, _cS/* Circles.circlesClass5 */], _cU/* lvl28 */ = [1, _cb/* Circles.C4 */, _b/* GHC.Types.[] */], _cV/* lvl29 */ = [1, _cl/* Circles.C2 */, _cU/* Circles.lvl28 */], _cW/* lvl30 */ = [1, _cg/* Circles.C3 */, _cV/* Circles.lvl29 */], _cX/* lvl31 */ = [1, _cq/* Circles.C1 */, _cW/* Circles.lvl30 */], _cY/* circlesClass_xs' */ = new T(function(){
  return B(_10/* GHC.Base.++ */(_cX/* Circles.lvl31 */, _cY/* Circles.circlesClass_xs' */));
}), _cZ/* lvl10 */ = new T(function(){
  return B(unCStr("tail"));
}), _d0/* tail1 */ = new T(function(){
  return B(_8N/* GHC.List.errorEmptyList */(_cZ/* GHC.List.lvl10 */));
}), _d1/* circlesClass8 */ = new T(function(){
  var _d2 = E(_cY/* Circles.circlesClass_xs' */);
  return _d2[0]==0 ? E(_d0/* GHC.List.tail1 */) : E(_d2[2]);
}), _d3/* circlesClass7 */ = [0, _cq/* Circles.C1 */, _d1/* Circles.circlesClass8 */], _d4/* $fAnimatable(,)_$canimAdd */ = function(_d5, _d6, _d7, _d8){
  var _d9 = E(_d7), _da = E(_d8);
  return [0, new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_d5, _d9[1], _da[1]]));
}), new T(function(){
    return B(A(_5l/* React.Types.animAdd */,[_d6, _d9[2], _da[2]]));
})];
}, _db/* animSub */ = function(_dc){
  return E(E(_dc)[3]);
}, _dd/* $fAnimatable(,)_$canimSub */ = function(_de, _df, _dg, _dh){
  var _di = E(_dg), _dj = E(_dh);
  return [0, new T(function(){
    return B(A(_db/* React.Types.animSub */,[_de, _di[1], _dj[1]]));
}), new T(function(){
    return B(A(_db/* React.Types.animSub */,[_df, _di[2], _dj[2]]));
})];
}, _dk/* $fAnimatable(,)_$canimZero */ = function(_dl, _dm){
  return [0, new T(function(){
    return B(_5n/* React.Types.animZero */(_dl));
}), new T(function(){
    return B(_5n/* React.Types.animZero */(_dm));
})];
}, _dn/* $fAnimatable(,)_$cinterpolate */ = function(_do, _dp, _dq, _dr, _ds, _dt){
  var _du = E(_dr), _dv = E(_ds);
  return [0, new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_do, _dq, _du[1], _dv[1], _dt]));
}), new T(function(){
    return B(A(_5p/* React.Types.interpolate */,[_dp, _dq, _du[2], _dv[2], _dt]));
})];
}, _dw/* $fAnimatable(,) */ = function(_dx, _dy){
  return [0, function(_dz, _dA, _dB, _dC){
    return new F(function(){return _dn/* React.Anim.$fAnimatable(,)_$cinterpolate */(_dx, _dy, _dz, _dA, _dB, _dC);});
  }, function(_dB, _dC){
    return new F(function(){return _d4/* React.Anim.$fAnimatable(,)_$canimAdd */(_dx, _dy, _dB, _dC);});
  }, function(_dB, _dC){
    return new F(function(){return _dd/* React.Anim.$fAnimatable(,)_$canimSub */(_dx, _dy, _dB, _dC);});
  }, new T(function(){
    return B(_dk/* React.Anim.$fAnimatable(,)_$canimZero */(_dx, _dy));
})];
}, _dD/* $dAnimatable */ = new T(function(){
  return B(_dw/* React.Anim.$fAnimatable(,) */(_aY/* React.Anim.$fAnimatableDouble */, _aY/* React.Anim.$fAnimatableDouble */));
}), _dE/* $fNumInt_$c+ */ = function(_dF, _dG){
  return [0, E(_dF)[1]+E(_dG)[1]|0];
}, _dH/* $fAnimatableColor_$canimAdd */ = function(_dI, _dJ){
  var _dK = E(_dI), _dL = E(_dJ);
  return [0, new T(function(){
    return B(_dE/* GHC.Num.$fNumInt_$c+ */(_dK[1], _dL[1]));
}), new T(function(){
    return B(_dE/* GHC.Num.$fNumInt_$c+ */(_dK[2], _dL[2]));
}), new T(function(){
    return B(_dE/* GHC.Num.$fNumInt_$c+ */(_dK[3], _dL[3]));
})];
}, _dM/* $fNumInt_$c- */ = function(_dN, _dO){
  return [0, E(_dN)[1]-E(_dO)[1]|0];
}, _dP/* $fAnimatableColor_$canimSub */ = function(_dQ, _dR){
  var _dS = E(_dQ), _dT = E(_dR);
  return [0, new T(function(){
    return B(_dM/* GHC.Num.$fNumInt_$c- */(_dS[1], _dT[1]));
}), new T(function(){
    return B(_dM/* GHC.Num.$fNumInt_$c- */(_dS[2], _dT[2]));
}), new T(function(){
    return B(_dM/* GHC.Num.$fNumInt_$c- */(_dS[3], _dT[3]));
})];
}, _dU/* $fAnimatableColor_$cinterpolate */ = function(_dV, _dW, _dX, _dY){
  var _dZ = E(_dW), _e0 = E(_dX), _e1 = B(_8e/* React.Anim.$w$cinterpolate */(_dV, _dZ[1], _dZ[2], _dZ[3], _e0[1], _e0[2], _e0[3], _dY));
  return [0, _e1[1], _e1[2], _e1[3]];
}, _e2/* $fAnimatableColor */ = [0, _dU/* React.Anim.$fAnimatableColor_$cinterpolate */, _dH/* React.Anim.$fAnimatableColor_$canimAdd */, _dP/* React.Anim.$fAnimatableColor_$canimSub */, _cQ/* React.Anim.$fAnimatableColor_$canimZero */], _e3/* EaseInQuad */ = [1], _e4/* fmap */ = function(_e5){
  return E(E(_e5)[1]);
}, _e6/* lvl10 */ = function(_e7, _e8, _e9){
  var _ea = E(_e9);
  return new F(function(){return A(_e4/* GHC.Base.fmap */,[_e7, function(_eb){
    return [0, _ea[1], _ea[2], _ea[3], _ea[4], _eb];
  }, new T(function(){
    return B(A(_e8,[_ea[5]]));
})]);});
}, _ec/* lvl11 */ = function(_ed){
  return [0];
}, _ee/* lvl18 */ = [0, -2], _ef/* lvl19 */ = [0, _ee/* Circles.lvl18 */, _cR/* Circles.circlesClass6 */], _eg/* lvl20 */ = [0, _ee/* Circles.lvl18 */, _ee/* Circles.lvl18 */], _eh/* lvl21 */ = [0, _cR/* Circles.circlesClass6 */, _ee/* Circles.lvl18 */], _ei/* lvl22 */ = [0, 2], _ej/* lvl23 */ = [0, _ei/* Circles.lvl22 */, _cR/* Circles.circlesClass6 */], _ek/* lvl24 */ = [0, _ei/* Circles.lvl22 */, _ee/* Circles.lvl18 */], _el/* lvl25 */ = [0, _ei/* Circles.lvl22 */, _ei/* Circles.lvl22 */], _em/* lvl26 */ = [0, _cR/* Circles.circlesClass6 */, _ei/* Circles.lvl22 */], _en/* lvl27 */ = [0, _ee/* Circles.lvl18 */, _ei/* Circles.lvl22 */], _eo/* lvl4 */ = new T(function(){
  return B(_2a/* Control.Exception.Base.patError */("Circles.hs:(70,1)-(77,8)|function transition"));
}), _ep/* lvl5 */ = [0, 800], _eq/* a12 */ = [0, 160], _er/* a13 */ = [0, 14], _es/* a14 */ = [0, -169], _et/* lvl6 */ = [0, _eq/* Circles.a12 */, _er/* Circles.a13 */, _es/* Circles.a14 */], _eu/* lvl7 */ = [0, _et/* Circles.lvl6 */, _cQ/* React.Anim.$fAnimatableColor_$canimZero */], _ev/* lvl8 */ = [0, 2000], _ew/* lvl9 */ = [0, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */, _7a/* React.Anim.$fAnimatableColor_$canimZero1 */], _ex/* circlesClass9 */ = function(_ey, _ez){
  var _eA = E(_ey), _eB = _eA[1], _eC = E(_eA[2]);
  if(!_eC[0]){
    return E(_eo/* Circles.lvl4 */);
  }else{
    var _eD = _eC[1], _eE = E(_ez);
    return [0, [0, _eD, _eC[2]], [1, [0, _e2/* React.Anim.$fAnimatableColor */, _ep/* Circles.lvl5 */, _eu/* Circles.lvl7 */, function(_eF, _eG, _eH){
      switch(E(_eD)){
        case 0:
          var _eI = E(_eH);
          return new F(function(){return A(_e4/* GHC.Base.fmap */,[_eF, function(_eJ){
            return [0, _eJ, _eI[2], _eI[3], _eI[4], _eI[5]];
          }, new T(function(){
            return B(A(_eG,[_eI[1]]));
})]);});
          break;
        case 1:
          var _eK = E(_eH);
          return new F(function(){return A(_e4/* GHC.Base.fmap */,[_eF, function(_eL){
            return [0, _eK[1], _eL, _eK[3], _eK[4], _eK[5]];
          }, new T(function(){
            return B(A(_eG,[_eK[2]]));
})]);});
          break;
        case 2:
          var _eM = E(_eH);
          return new F(function(){return A(_e4/* GHC.Base.fmap */,[_eF, function(_eN){
            return [0, _eM[1], _eM[2], _eN, _eM[4], _eM[5]];
          }, new T(function(){
            return B(A(_eG,[_eM[3]]));
})]);});
          break;
        default:
          var _eO = E(_eH);
          return new F(function(){return A(_e4/* GHC.Base.fmap */,[_eF, function(_eP){
            return [0, _eO[1], _eO[2], _eO[3], _eP, _eO[5]];
          }, new T(function(){
            return B(A(_eG,[_eO[4]]));
})]);});
      }
    }, _e3/* React.Types.EaseInQuad */, function(_eQ){
      return E([1, [0, _eD]]);
    }], [1, [0, _dD/* Circles.$dAnimatable */, _ev/* Circles.lvl8 */, [0, new T(function(){
      switch(E(_eD)){
        case 0:
          switch(E(_eB)){
            case 0:
              var _eR = E(_cS/* Circles.circlesClass5 */);
              break;
            case 1:
              var _eR = E(_ef/* Circles.lvl19 */);
              break;
            case 2:
              var _eR = E(_eg/* Circles.lvl20 */);
              break;
            default:
              var _eR = E(_eh/* Circles.lvl21 */);
          }
          var _eS = _eR;
          break;
        case 1:
          switch(E(_eB)){
            case 0:
              var _eT = E(_ej/* Circles.lvl23 */);
              break;
            case 1:
              var _eT = E(_cS/* Circles.circlesClass5 */);
              break;
            case 2:
              var _eT = E(_eh/* Circles.lvl21 */);
              break;
            default:
              var _eT = E(_ek/* Circles.lvl24 */);
          }
          var _eS = _eT;
          break;
        case 2:
          switch(E(_eB)){
            case 0:
              var _eU = E(_el/* Circles.lvl25 */);
              break;
            case 1:
              var _eU = E(_em/* Circles.lvl26 */);
              break;
            case 2:
              var _eU = E(_cS/* Circles.circlesClass5 */);
              break;
            default:
              var _eU = E(_ej/* Circles.lvl23 */);
          }
          var _eS = _eU;
          break;
        default:
          switch(E(_eB)){
            case 0:
              var _eV = E(_em/* Circles.lvl26 */);
              break;
            case 1:
              var _eV = E(_en/* Circles.lvl27 */);
              break;
            case 2:
              var _eV = E(_ef/* Circles.lvl19 */);
              break;
            default:
              var _eV = E(_cS/* Circles.circlesClass5 */);
          }
          var _eS = _eV;
      }
      return _eS;
}), _ew/* Circles.lvl9 */], _e6/* Circles.lvl10 */, _9d/* React.Types.EaseInOutQuad */, _ec/* Circles.lvl11 */], _b/* GHC.Types.[] */]]];
  }
}, _eW/* $fOrdDouble_$ccompare */ = function(_eX, _eY){
  var _eZ = E(_eX)[1], _f0 = E(_eY)[1];
  return _eZ>=_f0 ? _eZ!=_f0 ? 2 : 1 : 0;
}, _f1/* $fOrdEasing_$ccompare */ = function(_f2, _f3){
  var _f4 = E(_f2);
  if(_f4[0]==19){
    var _f5 = E(_f3);
    if(dataToTag(E(_f5))>=19){
      var _f6 = E(_f5);
      if(_f6[0]==19){
        var _f7 = E(_f4[1])[1], _f8 = E(_f6[1])[1];
        if(_f7>=_f8){
          if(_f7!=_f8){
            return 2;
          }else{
            var _f9 = E(_f4[2])[1], _fa = E(_f6[2])[1];
            if(_f9>=_fa){
              if(_f9!=_fa){
                return 2;
              }else{
                var _fb = E(_f4[3])[1], _fc = E(_f6[3])[1];
                return _fb>=_fc ? _fb!=_fc ? 2 : B(_eW/* GHC.Classes.$fOrdDouble_$ccompare */(_f4[4], _f6[4])) : 0;
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
    var _fd = dataToTag(E(E(_f3))), _fe = dataToTag(E(_f4));
    return _fe>=_fd ? _fe!=_fd ? 2 : 1 : 0;
  }
}, _ff/* Tip */ = [1], _fg/* lvl8 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceR"));
}), _fh/* $wpoly_fail */ = function(_fi){
  return new F(function(){return err(_fg/* Data.Map.Base.lvl8 */);});
}, _fj/* lvl9 */ = new T(function(){
  return B(_fh/* Data.Map.Base.$wpoly_fail */(_));
}), _fk/* balanceR */ = function(_fl, _fm, _fn, _fo){
  var _fp = E(_fn);
  if(!_fp[0]){
    var _fq = _fp[1], _fr = E(_fo);
    if(!_fr[0]){
      var _fs = _fr[1], _ft = _fr[2], _fu = _fr[3];
      if(_fs<=(imul(3, _fq)|0)){
        return [0, (1+_fq|0)+_fs|0, E(E(_fl)), _fm, E(_fp), E(_fr)];
      }else{
        var _fv = E(_fr[4]);
        if(!_fv[0]){
          var _fw = _fv[1], _fx = _fv[2], _fy = _fv[3], _fz = _fv[4], _fA = E(_fr[5]);
          if(!_fA[0]){
            var _fB = _fA[1];
            if(_fw>=(imul(2, _fB)|0)){
              var _fC = function(_fD){
                var _fE = E(_fl), _fF = E(_fv[5]);
                return _fF[0]==0 ? [0, (1+_fq|0)+_fs|0, E(_fx), _fy, E([0, (1+_fq|0)+_fD|0, E(_fE), _fm, E(_fp), E(_fz)]), E([0, (1+_fB|0)+_fF[1]|0, E(_ft), _fu, E(_fF), E(_fA)])] : [0, (1+_fq|0)+_fs|0, E(_fx), _fy, E([0, (1+_fq|0)+_fD|0, E(_fE), _fm, E(_fp), E(_fz)]), E([0, 1+_fB|0, E(_ft), _fu, E(_ff/* Data.Map.Base.Tip */), E(_fA)])];
              }, _fG = E(_fz);
              return _fG[0]==0 ? B(_fC(_fG[1])) : B(_fC(0));
            }else{
              return [0, (1+_fq|0)+_fs|0, E(_ft), _fu, E([0, (1+_fq|0)+_fw|0, E(E(_fl)), _fm, E(_fp), E(_fv)]), E(_fA)];
            }
          }else{
            return E(_fj/* Data.Map.Base.lvl9 */);
          }
        }else{
          return E(_fj/* Data.Map.Base.lvl9 */);
        }
      }
    }else{
      return [0, 1+_fq|0, E(E(_fl)), _fm, E(_fp), E(_ff/* Data.Map.Base.Tip */)];
    }
  }else{
    var _fH = E(_fo);
    if(!_fH[0]){
      var _fI = _fH[1], _fJ = _fH[2], _fK = _fH[3], _fL = _fH[5], _fM = E(_fH[4]);
      if(!_fM[0]){
        var _fN = _fM[1], _fO = _fM[2], _fP = _fM[3], _fQ = _fM[4], _fR = E(_fL);
        if(!_fR[0]){
          var _fS = _fR[1];
          if(_fN>=(imul(2, _fS)|0)){
            var _fT = function(_fU){
              var _fV = E(_fl), _fW = E(_fM[5]);
              return _fW[0]==0 ? [0, 1+_fI|0, E(_fO), _fP, E([0, 1+_fU|0, E(_fV), _fm, E(_ff/* Data.Map.Base.Tip */), E(_fQ)]), E([0, (1+_fS|0)+_fW[1]|0, E(_fJ), _fK, E(_fW), E(_fR)])] : [0, 1+_fI|0, E(_fO), _fP, E([0, 1+_fU|0, E(_fV), _fm, E(_ff/* Data.Map.Base.Tip */), E(_fQ)]), E([0, 1+_fS|0, E(_fJ), _fK, E(_ff/* Data.Map.Base.Tip */), E(_fR)])];
            }, _fX = E(_fQ);
            return _fX[0]==0 ? B(_fT(_fX[1])) : B(_fT(0));
          }else{
            return [0, 1+_fI|0, E(_fJ), _fK, E([0, 1+_fN|0, E(E(_fl)), _fm, E(_ff/* Data.Map.Base.Tip */), E(_fM)]), E(_fR)];
          }
        }else{
          return [0, 3, E(_fO), _fP, E([0, 1, E(E(_fl)), _fm, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)]), E([0, 1, E(_fJ), _fK, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _fY = E(_fL);
        return _fY[0]==0 ? [0, 3, E(_fJ), _fK, E([0, 1, E(E(_fl)), _fm, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)]), E(_fY)] : [0, 2, E(E(_fl)), _fm, E(_ff/* Data.Map.Base.Tip */), E(_fH)];
      }
    }else{
      return [0, 1, E(E(_fl)), _fm, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
    }
  }
}, _fZ/* singleton */ = function(_g0, _g1){
  return [0, 1, E(E(_g0)), _g1, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
}, _g2/* insertMax */ = function(_g3, _g4, _g5){
  var _g6 = E(_g5);
  if(!_g6[0]){
    return new F(function(){return _fk/* Data.Map.Base.balanceR */(_g6[2], _g6[3], _g6[4], B(_g2/* Data.Map.Base.insertMax */(_g3, _g4, _g6[5])));});
  }else{
    return new F(function(){return _fZ/* Data.Map.Base.singleton */(_g3, _g4);});
  }
}, _g7/* lvl11 */ = new T(function(){
  return B(unCStr("Failure in Data.Map.balanceL"));
}), _g8/* $wpoly_fail1 */ = function(_g9){
  return new F(function(){return err(_g7/* Data.Map.Base.lvl11 */);});
}, _ga/* lvl12 */ = new T(function(){
  return B(_g8/* Data.Map.Base.$wpoly_fail1 */(_));
}), _gb/* balanceL */ = function(_gc, _gd, _ge, _gf){
  var _gg = E(_gf);
  if(!_gg[0]){
    var _gh = _gg[1], _gi = E(_ge);
    if(!_gi[0]){
      var _gj = _gi[1], _gk = _gi[2], _gl = _gi[3];
      if(_gj<=(imul(3, _gh)|0)){
        return [0, (1+_gj|0)+_gh|0, E(E(_gc)), _gd, E(_gi), E(_gg)];
      }else{
        var _gm = E(_gi[4]);
        if(!_gm[0]){
          var _gn = _gm[1], _go = E(_gi[5]);
          if(!_go[0]){
            var _gp = _go[1], _gq = _go[2], _gr = _go[3], _gs = _go[4];
            if(_gp>=(imul(2, _gn)|0)){
              var _gt = function(_gu){
                var _gv = E(_go[5]);
                return _gv[0]==0 ? [0, (1+_gj|0)+_gh|0, E(_gq), _gr, E([0, (1+_gn|0)+_gu|0, E(_gk), _gl, E(_gm), E(_gs)]), E([0, (1+_gh|0)+_gv[1]|0, E(E(_gc)), _gd, E(_gv), E(_gg)])] : [0, (1+_gj|0)+_gh|0, E(_gq), _gr, E([0, (1+_gn|0)+_gu|0, E(_gk), _gl, E(_gm), E(_gs)]), E([0, 1+_gh|0, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_gg)])];
              }, _gw = E(_gs);
              return _gw[0]==0 ? B(_gt(_gw[1])) : B(_gt(0));
            }else{
              return [0, (1+_gj|0)+_gh|0, E(_gk), _gl, E(_gm), E([0, (1+_gh|0)+_gp|0, E(E(_gc)), _gd, E(_go), E(_gg)])];
            }
          }else{
            return E(_ga/* Data.Map.Base.lvl12 */);
          }
        }else{
          return E(_ga/* Data.Map.Base.lvl12 */);
        }
      }
    }else{
      return [0, 1+_gh|0, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_gg)];
    }
  }else{
    var _gx = E(_ge);
    if(!_gx[0]){
      var _gy = _gx[1], _gz = _gx[2], _gA = _gx[3], _gB = _gx[5], _gC = E(_gx[4]);
      if(!_gC[0]){
        var _gD = _gC[1], _gE = E(_gB);
        if(!_gE[0]){
          var _gF = _gE[1], _gG = _gE[2], _gH = _gE[3], _gI = _gE[4];
          if(_gF>=(imul(2, _gD)|0)){
            var _gJ = function(_gK){
              var _gL = E(_gE[5]);
              return _gL[0]==0 ? [0, 1+_gy|0, E(_gG), _gH, E([0, (1+_gD|0)+_gK|0, E(_gz), _gA, E(_gC), E(_gI)]), E([0, 1+_gL[1]|0, E(E(_gc)), _gd, E(_gL), E(_ff/* Data.Map.Base.Tip */)])] : [0, 1+_gy|0, E(_gG), _gH, E([0, (1+_gD|0)+_gK|0, E(_gz), _gA, E(_gC), E(_gI)]), E([0, 1, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)])];
            }, _gM = E(_gI);
            return _gM[0]==0 ? B(_gJ(_gM[1])) : B(_gJ(0));
          }else{
            return [0, 1+_gy|0, E(_gz), _gA, E(_gC), E([0, 1+_gF|0, E(E(_gc)), _gd, E(_gE), E(_ff/* Data.Map.Base.Tip */)])];
          }
        }else{
          return [0, 3, E(_gz), _gA, E(_gC), E([0, 1, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)])];
        }
      }else{
        var _gN = E(_gB);
        return _gN[0]==0 ? [0, 3, E(_gN[2]), _gN[3], E([0, 1, E(_gz), _gA, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)]), E([0, 1, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)])] : [0, 2, E(E(_gc)), _gd, E(_gx), E(_ff/* Data.Map.Base.Tip */)];
      }
    }else{
      return [0, 1, E(E(_gc)), _gd, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
    }
  }
}, _gO/* insertMin */ = function(_gP, _gQ, _gR){
  var _gS = E(_gR);
  if(!_gS[0]){
    return new F(function(){return _gb/* Data.Map.Base.balanceL */(_gS[2], _gS[3], B(_gO/* Data.Map.Base.insertMin */(_gP, _gQ, _gS[4])), _gS[5]);});
  }else{
    return new F(function(){return _fZ/* Data.Map.Base.singleton */(_gP, _gQ);});
  }
}, _gT/* link_$sinsertMin */ = function(_gU, _gV, _gW, _gX, _gY, _gZ, _h0){
  return new F(function(){return _gb/* Data.Map.Base.balanceL */(_gX, _gY, B(_gO/* Data.Map.Base.insertMin */(_gU, _gV, _gZ)), _h0);});
}, _h1/* link_$slink1 */ = function(_h2, _h3, _h4, _h5, _h6, _h7, _h8, _h9){
  var _ha = E(_h4);
  if(!_ha[0]){
    var _hb = _ha[1], _hc = _ha[2], _hd = _ha[3], _he = _ha[4], _hf = _ha[5];
    if((imul(3, _hb)|0)>=_h5){
      if((imul(3, _h5)|0)>=_hb){
        return [0, (_hb+_h5|0)+1|0, E(E(_h2)), _h3, E(_ha), E([0, _h5, E(_h6), _h7, E(_h8), E(_h9)])];
      }else{
        return new F(function(){return _fk/* Data.Map.Base.balanceR */(_hc, _hd, _he, B(_h1/* Data.Map.Base.link_$slink1 */(_h2, _h3, _hf, _h5, _h6, _h7, _h8, _h9)));});
      }
    }else{
      return new F(function(){return _gb/* Data.Map.Base.balanceL */(_h6, _h7, B(_hg/* Data.Map.Base.link_$slink */(_h2, _h3, _hb, _hc, _hd, _he, _hf, _h8)), _h9);});
    }
  }else{
    return new F(function(){return _gT/* Data.Map.Base.link_$sinsertMin */(_h2, _h3, _h5, _h6, _h7, _h8, _h9);});
  }
}, _hg/* link_$slink */ = function(_hh, _hi, _hj, _hk, _hl, _hm, _hn, _ho){
  var _hp = E(_ho);
  if(!_hp[0]){
    var _hq = _hp[1], _hr = _hp[2], _hs = _hp[3], _ht = _hp[4], _hu = _hp[5];
    if((imul(3, _hj)|0)>=_hq){
      if((imul(3, _hq)|0)>=_hj){
        return [0, (_hj+_hq|0)+1|0, E(E(_hh)), _hi, E([0, _hj, E(_hk), _hl, E(_hm), E(_hn)]), E(_hp)];
      }else{
        return new F(function(){return _fk/* Data.Map.Base.balanceR */(_hk, _hl, _hm, B(_h1/* Data.Map.Base.link_$slink1 */(_hh, _hi, _hn, _hq, _hr, _hs, _ht, _hu)));});
      }
    }else{
      return new F(function(){return _gb/* Data.Map.Base.balanceL */(_hr, _hs, B(_hg/* Data.Map.Base.link_$slink */(_hh, _hi, _hj, _hk, _hl, _hm, _hn, _ht)), _hu);});
    }
  }else{
    return new F(function(){return _g2/* Data.Map.Base.insertMax */(_hh, _hi, [0, _hj, E(_hk), _hl, E(_hm), E(_hn)]);});
  }
}, _hv/* link */ = function(_hw, _hx, _hy, _hz){
  var _hA = E(_hy);
  if(!_hA[0]){
    var _hB = _hA[1], _hC = _hA[2], _hD = _hA[3], _hE = _hA[4], _hF = _hA[5], _hG = E(_hz);
    if(!_hG[0]){
      var _hH = _hG[1], _hI = _hG[2], _hJ = _hG[3], _hK = _hG[4], _hL = _hG[5];
      if((imul(3, _hB)|0)>=_hH){
        if((imul(3, _hH)|0)>=_hB){
          return [0, (_hB+_hH|0)+1|0, E(E(_hw)), _hx, E(_hA), E(_hG)];
        }else{
          return new F(function(){return _fk/* Data.Map.Base.balanceR */(_hC, _hD, _hE, B(_h1/* Data.Map.Base.link_$slink1 */(_hw, _hx, _hF, _hH, _hI, _hJ, _hK, _hL)));});
        }
      }else{
        return new F(function(){return _gb/* Data.Map.Base.balanceL */(_hI, _hJ, B(_hg/* Data.Map.Base.link_$slink */(_hw, _hx, _hB, _hC, _hD, _hE, _hF, _hK)), _hL);});
      }
    }else{
      return new F(function(){return _g2/* Data.Map.Base.insertMax */(_hw, _hx, _hA);});
    }
  }else{
    return new F(function(){return _gO/* Data.Map.Base.insertMin */(_hw, _hx, _hz);});
  }
}, _hM/* $s$wpoly_create */ = function(_hN, _hO, _hP, _hQ){
  var _hR = E(_hN);
  if(_hR==1){
    var _hS = E(_hQ);
    return _hS[0]==0 ? [0, new T(function(){
      return [0, 1, E(E(_hO)), _hP, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _b/* GHC.Types.[] */] : B(_f1/* React.Types.$fOrdEasing_$ccompare */(_hO, E(_hS[1])[1]))==0 ? [0, new T(function(){
      return [0, 1, E(E(_hO)), _hP, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
}), _hS, _b/* GHC.Types.[] */] : [0, new T(function(){
      return [0, 1, E(E(_hO)), _hP, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
}), _b/* GHC.Types.[] */, _hS];
  }else{
    var _hT = B(_hM/* Easing.$s$wpoly_create */(_hR>>1, _hO, _hP, _hQ)), _hU = _hT[1], _hV = _hT[3], _hW = E(_hT[2]);
    if(!_hW[0]){
      return [0, _hU, _b/* GHC.Types.[] */, _hV];
    }else{
      var _hX = E(_hW[1]), _hY = _hX[1], _hZ = _hX[2], _i0 = E(_hW[2]);
      if(!_i0[0]){
        return [0, new T(function(){
          return B(_g2/* Data.Map.Base.insertMax */(_hY, _hZ, _hU));
}), _b/* GHC.Types.[] */, _hV];
      }else{
        var _i1 = E(_i0[1]), _i2 = _i1[1];
        if(!B(_f1/* React.Types.$fOrdEasing_$ccompare */(_hY, _i2))){
          var _i3 = B(_hM/* Easing.$s$wpoly_create */(_hR>>1, _i2, _i1[2], _i0[2]));
          return [0, new T(function(){
            return B(_hv/* Data.Map.Base.link */(_hY, _hZ, _hU, _i3[1]));
}), _i3[2], _i3[3]];
        }else{
          return [0, _hU, _b/* GHC.Types.[] */, _hW];
        }
      }
    }
  }
}, _i4/* $sinsert_$sgo10 */ = function(_i5, _i6, _i7){
  var _i8 = E(_i5), _i9 = E(_i7);
  if(!_i9[0]){
    var _ia = _i9[1], _ib = _i9[2], _ic = _i9[3], _id = _i9[4], _ie = _i9[5], _if = E(_i8);
    if(_if[0]==19){
      if(dataToTag(E(_ib))>=19){
        var _ig = E(_ib);
        if(_ig[0]==19){
          var _ih = E(_if[1])[1], _ii = E(_ig[1])[1];
          if(_ih>=_ii){
            if(_ih!=_ii){
              return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ig, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
            }else{
              var _ij = E(_if[2])[1], _ik = E(_ig[2])[1];
              if(_ij>=_ik){
                if(_ij!=_ik){
                  return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ig, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
                }else{
                  var _il = E(_if[3])[1], _im = E(_ig[3])[1];
                  if(_il>=_im){
                    if(_il!=_im){
                      return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ig, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
                    }else{
                      var _in = E(_if[4])[1], _io = E(_ig[4])[1];
                      if(_in>=_io){
                        if(_in!=_io){
                          return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ig, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
                        }else{
                          return [0, _ia, E(_if), _i6, E(_id), E(_ie)];
                        }
                      }else{
                        return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ig, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
                      }
                    }
                  }else{
                    return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ig, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
                  }
                }
              }else{
                return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ig, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
              }
            }
          }else{
            return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ig, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
          }
        }else{
          return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ig, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
        }
      }else{
        return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ib, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
      }
    }else{
      var _ip = dataToTag(E(_if)), _iq = dataToTag(E(_ib));
      if(_ip>=_iq){
        if(_ip!=_iq){
          return new F(function(){return _fk/* Data.Map.Base.balanceR */(_ib, _ic, _id, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _ie)));});
        }else{
          return [0, _ia, E(_if), _i6, E(_id), E(_ie)];
        }
      }else{
        return new F(function(){return _gb/* Data.Map.Base.balanceL */(_ib, _ic, B(_i4/* Easing.$sinsert_$sgo10 */(_if, _i6, _id)), _ie);});
      }
    }
  }else{
    return [0, 1, E(_i8), _i6, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
  }
}, _ir/* poly_go10 */ = function(_is, _it){
  while(1){
    var _iu = E(_it);
    if(!_iu[0]){
      return E(_is);
    }else{
      var _iv = E(_iu[1]), _iw = B(_i4/* Easing.$sinsert_$sgo10 */(_iv[1], _iv[2], _is));
      _it = _iu[2];
      _is = _iw;
      continue;
    }
  }
}, _ix/* $sfromList_$spoly_go10 */ = function(_iy, _iz, _iA, _iB){
  return new F(function(){return _ir/* Easing.poly_go10 */(B(_i4/* Easing.$sinsert_$sgo10 */(_iz, _iA, _iy)), _iB);});
}, _iC/* $spoly_go10 */ = function(_iD, _iE, _iF){
  var _iG = E(_iE);
  return new F(function(){return _ir/* Easing.poly_go10 */(B(_i4/* Easing.$sinsert_$sgo10 */(_iG[1], _iG[2], _iD)), _iF);});
}, _iH/* $wpoly_go10 */ = function(_iI, _iJ, _iK){
  while(1){
    var _iL = E(_iK);
    if(!_iL[0]){
      return E(_iJ);
    }else{
      var _iM = E(_iL[1]), _iN = _iM[1], _iO = _iM[2], _iP = E(_iL[2]);
      if(!_iP[0]){
        return new F(function(){return _g2/* Data.Map.Base.insertMax */(_iN, _iO, _iJ);});
      }else{
        var _iQ = E(_iP[1]), _iR = _iQ[1];
        if(!B(_f1/* React.Types.$fOrdEasing_$ccompare */(_iN, _iR))){
          var _iS = B(_hM/* Easing.$s$wpoly_create */(_iI, _iR, _iQ[2], _iP[2])), _iT = _iS[1], _iU = E(_iS[3]);
          if(!_iU[0]){
            var _iV = _iI<<1, _iW = B(_hv/* Data.Map.Base.link */(_iN, _iO, _iJ, _iT));
            _iK = _iS[2];
            _iI = _iV;
            _iJ = _iW;
            continue;
          }else{
            return new F(function(){return _iC/* Easing.$spoly_go10 */(B(_hv/* Data.Map.Base.link */(_iN, _iO, _iJ, _iT)), _iU[1], _iU[2]);});
          }
        }else{
          return new F(function(){return _ix/* Easing.$sfromList_$spoly_go10 */(_iJ, _iN, _iO, _iP);});
        }
      }
    }
  }
}, _iX/* $sfromList_$s$wpoly_go10 */ = function(_iY, _iZ, _j0, _j1, _j2){
  var _j3 = E(_j2);
  if(!_j3[0]){
    return new F(function(){return _g2/* Data.Map.Base.insertMax */(_j0, _j1, _iZ);});
  }else{
    var _j4 = E(_j3[1]), _j5 = _j4[1];
    if(!B(_f1/* React.Types.$fOrdEasing_$ccompare */(_j0, _j5))){
      var _j6 = B(_hM/* Easing.$s$wpoly_create */(_iY, _j5, _j4[2], _j3[2])), _j7 = _j6[1], _j8 = E(_j6[3]);
      if(!_j8[0]){
        return new F(function(){return _iH/* Easing.$wpoly_go10 */(_iY<<1, B(_hv/* Data.Map.Base.link */(_j0, _j1, _iZ, _j7)), _j6[2]);});
      }else{
        return new F(function(){return _iC/* Easing.$spoly_go10 */(B(_hv/* Data.Map.Base.link */(_j0, _j1, _iZ, _j7)), _j8[1], _j8[2]);});
      }
    }else{
      return new F(function(){return _ix/* Easing.$sfromList_$spoly_go10 */(_iZ, _j0, _j1, _j3);});
    }
  }
}, _j9/* $sfromList */ = function(_ja){
  var _jb = E(_ja);
  if(!_jb[0]){
    return [1];
  }else{
    var _jc = E(_jb[1]), _jd = _jc[1], _je = _jc[2], _jf = E(_jb[2]);
    if(!_jf[0]){
      return [0, 1, E(E(_jd)), _je, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)];
    }else{
      var _jg = _jf[2], _jh = E(_jf[1]), _ji = _jh[1], _jj = _jh[2];
      if(!B(_f1/* React.Types.$fOrdEasing_$ccompare */(_jd, _ji))){
        return new F(function(){return _iX/* Easing.$sfromList_$s$wpoly_go10 */(1, [0, 1, E(E(_jd)), _je, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)], _ji, _jj, _jg);});
      }else{
        return new F(function(){return _ix/* Easing.$sfromList_$spoly_go10 */([0, 1, E(E(_jd)), _je, E(_ff/* Data.Map.Base.Tip */), E(_ff/* Data.Map.Base.Tip */)], _ji, _jj, _jg);});
      }
    }
  }
}, _jk/* EaseOutQuad */ = [2], _jl/* EaseInCubic */ = [4], _jm/* EaseOutCubic */ = [5], _jn/* EaseInOutCubic */ = [6], _jo/* EaseInQuart */ = [7], _jp/* EaseOutQuart */ = [8], _jq/* EaseInOutQuart */ = [9], _jr/* EaseInQuint */ = [10], _js/* EaseOutQuint */ = [11], _jt/* EaseInOutQuint */ = [12], _ju/* EaseInElastic */ = [13], _jv/* EaseOutElastic */ = [14], _jw/* EaseInSine */ = [20], _jx/* EaseOutSine */ = [21], _jy/* easingClass23 */ = [1, _jx/* React.Types.EaseOutSine */, _b/* GHC.Types.[] */], _jz/* easingClass22 */ = [1, _jw/* React.Types.EaseInSine */, _jy/* Easing.easingClass23 */], _jA/* easingClass25 */ = [0, 0.8], _jB/* easingClass26 */ = [0, 0], _jC/* easingClass27 */ = [0, 0.5], _jD/* easingClass24 */ = [19, _jC/* Easing.easingClass27 */, _jB/* Easing.easingClass26 */, _jA/* Easing.easingClass25 */, _jA/* Easing.easingClass25 */], _jE/* easingClass21 */ = [1, _jD/* Easing.easingClass24 */, _jz/* Easing.easingClass22 */], _jF/* easingClass20 */ = [1, _7B/* React.Types.EaseOutBounce */, _jE/* Easing.easingClass21 */], _jG/* easingClass19 */ = [1, _7A/* React.Types.EaseInBounce */, _jF/* Easing.easingClass20 */], _jH/* easingClass18 */ = [1, _jv/* React.Types.EaseOutElastic */, _jG/* Easing.easingClass19 */], _jI/* easingClass17 */ = [1, _ju/* React.Types.EaseInElastic */, _jH/* Easing.easingClass18 */], _jJ/* easingClass16 */ = [1, _jt/* React.Types.EaseInOutQuint */, _jI/* Easing.easingClass17 */], _jK/* easingClass15 */ = [1, _js/* React.Types.EaseOutQuint */, _jJ/* Easing.easingClass16 */], _jL/* easingClass14 */ = [1, _jr/* React.Types.EaseInQuint */, _jK/* Easing.easingClass15 */], _jM/* easingClass13 */ = [1, _jq/* React.Types.EaseInOutQuart */, _jL/* Easing.easingClass14 */], _jN/* easingClass12 */ = [1, _jp/* React.Types.EaseOutQuart */, _jM/* Easing.easingClass13 */], _jO/* easingClass11 */ = [1, _jo/* React.Types.EaseInQuart */, _jN/* Easing.easingClass12 */], _jP/* easingClass10 */ = [1, _jn/* React.Types.EaseInOutCubic */, _jO/* Easing.easingClass11 */], _jQ/* easingClass9 */ = [1, _jm/* React.Types.EaseOutCubic */, _jP/* Easing.easingClass10 */], _jR/* easingClass8 */ = [1, _jl/* React.Types.EaseInCubic */, _jQ/* Easing.easingClass9 */], _jS/* easingClass7 */ = [1, _9d/* React.Types.EaseInOutQuad */, _jR/* Easing.easingClass8 */], _jT/* easingClass6 */ = [1, _jk/* React.Types.EaseOutQuad */, _jS/* Easing.easingClass7 */], _jU/* easingClass5 */ = [1, _e3/* React.Types.EaseInQuad */, _jT/* Easing.easingClass6 */], _jV/* xs */ = function(_jW){
  var _jX = E(_jW);
  return _jX[0]==0 ? [0] : [1, [0, _jX[1], _jB/* Easing.easingClass26 */], new T(function(){
    return B(_jV/* Easing.xs */(_jX[2]));
})];
}, _jY/* easingClass_$sxs */ = function(_jZ, _k0){
  return [1, [0, _jZ, _jB/* Easing.easingClass26 */], new T(function(){
    return B(_jV/* Easing.xs */(_k0));
})];
}, _k1/* easingClass4 */ = new T(function(){
  return B(_jY/* Easing.easingClass_$sxs */(_9e/* React.Types.Linear */, _jU/* Easing.easingClass5 */));
}), _k2/* easingClass3 */ = new T(function(){
  return B(_j9/* Easing.$sfromList */(_k1/* Easing.easingClass4 */));
}), _k3/* easingClass2 */ = [0, _k2/* Easing.easingClass3 */], _k4/* easings */ = [1, _9e/* React.Types.Linear */, _jU/* Easing.easingClass5 */], _k5/* easingClass28 */ = [0, _k4/* Easing.easings */], _k6/* lvl30 */ = new T(function(){
  return B(unCStr("Map.!: given key is not an element in the map"));
}), _k7/* lvl31 */ = new T(function(){
  return B(err(_k6/* Easing.lvl30 */));
}), _k8/* $s!1 */ = function(_k9, _ka){
  while(1){
    var _kb = E(_ka);
    if(!_kb[0]){
      var _kc = _kb[2], _kd = _kb[3], _ke = _kb[4], _kf = _kb[5], _kg = E(E(_k9));
      if(_kg[0]==19){
        if(dataToTag(E(_kc))>=19){
          var _kh = E(_kc);
          if(_kh[0]==19){
            var _ki = E(_kg[1])[1], _kj = E(_kh[1])[1];
            if(_ki>=_kj){
              if(_ki!=_kj){
                _k9 = _kg;
                _ka = _kf;
                continue;
              }else{
                var _kk = E(_kg[2])[1], _kl = E(_kh[2])[1];
                if(_kk>=_kl){
                  if(_kk!=_kl){
                    _k9 = _kg;
                    _ka = _kf;
                    continue;
                  }else{
                    var _km = E(_kg[3])[1], _kn = E(_kh[3])[1];
                    if(_km>=_kn){
                      if(_km!=_kn){
                        _k9 = _kg;
                        _ka = _kf;
                        continue;
                      }else{
                        var _ko = E(_kg[4])[1], _kp = E(_kh[4])[1];
                        if(_ko>=_kp){
                          if(_ko!=_kp){
                            _k9 = _kg;
                            _ka = _kf;
                            continue;
                          }else{
                            return E(_kd);
                          }
                        }else{
                          _k9 = _kg;
                          _ka = _ke;
                          continue;
                        }
                      }
                    }else{
                      _k9 = _kg;
                      _ka = _ke;
                      continue;
                    }
                  }
                }else{
                  _k9 = _kg;
                  _ka = _ke;
                  continue;
                }
              }
            }else{
              _k9 = _kg;
              _ka = _ke;
              continue;
            }
          }else{
            _k9 = _kg;
            _ka = _ke;
            continue;
          }
        }else{
          _k9 = _kg;
          _ka = _kf;
          continue;
        }
      }else{
        var _kq = dataToTag(E(_kg)), _kr = dataToTag(E(_kc));
        if(_kq>=_kr){
          if(_kq!=_kr){
            _k9 = _kg;
            _ka = _kf;
            continue;
          }else{
            return E(_kd);
          }
        }else{
          _k9 = _kg;
          _ka = _ke;
          continue;
        }
      }
    }else{
      return E(_k7/* Easing.lvl31 */);
    }
  }
}, _ks/* EasingMap */ = function(_kt){
  return [0, _kt];
}, _ku/* lvl10 */ = [0, 1000], _kv/* lvl7 */ = function(_kw){
  return [0];
}, _kx/* lvl8 */ = [0, 1], _ky/* lvl9 */ = [0, _jB/* Easing.easingClass26 */, _kx/* Easing.lvl8 */], _kz/* easingClass_go */ = function(_kA){
  var _kB = E(_kA);
  if(!_kB[0]){
    return [0];
  }else{
    var _kC = _kB[1];
    return [1, [0, _aY/* React.Anim.$fAnimatableDouble */, _ku/* Easing.lvl10 */, _ky/* Easing.lvl9 */, function(_kD, _kE, _kF){
      var _kG = E(_kF)[1];
      return new F(function(){return A(_e4/* GHC.Base.fmap */,[_kD, _ks/* Easing.EasingMap */, new T(function(){
        return B(A(_e4/* GHC.Base.fmap */,[_kD, function(_kH){
          return new F(function(){return _i4/* Easing.$sinsert_$sgo10 */(_kC, _kH, _kG);});
        }, new T(function(){
          return B(A(_kE,[new T(function(){
            return B(_k8/* Easing.$s!1 */(_kC, _kG));
})]));
})]));
})]);});
    }, _kC, _kv/* Easing.lvl7 */], new T(function(){
      return B(_kz/* Easing.easingClass_go */(_kB[2]));
})];
  }
}, _kI/* easingClass29 */ = function(_kJ, _kK){
  var _kL = E(_kJ), _kM = E(_kK);
  return [0, _kL, new T(function(){
    return B(_kz/* Easing.easingClass_go */(_kL[1]));
})];
}, _kN/* jsShowD1 */ = function(_kO){
  var _kP = jsShow(E(_kO)[1]), _kQ = _kP;
  return new F(function(){return fromJSStr(_kQ);});
}, _kR/* $fShowDouble2 */ = function(_kS){
  return function(_kT){
    return new F(function(){return _10/* GHC.Base.++ */(new T(function(){
      return B(_kN/* GHC.HastePrim.jsShowD1 */(_kS));
}), _kT);});
  };
}, _kU/* $fShowEasing10 */ = new T(function(){
  return B(unCStr("EaseInOutBounce"));
}), _kV/* $fShowEasing12 */ = new T(function(){
  return B(unCStr("EaseOutBounce"));
}), _kW/* $fShowEasing14 */ = new T(function(){
  return B(unCStr("EaseInBounce"));
}), _kX/* $fShowEasing16 */ = new T(function(){
  return B(unCStr("EaseInOutElastic"));
}), _kY/* $fShowEasing18 */ = new T(function(){
  return B(unCStr("EaseOutElastic"));
}), _kZ/* $fShowEasing20 */ = new T(function(){
  return B(unCStr("EaseInElastic"));
}), _l0/* $fShowEasing22 */ = new T(function(){
  return B(unCStr("EaseInOutQuint"));
}), _l1/* $fShowEasing24 */ = new T(function(){
  return B(unCStr("EaseOutQuint"));
}), _l2/* $fShowEasing26 */ = new T(function(){
  return B(unCStr("EaseInQuint"));
}), _l3/* $fShowEasing28 */ = new T(function(){
  return B(unCStr("EaseInOutQuart"));
}), _l4/* $fShowEasing30 */ = new T(function(){
  return B(unCStr("EaseOutQuart"));
}), _l5/* $fShowEasing32 */ = new T(function(){
  return B(unCStr("EaseInQuart"));
}), _l6/* $fShowEasing34 */ = new T(function(){
  return B(unCStr("EaseInOutCubic"));
}), _l7/* $fShowEasing36 */ = new T(function(){
  return B(unCStr("EaseOutCubic"));
}), _l8/* $fShowEasing38 */ = new T(function(){
  return B(unCStr("EaseInCubic"));
}), _l9/* $fShowEasing4 */ = new T(function(){
  return B(unCStr("EaseOutSine"));
}), _la/* $fShowEasing40 */ = new T(function(){
  return B(unCStr("EaseInOutQuad"));
}), _lb/* $fShowEasing42 */ = new T(function(){
  return B(unCStr("EaseOutQuad"));
}), _lc/* $fShowEasing44 */ = new T(function(){
  return B(unCStr("EaseInQuad"));
}), _ld/* $fShowEasing46 */ = new T(function(){
  return B(unCStr("Linear"));
}), _le/* $fShowEasing6 */ = new T(function(){
  return B(unCStr("EaseInSine"));
}), _lf/* $fShowEasing7 */ = new T(function(){
  return B(unCStr("EaseBezier "));
}), _lg/* $fShowEasing8 */ = [0, 11], _lh/* $fShowDouble3 */ = [0, 45], _li/* $w$sshowSignedFloat */ = function(_lj, _lk, _ll){
  var _lm = function(_ln){
    var _lo = new T(function(){
      return B(A(_lj,[[0,  -_ll]]));
});
    return E(_lk)[1]<=6 ? function(_lp){
      return [1, _lh/* GHC.Float.$fShowDouble3 */, new T(function(){
        return B(A(_lo,[_lp]));
})];
    } : function(_lq){
      return [1, _8E/* GHC.Show.shows13 */, [1, _lh/* GHC.Float.$fShowDouble3 */, new T(function(){
        return B(A(_lo,[[1, _8x/* GHC.Show.shows12 */, _lq]]));
})]];
    };
  };
  if(_ll>=0){
    var _lr = isDoubleNegativeZero(_ll), _ls = _lr;
    return E(_ls)==0 ? B(A(_lj,[[0, _ll]])) : B(_lm(_));
  }else{
    return new F(function(){return _lm(_);});
  }
}, _lt/* a16 */ = [0, 0], _lu/* a31 */ = [0, 220], _lv/* a32 */ = [0, 161], _lw/* a33 */ = [0, 85], _lx/* a34 */ = [0, 51], _ly/* a35 */ = [0, 175], _lz/* a36 */ = [0, 245], _lA/* a38 */ = [0, _b/* GHC.Types.[] */, _r/* GHC.Tuple.() */], _lB/* a39 */ = function(_lC){
  return E(_lA/* Easing.a38 */);
}, _lD/* lvl11 */ = [0, 41], _lE/* lvl12 */ = [1, _lD/* Easing.lvl11 */, _b/* GHC.Types.[] */], _lF/* a6 */ = [0, 40], _lG/* lvl13 */ = [0, _bX/* React.Attrs.height_1 */, _lF/* Easing.a6 */], _lH/* a7 */ = [0, 15], _lI/* lvl14 */ = [0, _c4/* React.Attrs.width_1 */, _lH/* Easing.a7 */], _lJ/* a8 */ = [0, -20], _lK/* y_3 */ = [0, 121], _lL/* y_2 */ = [1, _lK/* React.Attrs.y_3 */, _b/* GHC.Types.[] */], _lM/* y_1 */ = new T(function(){
  return [0, toJSStr(_lL/* React.Attrs.y_2 */)];
}), _lN/* lvl15 */ = [0, _lM/* React.Attrs.y_1 */, _lJ/* Easing.a8 */], _lO/* a9 */ = [0, -7.5], _lP/* x_3 */ = [0, 120], _lQ/* x_2 */ = [1, _lP/* React.Attrs.x_3 */, _b/* GHC.Types.[] */], _lR/* x_1 */ = new T(function(){
  return [0, toJSStr(_lQ/* React.Attrs.x_2 */)];
}), _lS/* lvl16 */ = [0, _lR/* React.Attrs.x_1 */, _lO/* Easing.a9 */], _lT/* a10 */ = [0, 30], _lU/* lvl17 */ = [0, _bX/* React.Attrs.height_1 */, _lT/* Easing.a10 */], _lV/* lvl18 */ = [0, _c4/* React.Attrs.width_1 */, _lF/* Easing.a6 */], _lW/* a11 */ = [0, 60], _lX/* lvl21 */ = [0, _lM/* React.Attrs.y_1 */, _lW/* Easing.a11 */], _lY/* a12 */ = [0, 5], _lZ/* lvl22 */ = [0, _lR/* React.Attrs.x_1 */, _lY/* Easing.a12 */], _m0/* lvl23 */ = [0, _c4/* React.Attrs.width_1 */, _lT/* Easing.a10 */], _m1/* a13 */ = [0, -10], _m2/* lvl24 */ = [0, _lM/* React.Attrs.y_1 */, _m1/* Easing.a13 */], _m3/* a14 */ = [0, -15], _m4/* lvl25 */ = [0, _lR/* React.Attrs.x_1 */, _m3/* Easing.a14 */], _m5/* lvl26 */ = [0, _lR/* React.Attrs.x_1 */, _lH/* Easing.a7 */], _m6/* lvl28 */ = [0, _lM/* React.Attrs.y_1 */, _lt/* Easing.a16 */], _m7/* lvl29 */ = [0, _lR/* React.Attrs.x_1 */, _lt/* Easing.a16 */], _m8/* a37 */ = new T(function(){
  return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_lw/* Easing.a33 */, _lv/* Easing.a32 */, _lu/* Easing.a31 */)))];
}), _m9/* lvl32 */ = [0, _bu/* React.Attrs.fill_1 */, _m8/* Easing.a37 */], _ma/* a15 */ = [0, 2], _mb/* lvl27 */ = [0, _bX/* React.Attrs.height_1 */, _ma/* Easing.a15 */], _mc/* lvl33 */ = [1, _m9/* Easing.lvl32 */, _b/* GHC.Types.[] */], _md/* lvl34 */ = [1, _mb/* Easing.lvl27 */, _mc/* Easing.lvl33 */], _me/* a */ = new T(function(){
  return B(unCStr("start easing"));
}), _mf/* a1 */ = [2, _me/* Easing.a */], _mg/* a2 */ = [1, _mf/* Easing.a1 */, _b/* GHC.Types.[] */], _mh/* lvl */ = new T(function(){
  return [1, "btn"];
}), _mi/* lvl1 */ = [0, _9O/* React.Attrs.class_1 */, _mh/* Easing.lvl */], _mj/* Restart */ = 0, _mk/* x */ = [1, _mj/* Easing.Restart */], _ml/* lvl2 */ = function(_mm){
  var _mn = js_parseMouseEvent(E(_mm)[1]), _mo = _mn, _mp = E(_mo);
  return E(_mk/* Easing.x */);
}, _mq/* lvl3 */ = [0, _ml/* Easing.lvl2 */, _9u/* React.Types.ClickEvt */], _mr/* lvl4 */ = [1, _mq/* Easing.lvl3 */], _ms/* lvl5 */ = [1, _mr/* Easing.lvl4 */, _b/* GHC.Types.[] */], _mt/* lvl6 */ = [1, _mi/* Easing.lvl1 */, _ms/* Easing.lvl5 */], _mu/* ds */ = new T(function(){
  var _mv = B(_94/* React.Types.$wseparateAttrs */(_mt/* Easing.lvl6 */));
  return [0, _mv[1], _mv[2]];
}), _mw/* lvl19 */ = new T(function(){
  return E(E(_mu/* Easing.ds */)[2]);
}), _mx/* lvl20 */ = new T(function(){
  return E(E(_mu/* Easing.ds */)[1]);
}), _my/* lvl35 */ = [0, _9t/* React.Elements.button_1 */, _mw/* Easing.lvl19 */, _mx/* Easing.lvl20 */, _mg/* Easing.a2 */], _mz/* lvl36 */ = [1, _my/* Easing.lvl35 */, _b/* GHC.Types.[] */], _mA/* lvl37 */ = [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _mz/* Easing.lvl36 */], _mB/* lvl38 */ = [1, _mA/* Easing.lvl37 */, _b/* GHC.Types.[] */], _mC/* a28 */ = new T(function(){
  return [1, "easings"];
}), _mD/* a29 */ = [0, _9O/* React.Attrs.class_1 */, _mC/* Easing.a28 */], _mE/* a30 */ = [1, _mD/* Easing.a29 */, _b/* GHC.Types.[] */], _mF/* ds1 */ = new T(function(){
  var _mG = B(_94/* React.Types.$wseparateAttrs */(_mE/* Easing.a30 */));
  return [0, _mG[1], _mG[2]];
}), _mH/* lvl39 */ = new T(function(){
  return E(E(_mF/* Easing.ds1 */)[2]);
}), _mI/* lvl40 */ = new T(function(){
  return E(E(_mF/* Easing.ds1 */)[1]);
}), _mJ/* lvl41 */ = [0, 1000], _mK/* a17 */ = [0, 100], _mL/* a18 */ = [0, _c4/* React.Attrs.width_1 */, _mK/* Easing.a17 */], _mM/* a19 */ = [0, _bX/* React.Attrs.height_1 */, _mK/* Easing.a17 */], _mN/* a20 */ = new T(function(){
  return [1, "0 0 100 100"];
}), _mO/* a21 */ = [0, _c0/* React.Attrs.viewBox_1 */, _mN/* Easing.a20 */], _mP/* a22 */ = [1, _mO/* Easing.a21 */, _b/* GHC.Types.[] */], _mQ/* a23 */ = [1, _mM/* Easing.a19 */, _mP/* Easing.a22 */], _mR/* a24 */ = [1, _mL/* Easing.a18 */, _mQ/* Easing.a23 */], _mS/* ds2 */ = new T(function(){
  var _mT = B(_94/* React.Types.$wseparateAttrs */(_mR/* Easing.a24 */));
  return [0, _mT[1], _mT[2]];
}), _mU/* lvl42 */ = new T(function(){
  return E(E(_mS/* Easing.ds2 */)[2]);
}), _mV/* lvl43 */ = new T(function(){
  return E(E(_mS/* Easing.ds2 */)[1]);
}), _mW/* a3 */ = new T(function(){
  return [1, "caption"];
}), _mX/* a4 */ = [0, _9O/* React.Attrs.class_1 */, _mW/* Easing.a3 */], _mY/* a5 */ = [1, _mX/* Easing.a4 */, _b/* GHC.Types.[] */], _mZ/* ds3 */ = new T(function(){
  var _n0 = B(_94/* React.Types.$wseparateAttrs */(_mY/* Easing.a5 */));
  return [0, _n0[1], _n0[2]];
}), _n1/* lvl44 */ = new T(function(){
  return E(E(_mZ/* Easing.ds3 */)[2]);
}), _n2/* lvl45 */ = new T(function(){
  return E(E(_mZ/* Easing.ds3 */)[1]);
}), _n3/* a25 */ = new T(function(){
  return [1, "box"];
}), _n4/* a26 */ = [0, _9O/* React.Attrs.class_1 */, _n3/* Easing.a25 */], _n5/* a27 */ = [1, _n4/* Easing.a26 */, _b/* GHC.Types.[] */], _n6/* ds4 */ = new T(function(){
  var _n7 = B(_94/* React.Types.$wseparateAttrs */(_n5/* Easing.a27 */));
  return [0, _n7[1], _n7[2]];
}), _n8/* lvl46 */ = new T(function(){
  return E(E(_n6/* Easing.ds4 */)[2]);
}), _n9/* lvl47 */ = new T(function(){
  return E(E(_n6/* Easing.ds4 */)[1]);
}), _na/* rect_1 */ = new T(function(){
  return [0, "rect"];
}), _nb/* showSpace1 */ = [0, 32], _nc/* shows24 */ = [0, 0], _nd/* transform_1 */ = new T(function(){
  return [0, "transform"];
}), _ne/* easingClass30 */ = function(_nf, _ng){
  var _nh = new T(function(){
    var _ni = E(_ng);
    return [0, new T(function(){
      return B(_10/* GHC.Base.++ */(_mB/* Easing.lvl38 */, new T(function(){
        return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _mH/* Easing.lvl39 */, _mI/* Easing.lvl40 */, new T(function(){
          var _nj = function(_nk){
            var _nl = E(_nk);
            if(!_nl[0]){
              return E(_lB/* Easing.a39 */);
            }else{
              var _nm = _nl[1];
              return function(_nn){
                var _no = new T(function(){
                  return B(A(new T(function(){
                    return B(_nj(_nl[2]));
}),[_nn]));
});
                return [0, new T(function(){
                  return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _n8/* Easing.lvl46 */, _n9/* Easing.lvl47 */, new T(function(){
                    return B(_10/* GHC.Base.++ */([1, [0, _cx/* React.Elements.svg_1 */, _mU/* Easing.lvl42 */, _mV/* Easing.lvl43 */, new T(function(){
                      var _np = new T(function(){
                        return B(_k8/* Easing.$s!1 */(_nm, _ni[1]));
}), _nq = new T(function(){
                        var _nr = B(_94/* React.Types.$wseparateAttrs */([1, _m7/* Easing.lvl29 */, [1, _m6/* Easing.lvl28 */, [1, [0, _c4/* React.Attrs.width_1 */, new T(function(){
                          var _ns = E(_np)[1]*100;
                          if(_ns>=0){
                            var _nt = _ns<=1000 ? [0, _ns] : E(_mJ/* Easing.lvl41 */);
                          }else{
                            var _nt = E(_lt/* Easing.a16 */);
                          }
                          var _nu = _nt, _nv = _nu, _nw = _nv;
                          return _nw;
})], _md/* Easing.lvl34 */]]]));
                        return [0, _nr[1], _nr[2]];
});
                      return B(_10/* GHC.Base.++ */([1, [1, _na/* React.Elements.rect_1 */, new T(function(){
                        return E(E(_nq)[2]);
}), new T(function(){
                        return E(E(_nq)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                        var _nx = new T(function(){
                          var _ny = B(_94/* React.Types.$wseparateAttrs */([1, _m5/* Easing.lvl26 */, [1, [0, _lM/* React.Attrs.y_1 */, new T(function(){
                            return [0, 5+10*(1-E(_np)[1])];
})], [1, _m0/* Easing.lvl23 */, [1, _lG/* Easing.lvl13 */, [1, _m9/* Easing.lvl32 */, [1, [0, _nd/* React.Attrs.transform_1 */, new T(function(){
                            return [1, toJSStr(B(unAppCStr("rotate(", new T(function(){
                              return B(_10/* GHC.Base.++ */(B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _nc/* GHC.Show.shows24 */, E(_np)[1], _b/* GHC.Types.[] */])), _lE/* Easing.lvl12 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                          return [0, _ny[1], _ny[2]];
});
                        return B(_10/* GHC.Base.++ */([1, [1, _na/* React.Elements.rect_1 */, new T(function(){
                          return E(E(_nx)[2]);
}), new T(function(){
                          return E(E(_nx)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                          var _nz = new T(function(){
                            var _nA = B(_94/* React.Types.$wseparateAttrs */([1, _m4/* Easing.lvl25 */, [1, _m2/* Easing.lvl24 */, [1, _m0/* Easing.lvl23 */, [1, _lU/* Easing.lvl17 */, [1, _m9/* Easing.lvl32 */, [1, [0, _nd/* React.Attrs.transform_1 */, new T(function(){
                              return [1, toJSStr(B(unAppCStr("translate(75 25) scale(", new T(function(){
                                return B(_10/* GHC.Base.++ */(B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _nc/* GHC.Show.shows24 */, 1+0.5*E(_np)[1], _b/* GHC.Types.[] */])), _lE/* Easing.lvl12 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                            return [0, _nA[1], _nA[2]];
});
                          return B(_10/* GHC.Base.++ */([1, [1, _na/* React.Elements.rect_1 */, new T(function(){
                            return E(E(_nz)[2]);
}), new T(function(){
                            return E(E(_nz)[1]);
})], _b/* GHC.Types.[] */], new T(function(){
                            var _nB = new T(function(){
                              var _nC = B(_94/* React.Types.$wseparateAttrs */([1, _lS/* Easing.lvl16 */, [1, _lN/* Easing.lvl15 */, [1, _lI/* Easing.lvl14 */, [1, _lG/* Easing.lvl13 */, [1, _m9/* Easing.lvl32 */, [1, [0, _nd/* React.Attrs.transform_1 */, new T(function(){
                                return [1, toJSStr(B(unAppCStr("translate(80 75) rotate(", new T(function(){
                                  return B(_10/* GHC.Base.++ */(B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _nc/* GHC.Show.shows24 */, E(_np)[1]*90, _b/* GHC.Types.[] */])), _lE/* Easing.lvl12 */));
}))))];
})], _b/* GHC.Types.[] */]]]]]]));
                              return [0, _nC[1], _nC[2]];
}), _nD = new T(function(){
                              var _nE = B(_94/* React.Types.$wseparateAttrs */([1, _lZ/* Easing.lvl22 */, [1, _lX/* Easing.lvl21 */, [1, _lV/* Easing.lvl18 */, [1, _lU/* Easing.lvl17 */, [1, [0, _bu/* React.Attrs.fill_1 */, new T(function(){
                                var _nF = B(_8e/* React.Anim.$w$cinterpolate */(_9e/* React.Types.Linear */, _lw/* Easing.a33 */, _lv/* Easing.a32 */, _lu/* Easing.a31 */, _lz/* Easing.a36 */, _ly/* Easing.a35 */, _lx/* Easing.a34 */, _np));
                                return [1, toJSStr(B(_8X/* React.Anim.$w$cshow */(_nF[1], _nF[2], _nF[3])))];
})], _b/* GHC.Types.[] */]]]]]));
                              return [0, _nE[1], _nE[2]];
});
                            return B(_10/* GHC.Base.++ */([1, [1, _na/* React.Elements.rect_1 */, new T(function(){
                              return E(E(_nD)[2]);
}), new T(function(){
                              return E(E(_nD)[1]);
})], _b/* GHC.Types.[] */], [1, [1, _na/* React.Elements.rect_1 */, new T(function(){
                              return E(E(_nB)[2]);
}), new T(function(){
                              return E(E(_nB)[1]);
})], _b/* GHC.Types.[] */]));
})));
})));
})));
})], _b/* GHC.Types.[] */], [1, [0, _9k/* React.Elements.div_1 */, _n1/* Easing.lvl44 */, _n2/* Easing.lvl45 */, [1, [2, new T(function(){
                      var _nG = E(_nm);
                      switch(_nG[0]){
                        case 0:
                          var _nH = E(_ld/* React.Types.$fShowEasing46 */);
                          break;
                        case 1:
                          var _nH = E(_lc/* React.Types.$fShowEasing44 */);
                          break;
                        case 2:
                          var _nH = E(_lb/* React.Types.$fShowEasing42 */);
                          break;
                        case 3:
                          var _nH = E(_la/* React.Types.$fShowEasing40 */);
                          break;
                        case 4:
                          var _nH = E(_l8/* React.Types.$fShowEasing38 */);
                          break;
                        case 5:
                          var _nH = E(_l7/* React.Types.$fShowEasing36 */);
                          break;
                        case 6:
                          var _nH = E(_l6/* React.Types.$fShowEasing34 */);
                          break;
                        case 7:
                          var _nH = E(_l5/* React.Types.$fShowEasing32 */);
                          break;
                        case 8:
                          var _nH = E(_l4/* React.Types.$fShowEasing30 */);
                          break;
                        case 9:
                          var _nH = E(_l3/* React.Types.$fShowEasing28 */);
                          break;
                        case 10:
                          var _nH = E(_l2/* React.Types.$fShowEasing26 */);
                          break;
                        case 11:
                          var _nH = E(_l1/* React.Types.$fShowEasing24 */);
                          break;
                        case 12:
                          var _nH = E(_l0/* React.Types.$fShowEasing22 */);
                          break;
                        case 13:
                          var _nH = E(_kZ/* React.Types.$fShowEasing20 */);
                          break;
                        case 14:
                          var _nH = E(_kY/* React.Types.$fShowEasing18 */);
                          break;
                        case 15:
                          var _nH = E(_kX/* React.Types.$fShowEasing16 */);
                          break;
                        case 16:
                          var _nH = E(_kW/* React.Types.$fShowEasing14 */);
                          break;
                        case 17:
                          var _nH = E(_kV/* React.Types.$fShowEasing12 */);
                          break;
                        case 18:
                          var _nH = E(_kU/* React.Types.$fShowEasing10 */);
                          break;
                        case 19:
                          var _nH = B(_10/* GHC.Base.++ */(_lf/* React.Types.$fShowEasing7 */, new T(function(){
                            return B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _lg/* React.Types.$fShowEasing8 */, E(_nG[1])[1], [1, _nb/* GHC.Show.showSpace1 */, new T(function(){
                              return B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _lg/* React.Types.$fShowEasing8 */, E(_nG[2])[1], [1, _nb/* GHC.Show.showSpace1 */, new T(function(){
                                return B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _lg/* React.Types.$fShowEasing8 */, E(_nG[3])[1], [1, _nb/* GHC.Show.showSpace1 */, new T(function(){
                                  return B(A(_li/* GHC.Float.$w$sshowSignedFloat */,[_kR/* GHC.Float.$fShowDouble2 */, _lg/* React.Types.$fShowEasing8 */, E(_nG[4])[1], _b/* GHC.Types.[] */]));
})]]));
})]]));
})]]));
})));
                          break;
                        case 20:
                          var _nH = E(_le/* React.Types.$fShowEasing6 */);
                          break;
                        default:
                          var _nH = E(_l9/* React.Types.$fShowEasing4 */);
                      }
                      return _nH;
})], _b/* GHC.Types.[] */]], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], new T(function(){
                    return E(E(_no)[1]);
})));
}), new T(function(){
                  return E(E(_no)[2]);
})];
              };
            }
          };
          return E(B(A(_nj,[E(_nf)[1], _ni]))[1]);
})], _b/* GHC.Types.[] */], _mB/* Easing.lvl38 */));
})));
}), _r/* GHC.Tuple.() */];
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_nh)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_nh)[2]);
})];
}, _nI/* fail */ = function(_nJ){
  return new F(function(){return _2a/* Control.Exception.Base.patError */("Main.hs:(17,9)-(25,21)|lambda");});
}, _nK/* lvl */ = new T(function(){
  return B(_nI/* Main.fail */(_));
}), _nL/* simpleClass3 */ = new T(function(){
  return [0, toJSStr(_b/* GHC.Types.[] */)];
}), _nM/* simpleClass4 */ = new T(function(){
  return [0, "pit"];
}), _nN/* simpleClass5 */ = new T(function(){
  return [0, "little mac!"];
}), _nO/* simpleClass2 */ = [0, _nN/* Simple.simpleClass5 */, _nM/* Simple.simpleClass4 */, _nL/* Simple.simpleClass3 */], _nP/* simpleClass6 */ = function(_nQ, _nR){
  var _nS = E(_nR);
  if(!_nS[0]){
    return [0, new T(function(){
      var _nT = E(_nQ);
      return [0, _nT[1], _nT[2], _nS[1]];
}), _b/* GHC.Types.[] */];
  }else{
    var _nU = E(_nQ);
    return [0, [0, _nU[3], _nU[1], _nL/* Simple.simpleClass3 */], _b/* GHC.Types.[] */];
  }
}, _nV/* input_1 */ = new T(function(){
  return [0, "input"];
}), _nW/* simpleClass13 */ = new T(function(){
  return B(unCStr("fighter 1: "));
}), _nX/* simpleClass12 */ = [2, _nW/* Simple.simpleClass13 */], _nY/* simpleClass11 */ = [1, _nX/* Simple.simpleClass12 */, _b/* GHC.Types.[] */], _nZ/* simpleClass16 */ = new T(function(){
  return B(unCStr("send a new competitor into the ring: "));
}), _o0/* simpleClass15 */ = [2, _nZ/* Simple.simpleClass16 */], _o1/* simpleClass14 */ = [1, _o0/* Simple.simpleClass15 */, _b/* GHC.Types.[] */], _o2/* KeyPressEvt */ = 2, _o3/* onEnter1 */ = new T(function(){
  return [0, "Enter"];
}), _o4/* $wonEnter */ = function(_o5){
  return [0, function(_o6){
    var _o7 = js_parseKeyboardEvent(E(_o6)[1]), _o8 = _o7, _o9 = strEq(E(_o8)[3], E(_o3/* React.Events.onEnter1 */)[1]), _oa = _o9;
    return E(_oa)==0 ? [0] : E([1, _o5]);
  }, _o2/* React.Types.KeyPressEvt */];
}, _ob/* Enter */ = [1], _oc/* simpleClass19 */ = new T(function(){
  return [1, B(_o4/* React.Events.$wonEnter */(_ob/* Simple.Enter */))];
}), _od/* simpleClass18 */ = [1, _oc/* Simple.simpleClass19 */, _b/* GHC.Types.[] */], _oe/* ChangeEvt */ = 0, _of/* simpleClass22 */ = function(_og){
  var _oh = js_parseChangeEvent(E(_og)[1]), _oi = _oh;
  return [1, [0, E(_oi)]];
}, _oj/* simpleClass21 */ = [0, _of/* Simple.simpleClass22 */, _oe/* React.Types.ChangeEvt */], _ok/* simpleClass20 */ = [1, _oj/* Simple.simpleClass21 */], _ol/* simpleClass17 */ = [1, _ok/* Simple.simpleClass20 */, _od/* Simple.simpleClass18 */], _om/* simpleClass10 */ = new T(function(){
  return B(unCStr("fighter 2: "));
}), _on/* simpleClass9 */ = [2, _om/* Simple.simpleClass10 */], _oo/* simpleClass8 */ = [1, _on/* Simple.simpleClass9 */, _b/* GHC.Types.[] */], _op/* $WStr */ = function(_oq){
  return [1, E(_oq)[1]];
}, _or/* value_1 */ = new T(function(){
  return [0, "value"];
}), _os/* value_ */ = function(_ot){
  return [0, _or/* React.Attrs.value_1 */, new T(function(){
    return B(_op/* Haste.JSON.$WStr */(_ot));
})];
}, _ou/* simpleClass7 */ = function(_ov){
  var _ow = E(_ov);
  return function(_ox){
    return E([0, [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
      return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
        var _oy = new T(function(){
          var _oz = B(_94/* React.Types.$wseparateAttrs */([1, new T(function(){
            return B(_os/* React.Attrs.value_ */(_ow[3]));
}), _ol/* Simple.simpleClass17 */]));
          return [0, _oz[1], _oz[2]];
});
        return B(_10/* GHC.Base.++ */(_o1/* Simple.simpleClass14 */, [1, [1, _nV/* React.Elements.input_1 */, new T(function(){
          return E(E(_oy)[2]);
}), new T(function(){
          return E(E(_oy)[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], new T(function(){
        return B(_10/* GHC.Base.++ */([1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
          return B(_10/* GHC.Base.++ */(_nY/* Simple.simpleClass11 */, [1, [2, new T(function(){
            return fromJSStr(E(_ow[1])[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */], [1, [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, new T(function(){
          return B(_10/* GHC.Base.++ */(_oo/* Simple.simpleClass8 */, [1, [2, new T(function(){
            return fromJSStr(E(_ow[2])[1]);
})], _b/* GHC.Types.[] */]));
})], _b/* GHC.Types.[] */]));
})));
})], _b/* GHC.Types.[] */], _r/* GHC.Tuple.() */]);
  };
}, _oA/* slideClass21 */ = [2, _b/* GHC.Types.[] */], _oB/* slideClass20 */ = [1, _oA/* Slide.slideClass21 */, _b/* GHC.Types.[] */], _oC/* slideClass28 */ = new T(function(){
  return B(unCStr("toggle"));
}), _oD/* slideClass27 */ = [2, _oC/* Slide.slideClass28 */], _oE/* slideClass26 */ = [1, _oD/* Slide.slideClass27 */, _b/* GHC.Types.[] */], _oF/* Toggle */ = 0, _oG/* slideClass_x */ = [1, _oF/* Slide.Toggle */], _oH/* slideClass33 */ = function(_oI){
  var _oJ = js_parseMouseEvent(E(_oI)[1]), _oK = _oJ, _oL = E(_oK);
  return E(_oG/* Slide.slideClass_x */);
}, _oM/* slideClass32 */ = [0, _oH/* Slide.slideClass33 */, _9u/* React.Types.ClickEvt */], _oN/* slideClass31 */ = [1, _oM/* Slide.slideClass32 */], _oO/* slideClass30 */ = [1, _oN/* Slide.slideClass31 */, _b/* GHC.Types.[] */], _oP/* slideClass35 */ = new T(function(){
  return [1, "btn"];
}), _oQ/* slideClass34 */ = [0, _9O/* React.Attrs.class_1 */, _oP/* Slide.slideClass35 */], _oR/* slideClass29 */ = [1, _oQ/* Slide.slideClass34 */, _oO/* Slide.slideClass30 */], _oS/* slideClass_ds1 */ = new T(function(){
  var _oT = B(_94/* React.Types.$wseparateAttrs */(_oR/* Slide.slideClass29 */));
  return [0, _oT[1], _oT[2]];
}), _oU/* slideClass_lvl1 */ = new T(function(){
  return E(E(_oS/* Slide.slideClass_ds1 */)[1]);
}), _oV/* slideClass_lvl2 */ = new T(function(){
  return E(E(_oS/* Slide.slideClass_ds1 */)[2]);
}), _oW/* slideClass25 */ = [0, _9t/* React.Elements.button_1 */, _oV/* Slide.slideClass_lvl2 */, _oU/* Slide.slideClass_lvl1 */, _oE/* Slide.slideClass26 */], _oX/* slideClass24 */ = [1, _oW/* Slide.slideClass25 */, _b/* GHC.Types.[] */], _oY/* slideClass23 */ = [0, _9k/* React.Elements.div_1 */, _b/* GHC.Types.[] */, _b/* GHC.Types.[] */, _oX/* Slide.slideClass24 */], _oZ/* slideClass22 */ = [1, _oY/* Slide.slideClass23 */, _b/* GHC.Types.[] */], _p0/* slideClass36 */ = new T(function(){
  return [0, "width"];
}), _p1/* slideClass38 */ = new T(function(){
  return [1, "slider"];
}), _p2/* slideClass37 */ = [0, _9O/* React.Attrs.class_1 */, _p1/* Slide.slideClass38 */], _p3/* slideClass19 */ = new T(function(){
  return [1, "slider-container"];
}), _p4/* slideClass18 */ = [0, _9O/* React.Attrs.class_1 */, _p3/* Slide.slideClass19 */], _p5/* slideClass17 */ = [1, _p4/* Slide.slideClass18 */, _b/* GHC.Types.[] */], _p6/* slideClass_ds */ = new T(function(){
  var _p7 = B(_94/* React.Types.$wseparateAttrs */(_p5/* Slide.slideClass17 */));
  return [0, _p7[1], _p7[2]];
}), _p8/* slideClass_lvl19 */ = new T(function(){
  return E(E(_p6/* Slide.slideClass_ds */)[2]);
}), _p9/* slideClass_lvl20 */ = new T(function(){
  return E(E(_p6/* Slide.slideClass_ds */)[1]);
}), _pa/* slideClass16 */ = function(_pb, _pc){
  var _pd = new T(function(){
    return B(A(function(_pe){
      var _pf = new T(function(){
        var _pg = B(_94/* React.Types.$wseparateAttrs */([1, _p2/* Slide.slideClass37 */, [1, [0, _a0/* React.Attrs.style_1 */, [4, E([1, [0, _p0/* Slide.slideClass36 */, new T(function(){
          if(!E(_pb)){
            var _ph = [0, 200+E(_pe)[1]];
          }else{
            var _ph = [0, E(_pe)[1]];
          }
          return _ph;
})], _b/* GHC.Types.[] */])]], _b/* GHC.Types.[] */]]));
        return [0, _pg[1], _pg[2]];
});
      return function(_pi){
        return [0, new T(function(){
          return B(_10/* GHC.Base.++ */(_oZ/* Slide.slideClass22 */, [1, [0, _9k/* React.Elements.div_1 */, new T(function(){
            return E(E(_pf)[2]);
}), new T(function(){
            return E(E(_pf)[1]);
}), _oB/* Slide.slideClass20 */], _b/* GHC.Types.[] */]));
}), _r/* GHC.Tuple.() */];
      };
    },[_pc, _pc]));
});
  return [0, [1, [0, _9k/* React.Elements.div_1 */, _p8/* Slide.slideClass_lvl19 */, _p9/* Slide.slideClass_lvl20 */, new T(function(){
    return B(_10/* GHC.Base.++ */(_b/* GHC.Types.[] */, new T(function(){
      return E(E(_pd)[1]);
})));
})], _b/* GHC.Types.[] */], new T(function(){
    return E(E(_pd)[2]);
})];
}, _pj/* slideClass2 */ = [0, 0], _pk/* slideClass11 */ = [0, 1000], _pl/* paneWidth */ = [0, 200], _pm/* slideClass15 */ = [0, _pl/* Slide.paneWidth */, _pj/* Slide.slideClass2 */], _pn/* slideClass7 */ = function(_po){
  return [0];
}, _pp/* slideClass8 */ = function(_pq, _pr){
  return E(_pr);
}, _ps/* slideClass14 */ = [0, _aY/* React.Anim.$fAnimatableDouble */, _pk/* Slide.slideClass11 */, _pm/* Slide.slideClass15 */, _pp/* Slide.slideClass8 */, _9d/* React.Types.EaseInOutQuad */, _pn/* Slide.slideClass7 */], _pt/* slideClass13 */ = [1, _ps/* Slide.slideClass14 */, _b/* GHC.Types.[] */], _pu/* slideClass12 */ = [0, _78/* Slide.Closed */, _pt/* Slide.slideClass13 */], _pv/* Open */ = 0, _pw/* slideClass10 */ = [0, -200], _px/* slideClass9 */ = [0, _pw/* Slide.slideClass10 */, _pj/* Slide.slideClass2 */], _py/* slideClass6 */ = [0, _aY/* React.Anim.$fAnimatableDouble */, _pk/* Slide.slideClass11 */, _px/* Slide.slideClass9 */, _pp/* Slide.slideClass8 */, _9d/* React.Types.EaseInOutQuad */, _pn/* Slide.slideClass7 */], _pz/* slideClass5 */ = [1, _py/* Slide.slideClass6 */, _b/* GHC.Types.[] */], _pA/* slideClass4 */ = [0, _pv/* Slide.Open */, _pz/* Slide.slideClass5 */], _pB/* slideClass3 */ = function(_pC, _pD){
  if(!E(_pC)){
    var _pE = E(_pD);
    return E(_pu/* Slide.slideClass12 */);
  }else{
    var _pF = E(_pD);
    return E(_pA/* Slide.slideClass4 */);
  }
}, _pG/* main2 */ = function(_pH, _){
  var _pI = E(_pH);
  if(!_pI[0]){
    return E(_nK/* Main.lvl */);
  }else{
    var _pJ = E(_pI[2]);
    if(!_pJ[0]){
      return E(_nK/* Main.lvl */);
    }else{
      var _pK = E(_pJ[2]);
      if(!_pK[0]){
        return E(_nK/* Main.lvl */);
      }else{
        var _pL = E(_pK[2]);
        if(!_pL[0]){
          return E(_nK/* Main.lvl */);
        }else{
          var _pM = E(_pL[2]);
          if(!_pM[0]){
            return E(_nK/* Main.lvl */);
          }else{
            if(!E(_pM[2])[0]){
              var _pN = js_createClass(_ou/* Simple.simpleClass7 */), _pO = _pN, _pP = nMV(_nO/* Simple.simpleClass2 */), _pQ = _pP, _pR = nMV(_r/* GHC.Tuple.() */), _pS = _pR, _pT = nMV(_b/* GHC.Types.[] */), _pU = _pT, _pV = nMV(_b/* GHC.Types.[] */), _pW = _pV, _pX = B(_6I/* React.Render.$wa */(_pI[1], _ou/* Simple.simpleClass7 */, _nP/* Simple.simpleClass6 */, [0, _pQ], [0, _pS], [0, _pU], _pW, _)), _pY = _pX, _pZ = js_createClass(_cy/* Circles.circlesClass10 */), _q0 = _pZ, _q1 = nMV(_d3/* Circles.circlesClass7 */), _q2 = _q1, _q3 = nMV(_cT/* Circles.circlesClass4 */), _q4 = _q3, _q5 = nMV(_b/* GHC.Types.[] */), _q6 = _q5, _q7 = nMV(_cO/* Circles.circlesClass2 */), _q8 = _q7, _q9 = B(_6I/* React.Render.$wa */(_pJ[1], _cy/* Circles.circlesClass10 */, _ex/* Circles.circlesClass9 */, [0, _q2], [0, _q4], [0, _q6], _q8, _)), _qa = _q9, _qb = js_createClass(_ne/* Easing.easingClass30 */), _qc = _qb, _qd = nMV(_k5/* Easing.easingClass28 */), _qe = _qd, _qf = nMV(_k3/* Easing.easingClass2 */), _qg = _qf, _qh = nMV(_b/* GHC.Types.[] */), _qi = _qh, _qj = nMV(_b/* GHC.Types.[] */), _qk = _qj, _ql = B(_6I/* React.Render.$wa */(_pK[1], _ne/* Easing.easingClass30 */, _kI/* Easing.easingClass29 */, [0, _qe], [0, _qg], [0, _qi], _qk, _)), _qm = _ql, _qn = js_createClass(_pa/* Slide.slideClass16 */), _qo = _qn, _qp = nMV(_78/* Slide.Closed */), _qq = _qp, _qr = nMV(_pj/* Slide.slideClass2 */), _qs = _qr, _qt = nMV(_b/* GHC.Types.[] */), _qu = _qt, _qv = nMV(_b/* GHC.Types.[] */), _qw = _qv, _qx = B(_6I/* React.Render.$wa */(_pL[1], _pa/* Slide.slideClass16 */, _pB/* Slide.slideClass3 */, [0, _qq], [0, _qs], [0, _qu], _qw, _)), _qy = _qx, _qz = js_createClass(_a1/* Chain.chainClass17 */), _qA = _qz, _qB = nMV(_77/* Chain.Closed */), _qC = _qB, _qD = nMV(_aM/* Chain.chainClass2 */), _qE = _qD, _qF = nMV(_b/* GHC.Types.[] */), _qG = _qF, _qH = nMV(_b/* GHC.Types.[] */), _qI = _qH, _qJ = B(_6I/* React.Render.$wa */(_pM[1], _a1/* Chain.chainClass17 */, _bg/* Chain.chainClass3 */, [0, _qC], [0, _qE], [0, _qG], _qI, _)), _qK = _qJ;
              return _r/* GHC.Tuple.() */;
            }else{
              return E(_nK/* Main.lvl */);
            }
          }
        }
      }
    }
  }
}, _qL/* main12 */ = new T(function(){
  return B(unCStr("simple-demo"));
}), _qM/* main11 */ = new T(function(){
  return B(unCStr("circles-demo"));
}), _qN/* main10 */ = new T(function(){
  return B(unCStr("easing-demo"));
}), _qO/* main8 */ = new T(function(){
  return B(unCStr("chain-demo"));
}), _qP/* main7 */ = [1, _qO/* Main.main8 */, _b/* GHC.Types.[] */], _qQ/* main9 */ = new T(function(){
  return B(unCStr("slide-demo"));
}), _qR/* main6 */ = [1, _qQ/* Main.main9 */, _qP/* Main.main7 */], _qS/* main5 */ = [1, _qN/* Main.main10 */, _qR/* Main.main6 */], _qT/* main4 */ = [1, _qM/* Main.main11 */, _qS/* Main.main5 */], _qU/* main3 */ = [1, _qL/* Main.main12 */, _qT/* Main.main4 */], _qV/* toJSStr1 */ = function(_qW){
  return [0, toJSStr(E(_qW))];
}, _qX/* main_w2 */ = new T(function(){
  return B(_3g/* GHC.Base.map */(_qV/* GHC.HastePrim.toJSStr1 */, _qU/* Main.main3 */));
}), _qY/* findElems */ = function(_qZ, _r0){
  while(1){
    var _r1 = (function(_r2, _r3){
      var _r4 = E(_r2);
      if(!_r4[0]){
        return [0];
      }else{
        var _r5 = _r4[2], _r6 = E(_r3);
        if(!_r6[0]){
          return [0];
        }else{
          var _r7 = _r6[2];
          if(!E(_r6[1])[0]){
            return [1, _r4[1], new T(function(){
              return B(_qY/* Haste.DOM.JSString.findElems */(_r5, _r7));
})];
          }else{
            _qZ = _r5;
            _r0 = _r7;
            return null;
          }
        }
      }
    })(_qZ, _r0);
    if(_r1!=null){
      return _r1;
    }
  }
}, _r8/* lvl */ = new T(function(){
  return B(unAppCStr("[]", _b/* GHC.Types.[] */));
}), _r9/* lvl17 */ = [1, _18/* GHC.Show.showList__2 */, _b/* GHC.Types.[] */], _ra/* showl */ = function(_rb){
  var _rc = E(_rb);
  return _rc[0]==0 ? E(_r9/* Haste.DOM.JSString.lvl17 */) : [1, _17/* GHC.Show.showList__1 */, new T(function(){
    return B(_10/* GHC.Base.++ */(fromJSStr(E(_rc[1])[1]), new T(function(){
      return B(_ra/* Haste.DOM.JSString.showl */(_rc[2]));
})));
})];
}, _rd/* withElems1 */ = function(_re, _rf){
  return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ", new T(function(){
    var _rg = B(_qY/* Haste.DOM.JSString.findElems */(_rf, _re));
    return _rg[0]==0 ? E(_r8/* Haste.DOM.JSString.lvl */) : [1, _19/* GHC.Show.showList__3 */, new T(function(){
      return B(_10/* GHC.Base.++ */(fromJSStr(E(_rg[1])[1]), new T(function(){
        return B(_ra/* Haste.DOM.JSString.showl */(_rg[2]));
})));
})];
}))));});
}, _rh/* main1 */ = function(_){
  var _ri = B(_c/* Main.main13 */(_qX/* Main.main_w2 */, _)), _rj = _ri;
  if(!B(_0/* GHC.List.any */(_9/* Data.Maybe.isNothing */, _rj))){
    return new F(function(){return _pG/* Main.main2 */(B(_3g/* GHC.Base.map */(_6/* Data.Maybe.fromJust */, _rj)), _);});
  }else{
    return new F(function(){return _rd/* Haste.DOM.JSString.withElems1 */(_rj, _qX/* Main.main_w2 */);});
  }
}, _rk/* main */ = function(_){
  return new F(function(){return _rh/* Main.main1 */(_);});
};

var hasteMain = function() {B(A(_rk, [0]));};window.onload = hasteMain;