import Experience from "@/components/ui/Experience";
import Education from "@/components/ui/Education";
import Introduction from "@/components/ui/Introduction";

export default function Home() {
  return (
    <main className="min-h-screen xs:p-24">
      <div className="mt-3 flex flex-col lg:flex-row justify-center gap-3 pb-3">
        <div className="flex flex-col gap-3">
          <Introduction></Introduction>
        </div>
        <div className="flex flex-col gap-3">
          <Experience></Experience>
          <Education></Education>
        </div>
      </div>
    </main>
  );
}
