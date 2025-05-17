
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowUpRight, ArrowDownLeft, CreditCard, Receipt, Plus, BarChart4 } from "lucide-react";

const Finance: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Finance</h2>
        <p className="text-muted-foreground mt-2">
          eUGX digital wallet, transactions, and government subsidies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-ustg-primary" />
              eUGX Wallet
            </CardTitle>
            <CardDescription>
              Your digital Ugandan Shillings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between md:items-end">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="text-4xl font-bold">UGX 1,245,300</p>
                <p className="text-sm text-green-600">+UGX 50,000 this month</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button className="flex-1 md:flex-initial" size="sm">
                  <ArrowUpRight className="mr-1.5 h-4 w-4" />
                  Send
                </Button>
                <Button variant="outline" className="flex-1 md:flex-initial" size="sm">
                  <ArrowDownLeft className="mr-1.5 h-4 w-4" />
                  Receive
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Recent Transactions</h3>
                <Button variant="link" className="text-sm p-0 h-auto">View all</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <ArrowDownLeft className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Subsidy Payment</p>
                      <p className="text-xs text-muted-foreground">Agriculture Support</p>
                    </div>
                  </div>
                  <p className="font-medium text-green-600">+UGX 50,000</p>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <ArrowUpRight className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Market Payment</p>
                      <p className="text-xs text-muted-foreground">Kampala Food Market</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-600">-UGX 15,000</p>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">School Fees Payment</p>
                      <p className="text-xs text-muted-foreground">Kampala Primary School</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-600">-UGX 100,000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="mr-2 h-5 w-5" />
              Subsidies
            </CardTitle>
            <CardDescription>Government support programs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 bg-green-50 border-green-100">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Agriculture</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Farming support</p>
              <div className="mt-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Monthly payment:</span>
                  <span className="font-medium">UGX 50,000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Next payment:</span>
                  <span>Oct 15, 2025</span>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Education</h3>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">School fees support</p>
              <div className="mt-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Approval status:</span>
                  <span>Under review</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                Check Status
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Apply for New Subsidy
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart4 className="mr-2 h-5 w-5" />
            Financial Analytics
          </CardTitle>
          <CardDescription>Your spending and income patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Monthly Income</p>
              <p className="text-2xl font-bold">UGX 350,000</p>
              <div className="flex items-center">
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+12% from last month</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
              <p className="text-2xl font-bold">UGX 215,600</p>
              <div className="flex items-center">
                <ArrowDownLeft className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm text-red-600">-5% from last month</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Savings Rate</p>
              <p className="text-2xl font-bold">38.4%</p>
              <div className="flex items-center">
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">Good saving habits</span>
              </div>
            </div>
          </div>

          <div className="mt-8 h-48 flex items-end">
            {/* Simple bar chart visualization */}
            <div className="flex-1 flex items-end justify-around h-full">
              {[65, 40, 70, 30, 62, 43, 50].map((height, index) => (
                <div key={index} className="w-8 rounded-t-sm bg-ustg-primary opacity-80" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="flex justify-around mt-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <div key={index} className="text-xs text-muted-foreground">{day}</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;
