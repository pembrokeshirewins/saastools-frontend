import React, { useState, useEffect } from "react";
import axios from "axios";

// Backend URL - YOUR RAILWAY API
const BACKEND_URL = "https://fastapi-production-e3a5.up.railway.app";
const API = `${BACKEND_URL}/api`;

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => navigate('home')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="font-bold text-xl text-gray-900">saastools.digital</span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigate('home')} className={`transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</button>
            <button onClick={() => navigate('tools')} className={`transition-colors ${currentPage === 'tools' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Browse Tools</button>
            <button onClick={() => navigate('blog')} className={`transition-colors ${currentPage === 'blog' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Blog</button>
            <button onClick={() => navigate('about')} className={`transition-colors ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</button>
            <button onClick={() => navigate('contact')} className={`transition-colors ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</button>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => navigate('home')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Home</button>
              <button onClick={() => navigate('tools')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Browse Tools</button>
              <button onClick={() => navigate('blog')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Blog</button>
              <button onClick={() => navigate('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">About</button>
              <button onClick={() => navigate('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Newsletter Signup Component
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/newsletter/subscribe`, { email, name });
      setStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Subscribe
      </button>
      {status === 'success' && <p className="text-green-400 text-sm">Successfully subscribed!</p>}
      {status === 'error' && <p className="text-red-400 text-sm">Subscription failed. Please try again.</p>}
    </form>
  );
};

// Footer Component with FTC Disclosure
const Footer = ({ setCurrentPage }) => {
  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="font-bold text-lg">saastools.digital</span>
            </div>
            <p className="text-gray-400">Discover the world's best SaaS tools — curated by AI.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate('tools')} className="hover:text-white transition-colors">Browse Tools</button></li>
              <li><button onClick={() => navigate('blog')} className="hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => navigate('categories')} className="hover:text-white transition-colors">Categories</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest SaaS insights and tool recommendations.</p>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400 space-y-2">
            <p>&copy; 2025 saastools.digital. Powered by AI Board. All rights reserved.</p>
            <p className="text-sm">
              <strong>FTC Disclosure:</strong> This website contains affiliate links. We may earn a commission 
              when you click on these links and make a purchase. This comes at no additional cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Tool Card Component
const ToolCard = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center mb-4">
        <img 
          src={tool.logo_url} 
          alt={tool.name}
          className="w-12 h-12 rounded-lg mr-4"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`;
          }}
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{tool.name}</h3>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">({tool.rating})</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{tool.short_description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags && tool.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">{tool.pricing_type}</span>
        <a 
          href={tool.affiliate_link || tool.website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
        >
          View Tool
        </a>
      </div>
    </div>
  );
};

// Blog List Component
const BlogList = ({ setCurrentPage, setBlogSlug }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchPosts();
  }, []);
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API}/blog`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const viewPost = (slug) => {
    setBlogSlug(slug);
    setCurrentPage('blogpost');
    window.history.pushState({}, '', `/blog/${slug}`);
    window.scrollTo(0, 0);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">SaaS Insights & Expert Reviews</h1>
          <p className="text-gray-600">AI-powered analysis of the best SaaS tools for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer" onClick={() => viewPost(post.slug)}>
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-blue-600 hover:text-blue-700 font-medium">
                  Read Full Review →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Post Detail Component
const BlogPost = ({ slug, setCurrentPage }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);
  
  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API}/blog/${slug}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const backToBlog = () => {
    setCurrentPage('blog');
    window.history.pushState({}, '', '/blog');
    window.scrollTo(0, 0);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <button onClick={backToBlog} className="text-blue-600 hover:text-blue-700">← Back to Blog</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={backToBlog} className="text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.published_at).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const [stats, setStats] = useState({});
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      // Fetch stats
      const statsResponse = await axios.get(`${API}/stats`);
      setStats(statsResponse.data);
      
      // Fetch tools
      const toolsResponse = await axios.get(`${API}/tools?limit=6`);
      setTools(toolsResponse.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the World's Best <span className="text-teal-300">SaaS Tools</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Curated by AI. Reviewed by experts. Find the perfect software solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Browse Tools
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Submit a Tool
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.tools_count || 0}+</div>
              <div className="text-gray-600">SaaS Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.blog_posts_count || 0}+</div>
              <div className="text-gray-600">Expert Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.submissions_count || 0}+</div>
              <div className="text-gray-600">User Submissions</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured SaaS Tools</h2>
            <p className="text-gray-600">Discover the most popular and highest-rated tools</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading tools...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.length > 0 ? (
                tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600">No tools available yet. Check back soon!</p>
                </div>
              )}
            </div>
          )}
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Tools
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Next Favorite Tool?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of businesses already using our AI-curated recommendations.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
            Start Exploring
          </button>
        </div>
      </section>
    </>
  );
};

// Main App Component with Routing
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogSlug, setBlogSlug] = useState('');
  
  // Simple routing based on URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/blog') {
      setCurrentPage('blog');
    } else if (path.startsWith('/blog/')) {
      setCurrentPage('blogpost');
      setBlogSlug(path.replace('/blog/', ''));
    } else {
      setCurrentPage('home');
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const newPath = window.location.pathname;
      if (newPath === '/blog') {
        setCurrentPage('blog');
      } else if (newPath.startsWith('/blog/')) {
        setCurrentPage('blogpost');
        setBlogSlug(newPath.replace('/blog/', ''));
      } else {
        setCurrentPage('home');
      }
    });
  }, []);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogList setCurrentPage={setCurrentPage} setBlogSlug={setBlogSlug} />;
      case 'blogpost':
        return <BlogPost slug={blogSlug} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
