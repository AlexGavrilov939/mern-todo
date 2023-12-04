import mongoose from 'mongoose';
import { join } from 'path';
import { readdirSync } from 'fs';
import './utils/env';

async function runSeeders() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URL);

    // Get all seeder files from the seeders folder
    const seedersFolder = join(__dirname, 'seeders');
    console.log('--seedersFolder', seedersFolder);
    const seederFiles = readdirSync(seedersFolder);

    // Run each seeder
    for (const seederFile of seederFiles) {
      console.log('-seederFile', seederFile);
      if (seederFile.endsWith('.ts')) {
        const seederPath = join(seedersFolder, seederFile);
        const { seedData } = await import(seederPath);
        await seedData();
      }
    }

    console.log('All seeders completed successfully');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    // Disconnect from MongoDB after seeding
    await mongoose.disconnect();
  }
}

runSeeders();
