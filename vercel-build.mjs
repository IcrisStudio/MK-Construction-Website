import { build } from 'vite';

async function runBuild() {
  try {
    console.log('Starting Vite build...');
    await build({
      configFile: './vite.config.ts',
      mode: 'production',
      logLevel: 'info'
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

runBuild();

