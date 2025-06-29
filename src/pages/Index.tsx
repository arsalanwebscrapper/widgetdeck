
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Palette, Github, ExternalLink, Users, MessageSquare, Activity, FileText, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8 shadow-lg">
            <Activity className="w-12 h-12" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            WIDGETDECK
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Innovative, lightweight, and privacy-focused web widgets to enhance website functionality and user engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/user-guide">
              <Button size="lg" className="px-8 py-3 text-lg">
                Get Started
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://widgetdeck.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                View Live Demo
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose WIDGETDECK?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Privacy-First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Widgets connect directly to your Firebase project, ensuring 100% data control with no third-party storage
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Simple scripts and customizable CSS make implementation straightforward, even for beginners
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Real-Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Powered by Firebase Realtime Database, widgets update instantly for seamless user experience
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Customizable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  CSS classes allow styling to match your brand perfectly with complete design flexibility
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Widgets */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Featured Widgets
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                  Comment System Widget
                </CardTitle>
                <CardDescription className="text-lg">
                  Interactive comment box with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Embeds seamlessly into any webpage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Optional name input for user identification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Stores comments in your Firebase project
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Real-time comment display and updates
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-800">
                    {'<script src="https://widgetdeck.netlify.app/lh-comment-box.js"></script>'}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-8 h-8 text-green-600" />
                  Active Users Badge Widget
                </CardTitle>
                <CardDescription className="text-lg">
                  Live user counter with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Shows live user count (e.g., "🟢 5 online")
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Tracks users via Firebase's online_users node
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Increases user engagement and trust
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Lightweight and performance optimized
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-800">
                    {'<script src="https://widgetdeck.netlify.app/lh-active-users.js"></script>'}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Developed by Md Arsalan
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              A skilled web developer passionate about creating user-friendly, open-source solutions that empower websites with interactive features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/mdarsalan-c30" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="px-8">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/md-arsalan-web/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="px-8">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Setup Firebase</h3>
              <p className="text-gray-600">
                Create a Firebase project and configure it for your website's data storage needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Add Scripts</h3>
              <p className="text-gray-600">
                Include the Firebase loader and widget-specific scripts in your HTML.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Customize & Deploy</h3>
              <p className="text-gray-600">
                Style with CSS and deploy your enhanced website with interactive widgets.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Enhance Your Website?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join developers who trust WIDGETDECK for scalable, privacy-focused web widgets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user-guide">
                <Button size="lg" className="px-8 py-3 text-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  View User Guide
                </Button>
              </Link>
              <a href="https://widgetdeck.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Live Site
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
