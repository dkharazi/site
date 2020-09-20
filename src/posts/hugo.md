---
title: "Running Hugo on GitHub"
date: "2018-04-10"
tags: ["hugo"]
draft: false
katex: true
---

In this post, we walk through the steps of running a site on GitHub created by a static site generator. This post assumes a directory containing hugo source files has already been created. For more information about hosting a project on GitHub as a submodule, refer to [this article](https://gohugo.io/hosting-and-deployment/hosting-on-github/#step-by-step-instructions). 

1. Access the local hugo directory
	- We'll refer to this directory as `./mysite`
	- This directory will contain the files on the hugo site
	- The directory should look like this:

```
mysite/
├── archetypes/
├── config.toml
├── content/
├── data/
├── layouts/
├── public/
├── resources/
├── static/
└── themes/
```

2. Create a new repository in GitHub
	- Call this repository `<username>.github.io`
	- Where `<username>` is a github username
	- This repository will contain the rendered version of the site
3. Call `hugo` to create a public directory
	- This command build the site to the public directory
4. In the new `public` directory, initialize the git repo

```
$ cd public
$ git init
$ git add .
$ git remote add origin https://github.com/<username>/<username>.github.io.git
$ git commit -m "Commit to site"
$ git push origin master
```
