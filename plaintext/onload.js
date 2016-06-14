import React from "react/addons";
import demo from "babel!./assoc.jsx";
import ScrollSpy from "babel!./Scrollspy.js";

window.onload = function() {
    // React.render(<ScrollSpy />, document.getElementById("scrollspy"));

    var integralStr = "\\displaystyle{\\int \\frac{\\left(x^{4} + x^{2} e^{x} - x^{2} - 2 x e^{x} - 2 x - e^{x}\\right) e^{x}}{\\left(x - 1\\right)^{2} \\left(x + 1\\right)^{2} \\left(e^{x} + 1\\right)}\\, dx}";
    katex.render(integralStr, document.getElementById("katex-integral"));
};
