// @flow

import type { IndexName } from 'algoliasearch';
import type { RequestMethod, RequestOptions } from 'algoliasearch-requester';

export default function copyIndex({
  requester,
  indexName,
  destination,
  requestOptions,
}: {
  requester: RequestMethod,
  indexName: IndexName,
  destination: IndexName,
  requestOptions?: RequestOptions,
}) {
  return requester({
    method: 'POST',
    path: `/1/indexes/${indexName}/operation`,
    body: { operation: 'copy', destination },
    requestOptions,
    requestType: 'write',
  });
}