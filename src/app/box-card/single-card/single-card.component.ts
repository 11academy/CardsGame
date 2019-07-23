import { Component, OnInit, Input } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-single-card",
	templateUrl: "./single-card.component.html",
	styleUrls: ["./single-card.component.css"]
})
export class SingleCardComponent implements OnInit {
	@Input() num

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		
		this.activatedRoute.params.subscribe(p => {
			this.num = p["num"]
		})
	}
}
