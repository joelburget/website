import React from 'react/addons';

// neglecting padding
function elemCenter(elem) {
    return elem.offsetTop + elem.clientHeight / 2;
};

/* Spy on your h2s and h3s
 *
 */
class ScrollSpy extends React.Component {
    render() {
        var { closestH2, closestH3 } = this.state;
        console.log(this.state);
        var h2s = this.hierarchy.map(h2 => {
            var classes = "";
            var h3s = null;

            if (closestH2 === h2.id) {
                classes = "selected";
                h3s = h2.children.map(h3 => {
                    // var classes = React.classSet({
                    //     selected: closestH3 === h3.id,
                    // });
                    var classes = closestH3 === h3.id ?
                            "selected" :
                            "";

                    <li className={classes}>
                        <button onClick={() => { this.handleClick(h3.id); }}>
                            {h3.name}
                        </button>
                    </li>
                });
            }

            return <li className={classes}>
                <button onClick={() => { this.handleClick(h2.id); }}>
                    {h2.name}
                </button>
                <ul>{h3s}</ul>
            </li>
        });

        return <div>
            <ul>{h2s}</ul>
        </div>;
    }

    handleClick(id) {
        var elem = document.getElementById(id);
        document.body.scrollTop = elem.offsetTop - 200;
        history.replaceState(null, null, '#' + id);
    }

    constructor() {
        super();
        this.state = {
            closestH2: null,
            closestH3: null,
        };
    }

    onScroll() {
        var centerScroll = window.scrollY + window.innerHeight / 2;

        var closestH2Dist = Number.POSITIVE_INFINITY;
        var closestH3Dist = Number.POSITIVE_INFINITY;

        var closestH2 = null;
        var closestH3 = null;

        // look for the header closest to the center of the screen

        this.hierarchy.forEach(h2 => {
            var h2center = elemCenter(document.getElementById(h2.id));
            var diff = Math.abs(h2center - centerScroll);

            if (diff < closestH2Dist) {
                closestH2Dist = diff;
                closestH2 = h2.id;

                // this is gross - it's just duplicated from the h2 case
                h2.children.forEach(h3 => {
                    var h3center = elemCenter(document.getElementById(h3.id));
                    var diff = Math.abs(h3center - centerScroll);

                    if (diff < closestH3Dist) {
                        closestH3Dist = diff;
                        closestH3 = h3.id;
                    }
                });
            }
        });

        this.setState({ closestH2, closestH3 });
    }

    componentWillMount() {
        this.hierarchy = [];
    }

    componentDidMount() {
        var headers = document.querySelectorAll("h2, h3");
        this.hierarchy = [];

        var openHeader = null;
        for (var i = 0; i < headers.length; i++) {
            var currentHeader = headers[i];

            // This breaks if the first header is an h3
            if (currentHeader.tagName === "H2") {
                openHeader = {
                    name: currentHeader.textContent,
                    id: currentHeader.id,
                    children: [],
                };
                this.hierarchy.push(openHeader);

            // Push an h3 into its parent
            } else {
                openHeader.children.push({
                    name: currentHeader.textContent,
                    id: currentHeader.id,
                });
            }
        }

        window.onscroll = () => { this.onScroll(); };

        this.onScroll(); // highlight current position
    }
}

module.exports = ScrollSpy;
