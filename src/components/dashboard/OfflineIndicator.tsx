
import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [lastSynced, setLastSynced] = useState<string | null>(
    localStorage.getItem('lastSynced') || null
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSync = () => {
    if (!isOnline) return;
    
    // Simulate sync
    const now = new Date().toISOString();
    localStorage.setItem('lastSynced', now);
    setLastSynced(now);
  };

  const getLastSyncedText = () => {
    if (!lastSynced) return 'Never synced';
    
    try {
      const date = new Date(lastSynced);
      return `Last synced: ${date.toLocaleString()}`;
    } catch (e) {
      return 'Invalid sync date';
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-muted-foreground hidden md:inline">
          {getLastSyncedText()}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className={`gap-2 ${!isOnline ? 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:text-red-800' : ''}`}
              onClick={handleSync}
              disabled={!isOnline}
            >
              {isOnline ? (
                <Wifi className="h-4 w-4" />
              ) : (
                <WifiOff className="h-4 w-4 animate-pulse-slow" />
              )}
              <span className="hidden sm:inline">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {isOnline 
              ? 'You are online. Click to sync data.' 
              : 'You are currently offline. Data will sync when connection is restored.'}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default OfflineIndicator;
