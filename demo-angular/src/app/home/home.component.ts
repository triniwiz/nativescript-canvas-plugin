import { Component, OnInit } from "@angular/core";
import { particles } from '~/app/home/particles';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    ready(event){
        particles(event.object);
    }
}
