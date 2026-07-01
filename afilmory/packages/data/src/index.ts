import type { CameraInfo, LensInfo, PhotoManifestItem } from '@afilmory/builder'

const baseUrl: string = typeof import.meta !== 'undefined' ? import.meta.env.BASE_URL : '/'

class PhotoLoader {
  private photos: PhotoManifestItem[] = []
  private photoMap: Record<string, PhotoManifestItem> = {}
  private cameras: CameraInfo[] = []
  private lenses: LensInfo[] = []

  constructor() {
    this.getAllTags = this.getAllTags.bind(this)
    this.getAllCameras = this.getAllCameras.bind(this)
    this.getAllLenses = this.getAllLenses.bind(this)
    this.getPhotos = this.getPhotos.bind(this)
    this.getPhoto = this.getPhoto.bind(this)

    const manifest = typeof __MANIFEST__ !== 'undefined' ? __MANIFEST__ : { data: [], cameras: [], lenses: [] }
    this.photos = (manifest.data ?? []) as unknown as PhotoManifestItem[]
    this.cameras = (manifest.cameras ?? []) as unknown as CameraInfo[]
    this.lenses = (manifest.lenses ?? []) as unknown as LensInfo[]

    this.photos.forEach((photo) => {
      // 修正图片 URL：添加 base 路径
      if (baseUrl !== '/') {
        if (photo.originalUrl?.startsWith('/')) {
          photo.originalUrl = `${baseUrl}${photo.originalUrl.slice(1)}`
        }
        if (photo.thumbnailUrl?.startsWith('/')) {
          photo.thumbnailUrl = `${baseUrl}${photo.thumbnailUrl.slice(1)}`
        }
      }
      this.photoMap[photo.id] = photo
    })
  }

  getPhotos() {
    return this.photos
  }

  getPhoto(id: string) {
    return this.photoMap[id]
  }

  getAllTags() {
    const tagSet = new Set<string>()
    this.photos.forEach((photo) => {
      photo.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }

  getAllCameras() {
    return this.cameras
  }

  getAllLenses() {
    return this.lenses
  }
}
export const photoLoader = new PhotoLoader()
