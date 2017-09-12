---
layout      : post

title       : Mantener actualizada la copia derivada de un repositorio
description :

category    : github
tags        : comandos github fork
---

Los cambios que se hacen a un repositorio no transmiten automáticamente sus actualizaciones a las copias derivadas — o *forks*, y lo mismo sucede de forma inversa: las modificaciones que se hacen en las copias tampoco se transmiten automáticamente al repositorio de origen.

### Clonar una copia del repositorio

```bash
# Fork it!
git clone git@github.com:USUARIO/FORKED-REPO.git
```

### Sincronizar copia con el repositorio original

```sh
cd FORKED-REPO
git remote add upstream git://github.com/DEV-USUARIO/ORIGINAL-FORKED-REPO.git
git fetch upstream
```

### Actualizar copia con respecto al repositorio original

```sh
git pull upstream master
```

---

```sh
git push
```


#### Notas

- https://help.github.com/articles/configuring-a-remote-for-a-fork/
- https://help.github.com/articles/syncing-a-fork/
- https://gist.github.com/CristinaSolana/1885435