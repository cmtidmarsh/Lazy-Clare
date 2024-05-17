import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [],
  template: `
    <div id="navbar-container">
      <nav
        class=" container border border-neutral-950 bg-componentGrey rounded-md shadow-lg mx-auto px-6 py-3  "
      >
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-white hover:text-pink-300"
            >Lazy Clare</a
          >

          <div class="hidden md:flex items-center space-x-4">
            <a href="#" class="text-white hover:text-purple-300">Weekly TODO</a>
            <a href="#" class="text-white hover:text-purple-300"
              >Food Tracking</a
            >
            <a href="#" class="text-white hover:text-purple-300"
              >Quick CS Docs</a
            >
            <a
              href="https://www.twitch.tv/meichuanxiaojie"
              class="text-white hover:text-purple-300"
              >Twitch</a
            >
            <a
              href="https://mobalytics.gg/tft/team-comps"
              class="text-white hover:text-purple-300"
              >Mobalytics/TFT</a
            >
          </div>

          <div class="md:hidden flex items-center">
            <button class="text-gray-800 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export class NavbarComponent {
  constructor() {}
}
