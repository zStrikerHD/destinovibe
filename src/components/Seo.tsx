import { useEffect } from 'react'

type Props = { title: string; description: string; image?: string }

export function Seo({ title, description, image }: Props) {
  useEffect(() => {
    document.title = `${title} — DestinoVibe`
    const set = (selector: string, value: string) => {
      let node = document.head.querySelector<HTMLMetaElement>(selector)
      if (!node) { node = document.createElement('meta'); const match = selector.match(/\[(.+?)="(.+?)"\]/); if (match) node.setAttribute(match[1], match[2]); document.head.appendChild(node) }
      node.content = value
    }
    set('meta[name="description"]', description)
    set('meta[property="og:title"]', `${title} — DestinoVibe`)
    set('meta[property="og:description"]', description)
    if (image) set('meta[property="og:image"]', image)
  }, [title, description, image])
  return null
}
