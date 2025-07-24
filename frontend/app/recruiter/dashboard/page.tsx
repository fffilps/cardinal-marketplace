"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  X,
  MapPin,
  DollarSign,
  Clock,
  Users,
  MessageCircle,
  Settings,
  User,
  Briefcase,
  Plus,
  Eye,
  Filter,
} from "lucide-react"

// Mock data
const candidateCards = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    experience: "5-7 years",
    location: "Remote",
    salary: "$120k - $150k",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    bio: "Passionate about creating beautiful, performant web applications. Led frontend teams at 2 startups.",
    workPreference: "Remote",
    name: "Sarah Chen", // Hidden initially
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    experience: "3-5 years",
    location: "San Francisco, CA",
    salary: "$100k - $130k",
    skills: ["Node.js", "React", "Python", "PostgreSQL", "Docker"],
    bio: "Full-stack developer with a passion for clean code and scalable architecture. Love solving complex problems.",
    workPreference: "Hybrid",
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    experience: "4-6 years",
    location: "Austin, TX",
    salary: "$110k - $140k",
    skills: ["Kubernetes", "AWS", "Terraform", "Python", "Jenkins"],
    bio: "Infrastructure enthusiast focused on automation and reliability. Built CI/CD pipelines for high-traffic apps.",
    workPreference: "On-site",
    name: "Jordan Kim",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

const jobPosts = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "$120k - $150k",
    applicants: 24,
    matches: 8,
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$110k - $140k",
    applicants: 18,
    matches: 5,
    status: "Active",
  },
]

export default function RecruiterDashboard() {
  const [currentTab, setCurrentTab] = useState("candidates")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [revealedCandidates, setRevealedCandidates] = useState<number[]>([])

  const currentCard = candidateCards[currentCardIndex]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      // Handle match
      console.log("Interested in candidate:", currentCard.title)
      setRevealedCandidates([...revealedCandidates, currentCard.id])
    }

    // Move to next card
    if (currentCardIndex < candidateCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    } else {
      setCurrentCardIndex(0) // Loop back for demo
    }
    setShowDetails(false)
  }

  const isRevealed = revealedCandidates.includes(currentCard?.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            <Link href="/recruiter/matches">
              <Button variant="ghost" size="sm" className="relative">
                <MessageCircle className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  5
                </Badge>
              </Button>
            </Link>
            <Link href="/recruiter/profile">
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
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="candidates" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Review Candidates</span>
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Manage Jobs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="space-y-6">
            <div className="max-w-md mx-auto">
              {/* Filters */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Filtering for: Senior Frontend Developer</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Candidate Card Stack */}
              <div className="relative h-[600px] mb-6">
                {currentCard && (
                  <Card
                    className="absolute inset-0 cursor-pointer transition-transform hover:scale-[1.02] shadow-xl"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={
                              isRevealed
                                ? currentCard.avatar
                                : "/placeholder.svg?height=64&width=64&query=anonymous+profile"
                            }
                            alt="Candidate"
                          />
                          <AvatarFallback>
                            {isRevealed
                              ? currentCard.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                              : "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{currentCard.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-gray-700">
                            {isRevealed ? currentCard.name : "Anonymous Candidate"}
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
                          <span>{currentCard.experience}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {currentCard.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-gray-700">{currentCard.bio}</p>

                      {showDetails && (
                        <div className="space-y-4 pt-4 border-t">
                          <div>
                            <h4 className="font-semibold mb-2">Work Preference</h4>
                            <Badge variant="outline">{currentCard.workPreference}</Badge>
                          </div>

                          {isRevealed && (
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <h4 className="font-semibold text-green-800 mb-2">🎉 It's a Match!</h4>
                              <p className="text-sm text-green-700">
                                You can now see the full profile and start a conversation.
                              </p>
                            </div>
                          )}
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
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  onClick={() => handleSwipe("right")}
                >
                  <Heart className="w-8 h-8 text-white" />
                </Button>
              </div>

              <div className="text-center mt-4 space-y-2">
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span>Pass</span>
                  <span>Good Fit</span>
                </div>
                <p className="text-xs text-gray-500">
                  Candidate {currentCardIndex + 1} of {candidateCards.length}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Job Posts</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </div>

            <div className="grid gap-6">
              {jobPosts.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-2">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{job.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{job.applicants} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{job.matches} matches</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Matches
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
