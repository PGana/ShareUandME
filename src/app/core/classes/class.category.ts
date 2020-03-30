import { AfterViewInit } from '@angular/core';

export class ClassCategory implements AfterViewInit {
    name: string;
    value: number;
    category: number;
    constructor(res: any) {
        this.name = res.name;
        this.value = res.value;
        this.category = res.category || 'NA';
    }
    ngAfterViewInit() {

    }
}
