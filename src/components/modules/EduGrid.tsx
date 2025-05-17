
import React from 'react';
import { BookOpen, Video, Award, Book, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const courseData = [
  {
    title: "Mathematics",
    progress: 75,
    modules: 12,
    completedModules: 9,
    icon: <Book className="h-5 w-5" />
  },
  {
    title: "Science",
    progress: 60,
    modules: 10,
    completedModules: 6,
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "History",
    progress: 40,
    modules: 8,
    completedModules: 3,
    icon: <Clock className="h-5 w-5" />
  },
  {
    title: "Geography",
    progress: 90,
    modules: 5,
    completedModules: 4,
    icon: <Award className="h-5 w-5" />
  }
];

const EduGrid: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Edu-Grid</h2>
        <p className="text-muted-foreground mt-2">
          Access educational content offline, track your progress, and get help from AI tutors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            {courseData.map((course, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="p-1.5 rounded-md bg-ustg-blue/10 text-ustg-blue mr-2">
                      {course.icon}
                    </div>
                    <span className="font-medium">{course.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {course.progress}%
                  </span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="mt-1 text-xs text-muted-foreground text-right">
                  {course.completedModules}/{course.modules} modules
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Video Resources</CardTitle>
            <CardDescription>Available offline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative rounded-md overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Video className="h-12 w-12 text-muted-foreground opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-background/80 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-ustg-primary"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Introduction to Algebra</h3>
              <p className="text-sm text-muted-foreground">Learning basic algebraic equations and how to solve them</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>AI Tutor</CardTitle>
            <CardDescription>Get help with difficult concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4 bg-muted/50">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ustg-primary flex items-center justify-center text-white">
                  AI
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-sm">
                    Hello! I'm your AI tutor. What would you like help with today?
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex gap-2 flex-wrap">
                  <div className="bg-background rounded-full px-3 py-1 text-xs border">
                    Help with fractions
                  </div>
                  <div className="bg-background rounded-full px-3 py-1 text-xs border">
                    Explain photosynthesis
                  </div>
                  <div className="bg-background rounded-full px-3 py-1 text-xs border">
                    Practice equations
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EduGrid;
