ruby '2.4.2'
source "https://rubygems.org"

# ¡Aquí es donde se administra la versión de Jekyll del sitio!
# Cuando desees utilizar una versión diferente, cámbiala a continuación,
# guarda el archivo y ejecuta `bundle install`. Ejecuta Jekyll mediante
# el comando `bundle exec`, por ejemplo:
#
#     bundle exec jekyll build --watch
#     bundle exec jekyll serve
#
gem "jekyll", "3.5.0"

# Jekyll PLUGINS
group :jekyll_plugins do
   gem "jekyll-assets", "~> 2.3.2"
   gem "uglifier", "~> 3.2.0"
   gem "jekyll-feed", "~> 0.9.2"
   gem "jekyll-sitemap", "~> 1.1.1"
   gem "jekyll-seo-tag", "~> 2.2.3"
   gem "jekyll-gist", "~> 1.4.1"
  #  gem 'jekyll-avatar'
  #  gem 'jekyll-github-metadata'
end

# En Windows no se incluyen archivos de información de zona
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# Al utilizar GitHub Pages, eliminar "gem "jekyll", "version" de arriba y después simplemente
# descomenta la linea de abajo. Para actualizar, ejecuta:
#
#     bundle update github-pages
#

# gem "github-pages", group: :jekyll_plugins
