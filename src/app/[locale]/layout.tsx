import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MenuNav } from "@/components/MenuNav/MenuNav";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { MenuProvider } from "@/lib/contexts/menuContext/menuContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { montserrat } from "@/assets";
import { WhatsappButtonFixed } from "@/components/WhatsappButtonFixed";

export const metadata: Metadata = {
  title: {
    absolute: "Jhonatan's Portfolio - Next.js Developer",
    template: "%s | Jhonatan's Portfolio - Next.js Developer"
  },
  description: "Desenvolvedor especializado em Next.js, criando sites otimizados para SEO, performáticos e personalizados. Experiência em migrações de plataformas, desenvolvimento de interfaces interativas, animações avançadas e integração de APIs, entregando resultados reais para negócios. Portfólio com projetos de sucesso em SEO e experiências web envolventes.",
  icons: [
    { url: "/logo.png?v=4" }, // Favicon
    { url: "/apple-touch-icon.png?v=4" } // ícone para dispositivos Apple
  ],
  keywords: [
    "Jhonatan", "Desenvolvedor Next.js", "Freelancer", "SEO", "Desenvolvimento Web", "Animações Web", "Interfaces Interativas", "APIs", "Web Performance"
  ],
  openGraph: {
    type: 'website',
    url: 'https://jhonatandev.com.br', 
    title: "Jhonatan's Portfolio - Next.js Developer",
    description: "Portfólio de Jhonatan, um desenvolvedor freelance especializado em Next.js e SEO. Veja projetos com animações avançadas, integrações de APIs, e sites altamente performáticos.",
    images: [
      {
        url: 'https://jhonatandev.com.br/site.png', // URL da imagem para redes sociais
        width: 1200,
        height: 630,
        alt: "Jhonatan's Portfolio - Next.js Developer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jhonatandev', // Seu handle do Twitter
    title: "Jhonatan's Portfolio - Next.js Developer",
    description: "Explore o portfólio de Jhonatan, um desenvolvedor freelance especializado em Next.js e SEO.",
    images: 'https://jhonatandev.com.br/site.jpg' // Imagem específica para Twitter
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };

}) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className}`}>

        <NextIntlClientProvider messages={messages}>

          <MenuProvider>
            <PageTransition />
            <Header />
            <MenuNav />
            {children}
            <WhatsappButtonFixed />
          </MenuProvider>

        </NextIntlClientProvider>

      </body>
    </html>
  );
}