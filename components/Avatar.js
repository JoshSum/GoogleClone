
function Avatar({url, className}) {
  return <img 
      loading="lazy"
      src={url}
      alt="profile pict"
      className={`rounded-full h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      />
      
}


export default Avatar