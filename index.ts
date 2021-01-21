import { of, from } from "rxjs";
import { map, filter, delay, concatMap, switchMap, last } from "rxjs/operators";

setTimeout(() => {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);
}, 4000);
const source = of("a").pipe(
  switchMap(() => {
    return from(new Array(1, 2, 3, 4, 5)).pipe(
      concatMap((i, index) => {
        if (i === 3) {
        }
        return of(i).pipe(delay(1000));
      }),
      last(),
      switchMap(() => of(10))
    );
  })
);

source.subscribe(console.log);
