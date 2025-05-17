
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, FileCheck, AlertTriangle, MessageCircle, FileText, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CivicCore: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Civic Core</h2>
        <p className="text-muted-foreground mt-2">
          Digital rights registry, citizen services, and community engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ScrollText className="mr-2 h-5 w-5" />
              Bill of Rights
            </CardTitle>
            <CardDescription>Uganda's Digital Citizens Charter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Right to Digital Access</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Every Ugandan citizen has the right to internet access and digital services.
                  </p>
                </div>
                <FileCheck className="h-5 w-5 text-blue-600 flex-shrink-0" />
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Right to Digital Privacy</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Personal data protection and consent-based information sharing.
                  </p>
                </div>
                <FileCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Right to Digital Education</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Access to digital learning and skills development.
                  </p>
                </div>
                <FileCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Complete Charter
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              File a Complaint
            </CardTitle>
            <CardDescription>Report issues to your digital ombudsman</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Your Recent Complaints</h3>
                
                <div className="mt-3 space-y-3">
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium">Water Access Issue</p>
                      <p className="text-xs text-muted-foreground">Filed on Oct 2, 2025</p>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      In Progress
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium">Road Maintenance Request</p>
                      <p className="text-xs text-muted-foreground">Filed on Sep 15, 2025</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Resolved
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">
                Submit New Complaint
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Community Forum
            </CardTitle>
            <CardDescription>Connect with your local community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium">Recent Discussions</h3>
              
              <div className="mt-3 space-y-3">
                <div className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">Community Farm Project</p>
                    <p className="text-xs text-muted-foreground">2h ago</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Discussion about the new community farming initiative...
                  </p>
                  <div className="flex items-center mt-1">
                    <Users className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">15 participants</span>
                  </div>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">School Renovation Plans</p>
                    <p className="text-xs text-muted-foreground">1d ago</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Updates on the primary school renovation schedule...
                  </p>
                  <div className="flex items-center mt-1">
                    <Users className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">28 participants</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              Join Forum
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Your Documents
          </CardTitle>
          <CardDescription>Securely stored official documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-12 h-16 bg-blue-50 border border-blue-200 rounded flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium">National ID</h3>
              <p className="text-xs text-muted-foreground mt-1">Issued Jan 2023</p>
              <Button variant="ghost" size="sm" className="mt-2">View</Button>
            </div>
            
            <div className="border rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-12 h-16 bg-green-50 border border-green-200 rounded flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium">Land Certificate</h3>
              <p className="text-xs text-muted-foreground mt-1">Issued Mar 2024</p>
              <Button variant="ghost" size="sm" className="mt-2">View</Button>
            </div>
            
            <div className="border rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-12 h-16 bg-amber-50 border border-amber-200 rounded flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium">Birth Certificate</h3>
              <p className="text-xs text-muted-foreground mt-1">Issued Jun 2000</p>
              <Button variant="ghost" size="sm" className="mt-2">View</Button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" size="sm">
              Request New Document
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CivicCore;
