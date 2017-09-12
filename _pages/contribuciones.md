---
layout: page
title: Envía tus contribuciones al repositorio de este proyecto
permalink: /contribuciones/
---

{: .text-center}
📝

Si estás pensando en colaborar con este proyecto y enviar contribuciones al repositorio, échale un vistazo a esta pequeña guía de estilo sobre cómo estructurar nuevo contenido. El sitio está enteramente creado con *Jekyll* por lo que todos los artículos se escriben utilizando [markdown](https://jekyllrb.com/docs/posts/).

{: .info-box .success}
También puedes enviar tus contribuciones [directamente](https://github.com/whoisjorge/front-end/issues/new?title=Nueva%20solicitud:%20_CARACTERISTICA_) a través del repositorio en GitHub.



## Jekyll Formatting & Front Matter

Como ya sabes, este es un sitio web desarrollado con [Jekyll](https://jekyllrb.com/), por lo que cada artículo se clasifica especificando algunos detalles. Aquí un ejemplo de *front-matter* típico para un artículo:


```sh
---
layout: post

title: "Unas vacaciones escritas en JavaScript"
description: "Utiliza las últimas técnicas en JavaScript para desarrollar más eficientes vacaciones" # 160 caracteres max.

date: 2017-12-25 06:30:07 +0200

category: javascript
tags:
    - jesus
    - cheese-mas
    - bacon

author: Mr. Java EScript

# Opcional
permalink: /linking_park/
sitemap: false
comments: false
---
```



### Fechas

Pese a tratarse de una colección de publicaciones, al escribir sobre tecnología — o *software*, es de gran relevancia la **fecha de referencia**. Por ello todos los nombres de los ficheros que contienen los artículos deben comenzar siempre con la fecha de última modificación:

```md
2017-12-25-feliz-navidad.md
```



## Resaltar texto

Puedes utilizar tanto *em* como **strong** para resaltar texto, y `code` para definir fragmentos de código como variables o funciones. Por ejemplo en markdown:

```md
La más nueva y **última** versión de *jQuery* ya no utilizará `$` en algunos territorios.

Sin duda la nueva función de `setCurrency()` causará estragos a los desarrolladores de la Zona Euro.
```



## Listas

Para hacer un desglose de ideas, o simplemente listar características, puedes utilizar:

```md
1. *Punto 1*: Lista ordenada.
2. *Punto 2*: Texto sin bullets.
3. *Punto 3*: En realidad no está numerada.

- Esta es una gran ul > li
```

- *Lista 1*: Texto con bullets.



## Cajas de información

Puedes resaltar cierta información utilizando cajas:

```md
{: .info-box}
Aquí va el texto a resaltar.

# Existen 3 clases específicas
.success  .warning  .hint
>   {: .info-box .warning}
```

{: .info-box .warning}
<b>¡Cuidado!</b> Las cajas de información son adictivas.



## Separadores

Para las separaciones utiliza el elemento *<hr>* expresado con **tres** líneas horizontales:

```md
---
```

Y el resultado será algo como esto:

<hr>



## Enlaces

Los enlaces internos deben ser relativos:

```md
<!--  Evita esto -->
[Enlace malo](https://front-end.js.org/javascript/el-mejor-post-pero-evitalo/)

<!-- Buen enlace interno -->
[Enlace relativo](css/css-cheatsheet-esencial/)
```



## Snippets de código

- Utiliza 2 espacios para indentar el código.
- Utiliza comillas simples en JavaScript.
- Use la sintaxis más reciente ES6 / ES7 siempre que sea apropiado. Por ejemplo, use *let* y *const* en lugar de *var*.

Incluye tus fragmentos de código con markdown de esta forma:

{% highlight html %}
```javascript
let javascript = true;

if (javascript) {
  console.log('Unexpected token!');
}

// ...</code></pre>
```
{% endhighlight %}

Para texto que incluya HTML, puedes utilizar la sintaxis *```* y se convertirá automáticamente:

{% highlight html %}
```html
<input type="text">
<button type="submit">
```
{% endhighlight %}


Si utilizas *{% raw %}{{ mustache }}{% endraw %}* en tus **snippets** recuerda escaparlo:

```md
{{ "{% raw %" }}}{% raw %}{{ mustache }}{% endraw %}{{ "{% endraw %" }}}
```

### Especificando el nombre del archivo

Al escribir código, muchas veces será relevante epecificar el nombre del archivo al que se hace refencia. Puedes hacerlo mediante un *h5* de esta forma:

```liquid
##### `./js/nombre_de_archivo.js`
```

##### `./js/nombre_de_archivo.js`

```javascript
console.log('¡Funciona!');
```

---

<p align="center">
<a href="https://github.com/whoisjorge/front-end/blob/master/docs/CONTRIBUTING.md">CONTRIBUTING.md</a>
</p>

---

👻 💃 🐊 🍪 🤘 🐒 👋 🦄 😎 🐌 🤓 🎩 👉 🌵 🐘 💣 🐳 👾 🕷 🐼 💪 🐷 ✨ 🚀 🍄 🌈 🐸 🎭 🌟 🐙 ⚡ 🌴 🌶 🤖 ☁ 👽 🧀 🔥 🐢 🍕 🐟 🐿 🍿 🐪 🎮 🐻 🚣‍


