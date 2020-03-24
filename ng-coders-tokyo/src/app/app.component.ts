import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log("Parent AfterContentChecked ran");
  }
  ngAfterViewChecked(): void {
    console.log("Parent AfterViewChecked ran");
  }
  ngAfterContentInit(): void {
    console.log("Parent AfterContentInit ran");
  }
  ngAfterViewInit(): void {
    console.log("Parent AfterViewInit ran");
  }
  ngOnDestroy(): void {
    console.log("Parent OnDestroy ran");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Parent OnChanges ran", { changes });
  }
  ngOnInit(): void {
    console.log("Parent OnInit ran");
  }
  title = "ng-coders-tokyo";
  sendTextToChild() {
    this.title = "Charge From Parent!";
  }
  changedFromHiComponent(event) {
    this.title = event;
  }
}
