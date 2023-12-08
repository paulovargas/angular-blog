import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "";

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
      )
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    console.log("result :", result.title)

    /* if (!result) {
      this.contentTitle = result.title
    } */
  }
}
