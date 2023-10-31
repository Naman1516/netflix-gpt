export const useOpenYouTubeVideo = (videoKey) => {
  const openVideo = () => {
    if (videoKey) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;
      window.open(youtubeUrl, "_blank", "noopener noreferrer");
    }
  };

  return {
    openVideo,
  };
};
