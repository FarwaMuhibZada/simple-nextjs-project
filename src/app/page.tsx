import Image from 'next/image';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tech Insights</h1>
      <p className="text-lg mb-8">Explore the latest trends in technology and innovation.</p>
      <div className="relative w-full max-w-2xl">
        <Image
          src="/images/img.jfif"
          alt="Tech Insights Hero"
          layout="responsive"
          width={1000}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;
