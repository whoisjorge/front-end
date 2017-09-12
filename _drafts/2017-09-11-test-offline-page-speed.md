---
layout      : post

title       : PAGESPEED
description : Lo esencial para empezar con Jekyll

category    : jekyll
tags        : cheatsheet snippets

---

En lugar de buscar minuciosamente nuevas formas de *optimización* para intentar, en este caso, mejorar **la velocidad de la página**, es recomendable efectuar pruebas previas lo más similares posibles al entorno de produccion.

## Google PageSpeed Insights


La herramienta *ngrok* permite exponer un servidor web que se ejecuta en un entorno local a Internet. Sólo hace falta indicar a ngrok qué puerto está escuchando el servidor web.


Install Ngrok (brew cask install ngrok for Homebrew users on OS X) and do the following to expose your website to web traffic to the outside world.

Ngrok will give you a externally facing domain (e.g. [https://b1aa30c8.ngrok.io]) you can plug into PageSpeed Insights so you can test directly against your dev environment without having to wait for code deployments.

### Ejecuta Jekyll en producción

```sh
JEKYLL_ENV=production bundle exec jekyll serve --no-watch
```

Ahora en una nueva pestaña — con el **proceso de fondo** — ejecuta:

```sh
ngrok http 4000
```

Tras iniciar ngrok, aparecerá una interfaz de usuario en el terminal con la URL pública del túnel, además de otra información de estado y métricas sobre las conexiones realizadas.

## Seguridad

Password protecting your tunnel
Anyone who can guess your tunnel URL can access your local web server unless you protect it with a password. You can make your tunnels secure with the -auth switch. This enforces HTTP Basic Auth on all requests with the username and password you specify as an argument.

##### Example: Password-protect your tunnel
```sh
ngrok http -auth="username:password" 8080`
```

---

{: .info-box .hint }
__Nota__: Una [tarea con Gulp]() para ejecutar PageSpeed desde CLI.

#### Referencias

- http://jekyllrb.com/docs/home/