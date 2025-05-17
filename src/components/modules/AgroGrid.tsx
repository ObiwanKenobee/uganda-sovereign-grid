
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Leaf, Sun, CloudRain, Thermometer, AlertTriangle, PieChart } from "lucide-react";

const AgroGrid: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">AgroGrid</h2>
        <p className="text-muted-foreground mt-2">
          Smart farming insights, weather forecasts, and AI crop analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Sun className="mr-2 h-5 w-5 text-amber-500" />
              Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold">27°C</p>
                <p className="text-sm text-muted-foreground">Partly Cloudy</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-amber-500"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Mon</p>
                <CloudRain className="h-5 w-5 mx-auto my-1" />
                <p className="text-sm font-medium">24°</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tue</p>
                <Sun className="h-5 w-5 mx-auto my-1" />
                <p className="text-sm font-medium">28°</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Wed</p>
                <Sun className="h-5 w-5 mx-auto my-1" />
                <p className="text-sm font-medium">29°</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Thu</p>
                <CloudRain className="h-5 w-5 mx-auto my-1" />
                <p className="text-sm font-medium">23°</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-ustg-green" />
              Crop Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full border-4 border-green-500 flex items-center justify-center">
                <span className="text-lg font-bold">85%</span>
              </div>
              <div>
                <p className="font-medium">Current Status: Good</p>
                <p className="text-sm text-muted-foreground">Last updated: 2h ago</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm flex items-center">
                  <Thermometer className="h-4 w-4 mr-1" /> Soil Moisture
                </span>
                <span className="text-sm font-medium">Optimal</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-ustg-green w-3/4 rounded-full" />
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm flex items-center">
                  <Sun className="h-4 w-4 mr-1" /> Sunlight
                </span>
                <span className="text-sm font-medium">Abundant</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-full rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-red-700">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Pest Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-3 border border-red-100">
              <p className="font-medium text-red-700">Fall Armyworm Detected</p>
              <p className="text-sm text-red-600 mt-1">
                Northern fields affected. Treatment recommended within 48 hours.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-medium">Recommended Action:</p>
              <ol className="list-decimal ml-4 text-sm mt-2 space-y-1">
                <li>Apply organic neem oil solution</li>
                <li>Set up pheromone traps on field perimeter</li>
                <li>Inspect crops daily for the next week</li>
              </ol>
              <p className="text-xs text-muted-foreground mt-2">
                Contact AgroGrid agent for assistance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="mr-2 h-5 w-5" />
            Harvest Predictions
          </CardTitle>
          <CardDescription>
            Based on current growth, weather, and historical data
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-ustg-green">18.5</div>
              <p className="font-medium">Expected Yield (tons)</p>
              <p className="text-sm text-muted-foreground">+2.3 tons vs last season</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-ustg-primary">Oct 15</div>
              <p className="font-medium">Optimal Harvest Date</p>
              <p className="text-sm text-muted-foreground">Weather conditions favorable</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-ustg-secondary">UGX 8.2M</div>
              <p className="font-medium">Projected Revenue</p>
              <p className="text-sm text-muted-foreground">Based on current market prices</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgroGrid;
