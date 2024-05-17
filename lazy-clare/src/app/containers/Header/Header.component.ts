import { Component } from '@angular/core';

@Component({
  selector: 'header-container',
  standalone: true,
  imports: [],
  template: `
    <div
      id="header-container"
      class="container border border-neutral-950 bg-componentGrey rounded-md shadow-lg h-72 mx-auto text-white 
      "
    >
      <p class="flex justify-center items-center ">pictures here</p>
    </div>
  `,
})
export class HeaderComponent {
  constructor() {}
}
