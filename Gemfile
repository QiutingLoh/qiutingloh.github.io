source "https://rubygems.org"

# Matches the Jekyll version GitHub Pages builds with, so local previews
# render the same as the deployed site.
gem "github-pages", group: :jekyll_plugins

gem "webrick", "~> 1.8" # required for `jekyll serve` on Ruby 3+

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
