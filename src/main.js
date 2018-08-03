import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalaticAge } from './galaticAge.js';

$(document).ready(function() {
  $("userInput").submit(function(event) {
    event.preventDefault();

  });
});
