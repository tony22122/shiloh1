import { useEffect } from 'react';

const VideoAsk = () => {
  useEffect(() => {
    window.VIDEOASK_EMBED_CONFIG = {
      "kind": "widget",
      "url": "https://www.videoask.com/f8fah1r34",
      "options": {
        "widgetType": "VideoThumbnailSmall",
        "text": "Talk",
        "backgroundColor": "#FFFFFF",
        "position": "bottom-right",
        "dismissible": true
      }
    };
    const script = document.createElement('script');
    script.src = 'https://www.videoask.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default VideoAsk;