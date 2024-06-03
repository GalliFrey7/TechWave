import React from 'react'

const newsItems = [
    {
      title: "Launch of TechWave XR",
      date: "2024-06-01",
      content: "We are excited to announce the launch of the new TechWave XR device, which will revolutionize the world of AR technology.",
    },
    {
      title: "TechWave XR: Update",
      date: "2024-06-10",
      content: "TechWave XR has received a new update, including enhanced features and bug fixes.",
    },
    {
      title: "TechWave XR in the Press",
      date: "2024-06-15",
      content: "TechWave XR has received positive reviews from leading tech publications worldwide.",
    },
  ];

const News = () => {
  return (
    <div className='news-page text-black bg-white'>
        <section className='hero flexCenter h-screen text-black text-center relative' style={{ backgroundColor: '#f5f5f7', padding: '20px'}}>
            <div className='max-container'>
                <h1 className='h1 text-black'>Latest News</h1>
                    <div className='news-feed mt-8'>
                    {newsItems.map((item, index) => (
              <div key={index} className='news-item mb-8 p-6 border border-gray-300 rounded'>
                <h2 className='h2 mb-2'>{item.title}</h2>
                <p className='text-gray-600 mb-2'>{item.date}</p>
                <p className='regular-16'>{item.content}</p>
              </div>
            ))}
                    </div>
            </div>
        </section>
    </div>
  )
}

export default News