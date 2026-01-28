import React from 'react';
import { Star, Clock, Users, FileText, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import circle from '../assets/black circle.jpg';
import Amazon from "../assets/Amazon image 3.jpg"

// Static course data
const course = {
  _id: '1',
  title: 'KDP Success Guide by DSAM',
  description: 'Master the complete Amazon KDP publishing process from A to Z. This comprehensive course covers everything from finding profitable niches to creating best-selling books and scaling your publishing business to consistent monthly income.',
  thumbnail: {
    url: Amazon
  },
  price: 100000,
  totalVideos: 27,
  modules: [
    {
      videos: [
        { duration: '10:30' },
        { duration: '15:45' },
        { duration: '20:00' }
      ]
    },
    {
      videos: [
        { duration: '12:20' },
        { duration: '18:30' }
      ]
    }
  ],
  averageRating: 4.9,
  totalRatings: '200+',
  instructor: {
    _id: 'inst1',
    fullName: 'DSAM',
    email: 'odehsam555@gmail.com'
  },
  slug: 'kdp-success-guide'
};

export function FeaturedCourses() {

  const calculateDuration = (modules: any[]) => {
    let totalMinutes = 0;
    modules.forEach(module => {
      module.videos?.forEach((video: any) => {
        const [minutes, seconds] = video.duration.split(':').map(Number);
        totalMinutes += minutes + (seconds / 60);
      });
    });
    const hours = Math.floor(totalMinutes / 60);
    const mins = Math.round(totalMinutes % 60);
    return hours > 0 ? `${hours}+ hours` : `${mins} mins`;
  };

  // Smooth scroll function
  const scrollToGetStarted = () => {
    const element = document.getElementById('getstarted');
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="course" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Course Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src={course.thumbnail.url} 
                alt={course.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <motion.div 
                className="absolute bottom-6 left-6 right-36"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={circle} 
                      alt={course.instructor.fullName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-gray-900">Created by {course.instructor.fullName}</div>
                      <div className="text-sm text-primary">KDP Expert & Mentor</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-gray-700">
                        {course.averageRating.toFixed(1)} 
                        ({course.totalRatings} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Course Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-primary mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Premium Course
            </motion.div>
            
            <h2 className="mb-6 text-3xl md:text-4xl text-gray-900">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {course.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Video, value: course.totalVideos.toString(), label: 'Video Lessons', color: 'bg-blue-50 text-blue-600' },
                { icon: Clock, value: '11h+', label: 'Course Duration', color: 'bg-primary/10 text-primary' },
                { icon: Users, value: '700+', label: 'Students Enrolled', color: 'bg-green-50 text-green-600' },
                { icon: FileText, value: '10+', label: 'Resources & Tools', color: 'bg-purple-50 text-purple-600' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center mb-8">
              {/* Price */}
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <span className="text-4xl text-gray-900">₦100,000</span>
                </div>
              </motion.div>

              {/* Get Started Button */}
              <motion.button 
                onClick={scrollToGetStarted}
                className="px-4 py-3 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Click to Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
