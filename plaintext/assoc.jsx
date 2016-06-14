var React = require("react/addons");
var classNames = require("classnames");

var elemsEntered = new Set();
var callbacks = new Set();

function updateAll() {
    callbacks.forEach(cb => {
        cb()
    });
}

var Assoc = React.createClass({
    render: function() {
        var classes = classNames({
            assoc: true,
            hl: this.state.highlighted,
        });

        return <div className={classes}
                     onMouseEnter={this.handleEnter}
                     onMouseLeave={this.handleLeave}>
            {this.props.children}
        </div>;
    },

    getInitialState: function() {
        return { highlighted: false };
    },

    componentDidMount: function() {
        callbacks.add(this.recheckHighlight);
    },

    recheckHighlight: function() {
        this.setState({ highlighted: this.shouldHighlight() });
    },

    handleEnter: function() {
        elemsEntered.add(this.getDOMNode());
        updateAll();
    },

    handleLeave: function() {
        elemsEntered.delete(this.getDOMNode());
        updateAll();
    },

    shouldHighlight: function() {
        var thisNode = this.getDOMNode();

        if (!elemsEntered.has(thisNode)) {
            return false;
        }

        // if our node contains any of the others, we shouldn't highlight
        for (let item of elemsEntered) {
            if (item !== thisNode && thisNode.contains(item)) {
                return false;
            }
        }

        return true;
    },
});

var demo = (
    <pre className="sourceCode haskell">
        <code className="sourceCode haskell">
            <div>pExp </div>
            <div className="fu">=</div>
            <Assoc>
                <Assoc>
                    <Assoc><div className="dt">Neg</div></Assoc>
                    <div className="fu">&lt;$&gt;</div>
                        <Assoc>teq
                            <div className="ch">&#39;-&#39;</div>
                            <div className="fu">*&gt;</div>
                            <Assoc>pExp</Assoc>
                        </Assoc>
                    </Assoc><br />{"   "}
                <div className="fu">&lt;|&gt;</div>
                <Assoc>
                    (
                    <div className="fu">:+:</div>
                    ) teq
                    <div className="ch">&#39;(&#39;</div>
                    <div className="fu">&lt;$&gt;</div>
                    <Assoc>
                        pExp
                        <div className="fu">&lt;*</div>
                        <Assoc>teq
                            <div className="ch">&#39;+&#39;</div>
                            <div className="fu">&lt;*&gt;</div>
                            <Assoc>
                                pExp
                                <div className="fu">&lt;*</div>
                                <Assoc>
                                    teq
                                    <div className="ch">&#39;)&#39;</div>
                                </Assoc>
                            </Assoc>
                        </Assoc>
                    </Assoc>
                </Assoc>
            </Assoc><br />{"   "}
            <div className="fu">&lt;|&gt;</div>
            <Assoc>
                <div className="dt">V</div>
                <div className="fu">&lt;$&gt;</div>
                <Assoc>tok isAlpha</Assoc>
            </Assoc>
        </code>
    </pre>
);

module.exports = demo;
