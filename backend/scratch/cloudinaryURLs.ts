// This script is used to get all the URLs of the assets in the Cloudinary bucket
// It is used to get the URLs of the images for the products

import * as dotenv from "dotenv";
dotenv.config();
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
console.log('Cloudinary Config:', {
  cloud_name: "ds4kobyhb",
  api_key: "121178929136957",
  api_secret: "Iw3dyB8dlR0U6uZVzkSB1K8Ht6w" // Don't log the actual secret
});

cloudinary.config({
  cloud_name: "ds4kobyhb",
  api_key: "121178929136957",
  api_secret: "Iw3dyB8dlR0U6uZVzkSB1K8Ht6w"
});

async function getAssetUrls(folderPath = '') {
  try {
    const urls = [];
    let nextCursor = null;
    
    do {
      // Get a batch of assets
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'snack-safari', // Specify folder path if needed
        max_results: 500,
        next_cursor: nextCursor
      });

      // Generate and store public URLs for each asset
      result.resources.forEach(resource => {
        const publicUrl = cloudinary.url(resource.public_id, {
          resource_type: 'image',
          format: resource.format
        });
        urls.push({
          public_id: resource.public_id,
          url: publicUrl,
          filename: resource.display_name // fallback to public_id if filename is not available
        });
      });

      nextCursor = result.next_cursor;
    } while (nextCursor); // Continue until all assets are processed

    return urls;
  } catch (error) {
    console.error('Error fetching Cloudinary assets:', error);
    throw error;
  }
}

// Example usage
async function main() {
  try {
    // Get all assets
    console.log('Fetching all assets...');
    const allAssets = await getAssetUrls();
    console.log('All assets:', allAssets);

    // Get assets from specific folder
    console.log('\nFetching assets from specific folder...');
    const folderAssets = await getAssetUrls('snack-safari');
    console.log('Folder assets:', folderAssets);

    // Export URLs to a file
    const fs = require('fs');
    const urlList = folderAssets.map(asset => `${asset.filename}: ${asset.url}`).join('\n');
    fs.writeFileSync('cloudinary-urls.txt', urlList);
    console.log('\nURLs have been exported to cloudinary-urls.txt');

  } catch (error) {
    console.error('Error in main:', error);
  }
}

main();