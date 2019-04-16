import { reduce } from 'lodash';
import getParsedManifest from './getParsedManifest';

const getStreamInfo = manifest => {
  const parsedManifest = getParsedManifest(manifest);
  const { segments, endList } = parsedManifest;
  let { playlistType } = parsedManifest;

  if (!playlistType && endList) {
    playlistType = 'VOD';
  }
  if (!endList) {
    playlistType = 'LIVE';
  }

  const duration = reduce(segments, (sum, n) => sum + n.duration, 0);
  return {
    type: playlistType,
    duration,
    format: 'HLS',
  };
};

export default getStreamInfo;
