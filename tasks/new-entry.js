#!/usr/bin/env node
'use strict'

const fs = require('fs')
const hbs = require('handlebars')
const path = require('path')

const FORMAT = 'utf8'

const entriesJoin = path.join.bind(path, __dirname, '..', 'entries')

const datetime = (new Date()).toISOString()
const name = process.argv[2] || datetime
const templateFilePath = entriesJoin('entry.md.example')
const templateFile = fs.readFileSync(templateFilePath, FORMAT)
const template = hbs.compile(templateFile)
fs.writeFileSync(entriesJoin(`${name}.md`), template({ datetime }), FORMAT)
