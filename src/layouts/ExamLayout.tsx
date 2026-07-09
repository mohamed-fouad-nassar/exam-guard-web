import { Outlet } from "react-router";
import TopNav from "@/components/layout/TopNav";
import AmbientBackground from "@/components/layout/AmbientBackground";

import { mockUser } from "@/lib/mock-user";
import ExamLayoutFooter from "@/components/layout/ExamLayoutFooter";

export default function ExamLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBackground />

      <TopNav
        userName={mockUser.name}
        userId={mockUser.id}
        className="w-full left-0"
      />

      <div className="flex min-h-screen pt-16">
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-container-padding py-8">
              <Outlet />
            </div>
          </div>

          <ExamLayoutFooter />
        </main>
      </div>
    </div>
  );
}
