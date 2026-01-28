import React, { useState } from 'react';
import { Star, Quote, Play, TrendingUp, Award, CheckCircle, ArrowRight, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';


export function GetStarted() {
  
  return (
    <div className="bg-white">
 
      {/* CTA Section */}
      <section className="py-16 mb-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto rounded-3xl p-12 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Join our community and start your journey to financial freedom through KDP publishing
            </p>
            <a href="https://t.me/DsamkdpConsult" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
