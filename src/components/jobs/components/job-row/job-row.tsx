import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export const JobRow = () => (
  <>
    <div className="bg-white p-4 rounded-md shadow-sm relative">
      <div className="absolute cursor-pointer top-4 right-4">
        <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
      </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            width={50}
            height={50}
            alt="Sptify logo"
          />
        </div>
        <div className="grow md:flex">
          <div className="grow">
            <div className="text-gray-500 text-sm">Sptify</div>
            <div className="font-bold text-lg mb-1">Product designer</div>
            <div className="text-gray-400 text-sm">
              Remote &middot; New York, US &middot; Full-time
            </div>
          </div>
          <div className="content-end text-gray-600 text-sm">2 weeks ago</div>
        </div>
      </div>
    </div>
  </>
)
