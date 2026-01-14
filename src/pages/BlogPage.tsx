import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Clock, User, MessageSquare, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  comments: number;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Education: Transforming Learning Experiences",
    excerpt: "Explore how artificial intelligence is revolutionizing educational methodologies and creating personalized learning paths for students.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    comments: 24,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology"
  },
  {
    id: 2,
    title: "5 Essential Skills for Modern Software Developers",
    excerpt: "Discover the key skills and technologies that are shaping the future of software development and career growth.",
    author: "Michael Rodriguez",
    date: "March 14, 2025",
    readTime: "6 min read",
    comments: 18,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Career Development"
  },
  {
    id: 3,
    title: "Building Effective Learning Communities Online",
    excerpt: "Learn strategies for creating and nurturing engaging online learning communities that foster collaboration and growth.",
    author: "Emily Thompson",
    date: "March 13, 2025",
    readTime: "5 min read",
    comments: 12,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Community"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            ViaVeri <span className="text-viapurple-600">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and stories about education technology, learning innovation, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View All Posts
          </Button>
        </div>
      </Container>
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="relative mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className="absolute top-3 left-3 bg-viapurple-600 text-white text-xs px-2 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      
      <h2 className="text-xl font-semibold mb-2 hover:text-viapurple-600 transition-colors">
        <a href={`/blog/${post.id}`}>{post.title}</a>
      </h2>
      
      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {post.excerpt}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {post.comments} comments
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogPage;