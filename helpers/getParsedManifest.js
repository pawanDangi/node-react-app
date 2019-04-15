import querystring from 'querystring';
import { mapValues, has } from 'lodash';
import { Parser } from 'm3u8-parser';

import scte from './scte35';

const getParsedManifest = data => {
  try {
    const parser = new Parser();
    parser.addParser({
      expression: /^#EXT-X-SCTE35/,
      customType: 'scte35',
      segment: true,
      dataParser: line => {
        const marker = line
          .split(':')
          .slice(1)
          .join(':');
        const parsedTag = querystring.parse(marker, ',', '=');
        const outTag = mapValues(parsedTag, s =>
          s.replace(/ /g, '+').replace(/^["]+|["]+$/g, '')
        );
        if (has(outTag, 'CUE')) {
          outTag.decoded = scte.decode(outTag.CUE);
        } else {
          outTag.decoded = undefined;
        }
        return outTag;
      },
    });
    parser.push(data);
    parser.end();

    return parser.manifest;
  } catch (e) {
    console.log(e, '===error===');
  }
};

export default getParsedManifest;
