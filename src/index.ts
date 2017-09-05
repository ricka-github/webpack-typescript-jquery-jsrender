
import * as $ from "jquery"
import * as jsr from "jsrender"

jsr($);
/*
var $ = __webpack_require__(1);
var $2 = __webpack_require__(2);
$2($);
*/
$("#myid").text("jquery works");

var tmpl = $.templates("Name: {{:name}}");
var person = {name: "Jim"};
var text = tmpl.render(person); // ready for insertion, e.g $("#result").html(html);

$("#myid2").text(text);
