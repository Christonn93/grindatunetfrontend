import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET_SLUG as string,
  read_key: process.env.COSMIC_READ_KEY as string,
  write_key: process.env.COSMIC_WRITE_KEY as string,
});

export default bucket;
