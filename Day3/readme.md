
HTML List
-----------
Unordered HTML List
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

Ordered HTML List
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<dl>	Defines a description list
<dt>	Defines a term in a description list
<dd>	Describes the term in a description list

<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>



Block and Inline Elements
---------------------------
Block Elements
<address>
<article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer>
<form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>

Inline Elements tags
<a>
<abbr>
<acronym>
<b>
<bdo>
<big>
<br>
<button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var>

HTML Image
----------
<img src="pic.jpg" alt="Pic Information" width="XX" height="YY">

<div style="background-image: url('img_girl.jpg');">
.<style>
body {
  background-image: url('img_girl.jpg');
}

body {
  background-image: url('example_img_girl.jpg');
  background-repeat: no-repeat;
}
</style>

The HTML <picture> element allows us to display different pictures for different devices or screen sizes.

<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>




HTML Iframes
An HTML iframe is used to display a web page within a web page.
syntax:
<iframe src="url" title="description">
Ex:
<iframe src="www.facebook.com" height="200" width="300" title="Iframe Example"></iframe>

