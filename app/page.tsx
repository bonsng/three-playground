import MainPage3D from "@/ui/components/main-page-3d";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans text-foreground transition-colors">
      <div
        className="text-5xl border border-red-500 w-screen h-screen"
        id="3D-wrapper"
      >
        <MainPage3D />
      </div>
    </div>
  );
}
