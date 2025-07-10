'use client';
// import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import CommonWeb from '@/components/Outer/OurPortfolio/CommonWeb';
import PageCover from '@/components/PageCover';
import { webPageContent } from '@/components/Outer/OurPortfolio/WebPageContent';
import Image from 'next/image';

export default function ContentWeb({ params }) {
  const resolvedParams = React.use(params); // ✅ unwrap the promise
  const { id } = resolvedParams;

  const content = webPageContent[id];

  if (!content) return notFound();

  return (
    <div className="text-black">
      {/* <Suspense> */}

      <PageCover bgImage={content.cover} />
      <div className="container mx-auto px-4 py-8">
        <CommonWeb
          p1={content.p1}
          p2={content.p2}
          wimg={content.wimg}
          p3={content.p3}
          features={content.features}
          currentCategoryId={id}
          />
        {content.relatedPortfolios?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center mb-8">Related Portfolios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {content.relatedPortfolios.map((p) => (
                <div key={p.id} className="border p-4 rounded-lg shadow-md">
                  <Image
                  height={500}
                  width={500}
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
        {/* </Suspense> */}
    </div>
  );
}
