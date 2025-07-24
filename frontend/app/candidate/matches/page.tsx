"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Heart, ArrowLeft, MessageCircle, Send, MapPin, DollarSign, Building } from "lucide-react"

// Mock matches data
const matches = [
  {
    id: 1,
    company: "TechCorp",
    logo: "/placeholder.svg?height=48&width=48",
    title: "Senior Frontend Developer",
    location: "Remote",
    salary: "$120k - $150k",
    matchedAt: "2 hours ago",
    lastMessage: "Hi! We'd love to chat about this role. When would be a good time for a quick call?",
    unread: true,
  },
  {
    id: 2,
    company: "StartupXYZ",
    logo: "/placeholder.svg?height=48&width=48",
    title: "Full Stack Engineer",
    location: "San Francisco, CA",
    salary: "$100k - $130k",
    matchedAt: "1 day ago",
    lastMessage: "Thanks for your interest! I'd like to learn more about your React experience.",
    unread: false,
  },
  {
    id: 3,
    company: "Enterprise Solutions",
    logo: "/placeholder.svg?height=48&width=48",
    title: "Software Engineer",
    location: "New York, NY",
    salary: "$110k - $140k",
    matchedAt: "3 days ago",
    lastMessage: "Great profile! Would you be open to discussing our team culture?",
    unread: false,
  },
]

export default function CandidateMatches() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/candidate/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CareerMatch
              </span>
            </Link>
          </div>

          <h1 className="text-xl font-semibold">Your Matches</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Matches List */}
          <div className="space-y-4">
            {matches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={match.logo || "/placeholder.svg"} alt={match.company} />
                      <AvatarFallback>
                        <Building className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{match.title}</h3>
                          <p className="text-gray-600">{match.company}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {match.unread && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
                          <span className="text-sm text-gray-500">{match.matchedAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{match.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{match.salary}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">{match.lastMessage}</p>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          🎉 Matched
                        </Badge>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chat Interface (for demo - would be a separate component/page) */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
                <div>
                  <span>TechCorp - Senior Frontend Developer</span>
                  <p className="text-sm text-gray-600 font-normal">Sarah from TechCorp</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      Hi! We'd love to chat about this role. When would be a good time for a quick call?
                    </p>
                    <span className="text-xs text-gray-500 mt-1 block">2 hours ago</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      Hi Sarah! I'm very interested in the role. I'm available for a call tomorrow afternoon or Friday
                      morning. What works best for you?
                    </p>
                    <span className="text-xs text-purple-100 mt-1 block">Just now</span>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex space-x-2 pt-4 border-t">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
