import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
/**Using an attribute selecteor */
selector: '[appDropdown]'
})

export class DropdownDirective {
    /** CSS class is open */
    @HostBinding('class.open') isOpen = false;  
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        /**result will be true */
    }
}