# thick-blog

Hello!

This is a static blog template following the [thick application model](https://beakerbrowser.com/docs/inside-beaker/thick-applications.html). It is meant for distribution over [dat](https://datproject.org/) but is just a static site, and can be deployed just like one.

## Usage

### Getting the Code

You can use [git](https://git-scm.com/):

```
git clone garbados/thick-blog
cd thick-blog
git remote remove origin
git remote add origin <your-blog-repo>
```

Or you can use [Dat](https://datproject.org/), by forking this address: `TODO`

```
dat clone TODO thick-blog
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

TODO
