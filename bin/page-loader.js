#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .description('Page loader utility')
  .helpOption('-h, --help', 'display help for command')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-o --output [dir]', 'output dir (default: "/home/user/current-dir")')
  .arguments('<url>')
  .action((url) => {
    
  });


  program.parse()