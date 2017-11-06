---
layout      : post

title       : Algunos comandos esenciales Git
description : Una lista con algunos de los comandos más esenciales a la hora de utilizar un repositorio Git

category    : git
tags        : comandos esenciales
---

### Crear nuevos repositorios

```bash
# Crea un repositorio local
git init
```

```sh
# Clona un repositorio existente mediante SSH
git clone git@github.com:<username>/<repository>.git
```

### Registrar cambios

```sh
# Observar cambios en el directorio de trabajo
git status

# Cambios en archivos seleccionados
git diff

# Añade todos los cambios al siguiente commit
git add -p <archivo>
git add .
git commit -m "mensaje"
```

### Historial de commits

```sh
# Muestra todos los commit de forma cronologicamente descendente
git log

# Muestra los cambios en el tiempo de un archivo específico
git log -p <archivo>

# Información detallada de los cambios
git blame <archivo>
```

### Ayuda y Documentación


`git help <comando>`

#### Referencias

- [Sitio web oficial de Git](https://git-scm.com/)
- [Aprende Git desde el navegador](https://try.github.io)