import { of, from } from "rxjs";
import { map, filter, delay, concatMap, switchMap, last } from "rxjs/operators";

setTimeout(() => {
  var newItem = document.createElement("LI");
  newItem.className = "test1";
  var textnode = document.createTextNode("Water");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);
}, 4000);

const source = of("a").pipe(
  switchMap(() => {
    return from(new Array(10)).pipe(
      concatMap(() => {
        if (document.querySelector(".test1")) {
          return of(true);
        } else {
          return of(false).pipe(delay(1000));
        }
      }),
      last()
    );
  })
);

source.subscribe(console.log);
