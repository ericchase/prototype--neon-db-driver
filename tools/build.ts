import { GlobManager } from '../src/lib/ericchase/Platform/Bun/Path.js';
import { CleanDirectory, DeleteDirectory } from '../src/lib/ericchase/Platform/Node/Fs.js';
import { NormalizePath } from '../src/lib/ericchase/Platform/Node/Path.js';
import { ConsoleLog } from '../src/lib/ericchase/Utility/Console.js';
import { bundle, copy, processHTML } from './lib/build.js';
import { CustomComponentPreprocessor } from './lib/CustomComponentPreprocessor.js';

// User Values
const buildDir = NormalizePath('./public') + '/';
const sourceDir = NormalizePath('./src') + '/';
const tempDir = NormalizePath('./temp') + '/';

// Init
await CleanDirectory(buildDir);
await CleanDirectory(tempDir);

const toCopy = new GlobManager().scan(sourceDir, '**/*');
const toExclude = new GlobManager() //
  .scan(sourceDir, '@types/**/*')
  .scan(sourceDir, 'components/**/*.html')
  .scan(sourceDir, 'lib/**/*');

// Process Components
const customComponentPreprocessor = new CustomComponentPreprocessor();
for (const { name, path } of new GlobManager().scanDot(sourceDir, 'components/**/.*.html').pathGroups) {
  customComponentPreprocessor.registerComponentPath(name.slice(1), path, true);
}
for (const { name, path } of new GlobManager().scan(sourceDir, 'components/**/*.html').pathGroups) {
  customComponentPreprocessor.registerComponentPath(name, path);
}
const toProcessListHTML = ['**/*.html'];
const toProcess = new GlobManager().scan(sourceDir, ...toProcessListHTML);
toCopy.update(
  await processHTML({
    outDir: tempDir,
    toProcess,
    toExclude,
    preprocessors: [customComponentPreprocessor.preprocess],
  }),
);
toExclude.scan(sourceDir, ...toProcessListHTML);
// report processed counts
for (const [tag, count] of customComponentPreprocessor.componentUsageCount) {
  ConsoleLog(count === 1 ? '1 copy' : count + ' copies', 'of', tag);
}

// Bundle
const toBundleList = ['**/*.ts'];
const toBundle = new GlobManager().scan(sourceDir, ...toBundleList);
// toCopy.update(
await bundle({
  externalImports: ['*.module.js'],
  outDir: buildDir,
  toBundle,
  toExclude,
});
// );
toExclude.scan(sourceDir, ...toBundleList);

// // Compile
// const toCompileList = ['**/*.ts'];
// const toCompile = new GlobManager().scan(sourceDir, ...toCompileList);
// // toCopy.update(
// await compile({
//   outDir: buildDir,
//   toCompile,
//   toExclude,
// });
// // );
// toExclude.scan(sourceDir, ...toCompileList);

// // Bundle/Compile Lib
// const toCompileListLib = ['lib/**/*.ts'];
// const toCompileLib = new GlobManager().scan(sourceDir, ...toCompileListLib);
// // for (const path of Array.from(toCompileLib.paths)) {
// //   const { mtimeMs } = await fs.promises.stat(path);
// //   console.log(path);
// //   console.log({ mtimeMs });
// // }
// // toCopy.update(
// await compile({
//   outDir: buildDir,
//   toCompile: toCompileLib,
// });
// // );
// toExclude.scan(sourceDir, ...toCompileListLib);

// Exclude
toExclude
  .scan(sourceDir, '**/*.ts') // exclude .ts files now that bundling is done
  .scan(sourceDir, '**/*.template.html'); // exclude processed template files

// Copy
await copy({
  outDir: buildDir,
  toCopy,
  toExclude,
});

// Move Index
// if (await CopyFile({ from: buildDir + 'index.html', to: './index.html' })) {
//   DeleteFile(buildDir + 'index.html');
// }

// Cleanup
await DeleteDirectory(tempDir);

console.log('---');
