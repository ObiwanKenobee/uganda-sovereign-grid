
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Clock, ArrowRight, FilePlus, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const HealthPods: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">HealthPods</h2>
        <p className="text-muted-foreground mt-2">
          AI-assisted healthcare, medical records, and health monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>
              Your scheduled health check-ups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/40 p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">General Health Check-up</p>
                  <p className="text-sm text-muted-foreground">Dr. Namugwanya Sarah</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Tomorrow</p>
                  <p className="text-sm text-muted-foreground">10:30 AM</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Vaccination - Polio</p>
                  <p className="text-sm text-muted-foreground">Mukono Health Center</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Oct 28, 2025</p>
                  <p className="text-sm text-muted-foreground">2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Follow-up Consultation</p>
                  <p className="text-sm text-muted-foreground">Dr. Okello Moses</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Nov 12, 2025</p>
                  <p className="text-sm text-muted-foreground">9:15 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Schedule New Appointment
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-red-500" />
              Health Stats
            </CardTitle>
            <CardDescription>
              Your recent health metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Blood Pressure</p>
                <p className="text-sm font-medium">120/80 <span className="text-green-600">Normal</span></p>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Blood Sugar</p>
                <p className="text-sm font-medium">5.2 mmol/L <span className="text-green-600">Normal</span></p>
              </div>
              <Progress value={50} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">BMI</p>
                <p className="text-sm font-medium">24.5 <span className="text-green-600">Normal</span></p>
              </div>
              <Progress value={70} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Vaccination Status</p>
                <p className="text-sm font-medium">8/10 <span className="text-amber-500">Due</span></p>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full flex items-center justify-between">
              <span>View Complete Health Record</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">AI Diagnosis</CardTitle>
            <CardDescription>Upload symptoms for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <FilePlus className="h-10 w-10 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground mt-2">
                Upload photo or describe symptoms for AI analysis
              </p>
              <Button size="sm" className="mt-4">Upload</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Medication</CardTitle>
            <CardDescription>Your current prescriptions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  P
                </div>
                <div>
                  <p className="font-medium">Paracetamol</p>
                  <p className="text-xs text-muted-foreground">500mg, twice daily</p>
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3">
                  A
                </div>
                <div>
                  <p className="font-medium">Amoxicillin</p>
                  <p className="text-xs text-muted-foreground">250mg, three times daily</p>
                </div>
              </div>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                3 days left
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-500" />
              Vitals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-2 border rounded-lg">
                <p className="text-xs text-muted-foreground">Heart Rate</p>
                <p className="text-2xl font-bold">72</p>
                <p className="text-xs">bpm</p>
              </div>
              
              <div className="text-center p-2 border rounded-lg">
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold">36.5</p>
                <p className="text-xs">°C</p>
              </div>
              
              <div className="text-center p-2 border rounded-lg">
                <p className="text-xs text-muted-foreground">SpO2</p>
                <p className="text-2xl font-bold">98</p>
                <p className="text-xs">%</p>
              </div>
              
              <div className="text-center p-2 border rounded-lg">
                <p className="text-xs text-muted-foreground">Weight</p>
                <p className="text-2xl font-bold">68</p>
                <p className="text-xs">kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthPods;
