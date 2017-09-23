---
layout      : post

title       : Herramientas de integración contínua y deploy con Jekyll
description :

category    : travisci
tags        : cheatsheet snippets

---


A la hora de preparar el sitio para producción, es posible desplegar (*deploy*) la build utilizando herramientas de integración continua como [Travis-CI](https://travis-ci.org) — sin coste alguno para repositorios públicos.

### Configuración

##### `.travis.yml`

```yml
language: ruby
rvm:
  - 2.2
install: bundle install
script: rake deploy
```

Lo anterior le dice a Travis que instale las dependencias desde el *Gemfile* usando **Bundler**, y luego construye e implementa el sitio usando las siguientes tareas del *Rakefile*:


```ruby
# Usage: rake build
desc "Regenerate files for production"
task :build do
  puts "* Regenerating files for production..."
  system "JEKYLL_ENV=production bundle exec jekyll build"
end

# Usage: rake s3_website
desc "push the contents of ./_site to S3"
task :s3_website do
  puts "* syncing the contents of ./_site to the server"
  system "s3_website push" # use --force with S3 config updates
end

# Usage: rake deploy
task :deploy => ["deploy:prod"]
namespace :deploy do
  desc "Regenerate and sync production files, and notify services of the update"
  task :prod => ["build", "s3_website"] do
  end
end
```

#### Referencias

- https://habd.as/pagespeed-100-with-jekyll-s3-and-cloudfront/