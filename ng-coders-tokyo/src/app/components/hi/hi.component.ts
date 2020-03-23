import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hi",
  templateUrl: "./hi.component.html",
  styleUrls: ["./hi.component.css"]
})
export class HiComponent implements OnInit {
  textColor = "tomato";
  withBorder = true;
  onButtonClick() {
    this.withBorder = !this.withBorder;
  }
  onTextMouseOver() {
    this.textColor = "green";
  }
  onTextMouseOut() {
    this.textColor = "tomato";
  }
  constructor() {}

  ngOnInit(): void {}
}
