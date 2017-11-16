# THICK-blog

[![Build Status](https://travis-ci.org/garbados/thick-blog.svg?branch=master)](https://travis-ci.org/garbados/thick-blog)

Hello!

This is a static blog template following the [thick application model](https://beakerbrowser.com/docs/inside-beaker/thick-applications.html). It is meant for distribution over [dat](https://datproject.org/) but is just a static site, and can be deployed just like one.

## Usage

### Getting the Code

You can use [git](https://git-scm.com/):

```
git clone git@github.com:garbados/thick-blog.git
cd thick-blog
git remote remove origin
git remote add origin <your-blog-repo>
```

Or you can use [Dat](https://datproject.org/), by forking this address: `dat://95a964430e5a5c5203dde674a1873e51f2e8e78995855c1481020f405ee9a772`

```
dat clone dat://95a964430e5a5c5203dde674a1873e51f2e8e78995855c1481020f405ee9a772 thick-blog
cd thick-blog
rm -rf .dat
dat share .
```

### Installing dependencies

Download node dependencies with [npm](https://www.npmjs.com/):

`npm i`

### Adding new entries

Add a new entry from a basic template using the 'new-entry' script:

```
npm run new-entry -- [name]
```

This will add a new entry to the `entries` folder based on a template. The file will be named `[name].md`. The `[name]` value defaults to the current date and time.

If you have specified your code editing program in the `$ÈDITOR` environment variable, it will be used to open the file for editing.

### Building the static HTML

Build the site's static assets using the `build` script:

```
npm run build
```

This will convert each markdown file contained in `entries/` into a stand-alone HTML page, and will include its `title` and `description` attributes on the landing page.

### Editing the site template

THICK-blog uses [handlebars](http://handlebarsjs.com/) as its templating language and [Bulma](https://bulma.io/) for styling. Templates are stored in the `templates/` folder. There are only three templates:

- `layout.hbs`: Wraps both the index and entry templates, providing basic and consistent formatting. It primarily relies on the `config` object.
- `ìndex.hbs`: Displays summaries of each entry, including title, description, and timestamp. It receives an `entries` object describing each entry in the blog.
- `entry.hbs`: Displays a single entry. It receives an `entry` object describing a single blog entry.

The `config` object is derived from `config.json`. Updating that will update the site when it builds.

The `entry` object looks like this:

```
{
  name: 'hello',
  title: 'H E L L O W O R L D',
  description: 'About this blog and the THICK application model.',
  created_at: 2017-11-16T06:26:53.890Z,
  html: '<h1 id="hello-world-">Hello, world!</h1>...'
}
```

The `entries` object is an array of `entry` objects.

### Hacking on your Blog

To re-build the blog as you work on it, run `npm run watch`. Running that while also sharing the archive over Dat will allow peers to watch as you make changes. It will re-build the blog whenever a markdown or template file changes.

### Contributing

If you'd like to contribute to THICK-blog or otherwise hack on Dat tech, contact me over [Mastodon](https://toot.cat/@garbados). You can also [file an issue]() or [issue a PR]() if that's more your speed.

### License

[GPL-3.0](https://opensource.org/licenses/gpl-3.0.html)
