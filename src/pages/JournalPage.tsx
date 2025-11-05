import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar } from "lucide-react";

const articles = [
  {
    title: "10 Makeup Tips for a Natural, Glowing Look",
    excerpt: "Discover the secrets to achieving that coveted natural glow with our expert makeup tips and techniques.",
    image: "https://images.unsplash.com/photo-1590171249256-ff77e45be1d2?w=800",
    category: "Makeup Tips",
    date: "November 1, 2025",
    readTime: "5 min read"
  },
  {
    title: "The Ultimate Guide to Clean Skincare",
    excerpt: "Learn everything you need to know about clean beauty and how to build an effective, sustainable skincare routine.",
    image: "https://images.unsplash.com/photo-1599847935464-fde3827639c2?w=800",
    category: "Skincare",
    date: "October 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "How to Choose the Perfect Lipstick Shade",
    excerpt: "Find your ideal lip color with our comprehensive guide to selecting the perfect shade for your skin tone.",
    image: "https://images.unsplash.com/photo-1752327091269-56857d148787?w=800",
    category: "Makeup Tips",
    date: "October 25, 2025",
    readTime: "6 min read"
  },
  {
    title: "Behind the Scenes: Our Product Development",
    excerpt: "Take a peek into our laboratory and discover how we create our signature beauty products.",
    image: "https://images.unsplash.com/photo-1552256028-2c58c3cbfa7a?w=800",
    category: "Brand Story",
    date: "October 20, 2025",
    readTime: "7 min read"
  },
  {
    title: "Sustainable Beauty: Our Commitment",
    excerpt: "Read about our journey towards sustainability and the steps we're taking to protect our planet.",
    image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=800",
    category: "Sustainability",
    date: "October 15, 2025",
    readTime: "5 min read"
  },
  {
    title: "Master Your Makeup Brushes",
    excerpt: "A complete guide to understanding which brushes to use and how to care for them properly.",
    image: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?w=800",
    category: "Tools & Techniques",
    date: "October 10, 2025",
    readTime: "6 min read"
  }
];

const categories = ["All", "Makeup Tips", "Skincare", "Brand Story", "Sustainability", "Tools & Techniques"];

export function JournalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4">THE JOURNAL</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beauty tips, product guides, and behind-the-scenes stories from the Harlette team
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto py-4 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border hover:bg-gray-100 transition-colors whitespace-nowrap text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-black text-white text-sm">
                FEATURED
              </span>
              <h2>{articles[0].title}</h2>
              <p className="text-gray-600">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {articles[0].date}
                </span>
                <span>{articles[0].readTime}</span>
              </div>
              <button className="text-sm underline hover:no-underline">
                READ MORE
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 rounded-lg bg-gray-100">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{article.category}</p>
                  <h3 className="group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
