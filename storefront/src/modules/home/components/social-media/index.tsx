import React from 'react'

interface SocialMediaProps {
  instagramPosts: { id: string; image: string; caption: string }[];
}

function SocialMedia({
    instagramPosts
}: SocialMediaProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-8">Follow Us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <img key={post.id} src={post.image} alt={post.caption} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
    </>
  )
}

export default SocialMedia