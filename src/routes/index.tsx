import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import portImg from "@/assets/port.jpg";
import solarImg from "@/assets/solar.jpg";
import hotelImg from "@/assets/hotel.jpg";
import qualityImg from "@/assets/quality.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "عالم الإبداع | الاستيراد من الصين والطاقة الشمسية وتجهيز المشاريع" },
      { name: "description", content: "خبرة 20 عاماً في الاستيراد من الصين، حلول الطاقة الشمسية، تجهيز الفنادق والمنازل، والشحن الدولي. فروعنا: الصين، السودان، عُمان، وقريباً السعودية." },
      { property: "og:title", content: "عالم الإبداع | بوابتك الآمنة من الصين إلى الخليج" },
      { property: "og:description", content: "نختصر المسافات.. لنضع الصين بين يديك. 20 عاماً من الثقة." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  { icon: "🚢", title: "الاستيراد من الصين للعالم", desc: "جميع المنتجات بجودة مضمونة وأسعار مباشرة من المصنع." },
  { icon: "🌍", title: "التصدير إلى الأسواق العالمية", desc: "نوصل منتجاتك من الصين إلى أي وجهة حول العالم." },
  { icon: "✈️", title: "الشحن البحري والجوي", desc: "حاويات كاملة وجزئية (FCL / LCL) وشحن جوي سريع." },
  { icon: "📋", title: "التخليص الجمركي", desc: "استخراج كافة الشهادات والوثائق وإنهاء الإجراءات الجمركية." },
  { icon: "🛡️", title: "فحص الجودة من الموردين", desc: "فريقنا في الصين يتأكد من جودة بضاعتك قبل الشحن." },
  { icon: "🔗", title: "إدارة سلسلة التوريد", desc: "إدارة متكاملة من المصدر حتى بابك — من الألف إلى الياء." },
  { icon: "☀️", title: "منظومات الطاقة الشمسية", desc: "توريد وتركيب حلول الطاقة للمصانع والمنازل بكفاءة عالية." },
  { icon: "🏨", title: "تجهيز الفنادق والمنازل", desc: "أثاث، ديكور، سيراميك ومستلزمات فاخرة بمعايير دولية." },
  { icon: "📊", title: "دراسات جدوى متكاملة", desc: "تحليل عميق لخطوط الإنتاج وفرص الاستثمار قبل أي خطوة." },
];

const branches = [
  { city: "الصين", role: "مركز الإمداد الرئيسي", phone: "+86 13600495904", tag: "واتساب" },
  { city: "الصين", role: "خط مباشر", phone: "+86 18000872025", tag: "واتساب" },
  { city: "السودان", role: "فرع رئيسي", phone: "+249 926122303", tag: "مكتب" },
  { city: "سلطنة عُمان", role: "مكتب إقليمي", phone: "+968 71130149", tag: "مكتب" },
];

const values = [
  { icon: "🛡️", t: "مصداقية وجودة عالية" },
  { icon: "⏱️", t: "التزام بالمواعيد" },
  { icon: "💰", t: "أسعار تنافسية" },
  { icon: "🤝", t: "شراكة طويلة الأمد" },
];

const globeCities = [
  { label: "Shanghai", name: "شنغهاي", country: "الصين", lat: 31.2304, lng: 121.4737, note: "مركز التوريد والتصدير ومتابعة المصانع." },
  { label: "Guangzhou", name: "غوانزو", country: "الصين", lat: 23.1291, lng: 113.2644, note: "بحث الموردين، فحص الجودة، وتجميع الشحنات." },
  { label: "Jeddah", name: "جدة", country: "السعودية", lat: 21.4858, lng: 39.1925, note: "استقبال الشحنات وخدمة العملاء في السوق السعودي." },
  { label: "Riyadh", name: "الرياض", country: "السعودية", lat: 24.7136, lng: 46.6753, note: "مشاريع تجهيز وتوريد وحلول أعمال." },
  { label: "Muscat", name: "مسقط", country: "عُمان", lat: 23.588, lng: 58.3829, note: "مكتب إقليمي وخدمات تنسيق لوجستي." },
  { label: "Khartoum", name: "الخرطوم", country: "السودان", lat: 15.5007, lng: 32.5599, note: "فرع رئيسي وخدمات تجارية وتشغيلية." },
  { label: "Nairobi", name: "نيروبي", country: "كينيا", lat: -1.2921, lng: 36.8219, note: "شحنات منفذة وفرص توسع في شرق أفريقيا." },
  { label: "Tunis", name: "تونس", country: "تونس", lat: 36.8065, lng: 10.1815, note: "فرص تعاون وتوريد للأسواق المغاربية." },
  { label: "Lagos", name: "لاغوس", country: "نيجيريا", lat: 6.5244, lng: 3.3792, note: "بوابة غرب أفريقيا للشحن والتجارة." },
];

const globeRoutes = [
  { startLat: 31.2304, startLng: 121.4737, endLat: 21.4858, endLng: 39.1925 },
  { startLat: 23.1291, startLng: 113.2644, endLat: 24.7136, endLng: 46.6753 },
  { startLat: 23.1291, startLng: 113.2644, endLat: 23.588, endLng: 58.3829 },
  { startLat: 31.2304, startLng: 121.4737, endLat: 15.5007, endLng: 32.5599 },
  { startLat: 23.1291, startLng: 113.2644, endLat: -1.2921, endLng: 36.8219 },
  { startLat: 23.1291, startLng: 113.2644, endLat: 36.8065, endLng: 10.1815 },
  { startLat: 23.1291, startLng: 113.2644, endLat: 6.5244, endLng: 3.3792 },
];


function HeroGlobe() {
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let globeInstance: any;
    let cancelled = false;

    async function initGlobe() {
      if (!globeRef.current) return;

      const GlobeModule = await import("globe.gl");
      if (cancelled || !globeRef.current) return;

      const Globe = GlobeModule.default;

 globeInstance = new Globe(globeRef.current)
  .width(620)
  .height(620)
  .backgroundColor("rgba(0,0,0,0)")
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")

  .pointsData(globeCities)
  .pointLat((d: any) => d.lat)
  .pointLng((d: any) => d.lng)
  .pointAltitude(0.035)
  .pointRadius(0.35)
  .pointColor(() => "#e7b74a")
  .pointLabel((d: any) => `
    <div style="direction:rtl;text-align:right;min-width:190px;background:rgba(4,10,24,.94);border:1px solid rgba(231,183,74,.55);border-radius:14px;padding:12px 14px;color:white;font-family:Cairo,Tajawal,sans-serif;box-shadow:0 20px 50px rgba(0,0,0,.35);">
      <div style="font-size:15px;font-weight:800;color:#e7b74a;margin-bottom:4px;">${d.name}</div>
      <div style="font-size:12px;color:rgba(255,255,255,.75);margin-bottom:8px;">${d.country}</div>
      <div style="font-size:12px;line-height:1.7;color:rgba(255,255,255,.9);">${d.note || ""}</div>
    </div>
  `)

  .labelsData(globeCities)
  .labelLat((d: any) => d.lat)
  .labelLng((d: any) => d.lng)
  .labelText((d: any) => d.label)
  .labelSize(() => 1.2)
  .labelDotRadius(() => 0.3)
  .labelColor(() => "#e7b74a")

  .arcsData(globeRoutes)
  .arcStartLat((d: any) => d.startLat)
  .arcStartLng((d: any) => d.startLng)
  .arcEndLat((d: any) => d.endLat)
  .arcEndLng((d: any) => d.endLng)
  .arcColor(() => ["rgba(231,183,74,0.15)", "rgba(231,183,74,0.95)"])
  .arcAltitude(0.22)
  .arcStroke(0.85)
  .arcDashLength(0.5)
  .arcDashGap(1.2)
  .arcDashAnimateTime(4500);

      const controls = globeInstance.controls();

controls.autoRotate = true;
controls.autoRotateSpeed = 0.25;
controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = true;
controls.rotateSpeed = 0.55;
controls.enableDamping = true;
controls.dampingFactor = 0.08;

      globeInstance.pointOfView({ lat: 24, lng: 72, altitude: 1.9 }, 0);
    }

    initGlobe();

    return () => {
      cancelled = true;
      if (globeRef.current) globeRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="absolute left-0 top-16 bottom-0 w-[52%] z-20 pointer-events-auto">
      <div className="relative h-full flex items-center justify-center">
        <div className="hero-real-globe">
          <div ref={globeRef} />
        </div>

        <div className="absolute bottom-16 left-24 right-20 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-5">
          <p className="text-center text-sm text-white/80 mb-4">ننتشر لنخدمك</p>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              ["20+", "دولة"],
              ["100+", "مدينة شحن"],
              ["500+", "عميل"],
              ["10K+", "شحنة"],
            ].map(([n, t]) => (
              <div key={t}>
                <div className="text-2xl font-black text-gold">{n}</div>
                <div className="text-xs text-white/60">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function Index() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", service: "", details: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-md grid place-items-center font-black text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>ع</span>
            <span className="font-extrabold tracking-tight">عالم الإبداع</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-gold transition">خدماتنا</a></li>
            <li><a href="#map" className="hover:text-gold transition">فروعنا</a></li>
            <li><a href="#about" className="hover:text-gold transition">من نحن</a></li>
            <li><a href="#contact" className="hover:text-gold transition">تواصل</a></li>
          </ul>
          <a href="#quote" className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-md text-primary-foreground shadow-gold" style={{ background: "var(--gradient-gold)" }}>
            طلب عرض سعر
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImg} alt="عالم الإبداع - الاستيراد من الصين إلى الخليج" width={1920} height={1080} className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <HeroGlobe />



        {/* HERO CONTENT */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              20 عاماً من الخبرة الدولية
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-white">
              نختصر المسافات..
              <br />
              <span className="gradient-gold-text">لنضع الصين</span>
              <br />
              بين يديك.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              حلول لوجستية متكاملة من الصين للعالم — للاستيراد والتصدير، الشحن البحري والجوي (كامل وجزئي)، وتجهيز المشاريع الكبرى بمعايير دولية.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-primary-foreground font-bold shadow-gold transition hover:translate-y-[-2px]" style={{ background: "var(--gradient-gold)" }}>
                ابدأ مشروعك الآن ←
              </a>
              <a href="#map" className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-white/20 bg-white/5 backdrop-blur-sm font-bold text-white hover:bg-white/10 transition">
                استكشف خريطة أعمالنا
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "+20", v: "عاماً خبرة" },
                { k: "4", v: "فروع دولية" },
                { k: "100%", v: "جودة مضمونة" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl font-black gradient-gold-text">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2 animate-float-slow">
          <span>اكتشف المزيد</span>
          <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-sm font-bold mb-3">ماذا نقدم لك</p>
            <h2 className="text-4xl md:text-5xl font-black">حلول متكاملة <span className="gradient-gold-text">من الألف إلى الياء</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">وفّر وقتك وجهدك — نحن نتولى كل شيء، بأسعار تفوق الخيال.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={s.title} className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(600px circle at 0% 0%, oklch(0.80 0.13 85 / 0.08), transparent 40%)" }} />
                <div className="relative">
                  <span className="text-4xl block mb-5">{s.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-xs font-bold text-gold tracking-widest">0{i + 1}.</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="relative py-28 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {[
            { img: portImg, title: "إمداد من الصين", txt: "أكبر الموانئ بين يديك" },
            { img: solarImg, title: "الطاقة الشمسية", txt: "حلول متجددة بكفاءة عالية" },
            { img: hotelImg, title: "تجهيز فاخر", txt: "للفنادق والمشاريع الكبرى" },
          ].map((c) => (
            <div key={c.title} className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={c.img} alt={c.title} loading="lazy" width={1280} height={800} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-[1500ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs text-gold font-bold mb-1">{c.txt}</p>
                <h3 className="text-2xl font-black">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP / BRANCHES */}
      <section id="map" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-sm font-bold mb-3">شبكتنا الدولية</p>
            <h2 className="text-4xl md:text-5xl font-black">خريطة <span className="gradient-gold-text">أعمالنا</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">من الصين كمركز إمداد، إلى السودان وعُمان، وقريباً السعودية.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stylized map */}
            <div className="relative aspect-[4/3] rounded-2xl bg-card border border-white/5 p-8 overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.80 0.13 85)" stopOpacity="0" />
                    <stop offset="50%" stopColor="oklch(0.80 0.13 85)" stopOpacity="1" />
                    <stop offset="100%" stopColor="oklch(0.80 0.13 85)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* dots = continents abstract */}
                {Array.from({ length: 120 }).map((_, i) => {
                  const x = (i % 20) * 22 + 10;
                  const y = Math.floor(i / 20) * 50 + 20;
                  return <circle key={i} cx={x} cy={y} r="1.2" fill="oklch(1 0 0 / 0.15)" />;
                })}
                {/* arcs */}
                <path d="M 320 100 Q 220 20 120 130" stroke="url(#line)" strokeWidth="2" fill="none" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M 320 100 Q 260 60 200 180" stroke="url(#line)" strokeWidth="2" fill="none" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M 320 100 Q 290 140 250 220" stroke="url(#line)" strokeWidth="2" fill="none" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="5s" repeatCount="indefinite" />
                </path>
                {/* nodes */}
                {[
                  { x: 320, y: 100, l: "الصين" },
                  { x: 120, y: 130, l: "السودان" },
                  { x: 200, y: 180, l: "عُمان" },
                  { x: 250, y: 220, l: "السعودية" },
                ].map((n) => (
                  <g key={n.l}>
                    <circle cx={n.x} cy={n.y} r="10" fill="oklch(0.80 0.13 85 / 0.15)">
                      <animate attributeName="r" values="10;16;10" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={n.x} cy={n.y} r="4" fill="oklch(0.85 0.14 88)" />
                    <text x={n.x} y={n.y - 14} textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{n.l}</text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="space-y-4">
              {branches.map((b) => (
                <div key={b.city} className="flex items-center justify-between p-5 rounded-xl bg-card border border-white/5 hover:border-gold/30 transition">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{b.city}</h3>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-gold/15 text-gold font-bold">{b.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{b.role}</p>
                  </div>
                  <a href={`tel:${b.phone.replace(/\s/g, "")}`} dir="ltr" className="text-sm font-mono text-gold hover:underline">{b.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section id="about" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={qualityImg} alt="فحص جودة في المصنع" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-elegant" />
            <div className="absolute -bottom-8 -left-8 bg-card border border-gold/30 rounded-2xl p-6 shadow-gold max-w-[220px]">
              <p className="text-5xl font-black gradient-gold-text">20+</p>
              <p className="text-sm text-muted-foreground mt-1">عاماً نحوّل ثقة عملائنا إلى مشاريع ناجحة.</p>
            </div>
          </div>
          <div>
            <p className="text-gold text-sm font-bold mb-3">من نحن</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">بوابتك <span className="gradient-gold-text">الآمنة</span> في الصين.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              في <strong className="text-white">عالم الإبداع</strong> نختصر لك رحلة الاستيراد بأكملها — من اختيار المصنع، إلى فحص الجودة، إلى الشحن الدولي والتخليص الجمركي. لا داعي للسفر، ولا للقلق. نحن هناك من أجلك.
            </p>
            <ul className="mt-8 space-y-3">
              {["شبكة موردين موثوقين منذ عام 2005", "فريق فحص جودة ميداني في الصين", "أسعار مصنع مباشرة بدون وسطاء", "خدمة شخصية بلغتك من البداية للنهاية"].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full grid place-items-center text-primary-foreground text-xs font-black" style={{ background: "var(--gradient-gold)" }}>✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold mb-3">طلب عرض سعر</p>
            <h2 className="text-4xl md:text-5xl font-black">أخبرنا عن <span className="gradient-gold-text">مشروعك</span></h2>
          </div>

          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-10">
            {/* progress */}
            <div className="flex items-center gap-3 mb-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-gold" : "bg-white/10"}`} />
              ))}
            </div>

            {step === 0 && (
              <div className="space-y-4 animate-fade-up">
                <label className="block">
                  <span className="text-sm font-bold">الاسم الكامل</span>
                  <input className="mt-2 w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="مثال: محمد أحمد" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">رقم الجوال / واتساب</span>
                  <input dir="ltr" className="mt-2 w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none text-right" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+966 ..." />
                </label>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-3 animate-fade-up">
                <span className="text-sm font-bold">الخدمة المطلوبة</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["استيراد منتجات", "طاقة شمسية", "تجهيز فندق/منزل", "دراسة جدوى", "شحن دولي", "أخرى"].map((s) => (
                    <button key={s} type="button" onClick={() => setForm({ ...form, service: s })} className={`text-right px-4 py-3 rounded-lg border transition ${form.service === s ? "border-gold bg-gold/10 text-gold" : "border-white/10 hover:border-white/30"}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4 animate-fade-up">
                <label className="block">
                  <span className="text-sm font-bold">تفاصيل المشروع</span>
                  <textarea rows={5} className="mt-2 w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none resize-none" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="اكتب نوع المنتج، الكمية، الميزانية التقريبية..." />
                </label>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button type="button" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))} className="px-5 py-3 rounded-lg border border-white/10 disabled:opacity-30 hover:border-white/30 transition">السابق</button>
              {step < 2 ? (
                <button type="button" onClick={() => setStep((s) => s + 1)} className="px-7 py-3 rounded-lg font-bold text-primary-foreground shadow-gold" style={{ background: "var(--gradient-gold)" }}>التالي ←</button>
              ) : (
                <a
                  href={`https://wa.me/8618000872025?text=${encodeURIComponent(`السلام عليكم، أنا ${form.name} (${form.phone}). أرغب في: ${form.service}.\nالتفاصيل: ${form.details}`)}`}
                  target="_blank" rel="noreferrer"
                  className="px-7 py-3 rounded-lg font-bold text-primary-foreground shadow-gold" style={{ background: "var(--gradient-gold)" }}
                >
                  إرسال عبر واتساب
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      {/* VALUES STRIP */}
      <section className="border-y border-white/5 bg-card/40">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.t} className="flex items-center gap-3">
              <span className="text-2xl">{v.icon}</span>
              <span className="font-bold text-sm md:text-base">{v.t}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="relative border-t border-white/5 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-md grid place-items-center font-black text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>ع</span>
              <span className="font-extrabold text-lg">عالم الإبداع</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              للاستيراد والتصدير، الطاقة المتجددة، وتجهيز المشاريع الكبرى. نختصر المسافات لنضع الصين بين يديك.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">للتواصل المباشر</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">الصين — واتساب</span><a dir="ltr" href="https://wa.me/8613600495904" className="text-gold font-mono">+86 136 0049 5904</a></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">الصين — واتساب</span><a dir="ltr" href="https://wa.me/8618000872025" className="text-gold font-mono">+86 180 0087 2025</a></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">السودان</span><a dir="ltr" href="tel:+249926122303" className="text-gold font-mono">+249 926122303</a></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">عُمان</span><a dir="ltr" href="tel:+96871130149" className="text-gold font-mono">+968 71130149</a></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">البريد</span><a dir="ltr" href="mailto:amu2026n@gmail.com" className="text-gold font-mono text-xs">amu2026n@gmail.com</a></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">QQ Mail</span><a dir="ltr" href="mailto:2261579826@qq.com" className="text-gold font-mono text-xs">2261579826@qq.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">الوسوم</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {["#عالم_الإبداع", "#استيراد_من_الصين", "#تجارة", "#استثمار", "#طاقة_شمسية", "#تجهيز_فنادق", "#شحن_دولي"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} عالم الإبداع — جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
