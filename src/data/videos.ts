export const rawData = {
  categories: [
    {
      category: {
        slug: "social-media-ai",
        name: "Social Media AI",
        iconUrl:
          "https://media.samajsaathi.com/icons/learn-ai/04-social-media-ai.png",
      },
      contents: [
        {
          title: "AI Motivational Reel Banao Free Mein",
          mediaUrl: "https://youtube.com/embed/_HL7l_62bUc",
          mediaType: "YOUTUBE",
          thumbnailUrl:
            "https://v3b.fal.media/files/b/0a877b29/TC9Jbr_MBNoEJm5Mwhc2F.png",
          slug: "_HL7l_62bUc",
        },
        {
          title: "Social Media Ke Liye Facts Video Banao",
          mediaUrl: "https://youtube.com/embed/avZd1bSvqyE",
          mediaType: "YOUTUBE",
          thumbnailUrl:
            "https://v3b.fal.media/files/b/0a877b28/7hy7WSculPFwQtcVu0BzN.png",
          slug: "avZd1bSvqyE",
        },
        {
          title: "Instagram Ka Naya AI Feature",
          mediaUrl: "https://youtube.com/embed/meVTqNn1P5A",
          mediaType: "YOUTUBE",
          thumbnailUrl:
            "https://v3b.fal.media/files/b/0a877b2a/T6DpgH_xrEN15r1f3rqu-.png",
          slug: "meVTqNn1P5A",
        },
      ],
    },
    {
      category: {
        slug: "ai-income",
        name: "AI Income",
        iconUrl:
          "https://media.samajsaathi.com/icons/learn-ai/05-ai-income.png",
      },
      contents: [
        {
          title: "Yeh Free AI Tool Se Paise Kamao",
          mediaUrl: "https://youtube.com/embed/TpW3QxwADgE",
          mediaType: "YOUTUBE",
          thumbnailUrl:
            "https://v3b.fal.media/files/b/0a877b2e/SK5TdlG5x5Tc-KG29U_Jm.png",
          slug: "TpW3QxwADgE",
        },
        {
          title: "AI Clone Se Paise Kamao",
          mediaUrl: "https://youtube.com/embed/Wi9cKN6Fg1E",
          mediaType: "YOUTUBE",
          thumbnailUrl:
            "https://v3b.fal.media/files/b/0a883ea8/MuPkcktStazw3ImTOJGIm.png",
          slug: "Wi9cKN6Fg1E",
        },
      ],
    },
  ],
}

export type Video = {
  title: string
  slug: string
  thumbnailUrl: string
  mediaUrl: string
  categoryName: string
  categorySlug: string
}

export const videos: Video[] = rawData.categories.flatMap((cat: any) =>
  cat.contents.map((item: any) => ({
    title: item.title,
    slug: item.slug,
    thumbnailUrl: item.thumbnailUrl,
    mediaUrl: item.mediaUrl,
    categoryName: cat.category.name,
    categorySlug: cat.category.slug,
  }))
)
