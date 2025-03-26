
import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

type ContentLoadingProps = {
  className?: string;
};

const ContentLoading: React.FC<ContentLoadingProps> = ({ className }) => {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="glass p-8 rounded-xl shadow-lg min-h-[400px] flex flex-col items-center justify-center">
        <Skeleton className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
        <Skeleton className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <Skeleton className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3" />
        <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-3" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default ContentLoading;
