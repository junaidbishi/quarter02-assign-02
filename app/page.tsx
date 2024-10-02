import Image from "next/image"
import profilepicture from "../app/public/profilepicture.jpg"

export default function Home() {
  return (
<div className="background">
<div>
  <div className="image">
<figure>
  <Image src = {profilepicture} alt="image" width={500} height={500} align ="right"/>
    </figure>
  </div>
  

    
    <div className="flex justify-between item-center" >
        <div className="w-fit h-[3000px] m-[30px] text=[2000px] font-black">
          AS SALAM O ALIKUM
          <br />
          My Name is <span className="textcolor">MUHAMMAD JUNAID</span>
          <br />I am Next JS Developer
        
        <div className=""></div>
        </div>
    </div>  

  </div>
</div>
  )
}
      