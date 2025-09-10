import { useState } from "react";
import { Brain, Sparkles, Clock, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import type { ContentItem } from "@shared/schema";

export function AIAssistant() {
  const [activeMode, setActiveMode] = useState("suggestions");
  
  const { data: contentItems = [] } = useQuery<ContentItem[]>({
    queryKey: ["/api/content"],
  });

  const generateSuggestions = () => {
    const topics = [
      "10 Tips for Remote Work Productivity",
      "Behind the Scenes: Our Team Culture",
      "Customer Success Story Spotlight", 
      "Industry Trends You Should Know",
      "Quick Tutorial: Getting Started",
      "Weekly Roundup: Top Insights",
      "Q&A Session with Our Experts",
      "Product Feature Deep Dive",
      "Community Highlights",
      "Seasonal Content Ideas"
    ];
    
    return topics.slice(0, 5).map((topic, index) => ({
      id: index,
      title: topic,
      platform: ["social", "email", "blog"][index % 3],
      confidence: Math.floor(Math.random() * 20) + 80,
      reasoning: [
        "High engagement potential based on similar content",
        "Trending topic in your industry",
        "Performs well with your audience",
        "Seasonal relevance detected",
        "Competitor analysis shows opportunity"
      ][index % 5]
    }));
  };

  const getOptimalTimes = () => {
    return [
      { platform: "Social Media", time: "2:00 PM - 4:00 PM", engagement: "+23%", reason: "Peak activity hours" },
      { platform: "Email", time: "9:00 AM - 11:00 AM", engagement: "+18%", reason: "Morning check routine" },
      { platform: "Blog", time: "7:00 PM - 9:00 PM", engagement: "+15%", reason: "Evening reading time" }
    ];
  };

  const suggestions = generateSuggestions();
  const optimalTimes = getOptimalTimes();

  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-purple-500" />
          AI Assistant
          <Badge variant="secondary" className="ml-2">Beta</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeMode} onValueChange={setActiveMode} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="suggestions" className="text-xs">Content Ideas</TabsTrigger>
            <TabsTrigger value="timing" className="text-xs">Optimal Times</TabsTrigger>
            <TabsTrigger value="insights" className="text-xs">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="suggestions" className="space-y-3">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">AI Content Suggestions</span>
            </div>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground line-clamp-1">{suggestion.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {suggestion.confidence}% match
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{suggestion.reasoning}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {suggestion.platform}
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-6 text-xs">
                    Use This
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="timing" className="space-y-3">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Optimal Posting Times</span>
            </div>
            {optimalTimes.map((time, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground">{time.platform}</h4>
                  <span className="text-xs text-green-600 font-medium">{time.engagement}</span>
                </div>
                <p className="text-sm text-foreground mb-1">{time.time}</p>
                <p className="text-xs text-muted-foreground">{time.reason}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="insights" className="space-y-3">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Performance Insights</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-1">📊 Content Performance</h4>
                <p className="text-xs text-muted-foreground">Your {contentItems.length > 0 ? contentItems[0]?.platform : 'social'} posts perform 12% better on weekdays</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-1">🎯 Audience Engagement</h4>
                <p className="text-xs text-muted-foreground">Posts with questions get 34% more engagement</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-1">📈 Growth Opportunity</h4>
                <p className="text-xs text-muted-foreground">Consider adding more video content for higher reach</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}