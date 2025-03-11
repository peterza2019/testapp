// components/discovery/VideoFeed.jsx
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "Cool Gadget",
    price: 29.99,
    videoUrl: "/videos/1.mp4",
    thumbnailUrl: "/images/gadget-thumb.jpg",
  },
  {
    id: 2,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/2.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 3,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/3.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 4,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/4.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 5,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/5.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 6,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/6.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 7,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/7.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 8,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/8.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 9,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/9.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 10,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/10.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 11,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/11.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 12,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/12.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 13,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/13.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 14,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/14.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 15,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/15.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 16,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/16.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 17,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/17.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 18,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/18.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 19,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/19.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 20,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/20.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 21,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/21.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 22,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/22.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 23,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/23.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },
  {
    id: 24,
    title: "Stylish Sunglasses",
    price: 19.99,
    videoUrl: "/videos/24.mp4",
    thumbnailUrl: "/images/sunglasses-thumb.jpg",
  },


];

const VideoFeed = () => {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory">
      {mockProducts.map((product) => (
        <VideoItem key={product.id} product={product} />
      ))}
    </div>
  );
};

const VideoItem = ({ product }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <motion.div
      ref={ref}
      className="h-screen w-full snap-start relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        src={product.videoUrl}
        poster={product.thumbnailUrl}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-lg">${product.price.toFixed(2)}</p>
        </motion.div>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <motion.button
          onClick={handleLike}
          whileTap={{ scale: 1.2 }}
          className="text-white focus:outline-none"
        >
          <HeartIcon className={`h-8 w-8 ${liked ? 'text-red-500 fill-current' : ''}`} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VideoFeed;