import Image from "next/image"
import { Users, Award, Globe, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About EcoShop</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest products while maintaining our commitment to sustainability and
          exceptional customer service.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2020, EcoShop began as a small startup with a big vision: to create an online marketplace that
              prioritizes quality, sustainability, and customer satisfaction above all else.
            </p>
            <p>
              What started as a passion project has grown into a trusted platform serving thousands of customers
              worldwide. We carefully curate every product in our catalog, ensuring that each item meets our high
              standards for quality and environmental responsibility.
            </p>
            <p>
              Today, we're proud to offer a diverse range of products from electronics to lifestyle goods, all while
              maintaining our core values of sustainability, quality, and exceptional customer service.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/image02.png"
            alt="Our team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected and tested.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-gray-600">Environmental responsibility is at the heart of everything we do.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help every step of the way.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our customers and partners.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Passionate about sustainable commerce and customer experience.",
            },
            {
              name: "Michael Chen",
              role: "Head of Product",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Expert in product curation and quality assurance.",
            },
            {
              name: "Emily Rodriguez",
              role: "Customer Success",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Dedicated to ensuring every customer has an amazing experience.",
            },
          ].map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">EcoShop by the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-100">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Countries Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-blue-100">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  )
}
