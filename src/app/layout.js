import {
  Cedarville_Cursive,
  Dancing_Script,
  Sacramento,
  Caveat,
  Kalam,
  Playpen_Sans,
  Satisfy,
  Cookie,
  Marck_Script,
  Style_Script,
  Playwrite_ID,
  Itim,
  Patrick_Hand,
  Handlee,
  Schoolbell,
  Mali,
  Gochi_Hand,
  Delicious_Handrawn,
  Permanent_Marker,
} from 'next/font/google'
import './globals.css'

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
})

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
})

const playpenSans = Playpen_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-playpen',
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-satisfy',
})

const cookie = Cookie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cookie',
})

const marckScript = Marck_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marck',
})

const styleScript = Style_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-style-script',
})

const playwriteId = Playwrite_ID({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playwrite-id',
})

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
})

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patrick',
})

const handlee = Handlee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handlee',
})

const schoolbell = Schoolbell({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-schoolbell',
})

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mali',
})

const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi',
})

const deliciousHandrawn = Delicious_Handrawn({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-delicious',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
})

export const metadata = {
  title: 'Cetak Tegak Bersambung',
  description: 'Media Belajar Menulis Indah (Buku Halus Kasar / Garis Lima) untuk Siswa & Anak',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`
        ${cedarvilleCursive.variable}
        ${dancingScript.variable}
        ${sacramento.variable}
        ${caveat.variable}
        ${kalam.variable}
        ${playpenSans.variable}
        ${satisfy.variable}
        ${cookie.variable}
        ${marckScript.variable}
        ${styleScript.variable}
        ${playwriteId.variable}
        ${itim.variable}
        ${patrickHand.variable}
        ${handlee.variable}
        ${schoolbell.variable}
        ${mali.variable}
        ${gochiHand.variable}
        ${deliciousHandrawn.variable}
        ${permanentMarker.variable}
      `}
    >
      <body className="min-h-screen bg-slate-100 font-sans antialiased">{children}</body>
    </html>
  )
}
