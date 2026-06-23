<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Photo } from '../../gallery-data.js'
import photosRaw from '../../gallery-data.js'

const photos: Photo[] = photosRaw

/* ============================================================
 * Floating date
 * ============================================================ */
const floatingDate = ref('')
const floatingVisible = ref(false)
let observer: IntersectionObserver | null = null

function fmtDate(raw: string): string {
  if (!raw) return ''
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
  setTimeout(() => {
    if (typeof IntersectionObserver === 'undefined') return
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) { floatingDate.value = (visible[0].target as HTMLElement).dataset.date || ''; floatingVisible.value = true }
        else floatingVisible.value = false
      },
      { threshold: 0.25 },
    )
    document.querySelectorAll('.gallery-card-item').forEach(el => observer!.observe(el))
  }, 200)
})
onUnmounted(() => observer?.disconnect())

/* ============================================================
 * Groups
 * ============================================================ */
const groupedByYear = computed(() => {
  const map = new Map<number, Photo[]>()
  for (const p of photos) {
    if (!p.date) continue
    const y = new Date(p.date).getFullYear()
    if (!map.has(y)) map.set(y, [])
    map.get(y)!.push(p)
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0])
})

/* ============================================================
 * Lightbox
 * ============================================================ */
const lbIndex = ref(-1)
const lbOpen = computed(() => lbIndex.value >= 0)
const lbPhoto = computed(() => (lbIndex.value >= 0 ? photos[lbIndex.value] : null))

function open(index: number) { lbIndex.value = index; document.body.style.overflow = 'hidden' }
function close() { lbIndex.value = -1; document.body.style.overflow = '' }
function prev() { lbIndex.value = lbIndex.value > 0 ? lbIndex.value - 1 : photos.length - 1 }
function next() { lbIndex.value = lbIndex.value < photos.length - 1 ? lbIndex.value + 1 : 0 }
function onKey(e: KeyboardEvent) {
  if (!lbOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}
watch(lbOpen, v => { if (v) window.addEventListener('keydown', onKey); else window.removeEventListener('keydown', onKey) })
</script>

<template>
  <div class="gallery-root">
    <!-- Floating date -->
    <Transition name="float-fade">
      <div v-if="floatingVisible && floatingDate" class="float-date-pill">{{ floatingDate }}</div>
    </Transition>

    <!-- Empty -->
    <div v-if="photos.length === 0" class="gallery-empty">
      <p>还没有照片。把图片放进 <code>docs/.vuepress/public/gallery/</code>，然后运行：</p>
      <pre>node scripts/generate-gallery.mjs</pre>
    </div>

    <!-- Year sections -->
    <section v-for="[year, yearPhotos] in groupedByYear" :key="year" class="gallery-year-section">
      <h2 class="year-title">{{ year }}</h2>
      <div class="masonry-grid">
        <div
          v-for="(photo, i) in yearPhotos"
          :key="photo.src"
          class="gallery-card-item"
          :data-date="fmtDate(photo.date)"
          @click="open(photos.indexOf(photo))"
        >
          <img :src="photo.src" :alt="photo.title" loading="lazy" class="card-img">
          <div class="card-info">
            <span class="card-title">{{ photo.title }}</span>
            <span class="card-date">{{ fmtDate(photo.date) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lb-fade">
        <div v-if="lbOpen" class="lb-backdrop" @click.self="close">
          <button class="lb-btn lb-close" @click="close" aria-label="Close">✕</button>
          <button class="lb-btn lb-prev" @click.stop="prev" aria-label="Previous">‹</button>
          <button class="lb-btn lb-next" @click.stop="next" aria-label="Next">›</button>

          <div class="lb-body">
            <div class="lb-img-area">
              <img :key="lbPhoto?.src" :src="lbPhoto?.src" :alt="lbPhoto?.title" class="lb-img">
            </div>
            <aside class="lb-exif">
              <h2 class="lb-exif-title">{{ lbPhoto?.title }}</h2>
              <dl v-if="lbPhoto" class="exif-dl">
                <div v-if="lbPhoto.date" class="exif-item"><dt>Date</dt><dd>{{ fmtDate(lbPhoto.date) }}</dd></div>
                <div v-if="(lbPhoto as any).camera" class="exif-item"><dt>Camera</dt><dd>{{ (lbPhoto as any).camera }}</dd></div>
                <div v-if="(lbPhoto as any).lens" class="exif-item"><dt>Lens</dt><dd>{{ (lbPhoto as any).lens }}</dd></div>
                <div v-if="(lbPhoto as any).focalLength" class="exif-item"><dt>Focal</dt><dd>{{ (lbPhoto as any).focalLength }}</dd></div>
                <div v-if="(lbPhoto as any).aperture" class="exif-item"><dt>Aperture</dt><dd>{{ (lbPhoto as any).aperture }}</dd></div>
                <div v-if="(lbPhoto as any).shutter" class="exif-item"><dt>Shutter</dt><dd>{{ (lbPhoto as any).shutter }}</dd></div>
                <div v-if="(lbPhoto as any).iso" class="exif-item"><dt>ISO</dt><dd>{{ (lbPhoto as any).iso }}</dd></div>
                <div v-if="(lbPhoto as any).location" class="exif-item"><dt>Location</dt><dd>{{ (lbPhoto as any).location }}</dd></div>
              </dl>
              <p class="lb-counter">{{ lbIndex + 1 }} / {{ photos.length }}</p>
            </aside>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* ===== Root ===== */
.gallery-root { max-width:1280px; margin:0 auto; padding:32px 24px 80px }

/* ===== Floating date ===== */
.float-date-pill { position:fixed; top:80px; right:24px; z-index:20; padding:5px 16px; font-size:12px; font-weight:500; color:var(--vp-c-text-1); background:var(--vp-c-bg-elv); border:1px solid var(--vp-c-gutter); border-radius:100px; box-shadow:var(--vp-shadow-2); pointer-events:none; white-space:nowrap }
.float-fade-enter-active,.float-fade-leave-active { transition:opacity .2s ease,transform .2s ease }
.float-fade-enter-from,.float-fade-leave-to { opacity:0; transform:translateY(-6px) }

/* ===== Empty ===== */
.gallery-empty { text-align:center; padding:80px 20px; color:var(--vp-c-text-2); line-height:2 }
.gallery-empty code,.gallery-empty pre { background:var(--vp-c-default-soft); border-radius:6px; padding:2px 8px; font-size:.9em }
.gallery-empty pre { display:inline-block; padding:8px 16px; margin-top:8px }

/* ===== Year ===== */
.gallery-year-section { margin-bottom:56px }
.year-title { margin:0 0 24px; font-family:'Noto Serif SC','Source Han Serif SC',serif; font-size:28px; font-weight:700; letter-spacing:.03em; color:var(--vp-c-text-1) }

/* ===== Masonry ===== */
.masonry-grid { columns:3; column-gap:18px }
@media(max-width:960px){.masonry-grid{columns:2;column-gap:14px}}
@media(max-width:560px){.masonry-grid{columns:1}}

/* ===== Card ===== */
.gallery-card-item { break-inside:avoid; margin-bottom:18px; border-radius:10px; overflow:hidden; cursor:pointer; position:relative; line-height:0; transition:transform .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1); box-shadow:var(--vp-shadow-1) }
.gallery-card-item:hover { transform:translateY(-3px); box-shadow:var(--vp-shadow-4) }
.card-img { width:100%; height:auto; display:block }
.card-info { position:absolute; inset:auto 0 0 0; padding:28px 14px 10px; background:linear-gradient(to top,rgba(0,0,0,.5),transparent); display:flex; flex-direction:column; gap:2px; opacity:0; transition:opacity .3s ease }
.gallery-card-item:hover .card-info { opacity:1 }
.card-title { font-size:14px; font-weight:600; color:#fff; line-height:1.3 }
.card-date { font-size:11px; color:rgba(255,255,255,.7) }

/* ===== Lightbox ===== */
.lb-backdrop { position:fixed; inset:0; z-index:100; background:rgba(0,0,0,0.93); display:flex; align-items:center; justify-content:center }
.lb-fade-enter-active,.lb-fade-leave-active { transition:opacity .25s ease }
.lb-fade-enter-from,.lb-fade-leave-to { opacity:0 }

.lb-btn { position:absolute; z-index:10; border:none; border-radius:50%; background:rgba(255,255,255,0.1); color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s }
.lb-btn:hover { background:rgba(255,255,255,0.22) }
.lb-close { top:18px; right:20px; width:38px; height:38px; font-size:18px }
.lb-prev,.lb-next { top:50%; transform:translateY(-50%); width:44px; height:44px; font-size:26px }
.lb-prev { left:16px } .lb-next { right:16px }

.lb-body { display:flex; width:100%; height:100%; max-width:1440px }
.lb-img-area { flex:1; display:flex; align-items:center; justify-content:center; min-width:0; padding:20px }
.lb-img { max-width:100%; max-height:calc(100vh - 40px); object-fit:contain; border-radius:4px }

.lb-exif { width:260px; flex-shrink:0; padding:48px 24px 24px; color:rgba(255,255,255,0.82); overflow-y:auto; border-left:1px solid rgba(255,255,255,0.06) }
.lb-exif-title { margin:0 0 24px; font-size:18px; font-weight:600; color:#fff; line-height:1.4 }
.exif-dl { margin:0 }
.exif-item { display:flex; justify-content:space-between; align-items:baseline; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06); font-size:14px; line-height:1.5 }
.exif-item dt { color:rgba(255,255,255,0.45); font-weight:400; flex-shrink:0; margin-right:16px }
.exif-item dd { margin:0; text-align:right; font-weight:500 }
.lb-counter { margin-top:24px; font-size:12px; color:rgba(255,255,255,0.35); text-align:right }

/* ===== Responsive ===== */
@media(max-width:768px){
  .lb-body{flex-direction:column}
  .lb-img-area{flex:1;padding:8px}
  .lb-img{max-height:50vh}
  .lb-exif{width:100%;height:auto;padding:12px 16px 20px;border-left:none;border-top:1px solid rgba(255,255,255,0.06);overflow-y:visible}
  .lb-exif-title{margin-bottom:12px;font-size:16px}
  .exif-item{padding:7px 0;font-size:13px}
  .lb-btn{width:34px;height:34px;font-size:20px}
  .lb-prev{left:4px}.lb-next{right:4px}
  .lb-close{top:10px;right:10px;width:32px;height:32px;font-size:16px}
  .float-date-pill{top:72px;right:12px;font-size:11px;padding:4px 12px}
}
@media(max-width:560px){.gallery-root{padding:16px 10px 60px}.year-title{font-size:22px}}
</style>
