"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ArrowLeft, Camera, Plus, X, Building, Users, MapPin, Globe } from "lucide-react"

export default function RecruiterProfile() {
  const [cultureTags, setCultureTags] = useState(["Fast-paced", "Innovation", "Remote-first", "Work-life balance"])
  const [newTag, setNewTag] = useState("")

  const addCultureTag = () => {
    if (newTag.trim() && cultureTags.length < 8) {
      setCultureTags([...cultureTags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeCultureTag = (tagToRemove: string) => {
    setCultureTags(cultureTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/recruiter/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cardinal
              </span>
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Save Profile
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Company Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-blue-600" />
                <span>Company Profile</span>
              </CardTitle>
              <CardDescription>Help candidates understand your company culture and values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                    variant="secondary"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Company Logo</h3>
                  <p className="text-sm text-gray-600">Upload your company logo to build brand recognition</p>
                </div>
              </div>

              {/* Company Info */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="TechCorp" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://techcorp.com" defaultValue="https://techcorp.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select defaultValue="51-200">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Headquarters</Label>
                <Input id="location" placeholder="San Francisco, CA" defaultValue="San Francisco, CA" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell candidates about your company mission and values..."
                  defaultValue="We're building the future of technology through innovative solutions that make people's lives better. Our team is passionate about creating products that scale globally."
                />
              </div>
            </CardContent>
          </Card>

          {/* Culture Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Company Culture</span>
              </CardTitle>
              <CardDescription>Add tags that describe your company culture and work environment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {cultureTags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1 pr-1">
                    <span>{tag}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-4 h-4 p-0 hover:bg-red-100"
                      onClick={() => removeCultureTag(tag)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>

              {cultureTags.length < 8 && (
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a culture tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addCultureTag()}
                  />
                  <Button onClick={addCultureTag} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <div className="text-sm text-gray-600">
                <p className="font-medium mb-2">Popular culture tags:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flexible hours",
                    "Learning & development",
                    "Diversity & inclusion",
                    "Startup environment",
                    "Mentorship",
                    "Competitive benefits",
                  ].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 bg-transparent"
                      onClick={() => {
                        if (!cultureTags.includes(suggestion) && cultureTags.length < 8) {
                          setCultureTags([...cultureTags, suggestion])
                        }
                      }}
                    >
                      + {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recruiter Info */}
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>This information will be visible to matched candidates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Johnson" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Your Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Senior Talent Acquisition Manager"
                  defaultValue="Senior Talent Acquisition Manager"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" defaultValue="sarah@techcorp.com" />
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Preview: How Candidates See Your Company</CardTitle>
            </CardHeader>
            <CardContent>
              <Card className="bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Senior Frontend Developer</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">TechCorp</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>51-200 employees</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>Technology</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cultureTags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm">
                    We're building the future of technology through innovative solutions that make people's lives
                    better.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
