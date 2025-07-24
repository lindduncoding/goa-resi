import esbuild from 'esbuild'
import { exec } from 'child_process'

// Build Tailwind first
exec('npx tailwindcss -i ./client/input.css -o ./public/output.css', (err, stdout, stderr) => {
  if (err) {
    console.error('Tailwind build failed:', stderr)
    return
  }
  console.log('Tailwind CSS built successfully.')

  // Then build React code
  esbuild.build({
    entryPoints: ['client/index.jsx'],
    bundle: true,
    outfile: 'public/index.js',
    sourcemap: true,
    loader: { '.js': 'jsx' }
  }).then(() => {
    console.log('esbuild JS bundle complete.')
  }).catch(() => process.exit(1))
})
