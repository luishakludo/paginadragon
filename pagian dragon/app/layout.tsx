import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dragon - Automatize Suas Vendas no Telegram',
  description: 'A plataforma mais completa para gerenciar assinaturas, pagamentos recorrentes e automação de grupos e canais no Telegram.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0B0F14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
