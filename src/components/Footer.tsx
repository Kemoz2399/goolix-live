import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Goolix</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for live football scores, match analysis, 
              and team statistics. Stay updated with the beautiful game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Live Matches
              </Link>
              <Link to="/league/premier-league" className="block text-gray-400 hover:text-white transition-colors">
                Premier League
              </Link>
              <Link to="/league/champions-league" className="block text-gray-400 hover:text-white transition-colors">
                Champions League
              </Link>
              <Link to="/news" className="block text-gray-400 hover:text-white transition-colors">
                News
              </Link>
            </div>
          </div>

          {/* Leagues */}
          <div>
            <h3 className="font-semibold mb-4">Popular Leagues</h3>
            <div className="space-y-2">
              <Link to="/league/la-liga" className="block text-gray-400 hover:text-white transition-colors">
                La Liga
              </Link>
              <Link to="/league/serie-a" className="block text-gray-400 hover:text-white transition-colors">
                Serie A
              </Link>
              <Link to="/league/bundesliga" className="block text-gray-400 hover:text-white transition-colors">
                Bundesliga
              </Link>
              <Link to="/league/ligue-1" className="block text-gray-400 hover:text-white transition-colors">
                Ligue 1
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Goolix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}