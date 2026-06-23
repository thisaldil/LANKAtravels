import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Safety information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our COVID-19 Response
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Supporting people with disabilities
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report a neighborhood concern
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Hosting</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Try hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LANKAtravelsCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore hosting resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Visit our community forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to host responsibly
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">LANKAtravels</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Learn about new features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Letter from our founders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Destinations in Sri Lanka
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Southern Coast
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cultural Triangle
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hill Country
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  East Coast
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Northern Province
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-600">
            <span>© 2026 LANKAtravels, Inc.</span>
            <span className="hidden md:inline">·</span>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium text-gray-900">
              <button className="flex items-center gap-2 hover:underline">
                <Globe size={16} />
                <span>English (US)</span>
              </button>
              <button className="hover:underline">$ USD</button>
            </div>
            <div className="flex items-center gap-4 text-gray-900">
              <a href="#" className="hover:text-gray-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}