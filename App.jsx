import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function LoomportLanding() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    contactMethod: '',
    contactDetails: '',
    role: '',
  });

  const [selectedRole, setSelectedRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactMethodPlaceholders = {
    whatsapp: '+82 10-1234-5678',
    line: 'Line ID',
    facebook: 'Facebook profile URL',
    email: 'your@email.com',
  };

  const countries = [
    'Thailand',
    'Vietnam',
    'Malaysia',
    'Indonesia',
    'Singapore',
    'Philippines',
    'Other',
  ];

  const buyerBenefits = [
    { icon: '✓', text: 'Access Korean Vintage Suppliers' },
    { icon: '✓', text: 'Small Orders OK (From 10pcs)' },
    { icon: '✓', text: 'Consolidated Shipping (Save 60%)' },
  ];

  const sellerBenefits = [
    { icon: '✓', text: 'Access Global Buyers' },
    { icon: '✓', text: 'Small Inventory Welcome' },
    { icon: '✓', text: 'Verified Partner Network' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactMethodChange = (method) => {
    setFormData((prev) => ({
      ...prev,
      contactMethod: method,
      contactDetails: '',
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
    setSelectedRole(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.country ||
      !formData.contactMethod ||
      !formData.contactDetails ||
      !formData.role
    ) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // Google Apps Script으로 데이터 전송
      const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzboP6OIBwvYQpkNbyTjZk5zzSZ_OJFqfUN7h4uYwOHeOI58zMADArymwubuwOD9Bif6w/exec';

      await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          country: '',
          contactMethod: '',
          contactDetails: '',
          role: '',
        });
        setSubmitted(false);
        setSelectedRole(null);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-emerald-200/30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            LOOMPORT
          </div>
          <div className="text-sm text-slate-600 hidden sm:block">Global Vintage B2B Platform</div>
        </div>
      </nav>

      {/* Hero Section with Global Network Background */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Background - Global Network Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-800 to-slate-900">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent"></div>
          
          {/* Network Graph SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid slice"
            style={{ opacity: 0.4 }}
          >
            <defs>
              {/* Glow filter for nodes */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient for connecting lines */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0.8)" />
              </linearGradient>
            </defs>
            
            {/* Define nodes */}
            {[
              { id: 0, x: 100, y: 120 },
              { id: 1, x: 800, y: 90 },
              { id: 2, x: 200, y: 480 },
              { id: 3, x: 750, y: 420 },
              { id: 4, x: 500, y: 300 },
              { id: 5, x: 850, y: 240 },
              { id: 6, x: 150, y: 360 },
              { id: 7, x: 700, y: 510 },
              { id: 8, x: 380, y: 105 }, // 상단 언발란스
              { id: 9, x: 550, y: 495 }, // 하단 언발란스
            ].map((node, idx) => {
              const otherNodes = [
                { id: 0, x: 100, y: 120 },
                { id: 1, x: 800, y: 90 },
                { id: 2, x: 200, y: 480 },
                { id: 3, x: 750, y: 420 },
                { id: 4, x: 500, y: 300 },
                { id: 5, x: 850, y: 240 },
                { id: 6, x: 150, y: 360 },
                { id: 7, x: 700, y: 510 },
                { id: 8, x: 380, y: 105 },
                { id: 9, x: 550, y: 495 },
              ];

              return (
                <g key={`node-${idx}`}>
                  {/* Connection lines with gradient */}
                  {otherNodes.map((otherNode) => {
                    const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                    // 0번과 1번 점 연결 (상단 좌우)
                    if (
                      node.id === 0 &&
                      otherNode.id === 1
                    ) {
                      return (
                        <line
                          key={`line-${node.id}-${otherNode.id}`}
                          x1={node.x}
                          y1={node.y}
                          x2={otherNode.x}
                          y2={otherNode.y}
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity="0.7"
                        />
                      );
                    }
                    // 기존 거리 기반 연결
                    if (
                      node.id < otherNode.id &&
                      distance < 550 &&
                      !(node.id === 0 && otherNode.id === 1)
                    ) {
                      return (
                        <line
                          key={`line-${node.id}-${otherNode.id}`}
                          x1={node.x}
                          y1={node.y}
                          x2={otherNode.x}
                          y2={otherNode.y}
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity="0.7"
                        />
                      );
                    }
                    return null;
                  })}

                  {/* Node circle with glow - different sizes */}
                  {idx === 4 ? (
                    // 가운데 점 (큰 크기 유지)
                    <>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="7"
                        fill="rgba(52, 211, 153, 1)"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="5"
                        fill="rgba(34, 197, 94, 0.9)"
                        className="animate-pulse"
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      />
                    </>
                  ) : (
                    // 가장자리 7개 점 (작은 크기)
                    <>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="4.5"
                        fill="rgba(52, 211, 153, 1)"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="3"
                        fill="rgba(34, 197, 94, 0.9)"
                        className="animate-pulse"
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Subtle Grid Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="rgba(16, 185, 129, 0.2)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Connect with<br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Korean Vintage Market
            </span>
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-emerald-100 mb-8 max-w-4xl mx-auto drop-shadow">
            Global B2B Platform for Vintage Clothing
          </p>
          <p className="text-lg md:text-2xl text-emerald-200/80 max-w-3xl mx-auto drop-shadow">
            Trade with verified Korean sellers & buyers worldwide
          </p>

          {/* Device Frames - Desktop */}
          <div className="relative mt-16 h-96 md:h-[500px] hidden md:flex items-center justify-center gap-8">
            {/* Mobile Phone Frame - Left */}
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="w-72 bg-slate-900 rounded-3xl border-8 border-slate-800 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="bg-slate-900 h-6 flex justify-center items-center">
                  <div className="w-40 h-5 bg-slate-900 rounded-b-2xl"></div>
                </div>
                {/* Screen */}
                <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 h-96 p-4">
                  <div className="space-y-3 text-left text-xs">
                    <div className="h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center px-3">
                      <span className="text-white font-bold text-sm">LOOMPORT</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded-full w-full"></div>
                      <div className="h-3 bg-slate-200 rounded-full w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="h-12 bg-slate-200 rounded-lg"></div>
                      <div className="h-12 bg-slate-200 rounded-lg"></div>
                    </div>
                    <div className="space-y-2 pt-3">
                      <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-300 rounded-full w-4/5"></div>
                      <div className="h-2 bg-slate-300 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Frame - Right */}
            <div className="transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="w-96 bg-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                {/* Laptop Top Bezel */}
                <div className="bg-slate-700 h-8 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                </div>
                {/* Screen */}
                <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 h-64 p-6">
                  <div className="space-y-4 text-left text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">LOOMPORT</span>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2 border-b border-slate-200 pb-3">
                      <div className="h-3 bg-slate-200 rounded-full w-48"></div>
                      <div className="h-3 bg-slate-200 rounded-full w-40"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-slate-200 rounded-lg"></div>
                      <div className="h-10 bg-slate-200 rounded-lg"></div>
                      <div className="h-10 bg-slate-200 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-300 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
                {/* Laptop Bottom Bezel */}
                <div className="bg-slate-700 h-4"></div>
                {/* Stand */}
                <div className="flex justify-center pb-2">
                  <div className="w-32 h-2 bg-slate-600 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll CTA Button */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <button
              onClick={() => document.getElementById('role-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Start Now
            </button>
            <div className="text-white/60 animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section id="role-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">What are you looking for?</h2>
          <p className="text-slate-600 text-sm md:text-base">Choose your role to see relevant benefits</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Buyer Card */}
          <div
            onClick={() => handleRoleChange('Buyer')}
            className={`p-6 md:p-8 rounded-2xl border-2 transition-all cursor-pointer animate-slideInUp ${
              selectedRole === 'Buyer'
                ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                : 'border-slate-200 bg-white hover:border-emerald-300'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛍️</span> Buyer
            </h3>
            <div className="space-y-3">
              {buyerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-slate-700 text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Card */}
          <div
            onClick={() => handleRoleChange('Seller')}
            className={`p-6 md:p-8 rounded-2xl border-2 transition-all cursor-pointer animate-slideInUp ${
              selectedRole === 'Seller'
                ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                : 'border-slate-200 bg-white hover:border-emerald-300'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">📦</span> Seller
            </h3>
            <div className="space-y-3">
              {sellerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-slate-700 text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Both Card */}
          <div
            onClick={() => handleRoleChange('Both')}
            className={`p-6 md:p-8 rounded-2xl border-2 transition-all cursor-pointer animate-slideInUp ${
              selectedRole === 'Both'
                ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                : 'border-slate-200 bg-white hover:border-emerald-300'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🤝</span> Both
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-700 text-sm md:text-base">Full Access to Both Networks</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-700 text-sm md:text-base">Maximize Your Opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-700 text-sm md:text-base">Premium Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
            🌍 Get Early Access
          </h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Success!</h3>
              <p className="text-slate-600">We'll be in touch shortly. Thank you for joining us!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Business or Shop Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your business or shop name"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-base"
                  required
                />
              </div>

              {/* Country Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors appearance-none bg-white cursor-pointer text-base"
                    required
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Contact Method <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {['WhatsApp', 'Line', 'Facebook', 'Email'].map((method) => (
                    <label
                      key={method}
                      className="flex items-center p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-emerald-300 transition-colors"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={() => handleContactMethodChange(method)}
                        className="w-4 h-4 text-emerald-600 accent-emerald-600"
                        required
                      />
                      <span className="ml-3 text-slate-900 font-medium text-sm md:text-base">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              {formData.contactMethod && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {formData.contactMethod} Details <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactDetails"
                    value={formData.contactDetails}
                    onChange={handleInputChange}
                    placeholder={contactMethodPlaceholders[formData.contactMethod.toLowerCase()]}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-base"
                    required
                  />
                </div>
              )}

              {/* Role */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  I'm a: <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {['Buyer', 'Seller', 'Both'].map((role) => (
                    <label
                      key={role}
                      className="flex items-center p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-emerald-300 transition-colors"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={() => handleRoleChange(role)}
                        className="w-4 h-4 text-emerald-600 accent-emerald-600"
                        required
                      />
                      <span className="ml-3 text-slate-900 font-medium text-sm md:text-base">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-8 text-base md:text-lg"
              >
                {loading ? 'Submitting...' : 'Get Early Access'}
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">
                We'll reach out to you shortly to discuss partnership opportunities.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200/50 mt-12">
        <div className="text-center text-slate-600">
          <p className="mb-2 font-semibold text-slate-900">LOOMPORT</p>
          <p className="text-sm">Connecting Global Vintage Communities</p>
          <p className="text-xs mt-4">© 2025 LOOMPORT. All rights reserved.</p>
        </div>
      </section>

      {/* Tailwind Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInDown {
          animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
