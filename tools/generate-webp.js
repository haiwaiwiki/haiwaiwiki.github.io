const fs = require("fs");
const path = require("path");
let sharp;

try {
  sharp = require("sharp");
} catch {
  sharp = require("C:/Users/26765/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");
}

const root = path.resolve("assets/tutorial-images");
const exts = new Set([".jpg", ".jpeg", ".png"]);
const skipNames = new Set(["logo.png"]);
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (exts.has(path.extname(entry.name).toLowerCase()) && !skipNames.has(entry.name)) {
      files.push(full);
    }
  }
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

async function main() {
  walk(root);

  let totalInput = 0;
  let totalOutput = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const parsed = path.parse(file);
    const output = path.join(parsed.dir, `${parsed.name}.webp`);
    const inputStat = fs.statSync(file);
    totalInput += inputStat.size;

    if (fs.existsSync(output) && fs.statSync(output).mtimeMs >= inputStat.mtimeMs) {
      totalOutput += fs.statSync(output).size;
      skipped += 1;
      continue;
    }

    const meta = await sharp(file).metadata();
    const isCover = /cover|封面/i.test(parsed.name);
    const maxWidth = isCover ? 960 : 1280;
    let pipeline = sharp(file).rotate();

    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: isCover ? 78 : 82, effort: 5 }).toFile(output);

    const outputStat = fs.statSync(output);
    totalOutput += outputStat.size;
    converted += 1;
    console.log(`${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), output)} ${kb(inputStat.size)} -> ${kb(outputStat.size)}`);
  }

  console.log(JSON.stringify({
    files: files.length,
    converted,
    skipped,
    inputKB: Math.round(totalInput / 1024),
    outputKB: Math.round(totalOutput / 1024),
    reduction: totalInput ? Math.round((1 - totalOutput / totalInput) * 100) : 0
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
