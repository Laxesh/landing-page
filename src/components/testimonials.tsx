import Testimonial from '@/components/testimonial';
import Image from 'next/image';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: '/images/testimonial-01.png',
      name: 'Alice Carter',
      username: '@alice_in_tech',
      date: 'June 23, 2028',
      content:
        'This platform has completely transformed the way I approach my projects. The clean design and robust tools make everything so much easier!',
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-02.png',
      name: 'Dylan Harper',
      username: '@dharper_99',
      date: 'July 8, 2028',
      content:
        "I've never come across something so intuitive and efficient. It feels like it was made specifically for my workflow!",
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-03.png',
      name: 'Sophia Nguyen',
      username: '@soph_nguy',
      date: 'August 14, 2028',
      content:
        'Absolutely love using this tool. The features are unmatched, and it has boosted my productivity tenfold. Highly recommend it to anyone!',
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-04.png',
      name: 'Liam Garcia',
      username: '@liam.codes',
      date: 'September 3, 2028',
      content:
        "This app has set a new standard for user experience. It’s sleek, fast, and incredibly effective. I'm beyond impressed!",
      channel: 'Twitter',
    },
  ];

  return (
    <section className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10 w-full max-w-[1440px]"
        aria-hidden="true"
      >
        <Image
          src={'/images/pricing-illustration.svg'}
          className="w-full h-auto"
          width={1440}
          height={440}
          alt="Pricing Illustration"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="pt-12 md:pt-20 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Top startups love Simple
            </h2>
          </div>
        </div>
        <div className="relative mx-auto w-full px-4 sm:px-6">
          <div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl"
            aria-hidden="true"
          >
            <div className="h-80 w-full max-w-4xl mx-auto rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>

          {/* Row */}
          <div className="group w-full py-12 md:py-20 overflow-hidden">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-start gap-6 w-max group-hover:[animation-play-state:paused] px-4">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[calc(100vw-2rem)] sm:w-[28rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
              {/* Duplicated items for infinite scroll */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={`duplicate-${index}`}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[calc(100vw-2rem)] sm:w-[28rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
