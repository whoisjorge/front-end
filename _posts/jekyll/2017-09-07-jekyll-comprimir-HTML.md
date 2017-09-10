---
layout      : post

title       : Layout escrito en Liquid para comprimir el código HTML
description : Comprime sin plugins el código HTML en Jekyll de forma muy sencilla

category    : jekyll
tags        : cheatsheet snippets
---

Existen infinitas opciones para desempeñar tareas relacionadas con la *producción* al desarrollar un sitio con la herramienta *Jekyll*, y una de estas opciones es, en este caso, no hacer uso de ninguna herramienta externa para realizar una **compresión del código HTML**. Existe una forma muy sencilla para hacerlo sin recurrir a plugins gracias a [Liquid](https://help.shopify.com/themes/liquid/basics):

### Crear un nuevo layout

```sh
cd _layouts
touch comprimir.html
```

##### `_layouts/comprimir.html`
```md
---
#
# Jekyll layout that compresses HTML
# v1.1.1
# http://jch.penibelst.de/
# © 2015 Anatol Broder
# MIT License
#
---
{% raw %}
{% if site.compress_html.ignore.envs contains jekyll.environment %}{{ content }}{% else %}{% capture _content %}{{ content }}{% endcapture %}{% if site.compress_html.endings == "all" %}{% assign _endings = "html head body li dt dd p rt rp optgroup option colgroup caption thead tbody tfoot tr td th" | split: " " %}{% else %}{% assign _endings = site.compress_html.endings %}{% endif %}{% for _element in _endings %}{% capture _end %}</{{ _element }}>{% endcapture %}{% assign _content = _content | remove: _end %}{% endfor %}{% if site.compress_html.comments.size == 2 %}{% assign _comment_befores = _content | split: site.compress_html.comments.first %}{% for _comment_before in _comment_befores %}{% assign _comment_content = _comment_before | split: site.compress_html.comments.last | first %}{% if _comment_content %}{% capture _comment %}{{ site.compress_html.comments.first }}{{ _comment_content }}{{ site.compress_html.comments.last }}{% endcapture %}{% assign _content = _content | remove: _comment %}{% endif %}{% endfor %}{% endif %}{% assign _pre_befores = _content | split:"<pre" %}{% assign _content = "" %}{% for _pre_before in _pre_befores %}{% assign _pres = _pre_before | split: "</pre>" %}{% case _pres.size %}{% when 2 %}{% capture _content %}{{ _content }}<pre{{ _pres.first }}</pre>{{ _pres.last | split: " " | join: " " }}{% endcapture %}{% when 1 %}{% capture _content %}{{ _content }}{{ _pres.last | split: " " | join: " " }}{% endcapture %}{% endcase %}{% endfor %}{% if site.compress_html.clippings == "all" %}{% assign _clippings = "html head title base link meta style body article section nav aside h1 h2 h3 h4 h5 h6 hgroup header footer address p hr blockquote ol ul li dl dt dd figure figcaption main div table caption colgroup col tbody thead tfoot tr td th" | split: " " %}{% else %}{% assign _clippings = site.compress_html.clippings %}{% endif %}{% for _element in _clippings %}{% assign _edges = " <e;<e; </e>;</e>;</e> ;</e>" | replace: "e", _element | split: ";" %}{% assign _content = _content | replace: _edges[0], _edges[1] | replace: _edges[2], _edges[3] | replace: _edges[4], _edges[5] %}{% endfor %}{{ _content }}{% endif %}
{% endraw %}
```

Ahora tan sólo queda hacer referencia a `comprimir.html` en cualquier layout de nivel superior, como por ejemplo en `_layouts/default.html`

```md
---
layout: comprimir
---
{% raw %}
<html>
{{ content }}
</html>
{% endraw %}
```

#### Referencias

- http://jch.penibelst.de/
