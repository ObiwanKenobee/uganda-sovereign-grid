
import React from 'react';
import { BookOpen, Leaf, Heart, Wallet, Users, LayoutGrid } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ModuleCard from "@/components/dashboard/ModuleCard";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome to Uganda Sovereign Tech Grid</h1>
        <p className="text-muted-foreground mt-2">
          Your secure, offline-capable platform for essential digital services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCard
          title="Edu-Grid"
          description="Access educational content offline and track your learning progress"
          icon={<BookOpen className="h-6 w-6" />}
          color="bg-ustg-blue"
          path="/dashboard/edu-grid"
          stats={[
            { label: "Available Courses", value: 24 },
            { label: "Progress", value: "68%" },
          ]}
        />

        <ModuleCard
          title="AgroGrid"
          description="Smart farming insights and agricultural advisory services"
          icon={<Leaf className="h-6 w-6" />}
          color="bg-ustg-green"
          path="/dashboard/agrogrid"
          stats={[
            { label: "Crop Health", value: "Good" },
            { label: "Next Harvest", value: "Oct 15" },
          ]}
        />

        <ModuleCard
          title="HealthPods"
          description="AI-assisted healthcare and medical records"
          icon={<Heart className="h-6 w-6" />}
          color="bg-red-500"
          path="/dashboard/healthpods"
          stats={[
            { label: "Next Appointment", value: "Tomorrow" },
            { label: "Health Score", value: "Good" },
          ]}
        />

        <ModuleCard
          title="Finance"
          description="eUGX digital wallet and government subsidy access"
          icon={<Wallet className="h-6 w-6" />}
          color="bg-ustg-secondary"
          path="/dashboard/finance"
          stats={[
            { label: "Balance", value: "1.24M UGX" },
            { label: "Next Subsidy", value: "Oct 15" },
          ]}
        />

        <ModuleCard
          title="Civic Core"
          description="Digital rights registry and community engagement"
          icon={<Users className="h-6 w-6" />}
          color="bg-ustg-primary"
          path="/dashboard/civic-core"
          stats={[
            { label: "Documents", value: 3 },
            { label: "Complaints", value: 1 },
          ]}
        />

        <ModuleCard
          title="Tech Hub"
          description="Access developer resources and API documentation"
          icon={<LayoutGrid className="h-6 w-6" />}
          color="bg-ustg-dark"
          path="/dashboard/tech-hub"
          stats={[
            { label: "APIs", value: 12 },
            { label: "Status", value: "Online" },
          ]}
        />
      </div>

      <div className="bg-muted/30 rounded-lg p-4 mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Offline capabilities active</h3>
            <p className="text-sm text-muted-foreground">
              Your data will automatically sync when you regain internet connectivity
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              5 modules available offline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
