
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink, Code, Database, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6">
            <Code className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            WIDGETDECK
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional widget documentation and implementation system. 
            Everything you need to understand, implement, and customize WIDGETDECK widgets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                Documentation
              </CardTitle>
              <CardDescription>
                Complete guide with code examples and setup instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/helpert-widgets-kt">
                <Button className="w-full">
                  View Documentation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-600" />
                Page View Counter
              </CardTitle>
              <CardDescription>
                Professional landing page for Firebase-based page view tracking widget
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/lh-pageview-counter">
                <Button variant="outline" className="w-full">
                  View Landing Page
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 text-green-600" />
                Firebase Setup
              </CardTitle>
              <CardDescription>
                Learn how to configure Firebase for all widgets with step-by-step instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/helpert-widgets-kt">
                <Button variant="outline" className="w-full">
                  Setup Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-600" />
                Widget Library
              </CardTitle>
              <CardDescription>
                Browse all available widgets with code examples and styling options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/helpert-widgets-kt">
                <Button variant="outline" className="w-full">
                  Browse Widgets
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Access the complete documentation with interactive code examples, 
              setup guides, and styling customization options.
            </p>
            <Link to="/helpert-widgets-kt">
              <Button size="lg" className="px-8">
                Open Documentation
                <FileText className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
