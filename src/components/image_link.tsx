interface ImageLinkProps {
  link_target: string;
  image_source: string;
  image_altnative: string;
  image_width: number;
  image_height: number;
}

function ImageLink({
  link_target,
  image_source,
  image_altnative,
  image_width,
  image_height,
}: ImageLinkProps) {
  return (
    <div style={{paddingRight: 15}}>
      <a
        href={link_target}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image_source} alt={image_altnative} width={image_width} height={image_height} />
      </a>
    </div>
  );
}

export default ImageLink;
