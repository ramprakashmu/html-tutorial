HTML Color
-------------
HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.
<p style="background-color:Tomato;">Hello HTMl</p>
<h1 style="color:Tomato;">Hello World</h1>
<h1 style="border:2px solid Tomato;">Hello World</h1>


rgb(255, 99, 71)
#ff6347
hsl(9, 100%, 64%)

rgba(255, 99, 71, 0.5)
hsla(9, 100%, 64%, 0.5)

<h1 style="background-color:rgb(255, 99, 71);">RGB</h1>
<h1 style="background-color:#ff6347;">HEX</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">HSL</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">RGBA</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">HSLA</h1>

HTML Styles - CSS
-----------------
Inline CSS
Internal CSS
External CSS
Ex: <link rel="stylesheet" href="/html/styles.css">


HTML Links
------------
<a href="url">link text</a>



HTML Tables
-----------
HTML tables allow arrange data into rows and columns.

<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;
}
</style>
</head>
<body>

<h2>Table Caption</h2>
<p>To add a caption to a table, use the caption tag.</p>

<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>

</body>
</html>




HTML class Attribute
--------------------
The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

HTML id Attribute
-----------------
The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>

Difference Between Class and ID ?
A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page: