import { useMemo, useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import WindowsLogo from "@/components/site/WindowsLogo";
import { getAllLaptops, type Laptop, type Usage } from "../../shared/laptops";

function LaptopCard({ item, onPreview, canPreview }: { item: Laptop; onPreview: (item: Laptop) => void; canPreview: () => boolean }) {
  const handlePreview = () => {
    if (canPreview()) {
      onPreview(item);
    }
  };
  return (
    <div className="grid items-center gap-6 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border md:grid-cols-2">
      <div>
        <div className="text-sm text-muted-foreground">New</div>
        <h3 className="mt-1 text-3xl font-bold tracking-tight">{item.title}</h3>
        <p className="mt-2 text-muted-foreground">{item.specs}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-slate-400" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-500" />
          <span className="h-3 w-3 rounded-full bg-slate-200" />
          <span className="h-3 w-3 rounded-full bg-slate-700" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button className="px-6">Buy</Button>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{item.usage}</span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{item.priceSegment}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-full overflow-hidden rounded-xl border bg-muted/30" onMouseEnter={handlePreview} onTouchStart={handlePreview}>
          <img src={item.image} alt={item.title} className="h-64 w-full object-cover md:h-72" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const lastPlayedRef = useRef<{ [title: string]: number }>({});
  const lastGlobalPlayedRef = useRef<{ title: string; time: number }>({ title: '', time: 0 });
  const segments = ["40K", "50K", "60K", "70K", "80K", "90K"] as const;
  const usages: Usage[] = ["Student", "Creator", "Gaming"];

  const [selectedSegment, setSelectedSegment] = useState<null | Laptop["priceSegment"]>(null);
  const [selectedUsage, setSelectedUsage] = useState<null | Usage>(null);
  const [visible, setVisible] = useState(7);
  const [preview, setPreview] = useState<{ item: Laptop; muted: boolean } | null>(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const [specsExiting, setSpecsExiting] = useState(false);
  const [modalExiting, setModalExiting] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (preview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [preview]);

  // Handle smooth specs toggle
  const handleSpecsToggle = () => {
    if (showSpecs) {
      setSpecsExiting(true);
      setTimeout(() => {
        setShowSpecs(false);
        setSpecsExiting(false);
      }, 300); // Match the slideUp animation duration
    } else {
      setShowSpecs(true);
    }
  };

  // Handle smooth modal close
  const handleModalClose = () => {
    setModalExiting(true);
    setTimeout(() => {
      setPreview(null);
      setShowSpecs(false);
      setSpecsExiting(false);
      setModalExiting(false);
    }, 200); // Match the modalScaleOut animation duration
  };

  const randomized = useMemo(() => {
    return [...getAllLaptops()].sort(() => Math.random() - 0.5);
  }, []);

  const filtered = useMemo(() => {
    return randomized.filter((d) => (!selectedSegment || d.priceSegment === selectedSegment) && (!selectedUsage || d.usage === selectedUsage));
  }, [selectedSegment, selectedUsage, randomized]);

  const toShow = filtered.slice(0, visible);
  const canShowMore = filtered.length > toShow.length;

  // Helper to check if 3 seconds have passed for same video, and 1.5s for switching to another video
  const canPreview = (title: string) => {
    const now = Date.now();
    const last = lastPlayedRef.current[title] || 0;
    const lastGlobal = lastGlobalPlayedRef.current;
    // If switching to a different video, require 2.5s since last global play
    if (lastGlobal.title && lastGlobal.title !== title && now - lastGlobal.time < 2500) {
      return false;
    }
    // For same video, require 3s since last play
    if (now - last > 3000) {
      lastPlayedRef.current[title] = now;
      lastGlobalPlayedRef.current = { title, time: now };
      return true;
    }
    // If switching to a different video and enough time has passed
    if (lastGlobal.title !== title && now - lastGlobal.time >= 1500) {
      lastPlayedRef.current[title] = now;
      lastGlobalPlayedRef.current = { title, time: now };
      return true;
    }
    return false;
  };

  return (
    <div className="">
      {/* Hero with looping video */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-none sm:rounded-xl">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/main_loop.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center px-6 text-center text-white">
              <h1 className="text-4xl font-extrabold leading-tight drop-shadow-sm md:text-6xl">
                A new AI era begins
              </h1>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <WindowsLogo className="h-4 w-4" />
                <span>Windows 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline + Filters */}
      <section className="container mx-auto py-10">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          The fastest, most intelligent Windows PCs ever
        </h2>
        <div className="mt-6 flex flex-col items-center gap-4 text-sm">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="rounded-full px-4 py-1">
                Filter by
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Filters</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-xs font-medium uppercase text-muted-foreground">Price Segment</div>
                  <div className="flex flex-wrap gap-2">
                    {segments.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSegment((cur) => (cur === s ? null : s))}
                        className={cn(
                          "rounded-full border px-3 py-1 transition",
                          selectedSegment === s ? "bg-primary/10 text-primary border-primary/30" : "bg-background hover:bg-muted",
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs font-medium uppercase text-muted-foreground">Usage</div>
                  <div className="flex flex-wrap gap-2">
                    {usages.map((u) => (
                      <button
                        key={u}
                        onClick={() => setSelectedUsage((cur) => (cur === u ? null : u))}
                        className={cn(
                          "rounded-full border px-3 py-1 transition",
                          selectedUsage === u ? "bg-primary/10 text-primary border-primary/30" : "bg-background hover:bg-muted",
                        )}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  {(selectedSegment || selectedUsage) && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setSelectedSegment(null);
                        setSelectedUsage(null);
                      }}
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Catalog */}
        <div className="mt-10 grid gap-8">
          {toShow.map((item, i) => (
            <LaptopCard
              key={`${item.title}-${i}`}
              item={item}
              onPreview={(it) => setPreview({ item: it, muted: true })}
              canPreview={() => canPreview(item.title)}
            />
          ))}
        </div>

        {canShowMore && (
          <div className="mt-8 flex justify-center">
            <Button onClick={() => setVisible((v) => v + 7)} variant="secondary" className="px-6">
              View more
            </Button>
          </div>
        )}
      </section>

      {preview && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 ${modalExiting ? 'animate-fadeOut' : 'animate-fadeIn'}`} 
          onClick={handleModalClose}
        >
          <div 
            className={`relative h-[88vh] w-full max-w-5xl md:max-w-6xl ${modalExiting ? 'animate-modalScaleOut' : 'animate-modalScaleIn'}`} 
            style={{ right: '-12vw', marginTop: '20vh' }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full p-[6%] rounded-2xl shadow-2xl">
              <div className="absolute top-8 left-18 z-10 flex gap-2" style={{width: '100%', maxWidth: 'calc(100% - 48px)'}}>
                <Button size="sm" variant="ghost" onClick={e => { e.stopPropagation(); handleModalClose(); }} className="text-white/90 hover:bg-white/10 flex items-center gap-1 bg-white/20 backdrop-blur rounded-md px-3">
                  <span className="inline-block h-4 w-4 flex items-center justify-center">
                    &#10005;
                  </span>
                  <span className="sr-only">Close</span>
                </Button>
                <Button size="sm" variant="ghost" className="text-white/90 hover:bg-white/10 flex items-center gap-1 bg-white/20 backdrop-blur rounded-md px-3" onClick={() => setPreview((p) => (p ? { ...p, muted: !p.muted } : p))}>
                  {preview.muted ? (
                    <span className="inline-block h-4 w-4" aria-label="Muted">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M9 7H5v6h4l5 5V2l-5 5zm7.707 7.707l-1.414-1.414A7.978 7.978 0 0017 10c0-1.657-.672-3.156-1.707-4.293l1.414-1.414A9.978 9.978 0 0119 10c0 2.21-.896 4.21-2.293 5.707z" /></svg>
                    </span>
                  ) : (
                    <span className="inline-block h-4 w-4" aria-label="Unmuted">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M9 7H5v6h4l5 5V2l-5 5zm7.707 7.707l-1.414-1.414A7.978 7.978 0 0017 10c0-1.657-.672-3.156-1.707-4.293l1.414-1.414A9.978 9.978 0 0119 10c0 2.21-.896 4.21-2.293 5.707z" /><path d="M15 10a5 5 0 00-5-5v10a5 5 0 005-5z" /></svg>
                    </span>
                  )}
                </Button>
                <Button size="sm" variant="secondary" onClick={e => { e.stopPropagation(); handleSpecsToggle(); }} className="backdrop-blur bg-white/40 text-slate-900 hover:bg-white/20 rounded-md px-3">
                  {showSpecs ? 'Close specs' : 'View specs'}
                </Button>
              </div>
              
              {/* Specs tile animation */}
              {(showSpecs || specsExiting) && preview && (
                <div
                  className={`absolute left-0 top-[-20vh] w-full flex justify-center ${specsExiting ? 'animate-slideUp' : 'animate-slideDown'}`}
                  style={{ height: '20vh', zIndex: 20 }}
                >
                  <div className="flex gap-4 bg-white/90 rounded-xl shadow-lg p-4 w-full justify-between items-center">
                    <div className="flex-1 bg-gray-200 rounded-lg p-3 text-center">
                      <div className="font-bold text-xs mb-1">Processor</div>
                      <div className="text-sm">{preview.item.specs.split('·')[0].trim()}</div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-lg p-3 text-center">
                      <div className="font-bold text-xs mb-1">Graphics</div>
                      <div className="text-sm">{preview.item.specs.includes('GTX') || preview.item.specs.includes('RTX') || preview.item.specs.includes('Quadro') ? preview.item.specs.match(/(GTX|RTX|Quadro)\s?\w*/)?.[0] || 'Integrated' : 'Integrated'}</div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-lg p-3 text-center">
                      <div className="font-bold text-xs mb-1">Storage</div>
                      <div className="text-sm">{preview.item.specs.match(/\d+GB SSD|\d+TB SSD/)?.[0] || 'N/A'}</div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-lg p-3 text-center">
                      <div className="font-bold text-xs mb-1">Memory</div>
                      <div className="text-sm">{preview.item.specs.match(/\d+GB/)?.[0] || 'N/A'}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-2xl">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/laptop_video.mp4"
                  autoPlay
                  muted={preview.muted}
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
