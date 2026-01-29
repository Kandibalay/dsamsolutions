import React, { useState } from 'react';
import { Star, Quote, Play, TrendingUp, Award, CheckCircle, ArrowRight, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the proof images
import proof1 from '../assets/testimonies_11.jpeg';
import proof2 from '../assets/testimonies_10.jpeg';
import proof3 from '../assets/testimonies_8.jpeg';
import proof4 from '../assets/testimonies_7.jpeg';
import proof5 from '../assets/testimony_6.jpeg';
import proof6 from '../assets/testimony_5.jpeg';
import proof7 from '../assets/Nnamdi_testimony.jpeg';
import proof8 from '../assets/isaac_testimony.jpeg';
import proof9 from '../assets/Vellz_testimony.jpeg';
import proof10 from '../assets/Prosper_TEstimony.jpeg';
import proof11 from '../assets/sam_test_1.jpeg';
import proof12 from '../assets/james_1.jpeg';
import proof13 from '../assets//proof17.jpeg';
import proof14 from '../assets/proof18.jpeg';
import circle from '../assets/black circle.jpg';
import more1 from '/imago1.jpeg';
import more2 from '/imago2.jpeg';
import more3 from '/imago3.jpeg';
import more4 from '/imago4.jpeg';
import more5 from '/imago5.jpeg';
import more6 from '/imago6.jpeg';
import more7 from '/imago7.jpeg';
import more8 from '/imago8.jpeg';
import more9 from '/imago9.jpeg';
import more10 from '/imago10.jpeg';
import more11 from '/imago11.jpeg';
import more12 from '/imago12.jpeg';
import more13 from '/imago13.jpeg';
import more14 from '/imago14.jpeg';
import more15 from '/imago15.jpeg';
import more16 from '/imago16.jpeg';
import more17 from '/imago17.jpeg';
import more18 from '/imago18.jpeg';
import more19 from '/imago19.jpeg';
import more20 from '/imago20.jpeg';
import more21 from '/imago21.jpeg';
import more22 from '/imago22.jpeg';
import more23 from '/imago23.jpeg';
import more24 from '/WhatsApp Image 2026-01-29 at 17.38.01.jpeg';

// Import video testimonials
import testimonialVideo1 from '../assets/Testimonial.mp4';
import testimonialVideo2 from '../assets/Screen_Recording_2025-12-13_at_4_24_45_PM.mp4';

interface StudentTestimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  image: string;
  earnings: string;
  timeline: string;
  proofImage: string;
}

interface JourneyStage {
  year: string;
  milestone: string;
  description: string;
  earnings: string;
  color: string;
  gradient: string;
}

interface VideoTestimonial {
  id: number;
  embedUrl: string;
  thumbnail: string;
  author: string;
  description: string;
}

const studentTestimonials: StudentTestimonial[] = [
  {
    id: 1,
    text: 'DSAM\'s KDP course is incredible! I went from zero knowledge to publishing my first book in just 2 weeks. Made my investment back in the first month and now earning $3,000+ monthly. Best decision ever!',
    author: 'Ijeoma',
    role: 'KDP Publisher',
    rating: 5,
    image: circle,
    earnings: '$3,000+/month',
    timeline: '2 weeks to first book',
    proofImage: proof1
  },
  {
    id: 2,
    text: 'Dsam\'s course in 2025 changed my finances. Within my first month, I made over $200+ weekly and scaled using the strategies taught, making over $1,000 on my first account and running multiple accounts today.',
    author: 'Isaac',
    role: 'Full-Time KDP Publisher',
    rating: 5,
    image: circle,
    earnings: '$1,000+ multiple accounts',
    timeline: 'Multiple accounts now',
    proofImage: proof8
  },
  {
    id: 3,
    text: 'I was skeptical at first, but this course exceeded all expectations. The niche research methods alone are worth 10x the price. Having two best seller accounts is something I didn\'t think was achievable this fast. ',
    author: 'Vellz',
    role: 'KDP Success Story',
    rating: 5,
    image: circle,
    earnings: 'Daily sales',
    timeline: '8 books published',
    proofImage: proof9
  },
  {
    id: 4,
    text: 'After two years in KDP earning $300–$400 monthly, joining DSAM\'s Inner Circle Cohort became the turning point. Since then, earnings have consistently averaged over $3,000 per month.',
    author: 'Nnamdi',
    role: 'Published 20+ Books',
    rating: 5,
    image: circle,
    earnings: '$3,000+/month',
    timeline: 'From $300 to $3,000',
    proofImage: proof7
  },
  {
    id: 5,
    text: 'Finally a course that delivers on its promises. Clear, actionable steps that actually work. I\'ve published more than 10 books and each one is making consistent sales. Couldn\'t be happier!',
    author: 'Prosper Eze',
    role: 'KDP Entrepreneur',
    rating: 5,
    image: circle,
    earnings: 'Consistent sales',
    timeline: '10+ books published',
    proofImage: proof10
  },
  {
    id: 6,
    text: 'Best investment I\'ve ever made. The community support and ongoing updates make this course worth every penny. Already earned back 10x what I paid!',
    author: 'James',
    role: 'Published Author',
    rating: 5,
    image: circle,
    earnings: '10x ROI',
    timeline: 'Ongoing success',
    proofImage: proof12
  },
  {
    id: 7,
    text: 'Joining the community and consistent hardwork was a game-changer for me. From publishing my first book to now managing multiple accounts, the strategies I learned have been invaluable. Highly recommend!',
    author: 'Jeremy',
    role: 'KDP Publisher',
    rating: 5,
    image: circle,
    earnings: 'Consistent sales',
    timeline: 'Ongoing success',
    proofImage: more3
  },
  {
    id: 8,
    text: 'Investing in this course was the best decision I made for my KDP journey. The d insider tips helped me publish my first book quickly and start earning. Looking forward to scaling further!',
    author: 'Phillip',
    role: 'Published Author',
    rating: 5,
    image: circle,
    earnings: 'Growing sales',
    timeline: 'Ongoing success',
    proofImage: more9
  },
  {
    id: 9,
    text: 'I cannot explain how profitable this course has been for me. The strategies are straightforward and effective. I\'ve published several books now and my earnings keep growing. Truly life-changing!',
    author: 'Victor',
    role: 'KDP Earner',
    rating: 5,
    image: circle,
    earnings: 'Growing sales',
    timeline: 'Ongoing success',
    proofImage: more16
  },
  {
    id: 10,
    text: 'indeed one of the best investments i have made in recent times. The strategies taught are practical and easy to implement. Highly recommend to anyone serious about KDP!',
    author: 'Michael',
    role: 'KDP Publisher',
    rating: 5,
    image: circle,
    earnings: 'Consistent sales',
    timeline: 'Ongoing success',
    proofImage: more22
  },
  {
    id: 11,
    text: 'Thank you Dsam for being a blessing to me with this course. It has transformed my KDP journey and helped me achieve consistent success.',
    author: 'Noble',
    role: 'Published Author',
    rating: 5,
    image: circle,
    earnings: 'Profitale Accounts',
    timeline: 'Ongoing success',
    proofImage: more20
  },
  {
    id: 12,
    text: 'For those who are serious about a major break, this course is the real deal. My testimonies are countless. This could be the life changer you have been waiting for!',
    author: 'Vellz',
    role: 'Full-Time KDP Publisher',
    rating: 5,
    image: circle,
    earnings: 'Consistent sales',
    timeline: 'Ongoing success',
    proofImage: more12
  },
  {
    id: 13,
    text: 'My story is a little different, I have spent just little money apart from the one spent on the course and I have experienced back to back sales. I\'ve published several books now and my earnings keep growing. Quite Overwhelming!',
    author: 'Ibrahim',
    role: '20+ Books Published',
    rating: 5,
    image: circle,
    earnings: 'Growing sales',
    timeline: 'Ongoing success',
    proofImage: more6
  },
  {
    id: 14,
    text: 'Two of my books got to seller, this means a lot to me. Thank you Dsam for being a blessing to me with this course. It has transformed my KDP journey and helped me achieve things i did not think were possible.',
    author: 'vellz',
    role: 'Full-Time KDP Publisher',
    rating: 5,
    image: circle,
    earnings: 'Consistent sales',
    timeline: 'Ongoing success',
    proofImage: more15
  },
  {
    id: 15,
    text: 'Back to back sales has become normal for me since i went through DSam\'s mentorship. The insider tips are top-notch and easy to follow. Highly recommend to anyone looking to make it big in KDP!',
    author: 'Oma',
    role: 'Full-Time KDP Publisher',
    rating: 5,
    image: circle,
    earnings: '10x ROI',
    timeline: 'Ongoing success',
    proofImage: more18
  },
  {
    id: 16,
    text: 'My first big break really made me happy, I did not imagine it was possible at such short time. Since then, sales have been consistent and growing. Highly recommend this course to anyone going through their KDP journey!',
    author: 'Collins',
    role: '15+ Books Published',
    rating: 5,
    image: circle,
    earnings: 'Good ROI',
    timeline: 'Ongoing success',
    proofImage: more14
  },
  {
    id: 17,
    text: 'I experienced multiple account terminations that i almost gave up on my KDP Journey, But thanks to DSam, I was able to go through that phase. Currently I have no fear of account termination and I have been able to build multiple accounts.',
    author: 'Ifeanyi',
    role: 'KDP Publisher',
    rating: 5,
    image: circle,
    earnings: 'Multiple Accounts',
    timeline: 'Ongoing success',
    proofImage: more21
  },
  {
    id: 18,
    text: 'I worked without even checking my account for days and when i checked, i was amazed with the sales amount i got. This is only possible because Dsam laid the foundation for me.',
    author: 'Oma',
    role: 'Full-Time KDP Publisher',
    rating: 5,
    image: circle,
    earnings: '10x ROI',
    timeline: 'Ongoing success',
    proofImage: more21
  }
];

const dsamJourney: JourneyStage[] = [
  {
    year: 'Year 1',
    milestone: '$200-300',
    description: 'Starting from scratch, learning the basics of KDP publishing and building my first books.',
    earnings: '/month',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
  },
  {
    year: 'Year 2',
    milestone: '$500-1,000',
    description: 'Discovered winning niches and refined my publishing strategy. Growth started accelerating.',
    earnings: '/month',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
  },
  {
    year: 'Year 3',
    milestone: '$1,000-2,500',
    description: 'Scaled my operations, built a sustainable system, and started teaching others.',
    earnings: '/month',
    color: 'from-amber-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
  },
  {
    year: 'Year 4',
    milestone: '$5,000+',
    description: 'Achieved consistent 5-figure monthly income through proven strategies and systems.',
    earnings: '/month',
    color: 'from-emerald-500 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
  }
];

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    embedUrl: testimonialVideo1,
    thumbnail: proof1,
    author: 'David Samuel Success Story',
    description: 'Real transformation through KDP publishing'
  },
  {
    id: 2,
    embedUrl: testimonialVideo2,
    thumbnail: proof2,
    author: 'David Peter KDP Journey',
    description: 'From struggling to successful publisher'
  }
];

// Array of proof images for the carousel
const proofImages = [proof6, proof2, proof3, proof11, proof4, proof5, proof13, proof14, more1, more2, more5, more7, more8, more10, more11, more13, more17, more19, more23, more24];

export function Testimonials() {
  const [selectedProof, setSelectedProof] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // For medium screens (2 cards at a time)
  const nextSlideMd = () => {
    setCurrentSlide((prev) => (prev + 2) % dsamJourney.length);
  };

  const prevSlideMd = () => {
    setCurrentSlide((prev) => (prev - 2 + dsamJourney.length) % dsamJourney.length);
  };

  // For small screens (1 card at a time)
  const nextSlideSm = () => {
    setCurrentSlide((prev) => (prev + 1) % dsamJourney.length);
  };

  const prevSlideSm = () => {
    setCurrentSlide((prev) => (prev - 1 + dsamJourney.length) % dsamJourney.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* DSam's Journey Section */}
      <section className="py-20 bg-gray-100">
        <div className="text-primary mb-2 text-center">Success Stories</div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-4xl md:text-5xl text-gray-900 max-w-3xl mx-auto font-semibold">
              From Struggling to Thriving
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey from earning just $200-300 monthly to building a sustainable $5,000+ monthly income through KDP publishing
            </p>
          </motion.div>

          {/* Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Five years ago, I started my KDP journey with nothing but determination and a phone. My first year was tough – earning only $200-300 per month, I questioned whether this path was worth it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But I didn't give up. I studied every successful publisher, tested countless strategies, and slowly but surely, I began to understand what worked. Each book I published taught me something new.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Today, I'm living proof that KDP can transform your life. I've built a consistent $5,000+ monthly income stream, and more importantly, I've created a system that anyone can follow to achieve similar results.
              </p>
              <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-orange-300">
                <Quote className="w-6 h-6 text-orange-500 mb-4" />
                <p className="text-lg text-white italic leading-relaxed">
                  "Success in KDP isn't about luck – it's about learning the right strategies and applying them consistently. That's what I'm here to teach you."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journey Timeline - Responsive */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-gray-900 text-center max-w-3xl mx-auto font-semibold mb-12">The 4-Year Journey</h3>
            
            {/* Large Screens - 4 Cards with Arrow Pointers */}
            <div className="hidden lg:block max-w-7xl mx-auto">
              <div className="relative">
                <div className="grid lg:grid-cols-4 gap-6 rounded-2xl">
                  {dsamJourney.map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="relative bg-white rounded-2xl" 
                    >
                      <div className={`${stage.gradient} rounded-2xl p-6 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full relative overflow-hidden group`}>
                        {/* Year badge */}
                        <div className={`inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg`}>
                          <TrendingUp className="w-4 h-4" />
                          {stage.year}
                        </div>
                        
                        {/* Earnings */}
                        <div className="mb-6">
                          <div className="text-3xl font-black text-gray-900 mb-1 tracking-tight">
                            {stage.milestone}
                          </div>
                          <div className="text-lg font-semibold text-gray-600">
                            {stage.earnings}
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed text-base">
                          {stage.description}
                        </p>

                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 ${stage.color}`}></div>
                      </div>

                      {/* Animated Arrow Pointer (only show between cards 1-2, 2-3, 3-4) */}
                      {index < 3 && (
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.8, 
                            repeatType: "reverse",
                            repeatDelay: 1
                          }}
                          className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10"
                        >
                          <div className={`bg-orange-500 rounded-full p-2 shadow-lg`}>
                            <ArrowRight className="w-6 h-6 text-white" strokeWidth={3} />
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Connecting line */}
                <div className="absolute top-[72px] left-0 right-0 h-1 bg-linear-to-r from-blue-300 via-purple-300 via-amber-300 to-emerald-300 opacity-30 -z-0"></div>
              </div>
            </div>

            {/* Medium Screens - 2 Cards Carousel */}
            <div className="hidden md:block lg:hidden max-w-4xl mx-auto">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      {dsamJourney.slice(currentSlide, currentSlide + 2).map((stage, index) => (
                        <div key={currentSlide + index} className="relative">
                          <div className={`bg-white p-8 rounded-2xl border-2 border-white hover:shadow-md transition-all duration-300 h-full relative overflow-hidden`}>
                            <div className={`inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg`}>
                              <TrendingUp className="w-4 h-4" />
                              {stage.year}
                            </div>
                            
                            <div className="mb-6">
                              <div className="text-3xl font-black text-gray-900 mb-1 tracking-tight">
                                {stage.milestone}
                              </div>
                              <div className="text-lg font-semibold text-gray-600">
                                {stage.earnings}
                              </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed text-base">
                              {stage.description}
                            </p>

                            <div className={`absolute bottom-0 left-0 right-0 h-1`}></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlideMd}
                  disabled={currentSlide === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 bg-white rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg group"
                >
                  <ChevronLeft className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </button>
                <button
                  onClick={nextSlideMd}
                  disabled={currentSlide >= 2}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 bg-white rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg group"
                >
                  <ChevronRight className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Small Screens - 1 Card Carousel */}
            <div className="block md:hidden max-w-md mx-auto bg-white rounded-2xl border-2 border-white">
              <div className="relative">
                <div className="overflow-hidden px-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      {dsamJourney.slice(currentSlide, currentSlide + 1).map((stage) => (
                        <div key={currentSlide} className="relative">
                          <div className={`${stage.gradient}  p-8  shadow-xl h-full relative overflow-hidden`}>
                            <div className={`inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg`}>
                              <TrendingUp className="w-4 h-4" />
                              {stage.year}
                            </div>
                            
                            <div className="mb-6">
                              <div className="text-2xl font-black text-gray-900 mb-1 tracking-tight">
                                {stage.milestone}
                              </div>
                              <div className="text-base font-semibold text-gray-600">
                                {stage.earnings}
                              </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {stage.description}
                            </p>

                            <div className={`absolute bottom-0 left-0 right-0 h-1 `}></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlideSm}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group"
                >
                  <ChevronLeft className="w-5 h-5 text-orange-500 group-hover:text-white" />
                </button>
                <button
                  onClick={nextSlideSm}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group"
                >
                  <ChevronRight className="w-5 h-5 text-orange-500 group-hover:text-white" />
                </button>                
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 "
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">2,500%</div>
              <div className="text-sm text-gray-600">Income Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">5</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">$5,000+</div>
              <div className="text-sm text-gray-600">Monthly Income</div>
            </div>
          </motion.div>

          {/* DSam's Proof Screenshots - Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 text-2xl md:text-4xl text-gray-900 max-w-3xl text-center mx-auto font-semibold">Real Figures, Real Results</h3>
            
            {/* Grid of Proof Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {proofImages.map((proof, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProof(proof)}
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                    <img
                      src={proof}
                      alt={`DSam earnings proof ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-sm text-center text-gray-600 font-medium">
                        📊 Earnings Screenshot
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="text-primary mb-2">
              Real Students, Real Results
            </div>
            <h2 className="mb-6 text-4xl md:text-4xl text-gray-900 max-w-3xl mx-auto font-semibold">
              Verified Success Stories
            </h2>
            <p className="text-base text-gray-500 mt-4">
              Join hundreds of successful students who have transformed their lives through our proven KDP strategies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {studentTestimonials.map((testimonial, index) => (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="h-full"
                        >
                          <div className="bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                            {/* Proof Image at Top - Fixed Height */}
                            <div 
                              className="relative overflow-hidden cursor-pointer group"
                              onClick={() => setSelectedProof(testimonial.proofImage)}
                            >
                              <div className="w-full h-48">
                                <img
                                  src={testimonial.proofImage}
                                  alt="Earnings proof"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                                <span className="text-sm font-semibold text-orange-500">{testimonial.earnings}</span>
                              </div>
                            </div>
          
                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                                ))}
                              </div>
          
                              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                "{testimonial.text}"
                              </p>
          
                              {/* Author Info at Bottom */}
                              <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-gray-900 text-sm truncate">{testimonial.author}</div>
                                    <div className="text-xs text-gray-500 truncate">{testimonial.role}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="text-primary mb-2">
              Hear From Our Students
            </div>
            <h2 className="mb-6 text-4xl md:text-4xl text-gray-900 max-w-3xl mx-auto font-semibold">
              Video Testimonials
            </h2>
            <p className="text-base text-gray-500 mt-4">
              Watch real students share their transformative journeys and incredible results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-video bg-black">
                    {activeVideo === video.id ? (
                      <video
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setActiveVideo(null)}
                      >
                        <source src={video.embedUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.author}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center">
                          <button
                            onClick={() => setActiveVideo(video.id)}
                            className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                          >
                            <Play className="w-10 h-10 text-white ml-1" fill="white" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.author}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProof(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedProof}
              alt="Proof screenshot"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-orange-500 transition-colors"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
