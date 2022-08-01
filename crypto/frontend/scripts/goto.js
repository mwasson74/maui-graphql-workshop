#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const path = require('path');
const yargs = require('yargs');

const logger = {
  error(...args) {
    console.error('\x1b[31m%s\x1b[0m', ...args);
  },
  info(...args) {
    console.info('\x1b[32m%s\x1b[0m', ...args);
  },
  log: console.log,
};

/**
 * Fulfills with an array of the entries in the directory excluding `.` and `..`.
 *
 * @param  {string} dir Path string.
 * @returns {Promise<fs.Dirent[]>} Array of directory entries.
 */
const getDirent = (dir) => fs.readdir(dir, {withFileTypes: true});

/**
 * Returns an array with the directory name of the available sources.
 *
 * @param  {...string} dirs Path strings.
 * @returns {string[]} Array of directories for sources.
 */
const getSources = (...dirs) =>
  Promise.all(
    dirs.map((dir) =>
      getDirent(dir).then((items) =>
        items
          .filter((item) => item.isDirectory())
          .map(({name}) => path.join(dir, name)),
      ),
    ),
  ).then((items) => items.flat());

// swappable folders
const swaps = ['client', 'generated', 'pages', 'scenes', 'schema'];

// do not link these resources
const skiplist = ['.DS_Store', 'README.md'];

const runner = async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const target = process.cwd();

    if (root !== target) {
      throw 'Invalid root directory.';
    }

    const sources = await getSources('playground');
    const argv = yargs
      .usage('Usage: goto [source]')
      .command('$0 [source]', 'setup an example', (yargs) => {
        if (!yargs.argv._.length && (yargs.argv.initial || yargs.argv.final)) {
          yargs.default(
            'source',
            yargs.argv.initial ? 'playground/0-initial' : 'playground/X-final',
          );
        } else {
          yargs
            .positional('source', {
              describe: 'Path to content folder',
              type: 'string',
              choices: sources,
              conflicts: ['initial', 'final'],
            })
            .demandOption(
              'source',
              'You need to specify the content folder before moving on',
            );
        }
      })
      .options({
        initial: {
          description: 'Initial sandbox',
          boolean: true,
          alias: 'i',
          conflicts: ['final'],
        },
        final: {
          description: 'Final sandbox',
          boolean: true,
          alias: 'f',
          conflicts: ['initial'],
        },
      })
      .example([
        ['goto --initial'],
        ['goto playground/1-hello.1'],
        ['goto playground/mysandbox'],
        ['goto --final'],
      ])
      .version(false)
      .help('h')
      .alias('h', 'help').argv;

    const source = path.resolve(argv.source);

    for (const item of swaps) {
      const from = path.join(source, item);
      const to = path.join(target, item);

      await fs.mkdir(from, {recursive: true});
      await fs.rm(to, {recursive: true, force: true});
    }

    const resources = await getDirent(source);

    for (const item of resources) {
      if (!skiplist.includes(item.name)) {
        const from = path.join(source, item.name);
        const to = path.join(target, item.name);

        await fs.rm(to, {recursive: true, force: true});
        await fs.symlink(from, to, item.isDirectory() ? 'dir' : 'file');
      }
    }

    logger.info('Done.');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

runner();
