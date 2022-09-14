// deno run -A --watch=themes/ dev.ts

import appPaths from 'https://github.com/wesauis/deno-app-paths/raw/0.1.1/mod.ts';

import { resolve } from 'https://deno.land/std@0.155.0/node/path.ts';
import { copy } from 'https://deno.land/std@0.155.0/fs/mod.ts';

const tmp = resolve('./themes');
const out = resolve(appPaths('Typora').config, '../themes');

await copy(tmp, out, { overwrite: true });
