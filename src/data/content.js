// Central content/data for the Healthify landing page.
// Keeping copy and config here keeps components clean and reusable.

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Growth Plans', href: '#plans' },
  { label: 'Blogs', href: '#testimonials' },
  { label: 'Contact Us', href: '#cta' },
]

export const STATS = [
  { icon: 'salad', value: '1M+', label: 'Meals Delivered' },
  { icon: 'leaf', value: '30K+', label: 'Happy Customers' },
  { icon: 'star', value: '4.8/5', label: 'Customer Satisfaction' },
  { icon: 'users', value: '550+', label: 'Corporate Clients' },
]

export const ABOUT_POINTS = [
  'Freshly Prepared Daily',
  'Balanced Nutrition',
  'Great Taste',
]

export const SERVICES = [
  {
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals prepared daily and ready to enjoy.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=70',
    alt: 'Bowl of colorful fresh salad with tomatoes',
  },
  {
    title: 'Customized Meal Plans',
    description: 'Personalized nutrition plans designed for your goals.',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=70',
    alt: 'Salmon dish with fresh greens',
  },
  {
    title: 'Weight Management Plans',
    description: 'Delicious meals to support your weight loss or maintenance journey.',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=70',
    alt: 'Meal prep containers with healthy food',
  },
  {
    title: 'High-Protein Meal Plans',
    description: 'Nutrient-rich meals for active lifestyles and fitness goals.',
    image:
      'https://images.unsplash.com/photo-1490645935987-3e3ac2e8c8a6?auto=format&fit=crop&w=800&q=70',
    alt: 'Protein-rich salad bowl with vegetables',
  },
]

export const ADVANTAGES = [
  {
    icon: 'gem',
    title: 'Premium Quality',
    description: 'High-quality, fresh ingredients',
  },
  {
    icon: 'heart',
    title: 'Health Focused',
    description: 'Nutritionist-designed meals',
  },
  {
    icon: 'truck',
    title: 'Convenient Delivery',
    description: 'To your home or office',
  },
  {
    icon: 'sprout',
    title: 'Flexible Plans',
    description: 'Options for every dietary need',
  },
]

export const PLANS = [
  {
    name: 'Essential Plan',
    description: 'Great for individuals starting their healthy journey.',
    price: 'AED 299',
    period: '/ month',
    image: null,
    featured: false,
    features: ['Fresh daily meals', 'Balanced nutrition', 'Flexible delivery'],
  },
  {
    name: 'Balanced Plan',
    description: 'Our best value plan for a healthier lifestyle.',
    price: 'AED 499',
    period: '/ month',
    image: null,
    featured: true,
    badge: 'Most Popular',
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
  },
  {
    name: 'Performance Plan',
    description: 'For fitness enthusiasts and active lifestyles.',
    price: 'AED 699',
    period: '/ month',
    image: null,
    featured: false,
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
  },
]

export const STEPS = [
  {
    number: '1',
    icon: 'user',
    title: 'Choose Your Plan',
    description: 'Select the meal plan that fits your goals.',
  },
  {
    number: '2',
    icon: 'chef-hat',
    title: 'We Prepare Fresh Meals',
    description: 'Our chefs prepare nutritious meals with care.',
  },
  {
    number: '3',
    icon: 'truck',
    title: 'Enjoy Convenient Delivery',
    description: 'Receive your meals and enjoy a healthier you.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"',
    name: 'Sara M.',
    location: 'Dubai, UAE',
    avatar: null,
  },
  {
    quote:
      '"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle."',
    name: 'Ahmed R.',
    location: 'Dubai, UAE',
    avatar: null,
  },
  {
    quote:
      '"Great quality, variety, and customer service. I feel healthier and more energized every day."',
    name: 'Fatima K.',
    location: 'Dubai, UAE',
    avatar: null,
  },
]

export const FAQS = [
  {
    question: 'What are your meal plans?',
    answer:
      'We offer three flexible plans — Essential, Balanced, and Performance — designed for different goals, from everyday healthy eating to high-protein fitness nutrition.',
  },
  {
    question: 'How does delivery work?',
    answer:
      'Meals are prepared fresh daily by our chefs and delivered to your home or office across Dubai in temperature-controlled boxes.',
  },
  {
    question: 'Can I customize my meals?',
    answer:
      'Yes! Every plan can be tailored to your dietary preferences, allergies, and macro targets. Our nutritionists will build the plan with you.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards as well as Apple Pay, Google Pay, and bank transfers for corporate clients.',
  },
  {
    question: 'Do you have a mobile app?',
    answer:
      'Yes, the Healthify app is available on iOS and Android, letting you manage your plan, pause deliveries, and track your nutrition on the go.',
  },
]

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Advantages', href: '#advantages' },
    { label: 'Growth Plans', href: '#plans' },
    { label: 'Blogs', href: '#testimonials' },
    { label: 'Contact Us', href: '#cta' },
  ],
  services: [
    'Healthy ready-to-eat meals',
    'Customized meal plans',
    'Weight management meal',
    'High-protein meal plans',
    'Corporate meal solutions',
    'Family nutrition optimization',
    'Healthy snacks and beverages',
    'Delivery and pickup services',
  ],
}

export const CONTACT = {
  location: 'Dubai, UAE',
  phone: '+971 50 352 6144',
  email: 'info@healthify.ae',
}
