const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  setLoaded,
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} onLoad={() => setLoaded(true)} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
