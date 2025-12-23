import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Codeshade POS',
        short_name: 'Codeshade',
        description: 'Le meilleur logiciel de gestion en Algérie. Logiciel de gestion de stock et caisse (POS).',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3076DA',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    };
}
