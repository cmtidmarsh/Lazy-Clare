import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [],
  template: `
    <div
      id="main-container"
      class="container border border-neutral-950 bg-componentGrey rounded-md shadow-lg h-72 mx-auto text-white 
      "
    >
      <p class="flex justify-center items-center ">main content here</p>
    </div>
  `,
})
export class MainContentComponent {
  constructor() {}
}
