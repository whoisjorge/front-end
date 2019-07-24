---
layout      : post

title       : Conexión sencilla a la API de Steam utilizando Axios
description :

category    : vuejs
tags        : cheatsheet snippets

---
# Conexión sencilla a la API de Steam utilizando Axios

{: .info-box .hint}
La versión de Vue utilizada es 2.5.1

[Axios](https://github.com/mzabriskie/axios) es una librería JavaScript que actúa como *cliente HTTP* basado en Promesas. Permite la interactividad con *AJAX* de forma asíncrona en una aplicación web, tanto en la parte del Front-end como en la del Back-end mediante [Node.js](https://nodejs.org).

## Instalacion

```sh
$ npm install axios
```

Una vez instalada en el proyecto, es posible obtener datos desde servicios web de forma muy sencilla (en este caso la *API de Steam*) y manipularlos desde la parte Front-end de la aplicación.

{: .info-box .hint}
Es necesario el uso de una [API Key](https://steamcommunity.com/dev/apikey) para realizar las peticiones.

##### `SteamAPI.vue`
```html
<template>
  <main>
    <p v-if="loading">Cargando información...</p>
    <h3 v-else>
      <div :key="p" v-for="(player,p) in players">
        <h1><a :href="player.profileurl">{% raw %}{{ player.personaname }}{% endraw %}</a></h1>
        <p>steamID64: <b>{% raw %}{{ player.steamid }}{% endraw %}</b></p>
        <img :src="player.avatarfull">
      </div>
    </h3>
  </main>
</template>

<script>
  import axios from 'axios'

  export default {
    created () {
      this.getAPIdata()
      this.loading = true
    },

    data () {
      return {
        players: [],
        loading: false
      }
    },

    methods: {
      getAPIdata () {
        var url = '/api/ISteamUser/GetPlayerSummaries/v2/?key={API_KEY}&steamids={STEAM_ID}'
        axios.get(url)
          .then(response => {
            console.log(response)
            this.players = response.data.response.players
            this.loading = false
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

  }
</script>
```


### API Proxying durante el desarrollo

Durante la integración con un back-end existente, una necesidad común es acceder a éste cuando se usa un servidor de desarrollo. Para lograrlo es posible ejecutar el servidor de desarrollo y el back-end de la API de forma remota, y dejar que el servidor de desarrollo haga un _proxy_ de todas las solicitudes de la API al back-end real.

---

En caso de que el servidor de desarrollo utilice [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) es posible configurar las reglas del proxy de forma sencilla:

##### `config/index.js`
```javascript
module.exports = {
  dev: {

    proxyTable: {
      // Crea un proxy para todas las peticiones que comiencen por /api
      '/api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  }
}

```

#### Referencias

- http://vuejs-templates.github.io/webpack/proxy.html
- https://partner.steamgames.com/doc/webapi_overview
- https://developer.valvesoftware.com/wiki/Steam_Web_API
