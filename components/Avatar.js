import Image from "next/image"

function Avatar({url, className}) {
  return <Image 
      loading="lazy"
      src={url}
      alt="profile pict"
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      width={40}
      height={40}
      />
      
}


export default Avatar