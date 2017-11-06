---
layout      : post

title       : Mantener actualizada la copia derivada de un repositorio
description :

category    : github
tags        : comandos github fork
---

Los cambios que se hacen a un repositorio no transmiten automáticamente sus actualizaciones a las copias derivadas — o *forks*. Es por ello que, en ocasiones, puede resultar de utilidad el hecho de trabajar sobre una copia sincronizada con el repositorio original.

### Clonar la copia del repositorio

```bash
# Fork it!
git clone git@github.com:TU_USUARIO/FORKED_REPO.git
```

### Sincronizar copia con el repositorio original

```sh
cd FORKED_REPO
git remote add upstream git://github.com/ORIGINAL_DEV/ORIGINAL_REPO.git
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
