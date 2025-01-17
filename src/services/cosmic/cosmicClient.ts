import { createBucketClient } from "@cosmicjs/sdk";

const slug = process.env.COSMIC_BUCKET_SLUG as string;
const read = process.env.COSMIC_READ_KEY as string;

export const cosmicClient = createBucketClient({
 bucketSlug: slug,
 readKey: read,
});
