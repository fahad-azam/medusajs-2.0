import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Testimonial from "@modules/home/components/testimonials"
import SocialMedia from "@modules/home/components/social-media"
import NewsLetter from "@modules/home/components/news-letter"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const testimonials = [
    {
      id: "1",
      name: "John Doe",
      location: "New York, USA",
      comment: "Great products and fast delivery! Highly recommended.",
      avatar: "https://via.placeholder.com/100x100?text=John+Doe",
    },
    {
      id: "2",
      name: "Jane Smith",
      location: "London, UK",
      comment: "Amazing customer service and quality products.",
      avatar: "https://via.placeholder.com/100x100?text=Jane+Smith",
    },
    {
      id: "3",
      name: "Mike Johnson",
      location: "Sydney, Australia",
      comment: "Best shopping experience ever! Will shop again.",
      avatar: "https://via.placeholder.com/100x100?text=Mike+Johnson",
    },
  ];
  
  const instagramPosts = [
    {
      id: "1",
      image: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20274/SM1005686.jpg",
      caption: "Check out our latest collection!",
    },
    {
      id: "2",
      image: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20274/SM1005686.jpg",
      caption: "New arrivals are here!",
    },
    {
      id: "3",
      image: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20274/SM1005686.jpg",
      caption: "Behind the scenes at our warehouse.",
    },
    {
      id: "4",
      image: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20274/SM1005686.jpg",
      caption: "Customer unboxing video!",
    },
  ];

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      {/* Testimonials */}
      <div className="p-12 bg-gray-50">
       <Testimonial testimonials={testimonials} />
      </div>
      {/* Instagram Handle */}
      <div className="p-12 bg-gray-50">
        <SocialMedia instagramPosts={instagramPosts} />
      </div>
      {/* Newsletter */}
      <div className="p-12 bg-gray-50">
        <NewsLetter />
      </div>
    </>
  )
}
