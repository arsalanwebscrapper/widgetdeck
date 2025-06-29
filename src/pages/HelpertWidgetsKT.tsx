
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Copy, Check, ExternalLink, Code, Settings, Eye, FileText, BarChart3, Users, Upload, MessageSquare, Database } from 'lucide-react';
import { toast } from 'sonner';

const HelpertWidgetsKT = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(label);
      toast.success(`${label} copied to clipboard!`);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const widgets = [
    {
      id: 'firebase-config',
      title: 'Firebase Configuration',
      icon: <Database className="w-6 h-6" />,
      description: 'Mandatory setup for all widgets',
      type: 'setup',
      code: `<script>
  window.myFirebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-PROJECT.firebaseapp.com",
    databaseURL: "YOUR-DB-URL",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR-SENDER-ID",
    appId: "YOUR-APP-ID"
  };
</script>`,
      cssClass: 'N/A - Global Configuration'
    },
    {
      id: 'firebase-loader',
      title: 'Firebase Loader Utility',
      icon: <Code className="w-6 h-6" />,
      description: 'Include once before any widgets',
      type: 'setup',
      code: `<script src="https://widgetdeck.netlify.app/firebase-loader.js"></script>`,
      cssClass: 'N/A - Utility Script'
    },
    {
      id: 'feedback-widget',
      title: 'Feedback Widget',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Collect anonymous text feedback from users',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-feedback-widget.js"></script>`,
      cssClass: '.lh-feedback-widget',
      cssExample: `.lh-feedback-widget {
  position: fixed;
  top: 30px;
  right: 20px;
}`,
      pageRoute: '/lh-feedback-widget'
    },
    {
      id: 'poll-widget',
      title: 'Polling Widget',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Run anonymous multiple-choice polls with real-time results',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-poll-widget.js"></script>`,
      cssClass: '.lh-poll-widget',
      cssExample: `.lh-poll-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
      pageRoute: '/lh-poll-widget'
    },
    {
      id: 'active-users',
      title: 'Active Users Badge',
      icon: <Users className="w-6 h-6" />,
      description: 'Show number of live users currently on the page',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-active-users.js"></script>`,
      cssClass: '.lh-active-users-badge',
      cssExample: `.lh-active-users-badge {
  position: fixed;
  bottom: 10px;
  left: 20px;
}`,
      pageRoute: '/lh-active-users'
    },
    {
      id: 'pageview-badge',
      title: 'Pageview Counter Badge',
      icon: <Eye className="w-6 h-6" />,
      description: 'Display a small badge showing total pageviews',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-pageview-badge.js"></script>`,
      cssClass: '.lh-pageview-badge',
      cssExample: `.lh-pageview-badge {
  position: fixed;
  top: 50px;
  right: 30px;
}`,
      pageRoute: '/lh-pageview-badge'
    },
    {
      id: 'pageview-bar',
      title: 'Pageview Bar',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Horizontal bar showing total pageviews at top or bottom',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-pageview-bar.js"></script>`,
      cssClass: '.lh-pageview-bar',
      cssExample: `.lh-pageview-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}`,
      pageRoute: '/lh-pageview-bar'
    },
    {
      id: 'file-upload',
      title: 'File Upload Widget',
      icon: <Upload className="w-6 h-6" />,
      description: 'Allow anonymous file uploads to Firebase Storage',
      type: 'widget',
      code: `<script src="https://widgetdeck.netlify.app/lh-file-upload.js"></script>`,
      cssClass: '.lh-file-upload',
      cssExample: `.lh-file-upload {
  position: fixed;
  top: 30px;
  left: 30px;
}`,
      pageRoute: '/lh-file-upload'
    }
  ];

  const setupWidgets = widgets.filter(w => w.type === 'setup');
  const regularWidgets = widgets.filter(w => w.type === 'widget');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WIDGETDECK
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete documentation for embedding and configuring WIDGETDECK widgets. 
            Clear instructions for beginners and advanced users alike.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Firebase Integration
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Plug & Play
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              CSS Customizable
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="widgets">Widgets</TabsTrigger>
            <TabsTrigger value="styling">Styling Guide</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Quick Start Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">1. Configure Firebase</h4>
                    <p className="text-sm text-gray-600">Set up your Firebase configuration globally</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">2. Load Firebase Utility</h4>
                    <p className="text-sm text-gray-600">Include the Firebase loader script</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">3. Add Widgets</h4>
                    <p className="text-sm text-gray-600">Include widget scripts as needed</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">4. Style & Position</h4>
                    <p className="text-sm text-gray-600">Customize with CSS classes</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Firebase-powered backend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Anonymous user interactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Real-time data updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">CSS-customizable positioning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Easy embed integration</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Setup Tab */}
          <TabsContent value="setup">
            <div className="space-y-6">
              {setupWidgets.map((widget) => (
                <Card key={widget.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {widget.icon}
                      {widget.title}
                      <Badge variant="outline">Required</Badge>
                    </CardTitle>
                    <CardDescription>{widget.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">Code to Include:</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(widget.code, widget.title)}
                            className="flex items-center gap-2"
                          >
                            {copiedCode === widget.title ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            Copy
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{widget.code}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Widgets Tab */}
          <TabsContent value="widgets">
            <div className="grid gap-6">
              {regularWidgets.map((widget) => (
                <Card key={widget.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {widget.icon}
                      {widget.title}
                    </CardTitle>
                    <CardDescription>{widget.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">HTML Include:</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(widget.code, `${widget.title} HTML`)}
                            className="flex items-center gap-2"
                          >
                            {copiedCode === `${widget.title} HTML` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            Copy
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{widget.code}</code>
                        </pre>
                      </div>
                      
                      {widget.cssExample && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">CSS Styling:</h4>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(widget.cssExample!, `${widget.title} CSS`)}
                              className="flex items-center gap-2"
                            >
                              {copiedCode === `${widget.title} CSS` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              Copy
                            </Button>
                          </div>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{widget.cssExample}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{widget.cssClass}</Badge>
                        <span className="text-sm text-gray-600">CSS Class for Styling</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Styling Guide Tab */}
          <TabsContent value="styling">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Styling Guidelines</CardTitle>
                  <CardDescription>
                    How to customize widget appearance and positioning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">What's Controlled Internally:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Width and padding</li>
                        <li>• Font styles and sizes</li>
                        <li>• Colors and backgrounds</li>
                        <li>• Internal layout</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What You Can Customize:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Position (fixed, absolute, relative)</li>
                        <li>• Margins and alignment</li>
                        <li>• Z-index for layering</li>
                        <li>• Visibility and display</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Positioning Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      {
                        title: 'Top Right Corner',
                        code: `.widget-class {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}`
                      },
                      {
                        title: 'Bottom Left Corner',
                        code: `.widget-class {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}`
                      },
                      {
                        title: 'Center Bottom',
                        code: `.widget-class {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}`
                      },
                      {
                        title: 'Full Width Bar',
                        code: `.widget-class {
  position: fixed;
  top: 0; /* or bottom: 0 */
  left: 0;
  right: 0;
  z-index: 1000;
}`
                      }
                    ].map((example) => (
                      <div key={example.title} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{example.title}</h5>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(example.code, example.title)}
                            className="flex items-center gap-2"
                          >
                            {copiedCode === example.title ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            Copy
                          </Button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-gray-600">
            <strong>All widgets load Firebase independently via loadFirebase() utility.</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Styling: Position is controlled by user CSS via class selectors. 
            Configuration parameters can optionally be passed via window.myFirebaseConfig.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpertWidgetsKT;
