
# Contribuciones

- Crea un **Fork** de la rama `develop` en tu máquina. — ¡No de **master**!
- Instala y ejecuta el proyecto _(hay instrucciones [más abajo](#instalación))_.
- ¡Escribe tu código y/o texto!
  - Si modificas o mejoras el código, haz comentarios en la medida de lo posible, indicando los cambios o la funcionalidad.
  - _Asegúrate de tener un editor con `trim trailing whitespace` activado._
- Haz `commit` describiendo tus cambios.
- Envía __`pull request!`__




## Instalación
Principalmente asegúrate de poder utilizar [Ruby] y [Git] en un terminal. Con ello podrás iniciar una versión local del repositorio en tu máquina, de forma muy sencilla:

1. Instala [Bundler] y [Jekyll]
   * `$ gem install bundler`
   * `$ gem install jekyll`
2. Clona el repositorio y ejecuta `bundle install`
3. Ejecuta: `bundle exec jekyll serve`

Así habrás iniciado un servidor de desarrollo en `localhost:4000/front-end/`.

Para un entorno con **Browsersync**:

1. Instala [Node.js] y [npm]
   * Para actualizar _npm_ a la última version `npm install npm@latest -g`
2. Instala [Gulp](https://github.com/gulpjs/gulp)
   * `$ npm install -g gulp`
3. Finalmente `npm install` o `yarn install` para instalar las dependencias

🚀 Ahora tienes disponible algunos **`comandos`** útiles:

__DEVELOPMENT__

* `npm start`
* `npm run dev`
* `npm run clean`


__PRODUCTION__

* `npm run build`
* `gulp :prod`
* `npm run watch`

__DEPLOY__

* `npm run deploy`



<br>
<hr>

###### Notas

- https://labs.creativecommons.org/2011/ccrel-guide/

- http://schema.org/CollectionPage


<hr>

__Documento provisional__






<!-- Link ref. -->
[Ruby]: https://www.ruby-lang.org/es/
[Git]: https://git-scm.com
[Bundler]: http://bundler.io
[Jekyll]: http://jekyllrb.com
[Node.js]: https://nodejs.org
[npm]: https://www.npmjs.com
[Gulp]: http://gulpjs.com