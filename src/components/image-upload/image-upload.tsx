import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'

interface ImageUploadProps {
  icon: IconDefinition
  name: string
}

interface UploadFileData {
  newFilename: string
  url: string
}

export const ImageUpload = ({ icon, name }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [url, setUrl] = useState<string>('')

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target

    if (input.files && input.files.length > 0) {
      const file = input.files[0]
      const data = new FormData()

      setIsUploading(true)
      data.set('file', file)

      await axios
        .post<UploadFileData>('/api/upload', data)
        .then(({ data: { url, newFilename } }) => {
          setUrl(url)
        })
    }
  }

  return (
    <div className="flex flex-col gap-0">
      <div className="bg-gray-100 rounded-md size-32 inline-flex items-center justify-center content-center overflow-hidden">
        {isUploading && (
          <span className="absolute">
            <Spinner size="3" />
          </span>
        )}
        {url ? (
          <Image
            src={url}
            alt="uploaded image"
            width={300}
            height={300}
            onLoad={() => setIsUploading(false)}
            onLoadedData={() => console.log('loaded data')}
            style={{ visibility: isUploading ? 'hidden' : 'visible' }}
            className="w-auto h-auto max-w-32 max-h-32"
          />
        ) : (
          !isUploading && <FontAwesomeIcon icon={icon} className="text-gray-400" size="2xl" />
        )}
      </div>
      <input type="hidden" value="url" name={name} />
      <div className="mt-2 w-32">
        <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} />
        <Button
          type="button"
          className="hover:cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          variant="soft"
          style={{ minWidth: '100%' }}
          size="3"
        >
          select file
        </Button>
      </div>
    </div>
  )
}
