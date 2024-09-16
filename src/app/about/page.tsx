import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen p-6 text-gray-500">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Tech Insights!</h2>
          <p className="text-lg leading-relaxed">
            Tech Insights is your go-to source for the latest updates and in-depth analysis of technology trends. Our blog is dedicated to providing engaging and informative content to technology enthusiasts, professionals, and curious minds alike.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Tech Insights, our mission is to offer timely and accurate information that helps our readers stay ahead in the fast-paced world of technology. We strive to deliver high-quality articles, reviews, and insights that empower our audience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg leading-relaxed">
            Our team consists of passionate tech experts and writers dedicated to bringing you the best content. John Doe, our Founder and Editor, has over a decade of experience in the tech industry and a deep love for all things tech. Learn more about our team and their stories.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg leading-relaxed">
            Founded in 2020, Tech Insights began as a small project with a big vision. Over the years, we have grown into a trusted resource for tech news and analysis, thanks to our dedicated team and loyal readers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg leading-relaxed">
            We’d love to hear from you! Whether you have feedback, collaboration ideas, or just want to say hi, feel free to reach out to us at{' '}
            <a href="mailto:contact@techinsights.com" className="text-blue-600 hover:underline">contact@techinsights.com</a>. You can also follow us on social media for the latest updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
