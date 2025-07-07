import React, { useState, useEffect } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            ST
          </div>
          <span style={{ marginLeft: '12px', fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
            SaaS Tools Digital
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <button 
            onClick={() => setCurrentPage('home')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: currentPage === 'home' ? '#3b82f6' : '#6b7280',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('tools')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: currentPage === 'tools' ? '#3b82f6' : '#6b7280',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Browse Tools
          </button>
          <button 
            onClick={() => setCurrentPage('blog')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: currentPage === 'blog' ? '#3b82f6' : '#6b7280',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Blog
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: currentPage === 'about' ? '#3b82f6' : '#6b7280',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage('contact')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: currentPage === 'contact' ? '#3b82f6' : '#6b7280',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

// Footer Component  
const Footer = () => {
  return (
    <footer style={{ background: '#1f2937', color: 'white', padding: '3rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                ST
              </div>
              <span style={{ marginLeft: '12px', fontSize: '20px', fontWeight: 'bold' }}>
                SaaS Tools Digital
              </span>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
              Your ultimate guide to finding the perfect SaaS tools for your business. 
              AI-powered reviews and recommendations you can trust.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Browse Tools</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem' }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>CRM Software</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Project Management</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Email Marketing</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Analytics Tools</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <p style={{ color: '#9ca3af', margin: 0 }}>© 2025 SaaS Tools Digital. All rights reserved.</p>
          <p style={{ color: '#9ca3af', margin: 0 }}>🤖 Powered by AI • <a href="/privacy" style={{ color: '#9ca3af' }}>Privacy</a> • <a href="/terms" style={{ color: '#9ca3af' }}>Terms</a></p>
        </div>
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#374151', borderRadius: '8px' }}>
          <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
            <strong>FTC Disclosure:</strong> This website contains affiliate links. We may earn a commission when you make a purchase through these links at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Blog Post Component - FIXED TO RENDER HTML
const BlogPost = ({ slug, onBackToBlog }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API}/blog/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setError('Post not found');
      }
    } catch (err) {
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '18px', color: '#6b7280' }}>Loading article...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '18px', color: '#ef4444', marginBottom: '1rem' }}>{error}</div>
        <button onClick={onBackToBlog} style={{ 
          background: '#3b82f6', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer' 
        }}>
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <button onClick={onBackToBlog} style={{ 
            background: 'none', 
            border: 'none', 
            color: '#3b82f6', 
            cursor: 'pointer', 
            fontSize: '16px',
            marginBottom: '1rem'
          }}>
            ← Back to Blog
          </button>
        </div>
      </div>

      {/* Article */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <article style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          {/* Featured Image */}
          <img 
            src={post.featured_image} 
            alt={post.title}
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '2rem' 
            }}
          />

          {/* Meta Info */}
          <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.published_at).toLocaleDateString()}</span>
              <span>•</span>
              <span style={{ background: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                {post.category}
              </span>
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.tags.map((tag, index) => (
                <span key={index} style={{ 
                  background: '#f3f4f6', 
                  color: '#374151', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '4px', 
                  fontSize: '12px' 
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* FIXED: Render HTML content properly */}
          <div 
            style={{ 
              lineHeight: '1.7', 
              fontSize: '16px', 
              color: '#374151' 
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

// Blog List Component - FIXED TO RENDER HTML EXCERPTS  
const BlogList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API}/blog?limit=20`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '18px', color: '#6b7280' }}>Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            SaaS Tools Blog
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            AI-powered insights, reviews, and guides to help you choose the perfect software for your business.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => (
            <article key={post.id} style={{ 
              background: 'white', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            onClick={() => onPostClick(post.slug)}>
              
              <img 
                src={post.featured_image} 
                alt={post.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ 
                    background: '#dbeafe', 
                    color: '#1e40af', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '12px', 
                    fontWeight: '500' 
                  }}>
                    {post.category}
                  </span>
                </div>
                
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '0.5rem',
                  lineHeight: '1.3'
                }}>
                  {post.title}
                </h2>
                
                {/* FIXED: Render HTML excerpt properly */}
                <div 
                  style={{ 
                    color: '#6b7280', 
                    marginBottom: '1rem',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}
                  dangerouslySetInnerHTML={{ 
                    __html: post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + '...' : post.excerpt 
                  }}
                />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#9ca3af' }}>
                  <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  <span style={{ color: '#3b82f6', fontWeight: '500' }}>Read Full Review →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// Newsletter Signup Component
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '3rem 0' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
          Stay Updated with the Latest SaaS Insights
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
          Get weekly AI-powered reviews and recommendations delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            style={{
              background: '#1f2937',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Subscribe
          </button>
        </form>
        
        {status === 'success' && (
          <p style={{ color: 'white', marginTop: '1rem' }}>Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p style={{ color: '#fecaca', marginTop: '1rem' }}>Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
};

// Tool Card Component
const ToolCard = ({ tool }) => (
  <div style={{ 
    background: 'white', 
    borderRadius: '12px', 
    padding: '1.5rem', 
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  }}
  onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
    
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <img src={tool.logo_url} alt={tool.name} style={{ width: '48px', height: '48px', borderRadius: '8px', marginRight: '1rem' }} />
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{tool.name}</h3>
        <span style={{ background: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '12px' }}>
          {tool.category}
        </span>
      </div>
    </div>
    
    <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5' }}>{tool.short_description}</p>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#fbbf24', marginRight: '0.5rem' }}>★★★★★</span>
        <span style={{ fontSize: '14px', color: '#6b7280' }}>{tool.rating}</span>
      </div>
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937' }}>{tool.pricing_type}</span>
    </div>
    
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {tool.tags.slice(0, 3).map((tag, index) => (
        <span key={index} style={{ background: '#f3f4f6', color: '#374151', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '12px' }}>
          {tag}
        </span>
      ))}
    </div>
    
    <a 
      href={tool.affiliate_link || tool.website_url} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ 
        display: 'block', 
        width: '100%', 
        background: '#3b82f6', 
        color: 'white', 
        padding: '0.75rem', 
        textAlign: 'center', 
        textDecoration: 'none', 
        borderRadius: '6px', 
        fontWeight: '500',
        transition: 'background 0.2s'
      }}
      onMouseEnter={(e) => e.target.style.background = '#2563eb'}
      onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
    >
      Try {tool.name} →
    </a>
  </div>
);

// Home Page Component
const HomePage = ({ onBrowseTools, onBlogClick }) => {
  const [stats, setStats] = useState({ tools_count: 0, blog_posts_count: 0 });
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchFeaturedTools();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API}/stats`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchFeaturedTools = async () => {
    try {
      const response = await fetch(`${API}/tools?limit=6`);
      if (response.ok) {
        const data = await response.json();
        setTools(data);
      }
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Discover the Best <span style={{ background: 'linear-gradient(45deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SaaS Tools</span>
          </h1>
          <p style={{ fontSize: '24px', marginBottom: '2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 2rem' }}>
            AI-powered reviews and recommendations to help you find the perfect software solutions for your business
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={onBrowseTools}
              style={{ 
                background: 'white', 
                color: '#667eea', 
                padding: '1rem 2rem', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: '600', 
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Browse Tools
            </button>
            <button 
              onClick={onBlogClick}
              style={{ 
                background: 'transparent', 
                color: 'white', 
                padding: '1rem 2rem', 
                border: '2px solid white', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: '600', 
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = '#667eea'; }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
            >
              Read Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>
                {stats.tools_count}+
              </div>
              <div style={{ fontSize: '18px', color: '#6b7280' }}>SaaS Tools Reviewed</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>
                {stats.blog_posts_count}+
              </div>
              <div style={{ fontSize: '18px', color: '#6b7280' }}>In-Depth Articles</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                AI
              </div>
              <div style={{ fontSize: '18px', color: '#6b7280' }}>Powered Reviews</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
                24/7
              </div>
              <div style={{ fontSize: '18px', color: '#6b7280' }}>Updated Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Featured SaaS Tools
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>
              Hand-picked tools that are making waves in the business world
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={onBrowseTools}
              style={{ 
                background: '#3b82f6', 
                color: 'white', 
                padding: '1rem 2rem', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '16px', 
                fontWeight: '600', 
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2563eb'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              View All Tools →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlug, setCurrentSlug] = useState('');

  const handlePostClick = (slug) => {
    setCurrentSlug(slug);
    setCurrentPage('post');
    window.history.pushState({}, '', `/blog/${slug}`);
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    window.history.pushState({}, '', '/blog');
  };

  const handleBrowseTools = () => {
    setCurrentPage('tools');
    window.history.pushState({}, '', '/tools');
  };

  const handleBlogClick = () => {
    setCurrentPage('blog');
    window.history.pushState({}, '', '/blog');
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '/home') {
        setCurrentPage('home');
      } else if (path === '/tools') {
        setCurrentPage('tools');
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setCurrentSlug(slug);
        setCurrentPage('post');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Handle initial load

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'tools':
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Tools page coming soon...</div>;
      case 'blog':
        return <BlogList onPostClick={handlePostClick} />;
      case 'post':
        return <BlogPost slug={currentSlug} onBackToBlog={handleBackToBlog} />;
      case 'about':
        return <div style={{ padding: '2rem', textAlign: 'center' }}>About page coming soon...</div>;
      case 'contact':
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Contact page coming soon...</div>;
      default:
        return <HomePage onBrowseTools={handleBrowseTools} onBlogClick={handleBlogClick} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;
