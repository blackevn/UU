import { Avatar } from "@/types/interfaces"
import Image from "next/image"

interface AvatarGroupProps {
  avatars: Avatar[]

}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars }) => {
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      {
        avatars?.slice(0, 4).map((avatar, index) => (
          <div key={index} className="avatar">
            <div className="w-12">
              <Image width={200} height={200} src={avatar.url} alt={""} />
            </div>
          </div>
        ))
      }
 {  avatars.length >= 4 && <div className="avatar placeholder">
    <div className="w-12 bg-neutral text-neutral-content">
      <span>+ {(avatars?.length - 4).toString()}</span>
    </div>
  </div>}
</div>
  )
}

export default AvatarGroup