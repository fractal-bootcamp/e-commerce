// This script is used to get all the URLs of the assets in the Cloudinary bucket
// It is used to get the URLs of the images for the products

import * as dotenv from "dotenv";
dotenv.config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Add type for Cloudinary resource
interface CloudinaryResource {
  public_id: string;
  format: string;
  display_name?: string;
}

// Add type for Cloudinary API response
interface CloudinaryApiResponse {
  resources: CloudinaryResource[];
  next_cursor: string | null;
}

// Add type for our URL object
interface AssetUrl {
  public_id: string;
  url: string;
  filename: string;
}

async function getAssetUrls(folderPath: string = ''): Promise<AssetUrl[]> {
  try {
    const urls: AssetUrl[] = [];
    let nextCursor: string | null = null;
    
    do {
      // Get a batch of assets
      const result: CloudinaryApiResponse = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'snack-safari',
        max_results: 500,
        next_cursor: nextCursor
      });

      // Generate and store public URLs for each asset
      result.resources.forEach((resource: CloudinaryResource) => {
        const publicUrl: string = cloudinary.url(resource.public_id, {
          resource_type: 'image',
          format: resource.format
        });
        urls.push({
          public_id: resource.public_id,
          url: publicUrl,
          filename: resource.display_name || resource.public_id
        });
      });

      nextCursor = result.next_cursor;
    } while (nextCursor);

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