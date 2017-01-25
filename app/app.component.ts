import { Component } from "@angular/core";

import { registerElement } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";

registerElement("pullToRefresh",() => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public myItems = [];

    constructor() {
        for (var i = 0; i < 2; i++) {
            this.myItems.push(i);
        }
    }

    public refreshMe(args: any) {
        console.log("refreshing");
        setTimeout(() => {
            this.myItems.push(2);
            (<PullToRefresh>args.object).refreshing = false;
            console.log("Done");
        }, 2000);
    }
}
