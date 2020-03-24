import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-hi",
  templateUrl: "./hi.component.html",
  styleUrls: ["./hi.component.css"]
})
export class HiComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  @Input() text: string;
  @Output() clickBtn: EventEmitter<any> = new EventEmitter<any>();
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked ran");
  }
  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked ran");
  }
  ngAfterContentInit(): void {
    console.log("Child AfterContentInit ran");
  }
  ngAfterViewInit(): void {
    console.log("Child AfterViewInit ran");
  }
  ngOnDestroy(): void {
    console.log("Child OnDestroy ran");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Child OnChanges ran", { changes });
  }
  ngOnInit(): void {
    console.log("Child OnInit ran");
  }
  textColor = "tomato";
  withBorder = true;
  onButtonClick() {
    this.text = "Changed From Hi Component";
    this.clickBtn.emit(this.text);
  }
  onTextMouseOver() {
    this.textColor = "green";
  }
  onTextMouseOut() {
    this.textColor = "tomato";
  }
  constructor() {}
}
