"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Heart, X, MapPin, DollarSign, Clock, Users, MessageCircle, Settings, User, Star, Zap } from "lucide-react"

// Mock data
const jobCards = [
  {
    id: 1,
    company: "TechCorp",
    logo: "/placeholder.svg?height=60&width=60",
    title: "Senior Frontend Developer",
    location: "Remote",
    salary: "$120k - $150k",
    type: "Full-time",
    tags: ["React", "TypeScript", "Remote", "Fast-paced"],
    description: "Join our innovative team building the next generation of web applications.",
    culture: ["Work-Life Balance", "Innovation", "Remote-First"],
    whyUs: "We're revolutionizing how people interact with technology through beautiful, intuitive interfaces.",
  },
  {
    id: 2,
    company: "StartupXYZ",
    logo: "/placeholder.svg?height=60&width=60",
    title: "Full Stack Engineer",
    location: "San Francisco, CA",
    salary: "$100k - $130k",
    type: "Full-time",
    tags: ["Node.js", "React", "MongoDB", "Startup"],
    description: "Be part of a small, agile team building products that matter.",
    culture: ["Fast Growth", "Small Team", "Equity"],
    whyUs: "Ground floor opportunity to shape the future of our product and company.",
  },
  {
    id: 3,
    company: "Enterprise Solutions",
    logo: "/placeholder.svg?height=60&width=60",
    title: "Software Engineer",
    location: "New York, NY",
    salary: "$110k - $140k",
    type: "Full-time",
    tags: ["Java", "Spring", "AWS", "Enterprise"],
    description: "Work on large-scale systems serving millions of users.",
    culture: ["Stability", "Learning", "Mentorship"],
    whyUs: "Opportunity to work with cutting-edge technology at enterprise scale.",
  },
]

export default function CandidateDashboard() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const currentCard = jobCards[currentCardIndex]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      // Handle like/interest
      console.log("Interested in:", currentCard.title)
    }

    // Move to next card
    if (currentCardIndex < jobCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    } else {
      setCurrentCardIndex(0) // Loop back for demo
    }
    setShowDetails(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CareerMatch
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/candidate/matches">
              <Button variant="ghost" size="sm" className="relative">
                <MessageCircle className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  3
                </Badge>
              </Button>
            </Link>
            <Link href="/candidate/profile">
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Profile Completion Banner */}
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-800">Complete your profile</p>
                  <Progress value={75} className="mt-1 h-2" />
                  <p className="text-xs text-orange-600 mt-1">75% complete</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Card Stack */}
          <div className="relative h-[600px] mb-6">
            {currentCard && (
              <Card
                className="absolute inset-0 cursor-pointer transition-transform hover:scale-[1.02] shadow-xl"
                onClick={() => setShowDetails(!showDetails)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={currentCard.logo || "/placeholder.svg"} alt={currentCard.company} />
                      <AvatarFallback>{currentCard.company[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{currentCard.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        {currentCard.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{currentCard.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{currentCard.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentCard.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentCard.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-gray-700">{currentCard.description}</p>

                  {showDetails && (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Company Culture
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentCard.culture.map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Why Join Us?</h4>
                        <p className="text-sm text-gray-600">{currentCard.whyUs}</p>
                      </div>
                    </div>
                  )}

                  {!showDetails && (
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-500">Tap to see more details</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-8">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
              onClick={() => handleSwipe("left")}
            >
              <X className="w-8 h-8 text-red-500" />
            </Button>

            <Button
              size="lg"
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 relative"
            >
              <Zap className="w-6 h-6 text-white" />
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-900 text-xs px-1">3</Badge>
            </Button>

            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              onClick={() => handleSwipe("right")}
            >
              <Heart className="w-8 h-8 text-white" />
            </Button>
          </div>

          <div className="text-center mt-4 space-y-2">
            <div className="flex justify-center space-x-6 text-sm text-gray-600">
              <span>Pass</span>
              <span className="text-purple-600 font-medium">Super Apply</span>
              <span>Interested</span>
            </div>
            <p className="text-xs text-gray-500">
              Card {currentCardIndex + 1} of {jobCards.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
