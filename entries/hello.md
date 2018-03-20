title: H E L L O W O R L D
description: About this blog and the THICK application model.
tags:
- thick
- beaker
- dat
createdAt: 2017-11-16T06:26:53.890Z

# Hello, world!

This is an entry in THICK-blog, a static blog with some JavaScript tooling for easy forking and development. The application follows the [THICK](https://beakerbrowser.com/docs/inside-beaker/thick-applications.html) application model, which posits these directives:

- **Host-free**: Applications should not be bound to a remote service.
- **User-programmable**: Applications should be easy to modify.
- **Configurable**: Applications should read configuration from the browser.
- **Open-data**: Applications should share data at the user's request.
- **Automated builds**: Applications should be easy to build.
- **Private by default**: Applications should use end-to-end encryption.

THICK-blog tries to follow this model while leveraging the [Dat](https://datproject.org/) protocol's notion of ownership of archives to manage authorship of a blog. Using the [Beaker](https://beakerbrowser.com/) browser makes it easy to share, fork, and modify blogs.

If you're viewing this in Beaker, you can turn on live reloading to see the author make changes in real-time. Or you can add it to your library to peer it even if the author goes offline. This way you can author and distribute content with near-constant uptime without hosting it from a dedicated server. How's that sound?

The blog does not run any JavaScript in the browser, but it provides some nodejs tooling to help authors manage their blog. To get started with this tooling, fork this website in your browser and navigate to the folder where it was saved. Then run this command to download development dependencies:

`npm install`

Once it finishes, you can use these scripts to help you with the blog:

* `npm run build`: Compile assets to HTML one time.
* `npm run new-entry`: Create a new markdown entry based on `entries/entry.md.example`.
* `npm run clean`: Delete all non-example markdown and html files in `entries/` and rebuild the site. Useful when you fork somebody else's site for the style but want to share your own entries instead.
* `npm run watch`: Rebuild the site whenever files in the `templates/` or `entries/` folders change. Useful in development.
* `npm run share`: Shares the blog over Dat.

I'm looking into packaging the project's dependencies into its Dat archive as part of a potential `release` script, because the reliance on NPM means the application still relies on centralized hosts, even if only for development.

Well, I hope you enjoy THICK-blog! Go forth and fork!

[Diana](https://toot.cat/@garbados)
