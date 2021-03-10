
//import testData from "./assets/data/test.json"; /* Example of reading in data */
import './css/style.scss';
import './css/styles.css'; /* Example of connecting a style-sheet */
import {drawStreamGraph} from "./js/streamgraph"
import {drawBubbleChart} from "./js/bubblechart"
import { drawGeographicMap } from './js/geographic';

import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

/* 
    TODO: all the other logic for implementing your charts + adding in some basic filters 
    (e.g. dropdown menus for seeing different aspects of the data)
*/

drawStreamGraph();
drawBubbleChart();

window.onload = function(){
    // wait for DOM to load
    // let items = document.querySelectorAll('slide');
    scrollSnapPolyfill();
    }