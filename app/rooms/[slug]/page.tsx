import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getRoomBySlug, getAllRoomSlugs } from "@/lib/rooms";
import RoomClient from "./RoomClient";

// Λέμε στο Next.js ποια slugs υπάρχουν → στατικές σελίδες στο build time
export async function generateStaticParams() {
  return getAllRoomSlugs().map((slug) => ({ slug }));
}

// SEO: αυτό τώρα γράφεται στο <head> — η Google το βλέπει
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) return {};

  return {
    title: room.en.seoTitle,
    description: room.en.metaDesc,
    alternates: {
      canonical: `https://www.androsguesthouses.gr/rooms/${slug}`,
    },
    openGraph: {
      title: room.en.seoTitle,
      description: room.en.metaDesc,
      url: `https://www.androsguesthouses.gr/rooms/${slug}`,
      images: [
        {
          url: room.images[0],
          width: 1200,
          height: 630,
          alt: room.name,
        },
      ],
    },
  };
}

// Server Component: καθαρό, χωρίς "use client"
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

  return <RoomClient room={room} initialLang={initialLang} />;
}