import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import shouldPureComponentUpdate from 'react-pure-render/function';
import rssg from 'react-spark-scroll-gsap';

const { SparkScroll } = rssg();

const cyanA = alpha => `rgba(0, 255, 255, ${alpha})`;
const magentaA = alpha => `rgba(255, 0, 255, ${alpha})`;
const yellowA = alpha => `rgba(255, 255, 0, ${alpha})`;

const cyan = cyanA(0.7);
const magenta = magentaA(0.7);
const yellow = yellowA(0.7);

const vectors = (pct, factor = 100) => {
  const pct_ = pct - 0.5; // Math.abs(pct - 0.5);
  // goal: 0 and 1 should both match up
  const v = factor * pct_ * pct_; // eslint-disable-line id-length

  // cos 30 / sin 60 = 0.86602540378
  const c30 = 0.86602540378;
  // sin 30 / cos 60 = 0.5

  // goal: equilateral triangle
  return {
    cx: 0,
    cy: v,

    mx: v * -c30,
    my: v * -0.5,

    yx: v * c30,
    yy: v * -0.5,
  };
};

const makeStyle = ({ cx, cy, mx, my, yx, yy }) => {
  return {
    c: {
      color: cyan,
      left: cx + 'px',
      bottom: cy + 'px',
      mixBlendMode: 'multiply',
    },
    m: {
      color: magenta,
      left: mx + 'px',
      bottom: my + 'px',
      mixBlendMode: 'multiply',
    },
    y: {
      color: yellow,
      left: yx + 'px',
      bottom: yy + 'px',
      mixBlendMode: 'multiply',
    },
  };
};

const textStyle = pct => {
  const vec = vectors(pct, 20);
  const { c, m, y } = makeStyle(vec);
  return {
    c: {
      ...c,
      position: 'absolute',
    },
    m: {
      ...m,
      position: 'absolute',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none',
    },
    y: {
      ...y,
      position: 'absolute',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none',
    },
  };
};

const barStyle = pct => {
  const { cx, cy, mx, my, yx, yy } = vectors(pct, 20);
  const vec = { cx, cy: cy - 12, mx, my: my - 12, yx, yy: yy - 12 };
  return makeStyle(vec);
};

const Spacer = ({ children: height }) => <div style={{ height }} />;

const InnerSplitText = ({ progress, text, style, className }) => {
  const tStyle = textStyle(progress);
  const bStyle = barStyle(progress);
  return (
    <div style={style} className={className}>
      <div style={tStyle.c}>{text}</div>
      <div style={tStyle.m}>{text}</div>
      <div style={tStyle.y}>{text}</div>
      <Underscore style={bStyle.c} />
      <Underscore style={bStyle.m} />
      <Underscore style={bStyle.y} />
    </div>
  );
};

const SplitText = ({ text, progress, callback, timeline, style, className }) => (
  <SparkScroll.h2
      callback={callback}
      timeline={timeline}
      style={style}
      className={className}
      className="colored"
      >
    <InnerSplitText progress={progress} text={text} />
  </SparkScroll.h2>
);

const Underscore = ({ style }) => {
  const outerStyle = {
    position: 'relative',
  };
  const innerStyle = {
    ...style,
    backgroundColor: style.color,
    WebkitMixBlendMode: 'multiply',
    mixBlendMode: 'multiply',
    position: 'absolute',
    width: 150,
    height: 5,
  };
  return (
    <div style={outerStyle}>
      <div style={innerStyle} />
    </div>
  );
};

const imgStyle = pct => {
  const { cx, cy, mx, my, yx, yy } = vectors(pct, 250);

  const posCX = cx + 50 + 'px';
  const posCY = cy + 50 + 'px';

  const posMX = mx + 50 + 'px';
  const posMY = my + 50 + 'px';

  const posYX = yx + 50 + 'px';
  const posYY = yy + 50 + 'px';

  return {
    backgroundPosition: `${posCX} ${posCY}, ${posMX} ${posMY}, ${posYX} ${posYY}`,
  };
};

const PageIndicator = ({ progress }) => {
  const t = Math.abs(progress) < 0.1 ? 0 : Math.abs(progress - 0.1);
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: 10,
        transform: `translate(${4400 * t}px, ${-1600 * t}px) scale(${20 * t + 1}, ${-0.8 * t + 1}) skew(${20 * t}deg, ${-30 * t}deg) rotate(${-0.05 * t}turn)`,
        backgroundColor: cyan,
        mixBlendMode: 'multiply',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: 10,
        transform: `translate(${5000 * t}px, ${1000 * t}px) scale(${30 * t + 1}, ${-0.5 * t + 1}) skew(${30 * t}deg, ${-20 * t}deg) rotate(${0.08 * t}turn)`,
        backgroundColor: magenta,
        mixBlendMode: 'multiply',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: 10,
        transform: `translate(${-4000 * t}px, ${1000 * t}px) scale(${30 * t + 1}, ${-0.5 * t + 1}) skew(${30 * t}deg, ${-20 * t}deg) rotate(${0.08 * t}turn)`,
        backgroundColor: yellow,
        mixBlendMode: 'multiply',
      }} />
    </div>
  );
};

class App extends Component {
    state = {
      titleProgress: 0,
      imgProgress: 0,
      linksProgress: 0,
      contactProgress: 0,

      postsProgress: 0,
      nowProgress: 0,
      canonProgress: 0,
      resumeProgress: 0,
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
      return (
          <div className="leftMargin">
              <div className="screensize vcenter">
              {/*<PageIndicator progress={this.state.titleProgress - 0.5} />*/}
                <div className="arrowed">
                  <SplitText text="JOEL BURGET"
                             progress={this.state.titleProgress}
                             className="xeftMargin"
                             timeline={{
                               topTop: { fontSize: '25px' },
                               bottomBottom: { fontSize: '45px' },
                             }}
                             callback={titleProgress => this.setState({ titleProgress })} />
                </div>
              </div>

              <SparkScroll.div
                className="screensize vcenter"
                callback={imgProgress => this.setState({ imgProgress })}
                timeline={{
                  topCenter: { fontSize: '15px' },
                  centerTop: { fontSize: '15px' },
                }}>
                <InnerSplitText text="ME"
                                progress={this.state.imgProgress}
                                className="header" />
                {/*<PageIndicator progress={this.state.imgProgress - 0.5} />*/}
                <div className="img" style={imgStyle(this.state.imgProgress)} />

                <p className="meDesc">
                  I'm a software developer and designer from the US. I've worked professionally as a web developer focused on frontend / UI and also have extensive experience in typed functional programming. My most interesting work happens when I can mix UI and functional programming together.
                </p>

              </SparkScroll.div>

              <SparkScroll.div
                timeline={{
                  topCenter: { opacity: 1 },
                  centerTop: { opacity: 1 },
                }}
                callback={linksProgress => this.setState({ linksProgress })}
                className="screensize vcenter">
                {/*<PageIndicator progress={this.state.linksProgress - 0.5} />*/}

                <InnerSplitText text="LINKS"
                                progress={this.state.linksProgress}
                                className="header" />
                <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>

                  <div style={{ position: 'relative', margin: 'auto 0', flexGrow: 1 }}>
                    <a href="/posts" style={{ textDecoration: 'none' }}>
                    <SplitText text="/posts"
                               timeline={{
                                 topTop: { fontSize: '35px' },
                                 bottomBottom: { fontSize: '35px' },
                               }}
                               progress={this.state.linksProgress}
                               callback={postsProgress => this.setState({ postsProgress })} />
                    </a>
                    <p style={{ marginTop: 40 }}>Blog</p>
                  </div>

                  <div style={{ position: 'relative', margin: 'auto 0', flexGrow: 1 }}>
                    <a href="/now" style={{ textDecoration: 'none' }}>
                    <SplitText text="/now"
                               timeline={{
                                 topTop: { fontSize: '35px' },
                                 bottomBottom: { fontSize: '35px' },
                               }}
                               progress={this.state.linksProgress}
                               callback={nowProgress => this.setState({ nowProgress })} />
                    </a>
                    <p style={{ marginTop: 40 }}>What I'm working on now</p>
                  </div>

                  <div style={{ position: 'relative', margin: 'auto 0', flexGrow: 1 }}>
                    <a href="/canon" style={{ textDecoration: 'none' }}>
                    <SplitText text="/canon"
                               timeline={{
                                 topTop: { fontSize: '35px' },
                                 bottomBottom: { fontSize: '35px' },
                               }}
                               progress={this.state.linksProgress}
                               callback={canonProgress => this.setState({ canonProgress })} />
                    </a>
                    <p style={{ marginTop: 40 }}>Inspiration</p>
                  </div>

                  <div style={{ position: 'relative', margin: 'auto 0', flexGrow: 1 }}>
                    <a href="/resume" style={{ textDecoration: 'none' }}>
                    <SplitText text="/resume"
                               timeline={{
                                 topTop: { fontSize: '35px' },
                                 bottomBottom: { fontSize: '35px' },
                               }}
                               progress={this.state.linksProgress}
                               callback={resumeProgress => this.setState({ resumeProgress })} />
                    </a>
                    <p style={{ marginTop: 40 }}>Work I'm proud of</p>
                  </div>

                </div>

              </SparkScroll.div>

              <SparkScroll.div
                className="screensize"
                progress={this.state.contactProgress}
                style={{ display: 'flex', flexDirection: 'column' }}
                timeline={{
                  topCenter: { opacity: 1 },
                  centerTop: { opacity: 1 },
                }}
                callback={contactProgress => this.setState({ contactProgress })}>
                {/*<PageIndicator progress={this.state.contactProgress - 0.5} />*/}
                <InnerSplitText text="GET IN TOUCH"
                                progress={this.state.contactProgress}
                                className="header" />

                <div className="xeftMargin" style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', marginBottom: 100 }}>
                  <div style={{ margin: '10px 0' }}>
                    <a style={{ textDecoration: 'none' }} href="https://github.com/joelburget">github: joelburget</a>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <a style={{ textDecoration: 'none' }} href="http://twitter.com/dino_joel">twitter: dino_joel</a>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <a style={{ textDecoration: 'none' }} href="mailto:joelburget@gmail.com">email: joelburget@gmail.com</a>
                  </div>
                </div>
              </SparkScroll.div>

          </div>
      );
    }
}


window.onload = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('inject')
  );
};
