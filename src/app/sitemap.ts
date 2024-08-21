import { MetadataRoute } from "next";


export const sitemap = (): MetadataRoute.Sitemap => {


    return [
        {
            url: 'https://jhonatandev.com.br',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: 'https://jhonatandev.com.br/experience',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        {
            url: 'https://jhonatandev.com.br/projects',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}