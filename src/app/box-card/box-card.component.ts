import { Component, OnInit, Input, Output } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-box-card",
	templateUrl: "./box-card.component.html",
	styleUrls: ["./box-card.component.css"]
})
export class BoxCardComponent implements OnInit {
	card_number = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"]

	num: number;
	
	getCurrentCard(num) {
		this.num = num
		console.log(this.num)
	}

	constructor() {}

	ngOnInit() {
		this.card_number = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
	
		
	}
}
