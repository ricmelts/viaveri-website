import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, Play, Users, Award, BookOpen, Upload, BookOpenCheck, Check, HelpCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <>
      <div className="relative overflow-hidden min-h-screen flex items-center py-20 pt-28 md:pt-32 bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 animate-gradient-x">
        {/* Background gradient orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-viapurple-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        
        <Container>
          <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center opacity-0">
            <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-success-400 mr-2"></span>
              Soft Launch is Live!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elevate Your Learning With <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-400 to-accent-400">Unification and Automation</span>
            </h1>
            
            <p className="text-lg text-viapurple-50/90 mb-8 max-w-2xl mx-auto">
              ViaLearn unifies student information sources and helps automate workflows like planning and fetching coursework to focus on learning.
              For teachers, ViaLearn's analytics provides pre-grading, performance reviews, plagiarism and AI-checking, and unparelleled end-to-end visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button 
                size="lg" 
                icon={<ArrowRight className="h-5 w-5" />} 
                iconPosition="right"
                onClick={() => setShowDownloadModal(true)}
              >
                Student Download
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 active:bg-white/20" 
                icon={<Play className="h-5 w-5" />}
                onClick={() => setShowVideo(true)}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Students Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-viapurple-600 mb-12 text-center">
              Students, save time.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <Upload className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Upload your syllabus and auto-plan all dates for the semester.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Upload an entire textbooks worth of material if you want, with images and all, then ask it questions!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <BookOpenCheck className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Pre-grade, check for plagiarism, and submit assignments without ever having to open Canvas.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-viapurple-600 mb-12 text-center">
              Teachers, help them shine.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <Check className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Pre-grade assignments to improve classroom performance before deadlines.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <HelpCircle className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Identify struggle points with increased accuracy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-viapurple-100 p-4 rounded-full mb-4">
                  <Users className="h-6 w-6 text-viapurple-600" />
                </div>
                <p className="text-gray-700">
                  Comprehensive and personalized student feedback.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Downloads Currently Closed</h3>
            <p className="text-gray-600 mb-6">
              Soft-launch downloads are now closed.
            </p>
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => setShowDownloadModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              size="sm"
              className="absolute -top-12 right-0 text-white border-white/20 hover:bg-white/10"
              onClick={() => setShowVideo(false)}
            >
              Close
            </Button>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Video Player */}
              <div className="relative pt-[56.25%]">
                {/* Replace the src below with your actual video URL */}
                {/* For YouTube: https://www.youtube.com/embed/VIDEO_ID */}
                {/* For Vimeo: https://player.vimeo.com/video/VIDEO_ID */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/xLhNE1cE_kQ?si=e3ezemogjfPTBRhg"
                  title="ViaLearn Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              {/* Video Info */}
              <div className="bg-gray-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">ViaLearn Platform Demo</h3>
                <p className="text-gray-300 text-sm">
                  See how ViaLearn unifies student information and automates workflows to help you focus on learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;