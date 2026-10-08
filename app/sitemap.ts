import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://diazridho.cloud',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}