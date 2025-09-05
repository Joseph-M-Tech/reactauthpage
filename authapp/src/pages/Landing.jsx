import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  Sparkles,
  BarChart3,
  Globe,
  Truck,
  CheckCircle2,
  Star,
  ArrowRight,
  PlayCircle,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Shopify-like modern landing page
// - TailwindCSS styling
// - framer-motion for subtle animation
// - shadcn/ui components for consistent UI
// - Lucide icons
// Single-file, ready to drop into a React project

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="border border-gray-200/70 backdrop-blur-sm shadow-sm rounded-2xl">
    <CardHeader className="space-y-2">
      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100">
        <Icon className="size-6 text-emerald-700" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-gray-600 leading-relaxed">{desc}</CardContent>
  </Card>
);

const Testimonial = ({ name, role, quote }: { name: string; role: string; quote: string }) => (
  <Card className="rounded-2xl shadow-sm border border-gray-200/70">
    <CardContent className="pt-6">
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-500">
        <span className="font-medium text-gray-900">{name}</span> • {role}
      </div>
    </CardContent>
  </Card>
);

const Tier = ({
  name,
  price,
  tagline,
  highlights,
  popular,
}: {
  name: string;
  price: string;
  tagline: string;
  highlights: string[];
  popular?: boolean;
}) => (
  <Card
    className={`rounded-2xl border ${
      popular ? "border-emerald-500 shadow-lg" : "border-gray-200/70 shadow-sm"
    }`}
  >
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl">{name}</CardTitle>
        {popular && <Badge className="bg-emerald-600">Most popular</Badge>}
      </div>
      <div className="mt-2">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className="text-gray-500 ml-2">/mo</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{tagline}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 className="mt-0.5 size-4" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6">Start free trial</Button>
    </CardContent>
  </Card>
);

export default function ShopifyStyleLandingPage() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Top Announcement */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center text-sm py-2">
        <span className="font-medium">Introducing FlowCommerce 2.0</span> — Launch your store in minutes. <span className="underline underline-offset-4 ml-1">Start free</span>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-emerald-600 grid place-items-center">
                <Sparkles className="size-5 text-white" />
              </div>
              <span className="font-semibold">FlowCommerce</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="hover:text-emerald-700" href="#features">Features</a>
              <a className="hover:text-emerald-700" href="#templates">Templates</a>
              <a className="hover:text-emerald-700" href="#pricing">Pricing</a>
              <a className="hover:text-emerald-700" href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
              <Button className="inline-flex items-center gap-2">
                Start free trial <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg className="absolute -top-40 -right-40 w-[700px] opacity-30" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#blur)">
              <circle cx="300" cy="300" r="200" fill="#34d399" />
            </g>
            <defs>
              <filter id="blur" x="-200" y="-200" width="1000" height="1000" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="120" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full mb-4">
                <span className="font-medium">All‑in‑one commerce</span>
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Build, run, and grow your online store
                <span className="text-emerald-600"> without the busywork</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Launch a beautiful storefront, accept payments, and fulfill orders from one simple dashboard. No code required.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="inline-flex items-center gap-2">
                  Start free trial <Rocket className="size-5" />
                </Button>
                <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                  Watch demo <PlayCircle className="size-5" />
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1"><ShieldCheck className="size-4" /> PCI-compliant</div>
                <div className="flex items-center gap-1"><Truck className="size-4" /> Global shipping</div>
                <div className="flex items-center gap-1"><Globe className="size-4" /> 175+ currencies</div>
              </div>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-5">
              <div className="relative rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-gray-50 to-white p-4">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-red-400" />
                    <div className="size-3 rounded-full bg-yellow-400" />
                    <div className="size-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-6 grid gap-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Today</p>
                      <p className="text-2xl font-semibold">$12,984</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200">+18% MoM</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 border-gray-200 shadow-sm">
                      <p className="text-xs text-gray-500">Orders</p>
                      <p className="text-xl font-semibold">823</p>
                    </Card>
                    <Card className="p-4 border-gray-200 shadow-sm">
                      <p className="text-xs text-gray-500">AOV</p>
                      <p className="text-xl font-semibold">$56.91</p>
                    </Card>
                    <Card className="p-4 border-gray-200 shadow-sm">
                      <p className="text-xs text-gray-500">Conversion</p>
                      <p className="text-xl font-semibold">3.4%</p>
                    </Card>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full inline-flex gap-2"><ShoppingBag className="size-4" /> Products</Button>
                    <Button className="w-full inline-flex gap-2"><CreditCard className="size-4" /> Payments</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-6">Trusted by modern brands</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
            {["Nova", "Aurora", "Nimbus", "Vertex", "Orbit"].map((logo) => (
              <div key={logo} className="text-center font-semibold tracking-wider text-gray-400">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to sell online</h2>
            <p className="mt-3 text-gray-600">From storefront to checkout to fulfillment—manage your entire business in one place.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={Sparkles} title="Beautiful storefronts" desc="Choose from premium templates and customize with drag‑and‑drop sections." />
            <Feature icon={CreditCard} title="Global payments" desc="Accept cards, digital wallets, and local methods in 175+ currencies." />
            <Feature icon={BarChart3} title="Analytics that matter" desc="Track revenue, cohorts, conversion, and AOV in real time." />
            <Feature icon={Truck} title="Shipping made simple" desc="Live rates, label printing, and returns in a click." />
            <Feature icon={Globe} title="Sell everywhere" desc="Link your store to social, marketplaces, and POS in minutes." />
            <Feature icon={ShieldCheck} title="Bank‑grade security" desc="Fraud protection and PCI compliance out of the box." />
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section id="templates" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pick a template. Make it yours.</h2>
            <p className="mt-3 text-gray-600">Start with designer‑made templates optimized for speed, SEO, and conversion.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Studio", "Minimal", "Bold"].map((name) => (
              <Card key={name} className="group overflow-hidden rounded-2xl border border-gray-200/70 shadow-sm">
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-white grid place-items-center text-gray-400">
                  <span className="text-xl font-semibold">{name}</span>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{name} Template</p>
                    <Button variant="outline" className="gap-2">Preview <ArrowRight className="size-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by growing brands</h2>
            <p className="mt-3 text-gray-600">Stories from founders who switched and shipped faster than ever.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Testimonial name="Amara N." role="Founder, Kifaru Wear" quote="We launched in a weekend and hit our first 1,000 orders in 30 days." />
            <Testimonial name="Leo M." role="CEO, Drip Coffee Co." quote="Checkout is blazing fast and international payments just work." />
            <Testimonial name="Sara K." role="CMO, Glow Skincare" quote="The analytics helped us lift conversion by 22% without more ad spend." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-gray-600">Start free. Upgrade when you grow. No hidden fees.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Tier
              name="Starter"
              price="$9"
              tagline="Everything to launch your first store"
              highlights={["No‑code templates", "1 staff account", "Basic analytics", "Standard checkout"]}
            />
            <Tier
              name="Growth"
              price="$29"
              tagline="Built for scaling brands"
              popular
              highlights={["Abandoned cart recovery", "3 staff accounts", "Advanced analytics", "Discount engine", "Multi‑currency"]}
            />
            <Tier
              name="Pro"
              price="$79"
              tagline="For high‑volume commerce"
              highlights={["Custom segments", "10 staff accounts", "Priority support", "B2B features", "API access"]}
            />
          </div>
          <p className="text-xs text-gray-500 mt-6">All plans include secure payments, SSL, fraud protection, and 24/7 support.</p>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Be the first to get new templates and tips</h3>
          <p className="mt-3 text-gray-600">Join 50,000+ founders growing with FlowCommerce.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Input type="email" placeholder="Enter your email" className="h-11 max-w-sm" />
            <Button type="submit" className="h-11 inline-flex items-center gap-2">
              Subscribe <Mail className="size-4" />
            </Button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By subscribing you agree to our Terms & Privacy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Frequently asked questions</h3>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Do I need to code to use FlowCommerce?",
                a: "No. Our drag‑and‑drop editor lets you customize sections, products, and pages without writing code.",
              },
              {
                q: "Can I use my own domain?",
                a: "Yes, connect an existing domain or purchase a new one in minutes from your dashboard.",
              },
              {
                q: "Which payment methods are supported?",
                a: "Cards, wallets, local payments, and BNPL options in 175+ currencies.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, start free and upgrade anytime. No credit card required to begin.",
              },
            ].map(({ q, a }) => (
              <Card key={q} className="rounded-2xl border border-gray-200/70 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{q}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="size-8 rounded-lg bg-emerald-600 grid place-items-center">
                  <Sparkles className="size-5 text-white" />
                </div>
                <span className="font-semibold">FlowCommerce</span>
              </div>
              <p className="text-gray-600">The simplest way to start and scale your online store.</p>
            </div>
            <div>
              <p className="font-medium mb-2">Product</p>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Company</p>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Resources</p>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Status</li>
                <li>Developers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} FlowCommerce Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-gray-700" href="#">Terms</a>
              <a className="hover:text-gray-700" href="#">Privacy</a>
              <a className="hover:text-gray-700" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
