import MainPage3D from "@/ui/components/main-page-3d";
import StartingPage from "@/ui/components/starting-page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted text-foreground transition-colors">
      {/* <StartingPage /> */}
      <div className="text-5xl w-screen h-screen" id="3D-wrapper">
        <MainPage3D />
      </div>
    </div>
  );
}
