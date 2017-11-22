import { trigger, state, animate, transition, style } from '@angular/animations';

export const shortFade =
  // trigger name for attaching this animation
  // to an element using the [@triggerName] syntax
    trigger('shortFade', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0 }),
            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);

export const longFade =
  // trigger name for attaching this animation
  // to an element using the [@triggerName] syntax
    trigger('longFade', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0 }),
            // animation and styles at end of transition
            animate('.8s', style({ opacity: 1 }))
        ]),
    ]);
