<html>
<head>
  <meta charset="utf-8"/>
  <title>{{ title }}</title>
  {{ assets.getCssCode | raw }}
</head>
<body>
<div id="app">Loading...</div>
{{ assets.getJsCode | raw }}
</body>
</html>
