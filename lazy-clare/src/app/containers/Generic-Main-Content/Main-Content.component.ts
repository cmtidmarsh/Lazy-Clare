import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [],
  template: `
    <div
      id="main-container"
      class="container border border-neutral-950 bg-componentGrey rounded-md shadow-lg h-[1000px]
       mx-auto text-white 
      "
    >
      <p class="flex justify-center items-center ">MAIN CONTENT HERE</p>
    </div>
  `,
})
export class MainContentComponent {
  constructor() {}
}
