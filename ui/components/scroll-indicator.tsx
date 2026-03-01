export default function ScrollIndicator() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted-foreground flex flex-col items-center gap-2 pointer-events-none">
      <span className="animate-slow-blink">Scroll to rotate</span>
      <div className="w-4 h-8 border border-muted-foreground rounded-full relative">
        <div className="w-1 h-1 bg-muted-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-2 animate-scroll-indicator" />
      </div>
    </div>
  );
}
