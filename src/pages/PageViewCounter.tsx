
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, Code, Database, Zap, Github, Linkedin, ExternalLink, Copy, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PageViewCounter = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const firebaseConfigCode = `<script>
  window.myFirebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-PROJECT.firebaseapp.com",
    databaseURL: "YOUR-DB-URL",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR-SENDER-ID",
    appId: "YOUR-APP-ID"
  };
</script>`;

  const implementationCode = `<!-- Firebase Loader -->
<script src="https://widgetdeck.netlify.app/firebase-loader.js"></script>

<!-- Page View Counter Badge -->
<script src="https://widgetdeck.netlify.app/lh-pageview-badge.js"></script>`;

  const stylingCode = `.lh-pageview-badge {
  position: fixed;
  top: 50px;
  right: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-family: 'Arial', sans-serif;
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6">
            <Eye className="w-10 h-10" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Firebase Page View Counter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track your website's page views in real-time with our Firebase-powered counter. 
            Easy to implement, beautiful to display, and completely customizable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8">
              Get Started Now
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/helpert-widgets-kt">
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8">
                View All Widgets
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-300">1. Firebase Setup</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure your Firebase project and add the configuration to your website
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-300">2. Add Scripts</CardTitle>
                <CardDescription className="text-gray-400">
                  Include our lightweight JavaScript files to enable page view tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-300">3. Start Tracking</CardTitle>
                <CardDescription className="text-gray-400">
                  Your page views are automatically tracked and displayed in real-time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Setup Guide Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Setup Guide
          </h2>
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Firebase Configuration
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Add your Firebase configuration to your HTML head section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                    <code>{firebaseConfigCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(firebaseConfigCode, 'firebase-config')}
                  >
                    {copiedCode === 'firebase-config' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Implementation
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Include the required scripts in your HTML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                    <code>{implementationCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(implementationCode, 'implementation')}
                  >
                    {copiedCode === 'implementation' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Styling (Optional)
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Customize the appearance and position of your counter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-gray-900 p-4 rounded-lg text-blue-400 text-sm overflow-x-auto">
                    <code>{stylingCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(stylingCode, 'styling')}
                  >
                    {copiedCode === 'styling' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Demo Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Live Demo
          </h2>
          <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4">
                  👁️ 1,247 Page Views
                </div>
                <p className="text-gray-400 mb-4">This is how your page view counter will look</p>
                <p className="text-sm text-gray-500">
                  Position and styling can be fully customized with CSS
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">Is it free to use?</CardTitle>
                <CardDescription className="text-gray-400">
                  Yes! The widget is completely free. You only pay for Firebase usage, which has generous free tiers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">How accurate is the counting?</CardTitle>
                <CardDescription className="text-gray-400">
                  Each page load is counted once per session, preventing inflated numbers from page refreshes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">Can I customize the design?</CardTitle>
                <CardDescription className="text-gray-400">
                  Absolutely! Use CSS to change colors, position, size, and styling to match your website.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">Does it work on all websites?</CardTitle>
                <CardDescription className="text-gray-400">
                  Yes! It works on any website that supports JavaScript and can connect to Firebase.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <Card className="bg-gray-800/50 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-300 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Counter not showing?
                </CardTitle>
                <CardDescription className="text-gray-400">
                  1. Check your Firebase configuration<br/>
                  2. Ensure scripts are loaded in correct order<br/>
                  3. Check browser console for errors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-300 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Numbers not updating?
                </CardTitle>
                <CardDescription className="text-gray-400">
                  1. Verify Firebase Database rules allow writes<br/>
                  2. Check network connectivity<br/>
                  3. Clear browser cache and reload
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Pro Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-300 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Performance
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Load scripts at the bottom of your page for better performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-300 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Security
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Set up Firebase security rules to prevent unauthorized access
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-300 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Analytics
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Use Firebase Analytics for deeper insights into your traffic
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Author Credit Section */}
        <section className="mb-20">
          <Separator className="mb-12 bg-purple-500/20" />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Created by Md Arsalan
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Full-stack developer passionate about creating useful tools and widgets 
              for the web development community. Connect with me for collaborations and feedback.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/mdarsalan-c30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
              <a 
                href="https://www.linkedin.com/in/md-arsalan-web/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageViewCounter;
