import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
}

const photos = [
  {
    asset: "https://picsum.photos",
    width: 1080,
    height: 780,
    alt: "Hiking boots",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;

