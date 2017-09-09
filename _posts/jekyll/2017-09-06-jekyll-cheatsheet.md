---
layout      : post

title       : Jekyll cheatsheet
description : Lo esencial para empezar con Jekyll

category    : jekyll
tags        : cheatsheet snippets

---

{: .info-box }
Esta página está muy incompleta. [¡Envía tus cambios a través de GitHub!]()

### Instalación

```sh
# Instala las gemas
gem install jekyll bundler

# Crea un nuevo sitio en `./websitio`
jekyll new websitio
cd websitio

# Let's go!
bundle exec jekyll serve
```


### [Front-matter](http://jekyllrb.com/docs/frontmatter/)
```md
---
layout      :
title       :
description :
date        :
category    :
tags        :
author      :
permalink   :
comments    :
sitemap     :
---

Un estupendo post en markdown.
```


### Código
{% raw %}
```liquid
{% highlight ruby %}
def show
  ...
end
{% endhighlight %}
```
{% endraw %}

### Blogging
```
_posts/YEAR-MONTH-DAY-title.md
```


### Comentarios
{% raw %}
```liquid
{% comment %}
     ...
{% endcomment %}
```
{% endraw %}



#### Referencias

- http://jekyllrb.com/docs/home/
- http://jekyllrb.com/docs/templates/
- http://docs.shopify.com/themes/liquid-basics/output
- http://docs.shopify.com/themes/liquid-basics/logic
- https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
- http://docs.shopify.com/themes/liquid-documentation/filters