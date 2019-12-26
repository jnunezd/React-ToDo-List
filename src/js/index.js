//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Home } from "./component/home.js";

// Suponiendo que haya un div con la id 'app' en el cuerpo de su sitio web original
// toda tu aplicación de react se agregará a esa div
ReactDOM.render(<Home />, document.querySelector("#app"));
