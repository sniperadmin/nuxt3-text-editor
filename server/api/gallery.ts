import { createApi } from 'unsplash-js';
import type { IncomingMessage, ServerResponse } from 'http'
// import * as url from 'url';

// on your node server
const unsplash = createApi({
  accessKey: 'vEuFQvmtnGraSuAT17dwUQyUQkzEk8kLdAt_X-O8BxU',
  //...other fetch options
});

// const controller = new AbortController();
// const signal = controller.signal

export default async (req: IncomingMessage, res: ServerResponse) => {
  // const queryObject = url.parse(req.url as string, true).query
  return unsplash.collections.getPhotos({ collectionId: '79532901', page: 1, perPage: 15, orientation: 'landscape' })
    .catch(error => {
      return error
    })
}
