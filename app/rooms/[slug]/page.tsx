import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getRoomBySlug, getAllRoomSlugs } from "@/lib/rooms";
import RoomClient from "./RoomClient";

export async function generateStaticParams() {
  return getAllRoomSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const room = getRoomBySlug(slug);

  if (!room) return {};

  const isGreek = lang === "el";
  const content = isGreek ? room.el : room.en;

  return {
    title: content.seoTitle,
    description: content.metaDesc,
    keywords: isGreek 
      ? ['ενοικιαζόμενα δωμάτια άνδρος', 'διαμονή χώρα άνδρου', room.name, 'andros rooms', 'andros διαμονή']
      : ['andros accommodation', 'sea view apartments andros', room.name, 'chora andros stay', 'boutique guesthouse'],
    alternates: {
      canonical: `https://www.androsguesthouses.gr/rooms/${slug}`,
    },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDesc,
      url: `https://www.androsguesthouses.gr/rooms/${slug}`,
      images: [
        {
          url: room.images[0],
          width: 1200,
          height: 630,
          alt: `${room.name} - Accommodation in Andros`,
        },
      ],
    },
  };
}

export default async function RoomPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const { lang: langParam } = await searchParams;

  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const initialLang = langParam === "el" ? "el" : "en";

  return <RoomClient room={room} initialLang={initialLang} slug={slug} />;
}