import './css/style.scss';
import './css/styles.css';
import {drawStreamGraph} from "./js/streamgraph"
import {drawBubbleChart} from "./js/bubblechart"
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'


drawStreamGraph();
drawBubbleChart();

window.onload = function(){
    // wait for DOM to load
    scrollSnapPolyfill();
    }