// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

const defaultTitle = 'МБДОУ «Детский сад №30» г.о. Самара — Официальный сайт';
const defaultDescription = 'Муниципальное бюджетное дошкольное образовательное учреждение «Детский сад комбинированного вида №30» городского округа Самара. Информация для родителей, новости, достижения, контакты.';
const defaultKeywords = 'детский сад, самара, дошкольное образование, детский сад 30, классики, МБДОУ, образование, дети, воспитание';
const defaultImage = '/og-image.jpg';
const defaultUrl = 'https://ds30.vercel.app';

export const SEO = ({
                        title,
                        description,
                        keywords,
                        image,
                        url,
                        type = 'website',
                    }: SEOProps) => {
    const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image || defaultImage;
    const metaUrl = url || defaultUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:site_name" content="МБДОУ «Детский сад №30»" />
            <meta property="og:locale" content="ru_RU" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};