import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  standalone: true,

  template: `
    <div id="navbar-container">
      <nav
        class=" container border border-neutral-950 bg-componentGrey rounded-md shadow-lg mx-auto px-6 py-3  "
      >
        <div id="navContent" class="flex justify-between items-center ">
          <div class="flex gap-4">
            <a
              href="#"
              class=" border border-neutral-500 bg-gray-700 rounded-lg shadow-lg text-2xl font-bold text-white hover:text-pink-30 px-2 py-2"
              >Lazy Clare</a
            >
            <div class="flex items-end text-white text-sm">INPUT HERE</div>
          </div>
          <div
            id="navLinksContainer"
            class="hidden md:flex items-center space-x-4"
          >
            <!-- <button
              id="dropDownBtn"
              class="border border-white bg-gray-700 rounded-lg shadow-lg "
            >
              <div class="text-white hover:text-purple-300 mx-2">
                Drop down 1
              </div>
            </button> -->

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
