/**
 * Duro Event Management Showcase - Screenshot Page
 *
 * Temporary page for taking Duro Safari component screenshot
 */

"use client";

import { Safari } from "@/components/ui/safari";

export default function DuroShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-sage-50 relative">
      {/* Safari Component - positioned naturally */}
      <div className="absolute top-0 left-0 pt-12 pl-12" style={{ width: '1300px' }}>
        <Safari
          url="app.joinduro.com/events"
          imageSrc="/events.png"
        />
      </div>

      {/* Square Screenshot Target Zone - overlaid on top */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ width: '800px', height: '800px' }}>
        {/* Corner Markers - Top Left */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Top Right */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-terracotta-500" />

        {/* Corner Markers - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-terracotta-500" />
      </div>
    </div>
  );
}
