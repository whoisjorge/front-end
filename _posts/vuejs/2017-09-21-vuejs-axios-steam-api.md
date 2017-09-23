---
layout      : post

title       : Conexión sencilla a la API de Steam utilizando Axios
description :

category    : vuejs
tags        : cheatsheet snippets

---

[Axios](https://github.com/mzabriskie/axios) es una librería JavaScript que actúa como *cliente HTTP* basado en Promesas. Permite la interactividad con *AJAX* de forma asíncrona en una aplicación web, tanto en la parte del Front-end como en la del Back-end mediante [Node.js](https://nodejs.org).

### Instalacion

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


#### Referencias

- http://vuejs-templates.github.io/webpack/proxy.html
- https://partner.steamgames.com/doc/webapi_overview
- https://developer.valvesoftware.com/wiki/Steam_Web_API
