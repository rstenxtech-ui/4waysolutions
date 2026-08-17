const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processHeroBackground2() {
  const inputPath = path.join(__dirname, '..', 'public', 'Hero_background2.png');
  const tempPath = path.join(__dirname, '..', 'public', 'Hero_background2_temp.png');

  // Read original raw image
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing Hero_background2: ${width}x${height}, channels: ${channels}`);

  // Inpaint the star watermark in bottom right corner
  const centerX = 2631;
  const centerY = 1422;
  const radius = 42;

  for (let y = 1380; y <= 1465; y++) {
    for (let x = 2595; x <= 2675; x++) {
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= radius) {
        // Sample from left (clean emerald marble texture offset by -75px)
        const srcX = x - 75;
        const srcIdx = (y * width + srcX) * channels;
        const targetIdx = (y * width + x) * channels;

        const feather = Math.min(1, Math.max(0, (radius - dist) / 6));
        for (let c = 0; c < channels; c++) {
          data[targetIdx + c] = Math.round(
            (1 - feather) * data[targetIdx + c] + feather * data[srcIdx + c]
          );
        }
      }
    }
  }

  // Generate SVG gradient overlays for warmth and vignette on emerald marble
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Golden ambient warmth over backlit onyx & vanity -->
        <radialGradient id="goldWarmth" cx="22%" cy="40%" r="35%" fx="22%" fy="40%">
          <stop offset="0%" stop-color="#ffb74d" stop-opacity="0.16" />
          <stop offset="45%" stop-color="#d4a359" stop-opacity="0.07" />
          <stop offset="100%" stop-color="#d4a359" stop-opacity="0" />
        </radialGradient>
        <!-- Crystal chandelier sparkle glow -->
        <radialGradient id="chandelierGlow" cx="28%" cy="28%" r="22%">
          <stop offset="0%" stop-color="#ffe082" stop-opacity="0.22" />
          <stop offset="50%" stop-color="#d4a359" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <!-- Atmospheric depth vignette -->
        <radialGradient id="luxuryVignette" cx="52%" cy="46%" r="66%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0" />
          <stop offset="60%" stop-color="#02090d" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#010609" stop-opacity="0.45" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#goldWarmth)" />
      <rect width="100%" height="100%" fill="url(#chandelierGlow)" />
      <rect width="100%" height="100%" fill="url(#luxuryVignette)" />
    </svg>
  `);

  await sharp(data, { raw: { width, height, channels } })
    .composite([
      {
        input: svgOverlay,
        blend: 'over'
      }
    ])
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .linear(1.03, -2) // deep emerald & gold specular dynamic range
    .sharpen({
      sigma: 1.15,
      m1: 1.1,
      m2: 2.1,
      x1: 2,
      y2: 12,
      y3: 25
    })
    .png({ quality: 96, compressionLevel: 8 })
    .toFile(tempPath);

  // Replace original Hero_background2.png with enhanced image
  fs.copyFileSync(tempPath, inputPath);
  fs.unlinkSync(tempPath);

  // Clean up temporary files
  const testFiles = ['test_corner_green.png'];
  for (const f of testFiles) {
    const p = path.join(__dirname, '..', 'public', f);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  console.log('Hero_background2.png processed successfully!');
}

processHeroBackground2().catch(err => {
  console.error('Error processing image:', err);
  process.exit(1);
});
